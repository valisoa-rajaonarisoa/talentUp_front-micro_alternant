import { Typography, useTheme } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

import { useState } from "react";
import { tokens } from "../../../context/theme/theme";

type Props = {
  path: string;
  icon: React.ReactNode;
  name: string;
};

const Item = ({ path, icon, name }: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // ************hover ************
  const [hover, setHover] = useState(false);

  const { pathname } = useLocation();

  let isPageStyle = "";

  // ************localisation du page et hover *********
  if (hover || pathname.split("/").includes(name)) {
    isPageStyle = colors.greenAccent[500];
  } else if (name == "dashboard" && pathname.split("/").length == 3) {
    isPageStyle = colors.greenAccent[500];
  } else {
    isPageStyle = colors.grey[100];
  }
  return (
    <Link to={path}>
      <MenuItem
        style={{
          color: isPageStyle,
          background: hover ? "transparent" : "transparent",
        }}
        icon={icon as React.ReactNode}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Typography variant="h5">
          <span className="capitalize">{name}</span>
        </Typography>
      </MenuItem>
    </Link>
  );
};

export default Item;
