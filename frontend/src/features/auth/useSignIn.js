import { useMutation } from "@tanstack/react-query";
import { signIn as signInApi } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignIn() {
  const navigate = useNavigate();

  const { isLoading: isSigningIn, mutate: signIn } = useMutation({
    mutationFn: signInApi,
    onSuccess: (data) => {
      localStorage.setItem("auth-token", JSON.stringify(data));
      navigate("/feed");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isSigningIn, signIn };
}
