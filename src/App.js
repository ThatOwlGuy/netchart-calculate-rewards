import logo from './logo.svg';
import './App.css';
import simpleResolver from './simpleResolver';
import Navigation from './pages/navigation/navigation';

function App() {
  return (
      <>
        <Navigation />
        {simpleResolver(window.location.pathname)}
      </>
  );
}

export default App;
