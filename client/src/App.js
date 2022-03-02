import './App.css';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetails';


function App() {
  return (
    <>
      <Navigation />
      <HomePage />
      <ProductDetailsPage />
    </>
  );
}

export default App;
