import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormControl from "../ui/FormControl";
import Spinner from "../ui/Spinner";
import { useSignUp } from "../features/auth/useSignUp";

function SignUp() {
  const { formState, reset, register, handleSubmit, getValues } = useForm();
  const { errors } = formState;
  const { isSigningUp, signUp } = useSignUp();

  function onSubmit(data) {
    signUp(data, {
      onSettled: () => reset(),
    });
  }

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="bg-white shadow rounded-md p-8 w-96 flex flex-col items-center space-y-2">
        <img className="h-44" src="linkedin-logo-lg.svg" alt="logo" />

        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <FormControl label="First Name" error={errors?.firstName?.message}>
              <input
                className="bg-stone-200 px-3 py-2 rounded outline-none"
                id="firstName"
                type="text"
                placeholder="Enter first name"
                {...register("firstName", {
                  required: "First name should be provided",
                })}
              />
            </FormControl>
            <FormControl label="Last Name" error={errors?.lastName?.message}>
              <input
                className="bg-stone-200 px-3 py-2 rounded outline-none"
                id="lastName"
                type="text"
                placeholder="Enter last name"
                {...register("lastName", {
                  required: "Last name should be provided",
                })}
              />
            </FormControl>
          </div>
          <FormControl label="Email" error={errors?.email?.message}>
            <input
              className="bg-stone-200 px-3 py-2 rounded outline-none"
              id="email"
              type="email"
              placeholder="Enter email"
              {...register("email", {
                required: "Email should be provided",
              })}
            />
          </FormControl>
          <FormControl label="Password" error={errors?.password?.message}>
            <input
              id="password"
              className="bg-stone-200 px-3 py-2 rounded outline-none"
              type="password"
              placeholder="Enter password"
              {...register("password", {
                required: "Password should be provided",
                validate: (value) =>
                  value.length >= 8 ||
                  "Password should be at least 8 characters long",
              })}
            />
          </FormControl>
          <FormControl
            label="Confirm Password"
            error={errors?.passwordConfirm?.message}
          >
            <input
              id="passwordConfirm"
              className="bg-stone-200 px-3 py-2 rounded outline-none"
              type="password"
              placeholder="Enter password"
              {...register("passwordConfirm", {
                required: "Password must be confirmed",
                validate: (value) =>
                  getValues().password === value || "Passwords do not match",
              })}
            />
          </FormControl>
          <Button className="w-full" type="primary">
            {isSigningUp ? <Spinner size={10} /> : "Sign Up"}
          </Button>
        </form>
        <p className="text-center ">
          <span>Already have an account? </span>
          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-600 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
