import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export class BuildScene {

    scene;
    elm_ID;
    controls;
    renderer;
    camera;

    targetUp;

    constructor(elm_ID, targetUp){
        this.targetUp = targetUp;
        this.elm_ID = elm_ID;
        this.build_();
    }
    build_() {
        this.scene = new THREE.Scene();
        const canvas = document.getElementById(this.elm_ID);
      
        let sizeWidth = canvas.clientWidth;
        let sizeHeight = canvas.clientHeight;
        console.log('w: '+ sizeWidth + ' h: ' + sizeHeight);
      
        this.camera = new THREE.PerspectiveCamera(75, sizeWidth / sizeHeight, 0.1, 100);
      
        this.renderer = new THREE.WebGLRenderer({
          canvas: canvas,
          antialias: true
        });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(sizeWidth, sizeHeight);
        this.renderer.setClearColor(0x1b1b1b, 1);
      
        this.camera.position.set(6, 4, 0);
        this.scene.add(this.camera);
      
        this.controls = new OrbitControls(this.camera, canvas);
        this.controls.target.set(0, this.targetUp, 0);
        this.controls.maxDistance = 12;
        this.controls.minDistance = 5;
        this.controls.enablePan = false;
        this.controls.autoRotate = true;
      
        const gridHelper = new THREE.GridHelper(10, 10);
        this.scene.add(gridHelper);
    }
    addToScene(obj_){
        this.scene.add(obj_);
    }
}