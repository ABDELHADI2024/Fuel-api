
CREATE TABLE stations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  brand VARCHAR(255),
  address TEXT,
  city VARCHAR(255),
  country VARCHAR(100),
  lat DOUBLE PRECISION,
  lon DOUBLE PRECISION,
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE fuel_prices (
  id SERIAL PRIMARY KEY,
  station_id INTEGER REFERENCES stations(id),
  fuel_type VARCHAR(50),
  price NUMERIC(5,3),
  currency VARCHAR(10),
  updated_at TIMESTAMP DEFAULT NOW()
);
