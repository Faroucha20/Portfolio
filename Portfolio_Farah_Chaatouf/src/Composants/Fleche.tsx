import { Link } from "react-router-dom";

const Fleche = ({
  className = "w-8 h-8 text-gray-800 absolute left-8 top-8 cursor-pointer",
}) => {
  return (
    <>
      <style>
        {`
          @keyframes bounceLeft {
            0%, 100% {
              transform: translateX(0);
              animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            }
            50% {
              transform: translateX(-25%);
              animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            }
          }
          .animate-bounce-left {
            animation: bounceLeft 1s infinite;
          }
        `}
      </style>
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`animate-bounce-left ${className}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </Link>
    </>
  );
};
export default Fleche;
