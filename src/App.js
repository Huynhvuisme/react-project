
import './App.css';
import Slide from './Slide/Swiperapi' ;
import Header from './pages/Header';
import Footer from './pages/Footer';
import Menu from './component/menu';
import SwapTheme from './component/swichTheme';
function App() {
  return (
    <>
      <Menu />
      <Header />
      <SwapTheme />
      <div className='container'>
        <Slide movieName = "naruto" />
        <Slide movieName = "conan" />
        <Slide movieName = "one piece" />
      </div>
      <Footer />
    </>
  );
}

export default App;
