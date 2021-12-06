-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : lun. 06 déc. 2021 à 02:12
-- Version du serveur :  5.7.24
-- Version de PHP : 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `geoattack`
--

-- --------------------------------------------------------

--
-- Structure de la table `objets`
--

CREATE TABLE `objets` (
  `id` int(11) NOT NULL,
  `Nom` varchar(255) NOT NULL,
  `Message` text NOT NULL,
  `Lien_image` text NOT NULL,
  `lat` varchar(255) NOT NULL,
  `lon` varchar(255) NOT NULL,
  `size_x` varchar(255) NOT NULL,
  `size_y` varchar(255) NOT NULL,
  `zoom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `objets`
--

INSERT INTO `objets` (`id`, `Nom`, `Message`, `Lien_image`, `lat`, `lon`, `size_x`, `size_y`, `zoom`) VALUES
(1, 'Martien', '*DEBUT TRANSMISSION*\r\n! ak ak ak ak ak ! *incompréhensible* TRADUCTION......\r\n*Maudit terriens, j\'ai été éjecté de mon vaisseau par leurs tirs, ils vont me le payer, je détruirai tout leurs monuments !ak ak ak!\r\nOù suis-je ? Tout est si vert... beurk.. \r\nMon système de postionnement m\'indique que je suis dans une forêt à Champs sur Marne.\r\nQuand à mon vaisseau il se trouve aux Etats-unis.\r\nJe vais devoir prendre le contrôle d\'un de ses maudits engins volants qui m\'ont abattu. Je devrai vite aller voir si c\'est possible d\'en détourner un au terminal 2D de Roissy CDG heuresement que j\'ai pris mon déguisement de femelles terriennes! \r\n*FIN TRANSMISSION*', 'icones/alien2.png', '48.846027', '2.594266', '150', '100', '18'),
(2, 'Pistolet Laser', '*DEBUT TRANSMISSION*\r\nCe pistolet laser est capable de désintégrer n\'importe quelle matière, j\'hâte de l\'utiliser sur la Tour Eiffel\r\n!ak ak ak!\r\n*FIN TRANSMISSION*', 'icones/pistolet_laser.png', '48.839383', '2.590974', '100', '100', '18'),
(3, 'Train', '*DEBUT TRANSMISSION*\r\nJe dois prendre ce train, les terriens ont un niveau technologique mediocre, ils vont encore sous-terre pour se déplacer.\r\n*FIN TRANSMISSION*', 'icones/rer_a.png', '48.842666', '2.5782', '100', '40', '18'),
(4, 'Aéroport Roissy-CDG', 'ok', 'icones/aeroport.png', '49.005165', '2.566989', '50', '50', '16'),
(5, 'Avion', '*DEBUT TRANSMISSION*\r\nJ\'ai pris le contrôle du jet privé,\r\nles occupants n\'ont pas fait le poids.\r\nMon vaisseau se trouve dans le Nevada, je vais devoir atterir dans le principal aéroport de Las Vegas (MCCARRAN).\r\n*FIN TRANSMISSION*', 'icones/avion.png', '49.023712', '2.570421', '200', '200', '18'),
(6, 'Aéroport de Las Vegas', '*DEBUT TRANSMISSION*\r\nMe voici dans cette maudite ville du péché, il faudra que je me rapelle de la raser par la suite. D\'après mes données, mon vaisseau serait au nord-ouest de Las Vegas dans la zone 51. Pour y aller il faut suivre la route 93 vers le nord jusqu\'à la ville d\'Alamo puis partir vers l\'ouest jussqu\'à la zone près du site d\'essais nucléaires.\r\n*FIN TRANSMISSION*', 'icones/aeroport.png', '36.084779', '-115.150446', '50', '50', '16'),
(7, 'Bunker', 'ok', 'icones/bunker.png', '37.238558', '-115.813616', '100', '100', '16'),
(8, 'Disquette', '*DEBUT TRANSMISSION*\r\nLe code se trouve dans une disquette dans une salle sous le Pentagone. D\'après les gardes terriens, seul le président peut ouvrir la salle donc je vais devoir kidnapper le président. Le président serait aujourd\'hui en déplacement au bureau de la CIA au Washington, je vais aller le chercher là-bas.\r\nPour cela il faut que je suive la rivière Potomac vers le nord jusqu\'à un grand complexe entouré de parking sur la gauche.\r\nLe président se trouve dans le bâtiment principal.\r\n*FIN TRANSMISSION*', 'icones/disquette.png', '38.870996', '-77.055974', '100', '100', '18'),
(9, 'Président', '*DEBUT TRANSMISSION*\r\nJ\'ai réussi à passer toutes les sécurités sans encombre enfin pas pour les agents de la CIA. Je peux maintenant kidnapper le président et l\'emmener au Pentagone pour débloquer la salle où se trouve le code du bunker.  \r\n*DEBUT TRANSMISSION*', 'icones/president.png', '38.95221', '-77.144696', '100', '100', '18'),
(10, 'Vaisseau martien', 'ok', 'icones/vaisseau.png', '37.249844', '-115.814583', '100', '200', '16'),
(11, 'Aéroport de Washington', '*DEBUT TRANSMISSION*\r\nMe voilà dans le coeur de l\'Amérique, il faut que je trouve le code qui doit se trouver au centre du Pentagone au nord-ouest de l\'aéroport.\r\n*FIN TRANSMISSION*', 'icones/aeroport.png', '38.851764', '-77.041956', '50', '50', '16'),
(12, 'Mont Rushmore', '*DEBUT TRANSMISSION*\r\nRemplaçons ces scultures de terriens moches par celles de nos héros martiens !\r\n*FIN TRANSMISSION*', 'icones/montrushmore.png', '43.878661', '-103.459197', '200', '100', '16'),
(13, 'Taj Mahal', '*DEBUT TRANSMISSION*\r\nFaisons une photo en détruisant ce monument pour avoir un souvenir !\r\n*FIN TRANSMISSION*', 'icones/tajmahal.png', '27.174926', '78.042099', '100', '100', '16'),
(14, 'Big Ben', '*DEBUT TRANSMISSION*\r\nLes terriens lisent l\'heure sur leurs batîments, quelle espèce misérable ! Je vais détruire cette tour pour les désorienter !\r\n*FIN TRANSMISSION*', 'icones/bigben.png', '51.499252', '-0.124602', '100', '150', '16'),
(15, 'Tour Eiffel', '*DEBUT TRANSMISSION*\r\nCe tas de féraille est un monument.. C\'est ignoble ! Je vais faire fond les pieds pour la renverser !ak ak ak!\r\n*FIN TRANSMISSION*', 'icones/toureiffel.png', '48.858249', '2.294502', '200', '200', '16'),
(16, 'Île de Pâques', '*DEBUT TRANSMISSION*\r\nTiens les terriens ont aligné pleins statues ici. On va pouvoir faire du bowling avec ! \r\n*FIN TRANSMISSION*', 'icones/paques.png', '-27.195713', '-109.429103', '100', '100', '16');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `temps` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `temps`) VALUES
(1, 'yohann', '6512bd43d9caa6e02c990b0a82652dca', '1 minutes et 6 secondes');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `objets`
--
ALTER TABLE `objets`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `objets`
--
ALTER TABLE `objets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
