export interface Host {
  id: string;
  name: string;
  nickname: string;
  tagline: string;
  catchphrase: string;
  bio: string;
  signatureMove: string;
  location: {
    city: string;
    state?: string;
    country?: string;
    coordinates: { x: number; y: number };
  };
  favoriteTeam?: string;
  specialties: string[];
  socialLinks: {
    twitter?: string;
    instagram?: string;
  };
  image: string;
  stats: {
    hotTakes: number;
    correctPicks: number;
    yearsExperience: number;
  };
}

export interface Episode {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  duration: number;
  episodeNumber: number;
  season: number;
  image: string;
  audioUrl: string;
  spotifyUrl?: string;
  appleUrl?: string;
  topics: string[];
  hosts: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: "Fantasy" | "Lifestyle" | "Hot Takes" | "Analysis" | "News" | "Conspiracy";
  image: string;
  readingTime: number;
  featured: boolean;
}

export const hosts: Host[] = [
  {
    id: "1",
    name: "Brady",
    nickname: "The Conspiracy",
    tagline: "I'm just asking questions.",
    catchphrase: "I'm just asking questions.",
    bio: "Brady sees what the rest of us are too blind to notice. That primetime game that came down to a questionable flag? Fixed. Your first-round pick's \"hamstring tightness\"? The league knew. Vegas lines moving for no reason? Oh, there's a reason. While you're checking fantasy scores, Brady's connecting dots on a corkboard. When he's not exposing the shadow league that controls the NFL, he's cooking incredible food, watching goats, and flooding the group chat with links to videos that \"explain everything.\" He once reported innocent tourists to federal authorities because they seemed suspicious. They were just eating lunch.",
    signatureMove: "Dropping a 47-post thread in the group chat at 3am Italy time",
    location: {
      city: "Italy",
      country: "Italy",
      coordinates: { x: 110, y: 35 },
    },
    specialties: ["Conspiracy Theories", "Late Night Research", "Connecting Dots"],
    socialLinks: {
      twitter: "https://twitter.com/sixroundsdeep",
      instagram: "https://instagram.com/sixroundsdeep",
    },
    image: "/hosts/brady.png",
    stats: {
      hotTakes: 847,
      correctPicks: 52,
      yearsExperience: 10,
    },
  },
  {
    id: "2",
    name: "Jared",
    nickname: "Fantasy Bro",
    tagline: "The experts love him this week.",
    catchphrase: "The experts love him this week.",
    bio: "If FantasyPros said it, Jared believes it. Expert consensus is his north star. He's the guy who says \"smash spot\" and \"league winner\" without a hint of irony. Subscribes to every podcast, every newsletter, every alert. The fantasy industry's most loyal customer. But here's the thing – Jared's the glue. He's the one who keeps five other degenerates organized across four time zones, schedules the recordings, and actually remembers everyone's bye weeks. He lives in Vegas but is somehow a terrible gambler. Also finished 2nd in the FFPC Championship with co-owner Houdini... and will tell you about it like he carried the whole team. (Houdini disputes this.)",
    signatureMove: "\"I'm just following the rankings\" after every loss",
    location: {
      city: "Las Vegas",
      state: "NV",
      coordinates: { x: 15, y: 50 },
    },
    specialties: ["Expert Consensus", "League Organization", "Podcast Subscriptions"],
    socialLinks: {
      twitter: "https://twitter.com/sixroundsdeep",
      instagram: "https://instagram.com/sixroundsdeep",
    },
    image: "/hosts/jared.png",
    stats: {
      hotTakes: 312,
      correctPicks: 71,
      yearsExperience: 12,
    },
  },
  {
    id: "3",
    name: "Gabe",
    nickname: "The Accountant",
    tagline: "The numbers don't lie.",
    catchphrase: "The numbers don't lie.",
    bio: "While you're going with your gut, Gabe's running the numbers. Target share. Air yards. Red zone snap percentage. He built his own projection model and yes, he will walk you through it. Every decision is calculated, methodical, and backed by data you didn't know existed. He gambles like a quant fund manager – disciplined, strategic, and perpetually *this close* to hitting the big one. East coast roots, West coast vibes. Will argue with Brady about literally anything. His spreadsheets have spreadsheets.",
    signatureMove: "Presenting a 47-slide deck on why you should trade him your RB2",
    location: {
      city: "Carlsbad",
      state: "CA",
      coordinates: { x: 10, y: 55 },
    },
    specialties: ["Data Analysis", "Projection Models", "Target Share"],
    socialLinks: {
      twitter: "https://twitter.com/sixroundsdeep",
      instagram: "https://instagram.com/sixroundsdeep",
    },
    image: "/hosts/gabe.jpg",
    stats: {
      hotTakes: 156,
      correctPicks: 79,
      yearsExperience: 8,
    },
  },
  {
    id: "4",
    name: "Rod",
    nickname: "Riverboat",
    tagline: "Fortune favors the bold.",
    catchphrase: "Fortune favors the bold.",
    bio: "Safe floors are for cowards. Rod didn't come here to win by 5 – he came to win by 50 or go down in flames. Every start/sit decision is a dice roll. Every trade is a heist. He'll deal a proven WR1 for a \"breakout candidate\" and sleep like a baby. Island life, chaos energy. His weekly scores look like a heart monitor – massive spikes, terrifying drops, nothing in between. Has never once taken the \"safe\" play. Somehow still in the playoff hunt every year through sheer audacity.",
    signatureMove: "Starting a guy who's \"due for a big game\" over a locked-in starter",
    location: {
      city: "Honolulu",
      state: "HI",
      coordinates: { x: -15, y: 75 },
    },
    specialties: ["High-Risk Plays", "Bold Trades", "Chaos Energy"],
    socialLinks: {
      twitter: "https://twitter.com/sixroundsdeep",
      instagram: "https://instagram.com/sixroundsdeep",
    },
    image: "/hosts/rod.png",
    stats: {
      hotTakes: 523,
      correctPicks: 58,
      yearsExperience: 11,
    },
  },
  {
    id: "5",
    name: "Steve",
    nickname: "Floor Pizza",
    tagline: "This is RIGGED.",
    catchphrase: "This is RIGGED.",
    bio: "A Seahawks die-hard trapped in Cowboys country. Steve's a man of principle and unwavering Seattle loyalty. When things go sideways – and they will – you're going to hear about it. Father of four daughters. The nickname? He ate a slice of pizza that landed toppings-down on a Las Vegas floor. No hesitation. Legend status. His emotional range on game day spans from furious to absolutely furious. If Steve's quiet, something's wrong. If Steve's loud, everything's normal.",
    signatureMove: "Rage-texting the group chat after a bad beat",
    location: {
      city: "Texas",
      state: "TX",
      coordinates: { x: 45, y: 65 },
    },
    favoriteTeam: "Seattle Seahawks",
    specialties: ["Emotional Reactions", "Seahawks Analysis", "Floor Food"],
    socialLinks: {
      twitter: "https://twitter.com/sixroundsdeep",
      instagram: "https://instagram.com/sixroundsdeep",
    },
    image: "/hosts/steve.png",
    stats: {
      hotTakes: 612,
      correctPicks: 65,
      yearsExperience: 15,
    },
  },
  {
    id: "6",
    name: "Curt",
    nickname: "Houdini",
    tagline: "I had a feeling.",
    catchphrase: "I had a feeling.",
    bio: "You can't explain it. Down 30 with only a kicker left? Wins by 1. Makes a trade that looks like robbery – against him – and three weeks later he's laughing. The fantasy gods either owe him money or he sold them something. The math never makes sense and he keeps escaping. Co-owner of that FFPC runner-up team with Jared. (Ask him, not Jared, for the real story.) His disappearing act extends beyond fantasy – league fines go unpaid, hangout invites go unanswered, and then he resurfaces after a win like nothing happened.",
    signatureMove: "Going silent in the group chat until he wins, then resurfacing with a single emoji",
    location: {
      city: "Honolulu",
      state: "HI",
      coordinates: { x: -12, y: 78 },
    },
    specialties: ["Clutch Wins", "Disappearing Acts", "Inexplicable Luck"],
    socialLinks: {
      twitter: "https://twitter.com/sixroundsdeep",
      instagram: "https://instagram.com/sixroundsdeep",
    },
    image: "/hosts/curt.jpg",
    stats: {
      hotTakes: 89,
      correctPicks: 77,
      yearsExperience: 10,
    },
  },
];

export const episodes: Episode[] = [
  {
    id: "1",
    slug: "championship-week-breakdown",
    title: "Championship Week Breakdown: Win or Go Home",
    description: "It's championship week and the stakes couldn't be higher. Gabe breaks down the numbers, Rod makes some questionable calls, and Brady explains why the NFL scheduled these matchups on purpose. Plus, Steve rage-texts his way through the Seahawks' collapse.",
    date: "2024-12-18",
    duration: 3845,
    episodeNumber: 52,
    season: 3,
    image: "/episodes/ep52.jpg",
    audioUrl: "/audio/ep52.mp3",
    spotifyUrl: "https://open.spotify.com/episode/xxx",
    appleUrl: "https://podcasts.apple.com/episode/xxx",
    topics: ["Championship Week", "Start/Sit", "Bold Predictions"],
    hosts: ["Gabe", "Rod", "Brady", "Steve"],
  },
  {
    id: "2",
    slug: "playoff-push-week-15-preview",
    title: "Playoff Push: Week 15 Preview & Waiver Wire Adds",
    description: "The fantasy playoffs are here! Jared follows the expert consensus, Gabe counters with his projection model, and Curt resurfaces just long enough to claim he knew all along. Rod's going all-in on a boom-or-bust play that makes everyone nervous.",
    date: "2024-12-11",
    duration: 4102,
    episodeNumber: 51,
    season: 3,
    image: "/episodes/ep51.jpg",
    audioUrl: "/audio/ep51.mp3",
    spotifyUrl: "https://open.spotify.com/episode/xxx",
    appleUrl: "https://podcasts.apple.com/episode/xxx",
    topics: ["Waiver Wire", "Week 15", "Playoff Strategy"],
    hosts: ["Jared", "Gabe", "Curt", "Rod"],
  },
  {
    id: "3",
    slug: "is-the-nfl-rigged",
    title: "Is The NFL Rigged? Brady Presents His Evidence",
    description: "Brady's been waiting for this episode all season. Armed with screenshots, timestamps, and a concerning amount of research, he presents his case for why the NFL is rigged. Gabe tries to counter with statistics. Steve agrees because his team lost.",
    date: "2024-12-04",
    duration: 3567,
    episodeNumber: 50,
    season: 3,
    image: "/episodes/ep50.jpg",
    audioUrl: "/audio/ep50.mp3",
    spotifyUrl: "https://open.spotify.com/episode/xxx",
    appleUrl: "https://podcasts.apple.com/episode/xxx",
    topics: ["Conspiracy", "NFL", "Hot Takes"],
    hosts: ["Brady", "Gabe", "Steve"],
  },
  {
    id: "4",
    slug: "thanksgiving-week-feast",
    title: "Thanksgiving Week Feast: Thursday Games Deep Dive",
    description: "Happy Thanksgiving! Jared's got the expert rankings ready, Rod's starting a third-string RB because he's \"due,\" and Steve is already mad about the Cowboys getting a primetime slot again. Plus, Curt wins his matchup despite setting his lineup drunk.",
    date: "2024-11-27",
    duration: 3234,
    episodeNumber: 49,
    season: 3,
    image: "/episodes/ep49.jpg",
    audioUrl: "/audio/ep49.mp3",
    spotifyUrl: "https://open.spotify.com/episode/xxx",
    appleUrl: "https://podcasts.apple.com/episode/xxx",
    topics: ["Thanksgiving", "Thursday Games", "Chaos"],
    hosts: ["Jared", "Rod", "Steve", "Curt"],
  },
  {
    id: "5",
    slug: "midseason-mvp-awards",
    title: "Midseason MVP Awards & Second Half Predictions",
    description: "We've reached the midpoint of the fantasy season, and it's time to hand out some hardware! The full crew debates their midseason MVPs, biggest busts, and breakout players. Brady connects every bust to a larger conspiracy. Rod predicts chaos.",
    date: "2024-11-13",
    duration: 4521,
    episodeNumber: 47,
    season: 3,
    image: "/episodes/ep47.jpg",
    audioUrl: "/audio/ep47.mp3",
    spotifyUrl: "https://open.spotify.com/episode/xxx",
    appleUrl: "https://podcasts.apple.com/episode/xxx",
    topics: ["Midseason Awards", "MVP", "Predictions"],
    hosts: ["Brady", "Jared", "Gabe", "Rod", "Steve", "Curt"],
  },
];

export const articles: Article[] = [
  {
    id: "1",
    slug: "championship-week-must-starts",
    title: "10 Must-Start Players for Championship Week",
    excerpt: "The numbers say start these players. The experts agree. Even Brady can't find a conspiracy here.",
    content: `Championship week is here, and your entire season comes down to the next few days. After months of waiver wire battles, trade negotiations, and agonizing lineup decisions, it's time to make your final moves count.

I've analyzed the matchups, studied the trends, and built a projection model that would make a Wall Street quant jealous. Here's the definitive list of must-start players for championship week.

## 1. Josh Allen vs. New England

The Patriots defense has been Swiss cheese against mobile quarterbacks. My model projects 28+ fantasy points. The target share data supports it. The red zone efficiency confirms it. Start him.

## 2. Ja'Marr Chase vs. Cleveland

Air yards are off the charts. Target share is elite. Cleveland's secondary is grading out terribly in coverage. The numbers don't lie – this is a smash spot.

## The Methodology

Every ranking here is backed by data: target share, air yards, red zone opportunities, defensive matchup grades, and historical performance in similar situations. No gut feelings. No "vibes." Just numbers.

[Additional content would continue here...]`,
    date: "2024-12-18",
    author: "Gabe",
    category: "Fantasy",
    image: "/articles/must-starts.jpg",
    readingTime: 8,
    featured: true,
  },
  {
    id: "2",
    slug: "floor-pizza-and-other-vegas-stories",
    title: "Floor Pizza and Other Vegas Stories: An Unfiltered Fantasy Legend",
    excerpt: "The true story of how Steve earned his nickname and other tales from our Vegas trips.",
    content: `There's something magical about watching a big game in Vegas surrounded by fellow degenerates. The drinks are flowing, the bets are down, and sometimes... sometimes the pizza falls.

Let me tell you about the moment that changed Steve's life forever.

## The Fateful Night

It was Week 14, 2022. We were all gathered at a sportsbook in Vegas. Steve's Seahawks were playing Monday Night Football, and things were not going well. After a particularly brutal interception, Steve stood up in frustration.

That's when it happened.

His slice of pepperoni pizza – a perfectly good slice, I might add – fell from his plate. Toppings down. Onto the casino floor. The floor that had seen thousands of shoes, spilled drinks, and who knows what else.

## The Decision

What Steve did next should have been impossible. Without hesitation – I mean ZERO hesitation – he picked up that slice and took a bite. The group went silent. A stranger at the next table actually gasped.

"What?" Steve said, mouth full of floor pizza. "It's still good."

And that's how "Floor Pizza" was born.

[Additional content would continue here...]`,
    date: "2024-12-15",
    author: "Jared",
    category: "Lifestyle",
    image: "/articles/floor-pizza.jpg",
    readingTime: 12,
    featured: true,
  },
  {
    id: "3",
    slug: "why-vegas-lines-moved-and-what-it-means",
    title: "Why Did Those Lines Move? I'm Just Asking Questions",
    excerpt: "The lines moved 3 points with no injury news. Coincidence? I don't think so.",
    content: `Look, I'm not saying the NFL is definitely rigged. I'm just asking questions.

Last week, the line on Chiefs-Raiders moved from -7.5 to -10.5 with zero injury news. Zero weather changes. Zero roster moves. You're telling me that's just... normal?

## The Evidence

Let me walk you through what I found at 3am after doing some research:

1. The line moved at exactly 2:47am Eastern time
2. A large bet was placed in a Macau sportsbook 12 minutes earlier
3. The officiating crew assigned to this game has historically favored home teams by 2.3 points
4. Patrick Mahomes' brother was seen in Vegas the night before

Coincidence? Maybe. But connect the dots and tell me you don't see a pattern.

## What They Don't Want You to Know

The NFL is a $20 billion industry. You think they're leaving outcomes to chance? The scheduling alone tells you everything you need to know. Why do certain teams ALWAYS get primetime games?

[Additional content would continue here...]`,
    date: "2024-12-10",
    author: "Brady",
    category: "Conspiracy",
    image: "/articles/line-movement.jpg",
    readingTime: 6,
    featured: false,
  },
  {
    id: "4",
    slug: "fortune-favors-the-bold-my-playoff-strategy",
    title: "Fortune Favors the Bold: My Championship Playoff Strategy",
    excerpt: "Safe floors are for regular season. It's time to swing for the fences.",
    content: `You didn't make it to the championship by playing it safe. Well, maybe YOU did. But that's not how I got here.

Here's my philosophy: in the playoffs, everyone's starting the same studs. The difference between winning and losing isn't your Tyreek Hill – it's your flex spot. That's where boldness wins championships.

## The Riverboat Philosophy

I'm not starting the guy projected for 12. I'm starting the guy with 50% boom potential who could go for 25. Yes, he might get you 4. But championships aren't won by 3-point margins.

Look at my record this season:
- Highest single-week score: 187 (started 3 "risky" plays)
- Lowest single-week score: 71 (started 2 "risky" plays)
- Average margin of victory: 34 points
- Average margin of defeat: 41 points

See the pattern? When I win, I WIN. When I lose... well, I was never going to win anyway.

## This Week's Chaos Picks

Here are three players I'm starting that will make everyone in my league uncomfortable:

[Additional content would continue here...]`,
    date: "2024-12-08",
    author: "Rod",
    category: "Hot Takes",
    image: "/articles/bold-strategy.jpg",
    readingTime: 10,
    featured: true,
  },
  {
    id: "5",
    slug: "what-the-experts-say-week-15-consensus",
    title: "What the Experts Say: Week 15 Consensus Rankings Breakdown",
    excerpt: "I compiled rankings from 47 different experts. Here's what they agree on.",
    content: `I subscribe to a lot of fantasy content. Like, a LOT. FantasyPros, ESPN+, The Athletic, PFF, numberFire, Football Outsiders, and about 40 podcasts. When people ask how I make my lineup decisions, it's simple: I follow the consensus.

Why? Because the wisdom of crowds works. When 47 experts all agree someone is a top-10 play, they're probably right.

## This Week's Must-Starts

Here's who the expert consensus loves this week:

### Near-Universal Top-5 QB Rankings:
1. Josh Allen (ranked top-5 by 46/47 experts)
2. Lamar Jackson (45/47)
3. Jalen Hurts (44/47)

When this many experts agree, you start these guys. Period.

## Where Experts Disagree

The interesting spots are where consensus breaks down. Jaylen Waddle is ranked anywhere from WR8 to WR24 this week. That's where you need to dig into the "why."

[Additional content would continue here...]`,
    date: "2024-12-05",
    author: "Jared",
    category: "Analysis",
    image: "/articles/expert-consensus.jpg",
    readingTime: 9,
    featured: false,
  },
  {
    id: "6",
    slug: "how-i-won-down-30-with-just-a-kicker",
    title: "How I Won Down 30 With Just a Kicker Left",
    excerpt: "I had a feeling.",
    content: `People keep asking me to explain what happened in Week 11. I don't know what to tell you. I had a feeling.

Going into Monday Night Football, I was down 30 points. My opponent had no one left. I had Justin Tucker.

A kicker. Just a kicker. Against a bad weather forecast.

## The Math

For those keeping score at home, Tucker needed:
- 6 field goals of 40+ yards each, or
- 5 field goals of 50+ yards, or
- Some combination that has happened maybe twice in NFL history

Vegas had my win probability at 0.3%. Gabe ran his model and said I had "no chance, statistically speaking."

## What Happened

Tucker went 6/6 on field goals, including a 61-yarder as time expired. Final score: 31 points. I won by 1.

Jared still hasn't recovered. Brady says the NFL scripted it. Gabe is "re-evaluating his model's kicker projections." Steve is furious because he had Tucker in another league and benched him.

Me? I just had a feeling.

[Additional content would continue here...]`,
    date: "2024-12-01",
    author: "Curt",
    category: "Hot Takes",
    image: "/articles/kicker-miracle.jpg",
    readingTime: 7,
    featured: false,
  },
  {
    id: "7",
    slug: "super-bowl-ffpc-playoff-challenge-data-breakdown",
    title: "FFPC Playoff Challenge: A Data-Driven Super Bowl Breakdown",
    excerpt: "The numbers reveal the optimal Super Bowl stacking strategy. My model ran 10,000 simulations.",
    content: `The FFPC Playoff Challenge is the ultimate test of fantasy football skill. No trades. No waivers. Just you, your draft picks, and the cold, hard math. I've spent the last two weeks building a projection model specifically for Super Bowl player pool optimization, and the numbers are fascinating.

## The Ownership Problem

Here's what most FFPC players get wrong: they chase the "best" players without considering ownership percentages. In a tournament format, you're not trying to outscore your opponent – you're trying to outscore the field. That requires differentiation.

My model projects the following ownership percentages for Super Bowl players:

### Chalk Plays (70%+ Projected Ownership)
- Patrick Mahomes: 78%
- Travis Kelce: 82%
- Isiah Pacheco: 71%

These are the players everyone will have. Starting them doesn't lose you the tournament, but it won't win it either.

## The Leverage Formula

I've developed what I call the "Leverage Score" – a proprietary metric that weighs projected points against ownership percentage. The formula:

\`Leverage Score = (Projected Points × Ceiling Multiplier) / √Ownership%\`

### Top Leverage Plays

1. **Rashee Rice** - If healthy, his target share data is elite. My model shows 8.2 targets projected, yet ownership sits at just 34%. That's a leverage goldmine.

2. **Jerick McKinnon** - The passing-down back in a game projected for 52+ points? At 18% ownership? The expected value is off the charts.

3. **Hollywood Brown** - Deep threat in what projects to be a shootout. Ceiling games at 22% ownership.

## Game Script Projections

My model ran 10,000 game simulations. Here's the distribution:

- Chiefs win by 7+: 31%
- Chiefs win by 1-6: 19%
- Game decided by 3 or less: 28%
- Opponent wins: 22%

A close game means more pass attempts. More pass attempts mean target-dependent players outperform. The data supports a pass-catcher heavy build.

## The Optimal Roster Construction

Based on 10,000 Monte Carlo simulations, here's the roster construction that maximizes expected tournament equity:

1. **QB Stack with WR2/WR3** - Not the obvious stack. The leverage stack.
2. **Contrarian RB** - The backup who sees passing work
3. **Ceiling TE** - Kelce is the play, but consider a pivot at his ownership

The numbers don't lie. Trust the model.`,
    date: "2025-01-28",
    author: "Gabe",
    category: "Analysis",
    image: "/articles/ffpc-data.jpg",
    readingTime: 11,
    featured: true,
  },
  {
    id: "8",
    slug: "super-bowl-rigged-evidence-brady",
    title: "The Super Bowl Matchup We Were 'Supposed' to Get: I'm Just Asking Questions",
    excerpt: "This matchup was determined in August. The evidence is overwhelming.",
    content: `Look, I've been saying this all season. I've been SAYING it. And now here we are, with exactly the Super Bowl matchup the league office wanted from the start.

You think this is coincidence? Let me walk you through what I found.

## The Schedule "Coincidences"

Go back and look at the schedule. Really look at it. Both Super Bowl teams got:

- 5 primetime games each (league average: 2.3)
- Bye weeks in favorable weather windows
- Their toughest opponents on short rest
- Monday Night Football before their softest matchup

The scheduling algorithm is supposed to be neutral. But when two teams get this many advantages? That's not an algorithm. That's a plan.

## The Officiating Patterns

I've tracked every penalty called on both teams this season. The data is STUNNING:

- Critical 3rd down penalties against opponents: +47% above league average
- Holding calls on game-winning drives: 0 (ZERO)
- Pass interference challenges overturned: 100%

You're telling me that's random? Run the probability on that. I'll wait.

## The Betting Line Movement

This is where it gets really interesting. I've been tracking line movements at 3am (when the "sharp money" moves) all season. Both Super Bowl teams have been involved in suspicious line movements 11 times this year.

The lines moved BEFORE the injury reports. Before the weather forecasts. Before any public information.

How do you explain that? You can't. Because someone knows something.

## What Happens in the Game

I'm not going to tell you who wins – I'm not allowed to do that anymore after what happened in the group chat. But I will tell you this: watch the officials. Watch the spot calls. Watch who gets the favorable spots on 4th-and-short.

The game isn't played on the field. It's played in the league office in New York.

I'm not saying it's definitely rigged. I'm just asking questions.

## The Vegas Connection

Final thought: Why is the Super Bowl in Vegas? The gambling capital of the world hosts the biggest betting event of the year, and we're supposed to believe that's just about stadium availability?

Follow the money. It always leads you to the truth.`,
    date: "2025-01-27",
    author: "Brady",
    category: "Conspiracy",
    image: "/articles/super-bowl-rigged.jpg",
    readingTime: 8,
    featured: true,
  },
  {
    id: "9",
    slug: "ffpc-playoff-challenge-boom-bust-picks",
    title: "Swing for the Fences: My FFPC Playoff Challenge Super Bowl Roster",
    excerpt: "Safe plays are for the regular season. Championship weekend demands chaos.",
    content: `Everyone's going to roster the same boring chalk. Mahomes. Kelce. The obvious stuff. And they're going to finish in the middle of the pack, collect their participation trophy, and wonder what went wrong.

Not me. I'm here to WIN.

## The Riverboat Philosophy: Tournament Edition

Listen, I finished 2nd in my FFPC league last year by being "smart." By being "safe." By listening to Gabe's model and Jared's expert consensus.

You know what 2nd place gets you? Nothing. A story about how close you were.

This year, I'm swinging for the fences. Here's my Super Bowl roster construction:

## The Stack Nobody Expects

I'm not stacking the favorite. Everyone's doing that. I'm stacking the underdog, and I'm stacking them HARD.

**QB + WR1 + WR2 from the underdog team.**

Is this insane? Maybe. But if the underdog wins in a shootout – which happens 35% of the time in Super Bowls – I'm going to leapfrog 70% of the field.

## My Actual Picks

### THE CHAOS PLAYS:

1. **Underdog QB** - At 15% ownership, he only needs a decent game to return value. If they WIN? I'm printing money.

2. **The WR Nobody's Talking About** - Every Super Bowl has a breakout player we didn't see coming. Last year's guy was a 4% owned WR who went for 140 yards and 2 TDs. I'm finding that guy.

3. **The Revenge Game RB** - Former team. Chip on shoulder. Narrative. The football gods love this stuff.

### THE CONTRARIAN FADES:

I'm fading Travis Kelce. There, I said it. At 82% ownership, he needs 150 yards and 2 TDs just to keep pace. The risk/reward is backwards.

## Why This Works

In tournaments, you need to be DIFFERENT. The math is simple:

- If I'm right and you're wrong: I win big
- If we're both right: We tie
- If we're both wrong: We tie
- If you're right and I'm wrong: I lose

Three of those four outcomes favor being contrarian. That's the edge.

## Final Thoughts

Gabe's going to read this and have a stroke. His model says I have a 12% chance of cashing. He's probably right.

But his model also says I have a 3% chance of taking down first place. You know what the chalk lineup's first-place probability is? 0.4%.

I'll take my 3% and let it ride.`,
    date: "2025-01-26",
    author: "Rod",
    category: "Hot Takes",
    image: "/articles/ffpc-boom-bust.jpg",
    readingTime: 9,
    featured: true,
  },
  {
    id: "10",
    slug: "expert-consensus-super-bowl-props-ffpc",
    title: "What 52 Experts Say About Super Bowl Props & FFPC Strategy",
    excerpt: "I compiled every expert ranking. Here's the consensus Super Bowl playbook.",
    content: `You know me. I trust the process. I trust the experts. And for the Super Bowl, I went DEEP on the research.

I compiled rankings and prop projections from 52 different analysts across FantasyPros, PFF, The Athletic, ESPN, and about 30 podcasts. When this many smart people agree on something, you should probably listen.

## The Expert Consensus: Super Bowl MVP

Here's who the experts think will win MVP:

1. **Patrick Mahomes** - 34/52 experts (65%)
2. **Travis Kelce** - 8/52 experts (15%)
3. **Isiah Pacheco** - 5/52 experts (10%)
4. **Other** - 5/52 experts (10%)

The consensus is STRONG on Mahomes. When 65% of experts agree, that's as close to a lock as you'll find.

## Prop Bet Consensus

I averaged out projections from all 52 sources. Here's where the experts land:

### Over/Under Consensus:
- Total Points: 48.7 (slight lean OVER)
- Mahomes Pass Yards: 287
- Kelce Receiving Yards: 78
- Combined Rushing Yards: 156

### "Smash" Props (80%+ Expert Agreement):
- Kelce OVER 5.5 receptions (47/52 lean over)
- First TD NOT a running back (44/52)
- Mahomes OVER 1.5 TD passes (51/52)

When 51 out of 52 experts agree, you take that bet.

## FFPC Playoff Challenge Consensus Picks

For tournament play, here's who the experts are building around:

### Tier 1: Lock and Load (Start Everywhere)
- Patrick Mahomes
- Travis Kelce
- Top opposing WR

### Tier 2: High-Floor Plays
- Isiah Pacheco
- Rashee Rice (if healthy)
- Opposing TE

### Tier 3: Leverage Plays
The experts are split here, which is actually useful information. When 52 smart people can't agree, that's where you find your edge.

## My FFPC Build

Based on the consensus, here's my roster:

I'm following the experts. Mahomes, Kelce, the chalk plays everyone agrees on. Yes, Rod says I'm being boring. Yes, Brady says the experts are "in on it."

But you know what? The experts are experts for a reason. They do this professionally. They have access to data we don't have. When 52 of them agree on something, I'm not smart enough to fade that.

## Final Thought

Last year, the expert consensus lineup finished in the 68th percentile. That's not first place, but it's profitable. It's sustainable. It's how you build long-term bankroll.

Sometimes boring is beautiful.`,
    date: "2025-01-25",
    author: "Jared",
    category: "Analysis",
    image: "/articles/expert-super-bowl.jpg",
    readingTime: 10,
    featured: false,
  },
  {
    id: "11",
    slug: "super-bowl-sunday-survival-guide",
    title: "A Super Bowl Sunday Survival Guide From a Man Who's Seen Things",
    excerpt: "Four daughters. One TV. Zero chance of watching in peace. Here's how I cope.",
    content: `Let me paint you a picture.

It's Super Bowl Sunday. The biggest game of the year. I've got three screens set up – main TV for the game, laptop for live stats, phone for the group chat. I've got my jersey on. I've got my snacks ready. I've got my FFPC lineup locked.

And then I hear it.

"DADDY, SOPHIA WON'T SHARE THE IPAD."

This is my life. This is Super Bowl Sunday with four daughters under 12.

## The Setup

I've learned some things over the years. You can't fight it. You have to MANAGE it.

**Pre-Game Preparation:**
- Charge every device in the house (ALL of them)
- Pre-make snacks that don't require supervision
- Promise post-game ice cream for good behavior
- Accept that halftime is not yours

**The Viewing Strategy:**
I've negotiated watching rights. I get the game, uninterrupted, for the 4th quarter only. Everything else is a compromise. Halftime? That's for whatever animated movie they're into this week. Commercial breaks? That's when I check on chaos.

## What I Actually Care About

Look, I'll be honest. After 10 years of marriage and four kids, my relationship with football has changed.

I used to watch for the strategy. For the chess match. For the X's and O's.

Now? I watch for the EMOTION. I watch for the moments that make you FEEL something. A game-winning drive. A heartbreaking interception. The look on a player's face when they realize they just won the Super Bowl.

And also, I watch because I have money on it. Obviously.

## My FFPC Situation

I'm not going to lie – my FFPC playoff roster is a mess. I drafted a guy who got hurt. I pivoted to a backup who got benched. Classic Steve luck.

But here's the thing: I've got Kelce. And Kelce in the Super Bowl is like... it's like having a guaranteed baseline of sanity. Whatever else goes wrong, Kelce's going to catch 7 balls for 80 yards and a touchdown.

That's all I need. Just give me that floor and let me enjoy my one quarter of uninterrupted football.

## The Group Chat

The Unfiltered Fantasy group chat during the Super Bowl is... a lot.

Brady's going to be posting "evidence" after every flag. Gabe's going to be live-updating his model. Rod's going to be celebrating or panicking based on his prop bets. Jared's going to be citing expert opinions. Curt's going to appear briefly, make some cryptic comment about "having a feeling," and then disappear until the game is over.

And I'll be here. In my jersey. With my one quarter of peace. Trying not to yell when the Seahawks aren't even playing.

## Final Thoughts

Super Bowl Sunday isn't about football anymore. It's about the people you watch it with. Even if those people are four small humans who keep asking why the players are wearing tights.

Enjoy the game, everyone. Hug your families. Try the floor pizza.

It's still good.`,
    date: "2025-01-24",
    author: "Steve",
    category: "Lifestyle",
    image: "/articles/super-bowl-survival.jpg",
    readingTime: 8,
    featured: false,
  },
];

export function getHostBySlug(slug: string): Host | undefined {
  return hosts.find(
    (host) => host.name.toLowerCase().replace(/\s+/g, "-") === slug
  );
}

export function getEpisodeBySlug(slug: string): Episode | undefined {
  return episodes.find((episode) => episode.slug === slug);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: Article["category"]): Article[] {
  return articles.filter((article) => article.category === category);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((article) => article.featured);
}

export function getLatestEpisode(): Episode {
  return episodes[0];
}
