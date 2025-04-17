import Event from "./event/Event"
import Program from "./program/Program"
import View from "./view/View"

type Props = {}

const Dashboard = ({}: Props) => {
  return (
    <div className="h-[100vh] space-y-4">

        <div>
            <View/>
        </div>

        <div>
            <Program/>
        </div>

        <div>
            <Event/>
        </div>
    </div>
  )
}

export default Dashboard