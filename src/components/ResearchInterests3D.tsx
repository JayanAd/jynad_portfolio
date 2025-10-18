import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface WordProps {
  text: string;
  position: [number, number, number];
  size: number;
  color: string;
}

function FloatingWord({ text, position, size, color }: WordProps) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const speed = useMemo(() => Math.random() * 0.5 + 0.3, []);
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(clock.elapsedTime * speed + offset) * 0.3;
      meshRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.2 + offset) * 0.2;
      
      // Smooth scale transition
      const targetScale = hovered ? 1.3 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group 
      ref={meshRef} 
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Text
        fontSize={size}
        color={hovered ? '#ffffff' : color}
        anchorX="center"
        anchorY="middle"
        outlineWidth={hovered ? 0.08 : 0.03}
        outlineColor={hovered ? color : "#1a0b2e"}
      >
        {text}
      </Text>
      {hovered && (
        <pointLight position={[0, 0, 0.5]} intensity={3} distance={4} color={color} />
      )}
    </group>
  );
}

function Particles() {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const particlesRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#a855f7"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function ConnectingLines() {
  const linesRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = clock.elapsedTime * 0.1;
    }
  });

  const lines = useMemo(() => {
    const result = [];
    for (let i = 0; i < 5; i++) {
      const points = [];
      const radius = 4 + i;
      for (let j = 0; j <= 64; j++) {
        const angle = (j / 64) * Math.PI * 2;
        points.push(
          new THREE.Vector3(
            Math.cos(angle) * radius,
            Math.sin(angle + i) * 2,
            Math.sin(angle) * radius
          )
        );
      }
      result.push(points);
    }
    return result;
  }, []);

  return (
    <group ref={linesRef}>
      {lines.map((points, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={points.length}
              array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#a855f7" transparent opacity={0.15} />
        </line>
      ))}
    </group>
  );
}

function Scene() {
  const words = useMemo(() => [
    { text: 'Trustworthy AI', size: 0.8, color: '#9333ea' },
    { text: 'Explainable AI', size: 0.75, color: '#06b6d4' },
    { text: 'Federated Learning', size: 0.75, color: '#8b5cf6' },
    { text: 'Deep Learning', size: 0.55, color: '#0891b2' },
    { text: 'NLP', size: 0.56, color: '#7c3aed' },
    { text: 'Computer Vision', size: 0.58, color: '#0e7490' },
    { text: 'AI in healthcare', size: 0.45, color: '#a855f7' },
    { text: 'Fairness in AI', size: 0.52, color: '#0284c7' },
    { text: 'LLMs', size: 0.68, color: '#6366f1' },
    { text: 'VLMs', size: 0.45, color: '#0891b2' },
  ], []);

  const positions = useMemo(() => {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    return words.map((_, i) => {
      const y = 1 - (i / (words.length - 1)) * 2;
      const radius = Math.sqrt(1 - y * y) * 4.5;
      const theta = goldenAngle * i;
      
      return [
        Math.cos(theta) * radius,
        y * 3.5,
        Math.sin(theta) * radius
      ] as [number, number, number];
    });
  }, [words.length]);

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#a855f7" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#22d3ee" />
      <pointLight position={[0, 0, 10]} intensity={1} color="#ec4899" />
      <spotLight position={[0, 10, 0]} intensity={1} angle={0.3} penumbra={1} color="#ffffff" />
      
      <ConnectingLines />
      <Particles />
      
      {words.map((word, index) => (
        <FloatingWord
          key={word.text}
          text={word.text}
          position={positions[index]}
          size={word.size}
          color={word.color}
        />
      ))}
      
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        minDistance={10}
        maxDistance={19}
        autoRotate
        autoRotateSpeed={0.2}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  );
}

export default function ResearchInterests3D() {
  return (<>
  <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Research Interests
            </h2>
            <p className="text-lg text-muted-foreground">
          </p>
          </div>
    {/* <div className="w-full h-[600px] bg-gradient-to-br from-purple-950/30 via-background to-cyan-950/30 rounded-2xl overflow-hidden border border-purple-400/10 shadow-[0_0_50px_rgba(168,85,247,0.15)] backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent pointer-events-none" />
      <Canvas camera={{ position: [0, 0, 14], fov: 65 }} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={['#0a0520']} />
        <fog attach="fog" args={['#0a0520', 12, 30]} />
        <Scene />
      </Canvas>
    </div> */}
    <div className="w-full h-[600px]  bg-transparent overflow-hidden border-none  relative">
  <Canvas
    camera={{ position: [0, 0, 44], fov: 65 }}
    gl={{ antialias: true, alpha: true }}
  >

    <Scene />
  </Canvas>
</div>

  </>);
}