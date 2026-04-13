import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiService from '../services/api';

const SubcategoryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const details = await apiService.getSubcategoryDetails(id);
        setData(details);
      } catch (err) {
        console.error('Failed to fetch subcategory details:', err);
        // Fallback for demo
        setData({
          name: 'Montage de meubles',
          category_name: 'Menuiserie et Bois',
          description: "Profitez d'un service de montage professionnel pour vos armoires, lits, bureaux et Ã©tagÃ¨res. Nos experts garantissent un assemblage prÃ©cis et robuste pour tout votre mobilier.",
          image_url: 'https://images.unsplash.com/photo-1594484208280-efa00f9e990c?auto=format&fit=crop&q=80&w=1000',
          artisans: [
            { id: 1, name: 'Marc V.', specialty: 'Expert en montage de mobilier complexe', rating: 4.9, review_count: 124, profile_pic: 'https://i.pravatar.cc/150?u=marc' },
            { id: 2, name: 'Sophie D.', specialty: 'SpÃ©cialiste dressings et amÃ©nagements', rating: 5.0, review_count: 89, profile_pic: 'https://i.pravatar.cc/150?u=sophie' },
            { id: 3, name: 'Julien M.', specialty: 'Montage rapide et soignÃ© de mobilier de bureau', rating: 4.8, review_count: 210, profile_pic: 'https://i.pravatar.cc/150?u=julien' }
          ]
        });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
    </div>
  );

  if (!data) return <div className="p-20 text-center">Service non trouvÃ©</div>;

  return (
    <div className="bg-[#F8F9FA] min-h-screen font-['Outfit',sans-serif] pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-12">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm font-bold text-slate-400 mb-8 uppercase tracking-widest">
            <span>Accueil</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span>Services</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-blue-600">{data.category_name}</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-600/5 rounded-[40px] blur-3xl group-hover:bg-blue-600/10 transition-colors"></div>
            <img 
              src={data.image_url || `https://source.unsplash.com/featured/?${encodeURIComponent(data.name || 'home repair')}`} 
              alt={data.name}
              className="relative w-full aspect-[4/3] object-cover rounded-[32px] shadow-2xl shadow-blue-900/10 ring-1 ring-black/5"
            />

          </div>

          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <span className="text-blue-600 font-black text-sm uppercase tracking-[0.2em]">Service Expert</span>
              <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tight">
                {data.name}
              </h1>
            </div>
            
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
              {data.description}
            </p>

            <button 
              onClick={() => navigate(`/request-quote?subcategory=${id}`)}
              className="group flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-blue-600/30 hover:scale-[1.02] active:scale-95 transition-all w-full sm:w-auto justify-center"
            >
              RÃ©server maintenant
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Section Artisans Populaires */}
        <div className="bg-white rounded-[48px] p-12 border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Artisans Populaires</h2>
            <button 
              onClick={() => navigate(`/search?category=${data.category_id}`)}
              className="text-blue-600 font-black flex items-center gap-2 hover:gap-3 transition-all"
            >
              Tout voir <span className="material-symbols-outlined">east</span>
            </button>

          </div>

          <div className="space-y-6">
            {data.artisans && data.artisans.length > 0 ? (
              data.artisans.map((artisan) => (
                <div 
                  key={artisan.id} 
                  className="flex flex-col md:flex-row items-center justify-between p-6 rounded-3xl border border-slate-50 hover:border-blue-100 hover:bg-blue-50/10 transition-all group"
                >
                  <div className="flex items-center gap-6 mb-6 md:mb-0">
                    <div className="relative">
                      <img 
                        src={artisan.profile_pic || 'https://i.pravatar.cc/150?u=default'} 
                        alt={artisan.name}
                        className="size-20 rounded-2xl object-cover ring-4 ring-slate-50"
                      />
                      <div className="absolute -bottom-1 -right-1 size-6 bg-emerald-500 rounded-full border-4 border-white"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{artisan.name}</h3>
                      <p className="text-slate-400 font-medium italic mb-1">"{artisan.specialty}"</p>
                      <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1 text-amber-500 font-bold">
                              <span className="material-symbols-outlined text-sm fill-current">star</span>
                              {artisan.rating} ({artisan.review_count || 0} avis)
                          </div>
                          <div className="text-slate-300">|</div>
                          <div className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">VÃ©rifiÃ©</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => navigate(`/artisan/${artisan.id}`)}
                      className="px-8 py-3 rounded-xl bg-slate-100 text-slate-700 font-black text-sm hover:bg-slate-200 transition-colors"
                    >
                      Voir le profil
                    </button>
                    <button 
                      onClick={() => navigate(`/request-quote?subcategory=${id}&artisanId=${artisan.id}&artisanName=${encodeURIComponent(artisan.name)}`)}
                      className="px-10 py-3 rounded-xl bg-blue-600 text-white font-black text-sm shadow-lg shadow-blue-600/20 hover:scale-105 transition-all"
                    >
                      RÃ©server
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-20 text-center bg-slate-50 rounded-[32px] border-2 border-dashed border-slate-200">
                <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">person_search</span>
                <p className="text-xl font-black text-slate-400 uppercase tracking-tight">Aucun artisan disponible pour le moment</p>
                <p className="text-slate-400 font-medium">Revenez bientÃ´t ou essayez une autre catÃ©gorie.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default SubcategoryDetails;

