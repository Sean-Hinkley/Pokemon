import { Container } from './pixi.mjs';
import { Application, Assets, Sprite, Graphics,Rectangle } from '/pixi.mjs';

let menu = 0;

class Game {
    constructor(app) {
         this.screens = [new BaseMenu(app),new FightMenu(app)];
         this.render = 0;

    }   

    setrender(ren) {
        this.render = ren;
        for(var i = 0; i < this.screens.length; i++) {
            if(i!=this.render) {
                this.screens[i].setVisible(false);
            } else {
                this.screens[i].setVisible(true);
            }
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

    setVisible(bool) {
        this.visible = bool;
    }

    activate() {

    }
}


class BaseMenu extends GameCont{
    constructor(app) {
        super(app);
        

    }
    

    async activate() {
        //Fight Button
        let texture = await Assets.load('/Imgs/Fight.png');
        const fight = new GameObj(texture);
        this.addChild(fight);

        fight.x = 1100;
        fight.y = 600;
        fight.scale = 3,3;
        
        fight.eventMode = 'static';

        // Shows hand cursor
        fight.cursor = 'pointer';

        // Pointers normalize touch and mouse (good for mobile and desktop)
        fight.on('pointerdown', function(event)  {
            menu = 1;
        });


        //Item Button
        texture = await Assets.load('/Imgs/Item.png');
        const item = new Sprite(texture);
        this.addChild(item);

        item.x = 1400;
        item.y = 600;
        item.scale = 3,3;

        //Bag Button
        texture = await Assets.load('/Imgs/Bag.png');
        const bag = new Sprite(texture);
        this.addChild(bag);

        bag.x = 1100;
        bag.y = 750;
        bag.scale = 3,3;

        //Run Button
        texture = await Assets.load('/Imgs/Run.png');
        const run = new Sprite(texture);
        this.addChild(run);

        run.x = 1400;
        run.y = 750;
        run.scale = 3,3;


        

        
        
    }
}   

class FightMenu extends GameCont {
    constructor(app) {
        super(app);
    }

    async activate() {
        let texture = await Assets.load('/Imgs/Bck.png');
        const fight = new GameObj(texture);
        this.addChild(fight);

        fight.x = 1000;
        fight.y = 600;


        texture = await Assets.load('/Imgs/Att.png');
        const a = new GameObj(texture);
        this.addChild(a);

        a.x = 1100;
        a.y = 600;

        a.scale = 3,3;

        texture = await Assets.load('/Imgs/Att.png');
        const b = new GameObj(texture);
        this.addChild(b);

        b.x = 1400;
        b.y = 600;

        b.scale = 3,3;

        texture = await Assets.load('/Imgs/Att.png');
        const c = new GameObj(texture);
        this.addChild(c);

        c.x = 1100;
        c.y = 750;
        c.scale = 3,3;
        texture = await Assets.load('/Imgs/Att.png');
        const d = new GameObj(texture);
        this.addChild(d);

        d.x = 1400;
        d.y = 750;
        d.scale = 3,3;
        
        fight.eventMode = 'static';

        // Shows hand cursor
        fight.cursor = 'pointer';

        // Pointers normalize touch and mouse (good for mobile and desktop)
        fight.on('pointerdown', function(event)  {
            menu = 0;
        });
    }

}

        


// Asynchronous IIFE
(async () =>
    {
        // Create a PixiJS application.
        const app = new Application();
    
        // Intialize the application.
        await app.init({ background: '#555555', resizeTo: window });
    
        // Then adding the application's canvas to the DOM body.
        document.body.appendChild(app.canvas);
        let game = new Game(app);
        
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









