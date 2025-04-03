type Props = {
  data: {
    titre: string;
    total: number;
    message:string;
    icon: JSX.Element;
  }[];
};

const Statistique = ({ data }: Props) => {
  return (
    <div className="w-full py-4 mt-10 flex flex-col space-y-5 md:space-x-5 md:flex md:flex-row md:flex-wrap">
      {data?.map((stat) => (
        <div
          key={stat.titre}
          className=" w-full shadow border border-gray-200 rounded hover:shadow-xl h-[125px]  md:w-[220px] py-4 xl:w-[300px] flex p-2"
        >
          <div className="  flex flex-col space-y-2  justify-between pb-1">
            <h3 className="text-xl text-gray-500 font-bold">{stat.titre}</h3>
            <h4 className="text">{stat.message}</h4>
            <h3 className="text-blue-400 text-3xl"> {stat.total}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistique;
