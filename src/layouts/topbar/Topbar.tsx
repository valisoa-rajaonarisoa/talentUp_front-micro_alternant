// import { Box } from "@mui/material";

import ButtonGroups from "./groupeButton/ButtonGroups";

import ButtonSearch from "./buttonSearch.tsx/ButtonSearch";


// / Définition du composant fonctionnel `Topbar`.


const Topbar = () => {
  return (
    // <Box display="flex" justifyContent="space-between" p={2} position="fixed">
    <div className={`flex fixed bg-white border border-gray-200 top-0 z-[100] xl:sticky md:sticky py-3 px-4 w-full justify-between items-center mb-5`}>
      {/* *************** barre recherch ************** */}
      <ButtonSearch />

      {/* *******************Buttons ********** */}
      <ButtonGroups />
    </div>
    // </Box>
  );
};

export default Topbar;
