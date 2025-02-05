import { Container } from '/pixis.mjs';
import { Application, Assets, Sprite, Graphics,Rectangle } from '/pixis.mjs';

let menu = 0;

class MenuSwitch {
    constructor(app) {
         this.screens = [new BaseMenu(app, 850,400),new FightMenu(app,850,400)];
         this.render = 0
    }   
    setrender(ren) {
        this.render = ren;
        for(var i = 0; i < this.screens.length; i++) {
            this.renderChk(i);
        }
    }

    renderChk(i) {
        if(i!=this.render) {
            this.screens[i].setVisible(false);
        } else {
            this.screens[i].setVisible(true);
        }
    }
}
class GameObj extends Sprite {
    constructor(txt) {
        super(txt);
    }
}
class GameCont extends Container {
    constructor(app) {
        super();
        app.stage.addChild(this);
        this.activate();
    }
    setVisible(bool) {this.visible = bool;}
    activate() {}
}


class BaseMenu extends GameCont{
    constructor(app, x, y) {
        super(app);
        this.x = x;
        this.y = y;
    }

    async fightAct() {
        //Fight Button
        let texture = await Assets.load('/Imgs/Fight.png');
        const fight = new GameObj(texture);
        this.addChild(fight);
        fight.x = 0;
        fight.y = 0;
        fight.scale = 2,2;
        fight.eventMode = 'static';
        // Shows hand cursor
        fight.cursor = 'pointer';
        // Pointers normalize touch and mouse (good for mobile and desktop)
        fight.on('pointerdown', function(event)  {
            menu = 1;
        });
    }

    async itemAct() {
        //Item Button
        let texture = await Assets.load('/Imgs/Item.png');
        const item = new Sprite(texture);
        this.addChild(item);
        item.x = 200;
        item.y = 0;
        item.scale = 2,2;
    }

    async bagAct() {
        //Bag Button
        let texture = await Assets.load('/Imgs/Bag.png');
        const bag = new Sprite(texture);
        this.addChild(bag);
        bag.x = 0;
        bag.y = 75;
        bag.scale = 2,2;
    }

    async runAct() {
        //Run Button
        let texture = await Assets.load('/Imgs/Run.png');
        const run = new Sprite(texture);
        this.addChild(run);
        run.x = 200;
        run.y = 75;
        run.scale = 2,2;  
    }
    async activate() {
        
        this.fightAct();
        this.itemAct();
        this.bagAct();
        this.runAct();
        
        
          
    }
}   
class FightMenu extends GameCont {
    constructor(app, x, y) {
        super(app);
        this.x = x;
        this.y = y;
    }

    async bck() {
        let texture = await Assets.load('/Imgs/Bck.png');
        const fight = new GameObj(texture);
        this.addChild(fight);
        fight.x = -75;
        fight.y = 0;
        fight.scale = .75;
        fight.eventMode = 'static';
        // Shows hand cursor
        fight.cursor = 'pointer';
        // Pointers normalize touch and mouse (good for mobile and desktop)
        fight.on('pointerdown', function(event)  {
            menu = 0;
        });
    } 

    async attbtn(plc) {
        let x = 0;
        let y = 0;
        
        switch(plc) {
            case 0: 
                x = 0;
                y = 0;
                break;
            case 1: 
                x = 200;
                y = 0;
                break;
            case 2: 
                x = 0;
                y = 75;
                break;
            case 3: 
                x = 200;
                y = 75;
                break;
        }
        let texture = await Assets.load('/Imgs/Att.png');
        const fight = new GameObj(texture);
        this.addChild(fight);
        fight.x = x;
        fight.y = y;
        fight.scale = 2,2;
    }
    async activate() {
        this.bck(this.x,this.y);
        this.attbtn(0);
        this.attbtn(1);
        this.attbtn(2);
        this.attbtn(3);
        
        
    }

}

        


// Asynchronous IIFE
(async () =>
    {
        let g = document.querySelector('.game');
        // Create a PixiJS application.
        const app = new Application();
        // Intialize the application.
        await app.init({ background: '#555555', resizeTo: g });
        // Then adding the application's canvas to the DOM body.
        g.appendChild(app.canvas);
        let game = new MenuSwitch(app);
        app.ticker.add((time) => {
            gameLoop(app,game); 
        });
    })();


async function gameLoop(app,game) {
    if(menu == 0) {
        game.setrender(0)
    } else if (menu == 1) {
        game.setrender(1);
    }
}









