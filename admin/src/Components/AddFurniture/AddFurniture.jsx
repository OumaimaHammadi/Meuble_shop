import React, { useState } from 'react'
import './AddFurniture.css'
import upload_area from '../../assets/upload_area.svg'


const AddProduct = () => {

const [image,setImage]=useState(false)

const imageHandler=(e)=>{
  setImage(e.target.files[0])


}

const [productDetails,setProductDetails]= useState({
        name:"",
        image:"",
        category:"Living room",
        new_price:"",
        old_price:""
})

const changeHandler=(e)=>{
      setProductDetails({...productDetails,[e.target.name]:e.target.value})
}

const Add_Product =async()=>{
  console.log(productDetails)
  let responseData
  let product = productDetails

  let formData = new FormData()
  formData.append('furniture',image)

   await fetch(`${BASE_URL}/images/upload`,{
    method:'POST',
    headers:{
      Accept:'application/json',

    },
    body:formData,

  }).then((resp)=> resp.json())
  .then((data)=>{
    responseData = data
  })


    if (responseData.success && responseData.data?.url) {

         product.image = responseData.data.url;

        // product.image= responseData.image_url


        console.log("product.image",product.image)
        console.log(product)

        await fetch(`${BASE_URL}/products/addproduct`,{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',

        },
        body:JSON.stringify(product)

      }).then((resp)=> resp.json()).then((data)=>{
        data.success?alert("Item Added"):alert("Failed")
           window.location.replace("/listproduct")
      })
  }
}

  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Furniture title </p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='type here'/>
      </div>

      <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <p>Price </p>
            <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='type here'/>
          </div>

          <div className="addproduct-itemfield">
            <p>Offer Price </p>
            <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='type here'/>
          </div>

          </div>

        
        <div className="addproduct-itemfield">
          <p>Furniture Category </p>
          <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector' >
                <option value="Living room">
                  Living room
                </option>

                <option value="Bedroom">
                  Bedroom
                </option>

                <option value="Dining room">
                  Dining room
                </option>

                <option value="Desk">
                  Desk
                </option>

                <option value="Kitchen">
                  Kitchen
                </option>

                <option value="Bathroom">
                  Bathroom
                </option>

                <option value="Outside">
                  Outside
                </option>

             

                

          </select>
        </div>

        <div className="addproduct-itemfield">
          <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumail-img' alt="" />

          </label>
          <input  onChange={imageHandler} type='file' name='image' id='file-input' hidden />
        
        
        </div>
        <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
        

      </div>

  )
}

export default AddProduct