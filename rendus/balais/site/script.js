// window.scrollTo(0,0);

var section = document.querySelector('.balais');
var popup = document.querySelector('.popup');

function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// window.open = function(event) {
window.addEventListener("load", function(event) {
    window.scrollTo(random(2, 3000),random(2, 1500));
    section.classList.add('loaded');
});


// }

// window.open(random(2, 3500),random(2, 3500));

var edition = document.querySelector(".edition");
var bouton = document.querySelector(".bouton");
console.log(bouton);
bouton.addEventListener("click", function(e){
  if(edition.classList.contains('active')){
    // ferme le panier
    edition.classList.remove("active");
    bouton.classList.remove("active");
  }
  else{
    // ouvre le panier
    edition.classList.add("active");
    bouton.classList.add("active");
  }

});


var balais = [
  {
    "Balais": "2013.15.2",
    "face": "FaceBalai2.jpg",
    "echelle": 35,
    "diagonale": "DiagonaleBalai2.jpg",
    "Détails": "",
    "Description": "balai de protection magique - protection magique de la maison contre les forces maléfiques, suspendu au-dessus de la porte d'entrée",
    "Type": "",
    "Matière": "fibres de sorgho, plastique",
    "Pays": "Ukraine",
    "Ville": "Nikolaev",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "2014.4.99",
    "face": "FaceBalai3.jpg",
    "echelle": 26,
    "diagonale": "DiagonaleBalai3.jpg",
    "Détails": "",
    "Description": "balai chamanique en fibre végétale",
    "Type": "",
    "Matière": "cypéracées, plumes, cuir, peinture",
    "Pays": "USA",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "MNHN_E_2011.13.405",
    "face": "FaceBalai4.jpg",
    "echelle": 18,
    "diagonale": "DiagonaleBalai4.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "",
    "Pays": "Congo",
    "Ville": "Brazzaville",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "MNHN.2012.2.17",
    "face": "FaceBalai5.jpg",
    "echelle": 19,
    "diagonale": "DiagonaleBalai5.jpg",
    "Détails": "",
    "Description": "attise-feu",
    "Type": "",
    "Matière": "fibres de bois (Eremospatha Haullevilleana),  Desmoncus, carton",
    "Pays": "Libéria",
    "Ville": "Monrovia",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "2013.1.34 (2014.9.1 et 2014.9.2)",
    "face": "FaceBalai6.jpg",
    "echelle": 18,
    "diagonale": "DiagonaleBalai6.jpg",
    "Détails": "",
    "Description": "Pour balayer l'intérieur de la maison et notamment autour du feu",
    "Type": "",
    "Matière": "paille de riz",
    "Pays": "Libéria",
    "Ville": "Monrovia",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "2013.15.1",
    "face": "FaceBalai7.jpg",
    "echelle": 62,
    "diagonale": "DiagonaleBalai7.jpg",
    "Détails": "",
    "Description": "Pour balayer l'intérieur des maisons",
    "Type": "",
    "Matière": "sorgho, tissu",
    "Pays": "Ukraine",
    "Ville": "Nikolaev",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "MNHN 2010.7.16",
    "face": "FaceBalai8.jpg",
    "echelle": 64,
    "diagonale": "DiagonaleBalai8.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "sorgho, fibres végétales",
    "Pays": "Ukraine",
    "Ville": "Nikolaev",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "MNHN 2012.6.12",
    "face": "FaceBalai9.jpg",
    "echelle": 49,
    "diagonale": "DiagonaleBalai9.jpg",
    "Détails": "",
    "Description": "balai constitué de lamelles de folioles de palmier à huile, réunies en botte à l’aide d’un lien de même matière.",
    "Type": "",
    "Matière": "palmier à huile",
    "Pays": "Libéria",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "2013.1.42",
    "face": "FaceBalai10.jpg",
    "echelle": 85,
    "diagonale": "DiagonaleBalai10.jpg",
    "Détails": "",
    "Description": "sert à balayer les rues, peut servir d'attise feu",
    "Type": "",
    "Matière": "fibres végétales",
    "Pays": "Libéria",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "2011.13.407",
    "face": "FaceBalai11.jpg",
    "echelle": 44,
    "diagonale": "DiagonaleBalai11.jpg",
    "Détails": "",
    "Description": "pour balayer, nettoyer",
    "Type": "",
    "Matière": "cypéracées",
    "Pays": "Lesotho",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "2011.13.410",
    "face": "FaceBalai12.jpg",
    "echelle": 42,
    "diagonale": "DiagonaleBalai12.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "cypéracées et poils d'animaux",
    "Pays": "Lesotho",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "échantillons de blé",
    "face": "FaceBalai13.jpg",
    "echelle": 12,
    "diagonale": "DiagonaleBalai13.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "blé",
    "Pays": "Ukraine",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "?gerbe fleurie",
    "face": "FaceBalai14.jpg",
    "echelle": 40,
    "diagonale": "DiagonaleBalai14.jpg",
    "Détails": "",
    "Description": "bouquet de plantes cueillies au mois d'août pour la fête de Saint Macovej (15 aot), Protecteur des plantes (blé…)",
    "Type": "",
    "Matière": "blé, fleurs, coton",
    "Pays": "Ukraine",
    "Ville": "Kiev",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": 2012.2,
    "face": "FaceBalai15.jpg",
    "echelle": 62,
    "diagonale": "DiagonaleBalai15.jpg",
    "Détails": "",
    "Description": "chasse-mouche",
    "Type": "",
    "Matière": "plastique, chambre à air, bois",
    "Pays": "Libéria",
    "Ville": "Monrovia",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "ETB-MX-SB-2012-12",
    "face": "FaceBalai16.jpg",
    "echelle": 14,
    "diagonale": "DiagonaleBalai16.jpg",
    "Détails": "",
    "Description": "brosse pour le pelage des chevaux",
    "Type": "",
    "Matière": "fibres d'agave",
    "Pays": "Mexique",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "ETB-MX-SB-2012-17",
    "face": "FaceBalai17.jpg",
    "echelle": 16,
    "diagonale": "DiagonaleBalai17.jpg",
    "Détails": "",
    "Description": "provient d'une quicaillerie",
    "Type": "",
    "Matière": "crins de cheval, bois",
    "Pays": "Mexique",
    "Ville": "Guadalajara",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "ETB-MX-SB-2012-13",
    "face": "FaceBalai18.jpg",
    "echelle": 16,
    "diagonale": "DiagonaleBalai18.jpg",
    "Détails": "",
    "Description": "brosse à tout faire",
    "Type": "",
    "Matière": "racines d'agaves",
    "Pays": "Mexique",
    "Ville": "El Arenal",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "ETB-MX-SB-2011-8",
    "face": "FaceBalai19.jpg",
    "echelle": 8,
    "diagonale": "DiagonaleBalai19.jpg",
    "Détails": "",
    "Description": "brosse de cuisine (escobetilla)",
    "Type": "",
    "Matière": "racines d'agaves",
    "Pays": "Mexique",
    "Ville": "El Grullo",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "don JM Danglard 25.04.1973 (?)",
    "face": "FaceBalai20.jpg",
    "echelle": 20,
    "diagonale": "DiagonaleBalai20.jpg",
    "Détails": "",
    "Description": "brosse de boulanger (usage précis?) pain parès cuisson, nettoyer banettes...",
    "Type": "",
    "Matière": "tiges de plumes (dinde)",
    "Pays": "France",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "don JM Danglard 25.04.1973",
    "face": "FaceBalai21.jpg",
    "echelle": 18,
    "diagonale": "DiagonaleBalai21.jpg",
    "Détails": "",
    "Description": "brosse de boulanger (usage précis?)",
    "Type": "",
    "Matière": "tiges de plumes (dinde)",
    "Pays": "France",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "don JM Danglard 25.04.1973 (?)",
    "face": "FaceBalai22.jpg",
    "echelle": 18,
    "diagonale": "DiagonaleBalai22.jpg",
    "Détails": "",
    "Description": "brosse artisanale de boulanger non-finie",
    "Type": "",
    "Matière": "tiges de plumes (dinde)",
    "Pays": "France",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "ETB-MX-SBPR-2017-30",
    "face": "FaceBalai23.jpg",
    "echelle": 10,
    "diagonale": "DiagonaleBalai23.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "fibres végétales, plastique",
    "Pays": "Mexique",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "ETB-MX-SB-2011-38",
    "face": "FaceBalai24.jpg",
    "echelle": 16,
    "diagonale": "DiagonaleBalai24.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "istles d'agave",
    "Pays": "Mexique",
    "Ville": "Guadalajara",
    "Prix (monnaie locale)": "25$",
    "": "",
    "__1": ""
  },
  {
    "Balais": "sanglier",
    "face": "FaceBalai25.jpg",
    "echelle": 8,
    "diagonale": "DiagonaleBalai25.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "poils de sanglier",
    "Pays": "France",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "brossette écouvillon",
    "face": "FaceBalai26.jpg",
    "echelle": 7,
    "diagonale": "DiagonaleBalai26.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "poils de sanglier",
    "Pays": "France",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "brosse vademecum",
    "face": "FaceBalai27.jpg",
    "echelle": 27,
    "diagonale": "DiagonaleBalai27.jpg",
    "Détails": "",
    "Description": "brosse à dents (?)",
    "Type": "",
    "Matière": "poils de sanglier",
    "Pays": "France",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "pinceau brosse renard",
    "face": "FaceBalai28.jpg",
    "echelle": 10,
    "diagonale": "DiagonaleBalai28.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "soies de porc",
    "Pays": "France",
    "Ville": "",
    "Prix (monnaie locale)": "2F20",
    "": "",
    "__1": ""
  },
  {
    "Balais": "pinceau",
    "face": "FaceBalai29.jpg",
    "echelle": 14,
    "diagonale": "DiagonaleBalai29.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "poils d'animaux, métal, bois",
    "Pays": "France",
    "Ville": "",
    "Prix (monnaie locale)": "2F25",
    "": "",
    "__1": ""
  },
  {
    "Balais": "brosse jaune",
    "face": "FaceBalai30.jpg",
    "echelle": 9,
    "diagonale": "DiagonaleBalai30.jpg",
    "Détails": "",
    "Description": "brosse à dents (?)",
    "Type": "",
    "Matière": "soies de porc",
    "Pays": "France",
    "Ville": "",
    "Prix (monnaie locale)": "0F65",
    "": "",
    "__1": ""
  },
  {
    "Balais": "brosse plate",
    "face": "FaceBalai31.jpg",
    "echelle": 13,
    "diagonale": "DiagonaleBalai31.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "soies de porc",
    "Pays": "France",
    "Ville": "",
    "Prix (monnaie locale)": "2F95",
    "": "",
    "__1": ""
  },
  {
    "Balais": "blaireau plisson",
    "face": "FaceBalai32.jpg",
    "echelle": 7,
    "diagonale": "DiagonaleBalai32.jpg",
    "Détails": "",
    "Description": "pour le rasage",
    "Type": "",
    "Matière": "poils de blaireau, ascétate",
    "Pays": "France",
    "Ville": "",
    "Prix (monnaie locale)": "17F60",
    "": "",
    "__1": ""
  },
  {
    "Balais": "ETB-PE-SB-2014-74",
    "face": "FaceBalai33.jpg",
    "echelle": 46,
    "diagonale": "DiagonaleBalai33.jpg",
    "Détails": "",
    "Description": "chasse-mouche",
    "Type": "",
    "Matière": "Astrocaryum Chambira",
    "Pays": "Pérou",
    "Ville": "Iquitos",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "ETB-PG-AB-2015-002",
    "face": "FaceBalai34.jpg",
    "echelle": 36,
    "diagonale": "DiagonaleBalai34.jpg",
    "Détails": "",
    "Description": "attise-feu, fait d'une feuille d'un bout",
    "Type": "",
    "Matière": "palmier",
    "Pays": "Papouasie Nouvelle-Guinée",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "balayette coco Cambodge",
    "face": "FaceBalai35.jpg",
    "echelle": 22,
    "diagonale": "DiagonaleBalai35.jpg",
    "Détails": "",
    "Description": "pour balayer le sol",
    "Type": "",
    "Matière": "fibres de coco",
    "Pays": "Cambodge",
    "Ville": "Kampot",
    "Prix (monnaie locale)": "2$",
    "": "",
    "__1": ""
  },
  {
    "Balais": "ETB-ES-FA-2016-004",
    "face": "FaceBalai36.jpg",
    "echelle": 24,
    "diagonale": "DiagonaleBalai36.jpg",
    "Détails": "",
    "Description": "balayette",
    "Type": "",
    "Matière": "Stipa Tenacissima",
    "Pays": "Espagne",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "ETB-CO-SB-2012-012",
    "face": "FaceBalai37.jpg",
    "echelle": 30,
    "diagonale": "DiagonaleBalai37.jpg",
    "Détails": "",
    "Description": "éventail pour attiser le feu",
    "Type": "",
    "Matière": "typha",
    "Pays": "Colombie",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "ETB-UZ-EH-2014-9 (?) Uz ? Vz ?",
    "face": "FaceBalai38.jpg",
    "echelle": 23,
    "diagonale": "DiagonaleBalai38.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "sorgho",
    "Pays": "Ouzbékistan",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": "même série qu'un autre"
  },
  {
    "Balais": "balai Mayotte",
    "face": "FaceBalai39.jpg",
    "echelle": 100,
    "diagonale": "DiagonaleBalai39.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "palmier",
    "Pays": "Mayotte",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "balai MNHN ménage",
    "face": "FaceBalai40.jpg",
    "echelle": 92,
    "diagonale": "DiagonaleBalai40.jpg",
    "Détails": "",
    "Description": "balai domestique\", nettoie le sol de l'unité",
    "Type": "",
    "Matière": "soies de porc",
    "Pays": "France",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "balai chaussée",
    "face": "FaceBalai41.jpg",
    "echelle": 88,
    "diagonale": "DiagonaleBalai41.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "plastique",
    "Pays": "France",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "balai feuilles de palmes",
    "face": "FaceBalai42.jpg",
    "echelle": 84,
    "diagonale": "DiagonaleBalai42.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "feuilles de palmier",
    "Pays": "? Borassus",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "balai sasasa?",
    "face": "FaceBalai43.jpg",
    "echelle": 67,
    "diagonale": "DiagonaleBalai43.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "bambou, palmier",
    "Pays": "",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "balai manche jaune",
    "face": "FaceBalai44.jpg",
    "echelle": 71,
    "diagonale": "DiagonaleBalai44.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "sorgho",
    "Pays": "Asie du Sud-Est",
    "Ville": "",
    "Prix (monnaie locale)": "acheté en France",
    "": "",
    "__1": ""
  },
  {
    "Balais": "ETB-UZ-EH-2014-009",
    "face": "FaceBalai45.jpg",
    "echelle": 57,
    "diagonale": "DiagonaleBalai45.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "roseaux, graminés (phragmites)",
    "Pays": "Ouzbékistan",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "balai foncé petite poignée",
    "face": "FaceBalai46.jpg",
    "echelle": 69,
    "diagonale": "DiagonaleBalai46.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "roseaux, rotin",
    "Pays": "Asie",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "balayette bambou Cambodge",
    "face": "FaceBalai47.jpg",
    "echelle": 69,
    "diagonale": "DiagonaleBalai47.jpg",
    "Détails": "",
    "Description": "pour balayer le sol",
    "Type": "",
    "Matière": "roseaux, bambou",
    "Pays": "Cambodge",
    "Ville": "Kampot",
    "Prix (monnaie locale)": "2$",
    "": "",
    "__1": ""
  },
  {
    "Balais": "RCA SCAD 2006",
    "face": "FaceBalai48.jpg",
    "echelle": 48,
    "diagonale": "DiagonaleBalai48.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "palmier",
    "Pays": "République Centreafricaine",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "balai tomate",
    "face": "FaceBalai49.jpg",
    "echelle": 49,
    "diagonale": "DiagonaleBalai49.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "palmier",
    "Pays": "Angola",
    "Ville": "Uige",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "balai tissé monomatière",
    "face": "FaceBalai50.jpg",
    "echelle": 42,
    "diagonale": "DiagonaleBalai50.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "graminés, rotin",
    "Pays": "République Centreafricaine",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "balai tissé perlé",
    "face": "FaceBalai51.jpg",
    "echelle": 44,
    "diagonale": "DiagonaleBalai51.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "graminés, perles de rocailles",
    "Pays": "Afrique de l'Ouest",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "RCA 1969 chambre à air",
    "face": "FaceBalai52.jpg",
    "echelle": 42,
    "diagonale": "DiagonaleBalai52.jpg",
    "Détails": "",
    "Description": "balai \"banu",
    "Type": "",
    "Matière": "graminés, chambre à air",
    "Pays": "République Centreafricaine",
    "Ville": "Bangui",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "ETB-NA-SB-2017-30",
    "face": "FaceBalai53.jpg",
    "echelle": 43,
    "diagonale": "DiagonaleBalai53.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "graminés, palmier",
    "Pays": "Namibie",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "ETB-NA-SB-2017-31",
    "face": "FaceBalai54.jpg",
    "echelle": 43,
    "diagonale": "DiagonaleBalai54.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "graminés, palmier",
    "Pays": "Namibie",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "ETB-CO-SB-2015-15",
    "face": "FaceBalai55.jpg",
    "echelle": 88,
    "diagonale": "DiagonaleBalai55.jpg",
    "Détails": "",
    "Description": "Tête d'un balai (manche à rajouter à la maison)",
    "Type": "",
    "Matière": "fibres végétales",
    "Pays": "Colombie",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "",
    "face": "FaceBalai56.jpg",
    "echelle": 54,
    "diagonale": "DiagonaleBalai56.jpg",
    "Détails": "",
    "Description": "",
    "Type": "",
    "Matière": "palmier, tissu",
    "Pays": "Afrique du Nord",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "",
    "face": "FaceBalai57.jpg",
    "echelle": 33,
    "diagonale": "DiagonaleBalai57.jpg",
    "Détails": "",
    "Description": "Balayette",
    "Type": "",
    "Matière": "palmier, fibres végétales",
    "Pays": "Afrique du Nord",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "",
    "face": "FaceBalai58.jpg",
    "echelle": 41,
    "diagonale": "DiagonaleBalai58.jpg",
    "Détails": "",
    "Description": "Balayette",
    "Type": "",
    "Matière": "palmier, métal",
    "Pays": "Afrique du Nord",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "",
    "face": "FaceBalai59.jpg",
    "echelle": 40,
    "diagonale": "DiagonaleBalai59.jpg",
    "Détails": "",
    "Description": "Balai",
    "Type": "",
    "Matière": "tiges de céréales, teinture, tissu",
    "Pays": "Afrique du Nord",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "",
    "face": "FaceBalai60.jpg",
    "echelle": 22,
    "diagonale": "DiagonaleBalai60.jpg",
    "Détails": "",
    "Description": "Balai",
    "Type": "",
    "Matière": "palmier",
    "Pays": "Afrique du Nord",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "",
    "face": "FaceBalai61.jpg",
    "echelle": 19,
    "diagonale": "DiagonaleBalai61.jpg",
    "Détails": "",
    "Description": "Balayette",
    "Type": "",
    "Matière": "palmier, fibres végétales",
    "Pays": "Afrique du Nord",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "",
    "face": "FaceBalai62.jpg",
    "echelle": 30,
    "diagonale": "DiagonaleBalai62.jpg",
    "Détails": "",
    "Description": "Balai",
    "Type": "",
    "Matière": "palmier dattier",
    "Pays": "Afrique du Nord",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "",
    "face": "FaceBalai63.jpg",
    "echelle": 24,
    "diagonale": "DiagonaleBalai63.jpg",
    "Détails": "",
    "Description": "Chasse-mouche",
    "Type": "",
    "Matière": "queue de colobe, perles de rocailles, fil, bois",
    "Pays": "Afrique de l'Ouest",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "",
    "face": "FaceBalai64.jpg",
    "echelle": 14,
    "diagonale": "DiagonaleBalai64.jpg",
    "Détails": "",
    "Description": "Bouquet rituel pour la Saint-Macovej",
    "Type": "",
    "Matière": "épis de blé, plastique",
    "Pays": "Ukraine",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  },
  {
    "Balais": "",
    "face": "FaceBalai65.jpg",
    "echelle": 7,
    "diagonale": "DiagonaleBalai65.jpg",
    "Détails": "",
    "Description": "Escobetilla pour faire la vaisselle mais aussi parfois à pousser les aliments en train de cuire dans la poêle",
    "Type": "",
    "Matière": "istles d'agave, fil de fer, fibres végétales",
    "Pays": "Mexique",
    "Ville": "",
    "Prix (monnaie locale)": "",
    "": "",
    "__1": ""
  }
]



console.log(section);
balais = shuffle(balais);

for(var i=0; i < balais.length; i++){
  //console.log(balais[i].diagonale);
  var myImage = document.createElement('figure');
  var myBalai = document.createElement('img');
  var taille = balais[i].echelle;
  myImage.setAttribute('data-pays', balais[i].Pays);
  myImage.setAttribute('data-matiere', balais[i].Matière);
  myImage.setAttribute('data-description', balais[i].Description);
  // myImage.style.width = taille + '%';
  myImage.setAttribute('data-image', balais[i].face);
  myBalai.src = 'images/jpeg1200/'+ balais[i].diagonale;
  // myBalai.src = 'images/jpeg1200/'+ balais[random(2, 65)].diagonale;
  myBalai.alt = balais[i].Description;
  myImage.appendChild(myBalai);
  section.appendChild(myImage);

  myImage.addEventListener('click', function (event) {
   var pays = this.getAttribute('data-pays');
  var matiere = this.getAttribute('data-matiere');
                  var description = this.getAttribute('data-description');
   var image = this.getAttribute('data-image');
   var elPays = document.querySelector('.pays > span');
  var elMatiere = document.querySelector('.matiere > span');
                  var elDescription = document.querySelector('.description > span');
   var elImage = document.querySelector('.image');
   elPays.innerHTML = pays;
  elMatiere.innerHTML = matiere;
                elDescription.innerHTML = description;
   elImage.src = 'images/jpegface/'+image;
    popup.style.display = 'flex';
  });
}

// croix.addEventListener('click', function (event) {
//
// }

  var croix = document.querySelector(".croix");

  // croix.innerHTML = croix;
  croix.onclick = function(event) {
    popup.style.display = 'none';

  }


  function shuffle(sourceArray) {
      for (var i = 0; i < sourceArray.length - 1; i++) {
          var j = i + Math.floor(Math.random() * (sourceArray.length - i));

          var temp = sourceArray[j];
          sourceArray[j] = sourceArray[i];
          sourceArray[i] = temp;
      }
      return sourceArray;
  }
