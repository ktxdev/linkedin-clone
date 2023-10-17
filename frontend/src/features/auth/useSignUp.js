import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/auth.service";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignUp() {
  const navigate = useNavigate();

  const { isLoading: isSigningUp, mutate: signUp } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (data) => {
      // Store access token
      localStorage.setItem("auth-token", JSON.stringify(data));
      toast.success("Sign up was successfull");
      navigate("/feed");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isSigningUp, signUp };
}
