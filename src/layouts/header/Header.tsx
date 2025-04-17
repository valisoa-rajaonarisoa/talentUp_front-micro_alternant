import {  Typography, useTheme } from "@mui/material";
import { tokens } from "../../context/theme/theme";

type Props = {
  title: string;
  subtitle: string;
};

const Header = ({ title, subtitle }: Props) => {
  //   ******************* S T A T E *****************

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // ****************** R E N D E R ************************
  return (
    <div className=" mt-[80px] md:mt-0 xl:mt-0 mb-2">
      <Typography
        variant="h2" //le fontsize ou  hauter
        color={colors.grey[100]} //la couluer
        fontWeight="bold" //font
        sx={{ mb: "3px" }} //margin-bottom , pour qu'on puisse avoir un petite aeration
      >
        {title}
      </Typography>

      <Typography variant="h4" color={colors.greenAccent[500]}>
        {subtitle}
      </Typography>
    </div>
  );
};

export default Header;
