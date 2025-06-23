import { Outlet } from 'react-router-dom';
import Footer from './component/common-component/footer/Footer';
import Header from './component/common-component/header/Header';
import { ServicesProvider } from './context/ServicesContext';
import { FooterNavigationProvider } from './context/FooterNavigationContext'; // ✅ Added

function App() {
  return (
    <>
      <ServicesProvider>
        <FooterNavigationProvider> {/* ✅ Wrap inside this */}
          <Header />
          <Outlet />
          <Footer />
        </FooterNavigationProvider>
      </ServicesProvider>
    </>
  );
}

export default App;
