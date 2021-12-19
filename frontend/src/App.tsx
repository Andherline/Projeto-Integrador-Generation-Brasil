import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastro/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroProduto from './components/produtos/cadastroProduto/CadastroProduto';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CadastroCategoria from './components/categoria/cadastroCategoria/CadastroCategoria';
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria';
import ListaProduto from './components/produtos/listaProduto/ListaProduto';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import Compra from './paginas/compras/Compra';


//import TesteHome from './paginas/testehome/TesteHome';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <Switch>
          <div style={{ minHeight: '100vh' }}>

            <Route exact path='/'>
              <Login />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/cadastrousuario'>
              <CadastroUsuario />
            </Route>

            <Route path='/categorias'>
              <ListaCategoria />
            </Route>

            <Route path='/produtos'>
              <ListaProduto />
            </Route>

            <Route exact path='/cadastrarcategorias'>
              <CadastroCategoria />
            </Route>

            <Route exact path='/cadastrarcategorias/:id'>
              <CadastroCategoria />
            </Route>
            
            <Route path='/deletarcategorias/:id'>
              <DeletarCategoria />
            </Route>

            <Route exact path='/cadastrarproduto'>
              <CadastroProduto />
            </Route>

            <Route exact path='/cadastrarproduto/:id'>
              <CadastroProduto />
            </Route>

            <Route exact path='/deletarproduto/:id'>
              <DeletarProduto />
            </Route>

            <Route exact path='/comprar/:id'>
              <Compra />
            </Route>
          </div>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
