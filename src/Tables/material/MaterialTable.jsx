import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import SearchBar from '@/components/SearchBar';
import {MaterialData} from './MaterialData'
import materialsData from '@/data/inventorydata/materials';
import { FolderCog, ArrowUpDown } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { 
    DropdownMenu,
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuLabel,  
    DropdownMenuTrigger 
} from '../../components/ui/dropdown-menu';

const MaterialTable = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(materialsData);

  console.log(filteredData)

  useEffect(() => {
    const updatedData = materialsData.filter((material) => {
      const matchesSearch = material.name.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesSearch;
    });

    setFilteredData(updatedData);
  }, [searchTerm]);
  const navigate = useNavigate();
  const materialSelected = (material) => {
    navigate(`/material/${material.id}`);
  };
  const columns = [
    {
        accessorKey: "name",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Material
              <ArrowUpDown className="ml-2 h-4 w-4" />
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
              <Button variant="ghost" className="h-8 p-2">
              <FolderCog />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Select Action</DropdownMenuLabel>
              <DropdownMenuItem>
              <Button onClick={() => navigate(`/material/${row.original.id}`)}>
                View
              </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button variant="secondary">
                    Suspend
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
    <div className="w-full h-screen z-[-1] md:pl-12 pt-12">
        <div className="pb-4 px-6 rounded-md w-full md:w-[95vw] min-w-screen">
            <div className="my-6 flex justify-between items-center bg-gray-800 border p-3 rounded-md">
            <h2 className="flex text-xl font-semibold text-white gap-6">
                <button className='bg-blue-800 p-2 rounded-md hover:bg-blue-300 cursor-pointer'>Materials</button>
                <button className='bg-blue-800 p-2 rounded-md hover:bg-blue-300 cursor-pointer'>Accessories</button>
            </h2>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <MaterialData 
              data={filteredData} 
              columns={columns} 
              materialSelected={materialSelected}
            />
        </div>
    </div>
  );
};

export default MaterialTable;