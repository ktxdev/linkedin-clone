import Header from "./Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <div className="w-full bg-white border-b border-b-gray-100">
        <Header />
      </div>
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
