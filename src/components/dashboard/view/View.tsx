import { Box } from "@mui/material";
import SlowMotionVideoOutlinedIcon from "@mui/icons-material/SlowMotionVideoOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

type Props = {};

const View = ({}: Props) => {
  return (
    <div className="w-full md:pt-4 flex flex-wrap  space-x-2 space-y-2 md:space-x-4 md:space-y-4">
      {/* Webinaires */}
      <Box
        className="bg-indigo-100 shadow-lg rounded h-[100px] w-[45%] md:w-[25%] lg:w-[20%] flex justify-center items-center flex-col"
        sx={{
          color: "#007bff", // Bleu
        }}
      >
        <SlowMotionVideoOutlinedIcon className="text-indigo-400 text-lg" />
        <h2 className="text-indigo-400 text-lg">Webinaires</h2>
      </Box>

      {/* Calendrier */}
      <Box
        className="bg-green-100 shadow-lg rounded h-[100px] w-[45%] md:w-[25%] lg:w-[20%] flex justify-center items-center flex-col"
        sx={{
          color: "#28a745", // Vert
        }}
      >
        <CalendarMonthOutlinedIcon className="text-green-600 text-lg" />
        <h2 className="text-green-600 text-lg">Calendrier</h2>
      </Box>

      {/* Chat */}
      <Box
        className="bg-purple-100 shadow-lg rounded h-[100px] w-[45%] md:w-[25%] lg:w-[20%] flex justify-center items-center flex-col"
        sx={{
          color: "#d291bc", // Rose
        }}
      >
        <MessageOutlinedIcon className="text-purple-500 text-lg" />
        <h2 className="text-purple-500 text-lg">Chat</h2>
      </Box>

      {/* Progression */}
      <Box
        className="bg-yellow-100 shadow-lg rounded h-[100px] w-[45%] md:w-[25%] lg:w-[20%] flex justify-center items-center flex-col"
        sx={{
          color: "#ffc107", // Jaune
        }}
      >
        <PersonOutlineOutlinedIcon className="text-yellow-500 text-lg" />
        <h2 className="text-yellow-500 text-lg">Progression</h2>
      </Box>
    </div>
  );
};

export default View;
