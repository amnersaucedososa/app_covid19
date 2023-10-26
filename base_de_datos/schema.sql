-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 26-10-2023 a las 22:44:29
-- Versión del servidor: 8.0.30
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `empleados` (
  `id` int NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `puesto` varchar(255) NOT NULL,
  `vacuna` varchar(255) NOT NULL,
  `fecha_primera_dosis` date DEFAULT NULL,
  `estado_vacunacion` varchar(255) NOT NULL
);

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `puesto`, `vacuna`, `fecha_primera_dosis`, `estado_vacunacion`) VALUES
(1, 'Empleado X', 'CONDULTOR', 'Pfizer', '2023-11-15', 'Protegido'),
(2, 'Amner saucedo', 'Programdor', 'Janssen', '2020-01-12', 'Protegido'),
(3, 'Empleado Y', 'CONDULTOR RRH', 'Pfizer', '2023-11-15', 'Protegido'),
(4, 'Empleado YYY', 'Tecnico', 'Pfizer', '2023-11-15', 'En Riesgo'),
(5, 'Abisai saucedo', 'Informatic', 'Janssen', '2020-01-12', 'En Progreso');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
