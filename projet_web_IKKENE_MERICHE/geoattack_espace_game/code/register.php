<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>S'enregistrer</title>
  <link rel="stylesheet" type="text/css" href="styles_reglog.css">
</head>
<body>
  <div class="header">
  	<h2>S'enregistrer</h2>
  </div>

  <form method="post" action="register.php">
  	<?php include('errors.php'); ?>
  	<div class="input-group">
  	  <label>Nom d'utilisateur</label>
  	  <input type="text" name="username">
  	</div>
  	<div class="input-group">
  	  <label>Mot de passe</label>
  	  <input type="password" name="password_1">
  	</div>
  	<div class="input-group">
  	  <label>Confirmer le mot de passe</label>
  	  <input type="password" name="password_2">
  	</div>
  	<div class="input-group">
  	  <button type="submit" class="btn" name="reg_user">S'enregistrer</button>
  	</div>
  	<p>
	    Déjà enregistré? <a href="login.php">Login</a>
  	</p>
  </form>
</body>
</html>