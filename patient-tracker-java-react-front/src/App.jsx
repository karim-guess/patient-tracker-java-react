import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Layout from './layout';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Staff from './pages/Staff';
import Interventions from './pages/Interventions';
import Login from './pages/Login';

// Route privée avec layout inclus
const PrivateRoute = () => {
  const isAuth = localStorage.getItem('auth') === 'true';
  return isAuth ? <Layout><Outlet /></Layout> : <Navigate to="/login" replace />;
};

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* Toutes les routes protégées passent ici */}
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/interventions" element={<Interventions />} />
      </Route>

      {/* Redirection si aucune route ne matche */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
