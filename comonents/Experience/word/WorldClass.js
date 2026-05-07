import Experience from "../ExperienceClass.js";
import * as THREE from "three";
import Environment from "./EnvironmentClass.js";
import Floor from "./FloorClass.js";
import Tree from "./TreeClass.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.resources = this.experience.resources;
    this.resources.on("ready", () => {
      this.environment = new Environment();
      this.floor = new Floor();
      // this.tree = new Tree();
    });
  }
}
