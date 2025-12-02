import React from "react";
import {
  ComputerIllustration,
  DataProcessingIllustration,
  NetworkIllustration,
  SpeedChartIllustration,
  StorageIllustration,
  CPUIllustration,
  InputDevicesIllustration,
  OutputDevicesIllustration,
  MicrocomputerIllustration,
  MainframeIllustration,
  SupercomputerIllustration,
  SystemArchitectureIllustration,
} from "@/components/Illustrations";

export type IllustrationComponent = React.ComponentType<{ className?: string; width?: number; height?: number }>;

export const illustrationMap: Record<string, IllustrationComponent> = {
  // Lesson 1: What is a Computer?
  "lesson1-definition": ComputerIllustration,
  "lesson1-role": DataProcessingIllustration,
  "lesson1-advantages": SpeedChartIllustration,
  "lesson1-flowchart": DataProcessingIllustration,
  
  // Lesson 2: Characteristics
  "lesson2-intro": ComputerIllustration,
  "lesson2-speed": SpeedChartIllustration,
  "lesson2-storage": StorageIllustration,
  "lesson2-comparison": SpeedChartIllustration,
  
  // Lesson 3: Types of Computers
  "lesson3-intro": ComputerIllustration,
  "lesson3-micro": MicrocomputerIllustration,
  "lesson3-mini": MainframeIllustration,
  "lesson3-mainframe": MainframeIllustration,
  "lesson3-super": SupercomputerIllustration,
  "lesson3-embedded": CPUIllustration,
  
  // Lesson 4: Components
  "lesson4-intro": ComputerIllustration,
  "lesson4-hardware-input": InputDevicesIllustration,
  "lesson4-hardware-cpu": CPUIllustration,
  "lesson4-hardware-memory": StorageIllustration,
  "lesson4-hardware-storage": StorageIllustration,
  "lesson4-hardware-output": OutputDevicesIllustration,
  "lesson4-software": ComputerIllustration,
  "lesson4-comparison": ComputerIllustration,
  
  // Lesson 5: Block Diagram
  "lesson5-intro": SystemArchitectureIllustration,
  "lesson5-diagram": SystemArchitectureIllustration,
  "lesson5-input": InputDevicesIllustration,
  "lesson5-processing": CPUIllustration,
  "lesson5-output": OutputDevicesIllustration,
  "lesson5-storage": StorageIllustration,
};

export const getIllustration = (key: string): IllustrationComponent | null => {
  return illustrationMap[key] || null;
};

