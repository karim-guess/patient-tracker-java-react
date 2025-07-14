import Layout from './layout'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Patients from './pages/Patients'
import Staff from './pages/Staff'
import Interventions from './pages/Interventions'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/patients' element={<Patients />} />
        <Route path='/staff' element={<Staff />} />
        <Route path='/interventions' element={<Interventions />} />
      </Routes>
    </Layout>
  )
}