import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SlowMotionVideoOutlinedIcon from "@mui/icons-material/SlowMotionVideoOutlined";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SchoolIcon from "@mui/icons-material/School";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { IRoute } from "../typescript/module";



export const RouteURL: IRoute[] = [
  {
    path: "/",
    name: "dashboard",
    icon: <HomeOutlinedIcon />, 
  },
  {
    path: "/webinaires",
    name: "webinaires",
    icon: <SlowMotionVideoOutlinedIcon />,
  },
  {
    path: "/entreprises",
    name: "entreprise",
    icon: <ApartmentIcon />,
  },
  {
    path: "/apprenants",
    name: "apprenant",
    icon: <SchoolIcon />,
  },
  {
    path: "/alternants",
    name: "alternant",
    icon: <EngineeringIcon />,
  },
];
