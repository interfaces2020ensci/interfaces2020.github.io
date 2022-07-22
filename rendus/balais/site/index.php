<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
  <link rel="stylesheet" href="style.css">
  <meta charset="utf-8">
  <title>nuée de l'homme</title>
</head>

<body>
<?php
  //Set the password
  $password = "balais";
  //Let the user access protected content on page if the password match with the password that you have provided
  if (isset($_POST["password"]) && ($_POST["password"]=="$password")) { ?>

  <header>
    <h1>nuée de l'homme</h1>
    <h2>édition<span class="bouton"><</span></h2>
  </header>

  <aside class="edition">

  </aside>

  <section class="balais"></section>

    <!-- <p class ="croix">X</p> -->

    <!-- TENTATIVE DE R2ORGANISATION HIERARCHIE POUR MANIPULER MIEUX LES ELEMENTS -->
    <div class="popup">
      <div class="fondblanc">
      </div>
      <div class="legendes">
        <div class="pays"> <span></span>
        </div>
        <div class="matiere"> <span></span>
        </div>
        <div class="description"> <span></span>
        </div>
      </div>
      <figure class="image-wrapper">
        <img class="image" src="" alt="photo de face">
      </figure>
        <p class="croix">X</p>
    </div>

  <script type="text/javascript" src="script.js"></script>
  <?php
  } else{

    ?><div style="margin: 1em"> <?php

      //Show the wrong password notice
      if($_SERVER['REQUEST_METHOD'] == 'POST') { ?>
        <h2 style="color: red;">Mot de passe</h2>
      <?php } ?>
      <h2>Contenu protégé par mot de passe</h2>
      <form id ="myForm" method="post">
        <input name="password" type="password" size="25" maxlength="10"><input value="Submit" type="submit">
      </form>

    </div>

  <?php
   }
  ?>

</body>
</html>
