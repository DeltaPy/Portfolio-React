import React, {useState} from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const Background = () => {
  const [loaded, setLoaded] = useState(false);
  const { scene } = useThree();

  let starsGeometry = new THREE.BufferGeometry();
  let points = [];
  if(!loaded) {
    setLoaded(!loaded);
    for (let i = 0; i < 2000; i++) {
      let star = new THREE.Vector3();
      star.x = THREE.MathUtils.randFloatSpread(2000);
      star.y = THREE.MathUtils.randFloatSpread(2000);
      star.z = THREE.MathUtils.randFloatSpread(2000);
      points.push(star);
    }
    starsGeometry.setFromPoints(points);
  }
    
  let starsMaterial = new THREE.PointsMaterial({ color: 0x888888 });
  starsMaterial.size = Math.random() * (0.4) + 0.6;
  let starField = new THREE.Points(starsGeometry, starsMaterial);
  
  scene.add(starField);

  return <ambientLight />;
}

export default Background;