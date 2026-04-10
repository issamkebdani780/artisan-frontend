import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import apiService from '../services/api';
import logo from '../assets/logo.png';

// Map specialty groups to category names in DB
const specialtyToCategoryMap = {
  'Menuiserie': 'Menuiserie et Bois',
  'Soudure': 'Ferronnerie et Soudure',
  'Plomberie': 'Plomberie et Réseaux',
  'Électricité': 'Électricité et Énergie',
  'Peinture': 'Peinture et Plâtre',
  'Maçonnerie': 'Maçonnerie et Finitions',
  'Mécanique': 'Mécanique et Machines',
};

// Map each specialty option to its group
const specialtyOptionToGroup = {
  'Menuisier ébéniste': 'Menuiserie', 'Menuisier de chantier': 'Menuiserie', 'Presseur de bois': 'Menuiserie', 'Décorateur bois': 'Menuiserie', 'Fabricant ouvertures bois': 'Menuiserie',
  "Ferronnier d'art": 'Soudure', 'Soudeur arc/argon': 'Soudure', 'Chaudronnier': 'Soudure', 'Soudeur carrosserie': 'Soudure',
  'Plombier sanitaire': 'Plomberie', 'Chauffage central': 'Plomberie', 'Monteur gaz': 'Plomberie', 'Tuyauterie cuivre/PER': 'Plomberie',
  'Électricien bâtiment': 'Électricité', 'Électricien industriel': 'Électricité', 'Technicien solaire': 'Électricité', 'Tireur de câbles': 'Électricité',
  'Peintre décorateur': 'Peinture', 'Peintre automobile': 'Peinture', 'Plâtrier staffeur': 'Peinture', 'Marbrier': 'Peinture', 'Vernisseur': 'Peinture',
  'Maçon brique': 'Maçonnerie', 'Carreleur': 'Maçonnerie', 'Crépisseur': 'Maçonnerie', 'Étanchéité': 'Maçonnerie', 'Rénovation': 'Maçonnerie',
  'Mécanicien auto': 'Mécanique', 'Mécanicien moto': 'Mécanique', 'Moteurs électriques': 'Mécanique', 'Mécanicien agricole': 'Mécanique',
};

const ProfilArtisan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artisan, setArtisan] = useState(null);
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentUser = apiService.getCurrentUser();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const [artisanData, servicesData, reviewsData] = await Promise.all([
          apiService.getArtisanById(id),
          apiService.getArtisanServices(id),
          apiService.getArtisanReviews(id)
        ]);
        setArtisan(artisanData);
        setServices(servicesData);
        setReviews(reviewsData);
      } catch (err) {
        console.error('Error fetching artisan details:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-4">
        <span className="animate-spin h-12 w-12 border-4 border-blue-600/30 border-t-blue-600 rounded-full"></span>
        <p className="text-slate-500 font-bold">Chargement du profil...</p>
      </div>
    </div>
  );

  if (!artisan) return <div className="text-center py-20">Artisan non trouvé.</div>;

  const displayExperience = (() => {
    try {
      if (!artisan.experience_years) return 0;
      const exp = typeof artisan.experience_years === 'string' ? JSON.parse(artisan.experience_years) : artisan.experience_years;
      if (typeof exp === 'object' && exp !== null) {
        const years = Object.values(exp).map(v => parseInt(v) || 0);
        return years.length > 0 ? Math.max(...years) : 0;
      }
      return parseInt(exp) || 0;
    } catch {
      return parseInt(artisan.experience_years) || 0;
    }
  })();

  return (
    <div className="min-h-screen bg-white font-['Public_Sans',sans-serif] text-slate-900">
      {/* Hero Header - Light & Clean */}
      <div className="relative h-[300px] md:h-[400px] w-full bg-slate-50 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 w-full h-full bg-linear-to-br from-indigo-50/50 to-white"></div>
        
        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-20 flex flex-col justify-end pb-12">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-8">
            {/* Profile Picture */}
            <div className="relative group">
              <div className="size-32 md:size-44 rounded-[40px] border-4 border-white overflow-hidden bg-white shadow-2xl relative z-10">
                <img 
                  src={artisan.profile_pic || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'} 
                  alt={artisan.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              {artisan.is_verified ? (
                <div className="absolute -bottom-2 -right-2 size-10 bg-emerald-500 rounded-2xl border-4 border-white z-20 flex items-center justify-center shadow-lg" title="Vérifié par la plateforme">
                  <span className="material-symbols-outlined text-white text-xl">verified</span>
                </div>
              ) : (
                <div className="absolute -bottom-2 -right-2 size-10 bg-amber-500 rounded-2xl border-4 border-white z-20 flex items-center justify-center shadow-lg" title="En attente de vérification">
                  <span className="material-symbols-outlined text-white text-xl">hourglass_empty</span>
                </div>
              )}
            </div>

            {/* Info Section */}
            <div className="flex-1 pb-2">
              <div className="flex flex-wrap items-center gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">{artisan.name}</h1>
                  {artisan.is_verified && (
                    <span className="material-symbols-outlined text-blue-500 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  )}
                </div>
                <span className="px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <span className="size-2 bg-emerald-500 rounded-full"></span>
                  Disponible
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">engineering</span>
                  <span className="font-bold text-sm md:text-base">{artisan.specialty}</span>
                </div>
                <span className="hidden md:block size-1 bg-slate-300 rounded-full"></span>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400">location_on</span>
                  <span className="font-medium text-sm md:text-base">{artisan.address || 'Alger, Algérie'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Projets', value: artisan.review_count || '0', icon: 'auto_awesome' },
                { label: 'Expérience', value: `${displayExperience} Ans`, icon: 'history_edu' },
                { label: 'Note Globale', value: artisan.rating || '5.0', icon: 'star', color: 'text-yellow-400' },
                { label: 'Réponse', value: '< 24h', icon: 'bolt', color: 'text-blue-500' }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`size-10 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 ${stat.color || 'text-slate-400'}`}>
                    <span className="material-symbols-outlined text-xl">{stat.icon}</span>
                  </div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-xl font-black text-slate-900">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Services Section */}
            <section className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-8 py-6 border-b border-slate-50 flex items-center justify-between">
                <h3 className="text-xl font-black flex items-center gap-3">
                  <div className="size-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">category</span>
                  </div>
                  Services & Grille Tarifaire
                </h3>
              </div>
              <div className="p-8">
                <div className="grid gap-4">
                  {services.length > 0 ? services.map(service => {
                    // Extract experience for this specific category
                    let categoryExp = 0;
                    try {
                      const expObj = typeof artisan.experience_years === 'string' ? JSON.parse(artisan.experience_years) : artisan.experience_years;
                      if (typeof expObj === 'object' && expObj !== null) {
                        const relevantYears = Object.keys(expObj)
                          .filter(spec => specialtyToCategoryMap[specialtyOptionToGroup[spec]] === service.category_name)
                          .map(spec => parseInt(expObj[spec]) || 0);
                        categoryExp = relevantYears.length > 0 ? Math.max(...relevantYears) : 0;
                      }
                    } catch (e) {}

                    return (
                      <div key={service.id} className="group p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white hover:border-primary/30 hover:shadow-lg transition-all">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="size-12 rounded-xl bg-white flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm shrink-0">
                            <span className="material-symbols-outlined">settings</span>
                          </div>
                          <div className="min-w-0">
                            <p className="font-black text-slate-900 truncate">{service.title}</p>
                            <div className="flex items-center gap-2">
                              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{service.category_name}</p>
                              {categoryExp > 0 && (
                                <>
                                  <span className="size-1 bg-slate-300 rounded-full"></span>
                                  <p className="text-[10px] text-primary font-black uppercase tracking-widest">{categoryExp} ans d'expérience</p>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between md:justify-end gap-8 px-4 py-2 bg-white rounded-xl md:bg-transparent shrink-0 border border-slate-100 md:border-0">
                          <p className="text-slate-400 text-[10px] font-black uppercase md:hidden tracking-widest">A partir de</p>
                          <p className="text-xl font-black text-primary">{Number(service.base_price).toLocaleString()} DA</p>
                        </div>
                      </div>
                    );
                  }) : (
                    <div className="py-12 text-center">
                      <div className="size-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-dashed border-slate-200">
                        <span className="material-symbols-outlined text-slate-300 text-3xl">inbox_customize</span>
                      </div>
                      <p className="text-slate-400 font-bold max-w-xs mx-auto">Aucun service standard n'est listé. Contactez l'artisan pour un devis sur mesure.</p>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Reviews Section */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-black flex items-center gap-3">
                  <div className="size-8 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">star</span>
                  </div>
                  Retours d'Expérience ({reviews.length})
                </h3>
              </div>

              {reviews.length === 0 ? (
                <div className="bg-slate-100/50 p-12 rounded-[40px] border border-dashed border-slate-200 text-center">
                  <span className="material-symbols-outlined text-slate-300 text-4xl mb-4">forum</span>
                  <p className="text-slate-500 font-bold">L'artisan n'a pas encore reçu d'avis.</p>
                </div>
              ) : (
                <div className="grid gap-4">
                  {reviews.map(review => (
                    <div key={review.id} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-8xl">format_quote</span>
                      </div>
                      <div className="flex items-start gap-4 mb-6 relative">
                        <img 
                          src={review.client_pic || `https://ui-avatars.com/api/?name=${encodeURIComponent(review.client_name)}&background=random`} 
                          alt={review.client_name} 
                          className="size-14 rounded-2xl object-cover shadow-md" 
                        />
                        <div className="flex-1">
                          <p className="font-black text-slate-900">{review.client_name}</p>
                          <p className="text-xs text-slate-400 font-bold mb-2">{new Date(review.created_at).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}</p>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map(s => (
                              <span key={s} className={`material-symbols-outlined text-sm ${s <= review.rating ? 'text-yellow-400' : 'text-slate-200'}`} style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-600 font-medium leading-relaxed italic relative">
                        "{review.comment}"
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* Right Column (4 cols) - Sticky Actions */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {currentUser?.id?.toString() !== id?.toString() ? (
                <div className="bg-white rounded-[40px] border border-slate-100 shadow-2xl overflow-hidden">
                  <div className="p-8">
                    <h4 className="text-xl font-black mb-6">Demander un service</h4>
                    <div className="space-y-6">
                      <p className="text-sm text-slate-500 leading-relaxed font-bold">
                        Votre projet mérite un expert. Contactez <span className="text-primary">{artisan.name}</span> pour une estimation précise et rapide.
                      </p>
                      
                      <div className="space-y-3">
                        <button 
                          onClick={() => navigate(`/request-quote?artisanId=${artisan.id}&artisanName=${encodeURIComponent(artisan.name)}`)}
                          className="w-full bg-primary hover:bg-primary/90 text-white font-black h-16 rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-3 transition-all active:scale-95"
                        >
                          <span className="material-symbols-outlined">send</span>
                          Demander un Devis
                        </button>
                        <button className="w-full bg-slate-900 border-2 border-slate-900 text-white font-black h-16 rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-800 transition-all">
                          <span className="material-symbols-outlined">mark_chat_unread</span>
                          Envoyer un Message
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="px-8 py-4 bg-slate-50 flex items-center justify-center gap-2 border-t border-slate-100">
                    <span className="material-symbols-outlined text-primary text-lg">verified_user</span>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none pt-1">Garantie Mihnati Incluse</p>
                  </div>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-primary/10 relative overflow-hidden group">
                  <div className="absolute -bottom-12 -right-12 size-48 bg-primary/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
                  <div className="relative">
                    <div className="size-16 rounded-3xl bg-primary flex items-center justify-center mb-6 shadow-xl shadow-primary/20">
                      <span className="material-symbols-outlined text-white text-4xl">visibility</span>
                    </div>
                    <h4 className="text-2xl font-black mb-3 tracking-tight text-slate-900 italic">Profil Public</h4>
                    <p className="text-slate-500 font-bold mb-8 leading-relaxed">
                      Voici le visuel de votre profil pour vos futurs clients. Gardez-le à jour pour plus de visibilité.
                    </p>
                    <Link 
                      to="/dashboard/artisan/settings" 
                      className="flex items-center justify-center gap-3 w-full py-5 bg-primary text-white font-black rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                    >
                      <span className="material-symbols-outlined text-sm">edit_square</span>
                      Modifier mon Profil
                    </Link>
                  </div>
                </div>
              )}

              {/* Verified Badges */}
              <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 space-y-6">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Confiance & Sécurité</h4>
                <div className="space-y-4">
                  {[
                    { label: 'Identité Vérifiée', icon: 'verified', active: artisan.is_verified },
                    { label: 'Docs Professionnels', icon: 'article', active: artisan.is_verified },
                    { label: 'Réponse Rapide', icon: 'shutter_speed', active: true }
                  ].map((v, i) => (
                    <div key={i} className={`flex items-center gap-3 text-sm font-black ${v.active ? 'text-slate-700' : 'text-slate-300 opacity-50'}`}>
                      <div className={`size-8 rounded-full flex items-center justify-center shadow-sm ${v.active ? 'bg-white text-emerald-500' : 'bg-slate-100 text-slate-300'}`}>
                        <span className="material-symbols-outlined text-lg">{v.active ? 'check' : 'close'}</span>
                      </div>
                      {v.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Footer */}
      <footer className="mt-24 border-t border-slate-100 bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Mihnati" className="h-10 w-auto object-contain" />
              <div className="h-8 w-px bg-slate-100 hidden md:block"></div>
              <p className="text-slate-400 text-xs font-bold tracking-tight">Le réseau des experts de confiance. © 2026 Mihnati.</p>
            </div>
            <div className="flex gap-6">
              {['Accueil', 'Expertise', 'Aide', 'Confidentialité'].map((link) => (
                <a key={link} href="#" className="text-xs font-black text-slate-400 hover:text-primary transition-colors tracking-tight uppercase">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfilArtisan;
