const DIFFICULTIES = [
  {
    id: "easy",
    name: "Easy",
    subtitle: "Foundational SAT vocabulary"
  },
  {
    id: "moderate",
    name: "Moderate",
    subtitle: "Core SAT-level words"
  },
  {
    id: "difficult",
    name: "Difficult",
    subtitle: "Advanced, high-value words"
  }
];

const DECKS = [
  {
    id: "easy-1",
    difficulty: "easy",
    position: 1,
    name: "Everyday Language",
    wordCount: 25
  },
  {
    id: "easy-2",
    difficulty: "easy",
    position: 2,
    name: "Basic Description",
    wordCount: 25
  },
  {
    id: "easy-3",
    difficulty: "easy",
    position: 3,
    name: "Simple Actions",
    wordCount: 25
  },
  {
    id: "easy-4",
    difficulty: "easy",
    position: 4,
    name: "Common Qualities",
    wordCount: 25
  },
  {
    id: "easy-5",
    difficulty: "easy",
    position: 5,
    name: "Everyday Emotions",
    wordCount: 25
  },
  {
    id: "easy-6",
    difficulty: "easy",
    position: 6,
    name: "Basic Reasoning",
    wordCount: 25
  },
  {
    id: "easy-7",
    difficulty: "easy",
    position: 7,
    name: "Simple Comparisons",
    wordCount: 25
  },
  {
    id: "easy-8",
    difficulty: "easy",
    position: 8,
    name: "Foundational Review",
    wordCount: 25
  },
  {
    id: "moderate-1",
    difficulty: "moderate",
    position: 1,
    name: "Argument & Persuasion",
    wordCount: 25
  },
  {
    id: "moderate-2",
    difficulty: "moderate",
    position: 2,
    name: "Change & Instability",
    wordCount: 25
  },
  {
    id: "moderate-3",
    difficulty: "moderate",
    position: 3,
    name: "Character & Temperament",
    wordCount: 25
  },
  {
    id: "moderate-4",
    difficulty: "moderate",
    position: 4,
    name: "Analysis & Reasoning",
    wordCount: 25
  },
  {
    id: "moderate-5",
    difficulty: "moderate",
    position: 5,
    name: "Conflict & Criticism",
    wordCount: 25
  },
  {
    id: "moderate-6",
    difficulty: "moderate",
    position: 6,
    name: "Growth & Decline",
    wordCount: 25
  },
  {
    id: "moderate-7",
    difficulty: "moderate",
    position: 7,
    name: "Clarity & Confusion",
    wordCount: 25
  },
  {
    id: "moderate-8",
    difficulty: "moderate",
    position: 8,
    name: "Moderate Review",
    wordCount: 25
  },
  {
    id: "difficult-1",
    difficulty: "difficult",
    position: 1,
    name: "Rhetoric & Nuance",
    wordCount: 25
  },
  {
    id: "difficult-2",
    difficulty: "difficult",
    position: 2,
    name: "Abstraction & Philosophy",
    wordCount: 25
  },
  {
    id: "difficult-3",
    difficulty: "difficult",
    position: 3,
    name: "Scholarly Precision",
    wordCount: 25
  },
  {
    id: "difficult-4",
    difficulty: "difficult",
    position: 4,
    name: "Subtle Distinctions",
    wordCount: 25
  },
  {
    id: "difficult-5",
    difficulty: "difficult",
    position: 5,
    name: "Formal Critique",
    wordCount: 25
  },
  {
    id: "difficult-6",
    difficulty: "difficult",
    position: 6,
    name: "Complex Character",
    wordCount: 25
  },
  {
    id: "difficult-7",
    difficulty: "difficult",
    position: 7,
    name: "Density & Ambiguity",
    wordCount: 25
  },
  {
    id: "difficult-8",
    difficulty: "difficult",
    position: 8,
    name: "Advanced Review",
    wordCount: 25
  },
  {
    id: "easy-9",
    difficulty: "easy",
    position: 9,
    name: "Character & Conduct",
    wordCount: 25
  },
  {
    id: "easy-10",
    difficulty: "easy",
    position: 10,
    name: "Judgment & Assessment",
    wordCount: 25
  },
  {
    id: "easy-12",
    difficulty: "easy",
    position: 12,
    name: "Skill & Composure",
    wordCount: 25
  },
  {
    id: "easy-13",
    difficulty: "easy",
    position: 13,
    name: "Agreement & Courtesy",
    wordCount: 25
  },
  {
    id: "easy-14",
    difficulty: "easy",
    position: 14,
    name: "Process & Outcome",
    wordCount: 25
  },
  {
    id: "easy-15",
    difficulty: "easy",
    position: 15,
    name: "Setbacks & Resolve",
    wordCount: 25
  },
  {
    id: "easy-16",
    difficulty: "easy",
    position: 16,
    name: "Feeling & Expression",
    wordCount: 25
  },
  {
    id: "easy-18",
    difficulty: "easy",
    position: 18,
    name: "Honesty & Excess",
    wordCount: 25
  },
  {
    id: "easy-19",
    difficulty: "easy",
    position: 19,
    name: "Authority & Extremes",
    wordCount: 25
  },
  {
    id: "easy-20",
    difficulty: "easy",
    position: 20,
    name: "Tendency & Reputation",
    wordCount: 25
  },
  {
    id: "moderate-9",
    difficulty: "moderate",
    position: 9,
    name: "Concession & Pride",
    wordCount: 25
  },
  {
    id: "moderate-13",
    difficulty: "moderate",
    position: 13,
    name: "Habit & Hindrance",
    wordCount: 25
  },
  {
    id: "moderate-14",
    difficulty: "moderate",
    position: 14,
    name: "Merit & Malleability",
    wordCount: 25
  },
  {
    id: "moderate-15",
    difficulty: "moderate",
    position: 15,
    name: "Beginnings & Endings",
    wordCount: 25
  },
  {
    id: "moderate-17",
    difficulty: "moderate",
    position: 17,
    name: "Obtaining & Overturning",
    wordCount: 25
  },
  {
    id: "moderate-19",
    difficulty: "moderate",
    position: 19,
    name: "Steadiness & Sensation",
    wordCount: 25
  }
];

const WORDS = {
  "easy-1": [
    {
      id: "easy-1-1",
      word: "Candid",
      partOfSpeech: "adj.",
      definition: "Truthful and straightforward; frank",
      example: "Her candid feedback, while blunt, helped him improve the essay significantly."
    },
    {
      id: "easy-1-2",
      word: "Diligent",
      partOfSpeech: "adj.",
      definition: "Showing careful and persistent effort",
      example: "The diligent student reviewed her notes every night before the exam."
    },
    {
      id: "easy-1-3",
      word: "Reluctant",
      partOfSpeech: "adj.",
      definition: "Unwilling and hesitant",
      example: "He was reluctant to volunteer, unsure if he had the time to commit."
    },
    {
      id: "easy-1-4",
      word: "Genuine",
      partOfSpeech: "adj.",
      definition: "Truly what it is said to be; sincere",
      example: "Her genuine excitement about the project was obvious to everyone in the room."
    },
    {
      id: "easy-1-5",
      word: "Cautious",
      partOfSpeech: "adj.",
      definition: "Careful to avoid danger or mistakes",
      example: "The cautious driver slowed down well before reaching the icy bridge."
    },
    {
      id: "easy-1-6",
      word: "Ample",
      partOfSpeech: "adj.",
      definition: "More than enough; plentiful",
      example: "There was ample time to finish the test before the bell rang."
    },
    {
      id: "easy-1-7",
      word: "Brisk",
      partOfSpeech: "adj.",
      definition: "Quick and energetic",
      example: "They took a brisk walk around the block before breakfast."
    },
    {
      id: "easy-1-8",
      word: "Blunt",
      partOfSpeech: "adj.",
      definition: "Direct and plainspoken, sometimes to the point of rudeness",
      example: "His blunt comment about the presentation caught her off guard."
    },
    {
      id: "easy-1-9",
      word: "Vivid",
      partOfSpeech: "adj.",
      definition: "Producing powerful, clear images in the mind",
      example: "The author's vivid description made the reader feel present at the scene."
    },
    {
      id: "easy-1-10",
      word: "Steady",
      partOfSpeech: "adj.",
      definition: "Firmly fixed or consistent; not shaking or changing",
      example: "Her steady hands made her a natural at the delicate task."
    },
    {
      id: "easy-1-11",
      word: "Modest",
      partOfSpeech: "adj.",
      definition: "Not overly proud of one's abilities or achievements",
      example: "Despite winning the award, she remained modest about her accomplishment."
    },
    {
      id: "easy-1-12",
      word: "Vague",
      partOfSpeech: "adj.",
      definition: "Not clearly expressed or defined",
      example: "His vague answer left the committee with more questions than before."
    },
    {
      id: "easy-1-13",
      word: "Eager",
      partOfSpeech: "adj.",
      definition: "Enthusiastic and impatient to do something",
      example: "The eager freshmen arrived an hour before orientation even started."
    },
    {
      id: "easy-1-14",
      word: "Stubborn",
      partOfSpeech: "adj.",
      definition: "Refusing to change one's mind despite good reasons to do so",
      example: "Even after seeing the data, he remained stubborn about his original plan."
    },
    {
      id: "easy-1-15",
      word: "Humble",
      partOfSpeech: "adj.",
      definition: "Having a modest view of one's own importance",
      example: "Despite her success, she stayed humble and credited her whole team."
    },
    {
      id: "easy-1-16",
      word: "Tedious",
      partOfSpeech: "adj.",
      definition: "Long, slow, and boring",
      example: "Filing the paperwork was a tedious task that took most of the afternoon."
    },
    {
      id: "easy-1-17",
      word: "Curious",
      partOfSpeech: "adj.",
      definition: "Eager to know or learn something",
      example: "The curious toddler opened every cabinet in the kitchen."
    },
    {
      id: "easy-1-18",
      word: "Frequent",
      partOfSpeech: "adj.",
      definition: "Happening often",
      example: "Frequent breaks helped her stay focused during the long study session."
    },
    {
      id: "easy-1-19",
      word: "Awkward",
      partOfSpeech: "adj.",
      definition: "Causing embarrassment or a lack of ease",
      example: "There was an awkward silence after his joke fell flat."
    },
    {
      id: "easy-1-20",
      word: "Reliable",
      partOfSpeech: "adj.",
      definition: "Consistently good in quality; able to be trusted",
      example: "She was known as the most reliable member of the team."
    },
    {
      id: "easy-1-21",
      word: "Gradual",
      partOfSpeech: "adj.",
      definition: "Happening in small stages over time, rather than suddenly",
      example: "The gradual improvement in his grades reflected months of steady effort."
    },
    {
      id: "easy-1-22",
      word: "Content",
      partOfSpeech: "adj.",
      definition: "In a state of peaceful satisfaction",
      example: "After finishing the project, she felt content with her work."
    },
    {
      id: "easy-1-23",
      word: "Ordinary",
      partOfSpeech: "adj.",
      definition: "With no special or distinctive features; normal",
      example: "It was an ordinary Tuesday until the surprise announcement arrived."
    },
    {
      id: "easy-1-24",
      word: "Persistent",
      partOfSpeech: "adj.",
      definition: "Continuing firmly despite difficulty or opposition",
      example: "Her persistent practice eventually paid off at the recital."
    },
    {
      id: "easy-1-25",
      word: "Grateful",
      partOfSpeech: "adj.",
      definition: "Feeling or showing appreciation for something",
      example: "He was grateful for the extra help his tutor provided."
    }
  ],
  "easy-2": [
    {
      id: "easy-2-1",
      word: "Spacious",
      partOfSpeech: "adj.",
      definition: "Having a lot of room; large in area",
      example: "The spacious kitchen made it easy for the whole family to cook together."
    },
    {
      id: "easy-2-2",
      word: "Dense",
      partOfSpeech: "adj.",
      definition: "Closely packed together; thick",
      example: "The hikers slowed down as the trail entered a dense section of forest."
    },
    {
      id: "easy-2-3",
      word: "Murky",
      partOfSpeech: "adj.",
      definition: "Dark and unclear, especially due to dirt or cloudiness",
      example: "The pond water was too murky to see the fish swimming below."
    },
    {
      id: "easy-2-4",
      word: "Radiant",
      partOfSpeech: "adj.",
      definition: "Sending out light; glowing brightly",
      example: "The bride's radiant smile lit up every photo from the wedding."
    },
    {
      id: "easy-2-5",
      word: "Sturdy",
      partOfSpeech: "adj.",
      definition: "Strongly built; not easily damaged",
      example: "They chose a sturdy backpack that could survive years of daily use."
    },
    {
      id: "easy-2-6",
      word: "Fragile",
      partOfSpeech: "adj.",
      definition: "Easily broken or damaged",
      example: "She wrapped the fragile ornaments in bubble wrap before the move."
    },
    {
      id: "easy-2-7",
      word: "Immense",
      partOfSpeech: "adj.",
      definition: "Extremely large in size or degree",
      example: "The immense stadium could hold nearly ninety thousand fans."
    },
    {
      id: "easy-2-8",
      word: "Faint",
      partOfSpeech: "adj.",
      definition: "Barely perceptible; weak in strength",
      example: "A faint smell of smoke drifted through the open window."
    },
    {
      id: "easy-2-9",
      word: "Coarse",
      partOfSpeech: "adj.",
      definition: "Rough or harsh in texture",
      example: "The coarse sand scratched at their bare feet as they walked."
    },
    {
      id: "easy-2-10",
      word: "Sleek",
      partOfSpeech: "adj.",
      definition: "Smooth and glossy in appearance",
      example: "The new sports car had a sleek, aerodynamic design."
    },
    {
      id: "easy-2-11",
      word: "Drab",
      partOfSpeech: "adj.",
      definition: "Dull and lacking in color or interest",
      example: "The office walls were painted a drab shade of gray."
    },
    {
      id: "easy-2-12",
      word: "Lush",
      partOfSpeech: "adj.",
      definition: "Growing thickly and healthily; rich and abundant",
      example: "The lush garden was full of blooming flowers even in late summer."
    },
    {
      id: "easy-2-13",
      word: "Barren",
      partOfSpeech: "adj.",
      definition: "Too poor to support plant growth; empty",
      example: "Nothing grew in the barren field after years of drought."
    },
    {
      id: "easy-2-14",
      word: "Pristine",
      partOfSpeech: "adj.",
      definition: "In its original, spotless condition",
      example: "The pristine beach looked untouched by any visitors."
    },
    {
      id: "easy-2-15",
      word: "Rugged",
      partOfSpeech: "adj.",
      definition: "Having a rough, uneven surface; tough",
      example: "The rugged mountain trail required sturdy hiking boots."
    },
    {
      id: "easy-2-16",
      word: "Subtle",
      partOfSpeech: "adj.",
      definition: "So delicate it is hard to notice or describe",
      example: "There was a subtle change in her tone that only her sister noticed."
    },
    {
      id: "easy-2-17",
      word: "Stark",
      partOfSpeech: "adj.",
      definition: "Severe and bare in appearance; harshly clear",
      example: "The stark contrast between the two neighborhoods was impossible to ignore."
    },
    {
      id: "easy-2-18",
      word: "Muted",
      partOfSpeech: "adj.",
      definition: "Softened or reduced in strength; not bright",
      example: "The room was decorated in muted tones of gray and beige."
    },
    {
      id: "easy-2-19",
      word: "Crisp",
      partOfSpeech: "adj.",
      definition: "Pleasantly firm or fresh; sharply defined",
      example: "The crisp autumn air made the morning run feel refreshing."
    },
    {
      id: "easy-2-20",
      word: "Hollow",
      partOfSpeech: "adj.",
      definition: "Having an empty space inside",
      example: "The old tree trunk was hollow enough for a raccoon to live in."
    },
    {
      id: "easy-2-21",
      word: "Jagged",
      partOfSpeech: "adj.",
      definition: "Having a rough, sharply uneven edge",
      example: "The jagged rocks along the coastline made climbing dangerous."
    },
    {
      id: "easy-2-22",
      word: "Glossy",
      partOfSpeech: "adj.",
      definition: "Smooth and shiny",
      example: "The magazine was printed on thick, glossy paper."
    },
    {
      id: "easy-2-23",
      word: "Bleak",
      partOfSpeech: "adj.",
      definition: "Lacking hope or cheer; cold and empty",
      example: "The forecast painted a bleak picture for the struggling farm town."
    },
    {
      id: "easy-2-24",
      word: "Quaint",
      partOfSpeech: "adj.",
      definition: "Attractively unusual or old-fashioned",
      example: "They stopped in a quaint little village with cobblestone streets."
    },
    {
      id: "easy-2-25",
      word: "Vast",
      partOfSpeech: "adj.",
      definition: "Extremely large in area or extent",
      example: "The vast desert stretched out farther than they could see."
    }
  ],
  "easy-3": [
    {
      id: "easy-3-1",
      word: "Assemble",
      partOfSpeech: "v.",
      definition: "To gather together or put parts together",
      example: "It took an hour to assemble the new bookshelf using the instructions."
    },
    {
      id: "easy-3-2",
      word: "Discard",
      partOfSpeech: "v.",
      definition: "To throw away or get rid of something",
      example: "She decided to discard the old notes once the semester ended."
    },
    {
      id: "easy-3-3",
      word: "Hesitate",
      partOfSpeech: "v.",
      definition: "To pause before doing or saying something, out of uncertainty",
      example: "He didn't hesitate to raise his hand when the teacher asked for volunteers."
    },
    {
      id: "easy-3-4",
      word: "Retrieve",
      partOfSpeech: "v.",
      definition: "To get or bring something back",
      example: "The dog ran across the yard to retrieve the ball."
    },
    {
      id: "easy-3-5",
      word: "Examine",
      partOfSpeech: "v.",
      definition: "To inspect something carefully",
      example: "The doctor took time to examine the X-ray before making a diagnosis."
    },
    {
      id: "easy-3-6",
      word: "Wander",
      partOfSpeech: "v.",
      definition: "To move around without a fixed destination",
      example: "They spent the afternoon wandering through the old part of the city."
    },
    {
      id: "easy-3-7",
      word: "Conceal",
      partOfSpeech: "v.",
      definition: "To hide something from view",
      example: "She tried to conceal her nervousness before walking on stage."
    },
    {
      id: "easy-3-8",
      word: "Pursue",
      partOfSpeech: "v.",
      definition: "To follow or chase after something",
      example: "He decided to pursue a career in engineering after the internship."
    },
    {
      id: "easy-3-9",
      word: "Abandon",
      partOfSpeech: "v.",
      definition: "To leave behind completely; to give up on",
      example: "The crew had to abandon the sinking ship and board the lifeboats."
    },
    {
      id: "easy-3-10",
      word: "Restore",
      partOfSpeech: "v.",
      definition: "To bring something back to its original condition",
      example: "It took months to restore the old farmhouse to its former glory."
    },
    {
      id: "easy-3-11",
      word: "Adjust",
      partOfSpeech: "v.",
      definition: "To change something slightly to make it fit or work better",
      example: "She had to adjust the recipe since she was missing an ingredient."
    },
    {
      id: "easy-3-12",
      word: "Dwell",
      partOfSpeech: "v.",
      definition: "To live in a place; to focus on something for a long time",
      example: "He tends to dwell on small mistakes long after everyone else has forgotten them."
    },
    {
      id: "easy-3-13",
      word: "Linger",
      partOfSpeech: "v.",
      definition: "To stay somewhere longer than expected",
      example: "The smell of fresh bread lingered in the kitchen all morning."
    },
    {
      id: "easy-3-14",
      word: "Ignite",
      partOfSpeech: "v.",
      definition: "To set something on fire; to spark into action",
      example: "The spark from the campfire was enough to ignite the dry brush."
    },
    {
      id: "easy-3-15",
      word: "Submit",
      partOfSpeech: "v.",
      definition: "To hand in or present something for consideration",
      example: "Students must submit their essays before the Friday deadline."
    },
    {
      id: "easy-3-16",
      word: "Withdraw",
      partOfSpeech: "v.",
      definition: "To remove or pull back from a place or activity",
      example: "He chose to withdraw from the race after twisting his ankle."
    },
    {
      id: "easy-3-17",
      word: "Resolve",
      partOfSpeech: "v.",
      definition: "To find a solution to a problem; to decide firmly",
      example: "The two neighbors met to resolve their disagreement over the fence."
    },
    {
      id: "easy-3-18",
      word: "Endure",
      partOfSpeech: "v.",
      definition: "To suffer through something difficult without giving up",
      example: "The team had to endure hours of rain to finish the tournament."
    },
    {
      id: "easy-3-19",
      word: "Confront",
      partOfSpeech: "v.",
      definition: "To face a difficult situation or person directly",
      example: "She finally decided to confront her roommate about the messy apartment."
    },
    {
      id: "easy-3-20",
      word: "Propose",
      partOfSpeech: "v.",
      definition: "To suggest an idea or plan for consideration",
      example: "The committee will propose a new schedule at tomorrow's meeting."
    },
    {
      id: "easy-3-21",
      word: "Sustain",
      partOfSpeech: "v.",
      definition: "To keep something going over time; to support",
      example: "Regular rainfall helped sustain the crops through the summer."
    },
    {
      id: "easy-3-22",
      word: "Venture",
      partOfSpeech: "v.",
      definition: "To risk going somewhere or doing something uncertain",
      example: "Few climbers venture up the mountain during the winter months."
    },
    {
      id: "easy-3-23",
      word: "Secure",
      partOfSpeech: "v.",
      definition: "To make something safe or firmly fixed",
      example: "They worked quickly to secure the tent before the storm arrived."
    },
    {
      id: "easy-3-24",
      word: "Transform",
      partOfSpeech: "v.",
      definition: "To change completely in form or character",
      example: "A fresh coat of paint can transform an entire room."
    },
    {
      id: "easy-3-25",
      word: "Recite",
      partOfSpeech: "v.",
      definition: "To say something aloud from memory",
      example: "Each student had to recite a short poem in front of the class."
    }
  ],
  "easy-4": [
    {
      id: "easy-4-1",
      word: "Honest",
      partOfSpeech: "adj.",
      definition: "Truthful and free from deceit",
      example: "An honest mistake is much easier to forgive than a lie."
    },
    {
      id: "easy-4-2",
      word: "Generous",
      partOfSpeech: "adj.",
      definition: "Willing to give more than what is expected",
      example: "The generous donor covered the cost of the entire field trip."
    },
    {
      id: "easy-4-3",
      word: "Courteous",
      partOfSpeech: "adj.",
      definition: "Polite and considerate toward others",
      example: "The courteous waiter made sure every guest felt welcome."
    },
    {
      id: "easy-4-4",
      word: "Punctual",
      partOfSpeech: "adj.",
      definition: "Arriving or acting exactly at the expected time",
      example: "Being punctual for interviews shows respect for the interviewer's time."
    },
    {
      id: "easy-4-5",
      word: "Thorough",
      partOfSpeech: "adj.",
      definition: "Complete in every detail; careful and exhaustive",
      example: "Her thorough review caught several errors the first draft had missed."
    },
    {
      id: "easy-4-6",
      word: "Resourceful",
      partOfSpeech: "adj.",
      definition: "Good at finding quick, clever ways to solve problems",
      example: "The resourceful campers built a shelter out of fallen branches."
    },
    {
      id: "easy-4-7",
      word: "Tactful",
      partOfSpeech: "adj.",
      definition: "Careful not to offend when dealing with a sensitive topic",
      example: "She gave tactful feedback that didn't discourage the young writer."
    },
    {
      id: "easy-4-8",
      word: "Versatile",
      partOfSpeech: "adj.",
      definition: "Able to adapt to many different functions or activities",
      example: "A versatile player, he could handle almost any position on the field."
    },
    {
      id: "easy-4-9",
      word: "Adaptable",
      partOfSpeech: "adj.",
      definition: "Able to adjust easily to new conditions",
      example: "The adaptable software works on nearly any device."
    },
    {
      id: "easy-4-10",
      word: "Dependable",
      partOfSpeech: "adj.",
      definition: "Reliable and trustworthy",
      example: "Her dependable car had never once broken down on a road trip."
    },
    {
      id: "easy-4-11",
      word: "Considerate",
      partOfSpeech: "adj.",
      definition: "Careful not to cause inconvenience or hurt to others",
      example: "It was considerate of him to save a seat for his late-arriving friend."
    },
    {
      id: "easy-4-12",
      word: "Sincere",
      partOfSpeech: "adj.",
      definition: "Genuine and free from pretense",
      example: "His sincere apology helped repair their friendship."
    },
    {
      id: "easy-4-13",
      word: "Gracious",
      partOfSpeech: "adj.",
      definition: "Courteous, kind, and pleasant, especially to those of lower status",
      example: "The gracious host made sure every guest had something to eat."
    },
    {
      id: "easy-4-14",
      word: "Thoughtful",
      partOfSpeech: "adj.",
      definition: "Showing careful consideration or kindness toward others",
      example: "It was a thoughtful gift, chosen with her exact interests in mind."
    },
    {
      id: "easy-4-15",
      word: "Attentive",
      partOfSpeech: "adj.",
      definition: "Paying close attention; observant of others' needs",
      example: "The attentive nurse checked on her patients every hour."
    },
    {
      id: "easy-4-16",
      word: "Capable",
      partOfSpeech: "adj.",
      definition: "Having the ability or skill to do something well",
      example: "She proved to be a capable leader during the crisis."
    },
    {
      id: "easy-4-17",
      word: "Competent",
      partOfSpeech: "adj.",
      definition: "Having enough skill or knowledge to do something successfully",
      example: "A competent mechanic diagnosed the problem within minutes."
    },
    {
      id: "easy-4-18",
      word: "Decisive",
      partOfSpeech: "adj.",
      definition: "Able to make decisions quickly and confidently",
      example: "A decisive coach doesn't waste time second-guessing a call."
    },
    {
      id: "easy-4-19",
      word: "Patient",
      partOfSpeech: "adj.",
      definition: "Able to wait calmly without becoming annoyed",
      example: "The patient teacher explained the concept three different ways."
    },
    {
      id: "easy-4-20",
      word: "Loyal",
      partOfSpeech: "adj.",
      definition: "Faithful and devoted to someone or something",
      example: "Her loyal customers kept coming back even when prices rose."
    },
    {
      id: "easy-4-21",
      word: "Respectful",
      partOfSpeech: "adj.",
      definition: "Showing regard or consideration for others",
      example: "He remained respectful even when he strongly disagreed."
    },
    {
      id: "easy-4-22",
      word: "Sociable",
      partOfSpeech: "adj.",
      definition: "Friendly and enjoying the company of others",
      example: "The sociable new student made friends within her first week."
    },
    {
      id: "easy-4-23",
      word: "Energetic",
      partOfSpeech: "adj.",
      definition: "Full of energy and enthusiasm",
      example: "The energetic puppy raced around the yard for hours."
    },
    {
      id: "easy-4-24",
      word: "Disciplined",
      partOfSpeech: "adj.",
      definition: "Showing controlled, orderly behavior in pursuit of a goal",
      example: "Her disciplined training schedule paid off at the championship."
    },
    {
      id: "easy-4-25",
      word: "Cheerful",
      partOfSpeech: "adj.",
      definition: "Noticeably happy and optimistic",
      example: "His cheerful attitude made even long shifts feel manageable."
    }
  ],
  "easy-5": [
    {
      id: "easy-5-1",
      word: "Anxious",
      partOfSpeech: "adj.",
      definition: "Feeling worried or nervous about something uncertain",
      example: "She felt anxious waiting for her test results to come back."
    },
    {
      id: "easy-5-2",
      word: "Elated",
      partOfSpeech: "adj.",
      definition: "Extremely happy and excited",
      example: "He was elated when he found out he'd made the varsity team."
    },
    {
      id: "easy-5-3",
      word: "Weary",
      partOfSpeech: "adj.",
      definition: "Very tired, physically or mentally",
      example: "By midnight, the weary travelers were ready to collapse into bed."
    },
    {
      id: "easy-5-4",
      word: "Gloomy",
      partOfSpeech: "adj.",
      definition: "Dark and depressing; without hope or cheer",
      example: "The gloomy weather matched her mood after losing the match."
    },
    {
      id: "easy-5-5",
      word: "Restless",
      partOfSpeech: "adj.",
      definition: "Unable to stay still or relax",
      example: "The restless children kept fidgeting during the long car ride."
    },
    {
      id: "easy-5-6",
      word: "Nostalgic",
      partOfSpeech: "adj.",
      definition: "Feeling a sentimental longing for the past",
      example: "Looking through old photos always makes her nostalgic for high school."
    },
    {
      id: "easy-5-7",
      word: "Envious",
      partOfSpeech: "adj.",
      definition: "Feeling jealous of someone else's advantages or possessions",
      example: "He was envious of his friend's new bike but tried not to show it."
    },
    {
      id: "easy-5-8",
      word: "Remorseful",
      partOfSpeech: "adj.",
      definition: "Feeling deep regret for a wrong committed",
      example: "The remorseful driver apologized repeatedly after the fender bender."
    },
    {
      id: "easy-5-9",
      word: "Apprehensive",
      partOfSpeech: "adj.",
      definition: "Anxious about something that may happen",
      example: "She felt apprehensive about starting a new school in the fall."
    },
    {
      id: "easy-5-10",
      word: "Jubilant",
      partOfSpeech: "adj.",
      definition: "Full of joy, especially after a success",
      example: "The jubilant crowd cheered as the winning goal went in."
    },
    {
      id: "easy-5-11",
      word: "Irritable",
      partOfSpeech: "adj.",
      definition: "Easily annoyed or angered",
      example: "He gets irritable when he hasn't had enough sleep."
    },
    {
      id: "easy-5-12",
      word: "Wistful",
      partOfSpeech: "adj.",
      definition: "Having a vague sense of longing or regret",
      example: "She gave a wistful smile as she packed up her childhood bedroom."
    },
    {
      id: "easy-5-13",
      word: "Indifferent",
      partOfSpeech: "adj.",
      definition: "Having no particular interest or concern",
      example: "He seemed indifferent to the outcome of the vote."
    },
    {
      id: "easy-5-14",
      word: "Dismayed",
      partOfSpeech: "adj.",
      definition: "Filled with concern or disappointment",
      example: "The coach was dismayed by the team's lack of effort."
    },
    {
      id: "easy-5-15",
      word: "Relieved",
      partOfSpeech: "adj.",
      definition: "Feeling reassurance after anxiety or distress has passed",
      example: "She was relieved to hear that the flight had only been delayed."
    },
    {
      id: "easy-5-16",
      word: "Uneasy",
      partOfSpeech: "adj.",
      definition: "Feeling anxious or uncomfortable",
      example: "An uneasy silence fell over the room after the announcement."
    },
    {
      id: "easy-5-17",
      word: "Hopeful",
      partOfSpeech: "adj.",
      definition: "Feeling optimistic that something good will happen",
      example: "The hopeful applicants waited outside the office all morning."
    },
    {
      id: "easy-5-18",
      word: "Resentful",
      partOfSpeech: "adj.",
      definition: "Feeling bitter about being treated unfairly",
      example: "He grew resentful after being passed over for the promotion twice."
    },
    {
      id: "easy-5-19",
      word: "Embarrassed",
      partOfSpeech: "adj.",
      definition: "Feeling awkward or self-conscious after a mistake",
      example: "She was embarrassed when she tripped in front of the whole class."
    },
    {
      id: "easy-5-20",
      word: "Astonished",
      partOfSpeech: "adj.",
      definition: "Filled with great surprise or wonder",
      example: "The audience was astonished by the magician's final trick."
    },
    {
      id: "easy-5-21",
      word: "Delighted",
      partOfSpeech: "adj.",
      definition: "Feeling great pleasure",
      example: "Grandma was delighted to see all of her grandchildren at once."
    },
    {
      id: "easy-5-22",
      word: "Frustrated",
      partOfSpeech: "adj.",
      definition: "Feeling upset because of an inability to change a situation",
      example: "He was frustrated when the printer jammed for the third time."
    },
    {
      id: "easy-5-23",
      word: "Melancholy",
      partOfSpeech: "adj.",
      definition: "Feeling or expressing a thoughtful sadness",
      example: "A melancholy tune played softly in the background of the film."
    },
    {
      id: "easy-5-24",
      word: "Dejected",
      partOfSpeech: "adj.",
      definition: "Sad and discouraged, especially after a defeat",
      example: "The dejected team walked off the field without saying a word."
    },
    {
      id: "easy-5-25",
      word: "Longing",
      partOfSpeech: "adj.",
      definition: "Feeling a strong, persistent desire or yearning",
      example: "She cast a longing glance at the empty swing set as they drove away."
    }
  ],
  "easy-6": [
    {
      id: "easy-6-1",
      word: "Assume",
      partOfSpeech: "v.",
      definition: "To accept something as true without proof",
      example: "Don't assume the store is closed just because the lights are off."
    },
    {
      id: "easy-6-2",
      word: "Conclude",
      partOfSpeech: "v.",
      definition: "To reach a decision or judgment after considering the facts",
      example: "After reviewing the evidence, the jury concluded he was innocent."
    },
    {
      id: "easy-6-3",
      word: "Justify",
      partOfSpeech: "v.",
      definition: "To show or prove that something is reasonable",
      example: "She had to justify the extra spending to her manager."
    },
    {
      id: "easy-6-4",
      word: "Verify",
      partOfSpeech: "v.",
      definition: "To confirm that something is true or accurate",
      example: "The lab ran a second test to verify the results."
    },
    {
      id: "easy-6-5",
      word: "Predict",
      partOfSpeech: "v.",
      definition: "To say what will happen in the future based on evidence",
      example: "Meteorologists predict a mild winter this year."
    },
    {
      id: "easy-6-6",
      word: "Infer",
      partOfSpeech: "v.",
      definition: "To work out something based on evidence and reasoning",
      example: "From her tone, I could infer that she wasn't happy about the change."
    },
    {
      id: "easy-6-7",
      word: "Analyze",
      partOfSpeech: "v.",
      definition: "To examine something in detail to understand it better",
      example: "The team spent weeks analyzing the survey data."
    },
    {
      id: "easy-6-8",
      word: "Evaluate",
      partOfSpeech: "v.",
      definition: "To judge the value or quality of something",
      example: "Teachers evaluate each essay using the same rubric."
    },
    {
      id: "easy-6-9",
      word: "Clarify",
      partOfSpeech: "v.",
      definition: "To make something clearer or easier to understand",
      example: "Could you clarify what you mean by that last comment?"
    },
    {
      id: "easy-6-10",
      word: "Summarize",
      partOfSpeech: "v.",
      definition: "To give a brief statement of the main points",
      example: "She summarized the entire chapter in just three sentences."
    },
    {
      id: "easy-6-11",
      word: "Generalize",
      partOfSpeech: "v.",
      definition: "To form a broad conclusion from specific examples",
      example: "It's risky to generalize about a whole group from just one experience."
    },
    {
      id: "easy-6-12",
      word: "Contradict",
      partOfSpeech: "v.",
      definition: "To say something that is the opposite of what was previously said",
      example: "His alibi seemed to contradict what the witness had reported."
    },
    {
      id: "easy-6-13",
      word: "Illustrate",
      partOfSpeech: "v.",
      definition: "To explain or make clear by using examples",
      example: "The teacher used a simple diagram to illustrate the water cycle."
    },
    {
      id: "easy-6-14",
      word: "Interpret",
      partOfSpeech: "v.",
      definition: "To explain the meaning of something",
      example: "Readers often interpret the poem's ending differently."
    },
    {
      id: "easy-6-15",
      word: "Deduce",
      partOfSpeech: "v.",
      definition: "To reach a conclusion through logical reasoning",
      example: "The detective was able to deduce the culprit from a single clue."
    },
    {
      id: "easy-6-16",
      word: "Logical",
      partOfSpeech: "adj.",
      definition: "Following clear, sound reasoning",
      example: "Her logical explanation convinced even the skeptics in the room."
    },
    {
      id: "easy-6-17",
      word: "Rational",
      partOfSpeech: "adj.",
      definition: "Based on reason rather than emotion",
      example: "It's hard to have a rational discussion when everyone is upset."
    },
    {
      id: "easy-6-18",
      word: "Relevant",
      partOfSpeech: "adj.",
      definition: "Closely connected to the matter at hand",
      example: "Only include details that are relevant to the main argument."
    },
    {
      id: "easy-6-19",
      word: "Obvious",
      partOfSpeech: "adj.",
      definition: "Easy to see or understand; not requiring explanation",
      example: "It was obvious from her smile that she'd gotten the job."
    },
    {
      id: "easy-6-20",
      word: "Evident",
      partOfSpeech: "adj.",
      definition: "Clearly visible or understood; obvious",
      example: "His improvement was evident after just a few weeks of practice."
    },
    {
      id: "easy-6-21",
      word: "Coherent",
      partOfSpeech: "adj.",
      definition: "Logical and consistent; easy to follow",
      example: "She gave a coherent account of everything that happened that night."
    },
    {
      id: "easy-6-22",
      word: "Consistent",
      partOfSpeech: "adj.",
      definition: "Always acting or behaving in the same way",
      example: "His consistent effort throughout the season earned him the MVP award."
    },
    {
      id: "easy-6-23",
      word: "Sound",
      partOfSpeech: "adj.",
      definition: "Based on valid reasoning; solid and reliable",
      example: "The lawyer built a sound argument based on three key pieces of evidence."
    },
    {
      id: "easy-6-24",
      word: "Presume",
      partOfSpeech: "v.",
      definition: "To suppose something is true without direct proof",
      example: "I presume you've already read the assigned chapter."
    },
    {
      id: "easy-6-25",
      word: "Reasoning",
      partOfSpeech: "n.",
      definition: "The process of thinking through something in a logical way",
      example: "Her reasoning behind the decision made sense once she explained it."
    }
  ],
  "easy-7": [
    {
      id: "easy-7-1",
      word: "Similar",
      partOfSpeech: "adj.",
      definition: "Having a resemblance without being identical",
      example: "The two designs were similar but not exactly the same."
    },
    {
      id: "easy-7-2",
      word: "Identical",
      partOfSpeech: "adj.",
      definition: "Exactly the same in every detail",
      example: "The twins wore identical outfits to school on picture day."
    },
    {
      id: "easy-7-3",
      word: "Distinct",
      partOfSpeech: "adj.",
      definition: "Clearly different or separate from something else",
      example: "The two flavors were distinct enough to tell apart blindfolded."
    },
    {
      id: "easy-7-4",
      word: "Equivalent",
      partOfSpeech: "adj.",
      definition: "Equal in value, meaning, or effect",
      example: "A kilometer is roughly equivalent to 0.62 miles."
    },
    {
      id: "easy-7-5",
      word: "Contrary",
      partOfSpeech: "adj.",
      definition: "Opposite in nature or direction",
      example: "Contrary to what most people expect, the exam was easier than the practice tests."
    },
    {
      id: "easy-7-6",
      word: "Comparable",
      partOfSpeech: "adj.",
      definition: "Similar enough to be compared",
      example: "The two apartments were comparable in size and price."
    },
    {
      id: "easy-7-7",
      word: "Parallel",
      partOfSpeech: "adj.",
      definition: "Similar and occurring or existing at the same time",
      example: "The two plots of the novel run parallel until the final chapter."
    },
    {
      id: "easy-7-8",
      word: "Resemble",
      partOfSpeech: "v.",
      definition: "To look like or be similar to something",
      example: "The younger brother didn't resemble his siblings at all."
    },
    {
      id: "easy-7-9",
      word: "Differ",
      partOfSpeech: "v.",
      definition: "To be unlike or different from something else",
      example: "Their opinions on the movie differed sharply."
    },
    {
      id: "easy-7-10",
      word: "Opposite",
      partOfSpeech: "adj.",
      definition: "Completely different; positioned on the other side",
      example: "The two candidates held opposite views on nearly every issue."
    },
    {
      id: "easy-7-11",
      word: "Uniform",
      partOfSpeech: "adj.",
      definition: "The same throughout; not varying",
      example: "The bricks were cut to a uniform size for the wall."
    },
    {
      id: "easy-7-12",
      word: "Diverse",
      partOfSpeech: "adj.",
      definition: "Showing a lot of variety; made up of different elements",
      example: "The menu offered a diverse selection of dishes from around the world."
    },
    {
      id: "easy-7-13",
      word: "Akin",
      partOfSpeech: "adj.",
      definition: "Similar in character or quality",
      example: "Her excitement was akin to that of a child on the first day of summer."
    },
    {
      id: "easy-7-14",
      word: "Alike",
      partOfSpeech: "adj.",
      definition: "Having close resemblance",
      example: "The sisters looked so alike that teachers often confused them."
    },
    {
      id: "easy-7-15",
      word: "Varied",
      partOfSpeech: "adj.",
      definition: "Showing a range of different types or qualities",
      example: "The class had a varied set of opinions about the ending."
    },
    {
      id: "easy-7-16",
      word: "Matching",
      partOfSpeech: "adj.",
      definition: "The same as or corresponding to something else",
      example: "The two roommates bought matching couches for their apartment."
    },
    {
      id: "easy-7-17",
      word: "Unequal",
      partOfSpeech: "adj.",
      definition: "Not the same in size, amount, or level",
      example: "The teams were unequal in size, which made the game unfair."
    },
    {
      id: "easy-7-18",
      word: "Superior",
      partOfSpeech: "adj.",
      definition: "Higher in quality, rank, or status",
      example: "Critics agreed the sequel was superior to the original film."
    },
    {
      id: "easy-7-19",
      word: "Inferior",
      partOfSpeech: "adj.",
      definition: "Lower in quality, rank, or status",
      example: "The cheaper material turned out to be inferior to the original."
    },
    {
      id: "easy-7-20",
      word: "Equal",
      partOfSpeech: "adj.",
      definition: "The same in amount, size, or value",
      example: "Both runners crossed the finish line at exactly equal times."
    },
    {
      id: "easy-7-21",
      word: "Unlike",
      partOfSpeech: "prep.",
      definition: "Different from; not like",
      example: "Unlike her brother, she preferred quiet nights at home."
    },
    {
      id: "easy-7-22",
      word: "Exceed",
      partOfSpeech: "v.",
      definition: "To go beyond a certain limit or amount",
      example: "Ticket sales exceeded expectations within the first hour."
    },
    {
      id: "easy-7-23",
      word: "Surpass",
      partOfSpeech: "v.",
      definition: "To do better than or go beyond someone or something",
      example: "The rookie's rookie-year stats surpassed those of most veterans."
    },
    {
      id: "easy-7-24",
      word: "Mirror",
      partOfSpeech: "v.",
      definition: "To closely resemble or reflect something",
      example: "Her career choices seemed to mirror those of her older sister."
    },
    {
      id: "easy-7-25",
      word: "Rival",
      partOfSpeech: "adj.",
      definition: "Competing with another for the same objective",
      example: "The two rival schools faced off in the championship game."
    }
  ],
  "easy-8": [
    {
      id: "easy-8-1",
      word: "Timid",
      partOfSpeech: "adj.",
      definition: "Showing a lack of courage or confidence",
      example: "The timid new intern rarely spoke up during meetings."
    },
    {
      id: "easy-8-2",
      word: "Confident",
      partOfSpeech: "adj.",
      definition: "Feeling sure of oneself and one's abilities",
      example: "She walked into the interview feeling calm and confident."
    },
    {
      id: "easy-8-3",
      word: "Fatigue",
      partOfSpeech: "n.",
      definition: "Extreme tiredness from physical or mental effort",
      example: "By the end of the shift, fatigue had set into every muscle."
    },
    {
      id: "easy-8-4",
      word: "Relentless",
      partOfSpeech: "adj.",
      definition: "Not stopping or slowing down; persistent",
      example: "The relentless rain continued for nearly three straight days."
    },
    {
      id: "easy-8-5",
      word: "Abrupt",
      partOfSpeech: "adj.",
      definition: "Sudden and unexpected",
      example: "The meeting came to an abrupt end when the fire alarm went off."
    },
    {
      id: "easy-8-6",
      word: "Lengthy",
      partOfSpeech: "adj.",
      definition: "Taking a long time; extended",
      example: "After a lengthy discussion, the board finally reached an agreement."
    },
    {
      id: "easy-8-7",
      word: "Concise",
      partOfSpeech: "adj.",
      definition: "Giving information clearly in few words",
      example: "Her concise summary covered everything in under a paragraph."
    },
    {
      id: "easy-8-8",
      word: "Flexible",
      partOfSpeech: "adj.",
      definition: "Able to change or adapt easily",
      example: "His flexible schedule let him pick up his kids every afternoon."
    },
    {
      id: "easy-8-9",
      word: "Rigid",
      partOfSpeech: "adj.",
      definition: "Unable to bend or change; strict",
      example: "The company's rigid dress code left little room for personal style."
    },
    {
      id: "easy-8-10",
      word: "Gentle",
      partOfSpeech: "adj.",
      definition: "Mild and kind in manner",
      example: "She used a gentle tone to calm the crying toddler."
    },
    {
      id: "easy-8-11",
      word: "Harsh",
      partOfSpeech: "adj.",
      definition: "Severe or cruel; unpleasantly rough",
      example: "The coach's harsh criticism left several players discouraged."
    },
    {
      id: "easy-8-12",
      word: "Mild",
      partOfSpeech: "adj.",
      definition: "Not severe or harsh; gentle in effect",
      example: "They enjoyed a mild winter with barely any snow."
    },
    {
      id: "easy-8-13",
      word: "Severe",
      partOfSpeech: "adj.",
      definition: "Very great or intense; harsh in manner",
      example: "The storm caused severe damage to homes along the coast."
    },
    {
      id: "easy-8-14",
      word: "Minor",
      partOfSpeech: "adj.",
      definition: "Small in size, importance, or seriousness",
      example: "It was only a minor injury, so she kept playing."
    },
    {
      id: "easy-8-15",
      word: "Major",
      partOfSpeech: "adj.",
      definition: "Great in importance, size, or seriousness",
      example: "Losing the account was a major setback for the company."
    },
    {
      id: "easy-8-16",
      word: "Essential",
      partOfSpeech: "adj.",
      definition: "Absolutely necessary; extremely important",
      example: "Clean water is essential for every living thing."
    },
    {
      id: "easy-8-17",
      word: "Optional",
      partOfSpeech: "adj.",
      definition: "Available as a choice but not required",
      example: "Attendance at the review session is optional this week."
    },
    {
      id: "easy-8-18",
      word: "Crucial",
      partOfSpeech: "adj.",
      definition: "Extremely important; necessary for success",
      example: "Getting enough sleep is crucial before a big exam."
    },
    {
      id: "easy-8-19",
      word: "Vital",
      partOfSpeech: "adj.",
      definition: "Absolutely necessary for life or success",
      example: "Trust is a vital part of any strong friendship."
    },
    {
      id: "easy-8-20",
      word: "Typical",
      partOfSpeech: "adj.",
      definition: "Showing the usual characteristics of a type",
      example: "It was a typical Monday morning, full of emails and coffee."
    },
    {
      id: "easy-8-21",
      word: "Unusual",
      partOfSpeech: "adj.",
      definition: "Not habitually or commonly occurring",
      example: "It was unusual for him to arrive late to practice."
    },
    {
      id: "easy-8-22",
      word: "Common",
      partOfSpeech: "adj.",
      definition: "Occurring frequently; shared by many",
      example: "Colds are especially common during the winter months."
    },
    {
      id: "easy-8-23",
      word: "Rare",
      partOfSpeech: "adj.",
      definition: "Not occurring often; uncommon",
      example: "A rare solar eclipse drew crowds to the observatory."
    },
    {
      id: "easy-8-24",
      word: "Hasty",
      partOfSpeech: "adj.",
      definition: "Done with excessive speed; rushed",
      example: "He regretted the hasty decision to quit without a backup plan."
    },
    {
      id: "easy-8-25",
      word: "Careless",
      partOfSpeech: "adj.",
      definition: "Not giving enough attention or thought; negligent",
      example: "A careless mistake on the form delayed the whole application."
    }
  ],
  "moderate-1": [
    {
      id: "moderate-1-1",
      word: "Persuasive",
      partOfSpeech: "adj.",
      definition: "Able to convince someone to believe or do something",
      example: "Her persuasive speech convinced even the skeptics to donate."
    },
    {
      id: "moderate-1-2",
      word: "Rhetoric",
      partOfSpeech: "n.",
      definition: "The art of effective or persuasive speaking or writing",
      example: "The senator's rhetoric was powerful, even if his policies were vague."
    },
    {
      id: "moderate-1-3",
      word: "Assert",
      partOfSpeech: "v.",
      definition: "To state a fact or belief confidently and forcefully",
      example: "The scientist asserted that the results could not be explained by chance."
    },
    {
      id: "moderate-1-4",
      word: "Refute",
      partOfSpeech: "v.",
      definition: "To prove that a statement or theory is wrong",
      example: "The new data refuted the theory that had stood for decades."
    },
    {
      id: "moderate-1-5",
      word: "Concede",
      partOfSpeech: "v.",
      definition: "To admit that something is true after first denying it",
      example: "She finally conceded that his plan was better than her own."
    },
    {
      id: "moderate-1-6",
      word: "Advocate",
      partOfSpeech: "v.",
      definition: "To publicly support or recommend a particular cause",
      example: "The group continues to advocate for cleaner public parks."
    },
    {
      id: "moderate-1-7",
      word: "Contend",
      partOfSpeech: "v.",
      definition: "To assert something as a position in an argument",
      example: "Critics contend that the policy will hurt small businesses."
    },
    {
      id: "moderate-1-8",
      word: "Articulate",
      partOfSpeech: "adj.",
      definition: "Able to express ideas clearly and effectively",
      example: "The articulate young debater impressed even the judges."
    },
    {
      id: "moderate-1-9",
      word: "Compelling",
      partOfSpeech: "adj.",
      definition: "Evoking interest or belief in a powerful, convincing way",
      example: "The lawyer presented a compelling case backed by hard evidence."
    },
    {
      id: "moderate-1-10",
      word: "Credible",
      partOfSpeech: "adj.",
      definition: "Able to be believed; trustworthy",
      example: "The witness gave a credible account that matched the security footage."
    },
    {
      id: "moderate-1-11",
      word: "Skeptical",
      partOfSpeech: "adj.",
      definition: "Not easily convinced; having doubts",
      example: "She remained skeptical of the salesman's claims about the product."
    },
    {
      id: "moderate-1-12",
      word: "Bias",
      partOfSpeech: "n.",
      definition: "A tendency to favor one side unfairly",
      example: "The editor removed language that showed bias toward one candidate."
    },
    {
      id: "moderate-1-13",
      word: "Objective",
      partOfSpeech: "adj.",
      definition: "Based on facts rather than personal feelings",
      example: "The report aimed to give an objective account of the incident."
    },
    {
      id: "moderate-1-14",
      word: "Subjective",
      partOfSpeech: "adj.",
      definition: "Based on personal opinions or feelings rather than facts",
      example: "Choosing a favorite song is entirely subjective."
    },
    {
      id: "moderate-1-15",
      word: "Substantiate",
      partOfSpeech: "v.",
      definition: "To provide evidence to support a claim",
      example: "The company failed to substantiate its advertising claims."
    },
    {
      id: "moderate-1-16",
      word: "Corroborate",
      partOfSpeech: "v.",
      definition: "To confirm or support a statement with additional evidence",
      example: "Two independent witnesses corroborated her version of events."
    },
    {
      id: "moderate-1-17",
      word: "Undermine",
      partOfSpeech: "v.",
      definition: "To weaken or damage something gradually",
      example: "Constant interruptions began to undermine his confidence during the talk."
    },
    {
      id: "moderate-1-18",
      word: "Bolster",
      partOfSpeech: "v.",
      definition: "To support or strengthen something",
      example: "New sales figures helped bolster the company's argument for expansion."
    },
    {
      id: "moderate-1-19",
      word: "Discredit",
      partOfSpeech: "v.",
      definition: "To damage the reputation or credibility of someone or something",
      example: "The leaked emails were used to discredit the campaign."
    },
    {
      id: "moderate-1-20",
      word: "Rebut",
      partOfSpeech: "v.",
      definition: "To argue against a claim by presenting an opposing case",
      example: "The defense attorney rebutted every point the prosecutor made."
    },
    {
      id: "moderate-1-21",
      word: "Counter",
      partOfSpeech: "v.",
      definition: "To respond to an argument with an opposing one",
      example: "She countered his objection with a statistic from the report."
    },
    {
      id: "moderate-1-22",
      word: "Endorse",
      partOfSpeech: "v.",
      definition: "To publicly declare support for something",
      example: "The magazine chose to endorse the smaller candidate this election."
    },
    {
      id: "moderate-1-23",
      word: "Denounce",
      partOfSpeech: "v.",
      definition: "To publicly criticize or condemn something strongly",
      example: "Officials denounced the decision as reckless and unfair."
    },
    {
      id: "moderate-1-24",
      word: "Dubious",
      partOfSpeech: "adj.",
      definition: "Doubtful or uncertain in nature",
      example: "The claim seemed dubious, so the editor asked for a second source."
    },
    {
      id: "moderate-1-25",
      word: "Unequivocal",
      partOfSpeech: "adj.",
      definition: "Leaving no doubt; completely clear",
      example: "The board gave an unequivocal yes to the new proposal."
    }
  ],
  "moderate-2": [
    {
      id: "moderate-2-1",
      word: "Volatile",
      partOfSpeech: "adj.",
      definition: "Likely to change suddenly and unpredictably",
      example: "The volatile stock market made investors nervous all week."
    },
    {
      id: "moderate-2-2",
      word: "Fluctuate",
      partOfSpeech: "v.",
      definition: "To rise and fall irregularly in number or amount",
      example: "Gas prices tend to fluctuate throughout the summer."
    },
    {
      id: "moderate-2-3",
      word: "Transient",
      partOfSpeech: "adj.",
      definition: "Lasting only for a short time; temporary",
      example: "The comfort she felt after the win was transient, gone by morning."
    },
    {
      id: "moderate-2-4",
      word: "Erratic",
      partOfSpeech: "adj.",
      definition: "Not consistent or regular in pattern or behavior",
      example: "His erratic driving worried the other passengers in the car."
    },
    {
      id: "moderate-2-5",
      word: "Unpredictable",
      partOfSpeech: "adj.",
      definition: "Impossible to predict with any certainty",
      example: "Mountain weather can be wildly unpredictable in the spring."
    },
    {
      id: "moderate-2-6",
      word: "Evolve",
      partOfSpeech: "v.",
      definition: "To develop gradually over time",
      example: "Her writing style evolved significantly over the course of the semester."
    },
    {
      id: "moderate-2-7",
      word: "Disrupt",
      partOfSpeech: "v.",
      definition: "To interrupt the normal course of something",
      example: "A single power outage disrupted the entire factory's production line."
    },
    {
      id: "moderate-2-8",
      word: "Upheaval",
      partOfSpeech: "n.",
      definition: "A sudden, violent change or disturbance",
      example: "The company went through major upheaval after the merger."
    },
    {
      id: "moderate-2-9",
      word: "Turbulent",
      partOfSpeech: "adj.",
      definition: "Full of conflict, confusion, or sudden change",
      example: "The nation endured a turbulent decade of political change."
    },
    {
      id: "moderate-2-10",
      word: "Wane",
      partOfSpeech: "v.",
      definition: "To decrease gradually in size, strength, or importance",
      example: "Public interest in the trend began to wane after a few months."
    },
    {
      id: "moderate-2-11",
      word: "Dwindle",
      partOfSpeech: "v.",
      definition: "To become gradually smaller or fewer",
      example: "Their savings began to dwindle after months without steady income."
    },
    {
      id: "moderate-2-12",
      word: "Mutate",
      partOfSpeech: "v.",
      definition: "To change in form or nature",
      example: "The virus mutated quickly, making the vaccine less effective."
    },
    {
      id: "moderate-2-13",
      word: "Shift",
      partOfSpeech: "v.",
      definition: "To change position, direction, or emphasis",
      example: "Public opinion began to shift after the documentary aired."
    },
    {
      id: "moderate-2-14",
      word: "Transition",
      partOfSpeech: "n.",
      definition: "The process of changing from one state to another",
      example: "The transition from high school to college can be difficult at first."
    },
    {
      id: "moderate-2-15",
      word: "Unstable",
      partOfSpeech: "adj.",
      definition: "Likely to change or fail; not firmly fixed",
      example: "The old bridge felt unstable under the weight of the truck."
    },
    {
      id: "moderate-2-16",
      word: "Precarious",
      partOfSpeech: "adj.",
      definition: "Not securely held or in position; dangerously uncertain",
      example: "The company was in a precarious financial position after the lawsuit."
    },
    {
      id: "moderate-2-17",
      word: "Capricious",
      partOfSpeech: "adj.",
      definition: "Given to sudden, unpredictable changes in mood or behavior",
      example: "The capricious weather ruined their plans for an outdoor wedding."
    },
    {
      id: "moderate-2-18",
      word: "Sporadic",
      partOfSpeech: "adj.",
      definition: "Occurring at irregular intervals; scattered",
      example: "Sporadic gunfire could be heard from the distant hills."
    },
    {
      id: "moderate-2-19",
      word: "Tumultuous",
      partOfSpeech: "adj.",
      definition: "Marked by loud confusion, disorder, or upheaval",
      example: "Their tumultuous relationship was full of dramatic breakups and reunions."
    },
    {
      id: "moderate-2-20",
      word: "Revolutionize",
      partOfSpeech: "v.",
      definition: "To change something radically or fundamentally",
      example: "The invention revolutionized the way people communicated."
    },
    {
      id: "moderate-2-21",
      word: "Metamorphosis",
      partOfSpeech: "n.",
      definition: "A complete change in form or nature",
      example: "The neighborhood underwent a slow metamorphosis over ten years."
    },
    {
      id: "moderate-2-22",
      word: "Flux",
      partOfSpeech: "n.",
      definition: "Continuous change or movement",
      example: "The company's plans were still in a state of flux."
    },
    {
      id: "moderate-2-23",
      word: "Drastic",
      partOfSpeech: "adj.",
      definition: "Extreme and severe in effect",
      example: "The team made drastic changes after their disappointing season."
    },
    {
      id: "moderate-2-24",
      word: "Radical",
      partOfSpeech: "adj.",
      definition: "Extreme in nature; representing a fundamental change",
      example: "The new CEO proposed a radical shift in company strategy."
    },
    {
      id: "moderate-2-25",
      word: "Fickle",
      partOfSpeech: "adj.",
      definition: "Changing frequently, especially in loyalty or affection",
      example: "Fans can be fickle, cheering one week and booing the next."
    }
  ],
  "moderate-3": [
    {
      id: "moderate-3-1",
      word: "Ambivalent",
      partOfSpeech: "adj.",
      definition: "Having mixed or contradictory feelings about something",
      example: "She felt ambivalent about the move, excited yet nervous at once."
    },
    {
      id: "moderate-3-2",
      word: "Temperament",
      partOfSpeech: "n.",
      definition: "A person's nature, especially as it affects their behavior",
      example: "His calm temperament made him well suited for emergency work."
    },
    {
      id: "moderate-3-3",
      word: "Amiable",
      partOfSpeech: "adj.",
      definition: "Friendly and pleasant in nature",
      example: "The amiable shop owner greeted every customer by name."
    },
    {
      id: "moderate-3-4",
      word: "Austere",
      partOfSpeech: "adj.",
      definition: "Severe or strict in manner; without luxury",
      example: "The monks lived an austere life with almost no possessions."
    },
    {
      id: "moderate-3-5",
      word: "Congenial",
      partOfSpeech: "adj.",
      definition: "Pleasant, friendly, and suited to one's needs",
      example: "The office had a congenial atmosphere where everyone helped each other."
    },
    {
      id: "moderate-3-6",
      word: "Irascible",
      partOfSpeech: "adj.",
      definition: "Easily provoked to anger",
      example: "The irascible chef was known for shouting at anyone who slowed him down."
    },
    {
      id: "moderate-3-7",
      word: "Stoic",
      partOfSpeech: "adj.",
      definition: "Enduring hardship without showing feelings or complaint",
      example: "He remained stoic through the surgery, never once complaining of pain."
    },
    {
      id: "moderate-3-8",
      word: "Benevolent",
      partOfSpeech: "adj.",
      definition: "Kind and generous; well-meaning",
      example: "The benevolent donor asked that her gift remain anonymous."
    },
    {
      id: "moderate-3-9",
      word: "Malicious",
      partOfSpeech: "adj.",
      definition: "Intending to do harm; spiteful",
      example: "The malicious rumor spread quickly through the small town."
    },
    {
      id: "moderate-3-10",
      word: "Candor",
      partOfSpeech: "n.",
      definition: "The quality of being open and honest in expression",
      example: "Her candor about her mistakes made her easy to trust."
    },
    {
      id: "moderate-3-11",
      word: "Pragmatic",
      partOfSpeech: "adj.",
      definition: "Dealing with things sensibly and practically",
      example: "A pragmatic leader focuses on solutions rather than blame."
    },
    {
      id: "moderate-3-12",
      word: "Idealistic",
      partOfSpeech: "adj.",
      definition: "Believing in high standards or perfect outcomes, often unrealistically",
      example: "His idealistic view of the plan ignored several practical problems."
    },
    {
      id: "moderate-3-13",
      word: "Cynical",
      partOfSpeech: "adj.",
      definition: "Distrustful of others' motives; believing people act out of self-interest",
      example: "Years of disappointment made him cynical about campaign promises."
    },
    {
      id: "moderate-3-14",
      word: "Altruistic",
      partOfSpeech: "adj.",
      definition: "Showing selfless concern for the well-being of others",
      example: "Her altruistic volunteer work took up most of her weekends."
    },
    {
      id: "moderate-3-15",
      word: "Arrogant",
      partOfSpeech: "adj.",
      definition: "Having an exaggerated sense of one's own importance",
      example: "His arrogant tone made it hard for teammates to offer suggestions."
    },
    {
      id: "moderate-3-16",
      word: "Complacent",
      partOfSpeech: "adj.",
      definition: "Showing smug self-satisfaction; unaware of danger",
      example: "The champions grew complacent and lost in the first round the next year."
    },
    {
      id: "moderate-3-17",
      word: "Meticulous",
      partOfSpeech: "adj.",
      definition: "Showing great attention to detail; extremely careful",
      example: "The meticulous editor caught every typo in the manuscript."
    },
    {
      id: "moderate-3-18",
      word: "Prudent",
      partOfSpeech: "adj.",
      definition: "Acting with care and thought for the future",
      example: "It was prudent of them to save part of every paycheck."
    },
    {
      id: "moderate-3-19",
      word: "Obstinate",
      partOfSpeech: "adj.",
      definition: "Stubbornly refusing to change one's opinion",
      example: "The obstinate committee member refused to consider any compromise."
    },
    {
      id: "moderate-3-20",
      word: "Tenacious",
      partOfSpeech: "adj.",
      definition: "Holding firmly to a purpose; persistent",
      example: "Her tenacious pursuit of the story eventually uncovered the truth."
    },
    {
      id: "moderate-3-21",
      word: "Gregarious",
      partOfSpeech: "adj.",
      definition: "Fond of company; sociable",
      example: "The gregarious host made sure no guest was left standing alone."
    },
    {
      id: "moderate-3-22",
      word: "Reticent",
      partOfSpeech: "adj.",
      definition: "Reserved and reluctant to share thoughts or feelings",
      example: "He remained reticent about his plans until everything was finalized."
    },
    {
      id: "moderate-3-23",
      word: "Aloof",
      partOfSpeech: "adj.",
      definition: "Distant, cool, and uninvolved with others",
      example: "She seemed aloof at the party, staying near the exit the whole night."
    },
    {
      id: "moderate-3-24",
      word: "Docile",
      partOfSpeech: "adj.",
      definition: "Easily led or managed; submissive",
      example: "The docile old dog let the toddlers climb all over him."
    },
    {
      id: "moderate-3-25",
      word: "Temperate",
      partOfSpeech: "adj.",
      definition: "Showing moderation and self-restraint",
      example: "Their temperate approach to the debate kept things civil."
    }
  ],
  "moderate-4": [
    {
      id: "moderate-4-1",
      word: "Analytical",
      partOfSpeech: "adj.",
      definition: "Using logical reasoning to examine something carefully",
      example: "Her analytical mind made her perfect for the research position."
    },
    {
      id: "moderate-4-2",
      word: "Empirical",
      partOfSpeech: "adj.",
      definition: "Based on observation or experiment rather than theory alone",
      example: "The study relies on empirical data collected over five years."
    },
    {
      id: "moderate-4-3",
      word: "Hypothesis",
      partOfSpeech: "n.",
      definition: "A proposed explanation made as a starting point for testing",
      example: "The scientist tested her hypothesis with a series of controlled trials."
    },
    {
      id: "moderate-4-4",
      word: "Synthesize",
      partOfSpeech: "v.",
      definition: "To combine separate ideas or elements into a coherent whole",
      example: "The essay synthesizes research from three different fields."
    },
    {
      id: "moderate-4-5",
      word: "Correlation",
      partOfSpeech: "n.",
      definition: "A mutual relationship between two or more things",
      example: "There's a strong correlation between sleep and academic performance."
    },
    {
      id: "moderate-4-6",
      word: "Causation",
      partOfSpeech: "n.",
      definition: "The act of causing something to happen",
      example: "Researchers were careful not to confuse correlation with causation."
    },
    {
      id: "moderate-4-7",
      word: "Methodology",
      partOfSpeech: "n.",
      definition: "A system of methods used in a particular field of study",
      example: "The report explains the methodology behind the survey results."
    },
    {
      id: "moderate-4-8",
      word: "Systematic",
      partOfSpeech: "adj.",
      definition: "Done according to a fixed plan or method",
      example: "She took a systematic approach, testing one variable at a time."
    },
    {
      id: "moderate-4-9",
      word: "Comprehensive",
      partOfSpeech: "adj.",
      definition: "Complete and including everything necessary",
      example: "The textbook offers a comprehensive overview of the entire subject."
    },
    {
      id: "moderate-4-10",
      word: "Ambiguous",
      partOfSpeech: "adj.",
      definition: "Open to more than one interpretation; unclear",
      example: "The instructions were ambiguous, so half the class misunderstood them."
    },
    {
      id: "moderate-4-11",
      word: "Nuance",
      partOfSpeech: "n.",
      definition: "A subtle difference in meaning, expression, or tone",
      example: "The translator worked hard to preserve the nuance of the original text."
    },
    {
      id: "moderate-4-12",
      word: "Discern",
      partOfSpeech: "v.",
      definition: "To perceive or recognize something clearly",
      example: "It was hard to discern any real difference between the two proposals."
    },
    {
      id: "moderate-4-13",
      word: "Scrutinize",
      partOfSpeech: "v.",
      definition: "To examine something closely and critically",
      example: "Auditors scrutinized every line of the company's budget."
    },
    {
      id: "moderate-4-14",
      word: "Rationale",
      partOfSpeech: "n.",
      definition: "A set of reasons behind a decision or belief",
      example: "The board explained its rationale for the new policy in a memo."
    },
    {
      id: "moderate-4-15",
      word: "Premise",
      partOfSpeech: "n.",
      definition: "A statement assumed to be true as a basis for an argument",
      example: "His entire argument rests on a premise that hasn't been proven."
    },
    {
      id: "moderate-4-16",
      word: "Inference",
      partOfSpeech: "n.",
      definition: "A conclusion reached through reasoning from evidence",
      example: "The detective's inference turned out to be exactly right."
    },
    {
      id: "moderate-4-17",
      word: "Conjecture",
      partOfSpeech: "n.",
      definition: "An opinion formed without complete evidence",
      example: "Without more data, the theory remains pure conjecture."
    },
    {
      id: "moderate-4-18",
      word: "Paradox",
      partOfSpeech: "n.",
      definition: "A statement that seems contradictory but may reveal a hidden truth",
      example: "It's a paradox that saving money often requires spending some first."
    },
    {
      id: "moderate-4-19",
      word: "Anomaly",
      partOfSpeech: "n.",
      definition: "Something that deviates from what is standard or expected",
      example: "The unusually cold summer was treated as a statistical anomaly."
    },
    {
      id: "moderate-4-20",
      word: "Hypothetical",
      partOfSpeech: "adj.",
      definition: "Based on a suggested idea rather than known fact",
      example: "Let's consider a hypothetical scenario where funding is unlimited."
    },
    {
      id: "moderate-4-21",
      word: "Qualitative",
      partOfSpeech: "adj.",
      definition: "Relating to quality or characteristics rather than numbers",
      example: "The interviews provided rich qualitative data about user experience."
    },
    {
      id: "moderate-4-22",
      word: "Quantitative",
      partOfSpeech: "adj.",
      definition: "Relating to amounts that can be measured or counted",
      example: "The quantitative results showed a clear increase in test scores."
    },
    {
      id: "moderate-4-23",
      word: "Extrapolate",
      partOfSpeech: "v.",
      definition: "To estimate beyond known data by extending a known trend",
      example: "Economists extrapolate future growth from current market trends."
    },
    {
      id: "moderate-4-24",
      word: "Feasible",
      partOfSpeech: "adj.",
      definition: "Possible to do easily or practically",
      example: "The proposed timeline seemed feasible given the available resources."
    },
    {
      id: "moderate-4-25",
      word: "Substantive",
      partOfSpeech: "adj.",
      definition: "Having real importance or value; solid in content",
      example: "The two sides finally made substantive progress after weeks of talks."
    }
  ],
  "moderate-5": [
    {
      id: "moderate-5-1",
      word: "Dispute",
      partOfSpeech: "n.",
      definition: "A disagreement or argument",
      example: "The border dispute between the two towns lasted for decades."
    },
    {
      id: "moderate-5-2",
      word: "Rebuke",
      partOfSpeech: "v.",
      definition: "To criticize someone sharply for a fault or mistake",
      example: "The coach rebuked the player for arguing with the referee."
    },
    {
      id: "moderate-5-3",
      word: "Admonish",
      partOfSpeech: "v.",
      definition: "To warn or scold someone firmly",
      example: "The librarian admonished the students for talking too loudly."
    },
    {
      id: "moderate-5-4",
      word: "Chastise",
      partOfSpeech: "v.",
      definition: "To scold or criticize someone severely",
      example: "He was chastised by his supervisor for missing the deadline."
    },
    {
      id: "moderate-5-5",
      word: "Castigate",
      partOfSpeech: "v.",
      definition: "To criticize someone harshly",
      example: "The editorial castigated the mayor for ignoring the crisis."
    },
    {
      id: "moderate-5-6",
      word: "Reprimand",
      partOfSpeech: "v.",
      definition: "To formally express disapproval of someone's actions",
      example: "She was reprimanded for leaving the register unattended."
    },
    {
      id: "moderate-5-7",
      word: "Condemn",
      partOfSpeech: "v.",
      definition: "To express strong disapproval of something",
      example: "World leaders quickly condemned the attack on the embassy."
    },
    {
      id: "moderate-5-8",
      word: "Disparage",
      partOfSpeech: "v.",
      definition: "To speak of someone or something in a negative way",
      example: "He tends to disparage any idea that isn't originally his own."
    },
    {
      id: "moderate-5-9",
      word: "Deride",
      partOfSpeech: "v.",
      definition: "To express contempt for someone or something through mockery",
      example: "Critics derided the film for its predictable plot."
    },
    {
      id: "moderate-5-10",
      word: "Mock",
      partOfSpeech: "v.",
      definition: "To make fun of someone or something in a scornful way",
      example: "The other kids used to mock his accent, but he never let it bother him."
    },
    {
      id: "moderate-5-11",
      word: "Taunt",
      partOfSpeech: "v.",
      definition: "To provoke or tease someone in an insulting way",
      example: "Fans taunted the visiting team from the moment they walked out."
    },
    {
      id: "moderate-5-12",
      word: "Antagonize",
      partOfSpeech: "v.",
      definition: "To cause someone to become hostile",
      example: "He seemed to enjoy antagonizing his younger brother at every dinner."
    },
    {
      id: "moderate-5-13",
      word: "Hostile",
      partOfSpeech: "adj.",
      definition: "Unfriendly and aggressive",
      example: "The hostile crowd booed every decision the referee made."
    },
    {
      id: "moderate-5-14",
      word: "Contentious",
      partOfSpeech: "adj.",
      definition: "Causing or likely to cause an argument",
      example: "Immigration remained the most contentious topic of the debate."
    },
    {
      id: "moderate-5-15",
      word: "Belligerent",
      partOfSpeech: "adj.",
      definition: "Hostile and aggressive; ready to fight",
      example: "The belligerent customer refused to lower his voice."
    },
    {
      id: "moderate-5-16",
      word: "Adversary",
      partOfSpeech: "n.",
      definition: "An opponent or enemy",
      example: "The two companies had been fierce adversaries for over a decade."
    },
    {
      id: "moderate-5-17",
      word: "Confrontation",
      partOfSpeech: "n.",
      definition: "A hostile or argumentative meeting or encounter",
      example: "Tensions finally boiled over into a confrontation in the parking lot."
    },
    {
      id: "moderate-5-18",
      word: "Friction",
      partOfSpeech: "n.",
      definition: "Conflict or disagreement between people",
      example: "There was noticeable friction between the two department heads."
    },
    {
      id: "moderate-5-19",
      word: "Discord",
      partOfSpeech: "n.",
      definition: "Disagreement or conflict between people",
      example: "The inheritance created years of discord within the family."
    },
    {
      id: "moderate-5-20",
      word: "Strife",
      partOfSpeech: "n.",
      definition: "Angry or bitter disagreement over fundamental issues",
      example: "The country was torn apart by years of internal strife."
    },
    {
      id: "moderate-5-21",
      word: "Altercation",
      partOfSpeech: "n.",
      definition: "A noisy argument or disagreement",
      example: "The altercation between the two drivers drew a small crowd."
    },
    {
      id: "moderate-5-22",
      word: "Skirmish",
      partOfSpeech: "n.",
      definition: "A minor fight or clash",
      example: "A minor skirmish broke out between fans after the game."
    },
    {
      id: "moderate-5-23",
      word: "Clash",
      partOfSpeech: "v.",
      definition: "To come into conflict; to disagree sharply",
      example: "The two candidates clashed repeatedly during the debate."
    },
    {
      id: "moderate-5-24",
      word: "Feud",
      partOfSpeech: "n.",
      definition: "A prolonged and bitter dispute or quarrel",
      example: "The feud between the two families lasted three generations."
    },
    {
      id: "moderate-5-25",
      word: "Vindictive",
      partOfSpeech: "adj.",
      definition: "Having a strong desire for revenge",
      example: "His vindictive response only made the situation worse."
    }
  ],
  "moderate-6": [
    {
      id: "moderate-6-1",
      word: "Flourish",
      partOfSpeech: "v.",
      definition: "To grow or develop successfully; to thrive",
      example: "Small businesses flourished after the new highway brought more traffic."
    },
    {
      id: "moderate-6-2",
      word: "Thrive",
      partOfSpeech: "v.",
      definition: "To grow or develop well; to prosper",
      example: "The seedlings thrived once they were moved into direct sunlight."
    },
    {
      id: "moderate-6-3",
      word: "Prosper",
      partOfSpeech: "v.",
      definition: "To succeed or flourish, especially financially",
      example: "The town began to prosper after the factory reopened."
    },
    {
      id: "moderate-6-4",
      word: "Expand",
      partOfSpeech: "v.",
      definition: "To become or make larger in size or scope",
      example: "The company plans to expand into three new markets next year."
    },
    {
      id: "moderate-6-5",
      word: "Proliferate",
      partOfSpeech: "v.",
      definition: "To increase rapidly in number",
      example: "Food trucks began to proliferate across the downtown area."
    },
    {
      id: "moderate-6-6",
      word: "Escalate",
      partOfSpeech: "v.",
      definition: "To become or make more intense or serious",
      example: "The disagreement quickly escalated into a full-blown argument."
    },
    {
      id: "moderate-6-7",
      word: "Diminish",
      partOfSpeech: "v.",
      definition: "To become or make smaller or less",
      example: "His influence within the company began to diminish after the merger."
    },
    {
      id: "moderate-6-8",
      word: "Deteriorate",
      partOfSpeech: "v.",
      definition: "To become progressively worse",
      example: "The old bridge continued to deteriorate without proper maintenance."
    },
    {
      id: "moderate-6-9",
      word: "Erode",
      partOfSpeech: "v.",
      definition: "To gradually wear away or destroy",
      example: "Years of criticism slowly eroded her confidence."
    },
    {
      id: "moderate-6-10",
      word: "Wither",
      partOfSpeech: "v.",
      definition: "To become dry and shriveled; to weaken and decline",
      example: "The flowers withered quickly once they were cut from the stem."
    },
    {
      id: "moderate-6-11",
      word: "Atrophy",
      partOfSpeech: "v.",
      definition: "To waste away or decline from disuse",
      example: "Muscles begin to atrophy after just a few weeks without exercise."
    },
    {
      id: "moderate-6-12",
      word: "Stagnate",
      partOfSpeech: "v.",
      definition: "To fail to develop, grow, or change",
      example: "Sales began to stagnate once the initial excitement wore off."
    },
    {
      id: "moderate-6-13",
      word: "Decay",
      partOfSpeech: "v.",
      definition: "To rot or decompose; to gradually decline",
      example: "The abandoned building had begun to decay after years of neglect."
    },
    {
      id: "moderate-6-14",
      word: "Augment",
      partOfSpeech: "v.",
      definition: "To make something greater by adding to it",
      example: "The company hired freelancers to augment its small design team."
    },
    {
      id: "moderate-6-15",
      word: "Amplify",
      partOfSpeech: "v.",
      definition: "To increase the strength or intensity of something",
      example: "Social media can amplify even the smallest rumor within hours."
    },
    {
      id: "moderate-6-16",
      word: "Cultivate",
      partOfSpeech: "v.",
      definition: "To develop or improve something through effort",
      example: "Good teachers work hard to cultivate curiosity in their students."
    },
    {
      id: "moderate-6-17",
      word: "Foster",
      partOfSpeech: "v.",
      definition: "To encourage the growth or development of something",
      example: "The program was designed to foster creativity among young artists."
    },
    {
      id: "moderate-6-18",
      word: "Nurture",
      partOfSpeech: "v.",
      definition: "To care for and encourage the growth of someone or something",
      example: "She spent years nurturing the small nonprofit into a national organization."
    },
    {
      id: "moderate-6-19",
      word: "Accelerate",
      partOfSpeech: "v.",
      definition: "To increase in speed or rate",
      example: "New funding helped accelerate the pace of the research."
    },
    {
      id: "moderate-6-20",
      word: "Regress",
      partOfSpeech: "v.",
      definition: "To return to a former, less developed state",
      example: "Without practice over the summer, his skills began to regress."
    },
    {
      id: "moderate-6-21",
      word: "Plateau",
      partOfSpeech: "v.",
      definition: "To reach a stable level after a period of growth",
      example: "Her progress plateaued after the first few months of training."
    },
    {
      id: "moderate-6-22",
      word: "Exacerbate",
      partOfSpeech: "v.",
      definition: "To make a problem or situation worse",
      example: "Ignoring the leak only exacerbated the water damage."
    },
    {
      id: "moderate-6-23",
      word: "Mitigate",
      partOfSpeech: "v.",
      definition: "To make something less severe or serious",
      example: "New regulations were passed to mitigate the effects of flooding."
    },
    {
      id: "moderate-6-24",
      word: "Curtail",
      partOfSpeech: "v.",
      definition: "To reduce or restrict something",
      example: "The city voted to curtail spending on non-essential projects."
    },
    {
      id: "moderate-6-25",
      word: "Attenuate",
      partOfSpeech: "v.",
      definition: "To reduce the force, effect, or value of something",
      example: "Thick curtains helped attenuate the noise from the street below."
    }
  ],
  "moderate-7": [
    {
      id: "moderate-7-1",
      word: "Lucid",
      partOfSpeech: "adj.",
      definition: "Expressed clearly; easy to understand",
      example: "Her lucid explanation cleared up the confusion in minutes."
    },
    {
      id: "moderate-7-2",
      word: "Transparent",
      partOfSpeech: "adj.",
      definition: "Easy to see through or understand; open and honest",
      example: "The company promised to be transparent about the layoffs."
    },
    {
      id: "moderate-7-3",
      word: "Explicit",
      partOfSpeech: "adj.",
      definition: "Stated clearly and in detail, leaving no room for confusion",
      example: "The instructions were explicit about which forms were required."
    },
    {
      id: "moderate-7-4",
      word: "Cryptic",
      partOfSpeech: "adj.",
      definition: "Having a hidden or ambiguous meaning; mysterious",
      example: "He left a cryptic note that no one could quite figure out."
    },
    {
      id: "moderate-7-5",
      word: "Enigmatic",
      partOfSpeech: "adj.",
      definition: "Difficult to interpret or understand; mysterious",
      example: "The artist remained enigmatic, rarely explaining his own work."
    },
    {
      id: "moderate-7-6",
      word: "Perplexing",
      partOfSpeech: "adj.",
      definition: "Confusing and difficult to understand",
      example: "The results of the experiment were genuinely perplexing to the team."
    },
    {
      id: "moderate-7-7",
      word: "Baffling",
      partOfSpeech: "adj.",
      definition: "Impossible to understand; extremely confusing",
      example: "The magician's trick left the entire audience baffling over how it was done."
    },
    {
      id: "moderate-7-8",
      word: "Convoluted",
      partOfSpeech: "adj.",
      definition: "Extremely complex and difficult to follow",
      example: "The plot became so convoluted that even fans lost track of it."
    },
    {
      id: "moderate-7-9",
      word: "Opaque",
      partOfSpeech: "adj.",
      definition: "Not able to be seen through; hard to understand",
      example: "The company's pricing structure felt deliberately opaque."
    },
    {
      id: "moderate-7-10",
      word: "Obscure",
      partOfSpeech: "adj.",
      definition: "Not clearly expressed or easily understood; little known",
      example: "The footnote referenced an obscure historical event."
    },
    {
      id: "moderate-7-11",
      word: "Elucidate",
      partOfSpeech: "v.",
      definition: "To make something clear; to explain",
      example: "The professor paused to elucidate a particularly tricky concept."
    },
    {
      id: "moderate-7-12",
      word: "Illuminate",
      partOfSpeech: "v.",
      definition: "To make something clear or easier to understand",
      example: "The documentary helped illuminate a period of history few people knew."
    },
    {
      id: "moderate-7-13",
      word: "Decipher",
      partOfSpeech: "v.",
      definition: "To succeed in understanding something poorly written or unclear",
      example: "It took the archaeologists years to decipher the ancient inscription."
    },
    {
      id: "moderate-7-14",
      word: "Garbled",
      partOfSpeech: "adj.",
      definition: "Confused or distorted so as to be unclear",
      example: "The garbled voicemail was almost impossible to understand."
    },
    {
      id: "moderate-7-15",
      word: "Muddled",
      partOfSpeech: "adj.",
      definition: "Confused or disorganized in thought or expression",
      example: "His muddled explanation only made the class more confused."
    },
    {
      id: "moderate-7-16",
      word: "Incoherent",
      partOfSpeech: "adj.",
      definition: "Lacking logical connection; unclear or disorganized",
      example: "Exhausted, she gave an incoherent answer that made little sense."
    },
    {
      id: "moderate-7-17",
      word: "Precise",
      partOfSpeech: "adj.",
      definition: "Exact and accurate",
      example: "She gave precise directions so no one would get lost."
    },
    {
      id: "moderate-7-18",
      word: "Unambiguous",
      partOfSpeech: "adj.",
      definition: "Clear and not open to more than one interpretation",
      example: "The contract's terms were unambiguous, leaving no room for dispute."
    },
    {
      id: "moderate-7-19",
      word: "Straightforward",
      partOfSpeech: "adj.",
      definition: "Simple and easy to understand or do",
      example: "The setup process was surprisingly straightforward."
    },
    {
      id: "moderate-7-20",
      word: "Nebulous",
      partOfSpeech: "adj.",
      definition: "Vague or ill-defined; unclear",
      example: "Her plans for after graduation remained nebulous at best."
    },
    {
      id: "moderate-7-21",
      word: "Hazy",
      partOfSpeech: "adj.",
      definition: "Not clear; vague or blurred",
      example: "His memory of that night was hazy at best."
    },
    {
      id: "moderate-7-22",
      word: "Indistinct",
      partOfSpeech: "adj.",
      definition: "Not clearly seen, heard, or expressed",
      example: "The old photograph showed only an indistinct figure in the background."
    },
    {
      id: "moderate-7-23",
      word: "Unintelligible",
      partOfSpeech: "adj.",
      definition: "Impossible to understand",
      example: "Static made the announcement almost completely unintelligible."
    },
    {
      id: "moderate-7-24",
      word: "Lucidity",
      partOfSpeech: "n.",
      definition: "The quality of being clear and easy to understand",
      example: "The patient spoke with surprising lucidity given the circumstances."
    },
    {
      id: "moderate-7-25",
      word: "Clarity",
      partOfSpeech: "n.",
      definition: "The quality of being clear and easy to perceive",
      example: "She admired the clarity of his argument, even though she disagreed."
    }
  ],
  "moderate-8": [
    {
      id: "moderate-8-1",
      word: "Eloquent",
      partOfSpeech: "adj.",
      definition: "Fluent and persuasive in speaking or writing",
      example: "The eloquent speech moved several audience members to tears."
    },
    {
      id: "moderate-8-2",
      word: "Tenuous",
      partOfSpeech: "adj.",
      definition: "Very weak or slight; barely holding together",
      example: "The evidence connecting the two cases was tenuous at best."
    },
    {
      id: "moderate-8-3",
      word: "Ubiquitous",
      partOfSpeech: "adj.",
      definition: "Found everywhere; extremely common",
      example: "Smartphones have become ubiquitous in classrooms across the country."
    },
    {
      id: "moderate-8-4",
      word: "Abstain",
      partOfSpeech: "v.",
      definition: "To choose not to participate in something",
      example: "Two council members chose to abstain from the vote entirely."
    },
    {
      id: "moderate-8-5",
      word: "Prevalent",
      partOfSpeech: "adj.",
      definition: "Widespread in a particular area or at a particular time",
      example: "Allergies are especially prevalent during the spring months."
    },
    {
      id: "moderate-8-6",
      word: "Redundant",
      partOfSpeech: "adj.",
      definition: "Unnecessary because it repeats something already said",
      example: "The editor cut several redundant phrases from the final draft."
    },
    {
      id: "moderate-8-7",
      word: "Superfluous",
      partOfSpeech: "adj.",
      definition: "More than what is needed; unnecessary",
      example: "The report included several superfluous details that slowed the reader down."
    },
    {
      id: "moderate-8-8",
      word: "Meager",
      partOfSpeech: "adj.",
      definition: "Lacking in quantity or quality; scanty",
      example: "They survived the winter on a meager supply of canned food."
    },
    {
      id: "moderate-8-9",
      word: "Scarce",
      partOfSpeech: "adj.",
      definition: "Insufficient in supply; rare",
      example: "Fresh water became scarce after weeks without rain."
    },
    {
      id: "moderate-8-10",
      word: "Abundant",
      partOfSpeech: "adj.",
      definition: "Existing in large quantities; plentiful",
      example: "The region had an abundant supply of fertile farmland."
    },
    {
      id: "moderate-8-11",
      word: "Novel",
      partOfSpeech: "adj.",
      definition: "New and original; not seen before",
      example: "The startup proposed a novel solution to an old problem."
    },
    {
      id: "moderate-8-12",
      word: "Conventional",
      partOfSpeech: "adj.",
      definition: "Based on what is generally done or believed; traditional",
      example: "She rejected conventional wisdom and started her business at nineteen."
    },
    {
      id: "moderate-8-13",
      word: "Unconventional",
      partOfSpeech: "adj.",
      definition: "Not based on what is generally done; unusual",
      example: "His unconventional teaching methods made class far more memorable."
    },
    {
      id: "moderate-8-14",
      word: "Arbitrary",
      partOfSpeech: "adj.",
      definition: "Based on random choice rather than reason or system",
      example: "The deadline felt arbitrary, with no real justification behind it."
    },
    {
      id: "moderate-8-15",
      word: "Deliberate",
      partOfSpeech: "adj.",
      definition: "Done consciously and intentionally",
      example: "It was a deliberate choice to release the album on a Friday."
    },
    {
      id: "moderate-8-16",
      word: "Spontaneous",
      partOfSpeech: "adj.",
      definition: "Happening without planning; done on impulse",
      example: "The spontaneous road trip turned out to be their favorite memory."
    },
    {
      id: "moderate-8-17",
      word: "Methodical",
      partOfSpeech: "adj.",
      definition: "Done in a careful, orderly, systematic way",
      example: "The technician worked in a slow, methodical manner."
    },
    {
      id: "moderate-8-18",
      word: "Haphazard",
      partOfSpeech: "adj.",
      definition: "Lacking any order or organization; random",
      example: "The files were stored in a haphazard pile with no labels."
    },
    {
      id: "moderate-8-19",
      word: "Intermittent",
      partOfSpeech: "adj.",
      definition: "Occurring at irregular intervals; not continuous",
      example: "Intermittent showers were expected throughout the afternoon."
    },
    {
      id: "moderate-8-20",
      word: "Perpetual",
      partOfSpeech: "adj.",
      definition: "Never ending or changing; continuing forever",
      example: "The city seemed to exist in a state of perpetual construction."
    },
    {
      id: "moderate-8-21",
      word: "Fleeting",
      partOfSpeech: "adj.",
      definition: "Lasting for only a short time",
      example: "She caught a fleeting glimpse of the deer before it vanished."
    },
    {
      id: "moderate-8-22",
      word: "Ephemeral",
      partOfSpeech: "adj.",
      definition: "Lasting for a very short time",
      example: "The beauty of the cherry blossoms is ephemeral, gone within a week."
    },
    {
      id: "moderate-8-23",
      word: "Momentary",
      partOfSpeech: "adj.",
      definition: "Lasting for a very short period of time",
      example: "There was a momentary pause before the crowd erupted in applause."
    },
    {
      id: "moderate-8-24",
      word: "Innate",
      partOfSpeech: "adj.",
      definition: "Existing from birth rather than learned",
      example: "She had an innate talent for music, even before her first lesson."
    },
    {
      id: "moderate-8-25",
      word: "Inherent",
      partOfSpeech: "adj.",
      definition: "Existing as a natural or basic part of something",
      example: "There's an inherent risk in any extreme sport."
    }
  ],
  "difficult-1": [
    {
      id: "difficult-1-1",
      word: "Perfunctory",
      partOfSpeech: "adj.",
      definition: "Done as a routine duty, without care or interest",
      example: "He gave a perfunctory nod before returning to his phone."
    },
    {
      id: "difficult-1-2",
      word: "Sanguine",
      partOfSpeech: "adj.",
      definition: "Optimistic or positive, especially in a difficult situation",
      example: "Despite the setback, she remained sanguine about the project's future."
    },
    {
      id: "difficult-1-3",
      word: "Obsequious",
      partOfSpeech: "adj.",
      definition: "Excessively eager to please or obey; overly flattering",
      example: "The obsequious waiter hovered at their table all evening."
    },
    {
      id: "difficult-1-4",
      word: "Vitriolic",
      partOfSpeech: "adj.",
      definition: "Filled with bitter criticism or malice",
      example: "The review was so vitriolic that the author refused to read past the first line."
    },
    {
      id: "difficult-1-5",
      word: "Polemic",
      partOfSpeech: "n.",
      definition: "A strong verbal or written attack on a particular opinion",
      example: "His essay was less an analysis than a polemic against modern architecture."
    },
    {
      id: "difficult-1-6",
      word: "Sardonic",
      partOfSpeech: "adj.",
      definition: "Mocking and cynical in tone",
      example: "She gave a sardonic laugh at his suggestion that the plan would work."
    },
    {
      id: "difficult-1-7",
      word: "Acerbic",
      partOfSpeech: "adj.",
      definition: "Sharp and forthright in a way that is hurtful or biting",
      example: "The critic was known for his acerbic reviews of new restaurants."
    },
    {
      id: "difficult-1-8",
      word: "Laconic",
      partOfSpeech: "adj.",
      definition: "Using very few words; concise to the point of terseness",
      example: "His laconic reply gave no hint of what he was actually thinking."
    },
    {
      id: "difficult-1-9",
      word: "Verbose",
      partOfSpeech: "adj.",
      definition: "Using more words than necessary; wordy",
      example: "The verbose report could have said the same thing in half the pages."
    },
    {
      id: "difficult-1-10",
      word: "Terse",
      partOfSpeech: "adj.",
      definition: "Brief and to the point, sometimes to the point of rudeness",
      example: "Her terse email left the client unsure if the deal was still on."
    },
    {
      id: "difficult-1-11",
      word: "Pithy",
      partOfSpeech: "adj.",
      definition: "Brief, forceful, and meaningful in expression",
      example: "He's known for pithy one-liners that sum up entire arguments."
    },
    {
      id: "difficult-1-12",
      word: "Trenchant",
      partOfSpeech: "adj.",
      definition: "Vigorous and incisive in expression or thought",
      example: "Her trenchant critique exposed every weakness in the proposal."
    },
    {
      id: "difficult-1-13",
      word: "Incisive",
      partOfSpeech: "adj.",
      definition: "Showing clear, sharp analysis or judgment",
      example: "His incisive questions forced the witness to change his story."
    },
    {
      id: "difficult-1-14",
      word: "Mordant",
      partOfSpeech: "adj.",
      definition: "Sharply critical, often with dark or biting humor",
      example: "The comedian's mordant wit made even politicians laugh at themselves."
    },
    {
      id: "difficult-1-15",
      word: "Caustic",
      partOfSpeech: "adj.",
      definition: "Sarcastic and hurtful in a sharp, cutting way",
      example: "Her caustic remarks about the plan silenced the whole meeting."
    },
    {
      id: "difficult-1-16",
      word: "Satirical",
      partOfSpeech: "adj.",
      definition: "Using humor, irony, or exaggeration to criticize something",
      example: "The satirical article poked fun at the town's obsession with parking."
    },
    {
      id: "difficult-1-17",
      word: "Didactic",
      partOfSpeech: "adj.",
      definition: "Intended to teach, often overly moralizing",
      example: "Some readers found the novel's ending too didactic for their taste."
    },
    {
      id: "difficult-1-18",
      word: "Bombastic",
      partOfSpeech: "adj.",
      definition: "High-sounding but with little meaning; inflated in language",
      example: "The politician's bombastic speech impressed few and convinced fewer."
    },
    {
      id: "difficult-1-19",
      word: "Grandiloquent",
      partOfSpeech: "adj.",
      definition: "Pompous or extravagant in language, style, or manner",
      example: "His grandiloquent toast went on for nearly twenty minutes."
    },
    {
      id: "difficult-1-20",
      word: "Euphemism",
      partOfSpeech: "n.",
      definition: "A mild word substituted for one considered harsh or blunt",
      example: "\"Letting someone go\" is a common euphemism for firing them."
    },
    {
      id: "difficult-1-21",
      word: "Hyperbole",
      partOfSpeech: "n.",
      definition: "Exaggerated statements not meant to be taken literally",
      example: "Saying he waited \"a million years\" for the bus was clear hyperbole."
    },
    {
      id: "difficult-1-22",
      word: "Understatement",
      partOfSpeech: "n.",
      definition: "The presentation of something as smaller or less important than it is",
      example: "Calling the hurricane \"a bit windy\" was quite an understatement."
    },
    {
      id: "difficult-1-23",
      word: "Rhetorical",
      partOfSpeech: "adj.",
      definition: "Relating to language designed to persuade or impress",
      example: "The senator's rhetorical flourishes drew applause but few real answers."
    },
    {
      id: "difficult-1-24",
      word: "Oratory",
      partOfSpeech: "n.",
      definition: "The art of formal, persuasive public speaking",
      example: "Her skill in oratory made her a natural choice for the debate team."
    },
    {
      id: "difficult-1-25",
      word: "Ironic",
      partOfSpeech: "adj.",
      definition: "Expressing meaning through language that signifies the opposite",
      example: "It was darkly ironic that the fire station itself caught fire."
    }
  ],
  "difficult-2": [
    {
      id: "difficult-2-1",
      word: "Paradigm",
      partOfSpeech: "n.",
      definition: "A typical example or pattern of something; a model",
      example: "The discovery represented a complete paradigm shift in physics."
    },
    {
      id: "difficult-2-2",
      word: "Dichotomy",
      partOfSpeech: "n.",
      definition: "A division between two sharply contrasting things",
      example: "The film explores the dichotomy between tradition and progress."
    },
    {
      id: "difficult-2-3",
      word: "Existential",
      partOfSpeech: "adj.",
      definition: "Concerned with human existence and meaning",
      example: "The long silence brought on an existential crisis about her career."
    },
    {
      id: "difficult-2-4",
      word: "Abstract",
      partOfSpeech: "adj.",
      definition: "Existing as an idea rather than a concrete object",
      example: "Justice is an abstract concept that's difficult to define precisely."
    },
    {
      id: "difficult-2-5",
      word: "Conceptual",
      partOfSpeech: "adj.",
      definition: "Relating to abstract ideas rather than physical things",
      example: "The artist's conceptual work often had no physical form at all."
    },
    {
      id: "difficult-2-6",
      word: "Relativism",
      partOfSpeech: "n.",
      definition: "The view that truth or morality is not absolute but relative",
      example: "Cultural relativism argues that practices should be judged within their own context."
    },
    {
      id: "difficult-2-7",
      word: "Dogma",
      partOfSpeech: "n.",
      definition: "A set of beliefs held to be true without question",
      example: "He rejected the party's dogma in favor of independent thought."
    },
    {
      id: "difficult-2-8",
      word: "Dogmatic",
      partOfSpeech: "adj.",
      definition: "Assertively stating opinions as if they were unquestionably true",
      example: "Her dogmatic tone left no room for debate."
    },
    {
      id: "difficult-2-9",
      word: "Skepticism",
      partOfSpeech: "n.",
      definition: "A questioning or doubting attitude toward claims",
      example: "Scientific skepticism requires evidence before accepting a new theory."
    },
    {
      id: "difficult-2-10",
      word: "Nihilism",
      partOfSpeech: "n.",
      definition: "The belief that life is without objective meaning or value",
      example: "The novel's bleak nihilism unsettled many of its early readers."
    },
    {
      id: "difficult-2-11",
      word: "Utilitarian",
      partOfSpeech: "adj.",
      definition: "Designed for practical use rather than beauty; based on usefulness",
      example: "The building's utilitarian design prioritized function over style."
    },
    {
      id: "difficult-2-12",
      word: "Hedonism",
      partOfSpeech: "n.",
      definition: "The pursuit of pleasure as the most important goal in life",
      example: "Critics accused the film of glorifying pure hedonism."
    },
    {
      id: "difficult-2-13",
      word: "Asceticism",
      partOfSpeech: "n.",
      definition: "A lifestyle of strict self-discipline and abstaining from pleasure",
      example: "The monks practiced a strict asceticism, owning almost nothing."
    },
    {
      id: "difficult-2-14",
      word: "Transcend",
      partOfSpeech: "v.",
      definition: "To go beyond the limits of something",
      example: "Great art has the power to transcend language and culture."
    },
    {
      id: "difficult-2-15",
      word: "Immanent",
      partOfSpeech: "adj.",
      definition: "Existing or operating within; inherent",
      example: "The philosopher argued that meaning is immanent in everyday experience."
    },
    {
      id: "difficult-2-16",
      word: "Duality",
      partOfSpeech: "n.",
      definition: "The quality of having two often contrasting parts",
      example: "The novel captures the duality of human nature, both kind and cruel."
    },
    {
      id: "difficult-2-17",
      word: "Ontology",
      partOfSpeech: "n.",
      definition: "The philosophical study of the nature of being",
      example: "Her thesis explored questions of ontology raised by artificial intelligence."
    },
    {
      id: "difficult-2-18",
      word: "Axiom",
      partOfSpeech: "n.",
      definition: "A statement regarded as self-evidently true",
      example: "It's treated as an axiom that hard work leads to success."
    },
    {
      id: "difficult-2-19",
      word: "Tenet",
      partOfSpeech: "n.",
      definition: "A principle or belief held to be true by a group",
      example: "Equality before the law is a core tenet of the constitution."
    },
    {
      id: "difficult-2-20",
      word: "Doctrine",
      partOfSpeech: "n.",
      definition: "A set of beliefs taught by a religious, political, or philosophical group",
      example: "The party's economic doctrine shaped policy for decades."
    },
    {
      id: "difficult-2-21",
      word: "Ideology",
      partOfSpeech: "n.",
      definition: "A system of ideas that forms the basis of a political theory",
      example: "The two nations were divided by conflicting ideologies."
    },
    {
      id: "difficult-2-22",
      word: "Metaphysical",
      partOfSpeech: "adj.",
      definition: "Relating to abstract questions about reality and existence",
      example: "The poem raises metaphysical questions about time and memory."
    },
    {
      id: "difficult-2-23",
      word: "Introspection",
      partOfSpeech: "n.",
      definition: "The examination of one's own thoughts and feelings",
      example: "Years of introspection led her to change careers entirely."
    },
    {
      id: "difficult-2-24",
      word: "Subjectivity",
      partOfSpeech: "n.",
      definition: "The quality of being based on personal feelings or opinions",
      example: "The essay questions the subjectivity inherent in all historical writing."
    },
    {
      id: "difficult-2-25",
      word: "Objectivity",
      partOfSpeech: "n.",
      definition: "The quality of being unaffected by personal feelings or bias",
      example: "Journalists strive for objectivity, even when covering emotional stories."
    }
  ],
  "difficult-3": [
    {
      id: "difficult-3-1",
      word: "Rigorous",
      partOfSpeech: "adj.",
      definition: "Extremely thorough, exhaustive, and accurate",
      example: "The study underwent a rigorous peer-review process before publication."
    },
    {
      id: "difficult-3-2",
      word: "Discrete",
      partOfSpeech: "adj.",
      definition: "Individually separate and distinct",
      example: "The survey broke opinions down into several discrete categories."
    },
    {
      id: "difficult-3-3",
      word: "Nuanced",
      partOfSpeech: "adj.",
      definition: "Characterized by subtle shades of meaning or expression",
      example: "Her nuanced argument avoided the oversimplifications of both sides."
    },
    {
      id: "difficult-3-4",
      word: "Definitive",
      partOfSpeech: "adj.",
      definition: "Done or decided in a way that is final and unlikely to change",
      example: "The lab test gave a definitive answer to the long-running debate."
    },
    {
      id: "difficult-3-5",
      word: "Exhaustive",
      partOfSpeech: "adj.",
      definition: "Thorough and complete; covering all elements",
      example: "The report offered an exhaustive account of the company's finances."
    },
    {
      id: "difficult-3-6",
      word: "Cogent",
      partOfSpeech: "adj.",
      definition: "Clear, logical, and convincing",
      example: "She made a cogent case for revising the outdated policy."
    },
    {
      id: "difficult-3-7",
      word: "Salient",
      partOfSpeech: "adj.",
      definition: "Most noticeable or important",
      example: "The professor asked students to identify the salient points of the essay."
    },
    {
      id: "difficult-3-8",
      word: "Germane",
      partOfSpeech: "adj.",
      definition: "Relevant to a subject under consideration",
      example: "His comment, while interesting, wasn't germane to the discussion at hand."
    },
    {
      id: "difficult-3-9",
      word: "Pertinent",
      partOfSpeech: "adj.",
      definition: "Relevant or applicable to a particular matter",
      example: "She asked several pertinent questions before agreeing to the contract."
    },
    {
      id: "difficult-3-10",
      word: "Quintessential",
      partOfSpeech: "adj.",
      definition: "Representing the most perfect or typical example of something",
      example: "The small diner was the quintessential American roadside stop."
    },
    {
      id: "difficult-3-11",
      word: "Exemplary",
      partOfSpeech: "adj.",
      definition: "Serving as a desirable model; outstandingly good",
      example: "Her exemplary work ethic earned her a promotion within the year."
    },
    {
      id: "difficult-3-12",
      word: "Paramount",
      partOfSpeech: "adj.",
      definition: "More important than anything else; supreme",
      example: "Safety was paramount during the construction of the new bridge."
    },
    {
      id: "difficult-3-13",
      word: "Indispensable",
      partOfSpeech: "adj.",
      definition: "Absolutely necessary; too important to be without",
      example: "A reliable internet connection has become indispensable for remote work."
    },
    {
      id: "difficult-3-14",
      word: "Integral",
      partOfSpeech: "adj.",
      definition: "Necessary to make something whole or complete",
      example: "Trust is integral to any long-term business partnership."
    },
    {
      id: "difficult-3-15",
      word: "Fundamental",
      partOfSpeech: "adj.",
      definition: "Forming a necessary base or core; of central importance",
      example: "Honesty is a fundamental value in their family."
    },
    {
      id: "difficult-3-16",
      word: "Cardinal",
      partOfSpeech: "adj.",
      definition: "Of the greatest importance; fundamental",
      example: "Punctuality is a cardinal rule at the firm."
    },
    {
      id: "difficult-3-17",
      word: "Seminal",
      partOfSpeech: "adj.",
      definition: "Strongly influencing later developments; groundbreaking",
      example: "The 1953 paper was seminal in shaping the field of genetics."
    },
    {
      id: "difficult-3-18",
      word: "Canonical",
      partOfSpeech: "adj.",
      definition: "Accepted as authoritative or standard",
      example: "The novel is considered part of the canonical works of the era."
    },
    {
      id: "difficult-3-19",
      word: "Authoritative",
      partOfSpeech: "adj.",
      definition: "Reliable due to expert knowledge or official status",
      example: "The encyclopedia remains the most authoritative source on the subject."
    },
    {
      id: "difficult-3-20",
      word: "Scrupulous",
      partOfSpeech: "adj.",
      definition: "Extremely thorough, careful, and attentive to detail",
      example: "The accountant was scrupulous about documenting every transaction."
    },
    {
      id: "difficult-3-21",
      word: "Conscientious",
      partOfSpeech: "adj.",
      definition: "Careful and thorough in carrying out one's duties",
      example: "Her conscientious approach to grading meant every essay got real feedback."
    },
    {
      id: "difficult-3-22",
      word: "Painstaking",
      partOfSpeech: "adj.",
      definition: "Done with great care and thoroughness",
      example: "Restoring the mural required painstaking, months-long effort."
    },
    {
      id: "difficult-3-23",
      word: "Assiduous",
      partOfSpeech: "adj.",
      definition: "Showing great care and perseverance in one's work",
      example: "His assiduous note-taking made him the group's go-to study partner."
    },
    {
      id: "difficult-3-24",
      word: "Punctilious",
      partOfSpeech: "adj.",
      definition: "Showing great attention to detail or correct behavior",
      example: "The judge was punctilious about following every courtroom procedure."
    },
    {
      id: "difficult-3-25",
      word: "Exacting",
      partOfSpeech: "adj.",
      definition: "Making great demands on one's skill, attention, or resources",
      example: "The exacting standards of the kitchen pushed every cook to improve."
    }
  ],
  "difficult-4": [
    {
      id: "difficult-4-1",
      word: "Distinguish",
      partOfSpeech: "v.",
      definition: "To recognize or perceive a difference between things",
      example: "It can be hard to distinguish identical twins at first glance."
    },
    {
      id: "difficult-4-2",
      word: "Differentiate",
      partOfSpeech: "v.",
      definition: "To recognize or establish a difference between things",
      example: "The course teaches students to differentiate between fact and opinion."
    },
    {
      id: "difficult-4-3",
      word: "Discriminate",
      partOfSpeech: "v.",
      definition: "To recognize a distinction; to differentiate",
      example: "A trained sommelier can discriminate between subtly different vintages."
    },
    {
      id: "difficult-4-4",
      word: "Discrepancy",
      partOfSpeech: "n.",
      definition: "A difference between things that should be the same",
      example: "Auditors found a discrepancy between the two financial reports."
    },
    {
      id: "difficult-4-5",
      word: "Disparate",
      partOfSpeech: "adj.",
      definition: "Fundamentally different in kind; not able to be compared",
      example: "The committee brought together disparate perspectives from across the industry."
    },
    {
      id: "difficult-4-6",
      word: "Divergent",
      partOfSpeech: "adj.",
      definition: "Tending to develop in different directions",
      example: "The two paths of research grew increasingly divergent over the years."
    },
    {
      id: "difficult-4-7",
      word: "Convergent",
      partOfSpeech: "adj.",
      definition: "Tending to come together from different directions",
      example: "The two fields experienced a convergent moment of shared discovery."
    },
    {
      id: "difficult-4-8",
      word: "Congruent",
      partOfSpeech: "adj.",
      definition: "In agreement or harmony; corresponding exactly",
      example: "Her actions were finally congruent with the values she preached."
    },
    {
      id: "difficult-4-9",
      word: "Incongruous",
      partOfSpeech: "adj.",
      definition: "Not in harmony or keeping with the surroundings",
      example: "The bright graffiti looked incongruous against the old stone church."
    },
    {
      id: "difficult-4-10",
      word: "Antithetical",
      partOfSpeech: "adj.",
      definition: "Directly opposed or contrasted",
      example: "His casual attitude was antithetical to the strict office culture."
    },
    {
      id: "difficult-4-11",
      word: "Juxtapose",
      partOfSpeech: "v.",
      definition: "To place things side by side for contrasting effect",
      example: "The exhibit juxtaposes photographs from the same city, decades apart."
    },
    {
      id: "difficult-4-12",
      word: "Analogous",
      partOfSpeech: "adj.",
      definition: "Comparable in certain respects to something else",
      example: "The heart's function is analogous to that of a mechanical pump."
    },
    {
      id: "difficult-4-13",
      word: "Synonymous",
      partOfSpeech: "adj.",
      definition: "Having the same or nearly the same meaning as another word",
      example: "For many customers, the brand had become synonymous with quality."
    },
    {
      id: "difficult-4-14",
      word: "Disparity",
      partOfSpeech: "n.",
      definition: "A great difference between two or more things",
      example: "The report highlighted the growing income disparity in the region."
    },
    {
      id: "difficult-4-15",
      word: "Parity",
      partOfSpeech: "n.",
      definition: "The state of being equal, especially in status or value",
      example: "The new contract finally achieved pay parity between the two roles."
    },
    {
      id: "difficult-4-16",
      word: "Equivocal",
      partOfSpeech: "adj.",
      definition: "Open to more than one interpretation; ambiguous",
      example: "His equivocal response left both sides thinking he agreed with them."
    },
    {
      id: "difficult-4-17",
      word: "Connotation",
      partOfSpeech: "n.",
      definition: "An idea or feeling a word invokes beyond its literal meaning",
      example: "The word \"cheap\" carries a more negative connotation than \"affordable.\""
    },
    {
      id: "difficult-4-18",
      word: "Denotation",
      partOfSpeech: "n.",
      definition: "The literal, dictionary meaning of a word",
      example: "The denotation of \"home\" is simple, but its connotation is deeply personal."
    },
    {
      id: "difficult-4-19",
      word: "Implicit",
      partOfSpeech: "adj.",
      definition: "Suggested without being directly stated",
      example: "There was an implicit understanding that overtime would be paid."
    },
    {
      id: "difficult-4-20",
      word: "Semantic",
      partOfSpeech: "adj.",
      definition: "Relating to meaning in language",
      example: "The lawyers argued over a semantic distinction in the contract's wording."
    },
    {
      id: "difficult-4-21",
      word: "Delineate",
      partOfSpeech: "v.",
      definition: "To describe or portray something precisely",
      example: "The map clearly delineates the boundary between the two counties."
    },
    {
      id: "difficult-4-22",
      word: "Demarcate",
      partOfSpeech: "v.",
      definition: "To set the boundaries or limits of something",
      example: "A low stone wall demarcated the edge of the property."
    },
    {
      id: "difficult-4-23",
      word: "Differential",
      partOfSpeech: "adj.",
      definition: "Relating to or showing a difference",
      example: "Doctors ran more tests as part of the differential diagnosis."
    },
    {
      id: "difficult-4-24",
      word: "Idiosyncratic",
      partOfSpeech: "adj.",
      definition: "Peculiar or individual to a particular person",
      example: "His idiosyncratic habits made him instantly recognizable to coworkers."
    },
    {
      id: "difficult-4-25",
      word: "Gradation",
      partOfSpeech: "n.",
      definition: "A scale of successive stages or degrees",
      example: "The color chart showed a smooth gradation from pale yellow to deep orange."
    }
  ],
  "difficult-5": [
    {
      id: "difficult-5-1",
      word: "Scathing",
      partOfSpeech: "adj.",
      definition: "Harshly critical and severe",
      example: "The scathing review criticized every aspect of the restaurant's menu."
    },
    {
      id: "difficult-5-2",
      word: "Excoriate",
      partOfSpeech: "v.",
      definition: "To criticize someone or something severely",
      example: "The columnist excoriated the mayor's handling of the budget crisis."
    },
    {
      id: "difficult-5-3",
      word: "Censure",
      partOfSpeech: "v.",
      definition: "To express strong formal disapproval of someone's actions",
      example: "The senator was formally censured for misusing campaign funds."
    },
    {
      id: "difficult-5-4",
      word: "Denunciation",
      partOfSpeech: "n.",
      definition: "Public condemnation of someone or something",
      example: "The report ended with a sharp denunciation of the company's practices."
    },
    {
      id: "difficult-5-5",
      word: "Reproach",
      partOfSpeech: "v.",
      definition: "To express disapproval or disappointment toward someone",
      example: "She reproached herself for not speaking up sooner."
    },
    {
      id: "difficult-5-6",
      word: "Impugn",
      partOfSpeech: "v.",
      definition: "To dispute the truth, validity, or honesty of something",
      example: "The lawyer tried to impugn the witness's credibility on cross-examination."
    },
    {
      id: "difficult-5-7",
      word: "Deprecate",
      partOfSpeech: "v.",
      definition: "To express disapproval of or belittle something",
      example: "He tends to deprecate his own achievements in conversation."
    },
    {
      id: "difficult-5-8",
      word: "Derogatory",
      partOfSpeech: "adj.",
      definition: "Showing a critical or disrespectful attitude",
      example: "The comment was widely condemned as derogatory and unprofessional."
    },
    {
      id: "difficult-5-9",
      word: "Pejorative",
      partOfSpeech: "adj.",
      definition: "Expressing contempt or disapproval; disparaging",
      example: "The term was once neutral but has since taken on a pejorative meaning."
    },
    {
      id: "difficult-5-10",
      word: "Unflattering",
      partOfSpeech: "adj.",
      definition: "Failing to show someone in an attractive or favorable light",
      example: "The candid, unflattering photo went viral within hours."
    },
    {
      id: "difficult-5-11",
      word: "Damning",
      partOfSpeech: "adj.",
      definition: "Strongly suggesting guilt or error; severely critical",
      example: "The leaked memo was damning evidence against the company's claims."
    },
    {
      id: "difficult-5-12",
      word: "Indict",
      partOfSpeech: "v.",
      definition: "To formally accuse or charge someone; to strongly criticize",
      example: "The documentary serves as a broader indictment of the entire industry."
    },
    {
      id: "difficult-5-13",
      word: "Invective",
      partOfSpeech: "n.",
      definition: "Harsh, abusive language directed at a person or thing",
      example: "The speech quickly descended into invective rather than argument."
    },
    {
      id: "difficult-5-14",
      word: "Tirade",
      partOfSpeech: "n.",
      definition: "A long, angry speech of criticism or accusation",
      example: "He launched into a tirade about the referee's final call."
    },
    {
      id: "difficult-5-15",
      word: "Diatribe",
      partOfSpeech: "n.",
      definition: "A forceful and bitter verbal attack against someone or something",
      example: "Her opinion column turned into a diatribe against modern technology."
    },
    {
      id: "difficult-5-16",
      word: "Lambaste",
      partOfSpeech: "v.",
      definition: "To criticize someone or something harshly",
      example: "Critics lambasted the sequel for abandoning what made the original great."
    },
    {
      id: "difficult-5-17",
      word: "Vituperative",
      partOfSpeech: "adj.",
      definition: "Bitter and abusive in language or tone",
      example: "The vituperative online comments drove the author off social media."
    },
    {
      id: "difficult-5-18",
      word: "Condemnation",
      partOfSpeech: "n.",
      definition: "The expression of very strong disapproval",
      example: "The attack drew swift condemnation from leaders around the world."
    },
    {
      id: "difficult-5-19",
      word: "Reprove",
      partOfSpeech: "v.",
      definition: "To gently or firmly criticize someone for a fault",
      example: "The teacher gently reproved the student for arriving late again."
    },
    {
      id: "difficult-5-20",
      word: "Vilify",
      partOfSpeech: "v.",
      definition: "To speak or write about someone in an abusively disparaging way",
      example: "The press vilified the executive long before any charges were filed."
    },
    {
      id: "difficult-5-21",
      word: "Denigrate",
      partOfSpeech: "v.",
      definition: "To criticize unfairly; to attack the reputation of",
      example: "He was accused of trying to denigrate his opponent's record."
    },
    {
      id: "difficult-5-22",
      word: "Malign",
      partOfSpeech: "v.",
      definition: "To speak about someone in a harmful, disparaging way",
      example: "She felt the article had unfairly maligned her research."
    },
    {
      id: "difficult-5-23",
      word: "Slander",
      partOfSpeech: "n.",
      definition: "A false spoken statement that damages a person's reputation",
      example: "He threatened to sue for slander after the false accusation aired."
    },
    {
      id: "difficult-5-24",
      word: "Defame",
      partOfSpeech: "v.",
      definition: "To damage the reputation of someone through false statements",
      example: "The company sued the blogger for attempting to defame its founder."
    },
    {
      id: "difficult-5-25",
      word: "Calumny",
      partOfSpeech: "n.",
      definition: "A false statement made to damage someone's reputation",
      example: "The politician dismissed the accusations as pure calumny."
    }
  ],
  "difficult-6": [
    {
      id: "difficult-6-1",
      word: "Inscrutable",
      partOfSpeech: "adj.",
      definition: "Impossible to understand or interpret",
      example: "His inscrutable expression gave away nothing about the decision."
    },
    {
      id: "difficult-6-2",
      word: "Taciturn",
      partOfSpeech: "adj.",
      definition: "Reserved and saying very little",
      example: "The taciturn farmer answered every question with a single word."
    },
    {
      id: "difficult-6-3",
      word: "Phlegmatic",
      partOfSpeech: "adj.",
      definition: "Calm and unemotional, even in difficult situations",
      example: "Her phlegmatic reaction to the bad news surprised everyone in the room."
    },
    {
      id: "difficult-6-4",
      word: "Choleric",
      partOfSpeech: "adj.",
      definition: "Easily angered; bad-tempered",
      example: "The choleric manager was known for slamming doors after meetings."
    },
    {
      id: "difficult-6-5",
      word: "Mercurial",
      partOfSpeech: "adj.",
      definition: "Subject to sudden or unpredictable changes in mood",
      example: "Working for the mercurial director meant never knowing what to expect."
    },
    {
      id: "difficult-6-6",
      word: "Fastidious",
      partOfSpeech: "adj.",
      definition: "Very attentive to detail and hard to please",
      example: "The fastidious editor rejected drafts over a single misplaced comma."
    },
    {
      id: "difficult-6-7",
      word: "Recalcitrant",
      partOfSpeech: "adj.",
      definition: "Stubbornly resistant to authority or guidance",
      example: "The recalcitrant committee refused to adopt any of the proposed reforms."
    },
    {
      id: "difficult-6-8",
      word: "Intransigent",
      partOfSpeech: "adj.",
      definition: "Refusing to change one's views or agree about something",
      example: "Both sides remained intransigent, and the talks collapsed by evening."
    },
    {
      id: "difficult-6-9",
      word: "Indefatigable",
      partOfSpeech: "adj.",
      definition: "Persisting tirelessly; never tiring",
      example: "Her indefatigable energy kept the volunteers working long after sunset."
    },
    {
      id: "difficult-6-10",
      word: "Inveterate",
      partOfSpeech: "adj.",
      definition: "Having a long-established habit; deeply rooted",
      example: "He was an inveterate collector of anything related to trains."
    },
    {
      id: "difficult-6-11",
      word: "Incorrigible",
      partOfSpeech: "adj.",
      definition: "Not able to be corrected or reformed",
      example: "The incorrigible prankster never once got caught before graduation."
    },
    {
      id: "difficult-6-12",
      word: "Unassuming",
      partOfSpeech: "adj.",
      definition: "Not pretentious or arrogant; modest",
      example: "Despite his fame, he remained unassuming and easy to talk to."
    },
    {
      id: "difficult-6-13",
      word: "Self-effacing",
      partOfSpeech: "adj.",
      definition: "Not claiming attention for oneself; modest",
      example: "Her self-effacing humor made her instantly likable to new colleagues."
    },
    {
      id: "difficult-6-14",
      word: "Ostentatious",
      partOfSpeech: "adj.",
      definition: "Designed to impress; showy",
      example: "The ostentatious mansion had gold fixtures in nearly every room."
    },
    {
      id: "difficult-6-15",
      word: "Pretentious",
      partOfSpeech: "adj.",
      definition: "Attempting to impress by claiming greater importance than deserved",
      example: "Critics found the film's dialogue overly pretentious."
    },
    {
      id: "difficult-6-16",
      word: "Sanctimonious",
      partOfSpeech: "adj.",
      definition: "Making a show of being morally superior to others",
      example: "His sanctimonious lecture on honesty rang hollow after the scandal."
    },
    {
      id: "difficult-6-17",
      word: "Cantankerous",
      partOfSpeech: "adj.",
      definition: "Bad-tempered and argumentative",
      example: "The cantankerous old neighbor complained about every car parked nearby."
    },
    {
      id: "difficult-6-18",
      word: "Garrulous",
      partOfSpeech: "adj.",
      definition: "Excessively talkative, especially about trivial matters",
      example: "The garrulous cab driver talked for the entire forty-minute ride."
    },
    {
      id: "difficult-6-19",
      word: "Loquacious",
      partOfSpeech: "adj.",
      definition: "Tending to talk a great deal; very talkative",
      example: "Normally loquacious, he went completely silent after the diagnosis."
    },
    {
      id: "difficult-6-20",
      word: "Reclusive",
      partOfSpeech: "adj.",
      definition: "Avoiding the company of others; solitary",
      example: "The reclusive author hadn't given an interview in over a decade."
    },
    {
      id: "difficult-6-21",
      word: "Misanthropic",
      partOfSpeech: "adj.",
      definition: "Disliking humankind and avoiding human society",
      example: "His misanthropic outlook made small talk almost unbearable for him."
    },
    {
      id: "difficult-6-22",
      word: "Magnanimous",
      partOfSpeech: "adj.",
      definition: "Generous and forgiving, especially toward a rival",
      example: "The champion was magnanimous in victory, praising every opponent by name."
    },
    {
      id: "difficult-6-23",
      word: "Avuncular",
      partOfSpeech: "adj.",
      definition: "Kind and friendly toward a younger person, like an uncle",
      example: "The avuncular professor always had time for a struggling student."
    },
    {
      id: "difficult-6-24",
      word: "Affable",
      partOfSpeech: "adj.",
      definition: "Friendly, good-natured, and easy to talk to",
      example: "The affable shopkeeper knew nearly every customer by first name."
    },
    {
      id: "difficult-6-25",
      word: "Querulous",
      partOfSpeech: "adj.",
      definition: "Complaining in a petulant or whining way",
      example: "The querulous passenger complained about every minor delay."
    }
  ],
  "difficult-7": [
    {
      id: "difficult-7-1",
      word: "Turbid",
      partOfSpeech: "adj.",
      definition: "Cloudy or muddy, especially due to disturbed sediment",
      example: "The river turned turbid after days of heavy rain."
    },
    {
      id: "difficult-7-2",
      word: "Byzantine",
      partOfSpeech: "adj.",
      definition: "Excessively complicated, typically involving intrigue",
      example: "Getting a permit required navigating a byzantine maze of city offices."
    },
    {
      id: "difficult-7-3",
      word: "Labyrinthine",
      partOfSpeech: "adj.",
      definition: "Extremely complex and confusing, like a maze",
      example: "The novel's labyrinthine plot required a second reading to fully follow."
    },
    {
      id: "difficult-7-4",
      word: "Impenetrable",
      partOfSpeech: "adj.",
      definition: "Impossible to understand; unable to be passed through",
      example: "The legal document was written in nearly impenetrable jargon."
    },
    {
      id: "difficult-7-5",
      word: "Arcane",
      partOfSpeech: "adj.",
      definition: "Understood by only a few; obscure and mysterious",
      example: "The rules of the ancient board game felt hopelessly arcane."
    },
    {
      id: "difficult-7-6",
      word: "Esoteric",
      partOfSpeech: "adj.",
      definition: "Intended for or understood by only a small group",
      example: "The lecture was full of esoteric references that lost most of the audience."
    },
    {
      id: "difficult-7-7",
      word: "Abstruse",
      partOfSpeech: "adj.",
      definition: "Difficult to understand; obscure",
      example: "His abstruse theory took even fellow physicists weeks to unpack."
    },
    {
      id: "difficult-7-8",
      word: "Recondite",
      partOfSpeech: "adj.",
      definition: "Little known; hard to understand for those without special knowledge",
      example: "The professor's recondite footnotes assumed a graduate-level background."
    },
    {
      id: "difficult-7-9",
      word: "Turgid",
      partOfSpeech: "adj.",
      definition: "Excessively complicated or pompous in style; swollen",
      example: "The turgid prose made the short story feel twice as long."
    },
    {
      id: "difficult-7-10",
      word: "Prolix",
      partOfSpeech: "adj.",
      definition: "Using too many words; tediously lengthy",
      example: "His prolix introduction delayed the actual point by ten full minutes."
    },
    {
      id: "difficult-7-11",
      word: "Circuitous",
      partOfSpeech: "adj.",
      definition: "Longer and less direct than a straight path",
      example: "They took a circuitous route to avoid the highway construction."
    },
    {
      id: "difficult-7-12",
      word: "Tangential",
      partOfSpeech: "adj.",
      definition: "Only slightly connected to the main point",
      example: "His tangential comments kept pulling the meeting off track."
    },
    {
      id: "difficult-7-13",
      word: "Digressive",
      partOfSpeech: "adj.",
      definition: "Departing from the main subject in speech or writing",
      example: "The professor's digressive lectures often ran well past the bell."
    },
    {
      id: "difficult-7-14",
      word: "Obfuscate",
      partOfSpeech: "v.",
      definition: "To deliberately make something unclear or confusing",
      example: "Company lawyers seemed to obfuscate rather than answer the question."
    },
    {
      id: "difficult-7-15",
      word: "Occlude",
      partOfSpeech: "v.",
      definition: "To block or obstruct something",
      example: "Thick clouds occluded any view of the eclipse that afternoon."
    },
    {
      id: "difficult-7-16",
      word: "Indeterminate",
      partOfSpeech: "adj.",
      definition: "Not exactly known or fixed; vague",
      example: "The exact cause of the fire remains indeterminate."
    },
    {
      id: "difficult-7-17",
      word: "Amorphous",
      partOfSpeech: "adj.",
      definition: "Without a clearly defined shape or form",
      example: "The group's goals remained amorphous well into the second meeting."
    },
    {
      id: "difficult-7-18",
      word: "Diffuse",
      partOfSpeech: "adj.",
      definition: "Spread out over a large area; not concentrated",
      example: "The essay's argument felt diffuse, touching on too many ideas at once."
    },
    {
      id: "difficult-7-19",
      word: "Perplexity",
      partOfSpeech: "n.",
      definition: "The state of being confused or puzzled",
      example: "Her perplexity grew with every new clue in the case."
    },
    {
      id: "difficult-7-20",
      word: "Indistinguishable",
      partOfSpeech: "adj.",
      definition: "Not able to be identified as different or distinct",
      example: "From a distance, the two buildings were nearly indistinguishable."
    },
    {
      id: "difficult-7-21",
      word: "Unfathomable",
      partOfSpeech: "adj.",
      definition: "Impossible to understand or comprehend fully",
      example: "The scale of the ancient ruins felt almost unfathomable."
    },
    {
      id: "difficult-7-22",
      word: "Inexplicable",
      partOfSpeech: "adj.",
      definition: "Impossible to explain or account for",
      example: "Her sudden change in mood seemed completely inexplicable."
    },
    {
      id: "difficult-7-23",
      word: "Elusive",
      partOfSpeech: "adj.",
      definition: "Difficult to find, catch, or achieve",
      example: "A clear answer to the question remained frustratingly elusive."
    },
    {
      id: "difficult-7-24",
      word: "Confounding",
      partOfSpeech: "adj.",
      definition: "Causing confusion or bewilderment",
      example: "The results were confounding, contradicting every earlier study."
    },
    {
      id: "difficult-7-25",
      word: "Impervious",
      partOfSpeech: "adj.",
      definition: "Not able to be affected or influenced by something",
      example: "He remained impervious to criticism, no matter how harsh."
    }
  ],
  "difficult-8": [
    {
      id: "difficult-8-1",
      word: "Profound",
      partOfSpeech: "adj.",
      definition: "Very great or intense; showing deep insight",
      example: "The book had a profound effect on how she viewed her own family."
    },
    {
      id: "difficult-8-2",
      word: "Quandary",
      partOfSpeech: "n.",
      definition: "A state of uncertainty over what to do in a difficult situation",
      example: "He was in a real quandary about which job offer to accept."
    },
    {
      id: "difficult-8-3",
      word: "Conundrum",
      partOfSpeech: "n.",
      definition: "A confusing and difficult problem or question",
      example: "Balancing cost and quality remained a constant conundrum for the team."
    },
    {
      id: "difficult-8-4",
      word: "Ostensible",
      partOfSpeech: "adj.",
      definition: "Stated or appearing to be true, though not necessarily so",
      example: "The ostensible reason for the meeting was budget, but layoffs followed."
    },
    {
      id: "difficult-8-5",
      word: "Veneer",
      partOfSpeech: "n.",
      definition: "An attractive appearance that conceals a less pleasant reality",
      example: "Behind the veneer of politeness, the office was full of tension."
    },
    {
      id: "difficult-8-6",
      word: "Facade",
      partOfSpeech: "n.",
      definition: "A false appearance meant to conceal something unpleasant",
      example: "Her cheerful facade hid how exhausted she really was."
    },
    {
      id: "difficult-8-7",
      word: "Pretense",
      partOfSpeech: "n.",
      definition: "A false show of a particular quality or intention",
      example: "He called under the pretense of checking in, but really wanted a favor."
    },
    {
      id: "difficult-8-8",
      word: "Artifice",
      partOfSpeech: "n.",
      definition: "Clever trickery used to deceive others",
      example: "The magician's whole act relied on artifice and misdirection."
    },
    {
      id: "difficult-8-9",
      word: "Subterfuge",
      partOfSpeech: "n.",
      definition: "Deceit used to achieve a goal",
      example: "The spy relied on subterfuge to gain access to the building."
    },
    {
      id: "difficult-8-10",
      word: "Chicanery",
      partOfSpeech: "n.",
      definition: "The use of trickery to achieve a political, financial, or legal goal",
      example: "Investigators uncovered years of financial chicanery at the firm."
    },
    {
      id: "difficult-8-11",
      word: "Duplicity",
      partOfSpeech: "n.",
      definition: "Deceitfulness; the act of saying one thing and doing another",
      example: "His duplicity was exposed when the two contracts didn't match."
    },
    {
      id: "difficult-8-12",
      word: "Machinations",
      partOfSpeech: "n.",
      definition: "Secret and complicated plots meant to achieve an end",
      example: "The novel follows the political machinations of a royal court."
    },
    {
      id: "difficult-8-13",
      word: "Clandestine",
      partOfSpeech: "adj.",
      definition: "Kept secret, especially because it is illicit",
      example: "They held a clandestine meeting far from the office."
    },
    {
      id: "difficult-8-14",
      word: "Surreptitious",
      partOfSpeech: "adj.",
      definition: "Done secretly or stealthily",
      example: "She took a surreptitious glance at her phone during the lecture."
    },
    {
      id: "difficult-8-15",
      word: "Covert",
      partOfSpeech: "adj.",
      definition: "Not openly acknowledged or displayed; secret",
      example: "The agency ran a covert operation for nearly two years."
    },
    {
      id: "difficult-8-16",
      word: "Furtive",
      partOfSpeech: "adj.",
      definition: "Attempting to avoid notice; secretive",
      example: "He gave a furtive look over his shoulder before speaking."
    },
    {
      id: "difficult-8-17",
      word: "Insidious",
      partOfSpeech: "adj.",
      definition: "Proceeding in a gradual, harmful way that isn't immediately noticed",
      example: "The insidious spread of misinformation is hard to counter."
    },
    {
      id: "difficult-8-18",
      word: "Nefarious",
      partOfSpeech: "adj.",
      definition: "Wicked or criminal in nature",
      example: "The film's villain hatches a nefarious plan to seize the company."
    },
    {
      id: "difficult-8-19",
      word: "Malevolent",
      partOfSpeech: "adj.",
      definition: "Wishing harm to others; having evil intentions",
      example: "The story's malevolent narrator slowly reveals his true motives."
    },
    {
      id: "difficult-8-20",
      word: "Benign",
      partOfSpeech: "adj.",
      definition: "Gentle and harmless; not threatening",
      example: "Thankfully, the tumor turned out to be benign."
    },
    {
      id: "difficult-8-21",
      word: "Innocuous",
      partOfSpeech: "adj.",
      definition: "Not harmful or offensive",
      example: "It seemed like an innocuous comment, but it upset her deeply."
    },
    {
      id: "difficult-8-22",
      word: "Salubrious",
      partOfSpeech: "adj.",
      definition: "Health-giving; beneficial",
      example: "They moved to the coast for its salubrious sea air."
    },
    {
      id: "difficult-8-23",
      word: "Deleterious",
      partOfSpeech: "adj.",
      definition: "Causing harm or damage",
      example: "The chemical had a deleterious effect on the local water supply."
    },
    {
      id: "difficult-8-24",
      word: "Pernicious",
      partOfSpeech: "adj.",
      definition: "Having a harmful effect, especially in a gradual or subtle way",
      example: "The pernicious rumor spread quietly through the entire office."
    },
    {
      id: "difficult-8-25",
      word: "Gratuitous",
      partOfSpeech: "adj.",
      definition: "Uncalled for; lacking good reason; unnecessary",
      example: "Critics called the film's violence gratuitous and unnecessary to the plot."
    }
  ],
  "easy-9": [
    {
      id: "easy-9-1",
      word: "Abhor",
      partOfSpeech: "v.",
      definition: "To hate or detest intensely",
      example: "She had come to abhor the smell of the chemical plant near her old apartment."
    },
    {
      id: "easy-9-2",
      word: "Abide",
      partOfSpeech: "v.",
      definition: "To tolerate or accept something; to remain",
      example: "He couldn't abide the constant noise from the construction site next door."
    },
    {
      id: "easy-9-3",
      word: "Accessible",
      partOfSpeech: "adj.",
      definition: "Easy to reach, obtain, or understand",
      example: "The museum's new wing was designed to be fully accessible to visitors using wheelchairs."
    },
    {
      id: "easy-9-4",
      word: "Acclaim",
      partOfSpeech: "n.",
      definition: "Enthusiastic public praise",
      example: "The young violinist received widespread acclaim after her debut performance."
    },
    {
      id: "easy-9-5",
      word: "Accommodating",
      partOfSpeech: "adj.",
      definition: "Willing to help or fulfill someone's wishes",
      example: "The accommodating hotel staff moved their reservation without charging a fee."
    },
    {
      id: "easy-9-6",
      word: "Accord",
      partOfSpeech: "n.",
      definition: "An official agreement or settlement",
      example: "After months of negotiation, the two nations finally reached an accord on trade."
    },
    {
      id: "easy-9-7",
      word: "Adept",
      partOfSpeech: "adj.",
      definition: "Very skilled or proficient at something",
      example: "Years of practice made her remarkably adept at repairing old clocks."
    },
    {
      id: "easy-9-8",
      word: "Adhere",
      partOfSpeech: "v.",
      definition: "To stick firmly to a surface; to follow a rule closely",
      example: "All contractors must adhere to the updated safety codes on site."
    },
    {
      id: "easy-9-9",
      word: "Adorn",
      partOfSpeech: "v.",
      definition: "To decorate or add beauty to something",
      example: "Fresh flowers adorned every table at the wedding reception."
    },
    {
      id: "easy-9-10",
      word: "Adverse",
      partOfSpeech: "adj.",
      definition: "Harmful or unfavorable",
      example: "The medication's adverse effects included drowsiness and mild nausea."
    },
    {
      id: "easy-9-11",
      word: "Aerial",
      partOfSpeech: "adj.",
      definition: "Relating to or taking place in the air",
      example: "The drone captured stunning aerial footage of the canyon at sunset."
    },
    {
      id: "easy-9-12",
      word: "Aesthetic",
      partOfSpeech: "adj.",
      definition: "Concerned with beauty or artistic appreciation",
      example: "The architect prioritized aesthetic appeal over strict functionality in the lobby design."
    },
    {
      id: "easy-9-13",
      word: "Affluent",
      partOfSpeech: "adj.",
      definition: "Having a great deal of wealth",
      example: "The affluent suburb was known for its large houses and manicured lawns."
    },
    {
      id: "easy-9-14",
      word: "Agile",
      partOfSpeech: "adj.",
      definition: "Able to move quickly and easily",
      example: "The agile gymnast landed the difficult routine without a single wobble."
    },
    {
      id: "easy-9-15",
      word: "Agnostic",
      partOfSpeech: "adj.",
      definition: "Believing that the existence of God cannot be proven either way",
      example: "Raised in a religious household, he later described himself as agnostic."
    },
    {
      id: "easy-9-16",
      word: "Agriculture",
      partOfSpeech: "n.",
      definition: "The practice of farming, including growing crops and raising livestock",
      example: "The region's economy still depends heavily on agriculture and food exports."
    },
    {
      id: "easy-9-17",
      word: "Alias",
      partOfSpeech: "n.",
      definition: "A false or assumed name",
      example: "The con artist used a different alias in every city he visited."
    },
    {
      id: "easy-9-18",
      word: "Allay",
      partOfSpeech: "v.",
      definition: "To reduce fear, worry, or doubt",
      example: "The pilot's calm announcement helped allay the passengers' fears during the turbulence."
    },
    {
      id: "easy-9-19",
      word: "Allege",
      partOfSpeech: "v.",
      definition: "To state as fact without offering proof",
      example: "Prosecutors allege that the executive falsified the company's financial records."
    },
    {
      id: "easy-9-20",
      word: "Alleviate",
      partOfSpeech: "v.",
      definition: "To make suffering or a problem less severe",
      example: "The new medication helped alleviate her chronic back pain."
    },
    {
      id: "easy-9-21",
      word: "Amicable",
      partOfSpeech: "adj.",
      definition: "Friendly and free of serious disagreement",
      example: "The couple reached an amicable divorce settlement without going to court."
    },
    {
      id: "easy-9-22",
      word: "Anecdote",
      partOfSpeech: "n.",
      definition: "A short, entertaining account of a real incident",
      example: "He opened his speech with a funny anecdote about his first day on the job."
    },
    {
      id: "easy-9-23",
      word: "Anguish",
      partOfSpeech: "n.",
      definition: "Severe mental or physical suffering",
      example: "The family's anguish was visible as they waited outside the hospital for news."
    },
    {
      id: "easy-9-24",
      word: "Animated",
      partOfSpeech: "adj.",
      definition: "Full of energy and enthusiasm; lively",
      example: "The debate grew animated once the topic of funding came up."
    },
    {
      id: "easy-9-25",
      word: "Annex",
      partOfSpeech: "v.",
      definition: "To incorporate territory into an existing state or area",
      example: "The empire moved quickly to annex the smaller kingdom after the war."
    }
  ],
  "easy-10": [
    {
      id: "easy-10-1",
      word: "Anonymous",
      partOfSpeech: "adj.",
      definition: "Not identified by name; of unknown origin",
      example: "The donation came from an anonymous benefactor who wished to remain unnamed."
    },
    {
      id: "easy-10-2",
      word: "Anxiety",
      partOfSpeech: "n.",
      definition: "A feeling of worry or unease about an uncertain outcome",
      example: "Her anxiety grew as the interview time drew closer."
    },
    {
      id: "easy-10-3",
      word: "Apathetic",
      partOfSpeech: "adj.",
      definition: "Showing little interest or concern",
      example: "Voter turnout dropped as more young people grew apathetic about local elections."
    },
    {
      id: "easy-10-4",
      word: "Appalling",
      partOfSpeech: "adj.",
      definition: "Causing shock, horror, or dismay",
      example: "Inspectors described the factory's safety violations as appalling."
    },
    {
      id: "easy-10-5",
      word: "Appease",
      partOfSpeech: "v.",
      definition: "To calm or satisfy someone by giving in to their demands",
      example: "The manager offered a refund to appease the angry customer."
    },
    {
      id: "easy-10-6",
      word: "Appraise",
      partOfSpeech: "v.",
      definition: "To assess the value or quality of something",
      example: "A specialist was hired to appraise the antique furniture before the auction."
    },
    {
      id: "easy-10-7",
      word: "Apprehend",
      partOfSpeech: "v.",
      definition: "To arrest someone; to understand something",
      example: "Police were able to apprehend the suspect just blocks from the scene."
    },
    {
      id: "easy-10-8",
      word: "Appropriate",
      partOfSpeech: "v.",
      definition: "To take something for one's own use, often without permission",
      example: "The committee voted to appropriate additional funds for the new library wing."
    },
    {
      id: "easy-10-9",
      word: "Aquatic",
      partOfSpeech: "adj.",
      definition: "Relating to water; living or growing in water",
      example: "The aquarium's newest exhibit features rare aquatic plants from the Amazon."
    },
    {
      id: "easy-10-10",
      word: "Arbiter",
      partOfSpeech: "n.",
      definition: "One who has the power to settle a dispute or decide an outcome",
      example: "As the final arbiter of the contest, she alone would choose the winner."
    },
    {
      id: "easy-10-11",
      word: "Arbitration",
      partOfSpeech: "n.",
      definition: "The process of settling a dispute using an outside decision-maker",
      example: "The two companies agreed to resolve their contract dispute through arbitration."
    },
    {
      id: "easy-10-12",
      word: "Ardor",
      partOfSpeech: "n.",
      definition: "Great enthusiasm or passion",
      example: "He pursued the research project with the same ardor he'd shown as a student."
    },
    {
      id: "easy-10-13",
      word: "Arid",
      partOfSpeech: "adj.",
      definition: "Extremely dry, especially due to lack of rainfall",
      example: "Few crops survive in the region's arid, sun-baked soil."
    },
    {
      id: "easy-10-14",
      word: "Artifact",
      partOfSpeech: "n.",
      definition: "An object made by a person, especially one of historical interest",
      example: "Archaeologists carefully catalogued each artifact found at the dig site."
    },
    {
      id: "easy-10-15",
      word: "Artisan",
      partOfSpeech: "n.",
      definition: "A skilled craftsperson who makes things by hand",
      example: "The market was full of local artisans selling handmade pottery and jewelry."
    },
    {
      id: "easy-10-16",
      word: "Ascertain",
      partOfSpeech: "v.",
      definition: "To find out or learn something for certain",
      example: "Investigators worked for weeks to ascertain the exact cause of the fire."
    },
    {
      id: "easy-10-17",
      word: "Aspire",
      partOfSpeech: "v.",
      definition: "To have a strong desire to achieve something",
      example: "From a young age, she aspired to become a surgeon."
    },
    {
      id: "easy-10-18",
      word: "Assail",
      partOfSpeech: "v.",
      definition: "To attack someone or something violently or verbally",
      example: "Critics assailed the new policy as shortsighted and poorly planned."
    },
    {
      id: "easy-10-19",
      word: "Assess",
      partOfSpeech: "v.",
      definition: "To evaluate or estimate the nature or quality of something",
      example: "Engineers were sent to assess the bridge's structural damage after the storm."
    },
    {
      id: "easy-10-20",
      word: "Astute",
      partOfSpeech: "adj.",
      definition: "Having sharp judgment; shrewd",
      example: "Her astute observation about the budget saved the company thousands of dollars."
    },
    {
      id: "easy-10-21",
      word: "Asylum",
      partOfSpeech: "n.",
      definition: "Protection granted to someone fleeing danger; a place of refuge",
      example: "The family sought asylum after fleeing the conflict in their home country."
    },
    {
      id: "easy-10-22",
      word: "Atone",
      partOfSpeech: "v.",
      definition: "To make amends for wrongdoing",
      example: "He spent years trying to atone for the mistakes of his youth."
    },
    {
      id: "easy-10-23",
      word: "Attain",
      partOfSpeech: "v.",
      definition: "To succeed in achieving something through effort",
      example: "It took a decade of training for her to attain the rank of black belt."
    },
    {
      id: "easy-10-24",
      word: "Attribute",
      partOfSpeech: "v.",
      definition: "To regard something as being caused by a particular source",
      example: "Doctors attribute the outbreak to contaminated drinking water."
    },
    {
      id: "easy-10-25",
      word: "Atypical",
      partOfSpeech: "adj.",
      definition: "Not representative of a type; unusual",
      example: "His atypical approach to management surprised the more traditional board members."
    }
  ],
  "easy-12": [
    {
      id: "easy-12-1",
      word: "Calamity",
      partOfSpeech: "n.",
      definition: "A disastrous event causing great damage or suffering",
      example: "The flood was the worst calamity the small town had faced in decades."
    },
    {
      id: "easy-12-2",
      word: "Calibrate",
      partOfSpeech: "v.",
      definition: "To adjust an instrument precisely for accuracy",
      example: "Technicians calibrate the telescope's mirrors before every major observation."
    },
    {
      id: "easy-12-3",
      word: "Callous",
      partOfSpeech: "adj.",
      definition: "Showing no concern for the feelings of others; hardened",
      example: "His callous remark about the layoffs offended nearly everyone in the room."
    },
    {
      id: "easy-12-4",
      word: "Camaraderie",
      partOfSpeech: "n.",
      definition: "Mutual trust and friendship among people who work or spend time together",
      example: "The long road trip built a real sense of camaraderie among the team."
    },
    {
      id: "easy-12-5",
      word: "Canny",
      partOfSpeech: "adj.",
      definition: "Shrewd, especially in practical or financial matters",
      example: "Her canny investments paid off well before she reached retirement."
    },
    {
      id: "easy-12-6",
      word: "Canvas",
      partOfSpeech: "n.",
      definition: "A piece of cloth used for painting; also, to survey or examine",
      example: "The artist stretched a fresh canvas before beginning the new portrait."
    },
    {
      id: "easy-12-7",
      word: "Captivate",
      partOfSpeech: "v.",
      definition: "To attract and hold the interest of someone completely",
      example: "The storyteller captivated the children for nearly an hour without a single interruption."
    },
    {
      id: "easy-12-8",
      word: "Carouse",
      partOfSpeech: "v.",
      definition: "To drink alcohol and enjoy oneself in a noisy, lively way",
      example: "The sailors caroused in the tavern late into the night before setting sail."
    },
    {
      id: "easy-12-9",
      word: "Catalog",
      partOfSpeech: "v.",
      definition: "To list or classify items systematically",
      example: "It took the librarian months to catalog the entire donated collection."
    },
    {
      id: "easy-12-10",
      word: "Cerebral",
      partOfSpeech: "adj.",
      definition: "Relating to intellect rather than emotion",
      example: "Critics praised the film for its cerebral, thought-provoking plot."
    },
    {
      id: "easy-12-11",
      word: "Chaos",
      partOfSpeech: "n.",
      definition: "Complete disorder and confusion",
      example: "The power outage plunged the entire office into chaos."
    },
    {
      id: "easy-12-12",
      word: "Cherish",
      partOfSpeech: "v.",
      definition: "To feel or show great affection for something",
      example: "She still cherishes the handwritten letters her grandfather sent her."
    },
    {
      id: "easy-12-13",
      word: "Chide",
      partOfSpeech: "v.",
      definition: "To scold or express disapproval mildly",
      example: "The teacher gently chided the students for forgetting their homework again."
    },
    {
      id: "easy-12-14",
      word: "Choreography",
      partOfSpeech: "n.",
      definition: "The arrangement of movements in a dance or performance",
      example: "The show's choreography combined ballet with elements of modern street dance."
    },
    {
      id: "easy-12-15",
      word: "Chronicle",
      partOfSpeech: "v.",
      definition: "To record events in the order they happened",
      example: "The documentary chronicles the rise and fall of the once-famous factory town."
    },
    {
      id: "easy-12-16",
      word: "Chronological",
      partOfSpeech: "adj.",
      definition: "Arranged in the order in which events occurred",
      example: "The exhibit displays the artist's paintings in chronological order."
    },
    {
      id: "easy-12-17",
      word: "Circumspect",
      partOfSpeech: "adj.",
      definition: "Careful to consider consequences before acting",
      example: "After the last lawsuit, the company became far more circumspect about its advertising."
    },
    {
      id: "easy-12-18",
      word: "Circumvent",
      partOfSpeech: "v.",
      definition: "To find a way around an obstacle or rule",
      example: "The students found a clever way to circumvent the school's outdated printing limits."
    },
    {
      id: "easy-12-19",
      word: "Clamor",
      partOfSpeech: "n.",
      definition: "A loud, confused noise, especially of people demanding something",
      example: "There was a public clamor for the mayor's resignation after the scandal broke."
    },
    {
      id: "easy-12-20",
      word: "Cleave",
      partOfSpeech: "v.",
      definition: "To split something apart; or, to stick to something firmly",
      example: "The axe was sharp enough to cleave the log in a single stroke."
    },
    {
      id: "easy-12-21",
      word: "Clemency",
      partOfSpeech: "n.",
      definition: "Mercy shown toward someone who could be treated harshly",
      example: "The governor granted clemency to several nonviolent offenders before leaving office."
    },
    {
      id: "easy-12-22",
      word: "Clergy",
      partOfSpeech: "n.",
      definition: "Officials of a religious institution",
      example: "Members of the clergy gathered for the annual conference downtown."
    },
    {
      id: "easy-12-23",
      word: "Coerce",
      partOfSpeech: "v.",
      definition: "To force someone to act through threats or pressure",
      example: "The whistleblower claimed she had been coerced into signing the agreement."
    },
    {
      id: "easy-12-24",
      word: "Cognizant",
      partOfSpeech: "adj.",
      definition: "Aware of or informed about something",
      example: "Employees should remain cognizant of the new safety procedures at all times."
    },
    {
      id: "easy-12-25",
      word: "Colloquial",
      partOfSpeech: "adj.",
      definition: "Used in ordinary or familiar conversation rather than formal speech",
      example: "The professor noted several colloquial expressions in the student's formal essay."
    }
  ],
  "easy-13": [
    {
      id: "easy-13-1",
      word: "Commendation",
      partOfSpeech: "n.",
      definition: "An official award or expression of praise",
      example: "The firefighter received a commendation for his role in the rescue."
    },
    {
      id: "easy-13-2",
      word: "Compensate",
      partOfSpeech: "v.",
      definition: "To give something in return for loss, damage, or service",
      example: "The airline agreed to compensate passengers for the canceled flight."
    },
    {
      id: "easy-13-3",
      word: "Complacency",
      partOfSpeech: "n.",
      definition: "Smug self-satisfaction, often leading to a lack of awareness of danger",
      example: "Years of easy wins led to a dangerous complacency within the champion team."
    },
    {
      id: "easy-13-4",
      word: "Complement",
      partOfSpeech: "v.",
      definition: "To complete or enhance something by adding a fitting feature",
      example: "The light sauce perfectly complements the richness of the pasta."
    },
    {
      id: "easy-13-5",
      word: "Compliant",
      partOfSpeech: "adj.",
      definition: "Willing to follow rules or requests",
      example: "The new employee was quiet and compliant during his first week of training."
    },
    {
      id: "easy-13-6",
      word: "Compliment",
      partOfSpeech: "n.",
      definition: "An expression of praise or admiration",
      example: "She blushed at the unexpected compliment about her presentation."
    },
    {
      id: "easy-13-7",
      word: "Compound",
      partOfSpeech: "v.",
      definition: "To make a situation worse by adding to it",
      example: "Missing the connecting flight only compounded their travel troubles."
    },
    {
      id: "easy-13-8",
      word: "Compress",
      partOfSpeech: "v.",
      definition: "To press or squeeze something into a smaller space",
      example: "The software compresses large video files without noticeably reducing quality."
    },
    {
      id: "easy-13-9",
      word: "Concord",
      partOfSpeech: "n.",
      definition: "A state of agreement or harmony",
      example: "The peace treaty finally brought concord between the two rival nations."
    },
    {
      id: "easy-13-10",
      word: "Condone",
      partOfSpeech: "v.",
      definition: "To accept or overlook behavior that is considered wrong",
      example: "The company made clear it would not condone any form of harassment."
    },
    {
      id: "easy-13-11",
      word: "Confection",
      partOfSpeech: "n.",
      definition: "A sweet, elaborately made food item",
      example: "The bakery window displayed an impressive confection shaped like a castle."
    },
    {
      id: "easy-13-12",
      word: "Confidant",
      partOfSpeech: "n.",
      definition: "A person one trusts with private thoughts or secrets",
      example: "She had few close friends, but her sister was always her confidant."
    },
    {
      id: "easy-13-13",
      word: "Confound",
      partOfSpeech: "v.",
      definition: "To confuse or puzzle someone",
      example: "The magician's final trick continued to confound even seasoned performers."
    },
    {
      id: "easy-13-14",
      word: "Congregation",
      partOfSpeech: "n.",
      definition: "A gathering of people, especially for religious worship",
      example: "The pastor addressed the congregation about the upcoming food drive."
    },
    {
      id: "easy-13-15",
      word: "Consensus",
      partOfSpeech: "n.",
      definition: "General agreement among a group of people",
      example: "After a long meeting, the board finally reached a consensus on the budget."
    },
    {
      id: "easy-13-16",
      word: "Consign",
      partOfSpeech: "v.",
      definition: "To hand something over formally, often to a lesser fate",
      example: "The failed experiment was quietly consigned to the back of the storage room."
    },
    {
      id: "easy-13-17",
      word: "Consolation",
      partOfSpeech: "n.",
      definition: "Comfort given to someone after a loss or disappointment",
      example: "Losing the final was tough, but the team found some consolation in their record season."
    },
    {
      id: "easy-13-18",
      word: "Constituent",
      partOfSpeech: "n.",
      definition: "A voter represented by an elected official; also, a component part",
      example: "The senator held a town hall to hear directly from her constituents."
    },
    {
      id: "easy-13-19",
      word: "Constrain",
      partOfSpeech: "v.",
      definition: "To severely restrict the scope or freedom of something",
      example: "A tight budget constrained the design team's original vision for the building."
    },
    {
      id: "easy-13-20",
      word: "Construe",
      partOfSpeech: "v.",
      definition: "To interpret the meaning of a word or action",
      example: "Her silence during the meeting was construed by some as agreement."
    },
    {
      id: "easy-13-21",
      word: "Consumption",
      partOfSpeech: "n.",
      definition: "The act of using up a resource; the act of eating or drinking",
      example: "Household water consumption spikes during the hottest weeks of summer."
    },
    {
      id: "easy-13-22",
      word: "Contrite",
      partOfSpeech: "adj.",
      definition: "Feeling or expressing genuine remorse",
      example: "His contrite apology went a long way toward repairing the friendship."
    },
    {
      id: "easy-13-23",
      word: "Convene",
      partOfSpeech: "v.",
      definition: "To come together for a formal meeting",
      example: "The committee will convene next Tuesday to finalize the proposal."
    },
    {
      id: "easy-13-24",
      word: "Convention",
      partOfSpeech: "n.",
      definition: "A large formal gathering; also, an accepted rule or practice",
      example: "Thousands of fans attended the annual comic book convention downtown."
    },
    {
      id: "easy-13-25",
      word: "Convivial",
      partOfSpeech: "adj.",
      definition: "Friendly, lively, and enjoyable, especially in a social setting",
      example: "The restaurant's convivial atmosphere made it a favorite for group dinners."
    }
  ],
  "easy-14": [
    {
      id: "easy-14-1",
      word: "Copious",
      partOfSpeech: "adj.",
      definition: "Abundant; existing in large amounts",
      example: "She took copious notes during every single lecture."
    },
    {
      id: "easy-14-2",
      word: "Cordial",
      partOfSpeech: "adj.",
      definition: "Warm and friendly",
      example: "Despite their disagreement, the two rivals remained cordial throughout the debate."
    },
    {
      id: "easy-14-3",
      word: "Coronation",
      partOfSpeech: "n.",
      definition: "The ceremony of crowning a monarch",
      example: "Thousands lined the streets to watch the coronation procession."
    },
    {
      id: "easy-14-4",
      word: "Corrosive",
      partOfSpeech: "adj.",
      definition: "Tending to destroy or wear away gradually",
      example: "The corrosive chemical had eaten through the metal pipe within a year."
    },
    {
      id: "easy-14-5",
      word: "Cosmopolitan",
      partOfSpeech: "adj.",
      definition: "Familiar with and influenced by many different cultures",
      example: "The city's cosmopolitan food scene reflects its many immigrant communities."
    },
    {
      id: "easy-14-6",
      word: "Counteract",
      partOfSpeech: "v.",
      definition: "To reduce or neutralize the effect of something",
      example: "Regular exercise can help counteract the effects of a sedentary desk job."
    },
    {
      id: "easy-14-7",
      word: "Coup",
      partOfSpeech: "n.",
      definition: "A sudden, illegal seizure of power; also, a brilliant achievement",
      example: "The military coup forced the president to flee the country overnight."
    },
    {
      id: "easy-14-8",
      word: "Covet",
      partOfSpeech: "v.",
      definition: "To desire something, especially something belonging to someone else",
      example: "He openly coveted his neighbor's vintage motorcycle."
    },
    {
      id: "easy-14-9",
      word: "Credulity",
      partOfSpeech: "n.",
      definition: "A tendency to believe things too readily",
      example: "The con artist relied entirely on his victims' credulity."
    },
    {
      id: "easy-14-10",
      word: "Crescendo",
      partOfSpeech: "n.",
      definition: "A gradual increase in loudness or intensity",
      example: "The symphony built to a thunderous crescendo in its final movement."
    },
    {
      id: "easy-14-11",
      word: "Criteria",
      partOfSpeech: "n.",
      definition: "Standards used to judge or decide something",
      example: "Applicants must meet several strict criteria before being considered for the scholarship."
    },
    {
      id: "easy-14-12",
      word: "Culmination",
      partOfSpeech: "n.",
      definition: "The highest point or final result of a process",
      example: "The championship game was the culmination of an entire season of hard work."
    },
    {
      id: "easy-14-13",
      word: "Culpable",
      partOfSpeech: "adj.",
      definition: "Deserving blame for a wrongful act",
      example: "The investigation found the contractor culpable for the building's structural failure."
    },
    {
      id: "easy-14-14",
      word: "Cumulative",
      partOfSpeech: "adj.",
      definition: "Increasing in quantity by successive additions",
      example: "The final exam covers the cumulative material from the entire semester."
    },
    {
      id: "easy-14-15",
      word: "Cunning",
      partOfSpeech: "adj.",
      definition: "Skilled at achieving goals through deception",
      example: "The fox in the story is portrayed as cunning but ultimately careless."
    },
    {
      id: "easy-14-16",
      word: "Curt",
      partOfSpeech: "adj.",
      definition: "Rudely brief in speech or manner",
      example: "Her curt reply made it clear she didn't want to discuss it further."
    },
    {
      id: "easy-14-17",
      word: "Daunting",
      partOfSpeech: "adj.",
      definition: "Intimidating; discouraging in prospect",
      example: "Climbing the mountain without a guide seemed like a daunting task."
    },
    {
      id: "easy-14-18",
      word: "Dearth",
      partOfSpeech: "n.",
      definition: "A scarcity or lack of something",
      example: "The rural town suffered from a dearth of qualified doctors."
    },
    {
      id: "easy-14-19",
      word: "Debacle",
      partOfSpeech: "n.",
      definition: "A complete failure, often embarrassing",
      example: "The product launch turned into a debacle when the servers crashed within minutes."
    },
    {
      id: "easy-14-20",
      word: "Deface",
      partOfSpeech: "v.",
      definition: "To damage or spoil the appearance of something",
      example: "Vandals defaced the statue with spray paint overnight."
    },
    {
      id: "easy-14-21",
      word: "Defer",
      partOfSpeech: "v.",
      definition: "To postpone an action; to submit to another's judgment",
      example: "The board decided to defer its final decision until next quarter."
    },
    {
      id: "easy-14-22",
      word: "Deferential",
      partOfSpeech: "adj.",
      definition: "Showing respect for another's authority or wishes",
      example: "The new intern was deferential to every suggestion the senior editor made."
    },
    {
      id: "easy-14-23",
      word: "Deft",
      partOfSpeech: "adj.",
      definition: "Skillful and quick in movement",
      example: "With a few deft strokes, the calligrapher finished the entire scroll."
    },
    {
      id: "easy-14-24",
      word: "Defunct",
      partOfSpeech: "adj.",
      definition: "No longer existing or functioning",
      example: "The once-popular chain of video stores is now entirely defunct."
    },
    {
      id: "easy-14-25",
      word: "Delegate",
      partOfSpeech: "v.",
      definition: "To assign responsibility or authority to someone else",
      example: "A good manager knows when to delegate tasks rather than doing everything herself."
    }
  ],
  "easy-15": [
    {
      id: "easy-15-1",
      word: "Demean",
      partOfSpeech: "v.",
      definition: "To lower the dignity or reputation of someone",
      example: "He refused to demean his opponent, even after the harsh personal attacks."
    },
    {
      id: "easy-15-2",
      word: "Deplore",
      partOfSpeech: "v.",
      definition: "To feel or express strong disapproval of something",
      example: "World leaders deplored the attack on the humanitarian convoy."
    },
    {
      id: "easy-15-3",
      word: "Derivative",
      partOfSpeech: "adj.",
      definition: "Not original; based heavily on something else",
      example: "Critics called the sequel derivative, borrowing too much from the first film."
    },
    {
      id: "easy-15-4",
      word: "Desolate",
      partOfSpeech: "adj.",
      definition: "Deserted and bleak; lacking comfort or hope",
      example: "The desolate landscape stretched for miles without a single tree in sight."
    },
    {
      id: "easy-15-5",
      word: "Despondent",
      partOfSpeech: "adj.",
      definition: "Feeling low spirits from loss of hope or courage",
      example: "He grew despondent after losing the case he had worked on for years."
    },
    {
      id: "easy-15-6",
      word: "Despot",
      partOfSpeech: "n.",
      definition: "A ruler with absolute, often cruel, power",
      example: "The despot ruled the small nation for over three decades with an iron fist."
    },
    {
      id: "easy-15-7",
      word: "Destitute",
      partOfSpeech: "adj.",
      definition: "Extremely poor, lacking basic necessities",
      example: "The earthquake left thousands of families destitute and homeless."
    },
    {
      id: "easy-15-8",
      word: "Deter",
      partOfSpeech: "v.",
      definition: "To discourage someone from doing something through fear or difficulty",
      example: "Bright motion-sensor lighting is often enough to deter burglars."
    },
    {
      id: "easy-15-9",
      word: "Devious",
      partOfSpeech: "adj.",
      definition: "Willing to lie or deceive to achieve a goal",
      example: "The devious scheme involved forging three separate signatures."
    },
    {
      id: "easy-15-10",
      word: "Dialect",
      partOfSpeech: "n.",
      definition: "A regional or social variety of a language",
      example: "Her grandmother still spoke the old dialect from her home village."
    },
    {
      id: "easy-15-11",
      word: "Diffident",
      partOfSpeech: "adj.",
      definition: "Lacking confidence in oneself; shy",
      example: "The diffident young poet rarely read his own work aloud."
    },
    {
      id: "easy-15-12",
      word: "Diminutive",
      partOfSpeech: "adj.",
      definition: "Extremely small",
      example: "The diminutive sports car surprised everyone with its powerful engine."
    },
    {
      id: "easy-15-13",
      word: "Disavow",
      partOfSpeech: "v.",
      definition: "To deny responsibility for or connection with something",
      example: "The organization quickly disavowed the extremist statements made by a former member."
    },
    {
      id: "easy-15-14",
      word: "Disclose",
      partOfSpeech: "v.",
      definition: "To make secret or new information known",
      example: "Companies must disclose any known safety risks to their shareholders."
    },
    {
      id: "easy-15-15",
      word: "Discordant",
      partOfSpeech: "adj.",
      definition: "Disagreeing or clashing, especially in sound",
      example: "A discordant note in the final chord left the audience oddly unsettled."
    },
    {
      id: "easy-15-16",
      word: "Discretion",
      partOfSpeech: "n.",
      definition: "The freedom to decide what should be done; careful judgment",
      example: "The judge used her discretion to reduce the defendant's sentence."
    },
    {
      id: "easy-15-17",
      word: "Disdain",
      partOfSpeech: "n.",
      definition: "A feeling that someone or something is unworthy of respect",
      example: "The critic reviewed the film with barely concealed disdain."
    },
    {
      id: "easy-15-18",
      word: "Disgruntled",
      partOfSpeech: "adj.",
      definition: "Angry or dissatisfied",
      example: "Several disgruntled customers left one-star reviews after the price increase."
    },
    {
      id: "easy-15-19",
      word: "Disheartened",
      partOfSpeech: "adj.",
      definition: "Having lost hope, enthusiasm, or confidence",
      example: "The team looked disheartened after blowing a ten-point lead."
    },
    {
      id: "easy-15-20",
      word: "Dispatch",
      partOfSpeech: "v.",
      definition: "To send someone or something off promptly for a purpose",
      example: "The company dispatched a technician within the hour to fix the outage."
    },
    {
      id: "easy-15-21",
      word: "Dispel",
      partOfSpeech: "v.",
      definition: "To make a feeling, belief, or rumor disappear",
      example: "The press conference was held to dispel rumors of the CEO's resignation."
    },
    {
      id: "easy-15-22",
      word: "Disperse",
      partOfSpeech: "v.",
      definition: "To scatter in different directions",
      example: "Police asked the crowd to disperse peacefully after the rally ended."
    },
    {
      id: "easy-15-23",
      word: "Dissent",
      partOfSpeech: "n.",
      definition: "Disagreement with an official or widely held opinion",
      example: "One justice's written dissent argued the ruling would set a dangerous precedent."
    },
    {
      id: "easy-15-24",
      word: "Dissuade",
      partOfSpeech: "v.",
      definition: "To persuade someone not to take a particular course of action",
      example: "Her mentor tried to dissuade her from quitting so early in her career."
    },
    {
      id: "easy-15-25",
      word: "Divine",
      partOfSpeech: "adj.",
      definition: "Relating to God or a god; wonderful",
      example: "The choir's harmony sounded almost divine in the empty cathedral."
    }
  ],
  "easy-16": [
    {
      id: "easy-16-1",
      word: "Divisive",
      partOfSpeech: "adj.",
      definition: "Tending to cause disagreement among a group of people",
      example: "The proposed tax hike proved to be a divisive issue at the town meeting."
    },
    {
      id: "easy-16-2",
      word: "Divulge",
      partOfSpeech: "v.",
      definition: "To reveal private or secret information",
      example: "The source refused to divulge how she had obtained the leaked documents."
    },
    {
      id: "easy-16-3",
      word: "Dormant",
      partOfSpeech: "adj.",
      definition: "Temporarily inactive, but capable of becoming active again",
      example: "The volcano had lain dormant for over two hundred years."
    },
    {
      id: "easy-16-4",
      word: "Dour",
      partOfSpeech: "adj.",
      definition: "Stern, gloomy, and unfriendly in manner",
      example: "The dour librarian rarely smiled, even at the youngest visitors."
    },
    {
      id: "easy-16-5",
      word: "Duress",
      partOfSpeech: "n.",
      definition: "Threats or force used to compel someone to do something",
      example: "He claimed he had signed the confession under duress."
    },
    {
      id: "easy-16-6",
      word: "Dynamic",
      partOfSpeech: "adj.",
      definition: "Characterized by constant change or activity; energetic",
      example: "The startup thrives in a dynamic, fast-changing industry."
    },
    {
      id: "easy-16-7",
      word: "Ebullient",
      partOfSpeech: "adj.",
      definition: "Overflowing with enthusiasm or excitement",
      example: "The ebullient coach could barely contain his excitement after the win."
    },
    {
      id: "easy-16-8",
      word: "Eclectic",
      partOfSpeech: "adj.",
      definition: "Deriving ideas or style from a broad range of sources",
      example: "Her apartment had an eclectic mix of vintage and modern furniture."
    },
    {
      id: "easy-16-9",
      word: "Ecstatic",
      partOfSpeech: "adj.",
      definition: "Feeling or expressing overwhelming happiness",
      example: "The graduates were ecstatic as they threw their caps into the air."
    },
    {
      id: "easy-16-10",
      word: "Edict",
      partOfSpeech: "n.",
      definition: "An official order or proclamation",
      example: "The king issued an edict banning the sale of weapons within the city walls."
    },
    {
      id: "easy-16-11",
      word: "Efface",
      partOfSpeech: "v.",
      definition: "To erase or remove something, often a memory or trace",
      example: "Years of erosion had all but effaced the carvings on the old monument."
    },
    {
      id: "easy-16-12",
      word: "Elaborate",
      partOfSpeech: "adj.",
      definition: "Involving many carefully arranged parts or details",
      example: "The wedding featured an elaborate seven-course dinner."
    },
    {
      id: "easy-16-13",
      word: "Elicit",
      partOfSpeech: "v.",
      definition: "To draw out a response or reaction",
      example: "The teacher's question was designed to elicit a genuine debate among students."
    },
    {
      id: "easy-16-14",
      word: "Elude",
      partOfSpeech: "v.",
      definition: "To escape or avoid someone or something skillfully",
      example: "The fugitive managed to elude police for nearly three weeks."
    },
    {
      id: "easy-16-15",
      word: "Embellish",
      partOfSpeech: "v.",
      definition: "To make something more attractive by adding decorative details",
      example: "He tends to embellish his stories a little more each time he tells them."
    },
    {
      id: "easy-16-16",
      word: "Embezzle",
      partOfSpeech: "v.",
      definition: "To steal money placed in one's trust or belonging to an employer",
      example: "The accountant was arrested for embezzling funds over several years."
    },
    {
      id: "easy-16-17",
      word: "Eminent",
      partOfSpeech: "adj.",
      definition: "Famous and respected within a particular field",
      example: "An eminent historian was brought in to consult on the documentary."
    },
    {
      id: "easy-16-18",
      word: "Emote",
      partOfSpeech: "v.",
      definition: "To express emotion, often in an exaggerated or theatrical way",
      example: "The young actor still needed to learn how to emote without overacting."
    },
    {
      id: "easy-16-19",
      word: "Empathy",
      partOfSpeech: "n.",
      definition: "The ability to understand and share the feelings of another",
      example: "Good nurses combine medical skill with genuine empathy for their patients."
    },
    {
      id: "easy-16-20",
      word: "Emulate",
      partOfSpeech: "v.",
      definition: "To try to match or match the achievements of someone admired",
      example: "Many young chefs try to emulate the techniques of that legendary restaurant."
    },
    {
      id: "easy-16-21",
      word: "Enamor",
      partOfSpeech: "v.",
      definition: "To fill someone with love or great admiration",
      example: "The tourists were instantly enamored with the coastal village."
    },
    {
      id: "easy-16-22",
      word: "Encore",
      partOfSpeech: "n.",
      definition: "An additional performance given due to audience demand",
      example: "After three curtain calls, the band finally returned for one last encore."
    },
    {
      id: "easy-16-23",
      word: "Encumber",
      partOfSpeech: "v.",
      definition: "To weigh down or burden someone",
      example: "The hikers were encumbered by heavy packs they hadn't planned for."
    },
    {
      id: "easy-16-24",
      word: "Engender",
      partOfSpeech: "v.",
      definition: "To cause or give rise to a feeling or situation",
      example: "The coach's calm confidence seemed to engender trust throughout the team."
    },
    {
      id: "easy-16-25",
      word: "Enmity",
      partOfSpeech: "n.",
      definition: "Deep-seated hostility or hatred",
      example: "Decades of enmity between the two families finally began to fade."
    }
  ],
  "easy-18": [
    {
      id: "easy-18-1",
      word: "Fidelity",
      partOfSpeech: "n.",
      definition: "Faithfulness to a person, cause, or fact",
      example: "The translation stays remarkably close to the fidelity of the original text."
    },
    {
      id: "easy-18-2",
      word: "Figurative",
      partOfSpeech: "adj.",
      definition: "Using words in a non-literal, symbolic way",
      example: "\"Time is money\" is a figurative expression, not a literal statement."
    },
    {
      id: "easy-18-3",
      word: "Flagrant",
      partOfSpeech: "adj.",
      definition: "Conspicuously and shamelessly wrong or bad",
      example: "The referee called a flagrant foul after the reckless tackle."
    },
    {
      id: "easy-18-4",
      word: "Florid",
      partOfSpeech: "adj.",
      definition: "Excessively elaborate or ornate, especially in style",
      example: "The novel's florid descriptions slowed the pacing of an otherwise gripping plot."
    },
    {
      id: "easy-18-5",
      word: "Flout",
      partOfSpeech: "v.",
      definition: "To openly disregard a rule or convention",
      example: "The nightclub was shut down for repeatedly flouting fire safety codes."
    },
    {
      id: "easy-18-6",
      word: "Foil",
      partOfSpeech: "v.",
      definition: "To prevent someone from succeeding; also, a contrasting character",
      example: "Quick thinking by a bystander helped foil the robbery attempt."
    },
    {
      id: "easy-18-7",
      word: "Forage",
      partOfSpeech: "v.",
      definition: "To search widely for food or supplies",
      example: "The scouts learned how to forage for edible plants during the survival course."
    },
    {
      id: "easy-18-8",
      word: "Forbearance",
      partOfSpeech: "n.",
      definition: "Patient self-control; restraint in the face of provocation",
      example: "The teacher's forbearance with the disruptive student eventually paid off."
    },
    {
      id: "easy-18-9",
      word: "Forestall",
      partOfSpeech: "v.",
      definition: "To prevent something by acting in advance",
      example: "Regular maintenance can forestall many of the most expensive repairs."
    },
    {
      id: "easy-18-10",
      word: "Forlorn",
      partOfSpeech: "adj.",
      definition: "Pitifully sad and lonely",
      example: "The forlorn puppy sat by the shelter door, waiting for someone to notice him."
    },
    {
      id: "easy-18-11",
      word: "Forsake",
      partOfSpeech: "v.",
      definition: "To abandon or give up something or someone",
      example: "He refused to forsake his hometown, even after the factory closed."
    },
    {
      id: "easy-18-12",
      word: "Fortitude",
      partOfSpeech: "n.",
      definition: "Courage and strength in facing pain or adversity",
      example: "She showed remarkable fortitude throughout her long recovery."
    },
    {
      id: "easy-18-13",
      word: "Fortuitous",
      partOfSpeech: "adj.",
      definition: "Happening by lucky chance",
      example: "Their meeting at the conference turned out to be wonderfully fortuitous."
    },
    {
      id: "easy-18-14",
      word: "Forum",
      partOfSpeech: "n.",
      definition: "A place or event for open discussion of ideas",
      example: "The city held a public forum to discuss the proposed new bike lanes."
    },
    {
      id: "easy-18-15",
      word: "Frenetic",
      partOfSpeech: "adj.",
      definition: "Fast, energetic, and somewhat chaotic",
      example: "The kitchen turned frenetic the moment the dinner rush began."
    },
    {
      id: "easy-18-16",
      word: "Frivolous",
      partOfSpeech: "adj.",
      definition: "Not having any serious purpose or value",
      example: "The judge dismissed the lawsuit, calling it frivolous and a waste of the court's time."
    },
    {
      id: "easy-18-17",
      word: "Frugal",
      partOfSpeech: "adj.",
      definition: "Careful and economical with money or resources",
      example: "Growing up during the recession made him permanently frugal with his spending."
    },
    {
      id: "easy-18-18",
      word: "Garish",
      partOfSpeech: "adj.",
      definition: "Excessively bright or showy in a tasteless way",
      example: "The hotel lobby's garish gold decor felt more tacky than luxurious."
    },
    {
      id: "easy-18-19",
      word: "Genial",
      partOfSpeech: "adj.",
      definition: "Friendly and warm in manner",
      example: "The genial host made sure every guest felt welcome."
    },
    {
      id: "easy-18-20",
      word: "Gluttony",
      partOfSpeech: "n.",
      definition: "Excessive eating or consumption",
      example: "The holiday feast was practically an invitation to gluttony."
    },
    {
      id: "easy-18-21",
      word: "Goad",
      partOfSpeech: "v.",
      definition: "To provoke someone into action, often through teasing",
      example: "His brothers goaded him into trying the spiciest dish on the menu."
    },
    {
      id: "easy-18-22",
      word: "Grandiose",
      partOfSpeech: "adj.",
      definition: "Impressively large or exaggerated in scope or style",
      example: "His grandiose plans for the company far outpaced its actual budget."
    },
    {
      id: "easy-18-23",
      word: "Grievous",
      partOfSpeech: "adj.",
      definition: "Very severe or serious",
      example: "The court called the negligence a grievous failure of basic safety standards."
    },
    {
      id: "easy-18-24",
      word: "Guile",
      partOfSpeech: "n.",
      definition: "Cunning or clever deception",
      example: "The spy relied on guile rather than force to gather information."
    },
    {
      id: "easy-18-25",
      word: "Hallowed",
      partOfSpeech: "adj.",
      definition: "Regarded as holy or greatly respected",
      example: "The team walked onto the hallowed grounds of the historic stadium."
    }
  ],
  "easy-19": [
    {
      id: "easy-19-1",
      word: "Hapless",
      partOfSpeech: "adj.",
      definition: "Unlucky; unfortunate",
      example: "The hapless intern managed to lock himself out of the office twice in one week."
    },
    {
      id: "easy-19-2",
      word: "Harangue",
      partOfSpeech: "n.",
      definition: "A lengthy, aggressive speech or lecture",
      example: "The customer launched into a harangue about the store's return policy."
    },
    {
      id: "easy-19-3",
      word: "Hardy",
      partOfSpeech: "adj.",
      definition: "Capable of surviving difficult conditions",
      example: "These hardy plants can survive frost that would kill most other flowers."
    },
    {
      id: "easy-19-4",
      word: "Harrowing",
      partOfSpeech: "adj.",
      definition: "Extremely distressing or disturbing",
      example: "Survivors gave a harrowing account of the night the wildfire swept through town."
    },
    {
      id: "easy-19-5",
      word: "Haughty",
      partOfSpeech: "adj.",
      definition: "Arrogantly proud and disdainful",
      example: "The haughty critic dismissed the exhibit without even finishing his walk-through."
    },
    {
      id: "easy-19-6",
      word: "Heinous",
      partOfSpeech: "adj.",
      definition: "Utterly wicked or shocking",
      example: "The court described the crime as one of the most heinous it had ever seen."
    },
    {
      id: "easy-19-7",
      word: "Hierarchy",
      partOfSpeech: "n.",
      definition: "A system in which people or things are ranked one above another",
      example: "The company's rigid hierarchy made it hard for junior staff to be heard."
    },
    {
      id: "easy-19-8",
      word: "Hypocrisy",
      partOfSpeech: "n.",
      definition: "The practice of claiming standards one does not actually follow",
      example: "Voters were quick to point out the hypocrisy of the candidate's own record."
    },
    {
      id: "easy-19-9",
      word: "Illicit",
      partOfSpeech: "adj.",
      definition: "Forbidden by law, rules, or custom",
      example: "Police shut down the illicit gambling operation running out of the warehouse."
    },
    {
      id: "easy-19-10",
      word: "Immerse",
      partOfSpeech: "v.",
      definition: "To involve oneself deeply in an activity or interest",
      example: "She immersed herself in the language by living abroad for a year."
    },
    {
      id: "easy-19-11",
      word: "Immutable",
      partOfSpeech: "adj.",
      definition: "Unchanging over time; unable to be altered",
      example: "The scientist insisted the laws of physics were immutable, not up for debate."
    },
    {
      id: "easy-19-12",
      word: "Impassive",
      partOfSpeech: "adj.",
      definition: "Not showing or feeling emotion",
      example: "The judge remained impassive as the jury read the verdict."
    },
    {
      id: "easy-19-13",
      word: "Impeccable",
      partOfSpeech: "adj.",
      definition: "Flawless; in perfect accordance with standards",
      example: "The waiter's impeccable service made the evening feel effortless."
    },
    {
      id: "easy-19-14",
      word: "Imperative",
      partOfSpeech: "adj.",
      definition: "Extremely important or urgent",
      example: "It is imperative that the report be finished before the board meeting."
    },
    {
      id: "easy-19-15",
      word: "Imperious",
      partOfSpeech: "adj.",
      definition: "Domineering and expecting immediate obedience",
      example: "The imperious manager rarely asked for input from her team."
    },
    {
      id: "easy-19-16",
      word: "Impertinent",
      partOfSpeech: "adj.",
      definition: "Rude and not showing proper respect",
      example: "The student's impertinent comment earned him a trip to the principal's office."
    },
    {
      id: "easy-19-17",
      word: "Impetuous",
      partOfSpeech: "adj.",
      definition: "Acting quickly without careful thought",
      example: "His impetuous decision to quit his job left the family scrambling for income."
    },
    {
      id: "easy-19-18",
      word: "Implement",
      partOfSpeech: "v.",
      definition: "To put a plan or decision into effect",
      example: "The school plans to implement the new grading system next semester."
    },
    {
      id: "easy-19-19",
      word: "Implicate",
      partOfSpeech: "v.",
      definition: "To show that someone is involved in a wrongdoing",
      example: "New evidence implicated two additional suspects in the fraud scheme."
    },
    {
      id: "easy-19-20",
      word: "Ingenious",
      partOfSpeech: "adj.",
      definition: "Cleverly inventive; showing great skill or originality",
      example: "Her ingenious solution used ordinary household items to fix the broken pipe."
    },
    {
      id: "easy-19-21",
      word: "Knell",
      partOfSpeech: "n.",
      definition: "The sound of a bell, especially one signaling death or an ending",
      example: "The factory's closing rang like a death knell for the whole town's economy."
    },
    {
      id: "easy-19-22",
      word: "Manifest",
      partOfSpeech: "v.",
      definition: "To show something clearly through actions or appearance",
      example: "Her stress began to manifest as constant headaches and sleeplessness."
    },
    {
      id: "easy-19-23",
      word: "Moderate",
      partOfSpeech: "adj.",
      definition: "Average in amount or intensity; not extreme",
      example: "The forecast calls for moderate rain throughout the weekend."
    },
    {
      id: "easy-19-24",
      word: "Morose",
      partOfSpeech: "adj.",
      definition: "Sullen and gloomy in mood",
      example: "He'd been morose ever since losing the promotion to a coworker."
    },
    {
      id: "easy-19-25",
      word: "Mundane",
      partOfSpeech: "adj.",
      definition: "Lacking excitement; ordinary",
      example: "After the thrill of the trip, everyday chores felt especially mundane."
    }
  ],
  "easy-20": [
    {
      id: "easy-20-1",
      word: "Notorious",
      partOfSpeech: "adj.",
      definition: "Famous for something bad",
      example: "The intersection is notorious for its frequent traffic accidents."
    },
    {
      id: "easy-20-2",
      word: "Novice",
      partOfSpeech: "n.",
      definition: "A person who is new to a skill or activity",
      example: "As a novice skier, she stuck to the easiest slopes for her first day."
    },
    {
      id: "easy-20-3",
      word: "Obsolete",
      partOfSpeech: "adj.",
      definition: "No longer in use or produced; outdated",
      example: "Floppy disks became obsolete once cheap flash drives hit the market."
    },
    {
      id: "easy-20-4",
      word: "Odious",
      partOfSpeech: "adj.",
      definition: "Extremely unpleasant; repulsive",
      example: "Cleaning the grease trap was the most odious task on the entire job."
    },
    {
      id: "easy-20-5",
      word: "Oration",
      partOfSpeech: "n.",
      definition: "A formal speech, especially on a ceremonial occasion",
      example: "The valedictorian delivered a moving oration at graduation."
    },
    {
      id: "easy-20-6",
      word: "Ornate",
      partOfSpeech: "adj.",
      definition: "Highly decorated or elaborate",
      example: "The cathedral's ornate ceiling took artisans nearly a decade to complete."
    },
    {
      id: "easy-20-7",
      word: "Palette",
      partOfSpeech: "n.",
      definition: "A range of colors used by an artist; also, a range of options",
      example: "The designer chose a warm palette of oranges and reds for the restaurant."
    },
    {
      id: "easy-20-8",
      word: "Pellucid",
      partOfSpeech: "adj.",
      definition: "Extremely clear in style or meaning; transparent",
      example: "Her pellucid explanation made a confusing topic feel simple."
    },
    {
      id: "easy-20-9",
      word: "Perfidious",
      partOfSpeech: "adj.",
      definition: "Deceitful and untrustworthy",
      example: "The novel's perfidious advisor secretly worked for the enemy the entire time."
    },
    {
      id: "easy-20-10",
      word: "Permeate",
      partOfSpeech: "v.",
      definition: "To spread throughout something completely",
      example: "The smell of fresh coffee permeated every room of the small house."
    },
    {
      id: "easy-20-11",
      word: "Pervasive",
      partOfSpeech: "adj.",
      definition: "Present and noticeable throughout an entire area",
      example: "A pervasive sense of unease settled over the office after the announcement."
    },
    {
      id: "easy-20-12",
      word: "Plausible",
      partOfSpeech: "adj.",
      definition: "Reasonable or believable",
      example: "The detective needed a more plausible explanation than the one the suspect offered."
    },
    {
      id: "easy-20-13",
      word: "Plethora",
      partOfSpeech: "n.",
      definition: "A very large amount of something",
      example: "The buffet offered a plethora of options for every kind of diet."
    },
    {
      id: "easy-20-14",
      word: "Prescient",
      partOfSpeech: "adj.",
      definition: "Having knowledge of events before they happen",
      example: "Her prescient warnings about the market crash proved eerily accurate."
    },
    {
      id: "easy-20-15",
      word: "Primeval",
      partOfSpeech: "adj.",
      definition: "Belonging to the earliest ages of the world; ancient",
      example: "The documentary explored a primeval forest untouched by modern development."
    },
    {
      id: "easy-20-16",
      word: "Proclivity",
      partOfSpeech: "n.",
      definition: "A natural tendency to behave in a particular way",
      example: "Even as a toddler, he showed a proclivity for taking things apart."
    },
    {
      id: "easy-20-17",
      word: "Promulgate",
      partOfSpeech: "v.",
      definition: "To officially announce or put a new law into effect",
      example: "The agency promulgated new safety regulations following the investigation."
    },
    {
      id: "easy-20-18",
      word: "Propensity",
      partOfSpeech: "n.",
      definition: "A natural inclination toward a particular behavior",
      example: "The dog's propensity for digging quickly wrecked the new flower bed."
    },
    {
      id: "easy-20-19",
      word: "Prowess",
      partOfSpeech: "n.",
      definition: "Great skill or ability in a particular activity",
      example: "Her prowess on the violin earned her a spot in the national youth orchestra."
    },
    {
      id: "easy-20-20",
      word: "Rancor",
      partOfSpeech: "n.",
      definition: "Bitter, long-lasting resentment",
      example: "Years after the merger, some rancor between the two teams still lingered."
    },
    {
      id: "easy-20-21",
      word: "Rectitude",
      partOfSpeech: "n.",
      definition: "Moral integrity; correctness of judgment",
      example: "The judge was known throughout the state for his unshakable rectitude."
    },
    {
      id: "easy-20-22",
      word: "Reprehensible",
      partOfSpeech: "adj.",
      definition: "Deserving strong condemnation",
      example: "The coach's treatment of the injured player was widely called reprehensible."
    },
    {
      id: "easy-20-23",
      word: "Rash",
      partOfSpeech: "adj.",
      definition: "Acting without careful thought; hasty",
      example: "Quitting on the spot was a rash decision he later regretted."
    },
    {
      id: "easy-20-24",
      word: "Renown",
      partOfSpeech: "n.",
      definition: "The state of being famous or well-known",
      example: "The chef earned international renown for her inventive tasting menus."
    },
    {
      id: "easy-20-25",
      word: "Vocation",
      partOfSpeech: "n.",
      definition: "A strong feeling of suitability for a particular career, often one of service",
      example: "She always felt teaching was less a job than a vocation."
    }
  ],
  "moderate-9": [
    {
      id: "moderate-9-1",
      word: "Accede",
      partOfSpeech: "v.",
      definition: "To agree to a demand or request, often reluctantly",
      example: "After weeks of protest, the university finally acceded to the students' demands."
    },
    {
      id: "moderate-9-2",
      word: "Accentuate",
      partOfSpeech: "v.",
      definition: "To emphasize or make more noticeable",
      example: "The tailored jacket accentuated her shoulders without looking stiff."
    },
    {
      id: "moderate-9-3",
      word: "Accolade",
      partOfSpeech: "n.",
      definition: "An award or expression of praise for an achievement",
      example: "The film received accolades from critics but struggled at the box office."
    },
    {
      id: "moderate-9-4",
      word: "Accost",
      partOfSpeech: "v.",
      definition: "To approach and confront someone boldly, often aggressively",
      example: "A stranger accosted her outside the store, demanding she hand over her bag."
    },
    {
      id: "moderate-9-5",
      word: "Acquiesce",
      partOfSpeech: "v.",
      definition: "To accept something without protest, even if reluctant",
      example: "He acquiesced to his parents' wishes and studied law instead of art."
    },
    {
      id: "moderate-9-6",
      word: "Inoculate",
      partOfSpeech: "v.",
      definition: "To introduce a vaccine into the body to build immunity",
      example: "The clinic worked around the clock to inoculate the entire village against the outbreak."
    },
    {
      id: "moderate-9-7",
      word: "Acumen",
      partOfSpeech: "n.",
      definition: "Keen insight or sharp judgment, especially in practical matters",
      example: "Her business acumen helped the small shop survive a difficult economy."
    },
    {
      id: "moderate-9-8",
      word: "Acute",
      partOfSpeech: "adj.",
      definition: "Sharp or severe; showing keen perception",
      example: "The patient reported acute pain in his lower back after the fall."
    },
    {
      id: "moderate-9-9",
      word: "Adamant",
      partOfSpeech: "adj.",
      definition: "Refusing to be persuaded; firmly resolved",
      example: "She remained adamant that the project could be finished on schedule."
    },
    {
      id: "moderate-9-10",
      word: "Adroit",
      partOfSpeech: "adj.",
      definition: "Clever and skillful, especially with the hands or in social situations",
      example: "His adroit handling of the tense negotiation impressed everyone in the room."
    },
    {
      id: "moderate-9-11",
      word: "Adulation",
      partOfSpeech: "n.",
      definition: "Excessive or intense admiration",
      example: "The pop star seemed uncomfortable with the fans' constant adulation."
    },
    {
      id: "moderate-9-12",
      word: "Affinity",
      partOfSpeech: "n.",
      definition: "A natural liking for or connection to something",
      example: "She's always had an affinity for old maps and forgotten places."
    },
    {
      id: "moderate-9-13",
      word: "Affront",
      partOfSpeech: "n.",
      definition: "An action or remark that offends or insults someone",
      example: "Being left off the guest list felt like a deliberate affront to the whole family."
    },
    {
      id: "moderate-9-14",
      word: "Vicarious",
      partOfSpeech: "adj.",
      definition: "Experienced indirectly through the actions or feelings of another",
      example: "She got a vicarious thrill watching her daughter accept the award she'd once dreamed of winning."
    },
    {
      id: "moderate-9-15",
      word: "Aggregate",
      partOfSpeech: "n.",
      definition: "A whole formed by combining several separate elements",
      example: "The report combines survey data from twelve countries into a single aggregate."
    },
    {
      id: "moderate-9-16",
      word: "Aggrieved",
      partOfSpeech: "adj.",
      definition: "Feeling resentment due to unfair treatment",
      example: "Several aggrieved shareholders filed a lawsuit after the stock's sudden collapse."
    },
    {
      id: "moderate-9-17",
      word: "Alacrity",
      partOfSpeech: "n.",
      definition: "Brisk, cheerful eagerness or readiness",
      example: "The volunteers accepted the extra shift with surprising alacrity."
    },
    {
      id: "moderate-9-18",
      word: "Allocate",
      partOfSpeech: "v.",
      definition: "To distribute resources for a particular purpose",
      example: "The city plans to allocate more funding to public transportation next year."
    },
    {
      id: "moderate-9-19",
      word: "Amalgamate",
      partOfSpeech: "v.",
      definition: "To combine or unite different elements into a single whole",
      example: "The three small clinics amalgamated into one larger regional hospital."
    },
    {
      id: "moderate-9-20",
      word: "Ameliorate",
      partOfSpeech: "v.",
      definition: "To make a bad situation better",
      example: "New irrigation systems helped ameliorate the effects of the drought."
    },
    {
      id: "moderate-9-21",
      word: "Amenable",
      partOfSpeech: "adj.",
      definition: "Open and responsive to suggestion; willing to cooperate",
      example: "Fortunately, our landlord was amenable to a slightly later move-in date."
    },
    {
      id: "moderate-9-22",
      word: "Amenity",
      partOfSpeech: "n.",
      definition: "A feature that provides comfort or convenience",
      example: "The apartment complex offers amenities like a rooftop pool and a gym."
    },
    {
      id: "moderate-9-23",
      word: "Amorous",
      partOfSpeech: "adj.",
      definition: "Showing or feeling romantic or sexual love",
      example: "The old letters revealed an amorous side of the otherwise reserved general."
    },
    {
      id: "moderate-9-24",
      word: "Analgesic",
      partOfSpeech: "n.",
      definition: "A drug that relieves pain",
      example: "The doctor prescribed a mild analgesic for the post-surgery discomfort."
    },
    {
      id: "moderate-9-25",
      word: "Anarchist",
      partOfSpeech: "n.",
      definition: "A person who believes all forms of government should be abolished",
      example: "The historical novel follows a young anarchist during a turbulent revolution."
    }
  ],
  "moderate-13": [
    {
      id: "moderate-13-1",
      word: "Fraught",
      partOfSpeech: "adj.",
      definition: "Filled with a particular quality, often something distressing",
      example: "The negotiations were fraught with tension from the very first session."
    },
    {
      id: "moderate-13-2",
      word: "Hiatus",
      partOfSpeech: "n.",
      definition: "A pause or gap in continuity",
      example: "The band went on a five-year hiatus before releasing their comeback album."
    },
    {
      id: "moderate-13-3",
      word: "Inane",
      partOfSpeech: "adj.",
      definition: "Silly and lacking sense or substance",
      example: "The meeting devolved into an inane debate over font choices."
    },
    {
      id: "moderate-13-4",
      word: "Incessant",
      partOfSpeech: "adj.",
      definition: "Continuing without pause or interruption",
      example: "The incessant barking next door kept the whole street awake."
    },
    {
      id: "moderate-13-5",
      word: "Inclination",
      partOfSpeech: "n.",
      definition: "A natural tendency or preference",
      example: "Her inclination toward caution served her well as a financial planner."
    },
    {
      id: "moderate-13-6",
      word: "Increment",
      partOfSpeech: "n.",
      definition: "A small, regular increase in a value or process",
      example: "Salaries rise in small increments each year based on performance reviews."
    },
    {
      id: "moderate-13-7",
      word: "Incumbent",
      partOfSpeech: "n.",
      definition: "The current holder of an office or position",
      example: "The incumbent faced a tough challenge from a well-funded newcomer."
    },
    {
      id: "moderate-13-8",
      word: "Indigenous",
      partOfSpeech: "adj.",
      definition: "Native to a particular region or environment",
      example: "The exhibit highlights art created by indigenous communities across the region."
    },
    {
      id: "moderate-13-9",
      word: "Indignation",
      partOfSpeech: "n.",
      definition: "Anger provoked by something unjust or unfair",
      example: "Public indignation grew after details of the cover-up were finally revealed."
    },
    {
      id: "moderate-13-10",
      word: "Indolent",
      partOfSpeech: "adj.",
      definition: "Habitually lazy; avoiding activity or effort",
      example: "The indolent cat spent most of its day sleeping in the sun."
    },
    {
      id: "moderate-13-11",
      word: "Induce",
      partOfSpeech: "v.",
      definition: "To bring about or cause a particular condition or action",
      example: "The medication is designed to induce sleep within thirty minutes."
    },
    {
      id: "moderate-13-12",
      word: "Inept",
      partOfSpeech: "adj.",
      definition: "Lacking skill or competence",
      example: "His inept handling of the crisis cost the company several major clients."
    },
    {
      id: "moderate-13-13",
      word: "Infusion",
      partOfSpeech: "n.",
      definition: "The introduction of a new element into something; a liquid extract",
      example: "The team welcomed a fresh infusion of talent after the offseason trades."
    },
    {
      id: "moderate-13-14",
      word: "Inhibit",
      partOfSpeech: "v.",
      definition: "To hinder, restrain, or prevent something",
      example: "Certain medications can inhibit the body's ability to absorb calcium."
    },
    {
      id: "moderate-13-15",
      word: "Injunction",
      partOfSpeech: "n.",
      definition: "A formal order from a court requiring or forbidding an action",
      example: "The judge issued an injunction blocking construction until the review was complete."
    },
    {
      id: "moderate-13-16",
      word: "Innovate",
      partOfSpeech: "v.",
      definition: "To introduce new ideas, methods, or products",
      example: "The small team was given full freedom to innovate without corporate oversight."
    },
    {
      id: "moderate-13-17",
      word: "Insinuate",
      partOfSpeech: "v.",
      definition: "To suggest something indirectly and often unpleasantly",
      example: "He insinuated that the results had been altered without ever saying so directly."
    },
    {
      id: "moderate-13-18",
      word: "Insipid",
      partOfSpeech: "adj.",
      definition: "Lacking flavor, spirit, or interest",
      example: "The remake felt insipid compared to the sharp wit of the original."
    },
    {
      id: "moderate-13-19",
      word: "Instigate",
      partOfSpeech: "v.",
      definition: "To bring about or provoke an event or action",
      example: "Investigators believe a single rumor was enough to instigate the riot."
    },
    {
      id: "moderate-13-20",
      word: "Interject",
      partOfSpeech: "v.",
      definition: "To interrupt with a remark",
      example: "She interjected with a question just as the presenter was wrapping up."
    },
    {
      id: "moderate-13-21",
      word: "Interminable",
      partOfSpeech: "adj.",
      definition: "Seemingly endless, often tediously so",
      example: "The interminable wait at the DMV tested everyone's patience."
    },
    {
      id: "moderate-13-22",
      word: "Intimation",
      partOfSpeech: "n.",
      definition: "An indirect hint or suggestion",
      example: "There was no intimation of trouble until the sudden resignation announcement."
    },
    {
      id: "moderate-13-23",
      word: "Intractable",
      partOfSpeech: "adj.",
      definition: "Difficult to manage, control, or solve",
      example: "The two sides remained locked in an intractable dispute over water rights."
    },
    {
      id: "moderate-13-24",
      word: "Intrepid",
      partOfSpeech: "adj.",
      definition: "Fearless and adventurous",
      example: "The intrepid explorer was the first to chart the entire river system."
    },
    {
      id: "moderate-13-25",
      word: "Inundate",
      partOfSpeech: "v.",
      definition: "To overwhelm with a large amount of something",
      example: "The hotline was inundated with calls within minutes of the announcement."
    }
  ],
  "moderate-14": [
    {
      id: "moderate-14-1",
      word: "Iridescent",
      partOfSpeech: "adj.",
      definition: "Showing shifting rainbow-like colors",
      example: "The hummingbird's iridescent feathers shimmered green and gold in the sunlight."
    },
    {
      id: "moderate-14-2",
      word: "Judicious",
      partOfSpeech: "adj.",
      definition: "Showing good sense and careful judgment",
      example: "A judicious use of the limited budget kept the project on track."
    },
    {
      id: "moderate-14-3",
      word: "Kudos",
      partOfSpeech: "n.",
      definition: "Praise for an achievement",
      example: "The chef earned kudos from critics for her inventive tasting menu."
    },
    {
      id: "moderate-14-4",
      word: "Larceny",
      partOfSpeech: "n.",
      definition: "The unlawful taking of another's property; theft",
      example: "He was charged with grand larceny after the stolen goods were recovered."
    },
    {
      id: "moderate-14-5",
      word: "Latent",
      partOfSpeech: "adj.",
      definition: "Present but not yet developed or visible",
      example: "The therapist helped uncover a latent talent for painting she never knew she had."
    },
    {
      id: "moderate-14-6",
      word: "Laudatory",
      partOfSpeech: "adj.",
      definition: "Expressing praise",
      example: "The obituary was full of laudatory remarks from former colleagues."
    },
    {
      id: "moderate-14-7",
      word: "Lavish",
      partOfSpeech: "adj.",
      definition: "Sumptuously rich or elaborate; given in great amounts",
      example: "The company threw a lavish party to celebrate its tenth anniversary."
    },
    {
      id: "moderate-14-8",
      word: "Lenient",
      partOfSpeech: "adj.",
      definition: "Merciful or tolerant; not strict",
      example: "The judge was unusually lenient given the defendant's clean record."
    },
    {
      id: "moderate-14-9",
      word: "Lethargic",
      partOfSpeech: "adj.",
      definition: "Sluggish and lacking energy or enthusiasm",
      example: "The heat left everyone feeling lethargic by mid-afternoon."
    },
    {
      id: "moderate-14-10",
      word: "Liability",
      partOfSpeech: "n.",
      definition: "A legal responsibility; also, something that is a disadvantage",
      example: "His constant lateness had become a real liability for the team."
    },
    {
      id: "moderate-14-11",
      word: "Libertarian",
      partOfSpeech: "adj.",
      definition: "Favoring maximum individual liberty and minimal government control",
      example: "The candidate ran on a strongly libertarian economic platform."
    },
    {
      id: "moderate-14-12",
      word: "Lithe",
      partOfSpeech: "adj.",
      definition: "Thin, flexible, and graceful in movement",
      example: "The lithe dancer seemed to float across the stage."
    },
    {
      id: "moderate-14-13",
      word: "Luminous",
      partOfSpeech: "adj.",
      definition: "Emitting or reflecting a soft, glowing light",
      example: "The luminous jellyfish lit up the dark aquarium tank."
    },
    {
      id: "moderate-14-14",
      word: "Malleable",
      partOfSpeech: "adj.",
      definition: "Easily shaped or influenced",
      example: "Gold is prized partly because it's so malleable and easy to work with."
    },
    {
      id: "moderate-14-15",
      word: "Mandate",
      partOfSpeech: "n.",
      definition: "An official order or authorization to act",
      example: "The new council was elected with a clear mandate for reform."
    },
    {
      id: "moderate-14-16",
      word: "Manifold",
      partOfSpeech: "adj.",
      definition: "Many and varied",
      example: "The city's manifold problems ranged from traffic to aging infrastructure."
    },
    {
      id: "moderate-14-17",
      word: "Maudlin",
      partOfSpeech: "adj.",
      definition: "Excessively and self-pityingly sentimental",
      example: "The speech turned maudlin as he recounted every difficulty of the past year."
    },
    {
      id: "moderate-14-18",
      word: "Maverick",
      partOfSpeech: "n.",
      definition: "An independent-minded person who doesn't follow convention",
      example: "The company's founder was a maverick who ignored most industry norms."
    },
    {
      id: "moderate-14-19",
      word: "Maxim",
      partOfSpeech: "n.",
      definition: "A short, memorable statement expressing a general truth",
      example: "\"Slow and steady wins the race\" is a maxim most kids learn early."
    },
    {
      id: "moderate-14-20",
      word: "Medley",
      partOfSpeech: "n.",
      definition: "A varied mixture of things, often musical pieces performed together",
      example: "The choir closed the concert with a medley of holiday songs."
    },
    {
      id: "moderate-14-21",
      word: "Meritorious",
      partOfSpeech: "adj.",
      definition: "Deserving praise or reward",
      example: "She received a meritorious service award after twenty years with the agency."
    },
    {
      id: "moderate-14-22",
      word: "Modicum",
      partOfSpeech: "n.",
      definition: "A small amount of something",
      example: "Even a modicum of effort would have improved the final result."
    },
    {
      id: "moderate-14-23",
      word: "Mollify",
      partOfSpeech: "v.",
      definition: "To calm someone's anger or distress",
      example: "A partial refund was enough to mollify most of the frustrated customers."
    },
    {
      id: "moderate-14-24",
      word: "Mores",
      partOfSpeech: "n.",
      definition: "The customs and accepted behaviors of a particular group",
      example: "The novel examines the shifting social mores of the small town over decades."
    },
    {
      id: "moderate-14-25",
      word: "Mutable",
      partOfSpeech: "adj.",
      definition: "Liable to change; not fixed",
      example: "Public opinion on the issue proved far more mutable than pollsters expected."
    }
  ],
  "moderate-15": [
    {
      id: "moderate-15-1",
      word: "Myriad",
      partOfSpeech: "adj.",
      definition: "Consisting of a very great number",
      example: "The city offers myriad options for weekend entertainment."
    },
    {
      id: "moderate-15-2",
      word: "Nadir",
      partOfSpeech: "n.",
      definition: "The lowest point of something",
      example: "Losing the championship game was the nadir of his athletic career."
    },
    {
      id: "moderate-15-3",
      word: "Nascent",
      partOfSpeech: "adj.",
      definition: "Just beginning to exist or develop",
      example: "Investors took an early interest in the nascent solar technology."
    },
    {
      id: "moderate-15-4",
      word: "Negligent",
      partOfSpeech: "adj.",
      definition: "Failing to take proper care in doing something",
      example: "The lawsuit accused the company of negligent handling of hazardous waste."
    },
    {
      id: "moderate-15-5",
      word: "Neophyte",
      partOfSpeech: "n.",
      definition: "A person new to a subject or activity; a beginner",
      example: "As a neophyte in the kitchen, he stuck to the simplest recipes at first."
    },
    {
      id: "moderate-15-6",
      word: "Nocturnal",
      partOfSpeech: "adj.",
      definition: "Active at night; relating to the night",
      example: "Owls are nocturnal hunters, most active well after sunset."
    },
    {
      id: "moderate-15-7",
      word: "Nominal",
      partOfSpeech: "adj.",
      definition: "Existing in name only; a very small amount",
      example: "The club charges only a nominal fee to cover snacks and supplies."
    },
    {
      id: "moderate-15-8",
      word: "Nonchalant",
      partOfSpeech: "adj.",
      definition: "Calm and relaxed, especially in a way that seems unconcerned",
      example: "He gave a nonchalant shrug, as if the huge decision meant nothing."
    },
    {
      id: "moderate-15-9",
      word: "Nondescript",
      partOfSpeech: "adj.",
      definition: "Lacking distinctive or interesting features",
      example: "The spy's cover was a nondescript office job in a forgettable building."
    },
    {
      id: "moderate-15-10",
      word: "Noxious",
      partOfSpeech: "adj.",
      definition: "Harmful or poisonous, especially to health",
      example: "Workers wore masks to avoid inhaling the noxious fumes."
    },
    {
      id: "moderate-15-11",
      word: "Oblique",
      partOfSpeech: "adj.",
      definition: "Not directly stated; indirect",
      example: "He made an oblique reference to the layoffs without naming any names."
    },
    {
      id: "moderate-15-12",
      word: "Oblivious",
      partOfSpeech: "adj.",
      definition: "Unaware of what is happening around oneself",
      example: "She was completely oblivious to the surprise party being planned downstairs."
    },
    {
      id: "moderate-15-13",
      word: "Whimsical",
      partOfSpeech: "adj.",
      definition: "Playfully quirky or fanciful",
      example: "The children's book is full of whimsical illustrations of talking animals."
    },
    {
      id: "moderate-15-14",
      word: "Ominous",
      partOfSpeech: "adj.",
      definition: "Suggesting that something bad is about to happen",
      example: "Dark clouds gathered on the horizon, giving the sky an ominous look."
    },
    {
      id: "moderate-15-15",
      word: "Onerous",
      partOfSpeech: "adj.",
      definition: "Involving heavy or excessive effort or obligation",
      example: "The new reporting requirements proved onerous for the small nonprofit."
    },
    {
      id: "moderate-15-16",
      word: "Orthodox",
      partOfSpeech: "adj.",
      definition: "Following traditional or conventional beliefs",
      example: "Her orthodox approach to teaching left little room for experimental methods."
    },
    {
      id: "moderate-15-17",
      word: "Oscillate",
      partOfSpeech: "v.",
      definition: "To swing back and forth between two states or positions",
      example: "His mood seemed to oscillate wildly between excitement and dread."
    },
    {
      id: "moderate-15-18",
      word: "Pacific",
      partOfSpeech: "adj.",
      definition: "Calm and peaceful; tending to make peace",
      example: "The negotiator took a pacific approach, avoiding confrontation at every turn."
    },
    {
      id: "moderate-15-19",
      word: "Palatable",
      partOfSpeech: "adj.",
      definition: "Pleasant to taste or acceptable to consider",
      example: "The compromise wasn't ideal, but it was palatable to both sides."
    },
    {
      id: "moderate-15-20",
      word: "Pallid",
      partOfSpeech: "adj.",
      definition: "Pale, especially from illness; lacking vitality",
      example: "His pallid complexion worried the nurse the moment he walked in."
    },
    {
      id: "moderate-15-21",
      word: "Paragon",
      partOfSpeech: "n.",
      definition: "A perfect example or model of excellence",
      example: "The old teacher was considered a paragon of patience by every student he'd ever had."
    },
    {
      id: "moderate-15-22",
      word: "Pariah",
      partOfSpeech: "n.",
      definition: "An outcast, especially from a social group",
      example: "After the scandal broke, he became something of a pariah in the industry."
    },
    {
      id: "moderate-15-23",
      word: "Parody",
      partOfSpeech: "n.",
      definition: "An imitation of something, done for comic effect",
      example: "The sketch was a gentle parody of overly dramatic morning news shows."
    },
    {
      id: "moderate-15-24",
      word: "Partisan",
      partOfSpeech: "adj.",
      definition: "Strongly supporting a particular party, cause, or person",
      example: "The vote split almost entirely along partisan lines."
    },
    {
      id: "moderate-15-25",
      word: "Patent",
      partOfSpeech: "adj.",
      definition: "Obvious and easily noticed",
      example: "It was patent from his tone that he disagreed with the entire plan."
    }
  ],
  "moderate-17": [
    {
      id: "moderate-17-1",
      word: "Procure",
      partOfSpeech: "v.",
      definition: "To obtain something, especially with effort",
      example: "It took months to procure the rare parts needed to restore the old engine."
    },
    {
      id: "moderate-17-2",
      word: "Profane",
      partOfSpeech: "adj.",
      definition: "Disrespectful of sacred things; also, using vulgar language",
      example: "His profane outburst startled the otherwise quiet library."
    },
    {
      id: "moderate-17-3",
      word: "Profuse",
      partOfSpeech: "adj.",
      definition: "Plentiful; given or occurring in large amounts",
      example: "He offered profuse apologies for showing up nearly an hour late."
    },
    {
      id: "moderate-17-4",
      word: "Propagate",
      partOfSpeech: "v.",
      definition: "To spread or reproduce, whether ideas or organisms",
      example: "Social media allowed the rumor to propagate faster than anyone could correct it."
    },
    {
      id: "moderate-17-5",
      word: "Propriety",
      partOfSpeech: "n.",
      definition: "Conformity to accepted standards of behavior",
      example: "She questioned the propriety of accepting gifts from clients."
    },
    {
      id: "moderate-17-6",
      word: "Prosaic",
      partOfSpeech: "adj.",
      definition: "Lacking imagination; ordinary and dull",
      example: "The film's prosaic dialogue undercut its otherwise stunning visuals."
    },
    {
      id: "moderate-17-7",
      word: "Prudence",
      partOfSpeech: "n.",
      definition: "Careful, sensible judgment, especially about practical matters",
      example: "Financial prudence allowed them to retire comfortably a decade early."
    },
    {
      id: "moderate-17-8",
      word: "Pungent",
      partOfSpeech: "adj.",
      definition: "Having a sharp, strong smell or taste",
      example: "The pungent smell of garlic filled the entire apartment."
    },
    {
      id: "moderate-17-9",
      word: "Punitive",
      partOfSpeech: "adj.",
      definition: "Intended as punishment",
      example: "The court imposed punitive damages on top of the standard fine."
    },
    {
      id: "moderate-17-10",
      word: "Putrid",
      partOfSpeech: "adj.",
      definition: "Decaying and foul-smelling",
      example: "The putrid odor coming from the fridge meant something had gone bad."
    },
    {
      id: "moderate-17-11",
      word: "Quell",
      partOfSpeech: "v.",
      definition: "To suppress or put an end to something, often forcefully",
      example: "Extra officers were sent in to quell the growing unrest downtown."
    },
    {
      id: "moderate-17-12",
      word: "Quotidian",
      partOfSpeech: "adj.",
      definition: "Occurring every day; ordinary",
      example: "The novel finds unexpected beauty in the quotidian details of factory life."
    },
    {
      id: "moderate-17-13",
      word: "Rail",
      partOfSpeech: "v.",
      definition: "To complain or protest vehemently",
      example: "He railed against the new parking regulations for the entire meeting."
    },
    {
      id: "moderate-17-14",
      word: "Rancid",
      partOfSpeech: "adj.",
      definition: "Having an unpleasant smell or taste from decay",
      example: "The butter had gone rancid after being left out overnight."
    },
    {
      id: "moderate-17-15",
      word: "Rapport",
      partOfSpeech: "n.",
      definition: "A close and harmonious relationship built on mutual understanding",
      example: "The therapist built strong rapport with her clients within the first session."
    },
    {
      id: "moderate-17-16",
      word: "Zealous",
      partOfSpeech: "adj.",
      definition: "Filled with great energy and enthusiasm for a cause",
      example: "The zealous volunteers arrived an hour early to set up for the fundraiser."
    },
    {
      id: "moderate-17-17",
      word: "Raucous",
      partOfSpeech: "adj.",
      definition: "Loud and disorderly",
      example: "A raucous cheer erupted the moment the winning goal was scored."
    },
    {
      id: "moderate-17-18",
      word: "Raze",
      partOfSpeech: "v.",
      definition: "To completely destroy a building or town",
      example: "The old stadium was razed to make room for a new shopping center."
    },
    {
      id: "moderate-17-19",
      word: "Reciprocate",
      partOfSpeech: "v.",
      definition: "To respond to an action or feeling with a similar one",
      example: "He didn't reciprocate her enthusiasm, which made the conversation awkward."
    },
    {
      id: "moderate-17-20",
      word: "Reconcile",
      partOfSpeech: "v.",
      definition: "To restore friendly relations; to make consistent",
      example: "The estranged siblings finally reconciled after their mother's funeral."
    },
    {
      id: "moderate-17-21",
      word: "Refract",
      partOfSpeech: "v.",
      definition: "To bend light or another wave as it passes through a medium",
      example: "The prism refracts sunlight into a full spectrum of colors."
    },
    {
      id: "moderate-17-22",
      word: "Refurbish",
      partOfSpeech: "v.",
      definition: "To renovate and clean up something old",
      example: "The city refurbished the historic theater instead of tearing it down."
    },
    {
      id: "moderate-17-23",
      word: "Regurgitate",
      partOfSpeech: "v.",
      definition: "To repeat information without processing or understanding it",
      example: "The student simply regurgitated the textbook instead of forming his own argument."
    },
    {
      id: "moderate-17-24",
      word: "Relegate",
      partOfSpeech: "v.",
      definition: "To assign to a lower or less important position",
      example: "After the injury, the star player was relegated to the bench for weeks."
    },
    {
      id: "moderate-17-25",
      word: "Relish",
      partOfSpeech: "v.",
      definition: "To enjoy something greatly",
      example: "She relished the chance to finally lead the project herself."
    }
  ],
  "moderate-19": [
    {
      id: "moderate-19-1",
      word: "Sensual",
      partOfSpeech: "adj.",
      definition: "Relating to physical, especially sexual, pleasure",
      example: "The film's slow pacing lingers on the sensual details of the feast."
    },
    {
      id: "moderate-19-2",
      word: "Serene",
      partOfSpeech: "adj.",
      definition: "Calm, peaceful, and untroubled",
      example: "The lake looked perfectly serene in the early morning light."
    },
    {
      id: "moderate-19-3",
      word: "Solicitous",
      partOfSpeech: "adj.",
      definition: "Showing eager attentiveness or concern for someone",
      example: "The solicitous waiter checked on their table every few minutes."
    },
    {
      id: "moderate-19-4",
      word: "Soluble",
      partOfSpeech: "adj.",
      definition: "Capable of being dissolved, especially in liquid",
      example: "Sugar is highly soluble in warm water."
    },
    {
      id: "moderate-19-5",
      word: "Solvent",
      partOfSpeech: "adj.",
      definition: "Having enough money to pay all debts; able to dissolve a substance",
      example: "The company remained solvent throughout the recession, unlike many competitors."
    },
    {
      id: "moderate-19-6",
      word: "Sovereign",
      partOfSpeech: "adj.",
      definition: "Having supreme power or authority; independent",
      example: "The newly formed nation was recognized as a sovereign state by the UN."
    },
    {
      id: "moderate-19-7",
      word: "Speculative",
      partOfSpeech: "adj.",
      definition: "Based on guesswork rather than certain knowledge",
      example: "The report's conclusions were largely speculative, based on incomplete data."
    },
    {
      id: "moderate-19-8",
      word: "Stingy",
      partOfSpeech: "adj.",
      definition: "Unwilling to spend or give; not generous",
      example: "He was famously stingy with tips, even after a great meal."
    },
    {
      id: "moderate-19-9",
      word: "Strenuous",
      partOfSpeech: "adj.",
      definition: "Requiring great physical or mental effort",
      example: "The trail's final mile is by far the most strenuous part of the hike."
    },
    {
      id: "moderate-19-10",
      word: "Strident",
      partOfSpeech: "adj.",
      definition: "Loud and harsh; also, forceful and aggressive in tone",
      example: "Her strident criticism of the plan silenced the rest of the meeting."
    },
    {
      id: "moderate-19-11",
      word: "Sublime",
      partOfSpeech: "adj.",
      definition: "Of such excellence or beauty as to inspire awe",
      example: "The view from the summit was nothing short of sublime."
    },
    {
      id: "moderate-19-12",
      word: "Surmise",
      partOfSpeech: "v.",
      definition: "To guess or conclude something based on limited evidence",
      example: "From the muddy tracks, the ranger surmised that a bear had passed through recently."
    },
    {
      id: "moderate-19-13",
      word: "Tenable",
      partOfSpeech: "adj.",
      definition: "Able to be defended or maintained against challenge",
      example: "Her argument remained tenable even under the professor's toughest questions."
    },
    {
      id: "moderate-19-14",
      word: "Tome",
      partOfSpeech: "n.",
      definition: "A large, often scholarly, book",
      example: "The dusty tome had sat untouched on the library shelf for decades."
    },
    {
      id: "moderate-19-15",
      word: "Torrid",
      partOfSpeech: "adj.",
      definition: "Extremely hot; also, marked by intense passion",
      example: "They endured a torrid summer with almost no relief from the heat."
    },
    {
      id: "moderate-19-16",
      word: "Tractable",
      partOfSpeech: "adj.",
      definition: "Easy to control or manage",
      example: "The horse proved far more tractable once it grew used to its new rider."
    },
    {
      id: "moderate-19-17",
      word: "Tranquil",
      partOfSpeech: "adj.",
      definition: "Calm and free from disturbance",
      example: "The garden offered a tranquil escape from the noise of the city."
    },
    {
      id: "moderate-19-18",
      word: "Transgress",
      partOfSpeech: "v.",
      definition: "To violate a law, moral code, or boundary",
      example: "The character transgresses every social norm of her small, conservative town."
    },
    {
      id: "moderate-19-19",
      word: "Trite",
      partOfSpeech: "adj.",
      definition: "Overused and unoriginal",
      example: "The ending felt trite, relying on a plot twist audiences had seen many times before."
    },
    {
      id: "moderate-19-20",
      word: "Uncanny",
      partOfSpeech: "adj.",
      definition: "Strange or mysterious in an unsettling way",
      example: "He had an uncanny ability to guess exactly what people were thinking."
    },
    {
      id: "moderate-19-21",
      word: "Validate",
      partOfSpeech: "v.",
      definition: "To confirm the accuracy or worth of something",
      example: "The study's results were later validated by two independent research teams."
    },
    {
      id: "moderate-19-22",
      word: "Vehemently",
      partOfSpeech: "adv.",
      definition: "In a forceful, passionate manner",
      example: "She vehemently denied any involvement in the scheme."
    },
    {
      id: "moderate-19-23",
      word: "Venerable",
      partOfSpeech: "adj.",
      definition: "Deserving great respect because of age, wisdom, or character",
      example: "The venerable judge had served on the bench for over thirty years."
    },
    {
      id: "moderate-19-24",
      word: "Verdant",
      partOfSpeech: "adj.",
      definition: "Green with lush vegetation",
      example: "The valley turned verdant almost overnight after the spring rains."
    },
    {
      id: "moderate-19-25",
      word: "Vex",
      partOfSpeech: "v.",
      definition: "To annoy or worry someone",
      example: "The unsolved riddle continued to vex the entire research team."
    }
  ]
};

const QUESTIONS = {
  "easy-1": [
    {
      id: "easy-1-q1",
      wordId: "easy-1-1",
      passage: "Unlike her cautious coworkers, who softened every criticism, Marisol was refreshingly ___, telling the team exactly what she thought the flaws in the plan were.",
      choices: [
        "candid",
        "reluctant",
        "modest",
        "vague"
      ],
      correct: 0,
      explanation: "The contrast word 'unlike' signals the opposite of softening criticism — telling the team exactly what she thought requires a word meaning frank/honest. 'Candid' fits; the others don't match direct honesty."
    },
    {
      id: "easy-1-q2",
      wordId: "easy-1-2",
      passage: "Though the assignment wasn't due for another month, Priya was so ___ that she had already completed a full draft.",
      choices: [
        "awkward",
        "diligent",
        "curious",
        "ordinary"
      ],
      correct: 1,
      explanation: "Completing a full draft a month early shows careful, persistent effort — 'diligent' fits. The other choices don't connect to sustained hard work."
    },
    {
      id: "easy-1-q3",
      wordId: "easy-1-3",
      passage: "Even after his friends urged him to apply for the promotion, he remained ___, unsure whether he truly wanted the added responsibility.",
      choices: [
        "eager",
        "reluctant",
        "steady",
        "content"
      ],
      correct: 1,
      explanation: "Being urged by friends but remaining unsure signals unwillingness/hesitation — 'reluctant' fits, while 'eager' would contradict the sentence's logic."
    },
    {
      id: "easy-1-q4",
      wordId: "easy-1-4",
      passage: "The critics doubted the apology at first, but her tears during the interview convinced most viewers her remorse was ___.",
      choices: [
        "vague",
        "genuine",
        "brisk",
        "tedious"
      ],
      correct: 1,
      explanation: "'Convinced viewers' signals the remorse was real, not performed — 'genuine' fits, matching the idea of sincerity the sentence builds toward."
    },
    {
      id: "easy-1-q5",
      wordId: "easy-1-5",
      passage: "Rather than rushing onto the thin ice like the other skaters, Dae-Ho took a ___ approach, testing each step before trusting his full weight to it.",
      choices: [
        "cautious",
        "stubborn",
        "frequent",
        "humble"
      ],
      correct: 0,
      explanation: "Testing each step rather than rushing describes careful avoidance of danger — 'cautious' fits precisely."
    },
    {
      id: "easy-1-q6",
      wordId: "easy-1-6",
      passage: "Because the harvest had been unusually generous that year, the farmers found they had ___ supplies to last well through the winter.",
      choices: [
        "blunt",
        "ample",
        "gradual",
        "awkward"
      ],
      correct: 1,
      explanation: "A generous harvest lasting well through winter implies more than enough — 'ample' fits the idea of plentiful supply."
    },
    {
      id: "easy-1-q7",
      wordId: "easy-1-7",
      passage: "Eager to beat the incoming storm, the hikers set a ___ pace back to the trailhead, covering the last two miles in record time.",
      choices: [
        "tedious",
        "brisk",
        "vague",
        "persistent"
      ],
      correct: 1,
      explanation: "Beating a storm and covering distance in record time both suggest a quick, energetic pace — 'brisk' fits best."
    },
    {
      id: "easy-1-q8",
      wordId: "easy-1-8",
      passage: "Rather than easing into the bad news, the doctor was ___, stating the diagnosis in a single unadorned sentence.",
      choices: [
        "blunt",
        "gradual",
        "eager",
        "reliable"
      ],
      correct: 0,
      explanation: "Stating news in one unadorned sentence, without easing in, describes directness even if uncomfortable — 'blunt' fits."
    },
    {
      id: "easy-1-q9",
      wordId: "easy-1-9",
      passage: "The novelist's ___ description of the abandoned carnival made readers feel as though they could hear the creaking Ferris wheel themselves.",
      choices: [
        "ordinary",
        "vivid",
        "modest",
        "content"
      ],
      correct: 1,
      explanation: "Making readers feel present through sensory detail describes powerful, image-rich writing — 'vivid' fits precisely."
    },
    {
      id: "easy-1-q10",
      wordId: "easy-1-10",
      passage: "Despite the chaos unfolding around her during the fire drill, the teacher kept a ___ voice, calmly directing students toward the exit.",
      choices: [
        "steady",
        "vague",
        "curious",
        "frequent"
      ],
      correct: 0,
      explanation: "A calm voice amid chaos describes something firm and unwavering — 'steady' fits, contrasting with the surrounding disorder."
    },
    {
      id: "easy-1-q11",
      wordId: "easy-1-11",
      passage: "Despite breaking the school record, Amara gave a surprisingly ___ interview afterward, crediting her coaches instead of dwelling on her own performance.",
      choices: [
        "modest",
        "stubborn",
        "blunt",
        "reluctant"
      ],
      correct: 0,
      explanation: "Crediting others rather than dwelling on her own achievement describes a lack of self-importance — 'modest' fits."
    },
    {
      id: "easy-1-q12",
      wordId: "easy-1-12",
      passage: "When asked exactly when the shipment would arrive, the representative gave only a ___ answer, mentioning 'sometime next month' without further detail.",
      choices: [
        "vague",
        "candid",
        "genuine",
        "steady"
      ],
      correct: 0,
      explanation: "An answer lacking specific detail when detail was requested describes unclear, imprecise communication — 'vague' fits."
    },
    {
      id: "easy-1-q13",
      wordId: "easy-1-13",
      passage: "Long before the gates officially opened, the ___ fans had already lined up around the block, unwilling to risk missing the first minutes of the show.",
      choices: [
        "ordinary",
        "eager",
        "tedious",
        "awkward"
      ],
      correct: 1,
      explanation: "Lining up early and being unwilling to miss anything describes enthusiastic impatience — 'eager' fits precisely."
    },
    {
      id: "easy-1-q14",
      wordId: "easy-1-14",
      passage: "Even after three separate experts recommended a different route, the general remained ___, insisting on the original battle plan.",
      choices: [
        "stubborn",
        "grateful",
        "brisk",
        "humble"
      ],
      correct: 0,
      explanation: "Refusing to change despite expert recommendations describes an unwillingness to reconsider — 'stubborn' fits precisely."
    },
    {
      id: "easy-1-q15",
      wordId: "easy-1-15",
      passage: "Though he had just been named CEO, Devon remained ___ around the staff who had once trained him, never acting as though the promotion made him superior.",
      choices: [
        "humble",
        "vague",
        "reluctant",
        "persistent"
      ],
      correct: 0,
      explanation: "Not acting superior despite a promotion describes a modest, unassuming attitude — 'humble' fits."
    },
    {
      id: "easy-1-q16",
      wordId: "easy-1-16",
      passage: "Sorting through decades of unlabeled photographs proved to be a ___ task, one that tested even her considerable patience.",
      choices: [
        "tedious",
        "brisk",
        "genuine",
        "content"
      ],
      correct: 0,
      explanation: "A task that tests patience and takes considerable time describes something long and boring — 'tedious' fits."
    },
    {
      id: "easy-1-q17",
      wordId: "easy-1-17",
      passage: "Ever ___ about how machines worked, the young engineer took apart the old radio simply to see what was inside.",
      choices: [
        "curious",
        "cautious",
        "stubborn",
        "ample"
      ],
      correct: 0,
      explanation: "Taking something apart just to see how it works describes eagerness to learn — 'curious' fits precisely."
    },
    {
      id: "easy-1-q18",
      wordId: "easy-1-18",
      passage: "Because storms were so ___ along that stretch of coast, the fishermen checked the forecast multiple times before every trip.",
      choices: [
        "frequent",
        "genuine",
        "modest",
        "awkward"
      ],
      correct: 0,
      explanation: "Checking forecasts multiple times suggests storms happen often in that area — 'frequent' fits precisely."
    },
    {
      id: "easy-1-q19",
      wordId: "easy-1-19",
      passage: "The silence that followed his joke was so ___ that he immediately wished he could take the comment back.",
      choices: [
        "awkward",
        "reliable",
        "gradual",
        "vivid"
      ],
      correct: 0,
      explanation: "A silence that makes someone regret a joke describes uncomfortable social tension — 'awkward' fits precisely."
    },
    {
      id: "easy-1-q20",
      wordId: "easy-1-20",
      passage: "Whenever a crisis struck the office, everyone turned to Teresa first, knowing she was the most ___ person on the team.",
      choices: [
        "reliable",
        "vague",
        "tedious",
        "eager"
      ],
      correct: 0,
      explanation: "Being the person others trust during a crisis describes consistent dependability — 'reliable' fits precisely."
    },
    {
      id: "easy-1-q21",
      wordId: "easy-1-21",
      passage: "Rather than announcing the change all at once, the company rolled out the new policy in a ___ way, adjusting one department at a time over several months.",
      choices: [
        "gradual",
        "brisk",
        "blunt",
        "curious"
      ],
      correct: 0,
      explanation: "Adjusting one department at a time over months, rather than all at once, describes a slow, staged process — 'gradual' fits."
    },
    {
      id: "easy-1-q22",
      wordId: "easy-1-22",
      passage: "After years of chasing bigger titles, she finally felt ___ running her small bakery, wanting nothing more than what she already had.",
      choices: [
        "content",
        "reluctant",
        "stubborn",
        "vague"
      ],
      correct: 0,
      explanation: "Wanting nothing more than what one already has describes peaceful satisfaction — 'content' fits precisely."
    },
    {
      id: "easy-1-q23",
      wordId: "easy-1-23",
      passage: "The detective almost overlooked the file, since at first glance it seemed to describe an entirely ___ Tuesday with nothing unusual in it.",
      choices: [
        "ordinary",
        "genuine",
        "diligent",
        "persistent"
      ],
      correct: 0,
      explanation: "A day with nothing unusual in it describes something normal and unremarkable — 'ordinary' fits precisely."
    },
    {
      id: "easy-1-q24",
      wordId: "easy-1-24",
      passage: "Though her first three attempts at the recipe failed, her ___ effort in the kitchen eventually produced a soufflé that didn't collapse.",
      choices: [
        "persistent",
        "awkward",
        "vague",
        "content"
      ],
      correct: 0,
      explanation: "Continuing to try despite three failures describes ongoing effort in the face of difficulty — 'persistent' fits precisely."
    },
    {
      id: "easy-1-q25",
      wordId: "easy-1-25",
      passage: "She sent a handwritten note to her tutor, ___ for the extra hours he'd spent helping her prepare for the exam.",
      choices: [
        "grateful",
        "reluctant",
        "blunt",
        "stubborn"
      ],
      correct: 0,
      explanation: "Sending a thank-you note for someone's extra help describes appreciation — 'grateful' fits precisely."
    }
  ],
  "easy-2": [
    {
      id: "easy-2-q1",
      wordId: "easy-2-1",
      passage: "Because the new house had four bedrooms and two living rooms, the family found the layout wonderfully ___ compared to their old apartment.",
      choices: [
        "sturdy",
        "spacious",
        "bleak",
        "sleek"
      ],
      correct: 1,
      explanation: "Four bedrooms and two living rooms compared to a cramped apartment signals a lot of room — 'spacious' fits."
    },
    {
      id: "easy-2-q2",
      wordId: "easy-2-2",
      passage: "The crowd packed so tightly into the subway car that the air itself felt ___ and hard to move through.",
      choices: [
        "fragile",
        "dense",
        "lush",
        "subtle"
      ],
      correct: 1,
      explanation: "A tightly packed crowd where air is hard to move through describes closeness and thickness — 'dense' fits."
    },
    {
      id: "easy-2-q3",
      wordId: "easy-2-3",
      passage: "After the storm stirred up the lakebed, swimmers could no longer see their own feet in the ___ water.",
      choices: [
        "bleak",
        "murky",
        "quaint",
        "dense"
      ],
      correct: 1,
      explanation: "Water stirred up so swimmers can't see their feet describes cloudiness — 'murky' fits."
    },
    {
      id: "easy-2-q4",
      wordId: "easy-2-4",
      passage: "Even from across the gymnasium, her ___ smile seemed to light up every face turned toward the stage.",
      choices: [
        "stark",
        "radiant",
        "subtle",
        "jagged"
      ],
      correct: 1,
      explanation: "A smile that lights up faces across a room describes something glowing — 'radiant' fits."
    },
    {
      id: "easy-2-q5",
      wordId: "easy-2-5",
      passage: "After ten years of daily use and three cross-country moves, the ___ old suitcase still hadn't cracked.",
      choices: [
        "quaint",
        "sturdy",
        "immense",
        "muted"
      ],
      correct: 1,
      explanation: "Surviving ten years and three moves without cracking describes toughness — 'sturdy' fits."
    },
    {
      id: "easy-2-q6",
      wordId: "easy-2-6",
      passage: "The antique teacup was so ___ that she wrapped it in three layers of tissue before packing it.",
      choices: [
        "lush",
        "barren",
        "fragile",
        "pristine"
      ],
      correct: 2,
      explanation: "Wrapping something in three layers before packing signals a fear it will break — 'fragile' fits."
    },
    {
      id: "easy-2-q7",
      wordId: "easy-2-7",
      passage: "From the airplane window, the ___ canyon stretched so far in every direction that its far edge disappeared into haze.",
      choices: [
        "fragile",
        "quaint",
        "immense",
        "faint"
      ],
      correct: 2,
      explanation: "A canyon whose far edge disappears into haze describes extreme size — 'immense' fits."
    },
    {
      id: "easy-2-q8",
      wordId: "easy-2-8",
      passage: "Over the phone, his voice grew so ___ that she had to press the receiver hard against her ear to catch the words.",
      choices: [
        "jagged",
        "pristine",
        "faint",
        "radiant"
      ],
      correct: 2,
      explanation: "A voice requiring the receiver pressed hard to the ear to be caught describes weakness in sound — 'faint' fits."
    },
    {
      id: "easy-2-q9",
      wordId: "easy-2-9",
      passage: "Walking barefoot across the ___ gravel driveway made her wince with every step.",
      choices: [
        "spacious",
        "coarse",
        "drab",
        "subtle"
      ],
      correct: 1,
      explanation: "Gravel that makes bare feet wince describes a rough texture — 'coarse' fits."
    },
    {
      id: "easy-2-q10",
      wordId: "easy-2-10",
      passage: "The showroom's newest model had such a ___ finish that reflections of the ceiling lights slid smoothly across its hood.",
      choices: [
        "hollow",
        "sleek",
        "faint",
        "jagged"
      ],
      correct: 1,
      explanation: "A finish that reflections slide smoothly across describes something polished and glossy — 'sleek' fits."
    },
    {
      id: "easy-2-q11",
      wordId: "easy-2-11",
      passage: "After the vibrant mural was painted over, the wall returned to its old, ___ shade of beige.",
      choices: [
        "pristine",
        "spacious",
        "dense",
        "drab"
      ],
      correct: 3,
      explanation: "Returning to a plain shade after a vibrant mural is removed describes dullness — 'drab' fits."
    },
    {
      id: "easy-2-q12",
      wordId: "easy-2-12",
      passage: "Even in late October, the greenhouse's ___ ferns showed no sign of the frost outside.",
      choices: [
        "barren",
        "sturdy",
        "lush",
        "glossy"
      ],
      correct: 2,
      explanation: "Ferns unaffected by outside frost and thriving describes rich, healthy growth — 'lush' fits."
    },
    {
      id: "easy-2-q13",
      wordId: "easy-2-13",
      passage: "Decades of drought had left the once-fertile valley ___, unable to support even the hardiest crops.",
      choices: [
        "rugged",
        "faint",
        "dense",
        "barren"
      ],
      correct: 3,
      explanation: "A valley unable to support even hardy crops after drought describes emptiness of growth — 'barren' fits."
    },
    {
      id: "easy-2-q14",
      wordId: "easy-2-14",
      passage: "The museum kept the ancient manuscript in a sealed case, its pages remarkably ___ despite being centuries old.",
      choices: [
        "pristine",
        "fragile",
        "sturdy",
        "glossy"
      ],
      correct: 0,
      explanation: "Pages remarkably unspoiled despite being centuries old describes an original, spotless condition — 'pristine' fits."
    },
    {
      id: "easy-2-q15",
      wordId: "easy-2-15",
      passage: "Only ___ four-wheel-drive trucks could handle the boulder-strewn path up to the summit.",
      choices: [
        "immense",
        "crisp",
        "rugged",
        "hollow"
      ],
      correct: 2,
      explanation: "A boulder-strewn path handled only by tough vehicles describes a rough, uneven surface — 'rugged' fits."
    },
    {
      id: "easy-2-q16",
      wordId: "easy-2-16",
      passage: "Only a trained ear would catch the ___ shift in key halfway through the symphony's second movement.",
      choices: [
        "crisp",
        "subtle",
        "muted",
        "vast"
      ],
      correct: 1,
      explanation: "A shift only a trained ear would catch describes something delicate and hard to notice — 'subtle' fits."
    },
    {
      id: "easy-2-q17",
      wordId: "easy-2-17",
      passage: "Against the pale winter sky, the leafless black trees made for a ___ silhouette along the ridge.",
      choices: [
        "sturdy",
        "stark",
        "radiant",
        "quaint"
      ],
      correct: 1,
      explanation: "A leafless silhouette against pale sky describes bareness and severity — 'stark' fits."
    },
    {
      id: "easy-2-q18",
      wordId: "easy-2-18",
      passage: "The designer chose ___ grays and browns instead of the bold colors the client had originally requested.",
      choices: [
        "dense",
        "vast",
        "muted",
        "spacious"
      ],
      correct: 2,
      explanation: "Grays and browns chosen instead of bold colors describes softened, subdued tones — 'muted' fits."
    },
    {
      id: "easy-2-q19",
      wordId: "easy-2-19",
      passage: "She loved how the ___ morning air felt against her face during the first jog of autumn.",
      choices: [
        "fragile",
        "lush",
        "crisp",
        "radiant"
      ],
      correct: 2,
      explanation: "Autumn air that feels fresh on a morning jog describes pleasantly firm coolness — 'crisp' fits."
    },
    {
      id: "easy-2-q20",
      wordId: "easy-2-20",
      passage: "Tapping on the old oak door, the inspector noted it sounded strangely ___, as though something inside had rotted away.",
      choices: [
        "murky",
        "hollow",
        "radiant",
        "glossy"
      ],
      correct: 1,
      explanation: "A door sounding as though something inside had rotted away describes emptiness within — 'hollow' fits."
    },
    {
      id: "easy-2-q21",
      wordId: "easy-2-21",
      passage: "The cliffside trail was lined with ___ rocks that could easily cut an unprotected hand.",
      choices: [
        "pristine",
        "fragile",
        "murky",
        "jagged"
      ],
      correct: 3,
      explanation: "Rocks that could cut an unprotected hand describe a sharply uneven edge — 'jagged' fits."
    },
    {
      id: "easy-2-q22",
      wordId: "easy-2-22",
      passage: "The car dealership buffed each vehicle until its paint had a ___ shine visible from across the lot.",
      choices: [
        "sturdy",
        "radiant",
        "glossy",
        "pristine"
      ],
      correct: 2,
      explanation: "Paint with a shine visible from across a lot describes smoothness and gloss — 'glossy' fits."
    },
    {
      id: "easy-2-q23",
      wordId: "easy-2-23",
      passage: "Under the gray, ___ sky, the empty amusement park felt more haunting than festive.",
      choices: [
        "barren",
        "immense",
        "bleak",
        "sturdy"
      ],
      correct: 2,
      explanation: "A gray sky making an empty park feel haunting describes a lack of hope or cheer — 'bleak' fits."
    },
    {
      id: "easy-2-q24",
      wordId: "easy-2-24",
      passage: "Tourists loved photographing the town's ___ cobblestone square, untouched by modern development.",
      choices: [
        "vast",
        "quaint",
        "coarse",
        "bleak"
      ],
      correct: 1,
      explanation: "A cobblestone square untouched by modern development, loved by tourists, describes old-fashioned charm — 'quaint' fits."
    },
    {
      id: "easy-2-q25",
      wordId: "easy-2-25",
      passage: "From the mountaintop, the ___ plains below seemed to stretch on without any visible end.",
      choices: [
        "crisp",
        "bleak",
        "vast",
        "jagged"
      ],
      correct: 2,
      explanation: "Plains stretching without any visible end describe enormous area — 'vast' fits."
    }
  ],
  "easy-3": [
    {
      id: "easy-3-q1",
      wordId: "easy-3-1",
      passage: "Following the diagram carefully, it still took him nearly two hours to ___ the bunk bed frame.",
      choices: [
        "secure",
        "restore",
        "linger",
        "assemble"
      ],
      correct: 3,
      explanation: "Following a diagram to put parts together over two hours describes assembling — 'assemble' fits."
    },
    {
      id: "easy-3-q2",
      wordId: "easy-3-2",
      passage: "Once the semester ended, she decided to ___ the stack of outdated flashcards rather than keep them for next year.",
      choices: [
        "discard",
        "secure",
        "assemble",
        "propose"
      ],
      correct: 0,
      explanation: "Getting rid of outdated flashcards once no longer needed describes throwing something away — 'discard' fits."
    },
    {
      id: "easy-3-q3",
      wordId: "easy-3-3",
      passage: "Before answering the reporter's question, the senator paused to ___, clearly unsure how candid to be.",
      choices: [
        "resolve",
        "assemble",
        "hesitate",
        "sustain"
      ],
      correct: 2,
      explanation: "Pausing before answering because unsure how candid to be describes hesitating — 'hesitate' fits."
    },
    {
      id: "easy-3-q4",
      wordId: "easy-3-4",
      passage: "The lifeguard swam out to ___ the drifting kayak before the current pulled it out to sea.",
      choices: [
        "venture",
        "dwell",
        "retrieve",
        "sustain"
      ],
      correct: 2,
      explanation: "Swimming out to bring back a drifting kayak describes retrieving it — 'retrieve' fits."
    },
    {
      id: "easy-3-q5",
      wordId: "easy-3-5",
      passage: "The inspector took nearly an hour to ___ every wire behind the panel before signing off on the repair.",
      choices: [
        "examine",
        "secure",
        "propose",
        "dwell"
      ],
      correct: 0,
      explanation: "Taking an hour to inspect every wire before signing off describes examining carefully — 'examine' fits."
    },
    {
      id: "easy-3-q6",
      wordId: "easy-3-6",
      passage: "With no map and nowhere to be, they let themselves simply ___ through the unfamiliar streets of the old town.",
      choices: [
        "examine",
        "wander",
        "ignite",
        "transform"
      ],
      correct: 1,
      explanation: "Having no map or destination while exploring streets describes wandering — 'wander' fits."
    },
    {
      id: "easy-3-q7",
      wordId: "easy-3-7",
      passage: "She tucked the surprise gift behind the couch cushions to ___ it until the party began.",
      choices: [
        "recite",
        "conceal",
        "assemble",
        "venture"
      ],
      correct: 1,
      explanation: "Tucking a gift away to keep it hidden until a party describes concealing it — 'conceal' fits."
    },
    {
      id: "easy-3-q8",
      wordId: "easy-3-8",
      passage: "After the internship convinced him he loved the work, he decided to ___ a full-time career in the field.",
      choices: [
        "resolve",
        "retrieve",
        "recite",
        "pursue"
      ],
      correct: 3,
      explanation: "Deciding to follow a career path after loving an internship describes pursuing — 'pursue' fits."
    },
    {
      id: "easy-3-q9",
      wordId: "easy-3-9",
      passage: "As the flooding worsened, residents were forced to ___ their homes and move to higher ground.",
      choices: [
        "abandon",
        "secure",
        "examine",
        "sustain"
      ],
      correct: 0,
      explanation: "Being forced to leave homes as flooding worsens describes abandoning them — 'abandon' fits."
    },
    {
      id: "easy-3-q10",
      wordId: "easy-3-10",
      passage: "The historical society spent three years working to ___ the collapsed barn to its original nineteenth-century appearance.",
      choices: [
        "adjust",
        "confront",
        "restore",
        "examine"
      ],
      correct: 2,
      explanation: "Working to return a barn to its original historical appearance describes restoring it — 'restore' fits."
    },
    {
      id: "easy-3-q11",
      wordId: "easy-3-11",
      passage: "Realizing she was missing one key ingredient, the baker had to ___ the recipe on the spot.",
      choices: [
        "adjust",
        "pursue",
        "wander",
        "retrieve"
      ],
      correct: 0,
      explanation: "Changing a recipe on the spot because of a missing ingredient describes adjusting it — 'adjust' fits."
    },
    {
      id: "easy-3-q12",
      wordId: "easy-3-12",
      passage: "Long after the meeting had moved on, he continued to ___ on the one criticism that had stung the most.",
      choices: [
        "retrieve",
        "restore",
        "dwell",
        "hesitate"
      ],
      correct: 2,
      explanation: "Continuing to focus on one comment long after a meeting describes dwelling on it — 'dwell' fits."
    },
    {
      id: "easy-3-q13",
      wordId: "easy-3-13",
      passage: "The smell of the fresh bread seemed to ___ in the kitchen well past breakfast.",
      choices: [
        "confront",
        "retrieve",
        "wander",
        "linger"
      ],
      correct: 3,
      explanation: "A smell that stays in the kitchen well past breakfast describes lingering — 'linger' fits."
    },
    {
      id: "easy-3-q14",
      wordId: "easy-3-14",
      passage: "A single spark from the dry grass was enough to ___ the entire hillside within minutes.",
      choices: [
        "propose",
        "hesitate",
        "recite",
        "ignite"
      ],
      correct: 3,
      explanation: "A single spark setting an entire hillside on fire describes igniting it — 'ignite' fits."
    },
    {
      id: "easy-3-q15",
      wordId: "easy-3-15",
      passage: "Applicants have until Friday at midnight to ___ their final portfolios for review.",
      choices: [
        "examine",
        "abandon",
        "recite",
        "submit"
      ],
      correct: 3,
      explanation: "Having a deadline to hand in a portfolio for review describes submitting it — 'submit' fits."
    },
    {
      id: "easy-3-q16",
      wordId: "easy-3-16",
      passage: "After twisting his ankle on the first lap, the runner had no choice but to ___ from the race.",
      choices: [
        "restore",
        "linger",
        "withdraw",
        "submit"
      ],
      correct: 2,
      explanation: "Being forced to leave a race after an injury describes withdrawing — 'withdraw' fits."
    },
    {
      id: "easy-3-q17",
      wordId: "easy-3-17",
      passage: "The two neighbors finally sat down over coffee to ___ their years-long disagreement about the shared fence.",
      choices: [
        "linger",
        "adjust",
        "dwell",
        "resolve"
      ],
      correct: 3,
      explanation: "Sitting down to settle a years-long disagreement describes resolving it — 'resolve' fits."
    },
    {
      id: "easy-3-q18",
      wordId: "easy-3-18",
      passage: "The soldiers had to ___ weeks of freezing rain before reinforcements finally arrived.",
      choices: [
        "endure",
        "recite",
        "withdraw",
        "restore"
      ],
      correct: 0,
      explanation: "Suffering through weeks of freezing rain before help arrives describes enduring it — 'endure' fits."
    },
    {
      id: "easy-3-q19",
      wordId: "easy-3-19",
      passage: "She finally worked up the nerve to ___ her roommate about the unpaid rent.",
      choices: [
        "withdraw",
        "resolve",
        "confront",
        "retrieve"
      ],
      correct: 2,
      explanation: "Working up nerve to face someone about an issue directly describes confronting them — 'confront' fits."
    },
    {
      id: "easy-3-q20",
      wordId: "easy-3-20",
      passage: "At tomorrow's meeting, the committee plans to ___ a revised schedule for the entire department.",
      choices: [
        "resolve",
        "recite",
        "propose",
        "venture"
      ],
      correct: 2,
      explanation: "Planning to suggest a revised schedule at a meeting describes proposing it — 'propose' fits."
    },
    {
      id: "easy-3-q21",
      wordId: "easy-3-21",
      passage: "Weekly rainfall was just enough to ___ the struggling crops through the driest part of summer.",
      choices: [
        "discard",
        "resolve",
        "sustain",
        "recite"
      ],
      correct: 2,
      explanation: "Rainfall that is just enough to keep struggling crops alive describes sustaining them — 'sustain' fits."
    },
    {
      id: "easy-3-q22",
      wordId: "easy-3-22",
      passage: "Few climbers dare to ___ up the peak once the winter winds set in.",
      choices: [
        "wander",
        "pursue",
        "endure",
        "venture"
      ],
      correct: 3,
      explanation: "Few people daring to attempt a risky climb in bad weather describes venturing — 'venture' fits."
    },
    {
      id: "easy-3-q23",
      wordId: "easy-3-23",
      passage: "Before the storm made landfall, the campers rushed to ___ every stake and rope around the tent.",
      choices: [
        "secure",
        "confront",
        "discard",
        "examine"
      ],
      correct: 0,
      explanation: "Rushing to fasten stakes and ropes before a storm describes securing the tent — 'secure' fits."
    },
    {
      id: "easy-3-q24",
      wordId: "easy-3-24",
      passage: "A single coat of bright paint was enough to completely ___ the once-drab waiting room.",
      choices: [
        "submit",
        "retrieve",
        "abandon",
        "transform"
      ],
      correct: 3,
      explanation: "A coat of paint completely changing a drab room describes transforming it — 'transform' fits."
    },
    {
      id: "easy-3-q25",
      wordId: "easy-3-25",
      passage: "Each fourth grader was asked to stand and ___ a short poem from memory in front of the class.",
      choices: [
        "hesitate",
        "submit",
        "conceal",
        "recite"
      ],
      correct: 3,
      explanation: "Standing to say a poem from memory in front of a class describes reciting it — 'recite' fits."
    }
  ],
  "easy-4": [
    {
      id: "easy-4-q1",
      wordId: "easy-4-1",
      passage: "Rather than making excuses for the missed deadline, she gave an ___ account of exactly what had gone wrong.",
      choices: [
        "capable",
        "honest",
        "versatile",
        "dependable"
      ],
      correct: 1,
      explanation: "Giving a truthful account instead of excuses describes honesty — 'honest' fits."
    },
    {
      id: "easy-4-q2",
      wordId: "easy-4-2",
      passage: "The anonymous donor was so ___ that she covered tuition for every student in the graduating class.",
      choices: [
        "decisive",
        "attentive",
        "generous",
        "capable"
      ],
      correct: 2,
      explanation: "Covering tuition for an entire graduating class describes giving generously — 'generous' fits."
    },
    {
      id: "easy-4-q3",
      wordId: "easy-4-3",
      passage: "Even during the busiest rush, the host remained ___, greeting every guest warmly at the door.",
      choices: [
        "cheerful",
        "capable",
        "courteous",
        "adaptable"
      ],
      correct: 2,
      explanation: "Greeting every guest warmly during a busy rush describes politeness — 'courteous' fits."
    },
    {
      id: "easy-4-q4",
      wordId: "easy-4-4",
      passage: "Known for never once arriving late in ten years, she had built a reputation for being remarkably ___.",
      choices: [
        "patient",
        "punctual",
        "sincere",
        "generous"
      ],
      correct: 1,
      explanation: "Never once being late in ten years describes being on time — 'punctual' fits."
    },
    {
      id: "easy-4-q5",
      wordId: "easy-4-5",
      passage: "Her ___ review of the contract caught a clause that three other lawyers had missed.",
      choices: [
        "capable",
        "gracious",
        "thorough",
        "thoughtful"
      ],
      correct: 2,
      explanation: "A review catching a clause others missed describes thoroughness in detail — 'thorough' fits."
    },
    {
      id: "easy-4-q6",
      wordId: "easy-4-6",
      passage: "Stranded without cell service, the ___ hikers built a signal fire using materials they gathered from the forest floor.",
      choices: [
        "thorough",
        "resourceful",
        "versatile",
        "disciplined"
      ],
      correct: 1,
      explanation: "Building a signal fire from gathered materials when stranded describes being resourceful — 'resourceful' fits."
    },
    {
      id: "easy-4-q7",
      wordId: "easy-4-7",
      passage: "Instead of bluntly listing every flaw, the mentor offered ___ suggestions that didn't discourage the young writer.",
      choices: [
        "decisive",
        "adaptable",
        "considerate",
        "tactful"
      ],
      correct: 3,
      explanation: "Suggestions offered without discouraging someone describes being careful and diplomatic — 'tactful' fits."
    },
    {
      id: "easy-4-q8",
      wordId: "easy-4-8",
      passage: "The ___ player could switch from defense to midfield without missing a step.",
      choices: [
        "tactful",
        "versatile",
        "honest",
        "generous"
      ],
      correct: 1,
      explanation: "Switching smoothly between very different roles describes adaptability across functions — 'versatile' fits."
    },
    {
      id: "easy-4-q9",
      wordId: "easy-4-9",
      passage: "The software proved remarkably ___, running smoothly whether installed on a phone, tablet, or laptop.",
      choices: [
        "punctual",
        "decisive",
        "adaptable",
        "energetic"
      ],
      correct: 2,
      explanation: "Software running smoothly on very different devices describes easy adjustment to new conditions — 'adaptable' fits."
    },
    {
      id: "easy-4-q10",
      wordId: "easy-4-10",
      passage: "After years without a single breakdown, her old truck had earned a reputation as completely ___.",
      choices: [
        "sociable",
        "dependable",
        "gracious",
        "disciplined"
      ],
      correct: 1,
      explanation: "Years without a single breakdown describes reliability — 'dependable' fits."
    },
    {
      id: "easy-4-q11",
      wordId: "easy-4-11",
      passage: "It was ___ of him to save an extra seat, knowing his friend's train always ran late.",
      choices: [
        "cheerful",
        "considerate",
        "generous",
        "tactful"
      ],
      correct: 1,
      explanation: "Saving a seat in anticipation of someone's needs describes thoughtfulness toward others — 'considerate' fits."
    },
    {
      id: "easy-4-q12",
      wordId: "easy-4-12",
      passage: "His apology felt entirely ___, without a hint of the performance she'd expected.",
      choices: [
        "capable",
        "adaptable",
        "sincere",
        "honest"
      ],
      correct: 2,
      explanation: "An apology without any performance describes genuineness — 'sincere' fits."
    },
    {
      id: "easy-4-q13",
      wordId: "easy-4-13",
      passage: "Even to the guest who arrived uninvited, the ___ host offered a warm seat and a full plate.",
      choices: [
        "energetic",
        "gracious",
        "competent",
        "capable"
      ],
      correct: 1,
      explanation: "Offering warmth even to an uninvited guest describes kindness and courtesy — 'gracious' fits."
    },
    {
      id: "easy-4-q14",
      wordId: "easy-4-14",
      passage: "Knowing her friend loved astronomy, she planned a ___ gift: a night at the local observatory.",
      choices: [
        "thoughtful",
        "loyal",
        "considerate",
        "gracious"
      ],
      correct: 0,
      explanation: "A gift planned around someone's specific interest describes careful consideration — 'thoughtful' fits."
    },
    {
      id: "easy-4-q15",
      wordId: "easy-4-15",
      passage: "The ___ nurse noticed the smallest change in her patient's breathing before anyone else did.",
      choices: [
        "capable",
        "cheerful",
        "attentive",
        "versatile"
      ],
      correct: 2,
      explanation: "Noticing the smallest change before anyone else describes close attention to others' needs — 'attentive' fits."
    },
    {
      id: "easy-4-q16",
      wordId: "easy-4-16",
      passage: "Given the size of the project, the manager needed someone ___ enough to run it without daily supervision.",
      choices: [
        "versatile",
        "patient",
        "attentive",
        "capable"
      ],
      correct: 3,
      explanation: "Being trusted to run something without supervision describes having strong ability — 'capable' fits."
    },
    {
      id: "easy-4-q17",
      wordId: "easy-4-17",
      passage: "Within minutes, the ___ mechanic had diagnosed the exact source of the engine's rattling noise.",
      choices: [
        "disciplined",
        "sincere",
        "competent",
        "punctual"
      ],
      correct: 2,
      explanation: "Diagnosing a problem within minutes describes having enough skill to succeed — 'competent' fits."
    },
    {
      id: "easy-4-q18",
      wordId: "easy-4-18",
      passage: "Unlike her hesitant colleagues, the ___ coach made the tough substitution without a second thought.",
      choices: [
        "energetic",
        "resourceful",
        "sincere",
        "decisive"
      ],
      correct: 3,
      explanation: "Making a tough call without hesitation, unlike hesitant colleagues, describes confident decision-making — 'decisive' fits."
    },
    {
      id: "easy-4-q19",
      wordId: "easy-4-19",
      passage: "The ___ tutor explained the same concept three different ways without a hint of frustration.",
      choices: [
        "courteous",
        "tactful",
        "patient",
        "attentive"
      ],
      correct: 2,
      explanation: "Explaining something three times without frustration describes calm endurance — 'patient' fits."
    },
    {
      id: "easy-4-q20",
      wordId: "easy-4-20",
      passage: "Even as prices rose elsewhere, her ___ customers kept returning to the same small shop.",
      choices: [
        "versatile",
        "disciplined",
        "loyal",
        "tactful"
      ],
      correct: 2,
      explanation: "Customers who keep returning despite rising prices elsewhere describe faithfulness — 'loyal' fits."
    },
    {
      id: "easy-4-q21",
      wordId: "easy-4-21",
      passage: "He remained ___ toward the referee even while strongly disagreeing with the call.",
      choices: [
        "respectful",
        "attentive",
        "sociable",
        "cheerful"
      ],
      correct: 0,
      explanation: "Staying polite while disagreeing strongly describes showing consideration to someone — 'respectful' fits."
    },
    {
      id: "easy-4-q22",
      wordId: "easy-4-22",
      passage: "Within her first week at the new school, the ___ student had already made friends in every class.",
      choices: [
        "disciplined",
        "cheerful",
        "sociable",
        "capable"
      ],
      correct: 2,
      explanation: "Making friends across every class within a week describes friendliness — 'sociable' fits."
    },
    {
      id: "easy-4-q23",
      wordId: "easy-4-23",
      passage: "The ___ puppy raced circles around the yard for nearly an hour without slowing down.",
      choices: [
        "energetic",
        "respectful",
        "loyal",
        "versatile"
      ],
      correct: 0,
      explanation: "Racing around a yard for an hour without slowing describes being full of energy — 'energetic' fits."
    },
    {
      id: "easy-4-q24",
      wordId: "easy-4-24",
      passage: "Her ___ training schedule, followed without exception for two years, finally paid off at the trials.",
      choices: [
        "disciplined",
        "capable",
        "respectful",
        "gracious"
      ],
      correct: 0,
      explanation: "A schedule followed without exception for years describes controlled, orderly behavior — 'disciplined' fits."
    },
    {
      id: "easy-4-q25",
      wordId: "easy-4-25",
      passage: "Despite the long overnight shifts, his ___ attitude never seemed to fade.",
      choices: [
        "energetic",
        "respectful",
        "cheerful",
        "courteous"
      ],
      correct: 2,
      explanation: "An attitude that stays positive through long shifts describes cheerfulness — 'cheerful' fits."
    }
  ],
  "easy-5": [
    {
      id: "easy-5-q1",
      wordId: "easy-5-1",
      passage: "Waiting for her test results to arrive, she found herself checking her email every few minutes, ___ about what they might say.",
      choices: [
        "frustrated",
        "anxious",
        "indifferent",
        "uneasy"
      ],
      correct: 1,
      explanation: "Checking email every few minutes while awaiting results describes worry — 'anxious' fits."
    },
    {
      id: "easy-5-q2",
      wordId: "easy-5-2",
      passage: "The moment she saw her name on the varsity roster, she felt completely ___, unable to stop smiling.",
      choices: [
        "elated",
        "envious",
        "apprehensive",
        "dismayed"
      ],
      correct: 0,
      explanation: "Being unable to stop smiling upon good news describes extreme happiness — 'elated' fits."
    },
    {
      id: "easy-5-q3",
      wordId: "easy-5-3",
      passage: "By the time the overnight flight landed, the ___ passengers could barely keep their eyes open.",
      choices: [
        "wistful",
        "remorseful",
        "delighted",
        "weary"
      ],
      correct: 3,
      explanation: "Passengers who can barely keep their eyes open describe extreme tiredness — 'weary' fits."
    },
    {
      id: "easy-5-q4",
      wordId: "easy-5-4",
      passage: "The abandoned amusement park, rusted and silent, gave off a distinctly ___ feeling as they walked through it.",
      choices: [
        "melancholy",
        "anxious",
        "longing",
        "gloomy"
      ],
      correct: 3,
      explanation: "An abandoned, rusted, silent park describes a depressing mood without cheer — 'gloomy' fits."
    },
    {
      id: "easy-5-q5",
      wordId: "easy-5-5",
      passage: "Stuck in the car for six hours, the ___ toddlers kept kicking the seats and asking when they'd arrive.",
      choices: [
        "dismayed",
        "astonished",
        "weary",
        "restless"
      ],
      correct: 3,
      explanation: "Kids kicking seats and repeatedly asking when they'll arrive describe being unable to stay still — 'restless' fits."
    },
    {
      id: "easy-5-q6",
      wordId: "easy-5-6",
      passage: "Flipping through her old yearbook made her feel unexpectedly ___ for hallways she hadn't thought about in years.",
      choices: [
        "jubilant",
        "irritable",
        "indifferent",
        "nostalgic"
      ],
      correct: 3,
      explanation: "Feeling drawn to memories she hadn't thought about in years describes sentimental longing — 'nostalgic' fits."
    },
    {
      id: "easy-5-q7",
      wordId: "easy-5-7",
      passage: "He tried not to show it, but he was clearly ___ of his friend's brand-new bike.",
      choices: [
        "relieved",
        "gloomy",
        "elated",
        "envious"
      ],
      correct: 3,
      explanation: "Trying not to show feelings about someone else's new possession describes jealousy — 'envious' fits."
    },
    {
      id: "easy-5-q8",
      wordId: "easy-5-8",
      passage: "After the fender bender, the ___ driver apologized to the other motorist three separate times.",
      choices: [
        "anxious",
        "weary",
        "remorseful",
        "restless"
      ],
      correct: 2,
      explanation: "Apologizing three separate times after causing an accident describes deep regret — 'remorseful' fits."
    },
    {
      id: "easy-5-q9",
      wordId: "easy-5-9",
      passage: "Starting at a brand-new school in the fall left her feeling ___ about whether she'd make any friends.",
      choices: [
        "resentful",
        "apprehensive",
        "dismayed",
        "frustrated"
      ],
      correct: 1,
      explanation: "Feeling worried about an uncertain new situation describes anxiousness about the future — 'apprehensive' fits."
    },
    {
      id: "easy-5-q10",
      wordId: "easy-5-10",
      passage: "The instant the winning goal went in, the ___ crowd erupted, waving flags and hugging strangers.",
      choices: [
        "restless",
        "melancholy",
        "apprehensive",
        "jubilant"
      ],
      correct: 3,
      explanation: "A crowd erupting and hugging strangers after a win describes overwhelming joy — 'jubilant' fits."
    },
    {
      id: "easy-5-q11",
      wordId: "easy-5-11",
      passage: "On days when he hadn't slept enough, even small interruptions made him noticeably ___.",
      choices: [
        "irritable",
        "longing",
        "apprehensive",
        "melancholy"
      ],
      correct: 0,
      explanation: "Small interruptions causing noticeable annoyance describe being easily irritated — 'irritable' fits."
    },
    {
      id: "easy-5-q12",
      wordId: "easy-5-12",
      passage: "Packing up her childhood bedroom for the last time, she gave the walls one ___ glance before closing the door.",
      choices: [
        "restless",
        "astonished",
        "envious",
        "wistful"
      ],
      correct: 3,
      explanation: "A final glance filled with mixed regret while leaving somewhere describes wistfulness — 'wistful' fits."
    },
    {
      id: "easy-5-q13",
      wordId: "easy-5-13",
      passage: "He seemed entirely ___ to the outcome of the vote, shrugging when asked which way he'd chosen.",
      choices: [
        "gloomy",
        "apprehensive",
        "indifferent",
        "relieved"
      ],
      correct: 2,
      explanation: "Shrugging when asked about an outcome describes having no particular concern — 'indifferent' fits."
    },
    {
      id: "easy-5-q14",
      wordId: "easy-5-14",
      passage: "The coach looked visibly ___ watching his team give up with ten minutes still left on the clock.",
      choices: [
        "envious",
        "resentful",
        "dismayed",
        "frustrated"
      ],
      correct: 2,
      explanation: "Looking upset watching a team give up too early describes disappointment — 'dismayed' fits."
    },
    {
      id: "easy-5-q15",
      wordId: "easy-5-15",
      passage: "Hearing that the flight was only delayed, not cancelled, she let out a long, ___ breath.",
      choices: [
        "melancholy",
        "relieved",
        "nostalgic",
        "remorseful"
      ],
      correct: 1,
      explanation: "Letting out a breath at news that could have been worse describes relief — 'relieved' fits."
    },
    {
      id: "easy-5-q16",
      wordId: "easy-5-16",
      passage: "An ___ silence settled over the office once the announcement of layoffs was made.",
      choices: [
        "uneasy",
        "frustrated",
        "remorseful",
        "delighted"
      ],
      correct: 0,
      explanation: "A silence settling after unsettling news describes discomfort — 'uneasy' fits."
    },
    {
      id: "easy-5-q17",
      wordId: "easy-5-17",
      passage: "The ___ applicants lined up outside the office long before it opened, sure this would finally be their year.",
      choices: [
        "hopeful",
        "melancholy",
        "longing",
        "embarrassed"
      ],
      correct: 0,
      explanation: "Lining up before an office opens, sure of a good outcome, describes optimism — 'hopeful' fits."
    },
    {
      id: "easy-5-q18",
      wordId: "easy-5-18",
      passage: "Passed over for the promotion twice in a row, he grew increasingly ___ toward management.",
      choices: [
        "indifferent",
        "frustrated",
        "wistful",
        "resentful"
      ],
      correct: 3,
      explanation: "Growing bitter after being passed over repeatedly describes resentment — 'resentful' fits."
    },
    {
      id: "easy-5-q19",
      wordId: "easy-5-19",
      passage: "Tripping in front of the entire class left her too ___ to look anyone in the eye for the rest of the period.",
      choices: [
        "longing",
        "embarrassed",
        "wistful",
        "frustrated"
      ],
      correct: 1,
      explanation: "Being too self-conscious to make eye contact after tripping describes embarrassment — 'embarrassed' fits."
    },
    {
      id: "easy-5-q20",
      wordId: "easy-5-20",
      passage: "The audience sat in stunned silence, utterly ___ by the magician's final, impossible trick.",
      choices: [
        "astonished",
        "frustrated",
        "apprehensive",
        "relieved"
      ],
      correct: 0,
      explanation: "Stunned silence at an impossible trick describes great surprise — 'astonished' fits."
    },
    {
      id: "easy-5-q21",
      wordId: "easy-5-21",
      passage: "Grandma's face lit up, ___ to have every one of her grandchildren under one roof again.",
      choices: [
        "uneasy",
        "resentful",
        "delighted",
        "weary"
      ],
      correct: 2,
      explanation: "A face lighting up at having family together describes great pleasure — 'delighted' fits."
    },
    {
      id: "easy-5-q22",
      wordId: "easy-5-22",
      passage: "After the printer jammed for the third time that morning, he slammed his laptop shut in ___ silence.",
      choices: [
        "nostalgic",
        "melancholy",
        "hopeful",
        "frustrated"
      ],
      correct: 3,
      explanation: "Slamming a laptop shut after repeated technical failures describes being upset by an inability to fix something — 'frustrated' fits."
    },
    {
      id: "easy-5-q23",
      wordId: "easy-5-23",
      passage: "A ___ tune drifted from the piano, matching the film's quiet, reflective final scene.",
      choices: [
        "envious",
        "gloomy",
        "jubilant",
        "melancholy"
      ],
      correct: 3,
      explanation: "A tune matching a quiet, reflective scene describes thoughtful sadness — 'melancholy' fits."
    },
    {
      id: "easy-5-q24",
      wordId: "easy-5-24",
      passage: "The ___ team trudged off the field without a word, still stunned by the final score.",
      choices: [
        "dejected",
        "envious",
        "indifferent",
        "nostalgic"
      ],
      correct: 0,
      explanation: "Trudging off the field in stunned silence after a loss describes sadness and discouragement — 'dejected' fits."
    },
    {
      id: "easy-5-q25",
      wordId: "easy-5-25",
      passage: "She cast one ___ glance back at the empty swing set as the car pulled out of the driveway.",
      choices: [
        "longing",
        "dismayed",
        "irritable",
        "wistful"
      ],
      correct: 0,
      explanation: "A final glance filled with yearning as one leaves a place describes longing — 'longing' fits."
    }
  ],
  "easy-6": [
    {
      id: "easy-6-q1",
      wordId: "easy-6-1",
      passage: "Just because the store's lights were off didn't mean they should ___ it was closed without checking the posted hours.",
      choices: [
        "analyze",
        "rational",
        "assume",
        "illustrate"
      ],
      correct: 2,
      explanation: "Not checking posted hours before deciding something is closed describes accepting something without proof — 'assume' fits."
    },
    {
      id: "easy-6-q2",
      wordId: "easy-6-2",
      passage: "After weighing every witness statement, the jury took only twenty minutes to ___ that the defendant was innocent.",
      choices: [
        "illustrate",
        "conclude",
        "relevant",
        "consistent"
      ],
      correct: 1,
      explanation: "Reaching a decision after weighing evidence describes concluding — 'conclude' fits."
    },
    {
      id: "easy-6-q3",
      wordId: "easy-6-3",
      passage: "She had to ___ the extra spending to her manager by showing exactly how it would boost sales.",
      choices: [
        "justify",
        "obvious",
        "rational",
        "relevant"
      ],
      correct: 0,
      explanation: "Showing exactly how spending would help to gain approval describes justifying it — 'justify' fits."
    },
    {
      id: "easy-6-q4",
      wordId: "easy-6-4",
      passage: "Before publishing the results, the lab ran a second, independent test to ___ that the numbers were accurate.",
      choices: [
        "reasoning",
        "verify",
        "predict",
        "relevant"
      ],
      correct: 1,
      explanation: "Running a second test to confirm accuracy describes verifying — 'verify' fits."
    },
    {
      id: "easy-6-q5",
      wordId: "easy-6-5",
      passage: "Based on current ocean temperatures, meteorologists ___ a milder-than-average hurricane season this year.",
      choices: [
        "predict",
        "illustrate",
        "evident",
        "conclude"
      ],
      correct: 0,
      explanation: "Stating what weather is likely to happen in the future describes predicting — 'predict' fits."
    },
    {
      id: "easy-6-q6",
      wordId: "easy-6-6",
      passage: "From the tightness in her voice, I could ___ that something was bothering her, even though she said everything was fine.",
      choices: [
        "obvious",
        "evident",
        "infer",
        "contradict"
      ],
      correct: 2,
      explanation: "Working out an unstated feeling from tone of voice describes inferring — 'infer' fits."
    },
    {
      id: "easy-6-q7",
      wordId: "easy-6-7",
      passage: "The research team spent three weeks combing through survey responses to ___ patterns in customer behavior.",
      choices: [
        "evident",
        "sound",
        "obvious",
        "analyze"
      ],
      correct: 3,
      explanation: "Combing through data to find patterns describes analyzing — 'analyze' fits."
    },
    {
      id: "easy-6-q8",
      wordId: "easy-6-8",
      passage: "Every essay is graded using the same rubric, allowing teachers to ___ each submission fairly.",
      choices: [
        "contradict",
        "evaluate",
        "predict",
        "obvious"
      ],
      correct: 1,
      explanation: "Grading with the same rubric to judge fairness describes evaluating — 'evaluate' fits."
    },
    {
      id: "easy-6-q9",
      wordId: "easy-6-9",
      passage: "Could you ___ what you meant by that last comment? I want to make sure I understood correctly.",
      choices: [
        "verify",
        "generalize",
        "clarify",
        "relevant"
      ],
      correct: 2,
      explanation: "Asking someone to make a statement clearer describes clarifying — 'clarify' fits."
    },
    {
      id: "easy-6-q10",
      wordId: "easy-6-10",
      passage: "In just three sentences, she managed to ___ the entire hundred-page report for the board.",
      choices: [
        "illustrate",
        "summarize",
        "predict",
        "presume"
      ],
      correct: 1,
      explanation: "Condensing a long report into a few sentences describes summarizing — 'summarize' fits."
    },
    {
      id: "easy-6-q11",
      wordId: "easy-6-11",
      passage: "It's risky to ___ about an entire generation based on the behavior of just a few people you've met.",
      choices: [
        "evaluate",
        "consistent",
        "generalize",
        "reasoning"
      ],
      correct: 2,
      explanation: "Drawing a broad conclusion from a small sample describes generalizing — 'generalize' fits."
    },
    {
      id: "easy-6-q12",
      wordId: "easy-6-12",
      passage: "The suspect's new alibi seemed to directly ___ the statement he had given the night of the robbery.",
      choices: [
        "clarify",
        "contradict",
        "obvious",
        "logical"
      ],
      correct: 1,
      explanation: "A new statement that clashes with an earlier one describes contradicting — 'contradict' fits."
    },
    {
      id: "easy-6-q13",
      wordId: "easy-6-13",
      passage: "The teacher used a simple hand-drawn diagram to ___ how blood actually moves through the heart.",
      choices: [
        "deduce",
        "contradict",
        "conclude",
        "illustrate"
      ],
      correct: 3,
      explanation: "Using a diagram to make a process clear describes illustrating — 'illustrate' fits."
    },
    {
      id: "easy-6-q14",
      wordId: "easy-6-14",
      passage: "Readers have argued for decades over how to ___ the ambiguous final line of the poem.",
      choices: [
        "verify",
        "interpret",
        "justify",
        "sound"
      ],
      correct: 1,
      explanation: "Arguing over the meaning of an ambiguous line describes interpreting — 'interpret' fits."
    },
    {
      id: "easy-6-q15",
      wordId: "easy-6-15",
      passage: "From a single muddy footprint by the window, the detective was able to ___ exactly how the intruder had entered.",
      choices: [
        "verify",
        "clarify",
        "generalize",
        "deduce"
      ],
      correct: 3,
      explanation: "Reasoning from one small clue to a full conclusion describes deducing — 'deduce' fits."
    },
    {
      id: "easy-6-q16",
      wordId: "easy-6-16",
      passage: "Her explanation followed such a clear, ___ sequence of steps that even skeptics in the room found it convincing.",
      choices: [
        "consistent",
        "clarify",
        "logical",
        "contradict"
      ],
      correct: 2,
      explanation: "A convincing sequence of steps describes sound reasoning — 'logical' fits."
    },
    {
      id: "easy-6-q17",
      wordId: "easy-6-17",
      passage: "It's hard to have a fully ___ conversation about the budget when everyone in the room is furious.",
      choices: [
        "consistent",
        "rational",
        "analyze",
        "conclude"
      ],
      correct: 1,
      explanation: "A conversation hard to have when everyone is upset describes being based on reason rather than emotion — 'rational' fits."
    },
    {
      id: "easy-6-q18",
      wordId: "easy-6-18",
      passage: "The editor cut every paragraph that wasn't directly ___ to the essay's main argument.",
      choices: [
        "generalize",
        "analyze",
        "relevant",
        "evident"
      ],
      correct: 2,
      explanation: "Cutting paragraphs unrelated to the main point describes relevance — 'relevant' fits."
    },
    {
      id: "easy-6-q19",
      wordId: "easy-6-19",
      passage: "It was ___ from her wide smile the moment she walked in that she had gotten the job.",
      choices: [
        "logical",
        "analyze",
        "conclude",
        "obvious"
      ],
      correct: 3,
      explanation: "Something clear from a smile without needing to be told describes obviousness — 'obvious' fits."
    },
    {
      id: "easy-6-q20",
      wordId: "easy-6-20",
      passage: "His improvement was ___ after only a few weeks, visible to anyone who watched him practice.",
      choices: [
        "clarify",
        "assume",
        "presume",
        "evident"
      ],
      correct: 3,
      explanation: "Something visible to anyone after a short time describes being clearly understood — 'evident' fits."
    },
    {
      id: "easy-6-q21",
      wordId: "easy-6-21",
      passage: "Despite the late hour, she gave a remarkably ___ account of everything that had happened that night.",
      choices: [
        "deduce",
        "contradict",
        "verify",
        "coherent"
      ],
      correct: 3,
      explanation: "A clear, logical account given despite exhaustion describes coherence — 'coherent' fits."
    },
    {
      id: "easy-6-q22",
      wordId: "easy-6-22",
      passage: "His ___ effort throughout the entire season, week after week, ultimately earned him the MVP award.",
      choices: [
        "rational",
        "relevant",
        "verify",
        "consistent"
      ],
      correct: 3,
      explanation: "Effort that stays the same week after week describes consistency — 'consistent' fits."
    },
    {
      id: "easy-6-q23",
      wordId: "easy-6-23",
      passage: "The lawyer built a ___ argument on three separate, verified pieces of evidence.",
      choices: [
        "obvious",
        "presume",
        "rational",
        "sound"
      ],
      correct: 3,
      explanation: "An argument built on verified evidence describes being solid and reliable — 'sound' fits."
    },
    {
      id: "easy-6-q24",
      wordId: "easy-6-24",
      passage: "I ___ you've already finished the assigned chapter, since class discussion starts with it tomorrow.",
      choices: [
        "predict",
        "sound",
        "interpret",
        "presume"
      ],
      correct: 3,
      explanation: "Supposing something is true without asking directly describes presuming — 'presume' fits."
    },
    {
      id: "easy-6-q25",
      wordId: "easy-6-25",
      passage: "Her ___ behind the decision finally made sense once she walked the committee through each step.",
      choices: [
        "relevant",
        "analyze",
        "evident",
        "reasoning"
      ],
      correct: 3,
      explanation: "The logical process behind a decision, once explained, describes reasoning — 'reasoning' fits."
    }
  ],
  "easy-7": [
    {
      id: "easy-7-q1",
      wordId: "easy-7-1",
      passage: "The two logo designs were ___ enough that most customers couldn't tell them apart at a glance.",
      choices: [
        "comparable",
        "opposite",
        "similar",
        "parallel"
      ],
      correct: 2,
      explanation: "Two things resembling each other without being identical describes similarity — 'similar' fits."
    },
    {
      id: "easy-7-q2",
      wordId: "easy-7-2",
      passage: "The twins wore ___ outfits on picture day, right down to the matching socks.",
      choices: [
        "identical",
        "similar",
        "equivalent",
        "resemble"
      ],
      correct: 0,
      explanation: "Outfits matching down to the smallest detail describe being exactly the same — 'identical' fits."
    },
    {
      id: "easy-7-q3",
      wordId: "easy-7-3",
      passage: "Even blindfolded, she could tell the two flavors were ___ enough to name each one correctly.",
      choices: [
        "distinct",
        "equal",
        "superior",
        "unequal"
      ],
      correct: 0,
      explanation: "Flavors distinguishable even without sight describe being clearly separate — 'distinct' fits."
    },
    {
      id: "easy-7-q4",
      wordId: "easy-7-4",
      passage: "A kilometer is roughly ___ to just over half a mile, which made the metric signs easy to translate.",
      choices: [
        "alike",
        "equivalent",
        "differ",
        "parallel"
      ],
      correct: 1,
      explanation: "One unit of measure translating easily to another describes being equal in value — 'equivalent' fits."
    },
    {
      id: "easy-7-q5",
      wordId: "easy-7-5",
      passage: "___ to what most students expected, the makeup exam turned out to be easier than the practice test.",
      choices: [
        "differ",
        "equivalent",
        "unlike",
        "contrary"
      ],
      correct: 3,
      explanation: "An outcome that goes against expectations describes something opposite — 'contrary' fits."
    },
    {
      id: "easy-7-q6",
      wordId: "easy-7-6",
      passage: "The two apartments were close enough in size and price to be genuinely ___ when she made her final decision.",
      choices: [
        "uniform",
        "comparable",
        "rival",
        "inferior"
      ],
      correct: 1,
      explanation: "Two options close enough to weigh against each other describe being similar enough to compare — 'comparable' fits."
    },
    {
      id: "easy-7-q7",
      wordId: "easy-7-7",
      passage: "The two subplots run ___ to each other for most of the novel before finally crossing paths in the last chapter.",
      choices: [
        "equal",
        "comparable",
        "parallel",
        "identical"
      ],
      correct: 2,
      explanation: "Two storylines existing side by side at the same time describe running in tandem — 'parallel' fits."
    },
    {
      id: "easy-7-q8",
      wordId: "easy-7-8",
      passage: "With her sharp wit and quick temper, she didn't ___ her calm, quiet older sister at all.",
      choices: [
        "resemble",
        "opposite",
        "matching",
        "uniform"
      ],
      correct: 0,
      explanation: "Not looking or acting like a sibling describes failing to resemble them — 'resemble' fits."
    },
    {
      id: "easy-7-q9",
      wordId: "easy-7-9",
      passage: "Even after watching the same debate, the two roommates found their opinions ___ sharply.",
      choices: [
        "akin",
        "differ",
        "mirror",
        "superior"
      ],
      correct: 1,
      explanation: "Opinions splitting sharply after the same experience describe being unlike — 'differ' fits."
    },
    {
      id: "easy-7-q10",
      wordId: "easy-7-10",
      passage: "The two mayoral candidates held nearly ___ views on almost every major issue in the campaign.",
      choices: [
        "superior",
        "equivalent",
        "opposite",
        "rival"
      ],
      correct: 2,
      explanation: "Views that clash on nearly every issue describe being completely different — 'opposite' fits."
    },
    {
      id: "easy-7-q11",
      wordId: "easy-7-11",
      passage: "Every brick in the wall was cut to a ___ size so the pattern would line up perfectly.",
      choices: [
        "comparable",
        "unequal",
        "alike",
        "uniform"
      ],
      correct: 3,
      explanation: "Bricks all cut the same size to line up perfectly describe consistency throughout — 'uniform' fits."
    },
    {
      id: "easy-7-q12",
      wordId: "easy-7-12",
      passage: "The food festival's menu was wonderfully ___, offering dishes from a dozen different countries.",
      choices: [
        "diverse",
        "matching",
        "unlike",
        "identical"
      ],
      correct: 0,
      explanation: "A menu spanning a dozen countries describes a wide variety — 'diverse' fits."
    },
    {
      id: "easy-7-q13",
      wordId: "easy-7-13",
      passage: "Her excitement on opening night was ___ to that of a child waking up on the first day of summer vacation.",
      choices: [
        "akin",
        "unequal",
        "diverse",
        "comparable"
      ],
      correct: 0,
      explanation: "A feeling compared to a similar feeling in another context describes being similar in character — 'akin' fits."
    },
    {
      id: "easy-7-q14",
      wordId: "easy-7-14",
      passage: "So ___ did the sisters look that even their own teachers regularly mixed them up.",
      choices: [
        "akin",
        "superior",
        "alike",
        "inferior"
      ],
      correct: 2,
      explanation: "Looking so close that even teachers mix people up describes strong resemblance — 'alike' fits."
    },
    {
      id: "easy-7-q15",
      wordId: "easy-7-15",
      passage: "The panel gathered a wonderfully ___ set of opinions, from strong supporters to firm skeptics.",
      choices: [
        "differ",
        "distinct",
        "unlike",
        "varied"
      ],
      correct: 3,
      explanation: "A set of opinions ranging from support to skepticism describes a range of types — 'varied' fits."
    },
    {
      id: "easy-7-q16",
      wordId: "easy-7-16",
      passage: "The two roommates surprised their friends by moving in with entirely ___ furniture, right down to identical couches.",
      choices: [
        "opposite",
        "mirror",
        "diverse",
        "matching"
      ],
      correct: 3,
      explanation: "Furniture that corresponds exactly between two people describes items that pair together — 'matching' fits."
    },
    {
      id: "easy-7-q17",
      wordId: "easy-7-17",
      passage: "Because the two teams were so ___ in size, most fans agreed the game had been unfair from the start.",
      choices: [
        "opposite",
        "alike",
        "parallel",
        "unequal"
      ],
      correct: 3,
      explanation: "Teams so different in size that fans call the game unfair describe an imbalance — 'unequal' fits."
    },
    {
      id: "easy-7-q18",
      wordId: "easy-7-18",
      passage: "Critics widely agreed the sequel's writing was ___ to the original's, even if the visuals fell short.",
      choices: [
        "alike",
        "resemble",
        "akin",
        "superior"
      ],
      correct: 3,
      explanation: "Writing agreed to be better than an original describes something higher in quality — 'superior' fits."
    },
    {
      id: "easy-7-q19",
      wordId: "easy-7-19",
      passage: "The cheaper knockoff material turned out to be noticeably ___ to the brand-name original once it started fraying.",
      choices: [
        "distinct",
        "similar",
        "inferior",
        "resemble"
      ],
      correct: 2,
      explanation: "A cheap material that frays and turns out worse than the original describes lower quality — 'inferior' fits."
    },
    {
      id: "easy-7-q20",
      wordId: "easy-7-20",
      passage: "Both runners crossed the tape at exactly the same instant, forcing officials to review the footage of the ___ finish.",
      choices: [
        "rival",
        "exceed",
        "akin",
        "equal"
      ],
      correct: 3,
      explanation: "Two runners finishing at exactly the same instant describe an equal outcome — 'equal' fits."
    },
    {
      id: "easy-7-q21",
      wordId: "easy-7-21",
      passage: "___ her brother, who loved crowded parties, she preferred a quiet night at home with a book.",
      choices: [
        "unlike",
        "unequal",
        "diverse",
        "distinct"
      ],
      correct: 0,
      explanation: "A preference contrasted directly with someone else's describes being different from — 'unlike' fits."
    },
    {
      id: "easy-7-q22",
      wordId: "easy-7-22",
      passage: "Ticket sales for the reunion tour ___ every projection the promoters had made before the announcement.",
      choices: [
        "matching",
        "exceed",
        "akin",
        "parallel"
      ],
      correct: 1,
      explanation: "Sales going beyond every projection describe surpassing a limit — 'exceed' fits."
    },
    {
      id: "easy-7-q23",
      wordId: "easy-7-23",
      passage: "The rookie's stats in her first season already ___ those of most players twice her experience.",
      choices: [
        "equivalent",
        "similar",
        "exceed",
        "surpass"
      ],
      correct: 3,
      explanation: "A newcomer's numbers going beyond veterans' describes outdoing them — 'surpass' fits."
    },
    {
      id: "easy-7-q24",
      wordId: "easy-7-24",
      passage: "Her career choices over the years began to ___ those of her older sister almost exactly.",
      choices: [
        "contrary",
        "mirror",
        "akin",
        "parallel"
      ],
      correct: 1,
      explanation: "Choices coming to closely reflect someone else's over time describe mirroring them — 'mirror' fits."
    },
    {
      id: "easy-7-q25",
      wordId: "easy-7-25",
      passage: "The two ___ schools had faced off in the championship game for eleven straight years.",
      choices: [
        "rival",
        "comparable",
        "uniform",
        "differ"
      ],
      correct: 0,
      explanation: "Two schools competing for the same title year after year describe being rivals — 'rival' fits."
    }
  ],
  "easy-8": [
    {
      id: "easy-8-q1",
      wordId: "easy-8-1",
      passage: "As the newest and youngest intern in the office, he stayed quiet in most meetings, too ___ to speak up.",
      choices: [
        "confident",
        "severe",
        "concise",
        "timid"
      ],
      correct: 3,
      explanation: "Staying too quiet to speak up as the newest person describes a lack of confidence — 'timid' fits."
    },
    {
      id: "easy-8-q2",
      wordId: "easy-8-2",
      passage: "She walked into the interview room with her shoulders back, feeling calm and entirely ___ in her preparation.",
      choices: [
        "typical",
        "common",
        "confident",
        "major"
      ],
      correct: 2,
      explanation: "Feeling calm and sure of oneself before a challenge describes confidence — 'confident' fits."
    },
    {
      id: "easy-8-q3",
      wordId: "easy-8-3",
      passage: "By the final hour of the double shift, sheer ___ had settled into every muscle in her body.",
      choices: [
        "fatigue",
        "flexible",
        "relentless",
        "concise"
      ],
      correct: 0,
      explanation: "Extreme tiredness settling into every muscle describes exhaustion — 'fatigue' fits."
    },
    {
      id: "easy-8-q4",
      wordId: "easy-8-4",
      passage: "Despite three straight days of downpours, the ___ rain refused to let up for the outdoor festival.",
      choices: [
        "rigid",
        "timid",
        "major",
        "relentless"
      ],
      correct: 3,
      explanation: "Rain that refuses to let up for days describes persistence without slowing — 'relentless' fits."
    },
    {
      id: "easy-8-q5",
      wordId: "easy-8-5",
      passage: "The fire alarm went off without warning, bringing the meeting to an ___ and confusing halt.",
      choices: [
        "major",
        "abrupt",
        "mild",
        "crucial"
      ],
      correct: 1,
      explanation: "A sudden, unplanned interruption to a meeting describes something abrupt — 'abrupt' fits."
    },
    {
      id: "easy-8-q6",
      wordId: "easy-8-6",
      passage: "After a ___ back-and-forth that stretched well past midnight, the board finally reached an agreement.",
      choices: [
        "lengthy",
        "typical",
        "gentle",
        "minor"
      ],
      correct: 0,
      explanation: "A discussion that stretches well past midnight describes something extended — 'lengthy' fits."
    },
    {
      id: "easy-8-q7",
      wordId: "easy-8-7",
      passage: "Her ___ summary covered the entire chapter's key points in a single tight paragraph.",
      choices: [
        "concise",
        "fatigue",
        "common",
        "relentless"
      ],
      correct: 0,
      explanation: "A summary covering everything in one tight paragraph describes brevity with clarity — 'concise' fits."
    },
    {
      id: "easy-8-q8",
      wordId: "easy-8-8",
      passage: "His ___ schedule let him swap shifts easily whenever his kids needed a ride from school.",
      choices: [
        "flexible",
        "careless",
        "rigid",
        "unusual"
      ],
      correct: 0,
      explanation: "A schedule that allows easy swapping around family needs describes adaptability — 'flexible' fits."
    },
    {
      id: "easy-8-q9",
      wordId: "easy-8-9",
      passage: "The company's ___ dress code left almost no room for individual style, right down to sock color.",
      choices: [
        "major",
        "common",
        "crucial",
        "rigid"
      ],
      correct: 3,
      explanation: "A dress code leaving no room for individual choice describes strictness that won't bend — 'rigid' fits."
    },
    {
      id: "easy-8-q10",
      wordId: "easy-8-10",
      passage: "She used a soft, ___ tone to calm the crying toddler instead of raising her voice.",
      choices: [
        "timid",
        "rigid",
        "fatigue",
        "gentle"
      ],
      correct: 3,
      explanation: "A soft tone chosen instead of a raised voice describes mildness and kindness — 'gentle' fits."
    },
    {
      id: "easy-8-q11",
      wordId: "easy-8-11",
      passage: "The coach's ___ criticism after the loss left several players visibly discouraged.",
      choices: [
        "harsh",
        "gentle",
        "rare",
        "fatigue"
      ],
      correct: 0,
      explanation: "Criticism that leaves players visibly discouraged describes severity — 'harsh' fits."
    },
    {
      id: "easy-8-q12",
      wordId: "easy-8-12",
      passage: "They were relieved to enjoy such a ___ winter, with barely enough snow to shovel.",
      choices: [
        "common",
        "mild",
        "typical",
        "crucial"
      ],
      correct: 1,
      explanation: "A winter with barely any snow to shovel describes gentleness in effect — 'mild' fits."
    },
    {
      id: "easy-8-q13",
      wordId: "easy-8-13",
      passage: "The hurricane caused such ___ damage along the coast that entire neighborhoods lost power for weeks.",
      choices: [
        "severe",
        "vital",
        "gentle",
        "common"
      ],
      correct: 0,
      explanation: "Damage severe enough to knock out power for weeks describes intensity — 'severe' fits."
    },
    {
      id: "easy-8-q14",
      wordId: "easy-8-14",
      passage: "It was only a ___ scrape on her knee, so the coach let her keep playing the second half.",
      choices: [
        "vital",
        "minor",
        "flexible",
        "confident"
      ],
      correct: 1,
      explanation: "An injury small enough to let someone keep playing describes being minor — 'minor' fits."
    },
    {
      id: "easy-8-q15",
      wordId: "easy-8-15",
      passage: "Losing the account was a ___ setback for the company, one that shaped every decision for the rest of the year.",
      choices: [
        "major",
        "minor",
        "concise",
        "essential"
      ],
      correct: 0,
      explanation: "A setback that shapes every decision for a year describes great importance — 'major' fits."
    },
    {
      id: "easy-8-q16",
      wordId: "easy-8-16",
      passage: "Clean drinking water is ___ for every living creature on the planet, with no substitute available.",
      choices: [
        "essential",
        "vital",
        "confident",
        "unusual"
      ],
      correct: 0,
      explanation: "Something with no substitute, needed by every living creature, describes absolute necessity — 'essential' fits."
    },
    {
      id: "easy-8-q17",
      wordId: "easy-8-17",
      passage: "Attendance at Friday's review session is entirely ___, so students may skip it if they feel prepared.",
      choices: [
        "optional",
        "rare",
        "typical",
        "concise"
      ],
      correct: 0,
      explanation: "Something students may skip if they choose describes it being available but not required — 'optional' fits."
    },
    {
      id: "easy-8-q18",
      wordId: "easy-8-18",
      passage: "Getting enough sleep the night before a big exam is ___ for staying sharp during the test.",
      choices: [
        "crucial",
        "confident",
        "major",
        "abrupt"
      ],
      correct: 0,
      explanation: "Something necessary for success on a big test describes being extremely important — 'crucial' fits."
    },
    {
      id: "easy-8-q19",
      wordId: "easy-8-19",
      passage: "Trust turned out to be the single most ___ part of their long friendship.",
      choices: [
        "vital",
        "rare",
        "gentle",
        "concise"
      ],
      correct: 0,
      explanation: "The single most necessary part of a relationship describes something essential to its survival — 'vital' fits."
    },
    {
      id: "easy-8-q20",
      wordId: "easy-8-20",
      passage: "It felt like an entirely ___ Monday morning, full of the same emails and the same coffee as always.",
      choices: [
        "hasty",
        "typical",
        "essential",
        "harsh"
      ],
      correct: 1,
      explanation: "A morning full of the usual routine describes normalcy — 'typical' fits."
    },
    {
      id: "easy-8-q21",
      wordId: "easy-8-21",
      passage: "It was ___ for him to show up late to practice, so the coach immediately sensed something was wrong.",
      choices: [
        "unusual",
        "abrupt",
        "timid",
        "essential"
      ],
      correct: 0,
      explanation: "Something out of character enough to make a coach suspicious describes being uncommon — 'unusual' fits."
    },
    {
      id: "easy-8-q22",
      wordId: "easy-8-22",
      passage: "Colds become especially ___ once the first cold snap of winter arrives.",
      choices: [
        "careless",
        "common",
        "relentless",
        "rigid"
      ],
      correct: 1,
      explanation: "Something happening frequently once a season starts describes being widespread — 'common' fits."
    },
    {
      id: "easy-8-q23",
      wordId: "easy-8-23",
      passage: "A ___ total solar eclipse drew crowds to the observatory from three states away.",
      choices: [
        "rare",
        "harsh",
        "unusual",
        "flexible"
      ],
      correct: 0,
      explanation: "An event drawing crowds from far away describes something uncommon — 'rare' fits."
    },
    {
      id: "easy-8-q24",
      wordId: "easy-8-24",
      passage: "He later regretted the ___ decision to quit his job without lining up anything else first.",
      choices: [
        "rigid",
        "hasty",
        "common",
        "lengthy"
      ],
      correct: 1,
      explanation: "A decision made without lining up a backup plan describes rushed action — 'hasty' fits."
    },
    {
      id: "easy-8-q25",
      wordId: "easy-8-25",
      passage: "A single ___ mistake on the form ended up delaying the entire application by two weeks.",
      choices: [
        "unusual",
        "gentle",
        "careless",
        "rigid"
      ],
      correct: 2,
      explanation: "A small mistake causing a major delay describes a lack of attention — 'careless' fits."
    }
  ],
  "moderate-1": [
    {
      id: "moderate-1-q1",
      wordId: "moderate-1-1",
      passage: "Her closing argument was so ___ that even jurors who had doubted the case now found themselves nodding along.",
      choices: [
        "bolster",
        "credible",
        "unequivocal",
        "persuasive"
      ],
      correct: 3,
      explanation: "An argument that turns doubtful jurors into believers describes strong persuasive power — 'persuasive' fits."
    },
    {
      id: "moderate-1-q2",
      wordId: "moderate-1-2",
      passage: "Stripped of its emotional ___, the senator's speech contained almost no concrete policy at all.",
      choices: [
        "compelling",
        "endorse",
        "undermine",
        "rhetoric"
      ],
      correct: 3,
      explanation: "A speech built on emotional appeal rather than substance describes persuasive language technique — 'rhetoric' fits."
    },
    {
      id: "moderate-1-q3",
      wordId: "moderate-1-3",
      passage: "The scientist chose to ___ her findings publicly, confident the data would hold up to scrutiny.",
      choices: [
        "assert",
        "corroborate",
        "dubious",
        "advocate"
      ],
      correct: 0,
      explanation: "Stating findings confidently and publicly, expecting them to hold up, describes asserting them — 'assert' fits."
    },
    {
      id: "moderate-1-q4",
      wordId: "moderate-1-4",
      passage: "The newly released documents completely ___ the theory that had gone unchallenged for thirty years.",
      choices: [
        "endorse",
        "refute",
        "advocate",
        "undermine"
      ],
      correct: 1,
      explanation: "New evidence that overturns a long-unchallenged theory describes proving it wrong — 'refute' fits."
    },
    {
      id: "moderate-1-q5",
      wordId: "moderate-1-5",
      passage: "After hours of debate, she finally ___ that his plan, not hers, was the stronger option.",
      choices: [
        "credible",
        "skeptical",
        "bolster",
        "concede"
      ],
      correct: 3,
      explanation: "Admitting a rival's plan is stronger after resisting describes yielding a point — 'concede' fits."
    },
    {
      id: "moderate-1-q6",
      wordId: "moderate-1-6",
      passage: "The nonprofit continues to ___ for cleaner parks, even after the city council rejected their first proposal.",
      choices: [
        "rhetoric",
        "contend",
        "unequivocal",
        "advocate"
      ],
      correct: 3,
      explanation: "Continuing to publicly push for a cause after a setback describes advocating — 'advocate' fits."
    },
    {
      id: "moderate-1-q7",
      wordId: "moderate-1-7",
      passage: "Critics ___ that the new policy will quietly push small businesses out of downtown.",
      choices: [
        "persuasive",
        "contend",
        "discredit",
        "advocate"
      ],
      correct: 1,
      explanation: "Taking a position in an ongoing debate about a policy's effect describes contending — 'contend' fits."
    },
    {
      id: "moderate-1-q8",
      wordId: "moderate-1-8",
      passage: "Despite being only fourteen, the ___ debater expressed her position with a clarity that impressed even the judges.",
      choices: [
        "dubious",
        "rhetoric",
        "persuasive",
        "articulate"
      ],
      correct: 3,
      explanation: "Expressing a position with impressive clarity at a young age describes articulateness — 'articulate' fits."
    },
    {
      id: "moderate-1-q9",
      wordId: "moderate-1-9",
      passage: "The lawyer's closing statement was so ___ that the jury deliberated for less than an hour.",
      choices: [
        "subjective",
        "advocate",
        "compelling",
        "rhetoric"
      ],
      correct: 2,
      explanation: "A statement powerful enough to shorten deliberation describes being convincing — 'compelling' fits."
    },
    {
      id: "moderate-1-q10",
      wordId: "moderate-1-10",
      passage: "Security footage matching her story made the witness's account far more ___ to the jury.",
      choices: [
        "endorse",
        "contend",
        "credible",
        "counter"
      ],
      correct: 2,
      explanation: "Evidence matching a story makes it more believable — 'credible' fits."
    },
    {
      id: "moderate-1-q11",
      wordId: "moderate-1-11",
      passage: "Having been burned by similar offers before, she remained ___ of the salesman's promises.",
      choices: [
        "compelling",
        "skeptical",
        "rebut",
        "dubious"
      ],
      correct: 1,
      explanation: "Being burned before and doubting new promises describes distrust — 'skeptical' fits."
    },
    {
      id: "moderate-1-q12",
      wordId: "moderate-1-12",
      passage: "The editor cut the phrase that revealed a clear ___ toward one candidate over the other.",
      choices: [
        "dubious",
        "persuasive",
        "bias",
        "discredit"
      ],
      correct: 2,
      explanation: "Language favoring one side unfairly describes bias — 'bias' fits."
    },
    {
      id: "moderate-1-q13",
      wordId: "moderate-1-13",
      passage: "Rather than share her own opinion, the reporter aimed to give a purely ___ account of what had happened.",
      choices: [
        "objective",
        "corroborate",
        "unequivocal",
        "undermine"
      ],
      correct: 0,
      explanation: "An account based on facts rather than the reporter's own feelings describes objectivity — 'objective' fits."
    },
    {
      id: "moderate-1-q14",
      wordId: "moderate-1-14",
      passage: "Whether the ending felt satisfying or not is entirely ___, since every reader brings different expectations.",
      choices: [
        "subjective",
        "counter",
        "concede",
        "endorse"
      ],
      correct: 0,
      explanation: "Something depending entirely on personal taste describes being based on opinion — 'subjective' fits."
    },
    {
      id: "moderate-1-q15",
      wordId: "moderate-1-15",
      passage: "Reporters pressed the company to ___ its advertising claims with actual test results.",
      choices: [
        "advocate",
        "substantiate",
        "corroborate",
        "rebut"
      ],
      correct: 1,
      explanation: "Being pressed to back up a claim with real evidence describes substantiating it — 'substantiate' fits."
    },
    {
      id: "moderate-1-q16",
      wordId: "moderate-1-16",
      passage: "Two witnesses who had never spoken to each other ended up ___ing her exact account of the crash.",
      choices: [
        "compelling",
        "rhetoric",
        "subjective",
        "corroborate"
      ],
      correct: 3,
      explanation: "Independent witnesses confirming the same account describes corroborating it — 'corroborate' fits."
    },
    {
      id: "moderate-1-q17",
      wordId: "moderate-1-17",
      passage: "Constant last-minute interruptions during his presentation began to ___ his confidence in front of the board.",
      choices: [
        "articulate",
        "undermine",
        "persuasive",
        "counter"
      ],
      correct: 1,
      explanation: "Repeated interruptions gradually weakening someone's confidence describes undermining it — 'undermine' fits."
    },
    {
      id: "moderate-1-q18",
      wordId: "moderate-1-18",
      passage: "New quarterly numbers helped ___ the company's case for opening a second location.",
      choices: [
        "endorse",
        "credible",
        "bolster",
        "assert"
      ],
      correct: 2,
      explanation: "New figures that strengthen an existing argument describe bolstering it — 'bolster' fits."
    },
    {
      id: "moderate-1-q19",
      wordId: "moderate-1-19",
      passage: "The leaked emails were quickly used to ___ the campaign just weeks before the election.",
      choices: [
        "dubious",
        "refute",
        "discredit",
        "unequivocal"
      ],
      correct: 2,
      explanation: "Leaked material used to damage someone's reputation describes discrediting them — 'discredit' fits."
    },
    {
      id: "moderate-1-q20",
      wordId: "moderate-1-20",
      passage: "The defense attorney managed to ___ every single point the prosecutor had raised that morning.",
      choices: [
        "objective",
        "rebut",
        "concede",
        "denounce"
      ],
      correct: 1,
      explanation: "Successfully arguing against every opposing point describes rebutting them — 'rebut' fits."
    },
    {
      id: "moderate-1-q21",
      wordId: "moderate-1-21",
      passage: "She ___ his objection about the budget with a single statistic pulled straight from the report.",
      choices: [
        "contend",
        "persuasive",
        "assert",
        "counter"
      ],
      correct: 3,
      explanation: "Responding to an objection with a fact from a report describes countering it — 'counter' fits."
    },
    {
      id: "moderate-1-q22",
      wordId: "moderate-1-22",
      passage: "After weeks of staying neutral, the magazine finally chose to ___ the underdog candidate.",
      choices: [
        "endorse",
        "undermine",
        "contend",
        "dubious"
      ],
      correct: 0,
      explanation: "Publicly declaring support for a candidate after neutrality describes endorsing them — 'endorse' fits."
    },
    {
      id: "moderate-1-q23",
      wordId: "moderate-1-23",
      passage: "City officials wasted no time moving to ___ the decision as reckless and unfair to residents.",
      choices: [
        "credible",
        "objective",
        "counter",
        "denounce"
      ],
      correct: 3,
      explanation: "Officials publicly criticizing a decision strongly describes denouncing it — 'denounce' fits."
    },
    {
      id: "moderate-1-q24",
      wordId: "moderate-1-24",
      passage: "The claim sounded so ___ that the editor asked for a second, independent source before running it.",
      choices: [
        "bias",
        "rebut",
        "dubious",
        "counter"
      ],
      correct: 2,
      explanation: "A claim needing a second source before publication describes it being doubtful — 'dubious' fits."
    },
    {
      id: "moderate-1-q25",
      wordId: "moderate-1-25",
      passage: "After weeks of hedging, the board finally gave an ___ yes, leaving no room for later reversal.",
      choices: [
        "substantiate",
        "skeptical",
        "unequivocal",
        "concede"
      ],
      correct: 2,
      explanation: "An answer leaving no room for later reversal describes being completely clear — 'unequivocal' fits."
    }
  ],
  "moderate-2": [
    {
      id: "moderate-2-q1",
      wordId: "moderate-2-1",
      passage: "Investors grew nervous as the ___ stock market swung wildly from one day to the next.",
      choices: [
        "radical",
        "volatile",
        "capricious",
        "tumultuous"
      ],
      correct: 1,
      explanation: "A market swinging wildly day to day describes sudden, unpredictable change — 'volatile' fits."
    },
    {
      id: "moderate-2-q2",
      wordId: "moderate-2-2",
      passage: "Gas prices tend to ___ throughout the summer as demand for road trips rises and falls.",
      choices: [
        "capricious",
        "mutate",
        "fluctuate",
        "volatile"
      ],
      correct: 2,
      explanation: "Prices rising and falling irregularly over a season describe fluctuating — 'fluctuate' fits."
    },
    {
      id: "moderate-2-q3",
      wordId: "moderate-2-3",
      passage: "The relief she felt after the win was ___, gone completely by the time she woke up the next morning.",
      choices: [
        "capricious",
        "transient",
        "shift",
        "volatile"
      ],
      correct: 1,
      explanation: "A feeling gone entirely by the next morning describes being temporary — 'transient' fits."
    },
    {
      id: "moderate-2-q4",
      wordId: "moderate-2-4",
      passage: "His driving grew so ___ down the icy road that the other passengers finally asked him to pull over.",
      choices: [
        "erratic",
        "flux",
        "volatile",
        "wane"
      ],
      correct: 0,
      explanation: "Driving inconsistent enough to alarm passengers describes irregular, unreliable behavior — 'erratic' fits."
    },
    {
      id: "moderate-2-q5",
      wordId: "moderate-2-5",
      passage: "Mountain weather can turn so ___ that hikers are warned to pack for every season in a single day.",
      choices: [
        "mutate",
        "metamorphosis",
        "unpredictable",
        "drastic"
      ],
      correct: 2,
      explanation: "Weather requiring packing for every season in one day describes impossibility to predict — 'unpredictable' fits."
    },
    {
      id: "moderate-2-q6",
      wordId: "moderate-2-6",
      passage: "Over the course of the semester, her writing style ___ from stiff and formal into something far more natural.",
      choices: [
        "disrupt",
        "transition",
        "turbulent",
        "evolve"
      ],
      correct: 3,
      explanation: "Writing changing gradually over months describes evolving — 'evolve' fits."
    },
    {
      id: "moderate-2-q7",
      wordId: "moderate-2-7",
      passage: "A single power outage was enough to ___ production across the entire factory floor.",
      choices: [
        "unstable",
        "disrupt",
        "precarious",
        "sporadic"
      ],
      correct: 1,
      explanation: "One outage interrupting an entire operation describes disrupting it — 'disrupt' fits."
    },
    {
      id: "moderate-2-q8",
      wordId: "moderate-2-8",
      passage: "The merger sent the company into a period of real ___, with entire departments reorganized overnight.",
      choices: [
        "fluctuate",
        "evolve",
        "upheaval",
        "capricious"
      ],
      correct: 2,
      explanation: "Departments reorganized overnight describe sudden, disruptive change — 'upheaval' fits."
    },
    {
      id: "moderate-2-q9",
      wordId: "moderate-2-9",
      passage: "The country endured a ___ decade defined by protests, coups, and shifting alliances.",
      choices: [
        "erratic",
        "turbulent",
        "unpredictable",
        "unstable"
      ],
      correct: 1,
      explanation: "A decade marked by protests and shifting alliances describes disorder and conflict — 'turbulent' fits."
    },
    {
      id: "moderate-2-q10",
      wordId: "moderate-2-10",
      passage: "Public interest in the viral trend began to ___ almost as quickly as it had spread.",
      choices: [
        "metamorphosis",
        "upheaval",
        "wane",
        "transition"
      ],
      correct: 2,
      explanation: "Interest fading almost as fast as it appeared describes decreasing gradually — 'wane' fits."
    },
    {
      id: "moderate-2-q11",
      wordId: "moderate-2-11",
      passage: "Without steady income for months, their savings slowly began to ___.",
      choices: [
        "precarious",
        "flux",
        "upheaval",
        "dwindle"
      ],
      correct: 3,
      explanation: "Savings shrinking over months without income describe becoming smaller — 'dwindle' fits."
    },
    {
      id: "moderate-2-q12",
      wordId: "moderate-2-12",
      passage: "Scientists worried the virus would ___ quickly enough to outpace the current vaccine.",
      choices: [
        "disrupt",
        "evolve",
        "capricious",
        "mutate"
      ],
      correct: 3,
      explanation: "A virus changing form fast enough to outrun a vaccine describes mutating — 'mutate' fits."
    },
    {
      id: "moderate-2-q13",
      wordId: "moderate-2-13",
      passage: "Public opinion started to ___ noticeably after the documentary aired on national television.",
      choices: [
        "turbulent",
        "radical",
        "shift",
        "dwindle"
      ],
      correct: 2,
      explanation: "Opinion changing direction after a major broadcast describes shifting — 'shift' fits."
    },
    {
      id: "moderate-2-q14",
      wordId: "moderate-2-14",
      passage: "The ___ from high school to college left her both excited and a little overwhelmed.",
      choices: [
        "erratic",
        "drastic",
        "transition",
        "radical"
      ],
      correct: 2,
      explanation: "A process of changing from one life stage to another describes a transition — 'transition' fits."
    },
    {
      id: "moderate-2-q15",
      wordId: "moderate-2-15",
      passage: "The old rope bridge felt ___ under the weight of the loaded truck.",
      choices: [
        "fluctuate",
        "erratic",
        "transition",
        "unstable"
      ],
      correct: 3,
      explanation: "Something feeling likely to fail under weight describes instability — 'unstable' fits."
    },
    {
      id: "moderate-2-q16",
      wordId: "moderate-2-16",
      passage: "After the lawsuit, the small company's finances were left in a genuinely ___ position.",
      choices: [
        "volatile",
        "unstable",
        "upheaval",
        "precarious"
      ],
      correct: 3,
      explanation: "A financial position left dangerously uncertain after a lawsuit describes precariousness — 'precarious' fits."
    },
    {
      id: "moderate-2-q17",
      wordId: "moderate-2-17",
      passage: "The ___ weather ruined their plans for an outdoor wedding twice in the same afternoon.",
      choices: [
        "transient",
        "capricious",
        "metamorphosis",
        "upheaval"
      ],
      correct: 1,
      explanation: "Weather ruining plans twice in one afternoon describes sudden, unpredictable mood swings — 'capricious' fits."
    },
    {
      id: "moderate-2-q18",
      wordId: "moderate-2-18",
      passage: "___ gunfire echoed from the distant hills throughout the otherwise quiet night.",
      choices: [
        "sporadic",
        "unpredictable",
        "capricious",
        "upheaval"
      ],
      correct: 0,
      explanation: "Gunfire happening only at scattered, irregular moments describes something sporadic — 'sporadic' fits."
    },
    {
      id: "moderate-2-q19",
      wordId: "moderate-2-19",
      passage: "Their ___ relationship was defined by dramatic breakups followed almost immediately by tearful reunions.",
      choices: [
        "precarious",
        "metamorphosis",
        "tumultuous",
        "fluctuate"
      ],
      correct: 2,
      explanation: "A relationship full of dramatic breakups and reunions describes constant disorder — 'tumultuous' fits."
    },
    {
      id: "moderate-2-q20",
      wordId: "moderate-2-20",
      passage: "The invention didn't just improve communication — it went on to ___ it entirely.",
      choices: [
        "transition",
        "flux",
        "volatile",
        "revolutionize"
      ],
      correct: 3,
      explanation: "Something changing an entire field, not just improving it, describes revolutionizing it — 'revolutionize' fits."
    },
    {
      id: "moderate-2-q21",
      wordId: "moderate-2-21",
      passage: "Over ten quiet years, the sleepy neighborhood underwent a near-total ___ into a bustling downtown.",
      choices: [
        "metamorphosis",
        "unpredictable",
        "turbulent",
        "upheaval"
      ],
      correct: 0,
      explanation: "A sleepy area becoming a bustling downtown over years describes a complete transformation — 'metamorphosis' fits."
    },
    {
      id: "moderate-2-q22",
      wordId: "moderate-2-22",
      passage: "With leadership changing every few months, the company's long-term plans remained in a state of constant ___.",
      choices: [
        "transition",
        "mutate",
        "transient",
        "flux"
      ],
      correct: 3,
      explanation: "Plans that never settle because leadership keeps changing describe ongoing change — 'flux' fits."
    },
    {
      id: "moderate-2-q23",
      wordId: "moderate-2-23",
      passage: "After a disappointing season, the team made ___ changes to both the roster and the coaching staff.",
      choices: [
        "evolve",
        "drastic",
        "sporadic",
        "radical"
      ],
      correct: 1,
      explanation: "Changes made after a disappointing season describe something extreme in response — 'drastic' fits."
    },
    {
      id: "moderate-2-q24",
      wordId: "moderate-2-24",
      passage: "The new CEO proposed a ___ shift in strategy that abandoned the company's decades-old approach.",
      choices: [
        "mutate",
        "evolve",
        "radical",
        "wane"
      ],
      correct: 2,
      explanation: "A shift abandoning a decades-old approach describes something extreme and fundamental — 'radical' fits."
    },
    {
      id: "moderate-2-q25",
      wordId: "moderate-2-25",
      passage: "Sports fans can be famously ___, cheering wildly one week and booing the same players the next.",
      choices: [
        "fluctuate",
        "precarious",
        "mutate",
        "fickle"
      ],
      correct: 3,
      explanation: "Fans switching loyalty from cheering to booing week to week describe changeable loyalty — 'fickle' fits."
    }
  ],
  "moderate-3": [
    {
      id: "moderate-3-q1",
      wordId: "moderate-3-1",
      passage: "She felt genuinely ___ about the move, thrilled by the opportunity but terrified of leaving her friends behind.",
      choices: [
        "pragmatic",
        "ambivalent",
        "cynical",
        "aloof"
      ],
      correct: 1,
      explanation: "Feeling thrilled and terrified about the same decision describes mixed feelings — 'ambivalent' fits."
    },
    {
      id: "moderate-3-q2",
      wordId: "moderate-3-2",
      passage: "His calm ___ made him a natural fit for the high-pressure world of emergency dispatch.",
      choices: [
        "gregarious",
        "temperament",
        "obstinate",
        "idealistic"
      ],
      correct: 1,
      explanation: "A steady nature suited to a stressful job describes an underlying personality — 'temperament' fits."
    },
    {
      id: "moderate-3-q3",
      wordId: "moderate-3-3",
      passage: "The shop owner's ___ manner, greeting every regular by name, kept customers coming back for decades.",
      choices: [
        "amiable",
        "temperament",
        "docile",
        "reticent"
      ],
      correct: 0,
      explanation: "Greeting every regular by name describes a friendly, pleasant nature — 'amiable' fits."
    },
    {
      id: "moderate-3-q4",
      wordId: "moderate-3-4",
      passage: "The monks lived an ___ life, sleeping on bare cots and owning nothing beyond a single robe.",
      choices: [
        "altruistic",
        "meticulous",
        "austere",
        "complacent"
      ],
      correct: 2,
      explanation: "Sleeping on bare cots and owning almost nothing describes a life without luxury — 'austere' fits."
    },
    {
      id: "moderate-3-q5",
      wordId: "moderate-3-5",
      passage: "The office had such a ___ atmosphere that new hires often said it felt like joining a second family.",
      choices: [
        "aloof",
        "austere",
        "congenial",
        "obstinate"
      ],
      correct: 2,
      explanation: "An atmosphere that feels like family for new hires describes a pleasant, welcoming environment — 'congenial' fits."
    },
    {
      id: "moderate-3-q6",
      wordId: "moderate-3-6",
      passage: "The chef's ___ temper meant the kitchen staff braced themselves for shouting the moment an order came back late.",
      choices: [
        "aloof",
        "cynical",
        "tenacious",
        "irascible"
      ],
      correct: 3,
      explanation: "Bracing for shouting the moment something goes wrong describes being easily angered — 'irascible' fits."
    },
    {
      id: "moderate-3-q7",
      wordId: "moderate-3-7",
      passage: "He remained entirely ___ through the surgery, never once flinching or complaining despite the pain.",
      choices: [
        "ambivalent",
        "stoic",
        "congenial",
        "temperament"
      ],
      correct: 1,
      explanation: "Enduring pain without complaint describes calm endurance — 'stoic' fits."
    },
    {
      id: "moderate-3-q8",
      wordId: "moderate-3-8",
      passage: "The ___ donor insisted her enormous gift to the hospital remain completely anonymous.",
      choices: [
        "meticulous",
        "cynical",
        "benevolent",
        "prudent"
      ],
      correct: 2,
      explanation: "A large, generous gift given anonymously describes selfless kindness — 'benevolent' fits."
    },
    {
      id: "moderate-3-q9",
      wordId: "moderate-3-9",
      passage: "The ___ rumor spread through the small town before anyone thought to question whether it was even true.",
      choices: [
        "ambivalent",
        "tenacious",
        "malicious",
        "prudent"
      ],
      correct: 2,
      explanation: "A rumor spread with harmful intent describes it being spiteful — 'malicious' fits."
    },
    {
      id: "moderate-3-q10",
      wordId: "moderate-3-10",
      passage: "Her ___ about her own mistakes during the interview made her instantly easier to trust.",
      choices: [
        "temperament",
        "candor",
        "stoic",
        "temperate"
      ],
      correct: 1,
      explanation: "Being open about one's own mistakes describes honesty in expression — 'candor' fits."
    },
    {
      id: "moderate-3-q11",
      wordId: "moderate-3-11",
      passage: "A ___ leader spends less time debating theory and more time finding what actually works.",
      choices: [
        "gregarious",
        "arrogant",
        "pragmatic",
        "altruistic"
      ],
      correct: 2,
      explanation: "Focusing on what works rather than theory describes practicality — 'pragmatic' fits."
    },
    {
      id: "moderate-3-q12",
      wordId: "moderate-3-12",
      passage: "His ___ vision for the company ignored the very real budget constraints everyone else kept raising.",
      choices: [
        "austere",
        "benevolent",
        "altruistic",
        "idealistic"
      ],
      correct: 3,
      explanation: "A vision that ignores real constraints describes unrealistic optimism — 'idealistic' fits."
    },
    {
      id: "moderate-3-q13",
      wordId: "moderate-3-13",
      passage: "Years of broken campaign promises had left him deeply ___ about anything politicians said.",
      choices: [
        "austere",
        "temperament",
        "temperate",
        "cynical"
      ],
      correct: 3,
      explanation: "Years of broken promises leading to distrust describes cynicism — 'cynical' fits."
    },
    {
      id: "moderate-3-q14",
      wordId: "moderate-3-14",
      passage: "Her ___ volunteer work, which ate up every weekend, was never done for recognition.",
      choices: [
        "complacent",
        "malicious",
        "ambivalent",
        "altruistic"
      ],
      correct: 3,
      explanation: "Selfless work done without seeking recognition describes concern for others' well-being — 'altruistic' fits."
    },
    {
      id: "moderate-3-q15",
      wordId: "moderate-3-15",
      passage: "His ___ tone made it clear he didn't think anyone else's suggestions were worth hearing.",
      choices: [
        "temperament",
        "congenial",
        "arrogant",
        "malicious"
      ],
      correct: 2,
      explanation: "Dismissing others' suggestions out of an inflated sense of self-importance describes arrogance — 'arrogant' fits."
    },
    {
      id: "moderate-3-q16",
      wordId: "moderate-3-16",
      passage: "Having won three championships in a row, the team grew ___ and lost in the first round the next season.",
      choices: [
        "aloof",
        "complacent",
        "tenacious",
        "stoic"
      ],
      correct: 1,
      explanation: "Winning repeatedly and then losing due to overconfidence describes complacency — 'complacent' fits."
    },
    {
      id: "moderate-3-q17",
      wordId: "moderate-3-17",
      passage: "The ___ editor caught every misplaced comma in the four-hundred-page manuscript.",
      choices: [
        "complacent",
        "meticulous",
        "arrogant",
        "gregarious"
      ],
      correct: 1,
      explanation: "Catching every small error in a long manuscript describes extreme attention to detail — 'meticulous' fits."
    },
    {
      id: "moderate-3-q18",
      wordId: "moderate-3-18",
      passage: "It was ___ of them to set aside part of every paycheck instead of spending it all right away.",
      choices: [
        "prudent",
        "complacent",
        "ambivalent",
        "benevolent"
      ],
      correct: 0,
      explanation: "Saving instead of spending everything describes careful, forward-thinking behavior — 'prudent' fits."
    },
    {
      id: "moderate-3-q19",
      wordId: "moderate-3-19",
      passage: "The ___ committee member refused to budge, even after every other member had agreed to compromise.",
      choices: [
        "obstinate",
        "ambivalent",
        "candor",
        "altruistic"
      ],
      correct: 0,
      explanation: "Refusing to budge after everyone else compromises describes stubbornness — 'obstinate' fits."
    },
    {
      id: "moderate-3-q20",
      wordId: "moderate-3-20",
      passage: "Her ___ pursuit of the story, chasing leads for months, eventually uncovered the truth everyone else had missed.",
      choices: [
        "meticulous",
        "benevolent",
        "austere",
        "tenacious"
      ],
      correct: 3,
      explanation: "Chasing leads for months without giving up describes persistence toward a goal — 'tenacious' fits."
    },
    {
      id: "moderate-3-q21",
      wordId: "moderate-3-21",
      passage: "The ___ host made sure not a single guest was left standing alone at the party.",
      choices: [
        "gregarious",
        "meticulous",
        "reticent",
        "obstinate"
      ],
      correct: 0,
      explanation: "Making sure no guest is left alone describes fondness for company and sociability — 'gregarious' fits."
    },
    {
      id: "moderate-3-q22",
      wordId: "moderate-3-22",
      passage: "He stayed ___ about his plans, offering no details until everything was completely finalized.",
      choices: [
        "tenacious",
        "reticent",
        "complacent",
        "aloof"
      ],
      correct: 1,
      explanation: "Offering no details until everything is finalized describes reluctance to share — 'reticent' fits."
    },
    {
      id: "moderate-3-q23",
      wordId: "moderate-3-23",
      passage: "She kept herself ___ at the party, hovering near the exit rather than joining any conversation.",
      choices: [
        "amiable",
        "aloof",
        "meticulous",
        "complacent"
      ],
      correct: 1,
      explanation: "Staying near an exit rather than joining conversation describes emotional distance — 'aloof' fits."
    },
    {
      id: "moderate-3-q24",
      wordId: "moderate-3-24",
      passage: "The old family dog was so ___ that the toddlers could climb all over him without a single growl.",
      choices: [
        "altruistic",
        "obstinate",
        "docile",
        "arrogant"
      ],
      correct: 2,
      explanation: "Letting toddlers climb over without protest describes being easily managed — 'docile' fits."
    },
    {
      id: "moderate-3-q25",
      wordId: "moderate-3-25",
      passage: "Their ___ approach to the heated debate kept both sides civil even when they disagreed sharply.",
      choices: [
        "temperate",
        "altruistic",
        "congenial",
        "malicious"
      ],
      correct: 0,
      explanation: "Staying civil during a heated disagreement describes restraint and moderation — 'temperate' fits."
    }
  ],
  "moderate-4": [
    {
      id: "moderate-4-q1",
      wordId: "moderate-4-1",
      passage: "Her ___ mind, always breaking problems into smaller pieces, made her ideal for the research role.",
      choices: [
        "analytical",
        "nuance",
        "correlation",
        "substantive"
      ],
      correct: 0,
      explanation: "Breaking problems into smaller pieces describes examining things through logical reasoning — 'analytical' fits."
    },
    {
      id: "moderate-4-q2",
      wordId: "moderate-4-2",
      passage: "The study relies entirely on ___ data gathered from five years of direct observation, not theory alone.",
      choices: [
        "systematic",
        "ambiguous",
        "quantitative",
        "empirical"
      ],
      correct: 3,
      explanation: "Data gathered from years of direct observation describes evidence based on experiment — 'empirical' fits."
    },
    {
      id: "moderate-4-q3",
      wordId: "moderate-4-3",
      passage: "The scientist designed a series of controlled trials specifically to test her original ___.",
      choices: [
        "qualitative",
        "methodology",
        "paradox",
        "hypothesis"
      ],
      correct: 3,
      explanation: "A proposed explanation tested through trials describes a hypothesis — 'hypothesis' fits."
    },
    {
      id: "moderate-4-q4",
      wordId: "moderate-4-4",
      passage: "The final essay manages to ___ research from three completely different academic fields into one coherent argument.",
      choices: [
        "synthesize",
        "empirical",
        "conjecture",
        "causation"
      ],
      correct: 0,
      explanation: "Combining separate fields into one coherent whole describes synthesizing them — 'synthesize' fits."
    },
    {
      id: "moderate-4-q5",
      wordId: "moderate-4-5",
      passage: "Researchers found a strong ___ between hours of sleep and next-day test performance.",
      choices: [
        "rationale",
        "correlation",
        "analytical",
        "methodology"
      ],
      correct: 1,
      explanation: "A statistical relationship between sleep and performance describes a correlation — 'correlation' fits."
    },
    {
      id: "moderate-4-q6",
      wordId: "moderate-4-6",
      passage: "The team was careful not to mistake a simple statistical link for actual ___.",
      choices: [
        "discern",
        "causation",
        "correlation",
        "scrutinize"
      ],
      correct: 1,
      explanation: "Being careful not to confuse a link with a direct cause describes causation — 'causation' fits."
    },
    {
      id: "moderate-4-q7",
      wordId: "moderate-4-7",
      passage: "The published report walks readers through the exact ___ used to collect and interpret the survey results.",
      choices: [
        "methodology",
        "ambiguous",
        "hypothesis",
        "premise"
      ],
      correct: 0,
      explanation: "The system of methods used in research describes methodology — 'methodology' fits."
    },
    {
      id: "moderate-4-q8",
      wordId: "moderate-4-8",
      passage: "Rather than guessing, she took a ___ approach, testing exactly one variable at a time.",
      choices: [
        "systematic",
        "discern",
        "scrutinize",
        "hypothetical"
      ],
      correct: 0,
      explanation: "Testing one variable at a time according to a fixed plan describes a systematic approach — 'systematic' fits."
    },
    {
      id: "moderate-4-q9",
      wordId: "moderate-4-9",
      passage: "The textbook's ___ overview left almost nothing about the subject unexplained.",
      choices: [
        "methodology",
        "extrapolate",
        "discern",
        "comprehensive"
      ],
      correct: 3,
      explanation: "An overview leaving nothing unexplained describes completeness — 'comprehensive' fits."
    },
    {
      id: "moderate-4-q10",
      wordId: "moderate-4-10",
      passage: "The instructions were so ___ that half the class walked away with two completely different interpretations.",
      choices: [
        "rationale",
        "synthesize",
        "ambiguous",
        "paradox"
      ],
      correct: 2,
      explanation: "Instructions leading to two different interpretations describe unclear wording — 'ambiguous' fits."
    },
    {
      id: "moderate-4-q11",
      wordId: "moderate-4-11",
      passage: "The translator spent hours trying to preserve the original text's every ___ of tone.",
      choices: [
        "extrapolate",
        "comprehensive",
        "empirical",
        "nuance"
      ],
      correct: 3,
      explanation: "Preserving subtle shades of tone in translation describes nuance — 'nuance' fits."
    },
    {
      id: "moderate-4-q12",
      wordId: "moderate-4-12",
      passage: "It was genuinely hard to ___ any real difference between the two competing proposals.",
      choices: [
        "analytical",
        "discern",
        "scrutinize",
        "quantitative"
      ],
      correct: 1,
      explanation: "Struggling to perceive any real difference describes discerning it — 'discern' fits."
    },
    {
      id: "moderate-4-q13",
      wordId: "moderate-4-13",
      passage: "Auditors ___ every line of the budget before signing off on the year-end report.",
      choices: [
        "substantive",
        "quantitative",
        "scrutinize",
        "methodology"
      ],
      correct: 2,
      explanation: "Examining every line closely before approval describes scrutinizing it — 'scrutinize' fits."
    },
    {
      id: "moderate-4-q14",
      wordId: "moderate-4-14",
      passage: "The board's memo laid out the entire ___ behind adopting the controversial new policy.",
      choices: [
        "scrutinize",
        "empirical",
        "rationale",
        "feasible"
      ],
      correct: 2,
      explanation: "A memo explaining the reasons behind a decision describes its rationale — 'rationale' fits."
    },
    {
      id: "moderate-4-q15",
      wordId: "moderate-4-15",
      passage: "His whole argument rests on a single ___ that has never actually been proven true.",
      choices: [
        "empirical",
        "paradox",
        "anomaly",
        "premise"
      ],
      correct: 3,
      explanation: "An unproven statement an argument depends on describes a premise — 'premise' fits."
    },
    {
      id: "moderate-4-q16",
      wordId: "moderate-4-16",
      passage: "The detective's careful ___ about the muddy footprint turned out to be exactly right.",
      choices: [
        "qualitative",
        "systematic",
        "causation",
        "inference"
      ],
      correct: 3,
      explanation: "A conclusion reached through reasoning that turns out correct describes an inference — 'inference' fits."
    },
    {
      id: "moderate-4-q17",
      wordId: "moderate-4-17",
      passage: "Without more actual data, the popular theory remains pure ___ rather than proven fact.",
      choices: [
        "conjecture",
        "hypothetical",
        "hypothesis",
        "substantive"
      ],
      correct: 0,
      explanation: "An opinion formed without complete evidence describes conjecture — 'conjecture' fits."
    },
    {
      id: "moderate-4-q18",
      wordId: "moderate-4-18",
      passage: "It's a strange ___ that saving money for the future often requires spending some of it first.",
      choices: [
        "paradox",
        "inference",
        "comprehensive",
        "ambiguous"
      ],
      correct: 0,
      explanation: "A statement that seems contradictory but reveals a hidden truth describes a paradox — 'paradox' fits."
    },
    {
      id: "moderate-4-q19",
      wordId: "moderate-4-19",
      passage: "The unusually cold summer was treated at first as a rare statistical ___ rather than a lasting trend.",
      choices: [
        "scrutinize",
        "paradox",
        "anomaly",
        "hypothetical"
      ],
      correct: 2,
      explanation: "Something that deviates from what's expected describes an anomaly — 'anomaly' fits."
    },
    {
      id: "moderate-4-q20",
      wordId: "moderate-4-20",
      passage: "Let's consider a purely ___ scenario in which the company's budget were suddenly unlimited.",
      choices: [
        "premise",
        "methodology",
        "causation",
        "hypothetical"
      ],
      correct: 3,
      explanation: "A scenario suggested rather than based on known fact describes something hypothetical — 'hypothetical' fits."
    },
    {
      id: "moderate-4-q21",
      wordId: "moderate-4-21",
      passage: "The interviews offered rich ___ insight into how users actually felt while navigating the app.",
      choices: [
        "qualitative",
        "comprehensive",
        "methodology",
        "substantive"
      ],
      correct: 0,
      explanation: "Insight into how people feel rather than raw numbers describes qualitative data — 'qualitative' fits."
    },
    {
      id: "moderate-4-q22",
      wordId: "moderate-4-22",
      passage: "The ___ results showed a clear, measurable jump in average test scores after the new program began.",
      choices: [
        "ambiguous",
        "quantitative",
        "empirical",
        "paradox"
      ],
      correct: 1,
      explanation: "Results measured in exact numbers describe quantitative data — 'quantitative' fits."
    },
    {
      id: "moderate-4-q23",
      wordId: "moderate-4-23",
      passage: "Economists ___ future growth by extending patterns already visible in current market trends.",
      choices: [
        "paradox",
        "premise",
        "extrapolate",
        "inference"
      ],
      correct: 2,
      explanation: "Estimating the future by extending a known trend describes extrapolating — 'extrapolate' fits."
    },
    {
      id: "moderate-4-q24",
      wordId: "moderate-4-24",
      passage: "Given the team's limited resources, the proposed six-month timeline still seemed entirely ___.",
      choices: [
        "extrapolate",
        "qualitative",
        "methodology",
        "feasible"
      ],
      correct: 3,
      explanation: "A tight timeline that's still possible describes something practically achievable — 'feasible' fits."
    },
    {
      id: "moderate-4-q25",
      wordId: "moderate-4-25",
      passage: "After weeks of talks that produced nothing concrete, both sides finally made ___ progress.",
      choices: [
        "analytical",
        "substantive",
        "empirical",
        "scrutinize"
      ],
      correct: 1,
      explanation: "Progress that finally has real content after empty talks describes it being substantive — 'substantive' fits."
    }
  ],
  "moderate-5": [
    {
      id: "moderate-5-q1",
      wordId: "moderate-5-1",
      passage: "The border ___ between the two small towns dragged on for nearly forty years without resolution.",
      choices: [
        "belligerent",
        "dispute",
        "deride",
        "admonish"
      ],
      correct: 1,
      explanation: "A disagreement lasting decades without resolution describes a dispute — 'dispute' fits."
    },
    {
      id: "moderate-5-q2",
      wordId: "moderate-5-2",
      passage: "The coach pulled the player aside to ___ him for arguing with the referee in front of the crowd.",
      choices: [
        "skirmish",
        "chastise",
        "disparage",
        "rebuke"
      ],
      correct: 3,
      explanation: "Being pulled aside to be criticized sharply for misbehavior describes a rebuke — 'rebuke' fits."
    },
    {
      id: "moderate-5-q3",
      wordId: "moderate-5-3",
      passage: "The librarian gently ___ the students in the corner for talking during quiet study hour.",
      choices: [
        "admonish",
        "dispute",
        "confrontation",
        "skirmish"
      ],
      correct: 0,
      explanation: "Warning students firmly for talking during quiet time describes admonishing them — 'admonish' fits."
    },
    {
      id: "moderate-5-q4",
      wordId: "moderate-5-4",
      passage: "His supervisor ___ him in front of the whole team for missing the shipping deadline.",
      choices: [
        "antagonize",
        "dispute",
        "chastise",
        "mock"
      ],
      correct: 2,
      explanation: "Scolding someone severely in front of a team describes chastising them — 'chastise' fits."
    },
    {
      id: "moderate-5-q5",
      wordId: "moderate-5-5",
      passage: "The scathing editorial went on to ___ the mayor for ignoring the crisis for three full months.",
      choices: [
        "reprimand",
        "vindictive",
        "contentious",
        "castigate"
      ],
      correct: 3,
      explanation: "An editorial harshly criticizing an official for inaction describes castigating them — 'castigate' fits."
    },
    {
      id: "moderate-5-q6",
      wordId: "moderate-5-6",
      passage: "She was formally ___ after leaving the cash register unattended during a busy shift.",
      choices: [
        "friction",
        "taunt",
        "deride",
        "reprimand"
      ],
      correct: 3,
      explanation: "Being formally disciplined for a workplace mistake describes being reprimanded — 'reprimand' fits."
    },
    {
      id: "moderate-5-q7",
      wordId: "moderate-5-7",
      passage: "World leaders wasted no time moving to ___ the attack on the embassy as an act of terrorism.",
      choices: [
        "antagonize",
        "condemn",
        "taunt",
        "reprimand"
      ],
      correct: 1,
      explanation: "Publicly expressing strong disapproval of an attack describes condemning it — 'condemn' fits."
    },
    {
      id: "moderate-5-q8",
      wordId: "moderate-5-8",
      passage: "He has a habit of trying to ___ any idea in a meeting that wasn't originally his own.",
      choices: [
        "condemn",
        "chastise",
        "altercation",
        "disparage"
      ],
      correct: 3,
      explanation: "Speaking negatively about others' ideas out of insecurity describes disparaging them — 'disparage' fits."
    },
    {
      id: "moderate-5-q9",
      wordId: "moderate-5-9",
      passage: "Online critics openly ___ the film for what they called its painfully predictable plot.",
      choices: [
        "adversary",
        "admonish",
        "deride",
        "castigate"
      ],
      correct: 2,
      explanation: "Mocking a film's predictable plot describes expressing contempt through ridicule — 'deride' fits."
    },
    {
      id: "moderate-5-q10",
      wordId: "moderate-5-10",
      passage: "Classmates used to ___ his accent in elementary school, though he never let it bother him for long.",
      choices: [
        "mock",
        "strife",
        "adversary",
        "chastise"
      ],
      correct: 0,
      explanation: "Making fun of someone's accent describes mocking them — 'mock' fits."
    },
    {
      id: "moderate-5-q11",
      wordId: "moderate-5-11",
      passage: "Opposing fans ___ the visiting team the moment they stepped onto the field.",
      choices: [
        "hostile",
        "skirmish",
        "taunt",
        "antagonize"
      ],
      correct: 2,
      explanation: "Provoking a rival team the moment they arrive describes taunting them — 'taunt' fits."
    },
    {
      id: "moderate-5-q12",
      wordId: "moderate-5-12",
      passage: "He seemed to genuinely enjoy ___ his younger brother at every single family dinner.",
      choices: [
        "adversary",
        "feud",
        "deride",
        "antagonize"
      ],
      correct: 3,
      explanation: "Enjoying provoking a sibling repeatedly describes antagonizing them — 'antagonize' fits."
    },
    {
      id: "moderate-5-q13",
      wordId: "moderate-5-13",
      passage: "The ___ crowd booed every single call the referee made, home or away.",
      choices: [
        "disparage",
        "rebuke",
        "discord",
        "hostile"
      ],
      correct: 3,
      explanation: "A crowd booing every call describes unfriendly, aggressive behavior — 'hostile' fits."
    },
    {
      id: "moderate-5-q14",
      wordId: "moderate-5-14",
      passage: "Immigration remained by far the most ___ subject of the entire televised debate.",
      choices: [
        "deride",
        "antagonize",
        "contentious",
        "altercation"
      ],
      correct: 2,
      explanation: "A subject guaranteed to cause argument describes it being contentious — 'contentious' fits."
    },
    {
      id: "moderate-5-q15",
      wordId: "moderate-5-15",
      passage: "The ___ customer refused to lower his voice even after security asked him twice.",
      choices: [
        "belligerent",
        "dispute",
        "discord",
        "deride"
      ],
      correct: 0,
      explanation: "Refusing to calm down even after warnings describes hostility ready to escalate — 'belligerent' fits."
    },
    {
      id: "moderate-5-q16",
      wordId: "moderate-5-16",
      passage: "The two companies had been bitter ___ in the same market for well over a decade.",
      choices: [
        "adversary",
        "clash",
        "deride",
        "mock"
      ],
      correct: 0,
      explanation: "Two companies competing fiercely for years describe being rivals — 'adversary' fits."
    },
    {
      id: "moderate-5-q17",
      wordId: "moderate-5-17",
      passage: "Tensions between the two coworkers finally boiled over into a full ___ in the parking lot.",
      choices: [
        "hostile",
        "rebuke",
        "confrontation",
        "vindictive"
      ],
      correct: 2,
      explanation: "Tensions escalating into a face-to-face clash describe a confrontation — 'confrontation' fits."
    },
    {
      id: "moderate-5-q18",
      wordId: "moderate-5-18",
      passage: "There was noticeable ___ between the two department heads whenever budget meetings came up.",
      choices: [
        "friction",
        "vindictive",
        "admonish",
        "deride"
      ],
      correct: 0,
      explanation: "Ongoing tension between two managers describes friction — 'friction' fits."
    },
    {
      id: "moderate-5-q19",
      wordId: "moderate-5-19",
      passage: "The unexpected inheritance created years of quiet ___ within a once-close family.",
      choices: [
        "friction",
        "chastise",
        "discord",
        "deride"
      ],
      correct: 2,
      explanation: "An inheritance sparking years of family tension describes discord — 'discord' fits."
    },
    {
      id: "moderate-5-q20",
      wordId: "moderate-5-20",
      passage: "Decades of internal ___ had left the country's institutions weaker with every passing year.",
      choices: [
        "admonish",
        "chastise",
        "strife",
        "antagonize"
      ],
      correct: 2,
      explanation: "Years of bitter internal disagreement weakening a country describe strife — 'strife' fits."
    },
    {
      id: "moderate-5-q21",
      wordId: "moderate-5-21",
      passage: "The loud ___ between the two drivers drew a small crowd of onlookers within minutes.",
      choices: [
        "vindictive",
        "altercation",
        "friction",
        "skirmish"
      ],
      correct: 1,
      explanation: "A noisy argument drawing a crowd describes an altercation — 'altercation' fits."
    },
    {
      id: "moderate-5-q22",
      wordId: "moderate-5-22",
      passage: "A minor ___ broke out between rival fans just outside the stadium after the final whistle.",
      choices: [
        "skirmish",
        "strife",
        "altercation",
        "mock"
      ],
      correct: 0,
      explanation: "A small clash between rival fans after a game describes a skirmish — 'skirmish' fits."
    },
    {
      id: "moderate-5-q23",
      wordId: "moderate-5-23",
      passage: "The two candidates ___ repeatedly during the debate, each interrupting the other's closing remarks.",
      choices: [
        "chastise",
        "clash",
        "feud",
        "skirmish"
      ],
      correct: 1,
      explanation: "Two people clashing repeatedly during an exchange describe them clashing — 'clash' fits."
    },
    {
      id: "moderate-5-q24",
      wordId: "moderate-5-24",
      passage: "The ___ between the two neighboring families had somehow lasted three full generations.",
      choices: [
        "reprimand",
        "dispute",
        "feud",
        "chastise"
      ],
      correct: 2,
      explanation: "A bitter dispute lasting three generations describes a feud — 'feud' fits."
    },
    {
      id: "moderate-5-q25",
      wordId: "moderate-5-25",
      passage: "His ___ response to the layoff only made an already tense situation significantly worse.",
      choices: [
        "chastise",
        "condemn",
        "vindictive",
        "clash"
      ],
      correct: 2,
      explanation: "A response driven by a desire for revenge that worsens things describes vindictiveness — 'vindictive' fits."
    }
  ],
  "moderate-6": [
    {
      id: "moderate-6-q1",
      wordId: "moderate-6-1",
      passage: "Small businesses began to ___ once the new highway finally brought steady foot traffic downtown.",
      choices: [
        "flourish",
        "accelerate",
        "mitigate",
        "prosper"
      ],
      correct: 0,
      explanation: "Businesses succeeding after new traffic arrives describes flourishing — 'flourish' fits."
    },
    {
      id: "moderate-6-q2",
      wordId: "moderate-6-2",
      passage: "The tomato seedlings finally began to ___ once they were moved into direct afternoon sunlight.",
      choices: [
        "expand",
        "erode",
        "thrive",
        "plateau"
      ],
      correct: 2,
      explanation: "Plants growing well once conditions improve describe thriving — 'thrive' fits."
    },
    {
      id: "moderate-6-q3",
      wordId: "moderate-6-3",
      passage: "The small mining town began to ___ again the moment the factory reopened its doors.",
      choices: [
        "mitigate",
        "deteriorate",
        "prosper",
        "thrive"
      ],
      correct: 2,
      explanation: "A town succeeding again after reopening describes prospering — 'prosper' fits."
    },
    {
      id: "moderate-6-q4",
      wordId: "moderate-6-4",
      passage: "The company plans to ___ into three brand-new markets before the end of next year.",
      choices: [
        "expand",
        "attenuate",
        "atrophy",
        "thrive"
      ],
      correct: 0,
      explanation: "A company growing larger into new areas describes expanding — 'expand' fits."
    },
    {
      id: "moderate-6-q5",
      wordId: "moderate-6-5",
      passage: "Food trucks began to ___ across downtown almost as fast as new apartment buildings went up.",
      choices: [
        "accelerate",
        "regress",
        "proliferate",
        "wither"
      ],
      correct: 2,
      explanation: "Something increasing rapidly in number describes proliferating — 'proliferate' fits."
    },
    {
      id: "moderate-6-q6",
      wordId: "moderate-6-6",
      passage: "What started as a minor disagreement quickly began to ___ into a full-blown shouting match.",
      choices: [
        "escalate",
        "atrophy",
        "prosper",
        "attenuate"
      ],
      correct: 0,
      explanation: "A small disagreement becoming a serious shouting match describes escalating — 'escalate' fits."
    },
    {
      id: "moderate-6-q7",
      wordId: "moderate-6-7",
      passage: "His influence within the company began to ___ noticeably once the new leadership took over.",
      choices: [
        "diminish",
        "stagnate",
        "regress",
        "foster"
      ],
      correct: 0,
      explanation: "Influence becoming smaller after a leadership change describes diminishing — 'diminish' fits."
    },
    {
      id: "moderate-6-q8",
      wordId: "moderate-6-8",
      passage: "Without any real maintenance, the old wooden bridge continued to ___ year after year.",
      choices: [
        "decay",
        "amplify",
        "foster",
        "deteriorate"
      ],
      correct: 3,
      explanation: "Something getting progressively worse without upkeep describes deteriorating — 'deteriorate' fits."
    },
    {
      id: "moderate-6-q9",
      wordId: "moderate-6-9",
      passage: "Years of harsh public criticism had slowly begun to ___ her once-unshakable confidence.",
      choices: [
        "foster",
        "erode",
        "augment",
        "exacerbate"
      ],
      correct: 1,
      explanation: "Confidence being gradually worn away by criticism describes eroding — 'erode' fits."
    },
    {
      id: "moderate-6-q10",
      wordId: "moderate-6-10",
      passage: "The cut flowers, left without water overnight, had already begun to ___ by morning.",
      choices: [
        "prosper",
        "wither",
        "cultivate",
        "attenuate"
      ],
      correct: 1,
      explanation: "Flowers drying and shriveling without water describe withering — 'wither' fits."
    },
    {
      id: "moderate-6-q11",
      wordId: "moderate-6-11",
      passage: "Muscles begin to ___ within just a few weeks of skipping regular exercise entirely.",
      choices: [
        "augment",
        "atrophy",
        "deteriorate",
        "decay"
      ],
      correct: 1,
      explanation: "Muscles wasting away from disuse describe atrophying — 'atrophy' fits."
    },
    {
      id: "moderate-6-q12",
      wordId: "moderate-6-12",
      passage: "Sales began to ___ almost as soon as the excitement of the product launch wore off.",
      choices: [
        "amplify",
        "nurture",
        "accelerate",
        "stagnate"
      ],
      correct: 3,
      explanation: "Sales that stop growing after initial excitement fades describe stagnating — 'stagnate' fits."
    },
    {
      id: "moderate-6-q13",
      wordId: "moderate-6-13",
      passage: "The abandoned mill had clearly begun to ___, its roof caving in after years of neglect.",
      choices: [
        "decay",
        "flourish",
        "nurture",
        "deteriorate"
      ],
      correct: 0,
      explanation: "A building rotting after years of neglect describes decaying — 'decay' fits."
    },
    {
      id: "moderate-6-q14",
      wordId: "moderate-6-14",
      passage: "The small design team hired several freelancers to ___ their limited in-house capacity.",
      choices: [
        "exacerbate",
        "augment",
        "amplify",
        "stagnate"
      ],
      correct: 1,
      explanation: "Adding freelancers to increase a team's capacity describes augmenting it — 'augment' fits."
    },
    {
      id: "moderate-6-q15",
      wordId: "moderate-6-15",
      passage: "Social media has the power to ___ even the smallest rumor into a national story within hours.",
      choices: [
        "amplify",
        "erode",
        "escalate",
        "attenuate"
      ],
      correct: 0,
      explanation: "Something increasing in intensity within hours describes amplifying it — 'amplify' fits."
    },
    {
      id: "moderate-6-q16",
      wordId: "moderate-6-16",
      passage: "Good teachers work hard to ___ genuine curiosity, not just memorization, in their students.",
      choices: [
        "amplify",
        "plateau",
        "decay",
        "cultivate"
      ],
      correct: 3,
      explanation: "Working to develop a quality through effort describes cultivating it — 'cultivate' fits."
    },
    {
      id: "moderate-6-q17",
      wordId: "moderate-6-17",
      passage: "The after-school program was designed specifically to ___ creativity among kids who rarely got art classes.",
      choices: [
        "attenuate",
        "exacerbate",
        "escalate",
        "foster"
      ],
      correct: 3,
      explanation: "A program built to encourage a quality's growth describes fostering it — 'foster' fits."
    },
    {
      id: "moderate-6-q18",
      wordId: "moderate-6-18",
      passage: "She spent nearly a decade ___ the tiny nonprofit into a nationally recognized organization.",
      choices: [
        "plateau",
        "nurture",
        "mitigate",
        "amplify"
      ],
      correct: 1,
      explanation: "Caring for something's growth over a decade describes nurturing it — 'nurture' fits."
    },
    {
      id: "moderate-6-q19",
      wordId: "moderate-6-19",
      passage: "New grant funding helped ___ the pace of research that had crawled along for years.",
      choices: [
        "accelerate",
        "plateau",
        "thrive",
        "deteriorate"
      ],
      correct: 0,
      explanation: "Funding speeding up a slow process describes accelerating it — 'accelerate' fits."
    },
    {
      id: "moderate-6-q20",
      wordId: "moderate-6-20",
      passage: "Without any practice over the summer break, his once-sharp piano skills began to noticeably ___.",
      choices: [
        "plateau",
        "decay",
        "expand",
        "regress"
      ],
      correct: 3,
      explanation: "Skills declining after a break from practice describe regressing — 'regress' fits."
    },
    {
      id: "moderate-6-q21",
      wordId: "moderate-6-21",
      passage: "Her weight-training progress ___ after the first few rapid months, holding steady for a long stretch after that.",
      choices: [
        "plateau",
        "erode",
        "nurture",
        "amplify"
      ],
      correct: 0,
      explanation: "Progress leveling off after early rapid gains describes plateauing — 'plateau' fits."
    },
    {
      id: "moderate-6-q22",
      wordId: "moderate-6-22",
      passage: "Ignoring the small leak in the roof only served to ___ the water damage underneath.",
      choices: [
        "wither",
        "erode",
        "curtail",
        "exacerbate"
      ],
      correct: 3,
      explanation: "Ignoring a small problem making it worse describes exacerbating it — 'exacerbate' fits."
    },
    {
      id: "moderate-6-q23",
      wordId: "moderate-6-23",
      passage: "New flood-control regulations were passed specifically to ___ the damage from future storms.",
      choices: [
        "decay",
        "mitigate",
        "stagnate",
        "regress"
      ],
      correct: 1,
      explanation: "Regulations meant to lessen future damage describe mitigating it — 'mitigate' fits."
    },
    {
      id: "moderate-6-q24",
      wordId: "moderate-6-24",
      passage: "Facing a shrinking budget, the city council voted to ___ spending on every non-essential project.",
      choices: [
        "wither",
        "mitigate",
        "nurture",
        "curtail"
      ],
      correct: 3,
      explanation: "Cutting spending on non-essential items describes curtailing it — 'curtail' fits."
    },
    {
      id: "moderate-6-q25",
      wordId: "moderate-6-25",
      passage: "Thick curtains over the window helped ___ most of the traffic noise from the street below.",
      choices: [
        "attenuate",
        "expand",
        "augment",
        "flourish"
      ],
      correct: 0,
      explanation: "Curtains reducing the intensity of outside noise describe attenuating it — 'attenuate' fits."
    }
  ],
  "moderate-7": [
    {
      id: "moderate-7-q1",
      wordId: "moderate-7-1",
      passage: "Her ___ explanation of the tax form cleared up confusion that three previous emails hadn't managed to.",
      choices: [
        "obscure",
        "enigmatic",
        "decipher",
        "lucid"
      ],
      correct: 3,
      explanation: "An explanation succeeding where confusing emails failed describes clarity — 'lucid' fits."
    },
    {
      id: "moderate-7-q2",
      wordId: "moderate-7-2",
      passage: "The company promised to be fully ___ about the reasons behind the upcoming layoffs.",
      choices: [
        "garbled",
        "transparent",
        "perplexing",
        "indistinct"
      ],
      correct: 1,
      explanation: "A promise of openness about a difficult decision describes transparency — 'transparent' fits."
    },
    {
      id: "moderate-7-q3",
      wordId: "moderate-7-3",
      passage: "The rental agreement was ___ about which repairs were the tenant's responsibility, leaving nothing to guesswork.",
      choices: [
        "enigmatic",
        "unintelligible",
        "muddled",
        "explicit"
      ],
      correct: 3,
      explanation: "Language leaving nothing to guesswork describes being stated in clear detail — 'explicit' fits."
    },
    {
      id: "moderate-7-q4",
      wordId: "moderate-7-4",
      passage: "He left behind a ___ note that no one in the family could quite make sense of.",
      choices: [
        "illuminate",
        "cryptic",
        "explicit",
        "unambiguous"
      ],
      correct: 1,
      explanation: "A note no one can make sense of describes something mysterious in meaning — 'cryptic' fits."
    },
    {
      id: "moderate-7-q5",
      wordId: "moderate-7-5",
      passage: "The reclusive artist stayed ___ throughout his career, rarely explaining what his own paintings meant.",
      choices: [
        "enigmatic",
        "convoluted",
        "decipher",
        "explicit"
      ],
      correct: 0,
      explanation: "An artist who never explains his work describes being mysterious and hard to interpret — 'enigmatic' fits."
    },
    {
      id: "moderate-7-q6",
      wordId: "moderate-7-6",
      passage: "The lab results were genuinely ___ to the entire research team, matching nothing they'd expected.",
      choices: [
        "perplexing",
        "opaque",
        "cryptic",
        "transparent"
      ],
      correct: 0,
      explanation: "Results matching nothing expected, confusing a whole team describe being perplexing — 'perplexing' fits."
    },
    {
      id: "moderate-7-q7",
      wordId: "moderate-7-7",
      passage: "The magician's final trick was so ___ that even other magicians in the audience couldn't explain how it worked.",
      choices: [
        "baffling",
        "perplexing",
        "lucid",
        "straightforward"
      ],
      correct: 0,
      explanation: "A trick unexplainable even to experts describes being extremely confusing — 'baffling' fits."
    },
    {
      id: "moderate-7-q8",
      wordId: "moderate-7-8",
      passage: "The plot grew so ___ that even devoted fans admitted they'd lost track of who was betraying whom.",
      choices: [
        "perplexing",
        "convoluted",
        "elucidate",
        "incoherent"
      ],
      correct: 1,
      explanation: "A plot so tangled that fans lose track describes it being extremely complex — 'convoluted' fits."
    },
    {
      id: "moderate-7-q9",
      wordId: "moderate-7-9",
      passage: "The company's pricing page felt deliberately ___, as though the fine print was designed to confuse.",
      choices: [
        "opaque",
        "transparent",
        "unambiguous",
        "enigmatic"
      ],
      correct: 0,
      explanation: "Pricing designed to confuse rather than clarify describes it being deliberately unclear — 'opaque' fits."
    },
    {
      id: "moderate-7-q10",
      wordId: "moderate-7-10",
      passage: "The footnote referenced such an ___ historical event that even the professor had to look it up.",
      choices: [
        "nebulous",
        "muddled",
        "opaque",
        "obscure"
      ],
      correct: 3,
      explanation: "An event little known even to a professor describes being obscure — 'obscure' fits."
    },
    {
      id: "moderate-7-q11",
      wordId: "moderate-7-11",
      passage: "The professor paused mid-lecture to ___ a concept several students clearly hadn't grasped.",
      choices: [
        "transparent",
        "cryptic",
        "elucidate",
        "enigmatic"
      ],
      correct: 2,
      explanation: "Pausing to make a confusing concept clear describes elucidating it — 'elucidate' fits."
    },
    {
      id: "moderate-7-q12",
      wordId: "moderate-7-12",
      passage: "The documentary managed to ___ a period of history most viewers had never learned about in school.",
      choices: [
        "unambiguous",
        "perplexing",
        "illuminate",
        "explicit"
      ],
      correct: 2,
      explanation: "Making an unfamiliar period of history clear describes illuminating it — 'illuminate' fits."
    },
    {
      id: "moderate-7-q13",
      wordId: "moderate-7-13",
      passage: "It took the research team nearly two years to fully ___ the faded ancient inscription.",
      choices: [
        "garbled",
        "decipher",
        "cryptic",
        "indistinct"
      ],
      correct: 1,
      explanation: "Working out the meaning of something worn and unclear describes deciphering it — 'decipher' fits."
    },
    {
      id: "moderate-7-q14",
      wordId: "moderate-7-14",
      passage: "The voicemail was so ___ from a bad connection that she had to call back just to understand it.",
      choices: [
        "precise",
        "garbled",
        "muddled",
        "elucidate"
      ],
      correct: 1,
      explanation: "A message distorted by a bad connection describes being garbled — 'garbled' fits."
    },
    {
      id: "moderate-7-q15",
      wordId: "moderate-7-15",
      passage: "His ___ explanation only left the class more confused than they'd been before he started talking.",
      choices: [
        "garbled",
        "lucidity",
        "muddled",
        "transparent"
      ],
      correct: 2,
      explanation: "An explanation that makes confusion worse describes being disorganized — 'muddled' fits."
    },
    {
      id: "moderate-7-q16",
      wordId: "moderate-7-16",
      passage: "Exhausted after the accident, the witness gave an ___ statement that police struggled to follow.",
      choices: [
        "perplexing",
        "unintelligible",
        "incoherent",
        "lucid"
      ],
      correct: 2,
      explanation: "A statement police struggle to follow describes lacking logical connection — 'incoherent' fits."
    },
    {
      id: "moderate-7-q17",
      wordId: "moderate-7-17",
      passage: "She gave such ___ directions that not a single member of the group got lost along the way.",
      choices: [
        "garbled",
        "precise",
        "lucid",
        "obscure"
      ],
      correct: 1,
      explanation: "Directions so exact that no one gets lost describe precision — 'precise' fits."
    },
    {
      id: "moderate-7-q18",
      wordId: "moderate-7-18",
      passage: "The contract's terms were entirely ___, leaving absolutely no room for a later dispute over meaning.",
      choices: [
        "straightforward",
        "unambiguous",
        "muddled",
        "illuminate"
      ],
      correct: 1,
      explanation: "Terms leaving no room for a later dispute describe being unambiguous — 'unambiguous' fits."
    },
    {
      id: "moderate-7-q19",
      wordId: "moderate-7-19",
      passage: "Setting up the new printer turned out to be surprisingly ___, taking only three simple steps.",
      choices: [
        "straightforward",
        "opaque",
        "lucidity",
        "hazy"
      ],
      correct: 0,
      explanation: "A setup requiring only three simple steps describes being straightforward — 'straightforward' fits."
    },
    {
      id: "moderate-7-q20",
      wordId: "moderate-7-20",
      passage: "Her plans for after graduation stayed frustratingly ___, with nothing concrete decided even by June.",
      choices: [
        "unambiguous",
        "elucidate",
        "explicit",
        "nebulous"
      ],
      correct: 3,
      explanation: "Plans with nothing concrete decided describe being vague — 'nebulous' fits."
    },
    {
      id: "moderate-7-q21",
      wordId: "moderate-7-21",
      passage: "His memory of the night of the accident remained ___, full of gaps he couldn't quite fill in.",
      choices: [
        "hazy",
        "cryptic",
        "convoluted",
        "straightforward"
      ],
      correct: 0,
      explanation: "A memory full of unfillable gaps describes being blurred and unclear — 'hazy' fits."
    },
    {
      id: "moderate-7-q22",
      wordId: "moderate-7-22",
      passage: "The old photograph showed only an ___ figure standing somewhere in the background.",
      choices: [
        "perplexing",
        "indistinct",
        "opaque",
        "enigmatic"
      ],
      correct: 1,
      explanation: "A figure barely visible in a photo describes it being unclear — 'indistinct' fits."
    },
    {
      id: "moderate-7-q23",
      wordId: "moderate-7-23",
      passage: "Static from the storm made the emergency announcement almost entirely ___.",
      choices: [
        "clarity",
        "lucid",
        "unintelligible",
        "garbled"
      ],
      correct: 2,
      explanation: "An announcement almost impossible to make out describes being unintelligible — 'unintelligible' fits."
    },
    {
      id: "moderate-7-q24",
      wordId: "moderate-7-24",
      passage: "The patient, still groggy from surgery, spoke with a surprising ___ that reassured the whole family.",
      choices: [
        "decipher",
        "lucidity",
        "nebulous",
        "perplexing"
      ],
      correct: 1,
      explanation: "Speaking with unexpected clarity after surgery describes lucidity — 'lucidity' fits."
    },
    {
      id: "moderate-7-q25",
      wordId: "moderate-7-25",
      passage: "She admired the sheer ___ of his argument, even while disagreeing with nearly every point in it.",
      choices: [
        "elucidate",
        "clarity",
        "perplexing",
        "unambiguous"
      ],
      correct: 1,
      explanation: "Admiring an argument's structure while disagreeing with its content describes clarity — 'clarity' fits."
    }
  ],
  "moderate-8": [
    {
      id: "moderate-8-q1",
      wordId: "moderate-8-1",
      passage: "The ___ eulogy moved several members of the audience to tears within the first minute.",
      choices: [
        "unconventional",
        "eloquent",
        "abstain",
        "scarce"
      ],
      correct: 1,
      explanation: "A speech powerful enough to move people to tears describes eloquence — 'eloquent' fits."
    },
    {
      id: "moderate-8-q2",
      wordId: "moderate-8-2",
      passage: "The link connecting the two unsolved cases turned out to be far too ___ to hold up in court.",
      choices: [
        "ephemeral",
        "tenuous",
        "fleeting",
        "spontaneous"
      ],
      correct: 1,
      explanation: "A connection too weak to hold up in court describes it being tenuous — 'tenuous' fits."
    },
    {
      id: "moderate-8-q3",
      wordId: "moderate-8-3",
      passage: "Smartphones have become so ___ in classrooms that some schools now ban them outright.",
      choices: [
        "ubiquitous",
        "redundant",
        "superfluous",
        "scarce"
      ],
      correct: 0,
      explanation: "Something found in nearly every classroom describes being ubiquitous — 'ubiquitous' fits."
    },
    {
      id: "moderate-8-q4",
      wordId: "moderate-8-4",
      passage: "Two council members chose to ___ entirely rather than vote for or against the proposal.",
      choices: [
        "unconventional",
        "deliberate",
        "scarce",
        "abstain"
      ],
      correct: 3,
      explanation: "Choosing not to vote either way describes abstaining — 'abstain' fits."
    },
    {
      id: "moderate-8-q5",
      wordId: "moderate-8-5",
      passage: "Seasonal allergies become especially ___ once the trees begin blooming across the region every spring.",
      choices: [
        "momentary",
        "prevalent",
        "fleeting",
        "unconventional"
      ],
      correct: 1,
      explanation: "Something widespread during a particular season describes being prevalent — 'prevalent' fits."
    },
    {
      id: "moderate-8-q6",
      wordId: "moderate-8-6",
      passage: "The editor cut several ___ phrases that only repeated points the essay had already made.",
      choices: [
        "redundant",
        "scarce",
        "innate",
        "ubiquitous"
      ],
      correct: 0,
      explanation: "Phrases that repeat something already said describe redundancy — 'redundant' fits."
    },
    {
      id: "moderate-8-q7",
      wordId: "moderate-8-7",
      passage: "The final report included several ___ details that only slowed readers down without adding value.",
      choices: [
        "fleeting",
        "spontaneous",
        "superfluous",
        "eloquent"
      ],
      correct: 2,
      explanation: "Details that add nothing but length describe being unnecessary — 'superfluous' fits."
    },
    {
      id: "moderate-8-q8",
      wordId: "moderate-8-8",
      passage: "They survived the harshest weeks of winter on a ___ supply of canned goods rationed carefully each day.",
      choices: [
        "inherent",
        "abundant",
        "unconventional",
        "meager"
      ],
      correct: 3,
      explanation: "A carefully rationed, limited food supply describes being meager — 'meager' fits."
    },
    {
      id: "moderate-8-q9",
      wordId: "moderate-8-9",
      passage: "Fresh water became genuinely ___ across the region after several straight weeks without rain.",
      choices: [
        "scarce",
        "innate",
        "superfluous",
        "abundant"
      ],
      correct: 0,
      explanation: "Water in short supply after a drought describes scarcity — 'scarce' fits."
    },
    {
      id: "moderate-8-q10",
      wordId: "moderate-8-10",
      passage: "The valley's ___ farmland made it one of the most productive agricultural regions in the entire country.",
      choices: [
        "arbitrary",
        "abundant",
        "scarce",
        "ubiquitous"
      ],
      correct: 1,
      explanation: "Farmland that's highly productive describes an abundant supply — 'abundant' fits."
    },
    {
      id: "moderate-8-q11",
      wordId: "moderate-8-11",
      passage: "The startup's founders pitched an entirely ___ approach to a problem investors thought had already been solved.",
      choices: [
        "superfluous",
        "unconventional",
        "conventional",
        "novel"
      ],
      correct: 3,
      explanation: "An approach nobody had tried before describes it being novel — 'novel' fits."
    },
    {
      id: "moderate-8-q12",
      wordId: "moderate-8-12",
      passage: "Rejecting ___ career advice, she launched her own company straight out of high school at nineteen.",
      choices: [
        "conventional",
        "deliberate",
        "abstain",
        "methodical"
      ],
      correct: 0,
      explanation: "Advice representing what's usually done describes being conventional — 'conventional' fits."
    },
    {
      id: "moderate-8-q13",
      wordId: "moderate-8-13",
      passage: "His deliberately ___ teaching style, full of games instead of lectures, made class far more memorable.",
      choices: [
        "arbitrary",
        "perpetual",
        "unconventional",
        "innate"
      ],
      correct: 2,
      explanation: "A teaching style unlike the usual approach describes being unconventional — 'unconventional' fits."
    },
    {
      id: "moderate-8-q14",
      wordId: "moderate-8-14",
      passage: "The deadline felt entirely ___, chosen with no clear reasoning behind the specific date at all.",
      choices: [
        "tenuous",
        "arbitrary",
        "novel",
        "inherent"
      ],
      correct: 1,
      explanation: "A deadline set without clear reasoning describes being arbitrary — 'arbitrary' fits."
    },
    {
      id: "moderate-8-q15",
      wordId: "moderate-8-15",
      passage: "Releasing the album on a Friday instead of a Tuesday was a fully ___ marketing choice.",
      choices: [
        "conventional",
        "abundant",
        "deliberate",
        "abstain"
      ],
      correct: 2,
      explanation: "A choice made on purpose, not by accident, describes being deliberate — 'deliberate' fits."
    },
    {
      id: "moderate-8-q16",
      wordId: "moderate-8-16",
      passage: "The best part of the trip ended up being the completely ___ detour they took on a whim.",
      choices: [
        "perpetual",
        "inherent",
        "spontaneous",
        "abundant"
      ],
      correct: 2,
      explanation: "A detour taken with no planning at all describes being spontaneous — 'spontaneous' fits."
    },
    {
      id: "moderate-8-q17",
      wordId: "moderate-8-17",
      passage: "The lab technician worked in a slow, ___ manner, checking each result before moving to the next.",
      choices: [
        "methodical",
        "prevalent",
        "eloquent",
        "deliberate"
      ],
      correct: 0,
      explanation: "Working slowly and checking each step before proceeding describes being methodical — 'methodical' fits."
    },
    {
      id: "moderate-8-q18",
      wordId: "moderate-8-18",
      passage: "The old files were stored in such a ___ pile that finding anything specific took hours.",
      choices: [
        "deliberate",
        "haphazard",
        "spontaneous",
        "abstain"
      ],
      correct: 1,
      explanation: "Files stored with no order at all describe being haphazard — 'haphazard' fits."
    },
    {
      id: "moderate-8-q19",
      wordId: "moderate-8-19",
      passage: "___ rain showers were expected throughout the afternoon, coming and going without warning.",
      choices: [
        "fleeting",
        "eloquent",
        "deliberate",
        "intermittent"
      ],
      correct: 3,
      explanation: "Rain coming and going without a steady pattern describes being intermittent — 'intermittent' fits."
    },
    {
      id: "moderate-8-q20",
      wordId: "moderate-8-20",
      passage: "The downtown area seemed locked in a state of ___ construction, with orange cones that never disappeared.",
      choices: [
        "abundant",
        "perpetual",
        "conventional",
        "fleeting"
      ],
      correct: 1,
      explanation: "Construction that never seems to end describes being perpetual — 'perpetual' fits."
    },
    {
      id: "moderate-8-q21",
      wordId: "moderate-8-21",
      passage: "She caught only a ___ glimpse of the deer before it vanished silently back into the trees.",
      choices: [
        "spontaneous",
        "fleeting",
        "redundant",
        "eloquent"
      ],
      correct: 1,
      explanation: "A glimpse lasting only an instant describes something fleeting — 'fleeting' fits."
    },
    {
      id: "moderate-8-q22",
      wordId: "moderate-8-22",
      passage: "The cherry blossoms' beauty is famously ___, lasting barely a week before the petals scatter.",
      choices: [
        "abstain",
        "momentary",
        "ephemeral",
        "deliberate"
      ],
      correct: 2,
      explanation: "Beauty lasting only a week describes being extremely short-lived — 'ephemeral' fits."
    },
    {
      id: "moderate-8-q23",
      wordId: "moderate-8-23",
      passage: "There was only a ___ pause before the crowd erupted into applause at the final note.",
      choices: [
        "momentary",
        "arbitrary",
        "scarce",
        "spontaneous"
      ],
      correct: 0,
      explanation: "A pause lasting a very short period before applause describes being momentary — 'momentary' fits."
    },
    {
      id: "moderate-8-q24",
      wordId: "moderate-8-24",
      passage: "Even before her first piano lesson, she showed an ___ sense of rhythm that couldn't be taught.",
      choices: [
        "methodical",
        "unconventional",
        "innate",
        "abundant"
      ],
      correct: 2,
      explanation: "A skill present before any lessons describes it being present from birth — 'innate' fits."
    },
    {
      id: "moderate-8-q25",
      wordId: "moderate-8-25",
      passage: "There's an ___ risk in any extreme sport, no matter how many precautions an athlete takes.",
      choices: [
        "innate",
        "deliberate",
        "meager",
        "inherent"
      ],
      correct: 3,
      explanation: "A risk that's a natural part of something, unavoidable, describes it being inherent — 'inherent' fits."
    }
  ],
  "difficult-1": [
    {
      id: "difficult-1-q1",
      wordId: "difficult-1-1",
      passage: "He gave the visitor a ___ handshake and an even more ___ tour, clearly eager to get back to his phone.",
      choices: [
        "obsequious",
        "bombastic",
        "vitriolic",
        "perfunctory"
      ],
      correct: 3,
      explanation: "A handshake and tour given without care or interest, while eager to return to a phone, describe routine indifference — 'perfunctory' fits."
    },
    {
      id: "difficult-1-q2",
      wordId: "difficult-1-2",
      passage: "Despite the setback, she remained remarkably ___, certain the project would recover within a month.",
      choices: [
        "oratory",
        "obsequious",
        "trenchant",
        "sanguine"
      ],
      correct: 3,
      explanation: "Staying certain of recovery despite a setback describes unwavering optimism — 'sanguine' fits."
    },
    {
      id: "difficult-1-q3",
      wordId: "difficult-1-3",
      passage: "The ___ waiter hovered at their table all evening, agreeing with every comment they made about the menu.",
      choices: [
        "rhetorical",
        "obsequious",
        "pithy",
        "satirical"
      ],
      correct: 1,
      explanation: "Hovering and agreeing with every comment describes excessive eagerness to please — 'obsequious' fits."
    },
    {
      id: "difficult-1-q4",
      wordId: "difficult-1-4",
      passage: "The review was so ___ that the author refused to read past its first cruel line.",
      choices: [
        "vitriolic",
        "pithy",
        "obsequious",
        "euphemism"
      ],
      correct: 0,
      explanation: "A review too bitter to finish reading describes it being filled with malice — 'vitriolic' fits."
    },
    {
      id: "difficult-1-q5",
      wordId: "difficult-1-5",
      passage: "His essay wasn't really analysis at all — it read more like a one-sided ___ against modern architecture.",
      choices: [
        "trenchant",
        "bombastic",
        "polemic",
        "satirical"
      ],
      correct: 2,
      explanation: "A one-sided attack rather than balanced analysis describes a polemic — 'polemic' fits."
    },
    {
      id: "difficult-1-q6",
      wordId: "difficult-1-6",
      passage: "She gave a ___ laugh at the suggestion, clearly convinced the plan would never actually work.",
      choices: [
        "vitriolic",
        "sardonic",
        "caustic",
        "rhetorical"
      ],
      correct: 1,
      explanation: "A mocking laugh at a doubted plan describes cynicism and mockery — 'sardonic' fits."
    },
    {
      id: "difficult-1-q7",
      wordId: "difficult-1-7",
      passage: "The critic's ___ restaurant reviews left even celebrity chefs bracing themselves before opening the newspaper.",
      choices: [
        "acerbic",
        "bombastic",
        "terse",
        "vitriolic"
      ],
      correct: 0,
      explanation: "Reviews that make chefs brace themselves describe sharp, biting criticism — 'acerbic' fits."
    },
    {
      id: "difficult-1-q8",
      wordId: "difficult-1-8",
      passage: "His ___ reply — just two words — gave no hint of whether he was pleased or furious.",
      choices: [
        "incisive",
        "laconic",
        "polemic",
        "euphemism"
      ],
      correct: 1,
      explanation: "A two-word reply revealing nothing describes extreme brevity — 'laconic' fits."
    },
    {
      id: "difficult-1-q9",
      wordId: "difficult-1-9",
      passage: "The ___ report buried its one useful conclusion under twenty pages that could have said the same thing.",
      choices: [
        "hyperbole",
        "terse",
        "vitriolic",
        "verbose"
      ],
      correct: 3,
      explanation: "A twenty-page report that could be much shorter describes excessive wordiness — 'verbose' fits."
    },
    {
      id: "difficult-1-q10",
      wordId: "difficult-1-10",
      passage: "Her ___ email left the client wondering whether the deal was even still on the table.",
      choices: [
        "terse",
        "grandiloquent",
        "polemic",
        "oratory"
      ],
      correct: 0,
      explanation: "A brief, blunt email that leaves doubt describes curtness — 'terse' fits."
    },
    {
      id: "difficult-1-q11",
      wordId: "difficult-1-11",
      passage: "He's known across the office for ___ one-liners that somehow sum up an entire meeting in a single sentence.",
      choices: [
        "oratory",
        "incisive",
        "pithy",
        "obsequious"
      ],
      correct: 2,
      explanation: "A single sentence summing up a whole meeting describes brief, forceful expression — 'pithy' fits."
    },
    {
      id: "difficult-1-q12",
      wordId: "difficult-1-12",
      passage: "Her ___ critique exposed every weakness in the proposal within the first two paragraphs.",
      choices: [
        "sanguine",
        "hyperbole",
        "trenchant",
        "vitriolic"
      ],
      correct: 2,
      explanation: "A critique exposing every weakness quickly describes sharp, incisive expression — 'trenchant' fits."
    },
    {
      id: "difficult-1-q13",
      wordId: "difficult-1-13",
      passage: "His ___ questions during cross-examination forced the witness to change his story twice.",
      choices: [
        "hyperbole",
        "terse",
        "grandiloquent",
        "incisive"
      ],
      correct: 3,
      explanation: "Questions sharp enough to force a story change describe piercing analysis — 'incisive' fits."
    },
    {
      id: "difficult-1-q14",
      wordId: "difficult-1-14",
      passage: "The comedian's ___ wit made even the politicians in the audience laugh at their own expense.",
      choices: [
        "obsequious",
        "mordant",
        "verbose",
        "trenchant"
      ],
      correct: 1,
      explanation: "Dark, biting humor that gets politicians laughing at themselves describes sharp criticism with humor — 'mordant' fits."
    },
    {
      id: "difficult-1-q15",
      wordId: "difficult-1-15",
      passage: "Her ___ remarks about the budget proposal silenced the entire conference room within seconds.",
      choices: [
        "caustic",
        "obsequious",
        "oratory",
        "grandiloquent"
      ],
      correct: 0,
      explanation: "Remarks sharp enough to silence a room describe being cutting and sarcastic — 'caustic' fits."
    },
    {
      id: "difficult-1-q16",
      wordId: "difficult-1-16",
      passage: "The ___ article gently mocked the entire town's obsession with parking regulations.",
      choices: [
        "vitriolic",
        "terse",
        "ironic",
        "satirical"
      ],
      correct: 3,
      explanation: "An article gently mocking a town's obsession describes it being satirical — 'satirical' fits."
    },
    {
      id: "difficult-1-q17",
      wordId: "difficult-1-17",
      passage: "Some readers found the novel's final chapter too ___, as though the author didn't trust them to draw their own conclusions.",
      choices: [
        "incisive",
        "didactic",
        "sanguine",
        "acerbic"
      ],
      correct: 1,
      explanation: "An ending that seems to distrust the reader's own judgment describes overt moralizing — 'didactic' fits."
    },
    {
      id: "difficult-1-q18",
      wordId: "difficult-1-18",
      passage: "The politician's ___ speech impressed almost no one and convinced even fewer.",
      choices: [
        "trenchant",
        "obsequious",
        "bombastic",
        "pithy"
      ],
      correct: 2,
      explanation: "A speech that impresses few and convinces fewer despite grand language describes inflated, empty rhetoric — 'bombastic' fits."
    },
    {
      id: "difficult-1-q19",
      wordId: "difficult-1-19",
      passage: "His ___ wedding toast stretched on for nearly twenty minutes, full of elaborate phrases that said very little.",
      choices: [
        "mordant",
        "rhetorical",
        "grandiloquent",
        "understatement"
      ],
      correct: 2,
      explanation: "A twenty-minute toast full of elaborate phrases saying little describes pompous, extravagant language — 'grandiloquent' fits."
    },
    {
      id: "difficult-1-q20",
      wordId: "difficult-1-20",
      passage: "\"Letting someone go\" has become the standard ___ companies use instead of saying \"firing.\"",
      choices: [
        "verbose",
        "laconic",
        "euphemism",
        "ironic"
      ],
      correct: 2,
      explanation: "A gentler substitute for a harsh term describes a euphemism — 'euphemism' fits."
    },
    {
      id: "difficult-1-q21",
      wordId: "difficult-1-21",
      passage: "Claiming he'd waited \"a million years\" for the bus was obvious ___, not a literal complaint.",
      choices: [
        "incisive",
        "polemic",
        "hyperbole",
        "oratory"
      ],
      correct: 2,
      explanation: "An exaggerated statement not meant literally describes hyperbole — 'hyperbole' fits."
    },
    {
      id: "difficult-1-q22",
      wordId: "difficult-1-22",
      passage: "Calling the hurricane \"a bit windy\" turned out to be quite an ___, given the destroyed homes.",
      choices: [
        "obsequious",
        "oratory",
        "rhetorical",
        "understatement"
      ],
      correct: 3,
      explanation: "Describing a hurricane as \"a bit windy\" understates its severity — 'understatement' fits."
    },
    {
      id: "difficult-1-q23",
      wordId: "difficult-1-23",
      passage: "The senator's ___ flourishes drew plenty of applause but offered almost no real policy answers.",
      choices: [
        "rhetorical",
        "mordant",
        "laconic",
        "grandiloquent"
      ],
      correct: 0,
      explanation: "Language designed to persuade rather than inform describes rhetorical style — 'rhetorical' fits."
    },
    {
      id: "difficult-1-q24",
      wordId: "difficult-1-24",
      passage: "Her natural gift for ___ made her an easy pick for the school's formal debate team.",
      choices: [
        "rhetorical",
        "incisive",
        "oratory",
        "mordant"
      ],
      correct: 2,
      explanation: "A gift for formal, persuasive public speaking describes oratory — 'oratory' fits."
    },
    {
      id: "difficult-1-q25",
      wordId: "difficult-1-25",
      passage: "It was darkly ___ that the fire station itself caught fire during the department's own safety demonstration.",
      choices: [
        "caustic",
        "vitriolic",
        "ironic",
        "obsequious"
      ],
      correct: 2,
      explanation: "A fire station catching fire during a safety demo describes an outcome opposite to what's expected — 'ironic' fits."
    }
  ],
  "difficult-2": [
    {
      id: "difficult-2-q1",
      wordId: "difficult-2-1",
      passage: "The discovery represented a full ___ shift, forcing physicists to rebuild their entire model of the universe.",
      choices: [
        "paradigm",
        "existential",
        "abstract",
        "subjectivity"
      ],
      correct: 0,
      explanation: "A shift so complete it forces a rebuilt model describes a paradigm — 'paradigm' fits."
    },
    {
      id: "difficult-2-q2",
      wordId: "difficult-2-2",
      passage: "The film explores the ___ between tradition and progress in a village caught between two eras.",
      choices: [
        "dogma",
        "metaphysical",
        "tenet",
        "dichotomy"
      ],
      correct: 3,
      explanation: "A sharp division between two contrasting forces describes a dichotomy — 'dichotomy' fits."
    },
    {
      id: "difficult-2-q3",
      wordId: "difficult-2-3",
      passage: "The long, silent drive home somehow triggered a full-blown ___ crisis about her entire career path.",
      choices: [
        "existential",
        "ideology",
        "subjectivity",
        "dogmatic"
      ],
      correct: 0,
      explanation: "A crisis about the meaning of one's own existence describes an existential concern — 'existential' fits."
    },
    {
      id: "difficult-2-q4",
      wordId: "difficult-2-4",
      passage: "Justice is an ___ concept, one that's far easier to feel than to define in precise words.",
      choices: [
        "conceptual",
        "ideology",
        "dogma",
        "abstract"
      ],
      correct: 3,
      explanation: "Something easier to feel than to define precisely describes an idea rather than a concrete object — 'abstract' fits."
    },
    {
      id: "difficult-2-q5",
      wordId: "difficult-2-5",
      passage: "The artist's ___ work often existed only as an idea, with no physical object ever created.",
      choices: [
        "dichotomy",
        "axiom",
        "conceptual",
        "immanent"
      ],
      correct: 2,
      explanation: "Work that exists only as an idea, without physical form, describes it being conceptual — 'conceptual' fits."
    },
    {
      id: "difficult-2-q6",
      wordId: "difficult-2-6",
      passage: "Cultural ___ argues that a practice should be judged only within the context of the society that produced it.",
      choices: [
        "existential",
        "duality",
        "immanent",
        "relativism"
      ],
      correct: 3,
      explanation: "A view that judges practices only within their own context describes relativism — 'relativism' fits."
    },
    {
      id: "difficult-2-q7",
      wordId: "difficult-2-7",
      passage: "He rejected the party's ___ outright, insisting on thinking through every issue independently instead.",
      choices: [
        "relativism",
        "tenet",
        "dogma",
        "immanent"
      ],
      correct: 2,
      explanation: "Beliefs accepted without question, rejected in favor of independent thought, describe dogma — 'dogma' fits."
    },
    {
      id: "difficult-2-q8",
      wordId: "difficult-2-8",
      passage: "Her ___ tone during the debate left absolutely no room for anyone else's opinion.",
      choices: [
        "immanent",
        "doctrine",
        "skepticism",
        "dogmatic"
      ],
      correct: 3,
      explanation: "A tone leaving no room for other opinions describes rigid, unquestioning certainty — 'dogmatic' fits."
    },
    {
      id: "difficult-2-q9",
      wordId: "difficult-2-9",
      passage: "Scientific ___ demands solid evidence before any new theory is accepted as true.",
      choices: [
        "skepticism",
        "existential",
        "ideology",
        "transcend"
      ],
      correct: 0,
      explanation: "Requiring evidence before accepting a claim describes a questioning attitude — 'skepticism' fits."
    },
    {
      id: "difficult-2-q10",
      wordId: "difficult-2-10",
      passage: "The novel's bleak ___ unsettled readers who expected the story to end with some kind of meaning.",
      choices: [
        "hedonism",
        "utilitarian",
        "paradigm",
        "nihilism"
      ],
      correct: 3,
      explanation: "A bleak ending that unsettles readers expecting meaning describes a belief that life lacks objective purpose — 'nihilism' fits."
    },
    {
      id: "difficult-2-q11",
      wordId: "difficult-2-11",
      passage: "The building's strictly ___ design prioritized function over any concern for beauty.",
      choices: [
        "introspection",
        "relativism",
        "doctrine",
        "utilitarian"
      ],
      correct: 3,
      explanation: "A design prioritizing function over beauty describes practicality over aesthetics — 'utilitarian' fits."
    },
    {
      id: "difficult-2-q12",
      wordId: "difficult-2-12",
      passage: "Critics accused the film of glorifying pure ___, showing characters who chase pleasure with no regard for consequence.",
      choices: [
        "tenet",
        "relativism",
        "dichotomy",
        "hedonism"
      ],
      correct: 3,
      explanation: "Characters chasing pleasure without regard for consequence describe hedonism — 'hedonism' fits."
    },
    {
      id: "difficult-2-q13",
      wordId: "difficult-2-13",
      passage: "The monks practiced a strict form of ___, owning almost nothing and denying themselves nearly every comfort.",
      choices: [
        "metaphysical",
        "abstract",
        "asceticism",
        "axiom"
      ],
      correct: 2,
      explanation: "Owning almost nothing and denying comfort describes a lifestyle of extreme self-discipline — 'asceticism' fits."
    },
    {
      id: "difficult-2-q14",
      wordId: "difficult-2-14",
      passage: "Great art has a rare power to ___ the barriers of language and culture entirely.",
      choices: [
        "transcend",
        "relativism",
        "asceticism",
        "metaphysical"
      ],
      correct: 0,
      explanation: "Something powerful enough to go beyond usual limits describes transcending them — 'transcend' fits."
    },
    {
      id: "difficult-2-q15",
      wordId: "difficult-2-15",
      passage: "The philosopher argued that meaning isn't found in some distant realm but is ___ in everyday experience itself.",
      choices: [
        "immanent",
        "paradigm",
        "axiom",
        "objectivity"
      ],
      correct: 0,
      explanation: "Meaning existing within everyday experience, not somewhere distant, describes something immanent — 'immanent' fits."
    },
    {
      id: "difficult-2-q16",
      wordId: "difficult-2-16",
      passage: "The novel captures the ___ of human nature, showing characters capable of both remarkable kindness and shocking cruelty.",
      choices: [
        "tenet",
        "existential",
        "duality",
        "hedonism"
      ],
      correct: 2,
      explanation: "Human nature capable of two contrasting extremes describes a duality — 'duality' fits."
    },
    {
      id: "difficult-2-q17",
      wordId: "difficult-2-17",
      passage: "Her graduate thesis explored questions of ___ raised by machines that may one day claim to think.",
      choices: [
        "ideology",
        "introspection",
        "ontology",
        "skepticism"
      ],
      correct: 2,
      explanation: "The philosophical study of what it means to exist, applied to AI, describes ontology — 'ontology' fits."
    },
    {
      id: "difficult-2-q18",
      wordId: "difficult-2-18",
      passage: "It's treated almost as an ___ in this culture that hard work inevitably leads to success.",
      choices: [
        "immanent",
        "conceptual",
        "axiom",
        "tenet"
      ],
      correct: 2,
      explanation: "A statement accepted as self-evidently true describes an axiom — 'axiom' fits."
    },
    {
      id: "difficult-2-q19",
      wordId: "difficult-2-19",
      passage: "Equality before the law remains one of the founding document's most essential ___.",
      choices: [
        "utilitarian",
        "dogma",
        "tenet",
        "asceticism"
      ],
      correct: 2,
      explanation: "A core principle a group holds to be true describes a tenet — 'tenet' fits."
    },
    {
      id: "difficult-2-q20",
      wordId: "difficult-2-20",
      passage: "The ruling party's economic ___ shaped nearly every major policy decision for over three decades.",
      choices: [
        "transcend",
        "tenet",
        "doctrine",
        "asceticism"
      ],
      correct: 2,
      explanation: "A formal set of beliefs shaping policy over decades describes a doctrine — 'doctrine' fits."
    },
    {
      id: "difficult-2-q21",
      wordId: "difficult-2-21",
      passage: "The two nations found themselves divided less by geography than by two fundamentally opposed ___.",
      choices: [
        "doctrine",
        "axiom",
        "metaphysical",
        "ideology"
      ],
      correct: 3,
      explanation: "Two nations divided by opposing systems of political belief describe conflicting ideologies — 'ideology' fits."
    },
    {
      id: "difficult-2-q22",
      wordId: "difficult-2-22",
      passage: "The poem raises deeply ___ questions about time, memory, and what it even means to exist at all.",
      choices: [
        "subjectivity",
        "skepticism",
        "utilitarian",
        "metaphysical"
      ],
      correct: 3,
      explanation: "Questions about time and existence beyond the physical describe metaphysical inquiry — 'metaphysical' fits."
    },
    {
      id: "difficult-2-q23",
      wordId: "difficult-2-23",
      passage: "Years of quiet ___ eventually convinced her to leave a stable job for something more meaningful.",
      choices: [
        "conceptual",
        "ontology",
        "introspection",
        "dogma"
      ],
      correct: 2,
      explanation: "Years spent examining one's own thoughts leading to a life change describe introspection — 'introspection' fits."
    },
    {
      id: "difficult-2-q24",
      wordId: "difficult-2-24",
      passage: "The essay questions the ___ built into even the most carefully researched works of history.",
      choices: [
        "paradigm",
        "ideology",
        "subjectivity",
        "transcend"
      ],
      correct: 2,
      explanation: "Personal opinion unavoidably present even in careful research describes subjectivity — 'subjectivity' fits."
    },
    {
      id: "difficult-2-q25",
      wordId: "difficult-2-25",
      passage: "Journalists strive for ___, even when the story hits painfully close to their own personal experience.",
      choices: [
        "dogmatic",
        "objectivity",
        "duality",
        "immanent"
      ],
      correct: 1,
      explanation: "Aiming to remain unaffected by personal feelings while reporting describes objectivity — 'objectivity' fits."
    }
  ],
  "difficult-3": [
    {
      id: "difficult-3-q1",
      wordId: "difficult-3-1",
      passage: "The clinical trial underwent such a ___ review process that even minor errors were caught before publication.",
      choices: [
        "assiduous",
        "canonical",
        "germane",
        "rigorous"
      ],
      correct: 3,
      explanation: "A review process thorough enough to catch minor errors describes rigor — 'rigorous' fits."
    },
    {
      id: "difficult-3-q2",
      wordId: "difficult-3-2",
      passage: "The survey sorted respondents' opinions into several ___ categories rather than one blended average.",
      choices: [
        "discrete",
        "germane",
        "fundamental",
        "exemplary"
      ],
      correct: 0,
      explanation: "Categories kept individually separate rather than blended describe being discrete — 'discrete' fits."
    },
    {
      id: "difficult-3-q3",
      wordId: "difficult-3-3",
      passage: "Her ___ argument avoided the oversimplified extremes that both sides of the debate kept falling into.",
      choices: [
        "paramount",
        "salient",
        "nuanced",
        "pertinent"
      ],
      correct: 2,
      explanation: "An argument avoiding both extremes describes subtlety of meaning — 'nuanced' fits."
    },
    {
      id: "difficult-3-q4",
      wordId: "difficult-3-4",
      passage: "The lab's second test finally gave a ___ answer to a question that had been debated for years.",
      choices: [
        "indispensable",
        "definitive",
        "exacting",
        "assiduous"
      ],
      correct: 1,
      explanation: "A test settling a years-long debate for good describes finality — 'definitive' fits."
    },
    {
      id: "difficult-3-q5",
      wordId: "difficult-3-5",
      passage: "The audit offered an ___ account of the company's finances, leaving no transaction unexamined.",
      choices: [
        "nuanced",
        "assiduous",
        "exhaustive",
        "fundamental"
      ],
      correct: 2,
      explanation: "An account leaving no transaction unexamined describes thoroughness and completeness — 'exhaustive' fits."
    },
    {
      id: "difficult-3-q6",
      wordId: "difficult-3-6",
      passage: "She made such a ___ case for revising the outdated policy that the board approved it unanimously.",
      choices: [
        "conscientious",
        "germane",
        "cogent",
        "canonical"
      ],
      correct: 2,
      explanation: "A case convincing enough to earn a unanimous vote describes clear, logical persuasiveness — 'cogent' fits."
    },
    {
      id: "difficult-3-q7",
      wordId: "difficult-3-7",
      passage: "The professor asked students to underline only the most ___ points, ignoring the essay's minor asides.",
      choices: [
        "rigorous",
        "salient",
        "canonical",
        "cogent"
      ],
      correct: 1,
      explanation: "Being asked to focus on the most noticeable, important points describes salience — 'salient' fits."
    },
    {
      id: "difficult-3-q8",
      wordId: "difficult-3-8",
      passage: "His comment, though interesting, simply wasn't ___ to the specific issue the committee was there to decide.",
      choices: [
        "punctilious",
        "definitive",
        "salient",
        "germane"
      ],
      correct: 3,
      explanation: "A comment interesting but off-topic describes lacking direct relevance — 'germane' fits."
    },
    {
      id: "difficult-3-q9",
      wordId: "difficult-3-9",
      passage: "She asked several ___ questions about the warranty before agreeing to sign the contract.",
      choices: [
        "seminal",
        "cogent",
        "pertinent",
        "salient"
      ],
      correct: 2,
      explanation: "Questions directly relevant to a decision before signing describe pertinence — 'pertinent' fits."
    },
    {
      id: "difficult-3-q10",
      wordId: "difficult-3-10",
      passage: "The small roadside diner, with its cracked vinyl booths and endless coffee, felt like the ___ American pit stop.",
      choices: [
        "quintessential",
        "fundamental",
        "canonical",
        "definitive"
      ],
      correct: 0,
      explanation: "A diner representing the perfect, most typical example of something describes it being quintessential — 'quintessential' fits."
    },
    {
      id: "difficult-3-q11",
      wordId: "difficult-3-11",
      passage: "Her ___ work ethic, praised in every review, earned her a promotion within the year.",
      choices: [
        "exemplary",
        "cardinal",
        "canonical",
        "exhaustive"
      ],
      correct: 0,
      explanation: "A work ethic praised as a model for others describes it being exemplary — 'exemplary' fits."
    },
    {
      id: "difficult-3-q12",
      wordId: "difficult-3-12",
      passage: "During the bridge's construction, worker safety was treated as ___, outweighing every other concern on the site.",
      choices: [
        "canonical",
        "paramount",
        "salient",
        "fundamental"
      ],
      correct: 1,
      explanation: "A concern outweighing everything else describes supreme importance — 'paramount' fits."
    },
    {
      id: "difficult-3-q13",
      wordId: "difficult-3-13",
      passage: "A reliable internet connection has quietly become ___ for anyone working remotely today.",
      choices: [
        "canonical",
        "indispensable",
        "nuanced",
        "germane"
      ],
      correct: 1,
      explanation: "Something now impossible to work without describes it being indispensable — 'indispensable' fits."
    },
    {
      id: "difficult-3-q14",
      wordId: "difficult-3-14",
      passage: "Trust turned out to be ___ to the long-term success of their business partnership.",
      choices: [
        "integral",
        "quintessential",
        "assiduous",
        "scrupulous"
      ],
      correct: 0,
      explanation: "Something necessary to make a partnership whole describes being integral to it — 'integral' fits."
    },
    {
      id: "difficult-3-q15",
      wordId: "difficult-3-15",
      passage: "Honesty remained a ___ value in their family, one that shaped nearly every other decision they made.",
      choices: [
        "germane",
        "definitive",
        "fundamental",
        "cardinal"
      ],
      correct: 2,
      explanation: "A value shaping nearly every decision describes it being a central, core principle — 'fundamental' fits."
    },
    {
      id: "difficult-3-q16",
      wordId: "difficult-3-16",
      passage: "Punctuality was treated as a ___ rule at the firm, one that new hires learned about on day one.",
      choices: [
        "quintessential",
        "cardinal",
        "exemplary",
        "punctilious"
      ],
      correct: 1,
      explanation: "A rule taught first, above nearly all others, describes it being of the greatest importance — 'cardinal' fits."
    },
    {
      id: "difficult-3-q17",
      wordId: "difficult-3-17",
      passage: "The 1953 paper turned out to be ___, shaping the entire direction of genetics research for decades afterward.",
      choices: [
        "cardinal",
        "exemplary",
        "assiduous",
        "seminal"
      ],
      correct: 3,
      explanation: "A paper that shapes an entire field for decades describes groundbreaking influence — 'seminal' fits."
    },
    {
      id: "difficult-3-q18",
      wordId: "difficult-3-18",
      passage: "The novel is now considered part of the ___ works taught in nearly every literature course on the era.",
      choices: [
        "nuanced",
        "exemplary",
        "canonical",
        "scrupulous"
      ],
      correct: 2,
      explanation: "Works taught as standard across courses describe being accepted as authoritative — 'canonical' fits."
    },
    {
      id: "difficult-3-q19",
      wordId: "difficult-3-19",
      passage: "The century-old encyclopedia remains, remarkably, the most ___ source on the subject available today.",
      choices: [
        "painstaking",
        "nuanced",
        "authoritative",
        "quintessential"
      ],
      correct: 2,
      explanation: "The most trusted, expert source available describes authoritativeness — 'authoritative' fits."
    },
    {
      id: "difficult-3-q20",
      wordId: "difficult-3-20",
      passage: "The accountant was so ___ about documenting every transaction that the audit found not a single missing receipt.",
      choices: [
        "fundamental",
        "pertinent",
        "scrupulous",
        "paramount"
      ],
      correct: 2,
      explanation: "Documentation thorough enough to leave nothing missing describes extreme carefulness — 'scrupulous' fits."
    },
    {
      id: "difficult-3-q21",
      wordId: "difficult-3-21",
      passage: "Her ___ approach to grading meant every single essay got real, individualized feedback, not just a letter grade.",
      choices: [
        "nuanced",
        "conscientious",
        "authoritative",
        "exhaustive"
      ],
      correct: 1,
      explanation: "Grading carefully enough to give real feedback on every essay describes conscientiousness — 'conscientious' fits."
    },
    {
      id: "difficult-3-q22",
      wordId: "difficult-3-22",
      passage: "Restoring the centuries-old mural required ___, months-long effort just to clean a single wall.",
      choices: [
        "germane",
        "cardinal",
        "assiduous",
        "painstaking"
      ],
      correct: 3,
      explanation: "Months-long effort just to clean one wall describes painstaking care — 'painstaking' fits."
    },
    {
      id: "difficult-3-q23",
      wordId: "difficult-3-23",
      passage: "His ___ note-taking, capturing every detail from every lecture, made him the group's most valuable study partner.",
      choices: [
        "definitive",
        "cogent",
        "painstaking",
        "assiduous"
      ],
      correct: 3,
      explanation: "Note-taking careful enough to capture every detail describes diligent perseverance — 'assiduous' fits."
    },
    {
      id: "difficult-3-q24",
      wordId: "difficult-3-24",
      passage: "The judge was famously ___ about courtroom procedure, correcting even the smallest breach of protocol.",
      choices: [
        "seminal",
        "exacting",
        "punctilious",
        "painstaking"
      ],
      correct: 2,
      explanation: "Correcting even the smallest procedural breach describes strict attention to detail and correctness — 'punctilious' fits."
    },
    {
      id: "difficult-3-q25",
      wordId: "difficult-3-25",
      passage: "The kitchen's ___ standards pushed even experienced cooks to improve dishes they'd made a hundred times before.",
      choices: [
        "authoritative",
        "integral",
        "exacting",
        "cogent"
      ],
      correct: 2,
      explanation: "Standards demanding enough to push experienced cooks describe being exacting — 'exacting' fits."
    }
  ],
  "difficult-4": [
    {
      id: "difficult-4-q1",
      wordId: "difficult-4-1",
      passage: "It can be genuinely hard to ___ identical twins at first glance, especially when they dress alike.",
      choices: [
        "equivocal",
        "idiosyncratic",
        "antithetical",
        "distinguish"
      ],
      correct: 3,
      explanation: "Struggling to tell apart two very similar things describes distinguishing them — 'distinguish' fits."
    },
    {
      id: "difficult-4-q2",
      wordId: "difficult-4-2",
      passage: "The course teaches students to ___ carefully between a stated fact and the writer's own opinion.",
      choices: [
        "incongruous",
        "congruent",
        "antithetical",
        "differentiate"
      ],
      correct: 3,
      explanation: "Learning to tell a fact from an opinion describes differentiating them — 'differentiate' fits."
    },
    {
      id: "difficult-4-q3",
      wordId: "difficult-4-3",
      passage: "A trained sommelier can ___ between two vintages of the same wine separated by just a single year.",
      choices: [
        "discrepancy",
        "discriminate",
        "parity",
        "disparity"
      ],
      correct: 1,
      explanation: "Telling apart very subtly different wines describes discriminating between them — 'discriminate' fits."
    },
    {
      id: "difficult-4-q4",
      wordId: "difficult-4-4",
      passage: "Auditors flagged a troubling ___ between what the two financial reports claimed for the same quarter.",
      choices: [
        "discrepancy",
        "antithetical",
        "implicit",
        "demarcate"
      ],
      correct: 0,
      explanation: "Two reports that should match but don't describe a discrepancy — 'discrepancy' fits."
    },
    {
      id: "difficult-4-q5",
      wordId: "difficult-4-5",
      passage: "The panel brought together ___ perspectives from across the industry, from engineers to marketing executives.",
      choices: [
        "disparate",
        "incongruous",
        "semantic",
        "differential"
      ],
      correct: 0,
      explanation: "Perspectives too different in kind to easily compare describe being disparate — 'disparate' fits."
    },
    {
      id: "difficult-4-q6",
      wordId: "difficult-4-6",
      passage: "Over the years, the two research paths grew increasingly ___, no longer overlapping at all.",
      choices: [
        "discriminate",
        "divergent",
        "incongruous",
        "analogous"
      ],
      correct: 1,
      explanation: "Paths that stop overlapping and pull apart describe developing divergently — 'divergent' fits."
    },
    {
      id: "difficult-4-q7",
      wordId: "difficult-4-7",
      passage: "The two unrelated fields experienced a rare ___ moment, arriving at the same discovery from opposite directions.",
      choices: [
        "discriminate",
        "connotation",
        "convergent",
        "implicit"
      ],
      correct: 2,
      explanation: "Two paths meeting despite starting from opposite directions describe convergence — 'convergent' fits."
    },
    {
      id: "difficult-4-q8",
      wordId: "difficult-4-8",
      passage: "Only after years of therapy did his actions finally become ___ with the values he'd always claimed to hold.",
      choices: [
        "demarcate",
        "congruent",
        "antithetical",
        "differential"
      ],
      correct: 1,
      explanation: "Actions finally matching stated values describe being in harmony — 'congruent' fits."
    },
    {
      id: "difficult-4-q9",
      wordId: "difficult-4-9",
      passage: "The bright graffiti mural looked jarringly ___ against the centuries-old stone church behind it.",
      choices: [
        "analogous",
        "incongruous",
        "denotation",
        "congruent"
      ],
      correct: 1,
      explanation: "Something clashing badly with its surroundings describes being incongruous — 'incongruous' fits."
    },
    {
      id: "difficult-4-q10",
      wordId: "difficult-4-10",
      passage: "His relaxed, joking attitude was almost entirely ___ to the formal, buttoned-up office culture around him.",
      choices: [
        "semantic",
        "disparity",
        "equivocal",
        "antithetical"
      ],
      correct: 3,
      explanation: "An attitude directly opposed to its surroundings describes being antithetical — 'antithetical' fits."
    },
    {
      id: "difficult-4-q11",
      wordId: "difficult-4-11",
      passage: "The exhibit ___s photographs of the same street corner taken fifty years apart, side by side.",
      choices: [
        "gradation",
        "juxtapose",
        "demarcate",
        "discriminate"
      ],
      correct: 1,
      explanation: "Placing two contrasting images side by side describes juxtaposing them — 'juxtapose' fits."
    },
    {
      id: "difficult-4-q12",
      wordId: "difficult-4-12",
      passage: "The human heart's pumping action is often described as ___ to that of a simple mechanical pump.",
      choices: [
        "analogous",
        "antithetical",
        "disparate",
        "discriminate"
      ],
      correct: 0,
      explanation: "One thing compared to another for a shared function describes an analogous relationship — 'analogous' fits."
    },
    {
      id: "difficult-4-q13",
      wordId: "difficult-4-13",
      passage: "For an entire generation of customers, the brand name had effectively become ___ with quality itself.",
      choices: [
        "differentiate",
        "demarcate",
        "parity",
        "synonymous"
      ],
      correct: 3,
      explanation: "A brand name meaning almost the same thing as another word describes synonymy — 'synonymous' fits."
    },
    {
      id: "difficult-4-q14",
      wordId: "difficult-4-14",
      passage: "The report highlighted a growing income ___ between the region's wealthiest and poorest neighborhoods.",
      choices: [
        "demarcate",
        "analogous",
        "disparate",
        "disparity"
      ],
      correct: 3,
      explanation: "A large gap between two groups describes a disparity — 'disparity' fits."
    },
    {
      id: "difficult-4-q15",
      wordId: "difficult-4-15",
      passage: "The new labor contract finally achieved pay ___ between two roles that had always paid unequally.",
      choices: [
        "differentiate",
        "parity",
        "distinguish",
        "juxtapose"
      ],
      correct: 1,
      explanation: "Two roles finally reaching equal pay describe achieving parity — 'parity' fits."
    },
    {
      id: "difficult-4-q16",
      wordId: "difficult-4-16",
      passage: "His deliberately ___ answer left both sides of the room convinced he actually agreed with them.",
      choices: [
        "semantic",
        "discrepancy",
        "disparate",
        "equivocal"
      ],
      correct: 3,
      explanation: "An answer both sides interpret as agreement describes it being open to multiple readings — 'equivocal' fits."
    },
    {
      id: "difficult-4-q17",
      wordId: "difficult-4-17",
      passage: "The word \"cheap\" carries a far more negative ___ than the gentler word \"affordable.\"",
      choices: [
        "idiosyncratic",
        "implicit",
        "gradation",
        "connotation"
      ],
      correct: 3,
      explanation: "The feeling a word carries beyond its literal meaning describes connotation — 'connotation' fits."
    },
    {
      id: "difficult-4-q18",
      wordId: "difficult-4-18",
      passage: "The strict dictionary ___ of \"home\" is simple, even though the word means something deeply personal to most people.",
      choices: [
        "synonymous",
        "denotation",
        "disparity",
        "gradation"
      ],
      correct: 1,
      explanation: "The literal, dictionary-only meaning of a word describes its denotation — 'denotation' fits."
    },
    {
      id: "difficult-4-q19",
      wordId: "difficult-4-19",
      passage: "There was an ___ understanding among the staff that unpaid overtime would eventually be compensated somehow.",
      choices: [
        "antithetical",
        "differential",
        "implicit",
        "denotation"
      ],
      correct: 2,
      explanation: "An understanding never actually spoken aloud describes something implicit — 'implicit' fits."
    },
    {
      id: "difficult-4-q20",
      wordId: "difficult-4-20",
      passage: "The two lawyers argued for an hour over a single ___ distinction buried in the contract's wording.",
      choices: [
        "discrepancy",
        "gradation",
        "disparity",
        "semantic"
      ],
      correct: 3,
      explanation: "A dispute over the precise meaning of wording describes a semantic issue — 'semantic' fits."
    },
    {
      id: "difficult-4-q21",
      wordId: "difficult-4-21",
      passage: "The surveyor's map clearly ___s the exact boundary separating the two neighboring counties.",
      choices: [
        "incongruous",
        "delineate",
        "disparate",
        "disparity"
      ],
      correct: 1,
      explanation: "A map precisely showing a boundary describes delineating it — 'delineate' fits."
    },
    {
      id: "difficult-4-q22",
      wordId: "difficult-4-22",
      passage: "A low stone wall had long ago been used to ___ the edge of the old property line.",
      choices: [
        "demarcate",
        "synonymous",
        "gradation",
        "discriminate"
      ],
      correct: 0,
      explanation: "A wall marking where a property begins and ends describes demarcating it — 'demarcate' fits."
    },
    {
      id: "difficult-4-q23",
      wordId: "difficult-4-23",
      passage: "Doctors ordered more tests as part of the ___ diagnosis, ruling out one possible illness at a time.",
      choices: [
        "divergent",
        "antithetical",
        "demarcate",
        "differential"
      ],
      correct: 3,
      explanation: "A diagnosis process of ruling out possibilities describes it being differential — 'differential' fits."
    },
    {
      id: "difficult-4-q24",
      wordId: "difficult-4-24",
      passage: "His ___ habit of numbering every sock he owned made him instantly recognizable to his roommates.",
      choices: [
        "equivocal",
        "idiosyncratic",
        "convergent",
        "antithetical"
      ],
      correct: 1,
      explanation: "A quirky habit unique to one particular person describes it being idiosyncratic — 'idiosyncratic' fits."
    },
    {
      id: "difficult-4-q25",
      wordId: "difficult-4-25",
      passage: "The paint chart displayed a smooth ___ running from the palest yellow to a deep, burnt orange.",
      choices: [
        "connotation",
        "demarcate",
        "gradation",
        "synonymous"
      ],
      correct: 2,
      explanation: "A smooth scale of stages between two extremes describes a gradation — 'gradation' fits."
    }
  ],
  "difficult-5": [
    {
      id: "difficult-5-q1",
      wordId: "difficult-5-1",
      passage: "The ___ review tore apart nearly every dish on the new restaurant's opening-night menu.",
      choices: [
        "vituperative",
        "pejorative",
        "scathing",
        "denunciation"
      ],
      correct: 2,
      explanation: "A review tearing apart nearly everything describes being harshly critical — 'scathing' fits."
    },
    {
      id: "difficult-5-q2",
      wordId: "difficult-5-2",
      passage: "The columnist went on to ___ the mayor's entire handling of the budget crisis in a single blistering piece.",
      choices: [
        "derogatory",
        "excoriate",
        "scathing",
        "denunciation"
      ],
      correct: 1,
      explanation: "A single blistering piece attacking an entire response describes severe criticism — 'excoriate' fits."
    },
    {
      id: "difficult-5-q3",
      wordId: "difficult-5-3",
      passage: "The senator was formally ___ by his own colleagues after misusing campaign donations for personal travel.",
      choices: [
        "deprecate",
        "malign",
        "censure",
        "tirade"
      ],
      correct: 2,
      explanation: "Being formally disciplined by one's own colleagues describes censure — 'censure' fits."
    },
    {
      id: "difficult-5-q4",
      wordId: "difficult-5-4",
      passage: "The report closed with a sharp ___ of the company's labor practices, naming names and dates.",
      choices: [
        "condemnation",
        "slander",
        "scathing",
        "denunciation"
      ],
      correct: 3,
      explanation: "A closing section publicly condemning specific practices describes a denunciation — 'denunciation' fits."
    },
    {
      id: "difficult-5-q5",
      wordId: "difficult-5-5",
      passage: "She spent the entire drive home silently ___ herself for not speaking up sooner at the meeting.",
      choices: [
        "reproach",
        "vituperative",
        "excoriate",
        "unflattering"
      ],
      correct: 0,
      explanation: "Blaming oneself internally after a missed chance describes self-reproach — 'reproach' fits."
    },
    {
      id: "difficult-5-q6",
      wordId: "difficult-5-6",
      passage: "The defense lawyer worked hard to ___ the witness's credibility during a tense cross-examination.",
      choices: [
        "impugn",
        "pejorative",
        "malign",
        "tirade"
      ],
      correct: 0,
      explanation: "Attacking the truthfulness of testimony describes impugning it — 'impugn' fits."
    },
    {
      id: "difficult-5-q7",
      wordId: "difficult-5-7",
      passage: "He has an odd habit of trying to ___ his own achievements the moment anyone brings them up.",
      choices: [
        "slander",
        "denunciation",
        "derogatory",
        "deprecate"
      ],
      correct: 3,
      explanation: "Downplaying one's own accomplishments describes deprecating them — 'deprecate' fits."
    },
    {
      id: "difficult-5-q8",
      wordId: "difficult-5-8",
      passage: "The comment was widely condemned online as needlessly ___ toward an entire group of people.",
      choices: [
        "calumny",
        "derogatory",
        "unflattering",
        "vituperative"
      ],
      correct: 1,
      explanation: "A comment condemned for disrespecting a group describes being derogatory — 'derogatory' fits."
    },
    {
      id: "difficult-5-q9",
      wordId: "difficult-5-9",
      passage: "The term, once completely neutral, has since taken on a distinctly ___ meaning in modern usage.",
      choices: [
        "damning",
        "invective",
        "pejorative",
        "impugn"
      ],
      correct: 2,
      explanation: "A word that gained a negative meaning over time describes it becoming pejorative — 'pejorative' fits."
    },
    {
      id: "difficult-5-q10",
      wordId: "difficult-5-10",
      passage: "The candid, ___ photo of the celebrity mid-sneeze went viral within a matter of hours.",
      choices: [
        "unflattering",
        "deprecate",
        "impugn",
        "lambaste"
      ],
      correct: 0,
      explanation: "A photo that doesn't flatter its subject describes being unflattering — 'unflattering' fits."
    },
    {
      id: "difficult-5-q11",
      wordId: "difficult-5-11",
      passage: "The leaked internal memo turned out to be ___ evidence against the company's public safety claims.",
      choices: [
        "slander",
        "damning",
        "pejorative",
        "defame"
      ],
      correct: 1,
      explanation: "Evidence strongly suggesting guilt describes being damning — 'damning' fits."
    },
    {
      id: "difficult-5-q12",
      wordId: "difficult-5-12",
      passage: "Critics treated the documentary as an ___ of the entire industry's failure to regulate itself.",
      choices: [
        "defame",
        "indict",
        "slander",
        "diatribe"
      ],
      correct: 1,
      explanation: "A film functioning as a broad accusation against an industry describes an indictment — 'indict' fits."
    },
    {
      id: "difficult-5-q13",
      wordId: "difficult-5-13",
      passage: "The speech quickly abandoned any real argument and dissolved into pure ___ against the opposing side.",
      choices: [
        "vituperative",
        "derogatory",
        "slander",
        "invective"
      ],
      correct: 3,
      explanation: "Abandoning argument for pure insult describes invective — 'invective' fits."
    },
    {
      id: "difficult-5-q14",
      wordId: "difficult-5-14",
      passage: "He launched into a ten-minute ___ about the referee's final, game-deciding call.",
      choices: [
        "excoriate",
        "tirade",
        "slander",
        "calumny"
      ],
      correct: 1,
      explanation: "A long, angry rant about one decision describes a tirade — 'tirade' fits."
    },
    {
      id: "difficult-5-q15",
      wordId: "difficult-5-15",
      passage: "Her weekly opinion column had drifted from thoughtful critique into a bitter ___ against modern technology.",
      choices: [
        "diatribe",
        "denigrate",
        "denunciation",
        "damning"
      ],
      correct: 0,
      explanation: "A column shifting from critique to bitter attack describes a diatribe — 'diatribe' fits."
    },
    {
      id: "difficult-5-q16",
      wordId: "difficult-5-16",
      passage: "Critics ___d the sequel for abandoning everything that had made the original film so beloved.",
      choices: [
        "pejorative",
        "condemnation",
        "deprecate",
        "lambaste"
      ],
      correct: 3,
      explanation: "Harsh criticism of a sequel's failures describes lambasting it — 'lambaste' fits."
    },
    {
      id: "difficult-5-q17",
      wordId: "difficult-5-17",
      passage: "The ___ comments beneath the article eventually drove the young author off social media entirely.",
      choices: [
        "unflattering",
        "vituperative",
        "reprove",
        "invective"
      ],
      correct: 1,
      explanation: "Comments harsh enough to drive someone off a platform describe them being bitterly abusive — 'vituperative' fits."
    },
    {
      id: "difficult-5-q18",
      wordId: "difficult-5-18",
      passage: "The military strike drew swift ___ from human rights groups around the world within hours.",
      choices: [
        "invective",
        "impugn",
        "reprove",
        "condemnation"
      ],
      correct: 3,
      explanation: "Strong disapproval expressed by groups worldwide describes condemnation — 'condemnation' fits."
    },
    {
      id: "difficult-5-q19",
      wordId: "difficult-5-19",
      passage: "The teacher gently ___d the student for arriving late a third time that week.",
      choices: [
        "vilify",
        "denunciation",
        "reprove",
        "indict"
      ],
      correct: 2,
      explanation: "Correcting a student gently for a repeated mistake describes reproving them — 'reprove' fits."
    },
    {
      id: "difficult-5-q20",
      wordId: "difficult-5-20",
      passage: "The tabloids had already begun to ___ the executive publicly, long before any charges were even filed.",
      choices: [
        "vilify",
        "calumny",
        "malign",
        "indict"
      ],
      correct: 0,
      explanation: "Being publicly attacked before formal charges describes being vilified — 'vilify' fits."
    },
    {
      id: "difficult-5-q21",
      wordId: "difficult-5-21",
      passage: "His opponent accused him of trying to ___ her entire voting record with cherry-picked statistics.",
      choices: [
        "denigrate",
        "indict",
        "excoriate",
        "impugn"
      ],
      correct: 0,
      explanation: "Unfairly attacking someone's reputation with selective facts describes denigrating them — 'denigrate' fits."
    },
    {
      id: "difficult-5-q22",
      wordId: "difficult-5-22",
      passage: "She felt the article had unfairly ___d her years of careful research with a single dismissive line.",
      choices: [
        "slander",
        "impugn",
        "damning",
        "malign"
      ],
      correct: 3,
      explanation: "A single dismissive line unfairly harming someone's reputation describes maligning them — 'malign' fits."
    },
    {
      id: "difficult-5-q23",
      wordId: "difficult-5-23",
      passage: "He threatened to sue the local paper for ___ after they printed a completely false accusation.",
      choices: [
        "pejorative",
        "vilify",
        "reproach",
        "slander"
      ],
      correct: 3,
      explanation: "A false spoken statement damaging someone's reputation describes slander — 'slander' fits."
    },
    {
      id: "difficult-5-q24",
      wordId: "difficult-5-24",
      passage: "The company filed suit against the anonymous blogger for attempting to ___ its founder's reputation.",
      choices: [
        "calumny",
        "pejorative",
        "defame",
        "diatribe"
      ],
      correct: 2,
      explanation: "Damaging someone's reputation through false published statements describes defaming them — 'defame' fits."
    },
    {
      id: "difficult-5-q25",
      wordId: "difficult-5-25",
      passage: "The politician brushed off the accusations entirely, dismissing them as nothing more than baseless ___.",
      choices: [
        "lambaste",
        "calumny",
        "deprecate",
        "excoriate"
      ],
      correct: 1,
      explanation: "False accusations meant purely to damage reputation describe calumny — 'calumny' fits."
    }
  ],
  "difficult-6": [
    {
      id: "difficult-6-q1",
      wordId: "difficult-6-1",
      passage: "His completely ___ expression gave away absolutely nothing about which way the decision had gone.",
      choices: [
        "sanctimonious",
        "intransigent",
        "inscrutable",
        "cantankerous"
      ],
      correct: 2,
      explanation: "An expression revealing nothing at all describes being impossible to read — 'inscrutable' fits."
    },
    {
      id: "difficult-6-q2",
      wordId: "difficult-6-2",
      passage: "The ___ old farmer answered every single question from the reporter with just one flat word.",
      choices: [
        "phlegmatic",
        "avuncular",
        "taciturn",
        "fastidious"
      ],
      correct: 2,
      explanation: "Answering every question with one word describes extreme reservedness — 'taciturn' fits."
    },
    {
      id: "difficult-6-q3",
      wordId: "difficult-6-3",
      passage: "Her strangely ___ reaction to the devastating news surprised everyone who expected her to break down.",
      choices: [
        "recalcitrant",
        "phlegmatic",
        "avuncular",
        "reclusive"
      ],
      correct: 1,
      explanation: "A calm reaction where emotion was expected describes being unmoved — 'phlegmatic' fits."
    },
    {
      id: "difficult-6-q4",
      wordId: "difficult-6-4",
      passage: "The ___ manager was infamous for slamming his office door shut after nearly every single meeting.",
      choices: [
        "inscrutable",
        "inveterate",
        "self-effacing",
        "choleric"
      ],
      correct: 3,
      explanation: "Someone who slams doors after most meetings describes a short, bad temper — 'choleric' fits."
    },
    {
      id: "difficult-6-q5",
      wordId: "difficult-6-5",
      passage: "Working for the ___ director meant never knowing which version of him would show up on set that day.",
      choices: [
        "choleric",
        "misanthropic",
        "garrulous",
        "mercurial"
      ],
      correct: 3,
      explanation: "Never knowing which mood someone will be in describes unpredictable temperament — 'mercurial' fits."
    },
    {
      id: "difficult-6-q6",
      wordId: "difficult-6-6",
      passage: "The ___ editor rejected an entire draft over a single misplaced comma on page one.",
      choices: [
        "ostentatious",
        "recalcitrant",
        "cantankerous",
        "fastidious"
      ],
      correct: 3,
      explanation: "Rejecting a whole draft over one small error describes extreme attentiveness paired with being hard to please — 'fastidious' fits."
    },
    {
      id: "difficult-6-q7",
      wordId: "difficult-6-7",
      passage: "The ___ committee flatly refused to adopt a single one of the reforms proposed to it.",
      choices: [
        "unassuming",
        "recalcitrant",
        "affable",
        "avuncular"
      ],
      correct: 1,
      explanation: "Refusing every proposed change without exception describes stubborn resistance to authority — 'recalcitrant' fits."
    },
    {
      id: "difficult-6-q8",
      wordId: "difficult-6-8",
      passage: "Both sides remained completely ___, and by evening the peace talks had collapsed entirely.",
      choices: [
        "intransigent",
        "fastidious",
        "affable",
        "misanthropic"
      ],
      correct: 0,
      explanation: "Both sides refusing to budge, ending talks in collapse, describe unwillingness to compromise — 'intransigent' fits."
    },
    {
      id: "difficult-6-q9",
      wordId: "difficult-6-9",
      passage: "Her ___ energy kept the volunteers hauling supplies long after everyone else had gone home exhausted.",
      choices: [
        "cantankerous",
        "incorrigible",
        "indefatigable",
        "mercurial"
      ],
      correct: 2,
      explanation: "Energy that outlasts everyone else's describes tireless persistence — 'indefatigable' fits."
    },
    {
      id: "difficult-6-q10",
      wordId: "difficult-6-10",
      passage: "He was an ___ collector, filling three storage units with anything even remotely train-related.",
      choices: [
        "inveterate",
        "misanthropic",
        "reclusive",
        "avuncular"
      ],
      correct: 0,
      explanation: "A collecting habit deep and long-established enough to fill storage units describes it being inveterate — 'inveterate' fits."
    },
    {
      id: "difficult-6-q11",
      wordId: "difficult-6-11",
      passage: "The school's most ___ prankster somehow never once got caught in four full years.",
      choices: [
        "inveterate",
        "incorrigible",
        "pretentious",
        "taciturn"
      ],
      correct: 1,
      explanation: "A prankster who is never reformed and never caught describes being incorrigible — 'incorrigible' fits."
    },
    {
      id: "difficult-6-q12",
      wordId: "difficult-6-12",
      passage: "Despite his growing fame, he stayed remarkably ___, easy to talk to and never once name-dropping.",
      choices: [
        "incorrigible",
        "self-effacing",
        "unassuming",
        "choleric"
      ],
      correct: 2,
      explanation: "Staying easy to talk to despite fame describes being modest, not arrogant — 'unassuming' fits."
    },
    {
      id: "difficult-6-q13",
      wordId: "difficult-6-13",
      passage: "Her ___ humor about her own mistakes made her instantly likable to every new coworker she met.",
      choices: [
        "reclusive",
        "self-effacing",
        "affable",
        "intransigent"
      ],
      correct: 1,
      explanation: "Joking about her own flaws rather than seeking praise describes modesty in self-presentation — 'self-effacing' fits."
    },
    {
      id: "difficult-6-q14",
      wordId: "difficult-6-14",
      passage: "The ___ mansion had gold fixtures in nearly every single room, clearly built to impress visitors.",
      choices: [
        "ostentatious",
        "inveterate",
        "querulous",
        "intransigent"
      ],
      correct: 0,
      explanation: "A house built with gold fixtures purely to impress describes it being showy — 'ostentatious' fits."
    },
    {
      id: "difficult-6-q15",
      wordId: "difficult-6-15",
      passage: "Critics found the film's dialogue overly ___, as if it were trying too hard to sound profound.",
      choices: [
        "mercurial",
        "pretentious",
        "avuncular",
        "magnanimous"
      ],
      correct: 1,
      explanation: "Dialogue trying too hard to sound impressive describes it being pretentious — 'pretentious' fits."
    },
    {
      id: "difficult-6-q16",
      wordId: "difficult-6-16",
      passage: "His ___ lecture on honesty rang hollow the moment reporters uncovered his own past scandal.",
      choices: [
        "avuncular",
        "ostentatious",
        "sanctimonious",
        "taciturn"
      ],
      correct: 2,
      explanation: "A moral lecture undercut by hypocrisy describes it being self-righteously superior — 'sanctimonious' fits."
    },
    {
      id: "difficult-6-q17",
      wordId: "difficult-6-17",
      passage: "The ___ old neighbor complained loudly about every single car parked anywhere near his property line.",
      choices: [
        "querulous",
        "intransigent",
        "cantankerous",
        "avuncular"
      ],
      correct: 2,
      explanation: "Complaining loudly about every minor issue describes being bad-tempered and argumentative — 'cantankerous' fits."
    },
    {
      id: "difficult-6-q18",
      wordId: "difficult-6-18",
      passage: "The ___ cab driver talked nonstop for the entire forty-minute ride, never once pausing for breath.",
      choices: [
        "avuncular",
        "garrulous",
        "magnanimous",
        "pretentious"
      ],
      correct: 1,
      explanation: "Talking nonstop for forty straight minutes describes excessive talkativeness — 'garrulous' fits."
    },
    {
      id: "difficult-6-q19",
      wordId: "difficult-6-19",
      passage: "Normally so ___, he went completely silent the moment the doctor delivered the diagnosis.",
      choices: [
        "incorrigible",
        "loquacious",
        "pretentious",
        "inscrutable"
      ],
      correct: 1,
      explanation: "Someone usually very talkative going suddenly silent describes a contrast with typical loquaciousness — 'loquacious' fits."
    },
    {
      id: "difficult-6-q20",
      wordId: "difficult-6-20",
      passage: "The famously ___ author hadn't given a single public interview in over a decade.",
      choices: [
        "loquacious",
        "querulous",
        "unassuming",
        "reclusive"
      ],
      correct: 3,
      explanation: "Avoiding public interviews for over a decade describes a preference for solitude — 'reclusive' fits."
    },
    {
      id: "difficult-6-q21",
      wordId: "difficult-6-21",
      passage: "His deeply ___ outlook made even brief small talk with coworkers feel like a genuine chore.",
      choices: [
        "misanthropic",
        "intransigent",
        "inveterate",
        "garrulous"
      ],
      correct: 0,
      explanation: "Finding small talk with people a genuine chore describes disliking human company — 'misanthropic' fits."
    },
    {
      id: "difficult-6-q22",
      wordId: "difficult-6-22",
      passage: "The champion was remarkably ___ in victory, praising every single opponent she had defeated by name.",
      choices: [
        "magnanimous",
        "reclusive",
        "fastidious",
        "indefatigable"
      ],
      correct: 0,
      explanation: "Praising every opponent after winning describes gracious generosity in victory — 'magnanimous' fits."
    },
    {
      id: "difficult-6-q23",
      wordId: "difficult-6-23",
      passage: "The ___ professor always seemed to have a spare hour for any student who was struggling.",
      choices: [
        "loquacious",
        "cantankerous",
        "reclusive",
        "avuncular"
      ],
      correct: 3,
      explanation: "Always having time for a struggling student describes warm, uncle-like kindness — 'avuncular' fits."
    },
    {
      id: "difficult-6-q24",
      wordId: "difficult-6-24",
      passage: "The ___ shopkeeper greeted nearly every customer who walked in by their first name.",
      choices: [
        "loquacious",
        "recalcitrant",
        "affable",
        "reclusive"
      ],
      correct: 2,
      explanation: "Greeting customers by name describes being easy and pleasant to talk to — 'affable' fits."
    },
    {
      id: "difficult-6-q25",
      wordId: "difficult-6-25",
      passage: "The ___ passenger complained about every minor delay, from the boarding line to the in-flight snack options.",
      choices: [
        "avuncular",
        "phlegmatic",
        "intransigent",
        "querulous"
      ],
      correct: 3,
      explanation: "Complaining about every minor inconvenience describes petulant whining — 'querulous' fits."
    }
  ],
  "difficult-7": [
    {
      id: "difficult-7-q1",
      wordId: "difficult-7-1",
      passage: "The river turned completely ___ after three straight days of heavy rain stirred up the sediment below.",
      choices: [
        "recondite",
        "byzantine",
        "occlude",
        "turbid"
      ],
      correct: 3,
      explanation: "A river clouded by stirred-up sediment describes being turbid — 'turbid' fits."
    },
    {
      id: "difficult-7-q2",
      wordId: "difficult-7-2",
      passage: "Getting a simple construction permit required navigating a ___ maze of overlapping city departments.",
      choices: [
        "diffuse",
        "digressive",
        "confounding",
        "byzantine"
      ],
      correct: 3,
      explanation: "A permit process involving a tangled maze of departments describes it being byzantine — 'byzantine' fits."
    },
    {
      id: "difficult-7-q3",
      wordId: "difficult-7-3",
      passage: "The novel's ___ plot demanded a second full reading before all its threads finally made sense.",
      choices: [
        "turgid",
        "impervious",
        "confounding",
        "labyrinthine"
      ],
      correct: 3,
      explanation: "A plot requiring a second reading to follow describes it being maze-like and confusing — 'labyrinthine' fits."
    },
    {
      id: "difficult-7-q4",
      wordId: "difficult-7-4",
      passage: "The legal document was written in language so ___ that even the lawyers needed a glossary.",
      choices: [
        "impenetrable",
        "confounding",
        "occlude",
        "turbid"
      ],
      correct: 0,
      explanation: "Legal language requiring a glossary even for lawyers describes it being nearly impossible to understand — 'impenetrable' fits."
    },
    {
      id: "difficult-7-q5",
      wordId: "difficult-7-5",
      passage: "The centuries-old board game's rules felt hopelessly ___ to anyone who hadn't grown up playing it.",
      choices: [
        "circuitous",
        "arcane",
        "occlude",
        "prolix"
      ],
      correct: 1,
      explanation: "Rules understood only by insiders describe being obscure and mysterious — 'arcane' fits."
    },
    {
      id: "difficult-7-q6",
      wordId: "difficult-7-6",
      passage: "The graduate lecture was so full of ___ references that most of the undergraduates in the room were lost within minutes.",
      choices: [
        "impenetrable",
        "esoteric",
        "turbid",
        "diffuse"
      ],
      correct: 1,
      explanation: "References understood only by a small specialized group describe them being esoteric — 'esoteric' fits."
    },
    {
      id: "difficult-7-q7",
      wordId: "difficult-7-7",
      passage: "His ___ theory took even fellow physicists weeks of careful reading just to begin unpacking.",
      choices: [
        "obfuscate",
        "byzantine",
        "abstruse",
        "impenetrable"
      ],
      correct: 2,
      explanation: "A theory that takes experts weeks to unpack describes being difficult to understand — 'abstruse' fits."
    },
    {
      id: "difficult-7-q8",
      wordId: "difficult-7-8",
      passage: "The professor's ___ footnotes assumed a level of background knowledge only a graduate student would have.",
      choices: [
        "recondite",
        "obfuscate",
        "circuitous",
        "unfathomable"
      ],
      correct: 0,
      explanation: "Footnotes assuming graduate-level background describe being little known outside specialists — 'recondite' fits."
    },
    {
      id: "difficult-7-q9",
      wordId: "difficult-7-9",
      passage: "The short story's ___ prose, dense with unnecessary description, made a ten-page tale feel like fifty.",
      choices: [
        "perplexity",
        "turgid",
        "amorphous",
        "occlude"
      ],
      correct: 1,
      explanation: "Prose so overloaded it makes a short story feel long describes it being swollen and pompous — 'turgid' fits."
    },
    {
      id: "difficult-7-q10",
      wordId: "difficult-7-10",
      passage: "His ___ introduction pushed back the actual point of the presentation by a full ten minutes.",
      choices: [
        "circuitous",
        "prolix",
        "esoteric",
        "perplexity"
      ],
      correct: 1,
      explanation: "An introduction that delays the main point by ten minutes describes excessive wordiness — 'prolix' fits."
    },
    {
      id: "difficult-7-q11",
      wordId: "difficult-7-11",
      passage: "They took a ___ route through side streets just to avoid the highway construction downtown.",
      choices: [
        "confounding",
        "circuitous",
        "abstruse",
        "unfathomable"
      ],
      correct: 1,
      explanation: "A route deliberately longer and less direct describes it being circuitous — 'circuitous' fits."
    },
    {
      id: "difficult-7-q12",
      wordId: "difficult-7-12",
      passage: "His ___ comments about his weekend plans kept dragging the entire meeting off its original topic.",
      choices: [
        "indeterminate",
        "turbid",
        "arcane",
        "tangential"
      ],
      correct: 3,
      explanation: "Comments only loosely related to the main topic describe them being tangential — 'tangential' fits."
    },
    {
      id: "difficult-7-q13",
      wordId: "difficult-7-13",
      passage: "The professor's famously ___ lectures wandered so far from the syllabus that class often ran past the bell.",
      choices: [
        "circuitous",
        "tangential",
        "diffuse",
        "digressive"
      ],
      correct: 3,
      explanation: "Lectures that wander repeatedly off-topic describe them being digressive — 'digressive' fits."
    },
    {
      id: "difficult-7-q14",
      wordId: "difficult-7-14",
      passage: "Rather than answering directly, the company's lawyers seemed determined to ___ every simple question they were asked.",
      choices: [
        "obfuscate",
        "indeterminate",
        "prolix",
        "circuitous"
      ],
      correct: 0,
      explanation: "Deliberately making a simple question harder to answer describes obfuscating it — 'obfuscate' fits."
    },
    {
      id: "difficult-7-q15",
      wordId: "difficult-7-15",
      passage: "Thick storm clouds completely ___d any view of the eclipse that the whole town had gathered to see.",
      choices: [
        "recondite",
        "occlude",
        "diffuse",
        "labyrinthine"
      ],
      correct: 1,
      explanation: "Clouds blocking a view everyone gathered for describe occluding it — 'occlude' fits."
    },
    {
      id: "difficult-7-q16",
      wordId: "difficult-7-16",
      passage: "Despite months of investigation, the exact cause of the warehouse fire remained officially ___.",
      choices: [
        "impenetrable",
        "indeterminate",
        "diffuse",
        "labyrinthine"
      ],
      correct: 1,
      explanation: "A cause never pinned down despite investigation describes it being indeterminate — 'indeterminate' fits."
    },
    {
      id: "difficult-7-q17",
      wordId: "difficult-7-17",
      passage: "The group's stated goals stayed frustratingly ___ well into their second full planning meeting.",
      choices: [
        "labyrinthine",
        "confounding",
        "amorphous",
        "byzantine"
      ],
      correct: 2,
      explanation: "Goals with no clear shape even after a second meeting describe them being amorphous — 'amorphous' fits."
    },
    {
      id: "difficult-7-q18",
      wordId: "difficult-7-18",
      passage: "The essay's central argument felt ___, touching lightly on far too many separate ideas at once.",
      choices: [
        "diffuse",
        "indistinguishable",
        "arcane",
        "digressive"
      ],
      correct: 0,
      explanation: "An argument spread thin across too many ideas describes it being diffuse — 'diffuse' fits."
    },
    {
      id: "difficult-7-q19",
      wordId: "difficult-7-19",
      passage: "Her ___ only grew as each new clue in the case seemed to contradict the last.",
      choices: [
        "confounding",
        "perplexity",
        "tangential",
        "indeterminate"
      ],
      correct: 1,
      explanation: "Confusion growing with each contradictory clue describes rising perplexity — 'perplexity' fits."
    },
    {
      id: "difficult-7-q20",
      wordId: "difficult-7-20",
      passage: "From a distance, the two nearly identical office towers were almost entirely ___.",
      choices: [
        "abstruse",
        "byzantine",
        "digressive",
        "indistinguishable"
      ],
      correct: 3,
      explanation: "Two buildings impossible to tell apart from far away describe being indistinguishable — 'indistinguishable' fits."
    },
    {
      id: "difficult-7-q21",
      wordId: "difficult-7-21",
      passage: "The sheer scale of the ancient ruins felt almost ___ once they finally stood at the base of them.",
      choices: [
        "diffuse",
        "unfathomable",
        "digressive",
        "inexplicable"
      ],
      correct: 1,
      explanation: "A scale so vast it resists comprehension describes it being unfathomable — 'unfathomable' fits."
    },
    {
      id: "difficult-7-q22",
      wordId: "difficult-7-22",
      passage: "Her sudden shift in mood, with no clear trigger at all, seemed completely ___ to her worried roommate.",
      choices: [
        "inexplicable",
        "recondite",
        "indeterminate",
        "arcane"
      ],
      correct: 0,
      explanation: "A mood shift with no visible cause describes it being inexplicable — 'inexplicable' fits."
    },
    {
      id: "difficult-7-q23",
      wordId: "difficult-7-23",
      passage: "A clear, satisfying answer to the mystery remained frustratingly ___, always just out of reach.",
      choices: [
        "elusive",
        "recondite",
        "diffuse",
        "occlude"
      ],
      correct: 0,
      explanation: "An answer that stays just out of reach describes being elusive — 'elusive' fits."
    },
    {
      id: "difficult-7-q24",
      wordId: "difficult-7-24",
      passage: "The lab results proved thoroughly ___, contradicting nearly every earlier study on the same question.",
      choices: [
        "indistinguishable",
        "turbid",
        "prolix",
        "confounding"
      ],
      correct: 3,
      explanation: "Results that contradict past studies describe them being bewildering — 'confounding' fits."
    },
    {
      id: "difficult-7-q25",
      wordId: "difficult-7-25",
      passage: "No matter how harsh the online criticism became, he remained entirely ___ to it.",
      choices: [
        "confounding",
        "obfuscate",
        "impervious",
        "esoteric"
      ],
      correct: 2,
      explanation: "Staying unaffected no matter how harsh criticism gets describes being impervious — 'impervious' fits."
    }
  ],
  "difficult-8": [
    {
      id: "difficult-8-q1",
      wordId: "difficult-8-1",
      passage: "The memoir left a genuinely ___ mark on how she came to view her own complicated family history.",
      choices: [
        "chicanery",
        "veneer",
        "profound",
        "benign"
      ],
      correct: 2,
      explanation: "A book affecting how someone views their whole family history describes a deep, profound impact — 'profound' fits."
    },
    {
      id: "difficult-8-q2",
      wordId: "difficult-8-2",
      passage: "Torn between two strong job offers, he found himself in a real ___ over which one to accept.",
      choices: [
        "quandary",
        "furtive",
        "conundrum",
        "duplicity"
      ],
      correct: 0,
      explanation: "Being torn between two good options describes being in a quandary — 'quandary' fits."
    },
    {
      id: "difficult-8-q3",
      wordId: "difficult-8-3",
      passage: "Balancing quality against cost remained a constant ___ for the small team throughout the entire project.",
      choices: [
        "clandestine",
        "veneer",
        "conundrum",
        "quandary"
      ],
      correct: 2,
      explanation: "An ongoing, difficult tension without an easy fix describes a conundrum — 'conundrum' fits."
    },
    {
      id: "difficult-8-q4",
      wordId: "difficult-8-4",
      passage: "The ___ reason given for the meeting was budgeting, though the layoffs that followed suggested otherwise.",
      choices: [
        "ostensible",
        "duplicity",
        "machinations",
        "malevolent"
      ],
      correct: 0,
      explanation: "A stated reason that turns out to hide the truth describes being merely ostensible — 'ostensible' fits."
    },
    {
      id: "difficult-8-q5",
      wordId: "difficult-8-5",
      passage: "Behind the polished ___ of company teamwork, tension between departments simmered constantly.",
      choices: [
        "salubrious",
        "veneer",
        "quandary",
        "pernicious"
      ],
      correct: 1,
      explanation: "A pleasant surface hiding real tension underneath describes a veneer — 'veneer' fits."
    },
    {
      id: "difficult-8-q6",
      wordId: "difficult-8-6",
      passage: "Her cheerful public ___ hid just how exhausted she actually felt after the long week.",
      choices: [
        "subterfuge",
        "salubrious",
        "facade",
        "clandestine"
      ],
      correct: 2,
      explanation: "A cheerful appearance concealing real exhaustion describes a facade — 'facade' fits."
    },
    {
      id: "difficult-8-q7",
      wordId: "difficult-8-7",
      passage: "He called under the ___ of simply checking in, though everyone suspected he wanted a favor.",
      choices: [
        "duplicity",
        "salubrious",
        "pretense",
        "malevolent"
      ],
      correct: 2,
      explanation: "A phone call disguised as something innocent describes it being made under a pretense — 'pretense' fits."
    },
    {
      id: "difficult-8-q8",
      wordId: "difficult-8-8",
      passage: "The magician's entire act relied on clever ___ and split-second misdirection rather than actual magic.",
      choices: [
        "pernicious",
        "artifice",
        "clandestine",
        "subterfuge"
      ],
      correct: 1,
      explanation: "Trickery used to deceive an audience describes artifice — 'artifice' fits."
    },
    {
      id: "difficult-8-q9",
      wordId: "difficult-8-9",
      passage: "The undercover agent used every trick of ___ available to slip past the building's security unnoticed.",
      choices: [
        "innocuous",
        "deleterious",
        "subterfuge",
        "salubrious"
      ],
      correct: 2,
      explanation: "Deceptive tricks used to reach a hidden goal describe subterfuge — 'subterfuge' fits."
    },
    {
      id: "difficult-8-q10",
      wordId: "difficult-8-10",
      passage: "Investigators eventually uncovered years of quiet financial ___ hidden behind the firm's polished annual reports.",
      choices: [
        "surreptitious",
        "quandary",
        "furtive",
        "chicanery"
      ],
      correct: 3,
      explanation: "Trickery used for financial gain, hidden behind reports, describes chicanery — 'chicanery' fits."
    },
    {
      id: "difficult-8-q11",
      wordId: "difficult-8-11",
      passage: "His ___ became obvious the moment investigators noticed the two contracts didn't match at all.",
      choices: [
        "artifice",
        "subterfuge",
        "duplicity",
        "pretense"
      ],
      correct: 2,
      explanation: "Saying one thing while doing another, exposed by mismatched contracts, describes duplicity — 'duplicity' fits."
    },
    {
      id: "difficult-8-q12",
      wordId: "difficult-8-12",
      passage: "The historical novel follows the tangled political ___ of a royal court obsessed with succession.",
      choices: [
        "pernicious",
        "artifice",
        "ostensible",
        "machinations"
      ],
      correct: 3,
      explanation: "Secret plots surrounding a royal court describe machinations — 'machinations' fits."
    },
    {
      id: "difficult-8-q13",
      wordId: "difficult-8-13",
      passage: "They arranged a ___ meeting far from the office, careful that no one from work would see them.",
      choices: [
        "clandestine",
        "facade",
        "quandary",
        "profound"
      ],
      correct: 0,
      explanation: "A meeting kept deliberately secret and hidden describes it being clandestine — 'clandestine' fits."
    },
    {
      id: "difficult-8-q14",
      wordId: "difficult-8-14",
      passage: "She took a ___ glance at her phone under the desk, hoping the professor wouldn't notice.",
      choices: [
        "innocuous",
        "surreptitious",
        "insidious",
        "nefarious"
      ],
      correct: 1,
      explanation: "Checking a phone secretly, hoping not to be caught, describes it being surreptitious — 'surreptitious' fits."
    },
    {
      id: "difficult-8-q15",
      wordId: "difficult-8-15",
      passage: "The intelligence agency ran a fully ___ operation for nearly two years before it was ever publicly acknowledged.",
      choices: [
        "duplicity",
        "machinations",
        "conundrum",
        "covert"
      ],
      correct: 3,
      explanation: "An operation kept unacknowledged for years describes it being covert — 'covert' fits."
    },
    {
      id: "difficult-8-q16",
      wordId: "difficult-8-16",
      passage: "He gave a ___ look over his shoulder before finally lowering his voice to speak.",
      choices: [
        "deleterious",
        "furtive",
        "facade",
        "conundrum"
      ],
      correct: 1,
      explanation: "A cautious glance meant to avoid being noticed describes it being furtive — 'furtive' fits."
    },
    {
      id: "difficult-8-q17",
      wordId: "difficult-8-17",
      passage: "The ___ spread of the false rumor was hard to counter precisely because no one noticed it happening.",
      choices: [
        "insidious",
        "duplicity",
        "furtive",
        "benign"
      ],
      correct: 0,
      explanation: "A rumor spreading unnoticed until real damage is done describes it being insidious — 'insidious' fits."
    },
    {
      id: "difficult-8-q18",
      wordId: "difficult-8-18",
      passage: "The film's villain quietly hatches a ___ plot to seize control of the entire company from the inside.",
      choices: [
        "ostensible",
        "artifice",
        "insidious",
        "nefarious"
      ],
      correct: 3,
      explanation: "A wicked plot to seize control describes it being nefarious — 'nefarious' fits."
    },
    {
      id: "difficult-8-q19",
      wordId: "difficult-8-19",
      passage: "The story's narrator slowly reveals himself to be far more ___ than his charming introduction suggested.",
      choices: [
        "benign",
        "nefarious",
        "malevolent",
        "insidious"
      ],
      correct: 2,
      explanation: "A narrator hiding evil intentions behind charm describes him being malevolent — 'malevolent' fits."
    },
    {
      id: "difficult-8-q20",
      wordId: "difficult-8-20",
      passage: "Everyone braced for bad news, but the biopsy thankfully confirmed the growth was entirely ___.",
      choices: [
        "facade",
        "benign",
        "innocuous",
        "quandary"
      ],
      correct: 1,
      explanation: "A growth confirmed not to be dangerous describes it being benign — 'benign' fits."
    },
    {
      id: "difficult-8-q21",
      wordId: "difficult-8-21",
      passage: "What seemed like a completely ___ comment at the dinner table somehow upset her for the rest of the night.",
      choices: [
        "ostensible",
        "subterfuge",
        "profound",
        "innocuous"
      ],
      correct: 3,
      explanation: "A seemingly harmless comment that still causes real upset describes it being innocuous — 'innocuous' fits."
    },
    {
      id: "difficult-8-q22",
      wordId: "difficult-8-22",
      passage: "They moved to the coast specifically for its ___ sea air, hoping it would ease his breathing troubles.",
      choices: [
        "innocuous",
        "salubrious",
        "malevolent",
        "clandestine"
      ],
      correct: 1,
      explanation: "Air sought out for its healthful benefits describes it being salubrious — 'salubrious' fits."
    },
    {
      id: "difficult-8-q23",
      wordId: "difficult-8-23",
      passage: "Years of exposure to the untreated runoff had a clearly ___ effect on the town's drinking water.",
      choices: [
        "quandary",
        "deleterious",
        "subterfuge",
        "pernicious"
      ],
      correct: 1,
      explanation: "Runoff causing measurable long-term harm describes it being deleterious — 'deleterious' fits."
    },
    {
      id: "difficult-8-q24",
      wordId: "difficult-8-24",
      passage: "The ___ rumor spread so quietly through the office that no one noticed the damage until morale had already collapsed.",
      choices: [
        "pernicious",
        "clandestine",
        "covert",
        "gratuitous"
      ],
      correct: 0,
      explanation: "A rumor causing gradual, unnoticed harm describes it being pernicious — 'pernicious' fits."
    },
    {
      id: "difficult-8-q25",
      wordId: "difficult-8-25",
      passage: "Critics called the film's final battle scene needlessly ___, adding nothing to a story that had already ended.",
      choices: [
        "salubrious",
        "deleterious",
        "quandary",
        "gratuitous"
      ],
      correct: 3,
      explanation: "Violence added without serving the story describes it being gratuitous — 'gratuitous' fits."
    }
  ],
  "easy-9": [
    {
      id: "easy-9-q1",
      wordId: "easy-9-1",
      passage: "She had come to ___ the smell of the chemical plant after living next to it for years.",
      choices: [
        "anecdote",
        "agnostic",
        "abhor",
        "accord"
      ],
      correct: 2,
      explanation: "Coming to hate a smell after prolonged exposure describes abhorring it — 'abhor' fits."
    },
    {
      id: "easy-9-q2",
      wordId: "easy-9-2",
      passage: "He couldn't ___ the constant noise from the construction site, so he finally called the city.",
      choices: [
        "agnostic",
        "agriculture",
        "anguish",
        "abide"
      ],
      correct: 3,
      explanation: "Reaching a breaking point with noise, prompting a complaint, describes an inability to tolerate it — 'abide' fits."
    },
    {
      id: "easy-9-q3",
      wordId: "easy-9-3",
      passage: "The museum's new wing was designed to be fully ___ to visitors using wheelchairs.",
      choices: [
        "alleviate",
        "abide",
        "accessible",
        "aerial"
      ],
      correct: 2,
      explanation: "A design goal focused on visitors with mobility needs describes ease of reach — 'accessible' fits."
    },
    {
      id: "easy-9-q4",
      wordId: "easy-9-4",
      passage: "The young violinist received widespread ___ after her debut performance at the concert hall.",
      choices: [
        "acclaim",
        "alleviate",
        "abide",
        "adept"
      ],
      correct: 0,
      explanation: "Widespread public praise after a performance describes acclaim — 'acclaim' fits."
    },
    {
      id: "easy-9-q5",
      wordId: "easy-9-5",
      passage: "The ___ hotel staff moved their reservation without charging a fee.",
      choices: [
        "anecdote",
        "agnostic",
        "abide",
        "accommodating"
      ],
      correct: 3,
      explanation: "Staff willing to help with a request at no cost describe an accommodating nature — 'accommodating' fits."
    },
    {
      id: "easy-9-q6",
      wordId: "easy-9-6",
      passage: "After months of negotiation, the two nations finally reached an ___ on trade terms.",
      choices: [
        "animated",
        "accord",
        "alias",
        "agriculture"
      ],
      correct: 1,
      explanation: "Months of negotiation ending in a formal agreement describe an accord — 'accord' fits."
    },
    {
      id: "easy-9-q7",
      wordId: "easy-9-7",
      passage: "Years of practice made her remarkably ___ at repairing antique clocks.",
      choices: [
        "abide",
        "abhor",
        "accessible",
        "adept"
      ],
      correct: 3,
      explanation: "Years of practice leading to great skill describes being adept — 'adept' fits."
    },
    {
      id: "easy-9-q8",
      wordId: "easy-9-8",
      passage: "All contractors must ___ to the updated safety codes on every job site.",
      choices: [
        "agile",
        "amicable",
        "accommodating",
        "adhere"
      ],
      correct: 3,
      explanation: "Being required to follow codes closely describes adhering to them — 'adhere' fits."
    },
    {
      id: "easy-9-q9",
      wordId: "easy-9-9",
      passage: "Fresh flowers ___ed every table at the wedding reception.",
      choices: [
        "adorn",
        "accommodating",
        "accessible",
        "anguish"
      ],
      correct: 0,
      explanation: "Flowers decorating tables at a wedding describe adorning them — 'adorn' fits."
    },
    {
      id: "easy-9-q10",
      wordId: "easy-9-10",
      passage: "The medication's ___ effects included drowsiness and mild nausea.",
      choices: [
        "anecdote",
        "adverse",
        "accord",
        "adept"
      ],
      correct: 1,
      explanation: "Side effects listed as drowsiness and nausea describe something harmful or unfavorable — 'adverse' fits."
    },
    {
      id: "easy-9-q11",
      wordId: "easy-9-11",
      passage: "The drone captured stunning ___ footage of the canyon at sunset.",
      choices: [
        "adorn",
        "annex",
        "aerial",
        "abide"
      ],
      correct: 2,
      explanation: "Footage taken from above, from a drone, describes something relating to the air — 'aerial' fits."
    },
    {
      id: "easy-9-q12",
      wordId: "easy-9-12",
      passage: "The architect prioritized ___ appeal over strict functionality in the lobby's design.",
      choices: [
        "affluent",
        "abhor",
        "amicable",
        "aesthetic"
      ],
      correct: 3,
      explanation: "Prioritizing appearance and beauty over pure function describes an aesthetic focus — 'aesthetic' fits."
    },
    {
      id: "easy-9-q13",
      wordId: "easy-9-13",
      passage: "The ___ suburb was known for its large houses and manicured lawns.",
      choices: [
        "animated",
        "affluent",
        "aesthetic",
        "anecdote"
      ],
      correct: 1,
      explanation: "Large houses and manicured lawns describe a wealthy area — 'affluent' fits."
    },
    {
      id: "easy-9-q14",
      wordId: "easy-9-14",
      passage: "The ___ gymnast landed the difficult routine without a single wobble.",
      choices: [
        "adverse",
        "agile",
        "allege",
        "annex"
      ],
      correct: 1,
      explanation: "Landing a difficult routine without wobbling describes quick, easy movement — 'agile' fits."
    },
    {
      id: "easy-9-q15",
      wordId: "easy-9-15",
      passage: "Raised in a religious household, he later described himself as ___ rather than a firm believer or atheist.",
      choices: [
        "aesthetic",
        "allay",
        "aerial",
        "agnostic"
      ],
      correct: 3,
      explanation: "Not firmly believing or disbelieving in God describes being agnostic — 'agnostic' fits."
    },
    {
      id: "easy-9-q16",
      wordId: "easy-9-16",
      passage: "The region's economy still depends heavily on ___ and food exports.",
      choices: [
        "agriculture",
        "adept",
        "agnostic",
        "accord"
      ],
      correct: 0,
      explanation: "An economy depending on food exports describes reliance on farming — 'agriculture' fits."
    },
    {
      id: "easy-9-q17",
      wordId: "easy-9-17",
      passage: "The con artist used a different ___ in every city he visited to avoid being tracked.",
      choices: [
        "agile",
        "alias",
        "accessible",
        "animated"
      ],
      correct: 1,
      explanation: "Using a different name in each city to avoid detection describes an alias — 'alias' fits."
    },
    {
      id: "easy-9-q18",
      wordId: "easy-9-18",
      passage: "The pilot's calm announcement helped ___ the passengers' fears during the turbulence.",
      choices: [
        "anecdote",
        "allay",
        "agile",
        "accord"
      ],
      correct: 1,
      explanation: "A calm announcement reducing fear during turbulence describes allaying it — 'allay' fits."
    },
    {
      id: "easy-9-q19",
      wordId: "easy-9-19",
      passage: "Prosecutors ___ that the executive falsified the company's financial records.",
      choices: [
        "adorn",
        "amicable",
        "allay",
        "allege"
      ],
      correct: 3,
      explanation: "Stating something as fact without yet proving it in court describes alleging it — 'allege' fits."
    },
    {
      id: "easy-9-q20",
      wordId: "easy-9-20",
      passage: "The new medication helped ___ her chronic back pain significantly.",
      choices: [
        "animated",
        "alleviate",
        "adhere",
        "affluent"
      ],
      correct: 1,
      explanation: "A medication making chronic pain less severe describes alleviating it — 'alleviate' fits."
    },
    {
      id: "easy-9-q21",
      wordId: "easy-9-21",
      passage: "The couple reached an ___ divorce settlement without ever going to court.",
      choices: [
        "amicable",
        "aesthetic",
        "agriculture",
        "agile"
      ],
      correct: 0,
      explanation: "A settlement reached without conflict or court describes an amicable outcome — 'amicable' fits."
    },
    {
      id: "easy-9-q22",
      wordId: "easy-9-22",
      passage: "He opened his speech with a funny ___ about his first day on the job.",
      choices: [
        "allege",
        "adverse",
        "anecdote",
        "agnostic"
      ],
      correct: 2,
      explanation: "A short, entertaining story opening a speech describes an anecdote — 'anecdote' fits."
    },
    {
      id: "easy-9-q23",
      wordId: "easy-9-23",
      passage: "The family's ___ was visible as they waited outside the hospital for news.",
      choices: [
        "anecdote",
        "allege",
        "abhor",
        "anguish"
      ],
      correct: 3,
      explanation: "Visible suffering while waiting for hospital news describes anguish — 'anguish' fits."
    },
    {
      id: "easy-9-q24",
      wordId: "easy-9-24",
      passage: "The debate grew ___ once the topic of funding finally came up.",
      choices: [
        "animated",
        "allay",
        "agnostic",
        "accord"
      ],
      correct: 0,
      explanation: "A debate becoming lively and energetic on a hot topic describes it being animated — 'animated' fits."
    },
    {
      id: "easy-9-q25",
      wordId: "easy-9-25",
      passage: "The empire moved quickly to ___ the smaller kingdom after winning the war.",
      choices: [
        "anecdote",
        "annex",
        "amicable",
        "abhor"
      ],
      correct: 1,
      explanation: "Incorporating a defeated kingdom's territory describes annexing it — 'annex' fits."
    }
  ],
  "easy-10": [
    {
      id: "easy-10-q1",
      wordId: "easy-10-1",
      passage: "The donation came from an ___ benefactor who wished to remain unnamed.",
      choices: [
        "appropriate",
        "appalling",
        "anonymous",
        "anxiety"
      ],
      correct: 2,
      explanation: "A donor who wishes to remain unnamed describes anonymity — 'anonymous' fits."
    },
    {
      id: "easy-10-q2",
      wordId: "easy-10-2",
      passage: "Her ___ grew as the interview time drew closer and closer.",
      choices: [
        "assail",
        "ascertain",
        "anxiety",
        "appalling"
      ],
      correct: 2,
      explanation: "Worry increasing as an event approaches describes anxiety — 'anxiety' fits."
    },
    {
      id: "easy-10-q3",
      wordId: "easy-10-3",
      passage: "Voter turnout dropped as more young people grew ___ about local elections.",
      choices: [
        "arbiter",
        "appraise",
        "apathetic",
        "appalling"
      ],
      correct: 2,
      explanation: "Losing interest in something that used to matter describes apathy — 'apathetic' fits."
    },
    {
      id: "easy-10-q4",
      wordId: "easy-10-4",
      passage: "Inspectors described the factory's safety violations as truly ___.",
      choices: [
        "artisan",
        "appalling",
        "aquatic",
        "arbitration"
      ],
      correct: 1,
      explanation: "Violations shocking enough for inspectors to comment describe them being appalling — 'appalling' fits."
    },
    {
      id: "easy-10-q5",
      wordId: "easy-10-5",
      passage: "The manager offered a refund to ___ the angry customer.",
      choices: [
        "apathetic",
        "artifact",
        "appalling",
        "appease"
      ],
      correct: 3,
      explanation: "Giving something to calm an angry person describes appeasing them — 'appease' fits."
    },
    {
      id: "easy-10-q6",
      wordId: "easy-10-6",
      passage: "A specialist was hired to ___ the antique furniture before the auction.",
      choices: [
        "attribute",
        "astute",
        "apprehend",
        "appraise"
      ],
      correct: 3,
      explanation: "Assessing the value of items before an auction describes appraising them — 'appraise' fits."
    },
    {
      id: "easy-10-q7",
      wordId: "easy-10-7",
      passage: "Police were able to ___ the suspect just blocks from the scene of the crime.",
      choices: [
        "apprehend",
        "anxiety",
        "attribute",
        "attain"
      ],
      correct: 0,
      explanation: "Police catching a suspect nearby describes apprehending them — 'apprehend' fits."
    },
    {
      id: "easy-10-q8",
      wordId: "easy-10-8",
      passage: "The committee voted to ___ additional funds for the new library wing.",
      choices: [
        "apprehend",
        "appropriate",
        "apathetic",
        "atone"
      ],
      correct: 1,
      explanation: "A committee voting to set aside money for a project describes appropriating funds — 'appropriate' fits."
    },
    {
      id: "easy-10-q9",
      wordId: "easy-10-9",
      passage: "The aquarium's newest exhibit features rare ___ plants from the Amazon.",
      choices: [
        "assail",
        "appease",
        "atypical",
        "aquatic"
      ],
      correct: 3,
      explanation: "Plants featured at an aquarium, from a river system, describe them being aquatic — 'aquatic' fits."
    },
    {
      id: "easy-10-q10",
      wordId: "easy-10-10",
      passage: "As the final ___ of the contest, she alone would choose the winner.",
      choices: [
        "astute",
        "attribute",
        "atypical",
        "arbiter"
      ],
      correct: 3,
      explanation: "Someone with sole power to decide a contest's outcome describes an arbiter — 'arbiter' fits."
    },
    {
      id: "easy-10-q11",
      wordId: "easy-10-11",
      passage: "The two companies agreed to resolve their contract dispute through ___ rather than a lawsuit.",
      choices: [
        "astute",
        "atone",
        "arbitration",
        "artisan"
      ],
      correct: 2,
      explanation: "Resolving a dispute through an outside decision-maker instead of court describes arbitration — 'arbitration' fits."
    },
    {
      id: "easy-10-q12",
      wordId: "easy-10-12",
      passage: "He pursued the research project with the same ___ he'd shown as a student.",
      choices: [
        "arid",
        "atypical",
        "ardor",
        "artisan"
      ],
      correct: 2,
      explanation: "Approaching work with the same enthusiasm as in school describes ardor — 'ardor' fits."
    },
    {
      id: "easy-10-q13",
      wordId: "easy-10-13",
      passage: "Few crops survive in the region's ___, sun-baked soil.",
      choices: [
        "assail",
        "arid",
        "ardor",
        "arbiter"
      ],
      correct: 1,
      explanation: "Sun-baked soil where few crops survive describes an arid climate — 'arid' fits."
    },
    {
      id: "easy-10-q14",
      wordId: "easy-10-14",
      passage: "Archaeologists carefully catalogued each ___ found at the ancient dig site.",
      choices: [
        "arid",
        "artifact",
        "anonymous",
        "assail"
      ],
      correct: 1,
      explanation: "Objects of historical interest found at a dig describe artifacts — 'artifact' fits."
    },
    {
      id: "easy-10-q15",
      wordId: "easy-10-15",
      passage: "The market was full of local ___s selling handmade pottery and jewelry.",
      choices: [
        "appraise",
        "appalling",
        "artisan",
        "ardor"
      ],
      correct: 2,
      explanation: "People selling handmade pottery and jewelry describe artisans — 'artisan' fits."
    },
    {
      id: "easy-10-q16",
      wordId: "easy-10-16",
      passage: "Investigators worked for weeks to ___ the exact cause of the fire.",
      choices: [
        "ascertain",
        "anxiety",
        "aspire",
        "appraise"
      ],
      correct: 0,
      explanation: "Working for weeks to find out something for certain describes ascertaining it — 'ascertain' fits."
    },
    {
      id: "easy-10-q17",
      wordId: "easy-10-17",
      passage: "From a young age, she ___d to become a surgeon.",
      choices: [
        "attribute",
        "aspire",
        "anxiety",
        "ardor"
      ],
      correct: 1,
      explanation: "Having a strong desire from youth to reach a career goal describes aspiring — 'aspire' fits."
    },
    {
      id: "easy-10-q18",
      wordId: "easy-10-18",
      passage: "Critics ___ed the new policy as shortsighted and poorly planned.",
      choices: [
        "assail",
        "ardor",
        "anxiety",
        "atone"
      ],
      correct: 0,
      explanation: "Attacking a policy verbally as shortsighted describes assailing it — 'assail' fits."
    },
    {
      id: "easy-10-q19",
      wordId: "easy-10-19",
      passage: "Engineers were sent to ___ the bridge's structural damage after the storm.",
      choices: [
        "artisan",
        "assess",
        "ardor",
        "arbiter"
      ],
      correct: 1,
      explanation: "Being sent to evaluate damage after a storm describes assessing it — 'assess' fits."
    },
    {
      id: "easy-10-q20",
      wordId: "easy-10-20",
      passage: "Her ___ observation about the budget saved the company thousands of dollars.",
      choices: [
        "attain",
        "aquatic",
        "arid",
        "astute"
      ],
      correct: 3,
      explanation: "A sharp observation that saves money describes astuteness — 'astute' fits."
    },
    {
      id: "easy-10-q21",
      wordId: "easy-10-21",
      passage: "The family sought ___ after fleeing the conflict in their home country.",
      choices: [
        "arbitration",
        "astute",
        "asylum",
        "arbiter"
      ],
      correct: 2,
      explanation: "Fleeing conflict and seeking protection in another country describes seeking asylum — 'asylum' fits."
    },
    {
      id: "easy-10-q22",
      wordId: "easy-10-22",
      passage: "He spent years trying to ___ for the mistakes of his youth.",
      choices: [
        "assess",
        "apprehend",
        "apathetic",
        "atone"
      ],
      correct: 3,
      explanation: "Spending years trying to make amends for past mistakes describes atoning — 'atone' fits."
    },
    {
      id: "easy-10-q23",
      wordId: "easy-10-23",
      passage: "It took a decade of training for her to ___ the rank of black belt.",
      choices: [
        "assail",
        "attain",
        "appease",
        "astute"
      ],
      correct: 1,
      explanation: "Succeeding at a goal after a decade of training describes attaining it — 'attain' fits."
    },
    {
      id: "easy-10-q24",
      wordId: "easy-10-24",
      passage: "Doctors ___ the outbreak to contaminated drinking water in the region.",
      choices: [
        "anonymous",
        "atypical",
        "attribute",
        "ascertain"
      ],
      correct: 2,
      explanation: "Naming the cause of an outbreak describes attributing it — 'attribute' fits."
    },
    {
      id: "easy-10-q25",
      wordId: "easy-10-25",
      passage: "His ___ approach to management surprised the more traditional board members.",
      choices: [
        "anonymous",
        "atypical",
        "arbitration",
        "arbiter"
      ],
      correct: 1,
      explanation: "An approach surprising traditional colleagues describes it being atypical — 'atypical' fits."
    }
  ],
  "easy-12": [
    {
      id: "easy-12-q1",
      wordId: "easy-12-1",
      passage: "The flood was the worst ___ the small town had faced in decades.",
      choices: [
        "calamity",
        "chaos",
        "circumspect",
        "cleave"
      ],
      correct: 0,
      explanation: "A disastrous event causing great damage describes a calamity — 'calamity' fits."
    },
    {
      id: "easy-12-q2",
      wordId: "easy-12-2",
      passage: "Technicians ___ the telescope's mirrors before every major observation.",
      choices: [
        "clemency",
        "calibrate",
        "camaraderie",
        "chaos"
      ],
      correct: 1,
      explanation: "Adjusting an instrument precisely for accuracy describes calibrating it — 'calibrate' fits."
    },
    {
      id: "easy-12-q3",
      wordId: "easy-12-3",
      passage: "His ___ remark about the layoffs offended nearly everyone in the room.",
      choices: [
        "callous",
        "cerebral",
        "calamity",
        "carouse"
      ],
      correct: 0,
      explanation: "A remark showing no concern for others' feelings describes it being callous — 'callous' fits."
    },
    {
      id: "easy-12-q4",
      wordId: "easy-12-4",
      passage: "The long road trip built a real sense of ___ among the team.",
      choices: [
        "coerce",
        "catalog",
        "camaraderie",
        "calibrate"
      ],
      correct: 2,
      explanation: "Shared trust and friendship built through a group experience describes camaraderie — 'camaraderie' fits."
    },
    {
      id: "easy-12-q5",
      wordId: "easy-12-5",
      passage: "Her ___ investments paid off well before she reached retirement.",
      choices: [
        "calibrate",
        "catalog",
        "canny",
        "cleave"
      ],
      correct: 2,
      explanation: "Shrewd financial decisions paying off describe cunning practicality — 'canny' fits."
    },
    {
      id: "easy-12-q6",
      wordId: "easy-12-6",
      passage: "The artist stretched a fresh ___ before beginning the new portrait.",
      choices: [
        "camaraderie",
        "clemency",
        "canny",
        "canvas"
      ],
      correct: 3,
      explanation: "A cloth surface stretched for painting describes a canvas — 'canvas' fits."
    },
    {
      id: "easy-12-q7",
      wordId: "easy-12-7",
      passage: "The storyteller ___d the children for nearly an hour without a single interruption.",
      choices: [
        "choreography",
        "canvas",
        "clamor",
        "captivate"
      ],
      correct: 3,
      explanation: "Holding an audience's attention completely for an hour describes captivating them — 'captivate' fits."
    },
    {
      id: "easy-12-q8",
      wordId: "easy-12-8",
      passage: "The sailors ___d in the tavern late into the night before setting sail.",
      choices: [
        "catalog",
        "carouse",
        "chronological",
        "clergy"
      ],
      correct: 1,
      explanation: "Drinking and enjoying oneself loudly late into the night describes carousing — 'carouse' fits."
    },
    {
      id: "easy-12-q9",
      wordId: "easy-12-9",
      passage: "It took the librarian months to ___ the entire donated book collection.",
      choices: [
        "catalog",
        "cleave",
        "calamity",
        "chronicle"
      ],
      correct: 0,
      explanation: "Listing and classifying a large collection systematically describes cataloging it — 'catalog' fits."
    },
    {
      id: "easy-12-q10",
      wordId: "easy-12-10",
      passage: "Critics praised the film for its ___, thought-provoking plot.",
      choices: [
        "colloquial",
        "cerebral",
        "chronological",
        "calibrate"
      ],
      correct: 1,
      explanation: "A plot praised for being thought-provoking rather than emotional describes it being cerebral — 'cerebral' fits."
    },
    {
      id: "easy-12-q11",
      wordId: "easy-12-11",
      passage: "The power outage plunged the entire office into ___.",
      choices: [
        "colloquial",
        "cognizant",
        "calamity",
        "chaos"
      ],
      correct: 3,
      explanation: "A power outage causing total disorder describes chaos — 'chaos' fits."
    },
    {
      id: "easy-12-q12",
      wordId: "easy-12-12",
      passage: "She still ___es the handwritten letters her grandfather sent her.",
      choices: [
        "cherish",
        "calamity",
        "coerce",
        "camaraderie"
      ],
      correct: 0,
      explanation: "Feeling great affection for old letters describes cherishing them — 'cherish' fits."
    },
    {
      id: "easy-12-q13",
      wordId: "easy-12-13",
      passage: "The teacher gently ___d the students for forgetting their homework again.",
      choices: [
        "circumspect",
        "circumvent",
        "chronicle",
        "chide"
      ],
      correct: 3,
      explanation: "Mildly scolding students for a recurring mistake describes chiding them — 'chide' fits."
    },
    {
      id: "easy-12-q14",
      wordId: "easy-12-14",
      passage: "The show's ___ combined ballet with elements of modern street dance.",
      choices: [
        "chronicle",
        "clamor",
        "cherish",
        "choreography"
      ],
      correct: 3,
      explanation: "The arrangement of dance movements in a performance describes choreography — 'choreography' fits."
    },
    {
      id: "easy-12-q15",
      wordId: "easy-12-15",
      passage: "The documentary ___s the rise and fall of the once-famous factory town.",
      choices: [
        "choreography",
        "captivate",
        "calamity",
        "chronicle"
      ],
      correct: 3,
      explanation: "Recording events in the order they happened describes chronicling them — 'chronicle' fits."
    },
    {
      id: "easy-12-q16",
      wordId: "easy-12-16",
      passage: "The exhibit displays the artist's paintings in ___ order, from earliest to latest.",
      choices: [
        "clergy",
        "clamor",
        "circumvent",
        "chronological"
      ],
      correct: 3,
      explanation: "Arranging items by the order they occurred describes chronological order — 'chronological' fits."
    },
    {
      id: "easy-12-q17",
      wordId: "easy-12-17",
      passage: "After the last lawsuit, the company became far more ___ about its advertising.",
      choices: [
        "coerce",
        "callous",
        "cerebral",
        "circumspect"
      ],
      correct: 3,
      explanation: "Becoming more careful about consequences after a lawsuit describes being circumspect — 'circumspect' fits."
    },
    {
      id: "easy-12-q18",
      wordId: "easy-12-18",
      passage: "The students found a clever way to ___ the school's outdated printing limits.",
      choices: [
        "carouse",
        "chide",
        "circumvent",
        "camaraderie"
      ],
      correct: 2,
      explanation: "Finding a way around a restrictive rule describes circumventing it — 'circumvent' fits."
    },
    {
      id: "easy-12-q19",
      wordId: "easy-12-19",
      passage: "There was a public ___ for the mayor's resignation after the scandal broke.",
      choices: [
        "chide",
        "clamor",
        "captivate",
        "callous"
      ],
      correct: 1,
      explanation: "A loud public demand for something describes a clamor — 'clamor' fits."
    },
    {
      id: "easy-12-q20",
      wordId: "easy-12-20",
      passage: "The axe was sharp enough to ___ the log in a single stroke.",
      choices: [
        "cleave",
        "circumspect",
        "canny",
        "camaraderie"
      ],
      correct: 0,
      explanation: "Splitting something apart in one stroke describes cleaving it — 'cleave' fits."
    },
    {
      id: "easy-12-q21",
      wordId: "easy-12-21",
      passage: "The governor granted ___ to several nonviolent offenders before leaving office.",
      choices: [
        "clemency",
        "chronological",
        "canvas",
        "chide"
      ],
      correct: 0,
      explanation: "Mercy granted to offenders who could be treated harshly describes clemency — 'clemency' fits."
    },
    {
      id: "easy-12-q22",
      wordId: "easy-12-22",
      passage: "Members of the ___ gathered for the annual conference downtown.",
      choices: [
        "clergy",
        "chide",
        "canvas",
        "chronicle"
      ],
      correct: 0,
      explanation: "Officials of a religious institution gathering describe the clergy — 'clergy' fits."
    },
    {
      id: "easy-12-q23",
      wordId: "easy-12-23",
      passage: "The whistleblower claimed she had been ___d into signing the agreement.",
      choices: [
        "coerce",
        "clergy",
        "cerebral",
        "circumspect"
      ],
      correct: 0,
      explanation: "Being forced through threats to sign something describes being coerced — 'coerce' fits."
    },
    {
      id: "easy-12-q24",
      wordId: "easy-12-24",
      passage: "Employees should remain ___ of the new safety procedures at all times.",
      choices: [
        "cognizant",
        "choreography",
        "cherish",
        "cerebral"
      ],
      correct: 0,
      explanation: "Being expected to stay aware of procedures describes being cognizant — 'cognizant' fits."
    },
    {
      id: "easy-12-q25",
      wordId: "easy-12-25",
      passage: "The professor noted several ___ expressions in the student's formal essay.",
      choices: [
        "clergy",
        "catalog",
        "colloquial",
        "circumspect"
      ],
      correct: 2,
      explanation: "Casual, conversational language appearing in a formal essay describes it being colloquial — 'colloquial' fits."
    }
  ],
  "easy-13": [
    {
      id: "easy-13-q1",
      wordId: "easy-13-1",
      passage: "The firefighter received a ___ for his role in the daring rescue.",
      choices: [
        "commendation",
        "convention",
        "construe",
        "compress"
      ],
      correct: 0,
      explanation: "An official award for bravery describes a commendation — 'commendation' fits."
    },
    {
      id: "easy-13-q2",
      wordId: "easy-13-2",
      passage: "The airline agreed to ___ passengers for the canceled flight.",
      choices: [
        "compensate",
        "convivial",
        "construe",
        "consumption"
      ],
      correct: 0,
      explanation: "Giving something back in return for a loss describes compensating them — 'compensate' fits."
    },
    {
      id: "easy-13-q3",
      wordId: "easy-13-3",
      passage: "Years of easy wins led to a dangerous ___ within the champion team.",
      choices: [
        "concord",
        "complacency",
        "confidant",
        "compensate"
      ],
      correct: 1,
      explanation: "Self-satisfaction leading to a lack of awareness of danger describes complacency — 'complacency' fits."
    },
    {
      id: "easy-13-q4",
      wordId: "easy-13-4",
      passage: "The light sauce perfectly ___s the richness of the pasta.",
      choices: [
        "convene",
        "complement",
        "confound",
        "condone"
      ],
      correct: 1,
      explanation: "Something that completes and enhances a dish describes complementing it — 'complement' fits."
    },
    {
      id: "easy-13-q5",
      wordId: "easy-13-5",
      passage: "The new employee was quiet and ___ during his first week of training.",
      choices: [
        "contrite",
        "congregation",
        "consolation",
        "compliant"
      ],
      correct: 3,
      explanation: "Being quiet and willing to follow instructions describes being compliant — 'compliant' fits."
    },
    {
      id: "easy-13-q6",
      wordId: "easy-13-6",
      passage: "She blushed at the unexpected ___ about her presentation.",
      choices: [
        "constrain",
        "constituent",
        "contrite",
        "compliment"
      ],
      correct: 3,
      explanation: "An unexpected expression of praise describes a compliment — 'compliment' fits."
    },
    {
      id: "easy-13-q7",
      wordId: "easy-13-7",
      passage: "Missing the connecting flight only ___ed their travel troubles.",
      choices: [
        "compound",
        "confidant",
        "convene",
        "construe"
      ],
      correct: 0,
      explanation: "One problem making an already bad situation worse describes compounding it — 'compound' fits."
    },
    {
      id: "easy-13-q8",
      wordId: "easy-13-8",
      passage: "The software ___es large video files without noticeably reducing quality.",
      choices: [
        "constrain",
        "congregation",
        "confidant",
        "compress"
      ],
      correct: 3,
      explanation: "Squeezing a file into a smaller size describes compressing it — 'compress' fits."
    },
    {
      id: "easy-13-q9",
      wordId: "easy-13-9",
      passage: "The peace treaty finally brought ___ between the two rival nations.",
      choices: [
        "consumption",
        "compliment",
        "compress",
        "concord"
      ],
      correct: 3,
      explanation: "A state of agreement between former rivals describes concord — 'concord' fits."
    },
    {
      id: "easy-13-q10",
      wordId: "easy-13-10",
      passage: "The company made clear it would not ___ any form of harassment.",
      choices: [
        "congregation",
        "condone",
        "construe",
        "confidant"
      ],
      correct: 1,
      explanation: "Refusing to overlook wrongdoing describes not condoning it — 'condone' fits."
    },
    {
      id: "easy-13-q11",
      wordId: "easy-13-11",
      passage: "The bakery window displayed an impressive ___ shaped like a castle.",
      choices: [
        "construe",
        "confection",
        "consign",
        "convention"
      ],
      correct: 1,
      explanation: "An elaborate sweet food item on display describes a confection — 'confection' fits."
    },
    {
      id: "easy-13-q12",
      wordId: "easy-13-12",
      passage: "She had few close friends, but her sister was always her ___.",
      choices: [
        "contrite",
        "complement",
        "compliment",
        "confidant"
      ],
      correct: 3,
      explanation: "A trusted person one shares private thoughts with describes a confidant — 'confidant' fits."
    },
    {
      id: "easy-13-q13",
      wordId: "easy-13-13",
      passage: "The magician's final trick continued to ___ even seasoned performers.",
      choices: [
        "confound",
        "confidant",
        "compensate",
        "constituent"
      ],
      correct: 0,
      explanation: "A trick puzzling even experts describes confounding them — 'confound' fits."
    },
    {
      id: "easy-13-q14",
      wordId: "easy-13-14",
      passage: "The pastor addressed the ___ about the upcoming food drive.",
      choices: [
        "congregation",
        "confound",
        "compound",
        "convention"
      ],
      correct: 0,
      explanation: "A gathering of people at a religious service describes a congregation — 'congregation' fits."
    },
    {
      id: "easy-13-q15",
      wordId: "easy-13-15",
      passage: "After a long meeting, the board finally reached a ___ on the budget.",
      choices: [
        "consensus",
        "confidant",
        "consolation",
        "constrain"
      ],
      correct: 0,
      explanation: "General agreement reached after discussion describes a consensus — 'consensus' fits."
    },
    {
      id: "easy-13-q16",
      wordId: "easy-13-16",
      passage: "The failed experiment was quietly ___ed to the back of the storage room.",
      choices: [
        "complacency",
        "compliment",
        "consign",
        "construe"
      ],
      correct: 2,
      explanation: "Handing something over to a lesser fate describes consigning it — 'consign' fits."
    },
    {
      id: "easy-13-q17",
      wordId: "easy-13-17",
      passage: "Losing the final was tough, but the team found some ___ in their record season.",
      choices: [
        "commendation",
        "complacency",
        "compliant",
        "consolation"
      ],
      correct: 3,
      explanation: "Comfort found after a disappointing loss describes consolation — 'consolation' fits."
    },
    {
      id: "easy-13-q18",
      wordId: "easy-13-18",
      passage: "The senator held a town hall to hear directly from her ___s.",
      choices: [
        "compound",
        "concord",
        "consign",
        "constituent"
      ],
      correct: 3,
      explanation: "Voters represented by an elected official describe constituents — 'constituent' fits."
    },
    {
      id: "easy-13-q19",
      wordId: "easy-13-19",
      passage: "A tight budget ___ed the design team's original vision for the building.",
      choices: [
        "constrain",
        "condone",
        "compress",
        "compliant"
      ],
      correct: 0,
      explanation: "A budget severely limiting a team's plans describes constraining them — 'constrain' fits."
    },
    {
      id: "easy-13-q20",
      wordId: "easy-13-20",
      passage: "Her silence during the meeting was ___d by some as agreement.",
      choices: [
        "construe",
        "compliant",
        "convivial",
        "convene"
      ],
      correct: 0,
      explanation: "Interpreting an action's meaning describes construing it — 'construe' fits."
    },
    {
      id: "easy-13-q21",
      wordId: "easy-13-21",
      passage: "Household water ___ spikes during the hottest weeks of summer.",
      choices: [
        "compress",
        "consumption",
        "convene",
        "condone"
      ],
      correct: 1,
      explanation: "The amount of a resource used describes consumption — 'consumption' fits."
    },
    {
      id: "easy-13-q22",
      wordId: "easy-13-22",
      passage: "His ___ apology went a long way toward repairing the friendship.",
      choices: [
        "construe",
        "convention",
        "convene",
        "contrite"
      ],
      correct: 3,
      explanation: "An apology showing genuine remorse describes being contrite — 'contrite' fits."
    },
    {
      id: "easy-13-q23",
      wordId: "easy-13-23",
      passage: "The committee will ___ next Tuesday to finalize the proposal.",
      choices: [
        "consign",
        "consolation",
        "convene",
        "compress"
      ],
      correct: 2,
      explanation: "Coming together for a formal meeting describes convening — 'convene' fits."
    },
    {
      id: "easy-13-q24",
      wordId: "easy-13-24",
      passage: "Thousands of fans attended the annual comic book ___ downtown.",
      choices: [
        "consumption",
        "convention",
        "condone",
        "commendation"
      ],
      correct: 1,
      explanation: "A large formal gathering of fans describes a convention — 'convention' fits."
    },
    {
      id: "easy-13-q25",
      wordId: "easy-13-25",
      passage: "The restaurant's ___ atmosphere made it a favorite for group dinners.",
      choices: [
        "convivial",
        "consign",
        "construe",
        "condone"
      ],
      correct: 0,
      explanation: "A friendly, lively, enjoyable social atmosphere describes it being convivial — 'convivial' fits."
    }
  ],
  "easy-14": [
    {
      id: "easy-14-q1",
      wordId: "easy-14-1",
      passage: "She took ___ notes during every single lecture of the semester.",
      choices: [
        "copious",
        "culmination",
        "dearth",
        "delegate"
      ],
      correct: 0,
      explanation: "Taking a large amount of notes describes them being copious — 'copious' fits."
    },
    {
      id: "easy-14-q2",
      wordId: "easy-14-2",
      passage: "Despite their disagreement, the two rivals remained ___ throughout the debate.",
      choices: [
        "cosmopolitan",
        "crescendo",
        "curt",
        "cordial"
      ],
      correct: 3,
      explanation: "Staying warm and friendly despite disagreement describes being cordial — 'cordial' fits."
    },
    {
      id: "easy-14-q3",
      wordId: "easy-14-3",
      passage: "Thousands lined the streets to watch the ___ procession of the new king.",
      choices: [
        "credulity",
        "cosmopolitan",
        "coronation",
        "cunning"
      ],
      correct: 2,
      explanation: "A ceremony crowning a monarch, watched by crowds, describes a coronation — 'coronation' fits."
    },
    {
      id: "easy-14-q4",
      wordId: "easy-14-4",
      passage: "The ___ chemical had eaten through the metal pipe within a year.",
      choices: [
        "cumulative",
        "corrosive",
        "cosmopolitan",
        "defunct"
      ],
      correct: 1,
      explanation: "A chemical destroying metal over time describes it being corrosive — 'corrosive' fits."
    },
    {
      id: "easy-14-q5",
      wordId: "easy-14-5",
      passage: "The city's ___ food scene reflects its many immigrant communities.",
      choices: [
        "coup",
        "cosmopolitan",
        "defunct",
        "counteract"
      ],
      correct: 1,
      explanation: "A food scene shaped by many different cultures describes it being cosmopolitan — 'cosmopolitan' fits."
    },
    {
      id: "easy-14-q6",
      wordId: "easy-14-6",
      passage: "Regular exercise can help ___ the effects of a sedentary desk job.",
      choices: [
        "delegate",
        "cunning",
        "crescendo",
        "counteract"
      ],
      correct: 3,
      explanation: "Reducing the negative effect of one thing with another describes counteracting it — 'counteract' fits."
    },
    {
      id: "easy-14-q7",
      wordId: "easy-14-7",
      passage: "The military ___ forced the president to flee the country overnight.",
      choices: [
        "deferential",
        "coup",
        "defunct",
        "defer"
      ],
      correct: 1,
      explanation: "A sudden illegal seizure of power forcing a leader to flee describes a coup — 'coup' fits."
    },
    {
      id: "easy-14-q8",
      wordId: "easy-14-8",
      passage: "He openly ___ed his neighbor's vintage motorcycle.",
      choices: [
        "cumulative",
        "defunct",
        "curt",
        "covet"
      ],
      correct: 3,
      explanation: "Desiring something belonging to someone else describes coveting it — 'covet' fits."
    },
    {
      id: "easy-14-q9",
      wordId: "easy-14-9",
      passage: "The con artist relied entirely on his victims' ___.",
      choices: [
        "credulity",
        "deft",
        "deface",
        "curt"
      ],
      correct: 0,
      explanation: "Relying on people's tendency to believe things too readily describes their credulity — 'credulity' fits."
    },
    {
      id: "easy-14-q10",
      wordId: "easy-14-10",
      passage: "The symphony built to a thunderous ___ in its final movement.",
      choices: [
        "corrosive",
        "deferential",
        "crescendo",
        "cosmopolitan"
      ],
      correct: 2,
      explanation: "Music gradually increasing in loudness to a peak describes a crescendo — 'crescendo' fits."
    },
    {
      id: "easy-14-q11",
      wordId: "easy-14-11",
      passage: "Applicants must meet several strict ___ before being considered for the scholarship.",
      choices: [
        "criteria",
        "debacle",
        "coronation",
        "deft"
      ],
      correct: 0,
      explanation: "Standards used to judge eligibility describe criteria — 'criteria' fits."
    },
    {
      id: "easy-14-q12",
      wordId: "easy-14-12",
      passage: "The championship game was the ___ of an entire season of hard work.",
      choices: [
        "curt",
        "cordial",
        "copious",
        "culmination"
      ],
      correct: 3,
      explanation: "The final, highest point of a long process describes a culmination — 'culmination' fits."
    },
    {
      id: "easy-14-q13",
      wordId: "easy-14-13",
      passage: "The investigation found the contractor ___ for the building's structural failure.",
      choices: [
        "covet",
        "culpable",
        "crescendo",
        "daunting"
      ],
      correct: 1,
      explanation: "Being found deserving of blame describes being culpable — 'culpable' fits."
    },
    {
      id: "easy-14-q14",
      wordId: "easy-14-14",
      passage: "The final exam covers the ___ material from the entire semester.",
      choices: [
        "culmination",
        "coronation",
        "cumulative",
        "cunning"
      ],
      correct: 2,
      explanation: "Material that has built up over an entire term describes it being cumulative — 'cumulative' fits."
    },
    {
      id: "easy-14-q15",
      wordId: "easy-14-15",
      passage: "The fox in the story is portrayed as ___ but ultimately careless.",
      choices: [
        "defer",
        "cunning",
        "coronation",
        "crescendo"
      ],
      correct: 1,
      explanation: "A character skilled at achieving goals through deception describes being cunning — 'cunning' fits."
    },
    {
      id: "easy-14-q16",
      wordId: "easy-14-16",
      passage: "Her ___ reply made it clear she didn't want to discuss it further.",
      choices: [
        "defunct",
        "credulity",
        "cumulative",
        "curt"
      ],
      correct: 3,
      explanation: "A rudely brief reply signaling reluctance to talk describes it being curt — 'curt' fits."
    },
    {
      id: "easy-14-q17",
      wordId: "easy-14-17",
      passage: "Climbing the mountain without a guide seemed like a ___ task.",
      choices: [
        "culpable",
        "defunct",
        "copious",
        "daunting"
      ],
      correct: 3,
      explanation: "A task that feels intimidating in prospect describes being daunting — 'daunting' fits."
    },
    {
      id: "easy-14-q18",
      wordId: "easy-14-18",
      passage: "The rural town suffered from a ___ of qualified doctors.",
      choices: [
        "credulity",
        "dearth",
        "cosmopolitan",
        "debacle"
      ],
      correct: 1,
      explanation: "A lack or scarcity of something needed describes a dearth — 'dearth' fits."
    },
    {
      id: "easy-14-q19",
      wordId: "easy-14-19",
      passage: "The product launch turned into a ___ when the servers crashed within minutes.",
      choices: [
        "criteria",
        "deft",
        "defunct",
        "debacle"
      ],
      correct: 3,
      explanation: "A complete, embarrassing failure describes a debacle — 'debacle' fits."
    },
    {
      id: "easy-14-q20",
      wordId: "easy-14-20",
      passage: "Vandals ___d the statue with spray paint overnight.",
      choices: [
        "crescendo",
        "covet",
        "cunning",
        "deface"
      ],
      correct: 3,
      explanation: "Damaging the appearance of something describes defacing it — 'deface' fits."
    },
    {
      id: "easy-14-q21",
      wordId: "easy-14-21",
      passage: "The board decided to ___ its final decision until next quarter.",
      choices: [
        "defer",
        "coronation",
        "delegate",
        "deft"
      ],
      correct: 0,
      explanation: "Postponing an action to a later time describes deferring it — 'defer' fits."
    },
    {
      id: "easy-14-q22",
      wordId: "easy-14-22",
      passage: "The new intern was ___ to every suggestion the senior editor made.",
      choices: [
        "daunting",
        "copious",
        "deface",
        "deferential"
      ],
      correct: 3,
      explanation: "Showing respect for another's authority describes being deferential — 'deferential' fits."
    },
    {
      id: "easy-14-q23",
      wordId: "easy-14-23",
      passage: "With a few ___ strokes, the calligrapher finished the entire scroll.",
      choices: [
        "deface",
        "deft",
        "cunning",
        "curt"
      ],
      correct: 1,
      explanation: "Skillful, quick movements finishing a task describe them being deft — 'deft' fits."
    },
    {
      id: "easy-14-q24",
      wordId: "easy-14-24",
      passage: "The once-popular chain of video stores is now entirely ___.",
      choices: [
        "corrosive",
        "deface",
        "defunct",
        "crescendo"
      ],
      correct: 2,
      explanation: "A business no longer existing or functioning describes it being defunct — 'defunct' fits."
    },
    {
      id: "easy-14-q25",
      wordId: "easy-14-25",
      passage: "A good manager knows when to ___ tasks rather than doing everything herself.",
      choices: [
        "curt",
        "delegate",
        "counteract",
        "defunct"
      ],
      correct: 1,
      explanation: "Assigning responsibility to others rather than doing it all describes delegating — 'delegate' fits."
    }
  ],
  "easy-15": [
    {
      id: "easy-15-q1",
      wordId: "easy-15-1",
      passage: "He refused to ___ his opponent, even after the harsh personal attacks during the debate.",
      choices: [
        "dispel",
        "dialect",
        "disheartened",
        "demean"
      ],
      correct: 3,
      explanation: "Refusing to lower another person's dignity despite provocation describes not demeaning them — 'demean' fits."
    },
    {
      id: "easy-15-q2",
      wordId: "easy-15-2",
      passage: "World leaders ___d the attack on the humanitarian convoy in strong terms.",
      choices: [
        "discretion",
        "deplore",
        "diminutive",
        "dissent"
      ],
      correct: 1,
      explanation: "Publicly expressing strong disapproval of an attack describes deploring it — 'deplore' fits."
    },
    {
      id: "easy-15-q3",
      wordId: "easy-15-3",
      passage: "Critics called the sequel ___, borrowing too much from the original film.",
      choices: [
        "discordant",
        "derivative",
        "diminutive",
        "desolate"
      ],
      correct: 1,
      explanation: "A work criticized for copying an earlier one describes it being derivative — 'derivative' fits."
    },
    {
      id: "easy-15-q4",
      wordId: "easy-15-4",
      passage: "The ___ landscape stretched for miles without a single tree in sight.",
      choices: [
        "dispel",
        "dialect",
        "desolate",
        "dissuade"
      ],
      correct: 2,
      explanation: "A landscape without trees or comfort for miles describes it being desolate — 'desolate' fits."
    },
    {
      id: "easy-15-q5",
      wordId: "easy-15-5",
      passage: "He grew ___ after losing the case he had worked on for years.",
      choices: [
        "derivative",
        "despondent",
        "deter",
        "disheartened"
      ],
      correct: 1,
      explanation: "Losing hope after a major professional setback describes being despondent — 'despondent' fits."
    },
    {
      id: "easy-15-q6",
      wordId: "easy-15-6",
      passage: "The ___ ruled the small nation for over three decades with an iron fist.",
      choices: [
        "demean",
        "despot",
        "dispel",
        "diffident"
      ],
      correct: 1,
      explanation: "A ruler with absolute, cruel power for decades describes a despot — 'despot' fits."
    },
    {
      id: "easy-15-q7",
      wordId: "easy-15-7",
      passage: "The earthquake left thousands of families ___ and homeless.",
      choices: [
        "destitute",
        "despot",
        "dispatch",
        "disclose"
      ],
      correct: 0,
      explanation: "Families left with nothing after a disaster describe being destitute — 'destitute' fits."
    },
    {
      id: "easy-15-q8",
      wordId: "easy-15-8",
      passage: "Bright motion-sensor lighting is often enough to ___ burglars from a property.",
      choices: [
        "deter",
        "disdain",
        "destitute",
        "diffident"
      ],
      correct: 0,
      explanation: "Lighting used to discourage crime through fear describes deterring it — 'deter' fits."
    },
    {
      id: "easy-15-q9",
      wordId: "easy-15-9",
      passage: "The ___ scheme involved forging three separate signatures.",
      choices: [
        "devious",
        "despot",
        "deplore",
        "dialect"
      ],
      correct: 0,
      explanation: "A scheme built on deception and forgery describes it being devious — 'devious' fits."
    },
    {
      id: "easy-15-q10",
      wordId: "easy-15-10",
      passage: "Her grandmother still spoke the old ___ from her home village.",
      choices: [
        "destitute",
        "dialect",
        "desolate",
        "dissuade"
      ],
      correct: 1,
      explanation: "A regional variety of a language describes a dialect — 'dialect' fits."
    },
    {
      id: "easy-15-q11",
      wordId: "easy-15-11",
      passage: "The ___ young poet rarely read his own work aloud in public.",
      choices: [
        "diminutive",
        "disheartened",
        "diffident",
        "disavow"
      ],
      correct: 2,
      explanation: "Rarely sharing one's work due to shyness describes being diffident — 'diffident' fits."
    },
    {
      id: "easy-15-q12",
      wordId: "easy-15-12",
      passage: "The ___ sports car surprised everyone with its powerful engine.",
      choices: [
        "diffident",
        "disdain",
        "diminutive",
        "dissuade"
      ],
      correct: 2,
      explanation: "A very small car surprising people with its power describes it being diminutive — 'diminutive' fits."
    },
    {
      id: "easy-15-q13",
      wordId: "easy-15-13",
      passage: "The organization quickly ___ed the extremist statements made by a former member.",
      choices: [
        "despondent",
        "disavow",
        "disclose",
        "diffident"
      ],
      correct: 1,
      explanation: "Publicly denying connection to something describes disavowing it — 'disavow' fits."
    },
    {
      id: "easy-15-q14",
      wordId: "easy-15-14",
      passage: "Companies must ___ any known safety risks to their shareholders.",
      choices: [
        "demean",
        "disgruntled",
        "dispel",
        "disclose"
      ],
      correct: 3,
      explanation: "Making secret or important information known describes disclosing it — 'disclose' fits."
    },
    {
      id: "easy-15-q15",
      wordId: "easy-15-15",
      passage: "A ___ note in the final chord left the audience oddly unsettled.",
      choices: [
        "dialect",
        "disclose",
        "despot",
        "discordant"
      ],
      correct: 3,
      explanation: "A note clashing with the rest of the music describes it being discordant — 'discordant' fits."
    },
    {
      id: "easy-15-q16",
      wordId: "easy-15-16",
      passage: "The judge used her ___ to reduce the defendant's sentence.",
      choices: [
        "discretion",
        "dialect",
        "divine",
        "diffident"
      ],
      correct: 0,
      explanation: "The freedom to use careful judgment describes discretion — 'discretion' fits."
    },
    {
      id: "easy-15-q17",
      wordId: "easy-15-17",
      passage: "The critic reviewed the film with barely concealed ___.",
      choices: [
        "despondent",
        "deter",
        "dissuade",
        "disdain"
      ],
      correct: 3,
      explanation: "Reviewing something with a sense that it's unworthy of respect describes disdain — 'disdain' fits."
    },
    {
      id: "easy-15-q18",
      wordId: "easy-15-18",
      passage: "Several ___ customers left one-star reviews after the price increase.",
      choices: [
        "dissent",
        "disdain",
        "disgruntled",
        "despot"
      ],
      correct: 2,
      explanation: "Customers angry and dissatisfied after a price hike describe being disgruntled — 'disgruntled' fits."
    },
    {
      id: "easy-15-q19",
      wordId: "easy-15-19",
      passage: "The team looked ___ after blowing a ten-point lead in the final minutes.",
      choices: [
        "despot",
        "deplore",
        "divine",
        "disheartened"
      ],
      correct: 3,
      explanation: "A team that has lost hope after a big collapse describes being disheartened — 'disheartened' fits."
    },
    {
      id: "easy-15-q20",
      wordId: "easy-15-20",
      passage: "The company ___ed a technician within the hour to fix the outage.",
      choices: [
        "disgruntled",
        "dispatch",
        "disheartened",
        "devious"
      ],
      correct: 1,
      explanation: "Sending someone promptly to handle a problem describes dispatching them — 'dispatch' fits."
    },
    {
      id: "easy-15-q21",
      wordId: "easy-15-21",
      passage: "The press conference was held to ___ rumors of the CEO's resignation.",
      choices: [
        "dispel",
        "disdain",
        "dialect",
        "despondent"
      ],
      correct: 0,
      explanation: "Making a rumor disappear through official statement describes dispelling it — 'dispel' fits."
    },
    {
      id: "easy-15-q22",
      wordId: "easy-15-22",
      passage: "Police asked the crowd to ___ peacefully after the rally ended.",
      choices: [
        "devious",
        "despot",
        "disperse",
        "deplore"
      ],
      correct: 2,
      explanation: "Asking people to scatter in different directions describes dispersing — 'disperse' fits."
    },
    {
      id: "easy-15-q23",
      wordId: "easy-15-23",
      passage: "One justice's written ___ argued the ruling would set a dangerous precedent.",
      choices: [
        "discretion",
        "despondent",
        "derivative",
        "dissent"
      ],
      correct: 3,
      explanation: "A formal disagreement with an official ruling describes a dissent — 'dissent' fits."
    },
    {
      id: "easy-15-q24",
      wordId: "easy-15-24",
      passage: "Her mentor tried to ___ her from quitting so early in her career.",
      choices: [
        "diffident",
        "dissuade",
        "discordant",
        "demean"
      ],
      correct: 1,
      explanation: "Persuading someone not to take an action describes dissuading them — 'dissuade' fits."
    },
    {
      id: "easy-15-q25",
      wordId: "easy-15-25",
      passage: "The choir's harmony sounded almost ___ in the empty cathedral.",
      choices: [
        "discretion",
        "disdain",
        "diminutive",
        "divine"
      ],
      correct: 3,
      explanation: "Harmony that sounds wonderful and godlike describes it being divine — 'divine' fits."
    }
  ],
  "easy-16": [
    {
      id: "easy-16-q1",
      wordId: "easy-16-1",
      passage: "The proposed tax hike proved to be a ___ issue at the town meeting.",
      choices: [
        "elaborate",
        "encore",
        "encumber",
        "divisive"
      ],
      correct: 3,
      explanation: "An issue causing disagreement among a group describes it being divisive — 'divisive' fits."
    },
    {
      id: "easy-16-q2",
      wordId: "easy-16-2",
      passage: "The source refused to ___ how she had obtained the leaked documents.",
      choices: [
        "encore",
        "engender",
        "divulge",
        "dour"
      ],
      correct: 2,
      explanation: "Refusing to reveal private information describes not divulging it — 'divulge' fits."
    },
    {
      id: "easy-16-q3",
      wordId: "easy-16-3",
      passage: "The volcano had lain ___ for over two hundred years before erupting again.",
      choices: [
        "dour",
        "dynamic",
        "efface",
        "dormant"
      ],
      correct: 3,
      explanation: "Something inactive for centuries but capable of reactivating describes it being dormant — 'dormant' fits."
    },
    {
      id: "easy-16-q4",
      wordId: "easy-16-4",
      passage: "The ___ librarian rarely smiled, even at the youngest visitors.",
      choices: [
        "dour",
        "emulate",
        "elude",
        "efface"
      ],
      correct: 0,
      explanation: "A stern, gloomy, unfriendly manner describes being dour — 'dour' fits."
    },
    {
      id: "easy-16-q5",
      wordId: "easy-16-5",
      passage: "He claimed he had signed the confession under ___.",
      choices: [
        "elicit",
        "duress",
        "encore",
        "elude"
      ],
      correct: 1,
      explanation: "Signing something under threats or force describes being under duress — 'duress' fits."
    },
    {
      id: "easy-16-q6",
      wordId: "easy-16-6",
      passage: "The startup thrives in a ___, fast-changing industry.",
      choices: [
        "dormant",
        "dynamic",
        "embezzle",
        "emote"
      ],
      correct: 1,
      explanation: "An industry characterized by constant change describes it being dynamic — 'dynamic' fits."
    },
    {
      id: "easy-16-q7",
      wordId: "easy-16-7",
      passage: "The ___ coach could barely contain his excitement after the win.",
      choices: [
        "ebullient",
        "enmity",
        "divulge",
        "eminent"
      ],
      correct: 0,
      explanation: "A coach overflowing with enthusiasm after a win describes being ebullient — 'ebullient' fits."
    },
    {
      id: "easy-16-q8",
      wordId: "easy-16-8",
      passage: "Her apartment had an ___ mix of vintage and modern furniture.",
      choices: [
        "empathy",
        "embellish",
        "eclectic",
        "ecstatic"
      ],
      correct: 2,
      explanation: "A style drawing from a wide range of different sources describes it being eclectic — 'eclectic' fits."
    },
    {
      id: "easy-16-q9",
      wordId: "easy-16-9",
      passage: "The graduates were ___ as they threw their caps into the air.",
      choices: [
        "enmity",
        "duress",
        "enamor",
        "ecstatic"
      ],
      correct: 3,
      explanation: "Overwhelming happiness at a milestone moment describes being ecstatic — 'ecstatic' fits."
    },
    {
      id: "easy-16-q10",
      wordId: "easy-16-10",
      passage: "The king issued an ___ banning the sale of weapons within the city walls.",
      choices: [
        "edict",
        "encumber",
        "divisive",
        "elude"
      ],
      correct: 0,
      explanation: "An official proclamation from a ruler describes an edict — 'edict' fits."
    },
    {
      id: "easy-16-q11",
      wordId: "easy-16-11",
      passage: "Years of erosion had all but ___d the carvings on the old monument.",
      choices: [
        "efface",
        "encore",
        "enmity",
        "embellish"
      ],
      correct: 0,
      explanation: "Erosion nearly erasing carvings over time describes effacing them — 'efface' fits."
    },
    {
      id: "easy-16-q12",
      wordId: "easy-16-12",
      passage: "The wedding featured an ___ seven-course dinner with elaborate details.",
      choices: [
        "elaborate",
        "eclectic",
        "encumber",
        "dormant"
      ],
      correct: 0,
      explanation: "A dinner with many carefully arranged courses describes it being elaborate — 'elaborate' fits."
    },
    {
      id: "easy-16-q13",
      wordId: "easy-16-13",
      passage: "The teacher's question was designed to ___ a genuine debate among students.",
      choices: [
        "elude",
        "embezzle",
        "elicit",
        "encore"
      ],
      correct: 2,
      explanation: "A question meant to draw out a reaction describes eliciting it — 'elicit' fits."
    },
    {
      id: "easy-16-q14",
      wordId: "easy-16-14",
      passage: "The fugitive managed to ___ police for nearly three weeks.",
      choices: [
        "emulate",
        "elude",
        "engender",
        "duress"
      ],
      correct: 1,
      explanation: "Skillfully escaping capture for weeks describes eluding them — 'elude' fits."
    },
    {
      id: "easy-16-q15",
      wordId: "easy-16-15",
      passage: "He tends to ___ his stories a little more each time he tells them.",
      choices: [
        "elaborate",
        "embellish",
        "divisive",
        "eminent"
      ],
      correct: 1,
      explanation: "Adding decorative details to a story over time describes embellishing it — 'embellish' fits."
    },
    {
      id: "easy-16-q16",
      wordId: "easy-16-16",
      passage: "The accountant was arrested for ___ing funds over several years.",
      choices: [
        "efface",
        "embezzle",
        "emulate",
        "duress"
      ],
      correct: 1,
      explanation: "Stealing money entrusted to one's care describes embezzling it — 'embezzle' fits."
    },
    {
      id: "easy-16-q17",
      wordId: "easy-16-17",
      passage: "An ___ historian was brought in to consult on the documentary.",
      choices: [
        "efface",
        "duress",
        "eminent",
        "embezzle"
      ],
      correct: 2,
      explanation: "A respected, famous expert in a field describes being eminent — 'eminent' fits."
    },
    {
      id: "easy-16-q18",
      wordId: "easy-16-18",
      passage: "The young actor still needed to learn how to ___ without overacting.",
      choices: [
        "edict",
        "enmity",
        "emote",
        "dynamic"
      ],
      correct: 2,
      explanation: "Expressing emotion on stage, sometimes exaggeratedly, describes emoting — 'emote' fits."
    },
    {
      id: "easy-16-q19",
      wordId: "easy-16-19",
      passage: "Good nurses combine medical skill with genuine ___ for their patients.",
      choices: [
        "empathy",
        "edict",
        "duress",
        "eclectic"
      ],
      correct: 0,
      explanation: "The ability to share and understand another's feelings describes empathy — 'empathy' fits."
    },
    {
      id: "easy-16-q20",
      wordId: "easy-16-20",
      passage: "Many young chefs try to ___ the techniques of that legendary restaurant.",
      choices: [
        "efface",
        "dynamic",
        "emulate",
        "dour"
      ],
      correct: 2,
      explanation: "Trying to match the achievements of someone admired describes emulating them — 'emulate' fits."
    },
    {
      id: "easy-16-q21",
      wordId: "easy-16-21",
      passage: "The tourists were instantly ___ed with the coastal village's charm.",
      choices: [
        "enamor",
        "dormant",
        "embellish",
        "empathy"
      ],
      correct: 0,
      explanation: "Being filled with admiration for a place describes being enamored — 'enamor' fits."
    },
    {
      id: "easy-16-q22",
      wordId: "easy-16-22",
      passage: "After three curtain calls, the band finally returned for one last ___.",
      choices: [
        "emulate",
        "encore",
        "empathy",
        "ecstatic"
      ],
      correct: 1,
      explanation: "An additional performance demanded by an audience describes an encore — 'encore' fits."
    },
    {
      id: "easy-16-q23",
      wordId: "easy-16-23",
      passage: "The hikers were ___ed by heavy packs they hadn't planned for.",
      choices: [
        "embezzle",
        "elude",
        "encumber",
        "engender"
      ],
      correct: 2,
      explanation: "Being weighed down and burdened describes being encumbered — 'encumber' fits."
    },
    {
      id: "easy-16-q24",
      wordId: "easy-16-24",
      passage: "The coach's calm confidence seemed to ___ trust throughout the team.",
      choices: [
        "engender",
        "emulate",
        "ebullient",
        "eclectic"
      ],
      correct: 0,
      explanation: "Causing a feeling to arise in a group describes engendering it — 'engender' fits."
    },
    {
      id: "easy-16-q25",
      wordId: "easy-16-25",
      passage: "Decades of ___ between the two families finally began to fade.",
      choices: [
        "empathy",
        "ebullient",
        "enmity",
        "divisive"
      ],
      correct: 2,
      explanation: "Deep-seated hostility between families describes enmity — 'enmity' fits."
    }
  ],
  "easy-18": [
    {
      id: "easy-18-q1",
      wordId: "easy-18-1",
      passage: "The translation stays remarkably close to the ___ of the original text.",
      choices: [
        "fortitude",
        "fidelity",
        "frivolous",
        "frenetic"
      ],
      correct: 1,
      explanation: "Staying true to the original describes fidelity — 'fidelity' fits."
    },
    {
      id: "easy-18-q2",
      wordId: "easy-18-2",
      passage: "\"Time is money\" is a ___ expression, not a literal statement about currency.",
      choices: [
        "guile",
        "flagrant",
        "frivolous",
        "figurative"
      ],
      correct: 3,
      explanation: "A phrase used symbolically rather than literally describes it being figurative — 'figurative' fits."
    },
    {
      id: "easy-18-q3",
      wordId: "easy-18-3",
      passage: "The referee called a ___ foul after the reckless tackle.",
      choices: [
        "fortitude",
        "flagrant",
        "frivolous",
        "hallowed"
      ],
      correct: 1,
      explanation: "A foul described as conspicuously and shamelessly wrong describes it being flagrant — 'flagrant' fits."
    },
    {
      id: "easy-18-q4",
      wordId: "easy-18-4",
      passage: "The novel's ___ descriptions slowed the pacing of an otherwise gripping plot.",
      choices: [
        "florid",
        "forbearance",
        "genial",
        "gluttony"
      ],
      correct: 0,
      explanation: "Overly elaborate, ornate writing slowing a plot describes it being florid — 'florid' fits."
    },
    {
      id: "easy-18-q5",
      wordId: "easy-18-5",
      passage: "The nightclub was shut down for repeatedly ___ing fire safety codes.",
      choices: [
        "flout",
        "fortuitous",
        "forage",
        "forsake"
      ],
      correct: 0,
      explanation: "Openly disregarding rules describes flouting them — 'flout' fits."
    },
    {
      id: "easy-18-q6",
      wordId: "easy-18-6",
      passage: "Quick thinking by a bystander helped ___ the robbery attempt.",
      choices: [
        "gluttony",
        "foil",
        "garish",
        "goad"
      ],
      correct: 1,
      explanation: "Preventing someone from succeeding at a crime describes foiling it — 'foil' fits."
    },
    {
      id: "easy-18-q7",
      wordId: "easy-18-7",
      passage: "The scouts learned how to ___ for edible plants during the survival course.",
      choices: [
        "fortitude",
        "forage",
        "frugal",
        "forestall"
      ],
      correct: 1,
      explanation: "Searching widely for food describes foraging — 'forage' fits."
    },
    {
      id: "easy-18-q8",
      wordId: "easy-18-8",
      passage: "The teacher's ___ with the disruptive student eventually paid off.",
      choices: [
        "forum",
        "forbearance",
        "flagrant",
        "fortitude"
      ],
      correct: 1,
      explanation: "Patient self-control in a difficult situation describes forbearance — 'forbearance' fits."
    },
    {
      id: "easy-18-q9",
      wordId: "easy-18-9",
      passage: "Regular maintenance can ___ many of the most expensive repairs.",
      choices: [
        "forsake",
        "guile",
        "forestall",
        "frivolous"
      ],
      correct: 2,
      explanation: "Preventing a problem by acting in advance describes forestalling it — 'forestall' fits."
    },
    {
      id: "easy-18-q10",
      wordId: "easy-18-10",
      passage: "The ___ puppy sat by the shelter door, waiting for someone to notice him.",
      choices: [
        "forestall",
        "grievous",
        "forlorn",
        "flout"
      ],
      correct: 2,
      explanation: "A pitifully sad, lonely animal describes it being forlorn — 'forlorn' fits."
    },
    {
      id: "easy-18-q11",
      wordId: "easy-18-11",
      passage: "He refused to ___ his hometown, even after the factory closed.",
      choices: [
        "frenetic",
        "forsake",
        "forum",
        "foil"
      ],
      correct: 1,
      explanation: "Refusing to abandon a place despite hardship describes not forsaking it — 'forsake' fits."
    },
    {
      id: "easy-18-q12",
      wordId: "easy-18-12",
      passage: "She showed remarkable ___ throughout her long recovery from surgery.",
      choices: [
        "grievous",
        "gluttony",
        "fortitude",
        "forbearance"
      ],
      correct: 2,
      explanation: "Courage and strength through a difficult recovery describe fortitude — 'fortitude' fits."
    },
    {
      id: "easy-18-q13",
      wordId: "easy-18-13",
      passage: "Their meeting at the conference turned out to be wonderfully ___.",
      choices: [
        "frenetic",
        "frivolous",
        "fortuitous",
        "florid"
      ],
      correct: 2,
      explanation: "A meeting that happened by lucky chance describes it being fortuitous — 'fortuitous' fits."
    },
    {
      id: "easy-18-q14",
      wordId: "easy-18-14",
      passage: "The city held a public ___ to discuss the proposed new bike lanes.",
      choices: [
        "forum",
        "forestall",
        "grandiose",
        "goad"
      ],
      correct: 0,
      explanation: "An event for open public discussion describes a forum — 'forum' fits."
    },
    {
      id: "easy-18-q15",
      wordId: "easy-18-15",
      passage: "The kitchen turned ___ the moment the dinner rush began.",
      choices: [
        "flagrant",
        "garish",
        "goad",
        "frenetic"
      ],
      correct: 3,
      explanation: "A kitchen becoming fast, energetic, and chaotic describes it turning frenetic — 'frenetic' fits."
    },
    {
      id: "easy-18-q16",
      wordId: "easy-18-16",
      passage: "The judge dismissed the lawsuit, calling it ___ and a waste of the court's time.",
      choices: [
        "forlorn",
        "frivolous",
        "frenetic",
        "guile"
      ],
      correct: 1,
      explanation: "A lawsuit dismissed as lacking serious purpose describes it being frivolous — 'frivolous' fits."
    },
    {
      id: "easy-18-q17",
      wordId: "easy-18-17",
      passage: "Growing up during the recession made him permanently ___ with his spending.",
      choices: [
        "frugal",
        "goad",
        "figurative",
        "frenetic"
      ],
      correct: 0,
      explanation: "Being careful and economical with money describes being frugal — 'frugal' fits."
    },
    {
      id: "easy-18-q18",
      wordId: "easy-18-18",
      passage: "The hotel lobby's ___ gold decor felt more tacky than luxurious.",
      choices: [
        "grievous",
        "gluttony",
        "frugal",
        "garish"
      ],
      correct: 3,
      explanation: "Decor that's excessively bright and tasteless describes it being garish — 'garish' fits."
    },
    {
      id: "easy-18-q19",
      wordId: "easy-18-19",
      passage: "The ___ host made sure every guest felt welcome at the party.",
      choices: [
        "genial",
        "fidelity",
        "garish",
        "gluttony"
      ],
      correct: 0,
      explanation: "A warm, friendly host describes being genial — 'genial' fits."
    },
    {
      id: "easy-18-q20",
      wordId: "easy-18-20",
      passage: "The holiday feast was practically an invitation to ___.",
      choices: [
        "forlorn",
        "gluttony",
        "flagrant",
        "forum"
      ],
      correct: 1,
      explanation: "A feast encouraging excessive eating describes gluttony — 'gluttony' fits."
    },
    {
      id: "easy-18-q21",
      wordId: "easy-18-21",
      passage: "His brothers ___ed him into trying the spiciest dish on the menu.",
      choices: [
        "garish",
        "forage",
        "forestall",
        "goad"
      ],
      correct: 3,
      explanation: "Provoking someone into action through teasing describes goading them — 'goad' fits."
    },
    {
      id: "easy-18-q22",
      wordId: "easy-18-22",
      passage: "His ___ plans for the company far outpaced its actual budget.",
      choices: [
        "figurative",
        "grandiose",
        "florid",
        "frenetic"
      ],
      correct: 1,
      explanation: "Plans impressively large but unrealistic describe them being grandiose — 'grandiose' fits."
    },
    {
      id: "easy-18-q23",
      wordId: "easy-18-23",
      passage: "The court called the negligence a ___ failure of basic safety standards.",
      choices: [
        "genial",
        "grievous",
        "florid",
        "fidelity"
      ],
      correct: 1,
      explanation: "A failure described as very severe describes it being grievous — 'grievous' fits."
    },
    {
      id: "easy-18-q24",
      wordId: "easy-18-24",
      passage: "The spy relied on ___ rather than force to gather information.",
      choices: [
        "guile",
        "fidelity",
        "frugal",
        "forum"
      ],
      correct: 0,
      explanation: "Clever deception used instead of force describes guile — 'guile' fits."
    },
    {
      id: "easy-18-q25",
      wordId: "easy-18-25",
      passage: "The team walked onto the ___ grounds of the historic stadium.",
      choices: [
        "figurative",
        "hallowed",
        "gluttony",
        "frugal"
      ],
      correct: 1,
      explanation: "Grounds regarded as deserving deep respect describe them being hallowed — 'hallowed' fits."
    }
  ],
  "easy-19": [
    {
      id: "easy-19-q1",
      wordId: "easy-19-1",
      passage: "The ___ intern managed to lock himself out of the office twice in one week.",
      choices: [
        "hapless",
        "immerse",
        "heinous",
        "implicate"
      ],
      correct: 0,
      explanation: "Someone repeatedly unlucky in small ways describes being hapless — 'hapless' fits."
    },
    {
      id: "easy-19-q2",
      wordId: "easy-19-2",
      passage: "The customer launched into a ___ about the store's return policy.",
      choices: [
        "harangue",
        "impassive",
        "moderate",
        "implicate"
      ],
      correct: 0,
      explanation: "A long, aggressive complaint describes a harangue — 'harangue' fits."
    },
    {
      id: "easy-19-q3",
      wordId: "easy-19-3",
      passage: "These ___ plants can survive frost that would kill most other flowers.",
      choices: [
        "hapless",
        "hardy",
        "heinous",
        "knell"
      ],
      correct: 1,
      explanation: "Plants able to survive difficult conditions describe them being hardy — 'hardy' fits."
    },
    {
      id: "easy-19-q4",
      wordId: "easy-19-4",
      passage: "Survivors gave a ___ account of the night the wildfire swept through town.",
      choices: [
        "harrowing",
        "harangue",
        "haughty",
        "imperious"
      ],
      correct: 0,
      explanation: "An account extremely distressing to hear describes it being harrowing — 'harrowing' fits."
    },
    {
      id: "easy-19-q5",
      wordId: "easy-19-5",
      passage: "The ___ critic dismissed the exhibit without even finishing his walk-through.",
      choices: [
        "moderate",
        "imperative",
        "haughty",
        "immutable"
      ],
      correct: 2,
      explanation: "Dismissing something with arrogant pride describes being haughty — 'haughty' fits."
    },
    {
      id: "easy-19-q6",
      wordId: "easy-19-6",
      passage: "The court described the crime as one of the most ___ it had ever seen.",
      choices: [
        "hierarchy",
        "implement",
        "harangue",
        "heinous"
      ],
      correct: 3,
      explanation: "A crime described as utterly wicked describes it being heinous — 'heinous' fits."
    },
    {
      id: "easy-19-q7",
      wordId: "easy-19-7",
      passage: "The company's rigid ___ made it hard for junior staff to be heard.",
      choices: [
        "impertinent",
        "hierarchy",
        "manifest",
        "immutable"
      ],
      correct: 1,
      explanation: "A ranked system making it hard for junior people to be heard describes a hierarchy — 'hierarchy' fits."
    },
    {
      id: "easy-19-q8",
      wordId: "easy-19-8",
      passage: "Voters were quick to point out the ___ of the candidate's own record.",
      choices: [
        "harrowing",
        "manifest",
        "hypocrisy",
        "illicit"
      ],
      correct: 2,
      explanation: "Claiming standards one doesn't actually follow describes hypocrisy — 'hypocrisy' fits."
    },
    {
      id: "easy-19-q9",
      wordId: "easy-19-9",
      passage: "Police shut down the ___ gambling operation running out of the warehouse.",
      choices: [
        "ingenious",
        "knell",
        "harrowing",
        "illicit"
      ],
      correct: 3,
      explanation: "An operation forbidden by law describes it being illicit — 'illicit' fits."
    },
    {
      id: "easy-19-q10",
      wordId: "easy-19-10",
      passage: "She ___d herself in the language by living abroad for a year.",
      choices: [
        "immerse",
        "hierarchy",
        "morose",
        "manifest"
      ],
      correct: 0,
      explanation: "Involving oneself deeply in an activity describes immersing oneself — 'immerse' fits."
    },
    {
      id: "easy-19-q11",
      wordId: "easy-19-11",
      passage: "The scientist insisted the laws of physics were ___, not up for debate.",
      choices: [
        "immerse",
        "immutable",
        "implicate",
        "hierarchy"
      ],
      correct: 1,
      explanation: "Rules considered unchangeable and fixed describe them being immutable — 'immutable' fits."
    },
    {
      id: "easy-19-q12",
      wordId: "easy-19-12",
      passage: "The judge remained ___ as the jury read the verdict aloud.",
      choices: [
        "harangue",
        "hapless",
        "illicit",
        "impassive"
      ],
      correct: 3,
      explanation: "Showing no emotion while hearing a major verdict describes being impassive — 'impassive' fits."
    },
    {
      id: "easy-19-q13",
      wordId: "easy-19-13",
      passage: "The waiter's ___ service made the evening feel effortless.",
      choices: [
        "impeccable",
        "impassive",
        "ingenious",
        "hypocrisy"
      ],
      correct: 0,
      explanation: "Service described as flawless describes it being impeccable — 'impeccable' fits."
    },
    {
      id: "easy-19-q14",
      wordId: "easy-19-14",
      passage: "It is ___ that the report be finished before the board meeting.",
      choices: [
        "imperative",
        "harrowing",
        "implement",
        "mundane"
      ],
      correct: 0,
      explanation: "Something described as extremely urgent and necessary describes it being imperative — 'imperative' fits."
    },
    {
      id: "easy-19-q15",
      wordId: "easy-19-15",
      passage: "The ___ manager rarely asked for input from her team.",
      choices: [
        "impetuous",
        "impassive",
        "hapless",
        "imperious"
      ],
      correct: 3,
      explanation: "A manager expecting obedience without asking for input describes being imperious — 'imperious' fits."
    },
    {
      id: "easy-19-q16",
      wordId: "easy-19-16",
      passage: "The student's ___ comment earned him a trip to the principal's office.",
      choices: [
        "immutable",
        "impeccable",
        "impertinent",
        "imperative"
      ],
      correct: 2,
      explanation: "A rude comment lacking proper respect describes it being impertinent — 'impertinent' fits."
    },
    {
      id: "easy-19-q17",
      wordId: "easy-19-17",
      passage: "His ___ decision to quit his job left the family scrambling for income.",
      choices: [
        "heinous",
        "imperious",
        "impetuous",
        "illicit"
      ],
      correct: 2,
      explanation: "A quick decision made without careful thought describes it being impetuous — 'impetuous' fits."
    },
    {
      id: "easy-19-q18",
      wordId: "easy-19-18",
      passage: "The school plans to ___ the new grading system next semester.",
      choices: [
        "ingenious",
        "moderate",
        "implicate",
        "implement"
      ],
      correct: 3,
      explanation: "Putting a plan into effect describes implementing it — 'implement' fits."
    },
    {
      id: "easy-19-q19",
      wordId: "easy-19-19",
      passage: "New evidence ___d two additional suspects in the fraud scheme.",
      choices: [
        "immutable",
        "ingenious",
        "harrowing",
        "implicate"
      ],
      correct: 3,
      explanation: "Showing that people were involved in wrongdoing describes implicating them — 'implicate' fits."
    },
    {
      id: "easy-19-q20",
      wordId: "easy-19-20",
      passage: "Her ___ solution used ordinary household items to fix the broken pipe.",
      choices: [
        "harrowing",
        "illicit",
        "implicate",
        "ingenious"
      ],
      correct: 3,
      explanation: "A cleverly inventive solution using everyday items describes it being ingenious — 'ingenious' fits."
    },
    {
      id: "easy-19-q21",
      wordId: "easy-19-21",
      passage: "The factory's closing rang like a death ___ for the whole town's economy.",
      choices: [
        "knell",
        "impertinent",
        "implement",
        "hypocrisy"
      ],
      correct: 0,
      explanation: "A sound signaling an ending describes a knell — 'knell' fits."
    },
    {
      id: "easy-19-q22",
      wordId: "easy-19-22",
      passage: "Her stress began to ___ as constant headaches and sleeplessness.",
      choices: [
        "manifest",
        "hierarchy",
        "harangue",
        "hypocrisy"
      ],
      correct: 0,
      explanation: "A feeling showing up clearly through symptoms describes manifesting — 'manifest' fits."
    },
    {
      id: "easy-19-q23",
      wordId: "easy-19-23",
      passage: "The forecast calls for ___ rain throughout the weekend.",
      choices: [
        "harangue",
        "hapless",
        "moderate",
        "impassive"
      ],
      correct: 2,
      explanation: "Rain described as average, not extreme, describes it being moderate — 'moderate' fits."
    },
    {
      id: "easy-19-q24",
      wordId: "easy-19-24",
      passage: "He'd been ___ ever since losing the promotion to a coworker.",
      choices: [
        "harrowing",
        "hapless",
        "morose",
        "manifest"
      ],
      correct: 2,
      explanation: "A sullen, gloomy mood after a disappointment describes being morose — 'morose' fits."
    },
    {
      id: "easy-19-q25",
      wordId: "easy-19-25",
      passage: "After the thrill of the trip, everyday chores felt especially ___.",
      choices: [
        "haughty",
        "mundane",
        "morose",
        "implement"
      ],
      correct: 1,
      explanation: "Chores feeling ordinary compared to an exciting trip describe them being mundane — 'mundane' fits."
    }
  ],
  "easy-20": [
    {
      id: "easy-20-q1",
      wordId: "easy-20-1",
      passage: "The intersection is ___ for its frequent traffic accidents.",
      choices: [
        "notorious",
        "oration",
        "rash",
        "reprehensible"
      ],
      correct: 0,
      explanation: "A place famous for something bad describes it being notorious — 'notorious' fits."
    },
    {
      id: "easy-20-q2",
      wordId: "easy-20-2",
      passage: "As a ___ skier, she stuck to the easiest slopes for her first day.",
      choices: [
        "obsolete",
        "vocation",
        "novice",
        "rash"
      ],
      correct: 2,
      explanation: "Someone new to a skill sticking to the basics describes being a novice — 'novice' fits."
    },
    {
      id: "easy-20-q3",
      wordId: "easy-20-3",
      passage: "Floppy disks became ___ once cheap flash drives hit the market.",
      choices: [
        "palette",
        "obsolete",
        "proclivity",
        "notorious"
      ],
      correct: 1,
      explanation: "A technology no longer in use once replaced describes it being obsolete — 'obsolete' fits."
    },
    {
      id: "easy-20-q4",
      wordId: "easy-20-4",
      passage: "Cleaning the grease trap was the most ___ task on the entire job.",
      choices: [
        "palette",
        "odious",
        "pervasive",
        "renown"
      ],
      correct: 1,
      explanation: "The most unpleasant task on a job describes it being odious — 'odious' fits."
    },
    {
      id: "easy-20-q5",
      wordId: "easy-20-5",
      passage: "The valedictorian delivered a moving ___ at graduation.",
      choices: [
        "renown",
        "rectitude",
        "plethora",
        "oration"
      ],
      correct: 3,
      explanation: "A formal ceremonial speech describes an oration — 'oration' fits."
    },
    {
      id: "easy-20-q6",
      wordId: "easy-20-6",
      passage: "The cathedral's ___ ceiling took artisans nearly a decade to complete.",
      choices: [
        "primeval",
        "ornate",
        "proclivity",
        "promulgate"
      ],
      correct: 1,
      explanation: "A ceiling highly decorated and elaborate describes it being ornate — 'ornate' fits."
    },
    {
      id: "easy-20-q7",
      wordId: "easy-20-7",
      passage: "The designer chose a warm ___ of oranges and reds for the restaurant.",
      choices: [
        "novice",
        "primeval",
        "oration",
        "palette"
      ],
      correct: 3,
      explanation: "A range of colors used in a design describes a palette — 'palette' fits."
    },
    {
      id: "easy-20-q8",
      wordId: "easy-20-8",
      passage: "Her ___ explanation made a confusing topic feel simple.",
      choices: [
        "pellucid",
        "renown",
        "rash",
        "oration"
      ],
      correct: 0,
      explanation: "An explanation extremely clear in style describes it being pellucid — 'pellucid' fits."
    },
    {
      id: "easy-20-q9",
      wordId: "easy-20-9",
      passage: "The novel's ___ advisor secretly worked for the enemy the entire time.",
      choices: [
        "perfidious",
        "renown",
        "plausible",
        "prescient"
      ],
      correct: 0,
      explanation: "A character who is deceitful and untrustworthy describes being perfidious — 'perfidious' fits."
    },
    {
      id: "easy-20-q10",
      wordId: "easy-20-10",
      passage: "The smell of fresh coffee ___d every room of the small house.",
      choices: [
        "ornate",
        "permeate",
        "prescient",
        "vocation"
      ],
      correct: 1,
      explanation: "A smell spreading throughout an entire space describes it permeating there — 'permeate' fits."
    },
    {
      id: "easy-20-q11",
      wordId: "easy-20-11",
      passage: "A ___ sense of unease settled over the office after the announcement.",
      choices: [
        "primeval",
        "reprehensible",
        "rectitude",
        "pervasive"
      ],
      correct: 3,
      explanation: "A feeling noticeable throughout an entire area describes it being pervasive — 'pervasive' fits."
    },
    {
      id: "easy-20-q12",
      wordId: "easy-20-12",
      passage: "The detective needed a more ___ explanation than the one the suspect offered.",
      choices: [
        "plausible",
        "odious",
        "perfidious",
        "vocation"
      ],
      correct: 0,
      explanation: "An explanation that's reasonable and believable describes it being plausible — 'plausible' fits."
    },
    {
      id: "easy-20-q13",
      wordId: "easy-20-13",
      passage: "The buffet offered a ___ of options for every kind of diet.",
      choices: [
        "ornate",
        "prowess",
        "rash",
        "plethora"
      ],
      correct: 3,
      explanation: "A very large amount of variety describes a plethora — 'plethora' fits."
    },
    {
      id: "easy-20-q14",
      wordId: "easy-20-14",
      passage: "Her ___ warnings about the market crash proved eerily accurate.",
      choices: [
        "oration",
        "reprehensible",
        "prescient",
        "obsolete"
      ],
      correct: 2,
      explanation: "Warnings that turn out accurate before the fact describe them being prescient — 'prescient' fits."
    },
    {
      id: "easy-20-q15",
      wordId: "easy-20-15",
      passage: "The documentary explored a ___ forest untouched by modern development.",
      choices: [
        "primeval",
        "notorious",
        "plausible",
        "pervasive"
      ],
      correct: 0,
      explanation: "A forest from the earliest ages, untouched, describes it being primeval — 'primeval' fits."
    },
    {
      id: "easy-20-q16",
      wordId: "easy-20-16",
      passage: "Even as a toddler, he showed a ___ for taking things apart.",
      choices: [
        "novice",
        "rancor",
        "proclivity",
        "oration"
      ],
      correct: 2,
      explanation: "A natural tendency toward a behavior describes a proclivity — 'proclivity' fits."
    },
    {
      id: "easy-20-q17",
      wordId: "easy-20-17",
      passage: "The agency ___d new safety regulations following the investigation.",
      choices: [
        "odious",
        "rash",
        "obsolete",
        "promulgate"
      ],
      correct: 3,
      explanation: "Officially announcing new rules describes promulgating them — 'promulgate' fits."
    },
    {
      id: "easy-20-q18",
      wordId: "easy-20-18",
      passage: "The dog's ___ for digging quickly wrecked the new flower bed.",
      choices: [
        "novice",
        "notorious",
        "oration",
        "propensity"
      ],
      correct: 3,
      explanation: "A natural inclination toward a behavior describes a propensity — 'propensity' fits."
    },
    {
      id: "easy-20-q19",
      wordId: "easy-20-19",
      passage: "Her ___ on the violin earned her a spot in the national youth orchestra.",
      choices: [
        "rancor",
        "novice",
        "reprehensible",
        "prowess"
      ],
      correct: 3,
      explanation: "Great skill in a particular activity describes prowess — 'prowess' fits."
    },
    {
      id: "easy-20-q20",
      wordId: "easy-20-20",
      passage: "Years after the merger, some ___ between the two teams still lingered.",
      choices: [
        "rancor",
        "notorious",
        "prescient",
        "plethora"
      ],
      correct: 0,
      explanation: "Bitter, long-lasting resentment lingering after a conflict describes rancor — 'rancor' fits."
    },
    {
      id: "easy-20-q21",
      wordId: "easy-20-21",
      passage: "The judge was known throughout the state for his unshakable ___.",
      choices: [
        "odious",
        "rancor",
        "plethora",
        "rectitude"
      ],
      correct: 3,
      explanation: "Moral integrity known throughout a career describes rectitude — 'rectitude' fits."
    },
    {
      id: "easy-20-q22",
      wordId: "easy-20-22",
      passage: "The coach's treatment of the injured player was widely called ___.",
      choices: [
        "rectitude",
        "reprehensible",
        "obsolete",
        "renown"
      ],
      correct: 1,
      explanation: "Behavior deserving strong condemnation describes it being reprehensible — 'reprehensible' fits."
    },
    {
      id: "easy-20-q23",
      wordId: "easy-20-23",
      passage: "Quitting on the spot was a ___ decision he later regretted.",
      choices: [
        "proclivity",
        "rash",
        "rancor",
        "plethora"
      ],
      correct: 1,
      explanation: "A hasty decision made without careful thought describes it being rash — 'rash' fits."
    },
    {
      id: "easy-20-q24",
      wordId: "easy-20-24",
      passage: "The chef earned international ___ for her inventive tasting menus.",
      choices: [
        "odious",
        "prescient",
        "propensity",
        "renown"
      ],
      correct: 3,
      explanation: "Being widely known and respected describes renown — 'renown' fits."
    },
    {
      id: "easy-20-q25",
      wordId: "easy-20-25",
      passage: "She always felt teaching was less a job than a ___.",
      choices: [
        "rectitude",
        "pellucid",
        "permeate",
        "vocation"
      ],
      correct: 3,
      explanation: "A career felt as a calling rather than just a job describes a vocation — 'vocation' fits."
    }
  ],
  "moderate-9": [
    {
      id: "moderate-9-q1",
      wordId: "moderate-9-1",
      passage: "After weeks of protest, the university finally ___d to the students' demands for a new policy.",
      choices: [
        "accost",
        "analgesic",
        "amenable",
        "accede"
      ],
      correct: 3,
      explanation: "Agreeing to a demand after resistance describes acceding — 'accede' fits."
    },
    {
      id: "moderate-9-q2",
      wordId: "moderate-9-2",
      passage: "The tailored jacket ___d her shoulders without looking stiff or exaggerated.",
      choices: [
        "aggrieved",
        "amenable",
        "accentuate",
        "amenity"
      ],
      correct: 2,
      explanation: "Emphasizing a feature attractively describes accentuating it — 'accentuate' fits."
    },
    {
      id: "moderate-9-q3",
      wordId: "moderate-9-3",
      passage: "The film received ___s from critics but struggled at the box office.",
      choices: [
        "affinity",
        "allocate",
        "accost",
        "accolade"
      ],
      correct: 3,
      explanation: "Awards of praise for an achievement describe accolades — 'accolade' fits."
    },
    {
      id: "moderate-9-q4",
      wordId: "moderate-9-4",
      passage: "A stranger ___d her outside the store, demanding she hand over her bag.",
      choices: [
        "analgesic",
        "inoculate",
        "acumen",
        "accost"
      ],
      correct: 3,
      explanation: "Boldly confronting someone describes accosting them — 'accost' fits."
    },
    {
      id: "moderate-9-q5",
      wordId: "moderate-9-5",
      passage: "He ___d to his parents' wishes and studied law instead of art.",
      choices: [
        "accolade",
        "amorous",
        "acquiesce",
        "adamant"
      ],
      correct: 2,
      explanation: "Accepting something reluctantly without protest describes acquiescing — 'acquiesce' fits."
    },
    {
      id: "moderate-9-q6",
      wordId: "moderate-9-6",
      passage: "The clinic worked around the clock to ___ the entire village against the outbreak.",
      choices: [
        "inoculate",
        "accentuate",
        "analgesic",
        "accede"
      ],
      correct: 0,
      explanation: "Introducing a vaccine to build immunity describes inoculating people — 'inoculate' fits."
    },
    {
      id: "moderate-9-q7",
      wordId: "moderate-9-7",
      passage: "Her business ___ helped the small shop survive a difficult economy.",
      choices: [
        "acumen",
        "aggregate",
        "affront",
        "adroit"
      ],
      correct: 0,
      explanation: "Sharp practical judgment helping a business survive describes acumen — 'acumen' fits."
    },
    {
      id: "moderate-9-q8",
      wordId: "moderate-9-8",
      passage: "The patient reported ___ pain in his lower back after the fall.",
      choices: [
        "analgesic",
        "accost",
        "acute",
        "amenable"
      ],
      correct: 2,
      explanation: "Pain described as sharp and severe describes it being acute — 'acute' fits."
    },
    {
      id: "moderate-9-q9",
      wordId: "moderate-9-9",
      passage: "She remained ___ that the project could be finished on schedule.",
      choices: [
        "affinity",
        "adamant",
        "alacrity",
        "anarchist"
      ],
      correct: 1,
      explanation: "Being firmly resolved and refusing to be persuaded otherwise describes being adamant — 'adamant' fits."
    },
    {
      id: "moderate-9-q10",
      wordId: "moderate-9-10",
      passage: "His ___ handling of the tense negotiation impressed everyone in the room.",
      choices: [
        "acute",
        "allocate",
        "analgesic",
        "adroit"
      ],
      correct: 3,
      explanation: "Handling a tense situation with clever skill describes being adroit — 'adroit' fits."
    },
    {
      id: "moderate-9-q11",
      wordId: "moderate-9-11",
      passage: "The pop star seemed uncomfortable with the fans' constant ___.",
      choices: [
        "inoculate",
        "affinity",
        "accentuate",
        "adulation"
      ],
      correct: 3,
      explanation: "Excessive, intense admiration from fans describes adulation — 'adulation' fits."
    },
    {
      id: "moderate-9-q12",
      wordId: "moderate-9-12",
      passage: "She's always had an ___ for old maps and forgotten places.",
      choices: [
        "accentuate",
        "affinity",
        "ameliorate",
        "accost"
      ],
      correct: 1,
      explanation: "A natural liking for something specific describes an affinity — 'affinity' fits."
    },
    {
      id: "moderate-9-q13",
      wordId: "moderate-9-13",
      passage: "Being left off the guest list felt like a deliberate ___ to the whole family.",
      choices: [
        "amenable",
        "affront",
        "adroit",
        "analgesic"
      ],
      correct: 1,
      explanation: "An action seen as a deliberate insult describes an affront — 'affront' fits."
    },
    {
      id: "moderate-9-q14",
      wordId: "moderate-9-14",
      passage: "She got a ___ thrill watching her daughter accept the award she'd once dreamed of winning.",
      choices: [
        "vicarious",
        "affinity",
        "allocate",
        "aggrieved"
      ],
      correct: 0,
      explanation: "Experiencing something indirectly through another's success describes it being vicarious — 'vicarious' fits."
    },
    {
      id: "moderate-9-q15",
      wordId: "moderate-9-15",
      passage: "The report combines survey data from twelve countries into a single ___.",
      choices: [
        "aggregate",
        "ameliorate",
        "adamant",
        "amenable"
      ],
      correct: 0,
      explanation: "Combining separate elements into a single whole describes an aggregate — 'aggregate' fits."
    },
    {
      id: "moderate-9-q16",
      wordId: "moderate-9-16",
      passage: "Several ___ shareholders filed a lawsuit after the stock's sudden collapse.",
      choices: [
        "aggrieved",
        "accentuate",
        "acumen",
        "adulation"
      ],
      correct: 0,
      explanation: "Shareholders feeling wronged after a loss describe being aggrieved — 'aggrieved' fits."
    },
    {
      id: "moderate-9-q17",
      wordId: "moderate-9-17",
      passage: "The volunteers accepted the extra shift with surprising ___.",
      choices: [
        "adamant",
        "affinity",
        "alacrity",
        "adroit"
      ],
      correct: 2,
      explanation: "Accepting extra work with cheerful eagerness describes alacrity — 'alacrity' fits."
    },
    {
      id: "moderate-9-q18",
      wordId: "moderate-9-18",
      passage: "The city plans to ___ more funding to public transportation next year.",
      choices: [
        "allocate",
        "adamant",
        "amalgamate",
        "alacrity"
      ],
      correct: 0,
      explanation: "Distributing resources for a specific purpose describes allocating them — 'allocate' fits."
    },
    {
      id: "moderate-9-q19",
      wordId: "moderate-9-19",
      passage: "The three small clinics ___d into one larger regional hospital.",
      choices: [
        "accede",
        "amalgamate",
        "accost",
        "ameliorate"
      ],
      correct: 1,
      explanation: "Separate entities combining into one describes amalgamating — 'amalgamate' fits."
    },
    {
      id: "moderate-9-q20",
      wordId: "moderate-9-20",
      passage: "New irrigation systems helped ___ the effects of the drought.",
      choices: [
        "analgesic",
        "ameliorate",
        "inoculate",
        "amenable"
      ],
      correct: 1,
      explanation: "Making a bad situation better describes ameliorating it — 'ameliorate' fits."
    },
    {
      id: "moderate-9-q21",
      wordId: "moderate-9-21",
      passage: "Fortunately, our landlord was ___ to a slightly later move-in date.",
      choices: [
        "amenable",
        "analgesic",
        "accolade",
        "amorous"
      ],
      correct: 0,
      explanation: "Being open and willing to accept a suggestion describes being amenable — 'amenable' fits."
    },
    {
      id: "moderate-9-q22",
      wordId: "moderate-9-22",
      passage: "The apartment complex offers ___s like a rooftop pool and a gym.",
      choices: [
        "aggrieved",
        "ameliorate",
        "amenity",
        "acquiesce"
      ],
      correct: 2,
      explanation: "Features that provide comfort and convenience describe amenities — 'amenity' fits."
    },
    {
      id: "moderate-9-q23",
      wordId: "moderate-9-23",
      passage: "The old letters revealed an ___ side of the otherwise reserved general.",
      choices: [
        "analgesic",
        "acute",
        "amorous",
        "accede"
      ],
      correct: 2,
      explanation: "A romantic, loving side of someone describes it being amorous — 'amorous' fits."
    },
    {
      id: "moderate-9-q24",
      wordId: "moderate-9-24",
      passage: "The doctor prescribed a mild ___ for the post-surgery discomfort.",
      choices: [
        "aggrieved",
        "analgesic",
        "allocate",
        "accolade"
      ],
      correct: 1,
      explanation: "A drug that relieves pain describes an analgesic — 'analgesic' fits."
    },
    {
      id: "moderate-9-q25",
      wordId: "moderate-9-25",
      passage: "The historical novel follows a young ___ during a turbulent revolution.",
      choices: [
        "amalgamate",
        "amorous",
        "anarchist",
        "acumen"
      ],
      correct: 2,
      explanation: "A person believing all government should be abolished describes an anarchist — 'anarchist' fits."
    }
  ],
  "moderate-13": [
    {
      id: "moderate-13-q1",
      wordId: "moderate-13-1",
      passage: "The negotiations were ___ with tension from the very first session.",
      choices: [
        "insinuate",
        "injunction",
        "interject",
        "fraught"
      ],
      correct: 3,
      explanation: "Being filled with a distressing quality throughout describes being fraught — 'fraught' fits."
    },
    {
      id: "moderate-13-q2",
      wordId: "moderate-13-2",
      passage: "The band went on a five-year ___ before releasing their comeback album.",
      choices: [
        "insipid",
        "hiatus",
        "indolent",
        "indigenous"
      ],
      correct: 1,
      explanation: "A pause or gap in a band's activity describes a hiatus — 'hiatus' fits."
    },
    {
      id: "moderate-13-q3",
      wordId: "moderate-13-3",
      passage: "The meeting devolved into an ___ debate over font choices.",
      choices: [
        "intractable",
        "intimation",
        "instigate",
        "inane"
      ],
      correct: 3,
      explanation: "A silly debate lacking real substance describes it being inane — 'inane' fits."
    },
    {
      id: "moderate-13-q4",
      wordId: "moderate-13-4",
      passage: "The ___ barking next door kept the whole street awake.",
      choices: [
        "insinuate",
        "intractable",
        "inundate",
        "incessant"
      ],
      correct: 3,
      explanation: "Barking continuing without pause describes it being incessant — 'incessant' fits."
    },
    {
      id: "moderate-13-q5",
      wordId: "moderate-13-5",
      passage: "Her ___ toward caution served her well as a financial planner.",
      choices: [
        "inhibit",
        "hiatus",
        "inclination",
        "incessant"
      ],
      correct: 2,
      explanation: "A natural tendency or preference describes an inclination — 'inclination' fits."
    },
    {
      id: "moderate-13-q6",
      wordId: "moderate-13-6",
      passage: "Salaries rise in small ___s each year based on performance reviews.",
      choices: [
        "intractable",
        "hiatus",
        "increment",
        "fraught"
      ],
      correct: 2,
      explanation: "Small regular increases in value describe increments — 'increment' fits."
    },
    {
      id: "moderate-13-q7",
      wordId: "moderate-13-7",
      passage: "The ___ faced a tough challenge from a well-funded newcomer.",
      choices: [
        "incessant",
        "incumbent",
        "interminable",
        "insinuate"
      ],
      correct: 1,
      explanation: "The current holder of an office describes an incumbent — 'incumbent' fits."
    },
    {
      id: "moderate-13-q8",
      wordId: "moderate-13-8",
      passage: "The exhibit highlights art created by ___ communities across the region.",
      choices: [
        "injunction",
        "inhibit",
        "infusion",
        "indigenous"
      ],
      correct: 3,
      explanation: "Communities native to a particular region describe them being indigenous — 'indigenous' fits."
    },
    {
      id: "moderate-13-q9",
      wordId: "moderate-13-9",
      passage: "Public ___ grew after details of the cover-up were finally revealed.",
      choices: [
        "indignation",
        "indolent",
        "interject",
        "injunction"
      ],
      correct: 0,
      explanation: "Anger provoked by an injustice describes indignation — 'indignation' fits."
    },
    {
      id: "moderate-13-q10",
      wordId: "moderate-13-10",
      passage: "The ___ cat spent most of its day sleeping in the sun.",
      choices: [
        "intractable",
        "inept",
        "indolent",
        "inclination"
      ],
      correct: 2,
      explanation: "A cat habitually lazy and avoiding effort describes it being indolent — 'indolent' fits."
    },
    {
      id: "moderate-13-q11",
      wordId: "moderate-13-11",
      passage: "The medication is designed to ___ sleep within thirty minutes.",
      choices: [
        "innovate",
        "induce",
        "fraught",
        "incumbent"
      ],
      correct: 1,
      explanation: "Bringing about a particular state or condition describes inducing it — 'induce' fits."
    },
    {
      id: "moderate-13-q12",
      wordId: "moderate-13-12",
      passage: "His ___ handling of the crisis cost the company several major clients.",
      choices: [
        "indigenous",
        "infusion",
        "inept",
        "interject"
      ],
      correct: 2,
      explanation: "Handling a crisis without skill describes being inept — 'inept' fits."
    },
    {
      id: "moderate-13-q13",
      wordId: "moderate-13-13",
      passage: "The team welcomed a fresh ___ of talent after the offseason trades.",
      choices: [
        "infusion",
        "indignation",
        "insipid",
        "inane"
      ],
      correct: 0,
      explanation: "The introduction of a new element into a group describes an infusion — 'infusion' fits."
    },
    {
      id: "moderate-13-q14",
      wordId: "moderate-13-14",
      passage: "Certain medications can ___ the body's ability to absorb calcium.",
      choices: [
        "innovate",
        "incumbent",
        "inhibit",
        "intimation"
      ],
      correct: 2,
      explanation: "Hindering or restraining a bodily process describes inhibiting it — 'inhibit' fits."
    },
    {
      id: "moderate-13-q15",
      wordId: "moderate-13-15",
      passage: "The judge issued an ___ blocking construction until the review was complete.",
      choices: [
        "injunction",
        "inept",
        "intractable",
        "indignation"
      ],
      correct: 0,
      explanation: "A formal court order requiring or forbidding an action describes an injunction — 'injunction' fits."
    },
    {
      id: "moderate-13-q16",
      wordId: "moderate-13-16",
      passage: "The small team was given full freedom to ___ without corporate oversight.",
      choices: [
        "insinuate",
        "innovate",
        "intrepid",
        "incessant"
      ],
      correct: 1,
      explanation: "Introducing new ideas and methods describes innovating — 'innovate' fits."
    },
    {
      id: "moderate-13-q17",
      wordId: "moderate-13-17",
      passage: "He ___d that the results had been altered without ever saying so directly.",
      choices: [
        "inhibit",
        "insinuate",
        "intractable",
        "intrepid"
      ],
      correct: 1,
      explanation: "Suggesting something indirectly and unpleasantly describes insinuating it — 'insinuate' fits."
    },
    {
      id: "moderate-13-q18",
      wordId: "moderate-13-18",
      passage: "The remake felt ___ compared to the sharp wit of the original.",
      choices: [
        "hiatus",
        "insipid",
        "intrepid",
        "indigenous"
      ],
      correct: 1,
      explanation: "Something lacking flavor and interest describes it being insipid — 'insipid' fits."
    },
    {
      id: "moderate-13-q19",
      wordId: "moderate-13-19",
      passage: "Investigators believe a single rumor was enough to ___ the riot.",
      choices: [
        "inhibit",
        "instigate",
        "interject",
        "injunction"
      ],
      correct: 1,
      explanation: "Bringing about an event through provocation describes instigating it — 'instigate' fits."
    },
    {
      id: "moderate-13-q20",
      wordId: "moderate-13-20",
      passage: "She ___d with a question just as the presenter was wrapping up.",
      choices: [
        "inept",
        "interject",
        "indignation",
        "hiatus"
      ],
      correct: 1,
      explanation: "Interrupting with a remark describes interjecting — 'interject' fits."
    },
    {
      id: "moderate-13-q21",
      wordId: "moderate-13-21",
      passage: "The ___ wait at the DMV tested everyone's patience.",
      choices: [
        "inept",
        "intractable",
        "induce",
        "interminable"
      ],
      correct: 3,
      explanation: "A wait seemingly without end describes it being interminable — 'interminable' fits."
    },
    {
      id: "moderate-13-q22",
      wordId: "moderate-13-22",
      passage: "There was no ___ of trouble until the sudden resignation announcement.",
      choices: [
        "hiatus",
        "incumbent",
        "intimation",
        "indolent"
      ],
      correct: 2,
      explanation: "An indirect hint of something happening describes an intimation — 'intimation' fits."
    },
    {
      id: "moderate-13-q23",
      wordId: "moderate-13-23",
      passage: "The two sides remained locked in an ___ dispute over water rights.",
      choices: [
        "inept",
        "intractable",
        "indolent",
        "infusion"
      ],
      correct: 1,
      explanation: "A dispute very difficult to manage or solve describes it being intractable — 'intractable' fits."
    },
    {
      id: "moderate-13-q24",
      wordId: "moderate-13-24",
      passage: "The ___ explorer was the first to chart the entire river system.",
      choices: [
        "intrepid",
        "incessant",
        "induce",
        "indignation"
      ],
      correct: 0,
      explanation: "A fearless, adventurous explorer describes being intrepid — 'intrepid' fits."
    },
    {
      id: "moderate-13-q25",
      wordId: "moderate-13-25",
      passage: "The hotline was ___d with calls within minutes of the announcement.",
      choices: [
        "interminable",
        "interject",
        "indigenous",
        "inundate"
      ],
      correct: 3,
      explanation: "Being overwhelmed with a large amount describes being inundated — 'inundate' fits."
    }
  ],
  "moderate-14": [
    {
      id: "moderate-14-q1",
      wordId: "moderate-14-1",
      passage: "The hummingbird's ___ feathers shimmered green and gold in the sunlight.",
      choices: [
        "kudos",
        "judicious",
        "laudatory",
        "iridescent"
      ],
      correct: 3,
      explanation: "Feathers showing shifting rainbow colors describe them being iridescent — 'iridescent' fits."
    },
    {
      id: "moderate-14-q2",
      wordId: "moderate-14-2",
      passage: "A ___ use of the limited budget kept the project on track.",
      choices: [
        "maxim",
        "manifold",
        "judicious",
        "meritorious"
      ],
      correct: 2,
      explanation: "Using resources with good sense and judgment describes it being judicious — 'judicious' fits."
    },
    {
      id: "moderate-14-q3",
      wordId: "moderate-14-3",
      passage: "The chef earned ___ from critics for her inventive tasting menu.",
      choices: [
        "kudos",
        "lavish",
        "manifold",
        "libertarian"
      ],
      correct: 0,
      explanation: "Praise for an achievement describes kudos — 'kudos' fits."
    },
    {
      id: "moderate-14-q4",
      wordId: "moderate-14-4",
      passage: "He was charged with grand ___ after the stolen goods were recovered.",
      choices: [
        "maudlin",
        "modicum",
        "larceny",
        "latent"
      ],
      correct: 2,
      explanation: "The unlawful taking of property describes larceny — 'larceny' fits."
    },
    {
      id: "moderate-14-q5",
      wordId: "moderate-14-5",
      passage: "The therapist helped uncover a ___ talent for painting she never knew she had.",
      choices: [
        "judicious",
        "maxim",
        "mores",
        "latent"
      ],
      correct: 3,
      explanation: "A talent present but not yet developed describes it being latent — 'latent' fits."
    },
    {
      id: "moderate-14-q6",
      wordId: "moderate-14-6",
      passage: "The obituary was full of ___ remarks from former colleagues.",
      choices: [
        "kudos",
        "manifold",
        "laudatory",
        "maudlin"
      ],
      correct: 2,
      explanation: "Remarks expressing praise describe them being laudatory — 'laudatory' fits."
    },
    {
      id: "moderate-14-q7",
      wordId: "moderate-14-7",
      passage: "The company threw a ___ party to celebrate its tenth anniversary.",
      choices: [
        "kudos",
        "mollify",
        "maxim",
        "lavish"
      ],
      correct: 3,
      explanation: "A party that is sumptuously rich and elaborate describes it being lavish — 'lavish' fits."
    },
    {
      id: "moderate-14-q8",
      wordId: "moderate-14-8",
      passage: "The judge was unusually ___ given the defendant's clean record.",
      choices: [
        "mollify",
        "lenient",
        "maudlin",
        "mutable"
      ],
      correct: 1,
      explanation: "Being merciful and not strict describes being lenient — 'lenient' fits."
    },
    {
      id: "moderate-14-q9",
      wordId: "moderate-14-9",
      passage: "The heat left everyone feeling ___ by mid-afternoon.",
      choices: [
        "medley",
        "manifold",
        "kudos",
        "lethargic"
      ],
      correct: 3,
      explanation: "Feeling sluggish and lacking energy describes being lethargic — 'lethargic' fits."
    },
    {
      id: "moderate-14-q10",
      wordId: "moderate-14-10",
      passage: "His constant lateness had become a real ___ for the team.",
      choices: [
        "medley",
        "liability",
        "lavish",
        "lethargic"
      ],
      correct: 1,
      explanation: "Something that is a disadvantage or burden describes a liability — 'liability' fits."
    },
    {
      id: "moderate-14-q11",
      wordId: "moderate-14-11",
      passage: "The candidate ran on a strongly ___ economic platform.",
      choices: [
        "lavish",
        "libertarian",
        "modicum",
        "mandate"
      ],
      correct: 1,
      explanation: "A platform favoring maximum individual liberty describes it being libertarian — 'libertarian' fits."
    },
    {
      id: "moderate-14-q12",
      wordId: "moderate-14-12",
      passage: "The ___ dancer seemed to float across the stage.",
      choices: [
        "lithe",
        "luminous",
        "mores",
        "latent"
      ],
      correct: 0,
      explanation: "A dancer thin, flexible, and graceful describes being lithe — 'lithe' fits."
    },
    {
      id: "moderate-14-q13",
      wordId: "moderate-14-13",
      passage: "The ___ jellyfish lit up the dark aquarium tank.",
      choices: [
        "modicum",
        "luminous",
        "medley",
        "maverick"
      ],
      correct: 1,
      explanation: "Something emitting a soft, glowing light describes it being luminous — 'luminous' fits."
    },
    {
      id: "moderate-14-q14",
      wordId: "moderate-14-14",
      passage: "Gold is prized partly because it's so ___ and easy to work with.",
      choices: [
        "malleable",
        "lavish",
        "mutable",
        "modicum"
      ],
      correct: 0,
      explanation: "A material easily shaped or influenced describes it being malleable — 'malleable' fits."
    },
    {
      id: "moderate-14-q15",
      wordId: "moderate-14-15",
      passage: "The new council was elected with a clear ___ for reform.",
      choices: [
        "mutable",
        "lenient",
        "mandate",
        "iridescent"
      ],
      correct: 2,
      explanation: "An official authorization to act describes a mandate — 'mandate' fits."
    },
    {
      id: "moderate-14-q16",
      wordId: "moderate-14-16",
      passage: "The city's ___ problems ranged from traffic to aging infrastructure.",
      choices: [
        "maxim",
        "maverick",
        "latent",
        "manifold"
      ],
      correct: 3,
      explanation: "Problems that are many and varied describe them being manifold — 'manifold' fits."
    },
    {
      id: "moderate-14-q17",
      wordId: "moderate-14-17",
      passage: "The speech turned ___ as he recounted every difficulty of the past year.",
      choices: [
        "manifold",
        "iridescent",
        "maudlin",
        "judicious"
      ],
      correct: 2,
      explanation: "A speech becoming excessively sentimental describes it being maudlin — 'maudlin' fits."
    },
    {
      id: "moderate-14-q18",
      wordId: "moderate-14-18",
      passage: "The company's founder was a ___ who ignored most industry norms.",
      choices: [
        "medley",
        "maudlin",
        "maverick",
        "mutable"
      ],
      correct: 2,
      explanation: "An independent-minded person who doesn't follow convention describes a maverick — 'maverick' fits."
    },
    {
      id: "moderate-14-q19",
      wordId: "moderate-14-19",
      passage: "\"Slow and steady wins the race\" is a ___ most kids learn early.",
      choices: [
        "mores",
        "maxim",
        "liability",
        "malleable"
      ],
      correct: 1,
      explanation: "A short memorable statement expressing a general truth describes a maxim — 'maxim' fits."
    },
    {
      id: "moderate-14-q20",
      wordId: "moderate-14-20",
      passage: "The choir closed the concert with a ___ of holiday songs.",
      choices: [
        "mollify",
        "medley",
        "lithe",
        "malleable"
      ],
      correct: 1,
      explanation: "A varied mixture of musical pieces describes a medley — 'medley' fits."
    },
    {
      id: "moderate-14-q21",
      wordId: "moderate-14-21",
      passage: "She received a ___ service award after twenty years with the agency.",
      choices: [
        "latent",
        "meritorious",
        "mollify",
        "mandate"
      ],
      correct: 1,
      explanation: "An award for something deserving praise describes it being meritorious — 'meritorious' fits."
    },
    {
      id: "moderate-14-q22",
      wordId: "moderate-14-22",
      passage: "Even a ___ of effort would have improved the final result.",
      choices: [
        "lenient",
        "modicum",
        "maverick",
        "meritorious"
      ],
      correct: 1,
      explanation: "A small amount of something describes a modicum — 'modicum' fits."
    },
    {
      id: "moderate-14-q23",
      wordId: "moderate-14-23",
      passage: "A partial refund was enough to ___ most of the frustrated customers.",
      choices: [
        "liability",
        "mores",
        "mollify",
        "kudos"
      ],
      correct: 2,
      explanation: "Calming someone's anger describes mollifying them — 'mollify' fits."
    },
    {
      id: "moderate-14-q24",
      wordId: "moderate-14-24",
      passage: "The novel examines the shifting social ___ of the small town over decades.",
      choices: [
        "maxim",
        "kudos",
        "mores",
        "modicum"
      ],
      correct: 2,
      explanation: "The customs and accepted behaviors of a group describe mores — 'mores' fits."
    },
    {
      id: "moderate-14-q25",
      wordId: "moderate-14-25",
      passage: "Public opinion on the issue proved far more ___ than pollsters expected.",
      choices: [
        "mores",
        "mutable",
        "maverick",
        "laudatory"
      ],
      correct: 1,
      explanation: "Opinion that is liable to change describes it being mutable — 'mutable' fits."
    }
  ],
  "moderate-15": [
    {
      id: "moderate-15-q1",
      wordId: "moderate-15-1",
      passage: "The city offers ___ options for weekend entertainment.",
      choices: [
        "oblique",
        "nascent",
        "pariah",
        "myriad"
      ],
      correct: 3,
      explanation: "A very great number of options describes them being myriad — 'myriad' fits."
    },
    {
      id: "moderate-15-q2",
      wordId: "moderate-15-2",
      passage: "Losing the championship game was the ___ of his athletic career.",
      choices: [
        "oblique",
        "nadir",
        "nondescript",
        "pallid"
      ],
      correct: 1,
      explanation: "The lowest point of a career describes a nadir — 'nadir' fits."
    },
    {
      id: "moderate-15-q3",
      wordId: "moderate-15-3",
      passage: "Investors took an early interest in the ___ solar technology.",
      choices: [
        "patent",
        "nascent",
        "oscillate",
        "nocturnal"
      ],
      correct: 1,
      explanation: "A technology just beginning to develop describes it being nascent — 'nascent' fits."
    },
    {
      id: "moderate-15-q4",
      wordId: "moderate-15-4",
      passage: "The lawsuit accused the company of ___ handling of hazardous waste.",
      choices: [
        "negligent",
        "orthodox",
        "parody",
        "myriad"
      ],
      correct: 0,
      explanation: "Failing to take proper care describes being negligent — 'negligent' fits."
    },
    {
      id: "moderate-15-q5",
      wordId: "moderate-15-5",
      passage: "As a ___ in the kitchen, he stuck to the simplest recipes at first.",
      choices: [
        "neophyte",
        "oblivious",
        "pacific",
        "oscillate"
      ],
      correct: 0,
      explanation: "A person new to a skill describes a neophyte — 'neophyte' fits."
    },
    {
      id: "moderate-15-q6",
      wordId: "moderate-15-6",
      passage: "Owls are ___ hunters, most active well after sunset.",
      choices: [
        "nocturnal",
        "patent",
        "pallid",
        "whimsical"
      ],
      correct: 0,
      explanation: "Animals active mostly at night describe them being nocturnal — 'nocturnal' fits."
    },
    {
      id: "moderate-15-q7",
      wordId: "moderate-15-7",
      passage: "The club charges only a ___ fee to cover snacks and supplies.",
      choices: [
        "myriad",
        "oblivious",
        "patent",
        "nominal"
      ],
      correct: 3,
      explanation: "A fee that is very small in amount describes it being nominal — 'nominal' fits."
    },
    {
      id: "moderate-15-q8",
      wordId: "moderate-15-8",
      passage: "He gave a ___ shrug, as if the huge decision meant nothing.",
      choices: [
        "onerous",
        "pacific",
        "oscillate",
        "nonchalant"
      ],
      correct: 3,
      explanation: "A relaxed reaction that seems unconcerned describes being nonchalant — 'nonchalant' fits."
    },
    {
      id: "moderate-15-q9",
      wordId: "moderate-15-9",
      passage: "The spy's cover was a ___ office job in a forgettable building.",
      choices: [
        "nondescript",
        "paragon",
        "neophyte",
        "nominal"
      ],
      correct: 0,
      explanation: "A job lacking any distinctive features describes it being nondescript — 'nondescript' fits."
    },
    {
      id: "moderate-15-q10",
      wordId: "moderate-15-10",
      passage: "Workers wore masks to avoid inhaling the ___ fumes.",
      choices: [
        "pacific",
        "paragon",
        "neophyte",
        "noxious"
      ],
      correct: 3,
      explanation: "Fumes harmful to health describe them being noxious — 'noxious' fits."
    },
    {
      id: "moderate-15-q11",
      wordId: "moderate-15-11",
      passage: "He made an ___ reference to the layoffs without naming any names.",
      choices: [
        "oblique",
        "myriad",
        "nascent",
        "negligent"
      ],
      correct: 0,
      explanation: "A reference made indirectly rather than stated plainly describes it being oblique — 'oblique' fits."
    },
    {
      id: "moderate-15-q12",
      wordId: "moderate-15-12",
      passage: "She was completely ___ to the surprise party being planned downstairs.",
      choices: [
        "pacific",
        "oblivious",
        "nominal",
        "parody"
      ],
      correct: 1,
      explanation: "Being unaware of what's happening around oneself describes being oblivious — 'oblivious' fits."
    },
    {
      id: "moderate-15-q13",
      wordId: "moderate-15-13",
      passage: "The children's book is full of ___ illustrations of talking animals.",
      choices: [
        "whimsical",
        "patent",
        "palatable",
        "nocturnal"
      ],
      correct: 0,
      explanation: "Playfully quirky, fanciful illustrations describe them being whimsical — 'whimsical' fits."
    },
    {
      id: "moderate-15-q14",
      wordId: "moderate-15-14",
      passage: "Dark clouds gathered on the horizon, giving the sky an ___ look.",
      choices: [
        "ominous",
        "orthodox",
        "oblivious",
        "negligent"
      ],
      correct: 0,
      explanation: "A look suggesting something bad is about to happen describes it being ominous — 'ominous' fits."
    },
    {
      id: "moderate-15-q15",
      wordId: "moderate-15-15",
      passage: "The new reporting requirements proved ___ for the small nonprofit.",
      choices: [
        "oblique",
        "onerous",
        "pariah",
        "ominous"
      ],
      correct: 1,
      explanation: "Requirements involving heavy, excessive effort describe them being onerous — 'onerous' fits."
    },
    {
      id: "moderate-15-q16",
      wordId: "moderate-15-16",
      passage: "Her ___ approach to teaching left little room for experimental methods.",
      choices: [
        "myriad",
        "partisan",
        "orthodox",
        "paragon"
      ],
      correct: 2,
      explanation: "An approach following traditional, conventional beliefs describes being orthodox — 'orthodox' fits."
    },
    {
      id: "moderate-15-q17",
      wordId: "moderate-15-17",
      passage: "His mood seemed to ___ wildly between excitement and dread.",
      choices: [
        "nonchalant",
        "pacific",
        "oscillate",
        "nadir"
      ],
      correct: 2,
      explanation: "Swinging back and forth between two states describes oscillating — 'oscillate' fits."
    },
    {
      id: "moderate-15-q18",
      wordId: "moderate-15-18",
      passage: "The negotiator took a ___ approach, avoiding confrontation at every turn.",
      choices: [
        "negligent",
        "pacific",
        "partisan",
        "whimsical"
      ],
      correct: 1,
      explanation: "An approach calm and aimed at making peace describes it being pacific — 'pacific' fits."
    },
    {
      id: "moderate-15-q19",
      wordId: "moderate-15-19",
      passage: "The compromise wasn't ideal, but it was ___ to both sides.",
      choices: [
        "palatable",
        "patent",
        "nonchalant",
        "myriad"
      ],
      correct: 0,
      explanation: "Something acceptable to consider, even if not perfect, describes it being palatable — 'palatable' fits."
    },
    {
      id: "moderate-15-q20",
      wordId: "moderate-15-20",
      passage: "His ___ complexion worried the nurse the moment he walked in.",
      choices: [
        "paragon",
        "pallid",
        "parody",
        "partisan"
      ],
      correct: 1,
      explanation: "A complexion pale from illness describes it being pallid — 'pallid' fits."
    },
    {
      id: "moderate-15-q21",
      wordId: "moderate-15-21",
      passage: "The old teacher was considered a ___ of patience by every student he'd ever had.",
      choices: [
        "nascent",
        "paragon",
        "whimsical",
        "nondescript"
      ],
      correct: 1,
      explanation: "A perfect example of a quality describes a paragon — 'paragon' fits."
    },
    {
      id: "moderate-15-q22",
      wordId: "moderate-15-22",
      passage: "After the scandal broke, he became something of a ___ in the industry.",
      choices: [
        "oscillate",
        "nascent",
        "pariah",
        "pallid"
      ],
      correct: 2,
      explanation: "An outcast from a group describes a pariah — 'pariah' fits."
    },
    {
      id: "moderate-15-q23",
      wordId: "moderate-15-23",
      passage: "The sketch was a gentle ___ of overly dramatic morning news shows.",
      choices: [
        "parody",
        "nominal",
        "nadir",
        "pacific"
      ],
      correct: 0,
      explanation: "A comic imitation of something describes a parody — 'parody' fits."
    },
    {
      id: "moderate-15-q24",
      wordId: "moderate-15-24",
      passage: "The vote split almost entirely along ___ lines.",
      choices: [
        "onerous",
        "partisan",
        "orthodox",
        "patent"
      ],
      correct: 1,
      explanation: "Lines dividing along party or cause loyalty describe them being partisan — 'partisan' fits."
    },
    {
      id: "moderate-15-q25",
      wordId: "moderate-15-25",
      passage: "It was ___ from his tone that he disagreed with the entire plan.",
      choices: [
        "myriad",
        "patent",
        "ominous",
        "onerous"
      ],
      correct: 1,
      explanation: "Something obvious and easily noticed describes it being patent — 'patent' fits."
    }
  ],
  "moderate-17": [
    {
      id: "moderate-17-q1",
      wordId: "moderate-17-1",
      passage: "It took months to ___ the rare parts needed to restore the old engine.",
      choices: [
        "rancid",
        "raze",
        "procure",
        "relish"
      ],
      correct: 2,
      explanation: "Obtaining something with effort describes procuring it — 'procure' fits."
    },
    {
      id: "moderate-17-q2",
      wordId: "moderate-17-2",
      passage: "His ___ outburst startled the otherwise quiet library.",
      choices: [
        "regurgitate",
        "profane",
        "raze",
        "refract"
      ],
      correct: 1,
      explanation: "Using vulgar or disrespectful language describes being profane — 'profane' fits."
    },
    {
      id: "moderate-17-q3",
      wordId: "moderate-17-3",
      passage: "He offered ___ apologies for showing up nearly an hour late.",
      choices: [
        "rancid",
        "zealous",
        "profuse",
        "procure"
      ],
      correct: 2,
      explanation: "Apologies given plentifully describe them being profuse — 'profuse' fits."
    },
    {
      id: "moderate-17-q4",
      wordId: "moderate-17-4",
      passage: "Social media allowed the rumor to ___ faster than anyone could correct it.",
      choices: [
        "relegate",
        "rancid",
        "prudence",
        "propagate"
      ],
      correct: 3,
      explanation: "An idea spreading rapidly describes propagating — 'propagate' fits."
    },
    {
      id: "moderate-17-q5",
      wordId: "moderate-17-5",
      passage: "She questioned the ___ of accepting gifts from clients.",
      choices: [
        "raucous",
        "propriety",
        "quotidian",
        "relish"
      ],
      correct: 1,
      explanation: "Conformity to accepted standards of behavior describes propriety — 'propriety' fits."
    },
    {
      id: "moderate-17-q6",
      wordId: "moderate-17-6",
      passage: "The film's ___ dialogue undercut its otherwise stunning visuals.",
      choices: [
        "raze",
        "rail",
        "rapport",
        "prosaic"
      ],
      correct: 3,
      explanation: "Dialogue that is dull and lacks imagination describes it being prosaic — 'prosaic' fits."
    },
    {
      id: "moderate-17-q7",
      wordId: "moderate-17-7",
      passage: "Financial ___ allowed them to retire comfortably a decade early.",
      choices: [
        "rancid",
        "prudence",
        "regurgitate",
        "quell"
      ],
      correct: 1,
      explanation: "Careful, sensible judgment about money describes prudence — 'prudence' fits."
    },
    {
      id: "moderate-17-q8",
      wordId: "moderate-17-8",
      passage: "The ___ smell of garlic filled the entire apartment.",
      choices: [
        "profane",
        "pungent",
        "rail",
        "raze"
      ],
      correct: 1,
      explanation: "A smell that is sharp and strong describes it being pungent — 'pungent' fits."
    },
    {
      id: "moderate-17-q9",
      wordId: "moderate-17-9",
      passage: "The court imposed ___ damages on top of the standard fine.",
      choices: [
        "relegate",
        "reciprocate",
        "propriety",
        "punitive"
      ],
      correct: 3,
      explanation: "Damages intended as punishment describe them being punitive — 'punitive' fits."
    },
    {
      id: "moderate-17-q10",
      wordId: "moderate-17-10",
      passage: "The ___ odor coming from the fridge meant something had gone bad.",
      choices: [
        "reciprocate",
        "raze",
        "profuse",
        "putrid"
      ],
      correct: 3,
      explanation: "An odor from decay describes something being putrid — 'putrid' fits."
    },
    {
      id: "moderate-17-q11",
      wordId: "moderate-17-11",
      passage: "Extra officers were sent in to ___ the growing unrest downtown.",
      choices: [
        "propriety",
        "rail",
        "quell",
        "relish"
      ],
      correct: 2,
      explanation: "Suppressing or ending unrest describes quelling it — 'quell' fits."
    },
    {
      id: "moderate-17-q12",
      wordId: "moderate-17-12",
      passage: "The novel finds unexpected beauty in the ___ details of factory life.",
      choices: [
        "refurbish",
        "prosaic",
        "quotidian",
        "rapport"
      ],
      correct: 2,
      explanation: "Ordinary, everyday details describe them being quotidian — 'quotidian' fits."
    },
    {
      id: "moderate-17-q13",
      wordId: "moderate-17-13",
      passage: "He ___d against the new parking regulations for the entire meeting.",
      choices: [
        "rail",
        "profane",
        "zealous",
        "punitive"
      ],
      correct: 0,
      explanation: "Complaining vehemently describes railing — 'rail' fits."
    },
    {
      id: "moderate-17-q14",
      wordId: "moderate-17-14",
      passage: "The butter had gone ___ after being left out overnight.",
      choices: [
        "profuse",
        "quotidian",
        "propagate",
        "rancid"
      ],
      correct: 3,
      explanation: "Food developing an unpleasant smell from decay describes it going rancid — 'rancid' fits."
    },
    {
      id: "moderate-17-q15",
      wordId: "moderate-17-15",
      passage: "The therapist built strong ___ with her clients within the first session.",
      choices: [
        "reciprocate",
        "rapport",
        "punitive",
        "reconcile"
      ],
      correct: 1,
      explanation: "A close, harmonious understanding between people describes rapport — 'rapport' fits."
    },
    {
      id: "moderate-17-q16",
      wordId: "moderate-17-16",
      passage: "The ___ volunteers arrived an hour early to set up for the fundraiser.",
      choices: [
        "rail",
        "zealous",
        "reciprocate",
        "propriety"
      ],
      correct: 1,
      explanation: "Being filled with great energy and enthusiasm for a cause describes being zealous — 'zealous' fits."
    },
    {
      id: "moderate-17-q17",
      wordId: "moderate-17-17",
      passage: "A ___ cheer erupted the moment the winning goal was scored.",
      choices: [
        "rail",
        "procure",
        "raucous",
        "quotidian"
      ],
      correct: 2,
      explanation: "A loud, disorderly cheer describes it being raucous — 'raucous' fits."
    },
    {
      id: "moderate-17-q18",
      wordId: "moderate-17-18",
      passage: "The old stadium was ___d to make room for a new shopping center.",
      choices: [
        "putrid",
        "raze",
        "profuse",
        "regurgitate"
      ],
      correct: 1,
      explanation: "Completely destroying a building describes razing it — 'raze' fits."
    },
    {
      id: "moderate-17-q19",
      wordId: "moderate-17-19",
      passage: "He didn't ___ her enthusiasm, which made the conversation awkward.",
      choices: [
        "relish",
        "reciprocate",
        "propriety",
        "rail"
      ],
      correct: 1,
      explanation: "Responding to a feeling with a similar one describes reciprocating it — 'reciprocate' fits."
    },
    {
      id: "moderate-17-q20",
      wordId: "moderate-17-20",
      passage: "The estranged siblings finally ___d after their mother's funeral.",
      choices: [
        "reconcile",
        "propriety",
        "profuse",
        "prudence"
      ],
      correct: 0,
      explanation: "Restoring friendly relations describes reconciling — 'reconcile' fits."
    },
    {
      id: "moderate-17-q21",
      wordId: "moderate-17-21",
      passage: "The prism ___s sunlight into a full spectrum of colors.",
      choices: [
        "propagate",
        "propriety",
        "refract",
        "profuse"
      ],
      correct: 2,
      explanation: "Bending light as it passes through a medium describes refracting it — 'refract' fits."
    },
    {
      id: "moderate-17-q22",
      wordId: "moderate-17-22",
      passage: "The city ___d the historic theater instead of tearing it down.",
      choices: [
        "refurbish",
        "quell",
        "quotidian",
        "prudence"
      ],
      correct: 0,
      explanation: "Renovating and cleaning up an old building describes refurbishing it — 'refurbish' fits."
    },
    {
      id: "moderate-17-q23",
      wordId: "moderate-17-23",
      passage: "The student simply ___d the textbook instead of forming his own argument.",
      choices: [
        "profuse",
        "prosaic",
        "raucous",
        "regurgitate"
      ],
      correct: 3,
      explanation: "Repeating information without processing it describes regurgitating it — 'regurgitate' fits."
    },
    {
      id: "moderate-17-q24",
      wordId: "moderate-17-24",
      passage: "After the injury, the star player was ___d to the bench for weeks.",
      choices: [
        "relish",
        "relegate",
        "zealous",
        "regurgitate"
      ],
      correct: 1,
      explanation: "Being assigned to a lower position describes being relegated — 'relegate' fits."
    },
    {
      id: "moderate-17-q25",
      wordId: "moderate-17-25",
      passage: "She ___d the chance to finally lead the project herself.",
      choices: [
        "profuse",
        "prosaic",
        "relish",
        "rapport"
      ],
      correct: 2,
      explanation: "Enjoying an opportunity greatly describes relishing it — 'relish' fits."
    }
  ],
  "moderate-19": [
    {
      id: "moderate-19-q1",
      wordId: "moderate-19-1",
      passage: "The film's slow pacing lingers on the ___ details of the feast.",
      choices: [
        "validate",
        "sensual",
        "strenuous",
        "vex"
      ],
      correct: 1,
      explanation: "Details relating to physical, sensory pleasure describe them being sensual — 'sensual' fits."
    },
    {
      id: "moderate-19-q2",
      wordId: "moderate-19-2",
      passage: "The lake looked perfectly ___ in the early morning light.",
      choices: [
        "verdant",
        "serene",
        "sovereign",
        "tenable"
      ],
      correct: 1,
      explanation: "Water calm, peaceful, and untroubled describes it being serene — 'serene' fits."
    },
    {
      id: "moderate-19-q3",
      wordId: "moderate-19-3",
      passage: "The ___ waiter checked on their table every few minutes.",
      choices: [
        "vehemently",
        "solicitous",
        "sovereign",
        "torrid"
      ],
      correct: 1,
      explanation: "A waiter showing eager attentiveness describes being solicitous — 'solicitous' fits."
    },
    {
      id: "moderate-19-q4",
      wordId: "moderate-19-4",
      passage: "Sugar is highly ___ in warm water.",
      choices: [
        "surmise",
        "validate",
        "soluble",
        "sensual"
      ],
      correct: 2,
      explanation: "A substance capable of dissolving in liquid describes it being soluble — 'soluble' fits."
    },
    {
      id: "moderate-19-q5",
      wordId: "moderate-19-5",
      passage: "The company remained ___ throughout the recession, unlike many competitors.",
      choices: [
        "tome",
        "speculative",
        "vehemently",
        "solvent"
      ],
      correct: 3,
      explanation: "Having enough money to pay all debts describes being solvent — 'solvent' fits."
    },
    {
      id: "moderate-19-q6",
      wordId: "moderate-19-6",
      passage: "The newly formed nation was recognized as a ___ state by the UN.",
      choices: [
        "serene",
        "sovereign",
        "transgress",
        "tenable"
      ],
      correct: 1,
      explanation: "A nation with supreme, independent authority describes it being sovereign — 'sovereign' fits."
    },
    {
      id: "moderate-19-q7",
      wordId: "moderate-19-7",
      passage: "The report's conclusions were largely ___, based on incomplete data.",
      choices: [
        "speculative",
        "stingy",
        "sovereign",
        "torrid"
      ],
      correct: 0,
      explanation: "Conclusions based on guesswork rather than certainty describe them being speculative — 'speculative' fits."
    },
    {
      id: "moderate-19-q8",
      wordId: "moderate-19-8",
      passage: "He was famously ___ with tips, even after a great meal.",
      choices: [
        "sublime",
        "stingy",
        "tome",
        "soluble"
      ],
      correct: 1,
      explanation: "Being unwilling to give generously describes being stingy — 'stingy' fits."
    },
    {
      id: "moderate-19-q9",
      wordId: "moderate-19-9",
      passage: "The trail's final mile is by far the most ___ part of the hike.",
      choices: [
        "strenuous",
        "solicitous",
        "vehemently",
        "sovereign"
      ],
      correct: 0,
      explanation: "A section requiring great physical effort describes it being strenuous — 'strenuous' fits."
    },
    {
      id: "moderate-19-q10",
      wordId: "moderate-19-10",
      passage: "Her ___ criticism of the plan silenced the rest of the meeting.",
      choices: [
        "verdant",
        "sovereign",
        "strident",
        "uncanny"
      ],
      correct: 2,
      explanation: "Criticism delivered in a loud, forceful tone describes it being strident — 'strident' fits."
    },
    {
      id: "moderate-19-q11",
      wordId: "moderate-19-11",
      passage: "The view from the summit was nothing short of ___.",
      choices: [
        "sovereign",
        "vex",
        "sublime",
        "serene"
      ],
      correct: 2,
      explanation: "A view inspiring awe through its beauty describes it being sublime — 'sublime' fits."
    },
    {
      id: "moderate-19-q12",
      wordId: "moderate-19-12",
      passage: "From the muddy tracks, the ranger ___d that a bear had passed through recently.",
      choices: [
        "strenuous",
        "surmise",
        "strident",
        "uncanny"
      ],
      correct: 1,
      explanation: "Guessing based on limited evidence describes surmising — 'surmise' fits."
    },
    {
      id: "moderate-19-q13",
      wordId: "moderate-19-13",
      passage: "Her argument remained ___ even under the professor's toughest questions.",
      choices: [
        "solicitous",
        "solvent",
        "tenable",
        "sovereign"
      ],
      correct: 2,
      explanation: "An argument able to be defended against challenge describes it being tenable — 'tenable' fits."
    },
    {
      id: "moderate-19-q14",
      wordId: "moderate-19-14",
      passage: "The dusty ___ had sat untouched on the library shelf for decades.",
      choices: [
        "sensual",
        "sovereign",
        "tome",
        "solvent"
      ],
      correct: 2,
      explanation: "A large, often scholarly book describes a tome — 'tome' fits."
    },
    {
      id: "moderate-19-q15",
      wordId: "moderate-19-15",
      passage: "They endured a ___ summer with almost no relief from the heat.",
      choices: [
        "stingy",
        "torrid",
        "vehemently",
        "sovereign"
      ],
      correct: 1,
      explanation: "A summer marked by extreme heat describes it being torrid — 'torrid' fits."
    },
    {
      id: "moderate-19-q16",
      wordId: "moderate-19-16",
      passage: "The horse proved far more ___ once it grew used to its new rider.",
      choices: [
        "trite",
        "tenable",
        "strenuous",
        "tractable"
      ],
      correct: 3,
      explanation: "An animal easy to control and manage describes it being tractable — 'tractable' fits."
    },
    {
      id: "moderate-19-q17",
      wordId: "moderate-19-17",
      passage: "The garden offered a ___ escape from the noise of the city.",
      choices: [
        "serene",
        "transgress",
        "tranquil",
        "sovereign"
      ],
      correct: 2,
      explanation: "A place calm and free from disturbance describes it being tranquil — 'tranquil' fits."
    },
    {
      id: "moderate-19-q18",
      wordId: "moderate-19-18",
      passage: "The character ___es every social norm of her small, conservative town.",
      choices: [
        "serene",
        "torrid",
        "transgress",
        "trite"
      ],
      correct: 2,
      explanation: "Violating a moral code or boundary describes transgressing it — 'transgress' fits."
    },
    {
      id: "moderate-19-q19",
      wordId: "moderate-19-19",
      passage: "The ending felt ___, relying on a plot twist audiences had seen many times before.",
      choices: [
        "soluble",
        "transgress",
        "verdant",
        "trite"
      ],
      correct: 3,
      explanation: "An ending that is overused and unoriginal describes it being trite — 'trite' fits."
    },
    {
      id: "moderate-19-q20",
      wordId: "moderate-19-20",
      passage: "He had an ___ ability to guess exactly what people were thinking.",
      choices: [
        "serene",
        "tome",
        "stingy",
        "uncanny"
      ],
      correct: 3,
      explanation: "An ability strange and unsettling in its accuracy describes it being uncanny — 'uncanny' fits."
    },
    {
      id: "moderate-19-q21",
      wordId: "moderate-19-21",
      passage: "The study's results were later ___d by two independent research teams.",
      choices: [
        "tenable",
        "solvent",
        "validate",
        "stingy"
      ],
      correct: 2,
      explanation: "Confirming the accuracy of results describes validating them — 'validate' fits."
    },
    {
      id: "moderate-19-q22",
      wordId: "moderate-19-22",
      passage: "She ___ denied any involvement in the scheme.",
      choices: [
        "transgress",
        "vehemently",
        "sovereign",
        "tome"
      ],
      correct: 1,
      explanation: "Denying something in a forceful, passionate manner describes doing so vehemently — 'vehemently' fits."
    },
    {
      id: "moderate-19-q23",
      wordId: "moderate-19-23",
      passage: "The ___ judge had served on the bench for over thirty years.",
      choices: [
        "solvent",
        "verdant",
        "venerable",
        "stingy"
      ],
      correct: 2,
      explanation: "A judge deserving great respect due to age and wisdom describes being venerable — 'venerable' fits."
    },
    {
      id: "moderate-19-q24",
      wordId: "moderate-19-24",
      passage: "The valley turned ___ almost overnight after the spring rains.",
      choices: [
        "sublime",
        "venerable",
        "verdant",
        "sovereign"
      ],
      correct: 2,
      explanation: "Land becoming green with lush vegetation describes it turning verdant — 'verdant' fits."
    },
    {
      id: "moderate-19-q25",
      wordId: "moderate-19-25",
      passage: "The unsolved riddle continued to ___ the entire research team.",
      choices: [
        "vex",
        "transgress",
        "tenable",
        "surmise"
      ],
      correct: 0,
      explanation: "Continuing to annoy or worry a group describes vexing them — 'vex' fits."
    }
  ]
};

export { DIFFICULTIES, DECKS, WORDS, QUESTIONS };