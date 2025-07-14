import { FaAmbulance } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import interventions from '../mock/interventions.json';

export default function Dashboard() {
  const interventionsEnCours = interventions.slice(0, 3); // Limite à 3 pour l'aperçu

  return (



    
    <div className="  rounded-2xl p-6 shadow-lg max-w-6xl mx-auto bg-gray-900 text-white border border-gray-700">
      <div className="bg-white/5 rounded-2xl p-6 shadow-lg max-w-6xl mx-auto">
        <div className="flex items-start gap-6">
          {/* Logo à gauche, plus petit */}
          <div className="text-blue-500 text-4xl mt-1">
            <FaAmbulance />
          </div>
          

          {/* Texte principal */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">Bienvenue sur la Régulation Médicale</h2>
            <p className="text-base mb-4 leading-relaxed text-gray-300">
              Cette plateforme permet de suivre toutes les interventions d'urgence en temps réel et de gérer efficacement les ressources médicales.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li><Link to="/interventions" className="text-blue-400 underline">Suivre les interventions en cours</Link></li>
              <li><Link to="/patients" className="text-blue-400 underline">Voir les informations des patients</Link></li>
              <li><Link to="/staff" className="text-blue-400 underline">Consulter la liste des ambulanciers</Link></li>
            </ul>
          </div>
        </div>

        {/* Carte des interventions en cours */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-3">Interventions en cours</h3>

          <div className="bg-gray-800 bg-opacity-70 rounded-xl p-4 shadow-md overflow-x-auto">
            {interventionsEnCours.length === 0 ? (
              <p className="text-gray-400">Aucune intervention en cours pour le moment.</p>
            ) : (
              <table className="min-w-full text-sm text-white">
                <thead>
                  <tr className="text-left text-gray-400 border-b border-gray-600">
                    <th className="py-2 px-4">ID</th>
                    <th className="py-2 px-4">Description</th>
                    <th className="py-2 px-4">Personnel</th>
                    <th className="py-2 px-4">Patient</th>
                    <th className="py-2 px-4">Véhicule</th>
                  </tr>
                </thead>
                <tbody>
                  {interventionsEnCours.map((item) => (
                    <tr key={item.id} className="border-b border-gray-700 hover:bg-gray-700/30">
                      <td className="py-2 px-4">{item.id}</td>
                      <td className="py-2 px-4">{item.description}</td>
                      <td className="py-2 px-4">{item.staff}</td>
                      <td className="py-2 px-4">{item.patient}</td>
                      <td className="py-2 px-4">{item.véhicule}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <div className="mt-4 text-right">
              <Link to="/interventions" className="text-blue-400 hover:underline">
                Voir toutes les interventions →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
