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
    title: "FFPC Super Bowl LX Breakdown: Seahawks vs Patriots by the Numbers",
    excerpt: "JSN is the most rostered player in the contest. TreVeyon Henderson has league-winning upside. Here's my full model.",
    content: `The FFPC Playoff Challenge comes down to Super Bowl LX: Seattle Seahawks vs New England Patriots at Levi's Stadium. Two 14-3 teams. The first Seahawks-Patriots Super Bowl since the Malcolm Butler interception in 2015. And the ownership data is already telling us exactly where the value is.

## The Ownership Problem

Here's what the field is doing. Everyone's loading up on the same chalk:

### Chalk Plays (High Ownership)
- Jaxon Smith-Njigba: 78% ownership (most rostered player in the contest)
- Drake Maye: 64% ownership
- Kenneth Walker III: 52% ownership
- Rhamondre Stevenson: 47% ownership

JSN led the NFL with 1,793 receiving yards and is the obvious play. But at 78% ownership, he needs a monster game just to keep pace with the field.

## The Leverage Formula

I've developed what I call the "Leverage Score" – a proprietary metric that weighs projected points against ownership percentage:

\`Leverage Score = (Projected Points × Ceiling Multiplier) / √Ownership%\`

### Top Leverage Plays for Super Bowl LX

1. **TreVeyon Henderson (31% ownership)** - This is the play. Henderson has a unique ability to score long touchdowns – multiple 50+ yard TDs this season. At 31% vs Stevenson's 47%, Henderson's ceiling is tournament-winning. Imagine getting DOUBLE points from him ripping off a 60-yard TD in the Super Bowl.

2. **Sam Darnold (22% ownership)** - Everyone's taking Drake Maye at 64%. But Darnold just had a turnover-free NFC Championship. He's a Pro Bowler for the second straight year. At 22% ownership, he's the ultimate leverage pivot.

3. **Hunter Henry (19% ownership)** - The Patriots TE in a 1.5 PPR format at 19% ownership? The field is taking Maye or Henderson from New England. Henry is the contrarian Patriots pivot in a TE-premium contest.

## Game Script Projections

My model ran 10,000 simulations of Seahawks vs Patriots:

- Seahawks win by 7+: 34%
- Seahawks win by 1-6: 22%
- Game decided by 3 or less: 19%
- Patriots win: 25%

Seattle's #1 scoring defense (17 PPG allowed) should control this game. But the Patriots have the explosiveness to keep it close. The 45.5 O/U suggests a lower-scoring game – target efficient players over volume.

## The Double Points Factor

Remember: Super Bowl points count DOUBLE in FFPC. If TreVeyon Henderson scores 35 points in the Super Bowl, that's 70 points in your total. At 31% ownership vs Kenneth Walker's 52%, the leverage math is overwhelming.

## The JSN vs Christian Gonzalez Matchup

The Patriots will likely put star CB Christian Gonzalez on JSN. Seattle's other receivers didn't crack 600 yards this season. If Gonzalez locks down JSN, the 78% of the field rostering him is in trouble.

This is why Sam Darnold at 22% is so interesting – if JSN struggles, Darnold's other options (Walker dump-offs, AJ Barner) become more valuable.

## My Optimal Build

Based on my model:

1. **Sam Darnold** over Drake Maye (leverage)
2. **TreVeyon Henderson** over Rhamondre Stevenson (ceiling)
3. **Hunter Henry** as the Patriots pivot (19% ownership, TE premium)
4. **JSN** - yes, still roster him, but pair with contrarian pieces

The numbers don't lie. Trust the model.`,
    date: "2026-02-06",
    author: "Gabe",
    category: "Analysis",
    image: "/articles/ffpc-data.jpg",
    readingTime: 11,
    featured: true,
  },
  {
    id: "8",
    slug: "super-bowl-rigged-evidence-brady",
    title: "Seahawks vs Patriots AGAIN? The Malcolm Butler Rematch Was Written in 2015",
    excerpt: "The NFL waited 11 years to give us this rematch. At Levi's Stadium. Where Super Bowl 50 happened. I'm just asking questions.",
    content: `Look, I've been saying this all season. I've been SAYING it. And now here we are – Seahawks vs Patriots in Super Bowl LX. The EXACT SAME MATCHUP as Super Bowl XLIX. Eleven years later. You think this is coincidence?

Let me walk you through what I found.

## The "Redemption" Narrative

The NFL has been pushing the "Malcolm Butler" storyline for over a decade. Every time the Seahawks are good, every talking head brings up "the pass at the goal line." Pete Carroll's legacy. The play that haunted Seattle.

And now? Pete Carroll is gone. Mike Macdonald is the new coach. Sam Darnold – the JETS BUST – is the quarterback leading Seattle back to the Super Bowl. Against the Patriots. At Levi's Stadium. Where the Broncos beat the Panthers in Super Bowl 50.

The league LOVES symmetry. Too much. Almost like they plan it.

## The Schedule "Coincidences"

Look at what both teams got this season:

**Seattle Seahawks:**
- 14-3 record with the #1 seed
- Jaxon Smith-Njigba "breaks out" for 1,793 yards (best WR season in franchise history)
- Sam Darnold goes from "bust" to Pro Bowler in ONE YEAR
- Home NFC Championship against the Rams (divisional rival, easy narrative)

**New England Patriots:**
- 14-3 record with the #2 seed
- Drake Maye plays "MVP caliber" in just his second year
- First Super Bowl since Tom Brady left
- Mike Vrabel returns to New England and immediately makes the Super Bowl

The scheduling algorithm is supposed to be neutral. But when BOTH teams go 14-3? When BOTH have second-year coaches? When the narratives line up THIS perfectly?

That's not luck. That's a writers' room.

## The Sam Darnold Problem

Let me get this straight. Sam Darnold:
- Was a bust with the Jets
- Bounced around the league
- Signs with Minnesota, makes the Pro Bowl
- Signs a $100.5 MILLION deal with Seattle
- Immediately goes 14-3 and makes the Super Bowl

You're telling me that's just... player development? The same guy who couldn't complete a pass against ghosts in New York is now one game away from a championship?

Someone decided Sam Darnold was going to be the story this year. The "redemption arc" was too perfect not to write.

## The Patriots Return

The Patriots haven't been to a Super Bowl since Tom Brady left. And now, the FIRST YEAR they're good again, they make it back? Against the team from the most controversial Super Bowl ending in history?

Mike Vrabel – former Patriots player – is the coach. He's running the same system. This is the NFL saying "the Patriots are back" and manufacturing the content to prove it.

## The Levi's Stadium Connection

Super Bowl LX is at Levi's Stadium in Santa Clara. The same stadium that hosted Super Bowl 50 – the last Super Bowl before the Patriots dynasty's final run.

The NFL chose this location YEARS ago. They knew. They always know.

## What I'm Watching For

On February 8th, I'll be tracking:

1. Any goal-line plays for Seattle (will they run or pass?)
2. Holding calls when the Seahawks are driving
3. Spot placement on key 4th downs
4. Whether Drake Maye gets any roughing calls that Darnold doesn't

I'm not saying the Super Bowl is definitely rigged. I'm just asking questions that nobody else will ask.

The truth is at Levi's Stadium. It's been there since 2015.`,
    date: "2026-02-05",
    author: "Brady",
    category: "Conspiracy",
    image: "/articles/super-bowl-rigged.jpg",
    readingTime: 8,
    featured: true,
  },
  {
    id: "9",
    slug: "ffpc-playoff-challenge-boom-bust-picks",
    title: "Fading JSN, Riding TreVeyon: My FFPC Super Bowl LX Chaos Roster",
    excerpt: "JSN at 78%? Drake Maye at 64%? I'm betting on the Patriots upset. Let's get dangerous.",
    content: `Seahawks vs Patriots. Everyone's going to roster the same boring chalk – Jaxon Smith-Njigba, Drake Maye, Kenneth Walker. And they're going to finish in the middle of the pack, collect their participation trophy, and wonder what went wrong.

Not me. I'm here to WIN.

## The Riverboat Philosophy: Super Bowl Edition

Listen, I finished 2nd in my FFPC league last year by being "smart." By being "safe." By listening to Gabe's model and Jared's expert consensus.

You know what 2nd place gets you? Nothing. A story about how close you were.

This year, I'm swinging for the fences with a Patriots-heavy build. Here's my chaos roster:

## THE PATRIOTS UPSET STACK

**Drake Maye (64%)** is chalk. But what if I told you the REAL play is **TreVeyon Henderson + Hunter Henry + Stefon Diggs**?

The Patriots are 4.5-point underdogs. If they WIN – and my gut says they will – everyone with JSN at 78% ownership is COOKED.

Remember: Super Bowl points are DOUBLE. If TreVeyon Henderson rips off a 65-yard TD and finishes with 140 scrimmage yards and 2 TDs? That's 35+ points. DOUBLED. At 31% ownership while Kenneth Walker owners at 52% cry.

## My Actual Picks

### THE CHAOS PLAYS:

1. **TreVeyon Henderson over Kenneth Walker** - Henderson has the big-play ability that Walker doesn't. Multiple 50+ yard TDs this season. Walker is the "safe" play. Henderson is the "win your tournament" play. I'm not here to be safe.

2. **Sam Darnold over Drake Maye** - HEAR ME OUT. Everyone's loading up on Maye at 64%. But Darnold just had a CLEAN NFC Championship – zero turnovers. He's a Pro Bowler. At 22% ownership, if the Seahawks win big, Darnold is the leverage play of the tournament.

3. **Stefon Diggs as my Patriots WR** - The field is fading Patriots WRs because "JSN is the obvious play." Diggs at 18% ownership? In a game where the Patriots might need to throw to keep up? That's value.

### THE CONTRARIAN FADES:

**Jaxon Smith-Njigba at 78% ownership.** I said it. JSN needs 150 yards and 2 TDs just to return value at that ownership. Christian Gonzalez is going to shadow him. The Patriots defense is LEGIT. The risk/reward is backwards.

**Kenneth Walker at 52% ownership.** He's good. But when 52% of the field has him, his touchdowns don't separate you from anyone. I'd rather bet on the Patriots' explosive plays.

## The Double Points Math

Here's why this works. Super Bowl points count double in FFPC:

- If Henderson scores 30 points → 60 FFPC points at 31% ownership
- If Walker scores 30 points → 60 FFPC points at 52% ownership

Same points, but Henderson gives me the leverage. That's the edge.

## Why I Love the Patriots

Everyone forgot the Patriots know how to win Super Bowls. Six championships. Mike Vrabel was PART of those teams. Drake Maye is playing like an MVP. TreVeyon Henderson is the explosive weapon nobody's talking about.

The Seahawks have Sam Darnold. SAM DARNOLD. You're going to tell me the guy who saw ghosts in New York is going to beat the Patriots in the Super Bowl?

## The Malcolm Butler Factor

The last time these teams played in the Super Bowl, Malcolm Butler made the interception at the goal line. The Patriots have the championship DNA. Seattle has the trauma.

History favors New England. My bankroll agrees.

## Final Thoughts

Gabe's going to read this and have a stroke. His model says I have a 15% chance of cashing with this build.

But his model also says I have a 6% chance of taking down first place. You know what the chalk JSN/Maye/Walker lineup's first-place probability is? 0.4%.

I'll take my 6% and let it ride. See you at Levi's Stadium.`,
    date: "2026-02-04",
    author: "Rod",
    category: "Hot Takes",
    image: "/articles/ffpc-boom-bust.jpg",
    readingTime: 9,
    featured: true,
  },
  {
    id: "10",
    slug: "expert-consensus-super-bowl-props-ffpc",
    title: "Seahawks vs Patriots: What 48 Experts Say About Super Bowl LX Props",
    excerpt: "I compiled every expert ranking for the Malcolm Butler rematch. Here's the consensus playbook.",
    content: `You know me. I trust the process. I trust the experts. And for Super Bowl LX – Seahawks vs Patriots at Levi's Stadium – I went DEEP on the research.

I compiled rankings and prop projections from 48 different analysts across FantasyPros, PFF, The Athletic, ESPN, and about 25 podcasts. When this many smart people agree on something, you should probably listen.

## The Expert Consensus: Super Bowl MVP

Here's who the experts think will win MVP:

1. **Jaxon Smith-Njigba** - 19/48 experts (40%)
2. **Drake Maye** - 12/48 experts (25%)
3. **Kenneth Walker III** - 8/48 experts (17%)
4. **Sam Darnold** - 5/48 experts (10%)
5. **Other** - 4/48 experts (8%)

The JSN consensus is STRONG. When 40% of experts agree on one player in a two-team game, that's significant. The experts see Seattle's #1 receiver having a monster game – he led the NFL with 1,793 receiving yards for a reason.

## Prop Bet Consensus: Seahawks vs Patriots

I averaged out projections from all 48 sources. Here's where the experts land:

### Over/Under Consensus:
- Total Points: 45.5 (slight lean UNDER - 29/48)
- JSN Receiving Yards: 94.5 (lean OVER - 31/48)
- Kenneth Walker Rush Yards: 78.5 (lean OVER - 33/48)
- Drake Maye Pass Yards: 261.5 (lean UNDER - 27/48)
- TreVeyon Henderson Rush Yards: 62.5 (SMASH OVER - 41/48)

### "Smash" Props (80%+ Expert Agreement):
- JSN OVER 7.5 receptions (44/48 lean over)
- Kenneth Walker OVER 15.5 rush attempts (42/48)
- Sam Darnold OVER 0.5 interceptions (39/48 lean over)
- Drake Maye OVER 1.5 TD passes (45/48)

When 44 out of 48 experts agree JSN goes OVER 7.5 catches, you take that bet.

## FFPC Playoff Challenge Consensus Picks

For the FFPC Super Bowl roster, here's the expert consensus:

### Tier 1: Must-Starts (85%+ Expert Agreement)
- **Jaxon Smith-Njigba** - The best fantasy asset in the game. 78% ownership is justified.
- **Drake Maye** - MVP-caliber season, four points per TD pass.
- **Kenneth Walker III** - Workhorse back, goal-line role locked in.

### Tier 2: High-Floor Plays (65%+ Agreement)
- **TreVeyon Henderson** - Explosive ceiling, 50+ yard TD upside.
- **Sam Darnold** - Turnover-free in NFC Championship, underrated.
- **Hunter Henry** - 1.5 PPR format, Maye's safety valve.

### Tier 3: Leverage Plays (Experts Split)
- **Stefon Diggs** - Only 18% ownership, could see 8+ targets.
- **AJ Barner** - Seahawks TE, sneaky red zone option.
- **Rhamondre Stevenson** - Volume play if Patriots control clock.

## The JSN vs Christian Gonzalez Matchup

This is THE matchup of the game. Gonzalez is one of the best young corners in football. JSN is the league's best receiver.

31 of 48 experts say JSN still SMASHES regardless of coverage. The other 17 are worried about shadow coverage. This is where the experts disagree, which means it's where you find your edge.

## My FFPC Build

Based on the consensus, here's my Super Bowl roster:

**Seahawks:** Jaxon Smith-Njigba, Kenneth Walker III, Sam Darnold
**Patriots:** Drake Maye, TreVeyon Henderson

Yes, Rod says I'm being boring. Yes, Brady says the experts are "in on it." Yes, Gabe wants me to "consider the leverage math."

But you know what? The experts are experts for a reason. They do this professionally. They have access to data we don't have. When 44 out of 48 experts say JSN goes OVER 7.5 catches, I'm not smart enough to fade that.

## Final Thought

In the 2025 FFPC Playoff Challenge, the expert consensus lineup finished in the 68th percentile. That's not first place, but it cashed. It's sustainable. It's how you build long-term bankroll.

Rod's out here trying to win the lottery. I'm trying to build consistent profit.

Sometimes boring is beautiful.`,
    date: "2026-02-03",
    author: "Jared",
    category: "Analysis",
    image: "/articles/expert-super-bowl.jpg",
    readingTime: 10,
    featured: false,
  },
  {
    id: "11",
    slug: "super-bowl-sunday-survival-guide",
    title: "MY SEAHAWKS ARE IN THE SUPER BOWL: A Survival Guide For a Man Who's Waited 11 Years",
    excerpt: "Four daughters. One TV. MY TEAM IS FINALLY PLAYING. I am going to absolutely lose my mind.",
    content: `Let me paint you a picture.

It's Super Bowl Sunday. SEAHAWKS VS PATRIOTS. MY TEAM. MY SEAHAWKS. IN THE SUPER BOWL. After ELEVEN YEARS of watching other teams celebrate. After the Malcolm Butler interception. After Pete Carroll left. After years of mediocrity.

THE SEAHAWKS ARE IN THE SUPER BOWL AND I AM NOT OKAY.

I've got three screens set up – main TV for the game, laptop for live stats, phone for the group chat. I've got my Seahawks jersey on – the REAL one, the one I wore in 2014 when we won Super Bowl XLVIII. I've got my snacks ready. I've got my FFPC lineup locked (JSN, obviously).

And my four daughters are about to witness their father have a complete emotional breakdown on national television.

## THIS IS NOT A DRILL

Do you understand what this means? The Seahawks haven't been to the Super Bowl since 2015. Since the play. Since Malcolm Butler. Since the worst moment of my sports-watching life.

And now we're back. Against the SAME TEAM. At Levi's Stadium. With a chance to AVENGE the worst loss in franchise history.

Sam Darnold – SAM DARNOLD – is about to lead my team to a championship. The guy who saw ghosts in New York. The guy who bounced around the league. The guy who signed a $100.5 million deal and went 14-3.

I can't breathe. I genuinely can't breathe.

## The Setup

I've learned some things over the years about watching big games with four daughters. You can't fight the chaos. You have to MANAGE it.

**Pre-Game Preparation:**
- Charge every device in the house (ALL of them)
- Pre-make snacks that don't require supervision
- Promise post-game ice cream REGARDLESS of outcome
- Accept that Bad Bunny is doing halftime and the girls are excited about it

**The Viewing Strategy:**
For the first time in my life, I have negotiated FULL viewing rights. My wife understands. The girls understand. Daddy has waited eleven years for this moment. ELEVEN YEARS.

I get the game. ALL of it. Every play. Every timeout. Every replay. If anyone talks during a crucial play, there will be consequences.

## The Malcolm Butler Situation

Let's talk about it. February 1, 2015. Super Bowl XLIX. Seahawks down 4 with 26 seconds left. Ball on the 1-yard line. Marshawn Lynch in the backfield. And Pete Carroll calls a PASS.

Malcolm Butler intercepts it. Patriots win. I die inside.

I've replayed that moment in my head approximately 4,000 times. Every time I close my eyes, I see Butler jumping the route. Every time someone mentions the Patriots, I feel a twinge of rage.

And now? NOW? We get to do it again. Same teams. Same stakes. Different outcome. It HAS to be a different outcome.

## My FFPC Situation

I'm not going to lie – my FFPC playoff roster is LOADED with Seahawks.

**Jaxon Smith-Njigba at 78% ownership.** Yes, I'm chalk. I don't care. JSN is the best receiver in football. He led the league with 1,793 yards. He's going to EAT against this Patriots secondary.

**Kenneth Walker at 52% ownership.** Give him the ball 25 times. Let him run over Drake Maye's face. I don't care about leverage. I care about WINNING.

**Sam Darnold at 22% ownership.** THE REDEMPTION ARC. The narrative. The story. Darnold leading the Seahawks to a championship. At 22% ownership. This is the way.

I've also got Drake Maye and TreVeyon Henderson because Gabe yelled at me about "roster construction." But if the Patriots beat my Seahawks, I don't care about my FFPC lineup. I'll burn the money.

## The Group Chat Predictions

The Unfiltered Fantasy group chat during the Super Bowl is going to be CHAOS:

**Brady:** Already preparing screenshots to prove the refs are rigged. If the Seahawks get a single favorable call, he'll say it's "obviously scripted." If we get screwed, he'll say "I told you."

**Gabe:** Live-updating his projection model. Will tell us the "expected win probability" after every single play. I will mute him by halftime.

**Rod:** Has 14 different prop bets including "TreVeyon Henderson longest rush OVER 34.5 yards." He's rooting for chaos. He always roots for chaos.

**Jared:** Will cite "expert consensus" approximately 847 times. "Well, 44 out of 48 experts had JSN over 7.5 receptions, so..."

**Curt:** Will appear once at halftime, say something cryptic like "I had a feeling about the Seahawks," and then disappear until the final score. Will somehow have bet the exact final score.

**Me:** I will be INSUFFERABLE. I will be standing for every play. I will be screaming at the TV. My wife will tell me to calm down. I will not calm down. I have waited ELEVEN YEARS for this moment.

## The Actual Prediction

Fine. You want a prediction?

**Seahawks 27, Patriots 20.**

JSN goes for 11 catches, 142 yards, and 2 TDs. Kenneth Walker runs for 95 yards and a score. The Seahawks defense – the #1 scoring defense in the NFL – holds Drake Maye to under 200 passing yards.

And when the clock hits zero, I am going to cry. Real tears. In front of my four daughters and my wife and probably the neighbors because I will be screaming loud enough for them to hear.

The Malcolm Butler ghosts will finally be exorcised.

The Seahawks will be champions again.

And I will never, ever, EVER stop talking about it.

## To My Daughters

Girls, if you're reading this someday: Daddy loves you. But Daddy also loves the Seattle Seahawks. And on February 8th, 2026, Daddy is going to watch his team try to win the Super Bowl for the first time since before any of you were born.

Please be patient with him. Please let him have this.

And if the Seahawks win, we're getting ice cream AND staying up late. That's the deal.

LET'S GO HAWKS.`,
    date: "2026-02-02",
    author: "Steve",
    category: "Lifestyle",
    image: "/articles/super-bowl-survival.jpg",
    readingTime: 10,
    featured: true,
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
