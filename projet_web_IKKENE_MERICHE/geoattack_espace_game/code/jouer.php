<!DOCTYPE html>
<html lang = fr>
	<head>
		<meta charset="UTF-8">
		<title>La GéoAttack - Jouer</title>
		<link rel="stylesheet" href = "styles_jouer.css">

        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossorigin=""/>
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossorigin=""></script>
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
    <h1> Détruisez les monuments ! </h1>
    <div class='container'>
		        <div id='divmap'>
                    <div id='map'></div>
                </div>
                <div id='p1'></div>
                <div id='p2'></div>
                <div id='p3'></div>
                <div id='p4'></div>
                <div id='p5'></div>
                <div id='p6'></div>
                 <div class='timer'>
					<p id='time'>00:00</p>
                </div>
                <div id='code'></div>
				<div id='formulaire'>
                    <input type="text" name="enter" class="enter" value="0" id="mdp">
                    <input type="button" value="ok" OnClick=""/>
                </div>  
                <div id='monument'>
                    <div id='m1'></div>
                    <div id='m2'></div>
                    <div id='m3'></div>
                    <div id='m4'></div>
                    <div id='m5'></div>
                </div>    
	</div>
    <script src ="main.js"></script>
    </body>
</html>