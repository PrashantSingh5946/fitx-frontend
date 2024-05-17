import { Card, Input, Progress, Select, SelectItem, Slider } from "@nextui-org/react";
import React, { useState } from "react";
import Button from "../../components/ui/Button";


type Task = {
  id: string,
  activity_type: string,
  time: number,
  frequency?: number,
  quantity?: number,
  goal_id: number,
  //time = frequency * quantity
}

type Goal = {
  id: number,
  name: string,
  tasks: Task[],
  minTime: number,
  maxTime: number,
}
const goals: Goal[] = [
  {
      "id": 1,
      "name": "Lose 3kg of fat",
      "tasks": [{ id: "10", "activity_type": "Cycling", "time": 20, goal_id: 1 }, { id: "11", "activity_type": "Walking", "time": 25, goal_id: 1 }, { id: "12", "activity_type": "Trekking", "time": 17, goal_id: 1 }],
      "minTime": 30,
      "maxTime": 60,
  },
  {
      id: 2,
      "name": "Increase Muscle Strength and Endurance",
      "tasks": [
          { id: "1", "activity_type": "Weightlifting", "time": 30, goal_id: 2 },
          { id: "2", "activity_type": "Bodyweight Exercises", "time": 20, goal_id: 2 },
          { id: "3", "activity_type": "Cardio", "time": 25, goal_id: 2 }
      ],
      "minTime": 60,
      "maxTime": 90
  },
  {
      id: 3,
      "name": "Boost Stamina and Endurance",
      "tasks": [
          { id: "4", "activity_type": "Running", "time": 35, goal_id: 3 },
          { id: "5", "activity_type": "Cycling", "time": 25, goal_id: 3 },
          { id: "6", "activity_type": "Swimming", "time": 20, goal_id: 3 }
      ],
      "minTime": 60,
      "maxTime": 90
  },
  {
      id: 4,
      "name": "Enhance Muscle Tone and Definition",
      "tasks": [
          { id: "7", "activity_type": "Strength Training", "time": 40, goal_id: 4 },
          { id: "8", "activity_type": "Pilates", "time": 30, goal_id: 4 },
          { id: "9", "activity_type": "Yoga", "time": 20, goal_id: 4 }
      ],
      "minTime": 60,
      "maxTime": 90
  }

]

function formatDuration(duration:number) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  if (hours === 0) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
  } else if (minutes === 0) {
    return `${hours} hour${hours !== 1 ? 's' : ''}`;
  } else {
    return `${hours} hour${hours !== 1 ? 's' : ''} and ${minutes} minute${minutes !== 1 ? 's' : ''}`;
  }
}


const ActivityTrackerApp: React.FC = () => {

  const [activity,setActivity] = useState("Walking");

  let goalIds = [1,4];

  let myGoals = goals.filter((goal) => goalIds.includes(goal.id));

  let myTasks = myGoals.map((goal) => goal.tasks).flat()

  console.log(myTasks)

  return <div className="flex flex-col gap-4 p-6 my-4 pb-8 rounded-[40px] md:max-h-[80vh] overflow-hidden"
    style={{
      background:
        "linear-gradient(274.42deg, rgb(96 106 153 / 20%) 0%, rgba(49, 69, 88, 0.82) 124.45%)",
    }}>


    <Card
      className="m-2 p-2 w-full min-h-[50px]"
      style={{ background: "none", width: "90%", alignSelf: "center" }}
    >
      <div className="flex gap-5 justify-center px-5 w-full text-base font-bold leading-6 text-white whitespace-nowrap">

        <div className="my-auto">Activity</div>

      </div>
    </Card>


    <div className="flex flex-col gap-4 overflow-hidden  md:hover:overflow-y-scroll">
        {/* Add activity */}

        <Select
                label="Select an Activity"
                className="max-w-xs dark"
                //@ts-ignore
                defaultSelectedKeys=""
                selectionMode={"single"}
                selectedKeys={[activity]}
                classNames={{ listbox: "dark", listboxWrapper: "dark", popoverContent: "dark" }}
                //@ts-ignore
                onSelectionChange={(e) => setActivity(e.currentKey) }
            >
                {myTasks.map((task) => (
                    //@ts-ignore
                    <SelectItem key={task.activity_type} value={task.activity_type}>
                       {task.activity_type}
                    </SelectItem>
                ))}
            </Select>

      <Slider 
      label="Duration of the activity"
      step={10} 
      maxValue={120} 
      minValue={10} 
      defaultValue={30}
      showSteps={true}
      showTooltip={true}
      showOutline={true}
      disableThumbScale={true}
      //@ts-ignore
      // formatOptions={(e)=> {console.log(e)}}
      classNames={{
        base: "max-w-md",
        filler: "bg-gradient-to-r from-primary-500 to-secondary-400",
        labelWrapper: "mb-2",
        label: "font-medium text-default-700 text-medium text-white",
        value: "font-medium text-default-500 text-small",
        thumb: [
          "transition-size",
          "bg-gradient-to-r from-secondary-400 to-primary-500",
          "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
          "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6"
        ],
        step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50"
      }}
      tooltipProps={{
        offset: 10,
        placement: "bottom",
        classNames: {
          base: [
            // arrow color
            "before:bg-gradient-to-r before:from-secondary-400 before:to-primary-500",
          ],
          content: [
            "py-2 shadow-xl",
            "text-white bg-gradient-to-r from-secondary-400 to-primary-500",
          ],
        },
      }}
    />
        <Input type="text" label="comments" />
        <Button> Log activity</Button>
       
    </div>



  </div>
}

export default ActivityTrackerApp;
