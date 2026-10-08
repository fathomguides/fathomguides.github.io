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

  /* ---------- WHITEOUT SURVIVAL GIFT CODES ----------
     Shown in the carousel on the Whiteout Survival page.
     expires: leave as "" if you do not know the expiry date.
     Codes past their expiry date are hidden automatically.
     sample: true shows a "SAMPLE" label. Delete the sample
     codes below when you add your first real ones.          */
  wosCodes: [
    { code: "WOS1007", rewards: "3-day Avatar Frame, 5 x 100 Gems, 2 x 100 VIP XP and 10 x 5-minute General Speedups", expires: "", added: "2026-10-07" },
    { code: "THXTeacher", rewards: "1,000 Gems, 2 x Epic Recruitment Key, 2 x 100 VIP XP, 50 x 1K Meat, 50 x 1K Wood, 10 x 1K Coal and 5 x 1K Iron", expires: "", added: "2026-10-05" },
    { code: "GAECHEONJEOL", rewards: "1K Gems, 8 x 1-hour General Speedup, 2 x 100 Enhancement XP, 50K Meat, 50K Wood, 10K Coal and 5K Iron", expires: "", added: "2026-10-03" },
    { code: "2ndYoutubeKR", rewards: "500 Gems, 10 x Chief Stamina, 3 x 1-hour General Speedup, 2 x 100 Enhancement XP, 50K Meat, 50K Wood, 10K Coal and 5K Iron", expires: "", added: "" },
    { code: "1stYoutubeKR", rewards: "500 Gems, 50K Hero XP, 1-hour Troop Speedup, 1-hour Building Speedup, 50K Meat, 50K Wood, 10K Coal and 5K Iron", expires: "", added: "2026-06-19" }
  ],

  /* ---------- WHITEOUT SURVIVAL NEWS ---------- */
  wosNews: [
    { date: "2026-10-07", title: "New gift code: WOS1007", text: "Redeem WOS1007 for a 3-day Avatar Frame, Gems, VIP XP and speedups. No expiry date announced yet, so claim it soon." },
    { date: "2026-10-07", title: "Fathom Guides launches", text: "The full Whiteout Survival series is now available: the Starter Guide plus three Guide Companions, or all four in the Complete Bundle." }
  ],

  /* ---------- MINECRAFT NEWS ---------- */
  mcNews: [
    { date: "2026-10-07", title: "Ultimate Minecraft Survival Manual in production", text: "Parts I to IV are written. The full manual launches at £9.99, with Part I free to download." },
    { date: "2026-09-15", title: "Wilderness Bound is out", text: "Java 26.3 and Bedrock 26.50 added the dappled forest, poplar trees, abandoned camps, explorer maps and straw beds. All covered in the 2026 manual." }
  ],

  /* ---------- WHITEOUT SURVIVAL: OTHER MERCHANDISE (AMAZON) ----------
     Same rules as the Minecraft list below.                  */
  wosMerch: [
    { title: "Phone cooling fan", text: "Clips onto your phone and keeps it cool through long events like SvS and Frostfire Mine.", icon: "fan", url: "" },
    { title: "Power bank", text: "A fast-charging power bank so a flat battery never costs you a rally.", icon: "battery", url: "" },
    { title: "Phone and tablet stand", text: "Hands-free viewing for gathering runs, rallies and checking the guide alongside the game.", icon: "stand", url: "" },
    { title: "App store gift cards", text: "Google Play and App Store gift cards. A safe way to give in-game spending as a present.", icon: "card", url: "" }
  ],

  /* ---------- MINECRAFT: OTHER MERCHANDISE (AMAZON) ----------
     url: paste your Amazon Associates link between the quotes.
     If url is "", the card shows "Link coming soon".
     icon: one of "game", "brick", "book", "plush", "gear",
           "fan", "battery", "stand", "card"     */
  mcMerch: [
    { title: "Minecraft for Nintendo Switch", text: "The full game for Switch, ideal as a first copy for younger players.", icon: "game", url: "" },
    { title: "Minecraft building sets", text: "Brick sets based on Minecraft biomes and mobs. Great for builders away from the screen.", icon: "brick", url: "" },
    { title: "Official Minecraft books", text: "Guidebooks, stories and annuals that pair nicely with the Fathom manual.", icon: "book", url: "" },
    { title: "Plush toys and figures", text: "Creepers, axolotls and more. An easy stocking filler.", icon: "plush", url: "" }
  ]
};
