"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var Product = (function () {
    function Product(id, title, price, rating, desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var products = [
    new Product(1, "First Product", 1.99, 3.5, "This is the first product.", ["Electronic", "Hardware"]),
    new Product(2, "Second Product", 2.99, 2.5, "This is the second product.", ["Game", "Software"]),
    new Product(3, "Third Product", 3.99, 4.0, "This is the third product.", ["Electronic", "Hardware"]),
    new Product(4, "Fourth Product", 4.99, 1.5, "This is the fourth product.", ["Music", "Software"]),
    new Product(5, "Fifth Product", 5.99, 3.5, "This is the fifth product.", ["Electronic", "Hardware"]),
    new Product(6, "Sixth Product", 6.99, 2.5, "This is the sixth product.", ["Movie", "Software"])
];
app.get('/', function (req, res) {
    res.send("Hello Express.");
});
app.get('/products', function (req, res) {
    res.json(products);
});
app.get('/product/:id', function (req, res) {
    res.json(products.find(function (product) { return product.id == req.params.id; }));
});
var server = app.listen(8000, "localhost", function () {
    console.log("Server is working..., address is http://localhost:8000");
});
