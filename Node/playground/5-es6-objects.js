const name = 'Savo';
const userAge = 27;

const user = {
    name,
    age: userAge,
    location: 'Philly',
};

console.log(user);

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.3
};

// const label = product.label;
// const stock = product.stock;

// const { label: productLabel, stock, rating = 5 } = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transtaction = (type, { label, stock }) => {
    // const { label } = myProduct;
    console.log(type, label, stock);
};

transtaction('order', product);