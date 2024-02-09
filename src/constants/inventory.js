import invoice from '../assets/invoice.png';
import delivered from "../assets/delivered.png";
import shipped from "../assets/shipped.png";
import picked from "../assets/picked.png";

export const inventoryCards = [
  {
    img: picked,
    name: "Picked",
    number: "1256",
    link: "/inventory/picked",
  },
  {
    img: shipped,
    name: "Shipped",
    number: "12",
    link: "/inventory/shipped",
  },
  {
    img: delivered,
    name: "Delivered",
    number: "15",
    link: "/inventory/delivered",
  },
  {
    img: invoice,
    name: "Invoice",
    number: "07",
    link: "/inventory/invoice",
  },
];

export const inventoryLandingPageTable = {
  columns: [
    { field: "id", headerName: "ID", width: 50 },
    { field: "productName", headerName: "Product Name", width: 200 },
    { field: "price", headerName: "Price", width: 100 },
    { field: "quantity", headerName: "Quantity", width: 100 },
    { field: "amount", headerName: "Amount", width: 100 },
    { field: "status", headerName: "Status", width: 100 },
  ],
  rows: [
    { id: 1, productName: "Leather Material", price: 15.99, quantity: 50, amount: 799.5, status: "Available" },
    { id: 2, productName: "Canvas Fabric", price: 8.5, quantity: 100, amount: 850, status: "Low Stock" },
    { id: 3, productName: "Metal Zippers", price: 2.25, quantity: 200, amount: 450, status: "In Stock" },
    { id: 4, productName: "Polyester Thread", price: 5.0, quantity: 150, amount: 750, status: "Available" },
    { id: 5, productName: "Aurora Borealis", price: 35.99, quantity: 20, amount: 719.8, status: "Limited Edition" },
    { id: 6, productName: "Cotton Lining", price: 4.5, quantity: 120, amount: 540, status: "In Stock" },
    { id: 7, productName: "Metal Buckles", price: 3.75, quantity: 80, amount: 300, status: "Available" },
    { id: 8, productName: "Velvet Fabric", price: 12.99, quantity: 30, amount: 389.7, status: "Low Stock" },
  ],
};

export const inventoryLandingPagebarchart = [
  {
    name: "Nairobi",
    uv: 9000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Kisumu",
    uv: 3600,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Eldoret",
    uv: 2050,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Mombasa",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Kitui",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Taita Taveta",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Nakuru",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];