import { Box } from "@mui/material";

import ButtonGroups from "./groupeButton/ButtonGroups";

import ButtonSearch from "./buttonSearch.tsx/ButtonSearch";

// / Définition du composant fonctionnel `Topbar`.
const Topbar = () => {
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* *************** barre recherch ************** */}
      <ButtonSearch />

      {/* *******************Buttons ********** */}
      <ButtonGroups />
    </Box>
  );
};

export default Topbar;
