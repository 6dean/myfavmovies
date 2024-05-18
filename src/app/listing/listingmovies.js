export default function ListingMovies() {
  const listing = [
    {
      Movie: {
        title: "Dragon Ball Z: Fusion",
        ID: "000",
        genre: "Animation, Action",
        description:
          "Dragon Ball Z: Fusion est un film d'animation basé sur la série Dragon Ball Z. Dans ce film, Goku et Vegeta doivent fusionner pour former Gogeta afin de combattre Janemba, un démon qui menace le monde des vivants et des morts.",
        note: 3,
        year: 1995,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=171588.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617055/FILMS/000_ebvn2w.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "51min",
        countries: ["Japon"],
        productionCompanies: ["Toei Animation"],
      },
    },
    {
      Movie: {
        title: "Jurassic Park",
        ID: "001",
        genre: "Science-fiction, Aventure",
        description:
          "Jurassic Park est un film de science-fiction réalisé par Steven Spielberg, basé sur le roman éponyme de Michael Crichton. Il met en scène un parc à thème peuplé de dinosaures clonés, qui échappent à leur confinement et menacent les visiteurs.",
        note: 5,
        year: 1993,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=8488.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617054/FILMS/001_wiyvdg.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 6min",
        countries: ["États-Unis"],
        productionCompanies: ["Universal Pictures", "Amblin Entertainment"],
      },
    },
    {
      Movie: {
        title: "Battle Royale",
        ID: "002",
        genre: "Action, Drame, Thriller",
        description:
          "Battle Royale est un film d'action, de drame et de thriller réalisé par Kinji Fukasaku. L'histoire se déroule dans une réalité alternative où des classes de lycéens sont forcées de s'affronter sur une île isolée jusqu'à ce qu'il ne reste qu'un seul survivant. Le film explore les thèmes de la violence, de la société et de la survie.",
        note: 2,
        year: 2000,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=28615.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617054/FILMS/002_yekkje.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 16 ans",
        duration: "1h 54min",
        countries: ["Japon"],
        productionCompanies: ["Fukasaku-gumi", "Nippon Herald Films"],
      },
    },
    {
      Movie: {
        title: "Coco",
        ID: "003",
        genre: "Animation, Aventure",
        description:
          "Coco est un film d'animation produit par Pixar Animation Studios. Il suit l'histoire d'un jeune garçon mexicain, Miguel, qui se retrouve accidentellement transporté dans le royaume des morts, où il découvre les secrets de sa famille.",
        note: 3,
        year: 2017,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=206775.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617055/FILMS/003_fpo7xj.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "1h 45min",
        countries: ["États-Unis"],
        productionCompanies: [
          "Walt Disney Pictures",
          "Pixar Animation Studios",
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
        note: 3,
        year: 2004,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=50409.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617054/FILMS/004_tfut4t.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "1h 59min",
        countries: ["Japon"],
        productionCompanies: ["Studio Ghibli"],
      },
    },
    {
      Movie: {
        title: "Les Évadés",
        ID: "005",
        genre: "Drame, Crime",
        description:
          "Les Évadés est un film basé sur la nouvelle de Stephen King, Rita Hayworth et la Rédemption de Shawshank. Il raconte l'histoire d'un banquier injustement condamné qui devient ami avec un détenu expérimenté et tente de s'évader de prison.",
        note: 3,
        year: 1994,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=11736.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617054/FILMS/005_af8z4i.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 22min",
        countries: ["États-Unis"],
        productionCompanies: ["Castle Rock Entertainment", "Columbia Pictures"],
      },
    },
    {
      Movie: {
        title: "Aladdin",
        ID: "006",
        genre: "Animation, Aventure",
        description:
          "Aladdin est un film d'animation produit par Walt Disney Animation Studios, inspiré du conte Aladin et la lampe merveilleuse. Il raconte l'histoire d'un jeune homme nommé Aladdin qui découvre une lampe magique et devient impliqué dans une aventure pour sauver la princesse Jasmine.",
        note: 5,
        year: 1992,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=8640.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617054/FILMS/006_rynj6v.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "1h 30min",
        countries: ["États-Unis"],
        productionCompanies: [
          "Walt Disney Pictures",
          "Walt Disney Feature Animation",
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
        note: 3,
        year: 1994,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=10862.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617054/FILMS/007_jef77p.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "1h 28min",
        countries: ["États-Unis"],
        productionCompanies: [
          "Walt Disney Pictures",
          "Walt Disney Feature Animation",
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
        note: 3,
        year: 1993,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=27952.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617055/FILMS/008_rcardo.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 1min",
        countries: ["États-Unis"],
        productionCompanies: ["Tribeca Productions", "Baltimore Pictures"],
      },
    },
    {
      Movie: {
        title: "Matrix",
        ID: "009",
        genre: "Science-fiction, Action",
        description:
          "Matrix est un film de science-fiction écrit et réalisé par les Wachowski. Il met en scène un programmeur informatique nommé Neo, qui découvre que le monde dans lequel il vit est une simulation contrôlée par des machines.",
        note: 5,
        year: 1999,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=19776.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617055/FILMS/009_kjqzso.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "2h 16min",
        countries: ["États-Unis", "Australie"],
        productionCompanies: [
          "Warner Bros.",
          "Village Roadshow Pictures",
          "Groucho II Film Partnership",
          "Silver Pictures",
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
        note: 2,
        year: 1993,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=133496.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617055/FILMS/010_irt4el.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "1h 16min",
        countries: ["États-Unis"],
        productionCompanies: ["Warner Bros. Animation"],
      },
    },
    {
      Movie: {
        title: "Le Bon, la Brute et le Truand",
        ID: "011",
        genre: "Western",
        description:
          "Le Bon, la Brute et le Truand est un film de western spaghetti réalisé par Sergio Leone. Il se déroule pendant la guerre de Sécession et suit trois hommes, le Bon, la Brute et le Truand, qui cherchent un trésor caché.",
        note: 3,
        year: 1966,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=19395.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617055/FILMS/011_gi2vqw.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 58min",
        countries: ["Italie", "Espagne", "Allemagne de l'Ouest"],
        productionCompanies: [
          "United Artists",
          "Produzioni Europee Associati (PEA)",
          "Arturo González Producciones Cinematográficas",
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
        note: 3,
        year: 1997,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=12302.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617056/FILMS/012_tzmnuk.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 6min",
        countries: ["France"],
        productionCompanies: [
          "Gaumont",
          "Columbia Pictures",
          "Les Films du Dauphin",
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
        note: 2,
        year: 1993,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=148014.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617056/FILMS/013_yy6us6.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "1h 12min",
        countries: ["Japon"],
        productionCompanies: ["Toei Animation"],
      },
    },
    {
      Movie: {
        title: "Le Tombeau des Lucioles",
        ID: "014",
        genre: "Animation, Drame",
        description:
          "Le Tombeau des Lucioles est un film d'animation japonais réalisé par Isao Takahata. Il suit l'histoire d'un jeune garçon et de sa sœur qui luttent pour survivre pendant les derniers jours de la Seconde Guerre mondiale au Japon.",
        note: 3,
        year: 1988,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=10251.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617056/FILMS/014_o6jer8.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "1h 29min",
        countries: ["Japon"],
        productionCompanies: ["Studio Ghibli"],
      },
    },
    {
      Movie: {
        title: "Star Wars: Épisode I - La Menace fantôme",
        ID: "015",
        genre: "Science-fiction, Aventure",
        description:
          "Star Wars: Épisode I - La Menace fantôme est le premier volet de la prélogie de la saga Star Wars. Il suit les aventures de jeunes Anakin Skywalker, Obi-Wan Kenobi et la reine Amidala alors qu'ils font face à la montée du côté obscur.",
        note: 5,
        year: 1999,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=20754.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617056/FILMS/015_ogpuy6.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 16min",
        countries: ["États-Unis"],
        productionCompanies: ["Lucasfilm"],
      },
    },
    {
      Movie: {
        title: "Star Wars: Épisode II - L'Attaque des clones",
        ID: "016",
        genre: "Science-fiction, Aventure",
        description:
          "Star Wars: Épisode II - L'Attaque des clones est le deuxième volet de la prélogie de la saga Star Wars. Il suit les aventures d'Anakin Skywalker alors qu'il devient un Jedi et tombe amoureux de Padmé Amidala, tout en se confrontant aux mystères de la Force et à l'émergence de la guerre des clones.",
        note: 3,
        year: 2002,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=29014.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617057/FILMS/016_zjtt0s.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 22min",
        countries: ["États-Unis"],
        productionCompanies: ["Lucasfilm"],
      },
    },
    {
      Movie: {
        title: "Star Wars: Épisode III - La Revanche des Sith",
        ID: "017",
        genre: "Science-fiction, Aventure",
        description:
          "Star Wars: Épisode III - La Revanche des Sith est le troisième volet de la prélogie de la saga Star Wars. Il raconte la transformation d'Anakin Skywalker en Dark Vador et la montée de l'Empire Galactique sous l'impulsion du sénateur Palpatine.",
        note: 3,
        year: 2005,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=40623.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617057/FILMS/017_pqjskz.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 20min",
        countries: ["États-Unis"],
        productionCompanies: ["Lucasfilm"],
      },
    },
    {
      Movie: {
        title: "Star Wars: Épisode IV - Un nouvel espoir",
        ID: "018",
        genre: "Science-fiction, Aventure",
        description:
          "Star Wars: Épisode IV - Un nouvel espoir est le premier film de la trilogie originale de la saga Star Wars. Il suit les aventures de Luke Skywalker, Han Solo, la princesse Leia et leurs alliés alors qu'ils luttent contre l'Empire Galactique et son redoutable vaisseau spatial, l'Étoile de la Mort.",
        note: 3,
        year: 1977,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=25801.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617057/FILMS/018_qi7nmr.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 1min",
        countries: ["États-Unis"],
        productionCompanies: ["Lucasfilm"],
      },
    },
    {
      Movie: {
        title: "Star Wars: Épisode V - L'Empire contre-attaque",
        ID: "019",
        genre: "Science-fiction, Aventure",
        description:
          "Star Wars: Épisode V - L'Empire contre-attaque est le deuxième film de la trilogie originale de la saga Star Wars. Il suit la bataille entre l'Alliance Rebelle et l'Empire Galactique, ainsi que la formation de Luke Skywalker en tant que Jedi sous la tutelle du maître Yoda.",
        note: 4,
        year: 1980,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=25802.html",
        top: false,
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617057/FILMS/019_jm9mgt.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 4min",
        countries: ["États-Unis"],
        productionCompanies: ["Lucasfilm"],
      },
    },
    {
      Movie: {
        title: "Star Wars: Épisode VI - Le Retour du Jedi",
        ID: "020",
        genre: "Science-fiction, Aventure",
        description:
          "Star Wars: Épisode VI - Le Retour du Jedi est le troisième film de la trilogie originale de la saga Star Wars. Il suit les efforts de l'Alliance Rebelle pour détruire l'Empire Galactique et l'Étoile de la Mort, ainsi que la confrontation finale entre Luke Skywalker et Dark Vador.",
        note: 4,
        year: 1983,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=25803.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617057/FILMS/020_pasbca.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 11min",
        countries: ["États-Unis"],
        productionCompanies: ["Lucasfilm"],
      },
    },
    {
      Movie: {
        title: "Star Wars: Épisode VII - Le Réveil de la Force",
        ID: "021",
        genre: "Science-fiction, Aventure",
        description:
          "Star Wars: Épisode VII - Le Réveil de la Force est le premier film de la trilogie de la suite de la saga Star Wars. Il suit les nouvelles aventures de Rey, Finn et Poe Dameron alors qu'ils s'opposent au Premier Ordre et recherchent le légendaire Luke Skywalker.",
        note: 2,
        year: 2015,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=215097.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617057/FILMS/021_zrzjfz.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 15min",
        countries: ["États-Unis"],
        productionCompanies: ["Lucasfilm", "Bad Robot Productions"],
      },
    },
    {
      Movie: {
        title: "Star Wars: Épisode VIII - Les Derniers Jedi",
        ID: "022",
        genre: "Science-fiction, Aventure",
        description:
          "Star Wars: Épisode VIII - Les Derniers Jedi est le deuxième film de la trilogie de la suite de la saga Star Wars. Il suit la lutte de la Résistance contre le Premier Ordre, ainsi que le parcours de Rey pour devenir une Jedi sous la tutelle de Luke Skywalker.",
        note: 2,
        year: 2017,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=215099.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617058/FILMS/022_kkjacn.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 32min",
        countries: ["États-Unis"],
        productionCompanies: ["Lucasfilm", "Bad Robot Productions"],
      },
    },
    {
      Movie: {
        title: "Star Wars: Épisode IX - L'Ascension de Skywalker",
        ID: "023",
        genre: "Science-fiction, Aventure",
        description:
          "Star Wars: Épisode IX - L'Ascension de Skywalker est le troisième et dernier film de la trilogie de la suite de la saga Star Wars. Il conclut l'histoire de Rey, Kylo Ren et de la lutte entre la Résistance et le Premier Ordre, ainsi que la saga Skywalker dans son ensemble.",
        note: 2,
        year: 2019,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=215094.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617058/FILMS/023_jwcfmp.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 22min",
        countries: ["États-Unis"],
        productionCompanies: ["Lucasfilm", "Bad Robot Productions"],
      },
    },
    {
      Movie: {
        title: "Le Dernier Samouraï",
        ID: "024",
        genre: "Action, Drame",
        description:
          "Le Dernier Samouraï est un film d'action et de drame réalisé par Edward Zwick. L'histoire se déroule au Japon à la fin du XIXe siècle et suit un ancien capitaine de l'armée américaine (interprété par Tom Cruise) qui est capturé par les samouraïs, mais finit par rejoindre leur cause et apprendre leurs traditions et leur code d'honneur.",
        note: 5,
        year: 2003,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=46943.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617058/FILMS/024_hjna0a.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 34min",
        countries: ["États-Unis", "Japon", "Nouvelle-Zélande"],
        productionCompanies: [
          "Warner Bros. Pictures",
          "Cruise/Wagner Productions",
          "The Bedford Falls Company",
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
        note: 2,
        year: 2002,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=43188.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617058/FILMS/025_yc1zii.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "1h 35min",
        countries: ["États-Unis", "Australie"],
        productionCompanies: [
          "Village Roadshow Pictures",
          "Castle Rock Entertainment",
          "Face Productions",
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
        note: 2,
        year: 1997,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=9348.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617059/FILMS/026_qw6gcz.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "1h 30min",
        countries: ["Canada"],
        productionCompanies: [
          "Téléfilm Canada",
          "Ontario Film Development Corporation",
          "Cube Libre",
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
        note: 5,
        year: 1979,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=62.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617059/FILMS/027_iikbd3.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "1h 57min",
        countries: ["États-Unis", "Royaume-Uni"],
        productionCompanies: ["20th Century Fox", "Brandywine Productions"],
      },
    },
    {
      Movie: {
        title: "Aliens, le retour",
        ID: "028",
        genre: "Science-fiction, Action",
        description:
          "Aliens, le retour est un film de science-fiction et d'action réalisé par James Cameron. Il est la suite directe du film Alien, le huitième passager. L'histoire suit Ellen Ripley alors qu'elle retourne sur la planète où son équipe a rencontré les aliens, cette fois-ci accompagnée d'une unité militaire.",
        note: 3,
        year: 1986,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=2167.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617062/FILMS/028_wvkfbk.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "2h 17min",
        countries: ["États-Unis", "Royaume-Uni"],
        productionCompanies: ["20th Century Fox", "Brandywine Productions"],
      },
    },
    {
      Movie: {
        title: "Alien 3",
        ID: "029",
        genre: "Science-fiction, Horreur",
        description:
          "Alien 3 est un film de science-fiction et d'horreur réalisé par David Fincher. L'histoire suit Ellen Ripley alors qu'elle atterrit sur une planète-prison infestée d'aliens. Elle doit trouver un moyen de survivre tout en affrontant les dangers qui l'entourent.",
        note: 3,
        year: 1992,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=7651.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617059/FILMS/029_j1lngi.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "1h 55min",
        countries: ["États-Unis", "Royaume-Uni"],
        productionCompanies: ["20th Century Fox", "Brandywine Productions"],
      },
    },
    {
      Movie: {
        title: "Alien, la résurrection",
        ID: "030",
        genre: "Science-fiction, Horreur",
        description:
          "Alien, la résurrection est un film de science-fiction et d'horreur réalisé par Jean-Pierre Jeunet. Il est la suite de Alien 3. L'histoire suit Ellen Ripley alors qu'elle est clonée et ramenée à la vie, mais elle découvre bientôt que les aliens ne sont jamais loin.",
        note: 3,
        year: 1997,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=9046.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617059/FILMS/030_yarppk.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "1h 49min",
        countries: ["États-Unis"],
        productionCompanies: ["20th Century Fox", "Brandywine Productions"],
      },
    },
    {
      Movie: {
        title: "Alien vs. Predator",
        ID: "031",
        genre: "Science-fiction, Action",
        description:
          "Alien vs. Predator est un film de science-fiction et d'action réalisé par Paul W. S. Anderson. Il met en scène un groupe d'archéologues et de mercenaires qui découvrent un temple ancien enfoui sous la glace en Antarctique, où se déroule un combat entre les aliens et les Predators.",
        note: 2,
        year: 2004,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=47002.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617059/FILMS/031_hvmyei.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "1h 41min",
        countries: ["États-Unis", "Canada", "Allemagne", "Royaume-Uni"],
        productionCompanies: [
          "20th Century Fox",
          "Davis Entertainment",
          "Impact Pictures",
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
        note: 1,
        year: 2007,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=120576.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617060/FILMS/032_ir7xry.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "1h 34min",
        countries: ["États-Unis"],
        productionCompanies: [
          "20th Century Fox",
          "Davis Entertainment",
          "Dune Entertainment",
          "Brandywine Productions",
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
        note: 3,
        year: 2012,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=141564.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617060/FILMS/033_cforvx.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 4min",
        countries: ["États-Unis", "Royaume-Uni"],
        productionCompanies: ["20th Century Fox", "Scott Free Productions"],
      },
    },
    {
      Movie: {
        title: "Alien: Covenant",
        ID: "034",
        genre: "Science-fiction, Horreur",
        description:
          "Alien: Covenant est un film de science-fiction et d'horreur réalisé par Ridley Scott. Il fait suite à Prometheus et se déroule dans le même univers que la franchise Alien. L'histoire suit l'équipage d'un vaisseau spatial en mission de colonisation qui découvre un monde mystérieux habité par des créatures terrifiantes.",
        note: 3,
        year: 2017,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=208314.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617060/FILMS/034_ozsc5r.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 2min",
        countries: ["États-Unis", "Royaume-Uni"],
        productionCompanies: ["20th Century Fox", "Scott Free Productions"],
      },
    },
    {
      Movie: {
        title: "La Momie",
        ID: "035",
        genre: "Action, Aventure, Fantastique",
        description:
          "La Momie est un film d'action, d'aventure et fantastique réalisé par Stephen Sommers. L'histoire suit l'archéologue Rick O'Connell alors qu'il découvre une ancienne momie égyptienne maudite, ramenée à la vie et prête à semer le chaos dans le monde moderne.",
        note: 3,
        year: 1999,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=20153.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617060/FILMS/035_nlych9.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 5min",
        countries: ["États-Unis", "Royaume-Uni"],
        productionCompanies: ["Universal Pictures", "Alphaville Films"],
      },
    },
    {
      Movie: {
        title: "Lost in Translation",
        ID: "036",
        genre: "Drame, Romance",
        description:
          "Lost in Translation est un film dramatique et romantique écrit et réalisé par Sofia Coppola. L'histoire suit la rencontre fortuite entre Bob Harris, un acteur de cinéma en déclin, et Charlotte, une jeune femme délaissée par son mari, alors qu'ils se trouvent tous les deux à Tokyo. Leur amitié naissante offre un réconfort mutuel dans un pays étranger où ils se sentent déconnectés et isolés.",
        note: 5,
        year: 2003,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=47395.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617060/FILMS/036_gmyaqr.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "1h 42min",
        countries: ["États-Unis", "Japon"],
        productionCompanies: ["Focus Features", "Tohokushinsha Film"],
      },
    },
    {
      Movie: {
        title: "Tarzan",
        ID: "037",
        genre: "Animation, Aventure, Famille",
        description:
          "Tarzan est un film d'animation produit par Disney. Il est basé sur le personnage légendaire créé par Edgar Rice Burroughs. L'histoire suit les aventures de Tarzan, un jeune homme élevé par des singes dans la jungle africaine, alors qu'il découvre sa véritable identité et affronte les défis de la civilisation.",
        note: 3,
        year: 1999,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=20645.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617061/FILMS/037_usxkst.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "1h 28min",
        countries: ["États-Unis"],
        productionCompanies: ["Walt Disney Pictures"],
      },
    },
    {
      Movie: {
        title: "Men in Black",
        ID: "038",
        genre: "Science-fiction, Action, Comédie",
        description:
          "Men in Black est un film de science-fiction, d'action et de comédie réalisé par Barry Sonnenfeld. L'histoire suit les agents secrets J et K, membres d'une organisation gouvernementale secrète chargée de surveiller et de réguler les activités extraterrestres sur Terre. Ils doivent protéger la planète contre les menaces intergalactiques tout en gardant leur existence secrète.",
        note: 3,
        year: 1997,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=10700.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617061/FILMS/038_dr6ujv.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "1h 38min",
        countries: ["États-Unis"],
        productionCompanies: ["Columbia Pictures", "Amblin Entertainment"],
      },
    },
    {
      Movie: {
        title: "Speed",
        ID: "039",
        genre: "Action, Thriller",
        description:
          "Speed est un film d'action et de thriller réalisé par Jan de Bont. L'histoire suit un officier de police qui tente de neutraliser un terroriste qui a placé une bombe à bord d'un bus de la ville qui explosera si le bus ralentit en dessous d'une certaine vitesse.",
        note: 2,
        year: 1994,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=10498.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617061/FILMS/039_xuzkvc.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "1h 56min",
        countries: ["États-Unis"],
        productionCompanies: ["20th Century Fox", "Mark Gordon Productions"],
      },
    },
    {
      Movie: {
        title: "L'Associé du Diable",
        ID: "040",
        genre: "Drame, Mystère, Thriller",
        description:
          "L'Associé du Diable est un film dramatique, mystérieux et thriller réalisé par Taylor Hackford. L'histoire suit un jeune avocat ambitieux, interprété par Keanu Reeves, qui est recruté par un avocat charismatique et mystérieux, joué par Al Pacino. Il découvre bientôt que son nouveau patron a des liens avec des forces démoniaques et se trouve plongé dans un monde de corruption, de tromperie et de dangereux enjeux surnaturels.",
        note: 2,
        year: 1997,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=5571.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617061/FILMS/040_bhkc7v.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 24min",
        countries: ["États-Unis", "Allemagne"],
        productionCompanies: ["New Regency Pictures", "Regency Enterprises"],
      },
    },
    {
      Movie: {
        title: "Les Visiteurs",
        ID: "041",
        genre: "Comédie, Fantaisie",
        description:
          "Les Visiteurs est une comédie fantastique réalisée par Jean-Marie Poiré. L'histoire suit les aventures de Godefroy de Montmirail et de son écuyer Jacquouille la Fripouille, deux personnages du Moyen Âge qui sont accidentellement transportés dans le temps jusqu'au 20ème siècle. Ils doivent s'adapter à leur nouvel environnement et trouver un moyen de retourner dans leur époque.",
        note: 3,
        year: 1993,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=5241.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617061/FILMS/041_uofnba.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "1h 47min",
        countries: ["France"],
        productionCompanies: ["Gaumont"],
      },
    },
    {
      Movie: {
        title: "Prisoners",
        ID: "042",
        genre: "Drame, Mystère, Thriller",
        description:
          "Prisoners est un film dramatique, mystérieux et thriller réalisé par Denis Villeneuve. L'histoire suit la vie de deux familles dont les filles disparaissent mystérieusement. Alors que la police semble incapable de progresser dans l'affaire, l'un des pères décide de prendre des mesures extrêmes pour retrouver sa fille, ce qui le conduit dans un voyage sombre et tortueux.",
        note: 3,
        year: 2013,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=180887.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617062/FILMS/042_p0gn30.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "2h 33min",
        countries: ["États-Unis", "Canada"],
        productionCompanies: ["Alcon Entertainment", "Madhouse Entertainment"],
      },
    },
    {
      Movie: {
        title: "The Mist",
        ID: "043",
        genre: "Horreur, Science-fiction, Thriller",
        description:
          "The Mist est un film d'horreur, de science-fiction et de thriller réalisé par Frank Darabont. L'histoire se déroule dans une petite ville du Maine, où une mystérieuse brume envahit la région, cachant des créatures mortelles à l'intérieur. Un groupe de personnes se retrouve piégé dans un supermarché alors qu'ils tentent de survivre aux horreurs qui les entourent.",
        note: 5,
        year: 2007,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=122632.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617062/FILMS/043_g4xnhh.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 6min",
        countries: ["États-Unis"],
        productionCompanies: ["Dimension Films", "Darkwoods Productions"],
      },
    },
    {
      Movie: {
        title: "Cloverfield",
        ID: "044",
        genre: "Science-fiction, Horreur, Thriller",
        description:
          "Cloverfield est un film de science-fiction, d'horreur et de thriller réalisé par Matt Reeves. L'histoire suit un groupe d'amis pris au piège à New York alors qu'ils tentent de survivre à l'attaque d'une créature monstrueuse et à ses conséquences dévastatrices.",
        note: 3,
        year: 2008,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=129846.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617062/FILMS/044_b9oe9n.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "1h 25min",
        countries: ["États-Unis"],
        productionCompanies: ["Bad Robot", "Paramount Pictures"],
      },
    },
    {
      Movie: {
        title: "Spider-Man",
        ID: "045",
        genre: "Action, Aventure, Fantaisie",
        description:
          "Spider-Man est un film d'action, d'aventure et de fantasy réalisé par Sam Raimi. L'histoire suit la transformation de Peter Parker en Spider-Man après avoir été mordu par une araignée génétiquement modifiée. Il utilise ses nouveaux pouvoirs pour combattre le crime et protéger la ville de New York.",
        note: 4,
        year: 2002,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=29007.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617062/FILMS/045_pcwgl0.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 1min",
        countries: ["États-Unis"],
        productionCompanies: ["Columbia Pictures", "Marvel Enterprises"],
      },
    },
    {
      Movie: {
        title: "Spider-Man 2",
        ID: "046",
        genre: "Action, Aventure, Fantaisie",
        description:
          "Spider-Man 2 est un film d'action, d'aventure et de fantasy réalisé par Sam Raimi. Il fait suite au premier film et suit les nouvelles aventures de Peter Parker en tant que Spider-Man alors qu'il jongle avec sa vie personnelle et sa responsabilité en tant que super-héros.",
        note: 3,
        year: 2004,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=46112.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617062/FILMS/046_kotyce.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 7min",
        countries: ["États-Unis"],
        productionCompanies: ["Columbia Pictures", "Marvel Enterprises"],
      },
    },
    {
      Movie: {
        title: "Spider-Man 3",
        ID: "047",
        genre: "Action, Aventure, Fantaisie",
        description:
          "Spider-Man 3 est un film d'action, d'aventure et de fantasy réalisé par Sam Raimi. Dans ce troisième volet, Peter Parker doit faire face à de nouveaux défis alors qu'il affronte de nouveaux ennemis, y compris son propre côté sombre.",
        note: 3,
        year: 2007,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=56136.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617063/FILMS/047_mmjgxg.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 19min",
        countries: ["États-Unis"],
        productionCompanies: ["Columbia Pictures", "Marvel Enterprises"],
      },
    },
    {
      Movie: {
        title: "Le Loup de Wall Street",
        ID: "048",
        genre: "Biographie, Comédie, Crime",
        description:
          "Le Loup de Wall Street est un film biographique, comique et criminel réalisé par Martin Scorsese. Il est basé sur l'autobiographie de Jordan Belfort. L'histoire suit la montée et la chute de Belfort, un courtier en bourse de New York qui mène une vie de luxe, d'excès et de corruption financière.",
        note: 4,
        year: 2013,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=127524.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617063/FILMS/048_jrugig.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "2h 59min",
        countries: ["États-Unis"],
        productionCompanies: ["Paramount Pictures", "Red Granite Pictures"],
      },
    },
    {
      Movie: {
        title: "Harry Potter à l'école des sorciers",
        ID: "049",
        genre: "Aventure, Fantaisie",
        description:
          "Harry Potter à l'école des sorciers est un film d'aventure et de fantasy réalisé par Chris Columbus. Il est basé sur le premier livre de la série Harry Potter écrit par J.K. Rowling. L'histoire suit les aventures de Harry Potter, un jeune sorcier, lors de sa première année à l'école de sorcellerie de Poudlard.",
        note: 4,
        year: 2001,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=29276.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617064/FILMS/049_nxfzyd.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 32min",
        countries: ["Royaume-Uni", "États-Unis"],
        productionCompanies: ["Warner Bros. Pictures", "Heyday Films"],
      },
    },
    {
      Movie: {
        title: "Harry Potter et la Chambre des secrets",
        ID: "050",
        genre: "Aventure, Fantaisie",
        description:
          "Harry Potter et la Chambre des secrets est un film d'aventure et de fantasy réalisé par Chris Columbus. Il est basé sur le deuxième livre de la série Harry Potter écrit par J.K. Rowling. L'histoire suit les aventures de Harry Potter lors de sa deuxième année à Poudlard, où une force mystérieuse menace les élèves.",
        note: 3,
        year: 2002,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=41245.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617063/FILMS/050_r26hpt.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 41min",
        countries: ["Royaume-Uni", "États-Unis"],
        productionCompanies: ["Warner Bros. Pictures", "Heyday Films"],
      },
    },
    {
      Movie: {
        title: "Harry Potter et le Prisonnier d'Azkaban",
        ID: "051",
        genre: "Aventure, Fantaisie",
        description:
          "Harry Potter et le Prisonnier d'Azkaban est un film d'aventure et de fantasy réalisé par Alfonso Cuarón. Il est basé sur le troisième livre de la série Harry Potter écrit par J.K. Rowling. L'histoire suit les aventures de Harry Potter lors de sa troisième année à Poudlard, où il doit faire face à l'évasion d'un dangereux prisonnier.",
        note: 3,
        year: 2004,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=46865.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617063/FILMS/051_pqnkcw.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 20min",
        countries: ["Royaume-Uni", "États-Unis"],
        productionCompanies: ["Warner Bros. Pictures", "Heyday Films"],
      },
    },
    {
      Movie: {
        title: "Harry Potter et la Coupe de feu",
        ID: "052",
        genre: "Aventure, Fantaisie",
        description:
          "Harry Potter et la Coupe de feu est un film d'aventure et de fantasy réalisé par Mike Newell. Il est basé sur le quatrième livre de la série Harry Potter écrit par J.K. Rowling. L'histoire suit les aventures de Harry Potter lors de sa quatrième année à Poudlard, où il participe au dangereux Tournoi des Trois Sorciers.",
        note: 4,
        year: 2005,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=53756.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617064/FILMS/052_yowbqm.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 37min",
        countries: ["Royaume-Uni", "États-Unis"],
        productionCompanies: ["Warner Bros. Pictures", "Heyday Films"],
      },
    },
    {
      Movie: {
        title: "Harry Potter et l'Ordre du Phénix",
        ID: "053",
        genre: "Aventure, Fantaisie",
        description:
          "Harry Potter et l'Ordre du Phénix est un film d'aventure et de fantasy réalisé par David Yates. Il est basé sur le cinquième livre de la série Harry Potter écrit par J.K. Rowling. L'histoire suit les aventures de Harry Potter lors de sa cinquième année à Poudlard, où il forme un groupe secret pour combattre Voldemort et ses partisans.",
        note: 3,
        year: 2007,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=58608.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617064/FILMS/053_qvh6sa.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 18min",
        countries: ["Royaume-Uni", "États-Unis"],
        productionCompanies: ["Warner Bros. Pictures", "Heyday Films"],
      },
    },
    {
      Movie: {
        title: "Harry Potter et le Prince de sang-mêlé",
        ID: "054",
        genre: "Aventure, Fantaisie",
        description:
          "Harry Potter et le Prince de sang-mêlé est un film d'aventure et de fantasy réalisé par David Yates. Il est basé sur le sixième livre de la série Harry Potter écrit par J.K. Rowling. L'histoire suit les aventures de Harry Potter lors de sa sixième année à Poudlard, où il découvre des informations vitales sur Voldemort.",
        note: 3,
        year: 2009,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=116305.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617064/FILMS/054_dpwgul.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 33min",
        countries: ["Royaume-Uni", "États-Unis"],
        productionCompanies: ["Warner Bros. Pictures", "Heyday Films"],
      },
    },
    {
      Movie: {
        title: "Harry Potter et les Reliques de la Mort - Partie 1",
        ID: "055",
        genre: "Aventure, Fantaisie",
        description:
          "Harry Potter et les Reliques de la Mort - Partie 1 est un film d'aventure et de fantasy réalisé par David Yates. Il est basé sur le septième et dernier livre de la série Harry Potter écrit par J.K. Rowling. L'histoire suit les aventures de Harry Potter lors de sa septième année à Poudlard, où il cherche à détruire les Horcruxes de Voldemort.",
        note: 3,
        year: 2010,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=126693.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617064/FILMS/055_vszqzr.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 26min",
        countries: ["Royaume-Uni", "États-Unis"],
        productionCompanies: ["Warner Bros. Pictures", "Heyday Films"],
      },
    },
    {
      Movie: {
        title: "Harry Potter et les Reliques de la Mort - Partie 2",
        ID: "056",
        genre: "Aventure, Fantaisie",
        description:
          "Harry Potter et les Reliques de la Mort - Partie 2 est un film d'aventure et de fantasy réalisé par David Yates. Il est la seconde partie de l'adaptation cinématographique du septième et dernier livre de la série Harry Potter écrit par J.K. Rowling. L'histoire suit les événements finaux de la bataille entre Harry Potter et Voldemort.",
        note: 3,
        year: 2011,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=134925.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617064/FILMS/056_comevt.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 10min",
        countries: ["États-Unis", "Royaume-Uni"],
        productionCompanies: ["Warner Bros. Pictures", "Heyday Films"],
      },
    },
    {
      Movie: {
        title: "Anaconda",
        ID: "057",
        genre: "Horreur, Aventure, Thriller",
        description:
          "Anaconda est un film d'horreur, d'aventure et de thriller réalisé par Luis Llosa. L'histoire suit un groupe de documentaristes en Amazonie qui rencontrent un chasseur de serpents obsédé par la capture d'un anaconda géant. Ils se retrouvent alors confrontés à un prédateur mortel dans la jungle impitoyable.",
        note: 2,
        year: 1997,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=11511.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617065/FILMS/057_bkuduf.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "1h 29min",
        countries: ["États-Unis", "Brésil"],
        productionCompanies: [
          "Columbia Pictures",
          "Cinema Line Film Corporation",
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
        note: 5,
        year: 2001,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=36284.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617065/FILMS/058_kfloet.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "1h 34min",
        countries: ["France", "Japon"],
        productionCompanies: ["EuropaCorp", "Canal+"],
      },
    },
    {
      Movie: {
        title: "Jurassic Park 2 : Le Monde Perdu",
        ID: "059",
        genre: "Aventure, Science-fiction, Thriller",
        description:
          "Jurassic Park 2 : Le Monde Perdu est un film d'aventure, de science-fiction et de thriller réalisé par Steven Spielberg. Il fait suite au premier film de la série. L'histoire suit une expédition sur une île où les dinosaures ont été créés, mais les participants se retrouvent bientôt pris au piège entre les prédateurs et les chasseurs.",
        note: 5,
        year: 1997,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=9712.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617065/FILMS/059_fazyre.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "2h 9min",
        countries: ["États-Unis"],
        productionCompanies: ["Universal Pictures", "Amblin Entertainment"],
      },
    },
    {
      Movie: {
        title: "Jurassic Park 3",
        ID: "060",
        genre: "Aventure, Science-fiction, Thriller",
        description:
          "Jurassic Park 3 est un film d'aventure, de science-fiction et de thriller réalisé par Joe Johnston. L'histoire suit une expédition sur une île peuplée de dinosaures, où les participants se retrouvent piégés par des créatures préhistoriques redoutables.",
        note: 3,
        year: 2001,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=29291.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617065/FILMS/060_vmltoh.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "1h 32min",
        countries: ["États-Unis"],
        productionCompanies: ["Universal Pictures", "Amblin Entertainment"],
      },
    },
    {
      Movie: {
        title: "Rogue One: A Star Wars Story",
        ID: "061",
        genre: "Action, Aventure, Science-fiction",
        description:
          "Rogue One: A Star Wars Story est un film d'action, d'aventure et de science-fiction se déroulant dans l'univers de Star Wars. Réalisé par Gareth Edwards, le film raconte l'histoire d'un groupe hétéroclite de rebelles qui se lancent dans une mission audacieuse pour voler les plans de l'Étoile de la Mort, une arme de destruction massive de l'Empire Galactique.",
        note: 4,
        year: 2016,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=218395.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617065/FILMS/061_ujdujf.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "2h 13min",
        countries: ["États-Unis", "Royaume-Uni"],
        productionCompanies: ["Lucasfilm Ltd.", "Walt Disney Pictures"],
      },
    },
    {
      Movie: {
        title: "The Grudge",
        ID: "062",
        genre: "Horreur, Mystère, Thriller",
        description:
          "The Grudge est un film d'horreur, de mystère et de thriller réalisé par Takashi Shimizu. L'histoire suit une malédiction qui se propage à travers une maison, maudissant tous ceux qui entrent en contact avec elle. Alors que des événements terrifiants se multiplient, les personnages doivent affronter leurs pires cauchemars pour tenter de survivre.",
        note: 2,
        year: 2004,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=55429.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617066/FILMS/062_qnojf5.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "1h 32min",
        countries: ["Japon", "États-Unis"],
        productionCompanies: ["Ghost House Pictures", "Vertigo Entertainment"],
      },
    },
    {
      Movie: {
        title: "Interstella 5555",
        ID: "063",
        genre: "Animation, Aventure, Science-fiction",
        description:
          "Interstella 5555: The 5tory of the 5ecret 5tar 5ystem est un film d'animation, d'aventure et de science-fiction réalisé par Kazuhisa Takenouchi et produit par le groupe de musique électronique Daft Punk. L'histoire suit les aventures d'un groupe de musiciens extraterrestres qui sont kidnappés et emmenés sur Terre par un maléfique manager de l'industrie musicale.",
        note: 3,
        year: 2003,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=52631.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617066/FILMS/063_l4hxq3.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "1h 5min",
        countries: ["Japon", "France"],
        productionCompanies: ["Toei Animation", "Daft Life Ltd."],
      },
    },
    {
      Movie: {
        title: "Blair Witch Project",
        ID: "064",
        genre: "Horreur, Mystère, Thriller",
        description:
          "Blair Witch Project est un film d'horreur, de mystère et de thriller réalisé par Daniel Myrick et Eduardo Sánchez. L'histoire suit trois étudiants en cinéma qui partent dans les bois pour enquêter sur la légende de la sorcière de Blair, mais se retrouvent bientôt confrontés à des événements terrifiants qui mettent leur vie en danger.",
        note: 5,
        year: 1999,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=20268.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617066/FILMS/064_eadnti.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "1h 21min",
        countries: ["États-Unis"],
        productionCompanies: ["Haxan Films", "Artisan Entertainment"],
      },
    },
    {
      Movie: {
        title: "Man on Fire",
        ID: "065",
        genre: "Action, Crime, Drame",
        description:
          "Man on Fire est un film d'action, de crime et de drame réalisé par Tony Scott. L'histoire suit un ancien soldat interprété par Denzel Washington qui devient un garde du corps chargé de protéger une jeune fille à Mexico. Lorsqu'elle est enlevée, il entreprend une mission de vengeance brutale pour la retrouver.",
        note: 3,
        year: 2004,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=47141.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617066/FILMS/065_zn8wix.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "2h 26min",
        countries: ["États-Unis", "Mexique"],
        productionCompanies: ["Regency Enterprises", "Scott Free Productions"],
      },
    },
    {
      Movie: {
        title: "Blade",
        ID: "066",
        genre: "Action, Horreur, Science-fiction",
        description:
          "Blade est un film d'action, d'horreur et de science-fiction réalisé par Stephen Norrington. L'histoire suit un chasseur de vampires mi-humain, mi-vampire, nommé Blade, qui combat les vampires tout en cherchant à venger la mort de sa mère.",
        note: 3,
        year: 1998,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=19259.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617066/FILMS/066_uw2i67.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "2h 1min",
        countries: ["États-Unis"],
        productionCompanies: [
          "New Line Cinema",
          "Amen Ra Films",
          "Marvel Enterprises",
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
        note: 3,
        year: 2006,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=57529.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617067/FILMS/067_aqviao.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "1h 57min",
        countries: ["États-Unis"],
        productionCompanies: ["Legendary Pictures", "Virtual Studios"],
      },
    },
    {
      Movie: {
        title: "The Fast and the Furious",
        ID: "068",
        genre: "Action, Crime, Thriller",
        description:
          "The Fast and the Furious est un film d'action, de crime et de thriller réalisé par Rob Cohen. L'histoire suit le monde des courses de rue clandestines à Los Angeles, où un policier infiltré, Brian O'Conner, tente d'infiltrer un groupe de pilotes de rue mené par Dominic Toretto.",
        note: 5,
        year: 2001,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=29173.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617066/FILMS/068_xoujrv.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "1h 47min",
        countries: ["États-Unis"],
        productionCompanies: [
          "Universal Pictures",
          "Original Film",
          "Relativity Media",
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
        note: 5,
        year: 2003,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=45319.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617067/FILMS/069_dj2bdj.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "1h 47min",
        countries: ["États-Unis"],
        productionCompanies: [
          "Universal Pictures",
          "Original Film",
          "Relativity Media",
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
        note: 3,
        year: 2006,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=61256.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617067/FILMS/070_zji5o3.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "1h 44min",
        countries: ["États-Unis"],
        productionCompanies: ["Universal Pictures"],
      },
    },
    {
      Movie: {
        title: "28 Days Later",
        ID: "071",
        genre: "Horreur, Science-fiction, Thriller",
        description:
          "28 Days Later est un film d'horreur, de science-fiction et de thriller réalisé par Danny Boyle. L'histoire se déroule dans un monde post-apocalyptique où un virus dévastateur a transformé la majeure partie de la population en des créatures violentes et infectieuses. Un petit groupe de survivants tente de survivre et de trouver un refuge sûr.",
        note: 4,
        year: 2002,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=46940.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617067/FILMS/071_nyy6t5.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 16 ans",
        duration: "1h 53min",
        countries: ["États-Unis"],
        productionCompanies: ["DNA Films", "British Film Council"],
      },
    },
    {
      Movie: {
        title: "28 Weeks Later",
        ID: "072",
        genre: "Horreur, Science-fiction, Thriller",
        description:
          "28 Weeks Later est un film d'horreur, de science-fiction et de thriller réalisé par Juan Carlos Fresnadillo. Il s'agit d'une suite de '28 Days Later'. L'histoire se déroule six mois après les événements du premier film, où un nouveau foyer de l'infection commence à émerger à Londres. Alors que la ville est mise en quarantaine, un groupe de survivants tente de s'échapper.",
        note: 3,
        year: 2007,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=118343.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617067/FILMS/072_mzynxg.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 16 ans",
        duration: "1h 40min",
        countries: ["Espagne"],
        productionCompanies: ["DNA Films", "UK Film Council"],
      },
    },
    {
      Movie: {
        title: "Jumanji",
        ID: "073",
        genre: "Aventure, Fantaisie, Famille",
        description:
          "Jumanji est un film d'aventure, de fantaisie et familial réalisé par Joe Johnston. L'histoire suit deux enfants qui libèrent un homme emprisonné dans un jeu de société magique appelé Jumanji. Ils doivent alors terminer le jeu pour restaurer le monde réel des conséquences chaotiques du jeu.",
        note: 5,
        year: 1995,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=13970.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617068/FILMS/073_agxkcc.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "1h 44min",
        countries: ["États-Unis"],
        productionCompanies: ["TriStar Pictures"],
      },
    },
    {
      Movie: {
        title: "RoboCop",
        ID: "074",
        genre: "Action, Science-fiction, Thriller",
        description:
          "RoboCop est un film d'action, de science-fiction et de thriller réalisé par Paul Verhoeven. L'histoire se déroule dans un futur dystopique où un policier mortellement blessé est transformé en cyborg nommé RoboCop. Il lutte contre le crime et la corruption tout en tentant de retrouver sa véritable identité humaine.",
        note: 4,
        year: 1987,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=3085.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617068/FILMS/074_dgo08u.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "1h 42min",
        countries: ["États-Unis"],
        productionCompanies: ["Orion Pictures", "Robocop Productions Ltd."],
      },
    },
    {
      Movie: {
        title: "RoboCop 2",
        ID: "075",
        genre: "Action, Science-fiction, Thriller",
        description:
          "RoboCop 2 est un film d'action, de science-fiction et de thriller réalisé par Irvin Kershner. Il s'agit de la suite du film original. L'histoire suit RoboCop qui doit affronter un nouveau terroriste robotique, ainsi que les machinations d'une corporation sans scrupules qui cherche à exploiter la technologie de RoboCop à des fins lucratives.",
        note: 3,
        year: 1990,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=52118.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617068/FILMS/075_ymbag0.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "1h 57min",
        countries: ["États-Unis"],
        productionCompanies: ["Orion Pictures"],
      },
    },
    {
      Movie: {
        title: "The Thing",
        ID: "076",
        genre: "Horreur, Science-fiction, Mystère",
        description:
          "The Thing est un film d'horreur, de science-fiction et de mystère réalisé par John Carpenter. L'histoire suit une équipe de chercheurs en Antarctique qui découvre un organisme extraterrestre capable d'imiter n'importe quelle forme de vie. Alors qu'ils luttent pour survivre et pour déterminer qui est humain et qui est l'imitateur, la paranoïa et la méfiance s'installent.",
        note: 5,
        year: 1982,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=1048.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617068/FILMS/076_ru9pqc.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 16 ans",
        duration: "1h 49min",
        countries: ["États-Unis"],
        productionCompanies: ["Universal Pictures"],
      },
    },
    {
      Movie: {
        title: "Matrix Reloaded",
        ID: "077",
        genre: "Action, Science-fiction",
        description:
          "Matrix Reloaded est un film d'action et de science-fiction réalisé par les Wachowski. Il s'agit de la suite du film Matrix. L'histoire suit Neo et ses alliés alors qu'ils luttent contre les machines dans le monde simulé de la Matrice. Ils cherchent à libérer l'humanité de l'emprise des machines tout en découvrant les secrets profonds de la réalité.",
        note: 3,
        year: 2003,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=28540.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617069/FILMS/077_xryodl.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 18min",
        countries: ["États-Unis", "Australie"],
        productionCompanies: [
          "Warner Bros. Pictures",
          "Village Roadshow Pictures",
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
        note: 3,
        year: 2003,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=28546.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715617069/FILMS/078_mcmuhb.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "2h 9min",
        countries: ["États-Unis"],
        productionCompanies: ["Warner Bros. Pictures"],
      },
    },
    {
      Movie: {
        title: "Astérix et Obélix : Mission Cléopâtre",
        ID: "079",
        genre: "Comédie, Aventure",
        description:
          "Astérix et Obélix : Mission Cléopâtre est une comédie d'aventure réalisée par Alain Chabat. Le film est basé sur la bande dessinée Astérix, créée par René Goscinny et Albert Uderzo. L'histoire suit les aventures d'Astérix et Obélix alors qu'ils aident Cléopâtre à construire un palais somptueux en trois mois, pour prouver la grandeur de la civilisation égyptienne.",
        note: 3,
        year: 2002,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=28537.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715626081/FILMS/079_vmqhdl.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "1h 47min",
        countries: ["France", "Allemagne", "Italie"],
        productionCompanies: ["Pathé"],
      },
    },
    {
      Movie: {
        title: "Taxi",
        ID: "080",
        genre: "Comédie, Action",
        description:
          "Taxi est une comédie d'action réalisée par Gérard Pirès. Le film met en scène un chauffeur de taxi téméraire nommé Daniel Morales, joué par Samy Naceri, qui se retrouve impliqué dans des courses-poursuites effrénées avec la police après avoir été recruté pour conduire un détective de la police de Marseille.",
        note: 3,
        year: 1998,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=17106.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715626081/FILMS/080_nihiuw.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Samy Naceri", "Frédéric Diefenthal"],
        duration: "1h 26min",
        countries: ["France"],
        productionCompanies: ["ARP Sélection", "TF1 Films Production"],
      },
    },
    {
      Movie: {
        title: "Sex Academy",
        ID: "081",
        genre: "Comédie",
        description:
          "Sex Academy est une comédie qui parodie les films pour adolescents. Le film suit les aventures de Janey Briggs, une lycéenne impopulaire qui cherche à se venger des moqueries des élèves populaires en participant à une compétition de danse.",
        note: 2,
        year: 2001,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=40020.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715626082/FILMS/081_snfo5w.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Chyler Leigh", "Chris Evans"],
        duration: "1h 29min",
        countries: ["États-Unis"],
        productionCompanies: ["Sony Pictures Entertainment", "Dimension Films"],
      },
    },
    {
      Movie: {
        title: "La Planète des Singes",
        ID: "082",
        genre: "Science-fiction, Drame",
        description:
          "La Planète des Singes est un film de science-fiction et de drame réalisé par Franklin J. Schaffner. L'histoire suit un groupe d'astronautes qui atterrissent sur une planète où les singes sont les espèces dominantes et les humains sont réduits à l'état de primitives.",
        note: 3,
        year: 1968,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=12791.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715626081/FILMS/082_uhasac.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Charlton Heston", "Roddy McDowall"],
        duration: "1h 52min",
        countries: ["États-Unis"],
        productionCompanies: ["APJAC Productions", "Twentieth Century Fox"],
      },
    },
    {
      Movie: {
        title: "Rush Hour",
        ID: "083",
        genre: "Action, Comédie",
        description:
          "Rush Hour est un film d'action comique réalisé par Brett Ratner. L'histoire suit un détective de la police de Los Angeles, joué par Chris Tucker, et un inspecteur de police de Hong Kong, joué par Jackie Chan, qui sont forcés de collaborer pour résoudre un enlèvement.",
        note: 4,
        year: 1998,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=15067.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715626082/FILMS/083_auurqs.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Jackie Chan", "Chris Tucker"],
        duration: "1h 38min",
        countries: ["États-Unis"],
        productionCompanies: ["New Line Cinema", "Roger Birnbaum Productions"],
      },
    },
    {
      Movie: {
        title: "La Légende du Dragon Rouge",
        ID: "084",
        genre: "Action, Arts Martiaux",
        description:
          "La Légende du Dragon Rouge est un film d'action et d'arts martiaux mettant en vedette Jet Li. L'histoire suit un jeune guerrier nommé Wong Fei-Hung, qui se bat contre des envahisseurs étrangers et leurs alliés traîtres pour défendre son pays et protéger les innocents.",
        note: 2,
        year: 1994,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=43201.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715626084/FILMS/084_k8gc7j.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Jet Li", "Rosamund Kwan"],
        duration: "1h 44min",
        countries: ["Hong Kong"],
        productionCompanies: ["Paragon Films Ltd."],
      },
    },
    {
      Movie: {
        title: "Combat de Maître",
        ID: "085",
        genre: "Action, Arts Martiaux",
        description:
          "Combat de Maître est un film d'action et d'arts martiaux mettant en vedette Jackie Chan. L'histoire suit un jeune maître en arts martiaux qui se rend dans une école d'arts martiaux rivale pour venger la mort de son père et restaurer l'honneur de sa famille.",
        note: 2,
        year: 1994,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=147967.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715626084/FILMS/085_ogqd6d.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Jackie Chan"],
        duration: "1h 35min",
        countries: ["Hong Kong"],
        productionCompanies: ["Golden Harvest Company", "Paragon Films Ltd."],
      },
    },
    {
      Movie: {
        title: "Pirates des Caraïbes : La Malédiction du Black Pearl",
        ID: "086",
        genre: "Action, Aventure",
        description:
          "Pirates des Caraïbes : La Malédiction du Black Pearl est un film d'action et d'aventure réalisé par Gore Verbinski. L'histoire suit les aventures du capitaine Jack Sparrow, joué par Johnny Depp, alors qu'il tente de sauver sa bien-aimée et de récupérer un navire pirate volé par des pirates maudits.",
        note: 3,
        year: 2003,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=46117.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715626084/FILMS/087_qbbfrb.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        actors: ["Johnny Depp", "Geoffrey Rush", "Orlando Bloom"],
        duration: "2h 23min",
        countries: ["États-Unis"],
        productionCompanies: [
          "Walt Disney Pictures",
          "Jerry Bruckheimer Films",
        ],
      },
    },
    {
      Movie: {
        title: "Kickboxer",
        ID: "087",
        genre: "Action, Arts Martiaux",
        description:
          "Kickboxer est un film d'action et d'arts martiaux réalisé par Mark DiSalle et David Worth. L'histoire suit un combattant de kickboxing nommé Kurt Sloan, joué par Jean-Claude Van Damme, qui se rend en Thaïlande pour venger la paralysie de son frère lors d'un combat de kickboxing illégal.",
        note: 5,
        year: 1989,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=59194.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715626085/FILMS/086_vp9i3o.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        actors: ["Jean-Claude Van Damme", "Dennis Alexio", "Dennis Chan"],
        duration: "1h 37min",
        countries: ["États-Unis"],
        productionCompanies: ["Kings Road Entertainment", "Cannon Group"],
      },
    },
    {
      Movie: {
        title: "The Substitute 2",
        ID: "088",
        genre: "Action, Thriller",
        description:
          "The Substitute 2 est un film d'action et de thriller réalisé par Steven Pearl. L'histoire suit un mercenaire nommé Karl Thomasson, joué par Treat Williams, qui est engagé comme enseignant remplaçant dans une école de Los Angeles afin d'infiltrer un gang de trafiquants de drogue.",
        note: 2,
        year: 1998,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=147130.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715626086/FILMS/088_foxnia.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        actors: ["Treat Williams", "Angie Everhart", "Patrick Kilpatrick"],
        duration: "1h 30min",
        countries: ["États-Unis"],
        productionCompanies: ["Artisan Entertainment"],
      },
    },
    {
      Movie: {
        title: "Inception",
        ID: "089",
        genre: "Science-fiction, Action",
        description:
          "Inception est un film de science-fiction écrit et réalisé par Christopher Nolan. Il met en vedette Leonardo DiCaprio dans le rôle d'un voleur qui pénètre dans les rêves de ses cibles pour voler des informations précieuses. Le film explore des concepts de réalité et de conscience tout en offrant des séquences d'action spectaculaires.",
        note: 3,
        year: 2010,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=143692.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715879249/FILMS/121_pfgbok.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: [
          "Leonardo DiCaprio",
          "Joseph Gordon-Levitt",
          "Elliot Page",
          "Tom Hardy",
          "Ken Watanabe",
          "Cillian Murphy",
        ],
        duration: "2h 28min",
        countries: ["États-Unis", "Royaume-Uni"],
        productionCompanies: ["Warner Bros. Pictures", "Legendary Pictures"],
      },
    },
    {
      Movie: {
        title: "Ça",
        ID: "090",
        genre: "Horreur, Drame",
        description:
          "Ça est un téléfilm d'horreur basé sur le roman de Stephen King. L'histoire suit un groupe d'enfants qui se font terroriser par un clown maléfique appelé Pennywise dans la petite ville de Derry, Maine. Des années plus tard, ils se réunissent pour affronter à nouveau leur peur.",
        note: 2,
        year: 1990,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=54874.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715626087/FILMS/089_w94vxt.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Harry Anderson", "Dennis Christopher", "Richard Masur"],
        duration: "3h 12min",
        countries: ["États-Unis", "Canada"],
        productionCompanies: [
          "Green/Epstein Productions",
          "Lorimar Television",
        ],
      },
    },
    {
      Movie: {
        title: "Hellraiser",
        ID: "091",
        genre: "Horreur",
        description:
          "Hellraiser est un film d'horreur réalisé par Clive Barker. L'histoire suit un homme qui découvre un mystérieux cube de puzzle qui ouvre un portail vers un royaume de plaisir et de douleur contrôlé par des êtres démoniaques connus sous le nom de Cénobites.",
        note: 2,
        year: 1987,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=44031.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715626088/FILMS/090_jfteup.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12",
        actors: ["Andrew Robinson", "Clare Higgins", "Ashley Laurence"],
        duration: "1h 34min",
        countries: ["Royaume-Uni"],
        productionCompanies: [
          "Film Futures",
          "Entertainment Film Distributors",
        ],
      },
    },
    {
      Movie: {
        title: "The Descent",
        ID: "092",
        genre: "Horreur, Thriller",
        description:
          "The Descent est un film d'horreur et de thriller réalisé par Neil Marshall. L'histoire suit un groupe de femmes qui partent explorer des grottes, mais se retrouvent piégées et chassées par des créatures monstrueuses vivant sous terre.",
        note: 3,
        year: 2005,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=47101.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715627525/FILMS/092_emoemu.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12",
        actors: ["Shauna Macdonald", "Natalie Mendoza", "Alex Reid"],
        duration: "1h 39min",
        countries: ["Royaume-Uni"],
        productionCompanies: ["Celador Films", "Northmen Productions"],
      },
    },
    {
      Movie: {
        title: "Arrietty",
        ID: "093",
        genre: "Animation, Aventure",
        description:
          "Arrietty est un film d'animation japonais réalisé par Hiromasa Yonebayashi. L'histoire est basée sur le roman de Mary Norton, 'Les Chapardeurs'. Elle suit les aventures d'une famille de 'chapardeurs', de minuscules personnes vivant sous le plancher d'une maison, et leur rencontre avec un garçon humain.",
        note: 3,
        year: 2010,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=176684.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715627526/FILMS/093_vc2fsc.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Mirai Shida", "Ryûnosuke Kamiki", "Tatsuya Fujiwara"],
        duration: "1h 34min",
        countries: ["Japon"],
        productionCompanies: ["Studio Ghibli", "The Walt Disney Company"],
      },
    },
    {
      Movie: {
        title: "Les Rois Mages",
        ID: "094",
        genre: "Comédie",
        description:
          "Les Rois Mages est un film d'animation français réalisé par Artus de Penguern. L'histoire suit les aventures humoristiques de trois mages, Melchior, Balthazar et Gaspard, alors qu'ils suivent une étoile pour trouver l'enfant Jésus.",
        note: 3,
        year: 2001,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=35120.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715627526/FILMS/091_cepblv.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Artus de Penguern", "Paco Rabanne", "Dee Dee Bridgewater"],
        duration: "1h 30min",
        countries: ["France"],
        productionCompanies: ["Avalanche Productions", "France 3 Cinéma"],
      },
    },
    {
      Movie: {
        title: "Le Château de Cagliostro",
        ID: "095",
        genre: "Animation, Aventure",
        description:
          "Le Château de Cagliostro est un film d'animation japonais réalisé par Hayao Miyazaki. L'histoire suit les aventures du célèbre gentleman cambrioleur Lupin III alors qu'il tente de démanteler un complot criminel impliquant le mystérieux Château de Cagliostro en Europe.",
        note: 3,
        year: 1979,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=12958.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715627526/FILMS/094_b8ls0x.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Yasuo Yamada", "Eiko Masuyama", "Kiyoshi Kobayashi"],
        duration: "1h 40min",
        countries: ["Japon"],
        productionCompanies: ["TMS Entertainment", "Tokyo Movie Shinsha (TMS)"],
      },
    },
    {
      Movie: {
        title: "Le Prince d'Égypte",
        ID: "096",
        genre: "Animation, Aventure",
        description:
          "Le Prince d'Égypte est un film d'animation américain réalisé par Brenda Chapman, Steve Hickner et Simon Wells. Il raconte l'histoire biblique de Moïse, de sa naissance à sa libération du joug de l'esclavage en Égypte.",
        note: 4,
        year: 1998,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=27657.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715627530/FILMS/095_yeaxjw.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Val Kilmer", "Ralph Fiennes", "Michelle Pfeiffer"],
        duration: "1h 39min",
        countries: ["États-Unis"],
        productionCompanies: ["DreamWorks Animation", "DreamWorks Pictures"],
      },
    },
    {
      Movie: {
        title: "Sinbad : La Légende des Sept Mers",
        ID: "097",
        genre: "Animation, Aventure",
        description:
          "Sinbad : La Légende des Sept Mers est un film d'animation américain réalisé par Patrick Gilmore et Tim Johnson. L'histoire suit les aventures du marin Sinbad alors qu'il affronte des monstres marins, des déesses maléfiques et d'autres dangers pour sauver son royaume.",
        note: 2,
        year: 2003,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=45135.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715627530/FILMS/096_j03njl.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Brad Pitt", "Catherine Zeta-Jones", "Michelle Pfeiffer"],
        duration: "1h 26min",
        countries: ["États-Unis"],
        productionCompanies: ["DreamWorks Animation", "DreamWorks Pictures"],
      },
    },
    {
      Movie: {
        title: "Nicky Larson et le Parfum de Cupidon",
        ID: "098",
        genre: "Comédie, Action",
        description:
          "Nicky Larson et le Parfum de Cupidon est un film d'action et de comédie française réalisé par Philippe Lacheau. Il met en scène les aventures de Nicky Larson, un détective privé, et de sa partenaire Laura, alors qu'ils tentent de résoudre une affaire de meurtre.",
        note: 3,
        year: 2019,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=257514.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715627531/FILMS/098_aegi5j.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Philippe Lacheau", "Élodie Fontan", "Tarek Boudali"],
        duration: "1h 31min",
        countries: ["France"],
        productionCompanies: ["Nexus Factory", "M6 Films"],
      },
    },
    {
      Movie: {
        title: "Gantz:O",
        ID: "099",
        genre: "Animation, Science-Fiction",
        description:
          "Gantz:O est un film d'animation japonais réalisé par Yasushi Kawamura. L'histoire suit un groupe de personnes décédées qui sont ressuscitées par une mystérieuse sphère noire appelée Gantz. Ils sont ensuite forcés de participer à des missions dangereuses contre des créatures surnaturelles pour gagner leur liberté.",
        note: 1,
        year: 2016,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=247246.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715627534/FILMS/099_q5cd1i.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        actors: ["Yuki Kaji", "Daisuke Ono", "Mao Ichimichi"],
        duration: "1h 35min",
        countries: ["Japon"],
        productionCompanies: ["Digital Frontier"],
      },
    },
    {
      Movie: {
        title: "Street Fighter 2 : L'animated movie",
        ID: "100",
        genre: "Animation, Action",
        description:
          "Street Fighter 2 : L'animated movie est un film d'animation japonais réalisé par Gisaburō Sugii. Il est basé sur la franchise de jeux vidéo Street Fighter de Capcom. L'histoire suit les combats entre les guerriers du monde entier, dirigés par Ryu et Ken, et l'organisation criminelle Shadaloo dirigée par M. Bison.",
        note: 3,
        year: 1994,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=55421.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715627534/FILMS/100_qkehup.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        actors: ["Kōjiro Shimizu", "Kenji Haga", "Miki Fujitani"],
        duration: "1h 42min",
        countries: ["Japon"],
        productionCompanies: ["Manga Entertainment", "Studio Junio"],
      },
    },
    {
      Movie: {
        title: "Le Monde de Nemo",
        ID: "101",
        genre: "Animation, Aventure",
        description:
          "Le Monde de Nemo est un film d'animation réalisé par Andrew Stanton. L'histoire suit les aventures palpitantes d'un petit poisson clown nommé Nemo, qui se retrouve séparé de son père, Marlin, et plonge dans un voyage épique à travers l'océan pour le retrouver.",
        note: 3,
        year: 2003,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=29057.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715627535/FILMS/097_q3jedq.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Franck Dubosc", "Wahid Lamamra", "Maurice Barthélémy"],
        duration: "1h 40min",
        countries: ["États-Unis"],
        productionCompanies: [
          "Pixar Animation Studios",
          "Walt Disney Pictures",
        ],
      },
    },
    {
      Movie: {
        title: "Dead Space: Downfall",
        ID: "102",
        genre: "Animation, Horreur",
        description:
          "Dead Space: Downfall est un film d'animation horrifique réalisé par Chuck Patton. Il s'agit d'un préquel du jeu vidéo Dead Space. L'histoire suit l'équipage d'un vaisseau spatial chargé d'explorer une installation minière abandonnée envahie par des créatures extraterrestres monstrueuses.",
        note: 4,
        year: 2008,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=139554.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715632371/FILMS/101_fa2prq.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 16 ans",
        actors: ["Nika Futterman", "Keith Szarabajka", "Jim Cummings"],
        duration: "1h 14min",
        countries: ["États-Unis"],
        productionCompanies: ["Film Roman Productions", "Electronic Arts"],
      },
    },
    {
      Movie: {
        title: "Passengers",
        ID: "103",
        genre: "Drame, Romance, Science-fiction",
        description:
          "Passengers est un film de science-fiction romantique réalisé par Morten Tyldum. L'histoire se déroule dans un vaisseau spatial en route vers une colonie lointaine, où deux passagers, Jim Preston et Aurora Lane, se réveillent accidentellement de leur hibernation 90 ans trop tôt.",
        note: 2,
        year: 2016,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=220846.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715681090/FILMS/102_km1jyr.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Jennifer Lawrence", "Chris Pratt", "Michael Sheen"],
        duration: "1h 56min",
        countries: ["États-Unis"],
        productionCompanies: ["Columbia Pictures", "Village Roadshow Pictures"],
      },
    },
    {
      Movie: {
        title: "La Route",
        ID: "104",
        genre: "Drame, Science-fiction",
        description:
          "La Route est un film post-apocalyptique réalisé par John Hillcoat. L'histoire suit un père et son fils alors qu'ils voyagent à travers un paysage dévasté par une catastrophe mondiale, cherchant à survivre et à trouver un refuge dans un monde en ruines.",
        note: 4,
        year: 2009,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=127661.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715717800/FILMS/103_qzux4f.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        actors: ["Viggo Mortensen", "Kodi Smit-McPhee", "Charlize Theron"],
        duration: "1h 51min",
        countries: ["États-Unis"],
        productionCompanies: ["2929 Productions", "Dimension Films"],
      },
    },
    {
      Movie: {
        title: "Pandorum",
        ID: "105",
        genre: "Horreur, Science-fiction",
        description:
          "Pandorum est un film de science-fiction horrifique réalisé par Christian Alvart. L'histoire suit deux membres d'équipage d'un vaisseau spatial, qui se réveillent de leur sommeil cryogénique pour découvrir que le vaisseau est envahi par d'étranges créatures et que leur mission a pris un tournant sinistre.",
        note: 2,
        year: 2009,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=133946.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715795044/FILMS/106_scirzv.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 16 ans",
        actors: ["Dennis Quaid", "Ben Foster", "Cam Gigandet"],
        duration: "1h 48min",
        countries: ["Allemagne", "Royaume-Uni", "États-Unis"],
        productionCompanies: ["Constantin Film", "Impact Pictures"],
      },
    },
    {
      Movie: {
        title: "Pour quelques dollars de plus",
        ID: "106",
        genre: "Western",
        description:
          "Pour quelques dollars de plus est un western spaghetti réalisé par Sergio Leone. Le film met en scène les aventures de deux chasseurs de primes, le Colonel Mortimer et le Manchot, qui unissent leurs forces pour capturer El Indio, un redoutable bandit recherché pour meurtre et vol.",
        note: 3,
        year: 1965,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=929.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715795044/FILMS/104_emi8t1.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        actors: ["Clint Eastwood", "Lee Van Cleef", "Gian Maria Volontè"],
        duration: "2h 10min",
        countries: ["Italie", "Espagne", "Allemagne de l'Ouest"],
        productionCompanies: [
          "Constantin Film",
          "Produzioni Europee Associati (PEA)",
          "Arturo González Producciones Cinematográficas",
        ],
      },
    },
    {
      Movie: {
        title: "Total Recall",
        ID: "107",
        genre: "Science-Fiction, Action",
        description:
          "Total Recall est un film de science-fiction réalisé par Paul Verhoeven. L'histoire se déroule dans un futur où les voyages sur Mars sont possibles. Un homme ordinaire, Douglas Quaid, se retrouve impliqué dans une conspiration interplanétaire après avoir acheté des souvenirs de vacances implantés.",
        note: 3,
        year: 1990,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=6079.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715795044/FILMS/105_tkomje.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Arnold Schwarzenegger", "Rachel Ticotin", "Sharon Stone"],
        duration: "1h 53min",
        countries: ["États-Unis", "Mexique"],
        productionCompanies: ["Carolco Pictures", "Carolco International N.V."],
      },
    },
    {
      Movie: {
        title: "Gang de requins",
        ID: "108",
        genre: "Animation, Comédie",
        description:
          "Gang de requins est un film d'animation réalisé par Bibo Bergeron et Vicky Jenson. L'histoire se déroule dans le monde sous-marin de Reef City, où un jeune requin nommé Oscar rêve de devenir riche et célèbre. Lorsque ses mensonges le propulsent au rang de héros, Oscar doit faire face à de dangereux requins et protéger sa communauté.",
        note: 2,
        year: 2004,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=44889.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715795044/FILMS/107_p1vrtn.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Will Smith", "Robert De Niro", "Renée Zellweger"],
        duration: "1h 30min",
        countries: ["États-Unis"],
        productionCompanies: ["DreamWorks Animation"],
      },
    },
    {
      Movie: {
        title: "Indigènes",
        ID: "109",
        genre: "Drame, Guerre",
        description:
          "Indigènes est un film dramatique réalisé par Rachid Bouchareb. L'histoire suit le parcours de quatre soldats nord-africains engagés dans l'armée française pendant la Seconde Guerre mondiale. Malgré leur bravoure et leurs sacrifices, ils font face à la discrimination et au racisme au sein de l'armée.",
        note: 1,
        year: 2006,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=58934.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715795044/FILMS/108_t3oium.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Jamel Debbouze", "Samy Naceri", "Roschdy Zem"],
        duration: "2h 00min",
        countries: ["France", "Algérie", "Belgique", "Maroc", "Tunisie"],
        productionCompanies: [
          "France 2 Cinéma",
          "Studio Canal",
          "Tessalit Productions",
          "Agence Algérienne pour le Rayonnement Culturel (AARC)",
        ],
      },
    },
    {
      Movie: {
        title: "Cannibal Holocaust",
        ID: "110",
        genre: "Horreur",
        description:
          "Cannibal Holocaust est un film d'horreur italien réalisé par Ruggero Deodato. L'histoire suit une équipe de documentaristes qui se rendent en Amazonie pour tourner un film sur les tribus indigènes. Cependant, ils disparaissent mystérieusement, et une équipe de secours est envoyée pour découvrir ce qui leur est arrivé, ne trouvant que les enregistrements terrifiants de leurs derniers jours.",
        note: 1,
        year: 1980,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=52677.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715795045/FILMS/109_vutffy.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 18 ans",
        actors: ["Robert Kerman", "Francesca Ciardi", "Perry Pirkanen"],
        duration: "1h 35min",
        countries: ["Italie"],
        productionCompanies: ["F.D. Cinematografica"],
      },
    },
    {
      Movie: {
        title: "Le Transporteur",
        ID: "111",
        genre: "Action, Thriller",
        description:
          "Le Transporteur est un film d'action réalisé par Louis Leterrier et Corey Yuen. L'histoire suit Frank Martin, un transporteur professionnel spécialisé dans la livraison de colis confidentiels. Mais lorsqu'une de ses missions tourne mal, il se retrouve impliqué dans une affaire dangereuse entre criminels.",
        note: 2,
        year: 2002,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=38825.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715795045/FILMS/110_rf8nnj.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Jason Statham", "Shu Qi", "François Berléand"],
        duration: "1h 32min",
        countries: ["France", "États-Unis"],
        productionCompanies: [
          "TF1 Films Production",
          "EuropaCorp",
          "Current Entertainment",
          "Canal+",
          "Ciné+",
        ],
      },
    },
    {
      Movie: {
        title: "Je suis une légende",
        ID: "112",
        genre: "Science-Fiction, Thriller",
        description:
          "Je suis une légende est un film de science-fiction réalisé par Francis Lawrence. L'histoire se déroule dans un futur post-apocalyptique où un virus a transformé la majeure partie de la population mondiale en créatures monstrueuses. Seul survivant de New York, le scientifique Robert Neville tente de trouver un remède tout en luttant pour sa propre survie.",
        note: 3,
        year: 2007,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=105557.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715795045/FILMS/111_flyps4.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Will Smith", "Alice Braga", "Charlie Tahan"],
        duration: "1h 41min",
        countries: ["États-Unis"],
        productionCompanies: [
          "Warner Bros. Pictures",
          "Village Roadshow Pictures",
          "Weed Road Pictures",
        ],
      },
    },
    {
      Movie: {
        title: "L'homme qui voulait savoir",
        ID: "113",
        genre: "Drame, Mystère",
        description:
          "L'homme qui voulait savoir est un film dramatique réalisé par George Sluizer. L'histoire suit un homme, obsédé par la disparition mystérieuse de sa petite amie, qui décide de mener sa propre enquête pour découvrir la vérité. Son voyage le conduit à travers un monde sombre et inquiétant, où il devra affronter ses propres démons intérieurs.",
        note: 2,
        year: 1988,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=115820.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715795045/FILMS/112_xf6gzx.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Gene Hackman", "Joan Allen", "Anne Archer"],
        duration: "2h 2min",
        countries: ["États-Unis"],
        productionCompanies: [
          "PolyGram Filmed Entertainment",
          "Renaissance Films",
        ],
      },
    },
    {
      Movie: {
        title: "Godzilla",
        ID: "114",
        genre: "Action, Science-fiction, Fantastique",
        description:
          "Godzilla est un film d'action et de science-fiction réalisé par Roland Emmerich. L'histoire suit les aventures d'une équipe de scientifiques et de militaires qui tentent de stopper un monstre géant, Godzilla, qui menace de détruire la ville de New York. Leur lutte pour sauver la ville devient une bataille épique entre l'humanité et une créature de légende.",
        note: 3,
        year: 1998,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=25836.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715795047/FILMS/113_be2ppd.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Matthew Broderick", "Jean Reno", "Maria Pitillo"],
        duration: "2h 19min",
        countries: ["États-Unis"],
        productionCompanies: ["Centropolis Entertainment", "TriStar Pictures"],
      },
    },
    {
      Movie: {
        title: "Reussir ou mourir",
        ID: "115",
        genre: "Drame, Biographie",
        description:
          "Reussir ou mourir est un film dramatique biographique réalisé par Jim Sheridan. L'histoire raconte la vie de 50 Cent, un rappeur célèbre, depuis son enfance difficile dans les rues de New York jusqu'à son ascension vers la célébrité et ses luttes avec le crime organisé.",
        note: 2,
        year: 2005,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=58160.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715795047/FILMS/114_xvy4xs.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        actors: ["50 Cent", "Joy Bryant", "Adewale Akinnuoye-Agbaje"],
        duration: "1h 57min",
        countries: ["États-Unis"],
        productionCompanies: [
          "Paramount Pictures",
          "MTV Films",
          "G-Unit Films",
        ],
      },
    },
    {
      Movie: {
        title: "Stuart Little",
        ID: "116",
        genre: "Animation, Aventure, Comédie",
        description:
          "Stuart Little est un film d'animation réalisé par Rob Minkoff. L'histoire suit les aventures de Stuart Little, une petite souris adoptée par une famille humaine, alors qu'il tente de s'intégrer dans son nouveau foyer tout en cherchant à retrouver ses origines.",
        note: 2,
        year: 1999,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=23135.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715795047/FILMS/115_ta42cg.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Michael J. Fox (voix)", "Geena Davis", "Hugh Laurie"],
        duration: "1h 24min",
        countries: ["États-Unis"],
        productionCompanies: [
          "Columbia Pictures",
          "Red Wagon Entertainment",
          "Global Medien",
        ],
      },
    },
    {
      Movie: {
        title: "Shaolin Soccer",
        ID: "117",
        genre: "Action, Comédie, Sport",
        description:
          "Shaolin Soccer est un film d'action et de comédie réalisé par Stephen Chow. L'histoire suit un ancien moine Shaolin qui cherche à réunir une équipe de football composée de maîtres des arts martiaux afin de participer à un tournoi et de montrer la supériorité du kung-fu.",
        note: 4,
        year: 2001,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=43986.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715795047/FILMS/116_ixomwl.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Stephen Chow", "Vicki Zhao", "Ng Man Tat"],
        duration: "1h 27min",
        countries: ["Hong Kong", "Chine"],
        productionCompanies: ["Columbia Pictures", "Star Overseas"],
      },
    },
    {
      Movie: {
        title: "Case Départ",
        ID: "118",
        genre: "Comédie",
        description:
          "Case Départ est une comédie française réalisée par Lionel Steketee, Fabrice Éboué et Thomas N'Gijol. Le film raconte l'histoire de deux frères, Joël et Régis, qui, après la mort de leur mère, se retrouvent accidentellement transportés dans la période de l'esclavage. Ils doivent alors apprendre les dures réalités de cette époque et trouver un moyen de rentrer chez eux. Le film aborde des thèmes sensibles tout en utilisant l'humour pour souligner les absurdités de la société.",
        note: 2,
        year: 2011,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=136255.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715795047/FILMS/117_inliap.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Thomas N'Gijol", "Fabrice Éboué", "Stéfi Celma"],
        duration: "1h 34min",
        countries: ["France"],
        productionCompanies: [
          "Légende Films",
          "TF1 Films Production",
          "Mars Films",
        ],
      },
    },
    {
      Movie: {
        title: "Jason et les Argonautes",
        ID: "119",
        genre: "Aventure, Fantaisie",
        description:
          "Jason et les Argonautes est un film d'aventure fantastique réalisé par Don Chaffey. L'histoire suit le voyage héroïque de Jason et son équipage à la recherche de la légendaire Toison d'or, affrontant des monstres mythologiques et des dieux tout-puissants.",
        note: 2,
        year: 1963,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=9271.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715795049/FILMS/118_fubjsa.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Todd Armstrong", "Nancy Kovack", "Gary Raymond"],
        duration: "1h 44min",
        countries: ["Royaume-Uni", "États-Unis"],
        productionCompanies: ["Morningside Productions", "Columbia Pictures"],
      },
    },
    {
      Movie: {
        title: "Mulan",
        ID: "120",
        genre: "Animation, Aventure, Famille",
        description:
          "Mulan est un film d'animation produit par les studios Disney. L'histoire suit une jeune fille chinoise courageuse et déterminée, Mulan, qui se déguise en homme pour rejoindre l'armée à la place de son père malade. Avec l'aide de son dragon gardien Mushu et de ses amis, elle se bat pour défendre la Chine contre l'invasion des Huns.",
        note: 2,
        year: 1998,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=18793.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715795048/FILMS/119_vefrhg.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: ["Ming-Na Wen", "Eddie Murphy", "BD Wong"],
        duration: "1h 28min",
        countries: ["États-Unis"],
        productionCompanies: [
          "Walt Disney Pictures",
          "Walt Disney Feature Animation",
        ],
      },
    },
    {
      Movie: {
        title: "Dead Space: Aftermath",
        ID: "121",
        genre: "Animation, Horreur, Science-Fiction",
        description:
          "Dead Space: Aftermath est un film d'animation de science-fiction et d'horreur. L'histoire se déroule dans l'univers du jeu vidéo Dead Space et suit une équipe d'explorateurs envoyée pour enquêter sur une mystérieuse anomalie qui menace la survie de l'humanité.",
        note: 3,
        year: 2011,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=189124.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715795044/FILMS/120_gehccr.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 16 ans",
        actors: ["Christopher Judge", "Ricardo Chavira", "Gwendoline Yeo"],
        duration: "1h 15min",
        countries: ["États-Unis"],
        productionCompanies: ["Electronic Arts", "Film Roman"],
      },
    },
    {
      Movie: {
        title: "Interstellar",
        ID: "122",
        genre: "Science-fiction, Drame",
        description:
          "Interstellar est un film de science-fiction réalisé par Christopher Nolan. Il suit l'histoire d'un groupe d'explorateurs qui utilisent un trou de ver découvert près de Saturne pour voyager à travers les galaxies à la recherche d'un nouvel habitat pour l'humanité. Le film explore des concepts scientifiques complexes ainsi que les thèmes de l'amour, de la survie et de l'humanité.",
        note: 1,
        year: 2014,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=114782.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715879249/FILMS/122_xra8o3.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        actors: [
          "Matthew McConaughey",
          "Anne Hathaway",
          "Jessica Chastain",
          "Michael Caine",
          "Casey Affleck",
          "Matt Damon",
        ],
        duration: "2h 49min",
        countries: ["États-Unis", "Royaume-Uni", "Canada"],
        productionCompanies: [
          "Paramount Pictures",
          "Legendary Pictures",
          "Syncopy",
        ],
      },
    },
    {
      Movie: {
        title: "Barbie Land",
        ID: "123",
        genre: "Romance, Comédie, Famille",
        description:
          "À Barbie Land, vous êtes un être parfait dans un monde parfait. Sauf si vous êtes en crise existentielle, ou si vous êtes Ken.",
        note: 3,
        year: 2023,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=173087.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715879249/FILMS/123_eh69dd.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "1h 55min",
        countries: ["États-Unis"],
        productionCompanies: ["Universal Pictures", "Mattel Films"],
        actors: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
      },
    },
    {
      Movie: {
        title: "Pokémon, le film : Mewtwo contre-attaque",
        ID: "124",
        genre: "Animation, Aventure, Famille",
        description:
          "Pokémon, le film : Mewtwo contre-attaque est un film d'animation japonais réalisé par Kunihiko Yuyama. Le film suit l'histoire de Mewtwo, un Pokémon créé génétiquement, qui cherche à prouver sa supériorité sur les Pokémon naturels et se lance dans une quête de vengeance contre les humains qui l'ont créé.",
        note: 2,
        year: 1998,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=23497.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715968710/FILMS/124_h4uvgl.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "1h 15min",
        countries: ["Japon"],
        productionCompanies: ["OLM, Inc.", "ShoPro", "TV Tokyo"],
      },
    },
    {
      Movie: {
        title: "Twister",
        ID: "125",
        genre: "Action, Aventure, Drame",
        description:
          "Twister est un film d'action et d'aventure réalisé par Jan de Bont. Le film raconte l'histoire d'une équipe de chasseurs de tornades qui se lancent dans une mission périlleuse pour tester un nouveau dispositif de recherche en plein cœur de tornades dévastatrices.",
        note: 3,
        year: 1996,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=15037.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715968710/FILMS/125_rbs9dj.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "1h 53min",
        countries: ["États-Unis"],
        productionCompanies: [
          "Warner Bros.",
          "Universal Pictures",
          "Amblin Entertainment",
        ],
      },
    },
    {
      Movie: {
        title: "Saw",
        ID: "126",
        genre: "Horreur, Thriller",
        description:
          "Saw est un film d'horreur et de thriller réalisé par James Wan. Le film suit l'histoire de deux hommes qui se réveillent enchaînés dans une salle de bains abandonnée, avec un cadavre au milieu de la pièce. Ils découvrent rapidement qu'ils sont les derniers victimes d'un tueur en série connu sous le nom de Jigsaw, qui les force à jouer à un jeu sadique pour survivre.",
        note: 2,
        year: 2004,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=57410.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715968710/FILMS/126_gavhkq.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 16 ans",
        duration: "1h 43min",
        countries: ["États-Unis"],
        productionCompanies: ["Lionsgate", "Twisted Pictures"],
      },
    },
    {
      Movie: {
        title: "Gremlins",
        ID: "127",
        genre: "Comédie, Fantastique, Horreur",
        description:
          "Gremlins est un film de comédie, fantastique et horreur réalisé par Joe Dante. Le film raconte l'histoire de Billy, un jeune homme qui reçoit un étrange animal appelé Mogwai comme cadeau de Noël. Cependant, en ne respectant pas les règles strictes pour s'occuper du Mogwai, il libère une horde de créatures maléfiques et espiègles connues sous le nom de Gremlins.",
        note: 2,
        year: 1984,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=339.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715968710/FILMS/127_u31hnj.jpg",
          },
        ],
        ageRestriction: "Tous publics avec avertissement",
        duration: "1h 46min",
        countries: ["États-Unis"],
        productionCompanies: ["Warner Bros.", "Amblin Entertainment"],
      },
    },
    {
      Movie: {
        title: "Jumper",
        ID: "128",
        genre: "Action, Aventure, Science-fiction",
        description:
          "Jumper est un film de science-fiction, d'action et d'aventure réalisé par Doug Liman. Le film suit l'histoire de David Rice, un jeune homme qui découvre qu'il a la capacité de se téléporter instantanément n'importe où dans le monde. Alors qu'il utilise ses pouvoirs pour vivre une vie de luxe, il se retrouve traqué par une organisation secrète déterminée à éliminer ceux comme lui.",
        note: 3,
        year: 2008,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=114653.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715968710/FILMS/128_b0bmus.jpg",
          },
        ],
        ageRestriction: "Tous publics",
        duration: "1h 28min",
        countries: ["États-Unis", "Canada"],
        productionCompanies: [
          "20th Century Fox",
          "New Regency Productions",
          "Dune Entertainment",
        ],
      },
    },
    {
      Movie: {
        title: "Léon",
        ID: "129",
        genre: "Action, Crime, Drame",
        description:
          "Léon est un film d'action, de crime et de drame réalisé par Luc Besson. Le film suit l'histoire de Léon, un tueur à gages solitaire, qui prend sous son aile une jeune fille nommée Mathilda après que sa famille a été assassinée par des agents corrompus de la DEA. Ensemble, ils forment un lien improbable et Mathilda apprend l'art de l'assassinat pour venger la mort de son frère.",
        note: 4,
        year: 1994,
        top: true,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=9684.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715968711/FILMS/129_dl0geb.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 12 ans",
        duration: "1h 50min",
        countries: ["France"],
        productionCompanies: ["Gaumont", "Les Films du Dauphin"],
      },
    },
    {
      Movie: {
        title: "Eyes Wide Shut",
        ID: "130",
        genre: "Drame, Mystère, Thriller",
        description:
          "Eyes Wide Shut est un film de drame, mystère et thriller réalisé par Stanley Kubrick. Le film suit l'histoire de Bill Harford, un médecin new-yorkais, qui plonge dans une nuit de découvertes sexuelles et de danger après que sa femme, Alice, lui a avoué avoir envisagé de le tromper. Cette révélation l'entraîne dans un voyage troublant à travers un réseau secret et élitiste de débauche.",
        note: 2,
        year: 1999,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=20502.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715968711/FILMS/130_lkkkj8.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 16 ans",
        duration: "2h 39min",
        countries: ["Royaume-Uni", "États-Unis"],
        productionCompanies: ["Warner Bros.", "Pole Star"],
      },
    },
    {
      Movie: {
        title: "[REC]",
        ID: "131",
        genre: "Horreur, Thriller",
        description:
          "[REC] est un film d'horreur et de thriller réalisé par Jaume Balagueró et Paco Plaza. Le film suit une journaliste et son caméraman qui filment l'intervention nocturne d'une équipe de pompiers dans un immeuble d'appartements à Barcelone. Ce qui commence comme un simple reportage tourne rapidement au cauchemar lorsqu'ils découvrent une infection terrifiante qui transforme les résidents en créatures violentes.",
        note: 4,
        year: 2007,
        top: false,
        link: "https://www.allocine.fr/film/fichefilm_gen_cfilm=130296.html",
        images: [
          {
            img: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1715968711/FILMS/131_nmjyll.jpg",
          },
        ],
        ageRestriction: "Interdit aux moins de 16 ans",
        duration: "1h 18min",
        countries: ["Espagne"],
        productionCompanies: ["Filmax"],
      },
    },
  ];

  return listing;
}
