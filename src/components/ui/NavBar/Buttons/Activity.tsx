import { Link } from "react-router-dom";

interface props {
  fillColor: string;
  href: string;
}

export default function (props: props) {
  return (
    <Link
      to={props.href}
      className="w-full h-full flex justify-center items-center"
    >
      <div className="flex justify-center items-center w-full h-full flex justify-center items-center">
        <svg
          width="30"
          height="30"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.24484 12.6762L8.23798 9.08865L11.6522 11.562L14.5812 8.07568"
            stroke={props.fillColor}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <ellipse
            cx="17.9954"
            cy="2.91796"
            rx="1.9222"
            ry="1.77269"
            stroke={props.fillColor}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.9245 1.92188H5.65675C2.64531 1.92188 0.77803 3.88872 0.77803 6.66594V14.1197C0.77803 16.8969 2.60869 18.8553 5.65675 18.8553H14.2609C17.2723 18.8553 19.1396 16.8969 19.1396 14.1197V7.62826"
            stroke={props.fillColor}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}
