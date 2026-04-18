import React from 'react';

const PaintingCategory = () => {
  return (
    <>
      
<div className="min-h-screen flex flex-col">
{/*  Unified Header  */}
<header className="sticky top-0 z-50 bg-white border-b border-slate-200 px-4 lg:px-20 py-3">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-3xl">format_paint</span>
<h2 className="text-slate-900 text-xl font-bold tracking-tight">PeinturePro</h2>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-slate-600 hover:text-primary text-sm font-medium transition-colors" href="#">Services</a>
<a className="text-slate-600 hover:text-primary text-sm font-medium transition-colors" href="#">Réalisations</a>
<a className="text-slate-600 hover:text-primary text-sm font-medium transition-colors" href="#">Experts</a>
<a className="text-slate-600 hover:text-primary text-sm font-medium transition-colors" href="#">Avis</a>
</nav>
</div>
<div className="flex items-center gap-4 flex-1 justify-end">
<div className="hidden sm:block relative w-full max-w-xs">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
<input className="w-full bg-slate-100 border-none rounded-lg pl-10 py-2 text-sm focus:ring-2 focus:ring-primary/20" placeholder="Rechercher un service..." type="text"/>
</div>
<button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="h-9 w-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="User profile avatar placeholder" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaMS9M5WgoPMjK5cL-jD9a6andiHrbun-P4Eljq3g8Itt47V8efrYQDATrD_u4A-SvrVoMWoswRxPBb747dM0lyyiRn5HX-RtoLc0WXjnjnqonxAV2DdP0N5TjRqAHtNDF4Ya4RLLZ8oYror7x1llHmAq7k9sxInShrDv-lWF9Ib-cuY2ha7zOzDdlv0cfVUwDXK-0vBLobc-EK4GUjWFX60HBgSra_LyzXHf12vGfK5QLGVL0lSThJ7R_ANHjjErk3OFpMh3N-Gp2"/>
</div>
</div>
</div>
</header>
<main className="flex-grow">
{/*  Hero Section & Quote Sidebar  */}
<section className="max-w-7xl mx-auto px-4 lg:px-20 py-10 lg:py-16">
<div className="flex flex-col lg:flex-row gap-8">
{/*  Hero Content  */}
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
<span className="material-symbols-outlined text-sm">verified</span>
                            Peintres certifiés
                        </div>
<h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
                            Redonnez vie à vos espaces avec nos <span className="text-primary">experts</span>.
                        </h1>
<p className="text-lg text-slate-600 max-w-2xl">
                            Des solutions de peinture professionnelles pour particuliers et entreprises. Finitions haute qualité, respect des délais et propreté garantis.
                        </p>
<div className="flex flex-wrap gap-4">
<button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
<span className="material-symbols-outlined">calendar_month</span>
                                Réserver un créneau
                            </button>
<button className="bg-white border-2 border-slate-200 hover:border-primary text-slate-700 px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2">
<span className="material-symbols-outlined">play_circle</span>
                                Voir nos travaux
                            </button>
</div>
<div className="pt-4 flex items-center gap-4 text-sm text-slate-500 font-medium">
<div className="flex -space-x-2">
<img className="h-8 w-8 rounded-full border-2 border-white" data-alt="Satisfied client face photo 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1R_dQkW7oYQda_mBSmNqm-M5C5TIgBjoSuwm2H9FcOiACw745fzVBGsrQnjhbVh74ng-WGP419dj7wXBYuksLrxPEJ1f8o_o5Xl2R3uRMTROc0Fkv-aZiiFtJC6YlQY3jPkui89-Dv_zE4lQzpKMLoIBU2Vz4-PpA3JOAqjUaiy2xEtdHk5Rjjkl8It1Wh-NwYb6nP0_d7iThErnGeD3A94Ue7z5k3J7d0YZpPy9P240ZXDHurxPufpv-JuAHrCvTXeFZVuwIGyig"/>
<img className="h-8 w-8 rounded-full border-2 border-white" data-alt="Satisfied client face photo 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXz6sl4LsVyc_En-0BqXMeIuwAPrhMMvCbhCY153LoCDT23eVCv27Zj7lqlX3NGpIM7oxMues7afoQKqt2vwu7RWRbIarcX9575e6BwveOO7V2UnvvL7mVQcnLjtD7uGAylS-Lz8SYC2HZg5f9_llLU468xaEZWb5ZUVrprD3Admgb1U-xM7E6saE6yXEJjPDsdDfmXqAB2N2VW1nKiXtduKiysRsxoZsmXelUXUIokRphRmIXMtotr2j5kxhcmSI99Go8EfZ_EOGm"/>
<img className="h-8 w-8 rounded-full border-2 border-white" data-alt="Satisfied client face photo 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl5haXpI6SzezzOkG7tro59xhLkn5EyV-E6QPJz_e6e3vwZWLuajGU-mOtTws9PE3Y3vZzePgLIyrota5Bfz3XhxyY_EsqjrOKlDFw8yaZObIyYADw-xm9nxHQFYUfPHWsX6iW7g4SqWmapqOXbJcM-1DsYuguTxKkXauH8wayWQ16TDPUQsx1UMJc2Kf8uDaQCth3yFfyODE0stgPN32x6DX4ux05g5ECJ4q-5O-G2WygWhZlh6EKBAIs8mYhsBWLZvNE6JQLjSej"/>
</div>
<span>+1,200 clients satisfaits cette année</span>
</div>
</div>
{/*  Sidebar: Need a Quote  */}
<div className="w-full lg:w-[400px]">
<div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xl shadow-slate-200/50 sticky top-24">
<h3 className="text-xl font-bold text-slate-900 mb-2">Besoin d'un devis ?</h3>
<p className="text-sm text-slate-500 mb-6">Recevez une estimation gratuite et personnalisée en moins de 24h.</p>
<form className="space-y-4">
<div>
<label className="block text-xs font-bold text-slate-400 uppercase mb-1">Type de projet</label>
<select className="w-full rounded-lg border-slate-200 bg-slate-50 text-sm focus:ring-primary focus:border-primary">
<option>Peinture Intérieure</option>
<option>Peinture Extérieure</option>
<option>Papier Peint</option>
<option>Rénovation complète</option>
</select>
</div>
<div>
<label className="block text-xs font-bold text-slate-400 uppercase mb-1">Surface (approx. mÂ²)</label>
<input className="w-full rounded-lg border-slate-200 bg-slate-50 text-sm focus:ring-primary focus:border-primary" placeholder="ex: 45" type="number"/>
</div>
<div>
<label className="block text-xs font-bold text-slate-400 uppercase mb-1">Localisation</label>
<input className="w-full rounded-lg border-slate-200 bg-slate-50 text-sm focus:ring-primary focus:border-primary" placeholder="Code postal" type="text"/>
</div>
<button className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors mt-2">
                                    Obtenir mon estimation
                                </button>
</form>
<div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
<div className="bg-green-100 text-green-600 p-2 rounded-lg">
<span className="material-symbols-outlined text-lg">bolt</span>
</div>
<div>
<p className="text-xs font-bold text-slate-900">Réponse rapide</p>
<p className="text-[10px] text-slate-500 uppercase tracking-wide">Moyenne de 4h</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Sub-services Grid  */}
<section className="bg-slate-50 py-16">
<div className="max-w-7xl mx-auto px-4 lg:px-20">
<div className="mb-12">
<h2 className="text-3xl font-bold text-slate-900">Nos services spécialisés</h2>
<p className="text-slate-500 mt-2">Une expertise complète pour chaque surface de votre habitat.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Interior  */}
<div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300">
<div className="h-48 overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Modern minimalist interior living room wall painting" ></div>
</div>
<div className="p-6">
<div className="text-primary mb-4">
<span className="material-symbols-outlined text-3xl">format_paint</span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Peinture Intérieure</h3>
<p className="text-sm text-slate-600 mb-4">Murs, boiseries et finitions décoratives pour créer l'ambiance parfaite.</p>
<a className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all" href="#">
                                    Découvrir le service <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
</a>
</div>
</div>
{/*  Ceiling  */}
<div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300">
<div className="h-48 overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Professional white ceiling painting with masking tape" ></div>
</div>
<div className="p-6">
<div className="text-primary mb-4">
<span className="material-symbols-outlined text-3xl">layers</span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Plafonds &amp; Ravalement</h3>
<p className="text-sm text-slate-600 mb-4">Traitement des fissures et peinture mate haute opacité pour des plafonds impeccables.</p>
<a className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all" href="#">
                                    Découvrir le service <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
</a>
</div>
</div>
{/*  Wallpaper  */}
<div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300">
<div className="h-48 overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Worker applying designer wallpaper to a feature wall" ></div>
</div>
<div className="p-6">
<div className="text-primary mb-4">
<span className="material-symbols-outlined text-3xl">texture</span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Papier Peint &amp; Revêtements</h3>
<p className="text-sm text-slate-600 mb-4">Pose précise de papiers peints, panoramiques et toiles de verre.</p>
<a className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all" href="#">
                                    Découvrir le service <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</section>
{/*  Why Choose Us  */}
<section className="py-20 max-w-7xl mx-auto px-4 lg:px-20">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-slate-900">Pourquoi nous choisir ?</h2>
<p className="text-slate-500 mt-4 max-w-2xl mx-auto">Nous nous engageons à fournir une expérience sans stress et un résultat qui dépasse vos attentes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center space-y-4">
<div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
<span className="material-symbols-outlined text-3xl">verified_user</span>
</div>
<h4 className="font-bold text-slate-900">Garantie Décennale</h4>
<p className="text-sm text-slate-500">Tous nos travaux sont couverts par une assurance professionnelle solide.</p>
</div>
<div className="text-center space-y-4">
<div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
<span className="material-symbols-outlined text-3xl">handyman</span>
</div>
<h4 className="font-bold text-slate-900">Matériaux Premium</h4>
<p className="text-sm text-slate-500">Nous utilisons exclusivement des peintures respectueuses de l'environnement (A+).</p>
</div>
<div className="text-center space-y-4">
<div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
<span className="material-symbols-outlined text-3xl">timer</span>
</div>
<h4 className="font-bold text-slate-900">Respect des Délais</h4>
<p className="text-sm text-slate-500">Un calendrier précis établi avant le début et strictement respecté.</p>
</div>
<div className="text-center space-y-4">
<div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
<span className="material-symbols-outlined text-3xl">cleaning_services</span>
</div>
<h4 className="font-bold text-slate-900">Chantier Propre</h4>
<p className="text-sm text-slate-500">Protection totale de vos sols et meubles, nettoyage complet après travaux.</p>
</div>
</div>
</section>
{/*  Top Experts  */}
<section className="bg-primary py-16 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 lg:px-20 relative">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="text-white">
<h2 className="text-3xl font-bold">Nos meilleurs experts</h2>
<p className="text-primary/20 opacity-80 mt-2 text-white/80">Des artisans passionnés, triés sur le volet pour leur savoir-faire.</p>
</div>
<button className="bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors">
                            Voir tous les experts
                        </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{/*  Expert 1  */}
<div className="bg-white rounded-2xl p-6 flex items-center gap-4 border border-white/10">
<div className="h-16 w-16 rounded-full bg-slate-100 flex-shrink-0">
<img className="w-full h-full rounded-full object-cover" data-alt="Portrait of Marc, master painter expert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7_vgBOKwKZxi09bHgxBfbynBPifiaV-lrJ9TiE8U0Fp7NwRfzbcyagGzvGA24j8l9ZXHWqw_LWMM2LjCG0NGG_m1pdx--rOv80A-L25OBTvF1pUcTyGnxfIvl32D0zdiXxXv9oVFgpMlyR6k_rUpwy7hhvsiwQBAzRqlBjXiWbOtc2nfKB1M7lIvSZkL_aRdhXn-SZrTcZXh6TvpJ-I8y-OkMjIyI8iuVWXx6Cct7dlwf-QaXLRAYXrUr2rBeRuxeTip92khIsdfA"/>
</div>
<div className="flex-1">
<h4 className="font-bold text-slate-900">Marc L.</h4>
<p className="text-xs text-slate-500">Expert Finitions &amp; Stucco</p>
<div className="flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
<span className="text-xs font-bold text-slate-700">4.9</span>
<span className="text-xs text-slate-400">(128 avis)</span>
</div>
</div>
<button className="p-2 text-primary hover:bg-primary/5 rounded-lg">
<span className="material-symbols-outlined">chat</span>
</button>
</div>
{/*  Expert 2  */}
<div className="bg-white rounded-2xl p-6 flex items-center gap-4 border border-white/10">
<div className="h-16 w-16 rounded-full bg-slate-100 flex-shrink-0">
<img className="w-full h-full rounded-full object-cover" data-alt="Portrait of Sarah, wallpaper specialist expert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvc4PViusP5MXwAXZHoWBRWh1Gpztm6J5t4A2pUjyW7zNDaeDfcH9aoqz5IAKaZO2bZNOknFp9Lt_FRy9QCPN0kjawhWzzzLWtjKuQOgKjYNh9a7BQBwQgjwReghrO9P5iBiJYTXcKYuO_WBnqEGXZw-KK5J85ibu5-XjZNzaOhq83yJ3mWcr7GP7Wimt9M2CPKnKsMeelkS7sHOx_ALKfm-QmiqQXj1LRUUXhtV2M2qpOTnbht_8_6X_824dK5J0-PmjDqS7uCRWl"/>
</div>
<div className="flex-1">
<h4 className="font-bold text-slate-900">Sarah B.</h4>
<p className="text-xs text-slate-500">Spécialiste Papier Peint</p>
<div className="flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
<span className="text-xs font-bold text-slate-700">5.0</span>
<span className="text-xs text-slate-400">(94 avis)</span>
</div>
</div>
<button className="p-2 text-primary hover:bg-primary/5 rounded-lg">
<span className="material-symbols-outlined">chat</span>
</button>
</div>
{/*  Expert 3  */}
<div className="bg-white rounded-2xl p-6 flex items-center gap-4 border border-white/10">
<div className="h-16 w-16 rounded-full bg-slate-100 flex-shrink-0">
<img className="w-full h-full rounded-full object-cover" data-alt="Portrait of Thomas, exterior painting professional" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-0_mOtSipQf2TD0gevJ05iZB0g0zJ4039R1z7-Ob4dfowLaVYcfUT1Eepa8NO9oBL6cCvsFDVUGOuhF2sLvKDWsT2q09KizoAJP69tbEchnZ5N7BGz2C4sIufUHvJ6WDgw8wHTzazRSyyy6CsuLCzZW76WBTZNQNsC_eT-bPwwMxyRwRNJQkmfbIuV8YFkvLzIM460BHTMwF7Ihyay-VSdKYe0d1ujREZB5a0CLd5mEltcDBPUf7mXfngWqIRHKig9zTXCeaxkKom"/>
</div>
<div className="flex-1">
<h4 className="font-bold text-slate-900">Thomas V.</h4>
<p className="text-xs text-slate-500">Expert Ravalement &amp; Bois</p>
<div className="flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
<span className="text-xs font-bold text-slate-700">4.8</span>
<span className="text-xs text-slate-400">(156 avis)</span>
</div>
</div>
<button className="p-2 text-primary hover:bg-primary/5 rounded-lg">
<span className="material-symbols-outlined">chat</span>
</button>
</div>
</div>
</div>
</section>
</main>
{/*  Simple Footer  */}
<footer className="bg-white border-t border-slate-200 py-10 px-4 lg:px-20">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-primary grayscale opacity-70">
<span className="material-symbols-outlined text-2xl">format_paint</span>
<h2 className="text-slate-900 text-lg font-bold tracking-tight">PeinturePro</h2>
</div>
<div className="flex gap-8 text-sm text-slate-500 font-medium">
<a className="hover:text-primary" href="#">Conditions</a>
<a className="hover:text-primary" href="#">Confidentialité</a>
<a className="hover:text-primary" href="#">Contact</a>
</div>
<p className="text-sm text-slate-400">© 2024 PeinturePro SAS. Tous droits réservés.</p>
</div>
</footer>
</div>

    </>
  );
};

export default PaintingCategory;

