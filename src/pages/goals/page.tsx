import {
  Card,
  Checkbox,
  CheckboxGroup,
  Chip,
  Progress,
  Slider,
  User,
  cn,
  Button,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchAllGoals, updateGoals } from "../../lib/helpers";
import { access } from "fs";
import { login } from "../../app/features/auth/authSlice";

type Task = {
  activity_type: string;
  time: number;
  frequency?: number;
  quantity?: number;
  //time = frequency * quantity
};

type Goal = {
  _id: string;
  id: string;
  name: string;
  tasks: Task[];
  minTime: number;
  maxTime: number;
};

const CustomCheckbox = ({
  goal,
  statusColor,
  value,
}: {
  goal: Goal;
  statusColor: string;

  value: string;
}) => {
  return (
    //@ts-ignore
    <Checkbox
      aria-label={goal.name}
      classNames={{
        base: cn(
          "inline-flex max-w-md w-full bg-content1 m-0",
          "hover:bg-content2 justify-start",
          "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
        label: "w-full",
      }}
      value={value}
    >
      <div className="w-full flex justify-between gap-2">
        <div className="flex flex-col items-end gap-1">
          <span className="text-large text-white-500">{goal.name}</span>

          <span className="flex flex-row gap-1">
            {goal.tasks.map((task) => (
              <Chip size="sm" variant="flat">
                {task.activity_type}
              </Chip>
            ))}
          </span>

          <Chip size="sm" className="my-2" variant="flat">
            {goal.minTime} days - {goal.maxTime} days
          </Chip>
        </div>
      </div>
    </Checkbox>
  );
};

const ActivityTrackerApp: React.FC = () => {
  const myGoals = useAppSelector((state) => state.auth.goals);
  const accessToken = useAppSelector((state) => state.auth.credential);
  const [groupSelected, setGroupSelected] = React.useState(myGoals);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isInvalid, setIsInvalid] = React.useState(true);
  const [goals, setGoals] = React.useState<Goal[]>([]);
  const dispatcher = useAppDispatch();

  useEffect(() => {
    let fetchData = async () => {
      let data = await fetchAllGoals();
      console.log(data);
      if (data) {
        setGoals(data);
      }
    };

    fetchData();
  }, []);

  const validate = (fields: string[]) => {
    if (fields.length <= 2) {
      setIsInvalid(false);
      setErrorMessage("");
      setIsInvalid(false);
      return true;
    }

    if (fields.length > 2) {
      setIsInvalid(true);
      setErrorMessage("Can't select more than 2 goals");
      setIsInvalid(true);
    }
  };

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
          <div className="my-auto">Goals</div>
        </div>
      </Card>

      <div className="flex flex-col gap-4 overflow-hidden md:hover:overflow-y-scroll">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1 w-full">
            <div className="flex flex-col gap-1 w-full dark">
              <CheckboxGroup
                label="Select goals"
                value={groupSelected}
                //@ts-ignore
                onChange={setGroupSelected}
                errorMessage={errorMessage}
                isInvalid={isInvalid}
                classNames={{
                  base: "w-full",
                }}
                validate={(fields: string[]) => validate(fields)}
              >
                {goals.length > 0 &&
                  goals.map((goal) => (
                    <CustomCheckbox
                      key={goal._id}
                      value={goal?._id}
                      goal={goal}
                      statusColor="secondary"
                    />
                  ))}
              </CheckboxGroup>

              <Button
                isDisabled={isInvalid}
                className="w-[200px] m-4"
                onClick={async () => {
                  if (groupSelected && accessToken) {
                    await updateGoals(groupSelected, accessToken);
                    dispatcher(login({ goals: groupSelected }));
                  }
                }}
              >
                Update goals
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityTrackerApp;
