/* Clone Wars opening quotes — parsed from RAW lines.
   Random selection excludes episodes where the quote is "No opening quote". */

const RAW = `
01×01 – Ambush:  Great leaders inspire greatness in others.
01×02 – Rising Malevolence: Belief is not a matter of choice, but of conviction.
01×03 – Shadow of Malevolence: Easy is the path to wisdom for those not blinded by ego.
01×04 – Destroy Malevolence: A plan is only as good as those who see it through.
01×05 – Rookies: The best confidence builder is experience.
01×06 – Downfall of a Droid: Trust in your friends, and they’ll have reason to trust in you.
01×07 – Duel of the Droids: You hold onto friends by keeping your heart a little softer than your head.
01×08 – Bombad Jedi: Heroes are made by the times.
01×09 – Cloak of Darkness: Ignore your instincts at your peril.
01×10 – Lair of Grievous: Most powerful is he who controls his own power.
01×11 – Dooku Captured: The winding path to peace is always a worthy one, regardless of how many turns it takes.
01×12 – The Gungan General: Fail with honor rather than succeed by fraud.
01×13 – Jedi Crash: Greed and fear of loss are the roots that lead to the tree of evil.
01×14 – Defenders of Peace: When surrounded by war, one must eventually choose a side.
01×15 – Trespass: Arrogance diminishes wisdom.
01×16 – The Hidden Enemy: Truth enlightens the mind, but won’t always bring happiness to your heart.
01×17 – Blue Shadow Virus: Fear is a disease; hope is its only cure.
01×18 – Mystery of the Thousand Moons: A single chance is a galaxy of hope.
01×19 – Storm over Ryloth: It is a rough road that leads to the heights of greatness.
01×20 – Innocents of Ryloth: The costs of war can never be truly accounted for.
01×21 – Liberty on Ryloth: Compromise is a virtue to be cultivated, not a weakness to be despised.
01×22 – Hostage Crisis: A secret shared is a trust formed.

02×01 – Holocron Heist: A lesson learned is a lesson earned.
02×02 – Cargo of Doom: Overconfidence is the most dangerous form of carelessness.
02×03 – Children of the Force: The first step to correcting a mistake is patience.
02×04 – Senate Spy: A true heart should never be doubted.
02×05 – Landing at Point Rain: Believe in yourself or no one else will.
02×06 – Weapons Factory: No gift is more precious than trust.
02×07 – Legacy of Terror: Sometimes, accepting help is harder than offering it.
02×08 – Brain Invaders: Attachment is not compassion.
02×09 – Grievous Intrigue: For everything you gain, you lose something else.
02×10 – The Deserter: It is the quest for honor that makes one honorable.
02×11 – Lightsaber Lost: Easy isn’t always simple.
02×12 – The Mandalore Plot: If you ignore the past, you jeopardize the future.
02×13 – Voyage of Temptation: Fear not for the future, weep not for the past.
02×14 – Duchess of Mandalore: In war, truth is the first casualty.
02×15 – Senate Murders: Searching for the truth is easy. Accepting the truth is hard.
02×16 – Cat and Mouse: A wise leader knows when to follow.
02×17 – Bounty Hunters: Courage makes heroes, but trust builds friendships.
02×18 – The Zillo Beast: Choose what is right, not what is easy.
02×19 – The Zillo Beast Strikes Back: The most dangerous beast is the beast within.
02×20 – Death Trap: Who my father was matters less than my memory of him.
02×21 – R2 Come Home: Adversity is a friendship’s truest test.
02×22 – Lethal Trackdown: Revenge is a confession of pain.

03×01 – Clone Cadets: Brothers in arms are brothers for life.
03×02 – ARC Troopers: Fighting a war tests a soldier’s skills, defending his home tests a soldier’s heart.
03×03 – Supply Lines: Where there’s a will, there’s a way.
03×04 – Sphere of Influence: A child stolen is a hope lost.
03×05 – Corruption: The challenge of hope is to overcome corruption.
03×06 – The Academy: Those who enforce the law must obey the law.
03×07 – Assassin: The future has many paths – choose wisely.
03×08 – Evil Plans: A failure in planning is a plan for failure.
03×09 – Hunt for Ziro: Love comes in all shapes and sizes.
03×10 – Heroes on Both Sides: Fear is a great motivator.
03×11 – Pursuit of Peace: Truth can strike down the spectre of fear.
03×12 – Nightsisters: The swiftest path to destruction is through vengeance.
03×13 – Monster: Evil is not born, it is taught.
03×14 – Witches of the Mist: The path to evil may bring great power, but not loyalty.
03×15 – Overlords: Balance is found in the one who faces his guilt.
03×16 – Altar of Mortis: He who surrenders hope, surrenders life.
03×17 – Ghosts of Mortis: He who seeks to control fate shall never find peace.
03×18 – The Citadel: Adaptation is the key to survival.
03×19 – Counterattack: Anything that can go wrong will.
03×20 – Citadel Rescue: Without honor, victory is hollow.
03×21 – Padawan Lost: Without humility, courage is a dangerous game.
03×22 – Wookie Hunt: A great student is what the teacher hopes to be.

04×01 – Water War: When destiny calls, the chosen have no choice.
04×02 – Gungan Attack: Only through fire is a strong sword forged.
04×03 – Prisoners: Crowns are inherited, kingdoms are earned.
04×04 – Shadow Warrior: Who a person truly is cannot be seen with the eye.
04×05 – Mercy Mission: Understanding is honoring the truth beneath the surface.
04×06 – Nomad Droids: Who’s the more foolish, the fool or the fool who follows him?
04×07 – Darkness on Umbara: The first step towards loyalty is trust.
04×08 – The General: The path of ignorance is guided by fear.
04×09 – Plan of Dissent: The wise man leads, the strong man follows.
04×10 – Carnage of Krell: Our actions define our legacy.
04×11 – Kidnapped: Where we are going always reflects where we came from.
04×12 – Slaves of the Republic: Those who enslave others, inevitably become slaves themselves.
04×13 – Escape from Kadavo: Great hope can come from small sacrifices.
04×14 – A Friend in Need: Friendship shows us who we really are.
04×15 – Deception: All warfare is based on deception.
04×16 – Friends and Enemies: Keep your friends close, but keep your enemies closer.
04×17 – The Box: The strong survive, the noble overcome.
04×18 – Crisis on Naboo: Trust is the greatest of gifts, but it must be earned.
04×19 – Massacre: One must let go of the past to hold on to the future.
04×20 – Bounty: Who we are never changes, who we think we are does.
04×21 – Brothers: A fallen enemy may rise again, but the reconciled one is truly vanquished.
04×22 – Revenge: The enemy of my enemy is my friend.

05×01 – Revival: Strength of character can defeat strength in numbers.
05×02 – A War on Two Fronts: Fear is a malleable weapon.
05×03 – Front Runners: To seek something is to believe in its possibility.
05×04 – The Soft War: Struggles often begin and end with the truth.
05×05 – Tipping Points: Disobedience is a demand for change.
05×06 – The Gathering: He who faces himself, finds himself.
05×07 – A Test of Strength: The young are often underestimated.
05×08 – Bound for Rescue: When we rescue others, we rescue ourselves.
05×09 – A Necessary Bond: Choose your enemies wisely, as they may be your last hope.
05×10 – Secret Weapons: Humility is the only defense against humiliation.
05×11 – A Sunny Day in the Void: When all seems hopeless, a true hero gives hope.
05×12 – Missing in Action: A soldier’s most powerful weapon is courage.
05×13 – Point of No Return: You must trust in others or success is impossible.
05×14 – Eminence: One vision can have many interpretations.
05×15 – Shades of Reason: Alliances can stall true intentions.
05×16 – The Lawless: Morality separates heroes from villains.
05×17 – Sabotage: Sometimes even the smallest doubt can shake the greatest belief.
05×18 – The Jedi Who Knew Too Much: Courage begins by trusting oneself.
05×19 – To Catch a Jedi: Never become desperate enough to trust the untrustworthy.
05×20 – The Wrong Jedi: Never give up hope, no matter how dark things seem.

06×01 – The Unknown: The truth about yourself is always the hardest to accept.
06×02 – Conspiracy: The wise benefit from a second opinion.
06×03 – Fugitive: When in doubt, go to the source.
06×04 – Orders: The popular belief isn’t always the correct one.
06×05 – An Old Friend: To love, is to trust. To trust is to believe.
06×06 – The Rise of Clovis: Jealousy is the path to chaos.
06×07 – Crisis at the Heart: Deceit is the weapon of greed.
06×08 – The Disappeared Pt. 1: Without darkness there cannot be light.
06×09 – The Disappeared Pt. 2: Wisdom is born in fools as well as wise men.
06×10 – The Lost One: What is lost is often found.
06×11 – Voices: Madness can sometimes be the path to truth.
06×12 – Destiny: Death is just the beginning.
06×13 – Sacrifice: Facing all that you fear will free you from yourself.

07×01 – The Bad Batch: Embrace others for their differences, for that makes you whole.
07×02 – A Distant Echo: The search for truth begins with belief.
07×03 – On the Wings of Keeradaks: Survival is one step on the path to living.
07×04 – Unfinished Business: Trust placed in another is trust earned.
07×05 – Gone with a Trace: If there is no path before you, create your own.
07×06 – Deal No Deal: Mistakes are valuable lessons often learned too late.
07×07 – Dangerous Debt: Who you were does not have to define who you are.
07×08 – Together Again: You can change who you are, but you cannot run from yourself.
07×09 – Old Friends Not Forgotten: No opening quote
07×10 – Phantom Apprentice: No opening quote
07×11 – Shattered: No opening quote
07×12 – Victory and Death: No opening quote
`;

function slugify(s) {
  return s.toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseEpisodes(raw) {
  const lines = raw.split("\n").map(l => l.trim()).filter(Boolean);
  const out = [];
  for (const line of lines) {
    const m = line.match(/^(\d{2})×(\d{2})\s+–\s+(.+?):\s*(.+)$/);
    if (!m) continue;

    const season = Number(m[1]);
    const episode = Number(m[2]);
    const title = m[3].trim();
    const quoteRaw = m[4].trim().replace(/\s+/g, " ");
    const hasQuote = !(quoteRaw.toLowerCase() === "no opening quote");

    out.push({
      season,
      episode,
      codePretty: `${m[1]}×${m[2]}`,
      key: `${m[1]}x${m[2]}`, // safe for URL/hash
      title,
      quote: hasQuote ? quoteRaw : null
    });
  }
  return out;
}

const EPISODES = parseEpisodes(RAW);

const els = {
  seasonSelect: document.getElementById("seasonSelect"),
  metaEpisode: document.getElementById("metaEpisode"),
  pillSeason: document.getElementById("pillSeason"),
  quoteText: document.getElementById("quoteText"),
  formattedLine: document.getElementById("formattedLine"),
  btnRandom: document.getElementById("btnRandom"),
  btnCopy: document.getElementById("btnCopy"),
  btnLink: document.getElementById("btnLink"),
  toast: document.getElementById("toast"),
};

let current = null;

function setToast(msg) {
  els.toast.textContent = msg;
  if (!msg) return;
  window.clearTimeout(setToast._t);
  setToast._t = window.setTimeout(() => (els.toast.textContent = ""), 1400);
}

function filteredPool() {
  const s = els.seasonSelect.value;
  const wantSeason = s === "all" ? null : Number(s);
  return EPISODES.filter(e => e.quote && (wantSeason === null || e.season === wantSeason));
}

function formatLine(e) {
  return `${e.codePretty} – ${e.title}: ${e.quote}`;
}

function render(e, {updateHash = true} = {}) {
  current = e;

  els.metaEpisode.textContent = `${e.codePretty} – ${e.title}`;
  els.pillSeason.textContent = `Season ${String(e.season).padStart(2, "0")}`;
  els.quoteText.textContent = e.quote;
  els.formattedLine.textContent = formatLine(e);

  if (updateHash) {
    const hash = `${e.key}-${slugify(e.title)}`;
    history.replaceState(null, "", `#${hash}`);
  }
}

function randomPick() {
  const pool = filteredPool();
  if (!pool.length) return null;

  if (pool.length === 1) return pool[0];

  let next = pool[Math.floor(Math.random() * pool.length)];
  // avoid repeats when possible
  if (current) {
    for (let i = 0; i < 6 && next.key === current.key; i++) {
      next = pool[Math.floor(Math.random() * pool.length)];
    }
  }
  return next;
}

function pickFromHash() {
  const h = (location.hash || "").replace(/^#/, "").trim();
  if (!h) return null;

  const key = h.split("-")[0]; // "01x01"
  const match = EPISODES.find(e => e.key === key && e.quote);
  return match || null;
}

function buildSeasonSelect() {
  const seasons = [...new Set(EPISODES.map(e => e.season))].sort((a,b)=>a-b);
  els.seasonSelect.innerHTML = "";

  const optAll = document.createElement("option");
  optAll.value = "all";
  optAll.textContent = "All seasons";
  els.seasonSelect.appendChild(optAll);

  for (const s of seasons) {
    const opt = document.createElement("option");
    opt.value = String(s);
    opt.textContent = `Season ${String(s).padStart(2, "0")}`;
    els.seasonSelect.appendChild(opt);
  }
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // fallback
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      document.body.removeChild(ta);
      return true;
    } catch {
      document.body.removeChild(ta);
      return false;
    }
  }
}

function boot() {
  buildSeasonSelect();

  // initial selection: hash -> random
  const fromHash = pickFromHash();
  render(fromHash || randomPick(), { updateHash: !fromHash });

  els.btnRandom.addEventListener("click", () => {
    const next = randomPick();
    if (next) render(next);
  });

  els.seasonSelect.addEventListener("change", () => {
    const next = randomPick();
    if (next) render(next);
  });

  els.btnCopy.addEventListener("click", async () => {
    if (!current) return;
    const ok = await copyText(formatLine(current));
    setToast(ok ? "Copied." : "Couldn’t copy.");
  });

  els.btnLink.addEventListener("click", async () => {
    const url = location.href;
    const ok = await copyText(url);
    setToast(ok ? "Link copied." : "Couldn’t copy link.");
  });

  window.addEventListener("hashchange", () => {
    const e = pickFromHash();
    if (e) render(e, { updateHash: false });
  });

  document.addEventListener("keydown", (ev) => {
    if (ev.code === "Space" && !/input|textarea|select/i.test(document.activeElement?.tagName || "")) {
      ev.preventDefault();
      const next = randomPick();
      if (next) render(next);
    }
  });
}

boot();
