import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../../context/theme/theme";

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
            "https://img.freepik.com/free-photo/cheerful-young-woman-taking-notes-while-sitting-steps-street_1153-6840.jpg?t=st=1742908585~exp=1742912185~hmac=996f987692cdade3b5f9c79303776512e99b8fd3e5b2c24e09d9a7b6156eb11b&w=740"
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
