import p5 from 'p5';
import createSnowCollector from './SnowCollector';
import './style.css';

const sketch = (p: p5) => {
  const snowCollector = createSnowCollector(p, 1000);

  // eslint-disable-next-line no-param-reassign
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  // eslint-disable-next-line no-param-reassign
  p.draw = () => {
    p.clear();
    snowCollector.run();
  };

  // eslint-disable-next-line no-param-reassign
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

// eslint-disable-next-line no-new, new-cap
new p5(sketch);
