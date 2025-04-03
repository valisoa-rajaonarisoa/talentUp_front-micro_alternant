import { Box } from "@mui/material";
import { useProSidebar } from "react-pro-sidebar";
import Item from "./Item";
import { IRoute } from "../../../typescript/module";


type Props = {
  link: IRoute[];
};

const URLSideBar = ({ link }: Props) => {
  // ******************** S  T  A  T  E *************************
  // ****************side-pro
  const { collapsed } = useProSidebar();

  // ************* R E N D E R*************
  return (
    <Box paddingLeft={collapsed ? undefined : "10%"} sx={{ mt: "50px" }}>
      {link?.map((element) => (
        <Item
          key={element.name}
          path={element.path}
          name={element.name}
          icon={element.icon}
        />
      ))}
    </Box>
  );
};

export default URLSideBar;
