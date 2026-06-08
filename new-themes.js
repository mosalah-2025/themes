<script>
const PER_PAGE = 12;

let currentPage = 1;
let searchQuery = '';

const ALL_CARDS = [
  {theme:'nature', cat:'fashion', color:'light', name:'Nature Fashion', url:'https://nature-fashion.myeasyorders.com', img:'https://files.easy-orders.net/1779745785260319883.png'},
  {theme:'nature', cat:'perfumes', color:'light', name:'Nature Perfumes', url:'https://nature-perfumes.myeasyorders.com', img:'https://files.easy-orders.net/1779745549281665643.png'},
  {theme:'nature', cat:'furniture', color:'light', name:'Nature Furniture', url:'https://nature-furniture.myeasyorders.com', img:'https://files.easy-orders.net/1779745781936025781.png'},
  {theme:'nature', cat:'watches', color:'light', name:'Nature Glasses', url:'https://nature-glasses.myeasyorders.com', img:'https://files.easy-orders.net/1779745792790365890.png'},
  {theme:'nature', cat:'cosmetics', color:'light', name:'Nature Cosmetics', url:'https://nature-cosmetics.myeasyorders.com', img:'https://files.easy-orders.net/1779745504532016495.png'},
  {theme:'nature', cat:'gifts', color:'light', name:'Nature Handmade', url:'https://nature-handmade.myeasyorders.com/', img:'https://files.easy-orders.net/1779745803254860506.png'},
  {theme:'nature', cat:'pets', color:'light', name:'Nature Pets', url:'https://nature-pets.myeasyorders.com', img:'https://files.easy-orders.net/1779745797366829944.png'},
  {theme:'nature', cat:'kids', color:'light', name:'Nature Kids', url:'https://nature-kids.myeasyorders.com/', img:'https://files.easy-orders.net/1779745807892676678.png'},

  {theme:'hype', cat:'perfumes', color:'light', name:'Hype Perfumes', url:'https://hype-perfumes.myeasyorders.com', img:'https://files.easy-orders.net/1780330273152604698.png'},
  {theme:'hype', cat:'electronics', color:'light', name:'Hype Electronics', url:'https://hype-electronics.myeasyorders.com', img:'https://files.easy-orders.net/1780330297625456261.png'},
  {theme:'hype', cat:'garden', color:'light', name:'Hype Garden', url:'https://hype-garden.myeasyorders.com', img:'https://files.easy-orders.net/1780330347127391690.png'},
  {theme:'hype', cat:'fashion', color:'dark', name:'Hype Dark', url:'https://hype-dark.myeasyorders.com', img:'https://files.easy-orders.net/1780330355528882938.png'},
  {theme:'hype', cat:'fashion', color:'light', name:'Hype Fashion', url:'https://hype-fashion.myeasyorders.com', img:'https://files.easy-orders.net/1780330247404119925.png'},
  {theme:'hype', cat:'kitchen', color:'light', name:'Hype Kitchen', url:'https://hype-kitchen.myeasyorders.com/', img:'https://files.easy-orders.net/1780844078169964082.png'},
  {theme:'hype', cat:'automotive', color:'light', name:'Hype Cars', url:'https://hype-cars.myeasyorders.com/', img:'https://files.easy-orders.net/1780844125883233014.png'},
  {theme:'hype', cat:'books', color:'light', name:'Hype Books', url:'https://hype-books.myeasyorders.com/', img:'https://files.easy-orders.net/1780844196413968354.png'},
  {theme:'hype', cat:'digital', color:'dark', name:'Hype Gamers', url:'https://hype-gamers.myeasyorders.com/', img:'https://files.easy-orders.net/1780844245612698871.png'},
  {theme:'hype', cat:'general', color:'light', name:'Hype General', url:'https://hype-general.myeasyorders.com/', img:'https://files.easy-orders.net/1780844280421020150.png'},
  {theme:'hype', cat:'tools', color:'light', name:'Hype Tools', url:'https://hype-tools.myeasyorders.com/', img:'https://files.easy-orders.net/1780844339171296305.png'},

  {theme:'elite', cat:'fashion', color:'light', name:'ELITE AVYRO', url:'https://avyro-elite.myeasyorders.com', img:'https://files.easy-orders.net/1779381114077598574.png'},
  {theme:'elite', cat:'shoes', color:'light', name:'ELITE WALLETS', url:'https://elite-wallets.myeasyorders.com', img:'https://files.easy-orders.net/1779366030528687175.png'},
  {theme:'elite', cat:'furniture', color:'light', name:'ELITE FURNITURE', url:'https://elite-furniture.myeasyorders.com', img:'https://files.easy-orders.net/1779381152202320488.png'},
  {theme:'elite', cat:'health', color:'light', name:'ELITE Fit', url:'https://elite-supplements.myeasyorders.com', img:'https://files.easy-orders.net/1779381427142956547.png'},
  {theme:'elite', cat:'fashion', color:'light', name:'ELITE SPORTS', url:'https://elite-sport.myeasyorders.com', img:'https://files.easy-orders.net/1779381061952581300.png'},
  {theme:'elite', cat:'furniture', color:'light', name:'ELITE GALLERY', url:'https://elite-gallery.myeasyorders.com', img:'https://files.easy-orders.net/1779381109740287680.png'},

  {theme:'phoenix', cat:'cosmetics', color:'light', name:'PHOENIX Cosmetics', url:'https://phoenix-cosmetics.myeasyorders.com', img:'https://files.easy-orders.net/1779381547761255255.png'},
  {theme:'phoenix', cat:'fashion', color:'light', name:'PHOENIX AVYRO', url:'https://phoenix-avyro.myeasyorders.com', img:'https://files.easy-orders.net/1779381171606105293.png'},
  {theme:'phoenix', cat:'fashion', color:'light', name:'PHOENIX SPORTS', url:'https://phoenix-sports.myeasyorders.com', img:'https://files.easy-orders.net/1779292176387134385.png'},
  {theme:'phoenix', cat:'shoes', color:'light', name:'PHOENIX BAGS', url:'https://phoenix-bags.myeasyorders.com', img:'https://files.easy-orders.net/1779381179403227698.png'},

  {theme:'pearl', cat:'furniture', color:'light', name:'Peral Gallery', url:'https://peral-gallery.myeasyorders.com/', img:'https://files.easy-orders.net/1779381048506738041.png'},
  {theme:'pearl', cat:'perfumes', color:'light', name:'Pearl Perfume', url:'https://pearl-perfume.myeasyorders.com/', img:'https://files.easy-orders.net/1779381024212229427.png'},
  {theme:'pearl', cat:'watches', color:'light', name:'Pearl Watches', url:'https://pearl-watches.myeasyorders.com', img:'https://files.easy-orders.net/1779381015732216693.png'},
  {theme:'pearl', cat:'shoes', color:'light', name:'PEARL BAGS', url:'https://pearl-bags.myeasyorders.com/', img:'https://files.easy-orders.net/1779381007739289904.png'},
  {theme:'pearl', cat:'fashion', color:'light', name:'Luxury Fashion', url:'https://luxury-fashion.myeasyorders.com', img:'https://files.easy-orders.net/1779381033268981318.png'},

  {theme:'blast', cat:'gifts', color:'light', name:'Blast Handmade', url:'https://blast-handmade.myeasyorders.com', img:'https://files.easy-orders.net/1780484400876775433.png'},
  {theme:'blast', cat:'kids', color:'light', name:'Blast Kids', url:'https://blast-kids.myeasyorders.com', img:'https://files.easy-orders.net/1780484409038839622.png'},
  {theme:'blast', cat:'pets', color:'light', name:'Blast Pets', url:'https://blast-pets.myeasyorders.com', img:'https://files.easy-orders.net/1780484419603343365.png'},
  {theme:'blast', cat:'electronics', color:'dark', name:'Blast Gamers', url:'https://blast-gamers.myeasyorders.com', img:'https://files.easy-orders.net/1780484427016631724.png'},
  {theme:'blast', cat:'books', color:'light', name:'Blast Books', url:'https://blast-books.myeasyorders.com', img:'https://files.easy-orders.net/1780484413137354954.png'},

  {theme:'volta', cat:'health', color:'dark', name:'Dark Supplements', url:'https://dark-supplements.myeasyorders.com/', img:'https://files.easy-orders.net/1780847824703915535.png'},
  {theme:'volta', cat:'health', color:'light', name:'Volta Supplements', url:'https://volta-supplements.myeasyorders.com/', img:'https://files.easy-orders.net/1780844744243168553.png'},
  {theme:'volta', cat:'digital', color:'dark', name:'Volta Gamers', url:'https://volta-gamers.myeasyorders.com/', img:'https://files.easy-orders.net/1780844802748971914.png'},
  {theme:'volta', cat:'electronics', color:'light', name:'Volta Electronics', url:'https://volta-electronics.myeasyorders.com/', img:'https://files.easy-orders.net/1780844846326875511.png'},
  {theme:'volta', cat:'shoes', color:'light', name:'Volta Bags', url:'https://volta-bags.myeasyorders.com/', img:'https://files.easy-orders.net/1780844897472395806.png'},
  {theme:'volta', cat:'electronics', color:'dark', name:'Dark Electronics', url:'https://dark-electronics.myeasyorders.com/', img:'https://files.easy-orders.net/1780847835199041100.png'},
  {theme:'volta', cat:'health', color:'light', name:'Volta Sports', url:'https://volta-sports.myeasyorders.com/', img:'https://files.easy-orders.net/1780845034426341535.png'},
  {theme:'volta', cat:'tools', color:'light', name:'Volta Tools', url:'https://volta-tools.myeasyorders.com/', img:'https://files.easy-orders.net/1780845078383705680.png'},
  {theme:'volta', cat:'automotive', color:'light', name:'Volta Cars', url:'https://volta-cars.myeasyorders.com/', img:'https://files.easy-orders.net/1780845120813776621.png'},
  {theme:'volta', cat:'kitchen', color:'light', name:'Volta Kitchen', url:'https://volta-kitchen.myeasyorders.com/', img:'https://files.easy-orders.net/1780845147783244737.png'}
];

const THEMES = [
  {id:'nature', label:'Nature'},
  {id:'hype', label:'Hype'},
  {id:'elite', label:'Elite'},
  {id:'phoenix', label:'Phoenix'},
  {id:'pearl', label:'Pearl'},
  {id:'blast', label:'Blast'},
  {id:'volta', label:'Volta'}
];

const COLORS = [
  {id:'dark', label:'Dark Mode', dot:'dot-dark'},
  {id:'light', label:'Light Mode', dot:'dot-light'}
];

const CATS = [
  {id:'fashion', label:'Fashion & Clothing'},
  {id:'shoes', label:'Shoes & Bags'},
  {id:'watches', label:'Watches & Eyewear'},
  {id:'perfumes', label:'Perfumes'},
  {id:'cosmetics', label:'Cosmetics'},
  {id:'health', label:'Health & Fitness'},
  {id:'electronics', label:'Electronics'},
  {id:'furniture', label:'Furniture & Decor'},
  {id:'kids', label:'Baby & Kids'},
  {id:'gifts', label:'Gifts & Handmade'},
  {id:'pets', label:'Pet Supplies'},
  {id:'garden', label:'Garden & Outdoor'},
  {id:'books', label:'Books'},
  {id:'kitchen', label:'Home & Kitchen'},
  {id:'automotive', label:'Automotive & Accessories'},
  {id:'digital', label:'Digital Products'},
  {id:'tools', label:'Tools & Equipment'},
  {id:'general', label:'General Store'}
];

function buildFilterHTML(prefix) {
  let html = '';

  html += makeSection(prefix, 't', 'Theme', THEMES, false);
  html += makeSection(prefix, 'col', 'Color', COLORS, true);
  html += makeSection(prefix, 'c', 'Category', CATS, false);

  return html;
}

function makeSection(prefix, key, title, items, isColor) {
  let html = `
    <div class="filter-section">
      <div class="filter-section-header" onclick="toggleSection(this)">
        <span class="label">${title}</span>
        <span class="arrow"></span>
      </div>

      <div class="filter-body open">
        <div class="filter-body-inner">
  `;

  items.forEach(item => {
    html += `
      <div class="filter-option">
        <input type="checkbox" id="${prefix}${key}-${item.id}" onchange="applyFilters()" />
        <span class="box" onclick="document.getElementById('${prefix}${key}-${item.id}').click()"></span>
        ${isColor ? `<span class="color-dot ${item.dot}"></span>` : ''}
        <label for="${prefix}${key}-${item.id}">${item.label}</label>
      </div>
    `;
  });

  html += `
        </div>
      </div>
    </div>
  `;

  return html;
}

document.getElementById('sidebar-filters').innerHTML = buildFilterHTML('s-');
document.getElementById('popup-filters').innerHTML = buildFilterHTML('p-');

function toggleSection(header) {
  const arrow = header.querySelector('.arrow');
  const body = header.nextElementSibling;
  const isOpen = body.classList.contains('open');

  body.classList.toggle('open', !isOpen);
  arrow.classList.toggle('closed', isOpen);
}

function syncPair(sId, pId) {
  const s = document.getElementById(sId);
  const p = document.getElementById(pId);

  if (!s || !p) return;

  if (document.activeElement === s) {
    p.checked = s.checked;
  } else if (document.activeElement === p) {
    s.checked = p.checked;
  }
}

function getActive(key, list) {
  return list.map(i => i.id).filter(id => {
    return document.getElementById('s-' + key + '-' + id)?.checked ||
           document.getElementById('p-' + key + '-' + id)?.checked;
  });
}

function getLabelById(list, id) {
  const found = list.find(item => item.id === id);
  return found ? found.label : id;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function handleSearch(inputEl) {
  searchQuery = inputEl.value.toLowerCase().trim();

  document.getElementById('desktop-search').value = inputEl.value;
  document.getElementById('mobile-search').value = inputEl.value;

  applyFilters();
}

function resetAllFilters() {
  searchQuery = '';

  document.getElementById('desktop-search').value = '';
  document.getElementById('mobile-search').value = '';

  const checkboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
  checkboxes.forEach(cb => cb.checked = false);

  applyFilters();
}

function removeFilter(type, id) {
  if (type === 'search') {
    searchQuery = '';
    document.getElementById('desktop-search').value = '';
    document.getElementById('mobile-search').value = '';
    applyFilters();
    return;
  }

  const sidebarCheckbox = document.getElementById('s-' + type + '-' + id);
  const popupCheckbox = document.getElementById('p-' + type + '-' + id);

  if (sidebarCheckbox) sidebarCheckbox.checked = false;
  if (popupCheckbox) popupCheckbox.checked = false;

  applyFilters();
}

function renderActiveFilters(aT, aC, aCa) {
  const activeFiltersBox = document.getElementById('active-filters');

  let chips = [];

  aT.forEach(id => {
    chips.push(`
      <span class="filter-chip">
        ${escapeHtml(getLabelById(THEMES, id))}
        <button type="button" onclick="removeFilter('t', '${id}')">×</button>
      </span>
    `);
  });

  aC.forEach(id => {
    chips.push(`
      <span class="filter-chip">
        ${escapeHtml(getLabelById(COLORS, id))}
        <button type="button" onclick="removeFilter('col', '${id}')">×</button>
      </span>
    `);
  });

  aCa.forEach(id => {
    chips.push(`
      <span class="filter-chip">
        ${escapeHtml(getLabelById(CATS, id))}
        <button type="button" onclick="removeFilter('c', '${id}')">×</button>
      </span>
    `);
  });

  if (searchQuery !== '') {
    chips.push(`
      <span class="filter-chip">
        Search: ${escapeHtml(searchQuery)}
        <button type="button" onclick="removeFilter('search')">×</button>
      </span>
    `);
  }

  if (chips.length === 0) {
    activeFiltersBox.classList.remove('visible');
    activeFiltersBox.innerHTML = '';
    return;
  }

  activeFiltersBox.classList.add('visible');

  activeFiltersBox.innerHTML = `
    <span class="active-filters-label">FILTERED BY:</span>
    ${chips.join('')}
    <button type="button" class="clear-filters-btn" onclick="resetAllFilters()">Clear</button>
  `;
}

let filteredCards = [...ALL_CARDS];

function applyFilters() {
  THEMES.forEach(t => syncPair('s-t-' + t.id, 'p-t-' + t.id));
  COLORS.forEach(c => syncPair('s-col-' + c.id, 'p-col-' + c.id));
  CATS.forEach(c => syncPair('s-c-' + c.id, 'p-c-' + c.id));

  const aT = getActive('t', THEMES);
  const aC = getActive('col', COLORS);
  const aCa = getActive('c', CATS);

  renderActiveFilters(aT, aC, aCa);

  filteredCards = ALL_CARDS.filter(card => {
    const tOk = aT.length === 0 || aT.includes(card.theme);
    const cOk = aC.length === 0 || aC.includes(card.color);
    const caOk = aCa.length === 0 || aCa.includes(card.cat);
    const sOk = searchQuery === '' || card.name.toLowerCase().includes(searchQuery);

    return tOk && cOk && caOk && sOk;
  });

  currentPage = 1;
  renderPage();
}

function renderPage() {
  const grid = document.getElementById('grid');

  const total = filteredCards.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));

  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * PER_PAGE;
  const slice = filteredCards.slice(start, start + PER_PAGE);

  document.getElementById('count-label').textContent =
    total + ' theme' + (total !== 1 ? 's' : '');

  grid.innerHTML = slice.map(card => `
    <div class="card">
      <div class="card-img-wrap">
        <a href="${card.url}" target="_blank">
          <img class="card-img" src="${card.img}" alt="${card.name}" loading="lazy" />
        </a>
      </div>

      <div class="card-info">
        <span class="card-name">${card.name}</span>
        <span class="badge-new">New</span>
      </div>
    </div>
  `).join('');

  if (slice.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 40px 0; text-align: center; color: #777;">
        No themes found.
      </div>
    `;
  }

  renderPagination(totalPages);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderPagination(totalPages) {
  const pag = document.getElementById('pagination');

  if (totalPages <= 1) {
    pag.innerHTML = '';
    return;
  }

  let html = '';

  html += `
    <button class="page-btn arrow-btn" onclick="goPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
      &#8249;
    </button>
  `;

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      html += `
        <button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goPage(${i})">
          ${i}
        </button>
      `;
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      html += `<span style="padding:0 4px;color:#999">…</span>`;
    }
  }

  html += `
    <button class="page-btn arrow-btn" onclick="goPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
      &#8250;
    </button>
  `;

  pag.innerHTML = html;
}

function goPage(n) {
  const totalPages = Math.ceil(filteredCards.length / PER_PAGE);

  if (n < 1 || n > totalPages) return;

  currentPage = n;
  renderPage();
}

function openPopup() {
  document.getElementById('popup').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  document.getElementById('popup').classList.remove('open');
  document.body.style.overflow = '';
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('popup')) {
    closePopup();
  }
}

filteredCards = [...ALL_CARDS];
renderPage();
</script>
