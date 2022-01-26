const products = [
    {
        name: "Fancy Product",
        price: 40,
        soldOut: true,
    },
    {
        name: "Another Product",
        soldOut: false,
    },
    {
        name: "Cheap Product",
        price: 10,
        soldOut: true,
    },
];


const showProducts = document.querySelector(".container");
console.log(showProducts);

let html = "";

for (let i = 0; i < products.length; i++) {
    html = html + `
    <h2> Name: ${products[i].name} </h2>
    <p>Price: ${products[i].price}</p>
    <p>In stock: ${products[i].soldOut}</p>
    `;

    console.log(html);
}

showProducts.innerHTML = html;

