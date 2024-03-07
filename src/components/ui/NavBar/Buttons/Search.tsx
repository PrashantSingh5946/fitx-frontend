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
      </a>
    </>
  );
}
