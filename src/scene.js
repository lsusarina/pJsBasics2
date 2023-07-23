import {guiAlert, guiPrompt} from './talking.js';
export async function initScene(scene) {
    let camera = new BABYLON.ArcRotateCamera("camera1", Math.PI / 2, Math.PI / 3, 17, BABYLON.Vector3.Zero());
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);
    let light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    const ground = new BABYLON.MeshBuilder.CreateGround('ground', { width: 10, height: 10 }, scene);
    const materialGround = new BABYLON.GridMaterial('grid', scene);
    materialGround.mainColor = new BABYLON.Color3.White();
    materialGround.lineColor = new BABYLON.Color3.Black();
    ground.material = materialGround;
    
    scene.executeWhenReady(()=>{
        whenReady();
    });

    makeOlympicSymbol(scene, -2.5, 2.5);
    makeOlympicSymbol(scene, 2.5, 2.5);
    makeOlympicSymbol(scene, 2.5, -2.5);
    makeOlympicSymbol(scene, -2.5, -2.5);
};

async function whenReady(){

};

function makeOlympicSymbol(scene, positionX = 0, positionZ = 0) {
    const tor1 = BABYLON.MeshBuilder.CreateTorus('tor1', {
        diameter: 1,
        thickness: 0.1
      }, scene);

      tor1.position.x = -1 + positionX;
      tor1.position.z = positionZ;

    const tor2 = BABYLON.MeshBuilder.CreateTorus('tor2', {
        diameter: 1,
        thickness: 0.1
      }, scene);

      tor2.position.x = -0.5 + positionX;
      tor2.position.z = 0.5  + positionZ;

    const tor3 = BABYLON.MeshBuilder.CreateTorus('tor3', {
        diameter: 1,
        thickness: 0.1
      }, scene);

      tor3.position.x = 0 + positionX;
      tor3.position.z = positionZ;
    
      const tor4 = BABYLON.MeshBuilder.CreateTorus('tor4', {
        diameter: 1,
        thickness: 0.1
      }, scene);

      tor4.position.x = 0.5 + positionX;
      tor4.position.z = 0.5 + positionZ;

      const tor5 = BABYLON.MeshBuilder.CreateTorus('tor5', {
        diameter: 1,
        thickness: 0.1
      }, scene);

      tor5.position.x = 1 + positionX;
      tor5.position.z = positionZ;

      const materialBlue   = new BABYLON.StandardMaterial('materialBlue', scene);
      const materialBlack  = new BABYLON.StandardMaterial('materialBlack', scene);
      const materialRed    = new BABYLON.StandardMaterial('materialRed', scene);
      const materialYellow = new BABYLON.StandardMaterial('materialYellow', scene);
      const materialGreen  = new BABYLON.StandardMaterial('materialGreen', scene);

      materialBlue.diffuseColor   = new BABYLON.Color3(0, 0, 1);
      materialBlack.diffuseColor  = new BABYLON.Color3(0, 0, 0);
      materialRed.diffuseColor    = new BABYLON.Color3(1, 0, 0);
      materialYellow.diffuseColor = new BABYLON.Color3(1, 1, 0);
      materialGreen.diffuseColor  = new BABYLON.Color3(0, 1, 0);

      tor1.material = materialRed;
      tor2.material = materialGreen;
      tor3.material = materialBlack;
      tor4.material = materialYellow;
      tor5.material = materialBlue;
}

