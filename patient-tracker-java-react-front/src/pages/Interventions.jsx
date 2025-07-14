import Table from '../components/Table'
import interventions from '../mock/interventions.json'

export default function Interventions() {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Interventions</h2>
      <Table
        data={interventions}
        columns={['id', 'description', 'staff', 'patient', 'véhicule']}
      />
    </div>
  )
}