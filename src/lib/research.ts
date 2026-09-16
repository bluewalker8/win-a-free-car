export const presenter = {
  name: "Jasper Walker",
  project: "Win a Free Car",
  role: "Performance Creative Specialist",
  assignment: "YouSet · Interview Challenge",
} as const;

export const questionOne = {
  number: "1",
  heading: "Research",
  prompt:
    "Before you start concepting, how would you go about conducting competitor research and gathering creative inspiration for a campaign like this? Walk us through your process. Where would you look, and what would you be looking for?",
  answer: [
    "I started in the category. Meta Ad Library and TikTok Creative Center, last 90 days: YouSet, Rates.ca, LowestRates, Sonnet, CAA, Intact. I was looking at the first frame, the offer, the comments, and whether anyone was using a prize.",
    "Nobody was. Everyone is running the same ad. Rate shock, save hundreds, compare 20+ insurers. The $30K car is the only new mechanic this quarter. Bury it under another comparison and we cannot tell if the prize actually moves qualified quotes.",
    "So I changed what I was looking at. I pulled car giveaway campaigns from brands that actually do this. The pattern is the same every time: type is huge, the visual is one object, nothing else is allowed to compete. That became the work. Blue and white sit side by side because colourway is a test, not a preference.",
  ],
} as const;

export const questionTwo = {
  number: "2",
  heading: "Creative concepts",
  prompt:
    "Come up with 2 different creative concepts for this campaign’s paid social ads (static or animated video).",
  a: {
    letter: "A",
    heading: "The concepts",
    prompt:
      "For each one, describe the concept: overall visual idea, content, and what makes it stop the scroll.",
  },
  b: {
    letter: "B",
    heading: "Meta copy",
    prompt: "Write ad copy for Meta Ads for each concept (primary text and headline).",
  },
  c: {
    letter: "C",
    heading: "What I would test first",
    prompt: "If you had to pick one concept to test first, which would you choose, and why?",
    pick: "Giant Type Takeover",
    answer:
      "I would ship Giant Type first. The hole in the category is the car. If huge type and a simple prize visual cannot hold three seconds in an insurance feed, the prize is not the lever and we should not scale it. Keys is cell B within 72 hours so Andromeda has two distinct visual worlds. If I can only ship one, I ship the one the research actually found.",
  },
} as const;

export const concepts = [
  {
    id: "giant-type",
    number: "01",
    name: "Giant Type Takeover",
    stop: "It does not look like insurance. It looks like a prize.",
    visual:
      "The line is the ad. WIN A FREE CAR fills the frame. The car comes out from behind the type, sits under it like a billboard, or drops in as breaking news. One object. Nothing else competes. This is the grammar I kept seeing in real car giveaway ads.",
    boardSlugs: ["01-giant-type", "05-billboard", "06-breaking-news"],
    filmId: "film-reel-reveal",
    filmIdB: undefined,
    meta: {
      primary:
        "Quote your car insurance. Enter to win a $30,000 car.\n\nCompare 20+ Canadian insurers on YouSet in 4 minutes. Every completed quote is an entry.\n\nYou should shop your rate anyway. The car is extra.",
      headline: "Win a free car. Quote in 4 minutes.",
    },
  },
  {
    id: "keys",
    number: "02",
    name: "The Keys",
    stop: "It looks like you already won.",
    visual:
      "One object, close. A key fob. A scratch ticket. A car in a bow. Instant win energy on a four minute quote. The prize is a thing in your hand, not a headline. Same offer, 20+ insurers, one entry, but the feed sees a giveaway, not a billboard.",
    boardSlugs: ["04-keys", "03-scratch-ticket", "02-bow"],
    filmId: "film-clock-dark",
    filmIdB: "film-clock-light",
    meta: {
      primary:
        "These could be yours.\n\nA four minute YouSet quote. 20+ Canadian insurers. Every completed quote is an entry to win a $30K car.",
      headline: "Quote. Enter. Win the keys.",
    },
  },
] as const;

export const questionThree = {
  number: "3",
  heading: "UGC",
  prompt:
    "Write a 30 second UGC script for this campaign, ready for a creator to film. Note the creator you’d cast and the tone.",
  creatorNote:
    "I got a real creator with over 180,000 TikTok followers to film this. I wrote the script. He sent it back.",
  followers: "180K",
  likes: "184K",
  clip: {
    src: "/ads/ugc/creator.mp4",
    poster: "/ads/ugc/creator.jpg",
  },
  hooks: [
    {
      title: "It went up again",
      hook: "Okay I need to talk about this because my car insurance just went up. Again.",
      piece:
        "I wasn’t even in an accident. They just added a couple hundred dollars and hoped I wouldn’t notice. So I did a YouSet quote. Four minutes. Twenty insurers. I actually saved. And now I’m in a draw for a car.",
    },
    {
      title: "That’s how bad the rate is",
      hook: "They’re giving away a car to get you to do a four minute quote.",
      piece:
        "Sit with that. A whole car. Because that’s how confident they are you’ll find a better price. Do the quote. Steal the savings. Take the entry.",
    },
  ],
  skits: [
    { title: "Mulroney’s broker", idea: "Dad has had the same broker since Mulroney. You run his plates. He owes you lunch. You’re both in the draw." },
    { title: "POV you opened it", idea: "You actually opened the renewal. The number is bigger. You are the same driver." },
    { title: "Hold music", idea: "Your broker put you on hold. YouSet put you in a draw. Same four minutes." },
    { title: "I don’t work here", idea: "No I don’t work for YouSet. I work for my savings account." },
  ],
} as const;

export const questionFour = {
  number: "4",
  heading: "Is it working?",
  prompt:
    "Once this campaign is live, what would you look at to know whether your creative is actually working? What would make you keep it running, tweak it, or kill it and try a new angle?",
  answer:
    "The first test is already in the boards. Blue and white. Same idea, different colour. Then we make more. Different objects, different hooks, different colourways. Ship a lot, read three second hold and qualified quotes, kill what does not work, make the next round. Colour is a cell. Volume is the plan.",
} as const;
