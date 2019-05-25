export enum Hero {
  NONE = 'NONE',
  /* Knight (Castle) */
  Orrin = 'Orrin',
  Valeska = 'Valeska',
  Edric = 'Edric',
  Sylvia = 'Sylvia',
  LordHaart = 'LordHaart',
  Sorsha = 'Sorsha',
  Christian = 'Christian',
  Tyris = 'Tyris',

  /* Cleric (Castle) */
  Rion = 'Rion',
  Adela = 'Adela',
  Cuthbert = 'Cuthbert',
  Adelaide = 'Adelaide',
  Ingham = 'Ingham',
  Sanya = 'Sanya',
  Loynis = 'Loynis',
  Caitlin = 'Caitlin',

  /* Ranger (Rampart) */
  Mephala = 'Mephala',
  Ufretin = 'Ufretin',
  Jenova = 'Jenova',
  Ryland = 'Ryland',
  Thorgrim = 'Thorgrim',
  Ivor = 'Ivor',
  Clancy = 'Clancy',
  Kyrre = 'Kyrre',

  /* Druid (Rampart) */
  Coronius = 'Coronius',
  Uland = 'Uland',
  Elleshar = 'Elleshar',
  Gem = 'Gem',
  Malcom = 'Malcom',
  Melodia = 'Melodia',
  Alagar = 'Alagar',
  Aeris = 'Aeris',

  /* Alchemist (Tower) */
  Piquedram = 'Piquedram',
  Thane = 'Thane',
  Josephine = 'Josephine',
  Neela = 'Neela',
  Torosar = 'Torosar',
  Fafner = 'Fafner',
  Rissa = 'Rissa',
  Iona = 'Iona',

  /* Wizard (Tower) */
  Astral = 'Astral',
  Halon = 'Halon',
  Serena = 'Serena',
  Daremyth = 'Daremyth',
  Theodorus = 'Theodorus',
  Solmyr = 'Solmyr',
  Cyra = 'Cyra',
  Aine = 'Aine',

  /* Demoniac (Inferno) */
  Fiona = 'Fiona',
  Rashka = 'Rashka',
  Marius = 'Marius',
  Ignatius = 'Ignatius',
  Octavia = 'Octavia',
  Calh = 'Calh',
  Pyre = 'Pyre',
  Nymus = 'Nymus',

  /* Heretic (Inferno) */
  Ayden = 'Ayden',
  Xyron = 'Xyron',
  Axsis = 'Axsis',
  Olema = 'Olema',
  Calid = 'Calid',
  Ash = 'Ash',
  Zydar = 'Zydar',
  Xarfax = 'Xarfax',

  /* Death Knight (Necropolis) */
  Straker = 'Straker',
  Vokial = 'Vokial',
  Moandor = 'Moandor',
  Charna = 'Charna',
  Tamika = 'Tamika',
  Isra = 'Isra',
  Clavius = 'Clavius',
  Galthran = 'Galthran',

  /* Necromancer (Necropolis) */
  Septienna = 'Septienna',
  Aislinn = 'Aislinn',
  Sandro = 'Sandro',
  Nimbus = 'Nimbus',
  Thant = 'Thant',
  Xsi = 'Xsi',
  Vidomina = 'Vidomina',
  Nagash = 'Nagash',

  /* Overlord (Dungeon) */
  Lorelei = 'Lorelei',
  Arlach = 'Arlach',
  Dace = 'Dace',
  Ajit = 'Ajit',
  Damacon = 'Damacon',
  Gunnar = 'Gunnar',
  Synca = 'Synca',
  Shakti = 'Shakti',

  /* Warlock (Dungeon) */
  Alamar = 'Alamar',
  Jaegar = 'Jaegar',
  Malekith = 'Malekith',
  Jeddite = 'Jeddite',
  Geon = 'Geon',
  Deemer = 'Deemer',
  Sephinroth = 'Sephinroth',
  Darkstorm = 'Darkstorm',

  /* Barbarian (Stronghold) */
  Yog = 'Yog',
  Gurnisson = 'Gurnisson',
  Jabarkas = 'Jabarkas',
  Shiva = 'Shiva',
  Gretchin = 'Gretchin',
  Krellion = 'Krellion',
  CragHack = 'CragHack',
  Tyraxor = 'Tyraxor',

  /* Battle Mage (Stronghold) */
  Gird = 'Gird',
  Vey = 'Vey',
  Dessa = 'Dessa',
  Terek = 'Terek',
  Zubin = 'Zubin',
  Gundula = 'Gundula',
  Oris = 'Oris',
  Saurug = 'Saurug',

  /* Beastmaster (Fortress) */
  Bron = 'Bron',
  Drakon = 'Drakon',
  Wystan = 'Wystan',
  Tazar = 'Tazar',
  Alkin = 'Alkin',
  Korbac = 'Korbac',
  Gerwulf = 'Gerwulf',
  Broghild = 'Broghild',

  /* Witch (Fortress) */
  Mirlanda = 'Mirlanda',
  Rosic = 'Rosic',
  Voy = 'Voy',
  Verdish = 'Verdish',
  Merist = 'Merist',
  Styg = 'Styg',
  Andra = 'Andra',
  Tiva = 'Tiva',

  /* Planeswalker (Conflux) */
  Pasis = 'Pasis',
  Thunar = 'Thunar',
  Ignissa = 'Ignissa',
  Lacus = 'Lacus',
  Monere = 'Monere',
  Erdamon = 'Erdamon',
  Fiur = 'Fiur',
  Kalt = 'Kalt',

  /* Elementalist (Conflux) */
  Luna = 'Luna',
  Brissa = 'Brissa',
  Ciele = 'Ciele',
  Labetha = 'Labetha',
  Inteus = 'Inteus',
  Aenain = 'Aenain',
  Gelare = 'Gelare',
  Grindan = 'Grindan',

  /* Special  (Campaign) */
  SirMullich = 'SirMullich',
  Adrienne = 'Adrienne',
  Catherine = 'Catherine',
  Dracon = 'Dracon',
  Gelu = 'Gelu',
  Kilgor = 'Kilgor',
  UndeadLordHaart = 'UndeadLordHaart',
  Mutare = 'Mutare',
  Roland = 'Roland',
  MutareDrake = 'MutareDrake',
  Boragus = 'Boragus',
  Xeron = 'Xeron',
}
