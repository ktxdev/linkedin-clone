import { useQuery } from "@tanstack/react-query";
import { myProfile } from "../../services/users.service";
import { AUTH_TOKEN_KEY } from "../../utils/constants";

export function useMyProfile() {
  const { isLoading, data: { isUnathorized, data: user } = {} } = useQuery({
    queryFn: myProfile,
    queryKey: ["profile"],
  });

  const isAuthenticated =
    !isUnathorized && localStorage.getItem(AUTH_TOKEN_KEY) !== undefined;

  return { isLoading, isAuthenticated, user };
}
