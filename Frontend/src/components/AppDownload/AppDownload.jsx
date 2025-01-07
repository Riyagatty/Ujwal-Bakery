import React, { useState, useRef } from 'react';
import './AppDownload.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Stage, Layer, Circle, Text, Star, Rect } from 'react-konva';

const AppDownload = ({ url }) => {
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Cakes",
    });
    const [elements, setElements] = useState([]); // Stores the added elements like cherries or text
    const [customText, setCustomText] = useState(""); // Stores user-entered custom text
    const [customTextPosition, setCustomTextPosition] = useState({ x: 150, y: 150 }); // Position of the custom text
    const [image, setImage] = useState(null); // To store the image of the cake design
    const [cakeColor, setCakeColor] = useState("#f5c6a5"); // Default cake color
    const [fontSize, setFontSize] = useState(18); // Default font size
    const stageRef = useRef(); // Ref for the Konva stage

    const saveCanvas = () => {
        const dataURL = stageRef.current.toDataURL(); // Get the image of the canvas
        setImage(dataURL); // Store the image in the state
    };

    // Handler for form inputs
    const onchangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Add a cherry to the design
    const addCherry = () => {
        setElements([...elements, { type: "cherry", x: 150, y: 150 }]);
    };

    // Add a star element
    const addStar = () => {
        setElements([...elements, { type: "star", x: 150, y: 150 }]);
    };

    // Add a sprinkle to the design
    const addSprinkle = () => {
        setElements([...elements, { type: "sprinkle", x: 150, y: 150 }]);
    };

    // Handle drag of elements
    const handleDrag = (index, e) => {
        const newElements = [...elements];
        newElements[index].x = e.target.x();
        newElements[index].y = e.target.y();
        setElements(newElements);
    };

    // Handle custom text drag
    const handleTextDrag = (e) => {
        setCustomTextPosition({ x: e.target.x(), y: e.target.y() });
    };

    // Change cake color using a color picker
    const changeCakeColor = (color) => {
        setCakeColor(color);
    };

    // Adjust font size
    const handleFontSizeChange = (event) => {
        setFontSize(event.target.value);
    };

    // Submit handler
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);

        // Convert the canvas image (dataURL) into a Blob and append it
        if (image) {
            const blob = await fetch(image).then(res => res.blob());
            formData.append("image", blob, "cake-design.png");
        }

        try {
            const response = await axios.post(`http://localhost:4000/api/food/add`, formData);
            if (response.data.success) {
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category: "Cakes",
                });
                setElements([]);
                setCustomText("");
                setImage(null);
                toast.success(response.data.message);
            } else {
                console.error("Failed to submit the data:", response.data.message);
            }
        } catch (error) {
            console.error("Error occurred while submitting the data:", error.message);
        }
    };

    return (
        <div className="app-download">
            <h1 className="customize-title">Customize Your Cake Design</h1>
            <form className="flex-col" onSubmit={onSubmitHandler}>
                <div className="cake-design flex-col">
                    <Stage width={600} height={400} ref={stageRef} style={{ border: '1px solid black', margin: '0 auto' }}>
                        <Layer>
                            {/* Cake Base */}
                            <Circle x={300} y={200} radius={140} fill={cakeColor} />

                            {/* Elements like cherries or stars */}
                            {elements.map((element, index) => (
                                element.type === "cherry" ? (
                                    <Circle
                                        key={index}
                                        x={element.x}
                                        y={element.y}
                                        radius={10} // Size of cherry
                                        fill="red"
                                        draggable
                                        onDragMove={(e) => handleDrag(index, e)}
                                    />
                                ) : element.type === "star" ? (
                                    <Star
                                        key={index}
                                        x={element.x}
                                        y={element.y}
                                        numPoints={5}
                                        innerRadius={10}
                                        outerRadius={20}
                                        fill="yellow"
                                        draggable
                                        onDragMove={(e) => handleDrag(index, e)}
                                    />
                                ) : (
                                    <Circle
                                        key={index}
                                        x={element.x}
                                        y={element.y}
                                        radius={5} // Size of sprinkle
                                        fill="white"
                                        draggable
                                        onDragMove={(e) => handleDrag(index, e)}
                                    />
                                )
                            ))}

                            {/* Custom Text */}
                            {customText && (
                                <Text
                                    x={customTextPosition.x}
                                    y={customTextPosition.y}
                                    text={customText}
                                    fontSize={fontSize}
                                    fontFamily="cursive"  // Cursive font family
                                    fill="black"
                                    draggable
                                    onDragMove={handleTextDrag}
                                />
                            )}
                        </Layer>
                    </Stage>
                    <div className="design-tools">
                        <button type="button" onClick={addCherry}>Add Cherry</button>
                        <button type="button" onClick={addStar}>Add Star</button>
                        <button type="button" onClick={addSprinkle}>Add Sprinkle</button>
                        <button type="button" onClick={saveCanvas}>Save Design</button>
                    </div>
                    <div className="cake-color-options">
                        <p>Choose Cake Color</p>
                        <input 
                            type="color" 
                            value={cakeColor} 
                            onChange={(e) => changeCakeColor(e.target.value)} 
                        />
                    </div>
                    <div className="font-size-slider">
                        <p>Adjust Font Size</p>
                        <input 
                            type="range" 
                            min="10" 
                            max="50" 
                            value={fontSize} 
                            onChange={handleFontSizeChange} 
                        />
                    </div>
                </div>
                <div className="custom-text-input flex-col">
                    <p>Custom Text</p>
                    <input
                        type="text"
                        value={customText}
                        onChange={(e) => setCustomText(e.target.value)}
                        placeholder="Type your text here"
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
                        style={{ width: "100%" }}
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
                <button type="submit" className="add-btn">Order</button>
            </form>
        </div>
    );
};

export default AppDownload;
