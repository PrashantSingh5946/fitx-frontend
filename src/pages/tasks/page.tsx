import { Card, Checkbox, CheckboxGroup, Chip, Progress, Select, SelectItem, Slider, User, cn, listbox } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { fileURLToPath } from "url";

//@ts-nocheck

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

const frequencyMap = {
    "Weekly": 4,
    "Monthly": 1,
    "Daily": 30,
    "Weekdays": 22,
    "Daily twice": 60
}


const TaskConfigurator: React.FC<{ task: Task }> = ({ task }: { task: Task }) => {

    const [frequency, setFrequency] = useState("30");

    const goal = goals[task.goal_id]

    const [duration, setDuration] = useState(task.time / parseInt(frequency));

    useEffect(() => {

        setDuration(task.time / parseInt(frequency));

    }, [frequency])


    return <div className="flex flex-col gap-4 p-6 my-4 pb-8 rounded-[40px] md:max-h-[80vh] overflow-hidden p-4 bg-transparent"
        style={{
            background:
                "linear-gradient(274.42deg, rgb(96 106 153 / 20%) 0%, rgba(49, 69, 88, 0.82) 124.45%)",
        }}>

        <Card className="bg-transparent p-4 text-white">
            <div className="my-2" >{task.activity_type}</div>
            <div className="my-2">Total time: {task.time} hours</div>

            <Select
                label="Select a frequency"
                className="max-w-xs dark"
                //@ts-ignore
                defaultSelectedKeys={"4"}
                selectionMode={"single"}
                selectedKeys={[frequency]}
                classNames={{ listbox: "dark", listboxWrapper: "dark", popoverContent: "dark" }}
                //@ts-ignore
                onSelectionChange={(e) => setFrequency(e.currentKey) }
            >
                {Object.keys(frequencyMap).map((key) => (
                    //@ts-ignore
                    <SelectItem key={frequencyMap[key]} value={frequencyMap[key]}>
                        {key}
                    </SelectItem>
                ))}
            </Select>



            <div className="my-2">
                Duration of Each Session

                <Chip className="m-2">{duration.toFixed(2)} hours</Chip>
            </div>


        </Card>


    </div>
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

const TasksManager: React.FC = () => {

    const fetchGoals = () => {
        return [1, 3];
    }

    const [myGoals, setMyGoals] = useState([]);
    const [myActivities, setMyActivities] = useState<[] | Task[]>([]);

    useEffect(() => {
        //@ts-ignore
        let goalIds = fetchGoals();

        let myGoals = goals.filter((goal) => goalIds.includes(goal.id));

        let myActivities = myGoals.map((goal) => goal.tasks)

        //@ts-ignore
        myActivities = myActivities.flat(Infinity);

        //@ts-ignore
        setMyActivities(myActivities);
        //@ts-ignore
        setMyGoals(myGoals);



    }, []);





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

                <div className="my-auto">Goals</div>

            </div>
        </Card>


        <div className="flex flex-col gap-4 overflow-hidden  md:hover:overflow-y-scroll">

            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1 w-full">
                    <div className="flex flex-col gap-1 w-full p-4">

                        {

                            myActivities.map((task) => <TaskConfigurator key={task.id} task={task} />)
                        }
                    </div>
                </div>
            </div>

        </div>



    </div>
}

export default TasksManager;
