const nations = [
  { key: "Mondstadt", th: "มอนด์สตัดท์", subtitle: "นครแห่งอิสรภาพ", element: "Anemo", symbol: "✧", archon: "Barbatos · Venti", ideal: "อิสรภาพ", summary: "นครแห่งสายลมและบทเพลง อัศวินแห่ง Favonius ดูแลความสงบของผู้คน", landmarks: "เมืองมอนด์สตัดท์ · Dragonspine" },
  { key: "Liyue", th: "หลีเยว่", subtitle: "นครแห่งสัญญา", element: "Geo", symbol: "◆", archon: "Morax · Zhongli", ideal: "สัญญา", summary: "ท่าเรือการค้าที่รุ่งเรือง ผู้คนขับเคลื่อนชีวิตด้วยความเชื่อมั่นในคำสัญญา", landmarks: "Liyue Harbor · Chenyu Vale" },
  { key: "Inazuma", th: "อินาสึมะ", subtitle: "นครแห่งนิรันดร์", element: "Electro", symbol: "ϟ", archon: "Beelzebul · Raiden Ei", ideal: "นิรันดร์", summary: "หมู่เกาะกลางพายุสายฟ้า ซึ่งอดีตและอนาคตต่างถูกตั้งคำถามผ่านแนวคิดนิรันดร์", landmarks: "Narukami Island · Watatsumi" },
  { key: "Sumeru", th: "สุเมรุ", subtitle: "นครแห่งปัญญา", element: "Dendro", symbol: "❋", archon: "Buer · Nahida", ideal: "ปัญญา", summary: "ดินแดนของผืนป่า ทะเลทราย และสถาบัน Akademiya ที่แสวงหาความรู้", landmarks: "Sumeru City · Avidya Forest" },
  { key: "Fontaine", th: "ฟงแตน", subtitle: "นครแห่งความยุติธรรม", element: "Hydro", symbol: "◈", archon: "Focalors", ideal: "ความยุติธรรม", summary: "นครแห่งกลไก โรงละคร และศาล ที่ทุกเรื่องราวสามารถกลายเป็นคดีได้", landmarks: "Court of Fontaine · Opera Epiclese" },
  { key: "Natlan", th: "นาตลัน", subtitle: "นครแห่งสงคราม", element: "Pyro", symbol: "✺", archon: "Mavuika", ideal: "สงคราม", summary: "ดินแดนภูเขาไฟและหกเผ่า ที่ความกล้าหาญ ความทรงจำ และการต่อสู้คือพลังร่วมกัน", landmarks: "Stadium of the Sacred Flame · 6 เผ่า" },
  { key: "Snezhnaya", th: "สเนซนายา", subtitle: "นครแห่งความรัก", element: "Cryo", symbol: "✥", archon: "The Tsaritsa", ideal: "ความรัก", summary: "ดินแดนหิมะอันไกลโพ้น บ้านของ Fatui และแคว้น Nod-Krai ทางตอนใต้", landmarks: "Snezhnaya · Nod-Krai" }
];

const elements = [
  { key: "Anemo", th: "Anemo", thai: "ลม", symbol: "✧", color: "#55a389", note: "พัดพาและกระจายธาตุอื่น" },
  { key: "Geo", th: "Geo", thai: "หิน", symbol: "◆", color: "#bd9649", note: "ผลึกและโครงสร้างที่มั่นคง" },
  { key: "Electro", th: "Electro", thai: "สายฟ้า", symbol: "ϟ", color: "#8b69bd", note: "ประจุไฟฟ้าและพลังงาน" },
  { key: "Dendro", th: "Dendro", thai: "พฤกษา", symbol: "❋", color: "#699b58", note: "เมล็ดพันธุ์และการเติบโต" },
  { key: "Hydro", th: "Hydro", thai: "น้ำ", symbol: "◈", color: "#5299b9", note: "การไหลเวียนและการเยียวยา" },
  { key: "Pyro", th: "Pyro", thai: "ไฟ", symbol: "✺", color: "#d16755", note: "เปลวไฟและการเผาไหม้" },
  { key: "Cryo", th: "Cryo", thai: "น้ำแข็ง", symbol: "✥", color: "#6baeb8", note: "ความเย็นและการหยุดนิ่ง" }
];

const roster = [];
const add = (region, element, rarity, names) => names.forEach(name => roster.push({ name, region, element, rarity }));

add("Mondstadt", "Geo", 5, ["Albedo"]);
add("Mondstadt", "Pyro", 4, ["Amber", "Bennett"]);
add("Mondstadt", "Hydro", 4, ["Barbara", "Dahlia"]);
add("Mondstadt", "Pyro", 5, ["Diluc", "Durin"]);
add("Mondstadt", "Cryo", 4, ["Diona", "Mika", "Rosaria"]);
add("Mondstadt", "Cryo", 5, ["Eula", "Lohen"]);
add("Mondstadt", "Electro", 4, ["Fischl", "Lisa", "Razor"]);
add("Mondstadt", "Anemo", 5, ["Jean", "Varka", "Venti"]);
add("Mondstadt", "Cryo", 4, ["Kaeya"]);
add("Mondstadt", "Pyro", 5, ["Klee"]);
add("Mondstadt", "Hydro", 5, ["Mona"]);
add("Mondstadt", "Geo", 4, ["Noelle"]);
add("Mondstadt", "Anemo", 4, ["Prune", "Sucrose"]);

add("Liyue", "Dendro", 5, ["Baizhu"]);
add("Liyue", "Electro", 4, ["Beidou"]);
add("Liyue", "Cryo", 4, ["Chongyun"]);
add("Liyue", "Pyro", 4, ["Gaming", "Xiangling", "Xinyan", "Yanfei"]);
add("Liyue", "Cryo", 5, ["Ganyu", "Qiqi", "Shenhe"]);
add("Liyue", "Pyro", 5, ["Hu Tao"]);
add("Liyue", "Electro", 5, ["Keqing"]);
add("Liyue", "Anemo", 4, ["Lan Yan"]);
add("Liyue", "Geo", 4, ["Ningguang", "Yun Jin"]);
add("Liyue", "Anemo", 5, ["Xianyun", "Xiao"]);
add("Liyue", "Hydro", 4, ["Xingqiu"]);
add("Liyue", "Dendro", 4, ["Yaoyao"]);
add("Liyue", "Hydro", 5, ["Yelan"]);
add("Liyue", "Geo", 5, ["Zhongli", "Zibai"]);

add("Inazuma", "Geo", 5, ["Arataki Itto", "Chiori"]);
add("Inazuma", "Geo", 4, ["Gorou"]);
add("Inazuma", "Anemo", 5, ["Kaedehara Kazuha", "Yumemizuki Mizuki"]);
add("Inazuma", "Dendro", 4, ["Kirara"]);
add("Inazuma", "Electro", 4, ["Kujou Sara"]);
add("Inazuma", "Electro", 5, ["Raiden Shogun", "Yae Miko"]);
add("Inazuma", "Electro", 4, ["Kuki Shinobu"]);
add("Inazuma", "Cryo", 5, ["Kamisato Ayaka"]);
add("Inazuma", "Hydro", 5, ["Kamisato Ayato", "Sangonomiya Kokomi"]);
add("Inazuma", "Anemo", 4, ["Sayu", "Shikanoin Heizou"]);
add("Inazuma", "Pyro", 4, ["Thoma"]);
add("Inazuma", "Pyro", 5, ["Yoimiya"]);

add("Sumeru", "Dendro", 5, ["Alhaitham", "Nahida", "Tighnari"]);
add("Sumeru", "Hydro", 4, ["Candace"]);
add("Sumeru", "Dendro", 4, ["Collei", "Kaveh"]);
add("Sumeru", "Electro", 5, ["Cyno"]);
add("Sumeru", "Pyro", 5, ["Dehya"]);
add("Sumeru", "Electro", 4, ["Dori", "Sethos"]);
add("Sumeru", "Anemo", 4, ["Faruzan"]);
add("Sumeru", "Cryo", 4, ["Layla"]);
add("Sumeru", "Hydro", 5, ["Nilou"]);
add("Sumeru", "Anemo", 5, ["Wanderer"]);

add("Fontaine", "Pyro", 5, ["Arlecchino"]);
add("Fontaine", "Cryo", 4, ["Charlotte"]);
add("Fontaine", "Pyro", 4, ["Chevreuse"]);
add("Fontaine", "Electro", 5, ["Clorinde"]);
add("Fontaine", "Dendro", 5, ["Emilie"]);
add("Fontaine", "Cryo", 5, ["Escoffier", "Wriothesley"]);
add("Fontaine", "Cryo", 4, ["Freminet"]);
add("Fontaine", "Hydro", 5, ["Furina", "Neuvillette", "Sigewinne"]);
add("Fontaine", "Anemo", 4, ["Lynette"]);
add("Fontaine", "Pyro", 5, ["Lyney"]);
add("Fontaine", "Geo", 5, ["Navia"]);

add("Natlan", "Anemo", 5, ["Chasca"]);
add("Natlan", "Cryo", 5, ["Citlali"]);
add("Natlan", "Electro", 4, ["Iansan"]);
add("Natlan", "Anemo", 4, ["Ifa"]);
add("Natlan", "Geo", 4, ["Kachina"]);
add("Natlan", "Dendro", 5, ["Kinich"]);
add("Natlan", "Pyro", 5, ["Mavuika"]);
add("Natlan", "Hydro", 5, ["Mualani"]);
add("Natlan", "Electro", 4, ["Ororon"]);
add("Natlan", "Electro", 5, ["Varesa"]);
add("Natlan", "Geo", 5, ["Xilonen"]);

add("Snezhnaya", "Hydro", 4, ["Aino"]);
add("Snezhnaya", "Electro", 4, ["Alyosha"]);
add("Snezhnaya", "Cryo", 5, ["Columbina", "Odette", "Sandrone"]);
add("Snezhnaya", "Electro", 5, ["Flins", "Ineffa"]);
add("Snezhnaya", "Geo", 4, ["Illuga"]);
add("Snezhnaya", "Anemo", 4, ["Jahoda"]);
add("Snezhnaya", "Dendro", 5, ["Lauma", "Nefer"]);
add("Snezhnaya", "Geo", 5, ["Linnea"]);
add("Snezhnaya", "Hydro", 5, ["Tartaglia", "Vodyanitsa"]);
add("Snezhnaya", "Anemo", 5, ["Vesna"]);

const state = { region: "All", element: "All", query: "" };
const byId = (id) => document.getElementById(id);
const elementInfo = (key) => elements.find(item => item.key === key);
const nationInfo = (key) => nations.find(item => item.key === key);

function initials(name) {
  return name.split(" ").map(part => part[0]).join("").slice(0, 3);
}

function renderNations() {
  byId("nation-grid").innerHTML = nations.map((nation, index) => `
    <button class="nation-card" data-region="${nation.key}" type="button" aria-label="ดูตัวละครจาก${nation.th}">
      <span class="nation-number">0${index + 1}</span>
      <span class="nation-symbol">${nation.symbol}</span>
      <h3>${nation.key}</h3>
      <p>${nation.th} · ${nation.subtitle}</p>
      <span class="card-link">สำรวจ <b>→</b></span>
    </button>`).join("");
}

function renderArchons() {
  byId("archon-grid").innerHTML = nations.map(nation => {
    const el = elementInfo(nation.element);
    return `<article class="archon-card" style="--archon-color:${el.color}">
      <span class="archon-element">${nation.symbol}</span>
      <small>${nation.th.toUpperCase()} · ${nation.element.toUpperCase()}</small>
      <h3>${nation.archon}</h3>
      <p>อุดมคติ: ${nation.ideal}</p>
    </article>`;
  }).join("");
}

function renderElements() {
  byId("element-grid").innerHTML = elements.map(el => `
    <article class="element-card" style="--element:${el.color}">
      <span class="element-symbol">${el.symbol}</span>
      <h3>${el.th}</h3>
      <p>${el.thai} · ${el.note}</p>
    </article>`).join("");
}

function renderTabs() {
  const allTab = `<button class="region-tab ${state.region === "All" ? "active" : ""}" data-region-filter="All" type="button" role="tab" aria-selected="${state.region === "All"}">ทั้งหมด <span>${roster.length}</span></button>`;
  byId("region-tabs").innerHTML = allTab + nations.map(nation => {
    const total = roster.filter(item => item.region === nation.key).length;
    return `<button class="region-tab ${state.region === nation.key ? "active" : ""}" data-region-filter="${nation.key}" type="button" role="tab" aria-selected="${state.region === nation.key}">${nation.th} <span>${total}</span></button>`;
  }).join("");
  byId("element-filters").innerHTML = `<button class="element-filter ${state.element === "All" ? "active" : ""}" data-element-filter="All" type="button" style="--filter-color:#536153">ทุกธาตุ</button>` + elements.map(el => `<button class="element-filter ${state.element === el.key ? "active" : ""}" data-element-filter="${el.key}" type="button" style="--filter-color:${el.color}">${el.symbol} ${el.th}</button>`).join("");
}

function filteredCharacters() {
  const normalizedQuery = state.query.trim().toLowerCase();
  return roster.filter(character => {
    const matchesRegion = state.region === "All" || character.region === state.region;
    const matchesElement = state.element === "All" || character.element === state.element;
    const matchesQuery = !normalizedQuery || `${character.name} ${character.region} ${character.element} ${nationInfo(character.region).th}`.toLowerCase().includes(normalizedQuery);
    return matchesRegion && matchesElement && matchesQuery;
  }).sort((a, b) => a.name.localeCompare(b.name));
}

function renderCharacters() {
  const characters = filteredCharacters();
  const grid = byId("character-grid");
  byId("visible-count").textContent = characters.length;
  byId("empty-state").hidden = characters.length !== 0;
  grid.innerHTML = characters.map(character => {
    const element = elementInfo(character.element);
    const region = nationInfo(character.region);
    return `<button class="character-card" data-character="${character.name}" type="button" aria-label="ดูข้อมูล ${character.name}">
      <span class="portrait ${character.element.toLowerCase()}"><span class="initials">${initials(character.name)}</span><span class="portrait-symbol">${element.symbol}</span></span>
      <span class="character-meta"><h3>${character.name}</h3><span>${"★".repeat(character.rarity)}</span></span>
      <span class="character-region">${region.th} · ${character.element}</span>
    </button>`;
  }).join("");
}

function updateRoster() { renderTabs(); renderCharacters(); }

function showCharacter(name) {
  const character = roster.find(item => item.name === name);
  if (!character) return;
  const element = elementInfo(character.element);
  const region = nationInfo(character.region);
  byId("dialog-content").innerHTML = `
    <div class="dialog-portrait" style="--dialog-color:${element.color}"><span>${initials(character.name)}</span></div>
    <div class="dialog-copy">
      <p class="section-label">CHARACTER ARCHIVE</p>
      <h2>${character.name}</h2>
      <p>ตัวละครที่บันทึกไว้ในบทเรียนจาก <strong>${region.th}</strong> — ${region.subtitle}</p>
      <div class="dialog-tags"><span>${element.symbol} ${character.element} · ${element.thai}</span><span>${"★".repeat(character.rarity)} ${character.rarity}-Star</span><span>${region.ideal}</span></div>
    </div>`;
  byId("character-dialog").showModal();
}

let toastTimer;
function notify(message) {
  const toast = byId("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function setTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem("teyvat-theme", theme);
  const isDark = theme === "dark";
  document.querySelector(".theme-toggle").setAttribute("aria-pressed", isDark);
  document.querySelector(".theme-toggle").setAttribute("aria-label", isDark ? "สลับเป็นโหมดสว่าง" : "สลับเป็นโหมดมืด");
}

renderNations();
renderArchons();
renderElements();
updateRoster();
byId("roster-total").textContent = roster.length;

const savedTheme = localStorage.getItem("teyvat-theme");
if (savedTheme) setTheme(savedTheme);

document.addEventListener("click", (event) => {
  const nationButton = event.target.closest("[data-region]");
  if (nationButton && nationButton.classList.contains("nation-card")) {
    state.region = nationButton.dataset.region;
    state.element = "All";
    state.query = "";
    byId("character-search").value = "";
    updateRoster();
    byId("characters").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const regionTab = event.target.closest("[data-region-filter]");
  if (regionTab) { state.region = regionTab.dataset.regionFilter; updateRoster(); }
  const elementFilter = event.target.closest("[data-element-filter]");
  if (elementFilter) { state.element = elementFilter.dataset.elementFilter; updateRoster(); }
  const characterCard = event.target.closest("[data-character]");
  if (characterCard) showCharacter(characterCard.dataset.character);
  if (event.target.closest("[data-action='reset-filters']")) { state.region = "All"; state.element = "All"; state.query = ""; byId("character-search").value = ""; updateRoster(); }
  if (event.target.closest("[data-action='random-character']")) {
    const pick = roster[Math.floor(Math.random() * roster.length)];
    showCharacter(pick.name);
    notify(`วันนี้มาทำความรู้จัก ${pick.name} กัน`);
  }
  if (event.target.closest(".dialog-close")) byId("character-dialog").close();
});

byId("character-search").addEventListener("input", (event) => { state.query = event.target.value; renderCharacters(); });
document.querySelector(".theme-toggle").addEventListener("click", () => setTheme(document.body.dataset.theme === "dark" ? "light" : "dark"));

const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = byId("mobile-menu");
menuButton.addEventListener("click", () => {
  const isOpen = !mobileMenu.hidden;
  mobileMenu.hidden = isOpen;
  menuButton.setAttribute("aria-expanded", !isOpen);
});
mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { mobileMenu.hidden = true; menuButton.setAttribute("aria-expanded", "false"); }));
byId("character-dialog").addEventListener("click", event => { if (event.target === byId("character-dialog")) byId("character-dialog").close(); });
