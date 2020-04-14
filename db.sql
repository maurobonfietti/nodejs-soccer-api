DROP TABLE IF EXISTS `player`;

CREATE TABLE `player` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `player` WRITE;
/*!40000 ALTER TABLE `player` DISABLE KEYS */;

INSERT INTO `player` (`id`, `name`)
VALUES
	(1,'Carlos Tevez'),
	(2,'Paulo Dybala'),
	(3,'Lionel Messi'),
	(4,'Cristiano Ronaldo'),
	(5,'Update Player'),
	(7,'Antoine Griezmann'),
	(8,'James Rodriguez'),
	(9,'Neymar'),
	(10,'Dani Alves'),
	(11,'Matthijs de Ligt'),
	(12,'Frenkie de Jong'),
	(13,'Virgil van Dijk'),
	(14,'Sergio Busquets'),
	(15,'Eden Hazard'),
	(16,'Paul Pogba'),
	(17,'Kevin De Bruyne'),
	(18,'Sergio Agüero'),
	(19,'Gerard Piqué'),
	(20,'Trent Alexander-Arnold'),
	(21,'Moussa Sissoko'),
	(22,'Tanguy Ndombélé'),
	(23,'Raheem Sterling'),
	(24,'Lucas Moura'),
	(25,'Kylian Mbappé'),
	(26,'Raphaël Varane');

/*!40000 ALTER TABLE `player` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla team
# ------------------------------------------------------------

DROP TABLE IF EXISTS `team`;

CREATE TABLE `team` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `stadium_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `capacity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;

INSERT INTO `team` (`id`, `name`, `stadium_name`, `capacity`)
VALUES
	(1,'Boca Juniors','Alberto J. Armando',50000),
	(2,'River Plate','Antonio Vespucio Liberti',70000),
	(3,'Newells Old Boys','Marcelo Bielsa',42000),
	(4,'Rosario Central','Gigante de Arroyito',43000),
	(5,'Update Club 2021','myStadium updated!',12345),
	(7,'Belgrano','Julio César Villagra',30000),
	(8,'Talleres','Francisco Cabasés',18000),
	(9,'Instituto','Juan Domingo Perón',26000),
	(10,'Estudiantes','Ciudad de La Plata',53000),
	(11,'Gimnasia','Ciudad de La Plata',53000),
	(12,'Independiente','Libertadores de América',52000),
	(13,'Racing','Presidente Perón',52000),
	(14,'Vélez Sarsfield','José Amalfitani',49000),
	(15,'San Lorenzo','Pedro Bidegain',48000),
	(16,'Huracán','Tomás Adolfo Ducó',48000),
	(17,'Lanús','Ciudad de Lanús',47000),
	(18,'Banfield','Florencio Sola',35000),
	(19,'Defensa y Justicia','Norberto \"Tito\" Tomaghello',20000),
	(20,'Nueva Chicago','Estadio Nueva Chicago',25000);

/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;
