import { MeshWriter } from "meshwriter";

const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

const createScene = function () {

  const scene = new BABYLON.Scene(engine);
  const camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, Math.PI / 4, 50, BABYLON.Vector3.Zero(), scene);
  const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 10, 0), scene);

  camera.attachControl(canvas, true);
  light.intensity = 0.5;

  write()
  return scene;

  function write() {
    const Writer = BABYLON.MeshWriter(scene, { scale: 0.1, defaultFont: "Arial" });
    new Writer(
      "Emad und Frank im 3D Welt :D",
      {
        "anchor": "center",
        "letter-height": 40,
        "color": "#1C3870",
        "position": {
          "z": 0
        }
      }
    );
  }

};

const scene = createScene();
engine.runRenderLoop(() => scene.render());
