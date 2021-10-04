import './App.css';

//components
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Home from './components/Home';
import Header from './components/Header';
import NotFound from './components/NotFound';

//router
import { BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
