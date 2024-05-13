export default function ListingMovies() {
  const listing = [
    {
      Movie: {
        title: "Dragon Ball Z: Fusion",
        ID: "000",
        genre: "Animation, Action",
        description:
          "Dragon Ball Z: Fusion est un film d'animation basé sur la série Dragon Ball Z. Dans ce film, Goku et Vegeta doivent fusionner pour former Gogeta afin de combattre Janemba, un démon qui menace le monde des vivants et des morts.",
        note: "",
        year: "1995",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617055/FILMS/000_ebvn2w.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Jurassic Park",
        ID: "001",
        genre: "Science-fiction, Aventure",
        description:
          "Jurassic Park est un film de science-fiction réalisé par Steven Spielberg, basé sur le roman éponyme de Michael Crichton. Il met en scène un parc à thème peuplé de dinosaures clonés, qui échappent à leur confinement et menacent les visiteurs.",
        note: "",
        year: "1993",
        top: true,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617054/FILMS/001_wiyvdg.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Battle Royale",
        ID: "002",
        genre: "Action, Drame, Thriller",
        description:
          "Battle Royale est un film d'action, de drame et de thriller réalisé par Kinji Fukasaku. L'histoire se déroule dans une réalité alternative où des classes de lycéens sont forcées de s'affronter sur une île isolée jusqu'à ce qu'il ne reste qu'un seul survivant. Le film explore les thèmes de la violence, de la société et de la survie.",
        note: "",
        year: "2000",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617054/FILMS/002_yekkje.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Coco",
        ID: "003",
        genre: "Animation, Aventure",
        description:
          "Coco est un film d'animation produit par Pixar Animation Studios. Il suit l'histoire d'un jeune garçon mexicain, Miguel, qui se retrouve accidentellement transporté dans le royaume des morts, où il découvre les secrets de sa famille.",
        note: "",
        year: "2017",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617055/FILMS/003_fpo7xj.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Le Château Ambulant",
        ID: "004",
        genre: "Animation, Aventure",
        description:
          "Le Château Ambulant est un film d'animation japonais réalisé par Hayao Miyazaki. L'histoire suit une jeune fille nommée Sophie qui est transformée en vieille femme par une sorcière, et son voyage pour lever la malédiction.",
        note: "",
        year: "2004",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617054/FILMS/004_tfut4t.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Les Évadés",
        ID: "005",
        genre: "Drame, Crime",
        description:
          "Les Évadés est un film basé sur la nouvelle de Stephen King, Rita Hayworth et la Rédemption de Shawshank. Il raconte l'histoire d'un banquier injustement condamné qui devient ami avec un détenu expérimenté et tente de s'évader de prison.",
        note: "",
        year: "1994",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617054/FILMS/005_af8z4i.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Aladdin",
        ID: "006",
        genre: "Animation, Aventure",
        description:
          "Aladdin est un film d'animation produit par Walt Disney Animation Studios, inspiré du conte Aladin et la lampe merveilleuse. Il raconte l'histoire d'un jeune homme nommé Aladdin qui découvre une lampe magique et devient impliqué dans une aventure pour sauver la princesse Jasmine.",
        note: "",
        year: "1992",
        top: true,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617054/FILMS/006_rynj6v.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Le Roi Lion",
        ID: "007",
        genre: "Animation, Aventure",
        description:
          "Le Roi Lion est un film d'animation produit par Walt Disney Pictures. Il suit l'histoire de Simba, un jeune lion qui doit prendre sa place en tant que roi des terres des lions après la mort de son père, Mufasa.",
        note: "",
        year: "1994",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617054/FILMS/007_jef77p.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Il était une fois le Bronx",
        ID: "008",
        genre: "Drame",
        description:
          "Il était une fois le Bronx est un film dramatique réalisé par Robert De Niro. Il se déroule dans le Bronx, à New York, dans les années 1960, et suit l'histoire d'un jeune garçon italo-américain qui grandit dans un quartier en pleine évolution.",
        note: "",
        year: "1993",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617055/FILMS/008_rcardo.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Matrix",
        ID: "009",
        genre: "Science-fiction, Action",
        description:
          "Matrix est un film de science-fiction écrit et réalisé par les Wachowski. Il met en scène un programmeur informatique nommé Neo, qui découvre que le monde dans lequel il vit est une simulation contrôlée par des machines.",
        note: "",
        year: "1999",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617055/FILMS/009_kjqzso.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Batman contre le Fantôme Masqué",
        ID: "010",
        genre: "Animation, Action",
        description:
          "Batman contre le Fantôme Masqué est un film d'animation basé sur la série de bandes dessinées Batman. Il suit l'histoire de Batman qui enquête sur un mystérieux criminel connu sous le nom de Fantôme Masqué.",
        note: "",
        year: "1993",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617055/FILMS/010_irt4el.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Le Bon, la Brute et le Truand",
        ID: "011",
        genre: "Western",
        description:
          "Le Bon, la Brute et le Truand est un film de western spaghetti réalisé par Sergio Leone. Il se déroule pendant la guerre de Sécession et suit trois hommes, le Bon, la Brute et le Truand, qui cherchent un trésor caché.",
        note: "",
        year: "1966",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617055/FILMS/011_gi2vqw.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Le Cinquième Élément",
        ID: "012",
        genre: "Science-fiction, Aventure",
        description:
          "Le Cinquième Élément est un film de science-fiction réalisé par Luc Besson. Il se déroule dans un futur lointain et suit un chauffeur de taxi qui se retrouve impliqué dans une quête pour sauver la Terre d'une menace extraterrestre.",
        note: "",
        year: "1997",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617056/FILMS/012_tzmnuk.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Dragon Ball Z : Broly, le Super Guerrier",
        ID: "013",
        genre: "Animation, Action",
        description:
          "Dragon Ball Z : Broly, le Super Guerrier est un film d'animation basé sur la série Dragon Ball Z. Il suit l'histoire des guerriers Z qui affrontent Broly, un Saiyan surpuissant exilé sur une planète lointaine.",
        note: "",
        year: "1993",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617056/FILMS/013_yy6us6.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Le Tombeau des Lucioles",
        ID: "014",
        genre: "Animation, Drame",
        description:
          "Le Tombeau des Lucioles est un film d'animation japonais réalisé par Isao Takahata. Il suit l'histoire d'un jeune garçon et de sa sœur qui luttent pour survivre pendant les derniers jours de la Seconde Guerre mondiale au Japon.",
        note: "",
        year: "1988",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617056/FILMS/014_o6jer8.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Star Wars: Épisode I - La Menace fantôme",
        ID: "015",
        genre: "Science-fiction, Aventure",
        description:
          "Star Wars: Épisode I - La Menace fantôme est le premier volet de la prélogie de la saga Star Wars. Il suit les aventures de jeunes Anakin Skywalker, Obi-Wan Kenobi et la reine Amidala alors qu'ils font face à la montée du côté obscur.",
        note: "",
        year: "1999",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617056/FILMS/015_ogpuy6.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Star Wars: Épisode II - L'Attaque des clones",
        ID: "016",
        genre: "Science-fiction, Aventure",
        description:
          "Star Wars: Épisode II - L'Attaque des clones est le deuxième volet de la prélogie de la saga Star Wars. Il suit les aventures d'Anakin Skywalker alors qu'il devient un Jedi et tombe amoureux de Padmé Amidala, tout en se confrontant aux mystères de la Force et à l'émergence de la guerre des clones.",
        note: "",
        year: "2002",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617057/FILMS/016_zjtt0s.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Star Wars: Épisode III - La Revanche des Sith",
        ID: "017",
        genre: "Science-fiction, Aventure",
        description:
          "Star Wars: Épisode III - La Revanche des Sith est le troisième volet de la prélogie de la saga Star Wars. Il raconte la transformation d'Anakin Skywalker en Dark Vador et la montée de l'Empire Galactique sous l'impulsion du sénateur Palpatine.",
        note: "",
        year: "2005",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617057/FILMS/017_pqjskz.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Star Wars: Épisode IV - Un nouvel espoir",
        ID: "018",
        genre: "Science-fiction, Aventure",
        description:
          "Star Wars: Épisode IV - Un nouvel espoir est le premier film de la trilogie originale de la saga Star Wars. Il suit les aventures de Luke Skywalker, Han Solo, la princesse Leia et leurs alliés alors qu'ils luttent contre l'Empire Galactique et son redoutable vaisseau spatial, l'Étoile de la Mort.",
        note: "",
        year: "1977",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617057/FILMS/018_qi7nmr.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Star Wars: Épisode V - L'Empire contre-attaque",
        ID: "019",
        genre: "Science-fiction, Aventure",
        description:
          "Star Wars: Épisode V - L'Empire contre-attaque est le deuxième film de la trilogie originale de la saga Star Wars. Il suit la bataille entre l'Alliance Rebelle et l'Empire Galactique, ainsi que la formation de Luke Skywalker en tant que Jedi sous la tutelle du maître Yoda.",
        note: "",
        year: "1980",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617057/FILMS/019_jm9mgt.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Star Wars: Épisode VI - Le Retour du Jedi",
        ID: "020",
        genre: "Science-fiction, Aventure",
        description:
          "Star Wars: Épisode VI - Le Retour du Jedi est le troisième film de la trilogie originale de la saga Star Wars. Il suit les efforts de l'Alliance Rebelle pour détruire l'Empire Galactique et l'Étoile de la Mort, ainsi que la confrontation finale entre Luke Skywalker et Dark Vador.",
        note: "",
        year: "1983",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617057/FILMS/020_pasbca.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Star Wars: Épisode VII - Le Réveil de la Force",
        ID: "021",
        genre: "Science-fiction, Aventure",
        description:
          "Star Wars: Épisode VII - Le Réveil de la Force est le premier film de la trilogie de la suite de la saga Star Wars. Il suit les nouvelles aventures de Rey, Finn et Poe Dameron alors qu'ils s'opposent au Premier Ordre et recherchent le légendaire Luke Skywalker.",
        note: "",
        year: "2015",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617057/FILMS/021_zrzjfz.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Star Wars: Épisode VIII - Les Derniers Jedi",
        ID: "022",
        genre: "Science-fiction, Aventure",
        description:
          "Star Wars: Épisode VIII - Les Derniers Jedi est le deuxième film de la trilogie de la suite de la saga Star Wars. Il suit la lutte de la Résistance contre le Premier Ordre, ainsi que le parcours de Rey pour devenir une Jedi sous la tutelle de Luke Skywalker.",
        note: "",
        year: "2017",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617058/FILMS/022_kkjacn.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Star Wars: Épisode IX - L'Ascension de Skywalker",
        ID: "023",
        genre: "Science-fiction, Aventure",
        description:
          "Star Wars: Épisode IX - L'Ascension de Skywalker est le troisième et dernier film de la trilogie de la suite de la saga Star Wars. Il conclut l'histoire de Rey, Kylo Ren et de la lutte entre la Résistance et le Premier Ordre, ainsi que la saga Skywalker dans son ensemble.",
        note: "",
        year: "2019",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617058/FILMS/023_jwcfmp.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Le Dernier Samouraï",
        ID: "024",
        genre: "Action, Drame",
        description:
          "Le Dernier Samouraï est un film d'action et de drame réalisé par Edward Zwick. L'histoire se déroule au Japon à la fin du XIXe siècle et suit un ancien capitaine de l'armée américaine (interprété par Tom Cruise) qui est capturé par les samouraïs, mais finit par rejoindre leur cause et apprendre leurs traditions et leur code d'honneur.",
        note: "",
        year: "2003",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617058/FILMS/024_hjna0a.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Mafia Blues 2 : La Rechute",
        ID: "025",
        genre: "Comédie, Crime",
        description:
          "Mafia Blues 2 : La Rechute est une comédie criminelle réalisée par Harold Ramis. C'est la suite du film Mafia Blues. Dans ce film, Paul Vitti, un ancien parrain de la mafia, sort de prison et doit consulter un psychiatre pour retrouver sa santé mentale, mais les choses ne se passent pas comme prévu.",
        note: "",
        year: "2002",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617058/FILMS/025_yc1zii.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Cube",
        ID: "026",
        genre: "Science-fiction, Thriller",
        description:
          "Cube est un thriller de science-fiction réalisé par Vincenzo Natali. L'histoire suit un groupe de personnes qui se réveillent dans un labyrinthe cubique de pièces identiques, sans se souvenir de leur arrivée là-bas. Ils doivent naviguer à travers les pièges mortels et les tensions internes pour tenter de s'échapper.",
        note: "",
        year: "1997",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617059/FILMS/026_qw6gcz.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Alien, le huitième passager",
        ID: "027",
        genre: "Science-fiction, Horreur",
        description:
          "Alien, le huitième passager est un film de science-fiction et d'horreur réalisé par Ridley Scott. L'histoire suit l'équipage d'un vaisseau spatial commercial qui découvre une forme de vie extraterrestre meurtrière à bord de leur vaisseau.",
        note: "",
        year: "1979",
        top: true,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617059/FILMS/027_iikbd3.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Aliens, le retour",
        ID: "028",
        genre: "Science-fiction, Action",
        description:
          "Aliens, le retour est un film de science-fiction et d'action réalisé par James Cameron. Il est la suite directe du film Alien, le huitième passager. L'histoire suit Ellen Ripley alors qu'elle retourne sur la planète où son équipe a rencontré les aliens, cette fois-ci accompagnée d'une unité militaire.",
        note: "",
        year: "1986",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617062/FILMS/028_wvkfbk.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Alien 3",
        ID: "029",
        genre: "Science-fiction, Horreur",
        description:
          "Alien 3 est un film de science-fiction et d'horreur réalisé par David Fincher. L'histoire suit Ellen Ripley alors qu'elle atterrit sur une planète-prison infestée d'aliens. Elle doit trouver un moyen de survivre tout en affrontant les dangers qui l'entourent.",
        note: "",
        year: "1992",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617059/FILMS/029_j1lngi.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Alien, la résurrection",
        ID: "030",
        genre: "Science-fiction, Horreur",
        description:
          "Alien, la résurrection est un film de science-fiction et d'horreur réalisé par Jean-Pierre Jeunet. Il est la suite de Alien 3. L'histoire suit Ellen Ripley alors qu'elle est clonée et ramenée à la vie, mais elle découvre bientôt que les aliens ne sont jamais loin.",
        note: "",
        year: "1997",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617059/FILMS/030_yarppk.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Alien vs. Predator",
        ID: "031",
        genre: "Science-fiction, Action",
        description:
          "Alien vs. Predator est un film de science-fiction et d'action réalisé par Paul W. S. Anderson. Il met en scène un groupe d'archéologues et de mercenaires qui découvrent un temple ancien enfoui sous la glace en Antarctique, où se déroule un combat entre les aliens et les Predators.",
        note: "",
        year: "2004",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617059/FILMS/031_hvmyei.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Aliens vs. Predator: Requiem",
        ID: "032",
        genre: "Science-fiction, Action",
        description:
          "Aliens vs. Predator: Requiem est un film de science-fiction et d'action réalisé par les frères Strause. Il fait suite à Alien vs. Predator. L'histoire se déroule dans une petite ville américaine où les aliens et les Predators s'affrontent à nouveau, menaçant la survie des habitants.",
        note: "",
        year: "2007",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617060/FILMS/032_ir7xry.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Prometheus",
        ID: "033",
        genre: "Science-fiction, Horreur",
        description:
          "Prometheus est un film de science-fiction et d'horreur réalisé par Ridley Scott. Il se déroule dans le même univers que la franchise Alien mais précède les événements du premier film. L'histoire suit une équipe de scientifiques qui entreprend un voyage spatial pour découvrir les origines de l'humanité, mais se retrouve confrontée à des horreurs inattendues.",
        note: "",
        year: "2012",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617060/FILMS/033_cforvx.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Alien: Covenant",
        ID: "034",
        genre: "Science-fiction, Horreur",
        description:
          "Alien: Covenant est un film de science-fiction et d'horreur réalisé par Ridley Scott. Il fait suite à Prometheus et se déroule dans le même univers que la franchise Alien. L'histoire suit l'équipage d'un vaisseau spatial en mission de colonisation qui découvre un monde mystérieux habité par des créatures terrifiantes.",
        note: "",
        year: "2017",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617060/FILMS/034_ozsc5r.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "La Momie",
        ID: "035",
        genre: "Action, Aventure, Fantastique",
        description:
          "La Momie est un film d'action, d'aventure et fantastique réalisé par Stephen Sommers. L'histoire suit l'archéologue Rick O'Connell alors qu'il découvre une ancienne momie égyptienne maudite, ramenée à la vie et prête à semer le chaos dans le monde moderne.",
        note: "",
        year: "1999",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617060/FILMS/035_nlych9.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Lost in Translation",
        ID: "036",
        genre: "Drame, Romance",
        description:
          "Lost in Translation est un film dramatique et romantique écrit et réalisé par Sofia Coppola. L'histoire suit la rencontre fortuite entre Bob Harris, un acteur de cinéma en déclin, et Charlotte, une jeune femme délaissée par son mari, alors qu'ils se trouvent tous les deux à Tokyo. Leur amitié naissante offre un réconfort mutuel dans un pays étranger où ils se sentent déconnectés et isolés.",
        note: "",
        year: "2003",
        top: true,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617060/FILMS/036_gmyaqr.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Tarzan",
        ID: "037",
        genre: "Animation, Aventure, Famille",
        description:
          "Tarzan est un film d'animation produit par Disney. Il est basé sur le personnage légendaire créé par Edgar Rice Burroughs. L'histoire suit les aventures de Tarzan, un jeune homme élevé par des singes dans la jungle africaine, alors qu'il découvre sa véritable identité et affronte les défis de la civilisation.",
        note: "",
        year: "1999",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617061/FILMS/037_usxkst.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Men in Black",
        ID: "038",
        genre: "Science-fiction, Action, Comédie",
        description:
          "Men in Black est un film de science-fiction, d'action et de comédie réalisé par Barry Sonnenfeld. L'histoire suit les agents secrets J et K, membres d'une organisation gouvernementale secrète chargée de surveiller et de réguler les activités extraterrestres sur Terre. Ils doivent protéger la planète contre les menaces intergalactiques tout en gardant leur existence secrète.",
        note: "",
        year: "1997",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617061/FILMS/038_dr6ujv.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Speed",
        ID: "039",
        genre: "Action, Thriller",
        description:
          "Speed est un film d'action et de thriller réalisé par Jan de Bont. L'histoire suit un officier de police qui tente de neutraliser un terroriste qui a placé une bombe à bord d'un bus de la ville qui explosera si le bus ralentit en dessous d'une certaine vitesse.",
        note: "",
        year: "1994",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617061/FILMS/039_xuzkvc.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "L'Associé du Diable",
        ID: "040",
        genre: "Drame, Mystère, Thriller",
        description:
          "L'Associé du Diable est un film dramatique, mystérieux et thriller réalisé par Taylor Hackford. L'histoire suit un jeune avocat ambitieux, interprété par Keanu Reeves, qui est recruté par un avocat charismatique et mystérieux, joué par Al Pacino. Il découvre bientôt que son nouveau patron a des liens avec des forces démoniaques et se trouve plongé dans un monde de corruption, de tromperie et de dangereux enjeux surnaturels.",
        note: "",
        year: "1997",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617061/FILMS/040_bhkc7v.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Les Visiteurs",
        ID: "041",
        genre: "Comédie, Fantaisie",
        description:
          "Les Visiteurs est une comédie fantastique réalisée par Jean-Marie Poiré. L'histoire suit les aventures de Godefroy de Montmirail et de son écuyer Jacquouille la Fripouille, deux personnages du Moyen Âge qui sont accidentellement transportés dans le temps jusqu'au 20ème siècle. Ils doivent s'adapter à leur nouvel environnement et trouver un moyen de retourner dans leur époque.",
        note: "",
        year: "1993",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617061/FILMS/041_uofnba.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Prisoners",
        ID: "042",
        genre: "Drame, Mystère, Thriller",
        description:
          "Prisoners est un film dramatique, mystérieux et thriller réalisé par Denis Villeneuve. L'histoire suit la vie de deux familles dont les filles disparaissent mystérieusement. Alors que la police semble incapable de progresser dans l'affaire, l'un des pères décide de prendre des mesures extrêmes pour retrouver sa fille, ce qui le conduit dans un voyage sombre et tortueux.",
        note: "",
        year: "2013",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617062/FILMS/042_p0gn30.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "The Mist",
        ID: "043",
        genre: "Horreur, Science-fiction, Thriller",
        description:
          "The Mist est un film d'horreur, de science-fiction et de thriller réalisé par Frank Darabont. L'histoire se déroule dans une petite ville du Maine, où une mystérieuse brume envahit la région, cachant des créatures mortelles à l'intérieur. Un groupe de personnes se retrouve piégé dans un supermarché alors qu'ils tentent de survivre aux horreurs qui les entourent.",
        note: "",
        year: "2007",
        top: true,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617062/FILMS/043_g4xnhh.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Cloverfield",
        ID: "044",
        genre: "Science-fiction, Horreur, Thriller",
        description:
          "Cloverfield est un film de science-fiction, d'horreur et de thriller réalisé par Matt Reeves. L'histoire suit un groupe d'amis pris au piège à New York alors qu'ils tentent de survivre à l'attaque d'une créature monstrueuse et à ses conséquences dévastatrices.",
        note: "",
        year: "2008",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617062/FILMS/044_b9oe9n.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Spider-Man",
        ID: "045",
        genre: "Action, Aventure, Fantaisie",
        description:
          "Spider-Man est un film d'action, d'aventure et de fantasy réalisé par Sam Raimi. L'histoire suit la transformation de Peter Parker en Spider-Man après avoir été mordu par une araignée génétiquement modifiée. Il utilise ses nouveaux pouvoirs pour combattre le crime et protéger la ville de New York.",
        note: "",
        year: "2002",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617062/FILMS/045_pcwgl0.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Spider-Man 2",
        ID: "046",
        genre: "Action, Aventure, Fantaisie",
        description:
          "Spider-Man 2 est un film d'action, d'aventure et de fantasy réalisé par Sam Raimi. Il fait suite au premier film et suit les nouvelles aventures de Peter Parker en tant que Spider-Man alors qu'il jongle avec sa vie personnelle et sa responsabilité en tant que super-héros.",
        note: "",
        year: "2004",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617062/FILMS/046_kotyce.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Spider-Man 3",
        ID: "047",
        genre: "Action, Aventure, Fantaisie",
        description:
          "Spider-Man 3 est un film d'action, d'aventure et de fantasy réalisé par Sam Raimi. Dans ce troisième volet, Peter Parker doit faire face à de nouveaux défis alors qu'il affronte de nouveaux ennemis, y compris son propre côté sombre.",
        note: "",
        year: "2007",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617063/FILMS/047_mmjgxg.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Le Loup de Wall Street",
        ID: "048",
        genre: "Biographie, Comédie, Crime",
        description:
          "Le Loup de Wall Street est un film biographique, comique et criminel réalisé par Martin Scorsese. Il est basé sur l'autobiographie de Jordan Belfort. L'histoire suit la montée et la chute de Belfort, un courtier en bourse de New York qui mène une vie de luxe, d'excès et de corruption financière.",
        note: "",
        year: "2013",
        top: true,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617063/FILMS/048_jrugig.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Harry Potter à l'école des sorciers",
        ID: "049",
        genre: "Aventure, Fantaisie",
        description:
          "Harry Potter à l'école des sorciers est un film d'aventure et de fantasy réalisé par Chris Columbus. Il est basé sur le premier livre de la série Harry Potter écrit par J.K. Rowling. L'histoire suit les aventures de Harry Potter, un jeune sorcier, lors de sa première année à l'école de sorcellerie de Poudlard.",
        note: "",
        year: "2001",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617064/FILMS/049_nxfzyd.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Harry Potter et la Chambre des secrets",
        ID: "050",
        genre: "Aventure, Fantaisie",
        description:
          "Harry Potter et la Chambre des secrets est un film d'aventure et de fantasy réalisé par Chris Columbus. Il est basé sur le deuxième livre de la série Harry Potter écrit par J.K. Rowling. L'histoire suit les aventures de Harry Potter lors de sa deuxième année à Poudlard, où une force mystérieuse menace les élèves.",
        note: "",
        year: "2002",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617063/FILMS/050_r26hpt.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Harry Potter et le Prisonnier d'Azkaban",
        ID: "051",
        genre: "Aventure, Fantaisie",
        description:
          "Harry Potter et le Prisonnier d'Azkaban est un film d'aventure et de fantasy réalisé par Alfonso Cuarón. Il est basé sur le troisième livre de la série Harry Potter écrit par J.K. Rowling. L'histoire suit les aventures de Harry Potter lors de sa troisième année à Poudlard, où il doit faire face à l'évasion d'un dangereux prisonnier.",
        note: "",
        year: "2004",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617063/FILMS/051_pqnkcw.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Harry Potter et la Coupe de feu",
        ID: "052",
        genre: "Aventure, Fantaisie",
        description:
          "Harry Potter et la Coupe de feu est un film d'aventure et de fantasy réalisé par Mike Newell. Il est basé sur le quatrième livre de la série Harry Potter écrit par J.K. Rowling. L'histoire suit les aventures de Harry Potter lors de sa quatrième année à Poudlard, où il participe au dangereux Tournoi des Trois Sorciers.",
        note: "",
        year: "2005",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617064/FILMS/052_yowbqm.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Harry Potter et l'Ordre du Phénix",
        ID: "053",
        genre: "Aventure, Fantaisie",
        description:
          "Harry Potter et l'Ordre du Phénix est un film d'aventure et de fantasy réalisé par David Yates. Il est basé sur le cinquième livre de la série Harry Potter écrit par J.K. Rowling. L'histoire suit les aventures de Harry Potter lors de sa cinquième année à Poudlard, où il forme un groupe secret pour combattre Voldemort et ses partisans.",
        note: "",
        year: "2007",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617064/FILMS/053_qvh6sa.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Harry Potter et le Prince de sang-mêlé",
        ID: "054",
        genre: "Aventure, Fantaisie",
        description:
          "Harry Potter et le Prince de sang-mêlé est un film d'aventure et de fantasy réalisé par David Yates. Il est basé sur le sixième livre de la série Harry Potter écrit par J.K. Rowling. L'histoire suit les aventures de Harry Potter lors de sa sixième année à Poudlard, où il découvre des informations vitales sur Voldemort.",
        note: "",
        year: "2009",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617064/FILMS/054_dpwgul.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Harry Potter et les Reliques de la Mort - Partie 1",
        ID: "055",
        genre: "Aventure, Fantaisie",
        description:
          "Harry Potter et les Reliques de la Mort - Partie 1 est un film d'aventure et de fantasy réalisé par David Yates. Il est basé sur le septième et dernier livre de la série Harry Potter écrit par J.K. Rowling. L'histoire suit les aventures de Harry Potter lors de sa septième année à Poudlard, où il cherche à détruire les Horcruxes de Voldemort.",
        note: "",
        year: "2010",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617064/FILMS/055_vszqzr.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Harry Potter et les Reliques de la Mort - Partie 2",
        ID: "056",
        genre: "Aventure, Fantaisie",
        description:
          "Harry Potter et les Reliques de la Mort - Partie 2 est un film d'aventure et de fantasy réalisé par David Yates. Il est la seconde partie de l'adaptation cinématographique du septième et dernier livre de la série Harry Potter écrit par J.K. Rowling. L'histoire suit les événements finaux de la bataille entre Harry Potter et Voldemort.",
        note: "",
        year: "2011",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617064/FILMS/056_comevt.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Anaconda",
        ID: "057",
        genre: "Horreur, Aventure, Thriller",
        description:
          "Anaconda est un film d'horreur, d'aventure et de thriller réalisé par Luis Llosa. L'histoire suit un groupe de documentaristes en Amazonie qui rencontrent un chasseur de serpents obsédé par la capture d'un anaconda géant. Ils se retrouvent alors confrontés à un prédateur mortel dans la jungle impitoyable.",
        note: "",
        year: "1997",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617065/FILMS/057_bkuduf.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Wasabi",
        ID: "058",
        genre: "Action, Comédie, Crime",
        description:
          "Wasabi est un film d'action, de comédie et de crime réalisé par Gérard Krawczyk. L'histoire suit un ancien agent secret français interprété par Jean Reno, qui se rend au Japon pour régler la succession de sa compagne. Il découvre alors qu'il a une fille et se retrouve impliqué dans une affaire de crime organisé.",
        note: "",
        year: "2001",
        top: true,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617065/FILMS/058_kfloet.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Jurassic Park 2 : Le Monde Perdu",
        ID: "059",
        genre: "Aventure, Science-fiction, Thriller",
        description:
          "Jurassic Park 2 : Le Monde Perdu est un film d'aventure, de science-fiction et de thriller réalisé par Steven Spielberg. Il fait suite au premier film de la série. L'histoire suit une expédition sur une île où les dinosaures ont été créés, mais les participants se retrouvent bientôt pris au piège entre les prédateurs et les chasseurs.",
        note: "",
        year: "1997",
        top: true,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617065/FILMS/059_fazyre.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Jurassic Park 3",
        ID: "060",
        genre: "Aventure, Science-fiction, Thriller",
        description:
          "Jurassic Park 3 est un film d'aventure, de science-fiction et de thriller réalisé par Joe Johnston. L'histoire suit une expédition sur une île peuplée de dinosaures, où les participants se retrouvent piégés par des créatures préhistoriques redoutables.",
        note: "",
        year: "2001",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617065/FILMS/060_vmltoh.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Rogue One: A Star Wars Story",
        ID: "061",
        genre: "Action, Aventure, Science-fiction",
        description:
          "Rogue One: A Star Wars Story est un film d'action, d'aventure et de science-fiction se déroulant dans l'univers de Star Wars. Réalisé par Gareth Edwards, le film raconte l'histoire d'un groupe hétéroclite de rebelles qui se lancent dans une mission audacieuse pour voler les plans de l'Étoile de la Mort, une arme de destruction massive de l'Empire Galactique.",
        note: "",
        year: "2016",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617065/FILMS/061_ujdujf.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "The Grudge",
        ID: "062",
        genre: "Horreur, Mystère, Thriller",
        description:
          "The Grudge est un film d'horreur, de mystère et de thriller réalisé par Takashi Shimizu. L'histoire suit une malédiction qui se propage à travers une maison, maudissant tous ceux qui entrent en contact avec elle. Alors que des événements terrifiants se multiplient, les personnages doivent affronter leurs pires cauchemars pour tenter de survivre.",
        note: "",
        year: "2004",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617066/FILMS/062_qnojf5.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Interstella 5555: The 5tory of the 5ecret 5tar 5ystem",
        ID: "063",
        genre: "Animation, Aventure, Science-fiction",
        description:
          "Interstella 5555: The 5tory of the 5ecret 5tar 5ystem est un film d'animation, d'aventure et de science-fiction réalisé par Kazuhisa Takenouchi et produit par le groupe de musique électronique Daft Punk. L'histoire suit les aventures d'un groupe de musiciens extraterrestres qui sont kidnappés et emmenés sur Terre par un maléfique manager de l'industrie musicale.",
        note: "",
        year: "2003",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617066/FILMS/063_l4hxq3.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Blair Witch Project",
        ID: "064",
        genre: "Horreur, Mystère, Thriller",
        description:
          "Blair Witch Project est un film d'horreur, de mystère et de thriller réalisé par Daniel Myrick et Eduardo Sánchez. L'histoire suit trois étudiants en cinéma qui partent dans les bois pour enquêter sur la légende de la sorcière de Blair, mais se retrouvent bientôt confrontés à des événements terrifiants qui mettent leur vie en danger.",
        note: "",
        year: "1999",
        top: true,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617066/FILMS/064_eadnti.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Man on Fire",
        ID: "065",
        genre: "Action, Crime, Drame",
        description:
          "Man on Fire est un film d'action, de crime et de drame réalisé par Tony Scott. L'histoire suit un ancien soldat interprété par Denzel Washington qui devient un garde du corps chargé de protéger une jeune fille à Mexico. Lorsqu'elle est enlevée, il entreprend une mission de vengeance brutale pour la retrouver.",
        note: "",
        year: "2004",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617066/FILMS/065_zn8wix.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Blade",
        ID: "066",
        genre: "Action, Horreur, Science-fiction",
        description:
          "Blade est un film d'action, d'horreur et de science-fiction réalisé par Stephen Norrington. L'histoire suit un chasseur de vampires mi-humain, mi-vampire, nommé Blade, qui combat les vampires tout en cherchant à venger la mort de sa mère.",
        note: "",
        year: "1998",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617066/FILMS/066_uw2i67.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "300",
        ID: "067",
        genre: "Action, Fantaisie, Guerre",
        description:
          "300 est un film d'action, de fantaisie et de guerre réalisé par Zack Snyder. Il est basé sur la bande dessinée de Frank Miller. L'histoire retrace la bataille des Thermopyles où le roi spartiate Léonidas et ses 300 guerriers spartiates affrontent l'armée perse de Xerxès.",
        note: "",
        year: "2006",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617067/FILMS/067_aqviao.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "The Fast and the Furious",
        ID: "068",
        genre: "Action, Crime, Thriller",
        description:
          "The Fast and the Furious est un film d'action, de crime et de thriller réalisé par Rob Cohen. L'histoire suit le monde des courses de rue clandestines à Los Angeles, où un policier infiltré, Brian O'Conner, tente d'infiltrer un groupe de pilotes de rue mené par Dominic Toretto.",
        note: "",
        year: "2001",
        top: true,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617066/FILMS/068_xoujrv.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "2 Fast 2 Furious",
        ID: "069",
        genre: "Action, Crime, Thriller",
        description:
          "2 Fast 2 Furious est un film d'action, de crime et de thriller réalisé par John Singleton. L'histoire suit l'ancien policier Brian O'Conner qui fait équipe avec son ami d'enfance Roman Pearce pour infiltrer un cartel de la drogue à Miami en participant à des courses de rue.",
        note: "",
        year: "2003",
        top: true,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617067/FILMS/069_dj2bdj.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "The Fast and the Furious: Tokyo Drift",
        ID: "070",
        genre: "Action, Crime, Drame",
        description:
          "The Fast and the Furious: Tokyo Drift est un film d'action, de crime et de drame réalisé par Justin Lin. L'histoire suit un adolescent américain rebelle qui est envoyé à Tokyo et se retrouve impliqué dans le monde des courses de voitures clandestines.",
        note: "",
        year: "2006",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617067/FILMS/070_zji5o3.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "28 Days Later",
        ID: "071",
        genre: "Horreur, Science-fiction, Thriller",
        description:
          "28 Days Later est un film d'horreur, de science-fiction et de thriller réalisé par Danny Boyle. L'histoire se déroule dans un monde post-apocalyptique où un virus dévastateur a transformé la majeure partie de la population en des créatures violentes et infectieuses. Un petit groupe de survivants tente de survivre et de trouver un refuge sûr.",
        note: "",
        year: "2002",
        top: true,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617067/FILMS/071_nyy6t5.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "28 Weeks Later",
        ID: "072",
        genre: "Horreur, Science-fiction, Thriller",
        description:
          "28 Weeks Later est un film d'horreur, de science-fiction et de thriller réalisé par Juan Carlos Fresnadillo. Il s'agit d'une suite de '28 Days Later'. L'histoire se déroule six mois après les événements du premier film, où un nouveau foyer de l'infection commence à émerger à Londres. Alors que la ville est mise en quarantaine, un groupe de survivants tente de s'échapper.",
        note: "",
        year: "2007",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617067/FILMS/072_mzynxg.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Jumanji",
        ID: "073",
        genre: "Aventure, Fantaisie, Famille",
        description:
          "Jumanji est un film d'aventure, de fantaisie et familial réalisé par Joe Johnston. L'histoire suit deux enfants qui libèrent un homme emprisonné dans un jeu de société magique appelé Jumanji. Ils doivent alors terminer le jeu pour restaurer le monde réel des conséquences chaotiques du jeu.",
        note: "",
        year: "1995",
        top: true,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617068/FILMS/073_agxkcc.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "RoboCop",
        ID: "074",
        genre: "Action, Science-fiction, Thriller",
        description:
          "RoboCop est un film d'action, de science-fiction et de thriller réalisé par Paul Verhoeven. L'histoire se déroule dans un futur dystopique où un policier mortellement blessé est transformé en cyborg nommé RoboCop. Il lutte contre le crime et la corruption tout en tentant de retrouver sa véritable identité humaine.",
        note: "",
        year: "1987",
        top: true,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617068/FILMS/074_dgo08u.jpg",
          },
        ],
      },
    },
    ,
    {
      Movie: {
        title: "RoboCop 2",
        ID: "075",
        genre: "Action, Science-fiction, Thriller",
        description:
          "RoboCop 2 est un film d'action, de science-fiction et de thriller réalisé par Irvin Kershner. Il s'agit de la suite du film original. L'histoire suit RoboCop qui doit affronter un nouveau terroriste robotique, ainsi que les machinations d'une corporation sans scrupules qui cherche à exploiter la technologie de RoboCop à des fins lucratives.",
        note: "",
        year: "1990",
        top: true,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617068/FILMS/075_ymbag0.jpg",
          },
        ],
      },
    },
    ,
    {
      Movie: {
        title: "The Thing",
        ID: "076",
        genre: "Horreur, Science-fiction, Mystère",
        description:
          "The Thing est un film d'horreur, de science-fiction et de mystère réalisé par John Carpenter. L'histoire suit une équipe de chercheurs en Antarctique qui découvre un organisme extraterrestre capable d'imiter n'importe quelle forme de vie. Alors qu'ils luttent pour survivre et pour déterminer qui est humain et qui est l'imitateur, la paranoïa et la méfiance s'installent.",
        note: "",
        year: "1982",
        top: true,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617068/FILMS/076_ru9pqc.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Matrix Reloaded",
        ID: "077",
        genre: "Action, Science-fiction",
        description:
          "Matrix Reloaded est un film d'action et de science-fiction réalisé par les Wachowski. Il s'agit de la suite du film Matrix. L'histoire suit Neo et ses alliés alors qu'ils luttent contre les machines dans le monde simulé de la Matrice. Ils cherchent à libérer l'humanité de l'emprise des machines tout en découvrant les secrets profonds de la réalité.",
        note: "",
        year: "2003",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617069/FILMS/077_xryodl.jpg",
          },
        ],
      },
    },
    {
      Movie: {
        title: "Matrix Revolutions",
        ID: "078",
        genre: "Action, Science-fiction",
        description:
          "Matrix Revolutions est un film d'action et de science-fiction réalisé par les Wachowski. Il s'agit du troisième volet de la trilogie Matrix. L'histoire suit Neo, Trinity et Morpheus alors qu'ils mènent la dernière bataille contre les machines dans le monde de la Matrice, cherchant à sauver l'humanité et à découvrir le destin final de Neo.",
        note: "",
        year: "2003",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617069/FILMS/078_mcmuhb.jpg",
          },
        ],
      },
    },
  ];
  return listing;
}
