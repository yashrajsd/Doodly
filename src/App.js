import logo from './logo.svg';
import './App.css';
import LandingPage from './routes/landing page/LandingPage';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001')

function App() {
  return (
    <div className="App">
      <LandingPage/>
    </div>
  );
}

export default App;
