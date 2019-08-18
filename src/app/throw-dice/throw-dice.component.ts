import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as CANNON from 'cannon';
import * as THREE from 'three';
import * as DICE from 'threejs-dice';

@Component({
  selector: 'app-throw-dice',
  templateUrl: './throw-dice.component.html',
  styleUrls: ['./throw-dice.component.sass']
})
export class ThrowDiceComponent implements OnInit {
  @ViewChild('three', {static: true}) threeDiv: ElementRef;

  container;
  scene;
  camera;
  renderer;
  controls;
  stats;
  world;
  dice;

  constructor() {}

  ngOnInit() {
    const screenWidth = 500;
    const screenHeight = 200;

    const viewAngle = 90;
    const aspect = screenWidth / screenHeight;
    const near = 0.1;
    const far = 20000;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(viewAngle, aspect, near, far);
    this.camera.position.set(0, 30, 30);
    this.camera.rotation.x = -0.95;

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(screenWidth, screenHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.container = this.threeDiv.nativeElement;
    this.container.appendChild(this.renderer.domElement);

    const floorMaterial = new THREE.MeshPhongMaterial({ color: '#FEFEFE', side: THREE.DoubleSide });
    const floorGeometry = new THREE.PlaneGeometry(200, 200, 10, 10);
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.y = -0.5;
    floor.rotation.x = Math.PI / 2;

    this.world = new CANNON.World();
    this.world.gravity.set(0, 0, -9.8 * 800);
    this.world.broadphase = new CANNON.NaiveBroadphase();
    this.world.solver.iterations = 16;
    DICE.DiceManager.setWorld(this.world);
    const dice10 = new DICE.DiceD10({size: 10});
    dice10.getObject().position.x = 0;
    dice10.getObject().position.y = 0;
    dice10.getObject().position.z = 0;
    const dice100 = new DICE.DiceD10({size: 10});
    dice100.getObject().position.x = 0;
    dice100.getObject().position.y = 0;
    dice100.getObject().position.z = 0;
    this.dice = [dice10, dice100];
    // const floorBody = new CANNON.Body({mass: 0, shape: new CANNON.Plane(), material: DICE.DiceManager.floorBodyMaterial});
    // floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    // this.world.add(floorBody);

    this.scene.add(this.camera);
    this.scene.add(new THREE.AmbientLight('#FFFFFF', 1.0));
    this.scene.add(floor);
    this.scene.add(dice10.getObject());
    this.scene.add(dice100.getObject());

    // this.randomDiceThrow();

    requestAnimationFrame(this.animate.bind(this));
  }

  randomDiceThrow() {
    const diceValues = [];
    for (let i = 0; i < this.dice.length; i++) {
        const yRand = Math.random() * 20;
        this.dice[i].getObject().position.x = -15 - (i % 3) * 1.5;
        this.dice[i].getObject().position.y = 2 + Math.floor(i / 3) * 1.5;
        this.dice[i].getObject().position.z = -15 + (i % 3) * 1.5;
        this.dice[i].getObject().quaternion.x = (Math.random() * 90 - 45) * Math.PI / 180;
        this.dice[i].getObject().quaternion.z = (Math.random() * 90 - 45) * Math.PI / 180;
        this.dice[i].updateBodyFromMesh();
        const rand = Math.random() * 5;
        this.dice[i].getObject().body.velocity.set(25 + rand, 40 + yRand, 15 + rand);
        this.dice[i].getObject().body.angularVelocity.set(20 * Math.random() - 10, 20 * Math.random() - 10, 20 * Math.random() - 10);
        diceValues.push({dice: this.dice[i], value: i + 1});
    }
    DICE.DiceManager.prepareValues(diceValues);
  }

  animate() {
    this.world.step(1.0 / 60.0);
    this.dice.forEach(d => d.updateMeshFromBody());
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate.bind(this));
  }
}
