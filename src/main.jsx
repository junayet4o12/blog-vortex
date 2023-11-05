import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import MyRouts from './Routs/MyRouts.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>

        <RouterProvider router={MyRouts} />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </React.StrictMode>
    </QueryClientProvider>

  </div>,
)
