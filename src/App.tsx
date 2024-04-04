import * as Comps from "@/components/ui";
import TwoByFourBrick from "@/components/models/twoByFourBrick";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

export default function App() {
  return (
    <>
      <Comps.Button>Kevin</Comps.Button>
      <Suspense fallback={<>Its Loading. Be patient Kevin!</>}>
        <Canvas>
          <TwoByFourBrick />
        </Canvas>
      </Suspense>
    </>
  );
}
