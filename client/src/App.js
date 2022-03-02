import './App.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import AppRoutes from './Routes/AppRoutes';
import NewProductForm from './components/NewProductForm/NewProductForm';


function App() {
  return (
    <div>
      <Navigation />

      <AppRoutes />

      <Footer />

    </div>
  );
}

export default App;
