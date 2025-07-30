export default function Arrow45deg({
  className = "",
  width = 78,
  height = 78,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 78 78"
      fill="currentColor"
      width={width}
      height={height}
      className={`${className}`}
    >
      <path
        d="M75.889 6.78903C67.3962 15.2818 60.385 29.7987 70.4583 39.872L71.8409 41.2546L67.002 46.0935L65.6194 44.7109C59.7927 38.8841 57.5211 31.6749 59.0022 23.6758L5.14662 77.5314L0.208722 72.5935L54.0643 18.7379C46.0652 20.219 38.856 17.9475 33.0293 12.1207L31.6466 10.7381L36.4855 5.89923L37.8681 7.28185C47.9415 17.3552 62.4583 10.3439 70.9511 1.85114L72.3336 0.468596L77.2715 5.40649L75.889 6.78903Z"
        fill="currentColor"
      />
    </svg>
  );
}
