import React from 'react';

const ResultatsDeRechercheExperts = () => {
    return (
        <>

            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                {/*  Header  */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 bg-white px-6 lg:px-10 py-3 sticky top-0 z-50">
                    <div className="flex items-center gap-4 text-primary">
                        <div className="size-8">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h2 className="text-slate-900 text-xl font-bold leading-tight tracking-tight">ArtisanDirect</h2>
                    </div>
                    <div className="flex flex-1 justify-end gap-8 items-center">
                        <nav className="hidden md:flex items-center gap-9">
                            <a className="text-slate-700 text-sm font-medium hover:text-primary transition-colors" href="#">Accueil</a>
                            <a className="text-slate-700 text-sm font-medium hover:text-primary transition-colors" href="#">Artisans</a>
                            <a className="text-slate-700 text-sm font-medium hover:text-primary transition-colors" href="#">Tarifs</a>
                        </nav>
                        <div className="flex items-center gap-4">
                            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
                                <span className="material-symbols-outlined text-xl">notifications</span>
                            </button>
                            <button className="hidden sm:flex min-w-[100px] items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold tracking-tight hover:bg-primary/90 transition-colors">
                                Connexion
                            </button>
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-slate-200" data-alt="Avatar photo de profil utilisateur" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKeo5sWjhiw0xbORg3eZiwvrm73br6zyaEW1jQWeOWbRzei2HcV3dBfNVG_xFwyKp18NEp_NI3nCj3kgHUes6yJCgCXo-xysJpz7pP2Bhwj0Y_DkjKCLAGjmOTAvZzo9mrcyubqUSiAdvtnSv1S5CeLqMd_5O8lJar0jQF1-Lk5t-UiFi3OGdP3UDhtR-qJ4fANwR2Ng7gVo1nOvoMRam9IbyO2BBiWuwPJKmUP3lt9cbWbimI2Dt35NUW04jyzwek-8Fq6Ou-0tbL");'></div>
                        </div>
                    </div>
                </header>
                <main className="flex flex-1 flex-col lg:flex-row max-w-7xl mx-auto w-full p-4 lg:p-6 gap-6">
                    {/*  Left Sidebar Filters  */}
                    <aside className="w-full lg:w-64 flex flex-col gap-6 shrink-0">
                        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                            <div className="mb-6">
                                <h3 className="text-slate-900 text-lg font-bold">Filtres</h3>
                                <p className="text-slate-500 text-xs">Affinez votre recherche</p>
                            </div>
                            <div className="space-y-1">
                                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-semibold transition-colors">
                                    <span className="material-symbols-outlined text-xl">sell</span>
                                    <span className="text-sm">Catégories</span>
                                </button>
                                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors">
                                    <span className="material-symbols-outlined text-xl">star</span>
                                    <span className="text-sm">Notes</span>
                                </button>
                                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors">
                                    <span className="material-symbols-outlined text-xl">payments</span>
                                    <span className="text-sm">Prix</span>
                                </button>
                                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors">
                                    <span className="material-symbols-outlined text-xl">calendar_today</span>
                                    <span className="text-sm">Disponibilité</span>
                                </button>
                            </div>
                            <hr className="my-6 border-slate-200" />
                            <div className="space-y-4">
                                <label className="block">
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Rayon (km)</span>
                                    <input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary mt-2" type="range" />
                                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                                        <span>0 km</span>
                                        <span>50 km</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </aside>
                    {/*  Main Results Area  */}
                    <section className="flex-1 flex flex-col gap-6">
                        {/*  Top Search & Sort Bar  */}
                        <div className="flex flex-col gap-4">
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                                    <span className="material-symbols-outlined">search</span>
                                </div>
                                <input className="block w-full pl-12 pr-12 py-4 text-slate-900 bg-white border border-slate-200 rounded-xl focus:ring-primary focus:border-primary shadow-sm text-base" placeholder="Rechercher un artisan..." type="text" value="Plombier" />
                                <button className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-slate-600">
                                    <span className="material-symbols-outlined">cancel</span>
                                </button>
                            </div>
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-col">
                                    <h1 className="text-2xl font-bold text-slate-900">128 experts disponibles pour "Plombier"</h1>
                                    <p className="text-slate-500 text-sm">Trouvez le professionnel idéal pour vos travaux</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-medium text-slate-500 hidden sm:inline">Trier par :</span>
                                    <select className="form-select bg-white border border-slate-200 rounded-lg py-2 pl-3 pr-10 text-sm font-medium focus:ring-primary focus:border-primary">
                                        <option>Les mieux notés</option>
                                        <option>Prix croissants</option>
                                        <option>Plus récents</option>
                                        <option>Proximité</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/*  Results Grid  */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {/*  Artisan Card 1  */}
                            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                                <div className="h-48 w-full bg-slate-100 relative overflow-hidden">
                                    <img alt="Thomas Martin Plombier" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Portrait professionnel de Thomas Martin artisan plombier" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKHCc3mQYDRf4rNcBpnSelc8LY2MCSxYP-POpTlPYzAbBOGJxPRHFoYvGmwQyoyminnf4q3r00TKq42DBRLeE1tZoDiUECzzq-c-xET54xsQcVk01xQVZnknzVyFWW28CZX8tBf8lx3QktCHVRFQv2mLEXW7E8KpboWQtepTxV-ZnssTgdcxqUMcKsiZAxQ9eWPgrr9uH6OE4NlgmPp3miwH8zkL1P2BoRWHVEE15sH5hCskXqBHRio5iRWYQ1mdXlRmB-9YmdUh3m" />
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                                        <span className="material-symbols-outlined text-yellow-500 text-sm fill-1">star</span>
                                        <span className="text-xs font-bold text-slate-900">4.9</span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-lg font-bold text-slate-900">Thomas Martin</h3>
                                        <span className="material-symbols-outlined text-primary text-lg" title="Profil vérifié">verified</span>
                                    </div>
                                    <p className="text-slate-500 text-sm mb-4">Plombier Expert • 12 ans d'exp.</p>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                                        <div>
                                            <span className="text-xs text-slate-400 block">À partir de</span>
                                            <span className="text-lg font-bold text-primary">45€/h</span>
                                        </div>
                                        <button className="bg-slate-100 text-slate-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition-colors">
                                            Voir profil
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*  Artisan Card 2  */}
                            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                                <div className="h-48 w-full bg-slate-100 relative overflow-hidden">
                                    <img alt="Sophie Bernard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Artisan plombier Sophie Bernard en plein travail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLqEDiYABOzwvelpQ1J0Znfl_bhtE6saUOSZoSrbJ7da0R19fNre9ogy8Rtu_-o6G52kwqCesXXVl9A9B12KffpfO2pedMF3QmeC9vK1iqNeI-aY88hkdMK8rE0Rr9RmsXw_KklXdz-C8BJcx3o_2WsHyFvdZ8YnCGGP0oRr_7UazVIFYout6-EZZUlLN7nCE3cITLy18sVyTLsMCgRvcr3Ax0aiGaipNF_Y62ivcjOV-wxecrjq2ENPSmtLTDXe-J57BaDO64u_uD" />
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                                        <span className="material-symbols-outlined text-yellow-500 text-sm fill-1">star</span>
                                        <span className="text-xs font-bold text-slate-900">4.8</span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-lg font-bold text-slate-900">Sophie Bernard</h3>
                                        <span className="material-symbols-outlined text-primary text-lg" title="Profil vérifié">verified</span>
                                    </div>
                                    <p className="text-slate-500 text-sm mb-4">Installation &amp; Dépannage</p>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                                        <div>
                                            <span className="text-xs text-slate-400 block">À partir de</span>
                                            <span className="text-lg font-bold text-primary">50€/h</span>
                                        </div>
                                        <button className="bg-slate-100 text-slate-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition-colors">
                                            Voir profil
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*  Artisan Card 3  */}
                            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                                <div className="h-48 w-full bg-slate-100 relative overflow-hidden">
                                    <img alt="Jean Dupont" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Jean Dupont expert en plomberie sanitaire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuNrjiZBJD40nRVuxL4pdBomxug9zX0hQV557Kzoiv6sKsryPh2SAGughc1AkU7v_4o50U2mF8UDhNBcwtsjXIQag6SB60oonXbbimB39Cdz_VRH4nKlSn5doGkdGdkiz4nlt_avvDxi0suT-UfmUQgxicXCq6fgPpnBwNDqTa_OFxYed5JKRqgHciNbCIP0mOE-NN1hlrA9qKC-KFsCufr1zjf6GRLFRw0np4KaUePxgpJIDbYJ05AO1i_tH95YauC92-zleg1nL2" />
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                                        <span className="material-symbols-outlined text-yellow-500 text-sm fill-1">star</span>
                                        <span className="text-xs font-bold text-slate-900">4.7</span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-lg font-bold text-slate-900">Jean Dupont</h3>
                                        <span className="material-symbols-outlined text-primary text-lg" title="Profil vérifié">verified</span>
                                    </div>
                                    <p className="text-slate-500 text-sm mb-4">Chauffage &amp; Sanitaire</p>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                                        <div>
                                            <span className="text-xs text-slate-400 block">À partir de</span>
                                            <span className="text-lg font-bold text-primary">42€/h</span>
                                        </div>
                                        <button className="bg-slate-100 text-slate-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition-colors">
                                            Voir profil
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*  Artisan Card 4  */}
                            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                                <div className="h-48 w-full bg-slate-100 relative overflow-hidden">
                                    <img alt="Marc Lavigne" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Portrait de Marc Lavigne artisan qualifié" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5IeJNXrOmwN5WerSMDoWZpM27zZW7VdiygNPdWLUj6aq3upP8slxs3d02fx9lWjxNZdz53dOTnINbUF96n7eM7gUBkIDH6rEb1d9obyfIj69T9Lnt7gR5mRAbOtN_u0PdUQN4uoFZZxZn_ui7WdE7gZcb5BWSfNbkfZjTZiLWdKy44e8X-lkxmZqfjcOyJOQOiwAtz8m3UPNI2eDzQSq1qiFYfgn_xyjftoXKXXpzgTKTeYI0I_RAd7fl5suurod576N7VzhEnTcW" />
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                                        <span className="material-symbols-outlined text-yellow-500 text-sm fill-1">star</span>
                                        <span className="text-xs font-bold text-slate-900">5.0</span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-lg font-bold text-slate-900">Marc Lavigne</h3>
                                        <span className="material-symbols-outlined text-primary text-lg" title="Profil vérifié">verified</span>
                                    </div>
                                    <p className="text-slate-500 text-sm mb-4">Urgence Plomberie 24/7</p>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                                        <div>
                                            <span className="text-xs text-slate-400 block">À partir de</span>
                                            <span className="text-lg font-bold text-primary">60€/h</span>
                                        </div>
                                        <button className="bg-slate-100 text-slate-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition-colors">
                                            Voir profil
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*  Artisan Card 5  */}
                            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                                <div className="h-48 w-full bg-slate-100 relative overflow-hidden">
                                    <img alt="Lucie Morel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Lucie Morel spécialiste en rénovation salle de bain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd2lF2Rjm7Gdg9DD6qLxOqK5-PRcttFRHDSuelUSaDxIW5WO7tNPdEV05x79t8m-DmWZgqXHe9CqHapkzvw5jRF5FhnRSpmF1-dP_gX8nuBF1jp-rnYBNTkOIQy70buLy8TLhzugQr1FEAORQbCRuWpXUOfU_VxvyNBTh4psIcP97Ex93h0lxbwRKnkfPyH-Wm3Fm1IEHPTurF38VQWQ4BX8nJZ5Gfr2kbMg6L18rLBeUR7FwZCe1zbDeWAMpG_0qiUSW3eULLQrs1" />
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                                        <span className="material-symbols-outlined text-yellow-500 text-sm fill-1">star</span>
                                        <span className="text-xs font-bold text-slate-900">4.6</span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-lg font-bold text-slate-900">Lucie Morel</h3>
                                        <span className="material-symbols-outlined text-primary text-lg" title="Profil vérifié">verified</span>
                                    </div>
                                    <p className="text-slate-500 text-sm mb-4">Rénovation Salles de Bain</p>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                                        <div>
                                            <span className="text-xs text-slate-400 block">À partir de</span>
                                            <span className="text-lg font-bold text-primary">48€/h</span>
                                        </div>
                                        <button className="bg-slate-100 text-slate-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition-colors">
                                            Voir profil
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*  Artisan Card 6  */}
                            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                                <div className="h-48 w-full bg-slate-100 relative overflow-hidden">
                                    <img alt="Paul Robert" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Portrait de Paul Robert plombier polyvalent" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdB4Blltpk-kP0k638VzJqdNDR61mKAAEIYFrj2wAn_4AuSYqjoMI_A6fzYzO_74hc1lDzisW9pT7KAtidI2K6gxH9LqpOW3MEx0zBD96vlcevpmkBth8k_l72LB3Tm8NpHB69zoJSJYk8IwbJKXGGf1NJrQzPK0-SKrve1MIEJSWzr20Bx8RfFb1SwvSaHuzDVzqMGp2cJ3q1aZLQP4MJhLxblo-8jGjN0LMxZC0kI4_3FpuQelUjgQhgHZiiz0B7UBn4-jwEUxLa" />
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                                        <span className="material-symbols-outlined text-yellow-500 text-sm fill-1">star</span>
                                        <span className="text-xs font-bold text-slate-900">4.9</span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-lg font-bold text-slate-900">Paul Robert</h3>
                                        <span className="material-symbols-outlined text-primary text-lg" title="Profil vérifié">verified</span>
                                    </div>
                                    <p className="text-slate-500 text-sm mb-4">Plombier Chauffagiste Qualifié</p>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                                        <div>
                                            <span className="text-xs text-slate-400 block">À partir de</span>
                                            <span className="text-lg font-bold text-primary">55€/h</span>
                                        </div>
                                        <button className="bg-slate-100 text-slate-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition-colors">
                                            Voir profil
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  Pagination  */}
                        <div className="flex items-center justify-center gap-2 py-8">
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-all">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:text-primary hover:border-primary transition-all font-bold">2</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:text-primary hover:border-primary transition-all font-bold">3</button>
                            <span className="px-2 text-slate-400">...</span>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:text-primary hover:border-primary transition-all font-bold">12</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-all">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </section>
                </main>
                {/*  Footer  */}
                <footer className="bg-white border-t border-slate-200 py-10 mt-auto">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 text-primary mb-4">
                                <div className="size-6">
                                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <span className="font-bold text-lg text-slate-900">ArtisanDirect</span>
                            </div>
                            <p className="text-sm text-slate-500">La plateforme n°1 pour trouver des artisans qualifiés près de chez vous.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-4">Plateforme</h4>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li><a className="hover:text-primary" href="#">Comment ça marche</a></li>
                                <li><a className="hover:text-primary" href="#">Devenir Artisan</a></li>
                                <li><a className="hover:text-primary" href="#">Garanties</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-4">Support</h4>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li><a className="hover:text-primary" href="#">Aide &amp; Contact</a></li>
                                <li><a className="hover:text-primary" href="#">FAQ</a></li>
                                <li><a className="hover:text-primary" href="#">Tarifs</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-4">Légal</h4>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li><a className="hover:text-primary" href="#">Mentions Légales</a></li>
                                <li><a className="hover:text-primary" href="#">Confidentialité</a></li>
                                <li><a className="hover:text-primary" href="#">CGU</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-slate-400">© 2024 ArtisanDirect. Tous droits réservés.</p>
                        <div className="flex gap-4">
                            <a className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined text-lg">public</span></a>
                            <a className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined text-lg">mail</span></a>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    );
};

export default ResultatsDeRechercheExperts;
