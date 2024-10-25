CREATE DATABASE  IF NOT EXISTS `troca_tudo` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `troca_tudo`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: troca_tudo
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `curtida_e_descurtida`
--

DROP TABLE IF EXISTS `curtida_e_descurtida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curtida_e_descurtida` (
  `id` int NOT NULL,
  `id_usuario` int NOT NULL,
  `id_produto` int NOT NULL,
  `curtida` int DEFAULT NULL,
  `descurtida` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarioLikeDeslike_idx` (`id_usuario`),
  KEY `produtoLikeDeslike_idx` (`id_produto`),
  CONSTRAINT `produtoLikeDeslike` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `usuarioLikeDeslike` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curtida_e_descurtida`
--

LOCK TABLES `curtida_e_descurtida` WRITE;
/*!40000 ALTER TABLE `curtida_e_descurtida` DISABLE KEYS */;
INSERT INTO `curtida_e_descurtida` VALUES (1,1,1,1,NULL),(2,1,2,1,NULL),(3,1,3,NULL,1),(4,2,1,1,NULL),(5,2,2,NULL,1),(6,2,3,NULL,1);
/*!40000 ALTER TABLE `curtida_e_descurtida` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-25 10:41:10
