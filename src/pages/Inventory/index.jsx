import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MaterialTable from "@/Tables/inventory/material/MaterialTable";
import AccessoryTable from "@/Tables/inventory/accessory/AccessoryTable";

const InventoryTabs = () => {
  return (
    <Tabs defaultValue="materials" className="">
      <TabsList className="grid w-3/5 mx-auto grid-cols-2">
        <TabsTrigger value="materials">Materials</TabsTrigger>
        <TabsTrigger value="accessories">Accessories</TabsTrigger>
      </TabsList>
      <TabsContent value="materials">
        <MaterialTable />
      </TabsContent>
      <TabsContent value="accessories">
        <AccessoryTable />
      </TabsContent>
    </Tabs>
  );
};

export default InventoryTabs;
