import urllib.request, json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BASE = 'https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/main/data/'

def fetch(path):
    url = BASE + path
    print(f"Fetching {url}...")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=60) as resp:
        return json.loads(resp.read().decode('utf-8'))

def strip_tags(t):
    if not isinstance(t, str): return str(t)
    t = re.sub(r'\{@(?:spell|skill|action|condition|variantrule|item|creature|sense|damage|dice|dc|b|i|filter|class|table|race|background|feat) ([^|}\n]+)(?:\|[^}]+)?\}', r'\1', t)
    t = re.sub(r'\{@hit ([^}]+)\}', r'+\1', t)
    t = re.sub(r'\{@h\}', 'Hit: ', t)
    t = re.sub(r'\{@atkr ([a-z, ]+)\}', r'\1 Attack: ', t)
    t = re.sub(r'\{@scaledice [^|]+\|[^|]+\|([^}]+)\}', r'\1', t)
    t = re.sub(r'\{@scaledamage [^|]+\|[^|]+\|([^}]+)\}', r'\1', t)
    t = re.sub(r'\{@[a-z]+ ([^}]+)\}', r'\1', t)
    t = t.replace('{@i ', '').replace('{@b ', '').replace('}', '')
    return re.sub(r'\s+', ' ', t).strip()

def node_to_text(node):
    if isinstance(node, str):
        return strip_tags(node)
    if isinstance(node, list):
        return '\n\n'.join(node_to_text(x) for x in node).strip()
    if isinstance(node, dict):
        if node.get('type') == 'entries':
            hdr = f"**{node.get('name')}**: " if node.get('name') else ""
            return hdr + '\n\n'.join(node_to_text(x) for x in node.get('entries', []))
        if node.get('type') == 'section':
            hdr = f"### {node.get('name')}\n\n" if node.get('name') else ""
            return hdr + '\n\n'.join(node_to_text(x) for x in node.get('entries', []))
        if node.get('type') == 'list':
            return '\n'.join(f"• {node_to_text(it)}" for it in node.get('items', []))
        if node.get('type') == 'table':
            cols = [strip_tags(c) for c in node.get('colLabels', [])]
            lines = [' | '.join(cols), ' | '.join(['---'] * len(cols))]
            for r in node.get('rows', []):
                lines.append(' | '.join(strip_tags(str(cell)) for cell in r))
            return '\n'.join(lines)
        if 'entries' in node:
            return '\n\n'.join(node_to_text(x) for x in node['entries'])
    return str(node)

IT_CLASS_NAMES = {
    'barbarian': 'Bardo' if False else 'Barbaro',
    'bard': 'Bardo', 'cleric': 'Chierico', 'druid': 'Druido',
    'fighter': 'Guerriero', 'monk': 'Monaco', 'paladin': 'Paladino', 'ranger': 'Ranger',
    'rogue': 'Ladro', 'sorcerer': 'Stregone', 'warlock': 'Warlock', 'wizard': 'Mago'
}

CLASS_QUOTES_IT = {
    'barbarian': 'Un guerriero feroce alimentato da una furia primordiale che sbaraglia ogni ostacolo in battaglia.',
    'bard': 'Un mago, musicista e ballerino dal talento focoso.',
    'cleric': 'Un tramite terreno del potere divino, maestro di benedizioni miracolose e punizioni sacre.',
    'druid': 'Custode delle antiche forze della natura, capace di mutare forma e scatenare tempeste elementali.',
    'fighter': 'Maestro assoluto di tutte le armi, armature e tattiche di combattimento sul campo di battaglia.',
    'monk': 'Un maestro delle arti marziali che incanala la pura energia cosmica del corpo e dello spirito.',
    'paladin': 'Un nobile cavaliere legato a un sacro giuramento che brandisce il favore divino e castiga il male.',
    'ranger': 'Un cacciatore ed esploratore implacabile che difende i confini selvaggi tra civiltà e ignoto.',
    'rogue': 'Uno specialista furtivo, scaltro e letale nel colpire i punti deboli e risolvere enigmi complessi.',
    'sorcerer': 'Un incantatore il cui sangue pulsa di potere magico innato pronto a esplodere a comando.',
    'warlock': 'Un cercatore di segreti proibiti legato da un patto mistico a un patrono ultraterreno.',
    'wizard': 'Uno studioso instancabile delle leggi arcane che piega la realtà attraverso la perfetta conoscenza.'
}

IT_ABILITY_NAMES = {
    'STR': 'Forza', 'DEX': 'Destrezza', 'CON': 'Costituzione',
    'INT': 'Intelligenza', 'WIS': 'Saggezza', 'CHA': 'Carisma',
    'Str': 'Forza', 'Dex': 'Destrezza', 'Con': 'Costituzione',
    'Int': 'Intelligenza', 'Wis': 'Saggezza', 'Cha': 'Carisma',
    'Strength': 'Forza', 'Dexterity': 'Destrezza', 'Constitution': 'Costituzione',
    'Intelligence': 'Intelligenza', 'Wisdom': 'Saggezza', 'Charisma': 'Carisma'
}

SUBCLASSES_IT = {
    # Barbarian
    'Berserker': 'Cammino del Berserker',
    'Path of the Berserker': 'Cammino del Berserker',
    'Wild Heart': 'Cammino del Cuore Selvaggio',
    'Path of the Wild Heart': 'Cammino del Cuore Selvaggio',
    'World Tree': "Cammino dell'Albero del Mondo",
    'Path of the World Tree': "Cammino dell'Albero del Mondo",
    'Zealot': 'Cammino dello Zelota',
    'Path of the Zealot': 'Cammino dello Zelota',
    # Bard
    'Dance': 'Collegio della Danza',
    'College of Dance': 'Collegio della Danza',
    'Glamour': 'Collegio del Fascino',
    'College of Glamour': 'Collegio del Fascino',
    'Lore': 'Collegio del Sapere',
    'College of Lore': 'Collegio del Sapere',
    'Valor': 'Collegio del Valore',
    'College of Valor': 'Collegio del Valore',
    # Cleric
    'Life': 'Dominio della Vita',
    'Life Domain': 'Dominio della Vita',
    'Light': 'Dominio della Luce',
    'Light Domain': 'Dominio della Luce',
    'Trickery': "Dominio dell'Inganno",
    'Trickery Domain': "Dominio dell'Inganno",
    'War': 'Dominio della Guerra',
    'War Domain': 'Dominio della Guerra',
    # Druid
    'Land': 'Circolo della Terra',
    'Circle of the Land': 'Circolo della Terra',
    'Moon': 'Circolo della Luna',
    'Circle of the Moon': 'Circolo della Luna',
    'Sea': 'Circolo del Mare',
    'Circle of the Sea': 'Circolo del Mare',
    'Stars': 'Circolo delle Stelle',
    'Circle of the Stars': 'Circolo delle Stelle',
    # Fighter
    'Battle Master': 'Maestro di Battaglia',
    'Champion': 'Campione',
    'Eldritch Knight': 'Cavaliere Mistico',
    'Psi Warrior': 'Guerriero Psionico',
    # Monk
    'Mercy': 'Guerriero della Misericordia',
    'Warrior of Mercy': 'Guerriero della Misericordia',
    'Open Hand': 'Guerriero della Mano Aperta',
    'Warrior of the Open Hand': 'Guerriero della Mano Aperta',
    'Shadow': "Guerriero dell'Ombra",
    'Warrior of Shadow': "Guerriero dell'Ombra",
    'Elements': 'Guerriero degli Elementi',
    'Warrior of the Elements': 'Guerriero degli Elementi',
    # Paladin
    'Devotion': 'Giuramento di Devozione',
    'Oath of Devotion': 'Giuramento di Devozione',
    'Glory': 'Giuramento di Gloria',
    'Oath of Glory': 'Giuramento di Gloria',
    'Ancients': 'Giuramento degli Antichi',
    'Oath of the Ancients': 'Giuramento degli Antichi',
    'Vengeance': 'Giuramento di Vendetta',
    'Oath of Vengeance': 'Giuramento di Vendetta',
    # Ranger
    'Fey Wanderer': 'Viandante Fatato',
    'Gloom Stalker': 'Cacciatore delle Tenebre',
    'Hunter': 'Cacciatore',
    'Beast Master': 'Signore delle Bestie',
    # Rogue
    'Arcane Trickster': 'Mistificatore Arcano',
    'Assassin': 'Assassino',
    'Soulknife': "Lama dell'Anima",
    'Thief': 'Ladro',
    # Sorcerer
    'Draconic': 'Stregoneria Draconica',
    'Draconic Sorcery': 'Stregoneria Draconica',
    'Wild Magic': 'Stregoneria della Magia Selvaggia',
    'Wild Magic Sorcery': 'Stregoneria della Magia Selvaggia',
    'Clockwork': 'Stregoneria Meccanica',
    'Clockwork Sorcery': 'Stregoneria Meccanica',
    'Aberrant': 'Stregoneria Aberrante',
    'Aberrant Sorcery': 'Stregoneria Aberrante',
    # Warlock
    'Archfey': 'Patrono Arcifata',
    'Archfey Patron': 'Patrono Arcifata',
    'Celestial': 'Patrono Celestiale',
    'Celestial Patron': 'Patrono Celestiale',
    'Fiend': 'Patrono Immondo',
    'Fiend Patron': 'Patrono Immondo',
    'Great Old One': 'Patrono Grande Antico',
    'Great Old One Patron': 'Patrono Grande Antico',
    # Wizard
    'Abjurer': 'Abiuratore',
    'Diviner': 'Divinatore',
    'Evoker': 'Invocatore',
    'Illusionist': 'Illusionista'
}

FEATURES_IT = {
    'Bardic Inspiration': 'Ispirazione bardica',
    'Spellcasting': 'Incantesimi',
    'Jack of All Trades': 'Tuttofare',
    'Expertise': 'Competenza',
    'Bard Subclass': 'Sottoclasse del Bardo',
    'Ability Score Improvement': 'Caratteristiche migliorate',
    'Font of Inspiration': 'Fonte di ispirazione',
    'Countercharm': 'Controincantesimi',
    'Magical Secrets': 'Segreti magici',
    'Superior Inspiration': 'Ispirazione suprema',
    'Words of Creation': 'Parole della Creazione',
    'Epic Boon': 'Aumento delle statistiche: Dono epico',
    # Glamour
    'Beguiling Magic': 'Magia incantevole',
    'Mantle of Inspiration': "Mantello dell'Ispirazione",
    'Mantle of Majesty': 'Mantello di grandezza',
    'Unbreakable Majesty': 'Grandezza indistruttibile',
    # Dance
    'Dazzling Footwork': 'Passo abbagliante',
    'Agile Strikes': 'Colpi agili',
    'Bardic Damage': 'Danno bardico',
    'Dance Virtuoso': 'Virtuoso della danza',
    'Inspiring Movement': 'Movimento ispiratore',
    'Tandem Footwork': 'Passo a due',
    'Leading the Dance': 'Guidare la danza',
    # Lore
    'Cutting Words': 'Parole taglienti',
    'Bonus Proficiencies': 'Competenze bonus',
    'Peerless Skill': 'Abilità ineguagliabile',
    # Valor
    'Combat Inspiration': 'Ispirazione da combattimento',
    'Extra Attack': 'Attacco extra',
    'Battle Magic': 'Magia da battaglia'
}

IT_TABLE_LABELS = {
    'Rages': 'Ire', 'Rage Damage': 'Danni Ira', 'Weapon Mastery': 'Padronanza armi',
    'Bardic Die': 'Ispirazione bardica', 'Cantrips': 'Trucchi', 'Prepared Spells': 'Incantesimi',
    'Channel Divinity': 'Incanalare divinità', 'Wild Shape': 'Forma selvatica',
    'Second Wind': 'Recuperare energie', 'Martial Arts': 'Arti marziali',
    'Focus Points': 'Punti concentrazione', 'Unarmored Movement': 'Movimento senza armatura',
    'Favored Enemy': 'Nemico prescelto', 'Sneak Attack': 'Attacco furtivo',
    'Sorcery Points': 'Punti stregoneria', 'Invocations': 'Suppliche occulte',
    'Spell Slots': 'Slot incantesimi', 'Slot Level': 'Livello slot'
}

CLASS_CALLOUTS_IT = {
    'bard': {
        'title': 'Il repertorio di Bard',
        'text': 'Il tuo bardo canta le gesta di antichi eroi al ritmo di un tamburo? Suona il liuto intonando melodie romantiche? Esegue arie commoventi? Recita monologhi drammatici tratti da tragedie classiche? Usa il ritmo di una danza popolare per coordinare i movimenti degli alleati in battaglia? Compone canzoncine giocose?\n\nQuando interpreti un Bardo, considera il tuo stile di esecuzione preferito, l\'atmosfera e il tono che imprimi alle tue magie.'
    },
    'barbarian': {
        'title': 'La via della Furia Primordiale',
        'text': 'Cosa risveglia la tua furia in combattimento? Uno spirito animale ancestrale che guida i tuoi passi? Il richiamo primordiale della tempesta? O una determinazione incrollabile forgiata nelle terre selvagge più ostili?'
    },
    'cleric': {
        'title': 'La vocazione del Clero Divino',
        'text': 'Come si manifesta il favore della tua divinità? Attraverso aure di luce radiosa o sussurri nell\'ombra? Quali simboli sacri porti sul tuo scudo e sulle tue vesti durante i riti e le battaglie?'
    },
    'druid': {
        'title': 'Il legame con il Circolo Sacro',
        'text': 'Quale bioma o forza primordiale riflette la tua magia? I boschi antichi, le onde furiose dell\'oceano o le costellazioni eterne nel cielo notturno?'
    },
    'fighter': {
        'title': 'La scuola d\'arme e di comando',
        'text': 'Qual è la tua specialità tattica? Preferisci la linea di prima fila con armi pesanti, il duello agile con stocco e scudo, o il tiro di precisione a lunga gittata?'
    },
    'monk': {
        'title': 'La disciplina dello Spirito e del Corpo',
        'text': 'In quale monastero o ordine hai appreso il controllo del Focus cosmico? I tuoi movimenti sono fluidi come l\'acqua o fulminei come il vento?'
    },
    'paladin': {
        'title': 'Il Giuramento Sacro',
        'text': 'Quali principi guidano la tua lama? La difesa dei deboli e della giustizia, la gloria delle gesta titaniche, la salvaguardia della luce della natura o l\'inesorabile castigo del male?'
    },
    'ranger': {
        'title': 'L\'esplorazione delle Terre Selvagge',
        'text': 'Quali tracce segui ai confini della civiltà? Hai un compagno animale primordiale al tuo fianco, o preferisci muoverti invisibile nel fitto sottobosco?'
    },
    'rogue': {
        'title': 'L\'arte della Furtività e dell\'Infiltrazione',
        'text': 'Qual è il tuo marchio di fabbrica? Il colpo rapido da dietro gli angoli, l\'inganno verbale tra i nobili o la capacità di scassinare ogni serratura magica?'
    },
    'sorcerer': {
        'title': 'L\'origine della Scintilla Magica',
        'text': 'Da dove scaturisce il tuo potere innato? Dalle scaglie di un antenato drago, dall\'imprevedibile caos del multiverso, dall\'ordine cosmico di Mechanus o dai misteri dell\'Oltretempo?'
    },
    'warlock': {
        'title': 'Il Patto Ultraterreno',
        'text': 'Chi è il tuo patrono e quale prezzo hai accettato di pagare per i tuoi segreti arcani? Una regina fatata della Selva Fatata, un signore dei Nove Inferi o un\'entità inconoscibile delle stelle?'
    },
    'wizard': {
        'title': 'Il Grimorio e lo Studio Arcano',
        'text': 'Quali annotazioni e simboli riempiono le pagine del tuo grimorio? Sei attratto dall\'invocazione distruttiva, dalle barriere dell\'abiurazione o dalle profezie della divinazione?'
    }
}

def translate_label(l):
    if l in IT_TABLE_LABELS:
        return IT_TABLE_LABELS[l]
    if l.isdigit():
        return f"{l}°"
    return l

def build_all_classes():
    core_classes = [
        'barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk',
        'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard'
    ]

    classes_out = []

    for c_id in core_classes:
        raw = fetch(f'class/class-{c_id}.json')
        x_cls = next(c for c in raw['class'] if c.get('source') == 'XPHB')
        name = x_cls['name']
        name_it = IT_CLASS_NAMES.get(c_id, name)
        hd = x_cls.get('hd', {}).get('faces', 8)

        # Primary ability
        p_raw = x_cls.get('primaryAbility', [])
        p_abilities = []
        for p in p_raw:
            if isinstance(p, dict):
                p_abilities.extend([k.upper() for k, v in p.items() if v])
            elif isinstance(p, str):
                p_abilities.append(p.upper())
        p_abilities_it = [IT_ABILITY_NAMES.get(a, a) for a in p_abilities]

        # Saving throws
        saves_raw = [s.title() for s in (x_cls.get('proficiency') or [])]
        if not saves_raw:
            save_map = {
                'barbarian': ['Strength', 'Constitution'], 'bard': ['Dexterity', 'Charisma'],
                'cleric': ['Wisdom', 'Charisma'], 'druid': ['Intelligence', 'Wisdom'],
                'fighter': ['Strength', 'Constitution'], 'monk': ['Strength', 'Dexterity'],
                'paladin': ['Wisdom', 'Charisma'], 'ranger': ['Strength', 'Dexterity'],
                'rogue': ['Dexterity', 'Intelligence'], 'sorcerer': ['Constitution', 'Charisma'],
                'warlock': ['Wisdom', 'Charisma'], 'wizard': ['Intelligence', 'Wisdom']
            }
            saves_raw = save_map.get(c_id, ['Strength', 'Constitution'])
        saves_it = [IT_ABILITY_NAMES.get(s, s) for s in saves_raw]

        # Specs
        sp = x_cls.get('startingProficiencies', {})
        arm_list = sp.get('armor', []) or []
        arm_map = {'light': 'Armatura leggera', 'medium': 'Armatura media', 'heavy': 'Armatura pesante', 'shield': 'Scudi'}
        arm_it = ', '.join(arm_map.get(a, a) for a in arm_list) if arm_list else 'Nessuna'

        wp_list = sp.get('weapons', []) or []
        wp_it_parts = []
        for w in wp_list:
            if w == 'simple': wp_it_parts.append('Armi semplici')
            elif w == 'martial': wp_it_parts.append('Armi da guerra')
            else: wp_it_parts.append(strip_tags(w))
        weapons_it = ', '.join(wp_it_parts) if wp_it_parts else 'Nessuna'

        tools_list = [strip_tags(t) for t in sp.get('tools', []) or []]
        if c_id == 'bard':
            tools_it = 'Seleziona 3 strumenti musicali a scelta'
        elif c_id == 'monk':
            tools_it = "Seleziona uno strumento da artigiano o uno strumento musicale"
        elif c_id == 'rogue':
            tools_it = "Arnesi da scasso"
        elif c_id == 'druid':
            tools_it = "Borsa per erborismo"
        else:
            tools_it = ', '.join(tools_list) if tools_list else 'Nessuna'

        sk_obj = sp.get('skills', [])
        skills_it = "Scegli abilità a tua scelta"
        if sk_obj and isinstance(sk_obj, list):
            s0 = sk_obj[0]
            if isinstance(s0, dict):
                if 'any' in s0:
                    skills_it = f"Scegli {s0['any']} abilità a tua scelta"
                elif 'choose' in s0:
                    cnt = s0['choose'].get('count', 2)
                    skills_it = f"Scegli {cnt} abilità a tua scelta"

        # Starting equipment
        eq = x_cls.get('startingEquipment', {})
        eq_entries = [strip_tags(e) for e in eq.get('entries', [])]
        if c_id == 'bard':
            starting_eq_it = "Scegli A o B: (A) Armatura di cuoio, 2 pugnali, uno strumento musicale a tua scelta, un kit da artista e 19 GP; (B) 90 GP"
        elif eq_entries:
            starting_eq_it = eq_entries[0]
        else:
            starting_eq_it = "Equipaggiamento standard da classe."

        # Multiclassing
        multiclass_it = f"Per ottenere una nuova classe o lasciarla, i punteggi dei tuoi attributi primari ({', '.join(p_abilities_it)}) devono essere almeno pari a 13."

        # Table groups & Progression
        table_labels = []
        table_labels_it = []
        raw_groups = x_cls.get('classTableGroups') or []
        prog_rows = [[] for _ in range(20)]
        for g in raw_groups:
            labels = g.get('colLabels') or []
            for lab in labels:
                clean_lab = strip_tags(str(lab))
                table_labels.append(clean_lab)
                table_labels_it.append(translate_label(clean_lab))
            rows = g.get('rows') or []
            for lv_idx in range(min(20, len(rows))):
                r = rows[lv_idx]
                for val in r:
                    if isinstance(val, dict):
                        v_txt = f"+{val['value']}" if val.get('type') == 'bonus' else str(val.get('value', '—'))
                    else:
                        v_txt = str(val) if val is not None else '—'
                    prog_rows[lv_idx].append(v_txt)

        progression = []
        for i in range(20):
            lv = i + 1
            pb = f"+{(lv - 1) // 4 + 2}"
            progression.append({
                'level': lv,
                'pb': pb,
                'values': prog_rows[i]
            })

        # Base Features
        base_features = []
        for cf in raw.get('classFeature', []):
            if cf.get('source') == 'XPHB' and cf.get('className') == name:
                f_name = cf['name']
                base_features.append({
                    'name': f_name,
                    'nameIt': FEATURES_IT.get(f_name, f_name),
                    'level': cf.get('level', 1),
                    'text': node_to_text(cf.get('entries') or [])
                })
        base_features.sort(key=lambda x: x['level'])

        # Subclasses and their features
        x_subs = [s for s in raw.get('subclass', []) if s.get('source') == 'XPHB']
        subs_list = []
        for s in x_subs:
            s_short = s.get('shortName', s['name'])
            s_name = s['name']
            s_name_it = SUBCLASSES_IT.get(s_name, SUBCLASSES_IT.get(s_short, s_name))
            s_feats = []
            for sf in raw.get('subclassFeature', []):
                if sf.get('source') == 'XPHB' and sf.get('className') == name and sf.get('subclassShortName') == s_short:
                    sf_name = sf['name']
                    s_feats.append({
                        'name': sf_name,
                        'nameIt': FEATURES_IT.get(sf_name, sf_name),
                        'level': sf.get('level', 3),
                        'text': node_to_text(sf.get('entries') or [])
                    })
            s_feats.sort(key=lambda x: x['level'])
            subs_list.append({
                'id': re.sub(r'[^a-z0-9]+', '-', s_short.lower()).strip('-'),
                'name': s_name_it,
                'originalName': s_name,
                'shortName': s_short,
                'source': 'PHB 2024',
                'desc': node_to_text(s.get('entries') or []),
                'features': s_feats
            })

        # Fluff / Lore & Callout
        fluff_paragraphs = []
        try:
            fluff_raw = fetch(f'class/fluff-class-{c_id}.json')
            x_fluff = next(x for x in fluff_raw.get('classFluff', []) if x.get('source') == 'XPHB')
            for item in x_fluff.get('entries', []):
                if isinstance(item, str):
                    fluff_paragraphs.append(strip_tags(item))
                elif isinstance(item, dict):
                    if item.get('type') == 'section':
                        for e in item.get('entries', []):
                            if isinstance(e, str):
                                fluff_paragraphs.append(strip_tags(e))
        except Exception as e:
            print(f"Fluff warning for {c_id}: {e}")

        # If fluff is empty, fallback to rich lore description
        if not fluff_paragraphs:
            fluff_paragraphs = [
                CLASS_QUOTES_IT.get(c_id, ''),
                f"I membri di questa classe affrontano i pericoli del multiverso padroneggiando le proprie abilità uniche descritte nel Player's Handbook 2024."
            ]

        callout = CLASS_CALLOUTS_IT.get(c_id, {
            'title': f"Il ruolo del {name_it}",
            'text': CLASS_QUOTES_IT.get(c_id, '')
        })

        img_url = f"https://5e.tools/img/classes/XPHB/{name.replace(' ', '%20')}.webp"

        classes_out.append({
            'id': c_id,
            'name': name_it,
            'originalName': name,
            'source': 'PHB 2024',
            'quote': CLASS_QUOTES_IT.get(c_id, ''),
            'hitDie': hd,
            'image': img_url,
            'primaryAbility': p_abilities_it,
            'proficiencies': saves_it,
            'skills': skills_it,
            'weapons': weapons_it,
            'tools': tools_it,
            'armor': arm_it,
            'startingEquipment': starting_eq_it,
            'multiclassing': multiclass_it,
            'tableLabels': table_labels,
            'tableLabelsIt': table_labels_it,
            'progression': progression,
            'subclasses': subs_list,
            'features': base_features,
            'fluff': fluff_paragraphs,
            'callout': callout
        })

    js_content = 'const CLASSES = ' + json.dumps(classes_out, ensure_ascii=False, indent=2) + ';\n'
    (ROOT / 'class_data.js').write_text(js_content, encoding='utf-8')
    print(f"-> SUCCESS: class_data.js written with {len(classes_out)} complete classes and {sum(len(c['subclasses']) for c in classes_out)} subclasses!")

if __name__ == '__main__':
    build_all_classes()
