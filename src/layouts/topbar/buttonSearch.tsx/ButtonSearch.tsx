import { Box, IconButton, InputBase, useTheme } from "@mui/material";

import { useProSidebar } from "react-pro-sidebar";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { tokens } from "../../../context/theme/theme";
type Props = {};

const ButtonSearch = ({}: Props) => {
  // Utilise le hook `useTheme` pour accéder au thème actuel de Material-UI.
  const theme = useTheme();

  const colors = tokens(theme.palette.mode);

  // Accède au contexte `ColorModeContext` pour gérer le mode clair/sombre.

  const { toggleSidebar, broken, rtl } = useProSidebar();
  return (
    <Box display="flex">
      {broken && !rtl && (
        <IconButton
          sx={{ margin: "0 6px 0 2px" }} // Ajoute des marges autour du bouton.
          onClick={() => toggleSidebar()} // Appelle `toggleSidebar` pour afficher/masquer la barre latérale.
        >
          {/* Icône de menu. */}
          <MenuOutlinedIcon />
        </IconButton>
      )}

      {/* Conteneur pour la barre de recherche. */}
      <Box
        sx={{
          display: "flex",
          backgroundColor: colors.primary[400],
          padding: 0.2, // Ajoute un espace interne.
          borderRadius: 1, // Arrondit les coins.
        }}
      >
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
        {/* Bouton de recherche avec une icône. */}
        <IconButton type="button">
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ButtonSearch;
