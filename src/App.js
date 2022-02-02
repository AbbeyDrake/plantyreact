
import './App.css';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import Footer from './components/FooterComponent';
import Header from './components/HeaderComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Switch>
              
          </Switch>
                  
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
