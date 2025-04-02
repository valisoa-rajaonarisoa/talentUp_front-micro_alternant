import { useTranslation } from "react-i18next";
import Header from "../../layouts/header/Header";


type Props = {};

const ProfilePage = ({}: Props) => {
  // *************** S T A T E***********

  const { t } = useTranslation();
  return (
    <div className=" m-[20px]">
      <Header
        title={t("welcomeHeader.profilePage.title")}
        subtitle={t("welcomeHeader.profilePage.subtitle")}
      />
    </div>
  );
};

export default ProfilePage;
