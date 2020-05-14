# Test de compétences (durée 10 heures)
## Principe de l'évaluation 
1. Le candidat dispose de 10 heures pour réaliser l'epreuve
2. Il est interdit de sortir de l'établissement pendant ces 10 heures sauf autorisation formelle de la direction de l'école
3. Le but de l'epreuve est de réaliser un CRUD en angular basé sur une API de films et d'acteurs
4. Pour découvrir les routes de l'API vous devez lire le fichier `server.ts` qui est dans le dossier server
5. C'est une évaluation Frontend et nous vous demandons de lire du code en nodeJs. C'est normal, un developpeur frontend doit etre capable de lire un CRUD très simple en Node. Nous demandons de lire, par de coder en node.

## Critères d'évaluation

Cet épreuve est notée sur 100 pour la partie exigences de code et 100 points de plus pour la réalisation des fonctionnalités

Attention, il est possible de dépasser les 100 points en ce qui concerne les fonctionnalités et ainsi d'avoir une note supérieure à 100/100 pour cette partie.

L'épreuve est structurée ainsi pour vous permettre de mettre en avant vos points forts et ne pas être trop pénalisé dans le cas où une compétences serait lacunaire. Soyez malin dans le choix des fonctionnalités à réaliser. Faites ce que vous trouvez le plus facile en premier. 


## Exigences de code (100 points)

### qualité générale du code 
Un code propre qui ne fonctionne pas aura une bien meilleure note qu'un code qui fonctionne mais en ne respectant pas la norme, les bonnes pratiques de code, etc. Le mieux étant d'avoir les deux évidement.

Des points seront enlevés s'il y a trop de mauvais noms de variables, fonctions, etc.

>  30 points

### bonne utilisation des models et interfaces 
Attention, des points en moins s'il n'y a aucun interface / model ou s'ils sont fait n'importe comment 

> 20 points 

### qualité et quantité des commits 
Attention: un seul commit avec tout le code à la fin de l'examen vaudra une note de quasiment 0. Nous devons pouvoir constater des commits tout au long de la journée

> 15 points

### architecture générale 

Les modules doivent être lazy loadé correctement et l'application structurée selon les bonnes pratiques (routes, modules, components, etc.)

> 15 points

### Utilisation correcte des reactive form 

> 10 points

### Utilisation correcte d'un framework UX

Comme material design, bootstrap, etc.

Le candidat peut choisir ce qu'il souhaite dans la mesure des outils les plus utilisés (ne pas utiliser un outil maison, ou très peu connu). 

> 10 points

## Réalisation des fonctionnalités (100 points)

### Navigation 

Le site doit proposer une barre de navigation visible dans toute l'application qui permet de se déplacer dans les différentes pages présentées ci-dessous

> 5 points

### Page d'accueil

#### Informations standards de la page d'accueil (facile) 

- Le nombre de films dans la BDD
- Le nombre d'acteurs dans la BDD 
- Un bouton pour ajouter un nouveau film bien en évidence  

> 5 points

#### Informations spéciales de la page d'accueil (plus difficile)

- Le nombre de film dont toutes les attributs ont bien été complétés. C'est à dire que si, sur un film, 'il manque une data, par exemple la date de création du film, ce film ne doit pas etre pris en compte dans le compteur.

> 5 points


- Une liste des films auquel il manque des datas. Par exemple si on créé un film et qu'on ne met pas d'image d'illustration, le film doit apparaitre dans la liste. Cette feature sert à savoir s'il y a des films qui doivent être complétés. C'est utile pour les personnes qui gèrent la BDD.

> 5 points


### fonctionnalités des acteurs (facile)

- page de création / edition d'un acteur
> 3 points

- page de liste de tous les acteurs
> 2 points 

- fonctionnalité de suppression d'un acteurs de la base de données
> 1 points

### fonctionnalités des films (moyen)
 
- Page de création d'un nouveau film
> 10 points

- Page d'édition / voir le detail d'un film existant. Attention ! la liste des acteurs du film doit apparaitre.
> 10 points

- Page de liste de tous les films.
> 10 points 

- Fonctionnalité de suppression d'un film.
> 5 points 

- Fonctionnalité d'ajouter / supprimer un acteur dans un film. Accessible depuis la page détail d'un film.

> 10 points


### fonctionnalités complémentaires (difficiles)

`Attention !` Nous vous conseillons de réaliser les fonctionnalités ci-dessous en dernier lieux car elles sont plus difficiles que les autres

- possibilité d'ajouter / enlever un film d'un acteur depuis la page détail d'un acteur
> 10 points
-  possibilité de supprimer plusieurs acteurs d'un coup en sélectionnant une liste à puce depuis la page de détail d'un film
> 10 points

- possibilité de rechercher un film par nom, dans la liste des films
> 10 points

- gestion des erreurs et des messages affichés à l'utilisateur (par exemple une pop-up de confirmation avant une suppression / des messages d'erreurs propres et clairs dans un formulaire s'il y a une erreur sur un field) 

> 10 points


## Lancer le serveur de l'API
1. installer les dépendances dans le dossier server
2. lancer la task `serve`

## Comment pusher mon travail ?
1. créer un repo sur gitlab ou github
2. mettre ce repo en public
3. faire vos développements
4. quand vous avez terminé envoyé l'adresse du repo à l'adresse `sebastien@white-rabbit.dev` en mettant bien en objet `[TEST][PROMO1][NON DE FAMILLE]`

ATTENTION : ne rien pusher sur le repo de l'exercice


## infos supplémentaires et conseils

## infos

- Les images sont accessibles sur l'url `statics`, exemple : `http://localhost:3015/statics/img/avatar.jpg`

- La qualité esthétique et l'UX de votre travail ne sera pas jugée en profondeur, faites quelque chose d'acceptable et facile à comprendre mais ne passez pas de temps à essayer de faire quelque chose de superbe

- Attention à la structure des données : comme vous pourrez le constater il y a une liaison entre les films et les acteurs

### ATTENTION : à ne pas faire
- ne faites pas d'authent 
- ne faites pas de pages autres que celles demandées 
- attention ne pas faire de système d'upload des photos, les photos sont de simples liens vers des documents situés dans le dossier "statics"


## choix des outils / obligations / interdictions

- Angular version 8 ou 9 obligatoire.

- Le candidat est libre d'utiliser tout les framework UX angular souhaités (bootstrap, material, etc.)

- Le candidat est libre d'aller sur internet pour chercher des ressources

- Le candidat est libre d'utiliser des notes de cours prises pendant sa scolarité

- Le candidat ne doit pas se faire aider par un tiers, que ce soit sur messagerie, forum, ou autre

- Le candidat peut s'inspirer de code trouvé sur des sites de type Stack Overflow, mais un usage trop important des copier coller sera detécté et sanctionné. 

- Le candidat ne doit pas utiliser du code qu'il aurait préparé en préparation du test
