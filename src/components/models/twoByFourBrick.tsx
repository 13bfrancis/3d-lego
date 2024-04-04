import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function Model() {
  const result = useLoader(GLTFLoader, "./new.gltf");

  return <primitive object={result.scene} scale=".4" />;
}
