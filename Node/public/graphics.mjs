import { Application, Assets, Sprite } from '/pixi.mjs';








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
    let fight =  new Sprite(texture);
    app.stage.addChild(fight);

    fight.x = 1100;
    fight.y = 600;
    fight.scale = 3,3;
    
    //Item Button
    texture = await Assets.load('/Imgs/Item.png');
    const item = new Sprite(texture);
    app.stage.addChild(item);

    item.x = 1400;
    item.y = 600;
    item.scale = 3,3;

    //Bag Button
    texture = await Assets.load('/Imgs/Bag.png');
    const bag = new Sprite(texture);
    app.stage.addChild(bag);

    bag.x = 1100;
    bag.y = 750;
    bag.scale = 3,3;

    //Run Button
    texture = await Assets.load('/Imgs/Run.png');
    const run = new Sprite(texture);
    app.stage.addChild(run);

    run.x = 1400;
    run.y = 750;
    run.scale = 3,3;



    run.eventMode = 'static';
    run.cursor = 'pointer';
    run.on('pointerdown', runClick);

    fight.eventMode = 'static';
    fight.cursor = 'pointer';
    fight.on('pointerdown', fightClick);

    bag.eventMode = 'static';
    bag.cursor = 'pointer';
    bag.on('pointerdown', bagClick);
    
    item.eventMode = 'static';
    item.cursor = 'pointer';
    item.on('pointerdown', itemClick);

    app.ticker.add((time) => {
        
    });
})();


function runClick() {
    console.log("Run");
}

function bagClick() {
    console.log("Bag");
}

function fightClick() { 
    console.log("Fight");
}

function itemClick() {
    console.log("Item");
}
