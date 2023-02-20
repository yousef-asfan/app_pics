import './style.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { BuildScene } from './src/BuildScene.js';

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');
const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);
const textureLoader = new THREE.TextureLoader();

/**
 * 
 * TEXTURES
 * 
 */
const tex_matcap01 = textureLoader.load('./assets/meshes/3F4441_D1D7D6_888F87_A2ADA1.jpg'); // mat 1 in robot
const mat_matcap01 = new THREE.MeshMatcapMaterial({matcap: tex_matcap01});

const tex_matcap02 = textureLoader.load('./assets/meshes/7877EE_D87FC5_75D9C7_1C78C0.jpg'); // mat 2 in robot & tech // mat 3 in VR // mat 4 in webApp
const mat_matcap02 = new THREE.MeshMatcapMaterial({matcap: tex_matcap02});

const tex_matcap03 = textureLoader.load('./assets/meshes/346088_6ABED7_56A0C5_4E91B8.jpg'); // mat 3 in robot
const mat_matcap03 = new THREE.MeshMatcapMaterial({matcap: tex_matcap03});

const tex_matcap04 = textureLoader.load('./assets/meshes/579241_B5D25D_0E1D2D_97C284.jpg'); // mat 1 in tech
const mat_matcap04 = new THREE.MeshMatcapMaterial({matcap: tex_matcap04});

const tex_matcap05 = textureLoader.load('./assets/meshes/1B1C19_5F615D_4B4E4C_3F403D.jpg'); // mat 3 in tech
const mat_matcap05 = new THREE.MeshMatcapMaterial({matcap: tex_matcap05});

const tex_matcap06 = textureLoader.load('./assets/meshes/1A2461_3D70DB_2C3C8F_2C6CAC.jpg'); // mat 4 in tech
const mat_matcap06 = new THREE.MeshMatcapMaterial({matcap: tex_matcap06});

const tex_matcap07 = textureLoader.load('./assets/meshes/4F4742_B7B1AA_847E79_969294.jpg'); // mat 1 in VR
const mat_matcap07 = new THREE.MeshMatcapMaterial({matcap: tex_matcap07});

const tex_matcap08 = textureLoader.load('./assets/meshes/1C1810_352F23_2B2C1C_2B2C24.jpg'); // mat 2 in VR
const mat_matcap08 = new THREE.MeshMatcapMaterial({matcap: tex_matcap08});

const tex_matcap09 = textureLoader.load('./assets/meshes/1B1B1B_999999_575757_747474.jpg'); // mat 4 in VR
const mat_matcap09 = new THREE.MeshMatcapMaterial({matcap: tex_matcap09});

const tex_matcap10 = textureLoader.load('./assets/meshes/AC171C_FA8593_E84854_D3464E.jpg'); // mat 1 in webApp
const mat_matcap10 = new THREE.MeshMatcapMaterial({matcap: tex_matcap10});

const tex_matcap11 = textureLoader.load('./assets/meshes/9F1A27_F1AF7F_CD5845_D08441.jpg'); // mat 2 in webApp
const mat_matcap11 = new THREE.MeshMatcapMaterial({matcap: tex_matcap11});

/**
 * 
 * BLOCK 01 Robot -------------------------
 * 
 */
const BuildScene_01 = new BuildScene('c1', 2.5);

gltfLoader.load('./assets/meshes/Robot.glb', (gltf)=>{
  gltf.scene.traverse((obj) => {
    if(obj instanceof THREE.Mesh){
      switch (obj.name) {
        case 'UniRobot_Axis':
          obj.material = mat_matcap02;
          break;
        case 'UniRobot_Steel':
          obj.material = mat_matcap01;
          break;
        case 'UniRobot_Plastic':
          obj.material = mat_matcap03;
          break;
      }
    }
  });
  gltf.scene.scale.set(0.1,0.1,0.1);
  BuildScene_01.addToScene(gltf.scene);
});

/**
 * 
 * BLOCK 02 Tech -------------------------
 * 
 */
const BuildScene_02 = new BuildScene('c2', 2);

gltfLoader.load('./assets/meshes/technology.glb', (gltf)=>{
  gltf.scene.traverse((obj) => {
    if(obj instanceof THREE.Mesh){
      switch (obj.name) {
        case 'earth_land':
          obj.material = mat_matcap04;
          break;
        case 'earth_water':
          obj.material = mat_matcap06;
          break;
        case 't10':
          obj.material = mat_matcap02;
          break;
        case 'laptop_screen':
          obj.material = mat_matcap02;
          break;
        case 'laptop_case':
          obj.material = mat_matcap05;
          break;
        case 'laptop_keys':
          obj.material = mat_matcap02;
          break;
      }
    }
  });
  gltf.scene.scale.set(1,1,1);
  gltf.scene.position.y = 0.3;
  BuildScene_02.addToScene(gltf.scene);
});

/**
 * 
 * BLOCK 03 VR -------------------------
 * 
 */
const BuildScene_03 = new BuildScene('c3', 2.5);

gltfLoader.load('./assets/meshes/quest2.glb', (gltf)=>{
  gltf.scene.traverse((obj) => {
    if(obj instanceof THREE.Mesh){
      switch (obj.name) {
        case 'quest_case':
        case 'quest_strap':
        case 'quest_L':
        case 'quest_R':
          obj.material = mat_matcap07;
          break;
        case 'quest_black':
        case 'quest_cam':
          obj.material = mat_matcap08;
          break;
        case 'quest_glass':
          obj.material = mat_matcap02;
          break;
        case 'quest_L_black':
        case 'quest_R_black':
          obj.material = mat_matcap09;
          break;
      }
    }
  });
  gltf.scene.scale.set(1.5,1.5,1.5);
  gltf.scene.position.z = 1;
  BuildScene_03.addToScene(gltf.scene);
});

/**
 * 
 * BLOCK 04 webApp -------------------------
 * 
 */
const BuildScene_04 = new BuildScene('c4', 2.5);
const tex_website = textureLoader.load('./assets/meshes/website.jpg');
tex_website.flipY = false;
tex_website.magFilter = THREE.NearestFilter;
const mat_website = new THREE.MeshBasicMaterial({map: tex_website});

gltfLoader.load('./assets/meshes/webapp.glb', (gltf)=>{
  gltf.scene.traverse((obj) => {
    if(obj instanceof THREE.Mesh){
      switch (obj.name) {
        case 'm_red':
          obj.material = mat_matcap10;
          break;
        case 'm_gray':
          obj.material = mat_matcap11;
          break;
        case 'm_black':
        case 'm_01':
        case 'm_02':
        case 'm_green':
          obj.material = mat_matcap02;
          break;
        case 'm_web':
          obj.material = mat_website;
          break;
      }
    }
  });
  gltf.scene.scale.set(2,2,2);
  gltf.scene.position.x = 1;
  gltf.scene.position.y = 0.1;
  BuildScene_04.addToScene(gltf.scene);
});

/**
 *  ------------------------- ------------------------- -------------------------
 */

const tick = () => {
  BuildScene_01.controls.update();
  BuildScene_01.renderer.render(BuildScene_01.scene, BuildScene_01.camera);
  
  BuildScene_02.controls.update();
  BuildScene_02.renderer.render(BuildScene_02.scene, BuildScene_02.camera);

  BuildScene_03.controls.update();
  BuildScene_03.renderer.render(BuildScene_03.scene, BuildScene_03.camera);

  BuildScene_04.controls.update();  
  BuildScene_04.renderer.render(BuildScene_04.scene, BuildScene_04.camera);

  window.requestAnimationFrame(tick);
}
tick();




/**
 * LICENSE CREDIT
 * 
 * ASFAN Internatioal Trading Company
 * 
 * "MatCaps" (https://github.com/nidorx/matcaps/blob/master/thumbnail/AC171C_FA8593_E84854_D3464E.jpg) Matcaps by nidorx github (https://github.com/nidorx)
 * "MatCaps" (https://github.com/nidorx/matcaps/blob/master/thumbnail/9F1A27_F1AF7F_CD5845_D08441.jpg) Matcaps by nidorx github (https://github.com/nidorx)
 * "MatCaps" (https://github.com/nidorx/matcaps/blob/master/thumbnail/7877EE_D87FC5_75D9C7_1C78C0.jpg) Matcaps by nidorx github (https://github.com/nidorx)
 * "MatCaps" (https://github.com/nidorx/matcaps/blob/master/thumbnail/4F4742_B7B1AA_847E79_969294.jpg) Matcaps by nidorx github (https://github.com/nidorx)
 * "MatCaps" (https://github.com/nidorx/matcaps/blob/master/thumbnail/1C1810_352F23_2B2C1C_2B2C24.jpg) Matcaps by nidorx github (https://github.com/nidorx) (modified)
 * "MatCaps" (https://github.com/nidorx/matcaps/blob/master/thumbnail/1B1B1B_999999_575757_747474.jpg) Matcaps by nidorx github (https://github.com/nidorx)
 * "MatCaps" (https://github.com/nidorx/matcaps/blob/master/thumbnail/1A2461_3D70DB_2C3C8F_2C6CAC.jpg) Matcaps by nidorx github (https://github.com/nidorx)
 * "MatCaps" (https://github.com/nidorx/matcaps/blob/master/thumbnail/579241_B5D25D_0E1D2D_97C284.jpg) Matcaps by nidorx github (https://github.com/nidorx)
 * "MatCaps" (https://github.com/nidorx/matcaps/blob/master/thumbnail/1B1C19_5F615D_4B4E4C_3F403D.jpg) Matcaps by nidorx github (https://github.com/nidorx)
 * "MatCaps" (https://github.com/nidorx/matcaps/blob/master/thumbnail/3F4441_D1D7D6_888F87_A2ADA1.jpg) Matcaps by nidorx github (https://github.com/nidorx)
 * "MatCaps" (https://github.com/nidorx/matcaps/blob/master/thumbnail/346088_6ABED7_56A0C5_4E91B8.jpg) Matcaps by nidorx github (https://github.com/nidorx)
 * 
 */