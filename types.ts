import React from 'react';

export interface Program {
  title: string;
  description: string;
  duration: string;
  outcomes: string[];
  icon: React.ReactNode;
}

export interface Story {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string; // Placeholder URL
  content: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface AppScreen {
  id: string;
  title: string;
  description: string;
  component: React.ReactNode;
}