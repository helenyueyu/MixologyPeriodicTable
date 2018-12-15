let body = document.getElementById('container-two');

let drinkList = [
{},
{
  number: 1,
  name: 'Diesel',
  alc: 5,
  ing: 'Lager',
  year: '',
  group: 'beerGroup',
  img: 'images/beer3.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 2,
  name: 'Green Apple Cider',
  alc: 7,
  ing: 'Lager',
  year: '',
  group: 'beerGroup',
  img: 'images/GreenAppleCider.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 3,
  name: 'Baked Apple',
  alc: 8,
  ing: 'Cinnamon',
  year: '',
  group: 'beerGroup',
  img: 'images/BakedApple.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 4,
  name: 'Red Horn',
  alc: 8,
  ing: 'Rum',
  year: '',
  group: 'beerGroup',
  img: 'images/RedHorn.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 5,
  name: 'Schnider',
  alc: 9,
  ing: 'Peach',
  year: '',
  group: 'beerGroup',
  img: 'images/Schnider.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 6,
  name: 'Devon Gin',
  alc: 13,
  ing: 'Cider',
  year: '',
  group: 'beerGroup',
  img: 'images/DevonGin.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 7,
  name: 'Snake Bite',
  alc: 5,
  ing: 'Lager',
  year: '',
  group: 'beerGroup',
  img: 'images/Schnider.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 8,
  name: 'Red Eye',
  alc: 3,
  ing: 'Tomato',
  year: '',
  group: 'mixedBeerGroup',
  img: 'images/DrPepper.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 9,
  name: 'Shandy',
  alc: 6,
  ing: 'Lime',
  year: '',
  group: 'mixedBeerGroup',
  img: 'images/DogsNose.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 10,
  name: 'Lunch Box',
  alc: 5,
  ing: 'Orange',
  year: '',
  group: 'mixedBeerGroup',
  img: 'images/DogsNose.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 11,
  name: 'Dr. Pepper',
  alc: 6.67,
  ing: 'Cola',
  year: '',
  group: 'mixedBeerGroup',
  img: 'images/DrPepper.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 12,
  name: 'Irish Car Bomb',
  alc: 5,
  ing: 'Beer',
  year: '',
  group: 'mixedBeerGroup',
  img: 'images/IrishCarBomb.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 13,
  name: "Dog's Nose",
  alc: 8,
  ing: 'Beer',
  year: '',
  group: 'mixedBeerGroup',
  img: 'images/DogsNose.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 14,
  name: 'Black and Tan',
  alc: 6,
  ing: 'Beer',
  year: 1889,
  group: 'mixedBeerGroup',
  img: 'images/BlackAndTan.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 15,
  name: 'Boilermaker',
  alc: 9.78,
  ing: 'Beer',
  year: '',
  group: 'mixedBeerGroup',
  img: 'images/Boilermaker.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 16,
  name: 'Bomber',
  alc: 9.78,
  ing: 'Beer',
  year: '',
  group: 'mixedBeerGroup',
  img: 'images/DogsNose.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 17,
  name: 'Black Velvet',
  alc: 9,
  ing: 'Beer',
  year: 1861,
  group: 'mixedBeerGroup',
  img: 'images/BlackVelvet.png',
  paddingtop: '0px',
  width: '40px',
  height: '85px',
  alt: 'Flute'
},
{
  number: 18,
  name: 'Mimosa',
  alc: 6,
  ing: 'Orange',
  year: '',
  group: 'wineGroup',
  img: 'images/Mimosa.png',
  paddingtop: '0px',
  width: '40px',
  height: '85px',
  alt: 'Flute'
},
{
  number: 19,
  name: 'Fuzzy Navel',
  alc: 16.57,
  ing: 'Orange',
  year: '',
  group: 'wineGroup',
  img: 'images/FuzzyNavel.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 20,
  name: 'Bellini',
  alc: 7.33,
  ing: 'Peach',
  year: '1934',
  group: 'wineGroup',
  img: 'images/Bellini.png',
  paddingtop: '0px',
  width: '40px',
  height: '85px',
  alt: 'Flute'
},
{
  number: 21,
  name: 'Americano',
  alc: 17.27,
  ing: 'Sweet',
  year: '1861',
  group: 'wineGroup',
  img: 'images/Americano.png',
  paddingtop: '0px',
  width: '40px',
  height: '85px',
  alt: 'Flute'
},
{
  number: 22,
  name: 'Gluhwein',
  alc: 14.12,
  ing: 'Cinnamon',
  year: '',
  group: 'wineGroup',
  img: 'images/Gluhwein.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 23,
  name: 'Bronx',
  alc: 22.93,
  ing: 'Orange',
  year: '1900',
  group: 'wineGroup',
  img: 'images/Bronx.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 24,
  name: 'Rob Roy',
  alc: 31,
  ing: 'Sweet',
  year: '1894',
  group: 'wineGroup',
  img: 'images/RobRoy.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 25,
  name: 'Tequila Sunrise',
  alc: 12,
  ing: 'Orange',
  year: '1930s',
  group: 'tequilaGroup',
  img: 'images/TequilaSunrise.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 26,
  name: 'Tequila Sunset',
  alc: 12.81,
  ing: 'Orange',
  year: '',
  group: 'tequilaGroup',
  img: 'images/TequilaSunset.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 27,
  name: 'Margarita',
  alc: 31.43,
  ing: 'Lemon',
  year: '1941',
  group: 'tequilaGroup',
  img: 'images/Margarita.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 28,
  name: "Angel's Wing",
  alc: 29.56,
  ing: 'Brandy',
  year: '1930',
  group: 'brandyGroup',
  img: 'images/AngelsWing.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 29,
  name: 'Sidecar',
  alc: 32,
  ing: 'Orange',
  year: '',
  group: 'brandyGroup',
  img: 'images/SideCar.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 30,
  name: 'French Connection',
  alc: 34,
  ing: 'Almond',
  year: '',
  group: 'brandyGroup',
  img: 'images/FrenchConnection.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 31,
  name: 'B & B',
  alc: 41.5,
  ing: 'Brandy',
  year: '',
  group: 'brandyGroup',
  img: 'images/FrenchConnection.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 32,
  name: 'Cape Cod',
  alc: 10,
  ing: 'Cranberry',
  year: '1945',
  group: 'vodkaGroup',
  img: 'images/CapeCod.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 33,
  name: 'Sex on the Beach',
  alc: 14,
  ing: 'Cranberry',
  year: '1987',
  group: 'vodkaGroup',
  img: 'images/SexOnTheBeach.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 34,
  name: 'Screaming Orgasm',
  alc: 26,
  ing: 'Coffee',
  year: '',
  group: 'vodkaGroup',
  img: 'images/ScreamingOrgasm.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 35,
  name: 'Bloody Mary',
  alc: 11.45,
  ing: 'Spicy',
  year: '1912',
  group: 'vodkaGroup',
  img: 'images/BloodyMary.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 36,
  name: 'Lemon Drop',
  alc: 21.43,
  ing: 'Lemon',
  year: '',
  group: 'vodkaGroup',
  img: 'images/LemonDrop.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 37,
  name: 'Vodka Gimlet',
  alc: 26.67,
  ing: 'Lime',
  year: '1928',
  group: 'vodkaGroup',
  img: 'images/VodkaGimlet.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 38,
  name: 'Laughing Buddha',
  alc: 12.31,
  ing: 'Spicy',
  year: '2007',
  group: 'vodkaGroup',
  img: 'images/LaughingBuddha.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 39,
  name: 'Cosmopolitan',
  alc: 22,
  ing: 'Cranberry',
  year: '1970',
  group: 'vodkaGroup',
  img: 'images/Cosmopolitan.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 40,
  name: 'Apple Martini',
  alc: 35.71,
  ing: 'Apple',
  year: '',
  group: 'vodkaGroup',
  img: 'images/AppleMartini.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 41,
  name: 'Screwdriver',
  alc: 13.33,
  ing: 'Orange',
  year: '1949',
  group: 'vodkaGroup',
  img: 'images/Screwdriver.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 42,
  name: 'White Russian',
  alc: 25.3,
  ing: 'Coffee',
  year: '1965',
  group: 'vodkaGroup',
  img: 'images/WhiteRussian.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 43,
  name: 'Black Magic',
  alc: 35.08,
  ing: 'Coffee',
  year: '',
  group: 'vodkaGroup',
  img: 'images/BlackMagic.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 44,
  name: 'Jack and Coke',
  alc: 6,
  ing: 'Cola',
  year: '',
  group: 'whiskyGroup',
  img: 'images/JackAndCoke.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 45,
  name: 'Whiskey Sour',
  alc: 20,
  ing: 'Lemon',
  year: '1862',
  group: 'whiskyGroup',
  img: 'images/WhiskeySour.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 46,
  name: 'Irish Coffee',
  alc: 10.41,
  ing: 'Coffee',
  year: '1940',
  group: 'whiskyGroup',
  img: 'images/IrishCoffee.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 47,
  name: 'Mint Julep',
  alc: 32,
  ing: 'Mint',
  year: '',
  group: 'whiskyGroup',
  img: 'images/MintJulep.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 48,
  name: 'Harvey Wallbanger',
  alc: 15,
  ing: 'Orange',
  year: '1950s',
  group: 'whiskyGroup',
  img: 'images/HarveyWallbanger.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 49,
  name: 'Godfather',
  alc: 36,
  ing: 'Almond',
  year: '',
  group: 'whiskyGroup',
  img: 'images/Godfather.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 50,
  name: 'Washington Apple',
  alc: 18,
  ing: 'Apple',
  year: '',
  group: 'whiskyGroup',
  img: 'images/WashingtonApple.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 51,
  name: 'Rusty Nail',
  alc: 40,
  ing: 'Whiskey',
  year: '',
  group: 'whiskyGroup',
  img: 'images/RustyNail.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 52,
  name: 7+" & "+7,
  alc: 20,
  ing: 'Lime',
  year: '',
  group: 'whiskyGroup',
  img: 'images/7and7.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 53,
  name: 'Manhattan',
  group: 'whiskyGroup',
  alc: 40.06,
  ing: 'Whiskey',
  year: '1860s',
  img: 'images/Manhattan.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 54,
  name: 'Pina Colada',
  alc: 8,
  ing: 'Pineapple',
  year: '1954',
  group: 'rumGroup',
  img: 'images/PinaColada.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 55,
  name: 'Mai Tai',
  alc: 28.5,
  ing: 'Orange',
  year: '1944',
  group: 'rumGroup',
  img: 'images/MaiTai.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 56,
  name: 'Rum and Coke',
  alc: 12,
  ing: 'Cola',
  year: '1900',
  group: 'rumGroup',
  img: 'images/RumAndCoke.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 57,
  name: 'Zombie',
  alc: 29.35,
  ing: 'Fruit',
  year: '',
  group: 'rumGroup',
  img: 'images/Zombie.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 58,
  name: 'Hurricane',
  alc: 12.8,
  ing: 'Fruit',
  year: '1940s',
  group: 'rumGroup',
  img: 'images/Hurricane.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 59,
  name: 'Caipirinha',
  alc: 32.65,
  ing: 'Lime',
  year: '',
  group: 'rumGroup',
  img: 'images/Caipirinha.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 60,
  name: 'Mojito',
  alc: 19.73,
  ing: 'Lime',
  year: '',
  group: 'rumGroup',
  img: 'images/Mohito.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 61,
  name: 'Diablo',
  alc: 34.85,
  ing: 'Rum',
  year: '',
  group: 'rumGroup',
  img: 'images/Diablo.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 62,
  name: 'Gin and Tonic',
  alc: 11,
  ing: 'Lime',
  year: '',
  group: 'ginGroup',
  img: 'images/GinAndTonic.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 63,
  name: 'Tom Collins',
  alc: 13.09,
  ing: 'Lemon',
  year: '1876',
  group: 'ginGroup',
  img: 'images/TomCollins.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 64,
  name: 'Singapore Sling',
  alc: 14.28,
  ing: 'Fruit',
  year: '1910s',
  group: 'ginGroup',
  img: 'images/SingaporeSling.png',
  paddingtop: '30px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 65,
  name: 'Blue Lady',
  alc: 22,
  ing: 'Orange',
  year: '1929',
  group: 'ginGroup',
  img: 'images/BlueLady.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 66,
  name: 'Dirty Martini',
  alc: 25,
  ing: 'Olive',
  year: '',
  group: 'ginGroup',
  img: 'images/DirtyMartini.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 67,
  name: 'Gibson',
  alc: 36.86,
  ing: 'Gin',
  year: '',
  group: 'ginGroup',
  img: 'images/Gibson.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 68,
  name: 'Irish Trash Can',
  alc: 6,
  ing: 'Fruit',
  year: '',
  group: 'mixedGroup',
  img: 'images/IrishTrashCan.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 69,
  name: 'Adios Motherfucker',
  alc: 14,
  ing: 'Citrus',
  year: '',
  group: 'mixedGroup',
  img: 'images/AdiosMotherfucker.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 70,
  name: 'Black Opal',
  alc: 18,
  ing: 'Blackberry',
  year: '',
  group: 'mixedGroup',
  img: 'images/BlackOpal.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 71,
  name: 'Long Island Iced Tea',
  alc: 22.92,
  ing: 'Tea',
  year: '',
  group: 'mixedGroup',
  img: 'images/LongIslandIcedTea.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 72,
  name: 'Baltimore Zoo',
  alc: 29,
  ing: 'Fruit',
  year: '',
  group: 'mixedGroup',
  img: 'images/BaltimoreZoo.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 73,
  name: 'Tokyo Tea',
  alc: 33,
  ing: 'Melon',
  year: '',
  group: 'mixedGroup',
  img: 'images/TokyoTea.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 74,
  name: 'Grateful Dead',
  alc: 35,
  ing: 'Fruit',
  year: '',
  group: 'mixedGroup',
  img: 'images/GratefulDead.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 75,
  name: 'Midori Sour',
  alc: 3,
  ing: 'Melon',
  year: '',
  group: 'liquorGroup',
  img: 'images/MidoriSour.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 76,
  name: 'Jagerbomb',
  alc: 7,
  ing: 'Citrus',
  year: '',
  group: 'liquorGroup',
  img: 'images/Jagerbomb.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 77,
  name: 'Grasshopper',
  alc: 15,
  ing: 'Mint',
  year: '1950',
  group: 'liquorGroup',
  img: 'images/Grasshopper.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 78,
  name: 'Mudslide',
  alc: 19,
  ing: 'Coffee',
  year: '',
  group: 'liquorGroup',
  img: 'images/Mudslide.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 79,
  name: 'Pink Squirrel',
  alc: 20,
  ing: 'Chocolate',
  year: '',
  group: 'liquorGroup',
  img: 'images/PinkSquirrel.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 80,
  name: "Angel's Tit",
  alc: 21.33,
  ing: 'Cherry',
  year: '',
  group: 'liquorGroup',
  img: 'images/AngelsTit.png',
  paddingtop: '0px',
  width: '55px',
  height: '85px',
  alt: 'Beer'
},
{
  number: 81,
  name: 'Amaretto Sour',
  alc: 24,
  ing: 'Almond',
  year: '',
  group: 'liquorGroup',
  img: 'images/AmarettoSour.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
},
{
  number: 82,
  name: 'Shit on Grass',
  alc: 24.75,
  ing: 'Melon',
  year: '',
  group: 'liquorGroup',
  img: 'images/ShitOnGrass.png',
  paddingtop: '30px',
  width: '45px',
  height: '55px',
  alt: 'Shot'
}
];


let val;
function fixOpacity() {
  val = document.getElementById('slider').value;
  for (let i = 1; i <= 82; i++) {
    let test = document.getElementById(`box${i}`);
    test.style.opacity = 1;
    test.removeEventListener('mouseenter', changeOpacity());
    test.removeEventListener('mouseleave', changeOpacity());
  }
}
function changeOpacity() {
  val = document.getElementById('slider').value;
  for (let i = 1; i <= 82; i++) {
    let test = document.getElementById(`box${i}`);
    test.style.opacity = val/100;
    test.addEventListener('mouseenter', function(event){
      event.target.style.opacity = 1;
    })
    test.addEventListener('mouseleave', function(event){
      event.target.style.opacity = val/100;
    })
    ;
  }
};


function compareByAlcoholAsc(a,b) {
  if (a.alc < b.alc) return -1;
  if (a.alc > b.alc) return 1;
  return 0;
}
function compareByAlcoholDesc(a,b) {
  if (a.alc < b.alc) return 1;
  if (a.alc > b.alc) return -1;
  return 0;
}
function compareByAlphabet(a,b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}
function originalOrder(a,b){
  if (a.number < b.number) return -1;
  if (a.number > b.number) return 1;
  return 0;
}

function sortFunction() {
  document.getElementById('sort').onchange=function() {
    let sortType = this.value;
    if (sortType == 'sortByAlcoholAsc') {
      drinkList.sort(compareByAlcoholAsc);
      destroyDrinks();
      createDrinks();
      changeOpacity();
    }
    if (sortType == 'sortByAlcoholDesc') {
      drinkList.sort(compareByAlcoholDesc);
      destroyDrinks();
      createDrinks();
      changeOpacity();
    }
    if (sortType == 'sortByAlphabet') {
      drinkList.sort(compareByAlphabet);
      destroyDrinks();
      createDrinks();
      changeOpacity();
    }
    if (sortType == 'none') {
      drinkList.sort(originalOrder);
      destroyDrinks();
      createDrinks();
      changeOpacity();
    }
  }
}

sortFunction();


function destroyDrinks() {
  let element = document.getElementById('container-two');
  element.innerHTML = '';
}

function createColorfulDrinks() {
  destroyDrinks();
  createDrinks();
  changeOpacity();
}
function createMonochromaticDrinks() {
  destroyDrinks();
  for (let i = 1; i <= 82; i++) {
    let element = document.createElement('div');
    element.setAttribute('id', `box${i}`);
    // if (drinkList[i].alc.toString().length > 4) {
    //   element.setAttribute('class', `myBox${drinkList[i].group} tripleDigits`)
    // } else
    if (drinkList[i].alc.toString().length > 2) {
      element.setAttribute('class', `myBox ${drinkList[i].group} doubleDigits`)
    } else {
      element.setAttribute('class', `myBox ${drinkList[i].group}`);
    }

    body.appendChild(element);

    let span = document.createElement('span');
    span.setAttribute('class', 'number');
    span.innerHTML = drinkList[i].number;
    span.setAttribute('style', 'color: white');
    element.appendChild(span);

    let span2 = document.createElement('span');
    span2.setAttribute('class', 'alcoholPercentage');
    span2.innerHTML = `${drinkList[i].alc}%`;
    span2.setAttribute('style', 'color: white');
    element.appendChild(span2);


    let br = document.createElement('br');
    element.appendChild(br);

    let br2 = document.createElement('br');
    element.appendChild(br2);

    let br3 = document.createElement('br');
    element.appendChild(br3);

    let br4 = document.createElement('br');
    element.appendChild(br4);

    let br5 = document.createElement('br');
    element.appendChild(br5);

    let a = document.createElement('a');
    let mainText = document.createTextNode(`${drinkList[i].name}`);
    a.appendChild(mainText);
    a.href = "#";
    a.setAttribute('style', 'color: white; margin-top: 30px;');
    element.appendChild(a);

    let br6 = document.createElement('br');
    element.appendChild(br6);

    let br7 = document.createElement('br');
    element.appendChild(br7);

    let br8 = document.createElement('br');
    element.appendChild(br8);

    let span3 = document.createElement('span');
    if (drinkList[i].name.length > 16) {
      span3.setAttribute('class', 'ing2');
    } else {
      span3.setAttribute('class', 'ing');
    }
    span3.innerHTML = drinkList[i].ing;
    span3.setAttribute('style', 'color: white');
    element.appendChild(span3);

    let span4 = document.createElement('span');
    span4.setAttribute('class', 'year');
    span4.innerHTML = drinkList[i].year;
    span4.setAttribute('style', 'color: white');
    element.appendChild(span4);

    element.setAttribute('style', 'background-color: #722f37');
  }
  changeOpacity();
}

function createDrinks() {
  for (let i = 1; i <= 82; i++) {
    let element = document.createElement('div');
    element.setAttribute('id', `box${i}`);
    // if (drinkList[i].alc.toString().length > 4) {
    //   element.setAttribute('class', `myBox${drinkList[i].group} tripleDigits`)
    // } else
    if (drinkList[i].alc.toString().length > 2) {
      element.setAttribute('class', `myBox ${drinkList[i].group} doubleDigits`)
    } else {
      element.setAttribute('class', `myBox ${drinkList[i].group}`);
    }
    body.appendChild(element);

    let span = document.createElement('span');
    span.setAttribute('class', 'number');
    span.innerHTML = drinkList[i].number;
    element.appendChild(span);

    let span2 = document.createElement('span');
    span2.setAttribute('class', 'alcoholPercentage');
    span2.innerHTML = `${drinkList[i].alc}%`;
    element.appendChild(span2);

    let br = document.createElement('br');
    element.appendChild(br);

    let img = document.createElement('img');
    img.setAttribute('src', `${drinkList[i].img}`);
    img.setAttribute('width', drinkList[i].width);
    img.setAttribute('height', drinkList[i].height); img.setAttribute('alt', drinkList[i].alt);
    img.setAttribute('style', `padding-top: ${drinkList[i].paddingtop}`)
    // ifs ([6,19,23,25,26,30,31,32,33,38,41,43,44,45,47,48,49,50,51,52,55,56,57,58,59,60,61,62,63,64,68,69,72,74,75,76,78,81,82].includes(i)) {
    //   img.setAttribute('width', drinkList[6].width);
    //   img.setAttribute('height', '55px');
    //   img.setAttribute('alt', 'Shot');
    //   img.setAttribute('style', 'padding-top: 30px');
    // } else if ([17,18,20,21].includes(i)) {
    //   img.setAttribute('width', '40px');
    //   img.setAttribute('height', '85px');
    //   img.setAttribute('alt', 'Flute');
    // } else {
    //   img.setAttribute('width', '55px');
    //   img.setAttribute('height', '85px');
    //   img.setAttribute('alt', 'Beer');
    // }
    element.appendChild(img);

    let br2 = document.createElement('br');
    element.appendChild(br2);

    let a = document.createElement('a');
    let mainText = document.createTextNode(`${drinkList[i].name}`);
    a.appendChild(mainText);
    a.href = "#";
    element.appendChild(a);

    let br3 = document.createElement('br');
    element.appendChild(br3);

    let span3 = document.createElement('span');
    if (drinkList[i].name.length > 16) {
      span3.setAttribute('class', 'ing2');
    } else {
      span3.setAttribute('class', 'ing');
    }
    span3.innerHTML = drinkList[i].ing;
    element.appendChild(span3);

    let span4 = document.createElement('span');
    span4.setAttribute('class', 'year');
    span4.innerHTML = drinkList[i].year;
    element.appendChild(span4);
  }
}

createMonochromaticDrinks();


function filterLager(drinkList){
  return drinkList.ing=='Lager';
}
function filterCinnamon(drinkList){
  return drinkList.ing=='Cinnamon';
}
function filterRum(drinkList){
  return drinkList.ing=='Rum';
}
function filterPeach(drinkList){
  return drinkList.ing=='Peach';
}
function filterCider(drinkList){
  return drinkList.ing=='Cider';
}
function filterTomato(drinkList){
  return drinkList.ing=='Tomato';
}
function filterLime(drinkList){
  return drinkList.ing=='Lime';
}
function filterOrange(drinkList){
  return drinkList.ing=='Orange';
}
function filterApple(drinkList){
  return drinkList.ing=='Apple';
}
function filterBeer(drinkList){
  return drinkList.ing=='Beer';
}
function filterSweet(drinkList){
  return drinkList.ing=='Sweet';
}
function filterLemon(drinkList){
  return drinkList.ing=='Lemon';
}
function filterBrandy(drinkList){
  return drinkList.ing=='Brandy';
}
function filterCoffee(drinkList){
  return drinkList.ing=='Coffee';
}
function filterMint(drinkList){
  return drinkList.ing=='Mint';
}
function filterPineapple(drinkList){
  return drinkList.ing=='Pineapple';
}
function filterWhiskey(drinkList){
  return drinkList.ing=='Whiskey';
}
function filterFruit(drinkList){
  return drinkList.ing=='Fruit';
}
function filterCitrus(drinkList){
  return drinkList.ing=='Citrus';
}
function filterBlackberry(drinkList){
  return drinkList.ing=='Blackberry'
}
function filterAlmond(drinkList){
  return drinkList.ing=='Almond'
}
function filterMelon(drinkList){
  return drinkList.ing=='Melon'
}
function filterChocolate(drinkList){
  return drinkList.ing=='Chocolate'
}
function filterOlive(drinkList){
  return drinkList.ing=='Olive'
}
function filterGin(drinkList){
  return drinkList.ing=='Gin'
}
function filterCola(drinkList){
  return drinkList.ing=='Cola'
}
function filterCranberry(drinkList){
  return drinkList.ing=='Cranberry'
}
function filterTea(drinkList){
  return drinkList.ing=='Tea'
}
function filterSpicy(drinkList){
  return drinkList.ing=='Spicy'
}
function filterCherry(drinkList){
  return drinkList.ing=='Cherry'
}

let Lager = drinkList.filter(filterLager);
let Cinnamon = drinkList.filter(filterCinnamon);
let Rum = drinkList.filter(filterRum);
let Peach = drinkList.filter(filterPeach);
let Cider = drinkList.filter(filterCider);
let Tomato = drinkList.filter(filterTomato);
let Lime = drinkList.filter(filterLime);
let Orange = drinkList.filter(filterOrange);
let Apple = drinkList.filter(filterApple);
let Beer = drinkList.filter(filterBeer);
let Sweet = drinkList.filter(filterSweet);
let Lemon = drinkList.filter(filterLemon);
let Brandy = drinkList.filter(filterBrandy);
let Coffee = drinkList.filter(filterCoffee);
let Mint = drinkList.filter(filterMint);
let Pineapple = drinkList.filter(filterPineapple);
let Whiskey = drinkList.filter(filterWhiskey);
let Fruit = drinkList.filter(filterFruit);
let Citrus = drinkList.filter(filterCitrus);
let Blackberry = drinkList.filter(filterBlackberry);
let Almond = drinkList.filter(filterAlmond);
let Melon = drinkList.filter(filterMelon);
let Chocolate = drinkList.filter(filterChocolate);
let Olive = drinkList.filter(filterOlive);
let Gin = drinkList.filter(filterGin);
let Cola = drinkList.filter(filterCola);
let Cranberry = drinkList.filter(filterCranberry);
let Tea = drinkList.filter(filterTea);
let Spicy = drinkList.filter(filterSpicy);
let Cherry = drinkList.filter(filterCherry);

let toggleFlag1 = false;
let toggleFlag2 = false;
let toggleFlag3 = false;
let toggleFlag4 = false;
let toggleFlag5 = false;
let toggleFlag6 = false;
let toggleFlag7 = false;
let toggleFlag8 = false;
let toggleFlag9 = false;
let toggleFlag10 = false;
let toggleFlag11 = false;
let toggleFlag12 = false;
let toggleFlag13 = false;
let toggleFlag14 = false;
let toggleFlag15 = false;
let toggleFlag16 = false;
let toggleFlag17 = false;
let toggleFlag18 = false;
let toggleFlag19 = false;
let toggleFlag20 = false;
let toggleFlag21 = false;
let toggleFlag22 = false;
let toggleFlag23 = false;
let toggleFlag24 = false;
let toggleFlag25 = false;
let toggleFlag26 = false;
let toggleFlag27 = false;
let toggleFlag28 = false;
let toggleFlag29 = false;
let toggleFlag30 = false;


// let test = document.getElementById(`box${i}`);
// test.removeEventListener('mouseenter', changeOpacity());

$('#Lager').on('click', function() {
  $(this).toggleClass('highlight');
  val = document.getElementById('slider').value;
  let op = (toggleFlag1) ? val/100 : 1;
  for (let i = 0; i < Lager.length; i++) {
    $(`#box${Lager[i].number}`).stop().animate({'opacity':op}, 800);
    // $(`#box${Lager[i].number}`).removeEventListener('mouseenter', changeOpacity());
    // $(`#box${Lager[i].number}`).removeEventListener('mouseleave', changeOpacity());
  }
  toggleFlag1 = !toggleFlag1;
});

$('#Cinnamon').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag2) ? val/100 : 1;
  for (let i = 0; i < Cinnamon.length; i++) {
    $(`#box${Cinnamon[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag2 = !toggleFlag2;
});
$('#Rum').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag3) ? val/100 : 1;
  for (let i = 0; i < Rum.length; i++) {
    $(`#box${Rum[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag3 = !toggleFlag3;
});
$('#Peach').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag4) ? val/100 : 1;
  for (let i = 0; i < Peach.length; i++) {
    $(`#box${Peach[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag4 = !toggleFlag4;
})
$('#Cider').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag5) ? val/100 : 1;
  for (let i = 0; i < Cider.length; i++) {
    $(`#box${Cider[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag5 = !toggleFlag5;
})
$('#Tomato').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag6) ? val/100 : 1;
  for (let i = 0; i < Tomato.length; i++) {
    $(`#box${Tomato[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag6 = !toggleFlag6;
})
$('#Lime').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag7) ? val/100 : 1;
  for (let i = 0; i < Lime.length; i++) {
    $(`#box${Lime[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag7 = !toggleFlag7;
})
$('#Orange').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag8) ? val/100 : 1;
  for (let i = 0; i < Orange.length; i++) {
    $(`#box${Orange[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag8 = !toggleFlag8;
})
$('#Apple').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag9) ? val/100 : 1;
  for (let i = 0; i < Apple.length; i++) {
    $(`#box${Apple[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag9 = !toggleFlag9;
})
$('#Beer').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag10) ? val/100 : 1;
  for (let i = 0; i < Beer.length; i++) {
    $(`#box${Beer[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag10 = !toggleFlag10;
})
$('#Sweet').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag11) ? val/100 : 1;
  for (let i = 0; i < Sweet.length; i++) {
    $(`#box${Sweet[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag11 = !toggleFlag11;
})
$('#Lemon').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag12) ? val/100 : 1;
  for (let i = 0; i < Lemon.length; i++) {
    $(`#box${Lemon[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag12 = !toggleFlag12;
})
$('#Brandy').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag13) ? val/100 : 1;
  for (let i = 0; i < Brandy.length; i++) {
    $(`#box${Brandy[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag13 = !toggleFlag13;
})
$('#Coffee').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag14) ? val/100 : 1;
  for (let i = 0; i < Coffee.length; i++) {
    $(`#box${Coffee[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag14 = !toggleFlag14;
})
$('#Mint').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag15) ? val/100 : 1;
  for (let i = 0; i < Mint.length; i++) {
    $(`#box${Mint[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag15 = !toggleFlag15;
})
$('#Pineapple').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag16) ? val/100 : 1;
  for (let i = 0; i < Pineapple.length; i++) {
    $(`#box${Pineapple[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag16 = !toggleFlag16;
})
$('#Whiskey').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag17) ? val/100 : 1;
  for (let i = 0; i < Whiskey.length; i++) {
    $(`#box${Whiskey[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag17 = !toggleFlag17;
})
$('#Fruit').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag18) ? val/100 : 1;
  for (let i = 0; i < Fruit.length; i++) {
    $(`#box${Fruit[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag18 = !toggleFlag18;
})
$('#Citrus').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag19) ? val/100 : 1;
  for (let i = 0; i < Citrus.length; i++) {
    $(`#box${Citrus[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag19 = !toggleFlag19;
})
$('#Blackberry').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag20) ? val/100 : 1;
  for (let i = 0; i < Blackberry.length; i++) {
    $(`#box${Blackberry[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag20 = !toggleFlag20;
})
$('#Almond').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag21) ? val/100 : 1;
  for (let i = 0; i < Almond.length; i++) {
    $(`#box${Almond[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag21 = !toggleFlag21;
})
$('#Melon').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag22) ? val/100 : 1;
  for (let i = 0; i < Melon.length; i++) {
    $(`#box${Melon[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag22 = !toggleFlag22;
})
$('#Chocolate').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag23) ? val/100 : 1;
  for (let i = 0; i < Chocolate.length; i++) {
    $(`#box${Chocolate[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag23 = !toggleFlag23;
})
$('#Olive').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag24) ? val/100 : 1;
  for (let i = 0; i < Olive.length; i++) {
    $(`#box${Olive[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag24 = !toggleFlag24;
})
$('#Gin').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag25) ? val/100 : 1;
  for (let i = 0; i < Gin.length; i++) {
    $(`#box${Gin[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag25 = !toggleFlag25;
})
$('#Cola').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag26) ? val/100 : 1;
  for (let i = 0; i < Cola.length; i++) {
    $(`#box${Cola[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag26 = !toggleFlag26;
})
$('#Cranberry').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag27) ? val/100 : 1;
  for (let i = 0; i < Cranberry.length; i++) {
    $(`#box${Cranberry[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag27 = !toggleFlag27;
})
$('#Tea').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag28) ? val/100 : 1;
  for (let i = 0; i < Tea.length; i++) {
    $(`#box${Tea[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag28 = !toggleFlag28;
})
$('#Spicy').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag29) ? val/100 : 1;
  for (let i = 0; i < Spicy.length; i++) {
    $(`#box${Spicy[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag29 = !toggleFlag29;
})
$('#Cherry').on('click', function() {
  $(this).toggleClass('highlight');
  let op = (toggleFlag30) ? val/100 : 1;
  for (let i = 0; i < Cherry.length; i++) {
    $(`#box${Cherry[i].number}`).stop().animate({'opacity':op}, 800);
  }
  toggleFlag30 = !toggleFlag30;
})

changeOpacity();
//
// if (toggleFlag1 == false
// && toggleFlag2 == false
// && toggleFlag3 == false
// && toggleFlag4 == false
// && toggleFlag5 == false
// && toggleFlag6 == false
// && toggleFlag7 == false
// && toggleFlag8 == false
// && toggleFlag9 == false
// && toggleFlag10 == false
// && toggleFlag11 == false
// && toggleFlag12 == false
// && toggleFlag13 == false
// && toggleFlag14 == false
// && toggleFlag15 == false
// && toggleFlag16 == false
// && toggleFlag17 == false
// && toggleFlag18 == false
// && toggleFlag19 == false
// && toggleFlag20 == false
// && toggleFlag21 == false
// && toggleFlag22 == false
// && toggleFlag23 == false
// && toggleFlag24 == false
// && toggleFlag25 == false
// && toggleFlag26 == false
// && toggleFlag27 == false
// && toggleFlag28 == false
// && toggleFlag29 == false
// && toggleFlag30 == false) {
//   changeOpacity();
// } else {
// }
