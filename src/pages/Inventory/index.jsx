import React, { Fragment } from 'react'
import { inventoryCards, inventoryLandingPageTable, inventoryLandingPagebarchart } from '../../constants/inventory'
import { Card, CardHeader } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid'
import Container from '@/components/Container'
import { BarChart, Bar, Cell, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, CartesianGrid } from "recharts";
import { Glasses, ShoppingBag } from 'lucide-react'

const index = () => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="">
      <h4 className="text-xl lg:text-3xl text-gray-600 font-bold mb-4 shadow-xl w-fit p-2 rounded-lg">Inventory Management</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {inventoryCards.map((card, idx) => (
          <Fragment key={idx}>
            <Link to={card.link}>
              <Card className="bg-brandGray shadow-xl">
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between ">
                    <div className="w-24 h-20 bg-brandBrown bg-opacity-75 flex items-center justify-center rounded-xl">
                      <img src={card.img} alt="" />
                    </div>
                    <div className="flex flex-col space-y-4 mx-auto">
                      <p className="text-gray-600 font-medium">{card.name}</p>
                      <p className=" text-2xl font-bold">{card.number}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </Fragment>
        ))}
      </div>

      <div className="lg:flex lg:space-x-8 my-5">
        <div className="flex flex-col space-y-7 lg:w-4/12 w-full">
          <Card className="p-5 shadow-xl">
            <h4 className="text-xl lg:text-xl text-gray-600 font-semibold mb-2">Manage Inventories</h4>
            <Link className="flex mb-3 px-3">
              <ShoppingBag className="w-6 h-6 mr-4" />
              <p className="font-medium">Materials</p>
            </Link>
            <Link className="flex px-3">
              <Glasses className="w-6 h-6 mr-4" />
              <p className=" font-medium">Accessories</p>
            </Link>
          </Card>

          <Card className="p-2 py-4 shadow-xl">
            <h4 className="text-xl lg:text-xl text-gray-600 font-semibold mb-4">Top Selling Counties</h4>
            <BarChart
              width={450}
              height={200}
              data={inventoryLandingPagebarchart}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: "top" }}>
                {inventoryLandingPagebarchart.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </Card>
        </div>
        <Container className="lg:w-8/12 rounded-lg mx-auto py-3 ">
          <h4 className="text-xl lg:text-xl text-gray-600 font-semibold mb-4 ">Top Selling Products</h4>

          <div className="h-96 overflow-y-auto shadow-xl custom-scrollbar">
            <DataGrid
              className="shadow-xl overflow-x-hidden"
              rows={inventoryLandingPageTable.rows}
              columns={inventoryLandingPageTable.columns}
              pageSize={5}
            />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default index