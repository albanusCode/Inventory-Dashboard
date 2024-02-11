import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import SearchBar from '@/components/SearchBar';
import accessorysData from '@/data/inventorydata/accessory';
import { FolderCog, ArrowUpDown } from 'lucide-react';
import { LuChevronsUpDown } from "react-icons/lu";
import { Button } from '../../../components/ui/button';
import { 
    DropdownMenu,
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuLabel,  
    DropdownMenuTrigger 
} from '../../../components/ui/dropdown-menu';
import { AccessoryData } from './AccessoryData';

const AccessoryTable = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(accessorysData);

  console.log(filteredData)

  useEffect(() => {
    const updatedData = accessorysData.filter((accessory) => {
      const matchesSearch = accessory.name.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesSearch;
    });

    setFilteredData(updatedData);
  }, [searchTerm]);
  // const navigate = useNavigate();
  // const materialSelected = (material) => {
  //   navigate(`/material/${material.id}`);
  // };
  const columns = [
    {
        accessorKey: "name",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Accessory
              <LuChevronsUpDown className='ml-2 h-4 w-4'/>
            </Button>
          )
        },
      },
    {
      accessorKey: "code",
      header: 'Code',
    },
    
    {
      accessorKey: "units",
      header: 'Units',
    },
    {
      accessorKey: "quantity",
      header: 'Quantity',
    },
    {
      accessorKey: "value",
      header: 'Value',
    },
    {
      accessorKey: "date",
      header: 'Date',
    },
    {
      header: 'Actions',
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 font-bold text-xl p-4">
              ...
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Select Action</DropdownMenuLabel>
              {/* <DropdownMenuItem>
              <Button onClick={() => navigate(`/material/${row.original.id}`)}>
                View
              </Button>
              </DropdownMenuItem> */}
              <DropdownMenuItem>
                <Button variant="outline">
                    Update
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button variant='destructive'>
                    Delete
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ];

  return (
    <div className="w-full h-screen md:pl-6">
        <div className="pb-4 px-6 rounded-md w-full md:w-[95vw] min-w-screen">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <AccessoryData 
              data={filteredData} 
              columns={columns} 
            />
        </div>
    </div>
  );
};

export default AccessoryTable;