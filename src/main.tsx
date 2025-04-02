import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import KeycloakContextProvider from "./context/keycloak/KeycloakContext.tsx";
import ProtectedRouteAdmin from "./utils/ProtectedRouteAdmin.tsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRouteAdmin>
        <App />
      </ProtectedRouteAdmin>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KeycloakContextProvider>
      <RouterProvider router={route} />
    </KeycloakContextProvider>
  </StrictMode>
);
