import './App.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import AppRoutes from './Routes/AppRoutes';


function App() {
  return (
    <div>

      <Navigation />
      <div className='app-container'>
        <AppRoutes />
      </div>

      <Footer />

    </div>
  );
}

export default App;
