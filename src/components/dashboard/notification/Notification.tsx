import ActivityRecent from "./ActivityRecent";
const recentActivity = [
  {
    id: 1,
    titre: "Nouvel apprenant inscrit",
    userName: "Camille Dubois",
    message: "vient de s'inscrire comme Apprenant",
    date: "15/09 10:30",
    color: "bg-blue-500",
  },
  {
    id: 110,
    titre: "Nouvelle entreprise partenaire",
    userName: "TechInnovate",
    message: "a rejoint notre plateforme",
    date: "15/09 10:30",
    color: "bg-blue-500",
  },
  {
    id: 123,
    titre: "Nouvel apprenant inscrit",
    userName: "Valisoa Rajao",
    message: "vient de s'inscrire comme Apprenant",
    date: "15/09 10:30",
    color: "bg-blue-500",
  },
  {
    id: 145,
    titre: "Nouvelle entreprise partenaire",
    userName: "Mgit Service",
    message: "a rejoint notre plateforme",
    date: "15/09 10:30",
    color: "bg-blue-500",
  },
];
type Props = {};

const Notification = ({}: Props) => {
  return (
    <div className="space-y-5 flex flex-col md:space-y-0 md:flex-row md:space-x-4 mt-10 ">
      <ActivityRecent recentActivity={recentActivity}/>

      <div className="bg-white w-full md:w-[50%] border border-gray-200 p-6 rounded-lg shadow-md">
        {/* Placeholder for content */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Section à venir
        </h2>
      </div>
    </div>
  );
};

export default Notification;
