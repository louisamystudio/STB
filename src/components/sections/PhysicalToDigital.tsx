
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import ModelViewer from './ModelViewer';

export function PhysicalToDigital() {
  return (
    <div className="w-full h-[600px] relative">
      <ModelViewer />
    </div>
  );
}

export default PhysicalToDigital;
