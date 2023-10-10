function IconButton({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 bg-stone-200 hover:bg-stone-300 text-gray-600 p-2 rounded-full transition-colors duration-100 ${className} `}
    >
      {children}
    </button>
  );
}

export default IconButton;
