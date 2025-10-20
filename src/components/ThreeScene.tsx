import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { Mesh } from 'three'; // Import Mesh type

const RotatingBox = () => {
  const mesh = useRef<Mesh>(null); // Fixed useRef and added Mesh type

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <Box ref={mesh}>
      <meshStandardMaterial color={'#6366f1'} />
    </Box>
  );
};

const ThreeScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <RotatingBox />
    </Canvas>
  );
};

export default ThreeScene;
