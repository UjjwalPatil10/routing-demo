import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const ProductForm = ({handleProducts, handleClose, opendialog}) => {
    const[productname, setProductName] = useState("");
    const[productprice, setProductPrice] = useState();
    const[productdescription, setProductDescription] = useState("");
    const[products, setProducts] = useState([])
    
  
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newProduct = {productname, productprice, productdescription};
        setProducts([...products, newProduct])
        setProductName("");
        setProductPrice();
        setProductDescription("");
        handleProducts(products)
        handleClose(false)  //lift
        localStorage.setItem("prods", JSON.stringify(products))
        console.log("Product: ", products);
    }
    
    return ( 
        <Dialog open={opendialog}>
        <DialogContent>
        
        <Container component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
                autoFocus
                name="productname"
                id="id"
                label="Product Name"
                type="text"
                fullWidth
                variant="outlined"
                value={productname}
                onChange={(e) => setProductName(e.target.value)}
                />
            </Grid>
                <Grid item xs={12}>
                <TextField
                autoFocus
                name="productprice"
                id="id"
                label="Product Price"
                type="number"
                fullWidth
                variant="outlined"
                value={productprice}
                onChange={(e) => setProductPrice(e.target.value)}
                />
            </Grid>
                <Grid item xs={12}>
                <TextField
                autoFocus
                name="productdescription"
                id="id"
                label="Product Description"
                type="text"
                fullWidth
                variant="outlined"
                value={productdescription}
                onChange={(e) => setProductDescription(e.target.value)}
                />
            </Grid>
                <Grid item xs={12}>
                <Button variant='contained' type="submit">Submit</Button>
            </Grid>
            </Grid>
        </Container>
        </DialogContent>
        </Dialog>
     );
}

export default ProductForm;