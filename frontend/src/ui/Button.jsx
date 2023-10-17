function Button({
  children,
  className,
  disabled,
  onClick,
  rounded,
  type = "default",
}) {
  let additionalClasses;
  if (type === "default") {
    additionalClasses = "rounded hover:bg-gray-50 p-2 ";
  }

  if (type === "primary") {
    additionalClasses = `bg-blue-500 text-stone-100 disabled:text-gray-700 disabled:bg-stone-200 px-4 py-1 ${
      rounded ? "rounded-full" : "rounded"
    }`;
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center gap-2 transition-colors duration-100 disabled:cursor-not-allowed ${additionalClasses} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
