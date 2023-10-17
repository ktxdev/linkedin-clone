import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiMiniEye, HiMiniEyeSlash } from "react-icons/hi2";

function PasswordInput({ id, className, placeholder, name, required = "" }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { register } = useForm();

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <input
        id={id}
        className="bg-inherit outline-none flex-grow"
        type={isPasswordVisible ? "text" : "password"}
        placeholder={placeholder}
        {...register(name, { required: required !== "" ? required : false })}
      />
      <button
        type="button"
        onClick={() => setIsPasswordVisible((visible) => !visible)}
      >
        {isPasswordVisible && <HiMiniEyeSlash />}
        {!isPasswordVisible && <HiMiniEye />}
      </button>
    </div>
  );
}

export default PasswordInput;
