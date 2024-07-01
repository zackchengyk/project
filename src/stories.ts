export type StoryData = {
  name: string;
  classOrStaff: string;
  story: string;
  location: string;
  emojis: string;
  imageSrcs: string[];
};

export const stories: Record<string, StoryData> = {
  id1: {
    name: "name1",
    classOrStaff: "16S44",
    story:
      "According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyways. Because bees don't care what humans think is impossible.",
    location: "Hall",
    emojis: "🐝🐝🐝",
    imageSrcs: [],
  },
  id2: {
    name: "name2",
    classOrStaff: "staff",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    location: "Canteen",
    emojis: "🔥🔥🔥",
    imageSrcs: [],
  },
  id3: {
    name: "name3",
    classOrStaff: "staff",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    location: "Canteen",
    emojis: "🔥🔥🔥",
    imageSrcs: [],
  },
};

export const storyIds = Object.keys(stories);
