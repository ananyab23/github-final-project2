import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  // Calculate total quantity of items in the cart for the badge icon
  const calculateTotalQuantity = () => {
    return cart ? cart.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12"
        },
        {
          name: "Peace Lily",
          image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg",
          description: "Removes mold spores and purifies indoor air.",
          cost: "$18"
        }
      ]
    },
    {
      category: "Aromatic House Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1000&auto=format&fit=crop",
          description: "Calming scent, helps reduce stress and anxiety.",
          cost: "$20"
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1592729800077-ac595ed1b3b3?q=80&w=1000&auto=format&fit=crop",
          description: "Sweet fragrance, promotes better sleep.",
          cost: "$18"
        },
        {
          name: "Rosemary",
          image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
          description: "Invigorating aroma, ideal for kitchen window sills.",
          cost: "$15"
        }
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        {
          name: "ZZ Plant",
          image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=1000&auto=format&fit=crop",
          description: "Thrives in low light and requires minimal watering.",
          cost: "$25"
        },
        {
          name: "Pothos",
          image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816940_1280.jpg",
          description: "Fast-growing vine, extremely easy to care for.",
          cost: "$10"
        },
        {
          name: "Aloe Vera",
          image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-vera-3283115_1280.jpg",
          description: "Succulent with soothing gel inside its leaves.",
          cost: "$14"
        }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <div className="navbar" style={{ backgroundColor: '#4CAF50', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
        <div className="tag">
          <div className="landing_logo">
            <a href="/" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
              <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eccentric-5465486_1280.png" alt="" style={{ height: '50px', marginRight: '10px' }} />
              <div>
                <h3 style={{ color: 'white', margin: 0 }}>Paradise Nursery</h3>
                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '300px' }}>
          <div>
            <a href="#" onClick={(e) => handlePlantsClick(e)} style={{ color: 'white', fontSize: '20px', textDecoration: 'none' }}>Plants</a>
          </div>
          <div>
            <a href="#" onClick={(e) => handleCartClick(e)} style={{ color: 'white', fontSize: '20px', textDecoration: 'none', position: 'relative' }}>
              <h1 className="cart">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="Flat" height="68" width="68">
                  <rect width="256" height="256" fill="none"></rect>
                  <path d="M184,184a16,16,0,1,1-16-16A16,16,0,0,1,184,184ZM88,168a16,16,0,1,0,16,16A16,16,0,0,0,88,168Zm128-112V152a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V56Z" fill="none" stroke="currentColor" strokeWidth="16"></path>
                  <circle cx="80" cy="204" r="12" fill="white"></circle>
                  <circle cx="184" cy="204" r="12" fill="white"></circle>
                </svg>
                <span className="cart_quantity_count">{calculateTotalQuantity()}</span>
              </h1>
            </a>
          </div>
        </div>
      </div>

      {/* Conditional Rendering for Cart vs Product List */}
      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index} className="category-section">
              <h1 className="plant_heading">{category.category}</h1>
              <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">{plant.description}</div>
                    <div className="product-cost">{plant.cost}</div>
                    <button
                      className={`product-button ${addedToCart[plant.name] || cart.some(item => item.name === plant.name) ? 'disabled' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name] || cart.some(item => item.name === plant.name)}
                    >
                      {addedToCart[plant.name] || cart.some(item => item.name === plant.name) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
