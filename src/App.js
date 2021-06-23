import React, { useRef, useState } from 'react';
import './App.css';
import { Canvas, useFrame } from 'react-three-fiber';

const Tile = ({ position, color }) => {
  const mesh = useRef(null);

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return(
    <mesh ref={mesh} position={position}>
      {/* Material (look/color) and Geometry(shape) || Args height, width, depth (x,y,z)*/}
      {/* Attach represents how were using the object. */}
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshStandardMaterial attach='material' color={color} />
    </mesh>
  )
}

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <Canvas shadows colorManagement camera={{position: [-5, 2, 10], fov: 60}}>
        <ambientLight castShadow intensity={0.3}/>
        <Tile position={[0, 1, 0]} color="green"/>
        <Tile position={[-2, 1, 5]} color="red"/>
        <Tile position={[5, 1, -2]} color="purple"/>
      </Canvas>
    </div>
  );
}

export default App;

