<!DOCTYPE html>
<html lang = fr>
	<head>
		<meta charset="UTF-8">
		<title>La Géodysée d'Ulysse - Hall of Fame</title>
		<link rel="stylesheet" href = "styles_scores.css">
	</head>
    <body>
        <div id="Menu">
            <ul>
                <li id="accueil"><a href="index.php">Accueil</a></li>
                <li id="regles"><a href="regles.php">But du jeu et lore</a></li>
                <li id="jouer"><a href="jouer.php">Jouer</a></li>
                <li id="scores"><a href="scores.php">Hall of fame</a></li>
            </ul>
        </div>
        <h1>Tableau des scores</h1>
        <div id="score">Les meilleurs :
	<?php    
        /* TENTATIVE DE CONNEXION A LA BASE DE DONNEES */
        $db = mysqli_connect('localhost', 'root', 'root', "geoattack");
        if($db==false){
            die("ERROR: Could not connect. " . mysqli_connect_error());
        }

        $user_check_query = "SELECT username, temps FROM users ORDER BY temps DESC LIMIT 10";

        if ($result = mysqli_query($db, $user_check_query)) {
        
            while($row = mysqli_fetch_assoc($result)) {
                $myArray[] = $row;
                ?>
                
	    <p id="liste_scores">
	    <?= $row['username']; ?>  a envahi la Terre en  <?php echo $row['temps']; ?> <br/>
		</p>
        
	    <?php
            }
        }
        else{
            echo "Erreur de requête de base de données.";
        }

	    ?>
	</div>
        
    </body>
</html>