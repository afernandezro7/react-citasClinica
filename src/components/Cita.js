import React from 'react'
import PropTypes from 'prop-types'

const Cita = ({cita, eliminarCita}) => {

    const { id,mascota, propietario, fecha, hora ,sintomas }= cita;

    const handleClick=()=>{
        eliminarCita(id);
    }
    
    return (
        <div 
            id ={id}
            className="cita"
        >
            <p>Mascota: <span>{ mascota }  </span> </p>
            <p>Propietario: <span>{ propietario }  </span> </p>
            <p>Fecha: <span>{ fecha }  </span> </p>
            <p>Hora: <span>{ hora }  </span> </p>
            <p>Síntomas: <span>{ sintomas }  </span> </p>

            <button
                className="button eliminar u-full-width"
                onClick={ handleClick }
            >Eliminar &times;</button>
        </div>
    )
}

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita
