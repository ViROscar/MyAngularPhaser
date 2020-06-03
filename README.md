# MyAngularPhaser

**Ejecutar:** https://viroscar.github.io/MyAngularPhaser/

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

En el componente se agregaran los siguientes elementos:

```
phaserGame: Phaser.Game;
config: Phaser.Types.Core.GameConfig;
```

`phaserGame: Phaser.Game` almacenara la referencia al juego.
`config: Phaser.Types.Core.GameConfig` almacenara la configuracion que requiere phaser para el juego.

```
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
```

En el constructor se inyecta el servicio `ctrlphs` y ademas se asignan los valores a `config`

En los valores que importan para el lado de angular dentro de `config` es `parent` ya que este es el id del elemento html que servira como contenedor del juego.

```
  ngOnInit(): void {
    this.phaserGame = new Phaser.Game(this.config);
  }
```

En `ngOnInit` se inicializara `phaserGame` con la configuracion en `config`

```
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
```

`callScene` sera el metodo se encargara de llamar al metodo `loadScene` con el que se desplegara el escenario del juego


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

### game.component.html

Para el template del componente se crea un contenedor con el id `gameContainer` que sera donde se pintara el escenario del juego y se agregaran lo dos botones (`scene a` y `scene b`) que serviran para llamar al metodo `callScene` y cargar  el escenario.

**Codigo:**

```
<section class="gameSection">
    <div id="gameContainer">    
    </div>
</section>
<section>
    <button (click)="callScene('sceneA')">scene a</button>
    <button (click)="callScene('sceneB')">scene b</button>
</section>
```

## Phaser

Para cargar el juego se utilizaran los objetos de Phaser.

Ellos tienen un excelente tutorial en su sitio (https://phaser.io/tutorials/making-your-first-phaser-3-game/part1).

Para este proyecto trato de diseñarlo como un entorno de programacion orientada a objetos y se crean los siguientes objetos:

`MainScene`: Objeto para reprecentar la escena.

`CustomObject`: Objeto para reprecentar al jugador. Implementa a `implementa a Phaser.GameObjects.Rectangle`.

`EnemyObject`: Objeto para reprecentar al enemigo. Implementa a `implementa a Phaser.GameObjects.Rectangle`.

`PointsObject`: Objeto para reprecentar los puntos. Implementa a `implementa a Phaser.GameObjects.Rectangle`.


### MainScene.ts

Este objeto reprecenta una escena y extiende de `Phaser.Scene`. Contiene los siguientes metodos:

`create()`: Este metodo se debe de implementar. Aqui se inicializa al jugador `CustomObject` y mandara a llamar los metodos `loadEnemies`, `loadPlatforms` y `loadPoints`.

`preload()`: Este metodo se debe de implementar. No se utiliza para este proyecto ya que no se cargan recursos externos.

`update()`: Este metodo se debe de implementar. No se utilizara ya que en los objetos 

`private loadEnemies(enemies: Enemy[])`: Este metodo cargara objetos de la clase `EnemyObject` 

`private loadPoints(points: Point[])`: Este metodo cargara objetos de la clase `PointsObject`

`private loadPlatforms(platforms: Platform[])`: Este metodo cargara objetos de la clase `Phaser.GameObjects.Rectangle` que funcionaran como plataformas.


**Codigo:**
```
import { CustomObject} from './CustomObject';
import { EnemyObject } from './EnemyObject';
import { PointsObject } from './PointObject';
import { TextObject } from './TextObject';
import { DataScene } from './DataScene';
import { Enemy } from './Enemy';
import { Platform } from './Platform';
import { Point } from './Point';

export class MainScene extends Phaser.Scene {
    private square: CustomObject;
    private platforms: Phaser.Physics.Arcade.StaticGroup;
    private commonFoes: Phaser.GameObjects.Group;
    private points: Phaser.GameObjects.Group;
    private texts: Phaser.GameObjects.Group;
    private currentDataScene: DataScene;

    constructor(dataScene: DataScene){
        super({key : dataScene.Name});
        this.currentDataScene = dataScene;
    }

    create(){
        this.platforms = this.physics.add.staticGroup();
        this.commonFoes = this.add.group();
        this.points = this.add.group();
        this.texts = this.add.group();
        
        this.square = new CustomObject(this.scene.scene,
            this.currentDataScene.InitialLocation.x,
            this.currentDataScene.InitialLocation.y,
            100,
            100,
            0x0074ff);
        this.loadPlatforms(this.currentDataScene.Platforms);
        this.loadEnemies(this.currentDataScene.Enemies);
        this.loadPoints(this.currentDataScene.Points);
        this.texts.add(new TextObject(this.scene.scene,0,0,(() => {return  `Score: ${this.square.personalScore} Health: ${this.square.health}`}),{fontSize: '16px', color: '#000'}));
    }

    preload(){

    }

    update(){

    }

    private loadEnemies(enemies: Enemy[]){
        for(let enemy of enemies){
            this.commonFoes.add(new EnemyObject(this.scene.scene, enemy.x,enemy.y,50,50,0x940900,this.square));
        }
    }

    private loadPlatforms(platforms: Platform[]){
        for(let platform of platforms){
            this.platforms.add(this.add.rectangle(platform.x, platform.y, platform.width, 100, 0x00b940).setOrigin(0,0));
        }

        this.physics.add.collider(this.square,this.platforms);
    }

    private loadPoints(points: Point[]){
        for(let point of points){
            this.points.add(new PointsObject(this.scene.scene,point.x,point.y,50,50,0xfff237,this.square));
        }
    }
}

```

### CustomObject.ts

**Codigo:**

```
export class CustomObject extends Phaser.GameObjects.Rectangle {
    private objectCursors: Phaser.Types.Input.Keyboard.CursorKeys;
    private initialX:integer;
    private initialY:integer;

    private _personalScore: integer;
    private _health:integer;
    

    public get personalScore() : integer {
        if(this._personalScore === undefined){
            this._personalScore=0;
        }
        return this._personalScore;
    }

    public set personalScore(v : integer) {
        this._personalScore = v;
    }

    
    public get health() : integer {
        if(this._health === undefined){
            this._health=3;
        }
        return this._health;
    }

    
    public set health(v : integer) {
        this._health = v;
    }
    
    
    
    constructor(scene: Phaser.Scene, x, y, width, height, fillColor) {
        super(scene, x, y, width, height, fillColor);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        (<Phaser.Physics.Arcade.Body>this.body).setCollideWorldBounds(true);
        this.objectCursors = scene.input.keyboard.createCursorKeys();
        this.setOrigin(0,0);
        this.initialX = x;
        this.initialY = y;
    }

    preUpdate(time, delta) {
        
        this.movement();

        this.checkHealth();
    }

    getDamage(dmg :integer){
        this.health -= dmg;
        this.setPosition(this.initialX,this.initialY);
    }

    private checkHealth(){
        if(this.health <= 0){
            console.log(":[")
            this.destroy();
        }
    }

    private movement() {
        if (this.objectCursors.left.isDown) {
            (<Phaser.Physics.Arcade.Body>this.body).setVelocityX(-160);
        }
        else if (this.objectCursors.right.isDown) {
            (<Phaser.Physics.Arcade.Body>this.body).setVelocityX(160);
        }
        else {
            (<Phaser.Physics.Arcade.Body>this.body).setVelocityX(0);
        }

        if (this.objectCursors.up.isDown && (<Phaser.Physics.Arcade.Body>this.body).touching.down) {
            (<Phaser.Physics.Arcade.Body>this.body).setVelocityY(-300);
        }
    }
}
```


### EnemyObject.ts

**Codigo:**
```
import { CustomObject } from './CustomObject';

export class EnemyObject extends Phaser.GameObjects.Rectangle {

    constructor(scene: Phaser.Scene, x, y, width, height, fillColor, playerRef: Phaser.GameObjects.GameObject) {
        super(scene, x, y, width, height, fillColor);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        (<Phaser.Physics.Arcade.Body>this.body).allowGravity=false;
        this.setOrigin(0,0);
        scene.physics.add.overlap(playerRef,this,this.overlapAction,null,null);
    }

    preUpdate(time, delta) {

    }

    private overlapAction(referenced: Phaser.GameObjects.GameObject,that : EnemyObject){
        if(referenced instanceof CustomObject){
            (<CustomObject>referenced).getDamage(1);
        }
        
    }

}
```

### PointsObject.ts

**Codigo:**

```
import { CustomObject } from './CustomObject';

export class PointsObject extends Phaser.GameObjects.Rectangle {
    constructor(scene: Phaser.Scene, x, y, width, height, fillColor,playerRef: Phaser.GameObjects.GameObject) {
        super(scene, x, y, width, height, fillColor);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        (<Phaser.Physics.Arcade.Body>this.body).allowGravity=false;
        this.setOrigin(0,0);
        scene.physics.add.overlap(playerRef,this,this.overlapAction,null,null);
    }

    preUpdate(time, delta) {

    }

    private overlapAction(referenced:Phaser.GameObjects.GameObject,that : PointsObject){
        if(referenced instanceof CustomObject){
            (<CustomObject>referenced).personalScore += 100;
            that.destroy();
        }
    }

}
```
