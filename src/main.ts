import p5 from 'p5';
// import { Snow } from './Snow';
import createSnowCollector from './SnowCollector';

const sketch = (p: p5) => {
  const snowCollector = createSnowCollector(p, 1000);
  // const snow = new Snow(p, p.createVector(100, 100));

  // eslint-disable-next-line no-param-reassign
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  // eslint-disable-next-line no-param-reassign
  p.draw = () => {
    p.background(21, 21, 21);
    snowCollector.run();
    // snow.run()
  };
};

// eslint-disable-next-line no-new, new-cap
new p5(sketch);
