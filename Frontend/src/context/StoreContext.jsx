import { createContext, useEffect, useState } from 'react';
import axios from 'axios'

export const StoreContext = createContext(null);

const StoreProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url="http://localhost:4000"
    const [token,setToken] = useState("");
    const [food_list,setFoodList]=useState([])

    const addToCart = async (itemId) => {
        try {
            console.log("addToCart called with itemId:", itemId);
    
            // Validate the itemId
            if (!itemId) {
                console.error("Invalid itemId passed to addToCart. itemId:", itemId);
                return; // Exit early if itemId is undefined or invalid
            }
    
            // Update the cart locally
            setCartItems((prev) => {
                const updatedCart = { ...prev };
                if (!updatedCart[itemId]) {
                    updatedCart[itemId] = 1; // Add the item with quantity 1
                } else {
                    updatedCart[itemId] += 1; // Increment the item quantity
                }
                return updatedCart;
            });
    
            // Update the cart on the server if the token exists
            if (token) {
                const response = await axios.post(
                    `${url}/api/cart/add`,
                    { itemId },
                    { headers: { token } }
                );
                console.log("Cart updated successfully on the server:", response.data);
            } else {
                console.warn("No token available; skipping server update.");
            }
        } catch (error) {
            console.error("Error in addToCart:", error.response ? error.response.data : error.message);
        }
    };
    
    const removeFromCart = async(itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] - 1 // Decrement the item count
        }));
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})


        }
    };

    const fetchFoodList=async ()=>{
        const response=await axios.get(url+"/api/food/list");
        setFoodList(response.data.data)
    }

    const loadCartData=async(token)=>{
        const response=await axios.post(url+"/api/cart/get",{},{headers:{token}});
        console.log(response);
        setCartItems(response.data.cartData);
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartItems[item];

            }

        }
        return totalAmount;
    }

    useEffect(()=>{
        
        async function loadData(){
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
