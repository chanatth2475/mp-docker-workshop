-- Create schema for a basic billing system
-- Customer Table
CREATE TABLE
    customer (
        customer_id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255),
        phone VARCHAR(20),
        address TEXT
    );

-- Product Table
CREATE TABLE
    product (
        product_id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price NUMERIC(10, 2) NOT NULL,
        stock_quantity INT NOT NULL
    );

-- Bill Table
CREATE TABLE
    bill (
        bill_id SERIAL PRIMARY KEY,
        customer_id INT REFERENCES customer (customer_id),
        bill_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        product_id INT REFERENCES product (product_id),
        total_amount NUMERIC(12, 2)
    );

-- Inserting sample customers (5 customers)
INSERT INTO
    customer (name, email, phone, address)
VALUES
    (
        'John Doe',
        'john.doe@example.com',
        '555-1234',
        '1234 Elm Street, Springfield, IL'
    ),
    (
        'Jane Smith',
        'jane.smith@example.com',
        '555-5678',
        '5678 Oak Avenue, Chicago, IL'
    ),
    (
        'Alice Johnson',
        'alice.johnson@example.com',
        '555-9876',
        '9876 Pine Drive, Dallas, TX'
    ),
    (
        'Bob Brown',
        'bob.brown@example.com',
        '555-6543',
        '6543 Maple Road, Phoenix, AZ'
    ),
    (
        'Charlie Davis',
        'charlie.davis@example.com',
        '555-4321',
        '4321 Birch Lane, Seattle, WA'
    );

-- Inserting sample products (10 products)
INSERT INTO
    product (name, description, price, stock_quantity)
VALUES
    (
        'Laptop',
        '14 inch, 8GB RAM, 256GB SSD',
        799.99,
        50
    ),
    (
        'Smartphone',
        '5.5 inch, 64GB Storage, 4GB RAM',
        499.99,
        100
    ),
    (
        'Wireless Headphones',
        'Noise Cancelling, Bluetooth',
        99.99,
        150
    ),
    (
        'Smartwatch',
        'Fitness Tracker, Heart Rate Monitor',
        129.99,
        75
    ),
    ('TV', '55 inch, 4K Ultra HD', 599.99, 30),
    (
        'Keyboard',
        'Mechanical, RGB backlight',
        79.99,
        200
    ),
    ('Mouse', 'Wireless, Ergonomic Design', 29.99, 300),
    ('External Hard Drive', '1TB, USB 3.0', 59.99, 120),
    ('Webcam', '1080p HD, USB 2.0', 39.99, 80),
    (
        'Tablet',
        '10.1 inch, 64GB Storage, 3GB RAM',
        249.99,
        60
    );