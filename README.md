# Fathom Guides website

A free static website for GitHub Pages. No build tools needed once it is uploaded.

## Pages

- `index.html` – home page
- `shop.html` – the store: a card for each game and platform
- `about.html` – about Fathom and our partner
- `disclaimer.html` – disclaimer
- `wos/index.html` and `minecraft/index.html` – game pages (addresses /wos and /minecraft), all on the same template:
  top tip in the header, guides, updates (gift codes or commands, plus news), then other merchandise
- `whiteout-survival.html` and `minecraft.html` – redirects to the short addresses, so old links keep working

## Day-to-day updates

Edit **`data/updates.js`** only. It holds:

- **wosCodes** – Whiteout Survival gift codes for the carousel. Codes past their expiry date hide themselves. Add the newest code at the top of the list.
- **wosNews** and **mcNews** – news items. Newest date shows first.
- **wosMerch** and **mcMerch** – the Other merchandise cards (Amazon). Paste your Amazon Associates link into `url`. Empty links show "Link coming soon".

Keep the quote marks and commas as they are. Dates are written `YYYY-MM-DD`.

## Publishing on GitHub Pages

1. Upload everything in this folder to the root of your repository (keep the folders).
2. In the repository go to **Settings > Pages**.
3. Under **Build and deployment** choose **Deploy from a branch**, pick `main` and `/ (root)`, then **Save**.
4. After a minute or two the site is live at `https://fathomguides.github.io/`.

To update later, upload the changed file (usually `data/updates.js`) and commit. The site refreshes within a couple of minutes.
