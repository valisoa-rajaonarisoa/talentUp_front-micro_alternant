import { useTranslation } from "react-i18next";

import Header from "../../layouts/header/Header";
import Dashboard from "../../components/dashboard/Dashboard";

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

      <div>
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardPage;
