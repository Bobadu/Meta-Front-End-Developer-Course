const products = [
    ["Laptop", 1000],
    ["Phone", 500],
    ["Tablet", 700]
];

const [, [secondProductName, secondProductPrice]] = products;

console.log(`Second product: ${secondProductName}`);
console.log(`Second product price: ${secondProductPrice}`);