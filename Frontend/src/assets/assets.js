import Home from '../pages/Home/Home';
import bakery from './bakery.png';
import logo from './logo.png';
import looking from './looking.png';
import userlogin from './userlogin.png';
import menu1 from './menu1.jpg';
import menu2 from './menu2.jpg';
import menu4 from './menu4.jpg';
import menu5 from './menu5.jpg';
import menu6 from './menu6.jpg';
import menu7 from './menu7.jpg';
import menu8 from './menu8.jpg';
import menu9 from './menu9.jpg';
import food1 from './food1.jpg';
import rating_starts from './rating_starts.png';
import add_icon_white from './add_icon_white.png';
import remove_icon_red from './remove_icon_red.png';
import add_icon_green from './add_icon_green.png';
import facebook_icon from './facebook_icon.png';
import twitter_icon from './twitter_icon.png';
import linkedin_icon from './linkedin_icon.png';
import app_store from './app_store.png';
import play_store from './play_store.png';
import cross_icon from './cross_icon.png';
import bag_icon from './bag_icon.png';
import profile_icon from './profile_icon.png';
import logout_icon from './logout_icon.png';
import parcel_icon from './parcel_icon.png';
export const assets = {
    bakery,
    logo,
    looking,
    userlogin,
    rating_starts,
    add_icon_white,
    remove_icon_red,
    add_icon_green,
    facebook_icon,
    twitter_icon,
    linkedin_icon,
    play_store,     
    app_store,
    cross_icon,
    bag_icon,
    profile_icon,
    logout_icon,
    parcel_icon
};

export const menu_list = [
    {
        menu_name: "Cakes",
        menu_image: menu1
    },
    {
        menu_name: "Cookies",
        menu_image: menu2
    },
    {
        menu_name: "Pastries",
        menu_image: menu2
    },
    {
        menu_name: "Breads",
        menu_image: menu4
    },
    {
        menu_name: "cupcakes",
        menu_image: menu5
    },
    {
        menu_name: "Desserts",
        menu_image: menu6
    },
    {
        menu_name: "Sweets",
        menu_image: menu7
    },
    {
        menu_name: "Savory",
        menu_image: menu8
    },
    {
        menu_name: "Rolls",
        menu_image: menu9
    },


];

export const food_list = [
    {
        _id: "1",
        name: "Chocolate Fudge Cake",
        image: food1,
        price: 950,
        description: "Rich and gooey chocolate fudge cake with a smooth texture.",
        category: "Cakes"
    },
    {
        _id: "2",
        name: "Vanilla Sponge Cake",
        image: food1,
        price: 850,
        description: "Light and fluffy vanilla sponge cake, perfect for all occasions.",
        category: "Cakes"
    },

    // Cookies
    {
        _id: "3",
        name: "Chocolate Chip Cookies",
        image: food1,
        price: 500,
        description: "Classic chocolate chip cookies with a soft and chewy texture.",
        category: "Cookies"
    },
    {
        _id: "4",
        name: "Oatmeal Raisin Cookiesl",
        image: food1,
        price: 450,
        description: "Healthy oatmeal cookies with a touch of sweetness from raisins.",
        category: "Cookies"
    },

    // Pastries List
    {
        _id: "5",
        name: "Pineapple Pastry",
        image: food1,
        price: 350,
        description: "Light and tropical pineapple pastry with whipped cream.",
        category: "Pastries"
    },
    {
        _id: "6",
        name: "Chocolate Éclair",
        image: food1,
        price: 400,
        description: "Creamy chocolate éclair topped with rich chocolate ganache.",
        category: "Pastries"
    },

    // Breads
    {
        _id: "7",
        name: "Whole Wheat Bread",
        image: food1,
        price: 300,
        description: "Healthy whole wheat bread baked to perfection.",
        category: "Breads"
    },
    {
        _id: "8",
        name: "Garlic Breadsticks",
        image: food1,
        price: 250,
        description: "Crispy garlic breadsticks with a hint of herbs.",
        category: "Breads"
    },

    // Muffins & Cupcakes
    {
        _id: "9",
        name: "Blueberry Muffins",
        image: food1,
        price: 350,
        description: "Moist blueberry muffins bursting with juicy berries.",
        category: "cupcakes"
    },
    {
        _id: "10",
        name: "Chocolate Chip Muffins",
        image: food1,
        price: 400,
        description: "Soft muffins with rich chocolate chips in every bite.",
        category: "cupcakes"
    },

    // Savory Items
    {
        _id: "11",
        name: "Chicken Puffs",
        image: food1,
        price: 300,
        description: "Flaky puff pastry filled with seasoned chicken.",
        category: "Savory"
    },
    {
        _id: "12",
        name: "Veg Puffs",
        image: food1,
        price: 250,
        description: "Savory puff pastry filled with spiced vegetable mix.",
        category: "Savory"
    },

    // Desserts
    {
        _id: "13",
        name: "Caramel Custard",
        image: food1,
        price: 450,
        description: "Creamy custard topped with a rich caramel sauce.",
        category: "Desserts"
    },
    {
        _id: "14",
        name: "Tiramisu",
        image: food1,
        price: 800,
        description: "Classic Italian dessert with coffee and mascarpone.",
        category: "Desserts"
    },

    // Rolls
    {
        _id: "15",
        name: "Chicken Roll",
        image: food1,
        price: 400,
        description: "Spicy chicken filling wrapped in soft roll bread.",
        category: "Rolls"
    },
    {
        _id: "16",
        name: "Paneer Roll",
        image: food1,
        price: 350,
        description: "Paneer filling with Indian spices in a soft roll.",
        category: "Rolls"
    },

    // Additional Items for Variety
    {
        _id: "17",
        name: "Fruit Cake",
        image: food1,
        price: 950,
        description: "Moist fruit cake loaded with nuts and dried fruits.",
        category: "Cakes"
    },
    {
        _id: "18",
        name: "Almond Biscotti",
        image: food1,
        price: 800,
        description: "Crispy almond biscotti, great for dipping in coffee.",
        category: "Sweets"
    },
    {
        _id: "19",
        name: "Strawberry Cream Pastry",
        image: food1,
        price: 400,
        description: "Sweet strawberry pastry with smooth cream filling.",
        category: "Pastries"
    },
    {
        _id: "20",
        name: "Lemon Tart",
        image: food1,
        price: 500,
        description: "Tangy lemon tart with a crisp crust and fresh lemon filling.",
        category: "Sweets"
    }
];



