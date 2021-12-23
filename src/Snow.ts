import p5 from 'p5';
import snowImage from '../assets/snow.svg';
import { Particle } from './Particle';

const createSnow = (p: p5, position: p5.Vector): Particle => {
  const velocity = p.createVector(0, p.random(1.5, 0.5));
  const pos = position.copy();
  let lifespan = 255;
  const image = p.loadImage(snowImage);

  const update = () => {
    pos.add(velocity);
    lifespan -= 0.4;
  };

  const display = () => {
    image.resize(100, 100);
    p.tint(lifespan)
    p.image(image, pos.x, pos.y);
  };

  const isInArea = () => {
    const inAreaWidth = pos.x > 0 && pos.x < p.windowWidth;
    const inAreaHeight = pos.y < p.windowHeight;

    return inAreaWidth && inAreaHeight;
  };

  const run = () => {
    update();
    display();
  };

  const isDead = () => lifespan < 0 || !isInArea();

  return { run, isDead };
};

export default createSnow;
