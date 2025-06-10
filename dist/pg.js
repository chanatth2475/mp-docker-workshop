"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBill = exports.getBill = exports.getProduct = exports.getCustomer = void 0;
const pg_1 = require("pg");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const host = process.env.host;
const port = process.env.port;
const pgConfig = {
    host: host,
    port: parseInt(`${port}`) || 5432,
    user: "postgres",
    max: 20,
    idleTimeoutMillis: 5000,
};
const pool = new pg_1.Pool(pgConfig);
const getCustomer = () => __awaiter(void 0, void 0, void 0, function* () { return yield pool.query(`SELECT * FROM customer`); });
exports.getCustomer = getCustomer;
const getProduct = () => __awaiter(void 0, void 0, void 0, function* () { return yield pool.query(`SELECT * FROM product`); });
exports.getProduct = getProduct;
const getBill = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield pool.query(`SELECT bill_id , 
            customer.name customer_name, 
            product.name product_name , 
            total_amount quantity , 
            bill_date ,  
            product.price * bill.total_amount total, 
            bill_date FROM bill 
            LEFT JOIN customer USING (customer_id) 
            LEFT JOIN product USING (product_id)`);
});
exports.getBill = getBill;
const addBill = (customerId, product_id, totalAmount) => __awaiter(void 0, void 0, void 0, function* () {
    return yield pool.query(`INSERT INTO bill (customer_id , product_id , total_amount) VALUES ($1 , $2 , $3)`, [customerId, product_id, totalAmount]);
});
exports.addBill = addBill;
