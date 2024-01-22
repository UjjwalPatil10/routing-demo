import React, { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables'; // npm i mui-datatables
import Button from '@mui/material/Button';
import ProductForm from './ProductForm';

const ProductTable = () => {
    const[product, setProduct] = useState([]);
    const[data, setData] = useState();
    const[open, setOpen] = useState(false);
    
    const handleProducts = (prod)=>{ 
        // setData(prod)
    }
    const handleOpen =() =>{
    setOpen(true)
    }
    const handleClose =(close) =>{   //lift stateup
    setOpen(close)
    }
    const handleSubmit = (newProduct) =>{  //lift stateup
       setProduct([...product, newProduct]) 
    }

    useEffect(()=>{
         setData(JSON.parse(localStorage.getItem("prods")))
    },[data])

    const columns =[
        {
            name: "productid",
            label: "ID",
        },
        {
            name: "productname",
            label: "Product Name",
            Options: {
                sort:true,
                filter:false,
            },
        },
        {
            name: "price",
            label: "Price",
            Options: {
                sort:true,
                filter:false,
            },
        },
        {
            name: "productdescription",
            label: "Product Description",
            Options: {
                sort:true,
                filter:true,
            },
        },
    ]
    return ( 
        <>
        <Button onClick={handleOpen} variant="contained">Add more Product</Button>
        <MUIDataTable title="Product List" columns={columns} data={data}/>
        <ProductForm handleProducts={handleProducts}  opendialog={open} handleClose={handleClose} onsubmit={handleSubmit}/>    
        </>
     );
}
 
export default ProductTable;

// data={data ? data : users} columns={columns}
// handleProducts={handleProducts}