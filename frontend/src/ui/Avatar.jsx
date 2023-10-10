function Avatar({ size }) {
  return (
    <img
      className="rounded-full"
      width={size}
      height={size}
      src="./default-user.svg"
      alt="Avatar"
    />
  );
}

export default Avatar;
