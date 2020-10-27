CREATE database emp_mang_db;

USE emp_mang_db;

CREATE TABLE department (

    id INTEGER(2) AUTO_INCREMENT primary key,
    name VARCHAR(30)

);
CREATE TABLE role (
    id INTEGER(2) AUTO_INCREMENT  primary key,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INTEGER(2),
    FOREIGN KEY (department_id) REFERENCES department(id)
);
CREATE TABLE employee (
    id INTEGER(2) AUTO_INCREMENT  primary key,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER(2),
    manager_id INTEGER(2) DEFAULT null,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)

);