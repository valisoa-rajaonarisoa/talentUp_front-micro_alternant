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
    path: "/alternants",
    name: "alternants",
    icon: <EngineeringIcon />,
  },
  {
    path: "/entreprises",
    name: "entreprises",
    icon: <ApartmentIcon />,
  },
  {
    path: "/apprenants",
    name: "apprenants",
    icon: <SchoolIcon />,
  },
  
];
