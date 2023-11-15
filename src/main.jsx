import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import MyRouts from './Routs/MyRouts.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import AuthProviders from './Authantication/AuthProviders.jsx';
import './all.css'
import AnimatedCursor from 'react-animated-cursor';
import ScrollToTop from 'react-scroll-to-top';
import { FaArrowUp } from 'react-icons/fa6';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <QueryClientProvider client={queryClient}>
    <ScrollToTop 
            className="scroll-btn"
            smooth={true}
            top={30}
            color="white"
            component={<p className="arrow-button"><FaArrowUp></FaArrowUp></p>}
            style={{background: 'black', borderRadius: '100%', width:'60px',
        height:'60px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '20'}}
             />
    <AnimatedCursor
            
            showSystemCursor={true}
                innerSize={0}
                outerSize={40}
                color='9, 9, 9'
                outerAlpha={0.4}
                innerScale={1}
                outerScale={3}
                trailingSpeed={5}
            />
      <AuthProviders>
        <React.StrictMode>
          <RouterProvider router={MyRouts} />
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </React.StrictMode>
      </AuthProviders>
    </QueryClientProvider>

  </div>,
)
