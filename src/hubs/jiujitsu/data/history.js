// History of jiu-jitsu for the Reference page. Plain language; dates are the commonly cited ones, and the text says where accounts differ.
const COMMONS = "https://commons.wikimedia.org/wiki/File:";

export const PEOPLE = [
  { id: "kano", name: "Jigoro Kano", years: "1860–1938", role: "Founder of judo and the Kodokan", img: "kano.jpg", alt: "Jigoro Kano in later life, seated and wearing glasses", credit: "Asahi Shimbun, c. 1937. Public domain.", src: COMMONS + "Kanō_Jigorō_c1937.jpg" },
  { id: "maeda", name: "Mitsuyo Maeda", years: "1878–1941", role: "Kodokan judoka who brought the art to Brazil", img: "maeda.jpg", alt: "Mitsuyo Maeda in a suit holding a cane", credit: "Photo c. 1910. Public domain.", src: COMMONS + "Mitsuyo_Maeda_c1910.jpg" },
  { id: "carlos", name: "Carlos Gracie", years: "1902–1994", role: "Maeda's student; opened the first Gracie academy", img: "carlos.jpg", alt: "Carlos Gracie in profile, wearing a shirt and tie", credit: "Photo, 1951. Public domain.", src: COMMONS + "Carlos_Gracie_(1951)_(cropped).tif" },
  { id: "helio", name: "Hélio Gracie", years: "1913–2009", role: "Refined the art for smaller people; founder of Gracie Jiu-Jitsu", img: "helio.jpg", alt: "Hélio Gracie in a gi holding his red belt, in front of a poster of the Guanabara jiu-jitsu federation", credit: "Poster photo. CC0 (public domain dedication).", src: COMMONS + "Helio_Gracie.jpg" },
  { id: "helio52", name: "Hélio Gracie in 1952", years: "", role: "Kneeling in a gi with a dark belt", img: "helio52.jpg", alt: "Hélio Gracie kneeling in a gi in 1952", credit: "Photo, 1952. Public domain.", src: COMMONS + "Hélio_Gracie_(1952).tif" },
  { id: "rorion", name: "Rorion Gracie", years: "born 1952", role: "Brought Gracie Jiu-Jitsu to the United States; co-created the UFC", img: "rorion.jpg", alt: "Rorion Gracie smiling in a white gi", credit: "Photo by Brian Schwartz, 2022. CC0.", src: COMMONS + "Rorion_Gracie_(2022).jpg" },
  { id: "royce", name: "Royce Gracie", years: "born 1966", role: "Won UFC 1, 2, and 4 against much bigger fighters", img: "royce.jpg", alt: "Royce Gracie smiling", credit: "Photo by Sgt. Malcolm Cohens-Ashley, U.S. Army. Public domain.", src: COMMONS + "Royce_Gracie_Photo_Pose_4975753_(cropped).jpg" },
];

export const SITE_PHOTO = { id: "kodokan", img: "kodokan.jpg", alt: "The Kodokan building in Tokyo in 1937, with a large banner for a judo championship", credit: "The Kodokan in Tokyo, 1937. Public domain.", src: COMMONS + "Kodokan_in_1937.jpg" };

// Block types: p (paragraph), h (small heading), list (bullets), people (ids of PEOPLE to show as photo cards), site (the Kodokan photo).
export const HISTORY = [
  {
    id: "japan",
    title: "1. Jujutsu in Japan, and the birth of judo",
    summary: "Samurai grappling, Jigoro Kano, and the Kodokan",
    blocks: [
      { p: "Jiu-jitsu starts in Japan. For centuries, warriors called samurai trained a family of close-combat arts that are usually called jujutsu (spelled jiu-jitsu in Brazil and the United States). The name means roughly 'the gentle art' or 'the art of yielding': instead of meeting force with force, you redirect an attacker's strength and use leverage against it. Each school (ryu) taught its own set of throws, joint locks, chokes, and holds, and many were handed down inside a single family or clan." },
      { p: "Japan's long peace in the 1600s and 1700s turned many of these schools from battlefield skills into traditions. By the 1800s, as Japan modernized, a lot of them were fading." },
      { people: ["kano"] },
      { h: "Jigoro Kano and the Kodokan" },
      { p: "Jigoro Kano (born 1860) was a small, slim young man who wanted to learn to defend himself. He trained in two traditional jujutsu schools, and then did something new: he kept the best ideas, threw out what was needlessly dangerous, and built a method that people could practice at full effort without being badly hurt." },
      { p: "In 1882 he founded the Kodokan in Tokyo, and he called his art judo, 'the gentle way'. The first dojo was a tiny room (a small temple building with a dozen or so mats) and only a handful of students. Kano gave judo two guiding ideas that are still taught today: maximum efficiency with minimum effort (seiryoku zen'yo) and mutual welfare and benefit (jita kyoei), meaning you train to get better together." },
      { site: true },
      { p: "Kano's big innovations are things you take for granted in jiu-jitsu class:" },
      { list: [
        "Randori: live sparring, with a resisting partner, so techniques are tested instead of just rehearsed.",
        "A rank system with kyu (student) and dan (black belt) grades, and the white and black belts that went with it.",
        "The uniform (the judogi, or gi) built tough enough to be gripped and pulled.",
        "A focus on safety and character, so that the art could be taught in schools. Judo later became an Olympic sport at the 1964 Tokyo Games.",
      ] },
      { p: "Judo included both throws (nage-waza) and ground fighting (ne-waza), with pins, chokes, and arm locks. In the years after the Kodokan was founded, Kano's students also studied and borrowed from other schools that were very good on the ground. That ground work is the seed that grew into Brazilian jiu-jitsu." },
    ],
  },
  {
    id: "maeda",
    title: "2. Mitsuyo Maeda carries judo around the world",
    summary: "A Kodokan fighter takes judo to America, Europe, and Brazil",
    blocks: [
      { p: "Kano wanted judo to spread beyond Japan, and he sent talented students abroad to demonstrate it. One of them was Mitsuyo Maeda (born 1878), a strong, tough judoka who joined the Kodokan as a teenager and became known for his ground fighting." },
      { people: ["maeda"] },
      { p: "In 1904 Maeda went to the United States with a senior Kodokan teacher and gave demonstrations, including at the U.S. Military Academy at West Point. He then spent years traveling through Europe, Cuba, Mexico, and Central America, taking on challenge matches against boxers, wrestlers, and other fighters, and teaching judo along the way. He picked up the nickname 'Conde Koma' (roughly 'Count of Combat'), and he became famous as a man who could beat much bigger opponents." },
      { p: "In 1914 Maeda reached Brazil, which had a growing Japanese immigrant community, and in the mid-1910s settled in Belém, a city at the mouth of the Amazon in northern Brazil. He taught judo there and, as in earlier stops, kept proving the art in matches. Other Brazilian jiu-jitsu lines also descend from his students, for example the Oswaldo Fadda school in Rio, which came through Maeda's student Luiz Franca." },
      { p: "Historians still argue about some of the details of Maeda's life and which technique he taught first or best. What is not in dispute is that a Kodokan judoka taught jiu-jitsu to a young Brazilian named Carlos Gracie, and that is where the story turns." },
    ],
  },
  {
    id: "gracie",
    title: "3. The Gracie family and Brazilian jiu-jitsu",
    summary: "Carlos, Hélio, and the art built for smaller people",
    blocks: [
      { p: "In Belém, Maeda became friends with Gastão Gracie, a businessman of Scottish descent who helped the Japanese community settle there. According to the Gracie family's account, around 1917 Gastão's teenage son Carlos watched a Maeda demonstration and then began learning judo and jiu-jitsu from him. Carlos trained for a few years, and in 1921 the family moved to Rio de Janeiro." },
      { people: ["carlos"] },
      { p: "Carlos taught his younger brothers, Oswaldo, Gastão Jr., Jorge, and Hélio, and in 1925 he opened a jiu-jitsu academy in Rio. To prove the art worked, he and his family issued open 'Gracie Challenges': anyone, from any style, could come in and test the techniques. Matches against wrestlers, boxers, and judo and karate people were a big part of how the family built its reputation." },
      { h: "Hélio Gracie, the youngest brother" },
      { p: "Hélio (born 1913) was the youngest and the smallest of the brothers, and by the family's account he was not strong or healthy as a boy. As a teenager (around 1930) he began teaching, and because he could not muscle his way through the techniques, he did what every smaller person has to do: he found ways to make them work with leverage, timing, and efficiency." },
      { people: ["helio", "helio52"] },
      { p: "The big change Hélio is credited with is how much the new style relied on the guard. In judo competition, fights usually stop soon after both people go to the ground, and the rules reward the thrower. In the Gracie style, being on your back with your legs around your opponent was a strong, active position from which a smaller person could control, sweep, and submit a bigger one. The result was a ground-based art built around the idea that technique beats size and strength: Gracie Jiu-Jitsu, now called Brazilian jiu-jitsu (BJJ)." },
      { p: "Hélio was also a famous fighter. In 1951, in Brazil, he fought the great Japanese judo champion Masahiko Kimura. Kimura won with a shoulder lock after about thirteen minutes, and Hélio's corner stopped the fight. The lock was so effective that it carries Kimura's name to this day, and the Gracies cherished the match as a sign of how close a much smaller fighter had come against one of the strongest judoka alive." },
      { h: "A sport and a family" },
      { p: "Over the next decades the art grew into a competitive sport in Brazil. Tournaments were organized in Rio, and in 1967 a state federation (the Federação de Jiu-Jitsu do Estado da Guanabara, which is the name on the poster behind Hélio in the photo above) was formed to run them. Carlos's sons Carlson and Rolls Gracie became legends too: Carlson as one of the great coaches, and Rolls as the model of a modern competitor, with an athletic, experimental style, until his early death in 1982. The family also pushed for a way of life: Carlos developed a diet and a philosophy that went along with the training." },
      { p: "Hélio lived until 2009, when he died at the age of 95, and by then he had seen his sons and grandsons spread the art all over the world." },
    ],
  },
  {
    id: "america",
    title: "4. Jiu-jitsu comes to America",
    summary: "From a garage in California to the first UFC",
    blocks: [
      { p: "Judo reached the United States early (Maeda gave demonstrations in 1904), and in the decades after that, judo and Japanese jujutsu schools opened in many cities. Brazilian jiu-jitsu, though, arrived much later, in the late 1970s, and it came with the Gracie family." },
      { people: ["rorion"] },
      { h: "Rorion Gracie moves to California" },
      { p: "Hélio's oldest son Rorion moved to Southern California in 1978. He started teaching in his garage in Hermosa Beach, working with friends and a few students, and later opened the Gracie Academy in Torrance. Rorion also carried on the family tradition of the Gracie Challenge. He offered to take on anyone who wanted to try, and he made videotapes (called 'Gracie in Action') of the family beating fighters from other styles, which circulated among martial artists." },
      { h: "UFC 1 and the shock of 1993" },
      { p: "Rorion wanted a way to show Americans that a smaller person with good technique could beat a bigger one. Together with a business partner (Art Davie) and a promoter, he helped create the Ultimate Fighting Championship. The first UFC was held in Denver, Colorado, on November 12, 1993. Eight fighters from different styles, such as boxing, karate, kickboxing, sumo, wrestling, and others, were in a one-night tournament with very few rules." },
      { people: ["royce"] },
      { p: "Rorion chose his younger brother Royce to represent the family. Royce was a lean man of about 180 pounds, and many viewers expected him to lose. Instead he won three fights in one night, all by submission, against a boxer, a wrestler, and a kickboxer, and took the whole tournament. He went on to win UFC 2 and UFC 4 as well." },
      { p: "Almost overnight the martial arts world changed. Fighters in every style started to study ground fighting, and ordinary people started signing up at jiu-jitsu schools. UFC 1 also marked the start of what we now call mixed martial arts (MMA). Today every well-rounded fighter learns takedowns, striking, and grappling, and the grappling base almost always includes BJJ." },
      { h: "Growth across the country" },
      { list: [
        "Schools and affiliations such as Gracie Barra (founded in Brazil in the 1980s) and many others opened American academies in the 1990s and 2000s.",
        "Rickson Gracie, Hélio's son and a Brazilian legend, won international vale tudo tournaments in Japan in the 1990s and helped make BJJ famous worldwide.",
        "Competition grew: the IBJJF World Championship (the 'Mundial') began in 1996, Pan American and other major events followed, and the ADCC (a no-gi submission grappling championship) started in 1998.",
        "No-gi grappling grew fast in the 2000s, with new styles and ideas from teachers such as Eddie Bravo and, later, John Danaher and his students, who pushed leg locks and a more systematic way of teaching.",
        "The U.S. Army's Modern Army Combatives Program, begun in the 1990s, adopted BJJ-style ground fighting as a base, and many police departments train it as well.",
        "Kids' programs and women's divisions grew steadily, and today BJJ is practiced by families of every age in schools in nearly every American town.",
      ] },
    ],
  },
  {
    id: "today",
    title: "5. Brazilian jiu-jitsu today",
    summary: "Belts, gi and no-gi, and where it is going",
    blocks: [
      { p: "Modern BJJ is part martial art, part sport, part self-defense, and part exercise and community. Most schools teach in the gi, and many teach no-gi (shorts and a rash guard) as well, like your own training. Some focus on competition, some on self-defense, some on all of it." },
      { h: "How belts work" },
      { p: "Adults start at white belt and move to blue, purple, brown, and black, with stripes along the way. Moving up takes years, and the coach decides when you are ready. Black belts earn degrees over decades, and the most senior teachers wear a coral or red-and-black belt. Younger kids use their own set of colors (white, grey, yellow, orange, green) before they join the adult belts." },
      { h: "Ideas that carry through the whole history" },
      { list: [
        "Leverage and timing beat strength.",
        "Position before submission: control first, then finish.",
        "The guard is an attacking position, not just a defensive one.",
        "Live sparring (randori, in judo; rolling, in BJJ) is how you learn what actually works.",
        "Respect for your training partners and your teacher, and a commitment to helping each other get better.",
      ] },
      { p: "Different teachers disagree about parts of this history: who created which technique, how much came from judo versus other older arts, and how to give credit between the Gracie family and the other Brazilian lines. If you are curious, it is worth asking your coach, and reading more than one source." },
    ],
  },
];

export const TIMELINE = [
  ["1882", "Jigoro Kano founds the Kodokan in Tokyo and calls his art judo."],
  ["1904", "Mitsuyo Maeda leaves Japan with a senior Kodokan teacher and demonstrates judo in the United States."],
  ["1914", "Maeda reaches Brazil, and later settles in Belém."],
  ["c. 1917", "Carlos Gracie begins learning from Maeda (the Gracie family's account)."],
  ["1921", "The Gracie family moves to Rio de Janeiro."],
  ["1925", "Carlos Gracie opens a jiu-jitsu academy in Rio."],
  ["c. 1930", "Teenage Hélio Gracie begins teaching and adapting the techniques for smaller people."],
  ["1951", "Hélio Gracie fights the judo champion Masahiko Kimura in Brazil."],
  ["1964", "Judo becomes an Olympic sport at the Tokyo Games."],
  ["1967", "A federation is formed in Rio to run organized jiu-jitsu competitions."],
  ["1978", "Rorion Gracie moves to California and starts teaching in the United States."],
  ["1993", "Royce Gracie wins UFC 1 in Denver, Colorado."],
  ["1996", "The first IBJJF World Championship (Mundial) is held."],
  ["1998", "The first ADCC no-gi grappling championship."],
  ["2009", "Hélio Gracie dies at age 95."],
];
