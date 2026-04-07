import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api';

const MovingBooking = () => {
  const navigate = useNavigate();
  const [weight, setWeight] = useState(450);
  const [loading, setLoading] = useState(false);
  const [selectedItems, setSelectedItems] = useState(['Bois', 'Plastique']);
  const [bookingDate, setBookingDate] = useState(new Date().toISOString().split('T')[0]);
  const [serviceId, setServiceId] = useState(null);
  const [locations, setLocations] = useState({
    departure: '',
    destination: '',
    departure_wilaya_id: '',
    departure_commune_id: '',
    destination_wilaya_id: '',
    destination_commune_id: ''
  });
  const [wilayas, setWilayas] = useState([]);
  const [departureCommunes, setDepartureCommunes] = useState([]);
  const [destinationCommunes, setDestinationCommunes] = useState([]);
  const [viewDate, setViewDate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesList, wilayasList] = await Promise.all([
          apiService.getServices(),
          apiService.getWilayas()
        ]);
        
        setWilayas(wilayasList);
        
        const demoService = servicesList.find(s => s.title.toLowerCase().includes('déménagement')) || servicesList[0];
        if (demoService) setServiceId(demoService.id);

        // Pre-fill departure if logged in
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.wilaya_id) {
          setLocations(prev => ({
            ...prev,
            departure_wilaya_id: user.wilaya_id,
            departure_commune_id: user.commune_id || '',
            departure: user.address || ''
          }));
          
          const userCommunes = await apiService.getCommunes(user.wilaya_id);
          setDepartureCommunes(userCommunes);
        }
      } catch (err) {
        console.error('Error fetching initial data:', err);
      }
    };
    fetchData();
  }, []);

  const handleWilayaChange = async (type, wilayaId) => {
    const isDeparture = type === 'departure';
    setLocations(prev => ({
      ...prev,
      [`${type}_wilaya_id`]: wilayaId,
      [`${type}_commune_id`]: ''
    }));
    
    if (isDeparture) setDepartureCommunes([]);
    else setDestinationCommunes([]);

    if (wilayaId) {
      try {
        const data = await apiService.getCommunes(wilayaId);
        if (isDeparture) setDepartureCommunes(data);
        else setDestinationCommunes(data);
      } catch (err) {
        console.error(`Error fetching ${type} communes:`, err);
      }
    }
  };

  const totalPrice = weight * 1.5 + 500;

  const toggleItem = (label) => {
    setSelectedItems(prev => 
      prev.includes(label) ? prev.filter(i => i !== label) : [...prev, label]
    );
  };

  const handleBooking = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    // Date validation
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(bookingDate);
    if (selectedDate < today) {
      setError('La date du déménagement ne peut pas être dans le passé.');
      return;
    }
    
    if (!user) {
      setError('Veuillez vous connecter pour réserver un déménagement. Redirection vers la page de connexion...');
      setTimeout(() => navigate('/login/client'), 2500);
      return;
    }

    if (!locations.departure || !locations.destination) {
      setError('Veuillez remplir les adresses de départ et de destination.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      // Find dynamic category ID for Déménagement
      let categoryId = 6; // fallback
      try {
        const categories = await apiService.getCategories();
        const movingCat = categories.find(c => c.name.toLowerCase().includes('déménagement'));
        if (movingCat) categoryId = movingCat.id;
      } catch (e) {
        console.error('Could not fetch categories, using fallback ID');
      }

      const departureWilaya = wilayas.find(w => w.id == locations.departure_wilaya_id)?.name || '';
      const departureCommune = departureCommunes.find(c => c.id == locations.departure_commune_id)?.name || '';
      const destinationWilaya = wilayas.find(w => w.id == locations.destination_wilaya_id)?.name || '';
      const destinationCommune = destinationCommunes.find(c => c.id == locations.destination_commune_id)?.name || '';

      const devisData = {
        client_id: user.id,
        category_id: categoryId,
        description: `DÉMÉNAGEMENT - Poids: ${weight}kg\nObjets: ${selectedItems.join(', ')}\nDE: ${departureWilaya} (${departureCommune}) - ${locations.departure}\nÀ: ${destinationWilaya} (${destinationCommune}) - ${locations.destination}`,
        budget: totalPrice,
        date: bookingDate,
        wilaya_id: locations.departure_wilaya_id,
        commune_id: locations.departure_commune_id
      };

      console.log('Sending booking data:', devisData);
      const response = await apiService.createDevis(devisData);
      console.log('Server response:', response);

      if (response.devisId) {
        navigate('/message-success');
      } else {
        throw new Error(response.error || 'Erreur lors de la création du devis');
      }
    } catch (err) {
      console.error('Booking failed:', err);
      setError(err.message || 'Une erreur est survenue lors de la réservation.');
    } finally {
      setLoading(false);
    }
  };

  const [error, setError] = useState('');

  return (
    <div className="bg-white text-slate-900 font-['Public_Sans',sans-serif] pb-20">
      <main className="grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-16 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tight">Réservez votre <br /><span className="text-primary italic">déménagement</span></h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-bold">
              Calculez instantanément votre tarif basé sur la distance, le volume et la main-d'œuvre nécessaire. Simple, rapide et transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Booking Form */}
            <div className="lg:col-span-2 space-y-8">
              {error && (
                <div className="p-5 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-center gap-4 rounded-r-2xl shadow-sm animate-shake">
                   <span className="material-symbols-outlined font-black">warning</span>
                   <p className="font-black text-sm tracking-tight uppercase">{error}</p>
                </div>
              )}
              <div className="bg-slate-50 rounded-[40px] border border-slate-100 p-8 md:p-12">
                {/* Step 1: Route & Schedule */}
                <section className="mb-12">
                  <div className="flex items-center gap-4 mb-8 text-primary">
                    <span className="material-symbols-outlined text-3xl font-black">location_on</span>
                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Itinéraire et Date</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
                    {/* Departure */}
                    <div className="space-y-4">
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Lieu de Départ</label>
                      <select 
                        required
                        className="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl outline-none font-bold text-slate-900 focus:border-primary/30 transition-all shadow-sm"
                        value={locations.departure_wilaya_id}
                        onChange={(e) => handleWilayaChange('departure', e.target.value)}
                      >
                        <option value="">Wilaya de départ</option>
                        {wilayas.map(w => <option key={w.id} value={w.id}>{w.name}</option>)}
                      </select>
                      <select 
                        required
                        disabled={!locations.departure_wilaya_id}
                        className="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl outline-none font-bold text-slate-900 focus:border-primary/30 transition-all shadow-sm disabled:opacity-50"
                        value={locations.departure_commune_id}
                        onChange={(e) => setLocations({...locations, departure_commune_id: e.target.value})}
                      >
                        <option value="">Commune de départ</option>
                        {departureCommunes.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                      </select>
                      <input 
                        className="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl outline-none font-bold text-slate-900 focus:border-primary/30 transition-all shadow-sm" 
                        placeholder="Adresse précise (Ex: Rue 123)" 
                        type="text"
                        value={locations.departure}
                        onChange={(e) => setLocations({...locations, departure: e.target.value})}
                      />
                    </div>

                    {/* Destination */}
                    <div className="space-y-4">
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Lieu d'Arrivée</label>
                      <select 
                        required
                        className="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl outline-none font-bold text-slate-900 focus:border-primary/30 transition-all shadow-sm"
                        value={locations.destination_wilaya_id}
                        onChange={(e) => handleWilayaChange('destination', e.target.value)}
                      >
                        <option value="">Wilaya d'arrivée</option>
                        {wilayas.map(w => <option key={w.id} value={w.id}>{w.name}</option>)}
                      </select>
                      <select 
                        required
                        disabled={!locations.destination_wilaya_id}
                        className="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl outline-none font-bold text-slate-900 focus:border-primary/30 transition-all shadow-sm disabled:opacity-50"
                        value={locations.destination_commune_id}
                        onChange={(e) => setLocations({...locations, destination_commune_id: e.target.value})}
                      >
                        <option value="">Commune d'arrivée</option>
                        {destinationCommunes.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                      </select>
                      <input 
                        className="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl outline-none font-bold text-slate-900 focus:border-primary/30 transition-all shadow-sm" 
                        placeholder="Adresse d'arrivée précise" 
                        type="text"
                        value={locations.destination}
                        onChange={(e) => setLocations({...locations, destination: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* SVG Map Mockup */}
                  <div className="w-full h-48 bg-white rounded-[32px] mb-10 relative overflow-hidden border border-slate-100 shadow-inner">
                    <div className="absolute inset-0 bg-primary/5"></div>
                    <svg className="absolute inset-0 w-full h-full z-10 p-12" preserveAspectRatio="none" viewBox="0 0 400 200">
                      <path 
                        d="M50,150 C150,150 250,50 350,50" 
                        fill="none" 
                        stroke="#4f46e5" 
                        strokeDasharray="4, 8" 
                        strokeLinecap="round" 
                        strokeWidth="4"
                      />
                      <circle cx="50" cy="150" fill="white" r="10" stroke="#4f46e5" strokeWidth="4" />
                      <circle cx="350" cy="50" fill="white" r="10" stroke="#4f46e5" strokeWidth="4" />
                    </svg>
                  </div>

                  {/* Calendar Widget */}
                  <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm">
                    {(() => {
                      const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
                      const startDay = (year, month) => {
                        const day = new Date(year, month, 1).getDay();
                        return day === 0 ? 6 : day - 1; 
                      };

                      const year = viewDate.getFullYear();
                      const month = viewDate.getMonth();
                      const monthName = viewDate.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
                      const currentDays = daysInMonth(year, month);
                      const offset = startDay(year, month);

                      const days = [];
                      for (let i = 0; i < offset; i++) days.push({ day: '', current: false });
                      for (let i = 1; i <= currentDays; i++) days.push({ day: i, current: true });

                      return (
                        <>
                          <div className="flex items-center justify-between mb-8">
                            <button onClick={() => setViewDate(new Date(year, month - 1, 1))} type="button" className="size-12 flex items-center justify-center hover:bg-slate-50 rounded-2xl transition-all border border-slate-50 text-slate-400">
                              <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <span className="font-black text-slate-900 uppercase tracking-widest text-lg">{monthName}</span>
                            <button onClick={() => setViewDate(new Date(year, month + 1, 1))} type="button" className="size-12 flex items-center justify-center hover:bg-slate-50 rounded-2xl transition-all border border-slate-50 text-slate-400">
                              <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                          </div>
                          
                          <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-black text-slate-300 mb-6 uppercase tracking-[0.2em]">
                            {['lu', 'ma', 'me', 'je', 've', 'sa', 'di'].map(d => <div key={d}>{d}</div>)}
                          </div>
                          
                          <div className="grid grid-cols-7 gap-3 text-center">
                            {days.map((item, idx) => {
                              if (!item.current) return <div key={idx}></div>;
                              const dateStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${item.day.toString().padStart(2, '0')}`;
                              const isSelected = bookingDate === dateStr;
                              const isPast = new Date(dateStr) < new Date().setHours(0,0,0,0);
                              
                              return (
                                <button 
                                  key={idx}
                                  type="button"
                                  disabled={isPast}
                                  onClick={() => setBookingDate(dateStr)}
                                  className={`aspect-square sm:h-12 flex items-center justify-center rounded-2xl font-black transition-all text-sm group ${
                                    isSelected 
                                    ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-110' 
                                    : 'hover:bg-slate-50 text-slate-600'
                                  } disabled:opacity-10`}
                                >
                                  {item.day}
                                </button>
                              );
                            })}
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </section>

                {/* Step 2: Items & Weight */}
                <section className="mb-12 border-t border-slate-100 pt-12">
                  <div className="flex items-center gap-4 mb-8 text-primary">
                    <span className="material-symbols-outlined text-3xl font-black">inventory_2</span>
                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Détails des objets & Poids</h2>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                    {[
                      { icon: 'chair', label: 'Bois' },
                      { icon: 'grid_view', label: 'Verre' },
                      { icon: 'shopping_bag', label: 'Plastique' },
                      { icon: 'delete_outline', label: 'Rebuts' }
                    ].map((item, idx) => {
                      const isSelected = selectedItems.includes(item.label);
                      return (
                        <button 
                          key={idx}
                          onClick={() => toggleItem(item.label)}
                          className={`flex flex-col items-center justify-center p-6 border-2 rounded-[32px] transition-all ${
                            isSelected 
                            ? 'border-primary bg-white shadow-xl shadow-primary/5' 
                            : 'border-white bg-white hover:border-slate-100 shadow-sm'
                          }`}
                        >
                          <span className={`material-symbols-outlined text-4xl mb-3 ${isSelected ? 'text-primary' : 'text-slate-300'}`}>
                            {item.icon}
                          </span>
                          <span className={`text-[10px] font-black uppercase tracking-widest ${isSelected ? 'text-slate-900' : 'text-slate-400'}`}>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                    <label className="flex text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 justify-between items-center">
                      Estimation du poids <span className="text-primary text-lg font-black tracking-tight">{weight} <span className="text-xs uppercase">kg</span></span>
                    </label>
                    <input 
                      className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-primary" 
                      max="2000" min="0" step="100" type="range"
                      value={weight}
                      onChange={(e) => setWeight(parseInt(e.target.value))}
                    />
                    <div className="flex justify-between text-[10px] mt-4 text-slate-300 font-black uppercase tracking-widest">
                      <span>MIN</span>
                      <span>1000kg</span>
                      <span>MAX</span>
                    </div>
                  </div>
                </section>

                {/* Step 3: Labor & Estimation */}
                <section className="border-t border-slate-100 pt-12">
                  <div className="flex items-center gap-4 mb-8 text-primary">
                    <span className="material-symbols-outlined text-3xl font-black">payments</span>
                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Estimation & Réservation</h2>
                  </div>
                  
                  <div className="bg-primary p-8 rounded-[40px] text-white shadow-2xl shadow-primary/20 flex flex-col md:flex-row items-center justify-between gap-8 mb-10 overflow-hidden relative">
                    <div className="absolute top-0 right-0 size-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-2">Tarif estimé tout inclus</p>
                      <h4 className="text-4xl md:text-5xl font-black tracking-tight">{totalPrice.toLocaleString()} DA</h4>
                    </div>
                    <div className="relative z-10 text-center md:text-right">
                      <p className="text-xs font-bold leading-relaxed opacity-90 max-w-[200px]">
                        Comprend la logistique, la main-d'œuvre et l'assurance protection.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={handleBooking}
                      disabled={loading}
                      className="grow bg-primary hover:bg-primary/90 text-white font-black py-5 px-10 rounded-2xl shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-4 active:scale-95 disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <span className="animate-spin h-6 w-6 border-4 border-white/30 border-t-white rounded-full"></span>
                          Traitement...
                        </>
                      ) : (
                        <>
                          <span className="uppercase tracking-widest text-sm">Confirmer & Réserver</span>
                          <span className="material-symbols-outlined text-xl">arrow_forward</span>
                        </>
                      )}
                    </button>
                    <button className="px-10 py-5 bg-white border border-slate-100 text-slate-400 font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-slate-50 shadow-sm transition-all">
                      Plus tard
                    </button>
                  </div>
                </section>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              <div className="bg-slate-50 rounded-[40px] border border-slate-100 p-8 md:p-10">
                <h3 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-tight">Pourquoi nous ?</h3>
                <ul className="space-y-8">
                  {[
                    { icon: 'verified', title: 'Certifiés', desc: 'Partenaires rigoureusement vérifiés et assurés.' },
                    { icon: 'shutter_speed', title: 'Rapidité', desc: "Intervention ponctuelle et efficace." },
                    { icon: 'support_agent', title: 'Accompagnement', desc: 'Support dédié 7j/7 pour votre sérénité.' }
                  ].map((feature, idx) => (
                    <li key={idx} className="flex gap-5 group">
                      <div className="shrink-0 size-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-black text-slate-800 uppercase text-xs mb-1">{feature.title}</h4>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-1 text-center">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Sécurisé par Mihnati Protection</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovingBooking;
