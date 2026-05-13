import React, { useEffect, useState } from 'react';
import ArtisanLayout from '../layouts/ArtisanLayout';
import apiService from '../services/api';
import { 
  Hammer, 
  Wrench, 
  Droplets, 
  Zap, 
  Paintbrush, 
  Construction, 
  Settings, 
  Store, 
  PlusCircle, 
  LayoutGrid, 
  Wallet, 
  Layers, 
  Package, 
  Edit3, 
  Trash2, 
  ChevronDown, 
  X, 
  CheckCircle,
  Plus,
  AlertCircle
} from 'lucide-react';

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
  'Menuiserie et Bois': Hammer,
  'Ferronnerie et Soudure': Wrench,
  'Plomberie et Réseaux': Droplets,
  'Électricité et Énergie': Zap,
  'Peinture et Plâtre': Paintbrush,
  'Maçonnerie et Finitions': Construction,
  'Mécanique et Machines': Settings,
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
    base_price: '',
    max_price: ''
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
        base_price: service.base_price,
        max_price: service.max_price || ''
      });
    } else {
      setCurrentService(null);
      setForm({
        category_id: filteredCategories[0]?.id || '',
        title: '',
        description: '',
        base_price: '',
        max_price: ''
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
    formData.append('max_price', form.max_price);

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
    <ArtisanLayout title="Khadamati PRO" subtitle="Mes Services" hideHeader={true}>
      <div className="p-4 sm:p-6 md:p-10 flex-1 flex flex-col overflow-y-auto font-['Outfit',sans-serif] bg-slate-50/20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="size-12 rounded-[20px] bg-secondary/10 flex items-center justify-center text-secondary shadow-inner">
                <Store className="size-6" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-black tracking-tighter text-slate-900 uppercase">Mes Tarifs</h1>
                <p className="text-slate-400 font-medium text-sm transition-colors uppercase tracking-widest mt-1">Dashboard Artisan</p>
              </div>
            </div>
            <p className="text-slate-400 font-medium text-base max-w-md hidden sm:block">Gérez vos prestations et définissez vos prix pour attirer les meilleurs clients sur la plateforme.</p>
          </div>
          <button 
            onClick={() => handleOpenModal()}
            className="group flex items-center gap-3 bg-secondary text-white px-8 py-5 rounded-[24px] font-black text-xs uppercase tracking-widest hover:shadow-2xl hover:shadow-secondary/30 hover:-translate-y-1 active:scale-95 transition-all shadow-xl shadow-secondary/20 w-full sm:w-auto justify-center"
          >
            <PlusCircle className="size-5 group-hover:rotate-90 transition-transform duration-300" />
            Nouveau Service
          </button>
        </div>

        {/* Stats Banner */}
        {!loading && services.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Services Actifs', value: totalServices, icon: Layers, color: 'from-blue-500 to-indigo-600' },
              { label: 'Prix Moyen', value: `${avgPrice.toLocaleString()} DA`, icon: Wallet, color: 'from-emerald-500 to-teal-600' },
              { label: 'Catégories', value: uniqueCategories, icon: LayoutGrid, color: 'from-orange-500 to-amber-600' },
            ].map((stat, i) => (
              <div key={i} className="relative overflow-hidden bg-white rounded-[32px] border border-slate-100 p-8 group hover:shadow-xl transition-all duration-300">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                <div className="relative flex items-center gap-6">
                  <div className={`size-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg shrink-0`}>
                    <stat.icon className="size-8" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Services List */}
        <div className="space-y-6">
          {loading ? (
            <div className="py-24 text-center bg-white rounded-[40px] border border-slate-100 shadow-sm">
               <div className="animate-spin h-12 w-12 border-4 border-secondary/20 border-t-secondary rounded-full mx-auto mb-6"></div>
               <p className="text-slate-400 font-black uppercase tracking-widest text-sm">Chargement de vos services...</p>
            </div>
          ) : services.length === 0 ? (
            <div className="py-24 text-center bg-white rounded-[40px] border-4 border-dashed border-slate-100 relative overflow-hidden group transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative max-w-sm mx-auto">
                <div className="size-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-dashed border-slate-200 group-hover:scale-110 transition-transform">
                  <Package className="size-10 text-slate-300" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 uppercase tracking-tight">Aucun service créé</h3>
                <p className="text-slate-400 font-medium mb-10 text-base leading-relaxed">Créez votre premier service pour que les clients puissent voir vos offres et tarifs.</p>
                <button 
                  onClick={() => handleOpenModal()}
                  className="inline-flex items-center gap-3 bg-secondary text-white px-10 py-5 rounded-[24px] font-black text-xs uppercase tracking-widest hover:shadow-2xl hover:shadow-secondary/30 transition-all active:scale-95"
                >
                   <PlusCircle className="size-5" />
                  Créer mon premier service
                </button>
              </div>
            </div>
          ) : (
            services.map((service) => {
              const Icon = categoryIcons[service.category_name] || Hammer;
              return (
                <div key={service.id} className="bg-white rounded-[32px] sm:rounded-[40px] border border-slate-100 overflow-hidden group hover:border-secondary/30 hover:shadow-2xl transition-all duration-500 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-secondary to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center gap-6 sm:gap-8">
                    <div className="flex items-center justify-between md:justify-start gap-5 shrink-0">
                      <div className="size-16 sm:size-20 rounded-[24px] sm:rounded-[32px] bg-slate-50 border border-slate-50 flex items-center justify-center group-hover:bg-secondary/10 group-hover:border-secondary/20 transition-all duration-500 group-hover:rotate-6 shadow-sm">
                        <Icon className="size-8 sm:size-10 text-slate-400 group-hover:text-secondary transition-colors" />
                      </div>
                      <div className="md:hidden">
                        <span className="text-[10px] font-black text-secondary bg-secondary/10 px-4 py-2 rounded-xl uppercase tracking-widest border border-secondary/10">{service.category_name}</span>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 truncate uppercase tracking-tight group-hover:text-secondary transition-colors">{service.title}</h3>
                        <span className="hidden md:inline-block text-[10px] font-black text-secondary bg-secondary/10 px-4 py-2 rounded-xl uppercase tracking-widest border border-secondary/10 shrink-0">{service.category_name}</span>
                      </div>
                      <p className="text-base text-slate-400 font-medium line-clamp-1 group-hover:text-slate-500 transition-colors">{service.description}</p>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-8 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-slate-100 md:pl-8 shrink-0">
                      <div className="text-left md:text-right">
                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Fourchette de prix</p>
                        <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                          {Number(service.base_price).toLocaleString()} 
                          {service.max_price ? ` - ${Number(service.max_price).toLocaleString()}` : ''}
                          <span className="text-sm text-slate-400 font-bold ml-1">DA</span>
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleOpenModal(service)}
                          className="size-12 sm:size-14 rounded-2xl flex items-center justify-center bg-slate-50 text-slate-400 hover:text-secondary hover:bg-secondary/10 transition-all active:scale-90"
                        >
                          <Edit3 className="size-5 sm:size-6" />
                        </button>
                        <button 
                          onClick={() => handleDelete(service.id)}
                          className="size-12 sm:size-14 rounded-2xl flex items-center justify-center bg-slate-50 text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all active:scale-90"
                        >
                          <Trash2 className="size-5 sm:size-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-xl rounded-[40px] shadow-3xl overflow-hidden border border-white/20 animate-in zoom-in-95 duration-300">
              <div className="relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-orange-500/5 transition-colors"></div>
                <div className="absolute -right-16 -top-16 size-48 bg-secondary/10 rounded-full blur-3xl"></div>
                <div className="relative p-8 sm:p-10 flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <div className="size-16 rounded-[24px] bg-white shadow-xl flex items-center justify-center text-secondary border border-secondary/10">
                      {currentService ? <Edit3 className="size-8" /> : <PlusCircle className="size-8" />}
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase leading-none mb-2">{currentService ? 'Modifier' : 'Nouveau'} Service</h2>
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Khadamati Pro Services</p>
                    </div>
                  </div>
                  <button onClick={() => setShowModal(false)} className="size-12 rounded-2xl bg-white/50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all active:scale-90">
                    <X className="size-6" />
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8 sm:p-10 pt-4 space-y-8 overflow-y-auto max-h-[70vh] custom-scrollbar">
                <div className="flex flex-col gap-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Catégorie de métier</label>
                  <div className="relative group">
                    <select 
                      name="category_id" 
                      value={form.category_id} 
                      onChange={(e) => setForm({...form, category_id: e.target.value})}
                      required
                      className="w-full h-16 pl-6 pr-12 rounded-2xl bg-slate-50 border-2 border-slate-100 text-slate-900 focus:border-secondary focus:bg-white focus:shadow-xl focus:shadow-secondary/5 outline-none font-bold text-sm transition-all appearance-none cursor-pointer"
                    >
                      {filteredCategories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none group-hover:text-secondary transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-3">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Tarif Minimum (DA)</label>
                    <div className="relative group">
                      <input 
                        name="base_price" 
                        value={form.base_price} 
                        onChange={(e) => setForm({...form, base_price: e.target.value})}
                        placeholder="Ex: 2000"
                        type="number" 
                        required
                        className="w-full h-16 px-6 rounded-2xl bg-slate-50 border-2 border-slate-100 text-slate-900 focus:border-secondary focus:bg-white focus:shadow-xl focus:shadow-secondary/5 outline-none font-black text-base transition-all placeholder:text-slate-300 placeholder:font-medium"
                      />
                      <Wallet className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-200 group-hover:text-secondary transition-colors" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Tarif Maximum (DA)</label>
                    <div className="relative group">
                      <input 
                        name="max_price" 
                        value={form.max_price} 
                        onChange={(e) => setForm({...form, max_price: e.target.value})}
                        placeholder="Ex: 4000"
                        type="number" 
                        className="w-full h-16 px-6 rounded-2xl bg-slate-50 border-2 border-slate-100 text-slate-900 focus:border-secondary focus:bg-white focus:shadow-xl focus:shadow-secondary/5 outline-none font-black text-base transition-all placeholder:text-slate-300 placeholder:font-medium"
                      />
                      <Wallet className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-200 group-hover:text-secondary transition-colors" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Titre de l'intervention</label>
                  <input 
                    name="title" 
                    value={form.title} 
                    onChange={(e) => setForm({...form, title: e.target.value})}
                    placeholder="Ex: Installation complète salle de bain"
                    type="text" 
                    required
                    className="w-full h-16 px-6 rounded-2xl bg-slate-50 border-2 border-slate-100 text-slate-900 focus:border-secondary focus:bg-white focus:shadow-xl focus:shadow-secondary/5 outline-none font-bold text-base transition-all placeholder:text-slate-300 placeholder:font-medium"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Description détaillée</label>
                  <textarea 
                    name="description" 
                    value={form.description} 
                    onChange={(e) => setForm({...form, description: e.target.value})}
                    placeholder="Décrivez précisément les prestations incluses dans ce tarif..."
                    rows="4" 
                    required
                    className="w-full p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 text-slate-900 focus:border-secondary focus:bg-white focus:shadow-xl focus:shadow-secondary/5 outline-none font-medium text-base transition-all resize-none placeholder:text-slate-300 min-h-[120px]"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-slate-50">
                  <button 
                    type="button" 
                    onClick={() => setShowModal(false)}
                    className="px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest text-slate-400 hover:bg-slate-50 transition-all active:scale-95"
                  >
                    Annuler
                  </button>
                  <button 
                    type="submit"
                    className="bg-secondary text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-2xl hover:shadow-secondary/20 hover:-translate-y-1 active:scale-95 transition-all shadow-xl shadow-secondary/20 flex items-center justify-center gap-3"
                  >
                    <CheckCircle className="size-5" />
                    {currentService ? 'Mettre à jour' : 'Confirmer la création'}
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

