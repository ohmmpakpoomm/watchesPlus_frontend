import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import HomePageAdmin from "../pages/admins/HomePageInAdmin";
import HomePageInAdmin from "../pages/admins/HomePageInAdmin";
import ProductPage from "../pages/admins/ProductPage";
import TransactionPage from "../pages/admins/TransactionPage";
import UserPage from "../pages/admins/UserPage";
import SideBarAdmin from "../components/admins/SideBarAdmin";
import CreateProductForm from "../features/admins/products/CreateProductForm";
import ProductIdForm from "../features/admins/products/ProductIdForm";
import UserIdForm from "../features/admins/users/UserIdForm";
import EditProductForm from "../features/admins/products/EditProductForm";
import OuterPage from "../layouts/OuterPage";
import ProfilePage from "../pages/ProfilePage";
import { Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Container from "../layouts/Container";
import ProductDetailPage from "../pages/ProductDetailPage";
import WalletPage from "../pages/WalletPage";
import ShippingPage from "../pages/admins/ShippingPage";
import BrandPage from "../pages/admins/BrandPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Container />,
        children: [
          {
            path: "",
            element: <HomePage />, //hompage
          },
          {
            path: "search",
            element: <>SearchPage</>, //search + all watches
          },
          {
            path: "profile",
            element: <Outlet />, //search + all watches
            children: [
              {
                path: "",
                element: <ProfilePage />,
              },
              {
                path: "wishlist",
                element: <>WishlistPage</>,
              },
              {
                path: "history",
                element: <>HistoryPage</>,
              },
              {
                path: "inventory",
                element: <>InventoryPage</>,
                children: [
                  {
                    path: ":inventoryId",
                    element: <>Watch in InventoryId</>,
                  },
                ],
              },
              {
                path: "wallet",
                element: <WalletPage />,
              },
            ],
          },
          {
            path: "watch",
            element: <Outlet />,
            children: [
              {
                path: ":watchId",
                element: <ProductDetailPage />,
              },
            ],
          },
        ],
      },
      {
        path: "/register",
        element: (
          <OuterPage>
            <RegisterPage />
          </OuterPage>
        ),
      },
      {
        path: "/login",
        element: (
          <OuterPage>
            <LoginPage />
          </OuterPage>
        ),
      },
      {
        path: "/forgot-password",
        element: (
          <OuterPage>
            <ForgotPasswordPage />
          </OuterPage>
        ),
      },
    ],
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  // ************************************************************************ ADMIN *****************
  {
    path: "/admin",
    element: <SideBarAdmin />,
    children: [
      {
        path: "",
        element: <HomePageInAdmin />,
      },
      {
        path: "brand",
        element: <BrandPage />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
      {
        path: "products/create",
        element: <CreateProductForm />,
      },
      {
        path: "products/edit/:productId",
        element: <EditProductForm />,
      },
      {
        path: "products/:productId",
        element: <ProductIdForm />,
      },
      {
        path: "inventory",
        element: <TransactionPage />,
      },
      {
        path: "users",
        element: <UserPage />,
      },
      {
        path: "users/:userId",
        element: <UserIdForm />,
      },
      {
        path: "shipping",
        element: <ShippingPage />,
      },
    ],
    // ************************************************************************ ADMIN *****************
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
