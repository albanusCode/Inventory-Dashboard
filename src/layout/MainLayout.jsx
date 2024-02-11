import React, { useState } from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import { Outlet } from 'react-router-dom';
import Container from '@/components/Container';

const MainLayout = () => {
  return (
    <div className="h-full overflow-hidden mb-2 flex flex-col main-container">
      <Navbar />
      <div className="flex flex-1 space-x-2">
        <Sidebar />
        <Container className=" mt-20 w-full">
          <Outlet />
        </Container>
      </div>
    </div>
  );
};

export default MainLayout;