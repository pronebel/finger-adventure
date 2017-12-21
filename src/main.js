/* eslint-disable global-require */
import Leaves from './Leaves';
import queue from './preload';
import Floor from './Floor';
import './assets/reset.css';

window.onload = () => {
  const canvas = document.querySelector('#stage');
  canvas.width = window.innerWidth * 2;
  canvas.height = window.innerHeight * 2;

  const stage = new createjs.Stage(canvas);

  // const queue = new createjs.LoadQueue();

  function handleComplete() {
    const leves = new Leaves({}, canvas);
    const leafCon = leves.init();
    const floor = new Floor({}, canvas);
    floor.init();
    floor.addFloors([0, 1, 1, 0, 1, 1], [0, 1, 2, 0, 1, 3]);
    stage.addChild(leafCon, floor.instance);
    stage.update();
    createjs.Ticker.setFPS(10);
    createjs.Ticker.addEventListener('tick', () => {
      // floor.addOneFloor(Math.floor(Math.random() + 1), Math.floor(Math.random() * 4), true);
      leves.tranlateY(50);
      stage.update();
    });
  }

  queue.on('complete', handleComplete);
};
