import Button from "../ui/Button";
import { Link } from "react-router-dom";
import FormControl from "../ui/FormControl";
import { useForm } from "react-hook-form";
import { useSignIn } from "../features/auth/useSignIn";
import Spinner from "../ui/Spinner";

function SignIn() {
  const { formState, reset, register, handleSubmit } = useForm();
  const { errors } = formState;
  const { signIn, isSigningIn } = useSignIn();

  function onSubmit(data) {
    signIn(data, {
      onSettled: () => reset(),
    });
  }
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="bg-white shadow rounded-md p-8 w-96 flex flex-col items-center space-y-2">
        <img className="h-44" src="linkedin-logo-lg.svg" alt="logo" />

        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
          <FormControl label="Password" error={errors?.password?.message}>
            <input
              id="email"
              className="bg-stone-200 px-3 py-2 rounded outline-none"
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
              })}
            />
          </FormControl>
          <Button className="w-full" type="primary">
            {isSigningIn ? <Spinner size={10} /> : "Sign In"}
          </Button>
        </form>
        <p className="text-center ">
          <span>Don't have an account? </span>
          <Link
            to="/sign-up"
            className="text-blue-500 hover:text-blue-600 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
