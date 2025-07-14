import Table from '../components/Table'
import staff from '../mock/staff.json'

export default function Staff() {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Staff</h2>
      <Table data={staff} columns={['id', 'nom', 'rôle']} />
    </div>
  )
}