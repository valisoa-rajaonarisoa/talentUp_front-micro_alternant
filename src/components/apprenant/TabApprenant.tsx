import { useState } from "react";
import { Visibility } from "@mui/icons-material"; // Import des icônes Material-UI
import ApprenantModifier from "./ApprenantModifier";

const apprenantData = [
  {
    id: "123vef",
    userName: "Lucas ibrahim",
    email: "exe@gmail.com",
    totalPartage: 12,
    partager: true,
  },
  {
    id: "1225ab3",
    userName: "Jean Dupont",
    email: "jean@gmail.com",
    totalPartage: 8,
    partager: false,
  },
  {
    id: "12923cdf",
    userName: "Marie Curie",
    email: "marie@gmail.com",
    totalPartage: 5,
    partager: true,
  },
  {
    id: "1278cvb93",
    userName: "Pierre Martin",
    email: "pierre@gmail.com",
    totalPartage: 0,
    partager: false,
  },
];

export default function TabApprenant() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"cards" | "list">("list"); // État pour le mode d'affichage

  // Filtre les apprenants en fonction du terme de recherche et du statut
  const filteredApprenants = apprenantData.filter((apprenant) => {
    const matchesSearch =
      apprenant.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apprenant.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === "all" ||
      apprenant.partager.toString() === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  // Gestion des actions
  const handleAction = (id: string, action: string) => {
    if (action === "supprimer") {
      alert(`Suppression de l'apprenant avec l'ID ${id}`);
    } else if (action === "modifier") {
      alert(`Modification de l'apprenant avec l'ID ${id}`);
    }
  };

  const handleView = (id: string) => {
    alert(`Affichage du profil de l'apprenant avec l'ID ${id}.`);
  };

  return (
    <div className="space-y-6 py-6 pr-6">

      {/* Contenu principal */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Liste des apprenants</h3>
        </div>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-md ${
              viewMode === "cards"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setViewMode("cards")}
          >
            Cartes
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              viewMode === "list"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setViewMode("list")}
          >
            Liste
          </button>
        </div>

        {/* Recherche et filtre */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 mt-5">
          <div className="relative flex-1">
            <input
              placeholder="Rechercher par nom ou email..."
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
            <option value="true">Partagé</option>
            <option value="false">Non partagé</option>
          </select>
        </div>

        {/* Affichage des données */}
        {viewMode === "cards" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredApprenants.length === 0 ? (
              <div className="col-span-full py-4 text-center text-gray-500">
                Aucun apprenant trouvé
              </div>
            ) : (
              filteredApprenants.map((apprenant) => (
                <div
                  key={apprenant.id}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-xs font-medium">
                          {apprenant.userName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{apprenant.userName}</p>
                        <p className="text-sm text-gray-500">
                          {apprenant.email}
                        </p>
                      </div>
                    </div>
                    <ApprenantModifier
                      handleAction={(action: string) =>
                        handleAction(apprenant.id, action)
                      }
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex gap-2 items-center text-sm text-gray-500">
                      <span>Webinaires :</span>
                      <span>{apprenant.totalPartage}</span>
                    </div>
                    <div className="flex gap-2 items-center text-sm text-gray-500">
                      <span>Status :</span>
                      {apprenant.partager ? (
                        <span className="text-green-500 font-medium">
                          Déjà partagé
                        </span>
                      ) : (
                        <span className="text-red-500 font-medium">
                          Pas encore partagé
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Nom
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Webinaire
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredApprenants.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="py-4 px-4 text-center text-gray-500"
                    >
                      Aucun apprenant trouvé
                    </td>
                  </tr>
                ) : (
                  filteredApprenants.map((apprenant) => (
                    <tr
                      key={apprenant.id}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xs font-medium">
                              {apprenant.userName
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium">{apprenant.userName}</p>
                            <p className="text-sm text-gray-500">
                              {apprenant.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">{apprenant.totalPartage}</td>
                      <td className="py-3 px-4">
                        {apprenant.partager ? (
                          <span className="text-green-500 font-medium">
                            Déjà partagé
                          </span>
                        ) : (
                          <span className="text-red-500 font-medium">
                            Pas encore partagé
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 space-x-2 flex">
                        {/* Bouton Voir */}
                        <button
                          className="text-blue-500 hover:text-blue-700"
                          onClick={() => handleView(apprenant.id)}
                        >
                          <Visibility fontSize="small" />
                        </button>

                        {/* Bouton Modifier */}
                        <ApprenantModifier
                          handleAction={(action: string) =>
                            handleAction(apprenant.id, action)
                          }
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
