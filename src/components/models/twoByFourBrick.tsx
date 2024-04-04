import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function Model() {
  const result = useLoader(GLTFLoader, "./scene.gltf");

  return <primitive object={result.scene} />;
}
