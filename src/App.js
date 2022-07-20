import './App.css';
import Navbar from './component/Navbar'
import Rectangle from './component/Rectangle';
import Body from './component/Body';
import Article from './component/Article';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Rectangle/>
      <Body/>
      <Article/>
      <Footer/>
    </div>
  );
}

export default App;
