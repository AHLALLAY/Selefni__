function Dashboard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
            {/* Header avec notifications */}
            <div className="max-w-7xl mx-auto mb-8">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">Tableau de bord Admin</h1>
                        <p className="text-gray-600">Gestion des demandes de crédit</p>
                    </div>
                    <div className="relative">
                        <button className="relative p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="absolute top-0 right-0 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">
                                3
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Filtres et recherche */}
            <div className="max-w-7xl mx-auto mb-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Recherche */}
                        <div className="md:col-span-2">
                            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                                Rechercher
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="search"
                                    placeholder="Nom, email..."
                                    className="w-full px-4 py-2 pl-10 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* Filtre par statut */}
                        <div>
                            <label htmlFor="statusFilter" className="block text-sm font-medium text-gray-700 mb-2">
                                Statut
                            </label>
                            <select
                                id="statusFilter"
                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Tous les statuts</option>
                                <option value="pending">En attente</option>
                                <option value="in_progress">En cours</option>
                                <option value="accepted">Acceptée</option>
                                <option value="rejected">Refusée</option>
                            </select>
                        </div>

                        {/* Tri par date */}
                        <div>
                            <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-2">
                                Trier par
                            </label>
                            <select
                                id="sortBy"
                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="newest">Plus récent</option>
                                <option value="oldest">Plus ancien</option>
                                <option value="name">Nom (A-Z)</option>
                            </select>
                        </div>
                    </div>

                    {/* Bouton Export CSV */}
                    <div className="mt-4 flex justify-end">
                        <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md hover:shadow-lg flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Exporter CSV
                        </button>
                    </div>
                </div>
            </div>

            {/* Tableau des demandes */}
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase">ID</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Nom complet</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Email</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Type de crédit</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Montant</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Statut</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Date</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {/* Exemple de ligne */}
                                <tr className="hover:bg-blue-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">#1</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">John Doe</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">john@example.com</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                                            Auto
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">120 000 MAD</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                                            En attente
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">03/11/2025</td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center items-center gap-2">
                                            <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors" title="Voir détails">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </button>
                                            <button className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors" title="Changer statut">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                </svg>
                                            </button>
                                            <button className="p-2 text-purple-600 hover:bg-purple-100 rounded-lg transition-colors" title="Ajouter note">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </button>
                                            <button className="p-2 text-orange-600 hover:bg-orange-100 rounded-lg transition-colors" title="Marquer prioritaire">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                {/* Ligne exemple avec statut différent */}
                                <tr className="hover:bg-blue-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">#2</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">Jane Smith</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">jane@example.com</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                                            Immobilier
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">500 000 MAD</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                                            En cours
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">02/11/2025</td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center items-center gap-2">
                                            <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors" title="Voir détails">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </button>
                                            <button className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors" title="Changer statut">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                </svg>
                                            </button>
                                            <button className="p-2 text-purple-600 hover:bg-purple-100 rounded-lg transition-colors" title="Ajouter note">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </button>
                                            <button className="p-2 text-orange-600 hover:bg-orange-100 rounded-lg transition-colors" title="Marquer prioritaire">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal de détail (structure) - masqué par défaut */}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 hidden" style={{ display: 'none' }}>
                <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                    <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-xl flex justify-between items-center">
                        <h2 className="text-2xl font-bold">Détails de la demande #1</h2>
                        <button className="text-white hover:text-gray-200 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="p-6">
                        {/* Informations du demandeur */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
                                Informations du demandeur
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Nom complet</label>
                                    <p className="text-gray-900 font-medium">John Doe</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                                    <p className="text-gray-900">john@example.com</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Téléphone</label>
                                    <p className="text-gray-900">+212600000000</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Revenu mensuel</label>
                                    <p className="text-gray-900 font-semibold">12 000 MAD</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Situation professionnelle</label>
                                    <p className="text-gray-900">CDI</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Métier</label>
                                    <p className="text-gray-900">Développeur</p>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Commentaire</label>
                                    <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">Achat véhicule utilitaire</p>
                                </div>
                            </div>
                        </div>

                        {/* Récapitulatif de la simulation */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
                                Récapitulatif de la simulation
                            </h3>
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600 mb-1">Type</label>
                                        <p className="text-gray-900 font-semibold">Crédit Auto</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600 mb-1">Montant</label>
                                        <p className="text-gray-900 font-semibold">120 000 MAD</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600 mb-1">Durée</label>
                                        <p className="text-gray-900 font-semibold">48 mois</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600 mb-1">Mensualité</label>
                                        <p className="text-gray-900 font-semibold">2 715.43 MAD</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Historique des statuts */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
                                Historique des statuts
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="flex-1">
                                        <p className="font-medium text-gray-900">En attente</p>
                                        <p className="text-sm text-gray-600">03/11/2025 à 10:20</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Notes internes */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
                                Notes internes
                            </h3>
                            <div className="mb-4">
                                <textarea
                                    placeholder="Ajouter une note interne..."
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    rows="3"
                                ></textarea>
                                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                    Ajouter une note
                                </button>
                            </div>
                            <div className="space-y-2">
                                <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                                    <p className="text-sm text-gray-700">Aucune note pour le moment</p>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4 pt-4 border-t-2 border-gray-200">
                            <button className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                                Accepter
                            </button>
                            <button className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold">
                                Refuser
                            </button>
                            <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                                Mettre en cours
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;