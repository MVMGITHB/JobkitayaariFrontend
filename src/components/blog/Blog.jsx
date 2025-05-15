
'use client'
import React, { useEffect, useState } from 'react'
import { BlogHome } from './BlogHome'
import axios from 'axios'
import base_url from '../helper/helper'
export const Blog = ({filters}) => {

    const [data,setData]  =useState([])

   const  fetchdata  = async()=>{
        try {
            const response = await axios.get(
    `${base_url}/api/blog/getAllBlog`
     );

     if(filters==='carrier'){
       setData(response.data)
     }else{
          const data1 = response?.data?.filter((item)=>{
      return item.category.slug === filters
  })

  if(data1){
        setData(data1)
    }
  
     }
  
    
        } catch (error) {
            console.log(error) 
        }
    }


    
useEffect(()=>{
   fetchdata()
},[filters])
     
    return (
        <div>
            <BlogHome data={data}/>
        </div>
    )
}
