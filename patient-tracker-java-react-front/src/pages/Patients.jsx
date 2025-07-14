import Table from '../components/Table'
import patients from '../mock/patients.json'

export default function Patients() {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Patients</h2>
      <Table data={patients} columns={['id', 'nom', 'âge', 'adresse']} />
    </div>
  )
}