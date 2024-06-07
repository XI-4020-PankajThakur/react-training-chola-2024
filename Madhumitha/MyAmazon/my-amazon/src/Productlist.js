import React,{useState} from "react";
import './App.css';

const products = [{
    "id": 1,
    "Name": "iPhone11",
    "img": "https://tse4.mm.bing.net/th?id=OIP.s5aOiaYGDNPCOgnb3XgPZgHaDt&pid=Api&P=0&h=220",
    "Description": "limited offer 50%",
    "price" :" ₹1,69,000.00",
    "showContent": false, 
    "boolean": false
  },
  {
      "id": 2,
      "Name": "iPhone12",
      "img":"https://static.turbosquid.com/Preview/2020/03/07__15_04_21/screenshot000.png5BC9AEB7-A6B4-4828-8312-A5B687A969B2Default.jpg",
      "Description": "limited offer 60%",
      "price" :" ₹1,50,000.00",
      "showContent": false, 
      "boolean": false
    },
  {
      "id": 3,
    "Name": "iPhone13",
    "img":"https://s.yimg.com/os/creatr-uploaded-images/2022-09/280da9d0-33d8-11ed-beeb-9f0777e02779",
    "Description": "limited offer 70%",
    "price" :" ₹50,000.00",
    "showContent": false, 
    "boolean": false
  },
  {
      "id": 4,
    "Name": "iPhone14",
    "img":"https://img1.cgtrader.com/items/2634978/ed48e8a6b0/apple-iphone-11-pro-max-gold-3d-model-max-obj-fbx-c4d.jpg",
    "Description": "limited offer 50%",
    "price" :" ₹80,000.00",
    "showContent": false, 
    "boolean": false
  },
    {
      "id": 5,
    "Name": "iPhone15",
    "img":"https://static.turbosquid.com/Preview/2019/11/24__11_10_15/0.jpgE8F9C266-E532-46E0-B802-21985BF600EBDefault.jpg",
    "Description": "limited offer 80%" ,
    "price" :" ₹1,00,000.00",
    "showContent": false, 
    "boolean": false
  },
    {
  
      "id": 6,
    "Name": "iPhone15pro",
    "img":"https://www.renderhub.com/madmix/apple-iphone-15-pro-max-v1/apple-iphone-15-pro-max-v1-01.jpg",
    "Description": "limited offer 50%",
    "price" :" ₹1,69,000.00",
    "showContent": false, 
    "boolean": false
  }
  
];
  

const ProductList = ({ addToCart, isInCart }) => {
  

  
  return (
    <div >
      <h2>Products</h2>
      <div className="data-container">
    
        {products.map((product) => (
          <div className="card-div" key={product.id}>
            <img src= {product.img}></img>
            <h1>{product.Name} </h1>
          <p>${product.price}</p> 
          <h1>{product.Description} </h1> 
          
            <button onClick={() => addToCart(product)} disabled={isInCart} >{isInCart ? 'Added to Cart' : 'Add to Cart'}</button>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;




// new
// const ProductList = ({ addToCart }) => {
//   const [disabledButtons, setDisabledButtons] = useState([]);

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     setDisabledButtons([...disabledButtons, product.id]);
//   };

//   return (
//     <div>
//       <h2>Products</h2>
//       <div className="data-container">
//         {products.map((product) => (
//           <div className="card-div" key={product.id}>
//             <img src={product.img} alt={product.Name} />
//             <h1>{product.Name}</h1>
//             <p>{product.price}</p> 
//             <p>{product.Description}</p> 
//             <button 
//               onClick={() => handleAddToCart(product)} 
//               disabled={disabledButtons.includes(product.id)}
//             >
//               {disabledButtons.includes(product.id) ? 'Added to Cart' : 'Add to Cart'}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
