import React, { useEffect, useState } from 'react';
import ArtisanLayout from '../layouts/ArtisanLayout';
import apiService from '../services/api';

const ArtisanServices = () => {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [form, setForm] = useState({
    category_id: '',
    title: '',
    description: '',
    base_price: '',
    image_url: ''
  });
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [servicesData, categoriesData] = await Promise.all([
        apiService.getArtisanServices(user.id),
        apiService.getCategories()
      ]);
      setServices(servicesData);
      setCategories(categoriesData);
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (service = null) => {
    if (service) {
      setCurrentService(service);
      setForm({
        category_id: service.category_id,
        title: service.title,
        description: service.description,
        base_price: service.base_price,
        image_url: service.image_url || ''
      });
    } else {
      setCurrentService(null);
      setForm({
        category_id: categories[0]?.id || '',
        title: '',
        description: '',
        base_price: '',
        image_url: ''
      });
    }
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentService) {
        await apiService.updateService(currentService.id, form);
      } else {
        await apiService.createService(form);
      }
      setShowModal(false);
      fetchData();
    } catch (err) {
      alert('Erreur lors de l\'enregistrement');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Voulez-vous vraiment supprimer ce service ?')) {
      try {
        await apiService.deleteService(id);
        fetchData();
      } catch (err) {
        alert('Erreur lors de la suppression');
      }
    }
  };

  return (
    <ArtisanLayout title="Artisan PRO" subtitle="Mes Services">
      <div className="p-8 flex-1 flex flex-col overflow-y-auto font-['Outfit',sans-serif]">
        
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-black tracking-tight mb-2 text-slate-900">Mes Services & Tarifs</h1>
            <p className="text-slate-500">Gérez les prestations que vous proposez aux clients.</p>
          </div>
          <button 
            onClick={() => handleOpenModal()}
            className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-secondary/20"
          >
            <span className="material-symbols-outlined text-lg">add</span>
            Nouveau Service
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full py-20 text-center text-slate-400">
               <span className="animate-spin h-8 w-8 border-4 border-secondary/30 border-t-secondary rounded-full mx-auto block mb-4"></span>
               Chargement de vos services...
            </div>
          ) : services.length === 0 ? (
            <div className="col-span-full py-20 text-center bg-white rounded-3xl border-2 border-dashed border-slate-200">
              <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">inventory_2</span>
              <p className="text-slate-500 font-bold">Vous n'avez pas encore créé de service.</p>
              <button 
                onClick={() => handleOpenModal()}
                className="mt-4 text-secondary font-black hover:underline"
              >
                Commencer maintenant
              </button>
            </div>
          ) : (
            services.map(service => (
              <div key={service.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden group hover:border-secondary/30 transition-all flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image_url || 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800'} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    alt={service.title}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-black text-secondary shadow-sm">
                    {service.category_name}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-black text-slate-900 mb-2 truncate">{service.title}</h3>
                  <p className="text-sm text-slate-500 line-clamp-2 italic mb-4 flex-1">"{service.description}"</p>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-100">
                    <span className="text-2xl font-black text-slate-900">{service.base_price} DA</span>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleOpenModal(service)}
                        className="p-2 text-slate-400 hover:text-secondary hover:bg-secondary/5 rounded-lg transition-all"
                      >
                        <span className="material-symbols-outlined text-sm">edit</span>
                      </button>
                      <button 
                        onClick={() => handleDelete(service.id)}
                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-slide-up">
              <div className="p-8 border-b border-slate-100 flex justify-between items-center">
                <h2 className="text-2xl font-black text-slate-900">{currentService ? 'Modifier le Service' : 'Nouveau Service'}</h2>
                <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Catégorie</label>
                    <select 
                      name="category_id" 
                      value={form.category_id} 
                      onChange={(e) => setForm({...form, category_id: e.target.value})}
                      required
                      className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none font-bold text-sm transition-all"
                    >
                      {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Prix de base (DA)</label>
                    <input 
                      name="base_price" 
                      value={form.base_price} 
                      onChange={(e) => setForm({...form, base_price: e.target.value})}
                      placeholder="Ex: 5000"
                      type="number" 
                      required
                      className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none font-bold text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Titre du service</label>
                  <input 
                    name="title" 
                    value={form.title} 
                    onChange={(e) => setForm({...form, title: e.target.value})}
                    placeholder="Ex: Rénovation peinture salon"
                    type="text" 
                    required
                    className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none font-bold text-sm transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Description</label>
                  <textarea 
                    name="description" 
                    value={form.description} 
                    onChange={(e) => setForm({...form, description: e.target.value})}
                    placeholder="Décrivez votre prestation en quelques mots..."
                    rows="3" 
                    required
                    className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none font-medium text-sm transition-all resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">URL Image (Optionnel)</label>
                  <input 
                    name="image_url" 
                    value={form.image_url} 
                    onChange={(e) => setForm({...form, image_url: e.target.value})}
                    placeholder="https://images.unsplash.com/..."
                    type="url" 
                    className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none font-medium text-sm transition-all"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-6 border-t border-slate-100">
                  <button 
                    type="button" 
                    onClick={() => setShowModal(false)}
                    className="px-6 py-3 rounded-xl font-bold text-sm text-slate-500 hover:bg-slate-50 transition-colors"
                  >
                    Annuler
                  </button>
                  <button 
                    type="submit"
                    className="bg-secondary text-white px-8 py-3 rounded-xl font-black text-sm hover:opacity-90 transition-all shadow-lg shadow-secondary/20"
                  >
                    Enregistrer le service
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </ArtisanLayout>
  );
};

export default ArtisanServices;
