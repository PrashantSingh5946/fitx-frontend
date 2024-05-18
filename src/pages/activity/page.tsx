import {
  Card,
  Input,
  Progress,
  Select,
  SelectItem,
  Slider,
  Button,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";
import { fetchActivity, fetchAllGoals, logActivity } from "../../lib/helpers";
import { access } from "fs";

type Task = {
  id: string;
  activity_type: string;
  time: number;
  frequency?: number;
  quantity?: number;
  goal_id: number;
  //time = frequency * quantity
};

type Goal = {
  _id: string;
  id: number;
  name: string;
  tasks: Task[];
  minTime: number;
  maxTime: number;
};

function formatDuration(duration: number) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  if (hours === 0) {
    return `${minutes} minute${minutes !== 1 ? "s" : ""}`;
  } else if (minutes === 0) {
    return `${hours} hour${hours !== 1 ? "s" : ""}`;
  } else {
    return `${hours} hour${hours !== 1 ? "s" : ""} and ${minutes} minute${
      minutes !== 1 ? "s" : ""
    }`;
  }
}

const ActivityTrackerApp: React.FC = () => {
  const userGoals = useAppSelector((state) => state.auth.goals);
  const accessToken = useAppSelector((state) => state.auth.credential);

  const [activity, setActivity] = useState("1");

  const [myGoals, setMyGoals] = useState<Goal[]>([]);
  const [myTasks, setMyTasks] = useState<Task[]>([]);
  const [duration, setDuration] = useState(30);

  const [myActivity, setMyActivity] = useState<any>([]);

  const [comments, setComments] = useState("");

  useEffect(() => {
    let fetchData = async () => {
      if (accessToken) {
        let data = await fetchActivity(accessToken);
        console.log(data);
        if (data) {
          setMyActivity(data);

          console.log(data);
        }
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let fetchData = async () => {
      let data = await fetchAllGoals();
      console.log(data);
      if (data) {
        setMyGoals(data);

        console.log(myTasks);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setMyTasks(myGoals.map((goal) => goal.tasks).flat());
    console.log("My tasks", myTasks);
  }, [myGoals]);

  return (
    <div
      className="flex flex-col gap-4 p-6 my-4 pb-8 rounded-[40px] md:max-h-[80vh] overflow-hidden"
      style={{
        background:
          "linear-gradient(274.42deg, rgb(96 106 153 / 20%) 0%, rgba(49, 69, 88, 0.82) 124.45%)",
      }}
    >
      <Card
        className="m-2 p-2 w-full min-h-[50px]"
        style={{ background: "none", width: "90%", alignSelf: "center" }}
      >
        <div className="flex gap-5 justify-center px-5 w-full text-base font-bold leading-6 text-white whitespace-nowrap">
          <div className="my-auto">Activity</div>
        </div>
      </Card>

      {userGoals && userGoals?.length > 0 ? (
        <div className="flex flex-col gap-4 overflow-hidden">
          {/* Add activity */}

          <Select
            label="Select an Activity"
            className="max-w-xs dark"
            //@ts-ignore
            defaultSelectedKeys=""
            selectionMode={"single"}
            selectedKeys={[activity]}
            classNames={{
              listbox: "dark",
              listboxWrapper: "dark",
              popoverContent: "dark",
            }}
            //@ts-ignore
            onSelectionChange={(e) => setActivity(e.currentKey)}
          >
            {myTasks.map((task) => (
              //@ts-ignore
              <SelectItem key={task.id} value={task.id}>
                {task.activity_type}
              </SelectItem>
            ))}
          </Select>

          <Slider
            label="Duration of the activity"
            step={10}
            maxValue={120}
            minValue={10}
            defaultValue={duration}
            showSteps={true}
            showTooltip={true}
            showOutline={true}
            disableThumbScale={true}
            onChange={(e) => {
              if (e && !Array.isArray(e)) {
                setDuration(e);
              }
            }}
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
                "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6",
              ],
              step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50",
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
          <Input
            type="text"
            label="comments"
            value={comments}
            onChange={(e) => setComments(e.currentTarget.value)}
          />

          <Button
            onClick={() => {
              console.log(activity, duration, comments, accessToken);
              if (activity && duration && comments && accessToken) {
                logActivity(
                  {
                    activity_type: activity,
                    amount: duration,
                    comments: comments,
                  },
                  accessToken
                );
              }
            }}
          >
            Log activity
          </Button>

          <Card
            className="m-2 p-2 w-full min-h-[50px]  mb-[50px]"
            style={{ background: "none", width: "90%", alignSelf: "center" }}
          >
            <div className="flex gap-5 justify-center px-5 w-full text-base font-bold leading-6 flex-col text-white whitespace-nowrap">
              <div className="my-auto">Activity Log</div>

              <div className="overflow-y-scroll gap-2 h-[200px] pb-[100px]">
                {activity && myActivity && myActivity.length > 0
                  ? myActivity.map((activity: any) => (
                      <div className="flex flex-col m-2  overflow-hidden">
                        <div className="flex gap-4">
                          <Card className="flex flex-col gap-2 p-4">
                            <div>Activity: {activity.activity_type}</div>
                            <div>
                              Duration:{" "}
                              {formatDuration(activity.activityMeasurement)}
                            </div>
                            <div>Comments: {activity.comments}</div>
                          </Card>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </Card>
        </div>
      ) : (
        <Card>
          Please add some goals Click <Link to="/goals">here</Link> to
          continue...
        </Card>
      )}
    </div>
  );
};

export default ActivityTrackerApp;
