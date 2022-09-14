import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import simpleResolver from './simpleResolver';
import Navigation from './pages/navigation/navigation';

const MetaCharset = () => <meta charSet="utf-8" />;
const MetaContent = () => <meta name="viewport" content="width=device-width, initial-scale=1.1, shrink-to-fit=no" />;

function App() {
  return (
      <div className="container-fluid">

        <MetaCharset />
        <MetaContent />
        <Navigation />
        {simpleResolver(window.location.pathname)}
      </div>
  );
}

export default App;
