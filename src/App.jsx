import { Outlet } from 'react-router-dom'
import Footer from './component/common-component/footer/Footer'
import Header from './component/common-component/header/Header'

function App() {


  return (

    <>
      <Header />
      <Outlet />
      <Footer />
    </>

  )
}

export default App
