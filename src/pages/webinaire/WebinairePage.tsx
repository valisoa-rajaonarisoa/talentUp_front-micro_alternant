import { useTranslation } from "react-i18next";
import Header from "../../layouts/header/Header";
import Webinaire from "../../components/webinaire/Webinaire";


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

      <div>
        <Webinaire/>
      </div>
    </div>
  );
};

export default WebinairePage;
