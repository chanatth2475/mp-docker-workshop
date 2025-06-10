import { Pool, PoolConfig } from "pg";
import { config } from "dotenv";

config();

const host = process.env.host;
const port = process.env.port;

const pgConfig: PoolConfig = {
  host: host,
  port: parseInt(`${port}`) || 5432,
  user: "postgres",
  max: 20,
  idleTimeoutMillis: 5000,
};

const pool = new Pool(pgConfig);

export const getCustomer = async () =>
  await pool.query(`SELECT * FROM customer`);

export const getProduct = async () => await pool.query(`SELECT * FROM product`);

export const getBill = async () =>
  await pool.query(
    `SELECT bill_id , 
            customer.name customer_name, 
            product.name product_name , 
            total_amount quantity , 
            bill_date ,  
            product.price * bill.total_amount total, 
            bill_date FROM bill 
            LEFT JOIN customer USING (customer_id) 
            LEFT JOIN product USING (product_id)`
  );

export const addBill = async (
  customerId: number,
  product_id: number,
  totalAmount: number
) =>
  await pool.query(
    `INSERT INTO bill (customer_id , product_id , total_amount) VALUES ($1 , $2 , $3)`,
    [customerId, product_id, totalAmount]
  );
