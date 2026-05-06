import Sizes from "./utils/SizesClass.js";
import Time from "./utils/TimeClass.js";
import * as THREE from "three";
import Camera from "./CameraClass.js";
import Renderer from "./RendererClass.js";
import World from "./world/WorldClass.js";
import Resources from "./utils/ResourcesClass.js";
import sources from "./sources.js";
import StatsPanel from "./utils/StatsClass.js";

let instance = null;
export default class Experience {
  constructor(canvas) {
    // Singletone-
    if (instance) {
      return instance;
    }
    instance = this;

    window.experience = this;
    this.canvas = canvas;
    this.sizes = new Sizes();
    this.stats = new StatsPanel();

    this.scene = new THREE.Scene();
    this.resources = new Resources(sources);
    this.camera = new Camera();
    this.world = new World();
    this.renderer = new Renderer();

    this.sizes.on("resize", () => {
      this.resize();
    });

    this.time = new Time();
    this.time.on("tick", () => {
      this.update();
    });
  }
  resize() {
    this.camera.resize();
    this.renderer.resize();
  }
  update() {
    this.stats.stats.begin();
    this.camera.update();
    this.renderer.update();
    this.stats.stats.end();
  }
}
