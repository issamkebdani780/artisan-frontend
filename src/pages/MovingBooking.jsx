import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api';

const MovingBooking = () => {
  const navigate = useNavigate();
  const [weight, setWeight] = useState(450);
  const [loading, setLoading] = useState(false);
  const [selectedItems, setSelectedItems] = useState(['Bois', 'Plastique']);
  const [bookingDate, setBookingDate] = useState('2024-05-03');
  const [serviceId, setServiceId] = useState(null);
  const [locations, setLocations] = useState({
    departure: '',
    destination: ''
  });

  useEffect(() => {
    const fetchService = async () => {
      try {
        const services = await apiService.getServices();
        const demoService = services.find(s => s.title.toLowerCase().includes('déménagement')) || services[0];
        if (demoService) setServiceId(demoService.id);
      } catch (err) {
        console.error('Error fetching services:', err);
      }
    };
    fetchService();
  }, []);

  const totalPrice = weight * 1.5 + 500;

  const toggleItem = (label) => {
    setSelectedItems(prev => 
      prev.includes(label) ? prev.filter(i => i !== label) : [...prev, label]
    );
  };

  const handleBooking = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    
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
      const devisData = {
        client_id: user.id,
        category_id: 6, // Dedicated Déménagement category ID
        description: `DÉMÉNAGEMENT - Poids: ${weight}kg, Objets: ${selectedItems.join(', ')}. Trajet: ${locations.departure} -> ${locations.destination}`,
        budget: totalPrice,
        date: bookingDate
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
    <div className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans pb-20">
      <main className="grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl mb-3">Réservez votre déménagement professionnel</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Calculez instantanément votre tarif basé sur la distance, le volume et la main-d'œuvre nécessaire. Simple, rapide et transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Booking Form */}
            <div className="lg:col-span-2 space-y-6">
              {error && (
                <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-center gap-3 rounded-r-xl shadow-sm animate-shake">
                   <span className="material-symbols-outlined font-bold">warning</span>
                   <p className="font-bold text-sm tracking-tight">{error}</p>
                </div>
              )}
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 sm:p-8">
                {/* Step 1: Route & Schedule */}
                <section className="mb-10">
                  <div className="flex items-center gap-3 mb-6 text-indigo-600">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Itinéraire et Date</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Lieu de départ</label>
                      <div className="flex gap-2">
                        <div className="relative grow">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <span className="material-symbols-outlined text-lg">home</span>
                          </span>
                          <input 
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" 
                            placeholder="Adresse ou Code Postal" 
                            type="text"
                            value={locations.departure}
                            onChange={(e) => setLocations({...locations, departure: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Destination</label>
                      <div className="flex gap-2">
                        <div className="relative grow">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <span className="material-symbols-outlined text-lg">flag</span>
                          </span>
                          <input 
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" 
                            placeholder="Adresse d'arrivée" 
                            type="text"
                            value={locations.destination}
                            onChange={(e) => setLocations({...locations, destination: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SVG Map Mockup */}
                  <div className="w-full h-64 bg-slate-100 dark:bg-slate-900 rounded-xl mb-8 relative overflow-hidden border border-slate-200 dark:border-slate-700 shadow-inner">
                    <div className="absolute inset-0 bg-indigo-50/30"></div>
                    <svg className="absolute inset-0 w-full h-full z-10 p-12" preserveAspectRatio="none" viewBox="0 0 400 200">
                      <path 
                        d="M50,150 C150,150 250,50 350,50" 
                        fill="none" 
                        stroke="#4f46e5" 
                        strokeDasharray="4, 8" 
                        strokeLinecap="round" 
                        strokeWidth="4"
                      />
                      <circle cx="50" cy="150" fill="white" r="8" stroke="#4f46e5" strokeWidth="3" />
                      <circle cx="50" cy="150" fill="#4f46e5" r="3" />
                      <circle cx="350" cy="50" fill="white" r="8" stroke="#4f46e5" strokeWidth="3" />
                      <circle cx="350" cy="50" fill="#4f46e5" r="3" />
                    </svg>
                  </div>

                  {/* Calendar Widget Preview */}
                  <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-4 px-2">
                       <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-lg">chevron_left</span>
                      </button>
                      <span className="font-bold text-slate-800 dark:text-white mb-2">Mai 2024</span>
                      <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-lg">chevron_right</span>
                      </button>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-slate-400 mb-2 uppercase">
                      <div>LU</div><div>MA</div><div>ME</div><div>JE</div><div>VE</div><div>SA</div><div>DI</div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center font-medium text-sm">
                      {[29, 30, 1, 2].map(day => (
                        <div key={day} className="py-2 text-slate-300">{day}</div>
                      ))}
                      <button 
                        onClick={() => setBookingDate('2024-05-03')}
                        className={`py-2 rounded-lg font-bold transition-all ${bookingDate === '2024-05-03' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'hover:bg-white dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
                      >
                        3
                      </button>
                      {[4, 5, 6, 7, 8, 9, 10].map(day => (
                        <button 
                          key={day} 
                          onClick={() => setBookingDate(`2024-05-${day.toString().padStart(2, '0')}`)}
                          className={`py-2 rounded-lg cursor-pointer transition-colors font-bold ${bookingDate === `2024-05-${day.toString().padStart(2, '0')}` ? 'bg-indigo-600 text-white shadow-md' : 'hover:bg-white dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Step 2: Items & Weight */}
                <section className="mb-10">
                  <div className="flex items-center gap-3 mb-6 text-indigo-600">
                    <span className="material-symbols-outlined text-2xl">inventory_2</span>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Détails des objets & Poids</h2>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
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
                          className={`flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all ${
                            isSelected 
                            ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 shadow-md' 
                            : 'border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300'
                          }`}
                        >
                          <span className={`material-symbols-outlined text-3xl mb-2 ${isSelected ? 'text-indigo-600' : 'text-slate-400'}`}>
                            {item.icon}
                          </span>
                          <span className={`text-xs font-bold ${isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>{item.label}</span>
                          <div className={`mt-2 w-4 h-4 rounded-full flex items-center justify-center border ${
                            isSelected ? 'bg-indigo-600 border-indigo-600' : 'border-slate-200 dark:border-slate-600'
                          }`}>
                            {isSelected && <span className="material-symbols-outlined text-[10px] text-white font-bold">check</span>}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="flex text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4 justify-between">
                        Estimation du poids <span>~ {weight} kg</span>
                      </label>
                      <input 
                        className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600" 
                        max="2000" min="0" step="100" type="range"
                        value={weight}
                        onChange={(e) => setWeight(parseInt(e.target.value))}
                      />
                      <div className="flex justify-between text-[10px] mt-2 text-slate-400 font-bold uppercase tracking-wider">
                        <span>&lt; 100kg</span>
                        <span>500kg</span>
                        <span>1000kg</span>
                        <span>1500kg</span>
                        <span>2000kg+</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Step 3: Labor & Estimation */}
                <section className="border-t border-slate-100 dark:border-slate-700 pt-8">
                  <div className="flex items-center gap-3 mb-6 text-indigo-600">
                    <span className="material-symbols-outlined text-2xl">payments</span>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Estimation du Budget</h2>
                  </div>
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-indigo-800 dark:text-indigo-300 uppercase tracking-wide">Tarif estimé tout inclus</p>
                      <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">Distance, volume et assurance inclus.</p>
                    </div>
                    <div className="text-center md:text-right">
                      <span className="text-4xl font-black text-indigo-600 dark:text-indigo-400">{totalPrice.toLocaleString()} DA</span>
                      <span className="block text-[10px] text-indigo-500 font-bold uppercase tracking-widest mt-1">Paiement sécurisé</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={handleBooking}
                      disabled={loading}
                      className="grow bg-indigo-600 hover:bg-indigo-700 text-white font-black py-4 px-8 rounded-lg shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <span className="animate-spin h-5 w-5 border-2 border-white/30 border-t-white rounded-full"></span>
                          Traitement...
                        </>
                      ) : (
                        <>
                          <span>Réserver mon déménagement</span>
                          <span className="material-symbols-outlined">arrow_forward</span>
                        </>
                      )}
                    </button>
                    <button className="px-8 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-lg transition-all">
                      Enregistrer
                    </button>
                  </div>
                </section>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 leading-tight">Pourquoi nous ?</h3>
                <ul className="space-y-6">
                  {[
                    { icon: 'verified', title: 'Déménageurs Certifiés', desc: 'Tous nos partenaires sont rigoureusement vérifiés et assurés.' },
                    { icon: 'history', title: 'Suivi Temps Réel', desc: "Suivez l'arrivée de votre équipe directement sur l'app." },
                    { icon: 'support_agent', title: 'Support Dédié 7j/7', desc: 'Une équipe disponible pour vous accompagner à chaque étape.' }
                  ].map((feature, idx) => (
                    <li key={idx} className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center">
                        <span className="material-symbols-outlined">{feature.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">{feature.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{feature.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovingBooking;
