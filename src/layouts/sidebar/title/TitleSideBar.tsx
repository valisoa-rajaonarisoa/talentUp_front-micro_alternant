import { IconButton, Typography, useTheme } from "@mui/material";
import { MenuItem, useProSidebar } from "react-pro-sidebar";

import { useSidebarContext } from "../../../context/sidebar/sidebarContext";

import SwitchLeftOutlinedIcon from "@mui/icons-material/SwitchLeftOutlined";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { tokens } from "../../../context/theme/theme";
type Props = { space: string };

const TitleSideBar = ({ space }: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { sidebarRTL, setSidebarRTL } = useSidebarContext();

  // ****************side-pro
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
  return (
    <MenuItem
      icon={
        collapsed ? (
          <MenuOutlinedIcon onClick={() => collapseSidebar()} />
        ) : (
          sidebarRTL && (
            <SwitchLeftOutlinedIcon
              onClick={() => setSidebarRTL(!sidebarRTL)}
            />
          )
        )
      }
      style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
      className=" hover:bg-red-400 !important"
    >
      {!collapsed && (
        <div className="flex justify-between items-center ml-[15px] ">
          <Typography variant="h3" color={colors.grey[100]}>
            <span className="uppercase">{space}</span>
          </Typography>
          <IconButton
            onClick={() => (broken ? toggleSidebar() : collapseSidebar())}
          >
            <CloseOutlinedIcon />
          </IconButton>
        </div>
      )}
    </MenuItem>
  );
};

export default TitleSideBar;
