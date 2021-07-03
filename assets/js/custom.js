// *******************  START SIDEBAR NAVIGATION
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
};
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}
// *******************  FILTER SIDEBAR NAVIGATION
function openFilter() {
  document.getElementById("mySidebarFilter").style.left = "0";
};
function closeFilter() {
  document.getElementById("mySidebarFilter").style.left = "-200%";
}

function myFunction(smallImg) {
  var proImg = document.getElementById('mainImg');
  proImg.src = smallImg.src;
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

// ************************************* FILTER PRODUCTS 


const btns = document.querySelectorAll('.filter-btn');
const storeProducts = document.querySelectorAll('.store-product');

for (i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', (e) => {
        e.preventDefault()
        
        const filter = e.target.dataset.filter;
        console.log(filter);
        
        storeProducts.forEach((product)=> {
            if (filter === 'Construction'){
                product.style.display = 'block'
            } else {
                if (product.classList.contains(filter)){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};



// HEADER SEARCH FILTER
const search2 = document.getElementById("search2");
const productName2 = document.querySelectorAll(".products-details h3");

// A BETTER WAY TO FILTER THROUGH THE PRODUCTS
search2.addEventListener("keyup", filterProducts2);


function filterProducts2(e) {
    const text = e.target.value.toLowerCase();
    // console.log(productName[0]);
    productName2.forEach(function(product2) {
        const item = product2.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product2.parentElement.parentElement.style.display = "block"
        } else {
            product2.parentElement.parentElement.style.display = "none"
        }
    })
}


// SEARCH FILTER
const search = document.getElementById("search");
const productName = document.querySelectorAll(".products-details h3");

// A BETTER WAY TO FILTER THROUGH THE PRODUCTS
search.addEventListener("keyup", filterProducts);


function filterProducts(e) {
    const text = e.target.value.toLowerCase();
    // console.log(productName[0]);
    productName.forEach(function(product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block"
        } else {
            product.parentElement.parentElement.style.display = "none"
        }
    })
}


// ********************************* CATEGORIES FILTERS SCRIPT START HERE 


// const fBtns = document.querySelectorAll('.ctg-btn');
// const storeProducts = document.querySelectorAll('.store-product');
// const search = document.getElementById(search);

// for (i = 0; i < fBtns.length; i++) {

//   fBtns[i].addEventListener('click', (e) => {
//         e.preventDefault()
        
//         const filter = e.target.dataset.filter;
//         console.log(filter);
        
//         storeProducts.forEach((product)=> {
//             if (filter === 'Carrocaria'){
//                 product.style.display = 'block'
//             } else {
//                 if (product.classList.contains(filter)){
//                     product.style.display = 'block'
//                 } else {
//                     product.style.display = 'none'
//                 }
//             }
//         });
//     });
// };
