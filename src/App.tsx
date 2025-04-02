import { Outlet, useLocation } from "react-router-dom";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ColorModeContext, useMode } from "./context/theme/theme";
import { MyProSidebarProvider } from "./context/sidebar/sidebarContext";
import Topbar from "./layouts/topbar/Topbar";
import { useKeycloak } from "./context/keycloak/KeycloakContext";
import DashboardPage from "./pages/dashboard/DashboardPage";

type Props = {};

const App = ({}: Props) => {
  // *********************************  S T A T E*********

  const { keycloak } = useKeycloak();
  const [theme, colorMode] = useMode();

  const { pathname } = useLocation();

  console.log(pathname.split("/").length);

  // *****************verification
  console.log(keycloak);

  // ***************************  R E N D E R*******
  return (
    // Le `ColorModeContext.Provider` fournit l'objet `colorMode` à tous les composants enfants via le contexte React
    <ColorModeContext.Provider
      value={
        colorMode as {
          toggleColorMode: () => void;
        }
      }
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              <Topbar />

              {pathname == "/" && <DashboardPage />}

              <Outlet />
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
