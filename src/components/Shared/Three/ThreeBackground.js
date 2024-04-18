import { OrbitControls, Stars } from "@react-three/drei";

const ThreeBackground = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <Stars
        radius={100}
        depth={50}
        count={950}
        factor={3}
        saturation={0}
      />
      <Stars
        radius={50}
        depth={50}
        count={25}
        factor={3}
        saturation={0}
        fade
        speed={30}
      />
      <Stars
        radius={50}
        depth={50}
        count={25}
        factor={3}
        saturation={0}
        fade
        speed={20}
      />
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.2}
        enablePan={false}
        enableRotate={false}
        enableZoom={false}
      />
    </>
  );
};

export default ThreeBackground;
