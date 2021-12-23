import p5 from 'p5';
import { Particle } from './Particle';
import createCircle from './Circle';
import createSnow from './Snow';

type SnowCollector = {
  run: () => void;
};

const createSnowCollector = (p: p5, maxParticle: number): SnowCollector => {
  let particles: Particle[] = new Array<Particle>();

  const addParticle = (): void => {
    const vx = p.random(0, p.windowWidth);
    const position = p.createVector(vx, -10);
    const addElement: Particle = p.floor(p.random(1, 1000)) % 100 === 0 ? createSnow(p, position) : createCircle(p, position)
    particles.push(addElement);
  };

  const run = () => {
    if (particles.length > maxParticle) {
      particles.shift();
    }
    addParticle();
    particles = particles.filter((particle) => !particle.isDead());
    particles.forEach((particle) => particle.run());
  };

  return { run };
};

export default createSnowCollector;
