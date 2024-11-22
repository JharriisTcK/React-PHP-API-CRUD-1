import { useRef, useState } from "react";
import { API_DIR } from "./constantes"
import PropTypes from "prop-types";

export function UsuarioEdit({identificador, nombres, apellidos, correo}) {

    const formref=useRef();
    const [isEdited, setIsEdited]=useState(false);

    const jxUsuarioEditar=(event)=>{
        event.preventDefault();
        let fd=new FormData(formref.current)
        fetch(API_DIR, {
            method: "POST",
            body: fd
        })
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data);
            if(data.RespuestaBool==true) {
                alert("Usuario se edito");
                setIsEdited(true);
            }
        })
    }

    return (
        <form ref={formref} onSubmit={jxUsuarioEditar} >
            <h1>Usuario Editar</h1>
            <div><label><b>Nombres: </b><input type="text" name="nombres" defaultValue={nombres} required /></label></div>
            <div><label><b>Apellidos: </b><input type="text" name="apellidos" defaultValue={apellidos} required /></label></div>
            <div><label><b>Correo: </b><input type="text" name="correo" defaultValue={correo} required  /></label></div>
            <div><label><b>Contraseña: </b><input type="password" name="contrasenia" required  /></label></div>
            <div>
                <input type="hidden" name="UsuarioForm" value="UsuarioEdit" />
                <input type="hidden" name="usuarioid" value={identificador} />
                <input type="submit" value ="Editar Usuario" />
            </div>
            {isEdited && <h2>El Usuario se ha editado</h2>}
        </form>
    )
}

UsuarioEdit.propTypes={
    identificador: PropTypes.number.isRequired,
    nombres: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    correo: PropTypes.string.isRequired
}