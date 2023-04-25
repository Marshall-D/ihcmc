import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom'
import '../App.css';
import Navigation from './Navigation';
import CarouselPage from './CarouselPage';




function Formatter() {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ width: "100%" }}>
        <Header />
      </div>
      <Navigation />
      <CarouselPage></CarouselPage>
      <div
      
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Formatter;