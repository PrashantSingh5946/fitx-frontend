import { FaBowlFood } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface props {
  fillColor: string;
  href: string;
}

export default function (props: props) {
  return (
    <>
      <Link
        to={props.href}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="flex justify-center items-center w-full h-full flex justify-center items-center">
          <FaBowlFood
            style={{ height: "30px", width: "30px" }}
            color={props.fillColor}
          />
        </div>
      </Link>
    </>
  );
}
