import { useRef } from "react";
import { API_DIR } from "./constantes"

export function UsuarioNew() {

    const formref=useRef();

    const jxUsuarioRegistrar=(event)=>{
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
                alert("Usuario se Registro");
            }
        })
    }

    return (
        <form ref={formref} onSubmit={jxUsuarioRegistrar} >
            <h1>Usuario Registrar</h1>
            <div><label><b>Nombres: </b><input type="text" name="nombres"/></label></div>
            <div><label><b>Apellidos: </b><input type="text" name="apellidos"/></label></div>
            <div><label><b>Correo: </b><input type="text" name="correo" /></label></div>
            <div><label><b>Contraseña: </b><input type="password" name="contrasenia" /></label></div>
            <div>
                <input type="hidden" name="UsuarioForm" value="UsuarioNew" />
                <input type="submit" value ="Registrar" />
            </div>
        </form>
    )
}