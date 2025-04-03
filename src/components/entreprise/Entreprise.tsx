import { useState } from "react";
import {
  Search,
  Building2,
  MapPin,
  Globe,
  Mail,
  Edit,
  Trash2,
  FileText,
} from "lucide-react";
import { Box, Input } from "@mui/material";
import { Button } from "@mui/material";
import { Badge } from "@mui/material";

import ActionEntreprise from "./ActionEntreprise";

const companies = [
  {
    id: "1",
    name: "TechCorp",
    industry: "Technologie",
    location: "Paris",
    website: "https://techcorp.com",
    email: "contact@techcorp.com",
    offers: 5,
    alternants: 10,
  },
  {
    id: "2",
    name: "FoodExpress",
    industry: "Restauration",
    location: "Lyon",
    website: "https://foodexpress.com",
    email: "info@foodexpress.com",
    offers: 3,
    alternants: 7,
  },
];

export default function Entreprises() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"cards" | "list">("cards");

  // Filtrer les entreprises en fonction du terme de recherche
  const filteredCompanies = companies.filter((company) => {
    return (
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Calcul des totaux
  const totalOffers = companies.reduce(
    (acc, company) => acc + company.offers,
    0
  );
  const totalAlternants = companies.reduce(
    (acc, company) => acc + company.alternants,
    0
  );

  return (
    <div className="space-y-6 p-6">
      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium mb-2">Total Entreprises</h3>
          <p className="text-3xl font-bold">{companies.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium mb-2">Offres d'alternance</h3>
          <p className="text-3xl font-bold">{totalOffers}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium mb-2">Alternants placés</h3>
          <p className="text-3xl font-bold">{totalAlternants}</p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Liste des entreprises</h3>
          
        </div>

        {/* Recherche */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Rechercher une entreprise..."
            className="pl-9 w-full border border-gray-300 rounded-md p-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Boutons de vue */}
        <div className="flex space-x-4 mb-6">
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

        {/* Affichage des données */}
        {viewMode === "cards" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCompanies.length === 0 ? (
              <div className="col-span-full py-4 text-center text-gray-500">
                Aucune entreprise trouvée
              </div>
            ) : (
              filteredCompanies.map((company) => (
                <div
                  key={company.id}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-gray-200 flex items-center justify-center">
                        <Building2 className="h-5 w-5 text-gray-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">{company.name}</h4>
                        <Badge className="mt-2 bg-gray-200 text-gray-700">
                          {company.industry}
                        </Badge>
                      </div>
                    </div>

                    {/* *********************Action ************ */}
                    <Box>
                      <ActionEntreprise />
                    </Box>
                    {/* ************************************* */}
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex gap-2 items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{company.location}</span>
                    </div>
                    {company.website && (
                      <div className="flex gap-2 items-center text-sm text-gray-500">
                        <Globe className="h-4 w-4" />
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Site web
                        </a>
                      </div>
                    )}
                    <div className="flex gap-2 items-center text-sm text-gray-500">
                      <Mail className="h-4 w-4" />
                      <span>{company.email}</span>
                    </div>
                    <div className="flex justify-between mt-3">
                      <div>
                        <p className="text-sm font-medium">Offres</p>
                        <p className="text-xl font-bold">{company.offers}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Alternants</p>
                        <p className="text-xl font-bold">
                          {company.alternants}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outlined"
                    size="small"
                    className="w-full mt-4"
                  >
                    Voir le détail
                  </Button>
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
                    Entreprise
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Industrie
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Localisation
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Contact
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Offres
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Alternants
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCompanies.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="py-4 px-4 text-center text-gray-500"
                    >
                      Aucune entreprise trouvée
                    </td>
                  </tr>
                ) : (
                  filteredCompanies.map((company) => (
                    <tr
                      key={company.id}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center">
                            <Building2 className="h-4 w-4 text-gray-500" />
                          </div>
                          <span className="font-medium">{company.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className="bg-gray-200 text-gray-700">
                          {company.industry}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">{company.location}</td>
                      <td className="py-3 px-4">
                        <div>
                          <p>{company.email}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">{company.offers}</td>
                      <td className="py-3 px-4">{company.alternants}</td>
                      <td className="py-3 px-4 space-x-2">
                        <Button
                          variant="text"
                          startIcon={<Edit />}
                          className="text-yellow-500 hover:text-yellow-700"
                        >
                          Modifier
                        </Button>
                        <Button
                          variant="text"
                          startIcon={<FileText />}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          Voir les offres
                        </Button>
                        <Button
                          variant="text"
                          startIcon={<Trash2 />}
                          className="text-red-500 hover:text-red-700"
                        >
                          Supprimer
                        </Button>
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
