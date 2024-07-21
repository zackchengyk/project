export type StoryData = {
  name?: string;
  classOrStaff: string;
  text: string;
  location?: string;
  emojis?: string;
  imageSrcs?: string[];
};

export const stories: Record<string, StoryData> = {
  0: {
    name: "Kai Li",
    classOrStaff: "16A15",
    text: "I spent almost all my time in the art room - staying back late working on my paintings, sculptures, installations together with my classmates who also took H2 Art. Had many memories of laughing at each other's inside jokes, encouraging each other, and also serious moments of class criticisms and working till late in the night, or else we wouldn't be able to submit our final A level piece! I loved that we have a room to call our own, just for the 11 of us :\") We also used to have a stray cat that would also wander around our works — he was lovingly named Magritte and he brought us so much joy till he was adopted! Will always hold all this dear to my heart!",
    location: "Art Room",
    emojis: "🎨🥰🐈🤯",
  },
  1: {
    name: "Pearlyn",
    classOrStaff: "16A15",
    text: "I still remember the absolute grief i felt when the canteen's vending machine swallowed my money on a random night in 2016. After over 12 hours of lessons and floorball training, I sat on the floor in front of the machine for a long time while my team mates laughed LOL",
    location: "Canteen",
  },
  2: {
    name: "Jeslyn",
    classOrStaff: "16S47",
    text: "Singing the school song in the hallway outside of the gym before a match :')",
    location: "canteen",
  },
  // Placeholders
  stairs: {
    classOrStaff: "15S56",
    text: "There was this one spot above the stairs between the concourse and lab block where you could climb onto the roof. I remember my friends and I did that often during the period leading up to A levels.",
    location: "Concourse",
  },
  lorem: {
    classOrStaff: "Staff",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  brokenship1: {
    name: "Yerevan",
    classOrStaff: "Staff",
    text: "I am a 70-year-old woman from Yerevan, the capital of Armenia. I visited Zagreb back in 1967 and the city is very close to my heart. When I found out from a local newspaper that there exists the Museum of Broken Relationships, I was sad and happy at the same time. This is a postcard that was inserted through the slit of my door a long time ago by our neighbours' son. He had been in love with me for three years. Following the old Armenian tradition, his parents came to our home to ask for my hand. My parents refused saying that their son did not deserve me. They left angry and very disappointed. The same evening their son drove his car off a cliff...",
  },
  brokenship2: {
    name: "Leiden",
    classOrStaff: "Staff",
    text: "He gave Snoopy to me on my 17th birthday. We had fallen in love six months earlier, on October 5, 1981. Thirty years down the line, we had three sons, a house etc. He fell in love with another woman and he chose her... He broke my heart. Telling me that he hadn't really loved me in those 30 years. I just don't understand.",
  },
  brokenship3: {
    name: "Manila",
    classOrStaff: "Staff",
    text: "She gave it to me as a remembrance before I left. I never did get why she gave a magnifying glass nor did she ever explain what it meant. But she always said she felt “small” whenever she was around me.",
  },
};

export const storyIds = Object.keys(stories);
