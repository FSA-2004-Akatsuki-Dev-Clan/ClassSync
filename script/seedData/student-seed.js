const studentSeed = [
  {
    firstName: 'Pierre',
    lastName: 'Parkes',
    gradeLevel: 5,
    email: 'pierreparkes1@gmail.com',
    password: '123',
    faceCountAvg: 88,
    faceAttemptAvg: 125,
    faceScoreAvg: 70,
    wordsSpokenAvg: 380,
    mouseClickAvg: 44,
    keyStrokeAvg: 342,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/zHEge6zVdzguHTYltExEphScb8ektF84EJmYzX4ZmV0/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwNzUwMzEuanBn.jpg'
  },
  {
    firstName: 'Omar',
    lastName: 'Martin',
    gradeLevel: 5,
    email: 'omarmartin1@gmail.com',
    password: '123',
    faceCountAvg: 90,
    faceAttemptAvg: 125,
    faceScoreAvg: 85,
    wordsSpokenAvg: 230,
    mouseClickAvg: 78,
    keyStrokeAvg: 210,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/Yex-2TnCQrnS7x6GYQ8ThoWjaQjCHyPAfPYEdH07zDQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA2ODMxOTAuanBn.jpg'
  },
  {
    firstName: 'Milly',
    lastName: 'Cain',
    gradeLevel: 5,
    email: 'millycain1@gmail.com',
    password: '123',
    faceCountAvg: 85,
    faceAttemptAvg: 122,
    faceScoreAvg: 70,
    wordsSpokenAvg: 102,
    mouseClickAvg: 50,
    keyStrokeAvg: 142,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/5Awen8vCW9DjWhahE0mQj7J-e8PG_uHm-V3-hHsI6Wk/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwODQ3ODEuanBn.jpg'
  },
  {
    firstName: 'Lauryn',
    lastName: 'Ridley',
    gradeLevel: 5,
    email: 'laurynridley1@gmail.com',
    password: '123',
    faceCountAvg: 79,
    faceAttemptAvg: 120,
    faceScoreAvg: 66,
    wordsSpokenAvg: 160,
    mouseClickAvg: 23,
    keyStrokeAvg: 321,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/AvicXkwKuxYzya4I-qSiold7eSpahnuo_X6EynB_jHk/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4MzEzODIuanBn.jpg'
  },
  {
    firstName: 'Kuba',
    lastName: 'Davey',
    gradeLevel: 5,
    email: 'kubadavey1@gmail.com',
    password: '123',
    faceCountAvg: 75,
    faceAttemptAvg: 120,
    faceScoreAvg: 63,
    wordsSpokenAvg: 170,
    mouseClickAvg: 54,
    keyStrokeAvg: 222,
    numberOfSessions: 10,
    imageUrl:'https://images.generated.photos/4bE0yxpLotCkeOMzoE7uJ7G4ZFpq4kk1sultSqYfiUA/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxOTI4NzcuanBn.jpg'
  },
  {
    firstName: 'Holli',
    lastName: 'Snow',
    gradeLevel: 5,
    email: 'hollisnow1@gmail.com',
    password: '123',
    faceCountAvg: 70,
    faceAttemptAvg: 125,
    faceScoreAvg: 65,
    wordsSpokenAvg: 130,
    mouseClickAvg: 65,
    keyStrokeAvg: 134,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/jLcdthlyDzdL-C9Pb-RHQXdzfiPXatuiH1GZtu3cwrU/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0MTQxNTEuanBn.jpg'
  },
  {
    firstName: 'Kaidan',
    lastName: 'Patrick',
    gradeLevel: 5,
    email: 'kaidanpatrick1@gmail.com',
    password: '123',
    faceCountAvg: 85,
    faceAttemptAvg: 125,
    faceScoreAvg: 90,
    wordsSpokenAvg: 302,
    mouseClickAvg: 89,
    keyStrokeAvg: 240,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/NjbOO-wquPtkDyidf06d4dsKSRV1mGU7MU1P1RokQRg/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0MDYxMjkuanBn.jpg'
  },
  {
    firstName: 'Amelia-Lily',
    lastName: 'Bean',
    gradeLevel: 5,
    email: 'amelia-lilybean1@gmail.com',
    password: '123',
    faceCountAvg: 73,
    faceAttemptAvg: 125,
    faceScoreAvg: 92,
    wordsSpokenAvg: 197,
    mouseClickAvg: 67,
    keyStrokeAvg: 340,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/nPGXbZo3GJsYcteh4by__Mshk0d5wx61xZM-8CKNPJw/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4MTQ1MTUuanBn.jpg'
  },
  {
    firstName: 'Pearce',
    lastName: 'Fitzgerald',
    gradeLevel: 5,
    email: 'pearcefitzgerald1@gmail.com',
    password: '123',
    faceCountAvg: 85,
    faceAttemptAvg: 125,
    faceScoreAvg: 72,
    wordsSpokenAvg: 176,
    mouseClickAvg: 90,
    keyStrokeAvg: 189,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/1PubQZ60EnoyB8fHNeFtC5PacgYhrzB-euanu1U2cQ0/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzNDk0NDYuanBn.jpg'
  },
  {
    firstName: 'Kye',
    lastName: 'Brook',
    gradeLevel: 5,
    email: 'kyebrook1@gmail.com',
    password: '123',
    faceCountAvg: 84,
    faceAttemptAvg: 125,
    faceScoreAvg: 92,
    wordsSpokenAvg: 324,
    mouseClickAvg: 91,
    keyStrokeAvg: 280,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/Qptf5U02E0CqoL4RXYnHKZZw_yzhwH9Hndda6A5kubY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyNDkyMjMuanBn.jpg'
  },
  {
    firstName: 'Israr',
    lastName: 'Field',
    gradeLevel: 5,
    email: 'israrfield1@gmail.com',
    password: '123',
    faceCountAvg: 83,
    faceAttemptAvg: 125,
    faceScoreAvg: 91,
    wordsSpokenAvg: 289,
    mouseClickAvg: 93,
    keyStrokeAvg: 264,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/RDpR3jEBcbZKuFYkJJ16yG_X83Sh8PaFcBv9nmsHsm8/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1ODAwNDIuanBn.jpg'
  },
  {
    firstName: 'Safiya',
    lastName: 'Cresswell',
    gradeLevel: 5,
    email: 'safiyacresswell1@gmail.com',
    password: '123',
    faceCountAvg: 74,
    faceAttemptAvg: 125,
    faceScoreAvg: 81,
    wordsSpokenAvg: 267,
    mouseClickAvg: 91,
    keyStrokeAvg: 259,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/h5WDwJtRkl_7rCoWkS9sCZ35tuVXN6lUIHQUJiE5SM8/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3MTk5OTguanBn.jpg'
  },
  {
    firstName: 'Roland',
    lastName: 'Casey',
    gradeLevel: 5,
    email: 'rolandcasey1@gmail.com',
    password: '123',
    faceCountAvg: 93,
    faceAttemptAvg: 125,
    faceScoreAvg: 91,
    wordsSpokenAvg: 301,
    mouseClickAvg: 85,
    keyStrokeAvg: 307,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/z7tasFFa4V19hJ60PGwHqHz_ZI4mqZpq6Xljjuuxix8/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA2NzYwMTAuanBn.jpg'
  },
  {
    firstName: 'Claude',
    lastName: 'Campos',
    gradeLevel: 5,
    email: 'claudecampos1@gmail.com',
    password: '123',
    faceCountAvg: 74,
    faceAttemptAvg: 125,
    faceScoreAvg: 78,
    wordsSpokenAvg: 180,
    mouseClickAvg: 65,
    keyStrokeAvg: 192,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/Z4qVGAjXcFKc1wlnlI9I0FqzmbU0YMlwK42FcmcsEyo/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0NzE2MzkuanBn.jpg'
  },
  {
    firstName: 'Shahzaib',
    lastName: 'Malone',
    gradeLevel: 5,
    email: 'shahzaibmalone1@gmail.com',
    password: '123',
    faceCountAvg: 50,
    faceAttemptAvg: 116,
    faceScoreAvg: 43,
    wordsSpokenAvg: 301,
    mouseClickAvg: 90,
    keyStrokeAvg: 337,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/CeobGXqzeYKnn3h7o7MvwGdJh7iX0jm08FpSxJ4YrI4/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1NjU1NzcuanBn.jpg'
  },
  {
    firstName: 'Kerry',
    lastName: 'Farley',
    gradeLevel: 5,
    email: 'kerryfarley1@gmail.com',
    password: '123',
    faceCountAvg: 91,
    faceAttemptAvg: 125,
    faceScoreAvg: 87,
    wordsSpokenAvg: 179,
    mouseClickAvg: 83,
    keyStrokeAvg: 270,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/2BJviK4S_Ar6M1FiUC31zZENbX3D1qEiiYCkbLLZ6b4/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwNTUyMzYuanBn.jpg'
  },
  {
    firstName: 'Donell',
    lastName: 'Simons',
    gradeLevel: 5,
    email: 'donellsimons1@gmail.com',
    password: '123',
    faceCountAvg: 95,
    faceAttemptAvg: 125,
    faceScoreAvg: 93,
    wordsSpokenAvg: 275,
    mouseClickAvg: 56,
    keyStrokeAvg: 137,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/SgKaqsp6PpXSp4qs1oTT2TRJA6wFh5gRtojyiDiJWFw/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA2Mzg1NDUuanBn.jpg'
  },
  {
    firstName: 'Zakariyah',
    lastName: 'Tomlinson',
    gradeLevel: 5,
    email: 'zakariyahtomlinson1@gmail.com',
    password: '123',
    faceCountAvg: 78,
    faceAttemptAvg: 119,
    faceScoreAvg: 65,
    wordsSpokenAvg: 301,
    mouseClickAvg: 99,
    keyStrokeAvg: 190,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/xwasTit3wJ3N413cL3kR1qQpN3KIQpTbGHe1tgUyAJ8/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5MDUxMjIuanBn.jpg'
  },
  {
    firstName: 'Ubaid',
    lastName: 'Cervantes',
    gradeLevel: 5,
    email: 'ubaidcervantes1@gmail.com',
    password: '123',
    faceCountAvg: 50,
    faceAttemptAvg: 116,
    faceScoreAvg: 43,
    wordsSpokenAvg: 301,
    mouseClickAvg: 90,
    keyStrokeAvg: 120,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/xx6AT4aFEKErfl3mwHePhNs8ZkeJ23TSKKykWHp2XqY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0NTU5ODguanBn.jpg'
  },
  {
    firstName: 'Paul',
    lastName: 'Atkinson',
    gradeLevel: 5,
    email: 'paulatkinson1@gmail.com',
    password: '123',
    faceCountAvg: 52,
    faceAttemptAvg: 125,
    faceScoreAvg: 68,
    wordsSpokenAvg: 108,
    mouseClickAvg: 59,
    keyStrokeAvg: 243,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/R-1DcqdIAjcw3jFp4TE_mOdFs_G5pyXCi0w_aYeqwZw/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxODg4MzQuanBn.jpg'
  },
  {
    firstName: 'Xander',
    lastName: 'Callahan',
    gradeLevel: 5,
    email: 'xandercallahan1@gmail.com',
    password: '123',
    faceCountAvg: 79,
    faceAttemptAvg: 125,
    faceScoreAvg: 92,
    wordsSpokenAvg: 302,
    mouseClickAvg: 83,
    keyStrokeAvg: 218,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/Sn3qzzH8HUeMGKwjryqASZEuTBdwOm6T4hEHt96LG8c/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5NDA0OTIuanBn.jpg'
  },
  {
    firstName: 'Millicent',
    lastName: 'Mathis',
    gradeLevel: 5,
    email: 'millicentmathis1@gmail.com',
    password: '123',
    faceCountAvg: 76,
    faceAttemptAvg: 125,
    faceScoreAvg: 82,
    wordsSpokenAvg: 319,
    mouseClickAvg: 121,
    keyStrokeAvg: 279,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/HTtEuPc8J37UE4kstvfp_f7odZhznPwQCVSVzCoX8wo/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4NjA3NjguanBn.jpg'
  },
  {
    firstName: 'Aaisha',
    lastName: 'Bruce',
    gradeLevel: 5,
    email: 'aaishabruce1@gmail.com',
    password: '123',
    faceCountAvg: 50,
    faceAttemptAvg: 116,
    faceScoreAvg: 43,
    wordsSpokenAvg: 301,
    mouseClickAvg: 90,
    keyStrokeAvg: 120,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/1EUV5oL8sHx7GV7nKx9uQZQWUJeSEjopvXx58eU_VjE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4NDc3MTIuanBn.jpg'
  },
  {
    firstName: 'Uzma',
    lastName: 'Drummond',
    gradeLevel: 5,
    email: 'uzmadrummond1@gmail.com',
    password: '123',
    faceCountAvg: 94,
    faceAttemptAvg: 125,
    faceScoreAvg: 91,
    wordsSpokenAvg: 292,
    mouseClickAvg: 87,
    keyStrokeAvg: 167,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/M88-v7EWv94Vfg04gxvpr4AvgTVFqxstBoqOFNmVv70/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5Mzc4NDkuanBn.jpg'
  },
  {
    firstName: 'Sullivan',
    lastName: 'Ireland',
    gradeLevel: 5,
    email: 'sullivanireland1@gmail.com',
    password: '123',
    faceCountAvg: 89,
    faceAttemptAvg: 120,
    faceScoreAvg: 43,
    wordsSpokenAvg: 301,
    mouseClickAvg: 90,
    keyStrokeAvg: 120,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/rgLD0_to_AIu1EYBx6v7FSoO1tl35nC6KWBo6l7r-wc/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyMDY5ODYuanBn.jpg'
  },
  {
    firstName: 'Hamid',
    lastName: 'Oneal',
    gradeLevel: 5,
    email: 'hamidoneal1@gmail.com',
    password: '123',
    faceCountAvg: 69,
    faceAttemptAvg: 125,
    faceScoreAvg: 73,
    wordsSpokenAvg: 141,
    mouseClickAvg: 90,
    keyStrokeAvg: 197,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/ojclM9F7CQb_aGJsNXfyjvCaEWZ1Q018kCGh9aw_Qy4/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4ODg2OTIuanBn.jpg'
  },
  {
    firstName: 'Hailie',
    lastName: 'Jones',
    gradeLevel: 5,
    email: 'hailiejones1@gmail.com',
    password: '123',
    faceCountAvg: 88,
    faceAttemptAvg: 125,
    faceScoreAvg: 93,
    wordsSpokenAvg: 249,
    mouseClickAvg: 92,
    keyStrokeAvg: 269,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/UYXGC2O-San9Vi1Fq_IHdgjZPlnhL6yFK1heSrR1i6U/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyOTEzMDAuanBn.jpg'
  },
  {
    firstName: 'Saeed',
    lastName: 'Davie',
    gradeLevel: 5,
    email: 'saeeddavie1@gmail.com',
    password: '123',
    faceCountAvg: 76,
    faceAttemptAvg: 125,
    faceScoreAvg: 79,
    wordsSpokenAvg: 178,
    mouseClickAvg: 83,
    keyStrokeAvg: 212,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/STdLj4_kJYChKdF-15kmYcmG4C2y5N7a_lQsAPyrDGU/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwNjMwMzkuanBn.jpg'
  },
  {
    firstName: 'Caiden',
    lastName: 'Connor',
    gradeLevel: 5,
    email: 'caidenconnor1@gmail.com',
    password: '123',
    faceCountAvg: 69,
    faceAttemptAvg: 125,
    faceScoreAvg: 73,
    wordsSpokenAvg: 141,
    mouseClickAvg: 90,
    keyStrokeAvg: 197,
    numberOfSessions: 10,
    imageUrl:'https://images.generated.photos/-oxIcmyISqbLdA-bhwq6GKN8R8u-C_RTbrbQxld-Ym4/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0MTUxMzEuanBn.jpg'
  },
  {
    firstName: 'Bjorn',
    lastName: 'Salt',
    gradeLevel: 5,
    email: 'bjornsalt1@gmail.com',
    password: '123',
    faceCountAvg: 78,
    faceAttemptAvg: 118,
    faceScoreAvg: 66,
    wordsSpokenAvg: 141,
    mouseClickAvg: 90,
    keyStrokeAvg: 197,
    numberOfSessions: 10,
    imageUrl: 'https://images.generated.photos/EEHB7XUslu2mHi7KaEbmMnlgEUph4-fB9AAJjGAFfYQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxODY2NDUuanBn.jpg'
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
