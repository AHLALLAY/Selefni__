function Connexion() {
    return (
        <div className="flex flex-col justify-center items-center mt-8">
            <form className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-bold text-blue-700">Connexion</h1>
                    <p className="text-gray-600 text-sm">Votre espace d'admin en attend</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        maxLength={50}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        required
                        minLength={6}
                        maxLength={10}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        Connexion
                    </button>
                </div>
            </form>
            <div className="w-full max-w-md mt-4 p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-sm">
                <h3 className="text-center text-sm font-semibold text-gray-700 mb-2 border-b-2 border-gray-300 pb-2">Informations de test</h3>
                <div className="space-y-1 text-sm text-gray-600">
                    <p><span className="font-medium">Email :</span> abderrahmanahlalay76@gmail.com</p>
                    <p><span className="font-medium">Mot de passe :</span> admin_</p>
                </div>
            </div>
        </div>
    );
}

export default Connexion;
