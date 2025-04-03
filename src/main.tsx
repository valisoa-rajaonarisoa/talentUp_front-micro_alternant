import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import KeycloakContextProvider from "./context/keycloak/KeycloakContext.tsx";
import ProtectedRouteAdmin from "./utils/ProtectedRouteAdmin.tsx";
import WebinairePage from "./pages/webinaire/WebinairePage.tsx";
import DashboardPage from "./pages/dashboard/DashboardPage.tsx";
import AlternantPage from "./pages/alternant/AlternantPage.tsx";
import EntreprisePage from "./pages/entreprise/EntreprisePage.tsx";
import ApprenantPage from "./pages/apprenant/ApprenantPage.tsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRouteAdmin>
        <App />
      </ProtectedRouteAdmin>
    ),

    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },

      {
        path: "/webinaires",
        element: <WebinairePage />,
      },

      {
        path: "/alternants",
        element: <AlternantPage />,
      },
      {
        path: "/entreprises",
        element: <EntreprisePage />,
      },

      {
        path: "/apprenants",
        element: <ApprenantPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KeycloakContextProvider>
      <RouterProvider router={route} />
    </KeycloakContextProvider>
  </StrictMode>
);
