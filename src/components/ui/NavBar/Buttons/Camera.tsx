interface props {
  fillColor: string;
  href: string;
}

export default function (props: props) {
  return (
    <>
      <a href={props.href}>
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0402 1.05126C14.0502 1.45326 14.3592 2.85326 14.7722 3.30326C15.1852 3.75326 15.7762 3.90626 16.1032 3.90626C17.8412 3.90626 19.2502 5.31526 19.2502 7.05226V12.8473C19.2502 15.1773 17.3602 17.0673 15.0302 17.0673H4.97024C2.63924 17.0673 0.750244 15.1773 0.750244 12.8473V7.05226C0.750244 5.31526 2.15924 3.90626 3.89724 3.90626C4.22324 3.90626 4.81424 3.75326 5.22824 3.30326C5.64124 2.85326 5.94924 1.45326 6.95924 1.05126C7.97024 0.649256 12.0302 0.649256 13.0402 1.05126Z"
            stroke={props.fillColor}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.4955 6.5H15.5045"
            stroke={props.fillColor}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.1789 10.128C13.1789 8.37197 11.7559 6.94897 9.99992 6.94897C8.24392 6.94897 6.82092 8.37197 6.82092 10.128C6.82092 11.884 8.24392 13.307 9.99992 13.307C11.7559 13.307 13.1789 11.884 13.1789 10.128Z"
            stroke={props.fillColor}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </>
  );
}
