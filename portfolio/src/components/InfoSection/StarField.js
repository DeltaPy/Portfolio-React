import React, {useState} from "react";
import { useThree } from "react-three-fiber";
import * as THREE from "three";


const Background = () => {
  const [loaded, setLoaded] = useState(false);
  const { scene } = useThree();

  var starsGeometry = new THREE.Geometry();
  
  if(!loaded) {
    setLoaded(!loaded);
    for (var i = 0; i < 3000; i++) {
      var star = new THREE.Vector3();
      star.x = THREE.Math.randFloatSpread(2000);
      star.y = THREE.Math.randFloatSpread(2000);
      star.z = THREE.Math.randFloatSpread(2000);
      
      starsGeometry.vertices.push(star);
    }
  }
    
  var starsMaterial = new THREE.PointsMaterial({ color: 0x888888 });
  
    
  var starField = new THREE.Points(starsGeometry, starsMaterial);
  
  scene.add(starField);

  return <ambientLight />;
}

export default Background;