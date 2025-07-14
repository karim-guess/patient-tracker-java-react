export default function Table({ data, columns }) {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full bg-white shadow rounded'>
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col} className='px-4 py-2 border-b'>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className='text-center'>
              {columns.map(col => (
                <td key={col} className='px-4 py-2 border-b'>{item[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}