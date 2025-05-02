
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Footer2 from './components/Footer2'

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="h-[65px]">
          <Navbar />
        </div>

        <main className="flex-grow">
          <Outlet />
        </main>

        <div className="h-[220px]">
          <Footer />
          {/* <Footer2 /> */}
        </div>
      </div>
    </>
  )
}

export default App
