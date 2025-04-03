import Header from "../../layouts/header/Header";

import SchoolIcon from "@mui/icons-material/School";
import EngineeringIcon from "@mui/icons-material/Engineering";
import Statistique from "../../components/alternant/Statistique";


import TabApprenant from "../../components/apprenant/TabApprenant";

const data = [
  {
    titre: "Total Apprenant",
    total: 15,
    message: "Nombre total d'apprenant",
    icon: (
      <EngineeringIcon className="text-blue-400" sx={{ fontSize: "2rem" }} />
    ),
  },
  {
    titre: "Webinaires Partagés",
    total: 10,
    message: "Nombre total des webinaires ",
    icon: <SchoolIcon className="text-blue-400" sx={{ fontSize: "2rem" }} />,
  },
];
type Props = {};

const ApprenantPage = ({}: Props) => {
  return (
    <div className=" m-[20px]">
      <Header title="Apprenant" subtitle="Bienvenu page Apprenant" />

      <Statistique data={data} />

      <div>
        <TabApprenant/>
      </div>
    </div>
  );
};

export default ApprenantPage;
