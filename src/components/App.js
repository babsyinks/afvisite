import Header from './Header';
import ScrollToTop from './ScrollToTop';
import Home from './Home';
import VisionAndMission from './VisionAndMission';
import About from './About';
import Components from './Components';
import Contact from './Contact';
import Contents from './Contents';
import Footer from './Footer'
import NotFound from './NotFound';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop>
            <Header/>
            <Routes>
                <Route exact path = '/' element = {<Home />}/>
                <Route exact path = '/about' element = {<About />}/>
                <Route exact path = '/vision_mission' element = {<VisionAndMission />}/>
                <Route exact path = '/components' element = {<Components />}/>
                <Route exact path = '/contents' element = {<Contents />}/>
                <Route exact path = '/contact' element = {<Contact />}/>
                <Route path='*' element = {<NotFound/>} />
            </Routes> 
            </ScrollToTop>
        </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
