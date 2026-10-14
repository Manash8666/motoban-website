"use client";

import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function PistonAssembly() {
  const groupRef = useRef<THREE.Group>(null);
  const pistonRef = useRef<THREE.Group>(null);
  const rodRef = useRef<THREE.Mesh>(null);
  const gearRef = useRef<THREE.Group>(null);
  const secondaryGearRef = useRef<THREE.Group>(null);

  // Mouse parallax interpolation
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    // Parallax easing
    mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.05;
    mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.05;

    if (groupRef.current) {
      groupRef.current.rotation.y = mouse.current.x * 0.45;
      groupRef.current.rotation.x = -mouse.current.y * 0.35 + 0.1;
    }

    const t = state.clock.getElapsedTime() * 3.5;

    // Piston reciprocating motion (sine wave)
    if (pistonRef.current) {
      pistonRef.current.position.y = 1.1 + Math.sin(t) * 0.45;
    }

    // Connecting rod oscillation
    if (rodRef.current) {
      rodRef.current.rotation.z = Math.cos(t) * 0.22;
      rodRef.current.position.y = 0.2 + (Math.sin(t) * 0.45) / 2;
    }

    // Crankshaft & Timing gears rotation
    if (gearRef.current) {
      gearRef.current.rotation.z = -t * 0.8;
    }
    if (secondaryGearRef.current) {
      secondaryGearRef.current.rotation.z = t * 1.6;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* PISTON HEAD */}
      <group ref={pistonRef} position={[0, 1.1, 0]}>
        {/* Main Piston Crown & Skirt */}
        <mesh>
          <cylinderGeometry args={[0.9, 0.9, 1.1, 32]} />
          <meshStandardMaterial
            color="#1C263D"
            metalness={0.9}
            roughness={0.2}
            envMapIntensity={1}
          />
        </mesh>

        {/* Outer Tech Wireframe */}
        <mesh>
          <cylinderGeometry args={[0.91, 0.91, 1.12, 16]} />
          <meshBasicMaterial color="#C9F31D" wireframe transparent opacity={0.3} />
        </mesh>

        {/* Compression Rings */}
        <mesh position={[0, 0.3, 0]}>
          <torusGeometry args={[0.91, 0.025, 8, 32]} />
          <meshStandardMaterial color="#FF5E14" emissive="#FF5E14" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[0, 0.15, 0]}>
          <torusGeometry args={[0.91, 0.025, 8, 32]} />
          <meshStandardMaterial color="#C9F31D" emissive="#C9F31D" emissiveIntensity={0.6} />
        </mesh>

        {/* Wrist Pin (Gudgeon Pin) */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.22, 0.22, 1.5, 16]} />
          <meshStandardMaterial color="#94A3B8" metalness={0.95} roughness={0.1} />
        </mesh>
      </group>

      {/* CONNECTING ROD */}
      <mesh ref={rodRef} position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.18, 0.22, 1.6, 16]} />
        <meshStandardMaterial color="#1E293B" metalness={0.8} roughness={0.3} />
        {/* Rod accent wireframe */}
        <lineSegments>
          <edgesGeometry args={[new THREE.CylinderGeometry(0.19, 0.23, 1.62, 8)]} />
          <lineBasicMaterial color="#2563EB" transparent opacity={0.5} />
        </lineSegments>
      </mesh>

      {/* PRIMARY CRANK GEAR */}
      <group ref={gearRef} position={[0, -0.85, 0]}>
        {/* Center Gear Hub */}
        <mesh>
          <cylinderGeometry args={[0.7, 0.7, 0.25, 32]} />
          <meshStandardMaterial color="#0F172A" metalness={0.9} roughness={0.25} />
        </mesh>
        <mesh>
          <cylinderGeometry args={[0.71, 0.71, 0.26, 16]} />
          <meshBasicMaterial color="#C9F31D" wireframe transparent opacity={0.4} />
        </mesh>

        {/* Gear Teeth */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 0.75, Math.sin(angle) * 0.75, 0]}
              rotation={[0, 0, angle]}
            >
              <boxGeometry args={[0.14, 0.16, 0.25]} />
              <meshStandardMaterial color="#334155" metalness={0.85} roughness={0.2} />
            </mesh>
          );
        })}
      </group>

      {/* SECONDARY TIMING GEAR */}
      <group ref={secondaryGearRef} position={[1.25, -0.85, 0]}>
        <mesh>
          <cylinderGeometry args={[0.45, 0.45, 0.2, 24]} />
          <meshStandardMaterial color="#1E293B" metalness={0.9} roughness={0.2} />
        </mesh>
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 0.48, Math.sin(angle) * 0.48, 0]}
              rotation={[0, 0, angle]}
            >
              <boxGeometry args={[0.1, 0.12, 0.2]} />
              <meshStandardMaterial color="#FF5E14" emissive="#FF5E14" emissiveIntensity={0.4} />
            </mesh>
          );
        })}
      </group>

      {/* AMBIENT PARTICLES (WORKSHOP SPARKS) */}
      <SparklesCount count={60} />
    </group>
  );
}

function SparklesCount({ count }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return pos;
  });

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.08;
      pointsRef.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#C9F31D"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function HeroEngineCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-transparent">
        <div className="w-12 h-12 rounded-full border-2 border-[#C9F31D] border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-85 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />

        {/* Geekfolio Signature Lights: Lime, High-Vis Orange, Cobalt AI */}
        <pointLight position={[3, 3, 3]} color="#C9F31D" intensity={3.5} distance={10} />
        <pointLight position={[-3, -2, 2]} color="#FF5E14" intensity={3.0} distance={10} />
        <pointLight position={[0, 4, -2]} color="#2563EB" intensity={2.5} distance={10} />
        <directionalLight position={[0, 5, 2]} intensity={0.8} color="#ffffff" />

        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
            <PistonAssembly />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
