fetch("products.json")
.then(function(response){
   return response.json();
})
.then(function(products){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let product of products){
      out += `
         <tr>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.description}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});














// const productList = document.getElementById('product-list');

// // Function to fetch product data from JSON file
// function fetchProducts() {
//     fetch('products.json')
//       .then(response => response.json())
//       .then(data => {
//         const productList = document.getElementById('product-list');
//         if (productList) {
//           // Loop through products and create list items
//           data.forEach(product => {
//             const listItem = document.createElement('li');
//             listItem.innerHTML = `<a href="details.html?id=${product.id}">${product.name}</a>`;
//             productList.appendChild(listItem);
//           });
//         } else {
//           console.error("Element with id 'product-list' not found!");
//         }
//       })
//       .catch(error => console.error(error));
//   }
  

// // Function to display product details based on ID from URL
// function showProductDetails() {
//   const urlParams = new URLSearchParams(window.location.search);
//   const productId = parseInt(urlParams.get('id'));

//   fetch('products.json')
//     .then(response => response.json())
//     .then(data => {
//       const product = data.find(item => item.id === productId);
//       if (product) {
//         document.getElementById('product-name').textContent = product.name;
//         document.getElementById('product-price').textContent = `Price: $${product.price}`;
//         document.getElementById('product-description').textContent = product.description;
//       } else {
//         console.error("Product not found!");
//       }
//     })
//     .catch(error => console.error(error));
// }

// // Call fetchProducts to populate product list
// fetchProducts();

// // If on details.html, call showProductDetails to display specific product
// if (window.location.pathname === '/details.html') {
//   showProductDetails();
// }
