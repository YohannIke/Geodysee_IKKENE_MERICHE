<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
  <link rel="stylesheet" type="text/css" href="styles_reglog.css">
</head>
<body>
  <div class="header">
  	<h2>Login</h2>
  </div>
	 
  <form method="post" action="login.php">
  	<?php include('errors.php'); ?>
  	<div class="input-group">
  		<label>Nom d'utilisateur</label>
  		<input type="text" name="username" >
  	</div>
  	<div class="input-group">
  		<label>Mot de passe</label>
  		<input type="password" name="password">
  	</div>
  	<div class="input-group">
  		<button type="submit" class="btn" name="login_user">Login</button>
  	</div>
  	<p>
	  Pas encore inscrit? <a href="register.php">S'enregistrer</a>
  	</p>
  </form>
</body>
</html>