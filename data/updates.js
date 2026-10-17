/*
  FATHOM GUIDES: SITE UPDATES
  ---------------------------------------------------------------
  This is the only file you need to edit for day-to-day updates.
  Save it, upload it to GitHub, and the website updates itself.

  Rules:
  - Keep the quote marks and commas exactly as they are.
  - Dates are written as "YYYY-MM-DD", for example "2026-10-07".
  - To remove an item, delete everything from its { to its },
*/

window.FATHOM = {

  /* ---------- HOME PAGE: WHAT'S NEW ----------
     Shown as a scrolling carousel on the home page, newest first.
     date: "YYYY-MM-DD" or "" to hide the date.
     img: a picture from the img folder, e.g. "img/pkmn-go-trail.webp".
     url: where the card links to. cta: the button wording.          */
  whatsNew: [
    { date: "2026-10-15", tag: "New", title: "Pokémon GO Trail Ledger is here", text: "Our first web app: a Twilight Trails and Halloween 2026 companion, set to your clock. Introductory price £4.99.", img: "img/pkmn-go-trail.webp", url: "pokemon-go.html", cta: "Take a look" },
    { date: "2026-10-15", tag: "Update", title: "Trail Ledger 1.1: Cinderace", text: "Is the Community Day move worth it? Real numbers against Charizard and other Fire attackers. Free for everyone who has bought it.", img: "img/snowfox-news.webp", url: "pokemon-go.html", cta: "Read more" },
    { date: "2026-10-14", tag: "Gift code", title: "New Whiteout Survival code", text: "SPORTSDAY26 gives Gems, Hero XP, speedups and resources. Check the live list for every working code.", img: "img/wos-starter.webp", url: "whiteout-survival.html", cta: "See the codes" },
    { date: "", tag: "Coming soon", title: "Pokémon Legends: Z-A Complete Manual", text: "Real-time battles, the Z-A Royale, Mega Evolution, every main mission and the Mega Dimension DLC.", img: "img/pkmn-za.webp", url: "pokemon-legends-za.html", cta: "Take a look" },
    { date: "", tag: "Free", title: "Minecraft manual: free Part I", text: "Try the first part of the Ultimate Survival Manual for free before you buy the full edition.", img: "img/mc-sample.webp", url: "minecraft.html", cta: "Get Part I" },
    { date: "", tag: "Guide", title: "Clash of Clans Beginner's Guide", text: "Builders, upgrade order, attacking and clans for new and returning players.", img: "img/coc-beginner.webp", url: "clash-of-clans.html", cta: "View guide" },
    { date: "", tag: "Store", title: "Search the store", text: "Find guides by game or platform: mobile, console or PC.", img: "img/snowfox-shop.webp", url: "shop.html", cta: "Visit the store" }
  ],

  /* ---------- WHITEOUT SURVIVAL GIFT CODES ----------
     Shown in the carousel on the Whiteout Survival page.
     expires: leave as "" if you do not know the expiry date.
     Codes past their expiry date are hidden automatically.
     sample: true shows a "SAMPLE" label. Delete the sample
     codes below when you add your first real ones.          */
  wosCodes: [
    { code: "SPORTSDAY26", rewards: "500 Gems (5 x 100), 30K Hero XP (3 x 10K), 1-hour Hero Speedup, 1-hour Construction Speedup, 1-hour Research Speedup, 50K Meat, 50K Wood, 10K Coal and 5K Iron", expires: "", added: "2026-10-14" },
    { code: "HangulDay2026", rewards: "1K Gems, 1 x Mythic Hero Shard, 5 x 10 Chief Stamina, 50K Meat, 50K Wood, 10K Coal and 5K Iron", expires: "", added: "2026-10-09" },
    { code: "WOS1007", rewards: "3-day Avatar Frame, 5 x 100 Gems, 2 x 100 VIP XP and 10 x 5-minute General Speedups", expires: "", added: "2026-10-07" },
    { code: "THXTeacher", rewards: "1,000 Gems, 2 x Epic Recruitment Key, 2 x 100 VIP XP, 50 x 1K Meat, 50 x 1K Wood, 10 x 1K Coal and 5 x 1K Iron", expires: "", added: "2026-10-05" },
    { code: "GAECHEONJEOL", rewards: "1K Gems, 8 x 1-hour General Speedup, 2 x 100 Enhancement XP, 50K Meat, 50K Wood, 10K Coal and 5K Iron", expires: "", added: "2026-10-03" },
    { code: "2ndYoutubeKR", rewards: "500 Gems, 10 x Chief Stamina, 3 x 1-hour General Speedup, 2 x 100 Enhancement XP, 50K Meat, 50K Wood, 10K Coal and 5K Iron", expires: "", added: "" },
    { code: "1stYoutubeKR", rewards: "500 Gems, 50K Hero XP, 1-hour Troop Speedup, 1-hour Building Speedup, 50K Meat, 50K Wood, 10K Coal and 5K Iron", expires: "", added: "2026-06-19" }
  ],

  /* ---------- WHITEOUT SURVIVAL NEWS ---------- */
  wosNews: [
    { date: "2026-10-14", title: "New gift code: SPORTSDAY26", text: "Redeem SPORTSDAY26 (all capitals) for 500 Gems, 30K Hero XP, three 1-hour speedups and resources. No expiry date announced yet, so claim it soon." },
    { date: "2026-10-09", title: "New gift code: HangulDay2026", text: "Redeem HangulDay2026 for 1K Gems, a Mythic Hero Shard, Chief Stamina and resources. No expiry date announced yet, so claim it soon." },
    { date: "2026-10-07", title: "New gift code: WOS1007", text: "Redeem WOS1007 for a 3-day Avatar Frame, Gems, VIP XP and speedups. No expiry date announced yet, so claim it soon." },
    { date: "2026-10-07", title: "Fathom Guides launches", text: "The full Whiteout Survival series is now available: the Starter Guide plus three Guide Companions, or all four in the Complete Bundle." }
  ],

  /* ---------- MINECRAFT NEWS ---------- */
  mcNews: [
    { date: "2026-10-08", title: "The Ultimate Minecraft Survival Manual is out", text: "All 38 chapters, from your first block to the Ender Dragon and beyond, for £9.99. Part I is free to download, so you can try it first." },
    { date: "2026-09-15", title: "Wilderness Bound is out", text: "Java 26.3 and Bedrock 26.50 added the dappled forest, poplar trees, abandoned camps, explorer maps and straw beds. All covered in the 2026 manual." }
  ],

  /* ---------- CLASH OF CLANS NEWS ---------- */
  cocNews: [
    { date: "2026-10-14", title: "The Clash of Clans Beginner's Guide is out", text: "Our first Clash of Clans guide covers gems and builders, the upgrade order, when to move up a Town Hall, attacking and clans. £3.99." }
  ],

  /* ---------- POKEMON LEGENDS: Z-A NEWS ---------- */
  pkmnNews: [
    { date: "2026-10-14", title: "The Pokémon Legends: Z-A Complete Manual is in production", text: "Real-time battles, all ten promotion matches, every Rogue Mega and the Mega Dimension. Follow Fathom Guides on Payhip to hear when it lands." }
  ],

  /* ---------- CLASH OF CLANS: OTHER MERCHANDISE (AMAZON) ----------
     Leave the list empty [] and the section stays hidden.     */
  cocMerch: [],

  /* ---------- POKEMON: OTHER MERCHANDISE (AMAZON) ----------
     Leave the list empty [] and the section stays hidden.     */
  pkmnMerch: [
    { title: "Pokémon TCG: 30th Celebration Elite Trainer Box", text: "Nine booster packs, a full-art promo card and premium accessories. High demand: Amazon may sell it by invitation only.", icon: "cards", url: "https://link.amazon/B0hvkhZ3I" },
    { title: "Pokémon TCG: 30th Celebration Binder Collection", text: "A collector's binder with five booster packs. High demand: Amazon may sell it by invitation only.", icon: "book", url: "https://link.amazon/B0fTBJf5q" },
    { title: "Pokémon TCG: 30th Celebration Booster Bundle", text: "Six booster packs from the 30th anniversary set. A great stocking filler.", icon: "cards", url: "https://link.amazon/B0d2r3G8L" },
    { title: "Pokémon assorted cards", text: "A mixed bundle of Pokémon cards for new collectors.", icon: "cards", url: "https://link.amazon/B082Uk5bt" },
    { title: "Pokémon TCG: Mega Evolution Pitch Black booster pack", text: "Ten cards per pack, with four pack art variants.", icon: "cards", url: "https://link.amazon/B0eiEKAOt" },
    { title: "Pokémon mini tin bundle", text: "50 assorted cards, one random Ultra Rare and a game coin.", icon: "cards", url: "https://link.amazon/B0d7Fq22C" },
    { title: "Pokémon Battle Spinner Arena set", text: "Two battle spinners, two Poké Ball launchers and a battle arena. Fun away from the screen.", icon: "ball", url: "https://link.amazon/B0i8hw61j" },
    { title: "Pokémon TCG Triple Whammy Tin (Darkrai)", text: "Three booster packs and three promo cards in a collectable tin.", icon: "cards", url: "https://link.amazon/B09w0a83u" },
    { title: "Pokémon TCG: Paradox Rift booster pack", text: "A booster pack with Glimmet and Glimmora promo cards and a coin.", icon: "cards", url: "https://link.amazon/B0f6GTArC" },
    { title: "Pokémon TCG: Scarlet & Violet 151 Elite Trainer Box", text: "The 151 set: booster packs, card sleeves, dice and storage. A favourite with collectors.", icon: "cards", url: "https://link.amazon/B00stMJQW" }
  ],
  pgoNews: [
    { date: "2026-10-15", title: "Trail Ledger is here", text: "Our Pokémon GO companion for the Twilight Trails season and Halloween 2026 is live. Introductory price £4.99." },
    { date: "2026-10-15", title: "Halloween 2026 dates confirmed", text: "Part I runs 27 Oct to 1 Nov (costume Zubat, Pikachu and Sinistea). Part II runs 1 to 5 Nov with the shiny Greavard debut." }
  ],

  /* ---------- WHITEOUT SURVIVAL: OTHER MERCHANDISE (AMAZON) ----------
     Same rules as the Minecraft list below.                  */
  wosMerch: [
    { title: "Phone cooling fan", text: "Clips onto your phone and keeps it cool through long events like SvS and Frostfire Mine.", icon: "fan", url: "https://link.amazon/B0bWwHpnX" },
    { title: "Power bank", text: "A fast-charging power bank so a flat battery never costs you a rally.", icon: "battery", url: "https://link.amazon/B0cPVyoPt" },
    { title: "Phone and tablet stand", text: "Hands-free viewing for gathering runs, rallies and checking the guide alongside the game.", icon: "stand", url: "https://link.amazon/B00LaI4wa" }
  ],

  /* ---------- MINECRAFT: OTHER MERCHANDISE (AMAZON) ----------
     url: paste your Amazon Associates link between the quotes.
     If url is "", the card shows "Link coming soon".
     icon: one of "game", "brick", "book", "plush", "gear",
           "fan", "battery", "stand", "card"     */
  mcMerch: [
    { title: "Minecraft for Nintendo Switch 2", text: "The full game for Switch 2. A great first copy for a new player, or an upgrade for a Switch fan.", icon: "game", url: "https://link.amazon/B000WXfAk" },
    { title: "LEGO Minecraft Chicken Jockey (21582)", text: "Build the famous chicken jockey in LEGO. A fun set for builders away from the screen.", icon: "brick", url: "https://link.amazon/B00lKxzKm" },
    { title: "Personalised Minecraft notebook", text: "A 96-page journal with their name on the cover. Perfect for planning builds and noting coordinates.", icon: "book", url: "https://link.amazon/B0341mZKn" },
    { title: "TY Creeper plush (18cm)", text: "A soft, collectable Creeper. An easy stocking filler for any Minecraft fan.", icon: "plush", url: "https://link.amazon/B0eirBTIw" }
  ]
};
