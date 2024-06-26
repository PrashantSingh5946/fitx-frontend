import { FaBowlFood } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface props {
  fillColor: string;
}

export default function (props: props) {
  return (
    <>
      <div
        className="w-auto h-full flex justify-center items-center"
      >
        <div className="flex justify-center items-center w-full h-full flex justify-center items-center">
          <FaBowlFood
            style={{ height: "30px", width: "30px" }}
            color={props.fillColor}
          />
        </div>
      </div>
    </>
  );
}
