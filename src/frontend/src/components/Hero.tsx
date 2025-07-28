import React, { useContext, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { LanguageContext } from '../App';
import { ChevronDown, Settings, Minus, Plus } from 'lucide-react';
import * as THREE from 'three';

// Speed control component
const SpeedControl: React.FC<{
  speed: number;
  onSpeedChange: (speed: number) => void;
}> = ({ speed, onSpeedChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const speedPresets = [
    { label: 'Very Slow', value: 0.3 },
    { label: 'Slow', value: 0.6 },
    { label: 'Normal', value: 1.0 },
    { label: 'Fast', value: 1.5 },
    { label: 'Very Fast', value: 2.0 },
  ];

  const handleSpeedChange = (newSpeed: number) => {
    onSpeedChange(newSpeed);
    // Save to localStorage
    localStorage.setItem('ids-portal-speed', newSpeed.toString());
  };

  return (
    <div className="absolute top-4 right-4 z-30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-black/70 hover:bg-gray-800 rounded-full border border-red-900 hover:border-red-500 transition-all duration-300 hover:shadow-red-glow group"
        title="Portal Animation Speed"
      >
        <Settings className="w-5 h-5 text-white group-hover:text-red-300 group-hover:rotate-90 transition-all duration-300" />
      </button>

      {isOpen && (
        <div className="absolute top-16 right-0 bg-black/90 backdrop-blur-sm rounded-xl p-4 border border-red-900 shadow-red-glow min-w-48">
          <h3 className="text-white font-semibold mb-3 text-sm">Portal Speed</h3>
          
          {/* Speed slider */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <button
                onClick={() => handleSpeedChange(Math.max(0.1, speed - 0.1))}
                className="p-1 bg-red-600 hover:bg-red-700 rounded text-white transition-colors hover:shadow-red-glow"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="text-gray-300 text-sm font-medium">
                {speed.toFixed(1)}x
              </span>
              <button
                onClick={() => handleSpeedChange(Math.min(3.0, speed + 0.1))}
                className="p-1 bg-red-600 hover:bg-red-700 rounded text-white transition-colors hover:shadow-red-glow"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
            
            <input
              type="range"
              min="0.1"
              max="3.0"
              step="0.1"
              value={speed}
              onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-red"
            />
          </div>

          {/* Preset buttons */}
          <div className="space-y-1">
            {speedPresets.map((preset) => (
              <button
                key={preset.value}
                onClick={() => handleSpeedChange(preset.value)}
                className={`w-full text-left px-3 py-2 rounded text-sm transition-all duration-300 hover:shadow-red-glow ${
                  Math.abs(speed - preset.value) < 0.1
                    ? 'bg-red-600 text-white'
                    : 'text-gray-300 hover:bg-red-900/20 hover:text-white'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Portal animation component with user-configurable speed
const PortalAnimation: React.FC<{ speed: number }> = ({ speed }) => {
  const meshRef = useRef<THREE.Group>(null);
  const portalRingsRef = useRef<THREE.Group>(null);
  const energyParticlesRef = useRef<THREE.Group>(null);
  const pentagramsRef = useRef<THREE.Group>(null);
  const { camera, scene } = useThree();
  
  useEffect(() => {
    // Set up camera position for portal effect
    camera.position.set(0, 0, 15);
    camera.lookAt(0, 0, 0);
    
    // Add fog for depth effect with gradient from black center to red corners
    scene.fog = new THREE.Fog(0x000000, 10, 100);
    
    // Add gradient background effect
    const gradientGeometry = new THREE.PlaneGeometry(200, 200);
    const gradientMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec2 vUv;
        void main() {
          vec2 center = vec2(0.5, 0.5);
          float dist = distance(vUv, center);
          
          // Create gradient from black center to subtle red corners
          float gradient = smoothstep(0.0, 1.0, dist);
          vec3 blackColor = vec3(0.0, 0.0, 0.0);
          vec3 redColor = vec3(0.15, 0.02, 0.02); // Very subtle red
          
          // Add subtle pulsing effect
          float pulse = sin(time * 0.5) * 0.02 + 0.98;
          vec3 color = mix(blackColor, redColor, gradient * pulse);
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      side: THREE.BackSide,
    });
    
    const gradientMesh = new THREE.Mesh(gradientGeometry, gradientMaterial);
    gradientMesh.position.z = -300;
    scene.add(gradientMesh);
    
    // Update shader time uniform
    const updateShader = () => {
      if (gradientMaterial.uniforms.time) {
        gradientMaterial.uniforms.time.value = Date.now() * 0.001;
      }
      requestAnimationFrame(updateShader);
    };
    updateShader();
    
    return () => {
      scene.remove(gradientMesh);
      gradientGeometry.dispose();
      gradientMaterial.dispose();
    };
  }, [camera, scene]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (meshRef.current) {
      // Speed-adjustable movement through the portal with faster default speed
      const baseSpeed = 0.01; // Increased from 0.0067 for faster default animation
      meshRef.current.position.z += baseSpeed * speed;
      
      // Reset position when too far forward (loop duration scales with speed)
      const resetDistance = 200;
      const startDistance = -200;
      if (meshRef.current.position.z > resetDistance) {
        meshRef.current.position.z = startDistance;
      }
      
      // Speed-adjustable rotation for dynamic portal effect with faster default
      const baseRotationSpeed = 0.08; // Increased from 0.05 for faster rotation
      meshRef.current.rotation.z = Math.sin(time * baseRotationSpeed * speed) * 0.008;
    }

    // Animate portal rings with speed-adjustable pulsing effect
    if (portalRingsRef.current) {
      portalRingsRef.current.children.forEach((ring, index) => {
        const ringMesh = ring as THREE.Mesh;
        const offset = index * 0.2;
        
        // Speed-adjustable pulsing scale effect with faster default
        const basePulseSpeed = 0.25; // Increased from 0.17 for faster pulsing
        const scale = 1 + Math.sin(time * basePulseSpeed * speed + offset) * 0.08;
        ringMesh.scale.setScalar(scale);
        
        // Speed-adjustable rotation for portal swirl effect with faster default
        const baseRingRotationSpeed = 0.1; // Increased from 0.067 for faster swirl
        ringMesh.rotation.z = time * baseRingRotationSpeed * speed + offset;
        
        // Speed-adjustable opacity pulsing with faster default
        if (ringMesh.material instanceof THREE.MeshStandardMaterial) {
          const baseOpacitySpeed = 0.4; // Increased from 0.27 for faster opacity changes
          ringMesh.material.opacity = 0.7 + Math.sin(time * baseOpacitySpeed * speed + offset) * 0.2;
        }
      });
    }

    // Animate energy particles with speed-adjustable movement
    if (energyParticlesRef.current) {
      energyParticlesRef.current.children.forEach((particle, index) => {
        const particleMesh = particle as THREE.Mesh;
        const offset = index * 0.08;
        
        // Speed-adjustable spiral movement towards camera with faster default
        const baseRadiusSpeed = 0.15; // Increased from 0.1 for faster radius changes
        const radius = 6 + Math.sin(time * baseRadiusSpeed * speed + offset) * 1.5;
        const baseSpiralSpeed = 0.25; // Increased from 0.17 for faster spiral motion
        const angle = time * baseSpiralSpeed * speed + offset * 1.5;
        
        particleMesh.position.x = Math.cos(angle) * radius;
        particleMesh.position.y = Math.sin(angle) * radius;
        
        const baseForwardSpeed = 0.6; // Increased from 0.4 for faster forward movement
        particleMesh.position.z = -120 + (time * baseForwardSpeed * speed + offset * 4) % 210;
        
        // Reset particle position when it gets too close
        if (particleMesh.position.z > 60) {
          particleMesh.position.z = -150;
        }
        
        // Scale based on distance
        const distance = Math.abs(particleMesh.position.z);
        const scale = Math.max(0.1, 1 - distance / 150);
        particleMesh.scale.setScalar(scale);
      });
    }

    // Animate floating pentagrams with speed-adjustable mystical movement
    if (pentagramsRef.current) {
      pentagramsRef.current.children.forEach((pentagram, index) => {
        const pentagramMesh = pentagram as THREE.Mesh;
        const offset = index * 0.5;
        
        // Speed-adjustable mystical floating movement with faster default
        const floatRadius = 20 + index * 5;
        const baseFloatSpeed = 0.045; // Increased from 0.03 for faster floating
        const baseVerticalSpeed = 0.03; // Increased from 0.02 for faster vertical movement
        const floatSpeed = baseFloatSpeed * speed + index * 0.01;
        const verticalSpeed = baseVerticalSpeed * speed + index * 0.005;
        
        pentagramMesh.position.x = Math.cos(time * floatSpeed + offset) * floatRadius;
        pentagramMesh.position.y = Math.sin(time * verticalSpeed + offset * 1.5) * (10 + index * 3);
        
        const baseDepthSpeed = 0.022; // Increased from 0.015 for faster depth changes
        pentagramMesh.position.z = -250 + Math.sin(time * baseDepthSpeed * speed + offset) * 50;
        
        // Speed-adjustable rotation for mystical effect with faster default
        const baseRotationSpeedX = 0.03; // Increased from 0.02
        const baseRotationSpeedY = 0.037; // Increased from 0.025
        const baseRotationSpeedZ = 0.022; // Increased from 0.015
        pentagramMesh.rotation.x = time * baseRotationSpeedX * speed + offset;
        pentagramMesh.rotation.y = time * baseRotationSpeedY * speed + offset * 1.2;
        pentagramMesh.rotation.z = time * baseRotationSpeedZ * speed + offset * 0.8;
        
        // Speed-adjustable pulsing opacity for mystical atmosphere with faster default
        if (pentagramMesh.material instanceof THREE.MeshStandardMaterial) {
          const baseOpacitySpeed = 0.15; // Increased from 0.1 for faster opacity pulsing
          pentagramMesh.material.opacity = 0.3 + Math.sin(time * baseOpacitySpeed * speed + offset) * 0.2;
        }
      });
    }
  });

  // Create pentagram shape geometry
  const createPentagramGeometry = () => {
    const shape = new THREE.Shape();
    const outerRadius = 1;
    const innerRadius = 0.4;
    
    // Create pentagram points
    for (let i = 0; i < 5; i++) {
      const outerAngle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
      const innerAngle = ((i + 0.5) * 2 * Math.PI) / 5 - Math.PI / 2;
      
      const outerX = Math.cos(outerAngle) * outerRadius;
      const outerY = Math.sin(outerAngle) * outerRadius;
      const innerX = Math.cos(innerAngle) * innerRadius;
      const innerY = Math.sin(innerAngle) * innerRadius;
      
      if (i === 0) {
        shape.moveTo(outerX, outerY);
      } else {
        shape.lineTo(outerX, outerY);
      }
      shape.lineTo(innerX, innerY);
    }
    shape.closePath();
    
    return new THREE.ShapeGeometry(shape);
  };

  // Create portal ring segments with extended depth and immediate visibility
  const portalRings = [];
  for (let i = 0; i < 120; i++) {
    const z = -i * 2.5 - 10;
    const scale = 1 + i * 0.04;
    
    portalRings.push(
      <group key={i} position={[0, 0, z]}>
        {/* Main portal ring */}
        <mesh scale={[scale, scale, 1]}>
          <torusGeometry args={[5.5, 0.3, 16, 32]} />
          <meshStandardMaterial 
            color="#ff0000" 
            emissive="#440000" 
            emissiveIntensity={0.4}
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.85}
          />
        </mesh>
        
        {/* Inner energy ring - keep center clear */}
        <mesh scale={[scale * 0.85, scale * 0.85, 1]}>
          <torusGeometry args={[4.8, 0.15, 16, 32]} />
          <meshBasicMaterial 
            color="#ff4444" 
            transparent 
            opacity={0.6}
          />
        </mesh>
        
        {/* Outer structural ring */}
        <mesh scale={[scale * 1.15, scale * 1.15, 1]}>
          <torusGeometry args={[6.2, 0.25, 16, 32]} />
          <meshStandardMaterial 
            color="#880000" 
            emissive="#220000" 
            roughness={0.8}
            metalness={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
        
        {/* Portal energy beams - positioned to keep center clear */}
        {Array.from({ length: 8 }).map((_, beamIndex) => {
          const angle = (beamIndex / 8) * Math.PI * 2;
          const x = Math.cos(angle) * 5.5 * scale;
          const y = Math.sin(angle) * 5.5 * scale;
          
          return (
            <mesh 
              key={beamIndex}
              position={[x, y, 0]}
              rotation={[0, 0, angle]}
            >
              <boxGeometry args={[0.08, 1.2, 0.08]} />
              <meshBasicMaterial 
                color="#ff6666" 
                transparent
                opacity={0.5}
              />
            </mesh>
          );
        })}
      </group>
    );
  }

  // Create energy particles for portal effect with immediate visibility
  const energyParticles = [];
  for (let i = 0; i < 300; i++) {
    const angle = (i / 300) * Math.PI * 2;
    const radius = Math.random() * 9 + 3;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const z = -Math.random() * 180 - 5;
    
    energyParticles.push(
      <mesh
        key={i}
        position={[x, y, z]}
      >
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial 
          color={Math.random() > 0.6 ? "#ff6666" : "#ffffff"} 
          transparent
          opacity={0.7}
        />
      </mesh>
    );
  }

  // Create floating pentagrams positioned behind the portal
  const pentagrams = [];
  const pentagramGeometry = createPentagramGeometry();
  
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const radius = 25 + Math.random() * 15;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const z = -300 - Math.random() * 200;
    const scale = 0.8 + Math.random() * 1.2;
    
    // Alternate between different pentagram styles
    const colorVariant = i % 3;
    let color, emissive, emissiveIntensity;
    
    switch (colorVariant) {
      case 0:
        color = "#ff0000";
        emissive = "#440000";
        emissiveIntensity = 0.3;
        break;
      case 1:
        color = "#ffffff";
        emissive = "#222222";
        emissiveIntensity = 0.2;
        break;
      default:
        color = "#880000";
        emissive = "#220000";
        emissiveIntensity = 0.3;
        break;
    }
    
    pentagrams.push(
      <mesh
        key={i}
        position={[x, y, z]}
        scale={[scale, scale, 1]}
        geometry={pentagramGeometry}
      >
        <meshStandardMaterial 
          color={color}
          emissive={emissive}
          emissiveIntensity={emissiveIntensity}
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
    );
  }

  return (
    <group ref={meshRef}>
      {/* Enhanced ambient lighting for immediate visibility */}
      <ambientLight intensity={0.25} color="#440000" />
      
      {/* Directional light for depth */}
      <directionalLight 
        position={[0, 0, 25]} 
        intensity={0.6} 
        color="#ff6666"
        target-position={[0, 0, -100]}
      />
      
      {/* Point lights for portal illumination - positioned for immediate visibility */}
      <pointLight position={[0, 0, 15]} intensity={2} color="#ff0000" distance={50} />
      <pointLight position={[0, 0, -10]} intensity={1.5} color="#ff4444" distance={40} />
      <pointLight position={[0, 0, -30]} intensity={1} color="#ff6666" distance={35} />
      <pointLight position={[0, 0, -50]} intensity={0.8} color="#ff8888" distance={30} />
      <pointLight position={[0, 0, -100]} intensity={0.6} color="#ffaaaa" distance={25} />
      <pointLight position={[0, 0, -150]} intensity={0.4} color="#ffcccc" distance={20} />
      
      {/* Floating pentagrams - positioned far behind portal */}
      <group ref={pentagramsRef}>
        {pentagrams}
      </group>
      
      {/* Portal rings - immediately visible */}
      <group ref={portalRingsRef}>
        {portalRings}
      </group>
      
      {/* Energy particles - immediately visible */}
      <group ref={energyParticlesRef}>
        {energyParticles}
      </group>
      
      {/* Central portal core - positioned to maintain clear center */}
      <mesh position={[0, 0, -180]}>
        <sphereGeometry args={[2, 24, 24]} />
        <meshBasicMaterial 
          color="#ffffff" 
          opacity={0.3} 
          transparent
        />
      </mesh>
      
      {/* Portal energy streams - keep away from center */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const x = Math.cos(angle) * 1.2;
        const y = Math.sin(angle) * 1.2;
        
        return (
          <mesh 
            key={i}
            position={[x, y, -105]}
            rotation={[0, 0, angle]}
          >
            <cylinderGeometry args={[0.06, 0.06, 180, 8]} />
            <meshBasicMaterial 
              color="#ff8888" 
              opacity={0.4} 
              transparent
            />
          </mesh>
        );
      })}
      
      {/* Portal vortex effect - positioned to keep center clear */}
      {Array.from({ length: 24 }).map((_, i) => {
        const scale = 1 + i * 0.25;
        const z = -8 - i * 18;
        return (
          <mesh key={i} position={[0, 0, z]} scale={[scale, scale, 1]}>
            <torusGeometry args={[3.5, 0.08, 12, 32]} />
            <meshBasicMaterial 
              color="#ff2222" 
              opacity={0.25 - i * 0.01}
              transparent
            />
          </mesh>
        );
      })}
      
      {/* Dimensional rifts - positioned around the portal, not in center */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i / 24) * Math.PI * 2;
        const x = Math.cos(angle) * 15;
        const y = Math.sin(angle) * 15;
        
        return (
          <mesh 
            key={i}
            position={[x, y, -120]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, angle]}
          >
            <planeGeometry args={[0.4, 6]} />
            <meshBasicMaterial 
              color="#ffffff" 
              opacity={0.5} 
              transparent
              side={THREE.DoubleSide}
            />
          </mesh>
        );
      })}
      
      {/* Additional portal frame for immediate visibility */}
      <mesh position={[0, 0, 5]}>
        <torusGeometry args={[7, 0.5, 16, 32]} />
        <meshStandardMaterial 
          color="#cc0000" 
          emissive="#330000" 
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
};

// Camera controller for enhanced portal immersion with speed adjustment
const CameraController: React.FC<{ speed: number }> = ({ speed }) => {
  const { camera } = useThree();
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const mouse = state.mouse;
    
    // Subtle camera movement based on mouse position
    camera.position.x = mouse.x * 1.5;
    camera.position.y = mouse.y * 0.8;
    
    // Speed-adjustable camera sway for portal immersion with faster default
    const baseCameraSwaySpeedX = 0.1; // Increased from 0.067 for faster camera movement
    const baseCameraSwaySpeedY = 0.075; // Increased from 0.05 for faster camera movement
    camera.position.x += Math.sin(time * baseCameraSwaySpeedX * speed) * 0.15;
    camera.position.y += Math.cos(time * baseCameraSwaySpeedY * speed) * 0.08;
    
    // Always look into the portal center
    camera.lookAt(0, 0, -20);
  });
  
  return null;
};

const Hero: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const [animationSpeed, setAnimationSpeed] = useState(1.5); // Increased default from 1.0 to 1.5

  // Load saved speed preference on component mount
  useEffect(() => {
    const savedSpeed = localStorage.getItem('ids-portal-speed');
    if (savedSpeed) {
      const speed = parseFloat(savedSpeed);
      if (!isNaN(speed) && speed >= 0.1 && speed <= 3.0) {
        setAnimationSpeed(speed);
      }
    }
  }, []);

  const scrollToROM = () => {
    const element = document.getElementById('rom-universe');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Canvas Background - immediately visible */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 15], fov: 75 }}
          style={{ background: '#000000' }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
          gl={{ 
            antialias: true,
            alpha: false,
            powerPreference: "high-performance"
          }}
        >
          <PortalAnimation speed={animationSpeed} />
          <CameraController speed={animationSpeed} />
        </Canvas>
      </div>

      {/* Speed Control */}
      <SpeedControl speed={animationSpeed} onSpeedChange={setAnimationSpeed} />

      {/* Lighter overlay gradient for better text readability while keeping portal visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-10" />
      
      {/* Subtle radial overlay for center focus without obscuring portal */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/20 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 mystical-title-entrance drop-shadow-2xl text-shadow-red">
          {t('hero.title')}
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg text-shadow-dark">
          {t('hero.subtitle')}
        </p>
        
        <button
          onClick={scrollToROM}
          className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-800 rounded-full hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-glow border border-red-500/30 hover:border-red-400"
        >
          {t('hero.cta')}
          <ChevronDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
          
          {/* Glowing effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-6 h-6 text-red-400 drop-shadow-lg glow-red" />
      </div>
    </section>
  );
};

export default Hero;
