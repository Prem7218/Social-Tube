export const commentData = [
  {
    id: 1,
    name: "1-John Doe",
    comment: "1-This is top-level comment",
    replies: [
      {
        id: "1A",
        name: "A-Jane Doe",
        comment: "A-This is a reply1 to the top-level comment",
        replies: [
          {
            id: "1B",
            name: "B-John Doe",
            comment: "B-This is a reply2 to the reply1",
            replies: [
              {
                id: "1C",
                name: "C-Jane Doe",
                comment: "C-This is a reply to the reply2",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "2-Jane Doe",
    comment: "2-This is top-level comment",
    replies: [
      {
        id: "2A",
        name: "A-John Doe",
        comment: "A-This is a reply1 to the top-level comment",
        replies: [],
      },
    ],
  },
  {
    id: 3,
    name: "3-John Doe",
    comment: "3-This is top-level comment",
    replies: [
      {
        id: "3A",
        name: "A-Jane Doe",
        comment: "A-This is a reply1 to the top-level comment",
        replies: [
          {
            id: "3B",
            name: "B-John Doe",
            comment: "B-This is a reply2 to the reply1",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "4-Jane Doe",
    comment: "4-This is top-level comment",
    replies: [],
  },
  {
    id: 5,
    name: "5-John Doe",
    comment: "5-This is top-level comment",
    replies: [],
  },
  {
    id: 6,
    name: "6-Jane Doe",
    comment: "6-This is top-level comment",
    replies: [],
  },
];

var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];

export const live_Count_Limit = 200; 

export function nthPrime(num) {
  var P = 0;

  function isPrime(x) {
      var isPrime= true;

      for (var d = 2; d <= Math.sqrt(x); d++) {
          if((x/d) % 1 === 0) {
              isPrime = false;
              break;
          }
      }

      return isPrime;
  }

  for (var i = 1; 0 < num; i++) {

      if(isPrime(i)) {
          P = i; num--;
      }

      // we can skip the even numbers
      if(3 <= i){
          i++;
      }

  }

  return P;
}

export function randomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function randomMessage() {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const symbols =
    "▶🥰😍😂😅🤣🥲😗🤢🥴🤢😮🤥😱😭😩😴😮‍💨🤕🥵🧠🗣️👤🧓🏻🧔🏾‍♀️🧟‍♀️🥎🛹🪃🪁🎱🪂🏹🤼‍♂️🗿🛩️🚂⛽🚏🏢⛵🚀🚌🚙🚕🚓🚲🛴🛵🦼🦽🛻🚞🛞🚨🚔🚖🎰🎮🎳🎯♟️🎲🪈🎼🎟️🪘🤹🏼‍♀️🏆🥇🥉🏅🎖️🎤🎧🎻🪕🎸🎺";
  const charactersLength = characters.length;
  const symbolsLength = symbols.length;
  let counter = 0;

  // Randomly determine the length of the message (up to 30 characters)
  const messageLength = Math.floor(Math.random() * 30);

  // Generate the random message
  while (counter < messageLength) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  // Append a random symbol from the given set of symbols
  const randomSymbol = symbols.charAt(
    Math.floor(Math.random() * symbolsLength)
  );
  result += randomSymbol;

  return result;
}
