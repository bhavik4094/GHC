import { Outlet } from 'react-router-dom'
import Footer from './component/common-component/footer/Footer'
import Header from './component/common-component/header/Header'
import { ServicesProvider } from './context/ServicesContext'; // ✅ Make sure path is correct

function App() {


  return (

    <>
      <ServicesProvider>
        <Header />
        <Outlet />
        <Footer />
      </ServicesProvider>
    </>

  )
}

export default App
