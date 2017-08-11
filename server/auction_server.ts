import * as express from 'express';
import * as path from 'path';
const app = express();

export class Product {
    constructor(
        public id:number,
        public title:string,
        public price:number,
        public rating:number,
        public desc:string,
        public categories: Array<string>
    ) {}
}
export class Comment {
    constructor(
        public id:number,
        public productId:number,
        public timestamp:string,
        public user:string,
        public rating:number,
        public content:string
    ) {}
}
const products: Product[] = [
    new Product(1, "First Product", 1.99, 3.5, "This is the first product.", ["Electronic", "Hardware"]),
    new Product(2, "Second Product", 2.99, 2.5, "This is the second product.", ["Game", "Software"]),
    new Product(3, "Third Product", 3.99, 4.0, "This is the third product.", ["Electronic", "Hardware"]),
    new Product(4, "Fourth Product", 4.99, 1.5, "This is the fourth product.", ["Music", "Software"]),
    new Product(5, "Fifth Product", 5.99, 3.5, "This is the fifth product.", ["Electronic", "Hardware"]),
    new Product(6, "Sixth Product", 6.99, 2.5, "This is the sixth product.", ["Movie", "Software"])
];
const comments: Comment[] = [
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

app.get('/api/products', (req, res) => {
    let result = products;
    let params = req.query;
    if(params.title){
        result = result.filter((p) => p.title.toLowerCase().indexOf(params.title.toLowerCase()) !== -1);// title中出现输入值的字样
    }
    if(params.price && result.length > 0){
        result = result.filter((p) => p.price <= parseInt(params.price));// 查找价格低于输入值的商品
    }
    if(params.category && params.category !== "-1" && result.length > 0){ // category为-1表示所有分类，选所有分类时就不用筛选了
        result = result.filter((p) => p.categories.indexOf(params.category) !== -1);
    }
    res.json(result);
});
app.get('/api/product/:id', (req, res) => {
    res.json(products.find((product) => product.id == req.params.id));
});
app.get('/api/product/:id/comments', (req, res) => {
    res.json(comments.filter((comment: Comment) => comment.productId == req.params.id));
});
const server = app.listen(8000, "localhost", () => {
    console.log("Server is working..., address is http://localhost:8000");
});