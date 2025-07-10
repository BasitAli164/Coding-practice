 const dummyProducts = [
    { id: '6713b377d4939c535104d410', title: 'Running Shoes', price: '5000', availableSizes: ['5', '6', '7', '8', '9', '10'], color: 'Red', category: 'men' ,rating:4,
      description: "Lightweight and breathable running shoes designed for speed and comfort. Perfect for your morning jog or evening runs."
    },
    { id: 2, title: 'Hiking Boots', price: '7500  ',  availableSizes: ['7','8', '9', '10', '11'], color: 'Black', category: 'women',rating:3,
      description: "Durable hiking boots with excellent traction and support. Ideal for rugged terrains and long hikes."
     },
    { id: 3, title: 'Casual Sneakers', price: '4000  ', availableSizes: ['6', '7', '8', '9','10'], color: 'Blue', category: 'men',rating:"****",
       description: "Stylish and versatile casual sneakers suitable for everyday wear. Comfortable for walking and relaxing."
     },
    { id: 4, title: 'Basketball Shoes', price: '6000  ', availableSizes: ['7', '8', '9', '10', '11'], color: 'White', category: 'women',rating:5,
      description: "High-performance basketball shoes offering ankle support and grip on the court. Ideal for players at any level."
     },
    { id: 5, title: 'Trail Running Shoes', price: '5500  ',  availableSizes: ['4','5', '6', '7', '8'], color: 'Green', category: 'men',rating:3,
      description: "Designed for off-road running, these shoes provide stability and cushioning on rugged trails."
     },
    { id: 6, title: 'Formal Loafers', price: '4500  ', availableSizes: ['6','7','8', '9', '10', '11'], color: 'Brown', category: 'women',rating:1,
      description: "Elegant loafers suitable for formal occasions. Made from premium leather for a sophisticated look."
  
     },
    { id: 7, title: 'Flat Sandals', price: '3000  ',  availableSizes: ['5','6', '7', '8'], color: 'Tan', category: 'men' ,rating:2,
      description: "Comfortable and stylish flat sandals, perfect for summer outings and beach days."
  
    },
    { id: 8, title: 'High Top Sneakers', price: '6500  ', availableSizes: ['7', '8', '9', '10'], color: 'Black', category: 'men',rating:3,
      description: "Trendy high-top sneakers offering ankle support and a fashionable look for streetwear."
  
     },
    { id: 9, title: 'Ballet Flats', price: '3500  ',availableSizes: ['5', '6', '7'], color: 'Pink', category: 'women',rating:4 ,
      description: "Chic ballet flats that are both comfortable and stylish, perfect for casual outings or office wear."
     },
    { id: 10, title: 'Slip-On Sneakers', price: '4000  ',  availableSizes: ['7', '8', '9'], color: 'Gray', category: 'men',rating:5,
       description: "Convenient slip-on sneakers that combine style with ease of wear, great for everyday activities."
     },
    { id: 11, title: 'Outdoor Sandals', price: '3800  ',availableSizes: ['8', '9', '10'], color: 'Beige', category: 'women' ,rating:1,
      description: "Versatile outdoor sandals designed for comfort and breathability during summer adventures."
  
    },
    { id: 12, title: 'Fitness Shoes', price: '5200  ',availableSizes: ['6', '7', '8', '9'], color: 'Black', category: 'women' ,rating:2,
       description: "High-performance fitness shoes designed for gym workouts and running, providing excellent support."
    },
   
  ];
let list=document.querySelector("#list");
list=dummyProducts.map((item)=>{
    return `<p>${item}</p>`
    
})



