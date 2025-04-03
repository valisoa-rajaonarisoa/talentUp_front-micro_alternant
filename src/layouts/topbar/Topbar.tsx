// import { Box } from "@mui/material";

import ButtonGroups from "./groupeButton/ButtonGroups";

import ButtonSearch from "./buttonSearch.tsx/ButtonSearch";

// / Définition du composant fonctionnel `Topbar`.
const Topbar = () => {
  return (
    // <Box display="flex" justifyContent="space-between" p={2} position="fixed">
    <div className="flex justify-between fixed bg-white top-0 z-[100] xl:sticky md:sticky p-4">
      {/* *************** barre recherch ************** */}
      <ButtonSearch />

      {/* *******************Buttons ********** */}
      <ButtonGroups />
    </div>
    // </Box>
  );
};

export default Topbar;
