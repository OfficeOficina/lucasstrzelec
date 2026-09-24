/* Builds the index from projects.js. Nothing to edit here. */
(function () {
  var list = document.getElementById("list"),
      tagsEl = document.getElementById("tags"),
      active = decodeURIComponent(location.hash.replace("#", "")) || "";

  document.getElementById("siteName").textContent = SITE.name;
  document.title = SITE.name + " - Projects";

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function placeholder() {                       // a light grey box with faint lines
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="238" height="185" viewBox="0 0 238 185">' +
              '<rect width="238" height="185" fill="#e9e9e9"/><path d="M0 0L238 185M238 0L0 185" stroke="#d6d6d6" stroke-width="1"/></svg>';
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  }
  function words(p) { return [p.category].concat(p.tags || []); }

  /* the filter words, in the order they first appear */
  var all = [];
  PROJECTS.forEach(function (p) { words(p).forEach(function (w) { if (w && all.indexOf(w) < 0) all.push(w); }); });

  function link(p, node, cls) {
    if (!p.href) { node.className += " " + cls; return node; }
    var a = el("a", cls); a.href = p.href; a.appendChild(node); return a;
  }

  function render() {
    list.innerHTML = "";
    PROJECTS.forEach(function (p) {
      if (active && words(p).indexOf(active) < 0) return;
      var row = el("article", "row");

      var code = el("div", "c-code");
      code.appendChild(el("span", null, p.id));
      if (p.update) { code.appendChild(document.createTextNode(" ")); code.appendChild(el("span", null, "UPDATE")); }
      row.appendChild(code);
      row.appendChild(el("div", "c-cat", p.category));
      row.appendChild(el("div", "c-place", p.place));
      row.appendChild(el("div", "c-years", p.years));

      var text = el("div", "c-text");
      var t = el("div", "title");
      if (p.href) { var a = el("a", null, p.title); a.href = p.href; t.appendChild(a); } else { t.textContent = p.title; }
      text.appendChild(t);
      (p.text || []).forEach(function (para) { text.appendChild(el("p", null, para)); });
      row.appendChild(text);

      if (p.images && p.images.length) {
        var imgs = el("div", "c-imgs");
        p.images.forEach(function (src) {
          var img = el("img"); img.alt = p.title; img.loading = "lazy";
          img.src = src === "placeholder" ? placeholder() : src;
          if (p.href) { var a2 = el("a"); a2.href = p.href; a2.appendChild(img); imgs.appendChild(a2); } else { imgs.appendChild(img); }
        });
        row.appendChild(imgs);
      }
      list.appendChild(row);
    });
  }

  function renderTags() {
    tagsEl.innerHTML = "";
    all.forEach(function (w) {
      var b = el("button", "tag" + (w === active ? " on" : ""), w);
      b.type = "button"; b.setAttribute("aria-pressed", w === active ? "true" : "false");
      b.addEventListener("click", function () {
        active = (active === w) ? "" : w;                 // click again to show everything
        history.replaceState(null, "", active ? "#" + encodeURIComponent(active) : location.pathname + location.search);
        renderTags(); render();
      });
      tagsEl.appendChild(b);
    });
  }

  addEventListener("hashchange",function(){ active=decodeURIComponent(location.hash.replace("#","")); renderTags(); render(); });   // back / forward buttons
  renderTags(); render();
})();
