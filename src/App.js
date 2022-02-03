
import './App.css';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import Footer from './components/FooterComponent';
import Header from './components/HeaderComponent';
import LocalShopsComponent from './components/LocalShopsComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path='/' component={HomeComponent}/>
            <Route path='/localshops' component={LocalShopsComponent}/>
            <Route path='/plantcare' component={PlantCareComponent}/>
          </Switch>
                  
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
