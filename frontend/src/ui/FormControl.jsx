function FormControl({ children, label, error }) {
  return (
    <div className="flex flex-col space-y-1">
      {label && <label htmlFor={children.props.id}>{label}</label>}
      <div className="flex flex-col">
        {children}
        {error && (
          <span className="text-red-500 text-stone-50 text-xs">{error}</span>
        )}
      </div>
    </div>
  );
}

export default FormControl;
