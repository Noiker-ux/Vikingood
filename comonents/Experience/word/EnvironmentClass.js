import * as THREE from "three";
import Experience from "../ExperienceClass.js";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    // Setup
    this.setSunLight();
  }

  setSunLight() {
    this.sunLight = new THREE.DirectionalLight("#ffffff", 5.8);
    this.sunLight.position.set(3, 3, -2.25);
    this.scene.add(this.sunLight);

    this.ambientLight = new THREE.AmbientLight("#FFFFFF", 5);
    this.scene.add(this.ambientLight);
  }
}
