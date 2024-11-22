import { useEffect, useState } from "react";
import { API_DIR } from "./constantes"
import { useParams } from "react-router-dom";
import { UsuarioEdit } from "./UsuarioEdit";

export function Usuario() {

    const [userData, setUserData]=useState()
    const [isLoading, setIsLoading]=useState(true);
    const [isEditing, setIsEditing]=useState(false);

    const {idusuarioin}=useParams();

    const jxUsuarioGet=(idin)=>{
        
        fetch(API_DIR+"?Usuario=UsuarioGet&UsuarioID="+idin)
        .then(resp=>resp.json())
        .then(data=>{
            if(data.RespuestaBool) {
                setUserData(data.Usuario);
                setIsLoading(false)
            }
        })
    }

    useEffect(()=>{
        jxUsuarioGet(idusuarioin);
    }, [idusuarioin])

    if(isLoading) {
        return (<h1>La Informacion del usuario se esta cargando</h1>)

    }

    return(
        <div>
            <h1>{userData.nombres} {userData.apellidos} : {userData.id}</h1>
            <p>{userData.correo}</p>
            <p>{userData.fecha}</p>
            <div><button onClick={()=>{
                setIsEditing((isEditing)?false:true);
            }}>Editar Usuario</button></div>
            {isEditing && <UsuarioEdit identificador={userData.id} nombres={userData.nombres} apellidos={userData.apellidos} correo={userData.correo} />}
        </div>
    )
}