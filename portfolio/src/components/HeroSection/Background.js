import React, {useState} from "react";
import { useThree } from "react-three-fiber";
import * as THREE from "three";


function Background() {
  const [loaded, setLoaded] = useState(false);
  const { scene } = useThree();
  
 
  
      //This will add a starfield to the background of a scene
      var starsGeometry = new THREE.Geometry();

      for (var i = 0; i < 3000; i++) {
        var star = new THREE.Vector3();
        star.x = THREE.Math.randFloatSpread(2000);
        star.y = THREE.Math.randFloatSpread(2000);
        star.z = THREE.Math.randFloatSpread(2000);

        starsGeometry.vertices.push(star);
      }

      var starsMaterial = new THREE.PointsMaterial({ color: 0x888888 });

      var starField = new THREE.Points(starsGeometry, starsMaterial);

      

      if(!loaded) {
        scene.add(starField);
        setLoaded(!loaded);
      return <ambientLight />;
      }else return <ambientLight />;

      
  
}

export default Background;
