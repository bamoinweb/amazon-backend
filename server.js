const express=require('express');
const fs=require('fs');
const app=express();
app.use(express.json());
app.get('/products',(req,res)=>{
   const products=JSON.parse(fs.readFileSync('products.json','utf8'));
   res.json(products);
});
const port=process.env.port||3000;
app.listen(port,()=>{
   console.log(`Server is running on http://localhost:${port}`);
});