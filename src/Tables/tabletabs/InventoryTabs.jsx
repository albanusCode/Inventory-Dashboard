import React, { useState } from 'react';
import AccessoryTable from '../inventory/accessory/AccessoryTable';
import MaterialTable from '../inventory/material/MaterialTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InventoryTabs = () => {
  const [activeTab, setActiveTab] = useState(" ");

  return (
    <div className="">
      <div className=''>
        <div className=''>
          <Tabs defaultValue="Materials" className="p-2 rounded-t-lg bg-gray-100 flex">
            <div className="p-6">
              <TabsList className='flex justify-start mx-12 w-[1150px] mt-10 gap-8 bg-zinc-400 p-7'>
                <TabsTrigger value="materials" className={`p-2 ${activeTab === 'materials' ? 'bg-blue-500' : 'bg-blue-800 text-white'}`} onClick={() => setActiveTab('materials')}>Materials</TabsTrigger>
                <TabsTrigger value="accessories" className={`p-2 ${activeTab === 'accessories' ? 'bg-blue-500' : 'bg-blue-800 text-white'}`} onClick={() => setActiveTab('accessories')}>Accessories</TabsTrigger>
              </TabsList>
              {activeTab === " " && (
                  <TabsContent value="materials" isActive={activeTab === 'materials'}>
                    <MaterialTable />
                  </TabsContent>
                )}
                <TabsContent value="materials" isActive={activeTab === 'materials'}>
                  <MaterialTable />
                </TabsContent>
                <TabsContent value="accessories" isActive={activeTab === 'accessories'}>
                  <AccessoryTable />
                </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default InventoryTabs;