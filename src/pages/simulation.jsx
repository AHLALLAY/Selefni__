import { useEffect, useState } from "react";
import creditService from "../services/creditService";

function Simulation() {
    const [creditTypes, setCreditTypes] = useState([]);
    const [employmentTypes, setEmploymentTypes] = useState([]);
    const [jobs, setJobs] = useState([]);

    const [formData, setFormData] = useState({
        typeDeCredit: '',
        metier: '',
        contrat: '',
        montant: '',
        duree: '',
        tauxAnnuel: '',
        assurance: '',
        fraisFixe: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const creditTypes = await creditService.getCreditTypes();
                const employmentTypes = await creditService.getEmploymentTypes();
                const jobs = await creditService.getJobs();

                setCreditTypes(creditTypes);
                setEmploymentTypes(employmentTypes);
                setJobs(jobs);
            } catch (error) {
                console.error(`Error inattendu : ${error}`);
            }
        }
        getData();
    }, []);
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
            <div className="flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit} className="w-full max-w-4xl p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                            Simulation de Crédit
                        </h1>
                    </div>

                    {/* first row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-2">
                        <div className="mb-4">
                            <label htmlFor="typeDeCredit" className="block mb-2 text-sm font-semibold text-gray-700 capitalize">
                                Type de crédit <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="typeDeCredit"
                                required
                                value={formData.typeDeCredit}
                                onChange={(e) => setFormData({ ...formData, typeDeCredit: e.target.value })}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-300"
                            >
                                <option value="">Choisissez...</option>
                                {creditTypes.map(creditType => (
                                    <option key={creditType.id} value={creditType.id}>{creditType.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="metier" className="block mb-2 text-sm font-semibold text-gray-700 capitalize">
                                Métier <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="metier"
                                required
                                value={formData.metier}
                                onChange={(e) => setFormData({ ...formData, metier: e.target.value })}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-300"
                            >
                                <option value="">Choisissez...</option>
                                {jobs.map(job => (
                                    <option key={job.id} value={job.id}>{job.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="contrat" className="block mb-2 text-sm font-semibold text-gray-700 capitalize">
                                Type d'emploi <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="contrat"
                                required
                                value={formData.contrat}
                                onChange={(e) => setFormData({ ...formData, contrat: e.target.value })}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-300"
                            >
                                <option value="">Choisissez...</option>
                                {employmentTypes.map(employmentType => (
                                    <option key={employmentType.id} value={employmentType.id}>{employmentType.label}</option>
                                ))}
                            </select>
                        </div>

                    </div>

                    {/* second row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        <div className="mb-4">
                            <label htmlFor="montant" className="block mb-2 text-sm font-semibold text-gray-700 capitalize">
                                Montant <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                id="montant"
                                required
                                min={1000}
                                max={100000}
                                placeholder="Ex: 50000"
                                value={formData.montant}
                                onChange={(e) => setFormData({ ...formData, montant: e.target.value })}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="duree" className="block mb-2 text-sm font-semibold text-gray-700">
                                Durée (en mois) <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                id="duree"
                                required
                                min={3}
                                max={48}
                                placeholder="Ex: 24"
                                value={formData.duree}
                                onChange={(e) => setFormData({ ...formData, duree: e.target.value })}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="tauxAnnuel" className="block mb-2 text-sm font-semibold text-gray-700">
                                Taux Annuel (%) <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                id="tauxAnnuel"
                                required
                                min={0}
                                step="0.01"
                                placeholder="Ex: 5.5"
                                value={formData.tauxAnnuel}
                                onChange={(e) => setFormData({ ...formData, tauxAnnuel: e.target.value })}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-300"
                            />
                        </div>
                    </div>

                    {/* third row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div className="mb-4">
                            <label htmlFor="assurance" className="block mb-2 text-sm font-semibold text-gray-700">
                                Assurance (%) <span className="text-gray-400 text-xs font-normal">(optionnelle)</span>
                            </label>
                            <input
                                type="number"
                                id="assurance"
                                step="0.01"
                                placeholder="Ex: 0.5"
                                value={formData.assurance}
                                onChange={(e) => setFormData({ ...formData, assurance: e.target.value })}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="fraisFixe" className="block mb-2 text-sm font-semibold text-gray-700">
                                Frais Fixes <span className="text-gray-400 text-xs font-normal">(optionnelle)</span>
                            </label>
                            <input
                                type="number"
                                id="fraisFixe"
                                placeholder="Ex: 500"
                                value={formData.fraisFixe}
                                onChange={(e) => setFormData({ ...formData, fraisFixe: e.target.value })}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-300"
                            />
                        </div>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Calculer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Simulation;