import './App.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import AppRoutes from './Routes/AppRoutes';
import UserMessage from './components/UserMessage/UserMessage';


function App() {




  return (
    <div>

      <Navigation />
      <div className='app-container'>
        <AppRoutes />
      </div>
      <UserMessage />
      <Footer />

    </div>
  );
}

export default App;
