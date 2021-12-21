import p5 from 'p5';
import snowImage from '../assets/snow.svg';
import { Particle } from './Particle';

const createSnow = (p: p5, hoge: p5.Vector): Particle => {
  const velocity = p.createVector(p.random(-1, 1), p.random(1.5, 0.5));
  const position = hoge.copy();
  let lifespan = 255;
  const image = p.loadImage(snowImage);
  image.resize(100, 100);

  const update = () => {
    position.add(velocity);
    lifespan -= 0.4;
  };

  const display = () => {
    p.image(image, 100, 100);
  };

  const isInArea = () => {
    const inAreaWidth = position.x > 0 && position.x < p.windowWidth;
    const inAreaHeight = position.y < p.windowHeight;

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
