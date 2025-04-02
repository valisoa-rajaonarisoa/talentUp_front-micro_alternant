import { useTranslation } from "react-i18next";
import { useKeycloak } from "../../context/keycloak/KeycloakContext";
import Header from "../../layouts/header/Header";


type Props = {};

const DashboardPage = ({}: Props) => {
  // *************** S T A T E***********

  const { t } = useTranslation();

  const { keycloak } = useKeycloak();

  let space = "";

  if (keycloak) {
    if (keycloak.realmAccess?.roles.includes("entreprise")) {
      space = "entreprise";
    } else if (keycloak.realmAccess?.roles.includes("apprenant")) {
      space = "apprenant";
    }
  }
  return (
    <div className=" m-[20px]">
      <Header
        title={t("welcomeHeader.dashboardPage.title")}
        subtitle={t("welcomeHeader.dashboardPage.subtitle")}
      />

      {space == "entreprise" ? (
        <h2 className="bg-green-600">
          bonjour Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Impedit unde fugit quae sint minima accusantium officia illum esse vel
          dolorum corporis mollitia ea hic, non reiciendis dolores iste eligendi
          autem quibusdam consectetur nesciunt et nihil? Veritatis sapiente
          adipisci aliquid quasi. Amet ipsa corrupti optio mollitia
          reprehenderit et? Dolore, quia! Ipsa enim consequuntur aliquid esse
          consectetur ab ea non blanditiis sapiente voluptatibus, repellendus
          maxime totam ducimus aliquam officia nemo nesciunt optio voluptate
          dolorem voluptatum libero accusamus! Pariatur deserunt consequatur
          officia laboriosam obcaecati nihil? Quia quis, itaque necessitatibus
          facilis fuga ab, natus, voluptas dignissimos placeat veritatis quidem.
          Repellendus architecto necessitatibus dicta ullam!
        </h2>
      ) : (
        <h2 className="bg-blue-600">
          bonjour Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Impedit unde fugit quae sint minima accusantium officia illum esse vel
          dolorum corporis mollitia ea hic, non reiciendis dolores iste eligendi
          autem quibusdam consectetur nesciunt et nihil? Veritatis sapiente
          adipisci aliquid quasi. Amet ipsa corrupti optio mollitia
          reprehenderit et? Dolore, quia! Ipsa enim consequuntur aliquid esse
          consectetur ab ea non blanditiis sapiente voluptatibus, repellendus
          maxime totam ducimus aliquam officia nemo nesciunt optio voluptate
          dolorem voluptatum libero accusamus! Pariatur deserunt consequatur
          officia laboriosam obcaecati nihil? Quia quis, itaque necessitatibus
          facilis fuga ab, natus, voluptas dignissimos placeat veritatis quidem.
          Repellendus architecto necessitatibus dicta ullam!
        </h2>
      )}
    </div>
  );
};

export default DashboardPage;
