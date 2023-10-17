import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import AppLayout from "./ui/AppLayout";
import Network from "./pages/Network";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ui/ProtectedRoute";
import MyProfile from "./pages/MyProfile";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Navigate to="feed" replace />} />
            <Route path="feed" element={<Feed />} />
            <Route path="mynetwork" element={<Network />} />
            <Route path="my-profile" element={<MyProfile />} />
          </Route>
          <Route path="login" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 2000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
