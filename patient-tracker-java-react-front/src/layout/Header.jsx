import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem('auth') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-md p-3 flex justify-between items-center rounded-xl mt-2 mx-6">
      <h1 className="text-lg font-semibold text-white">Gestion des Interventions Médicales</h1>

      <div className="text-sm flex items-center gap-4 text-white">
        {isAuth && (
          <>
            <span>Bienvenue, Utilisateur</span>
            <button
              onClick={handleLogout}
              className="bg-blue-600 hover:bg-blue-700 transition-colors px-3 py-1 rounded-lg shadow"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
}
