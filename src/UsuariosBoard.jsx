import { useEffect, useState } from "react"
import { API_DIR } from "./constantes";
import { Link } from "react-router-dom";



export function UsuariosBoard() {

    const [usuarios, setUsuario]=useState([])

    const jxUsuariosGet=()=>{
        fetch(API_DIR+"?Usuarios=GetAll")
        .then(resp=>resp.json())
        .then(data=>{
            // console.log(data)
            if(data.RespuestaBool==true) {
                setUsuario(data.Usuarios)
            }
        })
    }

    const jxUsuarioDel=(usuarioid)=> {
        let fd=new FormData();
        fd.append("UsuarioForm", "UsuarioDel");
        fd.append("usuarioid", usuarioid);
        fetch(API_DIR, {
            method: "POST",
            body: fd
        })
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data)
            if(data.RespuestaBool) {
                alert("USuarioEliminado")

            }
        })
    }

    useEffect(()=>{
        jxUsuariosGet()
    }, [])

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>
                {usuarios.map((usuario)=>(
                    <li key={usuario.id}>
                        <div>{usuario.nombres} {usuario.apellidos}</div>
                        <Link to={"/Usuarios/"+usuario.id}>Ver informacion completa</Link>
                        <div><button onClick={()=>{
                            jxUsuarioDel(usuario.id)
                        }}>Eliminar Usuario</button></div>
                        <hr/>
                    </li>
                ))}
            </ul>
        </div>
    )
}