"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
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
var Comment = (function () {
    function Comment(id, productId, timestamp, user, rating, content) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.content = content;
    }
    return Comment;
}());
exports.Comment = Comment;
var products = [
    new Product(1, "First Product", 1.99, 3.5, "This is the first product.", ["Electronic", "Hardware"]),
    new Product(2, "Second Product", 2.99, 2.5, "This is the second product.", ["Game", "Software"]),
    new Product(3, "Third Product", 3.99, 4.0, "This is the third product.", ["Electronic", "Hardware"]),
    new Product(4, "Fourth Product", 4.99, 1.5, "This is the fourth product.", ["Music", "Software"]),
    new Product(5, "Fifth Product", 5.99, 3.5, "This is the fifth product.", ["Electronic", "Hardware"]),
    new Product(6, "Sixth Product", 6.99, 2.5, "This is the sixth product.", ["Movie", "Software"])
];
var comments = [
    new Comment(1, 1, "2017-02-02 22:22:22", "Dong", 3, "Not bad"),
    new Comment(2, 1, "2017-02-02 22:22:22", "Jiarun", 4, "Good"),
    new Comment(3, 1, "2017-02-02 22:22:22", "Ryan", 2, "Not like"),
    new Comment(4, 2, "2017-02-02 22:22:22", "Elva", 3, "OK")
];
// app.get('/', (req, res) => {
//     res.send("Hello Express.");
// });
// 应用程序部署进来后，要设置默认访问的页面。需要先引入path
// 当路径为空时，访问如下静态资源，参数意思是当前目录（server文件夹），往上找一级（nodeServer文件夹），找client文件夹，在这个文件夹里会自动找index.html
app.use('/', express.static(path.join(__dirname, '..', 'client')));
app.get('/api/products', function (req, res) {
    var result = products;
    var params = req.query;
    if (params.title) {
        result = result.filter(function (p) { return p.title.toLowerCase().indexOf(params.title.toLowerCase()) !== -1; }); // title中出现输入值的字样
    }
    if (params.price && result.length > 0) {
        result = result.filter(function (p) { return p.price <= parseInt(params.price); }); // 查找价格低于输入值的商品
    }
    if (params.category && params.category !== "-1" && result.length > 0) {
        result = result.filter(function (p) { return p.categories.indexOf(params.category) !== -1; });
    }
    res.json(result);
});
app.get('/api/product/:id', function (req, res) {
    res.json(products.find(function (product) { return product.id == req.params.id; }));
});
app.get('/api/product/:id/comments', function (req, res) {
    res.json(comments.filter(function (comment) { return comment.productId == req.params.id; }));
});
var server = app.listen(8000, "localhost", function () {
    console.log("Server is working..., address is http://localhost:8000");
});
