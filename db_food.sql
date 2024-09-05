/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `Food` (
  `food_id` int NOT NULL AUTO_INCREMENT,
  `food_name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `type_id` int DEFAULT NULL,
  PRIMARY KEY (`food_id`),
  KEY `type_id` (`type_id`),
  CONSTRAINT `Food_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `FoodTypes` (`type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `FoodTypes` (
  `type_id` int NOT NULL AUTO_INCREMENT,
  `type_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `LikeRes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `res_id` int DEFAULT NULL,
  `date_like` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `res_id` (`res_id`),
  CONSTRAINT `LikeRes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`),
  CONSTRAINT `LikeRes_ibfk_2` FOREIGN KEY (`res_id`) REFERENCES `Restaurants` (`res_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `food_id` int DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `arr_sub_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `user_id` (`user_id`),
  KEY `food_id` (`food_id`),
  CONSTRAINT `Orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`),
  CONSTRAINT `Orders_ibfk_2` FOREIGN KEY (`food_id`) REFERENCES `Food` (`food_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `RateRes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `res_id` int DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `date_rate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `res_id` (`res_id`),
  CONSTRAINT `RateRes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`),
  CONSTRAINT `RateRes_ibfk_2` FOREIGN KEY (`res_id`) REFERENCES `Restaurants` (`res_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Restaurants` (
  `res_id` int NOT NULL AUTO_INCREMENT,
  `res_name` varchar(255) DEFAULT NULL,
  `Image` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`res_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Food` (`food_id`, `food_name`, `image`, `price`, `desc`, `type_id`) VALUES
(1, 'Burger', 'burger.jpg', 50000, 'Burger ngon', 1);
INSERT INTO `Food` (`food_id`, `food_name`, `image`, `price`, `desc`, `type_id`) VALUES
(2, 'Pho', 'pho.jpg', 60000, 'Pho bo truyen thong', 2);
INSERT INTO `Food` (`food_id`, `food_name`, `image`, `price`, `desc`, `type_id`) VALUES
(3, 'Kem', 'kem.jpg', 20000, 'Kem tuoi mat lanh', 3);

INSERT INTO `FoodTypes` (`type_id`, `type_name`) VALUES
(1, 'Do an nhanh');
INSERT INTO `FoodTypes` (`type_id`, `type_name`) VALUES
(2, 'Do an chinh');
INSERT INTO `FoodTypes` (`type_id`, `type_name`) VALUES
(3, 'Trang mieng');

INSERT INTO `LikeRes` (`id`, `user_id`, `res_id`, `date_like`) VALUES
(1, 1, 1, '2024-07-24 09:29:39');
INSERT INTO `LikeRes` (`id`, `user_id`, `res_id`, `date_like`) VALUES
(2, 2, 2, '2024-07-24 09:29:39');


INSERT INTO `Orders` (`order_id`, `user_id`, `food_id`, `amount`, `code`, `arr_sub_id`) VALUES
(1, 1, 2, 1, 'ORDER123', '1,2');
INSERT INTO `Orders` (`order_id`, `user_id`, `food_id`, `amount`, `code`, `arr_sub_id`) VALUES
(2, 2, 1, 2, 'ORDER456', '3');


INSERT INTO `RateRes` (`id`, `user_id`, `res_id`, `amount`, `date_rate`) VALUES
(1, 1, 1, 5, '2024-07-24 09:29:39');
INSERT INTO `RateRes` (`id`, `user_id`, `res_id`, `amount`, `date_rate`) VALUES
(2, 2, 2, 4, '2024-07-24 09:29:39');


INSERT INTO `Restaurants` (`res_id`, `res_name`, `Image`, `desc`) VALUES
(1, 'Quan An Ngon', 'image1.jpg', 'Mon an Viet Nam ngon nhat');
INSERT INTO `Restaurants` (`res_id`, `res_name`, `Image`, `desc`) VALUES
(2, 'Nha Hang ABC', 'image2.jpg', 'Chuyen mon an Tay');


INSERT INTO `Users` (`user_id`, `full_name`, `email`, `password`) VALUES
(1, 'Nguyen Van A', 'a.nguyen@example.com', 'password123');
INSERT INTO `Users` (`user_id`, `full_name`, `email`, `password`) VALUES
(2, 'Tran Thi B', 'b.tran@example.com', 'password456');
INSERT INTO `Users` (`user_id`, `full_name`, `email`, `password`) VALUES
(3, 'khang', 'khangdep@123.com', '$2b$10$GUYbdmYDEQT1Xwdzd/t.UOcxC9BpfTcQiQZdY4roafN/ZOtk.L/q.');
INSERT INTO `Users` (`user_id`, `full_name`, `email`, `password`) VALUES
(6, 'khang', '123@123.com', '$2b$10$vAro6k3TBGd5ylvWEk36o.xh/lCOQQFsTpMw85UySfOTNfo77nwwO'),
(7, 'khang', 'test1@test1.com', '$2b$10$WJxadUC7NqyH5i409L9IauOhqJKCTwsDaxZP82fA3WYsmz3/l4Vly'),
(8, 'khang', 'abckhanghot3@gmail.com', '$2b$10$GMhAPGrKbmak3GVOu.bX1eQaE/X.oaSav9WfuFbSoqjbC5g7ZPEqa');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;