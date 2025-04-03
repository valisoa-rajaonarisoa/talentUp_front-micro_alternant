import { KeycloakInstance } from "keycloak-js";
import { ReactNode } from "react";

export interface KeycloakContextType {
  keycloak: KeycloakInstance | null;
  authenticated: boolean;
  keycloakInitialized: boolean;
}

export interface KeycloakContextProviderProps {
  children: ReactNode;
}

// ***************type de l'url pour la navigation
// Définition du type pour éviter les erreurs TypeScript
export interface IRoute {
  path: string;
  name: string;
  icon: ReactNode;
}














// ****************************** style char


export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user';
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  date: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

export interface Alternant {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  status: 'searching' | 'placed' | 'pending';
  skills: string[];
  education: string;
  location: string;
  availability: string;
  cv?: string;
  createdAt: string;
}

export interface Webinar {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  speaker: string;
  image?: string;
  status: 'upcoming' | 'past' | 'live';
  participants: number;
  registeredParticipants: number;
  tags: string[];
}

export interface Company {
  id: string;
  name: string;
  logo?: string;
  industry: string;
  location: string;
  website?: string;
  contactPerson: string;
  email: string;
  phone?: string;
  offers: number;
  alternants: number;
  createdAt: string;
}

export interface Learner {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  registeredAt: string;
  progress: number;
  completedCourses: number;
  webinarsAttended: number;
  certifications: string[];
}

export type ChartData = {
  name: string;
  value: number;
}[];

export type LineChartData = {
  name: string;
  value: number;
}[];

export interface StatsCard {
  title: string;
  value: number | string;
  change?: number;
  icon: React.ReactNode;
}

export interface TabItem {
  key: string;
  label: string;
  content: React.ReactNode;
}
