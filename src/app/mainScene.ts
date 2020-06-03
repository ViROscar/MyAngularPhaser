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