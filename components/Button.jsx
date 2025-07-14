'use client';

const CustomButton = ({
  children,
  showIcon = true,
  onClick,
  className,
  personal,
}) => {
  return (
    <button onClick={onClick} className={className} role="button">
      <span className={personal}>{children}</span>
      {showIcon && (
        <svg
          width="34"
          height="34"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform group-hover:translate-x-1"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
          />
          <polyline
            points="40,30 60,50 40,70"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

export default CustomButton;
