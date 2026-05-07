import Experience from "../ExperienceClass.js";
import * as THREE from "three";

export default class Floor {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.grass = this.resources.items.grass;
    this.setModel();
  }
  setModel() {
    this.model = this.grass.scene;
    console.log(this.grass);
    this.scene.add(this.model);
  }
}
