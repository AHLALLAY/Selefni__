import { useNavigate } from "react-router-dom";

function Header({ isAuthentified = false }) {
    const navigationTo = useNavigate();
    const goToHome = () => {
        navigationTo("/");
    }
    const goToSimulation = () => {
        navigationTo("/simulation");
    }
    const goToConnexion = () => {
        navigationTo("/connexion");
    }
    return (
        <nav className="flex justify-between w-full pt-2 bg-gradient-to-b from-white to-black/5">
            <div className="mr-auto">
                <h1 className="flex ml-10 font-bold text-4xl text-blue-600"><img src="/salefni-32.png" alt="icon's app" />alefni</h1>
            </div>
            {isAuthentified ? (
                <div>
                    <button className="ml-4 mr-4 font-medium hover:border-b-2 rounded border-red-700">déconnexion</button>
                </div>
            ) : (
                <div>
                    <button onClick={goToHome} className="ml-4 mr-4 font-medium hover:border-b-2 rounded border-blue-700">Accueil</button>
                    <button onClick={goToSimulation} className="ml-4 mr-4 font-medium hover:border-b-2 rounded border-blue-700">Simulation</button>
                    <button onClick={goToConnexion} className="ml-4 mr-4 font-medium hover:border-b-2 rounded border-blue-700">Connexion</button>
                </div>
            )}
        </nav>
    );
}

export default Header;