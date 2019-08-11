
//container that holds data


let netflix = {
    id: 9,
    name: "Super Store",
      season1: {
        seasonInfo: {
          episodeInfo : [
            { episode: 1, episodeName: "Pilot"},
            { episode: 2, episodeName: "Magazine Profile"},
            { episode: 3, episodeName: "Shots and Salsa"},
            { episode: 4, episodeName: "Mannequin"},
            { episode: 5, episodeName: "Shoplifter"}
          ]
        }
      },
      season2: {
        seasonInfo: {
          episodeInfo : [
            { episode: 1, episodeName: "Secret Shopper"},
            { episode: 2, episodeName: "Color Wars"},
            { episode: 3, episodeName: "Wedding Day Sale"},
            { episode: 4, episodeName: "All-Nighter"},
            { episode: 5, episodeName: "Demotion"},
            { episode: 6, episodeName: "Labor"}
          ]
        }
      },
      season3: {}
    };
//dot notation

//console.log('all of the data', netflix)
//console.log('just season info:', netflix.season2.seasonInfo)

console.log(netflix.season1.seasonInfo.episodeInfo[0].episode, netflix.season1.seasonInfo.episodeInfo[0].episodeName )

  
  
let movie = {
  nameOfMovie: 'greatMovie',
    runTime: 'hours2',
    characters: [
      char = {name: 'lead', age: 'x', items: 'plotDevice'},
      char2 = {name: 'support', age: 'y', items: 'redHerring'},
    ],
    genre: 'bestGenre',
  
};

console.log(movie.nameOfMovie+"\n", movie.runTime+"\n", movie.characters, "\n", movie.characters[0].name+"\n", movie.characters[0].items+"\n" );

  