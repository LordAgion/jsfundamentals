//Object.keys() is a method that returns of a given object own property names
//Object.values() is a method that returns oan array of a given object's own emnueralbe proberty values

let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevil: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }

//console.log(Object.keys(spaceJam.toonSquad))
//console.log(Object.keys(spaceJam.toonSquad.duck)) //each number repersent number in the name

console.log(Object.values(spaceJam.toonSquad))
console.log(Object.values(spaceJam.toonSquad.duck))