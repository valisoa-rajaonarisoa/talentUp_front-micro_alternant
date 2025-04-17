import { IRoute } from "../typescript/module";

// Importations des icônes Material-UI
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SlowMotionVideoOutlinedIcon from "@mui/icons-material/SlowMotionVideoOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

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
    icon: <EngineeringOutlinedIcon />,
  },
  {
    path: "/agenda",
    name: "agenda",
    icon: <CalendarMonthOutlinedIcon />,
  },
  {
    path: "/messenger",
    name: "messenger",
    icon: <MessageOutlinedIcon />,
  },
  {
    path: "/profile",
    name: "profile",
    icon: <PersonOutlineOutlinedIcon />,
  },
  {
    path: "/apprenants",
    name: "apprenants",
    icon: <SchoolOutlinedIcon />,
  },
];
