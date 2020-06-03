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
      //scene: [MainScene],
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
