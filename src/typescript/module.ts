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
