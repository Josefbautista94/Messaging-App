DROP TABLE IF EXISTS chatapp;
DROP ROLE IF EXISTS admin;
-- Comment the following lines to only drop newly created database and roles
CREATE ROLE admin WITH LOGIN PASSWORD 'admin';
CREATE DATABASE chatapp;
GRANT ALL PRIVILEGES ON DATABASE chatapp TO admin;