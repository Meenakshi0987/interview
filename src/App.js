
import './App.scss';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import movieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <Router>
      <Header></Header>
      <div className='container'> 
      <Switch> 
      <Route path="/" exact component={Home}/>
    <Route path="/movie/:imdbID" component={movieDetail}/>
    <Route component={PageNotFound}/>
     </Switch>
     </div>
    <Footer/>
      </Router>
    </div>
  );
}

export default App;
