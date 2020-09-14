import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    // Crear State de Citas
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha:'',
        hora:'',
        sintomas:''
    });

    const [error, setError] = useState(false)

    // Funcion que se ejecuta cada vez que el usurio escribe en el input
    const handleChange = ({target})=>{
        setCita({
            ...cita,
            [target.name]:target.value
        })
    }

    // Extraer los valores
    const { mascota, propietario, fecha, hora ,sintomas }= cita;

    // Manejando cuando el usuario oprime Agregar ciota
    const handleSubmit= e =>{
        e.preventDefault();
        
        // Validar 
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            setError(true)
            return;
        }

        // Eliminar mensaje de Error
        setError(false);

        // Asignar un id
        cita.id = uuidv4()
        

        // Crear Cita 
        crearCita(cita);

        // Reiniciar el form
        setCita({
            mascota: '',
            propietario: '',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }

    return (
        <>
            <h2>Crear Cita</h2>

            { error &&  <p className="alerta-error">Todos los campos son obligatorios</p>}

            <form 
                onSubmit={handleSubmit}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={ mascota }
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={handleChange}
                    value={ propietario }
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={ fecha }
                    
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={ hora }
                    
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                    value={ sintomas }
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </>
    )
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;