import './App.css';
import {Header} from './components/header/Header';
import {Navigation} from './components/navagation/Navigation';
import { Body } from './components/body/Body';
// import from './images/screens/1.png'
function App() {

  

  return (
    <div className="App">
        <Header/>
        <Navigation/>
        <Body/>
    </div>
  );
}

export default App;
