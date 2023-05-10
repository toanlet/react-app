import { createBrowserRouter } from 'react-router-dom';
import App from 'src/App';
import { SignIn } from 'src/components/sign-in';
import { SignUp } from 'src/components/sign-up';
import { ErrorPage } from 'src/components/error-page';
import Categories from 'src/components/categories';
import { About } from 'src/components/about';
import { AuthLayout } from 'src/layouts/auth';
import { LandingPage } from 'src/components/landing';
import { ProtectRouter } from './protect';
import Todos from 'src/components/todo';
import Detail from 'src/components/categories/detail';
import { CardList } from 'src/components/card';
const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <ProtectRouter />,
        children: [
          { path: '/categories', element: <Categories /> },
          { path: '/todo', element: <Todos /> },
          { path: '/detail', element: <Detail /> },
          { path: '/card', element: <CardList /> },
        ],
      },
      { path: '/about', element: <About /> },
      { path: '/', element: <LandingPage /> },
    ],
  },

  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
];

export const rootRouter = createBrowserRouter(routes);
