import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets'; // Ensure this file exists and is correctly exported
import axios from "axios";
import { toast } from 'react-toastify';

const Add = ({url}) => {
   
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "", 
        price: "",
        category: "Cakes", // Default category
    });

    // Handler for form inputs
    const onchangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((prevData) => ({ ...prevData, [name]: value })); // Updated variable name
    };

    // Form submission handler
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description); // Updated typo
        formData.append("price", Number(data.price)); // Ensure price is sent as a number
        formData.append("category", data.category);
        formData.append("image", image);
        
        try {
            const response = await axios.post(`${url}/api/food/add`, formData);
            if (response.data.success) {
                // Reset form data on successful submission
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category: "Cakes",
                });
                setImage(false);
                toast.success(response.data.message)
            } else {
                console.error("Failed to submit the data:", response.data.message);
            }
        } catch (error) {
            console.error("Error occurred while submitting the data:", error.message);
        }
    };

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex-col'>
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img
                            src={image ? URL.createObjectURL(image) : assets.upload_area}
                            alt="Upload Placeholder"
                        />
                    </label>
                    <input
                        onChange={(e) => setImage(e.target.files[0])}
                        type="file"
                        id="image"
                        hidden
                        required
                    />
                </div>
                <div className="add-product-name flex-col">
                    <p>Product Name</p>
                    <input
                        onChange={onchangeHandler}
                        value={data.name}
                        type="text"
                        name="name"
                        placeholder="Type here"
                        required
                    />
                </div>
                <div className="add-product-description flex-col">
                    <p>Product Description</p>
                    <textarea
                        onChange={onchangeHandler}
                        value={data.description}
                        name="description"
                        rows="6"
                        placeholder="Write content here"
                        required
                    ></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product Category</p>
                        <select
                            onChange={onchangeHandler}
                            name="category"
                            value={data.category}
                            required
                        >
                            <option value="" disabled>Select Category</option>
                            <option value="Cakes">Cakes</option>
                            <option value="Cookies">Cookies</option>
                            <option value="Pastries">Pastries</option>
                            <option value="Breads">Breads</option>
                            <option value="Cupcakes">Cupcakes</option>
                            <option value="Desserts">Desserts</option>
                            <option value="Sweets">Sweets</option>
                            <option value="Savory">Savory</option>
                            <option value="Rolls">Rolls</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product Price</p>
                        <input
                            onChange={onchangeHandler}
                            value={data.price}
                            type="number"
                            name="price"
                            placeholder="Enter price"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="add-btn">ADD</button>
            </form>
        </div>
    );
};

export default Add;
