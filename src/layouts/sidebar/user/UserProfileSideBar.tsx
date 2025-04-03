import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../../context/theme/theme";
import logo from "../../../assets/logo.png"
type Props = {
  userInfo: {
    email: string;
    username: string;
    name: string;
    id: string | undefined;
  };
};

const UserProfileSideBar = ({ userInfo }: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="flex flex-col items-center">
      <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
        <img
          alt="profile user"
          src={
            logo
          }
          className="object-cover"
        />
      </div>
      {/* */}
      <Typography
        variant="h3"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "10px 0 0 0" }}
      >
        <span className="capitalize">{userInfo.username}</span>
      </Typography>
    </div>
  );
};

export default UserProfileSideBar;
