import Entreprises from "../../components/entreprise/Entreprise";
import Header from "../../layouts/header/Header";

type Props = {};

const EntreprisePage = ({}: Props) => {
  // *************** S T A T E***********

  return (
    <div className=" m-[20px]">
      <Header title="Entreprise" subtitle="Bienvenu page entreprise" />

      <Entreprises/>
    </div>
  );
};

export default EntreprisePage;
