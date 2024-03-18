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
            d="M9.15722 19.2003V16.3721C9.1572 15.6527 9.79312 15.0682 10.581 15.0634H13.4671C14.2587 15.0634 14.9005 15.6493 14.9005 16.3721V16.3721V19.2091C14.9003 19.8199 15.4343 20.319 16.103 20.3334H18.0271C19.9451 20.3334 21.5 18.9138 21.5 17.1626V17.1626V9.11714C21.4898 8.42823 21.1355 7.78132 20.538 7.36049L13.9577 2.52092C12.8049 1.67825 11.1662 1.67825 10.0134 2.52092L3.46203 7.36927C2.86226 7.78839 2.50739 8.43639 2.5 9.12592V17.1626C2.5 18.9138 4.05488 20.3334 5.97291 20.3334H7.89696C8.58235 20.3334 9.13797 19.8261 9.13797 19.2003V19.2003"
            fill={props.fillColor}
          />
        </svg>
      </Link>
    </>
  );
}
