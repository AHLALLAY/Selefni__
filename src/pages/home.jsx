import landingPage from "../assets/landingPage.png";

function Home() {
    return (
        <div className="relative w-full h-[76vh]">
            <div>
                <img
                    src={landingPage}
                    alt="Landing Page"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-black/30 to-black/60"></div>
            </div>
            <div className="relative z-50">
                <h1 className="flex items-center justify-center text-center text-4xl md:text-8xl text-blue-600 font-bold mt-10 gap-4">
                    <img src="/salefni-384.png" alt="Salefni" className="w-16 h-16 md:w-24 md:h-24" />
                    <span>alefni</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-4 text-center mt-20">
                    <div className="bg-white/50 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-white/70 cursor-pointer">
                        <h3 className="w-full text-center font-medium bg-blue-600 text-white py-2 mb-2 transition-colors duration-300 hover:bg-blue-700">Auto</h3>
                        <p className="font-medium text-gray-900 px-4 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt hic laboriosam, iusto officia nemo sunt ducimus possimus optio earum alias distinctio sint facere molestias consequuntur eum. Et, maxime placeat.</p>
                    </div>
                    <div className="bg-white/50 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-white/70 cursor-pointer">
                        <h3 className="w-full text-center font-medium bg-blue-600 text-white py-2 mb-2 transition-colors duration-300 hover:bg-blue-700">Consommation</h3>
                        <p className="font-medium text-gray-900 px-4 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt hic laboriosam, iusto officia nemo sunt ducimus possimus optio earum alias distinctio sint facere molestias consequuntur eum. Et, maxime placeat.</p>
                    </div>
                    <div className="bg-white/50 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-white/70 cursor-pointer">
                        <h3 className="w-full text-center font-medium bg-blue-600 text-white py-2 mb-2 transition-colors duration-300 hover:bg-blue-700">Immobilier</h3>
                        <p className="font-medium text-gray-900 px-4 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt hic laboriosam, iusto officia nemo sunt ducimus possimus optio earum alias distinctio sint facere molestias consequuntur eum. Et, maxime placeat.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;