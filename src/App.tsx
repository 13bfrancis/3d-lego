import * as Comps from "@/components/ui";
import TwoByFourBrick from "@/components/models/twoByFourBrick";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <div className="h-screen w-screen">
      <Comps.Button>Kevin</Comps.Button>
      <Canvas>
        <Suspense fallback={<>Its Loading. Be patient Kevin!</>}>
          <OrbitControls />
          <TwoByFourBrick />
        </Suspense>
      </Canvas>
    </div>
  );
}
