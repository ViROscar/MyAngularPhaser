# MyAngularPhaser
El motivo principal de realizar este proyecto es aprender un poco angular.

Usualmente cuando se aprende una nueva tecnología (Al menos los casos que me han tocado ver para aplicaciones web) se suelen hace formularios donde el usuario puede realizar consultas a múltiples registros ademas de poder agregar, editar y eliminar. 

En mi caso personal, preferí realizar un pequeño demo de un videojuego ya que siento que esto me ayudaría a realizar un ejercicio un poco mas avanzado (ademas me gustan los videojuegos).

Para realizar el videojuego utilice phaser (Mas información https://phaser.io/).
Esto no es algo nuevo, me base en el este tutorial: (En ingles) https://medium.com/@braelynnn/using-phaser-in-an-angular-8-component-53644a2280e3

A continuación tratare de describir los pasos que segui para realizar la aplicación.

## Preparación del ambiente

Primeramente crear el proyecto:

```
ng new <nombre del proyecto>
```

Estando adentro del fólder donde se creo el proyecto, Instalar phaser 

```
npm i phaser
```

En el archivo `“angular.json”` se agregara la referencia a phaser agregando la referencia   `“node_modules/phaser/dist/phaser.min.js”` en la ruta `“projects > <nombre del proyecto> > architect
 > build > options > scripts”`

Se debe de ver como a continuación:

```
"scripts": ["node_modules/phaser/dist/phaser.min.js"]
```
