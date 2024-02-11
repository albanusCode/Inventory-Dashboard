import React, { useState } from 'react';
import Navbar from './components/navbar';
import InventoryTabs from '@/Tables/tabletabs/inventoryTabs';
import index from '@/pages/Home';
import Sidebar from './components/sidebar';
import { Outlet } from 'react-router-dom';
import Container from '@/components/Container';
import MaterialTable from '@/Tables/inventory/material/MaterialTable';

const MainLayout = () => {
  const [showMaterialTable, setShowMaterialTable] = useState(true); // Set initial state to true
  const [showHome, setShowHome] = useState(false);

  const toggleMaterialTable = () => {
    setShowMaterialTable(!showMaterialTable);
  };

  const toggleHome = () => {
    setShowHome(!showHome);
  };

  return (
    <div className="h-full overflow-hidden mb-2 flex flex-col main-container">
      <Navbar />
      <div className="flex flex-1 space-x-2">
        <Sidebar toggleMaterialTable={toggleMaterialTable} toggleHome={toggleHome} />
        <div className="content">
          {showMaterialTable ? (
            <div className="">
              <InventoryTabs />
            </div>
          ) : null}
          {showHome ? <index /> : null}
        </div>
        <Container className=" mt-20 w-full">
          <Outlet />
        </Container>
      </div>
    </div>
  );
};

export default MainLayout;