import { Link } from "react-router-dom";

interface props {
  fillColor: string;
}

export default function (props: props) {
  return (
    <>
      <div
       
        className="w-full h-full flex justify-center items-center"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="9.80553"
            cy="9.80541"
            r="7.49047"
            stroke={props.fillColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.0153 15.4043L17.9519 18.3334"
            stroke={props.fillColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
}
