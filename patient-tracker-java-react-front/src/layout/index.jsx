import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex flex-col flex-1'>
        <Header />
        <main className='p-4 overflow-y-auto'>{children}</main>
      </div>
    </div>
  )
}