console.log('hello!');
let app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight - 4,
  backgroundColor: 0xd9c2ad,
});
document.body.appendChild(app.view);

const images = [
  'https://i.ibb.co/47B6SRL/11.png',
  'https://i.ibb.co/FqLxkfV/2.png',
  'https://i.ibb.co/R3kZb1N/3.png',
  'https://i.ibb.co/rcwMzh7/4.png',
  'https://i.ibb.co/hDj3H16/5.png',
  'https://i.ibb.co/BKHLcrt/6.png',
  'https://i.ibb.co/Hd0yR47/7.png',
  'https://i.ibb.co/c1bdgZP/8.png',
];
let brokenEggImgs = [
  'https://i.ibb.co/BqbChW7/9.png',
  'https://i.ibb.co/DfQT4p2/10.png',
  'https://i.ibb.co/PT5gPQs/111.png',
  'https://i.ibb.co/Xs1WW9n/12.png',
  'https://i.ibb.co/RP0gMMX/13.png',
  'https://i.ibb.co/vBr7mYp/14.png',
  'https://i.ibb.co/VBqcFgS/15.png',
  'https://i.ibb.co/x7HJ0rK/16.png',
  'https://i.ibb.co/YtKPD0m/17.png',
  'https://i.ibb.co/bdPgLHy/18.png',
  'https://i.ibb.co/xYNPLrd/19.png',
  'https://i.ibb.co/c6BScxc/20.png',
  'https://i.ibb.co/T2Bp8R1/21.png',
  'https://i.ibb.co/TmsTdQF/22.png',
  'https://i.ibb.co/zRBQgr2/23.png',
  'https://i.ibb.co/JpQT6QM/24.png',
  'https://i.ibb.co/89H0kHn/25.png',
  'https://i.ibb.co/mG06gCK/26.png',
  'https://i.ibb.co/H2HxYMX/27.png',
  'https://i.ibb.co/mT6ZNTB/28.png',
  'https://i.ibb.co/crt0V5k/29.png',
  'https://i.ibb.co/qdhkv8W/30.png',
  'https://i.ibb.co/mqkf8wv/31.png',
  'https://i.ibb.co/PzR9DHZ/32.png',
  'https://i.ibb.co/JrkpZ2k/33.png',
  'https://i.ibb.co/hDm60Wr/34.png',
  'https://i.ibb.co/2ZKgF2W/35.png',
  'https://i.ibb.co/xDvRq9d/36.png',
  'https://i.ibb.co/10X1dvd/37.png',
];

window.onload = function () {
  init();
};
let container = new PIXI.Container();

function init() {
  let text = new PIXI.Text('Hit spacebar to break the egg!', {
    fontFamily: 'Arial',
    fontSize: 20,
    fill: 0xffffff,
    align: 'center',
    fontWeight: 600,
  });
  text.anchor.set(0.5);
  text.position.set(window.innerWidth / 2, (window.innerHeight / 4) * 3);
  text.resolution = 2;
  app.stage.addChild(text);
  let interval = setInterval(fadeInOut, 60);

  let fadeIndex = 0;
  function fadeInOut() {
    if (Math.ceil(fadeIndex / 10) % 2 == 1) {
      text.alpha -= 0.1;
      fadeIndex++;
    } else {
      text.alpha += 0.1;
      fadeIndex++;
    }
  }

  let starterSprite = PIXI.Sprite.from('https://i.ibb.co/BG7Jc83/1.png');

  container.addChild(starterSprite);

  let centerX = window.innerWidth / 2 - 200;
  let centerY = window.innerHeight / 2 - 200;

  container.position.set(centerX, centerY);

  app.stage.addChild(container);

  let spriteIndex = 0;

  window.addEventListener('keydown', (event) => {
    if (event.keyCode == 32) {
      if (spriteIndex == 0) {
        text.alpha = 0;
        clearInterval(interval);
      }
      let nextSprite = PIXI.Sprite.from(images[spriteIndex]);

      setTimeout(() => {
        nextSprite.position.set(1, 0);
      }, 50);

      setTimeout(() => {
        nextSprite.position.set(3, 1);
      }, 100);

      setTimeout(() => {
        nextSprite.position.set(1, 0);
      }, 150);

      setTimeout(() => {
        nextSprite.position.set(-3, 1);
      }, 200);

      setTimeout(() => {
        nextSprite.position.set(1, 0);
      }, 250);

      setTimeout(() => {
        nextSprite.position.set(0, 0);
      }, 300);
      container.addChild(nextSprite);

      app.stage.addChild(container);
      if (spriteIndex == 7) {
        drawEggs();
      }
      spriteIndex++;
    }
  });
}

function drawEggs() {
  let index = 0;
  let int = setInterval(() => {
    if (index >= brokenEggImgs.length) {
      clearInterval(int);
      final();
    }
    let sprite = PIXI.Sprite.from(brokenEggImgs[index]);

    container.addChild(sprite);
    app.stage.addChild(container);
    index++;
  }, 200);
}

function final() {
  let text = new PIXI.Text('Happy fried egg day!', {
    fontFamily: 'Arial',
    fontSize: 40,
    fill: 0x55565d,
    align: 'center',
    fontWeight: 600,
  });
  text.anchor.set(0.5);
  text.position.set(window.innerWidth / 2, window.innerHeight / 6);
  text.resolution = 2;
  app.stage.addChild(text);

  let text2 = new PIXI.Text('Created And Directed By', {
    fontFamily: 'Arial',
    fontSize: 20,
    fill: 0x55565d,
    align: 'center',
    fontWeight: 600,
  });
  text2.anchor.set(0.5);
  text2.position.set(window.innerWidth / 2, (window.innerHeight / 4) * 3);
  text2.resolution = 2;
  app.stage.addChild(text2);

  let text3 = new PIXI.Text('Shako', {
    fontFamily: 'Arial',
    fontSize: 20,
    fill: 0x55565d,
    align: 'center',
    fontWeight: 600,
  });
  text3.anchor.set(0.5);
  text3.position.set(window.innerWidth / 2, (window.innerHeight / 4) * 3 + 30);
  text3.resolution = 2;
  app.stage.addChild(text3);

  let text4 = new PIXI.Text('refresh', {
    fontFamily: 'Arial',
    fontSize: 20,
    fill: 0x55565d,
    align: 'center',
    fontWeight: 600,
  });
  text4.interactive = true;
  text4.buttonMode = true;
  text4.on('pointertap', () => {
    app.stage.removeChildren(0, app.stage.children.length);
    container.removeChildren(0, container.children.length);
    init();
  });
  text4.anchor.set(0.5);
  text4.position.set(window.innerWidth / 2, (window.innerHeight / 4) * 3 + 90);
  text4.resolution = 2;
  app.stage.addChild(text4);

  console.log('the end');
}
