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