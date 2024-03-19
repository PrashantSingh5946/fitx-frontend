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
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9848 14.197C8.11714 14.197 4.81429 14.7363 4.81429 16.8961C4.81429 19.0558 8.09619 19.6144 11.9848 19.6144C15.8524 19.6144 19.1543 19.0743 19.1543 16.9154C19.1543 14.7565 15.8733 14.197 11.9848 14.197Z"
            stroke={props.fillColor}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9848 11.1164C14.5229 11.1164 16.58 9.21841 16.58 6.87772C16.58 4.53704 14.5229 2.63989 11.9848 2.63989C9.44667 2.63989 7.38857 4.53704 7.38857 6.87772C7.38 9.21051 9.42381 11.1085 11.9524 11.1164H11.9848Z"
            stroke={props.fillColor}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </>
  );
}
