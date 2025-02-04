
import { Application, Assets, Sprite } from '/pixi.mjs';

class Game {
    
    
    Game() {

    }
}


async function Call(app) {
    
    return fight;
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


    //Fight Button
    let texture = await Assets.load('/Imgs/Fight.png');
    const fight = new Sprite(texture);
    app.stage.addChild(fight);

    fight.x = 1100;
    fight.y = 600;
    //fight.scale.y = 3;
    fight.scale.x = 3;

    //Item Button
    texture = await Assets.load('/Imgs/Item.png');
    const item = new Sprite(texture);
    app.stage.addChild(item);

    item.x = 1400;
    item.y = 600;
    item.scale.y = 3;
    item.scale.x = 3;

    //Bag Button
    texture = await Assets.load('/Imgs/Bag.png');
    const bag = new Sprite(texture);
    app.stage.addChild(bag);

    bag.x = 1100;
    bag.y = 750;
    bag.scale.y = 3;
    bag.scale.x = 3;

    //Run Button
    texture = await Assets.load('/Imgs/Run.png');
    const run = new Sprite(texture);
    app.stage.addChild(run);

    run.x = 1400;
    run.y = 750;
    run.scale.y = 3;
    run.scale.x = 3;


    run.eventMode = 'static';

    // Shows hand cursor
    run.cursor = 'pointer';

    // Pointers normalize touch and mouse (good for mobile and desktop)
    run.on('pointerdown', onClick);

    app.ticker.add((time) => {
        
    });
})();
function onClick() {
    console.log("works");
}