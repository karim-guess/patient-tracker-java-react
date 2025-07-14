export default function Table({ data, columns }) {
  return (
    <div className="overflow-x-auto rounded-lg shadow-lg">
      <table className="min-w-full bg-gray-900 text-white rounded-lg border border-gray-700">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                className="px-4 py-3 border-b border-gray-700 text-left uppercase text-sm tracking-wider"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr
              key={i}
              className="border-b border-gray-700 hover:bg-gray-800 transition-colors"
            >
              {columns.map((col) => (
                <td key={col} className="px-4 py-2 text-left align-top">
                  {item[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
