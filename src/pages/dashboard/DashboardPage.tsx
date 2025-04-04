import { useTranslation } from "react-i18next";

import Header from "../../layouts/header/Header";

type Props = {};

const DashboardPage = ({}: Props) => {
  // *************** S T A T E***********

  const { t } = useTranslation();

  return (
    <div className=" m-[20px]">
      <Header
        title={t("welcomeHeader.dashboardPage.title")}
        subtitle={t("welcomeHeader.dashboardPage.subtitle")}
      />
    </div>
  );
};

export default DashboardPage;
