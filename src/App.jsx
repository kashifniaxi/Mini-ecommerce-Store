import React, { Component, useEffect } from 'react';
import "./index.css"
import Category from './Category';
import axios from 'axios';

const Home = () => {


  let [finalcategory,setfinalcategory]=React.useState([]);
  let [FinalproductItems,setFinalproductItems]=React.useState([]);
  let [catname,setcatname]=React.useState('');
  const getcategory = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then((response) => response.data)
      .then((finalresponse) => {
        setfinalcategory(finalresponse);
    });
  }



  const getproductItems=()=> {
    axios.get('https://dummyjson.com/products')
      .then((response) => response.data)
      .then((finalresponse) => {
        setFinalproductItems(finalresponse.products);
      });
  }



  useEffect(() => {
    getcategory();
    getproductItems();
  }, []);


  useEffect(() => {
    if(catname !== ''){ 
      axios.get(`https://dummyjson.com/products/category/${catname}`)
      .then((response) => response.data)
      .then((finalresponse) => {
        setFinalproductItems(finalresponse.products);
      });
      
  }
  }, [catname])

 let Pitems=FinalproductItems.map((items,index)=>{
  return(    <ProductItems key={index} item={items} />
  )
 })


  return (
    <div className='py-[48px]'>
      <div className='max-w-[1320px] mx-auto'>
        <h1 className='text-[30px] text-center font-bold pb-4'>Our Products</h1>
        <div className='grid grid-cols-[30%_1fr_1fr] gap-[20px] mt-[30px]'>
          {/* Category Section */}
          <div className='min-h-[300px]'>
            <Category finalcategory={finalcategory} setcatname={setcatname} />
          </div>
          
          {/* Products Section */}
          <div className='grid grid-cols-3 gap-4  w-max'>
            {Pitems}
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

function ProductItems({item}) {
  
return(
  <div className='shadow-lg text-center pb-4'>
              <img className='w-[100%] h-[150px]' 
                src={item.thumbnail} 
              />
              <h4>{item.title} </h4>
              <b>{item.price}</b>
              </div>
)
}
