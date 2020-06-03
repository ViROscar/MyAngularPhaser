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