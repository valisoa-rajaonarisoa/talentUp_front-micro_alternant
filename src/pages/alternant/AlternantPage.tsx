import Header from "../../layouts/header/Header";
import SlowMotionVideoOutlinedIcon from "@mui/icons-material/SlowMotionVideoOutlined";

import SchoolIcon from "@mui/icons-material/School";
import EngineeringIcon from "@mui/icons-material/Engineering";
import Statistique from "../../components/alternant/Statistique";

import Tab from "../../components/alternant/Tab";

const data = [
  {
    titre: "Total Alternants",
    total: 15,
    message: "Nombre total d'alternants",
    icon: (
      <EngineeringIcon className="text-blue-400" sx={{ fontSize: "2rem" }} />
    ),
  },
  {
    titre: "En recherche ",
    total: 10,
    message: "Alternants cherchant une alternance",
    icon: <SchoolIcon className="text-blue-400" sx={{ fontSize: "2rem" }} />,
  },
  {
    titre: "Placés",
    total: 10,
    message: "Alternants ayant trouvé une entreprise",
    icon: (
      <SlowMotionVideoOutlinedIcon
        className="text-blue-400"
        sx={{ fontSize: "2rem" }}
      />
    ),
  },
];
type Props = {};

const AlternantPage = ({}: Props) => {
  return (
    <div className=" m-[20px]">
      <Header title="Alternant" subtitle="Bienvenu page Alternant" />

      <Statistique data={data} />

      <div>
        <Tab/>
      </div>
    </div>
  );
};

export default AlternantPage;
