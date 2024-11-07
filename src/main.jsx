import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorPage from "./ErrorPage.jsx";
import { BallContextProvider } from "./context";

const router = createBrowserRouter([
  {
    path: "/8balls/:id",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/wonder",
    element: <div>Wonderful </div>,
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BallContextProvider>
        <RouterProvider router={router} />
      </BallContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
