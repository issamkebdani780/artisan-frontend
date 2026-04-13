import React, { useEffect, useState } from 'react';
import ArtisanLayout from '../layouts/ArtisanLayout';
import apiService from '../services/api';

const specialtyToCategoryMap = {
  'Menuiserie': 'Menuiserie et Bois',
  'Soudure': 'Ferronnerie et Soudure',
  'Plomberie': 'Plomberie et Réseaux',
  'Électricité': 'Électricité et Énergie',
  'Peinture': 'Peinture et Plâtre',
  'Maçonnerie': 'Maçonnerie et Finitions',
  'Mécanique': 'Mécanique et Machines',
};

const specialtyOptionToGroup = {
  'Menuisier ébéniste': 'Menuiserie', 'Menuisier de chantier': 'Menuiserie', 'Presseur de bois': 'Menuiserie', 'Décorateur bois': 'Menuiserie', 'Fabricant ouvertures bois': 'Menuiserie',
  "Ferronnier d'art": 'Soudure', 'Soudeur arc/argon': 'Soudure', 'Chaudronnier': 'Soudure', 'Soudeur carrosserie': 'Soudure',
  'Plombier sanitaire': 'Plomberie', 'Chauffage central': 'Plomberie', 'Monteur gaz': 'Plomberie', 'Tuyauterie cuivre/PER': 'Plomberie',
  'Électricien bâtiment': 'Électricité', 'Électricien industriel': 'Électricité', 'Technicien solaire': 'Électricité', 'Tireur de câbles': 'Électricité',
  'Peintre décorateur': 'Peinture', 'Peintre automobile': 'Peinture', 'Plâtrier staffeur': 'Peinture', 'Marbrier': 'Peinture', 'Vernisseur': 'Peinture',
  'Maçon brique': 'Maçonnerie', 'Carreleur': 'Maçonnerie', 'Crépisseur': 'Maçonnerie', 'Étanchéité': 'Maçonnerie', 'Rénovation': 'Maçonnerie',
  'Mécanicien auto': 'Mécanique', 'Mécanicien moto': 'Mécanique', 'Moteurs électriques': 'Mécanique', 'Mécanicien agricole': 'Mécanique',
};

const categoryIcons = {
  'Menuiserie et Bois': 'carpenter',
  'Ferronnerie et Soudure': 'hardware',
  'Plomberie et Réseaux': 'plumbing',
  'Électricité et Énergie': 'bolt',
  'Peinture et Plâtre': 'format_paint',
  'Maçonnerie et Finitions': 'foundation',
  'Mécanique et Machines': 'precision_manufacturing',
};

const ArtisanServices = () => {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [form, setForm] = useState({
    category_id: '',
    title: '',
    description: '',
    base_price: ''
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

      const userSpecialties = user?.specialty ? user.specialty.split(',').map(s => s.trim()) : [];
      const matchedCategoryNames = new Set();
      userSpecialties.forEach(spec => {
        const group = specialtyOptionToGroup[spec];
        if (group && specialtyToCategoryMap[group]) {
          matchedCategoryNames.add(specialtyToCategoryMap[group]);
        }
      });
      
      if (matchedCategoryNames.size > 0) {
        const filtered = categoriesData.filter(c => matchedCategoryNames.has(c.name));
        setFilteredCategories(filtered.length > 0 ? filtered : categoriesData);
      } else {
        setFilteredCategories(categoriesData);
      }
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
        base_price: service.base_price
      });
    } else {
      setCurrentService(null);
      setForm({
        category_id: filteredCategories[0]?.id || '',
        title: '',
        description: '',
        base_price: ''
      });
    }
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('category_id', form.category_id);
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('base_price', form.base_price);

    try {
      if (currentService) {
        await apiService.updateService(currentService.id, formData);
      } else {
        await apiService.createService(formData);
      }
      setShowModal(false);
      fetchData();
    } catch (err) {
      console.error('Error saving service:', err);
      alert(err.message || "Erreur lors de l'enregistrement");
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

  const totalServices = services.length;
  const avgPrice = totalServices > 0 ? Math.round(services.reduce((sum, s) => sum + Number(s.base_price || 0), 0) / totalServices) : 0;
  const uniqueCategories = [...new Set(services.map(s => s.category_name))].length;

  return (
    <ArtisanLayout title="Artisan PRO" subtitle="Mes Services" hideHeader={true}>
      <div className="p-4 md:p-8 flex-1 flex flex-col overflow-y-auto font-['Outfit',sans-serif] bg-slate-50/20 transition-colors">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="size-10 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
              </div>
              <h1 className="text-3xl font-black tracking-tighter text-slate-900 uppercase transition-colors">Mes Tarifs</h1>
            </div>
            <p className="text-slate-400 font-medium text-sm max-w-md transition-colors">Gérez vos prestations et définissez vos prix pour attirer les meilleurs clients.</p>
          </div>
          <button 
            onClick={() => handleOpenModal()}
            className="flex items-center gap-2.5 bg-secondary text-white px-7 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-2xl hover:shadow-secondary/30 hover:-translate-y-0.5 active:scale-95 transition-all shadow-xl shadow-secondary/20"
          >
            <span className="material-symbols-outlined text-lg">add_circle</span>
            Nouveau Service
          </button>
        </div>

        {/* Stats Banner */}
        {!loading && services.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { label: 'Services Actifs', value: totalServices, icon: 'category', color: 'from-blue-500 to-indigo-600' },
              { label: 'Prix Moyen', value: `${avgPrice} DA`, icon: 'payments', color: 'from-emerald-500 to-teal-600' },
              { label: 'Catégories', value: uniqueCategories, icon: 'grid_view', color: 'from-orange-500 to-amber-600' },
            ].map((stat, i) => (
              <div key={i} className="relative overflow-hidden bg-white rounded-3xl border border-slate-100 p-6 group hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                <div className="relative">
                  <div className={`size-10 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <span className="material-symbols-outlined text-white text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>{stat.icon}</span>
                  </div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 transition-colors">{stat.label}</p>
                  <p className="text-2xl font-black text-slate-900 transition-colors">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Services List */}
        <div className="space-y-4 shadow-2xl shadow-slate-100/50 rounded-3xl transition-colors">
          {loading ? (
            <div className="py-24 text-center bg-white rounded-[2rem] border border-slate-100 transition-colors">
               <span className="animate-spin h-10 w-10 border-4 border-secondary/20 border-t-secondary rounded-full mx-auto block mb-6"></span>
               <p className="text-slate-400 font-bold text-sm transition-colors">Chargement de vos services...</p>
            </div>
          ) : services.length === 0 ? (
            <div className="py-24 text-center bg-white rounded-[2rem] border-2 border-dashed border-slate-200 relative overflow-hidden group transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="size-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-dashed border-slate-200 transition-colors">
                  <span className="material-symbols-outlined text-4xl text-slate-300">inventory_2</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 transition-colors">Aucun service créé</h3>
                <p className="text-slate-400 font-medium mb-8 max-w-sm mx-auto text-sm transition-colors">Créez votre premier service pour que les clients puissent voir vos offres et tarifs.</p>
                <button 
                  onClick={() => handleOpenModal()}
                  className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-xl hover:shadow-secondary/20 transition-all active:scale-95"
                >
                   <span className="material-symbols-outlined text-lg">add_circle</span>
                  Créer mon premier service
                </button>
              </div>
            </div>
          ) : (
            services.map((service) => (
              <div key={service.id} className="bg-white rounded-3xl border border-slate-100 overflow-hidden group hover:border-secondary/20 hover:shadow-xl transition-all duration-300 relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-secondary/30 rounded-l-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex items-center gap-5 md:w-auto shrink-0">
                    <div className="size-14 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-100 flex items-center justify-center group-hover:from-secondary/10 group-hover:to-secondary/5 group-hover:border-secondary/20 transition-all duration-300">
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-secondary text-2xl transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {categoryIcons[service.category_name] || 'handyman'}
                      </span>
                    </div>
                    <div className="md:hidden">
                      <span className="text-[9px] font-black text-secondary bg-secondary/5 px-2.5 py-1 rounded-lg uppercase tracking-widest border border-secondary/10">{service.category_name}</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3 className="text-lg font-black text-slate-900 truncate transition-colors uppercase">{service.title}</h3>
                      <span className="hidden md:inline text-[9px] font-black text-secondary bg-secondary/5 px-2.5 py-1 rounded-lg uppercase tracking-widest border border-secondary/10 shrink-0">{service.category_name}</span>
                    </div>
                    <p className="text-sm text-slate-400 font-medium line-clamp-1 transition-colors">{service.description}</p>
                  </div>

                  <div className="flex items-center gap-6 shrink-0">
                    <div className="text-right">
                      <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-0.5 transition-colors">À partir de</p>
                      <p className="text-2xl font-black text-slate-900 transition-colors">{Number(service.base_price).toLocaleString()} <span className="text-sm text-slate-400">DA</span></p>
                    </div>
                    <div className="flex gap-1.5 pl-4 border-l border-slate-100">
                      <button 
                        onClick={() => handleOpenModal(service)}
                        className="size-10 rounded-xl flex items-center justify-center text-slate-300 hover:text-secondary hover:bg-secondary/5 transition-all"
                      >
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </button>
                      <button 
                        onClick={() => handleDelete(service.id)}
                        className="size-10 rounded-xl flex items-center justify-center text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all"
                      >
                        <span className="material-symbols-outlined text-lg">delete</span>
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
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
            <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 animate-in zoom-in-95 fade-in duration-300 transition-colors">
              <div className="relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-orange-500/5 transition-colors"></div>
                <div className="absolute -right-10 -top-10 size-32 bg-secondary/10 rounded-full blur-2xl"></div>
                <div className="relative p-8 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-2xl bg-secondary/10 flex items-center justify-center shadow-inner">
                      <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{currentService ? 'edit_note' : 'add_business'}</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase transition-colors">{currentService ? 'Modifier le Service' : 'Nouveau Service'}</h2>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest transition-colors">{currentService ? 'Mise à jour' : 'Ajout de prestation'}</p>
                    </div>
                  </div>
                  <button onClick={() => setShowModal(false)} className="size-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-100 transition-all active:scale-95">
                    <span className="material-symbols-outlined text-lg">close</span>
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8 pt-6 space-y-6 overflow-y-auto max-h-[70vh] custom-scrollbar">
                <div className="grid grid-cols-5 gap-5">
                  <div className="col-span-3 flex flex-col gap-2.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 transition-colors">Catégorie</label>
                    <div className="relative">
                      <select 
                        name="category_id" 
                        value={form.category_id} 
                        onChange={(e) => setForm({...form, category_id: e.target.value})}
                        required
                        className="w-full h-14 pl-5 pr-10 rounded-2xl bg-slate-50 border-2 border-slate-100 text-slate-900 focus:border-secondary focus:bg-white outline-none font-bold text-sm transition-all appearance-none"
                      >
                        {filteredCategories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none">expand_more</span>
                    </div>
                  </div>
                  <div className="col-span-2 flex flex-col gap-2.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 transition-colors">Prix (DA)</label>
                    <input 
                      name="base_price" 
                      value={form.base_price} 
                      onChange={(e) => setForm({...form, base_price: e.target.value})}
                      placeholder="5000"
                      type="number" 
                      required
                      className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-2 border-slate-100 text-slate-900 focus:border-secondary focus:bg-white outline-none font-black text-sm transition-all placeholder:text-slate-300 placeholder:font-medium"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 transition-colors">Titre du service</label>
                  <input 
                    name="title" 
                    value={form.title} 
                    onChange={(e) => setForm({...form, title: e.target.value})}
                    placeholder="Ex: Rénovation peinture salon"
                    type="text" 
                    required
                    className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-2 border-slate-100 text-slate-900 focus:border-secondary focus:bg-white outline-none font-bold text-sm transition-all placeholder:text-slate-300 placeholder:font-medium"
                  />
                </div>

                <div className="flex flex-col gap-2.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 transition-colors">Description</label>
                  <textarea 
                    name="description" 
                    value={form.description} 
                    onChange={(e) => setForm({...form, description: e.target.value})}
                    placeholder="Décrivez votre prestation en quelques mots..."
                    rows="4" 
                    required
                    className="w-full p-5 rounded-2xl bg-slate-50 border-2 border-slate-100 text-slate-900 focus:border-secondary focus:bg-white outline-none font-medium text-sm transition-all resize-none placeholder:text-slate-300"
                  ></textarea>
                </div>

                <div className="flex justify-end gap-3 pt-6 border-t border-slate-50">
                  <button 
                    type="button" 
                    onClick={() => setShowModal(false)}
                    className="px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 hover:bg-slate-50 transition-colors"
                  >
                    Annuler
                  </button>
                  <button 
                    type="submit"
                    className="bg-secondary text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:shadow-xl hover:shadow-secondary/20 hover:-translate-y-0.5 active:scale-95 transition-all shadow-lg shadow-secondary/20 flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    {currentService ? 'Enregistrer' : 'Créer'}
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
