export default function Arrow({ className = "", width = 102, height = 50 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 102 50"
      fill="currentColor"
      width={width}
      height={height}
      className={`${className}`}
    >
      <path
        d="M100.045 28.4916C88.0342 28.4916 72.8115 33.7989 72.8115 48.0447V50H65.9683V48.0447C65.9683 39.8045 69.4598 33.1006 76.1633 28.4916L0 28.4916L0 21.5084L76.1633 21.5084C69.4598 16.8994 65.9683 10.1955 65.9683 1.95531V0L72.8115 0V1.95531C72.8115 16.2011 88.0342 21.5084 100.045 21.5084H102V28.4916H100.045Z"
        fill="currentColor"
      />
    </svg>
  );
}
