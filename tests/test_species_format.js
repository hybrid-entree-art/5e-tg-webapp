const fs = require('fs');
const code = fs.readFileSync('./species_data.js', 'utf8');
let SPECIES;
eval(code.replace('const SPECIES =', 'SPECIES ='));

function esc(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function parseDiceInText(s){ return s; }

function formatSpeciesTrait(t) {
  let name = t.name || '';
  let text = t.text || '';
  const prefixRegex = new RegExp('^' + name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[.:]\\s*', 'i');
  text = text.replace(prefixRegex, '');
  
  if (text.includes(' • ')) {
    const parts = text.split(/(?=\s*•\s+)/);
    const mainText = parts[0].trim();
    const bullets = parts.slice(1).map(p => p.replace(/^\s*•\s*/, '').trim()).filter(Boolean);
    let html = '<p class="rh-species-trait-p"><span class="rh-trait-name">' + esc(name) + '.</span> ' + parseDiceInText(esc(mainText)) + '</p>';
    if (bullets.length) {
      html += '<div class="rh-species-subopt-list">' + bullets.map(b => {
        const dashIdx = b.indexOf(' — ');
        if (dashIdx > 0) {
          const optTitle = b.slice(0, dashIdx);
          const optBody = b.slice(dashIdx + 3);
          return '<div class="rh-species-subopt"><b>' + esc(optTitle) + ':</b> ' + parseDiceInText(esc(optBody)) + '</div>';
        }
        return '<div class="rh-species-subopt">• ' + parseDiceInText(esc(b)) + '</div>';
      }).join('') + '</div>';
    }
    return html;
  }
  
  // Transformation options (Aasimar)
  const transIntro = 'Here are the transformation options:';
  if (text.includes(transIntro)) {
    const idx = text.indexOf(transIntro);
    const mainText = text.slice(0, idx + transIntro.length);
    const optsText = text.slice(idx + transIntro.length).trim();
    const subHeadings = ['Heavenly Wings.', 'Inner Radiance.', 'Necrotic Shroud.'];
    const subRegex = new RegExp('(?=(?:' + subHeadings.map(sh => sh.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + '))', 'g');
    const opts = optsText.split(subRegex).map(s => s.trim()).filter(Boolean);
    
    let html = '<p class="rh-species-trait-p"><span class="rh-trait-name">' + esc(name) + '.</span> ' + parseDiceInText(esc(mainText)) + '</p>';
    html += '<div class="rh-species-subopt-list">' + opts.map(s => {
      const pIdx = s.indexOf('.');
      const subTitle = pIdx > 0 ? s.slice(0, pIdx + 1) : s;
      const subRest = pIdx > 0 ? s.slice(pIdx + 1).trim() : '';
      return '<div class="rh-species-subopt"><b>' + esc(subTitle) + '</b> ' + parseDiceInText(esc(subRest)) + '</div>';
    }).join('') + '</div>';
    return html;
  }

  // Giant Ancestry (Goliath)
  const giantIntro = 'supernatural boon from your ancestry;';
  if (text.includes(giantIntro)) {
    const idx = text.indexOf(':');
    const mainText = idx > 0 ? text.slice(0, idx + 1) : text;
    const optsText = idx > 0 ? text.slice(idx + 1).trim() : '';
    const subHeadings = [
      "Cloud's Jaunt (Cloud Giant).", "Fire's Burn (Fire Giant).", "Frost's Chill (Frost Giant).",
      "Hill's Tumble (Hill Giant).", "Stone's Endurance (Stone Giant).", "Storm's Thunder (Storm Giant)."
    ];
    const subRegex = new RegExp('(?=(?:' + subHeadings.map(sh => sh.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + '))', 'g');
    const opts = optsText.split(subRegex).map(s => s.trim()).filter(Boolean);
    let html = '<p class="rh-species-trait-p"><span class="rh-trait-name">' + esc(name) + '.</span> ' + parseDiceInText(esc(mainText)) + '</p>';
    if (opts.length) {
      html += '<div class="rh-species-subopt-list">' + opts.map(s => {
        const pIdx = s.indexOf('.');
        const subTitle = pIdx > 0 ? s.slice(0, pIdx + 1) : s;
        const subRest = pIdx > 0 ? s.slice(pIdx + 1).trim() : '';
        return '<div class="rh-species-subopt"><b>' + esc(subTitle) + '</b> ' + parseDiceInText(esc(subRest)) + '</div>';
      }).join('') + '</div>';
    }
    return html;
  }

  // Gnomish Lineage (Gnome)
  const gnomeIntro = 'when you select the lineage):';
  if (text.includes(gnomeIntro)) {
    const idx = text.indexOf(gnomeIntro);
    const mainText = text.slice(0, idx + gnomeIntro.length);
    const optsText = text.slice(idx + gnomeIntro.length).trim();
    const subHeadings = ['Forest Gnome.', 'Rock Gnome.'];
    const subRegex = new RegExp('(?=(?:' + subHeadings.map(sh => sh.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + '))', 'g');
    const opts = optsText.split(subRegex).map(s => s.trim()).filter(Boolean);
    let html = '<p class="rh-species-trait-p"><span class="rh-trait-name">' + esc(name) + '.</span> ' + parseDiceInText(esc(mainText)) + '</p>';
    html += '<div class="rh-species-subopt-list">' + opts.map(s => {
      const pIdx = s.indexOf('.');
      const subTitle = pIdx > 0 ? s.slice(0, pIdx + 1) : s;
      const subRest = pIdx > 0 ? s.slice(pIdx + 1).trim() : '';
      return '<div class="rh-species-subopt"><b>' + esc(subTitle) + '</b> ' + parseDiceInText(esc(subRest)) + '</div>';
    }).join('') + '</div>';
    return html;
  }

  const paragraphs = text.split(/\n+/).map(p => p.trim()).filter(Boolean);
  if (paragraphs.length > 1) {
    return '<p class="rh-species-trait-p"><span class="rh-trait-name">' + esc(name) + '.</span> ' + parseDiceInText(esc(paragraphs[0])) + '</p>' +
      paragraphs.slice(1).map(p => '<p class="rh-species-trait-p" style="margin-top:8px">' + parseDiceInText(esc(p)) + '</p>').join('');
  }
  
  return '<p class="rh-species-trait-p"><span class="rh-trait-name">' + esc(name) + '.</span> ' + parseDiceInText(esc(text)) + '</p>';
}

const aasimar = SPECIES.find(s => s.name === 'Aasimar');
console.log('\n--- CLEAN AASIMAR CELESTIAL REVELATION HTML ---');
console.log(formatSpeciesTrait(aasimar.traits.find(t => t.name === 'Celestial Revelation')));

const goliath = SPECIES.find(s => s.name === 'Goliath');
console.log('\n--- CLEAN GOLIATH GIANT ANCESTRY HTML ---');
console.log(formatSpeciesTrait(goliath.traits.find(t => t.name === 'Giant Ancestry')));

const gnome = SPECIES.find(s => s.name === 'Gnome');
console.log('\n--- CLEAN GNOME GNOMISH LINEAGE HTML ---');
console.log(formatSpeciesTrait(gnome.traits.find(t => t.name === 'Gnomish Lineage')));
