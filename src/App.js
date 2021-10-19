import './App.css';
import { Switch,Route } from 'react-router-dom';
import Header from '../src/components/shared/Header/Header'
import Footer from '../src/components/shared/Footer/Footer'
import Home from './pages/home/home';
import Cadastro from './pages/cadastro/cadastro';
import Todoview from './pages/view/todoview';
import Edicao from './pages/edicao/edicao';

function App() {
  return (
    <div className="app">
      <Header/>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/cadastro" component={Cadastro}/>
          <Route path="/view/:id" component={Todoview}/>
          <Route path="/edit/:id" component={Edicao}/>
        </Switch>
      <Footer/>
    </div>    
  );
}

export default App;
