<?php
  session_start();

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
<html>
<head>
	<link rel="stylesheet" href = "styles_victoire.css">
	<title>Victoire!</title>

</head>

<body>

	<?php
        $temps = $_GET['temps_final'];
        $_SESSION['temps'] = $_GET['temps_final'];
    ?>
  <h1> Victoire ! </h1>
	<p id="title">Tu as détruis les monuments les plus laids de la Terre en  <?php echo $_SESSION['temps'] ?>  !</p>
	<div id="charge_score">

    <?php

$username = $_SESSION['username'];

        $temps = $_SESSION['temps'];


        /* Attempt to connect to MySQL database */
        $db = mysqli_connect('localhost', 'root', 'root', 'geoattack');
        if($db === false){
            die("ERROR: Could not connect. " . mysqli_connect_error());
        }


        mysqli_query($db, "UPDATE users SET temps = '$temps' WHERE username = '$username'");


        $_SESSION['temps'] = $temps;


	?>
  </div>
  <div class="boutton">
    <p id='exit'> <a href = 'index.php'>Accueil</a> </p>
    <p id='exit'> <a href = 'jouer.php'>Rejouer !</a> </p>
    <p id='exit'> <a href="index.php?logout='1'">Se déconnecter</a> </p>
  </div>
	



</body>
</html>