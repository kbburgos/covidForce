DROP DATABASE covid_force;

CREATE DATABASE IF NOT EXISTS covid_force;

USE covid_force;

CREATE TABLE Semaforo(
    id_semaforo int AUTO_INCREMENT primary key,
    color VARCHAR(20) NOT NULL,
    por_zona boolean, 
    por_contacto boolean,
    por_sintoma boolean,
	id_cuarentena text
);

CREATE TABLE Usuario(
    cedula VARCHAR(10) primary key not null,
    email varchar(50) not null,
    nombre varchar(20) not null,
    apellido VARCHAR(20) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    contrasena VARCHAR(20) NOT NULL,
    direccion VARCHAR(80),
    id_semaforo int,
    FOREIGN KEY (id_semaforo) REFERENCES Semaforo (id_semaforo)        
);



CREATE TABLE Zona(
    id_zona int AUTO_INCREMENT primary key not null,
    lat FLOAT(10,6) NOT NULL,
    lng FLOAT(10,6) NOT NULL,
    nombre VARCHAR(40),
    id_sector int,
    direccion text

);

CREATE TABLE Reporte(
    id_reporte int AUTO_INCREMENT primary key not null,
    cedula VARCHAR(10),
    id_zona int,
    id_medida text, 
    fecha date not null default now(),
    FOREIGN KEY (cedula) REFERENCES Usuario (cedula),
    FOREIGN KEY(id_zona) REFERENCES Zona (id_zona)
);


CREATE TABLE Markers(
    id_makers int AUTO_INCREMENT primary key not null,
    id_zona int,
    name VARCHAR(60) NOT NULL,
    address VARCHAR(80) NOT NULL,
    lat FLOAT(10,6) NOT NULL,
    lng FLOAT(10,6) NOT NULL,
    type VARCHAR(30) NOT NULL
);