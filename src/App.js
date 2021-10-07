import './App.css';

//components
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import SingleCategory from './components/SingleCategory';
import SinglePage from './components/SinglePage';
import SinglePost from './components/SinglePost';

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
          <Route path="/category/:name/:id">
            <SingleCategory />
          </Route>
          <Route path="/posts/:id">
            <SinglePost />
          </Route>
          <Route path="/pages/:id">
            <SinglePage />
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
