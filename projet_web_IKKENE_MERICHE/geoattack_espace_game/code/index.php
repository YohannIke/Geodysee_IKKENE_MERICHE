
<?php 
session_start(); 
/*Vérification si l'utilisateur est connecté et gère la déconnexion*/
if (!isset($_SESSION['username'])) {
	$_SESSION['msg'] = "You must log in first";
	header('location: login.php');
}
if (isset($_GET['logout'])) {
	session_destroy();
	unset($_SESSION['username']);
	header("location: login.php");
}
?>



<!DOCTYPE html>
<html lang = fr>
	<head>
		<meta charset="UTF-8">
		<title>La GéoAttack - Acceuil</title>
		<link rel="stylesheet" href = "styles_index.css">
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
        <?php  if (isset($_SESSION['username'])) : ?>
    	<p>Bienvenue<strong>  <?php echo $_SESSION['username']; ?></strong></p>
    	<p> <a href="index.php?logout='1'" style="color: red;">logout</a> </p>
        <?php endif ?>  
        <h1>La GéoAttack</h1>

        <div class="boutton">
			<p> <a href="jouer.php">Jouer !</a> </p>
		</div>
    </body>
</html>

