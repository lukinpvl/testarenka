var game;

// const { initData } = window.Telegram.WebApp
// var responseData;
var gameOptions = {
    pages: ["shopPage","characterPage","battlePage",],
    localStorageName: "levelselect"
}
var playGameSceneConfig = {
    // ....
    key: "PlayGame",
};
window.onload = function() {
    var gameConfig = {
        type: Phaser.AUTO,
        scale: {
            mode: Phaser.Scale.FIT,
            parent: "phaser-example",
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 1200,
            height: 1200
        },
        backgroundColor: 0xFFFFFF,
        scene: [PlayGame]
    }
    game = new Phaser.Game(gameConfig);
}

class PlayGame extends Phaser.Scene{
    constructor(){
        super(playGameSceneConfig);
    }
    preload(){
//////////// DEBUG
        this.load.atlas(4, "assets/4.png", "assets/4.json");
        this.load.atlas(5, "assets/5.png", "assets/5.json");
//////////// DEBUG            
    }

    create(){
      

//////////// DEBUG

        const main = this.textures.addDynamicTexture('main', 1600, 800);
        main.fill(0x00ff00);

        const banner1 = this.textures.addDynamicTexture('playerBanner1', 800, 800);
        banner1.fill(0xff0000);
        banner1.stamp('5', 'idle0007.png' ,400,400);
        banner1.stamp('4', 'idle0006.png',400,400);

        const banner2 = this.textures.addDynamicTexture('playerBanner2', 800, 800);
        banner2.fill(0x0000ff);
        banner2.stamp('5', 'idle0001.png' ,400,400);
        banner2.stamp('4', 'idle0001.png',400,400);
   
        main.add('0001',0,0,0,800,800);
        main.draw('playerBanner1',0,0);
        main.add('0002',0,800,0,800,800);
        main.draw('playerBanner2',800,0);

        console.log(main)
        this.tra  = this.anims.create({ key: 'testhead', frames: this.anims.generateFrameNames('main',{ start: 1, end: 2, zeroPad: 4 }), frameRate: 1, repeat: -1 });
        console.log(this.tra)
        this.player2 = this.add.sprite(600, 600, 'main');
        this.player2.play({ key: "testhead", repeat: -1 });

    }
}
