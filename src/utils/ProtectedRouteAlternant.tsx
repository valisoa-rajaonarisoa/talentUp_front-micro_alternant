import { useKeycloak } from "../context/keycloak/KeycloakContext";

type Props = {
  children: React.ReactNode;
};
const ProtectedRouteAlternant = ({ children }: Props) => {
  //   ****************initialisation de keycloak ***********
  const { keycloak, keycloakInitialized } = useKeycloak();

  // ***********chargement de kc*****
  if (!keycloakInitialized) return <div>******** Chargement ********</div>;

  // ****************si il est authentifié ***
  if (keycloak != null && keycloak.authenticated) {
    //   ****************verification du roles**
    if (keycloak.realmAccess?.roles.includes("alternant")) {
      // ****return le children
      return children;
    } else {
      //redirection vers le api_gateway
      return (window.location.href = import.meta.env.VITE_SERVICE_HOST);
    }
    //   ************si non au page navigation ************
  } else {
    return (window.location.href = import.meta.env.VITE_SERVICE_HOST);
  }
};

export default ProtectedRouteAlternant;
