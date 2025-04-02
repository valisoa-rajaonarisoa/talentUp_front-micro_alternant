import { Menu, Sidebar } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";

import { Box, useTheme } from "@mui/material";

import { tokens } from "../../context/theme/theme";
import { useSidebarContext } from "../../context/sidebar/sidebarContext";
import TitleSideBar from "./title/TitleSideBar";
import UserProfileSideBar from "./user/UserProfileSideBar";
import { useKeycloak } from "../../context/keycloak/KeycloakContext";
import URLSideBar from "./url/URLSideBar";
import { RouteURL } from "../../routes/routeURL";

const MyProSidebar = () => {
  // ********************* S T  A T ES APPEL DES CONTEXT*****************

  // ***Theme**
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { sidebarRTL, sidebarImage } = useSidebarContext();

  // ****************side-pro
  const { collapsed } = useProSidebar();

  // ******************keycloak
  const { keycloak } = useKeycloak();

  const userInfo = {
    email: "",
    username: "",
    name: "",
    id: "" as string | undefined,
  };
  // ************************ info user ********
  if (keycloak && keycloak.idTokenParsed) {
    userInfo.email = keycloak.idTokenParsed.email;
    userInfo.username = keycloak.idTokenParsed.preferred_username;
    userInfo.id = keycloak.idTokenParsed.sub;

    if (userInfo.email) {
      userInfo.name = userInfo.email
        .split("@")[0]
        .substring(0, 2)
        .toUpperCase();
    }
  }

  // *****************************url 
  const link = RouteURL
  return (
    <Box
      // **************************position , sass
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
        "& .sidebar": {
          border: "none",
        },
        "& .menu-icon": {
          backgroundColor: "transparent !important",
        },
        "& .menu-item": {
          // padding: "5px 35px 5px 20px !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-anchor": {
          color: "inherit !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-item:hover": {
          color: `${colors.blueAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
        "& .menu-item.active": {
          color: `${colors.greenAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
      }}
    >
      {/* ****************sidebar********* */}
      <Sidebar
        breakPoint="md"
        rtl={sidebarRTL}
        backgroundColor={colors.primary[400]}
        image={sidebarImage}
      >
        <Menu>
          {/* ****entete , titre et le buttons** */}
          <TitleSideBar space="admin" />

          {/* ***********USERprofile** */}
          {!collapsed && <UserProfileSideBar userInfo={userInfo} />}

          {/* *********Les urls ********* */}
          <URLSideBar link={link} />
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MyProSidebar;
