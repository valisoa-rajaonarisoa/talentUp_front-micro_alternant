import { useState } from "react";
import { Search } from "lucide-react";
import { Button, Input } from "@mui/material";
import { Select, MenuItem } from "@mui/material";

import { alternants } from "../../data/mock-data";

export default function Tab() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"list" | "cards">("list");

  // Filtre les alternants en fonction du terme de recherche et du statut
  const filteredAlternants = alternants.filter((alternant) => {
    const matchesSearch =
      alternant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alternant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alternant.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesStatus =
      selectedStatus === "all" || alternant.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  // Génération des badges de statut
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "searching":
        return (
          <Button variant="outlined" color="warning">
            En recherche
          </Button>
        );
      case "placed":
        return (
          <Button variant="outlined" color="success">
            Placé
          </Button>
        );
      case "pending":
        return (
          <Button variant="outlined" color="primary">
            En attente
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="space-y-6 pl-0 p-6">
       

        {/* Contenu principal */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Liste des alternants</h3>
            
          </div>
          <div className="flex space-x-4">
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
            </div>

          {/* Recherche et filtre */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 mt-5">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Rechercher par nom, email ou compétence..."
                className="pl-9 w-full border border-gray-300 rounded-md p-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value as string)}
              className="w-full md:w-[200px]"
            >
              <MenuItem value="all">Tous les statuts</MenuItem>
              <MenuItem value="searching">En recherche</MenuItem>
              <MenuItem value="placed">Placé</MenuItem>
              <MenuItem value="pending">En attente</MenuItem>
            </Select>
          </div>

          {/* Affichage des données */}
          {viewMode === "list" ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                      Nom
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                      Statut
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                      Disponibilité
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAlternants.length === 0 ? (
                    <tr>
                      <td
                        colSpan={3}
                        className="py-4 px-4 text-center text-gray-500"
                      >
                        Aucun alternant trouvé
                      </td>
                    </tr>
                  ) : (
                    filteredAlternants.map((alternant) => (
                      <tr
                        key={alternant.id}
                        className="border-b border-gray-200 hover:bg-gray-100"
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                              <span className="text-xs font-medium">
                                {alternant.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium">{alternant.name}</p>
                              <p className="text-sm text-gray-500">
                                {alternant.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          {getStatusBadge(alternant.status)}
                        </td>
                        <td className="py-3 px-4">{alternant.availability}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredAlternants.length === 0 ? (
                <div className="col-span-full py-4 text-center text-gray-500">
                  Aucun alternant trouvé
                </div>
              ) : (
                filteredAlternants.map((alternant) => (
                  <div
                    key={alternant.id}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xs font-medium">
                            {alternant.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{alternant.name}</p>
                          <p className="text-sm text-gray-500">
                            {alternant.email}
                          </p>
                        </div>
                      </div>
                      {getStatusBadge(alternant.status)}
                    </div>
                    <div className="mt-4 space-y-2">
                      <div>
                        <p className="text-sm font-medium">Compétences</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {alternant.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm font-medium">Disponibilité</p>
                          <p className="text-sm text-gray-500">
                            {alternant.availability}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}