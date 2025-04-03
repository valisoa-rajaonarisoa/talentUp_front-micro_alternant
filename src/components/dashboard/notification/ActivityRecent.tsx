type Props = {
  recentActivity: {
    id: number;
    titre: string;
    userName: string;
    message: string;
    date: string;
    color: string;
}[]
};


const ActivityRecent = ({recentActivity}: Props) => {
  return (
    <div className="bg-white w-full md:w-[50%]  p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Activité récente
      </h2>
      {recentActivity?.map((activity) => (
        <div className="flex items-start space-x-4 mb-4" key={activity.id}>
          <div className="w-[10px] h-[10px] bg-blue-500 rounded-full relative top-[6px]"></div>

          <div>
            <h3 className="text-base font-medium text-gray-700">
              {activity.titre}
            </h3>
            <p className="text-sm text-gray-600">
              {activity.userName} {activity.message}
            </p>
            <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityRecent;
