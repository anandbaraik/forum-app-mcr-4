import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./components/RootLayout";
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailsPage";

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: (
      <RootLayout />
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/post/:id',
        element: <PostDetailPage />,
      }
    ],
  }
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}/>
    </ChakraProvider>
  );
}

export default App;
