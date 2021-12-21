import p5 from 'p5';
import { Particle } from './Particle';

const createCircle = (p: p5, position: p5.Vector): Particle => {
  let lifespan = 255;
  const velocity = p.createVector(p.random(-1, 1), p.random(1.5, 0.5));
  const pos = position.copy();
  p.stroke(200, 0);

  const update = () => {
    pos.add(velocity);
    lifespan -= 0.4;
  };

  const display = () => {
    p.fill(225, 245, 254, lifespan);
    p.ellipse(pos.x, pos.y, 12, 12);
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

export default createCircle;
