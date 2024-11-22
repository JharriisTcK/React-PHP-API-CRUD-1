# Aplicacion frontend con React + PHP (CRUD API)
En esta actividad realizaremos la construccion de una aplicacion que se comunique con una API.

En el frontend se utilizara el framework de JavaScript llamado **"React"**


<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" style="max-height: 10em" alt="React">


En el backend se utilizara **PHP**, como servidor.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" style="max-height: 10em" alt="PHP">

El objetivo es realizar el CRUD con la base de datos (Create Read Update Delete) de un sistema de usuarios basico.

***

## Configurar

Dentro del proyecto esta la carpeta PHP, que incluye el archivo **API_CRUD.php**, colocar en un servidor PHP, como Apache

Este archivo contiene las funciones necesarias para la conexion con la base de datos.

Al inicio del archivo estan las constantes de conexion, modificarlas si es necesario.

***

# Video de Desarrollo

<iframe width="560" height="315" src="https://www.youtube.com/embed/7gGg2rp4yQo?si=GX_cFUy1K8sDLZbI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

***

## Documentación API

### Obtener Usuarios (Todos)

**Métodos de petición HTTP:** GET

| Nombre | Valor requerido |
|----------|----------|
| Usuarios    | GetAll |


**Respuesta JSON**

```
{
    RespuestaBool: (boolean),
    Usuarios: [ 
        {
            id: int
            nombres: str;
            apellidos: str;
            correo: str;
            fecha: str;
        }
        , {}, ... ],
    RespuestaError: (str)
}
```

***

### Obtener Usuario (1)

**Métodos de petición HTTP:** GET

* API_Crud.php?Usuario=UsuarioGet & UsuarioID=:int:



**Respuesta JSON**

```
{
    RespuestaBool: (boolean),
    Usuario: {
        id: int,
        nombres: str,
        apellidos: str,
        correo: str,
        fecha: str
    },
    RespuestaError: (str)
}
```


***

### Crear Usuarios

**Métodos de petición HTTP:** POST

* API_Crud.php? UsuarioForm=UsuarioNew  & nombres=:string:  & apellidos=:string:  & correo=:string:  & contrasenia=:string:  & 

| Nombre | Valor requerido |
|----------|----------|
| UsuarioForm    | UsuarioNew |
| nombres    | :str   | 
| apellidos   | :str   |
| correo   | :str   |
| contrasenia   | :str   |


**Respuesta JSON**

```
{
    RespuestaBool: (boolean)
    RespuestaError: (str)
}
```

***

### Actualizar Usuario

**Métodos de petición HTTP:** POST

| Nombre | Valor requerido |
|----------|----------|
| UsuarioForm    | UsuarioEdit |
| usuarioid    | :int   | 
| nombres    | :str   | 
| apellidos   | :str   |
| correo   | :str   |
| contrasenia   | :str   |

**Respuesta JSON**

```
{
    RespuestaBool: (boolean)
    RespuestaError: (str)
}
```

***

### Eliminar Usuario

**Métodos de petición HTTP:** POST

* API_Crud.php? UsuarioForm=UsuarioDel  & usuarioid=:int:


**Respuesta JSON**

```
{
    RespuestaBool: (boolean)
    RespuestaError: (str)
}
```

***

# Creditos

Actividad para SENA - Analisis y Desarrollo de Software - 2024
**Aprendiz:** Harry Jeisson Silva
**Instructora:** Melissa Andrea Díaz

**Estilo CSS:** Water.css - https://watercss.kognise.dev/

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5cOEDU3qHCLxvlZqON5F3GO7h-HamOFI-zQ&s" alt="Logo Sena" />