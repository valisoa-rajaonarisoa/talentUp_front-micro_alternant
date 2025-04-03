import { useState } from "react";
import { Search, Calendar, Clock, Users, Video} from "lucide-react";
import { Input, Button, Badge} from "@mui/material";
import ActionWebinaire from "./ActionWebinaire";

const webinars = [
  {
    id: "1",
    title: "Introduction à React",
    description: "Découvrez les bases de React et ses fonctionnalités principales.",
    date: "2023-10-15",
    startTime: "14:00",
    endTime: "16:00",
    speaker: "John Doe",
    status: "upcoming",
    tags: ["React", "JavaScript", "Frontend"],
    participants: 50,
    registeredParticipants: 30,
  },
  {
    id: "2",
    title: "Optimisation des performances",
    description: "Apprenez à optimiser vos applications React pour une meilleure performance.",
    date: "2023-10-20",
    startTime: "10:00",
    endTime: "12:00",
    speaker: "Jane Smith",
    status: "past",
    tags: ["Performance", "React", "Optimization"],
    participants: 40,
    registeredParticipants: 40,
  },
];

export default function Webinaire() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  // Filtrer les webinaires en fonction du terme de recherche et du statut
  const filteredWebinars = webinars.filter((webinar) => {
    const matchesSearch =
      webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      webinar.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      webinar.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = selectedStatus === "all" || webinar.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  // Calcul des statistiques
  const upcomingWebinars = webinars.filter((w) => w.status === "upcoming").length;
//   const pastWebinars = webinars.filter((w) => w.status === "past").length;
  const totalParticipants = webinars.reduce((acc, w) => acc + w.participants, 0);

  // Génération des badges de statut
//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case "upcoming":
//         return (
//           <Badge className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
//             À venir
//           </Badge>
//         );
//       case "past":
//         return (
//           <Badge className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
//             Passé
//           </Badge>
//         );
//       case "live":
//         return (
//           <Badge className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
//             En direct
//           </Badge>
//         );
//       default:
//         return null;
//     }
//   };

  return (
    <div className="pl-0 p-6 space-y-6">

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium mb-2">Total Webinaires</h3>
          <p className="text-3xl font-bold">{webinars.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium mb-2">À venir</h3>
          <p className="text-3xl font-bold">{upcomingWebinars}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium mb-2">Participants</h3>
          <p className="text-3xl font-bold">{totalParticipants}</p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Liste des webinaires</h3>
         
        </div>

        {/* Recherche et filtre */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Rechercher un webinaire..."
              className="pl-9 w-full border border-gray-300 rounded-md p-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as string)}
            className="w-full md:w-[200px] border border-gray-300 rounded-md p-2"
          >
            <option value="all">Tous les statuts</option>
            <option value="upcoming">À venir</option>
            <option value="past">Passés</option>
            <option value="live">En direct</option>
          </select>
        </div>

        {/* Affichage des données */}
        <div className="space-y-4">
          {filteredWebinars.length === 0 ? (
            <div className="py-4 text-center text-gray-500">Aucun webinaire trouvé</div>
          ) : (
            filteredWebinars.map((webinar) => (
              <div key={webinar.id} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-xs font-medium">{webinar.title[0]}</span>
                    </div>
                    <div>
                      <p className="font-medium">{webinar.title}</p>
                      <p className="text-sm text-gray-500">{webinar.description}</p>
                    </div>
                  </div>

                  {/* ***************************action **************** */}
                  <ActionWebinaire/>



                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex gap-2 items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(webinar.date).toLocaleDateString("fr-FR")}</span>
                  </div>
                  <div className="flex gap-2 items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{webinar.startTime} - {webinar.endTime}</span>
                  </div>
                  <div className="flex gap-2 items-center text-sm text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>
                      {webinar.status === "upcoming"
                        ? `${webinar.registeredParticipants} inscrits`
                        : `${webinar.participants} participants`}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {webinar.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <Button
                    variant="outlined"
                    startIcon={<Video />}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {webinar.status === "upcoming" ? "Détails" : "Replay"}
                  </Button>
                  <Button
                    variant="contained"
                    className="bg-blue-500 text-white hover:bg-blue-600"
                  >
                    {webinar.status === "upcoming" ? "Gérer" : "Statistiques"}
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}