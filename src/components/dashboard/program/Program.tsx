import WebinaireProgram from "./WebinaireProgram";

type Props = {};

const Program = ({}: Props) => {
  return (
    <div className="flex flex-col space-y-4 md:space-x-4 md:flex-row w-full ">
      <WebinaireProgram />

      <WebinaireProgram />
    </div>
  );
};

export default Program;
