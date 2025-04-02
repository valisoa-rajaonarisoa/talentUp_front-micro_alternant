import { useTranslation } from "react-i18next";
import Header from "../../layouts/header/Header";


type Props = {};

const WebinairePage = ({}: Props) => {
  // *************** S T A T E***********

  const { t } = useTranslation();
  return (
    <div className=" m-[20px]">
      <Header
        title={t("welcomeHeader.webinairePage.title")}
        subtitle={t("welcomeHeader.webinairePage.subtitle")}
      />
    </div>
  );
};

export default WebinairePage;
