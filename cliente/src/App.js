import React , {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Empadronamientos from './components/Empadronamientos';
import AgregarEmpadronamientos from './components/AgregarEmpadronamiento';
import EditarEmpadronamientos from './components/EditarEmpadronamientos';
import EmpadronamientosDetalles from './components/EmpadronamientosDetalles';
import Categorias from './components/Categorias';
import AgregarCategoria from './components/AgregarCategoria';
import EditarCategoria from './components/EditarCategoria';
import Actividades from './components/Actividades';
import AgregarActividad from './components/AgregarActividad';
import EditarActividad from './components/EditarActividades';


function App() {

  const [categorias, guardarCategorias] = useState([]);
  const [actividades, guardarActividades] = useState([]);
  const [empadronamientos, guardarEmpadronamientos] = useState([]);
 // const [empadronamientosDetalles, guardarEmpadronamientosDetalles] = useState([]);

  const [recargarCategorias , guardarRecargarCategorias] = useState(true);
  const [recargarActividades , guardarRecargarActividades] = useState(true);
  const [recargarEmpadronamientos , guardarRecargarEmpadronamientos] = useState(true);
  //const [recargarEmpadronamientosDetalles , guardarRecargarEmpadronamientosDetalles] = useState(true);
/*
  useEffect( (id)=>{
    if(recargarEmpadronamientosDetalles){
        const consultarApi = async() => {
          console.log('*****************************');
          console.log(categorias);
          console.log('*****************************');
          const resultado = await axios.get('http://localhost:3005/datosbasicos/muestraempadronamientodetalle/', {params:{id_empadronamiento : id}});
     //     guardarEmpadronamientosDetalles(resultado.data);
          console.log(resultado.data);
        }
        consultarApi();

        guardarRecargarEmpadronamientosDetalles(false);
    }
  },[recargarEmpadronamientosDetalles]);
*/
  useEffect( ()=>{
      if(recargarCategorias){
          const consultarApi = async() => {
            const resultado = await axios.get("http://localhost:3005/administracion/muestracategorias")
            console.log(resultado);   
            guardarCategorias(resultado.data);
          }
          consultarApi();

          guardarRecargarCategorias(false);
      }
  },[recargarCategorias])

  useEffect( ()=>{
    if(recargarActividades){
        const consultarApi = async() => {
          const resultado = await axios.get("http://localhost:3005/administracion/muestraactividades/")
          console.log(resultado);   
          guardarActividades(resultado.data);
        }
        consultarApi();

        guardarRecargarActividades(false);
    }
  },[recargarActividades])

  useEffect( ()=>{
    if(recargarEmpadronamientos){
        const consultarApi = async() => {
          const resultado = await axios.get("http://localhost:3005/datosbasicos/muestraempadronamiento/")
          console.log(resultado);   
          guardarEmpadronamientos(resultado.data);
        }
        consultarApi();

        guardarRecargarEmpadronamientos(false);
    }
  },[recargarEmpadronamientos]);
  
  return (
    <Router>
      <Header />
      <main className="container mt-5 pb-5">
        <Switch>

          {/* **************** EMPADRONAMIENTOS **************** */}

          <Route  exact path="/empadronamientos" 
                  render={() => (
                    <Empadronamientos 
                        empadronamientos = {empadronamientos}
                        guardarRecargarEmpadronamientos = {guardarRecargarEmpadronamientos}
                    />)
                  }
          />
          
          <Route exact path="/nueva-categoria" 
                 render = {() => (
                   <AgregarCategoria 
                       guardarRecargarCategorias = {guardarRecargarCategorias}
                   />
                 )} 
          />
          
          <Route exact path="/nuevo-empadronamiento" 
                 render = {() => (
                   <AgregarEmpadronamientos 
                      listadoDeCategorias = {recargarCategorias}
                      guardarRecargarEmpadronamientos = {guardarRecargarEmpadronamientos}
                      categorias = {categorias}
                      guardarRecargarCategorias = {guardarRecargarCategorias}
                    />
                 )} 
          />
          <Route exact path="/empadronamientos/editar/:id" 
                 render = {props => {
                    const idEmpadronamiento = parseInt(props.match.params.id);
                    const empadronamiento = empadronamientos.filter(empadronamiento => empadronamiento.id_empadronamiento === idEmpadronamiento);

                  return(
                   <EditarEmpadronamientos
                      empadronamiento = {empadronamiento[0]}
                      guardarRecargarEmpadronamientos = {guardarRecargarEmpadronamientos}
                   />
                  )
                 }}  
          />

          {/* **************** EMPADRONAMIENTOS -> DETALLES **************** */}
          
            <Route  exact path="/empadronamientodetalles/visualizar/:id" 
                    render = {props => {
                    const idEmpadronamiento = parseInt(props.match.params.id);
                    const empadronamiento = empadronamientos.filter(empadronamiento => empadronamiento.id_empadronamiento === idEmpadronamiento);

                  return(
                   <EmpadronamientosDetalles
                      empadronamiento = {empadronamiento[0]}
                      categorias = {categorias}
                /*      actividadesPorSocio = {actividadesPorSocio}*/
                      guardarRecargarCategorias = {guardarRecargarCategorias}
                  />
                  )
                 }}
                 />

          {/* **************** CATEGORIAS **************** */}

          <Route exact path="/categorias" render={()=>(
                                                      <Categorias 
                                                          categorias = {categorias}
                                                          guardarRecargarCategorias = {guardarRecargarCategorias}
                                                      />)
                                          }
          /> 
          <Route exact path="/categorias/editar/:id" 
                 render = {props => {
                    const idCategoria = parseInt(props.match.params.id);
                    const categoria = categorias.filter(categoria => categoria.id_categoria === idCategoria);

                  return(
                   <EditarCategoria
                      categoria = {categoria[0]}
                      guardarRecargarCategorias = {guardarRecargarCategorias}
                   />
                  )
                 }}  
          />

          {/* ****************ACTIVIDADES**************** */}

          <Route exact path="/actividades" render={()=>(
                                                      <Actividades 
                                                          actividades = {actividades}
                                                          guardarRecargarActividades = {guardarRecargarActividades}
                                                      />)
                                          }
          />
          <Route exact path="/nueva-actividad" 
                 render = {() => (
                   <AgregarActividad 
                       guardarRecargarActividades = {guardarRecargarActividades}
                   />
                 )} 
          />
          <Route exact path="/actividades/editar/:id" 
                 render = {props => {
                    const idActividad = parseInt(props.match.params.id);
                    const actividad = actividades.filter(actividad => actividad.id_actividad === idActividad);

                  return(
                   <EditarActividad
                      actividad = {actividad[0]}
                      guardarRecargarActividades = {guardarRecargarActividades}
                   />
                  )
                 }}  
          />

        </Switch>
      </main>
      <p className="text-center">Todos los derechos reservados</p>
    </Router>
  );
}

export default App;
