import { useTranslation } from "react-i18next";
import SlowMotionVideoOutlinedIcon from "@mui/icons-material/SlowMotionVideoOutlined";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SchoolIcon from "@mui/icons-material/School";
import EngineeringIcon from "@mui/icons-material/Engineering";
import Header from "../../layouts/header/Header";
import Statistique from "../../components/dashboard/statistique/Statistique";
import { BarChart } from "../../components/dashboard/statistique/BarChart";
import { LineChart } from "../../components/dashboard/statistique/LineChart";
import { ChartData, LineChartData } from "../../typescript/module";
import Notification from "../../components/dashboard/notification/Notification";

type Props = {};
const getUserRegistrationData = (): LineChartData => [
  { name: "Jan", value: 10 },
  { name: "Feb", value: 15 },
  { name: "Mar", value: 12 },
  { name: "Apr", value: 8 },
  { name: "May", value: 20 },
  { name: "Jun", value: 25 },
  { name: "Jul", value: 30 },
  { name: "Aug", value: 28 },
  { name: "Sep", value: 35 },
];
const getWebinarParticipationData = (): ChartData => [
  { name: "Javascript", value: 45 },
  { name: "React", value: 60 },
  { name: "Node.js", value: 38 },
  { name: "DevOps", value: 25 },
  { name: "TypeScript", value: 40 },
];

const data = [
  {
    titre: "Alternant",
    total: 15,
    pourcentage: "15 %",
    icon: (
      <EngineeringIcon className="text-blue-400" sx={{ fontSize: "2rem" }} />
    ),
  },
  {
    titre: "Apprenant",
    total: 10,
    pourcentage: "5 %",
    icon: <SchoolIcon className="text-blue-400" sx={{ fontSize: "2rem" }} />,
  },
  {
    titre: "Webinaire",
    total: 10,
    pourcentage: "5 %",
    icon: (
      <SlowMotionVideoOutlinedIcon
        className="text-blue-400"
        sx={{ fontSize: "2rem" }}
      />
    ),
  },
  {
    titre: "Entreprise",
    total: 15,
    pourcentage: "20 %",
    icon: <ApartmentIcon className="text-blue-400" sx={{ fontSize: "2rem" }} />,
  },
  {
    titre: "Demande d'Alternant",
    total: 15,
    pourcentage: "20 %",
    icon: <ApartmentIcon className="text-blue-400" sx={{ fontSize: "2rem" }} />,
  },
];

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
        <Statistique data={data} />

        <div className="flex flex-col md:flex-row gap-4 mt-5">
          <div className="w-full md:w-1/2">
            <LineChart
              title="Inscriptions des utilisateurs"
              data={getUserRegistrationData()}
            />
          </div>
          <div className="w-full md:w-1/2">
            <BarChart
              title="Participation aux webinaires"
              data={getWebinarParticipationData()}
            />
          </div>
        </div>

        {/* ************notification  */}

        <Notification/>
      </div>
    </div>
  );
};

export default DashboardPage;
