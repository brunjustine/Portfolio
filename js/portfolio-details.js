let portfolioData = [
    {
        "keyname":"TinDoctor",
        "title" : "TinDoctor",
        "type" : "Projet Web",
        "date" : "2018-2019",
        "description" : `Le module projet de cette année avait pour objectif de développer une application pour un client. Nous avons
        été encouragé à travailler de manière agile, en suivant des sprints avce Scrum master et un product owner.
        <br><br>
        Composé de 10 étudiants, notre groupe avait pour but de réaliser une application web visant la mise en relation
        des médecins généralistes remplaçants disponibles avec les structures recherchant des ressources. L’objectif final
        étant d’informatiser cette communication entre médecins et/ou collectivités à travers une application simple d’utilisation, 
        qui assure la pérennité des échanges et permet de trouver un remplacement / collaboration / installation rapidement et avec efficacité.
        <br><br>
        Le site se décompose en plusieurs parties : 
        <ul>
          <li>- un tableau de bord avec une carte, un profil, les annonces correspondants à nos critères et les sponsors.</li>
          <li>- un espace profil pour gérer ses informations personnelles.</li>
          <li>- un espace mes annonces où l'on peut voir les annonces que l'on a créer et les modifier.</li>
          <li>- un espace administration où l'on peut gérer les établissments de santé, les annonces, les sponsors et les utilisateurs. </li>
          <li>- un espace pour créer des offres/montrer ses disponibilités.</li>
         </ul>`,
        "images":["2021-02-03 16-33-48.png","2021-02-03 16-34-23.png","2021-02-03 16-34-44.png","2021-02-03 16-35-03.png","2021-02-03 16-35-28.png"],
        "link":"",
        "technos":["Angular"," Node JS"]
    },
    {
        "keyname":"LovYourCuisine",
        "title" : "LovYourCuisine",
        "type" : "Projet Web",
        "date" : "2017",
        "description" : `Site web permettant la recherche de recette avec commande automatique dans le magasin bio le plus proche. Composée d'un epsace admin, profil répertoire de recette, panier ...`,
        "images":["2018-06-02 19-01-25.png","2018-06-02 19-01-30.png","2018-06-02 19-01-33.png","2018-06-02 19-02-21.png"],
        "link":"",
        "technos":["Javascript","MySql","PHP","HTML/CSS"]
    },
    {
      "keyname":"VDSA",
      "title" : "VDSA",
      "type" : "Projet Web",
      "date" : "2018",
      "description" : `La société VDSA vend, par l’intermédiaire de ses commerciaux, des pièces détachées
      et du matériel de réparation de véhicules soit à des particuliers, soit à des garages qui ont
      aussi leur propre magasin.<br>
      <br> 
      Le site dispose d’une page de connexion qui permettera d’accéder à la page principale. 
      Il s’agit d’un tableau de bord qui permet de visualiser sous forme de chiffres et graphiques les informations sur 
      les chiffres d’affaires ainsi que les marges d’un client,
      d’un produit, voire d’une famille de produit.
      Il y a une deuxième page permettant de visualiser les mêmes données que sur le
      premier tableau de bord, mais cette fois de façon géolocalisée.
      <br>
      <br>
      Chaque nouvelle demande de compte devra être faite par e-mail auprès de l’adminis-
      trateur du site. Tous les utilisateurs pourront changer leur propre mot de passe soit en
      utilisant l’ancien soit en le réinitialisant.`,
      "images":["admin2.png","chiffresvdsa.png","tableaudebordvdsa.png"],
      "link":"",
      "technos":["Python (Django)", "MySql"]
    },
    {
      "keyname":"Uno",
      "title" : "Uno",
      "type" : "Projet Web",
      "date" : "2019",
      "description" : `Le projet est séparé en deux parties : la partie jeu (règle,déplacement des cartes) et la partie serveur (salon, multijoueur).<br>
      Partie Jeu : gérer la répartition des cartes selon le nombre de joueur 
      (2 joueurs, 3 joueurs et 4 joueurs), de l’affichage des cartes selon le rôle (mes cartes faces visibles, 
        les cartes des autres faces cachées), le carrousel sur les cartes dans la main, piocher des cartes, mettre les cartes posées 
        dans la pioche si la pioche est vide.<br><br>
      Partie Serveur : Système de salon pour mettre des parties multijoueurs en utilisant un websocket.
      `,
      "images":["2021-02-03 17-05-38.png","2021-02-04 22-27-04.png"],
      "link":"",
      "technos":["HTML/CSS", "Javascript","WebSocket"]
    },
    {
      "keyname":"PlateformeEtudiante",
      "title" : "Plateforme étudiante",
      "type" : "Projet Web",
      "date" : "2021",
      "description" : `Intranet pour une école. Pour enregistrer, lister et consulter le profil d'étudiants.
      `,
      "images":["2021-05-03 19-55-38.png","2021-05-03 19-56-06.png"],
      "link":"https://github.com/brunjustine/plateforme-etudiant",
      "technos":["HTML/CSS", "TypeScript","Angular"]
    },
    {
      "keyname":"TODOList",
      "title" : "TODO List",
      "type" : "Projet Web",
      "date" : "2021",
      "description" : `Application permettant de gérer des listes de tâches. 
      Possibilité de créer, supprimer, modifier des listes de tâches et des tâches, 
      de créer de nouveaux utilisateurs.les listes de tâches ne sont disponibles que pour les utilisateurs 
      qui se sont connectés.
      `,
      "images":["2021-05-03 19-52-21.png","2021-05-03 19-53-22.png"],
      "link":["https://github.com/brunjustine/flask-api-todos","https://github.com/brunjustine/vuejs-front-todo"],
      "technos":["VueJS","Flask"]
    },
    {
      "keyname":"Ravioleat",
      "title" : "Ravioleat",
      "type" : "Projet Web",
      "date" : "2021",
      "description" : `Projet de fin d'étude. Site de comparaison des applications de livraison à domicile. 
      Les plateformes de livraison à domicile choisi pour ce projet sont Uber eats, Just eat et Deliveroo.<br>
      Ravioleat permet de savoir laquelle de ces applications est la plus avantageuse, laquelle offre les services les moins chers. 
      La livraison la plus rapide, ,e plus de choix ou au contraire lorsqu'on veut 
      commander dans un restaurant mais qu'on ne sait pas sur quelle plateforme de livraison il se trouve.
      Possède un dashboard avec la liste des restaurants situés autour de l'adresse entrée, la possiblité de filtrer ces choix, 
      de rechercher selon un mot clés et de voir le menu pour un restaurant particulier ainsi qu'une carte avec la position de chacun des restaurants.
      `,
      "images":[],
      "link":"http://3.143.203.160:8080/",
      "technos":["VueJS","Flask"]
    },
    {
      "keyname":"BotDiscord",
      "title" : "Bot Discord",
      "type" : "Application",
      "date" : "2021",
      "description" : `Création d'un bot discord capable d'interagir avec l'API Chuck Norris Jokes.
      `,
      "images":[],
      "link":"https://github.com/brunjustine/bot-discord-chuckNorris",
      "technos":["NodeJS"]
    },

    {
      "keyname":"ElasticSearch",
      "title" : "ElasticSearch",
      "type" : "Cours",
      "date" : "2021",
      "description" : `Ce cours consistait à introduire les notions environnant l'Elastic Search.<br>
      Nous avons vu les notions :<br>
      <ul>
      <li>- d'un index de recherche et les situations dans lesquels les utiliser, comment ils permettaient d'optimiser les performances de recherche.</li>
      <li>- Elastic search, un moteur de stockage distribué dans lequel tous les champs sont indexés, un moteur de recherche et de statistique.</li>
      <li>- l'utilisation d'outil de développement comme Kibana pour visualiser et interagir avec les données.</li>
      <li>- les clusters</li>
      </ul>
      Ainsi que les 3 éléments principaux à maîtriser pour exploiter eleastic search à savoir : le mapping, l'analyse (comment le texte doit être transformé en token, ...) et le query DSL<br>.
      Le cours était structuré autour d'exercices pratiques.`,
      "images":[],
      "link":"",
      "intervenant":"Benjamin Clay",
      "technos":[]
  },
  {
    "keyname":"SoftwareCraftsmanship",
      "title" : "Software craftsmanship",
      "type" : "Cours",
      "date" : "2021",
      "description" : `Le Software craftsmanship, est une philosophie de développement logiciel visant à voir l'informatique non pas comme une science mais comme un artisanat.
      Avec comme manifeste les principes suivants:
      <ul>
      <li>- Non seulement les logiciels qui fonctionnent, mais aussi des logiciels bien conçus.</li>     
      <li>- Nous ne nous contentons pas de réagir au changement, mais aussi l'ajout constant de valeur.</li>     
      <li>- Pas seulement les individus et les interactions, mais aussi une communauté de professionnels.</li>     
      <li>- Pas seulement la collaboration avec les clients, mais aussi des partenariats productifs.</li>     
      </ul>     
      <br>    
      Cette idéologie s'accompagne de recommandations de bonnes pratiques à suivre :     
      <ul>     
      <li>- Gestion de projet : Scrum, Kanban.</li>     
      <li>- Développement : Pairprogrammingg, Mob Programming, BDD, TDD, DDD, ATDD.</li>     
      <li>- Monté en compétence : Coding Dojo, Kata, Ateliers Craft, Coderevieww.</li>     
      <li>- Déploiement : Feature Branching, Trunk Basedevelopmentt, CI/CD.</li>     
      </ul>`,
      "images":[],
      "link":"",
      "intervenant":"Arthur Magne",
      "technos":[]
  },
  {
    "keyname":"RGPD",
      "title" : "RGPD",
      "type" : "Cours",
      "date" : "2021",
      "description" : `Cours de sensibilisation sur les Données Personnelles et leurs traitements.
      <br>
      Le cours s'articulait autour d'ateliers dans lesquels on étudiait des cas concrets de pseudonymisation, d'anonymisation, de demande consentement et des cookies.
      <br>
      La deuxième partie du cours concernait les risques liés aux transferts de données et aux hébergeurs.`,
      "images":[],
      "link":"",
      "intervenant":"Lucie Anglade",
      "technos":[]
  },
  {
    "keyname":"OpenCloud",
      "title" : "Open Cloud",
      "type" : "Cours",
      "date" : "2021",
      "description" : ` Ce cours était un atelier d'installation d'un Cloud Open Source. 
      Pour cela nous avons déployé un cloud sur une machine virtuelle Debian en suivant un tutoriel Next Cloud.`,
      "images":[],
      "link":"<a href='https://www.tech2tech.fr/installer-nextcloud-sur-ubuntu-20-04'/> Next Cloud Tutorial</a>",
      "intervenant":"Vincent Dupoy",
      "technos":[]
  },
  {
    "keyname":"LeanManagement",
      "title" : "Lean Management",
      "type" : "Cours",
      "date" : "2021",
      "description" : `Agilité et Lean management sont sur un bateau 
      <br><br>
      Nous avons vu un rappel sur les différentes méthodes agiles (Scrum, extreme programming, ...), le manifeste agile et les principes sous-jacents au manifeste :
      <ul>
      <li>- Les individus et leurs interactions plutôt que les processus et les outils.</li>
      <li>- Des logiciels opérationnels plutôt que une documentation exhaustive.</li>
      <li>- La collaboration avec le client plutôt que une négociation contractuelle.</li>
      <li>- L'adaptation au changement plutôt que le suivi d'un plan.</li>
      </ul>
      <br><br>
      Ainsi qu'une introduction au lean IT, une philosophie et non une boîte à outils où le client est placer au-dessus de tout.
      IL peut être résumé en trois points principaux : satisfaire complétement le client, supprimer les obstacles qui causent des problèmes, développer les compétences techniques de chacun.
      <br><br>
      Pour répondre à ces objectifs, le lean management met à disposition des outils et des méthodes de travail.<br>
      Dans le lean management la mesure des performances, du travail, de la progression est essentielle. De plus, le management visuel est favorisé en utilisant post-it, dessin ...`,
      "images":[],
      "link":"",
      "intervenant":"Nicolas Ploquin",
      "technos":[]
  }
  ]
  
$(document).ready(function() {
    console.log(location.search.substring(1))
    let currentProjectKey = location.search.substring(1);
    portfolioData.forEach(project => {
        if (project.keyname == currentProjectKey) {
          let currentProject = project
          console.log(currentProject)
          if (currentProject) {
            document.getElementById("title").innerHTML = currentProject.title;
            document.getElementById("type").innerHTML = currentProject.type;
            if (currentProject.intervenant != ""  && !isNaN(currentProject.intervenant) ) {
              document.getElementById("informationDetailsProjects").innerHTML+=`<li><i class="bi bi-chevron-right"></i> <strong>Intervenant</strong>: <span id ="intervenant"></span></li>`
              document.getElementById("intervenant").innerHTML=currentProject.intervenant;
            }
            document.getElementById("date").innerHTML = currentProject.date;
            if (currentProject.link != "" && !isNaN(currentProject.link)) {
              document.getElementById("informationDetailsProjects").innerHTML+=`<li><i class="bi bi-chevron-right"></i> <strong>URL</strong>: <a href="#" id="url"></a></li>`
              document.getElementById("url").innerHTML=currentProject.link;
            }
            if (currentProject.technos.length>0) {
              document.getElementById("informationDetailsProjects").innerHTML+=`<li><i class="bi bi-chevron-right"></i> <strong>Technologies utilisées</strong>: <span id ="technos"></span></li>`
              document.getElementById("technos").innerHTML=currentProject.technos;
            }
            document.getElementById("description").innerHTML=currentProject.description;
            if (currentProject.images.length>0) {
              $.each( currentProject.images, function(i,image) {
                if (i==0) {
                  document.getElementById("carouselContainer").innerHTML += `
                  <div class="carousel-item active">
                      <img class="d-block w-100" src="asset/projects/`+currentProjectKey+`/`+image+`" alt="`+currentProject.keyname+` slide">
                    </div>
                  `
                } else {
                  document.getElementById("carouselContainer").innerHTML += `
                  <div class="carousel-item ">
                      <img class="d-block w-100" src="asset/projects/`+currentProjectKey+`/`+image+`" alt="`+currentProject.keyname+` slide">
                    </div>
                  `
                }              
            });
            }
          }
        }
      });   
  });