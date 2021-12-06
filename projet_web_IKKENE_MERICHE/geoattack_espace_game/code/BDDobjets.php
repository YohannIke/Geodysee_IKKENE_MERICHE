<?php


    /* TENTATIVE DE CONNEXION A LA BASE DE DONNEES */
    $link = mysqli_connect('localhost', 'root', 'root', 'geoattack');

    $choix=$_POST["objets"];

    $query = "SELECT * FROM Objets WHERE id =".$_POST["objets"] ;
    $result = mysqli_query($link, $query);
    if ($result == mysqli_query($link, $query)) {
        
        while($row = mysqli_fetch_assoc($result)) {
                $myArray[] = $row;
        }
    }
    else{
 
        echo "Erreur de requête de base de données.";
        }
    echo json_encode($myArray, JSON_NUMERIC_CHECK);
?>