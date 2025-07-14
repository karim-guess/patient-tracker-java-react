import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem('auth') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <header className='bg-white shadow p-4 flex justify-between items-center'>
      <h1 className='text-xl font-bold'>Gestion des Interventions Médicales</h1>

      <div className='text-sm flex items-center gap-4'>
        {isAuth && (
          <>
            <span>Bienvenue, Utilisateur</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
}
