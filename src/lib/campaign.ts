export const palettes = [
  {
    id: "blue",
    name: "YouSet Blue",
    note: "Control. Brand recognition and the colour already doing the work on youset.ca.",
    frame: "bg-ys-blue text-ys-white",
    plate: "bg-ys-ink/80 text-ys-white",
    sticker: "bg-ys-lime text-ys-ink",
    wash: "from-ys-ink/80 via-ys-ink/20 to-transparent",
  },
  {
    id: "pink",
    name: "YouSet Pink",
    note: "The photography language from their site. Warmer, more human, less 'promo.'",
    frame: "bg-ys-pink text-ys-ink",
    plate: "bg-ys-white/90 text-ys-ink",
    sticker: "bg-ys-blue text-ys-white",
    wash: "from-ys-ink/70 via-ys-ink/10 to-transparent",
  },
  {
    id: "lime",
    name: "Lime Pop",
    note: "Highest contrast. Reads promotional. Strong for thumb-stop, risk of 'cheap contest.'",
    frame: "bg-ys-lime text-ys-ink",
    plate: "bg-ys-ink text-ys-white",
    sticker: "bg-ys-blue text-ys-white",
    wash: "from-ys-ink/75 via-ys-ink/15 to-transparent",
  },
  {
    id: "navy",
    name: "Night Drive",
    note: "Premium car energy. May trade some CTR for perceived quality and better bind rate.",
    frame: "bg-ys-navy text-ys-white",
    plate: "bg-ys-white/10 text-ys-white",
    sticker: "bg-ys-lime text-ys-ink",
    wash: "from-ys-ink/85 via-ys-ink/30 to-transparent",
  },
] as const;

export type PaletteId = (typeof palettes)[number]["id"];

export const concepts = [
  {
    id: "keys",
    number: "01",
    name: "The Keys",
    format: "Static 4:5 + 6s motion",
    thesis: "Lead with the object nobody expects in an insurance feed.",
    visual:
      "Extreme close-up of a new key fob caught mid-air, smash-cut to an unbranded crossover on a Canadian street as the lights flash. YouSet lime sticker bottom-left: every completed quote is an entry. No lifestyle smiling. No broker desk. Just the prize, moving.",
    stop:
      "A moving object (keys) plus a car unlock in a category that usually shows stock smiles and rate tables. Andromeda's computer vision will route this toward people who already engage with automotive content — which is who we actually want quoting.",
    why: [
      "The unique mechanic this quarter is the car. If we bury it, we cannot isolate whether the prize moves qualified quotes.",
      "High expected 3-second hold. Meta attributes ~56% of outcomes to creative quality, and the hook is the highest-leverage variable.",
      "Quote-complete-as-entry is the quality filter. Contest farmers bounce at vehicle details; shoppers don't.",
    ],
    risk: "Prize-forward ads can attract hunters. Watch quote-to-bind, not just CPL. If bind rate drops >20% vs baseline, this cell gets rewritten, not scaled.",
    stills: [
      { src: "/campaign/key-fob.jpg", alt: "Key fob on a leather wheel", label: "Hook still" },
      { src: "/campaign/car-street.jpg", alt: "New crossover on a Toronto street", label: "Reveal still" },
      { src: "/campaign/car-night.jpg", alt: "Night drive colourway", label: "Navy colourway" },
      { src: "/campaign/keys-catch.jpg", alt: "Keys caught mid-air", label: "Motion frame" },
    ],
    video: "/campaign/keys-motion.mp4",
    poster: "/campaign/keys-catch.jpg",
    overlayKicker: "4 minutes",
    overlayTitle: "Quote your insurance. Win the car.",
    overlaySub: "Every completed quote is an entry",
    meta: {
      primary:
        "A 4-minute car insurance quote. A chance to win a $30,000 car.\n\nCompare 20+ Canadian insurers on YouSet, buy online if you like the price, and every completed quote is an entry.\n\nYou should shop your rate anyway. The car is extra.\n\nNo purchase necessary. Odds depend on the number of entries. Skill-testing question required. 18+ in participating provinces.",
      headline: "Quote your insurance. Win the car.",
      description: "Compare 20+ insurers in 4 minutes",
      cta: "Get quote",
    },
  },
  {
    id: "renewal",
    number: "02",
    name: "The Renewal",
    format: "Static 4:5 + 6s motion",
    thesis: "Lead with the problem they already have. Use the car as the reason to do it today.",
    visual:
      "A kitchen table, a renewal letter, a lime highlighter. Then the YouSet comparison UI on a phone with the brand's own 'Best Price' pill. The prize is a small raffle-ticket sticker — present, not screaming. This should look like a YouSet ad that happens to have a car attached, not a car ad with a quote form.",
    stop:
      "Specific rate-shock (the circled increase) in a sea of generic 'save on insurance' ads. Category data says specific dollar/percent claims outperform vague savings by 2–3× on click-through and conversion.",
    why: [
      "Rate-shock is the highest-performing hook family in auto insurance on Meta right now. It pre-qualifies people who actually have a policy to shop.",
      "Uses YouSet brand codes already proven on-site: lime highlighter, comparison cards, 4-minute promise. Creative that looks like the product converts better than creative that looks like a sweepstakes.",
      "The car is the closer, not the opener — 'complete the quote today' — which protects bind rate while still using the mechanic.",
    ],
    risk: "Lower raw CTR than a car-in-the-first-frame ad. That's acceptable if CPL-qualified and bind rate hold. If 3s hold is weak after 2k impressions, move the car earlier in the edit.",
    stills: [
      { src: "/campaign/renewal-table.jpg", alt: "Renewal letter on a kitchen table", label: "Problem still" },
      { src: "/campaign/phone-compare.jpg", alt: "Phone showing comparison cards", label: "Product still" },
      { src: "/campaign/pink-lifestyle.jpg", alt: "Pink lifestyle colourway", label: "Pink colourway" },
      { src: "/campaign/hero-drive.jpg", alt: "Canadian highway payoff", label: "Payoff still" },
    ],
    video: "/campaign/renewal-motion.mp4",
    poster: "/campaign/renewal-table.jpg",
    overlayKicker: "Renewal up again?",
    overlayTitle: "Shop the rate. Win the car.",
    overlaySub: "4 minutes · 20+ insurers · 1 entry",
    meta: {
      primary:
        "Renewal up again? You weren't in an accident. They just added money and hoped you wouldn't notice.\n\nGet a YouSet quote in 4 minutes — compare 20+ Canadian insurers, buy online, and you're automatically entered to win a $30K car.\n\nYou should shop your rate anyway. The car is just rude.\n\nNo purchase necessary. Odds depend on entries. Skill-testing question required. 18+ in participating provinces.",
      headline: "Your renewal went up. So did your odds.",
      description: "Quote in 4 minutes. Enter to win.",
      cta: "Get quote",
    },
  },
] as const;

export const researchSteps = [
  {
    n: "01",
    where: "Meta Ad Library + TikTok Creative Center",
    look: "YouSet, Rates.ca, LowestRates, Sonnet, CAA, Intact, TD, Desjardins. Filter Canada, last 90 days, active and inactive. Pull 30–40 ads into a swipe file.",
    for: "Hook in the first 1s, offer framing, legal lines, whether prize campaigns show the prize or the product, comments that reveal junk leads vs shoppers.",
  },
  {
    n: "02",
    where: "YouSet owned + promo history",
    look: "youset.ca, the quote flow on app.youset.ca, Beat Your Renewal ($50 gift card), referral ($25–$100), bundle save up to 15%. Brand photography, lime highlighter, comparison cards, Montserrat, the blue blob.",
    for: "Brand codes we should steal from ourselves. Voice: 'We're not your parent's broker.' Proof: 4.9, 20+ insurers, 4 minutes, 400k+ Canadians. Existing promo language so this campaign feels like YouSet, not a dealership raffle.",
  },
  {
    n: "03",
    where: "Voice of customer",
    look: "r/PersonalFinanceCanada, r/ontario, Trustpilot/Google reviews, YouSet's own 4.9 review set, TikTok comments on competitor ads.",
    for: "The sentences people actually use. 'They just raised it again.' 'I didn't even have a claim.' 'My dad still uses the same broker.' Those lines become hooks. They also tell us what 'qualified' sounds like vs a contest farmer.",
  },
  {
    n: "04",
    where: "Category creative patterns (2026 Meta)",
    look: "UGC talking-head (highest trust in insurance), rate-shock, savings specificity, betrayal ('22% up, zero claims'), identity ('10+ years, no accident'). Avoid vague 'save on car insurance.'",
    for: "What to test, not what to copy. Insurance is Special Ad Category — no age/gender, no lookalikes. Creative is the targeting. The brief is also the audience brief.",
  },
  {
    n: "05",
    where: "Legal + platform rules, before concepts lock",
    look: "Competition Act s.74.06, Criminal Code illegal lottery tests, Meta promotional guidelines, SAC insurance rules.",
    for: "No purchase necessary + AMOE, skill-testing question, prize value, odds, close date, 18+, participating provinces, FR/EN. Short rules on every ad. Quote-complete can be an entry path; it cannot be the only path.",
  },
];

export const brandCodes = [
  { label: "YouSet Blue", value: "#5B4DFF", className: "bg-ys-blue" },
  { label: "Lime highlighter", value: "#C8F04A", className: "bg-ys-lime" },
  { label: "Photography pink", value: "#F8D4CC", className: "bg-ys-pink" },
  { label: "Ink", value: "#111218", className: "bg-ys-ink" },
];

export const ugcScript = [
  { t: "0–3s", dir: "To camera, parked car, holding the renewal.", line: "Okay I need to talk about this because my car insurance just went up. Again." },
  { t: "3–8s", dir: "Shows the letter, dry, not performing.", line: "I wasn't even in an accident. They just added a couple hundred dollars and hoped I wouldn't notice." },
  { t: "8–15s", dir: "Phone up, YouSet quote on screen if we can clear it.", line: "So I did a YouSet quote. Four minutes. They compare like twenty insurers at once. I actually saved. And this is the part that feels illegal—" },
  { t: "15–22s", dir: "Lean in. This is the hook for anyone who skipped.", line: "Every completed quote is an entry to win a brand new car. Thirty thousand dollars. For doing the thing you should already do." },
  { t: "22–28s", dir: "Point at the sticker / link.", line: "No purchase. Takes less time than sitting on hold with your current broker. Link's here. Go get your quote." },
  { t: "28–30s", dir: "Holds keys, shrugs, small smile.", line: "Worst case you save money. Best case you get a new car. That's a pretty Canadian deal." },
];

export const funnyScripts = [
  {
    title: "Mulroney's broker",
    hook: "My dad's had the same broker since Mulroney.",
    body: "I love him. I also ran his plates through YouSet. Four minutes later he owed me lunch and we were both in a draw for a car. He still doesn't trust websites. He trusts me, which is close enough.",
  },
  {
    title: "POV: you opened it",
    hook: "POV: you actually opened the renewal email.",
    body: "The number is bigger. You are the same driver. Nobody crashed. YouSet will compare 20+ insurers while you still have that look on your face. Also you're in to win a car, which is an insane sentence to say about car insurance.",
  },
  {
    title: "That's how bad the rate is",
    hook: "They're giving away a car to get you to do a 4-minute quote.",
    body: "Sit with that. A whole car. Because that's how confident they are you'll find a better price — and how used to auto-renewing we've all gotten. Do the quote. Steal the savings. Take the entry.",
  },
  {
    title: "I don't work here",
    hook: "No I don't work for YouSet.",
    body: "I work for my savings account. I did a quote because my renewal was rude, I saved, and then they told me I was in a draw for a $30K car. I'm not above that. Neither are you.",
  },
  {
    title: "The hold music",
    hook: "Your broker put you on hold. YouSet put you in a draw.",
    body: "Same 4 minutes. One of them ends with hold music. The other ends with a quote from 20+ insurers and a chance to win a car. I'm not saying your broker is the villain. I'm saying the hold music is.",
  },
];

export const metrics = {
  northStar: "Qualified Quote Completes (QQC) — a quote with vehicle + driver details that could actually bind. Not a name dump for a raffle.",
  watch: [
    { name: "3-second hold", why: "Hook. If this is weak, nothing else gets a chance. Primary creative quality signal under Andromeda." },
    { name: "ThruPlay / 75% view", why: "Did the prize + product land, or did they bounce after the car?" },
    { name: "CTR (all / outbound)", why: "Interest. Diagnose against hold — high hold + low CTR is a CTA/offer problem." },
    { name: "CPL → CP-QQC", why: "Cost per qualified quote, not per lead. Contest campaigns lie if you only watch CPL." },
    { name: "Quote-to-bind 7d / 30d", why: "The quality check. This is how we know we didn't buy hunters." },
    { name: "Drop-off by quote step", why: "If they die at vehicle details, creative over-promised the prize. If they die at personal info, landing/trust." },
  ],
  rules: [
    {
      action: "Keep",
      when: "CP-QQC at or below trailing 90-day paid social, and 7-day bind rate within 15% of non-contest baseline, after ≥50 QQC.",
    },
    {
      action: "Tweak",
      when: "High CTR, low complete → landing or quote friction, not the ad. High complete, low bind → hunters; move the car later, add 'takes 4 minutes, real quote' in the first line, tighten the hook to rate-shock.",
    },
    {
      action: "Kill",
      when: "3s hold < ~25% after 2k impressions, or CP-QQC 40%+ above control after 50 QQC, or bind rate collapse >25%. Do not 'let it learn' past that — swap the angle, don't polish the loser.",
    },
  ],
};

export const testFirst = {
  pick: "The Renewal",
  why: "The north star is qualified car insurance leads, not cheapest CPC. Rate-shock pre-qualifies people who already have a policy. The $30K car is the reason to complete today, not the reason to click. I'd still stand up The Keys as cell B within 72 hours so Andromeda has two distinct visual worlds to match — but if I can only ship one, I ship the one that sounds like a shopper, not a contest.",
};
