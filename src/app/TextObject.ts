export class TextObject extends Phaser.GameObjects.Text {
    private referedFunc: Function;

    constructor(scene: Phaser.Scene, x, y,refered,style:Phaser.Types.GameObjects.Text.TextStyle){
        super(scene,x,y,'',style);
        scene.add.existing(this);
        this.setOrigin(0,0);
        this.referedFunc =refered
        //this.referedObject=refered;
    }

    preUpdate(time, delta) {
        this.setText(this.referedFunc());
    }
}