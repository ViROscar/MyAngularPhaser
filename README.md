# MyAngularPhaser
El motivo principal de realizar este proyecto es aprender un poco angular.

Usualmente cuando se aprende una nueva tecnología (Al menos los casos que me han tocado ver para aplicaciones web) se suelen hace formularios donde el usuario puede realizar consultas a múltiples registros ademas de poder agregar, editar y eliminar. 

En mi caso personal, preferí realizar un pequeño demo de un videojuego ya que siento que esto me ayudaría a realizar un ejercicio un poco mas avanzado (ademas me gustan los videojuegos).

Para realizar el videojuego utilice phaser (Mas información https://phaser.io/).
Esto no es algo nuevo, me base en este tutorial: (En ingles) https://medium.com/@braelynnn/using-phaser-in-an-angular-8-component-53644a2280e3

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

En el archivo `“angular.json”` se agregara la referencia a phaser agregando `“node_modules/phaser/dist/phaser.min.js”` en la ruta `“projects > <nombre del proyecto> > architect > build > options > scripts”`

Se debe de ver como a continuación:

```
"scripts": ["node_modules/phaser/dist/phaser.min.js"]
```

También se agregara la referencia a un archivo  json que servirá como la base de datos de donde se consultara la información para los elementos dentro del juego. 

En el archivo `“angular.json”`, se agrega la referencia a `“src/static-pages/MyFile.json”` en la ruta `“projects > <nombre del proyecto> > architect > build > options > assets”` 

Se debe de ver como a continuación:

```
            "assets": [
              "src/favicon.ico",
              "src/assets",
              "src/static-pages/MyFile.json"
            ],
```

Como se puede ver en la referencia agregada, dentro de `src` se crea la carpeta `“static-pages”` y adentro se crea `“MyFile.json”`. (Explicación del contenido mas adelante)

## MyFile.json

El contenido de este archivo sera un arreglo con las configuraciones para inicializar objetos dentro de un escenario en el juego.

La estructura que utilizo es la siguiente:

```
[
   {
        "Name": "",
        "InitialLocation": {
            "x": ,
            "y": 
        },
        "Platforms": [
            {
                "x": ,
                "y": ,
                "width": 
            }
        ],
        "Enemies": [
            {
                "x": ,
                "y": 
            }
        ],
        "Points": [
            {
                "x": ,
                "y": 
            }
        ]
    }
]
```

`Name` sera el nombre del escenario. este campo servira como referencia para la consulta.

`InitialLocation` es la posicion inicial en el escenario.

`Platforms` es un arreglo con las plataformas donde podra caminar el jugador.

`Enemies` es un arreglo con los enemigos del escenario.

`Points` es un arreglo con los puntos a recolectar en el escenario.

## Angular

Se crea el servicio `ctrlphs` (Es preferible escoger otro nombre ya que este no es descriptivo)

```
ng generate service ctrlphs 
```

y se crea el componente `game`

```
ng generate component game
```

Tambien se crearan las siguientes interfaces 

```
DataScene.ts

GameLocation.ts

Platform.ts

Enemy.ts

Point.ts
```

Estas serviran para almacenar la informacion consultada en `MyFile.json` 

### DataScene.ts

```
import { Platform } from './Platform';
import { GameLocation } from './GameLocation';
import { Enemy } from './Enemy';
import { Point } from './Point';

export interface DataScene{
    Name:string;
    InitialLocation:GameLocation;
    Platforms:Platform[];
    Enemies:Enemy[];
    Points:Point[];
}
```

### GameLocation.ts

```
export interface GameLocation{
    x:number;
    y:number;
}
```

### Platform.ts

```
export interface Platform{
    x:number;
    y:number;
    width:number;
}
```

### Enemy.ts

```
export interface Enemy{
    x:number;
    y:number;
}
```

### Point.ts

```
export interface Point{
    x:number;
    y:number;
}
```

### ctrlphs-service.ts

dentro del servicio, se agregaran los siguientes elementos:

```
private dataUrl = 'static-pages/MyFile.json';
```

donde la variable `dataUrl` es la referencia a `MyFile.json`.

```
  getData(name:string):Observable<DataScene>{
    return this.http.get<DataScene[]>(this.dataUrl).pipe(map(x => { return x.find(xx => xx.Name === name) }));
  }
```

El metodo `getData` consultara `MyFile.json` para obtener la informacion que se interpretara como un arreglo de `DataScene` y se filtrara el resultado usando el parametro `name`

**Codigo:**

```
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DataScene } from './DataScene';

@Injectable({
  providedIn: 'root'
})
export class CtrlphsService {
  private dataUrl = 'static-pages/MyFile.json';

  constructor(private http:HttpClient) { }

  getData(name:string):Observable<DataScene>{
    return this.http.get<DataScene[]>(this.dataUrl).pipe(map(x => { return x.find(xx => xx.Name === name) }));
  }
}
```

### game.component.ts


**Codigo:**

```
import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';
import { MainScene} from '../mainScene';
import { CtrlphsService } from '../ctrlphs.service';
import { DataScene } from '../DataScene';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  dataScene: DataScene[];

  constructor(private ctrlphsService:CtrlphsService) { 
    this.config = {
      type: Phaser.AUTO,
      height: 600,
      width: 800,
      parent: 'gameContainer',
      backgroundColor: '#dddddd',
      physics: {
        default: 'arcade',
        arcade:{
          gravity:{y:300}
        }
      }
    };
    
  }

  ngOnInit(): void {
    this.phaserGame = new Phaser.Game(this.config);
  }

  callScene(sceneName:string){
    this.loadScene(sceneName);
  }

  private loadScene(sceneName:string){
    this.ctrlphsService.getData(sceneName).subscribe(x => {
      if(this.phaserGame.scene.getScenes(true).length){
        let nm=this.phaserGame.scene.getScenes(true)[0].scene.key;
        this.phaserGame.scene.stop(nm);
        this.phaserGame.scene.remove(nm);
      }
      this.phaserGame.scene.add(sceneName,new MainScene(x));
      this.phaserGame.scene.start(sceneName);
    });
  }

}
```

