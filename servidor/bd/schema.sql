USE bdestudiantes;


CREATE TABLE `tb_categorias` (
  `id_categoria` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `descripcion_larga` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

INSERT INTO tb_categorias (descripcion, descripcion_larga) 
	VALUES  ('BEBE','Menor de 3 años'),
			('INFANTIL','Entre 9 y 13 años'),
			('CADETE','Entre 14 y 18 años'),
			('ACTIVO','Mayor a 18 años'),
			('VITALICIO','Mas de 50 años como socio'),
			('DAMA','Socia activa');

CREATE TABLE `tb_actividades` (
  `id_actividad` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `descripcion_actividad` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `precio` decimal(8,2) DEFAULT NULL,
  PRIMARY KEY (`id_actividad`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

INSERT INTO tb_actividades VALUES('Socio','Cuota social',150),
								 ('Futbol','Todas sus categorias',350),
								 ('Basquet','Martes y jueves a las 20',200),
								 ('Boxeo','sabados por la mañana',350),
								 ('GYM','Acceso al gimnasio',500);

CREATE TABLE `tb_empadronamiento` (
  `id_empadronamiento` int(11) NOT NULL AUTO_INCREMENT,
  `dni` int(11) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `telefono` varchar(30) DEFAULT NULL,
  `ref_telefono` varchar(30) DEFAULT NULL,
  `celular` varchar(30) DEFAULT NULL,
  `path_foto` varchar(100) DEFAULT NULL,
  `fecha_alta_real` date DEFAULT NULL,
  `fecha_empadronamiento` date DEFAULT NULL,
  `migrado` tinyint(1) DEFAULT '0',
  `mail` varchar(50) DEFAULT NULL,
  `id_localidad` number DEFAULT NULL,
  `codigo_postal` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_empadronamiento`),
  UNIQUE KEY `dni` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

INSERT INTO tb_empadronamiento(dni,     apellido,    nombre,   id_categoria, fecha_nacimiento, direccion,      telefono,     ref_telefono, celular,        path_foto, fecha_alta_real, fecha_empadronamiento, migrado, mail,                                    id_localidad, codigo_postal)
VALUES (                       31805759,'del Valle','Fernando',20,           '26/07/1985',     'Roviralta 123','02320429082','Noelia',     '0111525857872',null,      '01/02/2018',    '11/06/2019',          'N',     'delvalle_fernando_matias@yahoo.com.ar', 196,          '1665'),
	  (61805760,'Fernandez','Ignacio',17,'10/02/2019','Suipacha 1092','40322499871','Raul','0111525857872',null,null,'10/06/2019','N','elnacho@gmail.com', 196, '1665'),
      (01805759,'Hernandez','Julia',21,'26/07/1925','Peralta 99','0344654786','Alfonso','0111598745632',null,'01/10/2060','11/06/2019','N','julia@ciudad.com.ar', 196, '1665'),
	  (21805759,'Pintos','Agustin',20,'26/07/1975','Rodriguez Peña 7894','02320429082','Rafael','0111525856060',null,'01/02/2018','11/06/2019','N','agus@gmail.com.ar', 196, '1665'),
	  (11805759,'Facundez','Romina',22,'26/07/1975','Piñero 1064','02320429082','Rafael','0111525856060',null,'01/02/2018','11/06/2019','N','fer@gmail.com.ar', 196, '1670');

SELECT * FROM  tb_empadronamiento;
