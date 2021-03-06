// thx http://www.windsofchaos.com/wp-content/uploads/encroachment/book-of-imperial-names.pdf

const randomArrayEntry = (a: Array<string>): string => a[Math.floor(Math.random() * a.length)];
const nickChance = 0.1;
const femChance = 0.5;

const nicks = [
  'Dachs',
  'Bestie',
  'Bulle',
  'Kullerauge',
  'Vierauge',
  'Muttermal',
  'Blondie',
  'Flegel',
  'Rotznase',
  'Schwarzhaar',
  'Drall',
  'Krummzahn',
  'Bierfass',
  'Wanze',
  'Wuschelkopf',
  'Maus',
  'Ratte',
  'Wiesel',
  'Einarm',
  'Einauge',
  'Stupsnase',
  'Rotkopf',
  'Narbe',
  'Sechsfinger',
  'Zahnlos',
  'Silberkopf',
  'Kropfjockel',
  'Mordbrenner',
  'Brackhund',
  'Narr',
  'Dünnbiertrinker',
  'Bolzenfang',
  'Zuberplanscher'
];

const fem = [
  'Abbie',
  'Abighild',
  'Abigunda',
  'Ada',
  'Adelheid',
  'Adelind',
  'Adelle',
  'Adelyn',
  'Agathe',
  'Agnes',
  'Agnetha',
  'Agnethe',
  'Agnetta',
  'Agnetz',
  'Agnise',
  'Aldreda',
  'Aleid',
  'Alette',
  'Alexa',
  'Alfreda',
  'Alfrida',
  'Alice',
  'Alicia',
  'Alke',
  'Allane',
  'Almala',
  'Althea',
  'Alusch',
  'Amalinde',
  'Amalyn',
  'Andrea',
  'Anhilda',
  'Anika',
  'Anja',
  'Anna',
  'Annabella',
  'Anne',
  'Anthea',
  'Anya',
  'Apollonia',
  'Arabella',
  'Astrid',
  'Aver',
  'Aythe',
  'Barbara',
  'Beatke',
  'Beatrix',
  'Bechilda',
  'Bellane',
  'Benedicta',
  'Benusch',
  'Berchte',
  'Berlinda',
  'Berlyn',
  'Bertha',
  'Berthilda',
  'Bertradis',
  'Bertrod',
  'Bess',
  'Beth',
  'Bianka',
  'Birgit',
  'Brigitte',
  'Brita',
  'Britt',
  'Broncea',
  'Brunhilda',
  'Brunhilde',
  'Camilla',
  'Carina',
  'Carla',
  'Carlinda',
  'Carlotta',
  'Carmilla',
  'Casarea',
  'Cecilia',
  'Charlotte',
  'Christine',
  'Cilicia',
  'Cilie',
  'Clare',
  'Claudia',
  'Clora',
  'Clothilda',
  'Connie',
  'Constance',
  'Constanza',
  'Cordelia',
  'Cunneke',
  'Dagmar',
  'Demona',
  'Demut',
  'Desdemona',
  'Dora',
  'Dorothie',
  'Dorthilda',
  'Drachena',
  'Drachilda',
  'Edhilda',
  'Edith',
  'Edyth',
  'Edythe',
  'Eleanor',
  'Elena',
  'Elene',
  'Elfrida',
  'Elinor',
  'Elisabeth',
  'Elise',
  'Elisinda',
  'Elke',
  'Ella',
  'Ellene',
  'Ellinde',
  'Eloise',
  'Elsabeth',
  'Elsbeth',
  'Else',
  'Elsina',
  'Elyn',
  'Elzebeth',
  'Emagunda',
  'Emelia',
  'Emerlinde',
  'Emerlyn',
  'Emilie',
  'Emmalyn',
  'Emmanuelle',
  'Emme',
  'Eneide',
  'Engel',
  'Engeltrud',
  'Ennelein',
  'Erica',
  'Erika',
  'Ermegart',
  'Ermel',
  'Ermina',
  'Erminlind',
  'Ermintrude',
  'Esmaralda',
  'Esmerelda',
  'Esmeralda',
  'Esmerelde',
  'Estelle',
  'Esther',
  'Ethelka',
  'Etheldreda',
  'Ethelind',
  'Ethelreda',
  'Eufemia',
  'Eva',
  'Fay',
  'Femeke',
  'Franziska',
  'Freya',
  'Frieda',
  'Friedhilda',
  'Friedrica',
  'Friedrun',
  'Fronika',
  'Gabby',
  'Gabi',
  'Gabrielle',
  'Galina',
  'Gele',
  'Gena',
  'Genevieve',
  'Genovega',
  'Gerberga',
  'Gerda',
  'Gerdrut',
  'Gerke',
  'Gerlinde',
  'Gertie',
  'Gertrude',
  'Geruscha',
  'Gilda',
  'Gina',
  'Girdrud',
  'Girlin',
  'Gitta',
  'Greta',
  'Gretchen',
  'Gretel',
  'Grite',
  'Grizelda',
  'Grunhilda',
  'Gudradis',
  'Gudrun',
  'Gudryn',
  'Gutel',
  'Hanna',
  'Hedwig',
  'Heidi',
  'Heidrun',
  'Heile',
  'Heilwig',
  'Helena',
  'Helene',
  'Helga',
  'Helusch',
  'Herburg',
  'Herlinde',
  'Herwig',
  'Heske',
  'Hezke',
  'Hildegard',
  'Hildegart',
  'Hildegund',
  'Hille',
  'Hilusch',
  'Honoria',
  'Hunni',
  'Ida',
  'Ilga',
  'Ilsa',
  'Ilse',
  'Inga',
  'Ingrid',
  'Ingrund',
  'Irene',
  'Irina',
  'Irmegard',
  'Irmella',
  'Irmeltrud',
  'Irmine',
  'Irmusch',
  'Isabella',
  'Isadora',
  'Isentrud',
  'Isolde',
  'Janna',
  'Jarla',
  'Jocelin',
  'Johanna',
  'Josie',
  'Juliana',
  'Julianne',
  'Jutte',
  'Karelia',
  'Karina',
  'Karmilla',
  'Karoline',
  'Kasarea',
  'Katharina',
  'Katharine',
  'Katherina',
  'Katherine',
  'Katheryn',
  'Katia',
  'Katrina',
  'Katusch',
  'Keterlind',
  'Keterlyn',
  'Kethe',
  'Kirstan',
  'Kirsten',
  'Kirstin',
  'Kirstyn',
  'Kitty',
  'Klara',
  'Klare',
  'Konusch',
  'Kristena',
  'Kristyn',
  'Kunegunde',
  'Kunne',
  'Lavinia',
  'Leanora',
  'Lena',
  'Leni',
  'Lenne',
  'Lenora',
  'Lenore',
  'Leonore',
  'Leticia',
  'Letty',
  'Libeste',
  'Libusch',
  'Liphilt',
  'Lisabeth',
  'Lise',
  'Lizzie',
  'Lorinda',
  'Lorna',
  'Lucie',
  'Lucinda',
  'Lucretia',
  'Ludmilla',
  'Luise',
  'Lusche',
  'Mabel',
  'Madge',
  'Magdalena',
  'Magdalene',
  'Magdalyn',
  'Maggie',
  'Maghilda',
  'Maglind',
  'Maglyn',
  'Magreta',
  'Magunda',
  'Maida',
  'Maneth',
  'Manith',
  'Margarethe',
  'Margaritha',
  'Marguerite',
  'Margarethe',
  'Margreta',
  'Marianne',
  'Marietta',
  'Marien',
  'Marlene',
  'Marline',
  'Marlyn',
  'Martha',
  'Marte',
  'Martina',
  'Marusch',
  'Mathilda',
  'Mathilde',
  'Maude',
  'May',
  'Mechthild',
  'Meg',
  'Melicent',
  'Merlin',
  'Mina',
  'Miranda',
  'Moll',
  'Mute',
  'Natasha',
  'Natassia',
  'Nathilda',
  'Neleke',
  'Nellie',
  'Nethe',
  'Nora',
  'Nyze',
  'Olga',
  'Ophelia',
  'Osanna',
  'Ostelle',
  'Osterhildis',
  'Ostia',
  'Otilge',
  'Ottagunda',
  'Ottaline',
  'Ottillia',
  'Ottilda',
  'Ottilie',
  'Ottilyn',
  'Pedra',
  'Perdita',
  'Pergale',
  'Pergunda',
  'Petronella',
  'Phie',
  'Philomelia',
  'Regina',
  'Regine',
  'Reikhilda',
  'Renata',
  'Renate',
  'Rosanne',
  'Rosabel',
  'Rosabella',
  'Rosale',
  'Rosalia',
  'Rosalinde',
  'Rosamunde',
  'Rozhilda',
  'Salina',
  'Salmei',
  'Salomea',
  'Saltza',
  'Sanne',
  'Selena',
  'Selene',
  'Sigismunda',
  'Sigmara',
  'Sigmare',
  'Sigmaris',
  'Sigrud',
  'Silma',
  'Solla',
  'Solveig',
  'Sophie',
  'Susanna',
  'Susanne',
  'Susi',
  'Szielle',
  'Szina',
  'Szine',
  'Talima',
  'Theda',
  'Theodora',
  'Therese',
  'Thilde',
  'Thylda',
  'Tilde',
  'Tilea',
  'Ulla',
  'Ulrica',
  'Ulrike',
  'Ursula',
  'Uschi',
  'Ute',
  'Valeria',
  'Verena',
  'Veronica',
  'Wanda',
  'Wertha',
  'Wilfrieda',
  'Wilhelmina',
  'Winifred',
  'Wolfhilde',
  'Zemelda',
  'Zena'
];

const men = [
  'Abelhardt',
  'Abelheim',
  'Adam',
  'Adelbert',
  'Adelhard',
  'Adelmann',
  'Admund',
  'Adolf',
  'Adolphus',
  'Adred',
  'Adric',
  'Agilward',
  'Agis',
  'Aldric',
  'Alard',
  'Alaric',
  'Alberich',
  'Albert',
  'Albrecht',
  'Aldebrandt',
  'Aldfreid',
  'Aldheim',
  'Aldred',
  'Alexander',
  'Alexei',
  'Alexis',
  'Alfried',
  'Alfricht',
  'Aloysis',
  'Altmar',
  'Anderlin',
  'Anders',
  'Andirke',
  'Andred',
  'Andreas',
  'Andric',
  'Andris',
  'Anshelm',
  'Anthony',
  'Aponymous',
  'Arnest',
  'Arnold',
  'Arnulf',
  'Arthur',
  'Asman',
  'Asoborn',
  'Assmus',
  'Athren',
  'Augustus',
  'Austein',
  'Axelbrand',
  'Baldewin',
  'Baldekin',
  'Baldred',
  'Baldric',
  'Balthasar',
  'Baltzer',
  'Barnabas',
  'Barthelm',
  'Bartil',
  'Barthelm',
  'Bartisch',
  'Bartke',
  'Bartolf',
  'Bartomar',
  'Bartschval',
  'Bartusch',
  'Bastian',
  'Bechtold',
  'Bella',
  'Benedict',
  'Bengt',
  'Benisch',
  'Benusch',
  'Berchtoldt',
  'Bernolt',
  'Bernhardt',
  'Berold',
  'Berteram',
  'Bertholdt',
  'Berthuld',
  'Bertolf',
  'Berwic',
  'Blasius',
  'Bogusch',
  'Borchardt',
  'Boris',
  'Brigund',
  'Brocuff',
  'Bruno',
  'Burchardt',
  'Burghardt',
  'Burgmann',
  'Burgold',
  'Burgolf',
  'Burgolt',
  'Burkhardt',
  'Calvin',
  'Carl',
  'Carolus',
  'Carolus',
  'Casimir',
  'Caspar',
  'Cedred',
  'Cheruse',
  'Claude',
  'Claus',
  'Conrad',
  'Constantin',
  'Corvin',
  'Dagmar',
  'Dankmar',
  'Dankred',
  'Dekmar',
  'Detlef',
  'Dider',
  'Diehl',
  'Diebold',
  'Diefried',
  'Dieterich',
  'Dietl',
  'Dietmar',
  'Dietmund',
  'Dietrich',
  'Dippelt',
  'Dirk',
  'Dirske',
  'Ditherich',
  'Ditl',
  'Ditmarus',
  'Ditrich',
  'Ditwin',
  'Dominicus',
  'Dompnig',
  'Donatus',
  'Durnhelm',
  'Everwin',
  'Eberhart',
  'Eberhardtus',
  'Eberlinus',
  'Eckehart',
  'Eckehardt',
  'Eckel',
  'Edgar',
  'Edmund',
  'Edwin',
  'Egidius',
  'Ehrhardt',
  'Ehrl',
  'Ehrmann',
  'Ehrwig',
  'Elbel',
  'Eldred',
  'Elgast',
  'Elger',
  'Elmeric',
  'Emil',
  'Emmerich',
  'Endal',
  'Enderlin',
  'Enewalt',
  'Engelbert',
  'Engelbrecht',
  'Engelgerus',
  'Engelusch',
  'Eodred',
  'Eomund',
  'Erasmus',
  'Erdman',
  'Erdred',
  'Erich',
  'Erkenbrand',
  'Erlemannus',
  'Ermanrich',
  'Ermelaus',
  'Ermenrich',
  'Ernestus',
  'Ernko',
  'Esmer',
  'Eugen',
  'Eustasius',
  'Ewald',
  'Fabian',
  'Fasolt',
  'Faustmann',
  'Faustus',
  'Felix',
  'Felkel',
  'Ferdinand',
  'Fickuld',
  'Fleugweiner',
  'Fosten',
  'Friederik',
  'Friediger',
  'Franz',
  'Fredemann',
  'Frederich',
  'Friedebert',
  'Friederich',
  'Fridelinus',
  'Fridebraht',
  'Fridericus',
  'Friebald',
  'Fritschold',
  'Fritzsche',
  'Gabriel',
  'Gawinus',
  'Gebehardt',
  'Gelfrat',
  'Gelfrid',
  'George',
  'Georgius',
  'Gerber',
  'Gereke',
  'Gerhardt',
  'Gerhart',
  'Gerlach',
  'Gerlacus',
  'Gernandt',
  'Gernar',
  'Gernot',
  'Gerold',
  'Gerunch',
  'Gerung',
  'Gilbrecht',
  'Girlach',
  'Girnot',
  'Giselbertus',
  'Giselher',
  'Giselbrecht',
  'Gislerus',
  'Gismar',
  'Glockrian',
  'Glogrian',
  'Gobel',
  'Godebert',
  'Godefridus',
  'Godeke',
  'Goffhilf',
  'Goran',
  'Gosbert',
  'Goswinus',
  'Gottfriedus',
  'Gotthardus',
  'Gotboldtus',
  'Gotchalcus',
  'Gotschalg',
  'Gotsche',
  'Gottlieb',
  'Gottolf',
  'Gottzsche',
  'Gotwin',
  'Gozwinus',
  'Greger',
  'Gregor',
  'Greimold',
  'Greimolt',
  'Grimmel',
  'Grimwold',
  'Griswold',
  'Groger',
  'Grolmes',
  'Guido',
  'Gumpert',
  'Gumprecht',
  'Gundel',
  'Gunderam',
  'Gundolf',
  'Gundram',
  'Gundred',
  'Gunnar',
  'Gunthar',
  'Gunther',
  'Guntram',
  'Gurge',
  'Gustaf',
  'Gustavus',
  'Gutsche',
  'Gutwin',
  'Hadred',
  'Hadwin',
  'Hagar',
  'Hagen',
  'Hainrich',
  'Haldred',
  'Halman',
  'Halmut',
  'Halpern',
  'Halpert',
  'Hals',
  'Hamlin',
  'Hanco',
  'Hannes',
  'Hanke',
  'Hanmann',
  'Hannos',
  'Hannus',
  'Hantsche',
  'Hanusch',
  'Hartmann',
  'Harbrand',
  'Hardtmann',
  'Hardrat',
  'Hartlib',
  'Hartlip',
  'Hartmundus',
  'Hartnid',
  'Hartrad',
  'Hartungus',
  'Hartusch',
  'Hartwicus',
  'Hartwig',
  'Haug',
  'Heidenrich',
  'Heinmann',
  'Heidric',
  'Heimar',
  'Heinel',
  'Heintze',
  'Heinutsch',
  'Heindel',
  'Heineman',
  'Heinfried',
  'Heinich',
  'Heinke',
  'Heinricus',
  'Heinrich',
  'Heinusch',
  'Heironymous',
  'Helembertus',
  'Hellenboldus',
  'Hellenbrecht',
  'Helmut',
  'Helwig',
  'Hempel',
  'Hennel',
  'Henil',
  'Henke',
  'Henlin',
  'Henneke',
  'Henning',
  'Henricus',
  'Henrich',
  'Henroth',
  'Henschel',
  'Hensel',
  'Hensil',
  'Henslo',
  'Hentschel',
  'Hentschil',
  'Hertwig',
  'Herbil',
  'Herbord',
  'Herbort',
  'Herdan',
  'Herdeinus',
  'Herdegen',
  'Hergard',
  'Hermann',
  'Hermenchin',
  'Herpin',
  'Hertel',
  'Herterich',
  'Hertil',
  'Herwin',
  'Hieronymous',
  'Hildebart',
  'Hildebrandtus',
  'Hildemar',
  'Hildenmund',
  'Hildiger',
  'Hildred',
  'Hildric',
  'Hinric',
  'Holger',
  'Horst',
  'Huge',
  'Hugo',
  'Hultz',
  'Humfried',
  'Hunold',
  'Igor',
  'Ingwald',
  'Iwan',
  'Iwein',
  'Jacob',
  'Jacub',
  'Jakob',
  'Jakusch',
  'Janderke',
  'Janke',
  'Janusch',
  'Jeckel',
  'Jekil',
  'Jekli',
  'Jenchin',
  'Jeronymus',
  'Jeschke',
  'Jesco',
  'Joachim',
  'Jocob',
  'Jocoff',
  'Jocop',
  'Jodocus',
  'Jodokus',
  'Joerg',
  'Johannes',
  'Jokodus',
  'Jokoff',
  'Jonas',
  'Jone',
  'Jordan',
  'Jorgl',
  'Jorge',
  'Jorn',
  'Josef',
  'Jost',
  'Jurgen',
  'Karl',
  'Karolus',
  'Kasmir',
  'Kaspar',
  'Kastar',
  'Kastor',
  'Kirstan',
  'Kirsten',
  'Kitan',
  'Kite',
  'Klaus',
  'Klaude',
  'Kleber',
  'Klemens',
  'Klemet',
  'Klosel',
  'Knud',
  'Knut',
  'Konradin',
  'Konrat',
  'Kraft',
  'Kristof',
  'Krugar',
  'Kunemann',
  'Kuno',
  'Kurdt',
  'Kurlass',
  'Lambertus',
  'Lampertus',
  'Lamprecht',
  'Lanfried',
  'Lanric',
  'Lanwin',
  'Laureyn',
  'Laurencius',
  'Lazarus',
  'Lehenhard',
  'Leonhard',
  'Leonardus',
  'Leopold',
  'Leupold',
  'Leuter',
  'Leuthold',
  'Leutke',
  'Levin',
  'Lewpold',
  'Libincko',
  'Libingus',
  'Libniko',
  'Liebert',
  'Liebink',
  'Liebrecht',
  'Liebwin',
  'Lienhart',
  'Linus',
  'Liphardus',
  'Liutpold',
  'Lodewig',
  'Lorenz',
  'Lothar',
  'Luitpoldus',
  'Lucas',
  'Lucius',
  'Ludevicus',
  'Ludolf',
  'Ludovicus',
  'Ludwig',
  'Lukas',
  'Luppolt',
  'Lupus',
  'Luthold',
  'Lutherius',
  'Lutke',
  'Lutolf',
  'Mandred',
  'Mach',
  'Magnus',
  'Manegold',
  'Manfred',
  'Marcus',
  'Marius',
  'Markus',
  'Markwardt',
  'Markwart',
  'Martin',
  'Marx',
  'Matthias',
  'Maternus',
  'Mathewelin',
  'Matheus',
  'Matzke',
  'Maximillian',
  'Mechtfrid',
  'Meffrid',
  'Meiner',
  'Meingot',
  'Meinhardtus',
  'Meinhart',
  'Meinolf',
  'Mekel',
  'Melched',
  'Melchior',
  'Mengot',
  'Menogoth',
  'Merboth',
  'Merkel',
  'Meroge',
  'Mertein',
  'Mertin',
  'Mertt',
  'Metrious',
  'Michahel',
  'Mikusch',
  'Moritz',
  'Nanker',
  'Nathandar',
  'Neidhart',
  'Neithart',
  'Nenker',
  'Nicklos',
  'Nickel',
  'Nickil',
  'Nicklas',
  'Niclas',
  'Niclawes',
  'Nicodemus',
  'Nicolai',
  'Nicolaus',
  'Nikkel',
  'Nikolaus',
  'Niklos',
  'Nikusch',
  'Nimandus',
  'Nithart',
  'Nitschke',
  'Oldric',
  'Ortwin',
  'Odmar',
  'Odwin',
  'Olaf',
  'Olbrecht',
  'Oldred',
  'Orban',
  'Ortel',
  'Ortlieb',
  'Ortlip',
  'Ortlouf',
  'Ortolf',
  'Ortolphus',
  'Oskar',
  'Osprant',
  'Osric',
  'Ostagoth',
  'Oswald',
  'Oswin',
  'Otfried',
  'Otmar',
  'Otnand',
  'Ottel',
  'Otto',
  'Otwin',
  'Pietermann',
  'Pancracius',
  'Pankratz',
  'Partschfall',
  'Parzival',
  'Paschalis',
  'Paschke',
  'Patrice',
  'Pauelus',
  'Paulo',
  'Pauwel',
  'Pawel',
  'Pawil',
  'Pecolt',
  'Peregrinus',
  'Peschel',
  'Peschke',
  'Pesold',
  'Pessolt',
  'Petir',
  'Petran',
  'Petrusch',
  'Petschel',
  'Petschmann',
  'Philippus',
  'Philipps',
  'Piter',
  'Poppe',
  'Prokop',
  'Prospero',
  'Quintus',
  'Ragen',
  'Ralf',
  'Rambrecht',
  'Ramung',
  'Ramvoldus',
  'Ramwold',
  'Randulf',
  'Randolph',
  'Ranfeld',
  'Raphael',
  'Ratbot',
  'Regimius',
  'Reichel',
  'Reikhardt',
  'Reikert',
  'Reinald',
  'Reiner',
  'Reinfried',
  'Reinhardt',
  'Reinhold',
  'Reinolt',
  'Reintsch',
  'Reinwald',
  'Reiprecht',
  'Reuban',
  'Richart',
  'Richel',
  'Richolf',
  'Richter',
  'Rigo',
  'Rilker',
  'Ripertus',
  'Robb',
  'Robert',
  'Roderic',
  'Roland',
  'Rolf',
  'Ropot',
  'Roprecht',
  'Ruben',
  'Rudeger',
  'Rudeloff',
  'Rudiger',
  'Rudlinus',
  'Rudlo',
  'Rudolf',
  'Rudusch',
  'Rufus',
  'Ruland',
  'Rulant',
  'Rule',
  'Rumpolt',
  'Rupert',
  'Ruppel',
  'Ruprecht',
  'Rutiger',
  'Rutschel',
  'Seidel',
  'Salomon',
  'Samuel',
  'Sander',
  'Schimko',
  'Sebastian',
  'Seel',
  'Segehart',
  'Segemund',
  'Seibke',
  'Seibot',
  'Seidelman',
  'Seiffrid',
  'Semund',
  'Sepp',
  'Setanta',
  'Sieger',
  'Siegfried',
  'Siegmund',
  'Siffridus',
  'Sifrit',
  'Sigismund',
  'Sigfrid',
  'Siggi',
  'Siggurd',
  'Sighard',
  'Sigisberht',
  'Sigmar',
  'Sigric',
  'Siman',
  'Sorgrim',
  'Sothelin',
  'Stafke',
  'Stanislaus',
  'Stehmahr',
  'Steffan',
  'Steffen',
  'Stephan',
  'Stephke',
  'Sweideger',
  'Syman',
  'Symon',
  'Thankmar',
  'Taleute',
  'Tancred',
  'Tankred',
  'Temil',
  'Teutoge',
  'Thaddeus',
  'Thamme',
  'Theoderic',
  'Theodosius',
  'Theodricus',
  'Theophilus',
  'Thiemo',
  'Thietmarus',
  'Thomas',
  'Thomel',
  'Thomke',
  'Thorgad',
  'Thuring',
  'Thyrus',
  'Tilke',
  'Tilmann',
  'Tilusch',
  'Timo',
  'Tobias',
  'Tomas',
  'Treuthwin',
  'Tristan',
  'Tristram',
  'Trubald',
  'Trubert',
  'Truchtlip',
  'Trutwin',
  'Tschepan',
  'Tyle',
  'Tylo',
  'Udos',
  'Ulein',
  'Ulfman',
  'Ulfred',
  'Ulher',
  'Ulli',
  'Ulman',
  'Ulrichus',
  'Ulusch',
  'Unberoge',
  'Urban',
  'Uto',
  'Valentin',
  'Valdred',
  'Valdric',
  'Valgeit',
  'Valmir',
  'Valten',
  'Van',
  'Varl',
  'Veit',
  'Verspasian',
  'Viggo',
  'Viktor',
  'Vilmar',
  'Vincencius',
  'Vitus',
  'Volkmarus',
  'Volans',
  'Volkel',
  'Volker',
  'Volkhard',
  'Volkin',
  'Volkrad',
  'Volkwin',
  'Voltz',
  'Vorster',
  'Vridel',
  'Vridil',
  'Wabirske',
  'Walbrecht',
  'Waldemarr',
  'Waldor',
  'Waldred',
  'Waliwan',
  'Waltherus',
  'Warmund',
  'Weigandt',
  'Weigel',
  'Weiker',
  'Wenzel',
  'Wernherus',
  'Wernike',
  'Wernusch',
  'Wicher',
  'Wichman',
  'Wigant',
  'Wigandus',
  'Wigel',
  'Wigher',
  'Wiglas',
  'Wikert',
  'Wikman',
  'Wiland',
  'Wilbert',
  'Wilfried',
  'Wilhelm',
  'Wilher',
  'Willehalm',
  'Willi',
  'Willusch',
  'Wilreich',
  'Wilricus',
  'Winandus',
  'Winlind',
  'Winrich',
  'Winricus',
  'Wiprecht',
  'Witche',
  'Wittich',
  'Woldred',
  'Wolferam',
  'Wolfel',
  'Wolfgang',
  'Wolfhard',
  'Wolfhart',
  'Wolfila',
  'Wolfker',
  'Wolfram',
  'Wolmar',
  'Wolveram',
  'Wortwin',
  'Wuder',
  'Wulf',
  'Xavier',
  'Ytel',
  'Zacharias',
  'Zeidl',
  'Zifridus',
  'Zobeslaus'
];

const fam = [
  'Adelhard',
  'Adlermann',
  'Adolphus',
  'Agbeiten',
  'Ahlenheimer',
  'Ahresdorfer',
  'Albrecht',
  'Aldermann',
  'Alexander',
  'Algirssen',
  'Allenstag',
  'Alpermann',
  'Althausen',
  'Altdorf',
  'Anderssen',
  'Ansel',
  'Ardlich',
  'Aren',
  'Arsch',
  'Arthur',
  'Aschaffen',
  'Aschen',
  'Atzwiger',
  'Auerswalder',
  'Aufwieg',
  'Auggener',
  'Augustus',
  'Aukrugermann',
  'Aulen',
  'Aussen',
  'Autlermann',
  'Aver',
  'Bahrenfahrer',
  'Baak',
  'Bach',
  'Bad',
  'Baehrn',
  'Baldurich',
  'Bardt',
  'Barfsheimer',
  'Barwedelmann',
  'Baum',
  'Bech',
  'Beck',
  'Beecker',
  'Beelen',
  'Behner',
  'Beil',
  'Berg',
  'Bergen',
  'Bernau',
  'Bernlocher',
  'Besch',
  'Bessen',
  'Betz',
  'Bey',
  'Biber',
  'Bieswang',
  'Bildhof',
  'Birkwiese',
  'Birnbaumer',
  'Bischoffer',
  'Blassmann',
  'Blattmann',
  'Bleich',
  'Blitzen',
  'Blutdorfer',
  'Blutrocher',
  'Bohrn',
  'Boehmann',
  'Boeglin',
  'Bogen',
  'Bohner',
  'Bohsen',
  'Borg',
  'Boselmann',
  'Boven',
  'Branden',
  'Bratsch',
  'Brau',
  'Braun',
  'Bredermann',
  'Breiten',
  'Bremermann',
  'Brennermann',
  'Breuer',
  'Brigund',
  'Bruckert',
  'Busch',
  'Buckermann',
  'Bugel',
  'Bugmann',
  'Burg',
  'Carolus',
  'Carro',
  'Claus',
  'Dachbach',
  'Dahmbach',
  'Dammen',
  'Damstadter',
  'Dassel',
  'Dein',
  'Delb',
  'Delfgrubermann',
  'Delfholter',
  'Denkhmann',
  'Dicker',
  'Diesdorfer',
  'Dieterich',
  'Dietersmann',
  'Dietfurter',
  'Dietmaringen',
  'Dietzgen',
  'Ditmarus',
  'Donatus',
  'Dorchener',
  'Dorfbacher',
  'Dorner',
  'Dottern',
  'Draken',
  'Drau',
  'Dreetzmann',
  'Dreiflussen',
  'Dresschlermann',
  'Droevigger',
  'Drucker',
  'Dunn',
  'Dunkel',
  'Durb',
  'Durrbeiner',
  'Dustermann',
  'Eber',
  'Egidius',
  'Egling',
  'Ehrhard',
  'Eichen',
  'Eiffer',
  'Eigen',
  'Eilhardt',
  'Eimaringen',
  'Einingger',
  'Einsam',
  'Eisen',
  'Elbinger',
  'Eldebrandt',
  'Elster',
  'Elzacher',
  'Emskranker',
  'Endal',
  'Engel',
  'Engle',
  'Ensdorfer',
  'Eppledorfer',
  'Erasmus',
  'Erlemannus',
  'Ernestus',
  'Erzberger',
  'Eschlimann',
  'Eshemann',
  'Esker',
  'Esmeringen',
  'Essel',
  'Essen',
  'Essing',
  'Euckener',
  'Eustasius',
  'Falken',
  'Fallen',
  'Farber',
  'Faust',
  'Fehr',
  'Felder',
  'Ferlangener',
  'Feuer',
  'Fieglermann',
  'Finstermann',
  'Fintelmann',
  'Fischermann',
  'Fleischer',
  'Flensburger',
  'Fleugwiener',
  'Fluss',
  'Fortenhaffer',
  'Franzen',
  'Freder',
  'Freitaler',
  'Fremlichtmann',
  'Fride',
  'Frieden',
  'Friemann',
  'Fritzen',
  'Frohlichmann',
  'Frotermann',
  'Frueh',
  'Fuchs',
  'Furtilder',
  'Furtz',
  'Gaert',
  'Gaffwiger',
  'Garmann',
  'Garndorfer',
  'Garner',
  'Garssener',
  'Garten',
  'Gauss',
  'Gawinus',
  'Gebauer',
  'Geben',
  'Geiss',
  'Gelber',
  'Geldrechter',
  'Gelt',
  'Gemunsen',
  'Georg',
  'Gerbermann',
  'Gerdouen',
  'Gersdorfer',
  'Gerzener',
  'Geshburger',
  'Gimmenhagen',
  'Gipfel',
  'Gisel',
  'Gislerus',
  'Gladischer',
  'Glasermann',
  'Gluckshalt',
  'Godgrafen',
  'Gold',
  'Gormann',
  'Gostahoffer',
  'Gottlieb',
  'Gozwinus',
  'Grafenrich',
  'Grassermann',
  'Grauen',
  'Graveur',
  'Grefter',
  'Grenz',
  'Greven',
  'Grissen',
  'Gross',
  'Gruben',
  'Grunen',
  'Gruydener',
  'Gundersen',
  'Gunther',
  'Gusseringen',
  'Gustaf',
  'Gustavus',
  'Guttmann',
  'Haariginer',
  'Hagen',
  'Hahn',
  'Haigermann',
  'Haintzmann',
  'Halheimer',
  'Hallermann',
  'Hals',
  'Hammermann',
  'Handerich',
  'Handl',
  'Hannus',
  'Hansen',
  'Harden',
  'Hargendorfer',
  'Harker',
  'Harsumner',
  'Hart',
  'Hassel',
  'Hauptmann',
  'Hauptleiter',
  'Hauserner',
  'Hausier',
  'Hazelmann',
  'Heffengener',
  'Heidecker',
  'Heidmann',
  'Heilemann',
  'Heiligdorfer',
  'Heiligener',
  'Heinricus',
  'Heinrich',
  'Heinz',
  'Heisen',
  'Hell',
  'Helembertus',
  'Hellenboldus',
  'Helmgarter',
  'Henricus',
  'Henroth',
  'Herbarter',
  'Herdeinus',
  'Hergiger',
  'Hermsmann',
  'Hertwiger',
  'Herz',
  'Herzhalder',
  'Herzog',
  'Heukerner',
  'Hexensen',
  'Hilde',
  'Hillen',
  'Hinfalliger',
  'Hinzer',
  'Hirsh',
  'Hirtzel',
  'Hoch',
  'Hoef',
  'Hoffstedtter',
  'Hohner',
  'Hollseher',
  'Holst',
  'Holt',
  'Holz',
  'Hornlach',
  'Horstmann',
  'Hovel',
  'Hugel',
  'Hull',
  'Hund',
  'Hunxener',
  'Hupstedt',
  'Huss',
  'Hutten',
  'Immelshelder',
  'Jaeger',
  'Jacob',
  'Jehlfeld',
  'Jeronymus',
  'Jochutzmann',
  'Jodocus',
  'Jodokus',
  'Jokodus',
  'Julbach',
  'Jung',
  'Jutzen',
  'Juwelier',
  'Kahl',
  'Kalb',
  'Kaldacher',
  'Kalten',
  'Kammendunner',
  'Kant',
  'Karolus',
  'Kaunitzer',
  'Kelhammer',
  'Kell',
  'Kemp',
  'Kerrmann',
  'Kess',
  'Kessler',
  'Kiell',
  'Kirchham',
  'Klein',
  'Klemperer',
  'Klepzig',
  'Kless',
  'Knecht',
  'Knefler',
  'Knoedel',
  'Knopfler',
  'Knorrener',
  'Koch',
  'Koeriner',
  'Kohl',
  'Kolm',
  'Konig',
  'Konrad',
  'Kopfgelder',
  'Kotzen',
  'Kraemer',
  'Kraut',
  'Krebs',
  'Kreideklipper',
  'Kreutzhof',
  'Krieg',
  'Kroppen',
  'Kruden',
  'Krugarmann',
  'Krugen',
  'Kupfer',
  'Kuestermann',
  'Kuhlpeper',
  'Kuhn',
  'Kullermann',
  'Kulzmann',
  'Kummeler',
  'Kunstlermann',
  'Kunz',
  'Kursh',
  'Kurst',
  'Kurt',
  'Kurz',
  'Kuselmann',
  'Kustermann',
  'Lachenbad',
  'Lambertus',
  'Lampertus',
  'Lang',
  'Lank',
  'Lastkahn',
  'Laurencius',
  'Lauterberg',
  'Leder',
  'Leben',
  'Lechardt',
  'Lehr',
  'Leich',
  'Leichlin',
  'Leitdorfer',
  'Lengen',
  'Lenkster',
  'Leonardus',
  'Lesser',
  'Libingus',
  'Lichter',
  'Lieb',
  'Liesken',
  'Liesser',
  'Linden',
  'Lindt',
  'Liphardus',
  'Lochen',
  'Lohr',
  'Longingbruck',
  'Lorrensteiner',
  'Luitpoldus',
  'Lubrecht',
  'Luden',
  'Ludevicus',
  'Ludovicus',
  'Ludwig',
  'Luft',
  'Lukas',
  'Lustig',
  'Lutherius',
  'Lutzen',
  'Machholter',
  'Mader',
  'Mahler',
  'Mann',
  'Mantelmann',
  'Marbad',
  'Marburger',
  'Markus',
  'Marsner',
  'Masel',
  'Maternus',
  'Matheus',
  'Matter',
  'Matthias',
  'Maurer',
  'Mehl',
  'Meermann',
  'Mehler',
  'Meier',
  'Meinhardtus',
  'Meissen',
  'Mencken',
  'Menmann',
  'Merret',
  'Mess',
  'Metzger',
  'Meus',
  'Meyer',
  'Midden',
  'Mielau',
  'Mikalsdorfer',
  'Missener',
  'Misthausen',
  'Mittel',
  'Moescher',
  'Mohr',
  'Monheimer',
  'Muden',
  'Muhl',
  'Muller',
  'Munken',
  'Naabecker',
  'Nacht',
  'Naffdorfer',
  'Nagel',
  'Nagenhoffer',
  'Naubhoffer',
  'Naumann',
  'Netzhoch',
  'Neuberger',
  'Neumann',
  'Nieder',
  'Nikolaus',
  'Norden',
  'Nuhren',
  'Nullener',
  'Nulner',
  'Nussbacher',
  'Obel',
  'Ober',
  'Ockholm',
  'Oehlinger',
  'Ohrsten',
  'Olden',
  'Opfer',
  'Oppenheimer',
  'Ortolphus',
  'Ossmann',
  'Ostwald',
  'Ostermarker',
  'Ostlander',
  'Otto',
  'Otzlowe',
  'Owingener',
  'Pancracius',
  'Pappenheimer',
  'Pauelus',
  'Pellen',
  'Peregrinus',
  'Petersen',
  'Pfaffbacher',
  'Pfandleiher',
  'Pfannenschmidt',
  'Pfeiffer',
  'Pfeifraucher',
  'Pferig',
  'Pfieler',
  'Pfistermann',
  'Pfizermann',
  'Pflaume',
  'Pfrommer',
  'Pfungzig',
  'Philippus',
  'Pilsacher',
  'Plauen',
  'Postmann',
  'Prahmhandler',
  'Priestlich',
  'Pritzstocker',
  'Punzenmann',
  'Puttkammer',
  'Quintus',
  'Raabmann',
  'Raber',
  'Radermann',
  'Radische',
  'Ralfmann',
  'Ramsauer',
  'Ramvoldus',
  'Ranaldt',
  'Rech',
  'Rechtshandler',
  'Regakhoffer',
  'Regimius',
  'Reichert',
  'Reifsneider',
  'Reik',
  'Reiter',
  'Remermann',
  'Renmann',
  'Reuter',
  'Rheden',
  'Richter',
  'Richthofen',
  'Riesen',
  'Ripertus',
  'Ripmann',
  'Ristedtler',
  'Roban',
  'Rodzinner',
  'Roft',
  'Rohr',
  'Roscher',
  'Rothbart',
  'Rott',
  'Rudelmann',
  'Rugen',
  'Ruggbroder',
  'Ruh',
  'Russ',
  'Siegel',
  'Sabritz',
  'Saltz',
  'Sandler',
  'Sarneringen',
  'Saubermann',
  'Schaeffer',
  'Scharfner',
  'Scharm',
  'Schatten',
  'Schatz',
  'Schaumer',
  'Scheinfelder',
  'Schenk',
  'Scher',
  'Schiff',
  'Schilder',
  'Schiller',
  'Schippelmann',
  'Schlafebilder',
  'Schleiermacher',
  'Schlitzer',
  'Schlosser',
  'Schlueter',
  'Schmidt',
  'Schneider',
  'Schon',
  'Schoppen',
  'Schotten',
  'Schrader',
  'Schram',
  'Schreiber',
  'Schreiner',
  'Schroeder',
  'Schubert',
  'Schuhmann',
  'Schuler',
  'Schultz',
  'Schumacher',
  'Schumann',
  'Schuster',
  'Schutzmann',
  'Schwab',
  'Schwartz',
  'Sehlag',
  'Seiger',
  'Seimger',
  'Selz',
  'Semmel',
  'Sendener',
  'Siegfried',
  'Siegenhausen',
  'Siffridus',
  'Sigismundus',
  'Sigmar',
  'Silber',
  'Sokhmann',
  'Sollander',
  'Sorghoffer',
  'Spaltmann',
  'Sprinthoffer',
  'Stahlmann',
  'Stammler',
  'Stark',
  'Staudinger',
  'Steiger',
  'Steinbech',
  'Steuben',
  'Stimmingen',
  'Stirlander',
  'Stock',
  'Stoemm',
  'Stolzer',
  'Streicheln',
  'Streissener',
  'Strohmann',
  'Studebaker',
  'Sudener',
  'Suder',
  'Surhardt',
  'Sussermann',
  'Sydow',
  'Szeck',
  'Thomsen',
  'Tabbecker',
  'Talabec',
  'Talechtmann',
  'Taleutener',
  'Tannfelder',
  'Tarshoffer',
  'Tauber',
  'Tauermann',
  'Tempel',
  'Tenneckermann',
  'Teub',
  'Teufelfeuer',
  'Teutogen',
  'Thaddeus',
  'Theodosius',
  'Theodricus',
  'Theophilus',
  'Thietmarus',
  'Thuringmann',
  'Thyrus',
  'Tiermann',
  'Tillermann',
  'Tinz',
  'Todbringer',
  'Tolzen',
  'Topfer',
  'Torpiner',
  'Traschelmann',
  'Trautenau',
  'Tubbmann',
  'Turmgever',
  'Ubersreiker',
  'Udermann',
  'Ueblingen',
  'Uhl',
  'Ulfred',
  'Ulli',
  'Ulrichus',
  'Ulric',
  'Unberogen',
  'Unruh',
  'Unterbaumer',
  'Untergarder',
  'Ursash',
  'Vaksmann',
  'Vanden',
  'Veit',
  'Verborgen',
  'Viernau',
  'Vincencius',
  'Vodfer',
  'Vogel',
  'Vogt',
  'Volgener',
  'Volmann',
  'Volsbacher',
  'Vonreuter',
  'Wahnn',
  'Wagner',
  'Walden',
  'Walfen',
  'Waltherus',
  'Wanner',
  'Warrenburger',
  'Weber',
  'Wechs',
  'Wegener',
  'Weidemann',
  'Weiller',
  'Weimerer',
  'Weiss',
  'Welleborn',
  'Wendorfer',
  'Weningenner',
  'Werder',
  'Wernher',
  'Wester',
  'Westerlander',
  'Widmann',
  'Widmer',
  'Wigandus',
  'Wilhelm',
  'Willen',
  'Wilricus',
  'Winandus',
  'Winkler',
  'Winrich us',
  'Winsen',
  'Wirtz',
  'Wissen',
  'Wittgen',
  'Woeller',
  'Wolf',
  'Worderner',
  'Worlitzer',
  'Wuppertal',
  'Wurfeller',
  'Wurst',
  'Wurter',
  'Wurzener',
  'Wusterburger',
  'Zangermann',
  'Zauberlicher',
  'Zecher',
  'Zeder',
  'Zeisholzer',
  'Zell',
  'Zimmermann',
  'Zumwalder',
  'Zuriner',
  'Zurzen',
  'Zweisteiner'
];

export default () => {
  const name = Math.random() < femChance ? fem : men;
  const nick = Math.random() < nickChance;
  return `${randomArrayEntry(name)}${nick ? ` '${randomArrayEntry(nicks)}' ` : ' '}${randomArrayEntry(fam)}`;
};
