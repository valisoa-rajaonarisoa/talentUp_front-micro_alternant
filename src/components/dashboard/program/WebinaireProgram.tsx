import { Button } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

type Props = {};

const WebinaireProgram = ({}: Props) => {
  return (
    <div className="w-full md:w-[50%] shadow  rounded-lg shadow-md border border-gray-200 p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold ">Webinaires à venir</h2>

        <Button variant="text" color="primary">
          <ArrowForwardOutlinedIcon />
        </Button>
      </div>

      <div className="mt-3 space-y-3">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:justify-between md:items-center rounded-lg border border-gray-200 p-2 hover:shadow transition-duration-300">
          <div>
            <div className="flex flex-wrap justify-between items-center">
              <h3>Introduction à React</h3>
              <button className="ml-3 p-1 py-2 rounded-xl font-semibold shadow-md border border-gray-200">
                Developpment
              </button>
            </div>
            <h3 className="mt-3">18 Avr, 2025 • 14:00 - 15:30</h3>
          </div>
          <button className="bg-blue-100 px-2 py-2 rounded text-blue-500 font-semibold hover:bg-blue-300 transition-duration-300 hover:text-white cursor-pointer">
            Rejoindre
          </button>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:justify-between md:items-center rounded-lg border border-gray-200 p-2 hover:shadow transition-duration-300">
          <div>
            <div className="flex flex-wrap justify-between items-center">
              <h3>Introduction à React</h3>
              <button className="ml-3 p-1 py-2 rounded-xl font-semibold shadow-md border border-gray-200">
                Developpment
              </button>
            </div>
            <h3 className="mt-3">18 Avr, 2025 • 14:00 - 15:30</h3>
          </div>
          <button className="bg-blue-100 px-2 py-2 rounded text-blue-500 font-semibold hover:bg-blue-300 transition-duration-300 hover:text-white cursor-pointer">
            Rejoindre
          </button>
        </div>


        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:justify-between md:items-center rounded-lg border border-gray-200 p-2 hover:shadow transition-duration-300">
          <div>
            <div className="flex flex-wrap justify-between items-center">
              <h3>Introduction à React</h3>
              <button className="ml-3 p-1 py-2 rounded-xl font-semibold shadow-md border border-gray-200">
                Developpment
              </button>
            </div>
            <h3 className="mt-3">18 Avr, 2025 • 14:00 - 15:30</h3>
          </div>
          <button className="bg-blue-100 px-2 py-2 rounded text-blue-500 font-semibold hover:bg-blue-300 transition-duration-300 hover:text-white cursor-pointer">
            Rejoindre
          </button>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:justify-between md:items-center rounded-lg border border-gray-200 p-2 hover:shadow transition-duration-300">
          <div>
            <div className="flex flex-wrap justify-between items-center">
              <h3>Introduction à React</h3>
              <button className="ml-3 p-1 py-2 rounded-xl font-semibold shadow-md border border-gray-200">
                Developpment
              </button>
            </div>
            <h3 className="mt-3">18 Avr, 2025 • 14:00 - 15:30</h3>
          </div>
          <button className="bg-blue-100 px-2 py-2 rounded text-blue-500 font-semibold hover:bg-blue-300 transition-duration-300 hover:text-white cursor-pointer">
            Rejoindre
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebinaireProgram;
