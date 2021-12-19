import p5 from "p5";
import { Snow } from "./Snow";
import { SnowCollector } from "./SnowCollector";

const sketch = (p: p5) => {
  const system = new SnowCollector(p, 1000);
  const snow = new Snow(p, p.createVector(100, 100))
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };
  p.draw = () => {
    p.background(21, 21, 21);
    system.run();
    // snow.run()
  };
};

new p5(sketch);
