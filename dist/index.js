"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const connectDB = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "shubham2338",
    database: "demo"
}).initialize()
    .then(() => {
    console.log('db connected');
})
    .catch((err) => {
    console.log('error whilte connecting database', err);
});
const PORT = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.get('/Id/:id/Name/:name', (req, resp) => {
    resp.send({
        message: "hello Shubham",
        data: req.params.id,
        name: req.params.name
    });
});
app.post('/Id/Name', (req, resp) => {
    resp.send({
        data: req.body,
        prams: {
            id: req.body.id,
            name: req.body.name
        }
    });
    console.log(req.body);
});
app.listen(PORT, () => {
    console.log('server is running on port', `${PORT}`);
});
//# sourceMappingURL=index.js.map