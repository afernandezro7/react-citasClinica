import React, { useEffect, useState } from 'react';
import Cita from './components/Cita';
import  Formulario  from './components/Formulario';


function App() {

  // citas en Local Storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = []
  }

  // Crear state de Citas(Arreglo de todas las citas)
  const [citas, setCitas] = useState(citasIniciales);

  // Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas]);

  //  Funcion que tome las citas actuales y agregue las nuevas
  const crearCita = cita =>{
    setCitas([...citas,cita])
    
  }
  
  //  Funcion eliminar cita por su id
  const eliminarCita = id =>{
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas);
    
  }

  // mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita}/>
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita=>(
              <Cita 
                key = {cita.id}
                cita = {cita}
                eliminarCita = {eliminarCita} 
              />
            ))}
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
