//CREATION DE LA CARTE
var mymap = L.map('map').setView([48.846076, 2.594156], 18);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZmFpdGhzcGlyaXQiLCJhIjoiY2t3aHpiOXV4MTFnbzJ2bnZsbXA1MG12aiJ9.BGiIEFg8ysh46tuQR5bzPQ'
}).addTo(mymap);

// INITIALISATION DES VARIABLES
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let code=document.getElementById('code');
let p_1 =0
let p_2 =0
let form =document.getElementById("formulaire");
let bunkerouvert=0
let appelAW=0
var alien= L.icon({iconUrl: 'icones/alien2.png', iconSize:[150, 100]});
var marker_martien = L.marker([-0.322172, 24.232625], {icon: alien}).addTo(mymap)
marker_martien.remove();

form.style.visibility = "hidden";
var marker16 = new Map();
var marker18 = new Map();

var s = 00;
var min = 00;
var fin= 0;

//////////////////////////////////////////////
/////////       FONCTIONS           //////////
//////////////////////////////////////////////

/// Fonction qui appelle un objet de la base de données, ajoute son markeur avec l'icône et ajoute la fonction 'click'

function appel_BDD(type,id){    
    
    //Requête Ajax sur le fichier PHP 
    var condition = type + "=" + id;
    fetch('BDDobjets.php', {
      method: 'post',
      body: condition,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'}
     })
    .then(result => result.json())
    .then(result => {
            console.log(result)
            var indi=result[0].id;
            var name = result[0].Nom;
            var image=result[0].Lien_image
            console.log(image)
            let oIcon = L.icon({
            iconUrl: result[0].Lien_image,
            iconSize: [result[0].size_x, result[0].size_y]
            });
            
            var message = result[0].Message;
            zoom_o =result[0].zoom
            console.log(zoom_o)
            var marker = new L.Marker([result[0].lat, result[0].lon,result[0].zoom], {
                icon: oIcon,
                title: name
                });  
            if (zoom_o  == "16"){
                marker16.set(name, marker);
                if (indi==4){
                    mymap.addLayer(marker16.get('Aéroport Roissy-CDG'))
                }
                if (indi==6){
                    mymap.addLayer(marker16.get('Aéroport de Las Vegas'))
                }
                if (indi==11){
                    mymap.addLayer(marker16.get('Aéroport de Washington'))
                }
                if (indi==7){
                    mymap.addLayer(marker16.get('Bunker'))
                }
                if (indi==10){
                    mymap.addLayer(marker16.get('Vaisseau martien'))
                }
                if (indi==12){
                    mymap.addLayer(marker16.get('Mont Rushmore'))
                }
                if (indi==13){
                    mymap.addLayer(marker16.get('Taj Mahal'))
                }
                if (indi==14){
                    mymap.addLayer(marker16.get('Big Ben'))
                }
                if (indi==15){
                    mymap.addLayer(marker16.get('Tour Eiffel'))
                }
                if (indi==16){
                    mymap.addLayer(marker16.get('Île de Pâques'))
                }
            }
            if (zoom_o  == "18"){

                marker18.set(name, marker);
                if (indi==1){
                    mymap.addLayer(marker18.get('Martien'))
                }
                if (indi==2){
                    mymap.addLayer(marker18.get('Pistolet Laser'))
                }
                if (indi==3){
                    mymap.addLayer(marker18.get('Train'))
                }
                if (indi==5){
                    mymap.addLayer(marker18.get('Avion'))
                }
                if (indi==8){
                    mymap.addLayer(marker18.get('Disquette'))
                }
                if (indi==9){
                    mymap.addLayer(marker18.get('Président'))
                }
            }
        
            if (id==7 || id ==4 || id==8 ||id==10){
            }
            else{
            let content;
            content = "<h2>" + name + "</h2>" + "<p>" + message + "</p>";
            
            marker.on('mousemove', function(e){
            e.target.bindPopup(content).openPopup();
            }).on('mouseout', function(e){
            e.target.bindPopup(content).closePopup();
            });
            
            }   
            
            marker.on('click', click_objet);
          
    })
}



//////////////////////////////////////////
//// FONCTION DU CLIC SUR UN OBJET  //////
//////////////////////////////////////////

// Fonction des différentes fonctionnailités de chaque objet.
function click_objet(e){
    nom_objet = e.target.options.title;
    indice_objet = e.target.options.alt;
    console.log(nom_objet);
    console.log(indice_objet);
    
    
///MARTIEN
    if (nom_objet == "Martien"){
        mymap.removeLayer(marker18.get(nom_objet))
        marker18.delete(nom_objet);
        
        appel_BDD("objets",2)
        appel_BDD("objets",3)
        appel_BDD("objets",4)
    }

//LASER
    if (nom_objet == "Pistolet Laser"){
        mymap.removeLayer(marker18.get(nom_objet))
		marker18.delete(nom_objet);
        p1.innerHTML='1'
        p_1=1
        p1.style.backgroundImage = 'url("icones/pistolet_laser.png")';
		}
//TRAIN
    if (nom_objet=="Train"){
        mymap.removeLayer(marker18.get(nom_objet))
        marker18.delete(nom_objet);
        p2.innerHTML='1'
        p_2=1
        p2.style.backgroundImage = 'url("icones/rer_a.png")';
	};
//CDG
    if (nom_objet =="Aéroport Roissy-CDG"){
        marker_martien.remove();
        if ((p1.innerHTML == '1') & (p2.innerHTML=='1')){
            console.log(p1.innerHTML)
            mymap.removeLayer(marker16.get(nom_objet))
            marker16.delete(nom_objet);
			appel_BDD("objets",5);
            marker_martien = L.marker([49.004628, 2.56864], {icon: alien}).addTo(mymap)
            .bindPopup("*DEBUT TRANSMISSION* Je suis enfin arrivé à l'aéroport muni de mon pistolet laser, j'aperçois un petit avion au début de la 1ère piste au nord ! *FIN TRANSMISSION*")
            .openPopup();
		}
        else{
            if ((p_1==1)&&( p_2==0)){
                    marker_martien = L.marker([49.004628, 2.56864], {icon: alien}).addTo(mymap)
                    .bindPopup("*DEBUT TRANSMISSION* J'ai l'arme mais aucun moyen de m'y rendre il faut chercher une gare à Champs. *FIN TRANSMISSION*")
                    .openPopup();
            }
            else{
                if ((p_1==0)&&(p_2==1)){
                    marker_martien = L.marker([49.004628, 2.56864], {icon: alien}).addTo(mymap)
                    .bindPopup("*DEBUT TRANSMISSION* Je suis à l'aéroport mais je n'ai pas d'armes pour détourner un avion, elle se trouve dans la cité Descartes *FIN TRANSMISSION*")
                    .openPopup();

                }
                else{  
                    marker_martien = L.marker([49.004628, 2.56864], {icon: alien}).addTo(mymap)
                    .bindPopup("*DEBUT TRANSMISSION* C'est trop loin je vais avoir besoin d'un moyen de transport pour me rendre à l'aéroport !ak ak ak! Mais aussi d'une arme ! Il doit y avoir une gare quelque part à Champs j'ai cru entendre un bruit de machine. tiens il y a de la fumée dans la cité universitaire, c'est peut être mon pistolet laser qui s'est écrasé. Note à moi-même: faire attention aux jeunes terriens ils pourraient me démasquer. *FIN TRANSMISSION*")
                    .openPopup();
                    
                    
                    }
                }

        }
    }
    //AVION
    if (nom_objet == "Avion"){
        mymap.removeLayer(marker18.get(nom_objet))
        marker18.delete(nom_objet);
        p3.innerHTML=1
        p3.style.backgroundImage = 'url("icones/avion.png")';
        appel_BDD("objets",6);
    };
    // L.V
    if (nom_objet == "Aéroport de Las Vegas"){
        mymap.removeLayer(marker16.get(nom_objet))
        marker16.delete(nom_objet);
        appel_BDD("objets",7);
        
    };
    //BUNKER
    if (nom_objet == "Bunker"){
        marker_martien.remove();
        code_recu = document.getElementById('mdp').value;
        if (code_recu=="maracas"){
            if (bunkerouvert==1){
                marker_martien = L.marker([37.238626, -115.812416], {icon: alien}).addTo(mymap)
                .bindPopup("*DEBUT TRANSMISSION* Le bunker est déjà ouvert, je dois aller récupérer mon vaisseau au nord au bord du lac asséché. *FIN TRANSMISSION*")
                .openPopup();
            }
            else{
            appel_BDD("objets",10);
            document.getElementById("formulaire").style.visibility = "hidden";
            bunkerouvert=1
            marker_martien = L.marker([37.238626, -115.812416], {icon: alien}).addTo(mymap)
            .bindPopup("*DEBUT TRANSMISSION* C'est le bon code, mon vaisseau est un peu endommagé mais ça va, je vais le faire décoller au nord d'ici au bord du lac asséché. *FIN TRANSMISSION*" )
            .openPopup();
            
            }  
        } 
        else{
            if (appelAW==1){
                marker_martien = L.marker([37.238626, -115.812416], {icon: alien}).addTo(mymap)
                .bindPopup("*DEBUT TRANSMISSION* Mon vaisseau est dans ce bunker mais il y a un code et mon pistolet laser ne peut pas le traverser c'est de l'adamantium ! Le code doit être à Washington au coeur de l'ennemi, je dois aller à cet aéroport. *FIN TRANSMISSION*")
                .openPopup();
            }
            else{
                appel_BDD("objets",11)
                document.getElementById("formulaire").style.visibility = "visible";
                marker16.get(nom_objet).on('click', click_objet)
                marker_martien = L.marker([37.238626, -115.812416], {icon: alien}).addTo(mymap)
                .bindPopup("*DEBUT TRANSMISSION* Mon vaisseau est dans ce bunker mais il y a un code et mon pistolet laser ne peut pas le traverser c'est de l'adamantium ! Le code doit être à Washington au coeur de l'ennemi, je dois aller à cet aéroport. *FIN TRANSMISSION*")
                .openPopup();
                appelAW=1
            }
        }
    
    }

    //DISQUETTE
    if (nom_objet == "Disquette"){
        marker_martien.remove()
        if (p5.innerHTML==1){
            p4.innerHTML=1;
            code.innerHTML="code : maracas";
            p4.style.backgroundImage = 'url("icones/disquette.png")';
            mymap.removeLayer(marker18.get(nom_objet))
            marker18.delete(nom_objet);
            marker_martien = L.marker([38.870956,  -77.055291], {icon: alien}).addTo(mymap)
            .bindPopup("*DEBUT TRANSMISSION* Le président a coopéré sous la menace, le code est *maracas* il faut vite retourner au bunker ! *FIN TRANSMISSION*")
            .openPopup();
            }
        else{
            marker_martien = L.marker([38.870956,  -77.055291], {icon: alien}).addTo(mymap)
            .bindPopup("*DEBUT TRANSMISSION* Le code se trouve dans une disquette dans une salle sous le Pentagone. D'après les gardes terriens, seul le président peut ouvrir la salle donc je vais devoir aller kidnapper le président. Le président serait aujourd'hui en déplacement au bureau de la CIA au Washington, je vais aller le chercher là-bas.Pour cela il faut que je suive la rivière Potomac vers le nord jusqu'à un grand complexe entouré de parking sur la gauche. Le président se trouve dans le bâtiment principal. *FIN TRANSMISSION*")
            .openPopup();
            }
    }
    ///PRESIDENT
    if (nom_objet == "Président"){
        mymap.removeLayer(marker18.get(nom_objet))
        marker18.delete(nom_objet);
        p5.innerHTML=1
        p5.style.backgroundImage = 'url("icones/president.png")';
    };

    //VAISSEAU
    if (nom_objet == "Vaisseau martien"){
        marker_martien.remove();
        mymap.removeLayer(marker16.get(nom_objet))
        marker16.delete(nom_objet);
        p6.innerHTML=1
        p6.style.backgroundImage = 'url("icones/vaisseau.png")';
        appel_BDD("objets",12);
        appel_BDD("objets",13);
        appel_BDD("objets",14);
        appel_BDD("objets",15);
        appel_BDD("objets",16);
        marker_martien = L.marker([37.249681, -115.815785], {icon: alien}).addTo(mymap)
        .bindPopup("*DEBUT TRANSMISSION* Mon vaisseau est près à décoller ! Il y a 5 cibles : La Tour Eiffel situé à Paris /// Big Ben situé dans l'ouest Londonien au bord de la Tamise /// le Taj Mahal situé au sud-est de New Delhi dans une grand ville en suivant le fleuve Yamuna /// le Mont Rushore qui se trouve dans le Dakota du sud dans le massif montagneux près de Rapid City /// et les moaïs se trouvant sur la point sud de l'ïle de Paques (Hanga Roa) qui se situe dans l'Océan Pacifique à l'ouest du Chili en partant de la ville de Caldera. *FIN TRANSMISSION*")
        .openPopup();
            }

    //AEROPORT WASH
    if (nom_objet == "Aéroport de Washington"){
        mymap.removeLayer(marker16.get(nom_objet))
        marker16.delete(nom_objet);
        appel_BDD("objets",8);
        appel_BDD("objets",9);
    };

    //MONT RUSHMORE
    if (nom_objet == "Mont Rushmore"){
        fin=fin+1;
        mymap.removeLayer(marker16.get(nom_objet))
        marker16.delete(nom_objet);
        m1.style.backgroundImage = 'url("icones/rush_detruit.jpg")';

    };

    //TAJ MAHAL
    if (nom_objet == "Taj Mahal"){
        fin=fin+1;
        mymap.removeLayer(marker16.get(nom_objet))
        marker16.delete(nom_objet);
        m2.style.backgroundImage = 'url("icones/taj_detruit.jpg")';
    };

    //BIG BEN
    if (nom_objet == "Big Ben"){
        fin=fin+1;
        mymap.removeLayer(marker16.get(nom_objet))
        marker16.delete(nom_objet);
        m3.style.backgroundImage = 'url("icones/big_detruit.jpg")';
    };

    //TOUR EIFFEL
    if (nom_objet == "Tour Eiffel"){
        fin=fin+1;
        mymap.removeLayer(marker16.get(nom_objet))
        marker16.delete(nom_objet);
        m4.style.backgroundImage = 'url("icones/tour_detruit.jpg")';
    };
    
    //ILE DE PAQUES
    if (nom_objet == "Île de Pâques"){
        fin=fin+1;
        mymap.removeLayer(marker16.get(nom_objet))
        marker16.delete(nom_objet);
        m5.style.backgroundImage = 'url("icones/paques_detruit.jpg")';
    };
    console.log(fin)
    if(fin == 5){
        let tempsf =time.innerHTML;
        window.open(
            "victoire.php?temps_final="+tempsf,
            "location=0,menubar=0,status=0,scrollbars=0,menubar=0,top=100,left=100,width=1000,height=550"
        );
    }
       
}

//AFFICHAGE DES MARKEURS SUIVANT LE ZOOM 16 et 18

mymap.addEventListener('zoom',function(e) {

    //ZOOM 16
	for (var [name, marker] of marker16){
		if (mymap.getZoom()>=16){
			if(!(mymap.hasLayer(marker))){
                mymap.addLayer(marker);
                }   
		}
        else{
			mymap.removeLayer(marker);
		};
	};

    //ZOOM 18
    console.log(marker18)
    for (var [name, marker] of marker18){
		if (mymap.getZoom()>=18){
            console.log(name)
			if(!(mymap.hasLayer(marker))){
                console.log(p_1)
                mymap.addLayer(marker);
			}
            else{
            }
		}
        else{
			mymap.removeLayer(marker);
		};
	};
    if(mymap.getZoom()>=18){
        if(!(mymap.hasLayer(marker_martien))){
            mymap.addLayer(marker_martien);
        }
        
    }
    else{
        mymap.removeLayer(marker_martien);
    };


});
/////////////////////////// Fonction supplementaire //////////////////////////

//// mise en place d'un popup si l'ultilisateur click sur la carte avec les coords du click 
var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Vous avez cliqué aux cordonnéees : " + e.latlng.toString())
        .openOn(mymap);
}
// Fonction du temps
function horloge() {
	s += 1;
	if (s == 60){
		s = 00
		min += 1
	}
	time.innerHTML = min +' minutes et '+s+' secondes'
	setTimeout(horloge, 2000);
}


///////////////////// MAIN /////////////////////

horloge();
mymap.on('click', onMapClick);;
appel_BDD("objets",1);