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

## Screenshots de prueba
* Servicio de dar de alta una nueva localidad
![create](https://user-images.githubusercontent.com/42308682/138467829-59a20c71-c1d4-4fae-810d-891dbfdfc615.png)

* Servicio de actualizar el nivel de interes de un lugar
![update](https://user-images.githubusercontent.com/42308682/138467896-d3887483-9115-4203-b885-160900e941e7.png)

* Servicio de ver todos los lugares registrados
![see all](https://user-images.githubusercontent.com/42308682/138467982-170443b2-f7f2-4adf-9c75-f7f17513a7ab.png)

* Servicio de ver los lugares por un país específico
![locations by country](https://user-images.githubusercontent.com/42308682/138467938-9c8a7e3e-ec32-4d52-af8a-8c265d1de308.png)
