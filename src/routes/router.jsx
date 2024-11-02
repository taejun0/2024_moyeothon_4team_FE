import { createBrowserRouter } from "react-router-dom";
import { ROUTE_PATHS } from "@constants/routeConstants";

import DefaultLayout from "@layouts/DefaultLayout";
import { HomePage } from "@pages/homepage/HomePage";
import { AboutPage } from "@pages/aboutpage/AboutPage";
import { NotFoundLayout } from "@layouts/NotFoundLayout";
import { LetterMakePage } from "@pages/LetterMakePage/LetterMakePage";
import { LetterInventoryPage } from "@pages/LetterInventoryPage/LetterInventoryPage";
import { LoginPage } from "@pages/LoginPage/LoginPage";

export const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.LOGIN,
    element: <DefaultLayout />,
    children: [
      {
        path: ROUTE_PATHS.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTE_PATHS.HOME,
        element: <HomePage />,
      },
      {
        path: ROUTE_PATHS.ABOUT,
        element: <AboutPage />,
      },
      {
        path: ROUTE_PATHS.LETTER,
        element: <LetterMakePage />,
      },
      {
        path: ROUTE_PATHS.INVENTORY,
        element: <LetterInventoryPage />,
      },
    ],
    errorElement: <NotFoundLayout />,
  },
]);
