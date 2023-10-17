import { useEffect } from "react";
import { useMyProfile } from "../features/users/useMyProfile";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isUnathorized, isAuthenticated } = useMyProfile();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isUnathorized, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="h-screen w-full bg-stone-400 fixed top-0 left-0 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
