import { createBrowserRouter } from "react-router";
import LandingPage from "@/app/components/LandingPage";
import Dashboard from "@/app/components/Dashboard";
import AIContentStudio from "@/app/components/AIContentStudio";
import Wallet from "@/app/components/Wallet";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/ai-content-studio",
    Component: AIContentStudio,
  },
  {
    path: "/wallet",
    Component: Wallet,
  },
]);