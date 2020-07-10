const studentSeed = [
  {
    firstName: 'Pierre',
    lastName: 'Parkes',
    gradeLevel: 5,
    email: 'pierreparkes1@gmail.com',
    password: '123'
  },
  {
    firstName: 'Omar',
    lastName: 'Martin',
    gradeLevel: 5,
    email: 'omarmartin1@gmail.com',
    password: '123'
  },
  {
    firstName: 'Milly',
    lastName: 'Cain',
    gradeLevel: 5,
    email: 'millycain1@gmail.com'
  },
  {
    firstName: 'Lauryn',
    lastName: 'Ridley',
    gradeLevel: 5,
    email: 'laurynridley1@gmail.com'
  },
  {
    firstName: 'Kuba',
    lastName: 'Davey',
    gradeLevel: 5,
    email: 'kubadavey1@gmail.com'
  },
  {
    firstName: 'Holli',
    lastName: 'Snow',
    gradeLevel: 5,
    email: 'hollisnow1@gmail.com'
  },
  {
    firstName: 'Kaidan',
    lastName: 'Patrick',
    gradeLevel: 5,
    email: 'kaidanpatrick1@gmail.com'
  },
  {
    firstName: 'Amelia-Lily',
    lastName: 'Bean',
    gradeLevel: 5,
    email: 'amelia-lilybean1@gmail.com'
  },
  {
    firstName: 'Pearce',
    lastName: 'Fitzgerald',
    gradeLevel: 5,
    email: 'pearcefitzgerald1@gmail.com'
  },
  {
    firstName: 'Kye',
    lastName: 'Brook',
    gradeLevel: 5,
    email: 'kyebrook1@gmail.com'
  },
  {
    firstName: 'Israr',
    lastName: 'Field',
    gradeLevel: 5,
    email: 'israrfield1@gmail.com'
  },
  {
    firstName: 'Safiya',
    lastName: 'Cresswell',
    gradeLevel: 5,
    email: 'safiyacresswell1@gmail.com'
  },
  {
    firstName: 'Roland',
    lastName: 'Casey',
    gradeLevel: 5,
    email: 'rolandcasey1@gmail.com'
  },
  {
    firstName: 'Claude',
    lastName: 'Campos',
    gradeLevel: 5,
    email: 'claudecampos1@gmail.com'
  },
  {
    firstName: 'Shahzaib',
    lastName: 'Malone',
    gradeLevel: 5,
    email: 'shahzaibmalone1@gmail.com'
  },
  {
    firstName: 'Kerry',
    lastName: 'Farley',
    gradeLevel: 5,
    email: 'kerryfarley1@gmail.com'
  },
  {
    firstName: 'Donell',
    lastName: 'Simons',
    gradeLevel: 5,
    email: 'donellsimons1@gmail.com'
  },
  {
    firstName: 'Zakariyah',
    lastName: 'Tomlinson',
    gradeLevel: 5,
    email: 'zakariyahtomlinson1@gmail.com'
  },
  {
    firstName: 'Ubaid',
    lastName: 'Cervantes',
    gradeLevel: 5,
    email: 'ubaidcervantes1@gmail.com'
  },
  {
    firstName: 'Paul',
    lastName: 'Atkinson',
    gradeLevel: 5,
    email: 'paulatkinson1@gmail.com'
  },
  {
    firstName: 'Xander',
    lastName: 'Callahan',
    gradeLevel: 5,
    email: 'xandercallahan1@gmail.com'
  },
  {
    firstName: 'Millicent',
    lastName: 'Mathis',
    gradeLevel: 5,
    email: 'millicentmathis1@gmail.com'
  },
  {
    firstName: 'Aaisha',
    lastName: 'Bruce',
    gradeLevel: 5,
    email: 'aaishabruce1@gmail.com'
  },
  {
    firstName: 'Uzma',
    lastName: 'Drummond',
    gradeLevel: 5,
    email: 'uzmadrummond1@gmail.com'
  },
  {
    firstName: 'Sullivan',
    lastName: 'Ireland',
    gradeLevel: 5,
    email: 'sullivanireland1@gmail.com'
  },
  {
    firstName: 'Hamid',
    lastName: 'Oneal',
    gradeLevel: 5,
    email: 'hamidoneal1@gmail.com'
  },
  {
    firstName: 'Hailie',
    lastName: 'Jones',
    gradeLevel: 5,
    email: 'hailiejones1@gmail.com'
  },
  {
    firstName: 'Saeed',
    lastName: 'Davie',
    gradeLevel: 5,
    email: 'saeeddavie1@gmail.com'
  },
  {
    firstName: 'Caiden',
    lastName: 'Connor',
    gradeLevel: 5,
    email: 'caidenconnor1@gmail.com'
  },
  {
    firstName: 'Bjorn',
    lastName: 'Salt',
    gradeLevel: 5,
    email: 'bjornsalt1@gmail.com'
  }
  // {
  //   firstName: "Katarina",
  //   lastName: "Huynh",
  //   email: "katarinahuynh1@gmail.com"
  // },
  // {
  //   firstName: "Kali",
  //   lastName: "Hyde",
  //   email: "kalihyde1@gmail.com"
  // },
  // {
  //   firstName: "Lennon",
  //   lastName: "Cabrera",
  //   email: "lennoncabrera1@gmail.com"
  // },
  // {
  //   firstName: "Rylan",
  //   lastName: "Reed",
  //   email: "rylanreed1@gmail.com"
  // },
  // {
  //   firstName: "Chester",
  //   lastName: "Watson",
  //   email: "chesterwatson1@gmail.com"
  // },
  // {
  //   firstName: "Cheryl",
  //   lastName: "Gibbons",
  //   email: "cherylgibbons1@gmail.com"
  // },
  // {
  //   firstName: "Tariq",
  //   lastName: "Giles",
  //   email: "tariqgiles1@gmail.com"
  // },
  // {
  //   firstName: "Asha",
  //   lastName: "Cochran",
  //   email: "ashacochran1@gmail.com"
  // },
  // {
  //   firstName: "Tamzin",
  //   lastName: "Keeling",
  //   email: "tamzinkeeling1@gmail.com"
  // },
  // {
  //   firstName: "Tia",
  //   lastName: "Davey",
  //   email: "tiadavey1@gmail.com"
  // },
  // {
  //   firstName: "Elyas",
  //   lastName: "Parry",
  //   email: "elyasparry1@gmail.com"
  // },
  // {
  //   firstName: "Amber-Rose",
  //   lastName: "Solomon",
  //   email: "amber-rosesolomon1@gmail.com"
  // },
  // {
  //   firstName: "Delores",
  //   lastName: "Mayo",
  //   email: "deloresmayo1@gmail.com"
  // },
  // {
  //   firstName: "Opal",
  //   lastName: "Keller",
  //   email: "opalkeller1@gmail.com"
  // },
  // {
  //   firstName: "Dillon",
  //   lastName: "Pacheco",
  //   email: "dillonpacheco1@gmail.com"
  // },
  // {
  //   firstName: "Conah",
  //   lastName: "Robson",
  //   email: "conahrobson1@gmail.com"
  // },
  // {
  //   firstName: "Elliot",
  //   lastName: "Austin",
  //   email: "elliotaustin1@gmail.com"
  // },
  // {
  //   firstName: "Samual",
  //   lastName: "Penn",
  //   email: "samualpenn1@gmail.com"
  // },
  // {
  //   firstName: "Michaela",
  //   lastName: "Diaz",
  //   email: "michaeladiaz1@gmail.com"
  // },
  // {
  //   firstName: "Sukhmani",
  //   lastName: "Turner",
  //   email: "sukhmaniturner1@gmail.com"
  // },
  // {
  //   firstName: "Abubakr",
  //   lastName: "Trejo",
  //   email: "abubakrtrejo1@gmail.com"
  // },
  // {
  //   firstName: "Nabilah",
  //   lastName: "Wells",
  //   email: "nabilahwells1@gmail.com"
  // },
  // {
  //   firstName: "Tasnia",
  //   lastName: "Lord",
  //   email: "tasnialord1@gmail.com"
  // },
  // {
  //   firstName: "Lola-Rose",
  //   lastName: "James",
  //   email: "lola-rosejames1@gmail.com"
  // },
  // {
  //   firstName: "Joss",
  //   lastName: "Wallace",
  //   email: "josswallace1@gmail.com"
  // },
  // {
  //   firstName: "Laibah",
  //   lastName: "Broughton",
  //   email: "laibahbroughton1@gmail.com"
  // },
  // {
  //   firstName: "Polly",
  //   lastName: "Guerra",
  //   email: "pollyguerra1@gmail.com"
  // },
  // {
  //   firstName: "Natasha",
  //   lastName: "Benson",
  //   email: "natashabenson1@gmail.com"
  // },
  // {
  //   firstName: "Nimrah",
  //   lastName: "Griffiths",
  //   email: "nimrahgriffiths1@gmail.com"
  // },
  // {
  //   firstName: "Lulu",
  //   lastName: "Patrick",
  //   email: "lulupatrick1@gmail.com"
  // },
  // {
  //   firstName: "Keelan",
  //   lastName: "Ingram",
  //   email: "keelaningram1@gmail.com"
  // },
  // {
  //   firstName: "Nazia",
  //   lastName: "Weber",
  //   email: "naziaweber1@gmail.com"
  // },
  // {
  //   firstName: "Abul",
  //   lastName: "Massey",
  //   email: "abulmassey1@gmail.com"
  // },
  // {
  //   firstName: "Vijay",
  //   lastName: "Booker",
  //   email: "vijaybooker1@gmail.com"
  // },
  // {
  //   firstName: "Jess",
  //   lastName: "Little",
  //   email: "jesslittle1@gmail.com"
  // },
  // {
  //   firstName: "Gianluca",
  //   lastName: "Blundell",
  //   email: "gianlucablundell1@gmail.com"
  // },
  // {
  //   firstName: "Kaila",
  //   lastName: "Avalos",
  //   email: "kailaavalos1@gmail.com"
  // },
  // {
  //   firstName: "Brett",
  //   lastName: "Powell",
  //   email: "brettpowell1@gmail.com"
  // },
  // {
  //   firstName: "Ellesha",
  //   lastName: "Payne",
  //   email: "elleshapayne1@gmail.com"
  // },
  // {
  //   firstName: "Shanaya",
  //   lastName: "Blackwell",
  //   email: "shanayablackwell1@gmail.com"
  // },
  // {
  //   firstName: "Malaki",
  //   lastName: "Velez",
  //   email: "malakivelez1@gmail.com"
  // },
  // {
  //   firstName: "Masuma",
  //   lastName: "Downs",
  //   email: "masumadowns1@gmail.com"
  // },
  // {
  //   firstName: "Reo",
  //   lastName: "Donaldson",
  //   email: "reodonaldson1@gmail.com"
  // },
  // {
  //   firstName: "Cassandra",
  //   lastName: "Ventura",
  //   email: "cassandraventura1@gmail.com"
  // },
  // {
  //   firstName: "Bruce",
  //   lastName: "Hunt",
  //   email: "brucehunt1@gmail.com"
  // },
  // {
  //   firstName: "Eiliyah",
  //   lastName: "Sherman",
  //   email: "eiliyahsherman1@gmail.com"
  // },
  // {
  //   firstName: "Brayden",
  //   lastName: "Bone",
  //   email: "braydenbone1@gmail.com"
  // },
  // {
  //   firstName: "T-Jay",
  //   lastName: "Golden",
  //   email: "t-jaygolden1@gmail.com"
  // },
  // {
  //   firstName: "Aran",
  //   lastName: "Neale",
  //   email: "aranneale1@gmail.com"
  // },
  // {
  //   firstName: "Hollie",
  //   lastName: "Chandler",
  //   email: "holliechandler1@gmail.com"
  // },
  // {
  //   firstName: "Lillie-Mai",
  //   lastName: "Cruz",
  //   email: "lillie-maicruz1@gmail.com"
  // },
  // {
  //   firstName: "Rome",
  //   lastName: "Perez",
  //   email: "romeperez1@gmail.com"
  // },
  // {
  //   firstName: "Tasmin",
  //   lastName: "Edge",
  //   email: "tasminedge1@gmail.com"
  // },
  // {
  //   firstName: "Sameeha",
  //   lastName: "Huerta",
  //   email: "sameehahuerta1@gmail.com"
  // },
  // {
  //   firstName: "Romy",
  //   lastName: "O'Doherty",
  //   email: "romyo'doherty1@gmail.com"
  // },
  // {
  //   firstName: "Killian",
  //   lastName: "Mathews",
  //   email: "killianmathews1@gmail.com"
  // },
  // {
  //   firstName: "Zakk",
  //   lastName: "Mullen",
  //   email: "zakkmullen1@gmail.com"
  // },
  // {
  //   firstName: "Zayan",
  //   lastName: "Nava",
  //   email: "zayannava1@gmail.com"
  // },
  // {
  //   firstName: "Inigo",
  //   lastName: "Heath",
  //   email: "inigoheath1@gmail.com"
  // },
  // {
  //   firstName: "Kaleb",
  //   lastName: "Villalobos",
  //   email: "kalebvillalobos1@gmail.com"
  // },
  // {
  //   firstName: "Reanne",
  //   lastName: "Read",
  //   email: "reanneread1@gmail.com"
  // },
  // {
  //   firstName: "Brenna",
  //   lastName: "Medina",
  //   email: "brennamedina1@gmail.com"
  // },
  // {
  //   firstName: "Hester",
  //   lastName: "Tait",
  //   email: "hestertait1@gmail.com"
  // },
  // {
  //   firstName: "Chantel",
  //   lastName: "Roberts",
  //   email: "chantelroberts1@gmail.com"
  // },
  // {
  //   firstName: "Rochelle",
  //   lastName: "Chase",
  //   email: "rochellechase1@gmail.com"
  // },
  // {
  //   firstName: "Tj",
  //   lastName: "Krueger",
  //   email: "tjkrueger1@gmail.com"
  // },
  // {
  //   firstName: "Emelie",
  //   lastName: "Lloyd",
  //   email: "emelielloyd1@gmail.com"
  // },
  // {
  //   firstName: "Ellouise",
  //   lastName: "Sharp",
  //   email: "ellouisesharp1@gmail.com"
  // },
  // {
  //   firstName: "George",
  //   lastName: "Compton",
  //   email: "georgecompton1@gmail.com"
  // },
  // {
  //   firstName: "Alanis",
  //   lastName: "Mercer",
  //   email: "alanismercer1@gmail.com"
  // }
]

module.exports = studentSeed
