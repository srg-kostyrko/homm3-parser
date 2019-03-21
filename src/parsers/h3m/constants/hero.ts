export enum Hero {
  NONE,
  /* Knight (Castle) */
  Orrin,
  Valeska,
  Edric,
  Sylvia,
  LordHaart,
  Sorsha,
  Christian,
  Tyris,

  /* Cleric (Castle) */
  Rion,
  Adela,
  Cuthbert,
  Adelaide,
  Ingham,
  Sanya,
  Loynis,
  Caitlin,

  /* Ranger (Rampart) */
  Mephala,
  Ufretin,
  Jenova,
  Ryland,
  Thorgrim,
  Ivor,
  Clancy,
  Kyrre,

  /* Druid (Rampart) */
  Coronius,
  Uland,
  Elleshar,
  Gem,
  Malcom,
  Melodia,
  Alagar,
  Aeris,

  /* Alchemist (Tower) */
  Piquedram,
  Thane,
  Josephine,
  Neela,
  Torosar,
  Fafner,
  Rissa,
  Iona,

  /* Wizard (Tower) */
  Astral,
  Halon,
  Serena,
  Daremyth,
  Theodorus,
  Solmyr,
  Cyra,
  Aine,

  /* Demoniac (Inferno) */
  Fiona,
  Rashka,
  Marius,
  Ignatius,
  Octavia,
  Calh,
  Pyre,
  Nymus,

  /* Heretic (Inferno) */
  Ayden,
  Xyron,
  Axsis,
  Olema,
  Calid,
  Ash,
  Zydar,
  Xarfax,

  /* Death Knight (Necropolis) */
  Straker,
  Vokial,
  Moandor,
  Charna,
  Tamika,
  Isra,
  Clavius,
  Galthran,

  /* Necromancer (Necropolis) */
  Septienna,
  Aislinn,
  Sandro,
  Nimbus,
  Thant,
  Xsi,
  Vidomina,
  Nagash,

  /* Overlord (Dungeon) */
  Lorelei,
  Arlach,
  Dace,
  Ajit,
  Damacon,
  Gunnar,
  Synca,
  Shakti,

  /* Warlock (Dungeon) */
  Alamar,
  Jaegar,
  Malekith,
  Jeddite,
  Geon,
  Deemer,
  Sephinroth,
  Darkstorm,

  /* Barbarian (Stronghold) */
  Yog,
  Gurnisson,
  Jabarkas,
  Shiva,
  Gretchin,
  Krellion,
  CragHack,
  Tyraxor,

  /* Battle Mage (Stronghold) */
  Gird,
  Vey,
  Dessa,
  Terek,
  Zubin,
  Gundula,
  Oris,
  Saurug,

  /* Beastmaster (Fortress) */
  Bron,
  Drakon,
  Wystan,
  Tazar,
  Alkin,
  Korbac,
  Gerwulf,
  Broghild,

  /* Witch (Fortress) */
  Mirlanda,
  Rosic,
  Voy,
  Verdish,
  Merist,
  Styg,
  Andra,
  Tiva,

  /* Planeswalker (Conflux) */
  Pasis,
  Thunar,
  Ignissa,
  Lacus,
  Monere,
  Erdamon,
  Fiur,
  Kalt,

  /* Elementalist (Conflux) */
  Luna,
  Brissa,
  Ciele,
  Labetha,
  Inteus,
  Aenain,
  Gelare,
  Grindan,

  /* Special  (Campaign) */
  SirMullich,
  Adrienne,
  Catherine,
  Dracon,
  Gelu,
  Kilgor,
  UndeadLordHaart,
  Mutare,
  Roland,
  MutareDrake,
  Boragus,
  Xeron
}

export const heroEnum = {
  /* Knight (Castle) */
  [Hero.Orrin]: 0x00,
  [Hero.Valeska]: 0x01,
  [Hero.Edric]: 0x02,
  [Hero.Sylvia]: 0x03,
  [Hero.LordHaart]: 0x04,
  [Hero.Sorsha]: 0x05,
  [Hero.Christian]: 0x06,
  [Hero.Tyris]: 0x07,

  /* cleric (castle) */
  [Hero.Rion]: 0x08,
  [Hero.Adela]: 0x09,
  [Hero.Cuthbert]: 0x0a,
  [Hero.Adelaide]: 0x0b,
  [Hero.Ingham]: 0x0c,
  [Hero.Sanya]: 0x0d,
  [Hero.Loynis]: 0x0e,
  [Hero.Caitlin]: 0x0f,

  /* ranger (rampart) */
  [Hero.Mephala]: 0x10,
  [Hero.Ufretin]: 0x11,
  [Hero.Jenova]: 0x12,
  [Hero.Ryland]: 0x13,
  [Hero.Thorgrim]: 0x14,
  [Hero.Ivor]: 0x15,
  [Hero.Clancy]: 0x16,
  [Hero.Kyrre]: 0x17,

  /* druid (rampart) */
  [Hero.Coronius]: 0x18,
  [Hero.Uland]: 0x19,
  [Hero.Elleshar]: 0x1a,
  [Hero.Gem]: 0x1b,
  [Hero.Malcom]: 0x1c,
  [Hero.Melodia]: 0x1d,
  [Hero.Alagar]: 0x1e,
  [Hero.Aeris]: 0x1f,

  /* alchemist (tower) */
  [Hero.Piquedram]: 0x20,
  [Hero.Thane]: 0x21,
  [Hero.Josephine]: 0x22,
  [Hero.Neela]: 0x23,
  [Hero.Torosar]: 0x24,
  [Hero.Fafner]: 0x25,
  [Hero.Rissa]: 0x26,
  [Hero.Iona]: 0x27,

  /* wizard (tower) */
  [Hero.Astral]: 0x28,
  [Hero.Halon]: 0x29,
  [Hero.Serena]: 0x2a,
  [Hero.Daremyth]: 0x2b,
  [Hero.Theodorus]: 0x2c,
  [Hero.Solmyr]: 0x2d,
  [Hero.Cyra]: 0x2e,
  [Hero.Aine]: 0x2f,

  /* demoniac (inferno) */
  [Hero.Fiona]: 0x30,
  [Hero.Rashka]: 0x31,
  [Hero.Marius]: 0x32,
  [Hero.Ignatius]: 0x33,
  [Hero.Octavia]: 0x34,
  [Hero.Calh]: 0x35,
  [Hero.Pyre]: 0x36,
  [Hero.Nymus]: 0x37,

  /* heretic (inferno) */
  [Hero.Ayden]: 0x38,
  [Hero.Xyron]: 0x39,
  [Hero.Axsis]: 0x3a,
  [Hero.Olema]: 0x3b,
  [Hero.Calid]: 0x3c,
  [Hero.Ash]: 0x3d,
  [Hero.Zydar]: 0x3e,
  [Hero.Xarfax]: 0x3f,

  /* death knight (necropolis) */
  [Hero.Straker]: 0x40,
  [Hero.Vokial]: 0x41,
  [Hero.Moandor]: 0x42,
  [Hero.Charna]: 0x43,
  [Hero.Tamika]: 0x44,
  [Hero.Isra]: 0x45,
  [Hero.Clavius]: 0x46,
  [Hero.Galthran]: 0x47,

  /* necromancer (necropolis) */
  [Hero.Septienna]: 0x48,
  [Hero.Aislinn]: 0x49,
  [Hero.Sandro]: 0x4a,
  [Hero.Nimbus]: 0x4b,
  [Hero.Thant]: 0x4c,
  [Hero.Xsi]: 0x4d,
  [Hero.Vidomina]: 0x4e,
  [Hero.Nagash]: 0x4f,

  /* overlord (dungeon) */
  [Hero.Lorelei]: 0x50,
  [Hero.Arlach]: 0x51,
  [Hero.Dace]: 0x52,
  [Hero.Ajit]: 0x53,
  [Hero.Damacon]: 0x54,
  [Hero.Gunnar]: 0x55,
  [Hero.Synca]: 0x56,
  [Hero.Shakti]: 0x57,

  /* warlock (dungeon) */
  [Hero.Alamar]: 0x58,
  [Hero.Jaegar]: 0x59,
  [Hero.Malekith]: 0x5a,
  [Hero.Jeddite]: 0x5b,
  [Hero.Geon]: 0x5c,
  [Hero.Deemer]: 0x5d,
  [Hero.Sephinroth]: 0x5e,
  [Hero.Darkstorm]: 0x5f,

  /* barbarian (stronghold) */
  [Hero.Yog]: 0x60,
  [Hero.Gurnisson]: 0x61,
  [Hero.Jabarkas]: 0x62,
  [Hero.Shiva]: 0x63,
  [Hero.Gretchin]: 0x64,
  [Hero.Krellion]: 0x65,
  [Hero.CragHack]: 0x66,
  [Hero.Tyraxor]: 0x67,

  /* battle mage (stronghold) */
  [Hero.Gird]: 0x68,
  [Hero.Vey]: 0x69,
  [Hero.Dessa]: 0x6a,
  [Hero.Terek]: 0x6b,
  [Hero.Zubin]: 0x6c,
  [Hero.Gundula]: 0x6d,
  [Hero.Oris]: 0x6e,
  [Hero.Saurug]: 0x6f,

  /* beastmaster (fortress) */
  [Hero.Bron]: 0x70,
  [Hero.Drakon]: 0x71,
  [Hero.Wystan]: 0x72,
  [Hero.Tazar]: 0x73,
  [Hero.Alkin]: 0x74,
  [Hero.Korbac]: 0x75,
  [Hero.Gerwulf]: 0x76,
  [Hero.Broghild]: 0x77,

  /* witch (fortress) */
  [Hero.Mirlanda]: 0x78,
  [Hero.Rosic]: 0x79,
  [Hero.Voy]: 0x7a,
  [Hero.Verdish]: 0x7b,
  [Hero.Merist]: 0x7c,
  [Hero.Styg]: 0x7d,
  [Hero.Andra]: 0x7e,
  [Hero.Tiva]: 0x7f,

  /* planeswalker (conflux) */
  [Hero.Pasis]: 0x80,
  [Hero.Thunar]: 0x81,
  [Hero.Ignissa]: 0x82,
  [Hero.Lacus]: 0x83,
  [Hero.Monere]: 0x84,
  [Hero.Erdamon]: 0x85,
  [Hero.Fiur]: 0x86,
  [Hero.Kalt]: 0x87,

  /* elementalist (conflux) */
  [Hero.Luna]: 0x88,
  [Hero.Brissa]: 0x89,
  [Hero.Ciele]: 0x8a,
  [Hero.Labetha]: 0x8b,
  [Hero.Inteus]: 0x8c,
  [Hero.Aenain]: 0x8d,
  [Hero.Gelare]: 0x8e,
  [Hero.Grindan]: 0x8f,

  /* special  (campaign) */
  [Hero.SirMullich]: 0x90,
  [Hero.Adrienne]: 0x91,
  [Hero.Catherine]: 0x92,
  [Hero.Dracon]: 0x93,
  [Hero.Gelu]: 0x94,
  [Hero.Kilgor]: 0x95,
  [Hero.UndeadLordHaart]: 0x96,
  [Hero.Mutare]: 0x97,
  [Hero.Roland]: 0x98,
  [Hero.MutareDrake]: 0x99,
  [Hero.Boragus]: 0x9a,
  [Hero.Xeron]: 0x9b,
  [Hero.NONE]: 0xff
}

export enum HeroClass {
  Knight,
  Cleric,
  Ranger,
  Druid,
  Alchemist,
  Wizard,
  Demoniac,
  Heretic,
  DeathKnignt,
  Necromancer,
  Overlord,
  Warlock,
  Barbarian,
  BattleMage,
  Beastmaster,
  Witch,
  Planeswalker,
  Elementalist
}

export const heroClassEnum = {
  [HeroClass.Knight]: 0x00,
  [HeroClass.Cleric]: 0x01,
  [HeroClass.Ranger]: 0x02,
  [HeroClass.Druid]: 0x03,
  [HeroClass.Alchemist]: 0x04,
  [HeroClass.Wizard]: 0x05,
  [HeroClass.Demoniac]: 0x06,
  [HeroClass.Heretic]: 0x07,
  [HeroClass.DeathKnignt]: 0x08,
  [HeroClass.Necromancer]: 0x09,
  [HeroClass.Overlord]: 0x0a,
  [HeroClass.Warlock]: 0x0b,
  [HeroClass.Barbarian]: 0x0c,
  [HeroClass.BattleMage]: 0x0d,
  [HeroClass.Beastmaster]: 0x0e,
  [HeroClass.Witch]: 0x0f,
  [HeroClass.Planeswalker]: 0x10,
  [HeroClass.Elementalist]: 0x11
}
