import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import KeycloakContextProvider from "./context/keycloak/KeycloakContext.tsx";

import WebinairePage from "./pages/webinaire/WebinairePage.tsx";
import DashboardPage from "./pages/dashboard/DashboardPage.tsx";
import MessengerPage from "./pages/Messenger/MessengerPage.tsx";

import ProfilePage from "./pages/profile/ProfilePage.tsx";
import AlternantPage from "./pages/alternant/AlternantPage.tsx";
import ApprenantPage from "./pages/apprenant/ApprenantPage.tsx";
import AgendaPage from "./pages/agenda/AgendaPage.tsx";
import ProtectedRouteAlternant from "./utils/ProtectedRouteAlternant.tsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRouteAlternant>
        <App />
      </ProtectedRouteAlternant>
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
        path: "/messenger",
        element: <MessengerPage />,
      },
      {
        path: "/agenda",
        element: <AgendaPage />,
      },

      {
        path: "/profile",
        element: <ProfilePage />,
      },

      {
        path: "/alternants",
        element: <AlternantPage />,
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
