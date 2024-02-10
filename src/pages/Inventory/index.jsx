import React, { useState } from 'react';
import Sidebar from '@/layout/components/sidebar';
import MaterialTable from '@/Tables/material/MaterialTable';

const index = () => {
  const [showMaterialTable, setShowPartnersTable] = useState(false);

  const toggleMaterialTable = () => {
    setShowPartnersTable(!showMaterialTable);
  };

  return (
    <div className="flex overflow-hidden">
      {/* <Sidebar togglePartnersTable={toggleMaterialTable} />
      <div className="content">
        {showMaterialTable ? (
          <div className="flex">
            <MaterialTable />
          </div>
        ) : null}
      </div> */}
    </div>
  );
};

export default index;