# Examen Práctico 2
Desarrollo de la solución del segundo examen parcial de la materia de Desarrollo de aplicaciones web. Su descripción aparece a continuación:

## ¿Qué hay que hacer?
Realizar servicios *backend* que permitan agregar a una base de datos, ya sea no relacional o relacional, ciudades o lugares de interés. Se tiene que validar que los registros no se repitan dentro de la misma e incrementar el nivel de interés de cada una de las ciudades registradas.  

De igual manera, tenemos que realizar un servicio que nos permita visualizar las ciudades que hay en la base.

En concreto, se tiene que crear:
1. Servicio Create del CRUD para crear elementos. Este servicio actualiza un documento si ya está registrada la ciudad. 
2. Servicio Read del CRUD para poder leer los elementos dentro de la misma. Si se le da un JSON con algún país, este tiene que ser del tipo:
```json
{
  "country" : "France"
}
```
se le darán todos los lugares registrados de dicho país.

## ¿Cómo verificar?
La verificación se tiene que hacer por medio de postman usando las siguientes rutas:

```console
# post para agregar una localidad ->  'localhost:8080/location/agregarUbicacion'
# get para obtener una localidad ->  'localhost:8080/location/obtenerUbicaciones'
```
