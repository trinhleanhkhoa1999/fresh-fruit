import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { ThemeProvider } from './ThemeProvider';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import { NotFound } from './pages/NotFound';
import BlogPage from './pages/Blog';
import ShopPage from './pages/Shop';
import { LoginPage } from './pages/Login';
import { RegisterPage } from './pages/Register';
import Loading from './components/Loading';
import DetailPage from './pages/Detail';
import DashboardPage from './pages/Admin/Dashboard';
import CRUDProduct from './pages/Admin/CRUD/CRUDProduct';
import CRUDUSer from './pages/Admin/CRUD/CRUDUser';

const Layout = () => (
  <div className="layout-app">
    <Header />
    <Outlet />
    <Footer />
  </div>
);
export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: 'about',
          element: <AboutPage />,
        },
        {
          path: 'contact',
          element: <ContactPage />,
        },
        {
          path: 'blog',
          element: <BlogPage />,
        },
        {
          path: 'shop',
          element: <ShopPage />,
        },
        {
          path: '/detail',
          element: <DetailPage />,
        },
      ],
    },

    {
      path: '/login',
      element: <LoginPage />,
    },

    {
      path: '/register',
      element: <RegisterPage />,
    },
    {
      path: '/dashboard',
      element: <DashboardPage />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <CRUDProduct /> },
        {
          path: 'CRUDProduct',
          element: <CRUDProduct />,
        },
        {
          path: 'CRUDUser',
          element: <CRUDUSer />,
        },
      ],
    },
  ]);

  const [loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(true);
  }, 1000);

  return (
    <ThemeProvider>{loading ? <RouterProvider router={router} /> : <Loading />} </ThemeProvider>
  );
}
