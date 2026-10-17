/* Fathom Guides site script: renders gift codes, news and gift ideas from data/updates.js */
(function () {
  var D = window.FATHOM || {};
  var today = new Date(); today.setHours(0, 0, 0, 0);

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function fmt(d) {
    var t = new Date(d + "T00:00:00");
    return isNaN(t) ? esc(d) : t.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }

  /* ---------- news lists ---------- */
  document.querySelectorAll("[data-news]").forEach(function (ul) {
    var items = (D[ul.getAttribute("data-news")] || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : a.date > b.date ? -1 : 0; });
    if (!items.length) { ul.innerHTML = '<li><p>No updates yet. Check back soon.</p></li>'; return; }
    ul.innerHTML = items.map(function (n) {
      return '<li><time datetime="' + esc(n.date) + '">' + fmt(n.date) + '</time><h3>' + esc(n.title) + '</h3><p>' + esc(n.text) + '</p></li>';
    }).join("");
  });

  /* ---------- copy helper ---------- */
  function copyText(btn, text) {
    function ok() { btn.textContent = "Copied"; btn.classList.add("done"); setTimeout(function () { btn.textContent = "Copy code"; btn.classList.remove("done"); }, 1800); }
    try {
      navigator.clipboard.writeText(text).then(ok, function () { fallback(); });
    } catch (e) { fallback(); }
    function fallback() {
      var el = btn.closest(".slide").querySelector(".code");
      var r = document.createRange(); r.selectNodeContents(el);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      btn.textContent = "Selected";
    }
  }

  /* ---------- gift code carousel ---------- */
  document.querySelectorAll("[data-codes]").forEach(function (box) {
    var codes = (D[box.getAttribute("data-codes")] || []).filter(function (c) {
      if (!c.expires) return true;
      var e = new Date(c.expires + "T23:59:59");
      return isNaN(e) || e >= today;
    });
    if (!codes.length) {
      box.innerHTML = '<div class="empty">No live codes right now. New codes are added here as soon as they are released.</div>';
      return;
    }
    var slides = codes.map(function (c, i) {
      return '<div class="slide" role="group" aria-roledescription="slide" aria-label="Code ' + (i + 1) + ' of ' + codes.length + '">' +
        '<div class="k">GIFT CODE' + (c.sample ? ' <span class="tag sample">SAMPLE</span>' : ' <span class="tag">LIVE</span>') + '</div>' +
        '<div class="code">' + esc(c.code) + '</div>' +
        '<p class="rew">' + esc(c.rewards) + '</p>' +
        '<div class="row"><span class="exp">' + (c.expires ? 'Expires ' + fmt(c.expires) : 'Expiry not announced') + (c.added ? ' · Added ' + fmt(c.added) : '') + '</span>' +
        '<button class="copy" type="button" data-code="' + esc(c.code) + '">Copy code</button></div></div>';
    }).join("");
    box.innerHTML = '<div class="track">' + slides + '</div>' +
      (codes.length > 1 ? '<button class="cnav prev" type="button" aria-label="Previous code">&#8249;</button><button class="cnav next" type="button" aria-label="Next code">&#8250;</button>' +
        '<div class="dots">' + codes.map(function (_, i) { return '<button type="button" aria-label="Show code ' + (i + 1) + '"></button>'; }).join("") + '</div>' : '');
    var track = box.querySelector(".track"), dots = box.querySelectorAll(".dots button"), i = 0, timer = null;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function go(n) {
      i = (n + codes.length) % codes.length;
      track.style.transform = "translateX(" + (-100 * i) + "%)";
      dots.forEach(function (d, k) { d.setAttribute("aria-current", k === i ? "true" : "false"); });
    }
    function play() { if (reduce || codes.length < 2) return; stop(); timer = setInterval(function () { go(i + 1); }, 5000); }
    function stop() { if (timer) clearInterval(timer); timer = null; }
    box.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      if (b.classList.contains("copy")) { copyText(b, b.getAttribute("data-code")); return; }
      if (b.classList.contains("prev")) go(i - 1);
      else if (b.classList.contains("next")) go(i + 1);
      else { var k = Array.prototype.indexOf.call(dots, b); if (k > -1) go(k); }
      play();
    });
    box.addEventListener("mouseenter", stop); box.addEventListener("mouseleave", play);
    box.addEventListener("focusin", stop);
    var x0 = null;
    box.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; stop(); }, { passive: true });
    box.addEventListener("touchend", function (e) {
      if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1)); play();
    });
    go(0); play();
  });

  /* ---------- gift ideas ---------- */
  var ICONS = {
    cards: '<svg viewBox="0 0 48 48"><rect x="8" y="10" width="22" height="30" rx="3" transform="rotate(-8 19 25)"/><rect x="18" y="8" width="22" height="30" rx="3"/><circle cx="29" cy="23" r="5"/></svg>',
    ball: '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="16"/><path d="M8 24h11M29 24h11"/><circle cx="24" cy="24" r="5"/></svg>',
    game: '<svg viewBox="0 0 48 48"><rect x="4" y="14" width="40" height="22" rx="11"/><path d="M14 22v8M10 26h8"/><circle cx="32" cy="23" r="2"/><circle cx="37" cy="28" r="2"/></svg>',
    brick: '<svg viewBox="0 0 48 48"><rect x="6" y="18" width="36" height="20" rx="2"/><rect x="11" y="12" width="8" height="6" rx="1"/><rect x="29" y="12" width="8" height="6" rx="1"/></svg>',
    book: '<svg viewBox="0 0 48 48"><path d="M8 10h14a4 4 0 0 1 4 4v26a3 3 0 0 0-3-3H8z"/><path d="M40 10H26a4 4 0 0 0-4 4v26a3 3 0 0 1 3-3h15z"/></svg>',
    plush: '<svg viewBox="0 0 48 48"><rect x="10" y="10" width="28" height="28" rx="4"/><rect x="16" y="17" width="5" height="5"/><rect x="27" y="17" width="5" height="5"/><path d="M21 26h6v4h3v6h-4v-3h-4v3h-4v-6h3z"/></svg>',
    fan: '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="16"/><circle cx="24" cy="24" r="3"/><path d="M24 21c-2-6 0-10 4-11M27 25c6-1 9 2 9 6M21 26c-4 5-8 5-11 2"/></svg>',
    battery: '<svg viewBox="0 0 48 48"><rect x="12" y="8" width="24" height="34" rx="4"/><path d="M20 4h8"/><path d="M26 16l-6 10h8l-6 10"/></svg>',
    stand: '<svg viewBox="0 0 48 48"><rect x="14" y="6" width="20" height="28" rx="3" transform="rotate(-8 24 20)"/><path d="M18 34l-6 10M30 32l6 12M10 44h28"/></svg>',
    card: '<svg viewBox="0 0 48 48"><rect x="5" y="12" width="38" height="24" rx="4"/><path d="M5 20h38M12 29h10"/></svg>',
    gear: '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="7"/><path d="M24 6v6M24 36v6M6 24h6M36 24h6M11 11l4 4M33 33l4 4M37 11l-4 4M15 33l-4 4"/></svg>'
  };
  document.querySelectorAll("[data-merch]").forEach(function (box) {
    var items = D[box.getAttribute("data-merch")] || [];
    if (!items.length) { var sec = box.closest("section"); if (sec) sec.hidden = true; return; }
    box.innerHTML = items.map(function (m) {
      var link = m.url ? '<a class="btn btn-gold" href="' + esc(m.url) + '" rel="sponsored noopener" target="_blank">View on Amazon</a>'
                       : '<span class="btn btn-line" aria-disabled="true">Link coming soon</span>';
      return '<article class="item"><div class="pic">' + (ICONS[m.icon] || ICONS.gear) + '</div><div class="body"><h3>' + esc(m.title) + '</h3><p>' + esc(m.text) + '</p>' + link + '</div></article>';
    }).join("");
    /* More than 4 items: show as a scrolling carousel the same height as other shops */
    if (items.length > 4) {
      box.classList.add("carousel");
      var wrap = document.createElement("div"); wrap.className = "carousel-wrap";
      box.parentNode.insertBefore(wrap, box); wrap.appendChild(box);
      ["prev", "next"].forEach(function (dir) {
        var b = document.createElement("button");
        b.className = "car-btn " + dir; b.type = "button";
        b.setAttribute("aria-label", dir === "prev" ? "Previous items" : "Next items");
        b.innerHTML = dir === "prev" ? "&#8249;" : "&#8250;";
        b.addEventListener("click", function () {
          var card = box.querySelector(".item"); var step = card ? card.getBoundingClientRect().width + 18 : 300;
          box.scrollBy({ left: dir === "prev" ? -step : step, behavior: "smooth" });
        });
        wrap.appendChild(b);
      });
      var upd = function () {
        wrap.querySelector(".prev").disabled = box.scrollLeft < 8;
        wrap.querySelector(".next").disabled = box.scrollLeft + box.clientWidth > box.scrollWidth - 8;
      };
      box.addEventListener("scroll", upd, { passive: true }); window.addEventListener("resize", upd); upd();
      var paused = false;
      wrap.addEventListener("mouseenter", function () { paused = true; });
      wrap.addEventListener("mouseleave", function () { paused = false; });
      wrap.addEventListener("touchstart", function () { paused = true; }, { passive: true });
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setInterval(function () {
          if (paused || document.hidden) return;
          var card = box.querySelector(".item"); var step = card ? card.getBoundingClientRect().width + 18 : 300;
          if (box.scrollLeft + box.clientWidth > box.scrollWidth - 8) box.scrollTo({ left: 0, behavior: "smooth" });
          else box.scrollBy({ left: step, behavior: "smooth" });
        }, 5000);
      }
    }
  });

  /* Store search and platform filter */
  var sq = document.getElementById("storeq");
  if (sq) {
    var plat = "";
    var cards = Array.prototype.slice.call(document.querySelectorAll(".games .game"));
    var none = document.querySelector(".store-none");
    var norm = function (t) { return (t || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); };
    var run = function () {
      var q = norm(sq.value.trim()), shown = 0;
      cards.forEach(function (c) {
        var txt = norm(c.innerText);
        var ok = (!q || q.split(/\s+/).every(function (w) { return txt.indexOf(w) > -1; })) && (!plat || c.classList.contains("soon") || txt.indexOf(plat) > -1);
        if (c.classList.contains("soon") && (q || plat)) ok = false;
        c.hidden = !ok; if (ok) shown++;
      });
      if (none) none.hidden = shown > 0;
    };
    sq.addEventListener("input", run);
    document.querySelectorAll(".store-filters button").forEach(function (b) {
      b.addEventListener("click", function () {
        plat = b.getAttribute("data-p");
        document.querySelectorAll(".store-filters button").forEach(function (x) { x.classList.toggle("on", x === b); });
        run();
      });
    });
  }
})();

/* Cookie consent for Google Analytics (v3.9) */
(function(){
  function get(){try{return localStorage.getItem("fg-consent")}catch(e){return null}}
  function set(v){try{localStorage.setItem("fg-consent",v)}catch(e){}}
  function choose(v){set(v);if(window.gtag)gtag("consent","update",{analytics_storage:v==="yes"?"granted":"denied"});var b=document.getElementById("fg-cookie");if(b)b.remove();}
  function show(){
    if(document.getElementById("fg-cookie"))return;
    var b=document.createElement("div");b.id="fg-cookie";b.setAttribute("role","dialog");b.setAttribute("aria-label","Cookie choice");
    b.innerHTML='<p>We use Google Analytics cookies to see which guides people visit, so we can make better ones. No ads, no tracking for marketing. Is that OK?</p><div class="fg-cookie-btns"><button type="button" data-v="yes">Accept</button><button type="button" data-v="no" class="ghost">Decline</button></div>';
    b.addEventListener("click",function(e){var v=e.target.getAttribute("data-v");if(v)choose(v);});
    document.body.appendChild(b);
  }
  document.addEventListener("click",function(e){if(e.target.closest&&e.target.closest("[data-cookie-settings]")){e.preventDefault();show();}});
  if(!get()){if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",show);else show();}
})();

/* Home page: What's new carousel (v4.0) */
(function(){
  var box=document.querySelector("[data-whatsnew]"); var D=window.FATHOM||{}; var items=D.whatsNew||[];
  if(!box) return; if(!items.length){var sec=box.closest("section"); if(sec) sec.hidden=true; return;}
  function e(t){return String(t==null?"":t).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
  function d(s){if(!s)return""; var p=s.split("-"); var m=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][+p[1]-1]; return +p[2]+" "+m+" "+p[0];}
  box.innerHTML=items.map(function(i){
    return '<a class="wn-card" href="'+e(i.url)+'"><div class="wn-pic"><img src="'+e(i.img)+'" alt="" loading="lazy"></div><div class="wn-body"><div class="wn-meta"><span class="wn-tag">'+e(i.tag)+'</span>'+(i.date?'<time datetime="'+e(i.date)+'">'+d(i.date)+'</time>':'')+'</div><h3>'+e(i.title)+'</h3><p>'+e(i.text)+'</p><span class="go">'+e(i.cta||"Read more")+' &rarr;</span></div></a>';
  }).join("");
  var wrap=document.createElement("div"); wrap.className="carousel-wrap"; box.parentNode.insertBefore(wrap,box); wrap.appendChild(box);
  function step(){var c=box.querySelector(".wn-card"); return c?c.getBoundingClientRect().width+18:300;}
  ["prev","next"].forEach(function(dir){var b=document.createElement("button"); b.className="car-btn "+dir; b.type="button"; b.setAttribute("aria-label",dir==="prev"?"Previous news":"Next news"); b.innerHTML=dir==="prev"?"&#8249;":"&#8250;"; b.addEventListener("click",function(){box.scrollBy({left:dir==="prev"?-step():step(),behavior:"smooth"});}); wrap.appendChild(b);});
  function upd(){wrap.querySelector(".prev").disabled=box.scrollLeft<8; wrap.querySelector(".next").disabled=box.scrollLeft+box.clientWidth>box.scrollWidth-8;}
  box.addEventListener("scroll",upd,{passive:true}); window.addEventListener("resize",upd); upd();
  var paused=false; wrap.addEventListener("mouseenter",function(){paused=true;}); wrap.addEventListener("mouseleave",function(){paused=false;}); wrap.addEventListener("touchstart",function(){paused=true;},{passive:true}); wrap.addEventListener("focusin",function(){paused=true;});
  if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){setInterval(function(){if(paused||document.hidden)return; if(box.scrollLeft+box.clientWidth>box.scrollWidth-8) box.scrollTo({left:0,behavior:"smooth"}); else box.scrollBy({left:step(),behavior:"smooth"});},6000);}
})();
