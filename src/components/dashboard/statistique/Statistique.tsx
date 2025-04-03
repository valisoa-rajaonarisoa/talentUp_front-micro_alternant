import { Typography } from "@mui/material";
type Props = {
  data: {
    titre: string;
    total: number;
    pourcentage?: string;
    icon: JSX.Element;
  }[];
};

const Statistique = ({ data }: Props) => {
  return (
    <div className="w-full py-4 mt-10 flex flex-col space-y-5 md:space-x-5 md:flex md:flex-row md:flex-wrap">
      {data?.map((stat) => (
        <div
          key={stat.titre}
          className=" w-full shadow border border-gray-200 rounded hover:shadow-xl  md:w-[220px] py-4 xl:w-[300px] flex p-2"
        >
          <div className=" w-[70%] flex flex-col space-y-5">
            <div>
              <Typography variant="h3" className="text-gray-800">

                <h3>{stat.titre}</h3>
                
              </Typography>
            </div>

            <div>
              <Typography variant="h3" className="text-blue-400 ">
                {stat.total}
              </Typography>
            </div>

            {stat.pourcentage && (
              <div className="space-x-2">
                <span className="text-green-400 text-xl">
                  {stat.pourcentage}
                </span>{" "}
                <span className="text-gray-500 text-lg">ce mois-ci </span>
              </div>
            )}
          </div>

          <div className=" w-[30%] h-full flex content-center">
            <div className="bg-blue-100 w-[50px] h-[50px] flex items-center justify-center rounded-full">
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistique;
