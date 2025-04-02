import { Outlet, useLocation } from "react-router-dom";
import { ColorModeContext, useMode } from "../../context/theme/mui/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { MyProSidebarProvider } from "../../context/sidebar/sidebarContext";
import Topbar from "../../layouts/topbar/Topbar";
import DashboardPage from "./dashboard/DashboardPage";

type Props = {};

const App = ({}: Props) => {
  // Utilisation du hook `useMode` pour obtenir le thème (`theme`) et l'objet `colorMode` contenant la méthode `toggleColorMode`
  const [theme, colorMode] = useMode();

  const { pathname } = useLocation();

  console.log(pathname.split("/").length)

  return (
    // Le `ColorModeContext.Provider` fournit l'objet `colorMode` à tous les composants enfants via le contexte React
    <ColorModeContext.Provider
      value={
        colorMode as {
          toggleColorMode: () => void;
        }
      }
    >
      {/* Le `ThemeProvider` applique le thème (`theme`) à tous les composants enfants */}
      <ThemeProvider theme={theme}>
        {/* `CssBaseline` réinitialise les styles CSS par défaut pour garantir une base propre et cohérente */}
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              <Topbar />

              {/* *******************si  c'est ==3 c'est surement la racine, parceque le format est localhots/espace/idUser  ******* */}
              {(pathname.split("/").length === 3 ||
                (pathname === "/espace_admin" &&
                  pathname.split("/").length === 2)) && <DashboardPage />}

              <Outlet />
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
