// 2024 Player's Handbook (XPHB) - Chapter 7: Spells
window.PHB_CH_07_SPELLS = {
  "index": 7,
  "id": "07_spells",
  "title": "Chapter 7: Spells",
  "sectionsCount": 27,
  "sections": [
    {
      "id": "gaining-spells",
      "title": "Gaining Spells",
      "html": "<h3 class=\"rh-book-h\" id=\"gaining-spells\">Gaining Spells</h3>\n<p class=\"rh-book-p\">Before you can cast a spell, you must have the spell prepared in your mind or have access to the spell from a magic item, such as a <span class=\"rh-ref-link\" data-ref=\"item\">item</span>. Your features specify which spells you have access to, if any; whether you always have certain spells prepared; and whether you can change the list of spells you have prepared.</p>\n<h4 class=\"rh-book-h\" id=\"preparing-spells\">Preparing Spells</h4>\n<p class=\"rh-book-p\">If you have a list of level 1+ spells you prepare, your spellcasting feature specifies when you can change the list and the number of spells you can change, as summarized in the Spell Preparation by Class table.</p>\n<div class=\"rh-book-table-wrap\">\n<table class=\"rh-book-table\">\n  <caption>Spell Preparation by Class</caption>\n  <thead><tr><th>Class</th><th>Change When You...</th><th>Number of Spells</th></tr></thead>\n  <tbody>\n    <tr><td>Bard</td><td>Gain a level</td><td>One</td></tr>\n    <tr><td>Cleric</td><td>Finish a Long Rest</td><td>Any</td></tr>\n    <tr><td>Druid</td><td>Finish a Long Rest</td><td>Any</td></tr>\n    <tr><td>Paladin</td><td>Finish a Long Rest</td><td>One</td></tr>\n    <tr><td>Ranger</td><td>Finish a Long Rest</td><td>One</td></tr>\n    <tr><td>Sorcerer</td><td>Gain a level</td><td>One</td></tr>\n    <tr><td>Warlock</td><td>Gain a level</td><td>One</td></tr>\n    <tr><td>Wizard</td><td>Finish a Long Rest</td><td>Any</td></tr>\n  </tbody>\n</table>\n</div>\n<p class=\"rh-book-p\">Most spellcasting monsters don't change their lists of prepared spells, but the DM is free to alter them.</p>\n<h4 class=\"rh-book-h\" id=\"always-prepared-spells\">Always-Prepared Spells</h4>\n<p class=\"rh-book-p\">Certain features might give you a spell that you always have prepared. If you also have a list of prepared spells that you can change, a spell that you always have prepared doesn't count against the number of spells on that list.</p>\n<aside class=\"rh-book-inset\">\n  <h4 class=\"rh-inset-title\">Casting in Armor</h4>\n<p class=\"rh-book-p\">You must have training with any armor you are wearing to cast spells while wearing it. You are otherwise too hampered by the armor for spellcasting.</p>\n</aside>\n",
      "subsections": [
        {
          "id": "preparing-spells",
          "title": "Preparing Spells"
        },
        {
          "id": "always-prepared-spells",
          "title": "Always-Prepared Spells"
        }
      ]
    },
    {
      "id": "casting-spells",
      "title": "Casting Spells",
      "html": "<h3 class=\"rh-book-h\" id=\"casting-spells\">Casting Spells</h3>\n<p class=\"rh-book-p\">Each spell description has a series of entries that provide the details needed to cast the spell. The following sections explain each of those entries, which follow a spell's name.</p>\n<h4 class=\"rh-book-h\" id=\"spell-level\">Spell Level</h4>\n<p class=\"rh-book-p\">Every spell has a level from 0 to 9, which is indicated in a spell's description. A spell's level is an indicator of how powerful it is. Cantrips—simple spells that can be cast almost by rote—are level 0. The rules for each spellcasting class say when its members gain access to spells of certain levels.</p>\n<h5 class=\"rh-book-h\" id=\"spell-slots\">Spell Slots</h5>\n<p class=\"rh-book-p\">Spellcasting is taxing, so a spellcaster can cast only a limited number of level 1+ spells before resting. Spell slots are the main way a spellcaster's magical potential is represented. Each spellcasting class gives its members a limited number of spell slots of certain spell levels. For example, a level 3 Wizard has four level 1 spell slots and two level 2 slots.</p>\n<p class=\"rh-book-p\">When you cast a spell, you expend a slot of that spell's level or higher, effectively \"filling\" a slot with the spell. Imagine a spell slot is a groove of a certain size—small for a level 1 slot and larger for a higher-level spell. A level 1 spell fits into a slot of any size, but a level 2 spell fits only into a slot that's at least level 2. So when a level 3 Wizard casts <span class=\"rh-ref-link\" data-ref=\"spell\">spell</span>, a level 1 spell, that Wizard spends one of four level 1 slots and has three remaining.</p>\n<p class=\"rh-book-p\">Finishing a Long Rest restores any expended spell slots.</p>\n<h5 class=\"rh-book-h\" id=\"casting-without-slots\">Casting without Slots</h5>\n<p class=\"rh-book-p\">There are several ways to cast a spell without expending a spell slot:</p>\n<ul class=\"rh-book-list\">\n  <li><b>Cantrips.</b> A cantrip is cast without a spell slot.</li>\n  <li><b>Rituals.</b> Certain spells have the Ritual tag in the Casting Time entry. Such a spell can be cast following the normal rules for spellcasting, or it can be cast as a Ritual. The Ritual version of a spell takes 10 minutes longer to cast than normal, but it doesn't expend a spell slot. To cast a spell as a Ritual, a spellcaster must have it prepared.</li>\n  <li><b>Special Abilities.</b> Some characters and monsters have special abilities that allow them to cast specific spells without a spell slot. This casting is usually limited in another way, such as being able to cast the spell a limited number of times per day.</li>\n  <li><b>Magic Items.</b> <span class=\"rh-ref-link\" data-ref=\"item\">item</span> and some other magic items contain spells that can be cast without a spell slot. The description of such an item specifies how many times a spell can be cast from it.</li>\n</ul>\n<h5 class=\"rh-book-h\" id=\"using-a-higher-level-spell-slot\">Using a Higher-Level Spell Slot</h5>\n<p class=\"rh-book-p\">When a spellcaster casts a spell using a slot that is of a higher level than the spell, the spell takes on the higher level for that casting. For instance, if a Wizard casts <span class=\"rh-ref-link\" data-ref=\"spell\">spell</span> using a level 2 slot, that <span class=\"rh-ref-link\" data-ref=\"spell\">spell</span> is level 2. Effectively, the spell expands to fill the slot it is put into.</p>\n<p class=\"rh-book-p\">Some spells, such as <span class=\"rh-ref-link\" data-ref=\"spell\">spell</span> and <span class=\"rh-ref-link\" data-ref=\"spell\">spell</span>, have more powerful effects when cast at a higher level, as detailed in a spell's description.</p>\n<h4 class=\"rh-book-h\" id=\"school-of-magic\">School of Magic</h4>\n<p class=\"rh-book-p\">Each spell belongs to a school of magic. The schools are listed in the Schools of Magic table. These categories help describe spells but have no rules of their own, although some other rules refer to them.</p>\n<div class=\"rh-book-table-wrap\">\n<table class=\"rh-book-table\">\n  <caption>Schools of Magic</caption>\n  <thead><tr><th>School</th><th>Typical Effects</th></tr></thead>\n  <tbody>\n    <tr><td>Abjuration</td><td>Prevents or reverses harmful effects</td></tr>\n    <tr><td>Conjuration</td><td>Transports creatures or objects</td></tr>\n    <tr><td>Divination</td><td>Reveals information</td></tr>\n    <tr><td>Enchantment</td><td>Influences minds</td></tr>\n    <tr><td>Evocation</td><td>Channels energy to create effects that are often destructive</td></tr>\n    <tr><td>Illusion</td><td>Deceives the mind or senses</td></tr>\n    <tr><td>Necromancy</td><td>Manipulates life and death</td></tr>\n    <tr><td>Transmutation</td><td>Transforms creatures or objects</td></tr>\n  </tbody>\n</table>\n</div>\n<h4 class=\"rh-book-h\" id=\"class-spell-lists\">Class Spell Lists</h4>\n<p class=\"rh-book-p\">If a spell is on a class's spell list, the class's name appears in parentheses after the spell's school of magic. Some features add a spell to a character's spell list even if the character isn't a member of a class in the parentheses.</p>\n<h4 class=\"rh-book-h\" id=\"casting-time\">Casting Time</h4>\n<p class=\"rh-book-p\">Most spells require the <span class=\"rh-ref-link\" data-ref=\"action\">action</span> action to cast, but some spells require a Bonus Action, a Reaction, or 1 minute or more. A spell's Casting Time entry specifies which of those is required.</p>\n<h5 class=\"rh-book-h\" id=\"one-spell-with-a-spell-slot-per-turn\">One Spell with a Spell Slot per Turn</h5>\n<p class=\"rh-book-p\">On a turn, you can expend only one spell slot to cast a spell. This rule means you can't, for example, cast a spell with a spell slot using the <span class=\"rh-ref-link\" data-ref=\"action\">action</span> action and another one using a Bonus Action on the same turn.</p>\n<h5 class=\"rh-book-h\" id=\"reaction-and-bonus-action-triggers\">Reaction and Bonus Action Triggers</h5>\n<p class=\"rh-book-p\">A spell that has a casting time of a Reaction is cast in response to a trigger that is defined in the spell's Casting Time entry. Some spells that have a casting time of a Bonus Action are also cast in response to a trigger defined in the spell.</p>\n<h5 class=\"rh-book-h\" id=\"longer-casting-times\">Longer Casting Times</h5>\n<p class=\"rh-book-p\">Certain spells—including a spell cast as a Ritual—require more time to cast: minutes or even hours. While you cast a spell with a casting time of 1 minute or more, you must take the <span class=\"rh-ref-link\" data-ref=\"action\">action</span> action on each of your turns, and you must maintain Concentration while you do so. If your Concentration is broken, the spell fails, but you don't expend a spell slot. To cast the spell again, you must start over.</p>\n<h4 class=\"rh-book-h\" id=\"range\">Range</h4>\n<p class=\"rh-book-p\">A spell's range indicates how far from the spellcaster the spell's effect can originate, and the spell's description specifies which part of the effect is limited by the range.</p>\n<p class=\"rh-book-p\">A range usually takes one of the following forms:</p>\n<ul class=\"rh-book-list\">\n  <li><b>Distance.</b> The range is expressed in feet.</li>\n  <li><b>Touch.</b> The spell's effect originates on something the spellcaster must touch, as defined in the spell.</li>\n  <li><b>Self.</b> The spell is cast on the spellcaster or emanates from them, as specified in the spell.</li>\n</ul>\n<p class=\"rh-book-p\">If a spell has movable effects, they aren't restricted by its range unless the spell's description says otherwise.</p>\n<h4 class=\"rh-book-h\" id=\"components\">Components</h4>\n<p class=\"rh-book-p\">A spell's components are physical requirements the spellcaster must meet to cast the spell. Each spell's description indicates whether it requires Verbal (V), Somatic (S), or Material (M) components. If the spellcaster can't provide one or more of a spell's components, the spellcaster can't cast the spell.</p>\n<h5 class=\"rh-book-h\" id=\"verbal-v\">Verbal (V)</h5>\n<p class=\"rh-book-p\">A Verbal component is the chanting of esoteric words that sound like nonsense to the uninitiated. The words must be uttered in a normal speaking voice. The words themselves aren't the source of the spell's power; rather, the particular combination of sounds, with specific pitch and resonance, sets the threads of magic in motion. Thus, a creature who is gagged or in an area of magical silence can't cast a spell with a Verbal component.</p>\n<aside class=\"rh-book-inset\">\n  <h4 class=\"rh-inset-title\">Creating Verbal Components</h4>\n<p class=\"rh-book-p\">If you'd like to say a spell's Verbal component, you may make up the words. However you make them, the goal is to create something that's easy to say and that doesn't mean anything in the real world. Consider this method: take the name of the spell, keep only one instance of each of its letters, and rearrange the remaining letters into words. For example, remove the second <i>l</i> from <span class=\"rh-ref-link\" data-ref=\"spell\">spell</span> and rearrange the remaining letters to create <i>Ber Fila</i> or <i>Fel Bira</i>.</p>\n</aside>\n<h5 class=\"rh-book-h\" id=\"somatic-s\">Somatic (S)</h5>\n<p class=\"rh-book-p\">A Somatic component is a forceful gesticulation or an intricate set of gestures. A spellcaster must use at least one of their hands to perform these movements.</p>\n<h5 class=\"rh-book-h\" id=\"material-m\">Material (M)</h5>\n<p class=\"rh-book-p\">A Material component is a particular material used in a spell's casting, as specified in parentheses in the Components entry. These materials aren't consumed by the spell unless the spell's description states otherwise. The spellcaster must have a hand free to access them, but it can be the same hand used to perform Somatic components, if any.</p>\n<p class=\"rh-book-p\">If a spell doesn't consume its materials and doesn't specify a cost for them, a spellcaster can use a <span class=\"rh-ref-link\" data-ref=\"item\">item</span> (see chapter 6) instead of providing the materials specified in the spell, or the spellcaster can substitute a Spellcasting Focus if the caster has a feature that allows that substitution. To use a Component Pouch, you must have a hand free to reach into it, and to use a Spellcasting Focus, you must hold it unless its description says otherwise (see chapter 6 for descriptions).</p>\n<h4 class=\"rh-book-h\" id=\"duration\">Duration</h4>\n<p class=\"rh-book-p\">A spell's duration is the length of time the spell persists after it is cast. A duration typically takes one of the following forms:</p>\n<ul class=\"rh-book-list\">\n  <li><b>Concentration.</b> A duration that requires Concentration follows the Concentration rules.</li>\n  <li><b>Instantaneous.</b> An instantaneous duration means the spell's magic appears only for a moment and then disappears.</li>\n  <li><b>Time Span.</b> A duration that provides a time span specifies how long the spell lasts in rounds, minutes, hours, or the like. For example, a Duration entry might say \"1 minute,\" meaning the spell ends after 1 minute has passed. While a time-span spell that you cast is ongoing, you can dismiss it (no action required) if you don't have the <span class=\"rh-ref-link\" data-ref=\"condition\">condition</span> condition.</li>\n</ul>\n<h4 class=\"rh-book-h\" id=\"effects\">Effects</h4>\n<p class=\"rh-book-p\">The effects of a spell are detailed after its duration entry. Those details present exactly what the spell does, which ignores mundane physical laws; any outcomes beyond those effects are under the DM's purview. Whatever the effects, they typically deal with targets, saving throws, attack rolls, or all three, each of which is detailed below.</p>\n<h5 class=\"rh-book-h\" id=\"targets\">Targets</h5>\n<p class=\"rh-book-p\">A typical spell requires the caster to pick one or more targets to be affected by the spell's magic. A spell's description says whether the spell targets creatures, objects, or something else.</p>\n<h5 class=\"rh-book-h\" id=\"a-clear-path-to-the-target\">A Clear Path to the Target</h5>\n<p class=\"rh-book-p\">To target something with a spell, a caster must have a clear path to it, so it can't be behind Cover.</p>\n<h5 class=\"rh-book-h\" id=\"targeting-yourself\">Targeting Yourself</h5>\n<p class=\"rh-book-p\">If a spell targets a creature of your choice, you can choose yourself unless the creature must be Hostile [Attitude] or specifically a creature other than you.</p>\n<h5 class=\"rh-book-h\" id=\"areas-of-effect\">Areas of Effect</h5>\n<p class=\"rh-book-p\">Some spells, such as <span class=\"rh-ref-link\" data-ref=\"spell\">spell</span>, cover an area called an area of effect, which is defined in the rules glossary. The area determines what the spell targets. The description of a spell specifies whether it has an area of effect, which is typically one of these shapes: Cone [Area of Effect], Cube [Area of Effect], Cylinder [Area of Effect], Emanation [Area of Effect], Line [Area of Effect], or Sphere [Area of Effect].</p>\n<h5 class=\"rh-book-h\" id=\"awareness-of-being-targeted\">Awareness of Being Targeted</h5>\n<p class=\"rh-book-p\">Unless a spell has a perceptible effect, a creature doesn't know it was targeted by the spell. An effect like lightning is obvious, but a more subtle effect, such as an attempt to read thoughts, goes unnoticed unless a spell's description says otherwise.</p>\n<h5 class=\"rh-book-h\" id=\"invalid-targets\">Invalid Targets</h5>\n<p class=\"rh-book-p\">If you cast a spell on someone or something that can't be affected by it, nothing happens to that target, but if you used a spell slot to cast the spell, the slot is still expended.</p>\n<p class=\"rh-book-p\">If the spell normally has no effect on a target that succeeds on a saving throw, the invalid target appears to have succeeded on its saving throw, even though it didn't attempt one (giving no hint that the creature is an invalid target). Otherwise, you perceive that the spell did nothing to the target.</p>\n<h5 class=\"rh-book-h\" id=\"saving-throws\">Saving Throws</h5>\n<p class=\"rh-book-p\">Many spells specify that a target makes a saving throw to avoid some or all of a spell's effects. The spell specifies the ability that the target uses for the save and what happens on a success or failure. Here's how to calculate the DC for your spells:</p>\n<h5 class=\"rh-book-h\" id=\"spell\">Spell</h5>\n<h5 class=\"rh-book-h\" id=\"attack-rolls\">Attack Rolls</h5>\n<p class=\"rh-book-p\">Some spells require the caster to make an attack roll to determine whether the spell hits a target. Here's how to calculate the attack modifier for your spells:</p>\n<h5 class=\"rh-book-h\" id=\"spell\">Spell</h5>\n<h5 class=\"rh-book-h\" id=\"combining-spell-effects\">Combining Spell Effects</h5>\n<p class=\"rh-book-p\">The effects of different spells add together while their durations overlap. In contrast, the effects of the same spell cast multiple times don't combine. Instead, the most potent effect—such as the highest bonus—from those castings applies while their durations overlap. The most recent effect applies if the castings are equally potent and their durations overlap. For example, if two Clerics cast <span class=\"rh-ref-link\" data-ref=\"spell\">spell</span> on the same target, that target gains the spell's benefit only once; the target doesn't receive two bonus dice. But if the durations of the spells overlap, the effect continues until the duration of the second <span class=\"rh-ref-link\" data-ref=\"spell\">spell</span> ends.</p>\n<aside class=\"rh-book-inset\">\n  <h4 class=\"rh-inset-title\">Identifying an Ongoing Spell</h4>\n<p class=\"rh-book-p\">You can try to identify a non-instantaneous spell by its observable effects if its duration is ongoing. To identify it, you must take the <span class=\"rh-ref-link\" data-ref=\"action\">action</span> action and succeed on a 15 Intelligence (<span class=\"rh-ref-link\" data-ref=\"skill\">skill</span>) check.</p>\n</aside>\n",
      "subsections": [
        {
          "id": "spell-level",
          "title": "Spell Level"
        },
        {
          "id": "school-of-magic",
          "title": "School of Magic"
        },
        {
          "id": "class-spell-lists",
          "title": "Class Spell Lists"
        },
        {
          "id": "casting-time",
          "title": "Casting Time"
        },
        {
          "id": "range",
          "title": "Range"
        },
        {
          "id": "components",
          "title": "Components"
        },
        {
          "id": "duration",
          "title": "Duration"
        },
        {
          "id": "effects",
          "title": "Effects"
        }
      ]
    },
    {
      "id": "spell-descriptions",
      "title": "Spell Descriptions",
      "html": "<h3 class=\"rh-book-h\" id=\"spell-descriptions\">Spell Descriptions</h3>\n<p class=\"rh-book-p\">The spells are presented in alphabetical order.</p>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n",
      "subsections": []
    },
    {
      "id": "a",
      "title": "A",
      "html": "<h3 class=\"rh-book-h\" id=\"a\">A</h3>\n<h4 class=\"rh-book-h\" id=\"acid-splash\">Acid Splash</h4>\n<h4 class=\"rh-book-h\" id=\"aid\">Aid</h4>\n<h4 class=\"rh-book-h\" id=\"alarm\">Alarm</h4>\n<h4 class=\"rh-book-h\" id=\"alter-self\">Alter Self</h4>\n<h4 class=\"rh-book-h\" id=\"animal-friendship\">Animal Friendship</h4>\n<h4 class=\"rh-book-h\" id=\"animal-messenger\">Animal Messenger</h4>\n<h4 class=\"rh-book-h\" id=\"animal-shapes\">Animal Shapes</h4>\n<h4 class=\"rh-book-h\" id=\"animate-dead\">Animate Dead</h4>\n<h4 class=\"rh-book-h\" id=\"animate-objects\">Animate Objects</h4>\n<h4 class=\"rh-book-h\" id=\"antilife-shell\">Antilife Shell</h4>\n<h4 class=\"rh-book-h\" id=\"antimagic-field\">Antimagic Field</h4>\n<h4 class=\"rh-book-h\" id=\"antipathy-sympathy\">Antipathy/Sympathy</h4>\n<h4 class=\"rh-book-h\" id=\"arcane-eye\">Arcane Eye</h4>\n<h4 class=\"rh-book-h\" id=\"arcane-gate\">Arcane Gate</h4>\n<h4 class=\"rh-book-h\" id=\"arcane-lock\">Arcane Lock</h4>\n<h4 class=\"rh-book-h\" id=\"arcane-vigor\">Arcane Vigor</h4>\n<h4 class=\"rh-book-h\" id=\"armor-of-agathys\">Armor of Agathys</h4>\n<h4 class=\"rh-book-h\" id=\"arms-of-hadar\">Arms of Hadar</h4>\n<h4 class=\"rh-book-h\" id=\"astral-projection\">Astral Projection</h4>\n<h4 class=\"rh-book-h\" id=\"augury\">Augury</h4>\n<h4 class=\"rh-book-h\" id=\"aura-of-life\">Aura of Life</h4>\n<h4 class=\"rh-book-h\" id=\"aura-of-purity\">Aura of Purity</h4>\n<h4 class=\"rh-book-h\" id=\"aura-of-vitality\">Aura of Vitality</h4>\n<h4 class=\"rh-book-h\" id=\"awaken\">Awaken</h4>\n",
      "subsections": [
        {
          "id": "acid-splash",
          "title": "Acid Splash"
        },
        {
          "id": "aid",
          "title": "Aid"
        },
        {
          "id": "alarm",
          "title": "Alarm"
        },
        {
          "id": "alter-self",
          "title": "Alter Self"
        },
        {
          "id": "animal-friendship",
          "title": "Animal Friendship"
        },
        {
          "id": "animal-messenger",
          "title": "Animal Messenger"
        },
        {
          "id": "animal-shapes",
          "title": "Animal Shapes"
        },
        {
          "id": "animate-dead",
          "title": "Animate Dead"
        },
        {
          "id": "animate-objects",
          "title": "Animate Objects"
        },
        {
          "id": "antilife-shell",
          "title": "Antilife Shell"
        },
        {
          "id": "antimagic-field",
          "title": "Antimagic Field"
        },
        {
          "id": "antipathy-sympathy",
          "title": "Antipathy/Sympathy"
        },
        {
          "id": "arcane-eye",
          "title": "Arcane Eye"
        },
        {
          "id": "arcane-gate",
          "title": "Arcane Gate"
        },
        {
          "id": "arcane-lock",
          "title": "Arcane Lock"
        },
        {
          "id": "arcane-vigor",
          "title": "Arcane Vigor"
        },
        {
          "id": "armor-of-agathys",
          "title": "Armor of Agathys"
        },
        {
          "id": "arms-of-hadar",
          "title": "Arms of Hadar"
        },
        {
          "id": "astral-projection",
          "title": "Astral Projection"
        },
        {
          "id": "augury",
          "title": "Augury"
        },
        {
          "id": "aura-of-life",
          "title": "Aura of Life"
        },
        {
          "id": "aura-of-purity",
          "title": "Aura of Purity"
        },
        {
          "id": "aura-of-vitality",
          "title": "Aura of Vitality"
        },
        {
          "id": "awaken",
          "title": "Awaken"
        }
      ]
    },
    {
      "id": "b",
      "title": "B",
      "html": "<h3 class=\"rh-book-h\" id=\"b\">B</h3>\n<h4 class=\"rh-book-h\" id=\"bane\">Bane</h4>\n<h4 class=\"rh-book-h\" id=\"banishing-smite\">Banishing Smite</h4>\n<h4 class=\"rh-book-h\" id=\"banishment\">Banishment</h4>\n<h4 class=\"rh-book-h\" id=\"barkskin\">Barkskin</h4>\n<h4 class=\"rh-book-h\" id=\"beacon-of-hope\">Beacon of Hope</h4>\n<h4 class=\"rh-book-h\" id=\"beast-sense\">Beast Sense</h4>\n<h4 class=\"rh-book-h\" id=\"befuddlement\">Befuddlement</h4>\n<h4 class=\"rh-book-h\" id=\"bestow-curse\">Bestow Curse</h4>\n<h4 class=\"rh-book-h\" id=\"bigby-s-hand\">Bigby's Hand</h4>\n<h4 class=\"rh-book-h\" id=\"blade-barrier\">Blade Barrier</h4>\n<h4 class=\"rh-book-h\" id=\"blade-ward\">Blade Ward</h4>\n<h4 class=\"rh-book-h\" id=\"bless\">Bless</h4>\n<h4 class=\"rh-book-h\" id=\"blight\">Blight</h4>\n<h4 class=\"rh-book-h\" id=\"blinding-smite\">Blinding Smite</h4>\n<h4 class=\"rh-book-h\" id=\"blindness-deafness\">Blindness/Deafness</h4>\n<h4 class=\"rh-book-h\" id=\"blink\">Blink</h4>\n<h4 class=\"rh-book-h\" id=\"blur\">Blur</h4>\n<h4 class=\"rh-book-h\" id=\"burning-hands\">Burning Hands</h4>\n",
      "subsections": [
        {
          "id": "bane",
          "title": "Bane"
        },
        {
          "id": "banishing-smite",
          "title": "Banishing Smite"
        },
        {
          "id": "banishment",
          "title": "Banishment"
        },
        {
          "id": "barkskin",
          "title": "Barkskin"
        },
        {
          "id": "beacon-of-hope",
          "title": "Beacon of Hope"
        },
        {
          "id": "beast-sense",
          "title": "Beast Sense"
        },
        {
          "id": "befuddlement",
          "title": "Befuddlement"
        },
        {
          "id": "bestow-curse",
          "title": "Bestow Curse"
        },
        {
          "id": "bigby-s-hand",
          "title": "Bigby's Hand"
        },
        {
          "id": "blade-barrier",
          "title": "Blade Barrier"
        },
        {
          "id": "blade-ward",
          "title": "Blade Ward"
        },
        {
          "id": "bless",
          "title": "Bless"
        },
        {
          "id": "blight",
          "title": "Blight"
        },
        {
          "id": "blinding-smite",
          "title": "Blinding Smite"
        },
        {
          "id": "blindness-deafness",
          "title": "Blindness/Deafness"
        },
        {
          "id": "blink",
          "title": "Blink"
        },
        {
          "id": "blur",
          "title": "Blur"
        },
        {
          "id": "burning-hands",
          "title": "Burning Hands"
        }
      ]
    },
    {
      "id": "c",
      "title": "C",
      "html": "<h3 class=\"rh-book-h\" id=\"c\">C</h3>\n<h4 class=\"rh-book-h\" id=\"call-lightning\">Call Lightning</h4>\n<h4 class=\"rh-book-h\" id=\"calm-emotions\">Calm Emotions</h4>\n<h4 class=\"rh-book-h\" id=\"chain-lightning\">Chain Lightning</h4>\n<h4 class=\"rh-book-h\" id=\"charm-monster\">Charm Monster</h4>\n<h4 class=\"rh-book-h\" id=\"charm-person\">Charm Person</h4>\n<h4 class=\"rh-book-h\" id=\"chill-touch\">Chill Touch</h4>\n<h4 class=\"rh-book-h\" id=\"chromatic-orb\">Chromatic Orb</h4>\n<h4 class=\"rh-book-h\" id=\"circle-of-death\">Circle of Death</h4>\n<h4 class=\"rh-book-h\" id=\"circle-of-power\">Circle of Power</h4>\n<h4 class=\"rh-book-h\" id=\"clairvoyance\">Clairvoyance</h4>\n<h4 class=\"rh-book-h\" id=\"clone\">Clone</h4>\n<h4 class=\"rh-book-h\" id=\"cloud-of-daggers\">Cloud of Daggers</h4>\n<h4 class=\"rh-book-h\" id=\"cloudkill\">Cloudkill</h4>\n<h4 class=\"rh-book-h\" id=\"color-spray\">Color Spray</h4>\n<h4 class=\"rh-book-h\" id=\"command\">Command</h4>\n<h4 class=\"rh-book-h\" id=\"commune\">Commune</h4>\n<h4 class=\"rh-book-h\" id=\"commune-with-nature\">Commune with Nature</h4>\n<h4 class=\"rh-book-h\" id=\"compelled-duel\">Compelled Duel</h4>\n<h4 class=\"rh-book-h\" id=\"comprehend-languages\">Comprehend Languages</h4>\n<h4 class=\"rh-book-h\" id=\"compulsion\">Compulsion</h4>\n<h4 class=\"rh-book-h\" id=\"cone-of-cold\">Cone of Cold</h4>\n<h4 class=\"rh-book-h\" id=\"confusion\">Confusion</h4>\n<h4 class=\"rh-book-h\" id=\"conjure-animals\">Conjure Animals</h4>\n<h4 class=\"rh-book-h\" id=\"conjure-barrage\">Conjure Barrage</h4>\n<h4 class=\"rh-book-h\" id=\"conjure-celestial\">Conjure Celestial</h4>\n<h4 class=\"rh-book-h\" id=\"conjure-elemental\">Conjure Elemental</h4>\n<h4 class=\"rh-book-h\" id=\"conjure-fey\">Conjure Fey</h4>\n<h4 class=\"rh-book-h\" id=\"conjure-minor-elementals\">Conjure Minor Elementals</h4>\n<h4 class=\"rh-book-h\" id=\"conjure-volley\">Conjure Volley</h4>\n<h4 class=\"rh-book-h\" id=\"conjure-woodland-beings\">Conjure Woodland Beings</h4>\n<h4 class=\"rh-book-h\" id=\"contact-other-plane\">Contact Other Plane</h4>\n<h4 class=\"rh-book-h\" id=\"contagion\">Contagion</h4>\n<h4 class=\"rh-book-h\" id=\"contingency\">Contingency</h4>\n<h4 class=\"rh-book-h\" id=\"continual-flame\">Continual Flame</h4>\n<h4 class=\"rh-book-h\" id=\"control-water\">Control Water</h4>\n<h4 class=\"rh-book-h\" id=\"control-weather\">Control Weather</h4>\n<h4 class=\"rh-book-h\" id=\"cordon-of-arrows\">Cordon of Arrows</h4>\n<h4 class=\"rh-book-h\" id=\"counterspell\">Counterspell</h4>\n<h4 class=\"rh-book-h\" id=\"create-food-and-water\">Create Food and Water</h4>\n<h4 class=\"rh-book-h\" id=\"create-or-destroy-water\">Create or Destroy Water</h4>\n<h4 class=\"rh-book-h\" id=\"create-undead\">Create Undead</h4>\n<h4 class=\"rh-book-h\" id=\"creation\">Creation</h4>\n<h4 class=\"rh-book-h\" id=\"crown-of-madness\">Crown of Madness</h4>\n<h4 class=\"rh-book-h\" id=\"crusader-s-mantle\">Crusader's Mantle</h4>\n<h4 class=\"rh-book-h\" id=\"cure-wounds\">Cure Wounds</h4>\n",
      "subsections": [
        {
          "id": "call-lightning",
          "title": "Call Lightning"
        },
        {
          "id": "calm-emotions",
          "title": "Calm Emotions"
        },
        {
          "id": "chain-lightning",
          "title": "Chain Lightning"
        },
        {
          "id": "charm-monster",
          "title": "Charm Monster"
        },
        {
          "id": "charm-person",
          "title": "Charm Person"
        },
        {
          "id": "chill-touch",
          "title": "Chill Touch"
        },
        {
          "id": "chromatic-orb",
          "title": "Chromatic Orb"
        },
        {
          "id": "circle-of-death",
          "title": "Circle of Death"
        },
        {
          "id": "circle-of-power",
          "title": "Circle of Power"
        },
        {
          "id": "clairvoyance",
          "title": "Clairvoyance"
        },
        {
          "id": "clone",
          "title": "Clone"
        },
        {
          "id": "cloud-of-daggers",
          "title": "Cloud of Daggers"
        },
        {
          "id": "cloudkill",
          "title": "Cloudkill"
        },
        {
          "id": "color-spray",
          "title": "Color Spray"
        },
        {
          "id": "command",
          "title": "Command"
        },
        {
          "id": "commune",
          "title": "Commune"
        },
        {
          "id": "commune-with-nature",
          "title": "Commune with Nature"
        },
        {
          "id": "compelled-duel",
          "title": "Compelled Duel"
        },
        {
          "id": "comprehend-languages",
          "title": "Comprehend Languages"
        },
        {
          "id": "compulsion",
          "title": "Compulsion"
        },
        {
          "id": "cone-of-cold",
          "title": "Cone of Cold"
        },
        {
          "id": "confusion",
          "title": "Confusion"
        },
        {
          "id": "conjure-animals",
          "title": "Conjure Animals"
        },
        {
          "id": "conjure-barrage",
          "title": "Conjure Barrage"
        },
        {
          "id": "conjure-celestial",
          "title": "Conjure Celestial"
        },
        {
          "id": "conjure-elemental",
          "title": "Conjure Elemental"
        },
        {
          "id": "conjure-fey",
          "title": "Conjure Fey"
        },
        {
          "id": "conjure-minor-elementals",
          "title": "Conjure Minor Elementals"
        },
        {
          "id": "conjure-volley",
          "title": "Conjure Volley"
        },
        {
          "id": "conjure-woodland-beings",
          "title": "Conjure Woodland Beings"
        },
        {
          "id": "contact-other-plane",
          "title": "Contact Other Plane"
        },
        {
          "id": "contagion",
          "title": "Contagion"
        },
        {
          "id": "contingency",
          "title": "Contingency"
        },
        {
          "id": "continual-flame",
          "title": "Continual Flame"
        },
        {
          "id": "control-water",
          "title": "Control Water"
        },
        {
          "id": "control-weather",
          "title": "Control Weather"
        },
        {
          "id": "cordon-of-arrows",
          "title": "Cordon of Arrows"
        },
        {
          "id": "counterspell",
          "title": "Counterspell"
        },
        {
          "id": "create-food-and-water",
          "title": "Create Food and Water"
        },
        {
          "id": "create-or-destroy-water",
          "title": "Create or Destroy Water"
        },
        {
          "id": "create-undead",
          "title": "Create Undead"
        },
        {
          "id": "creation",
          "title": "Creation"
        },
        {
          "id": "crown-of-madness",
          "title": "Crown of Madness"
        },
        {
          "id": "crusader-s-mantle",
          "title": "Crusader's Mantle"
        },
        {
          "id": "cure-wounds",
          "title": "Cure Wounds"
        }
      ]
    },
    {
      "id": "d",
      "title": "D",
      "html": "<h3 class=\"rh-book-h\" id=\"d\">D</h3>\n<h4 class=\"rh-book-h\" id=\"dancing-lights\">Dancing Lights</h4>\n<h4 class=\"rh-book-h\" id=\"darkness\">Darkness</h4>\n<h4 class=\"rh-book-h\" id=\"darkvision\">Darkvision</h4>\n<h4 class=\"rh-book-h\" id=\"daylight\">Daylight</h4>\n<h4 class=\"rh-book-h\" id=\"death-ward\">Death Ward</h4>\n<h4 class=\"rh-book-h\" id=\"delayed-blast-fireball\">Delayed Blast Fireball</h4>\n<h4 class=\"rh-book-h\" id=\"demiplane\">Demiplane</h4>\n<h4 class=\"rh-book-h\" id=\"destructive-wave\">Destructive Wave</h4>\n<h4 class=\"rh-book-h\" id=\"detect-evil-and-good\">Detect Evil and Good</h4>\n<h4 class=\"rh-book-h\" id=\"detect-magic\">Detect Magic</h4>\n<h4 class=\"rh-book-h\" id=\"detect-poison-and-disease\">Detect Poison and Disease</h4>\n<h4 class=\"rh-book-h\" id=\"detect-thoughts\">Detect Thoughts</h4>\n<h4 class=\"rh-book-h\" id=\"dimension-door\">Dimension Door</h4>\n<h4 class=\"rh-book-h\" id=\"disguise-self\">Disguise Self</h4>\n<h4 class=\"rh-book-h\" id=\"disintegrate\">Disintegrate</h4>\n<h4 class=\"rh-book-h\" id=\"dispel-evil-and-good\">Dispel Evil and Good</h4>\n<h4 class=\"rh-book-h\" id=\"dispel-magic\">Dispel Magic</h4>\n<h4 class=\"rh-book-h\" id=\"dissonant-whispers\">Dissonant Whispers</h4>\n<h4 class=\"rh-book-h\" id=\"divination\">Divination</h4>\n<h4 class=\"rh-book-h\" id=\"divine-favor\">Divine Favor</h4>\n<h4 class=\"rh-book-h\" id=\"divine-smite\">Divine Smite</h4>\n<h4 class=\"rh-book-h\" id=\"divine-word\">Divine Word</h4>\n<h4 class=\"rh-book-h\" id=\"dominate-beast\">Dominate Beast</h4>\n<h4 class=\"rh-book-h\" id=\"dominate-monster\">Dominate Monster</h4>\n<h4 class=\"rh-book-h\" id=\"dominate-person\">Dominate Person</h4>\n<h4 class=\"rh-book-h\" id=\"dragon-s-breath\">Dragon's Breath</h4>\n<h4 class=\"rh-book-h\" id=\"drawmij-s-instant-summons\">Drawmij's Instant Summons</h4>\n<h4 class=\"rh-book-h\" id=\"dream\">Dream</h4>\n<h4 class=\"rh-book-h\" id=\"druidcraft\">Druidcraft</h4>\n",
      "subsections": [
        {
          "id": "dancing-lights",
          "title": "Dancing Lights"
        },
        {
          "id": "darkness",
          "title": "Darkness"
        },
        {
          "id": "darkvision",
          "title": "Darkvision"
        },
        {
          "id": "daylight",
          "title": "Daylight"
        },
        {
          "id": "death-ward",
          "title": "Death Ward"
        },
        {
          "id": "delayed-blast-fireball",
          "title": "Delayed Blast Fireball"
        },
        {
          "id": "demiplane",
          "title": "Demiplane"
        },
        {
          "id": "destructive-wave",
          "title": "Destructive Wave"
        },
        {
          "id": "detect-evil-and-good",
          "title": "Detect Evil and Good"
        },
        {
          "id": "detect-magic",
          "title": "Detect Magic"
        },
        {
          "id": "detect-poison-and-disease",
          "title": "Detect Poison and Disease"
        },
        {
          "id": "detect-thoughts",
          "title": "Detect Thoughts"
        },
        {
          "id": "dimension-door",
          "title": "Dimension Door"
        },
        {
          "id": "disguise-self",
          "title": "Disguise Self"
        },
        {
          "id": "disintegrate",
          "title": "Disintegrate"
        },
        {
          "id": "dispel-evil-and-good",
          "title": "Dispel Evil and Good"
        },
        {
          "id": "dispel-magic",
          "title": "Dispel Magic"
        },
        {
          "id": "dissonant-whispers",
          "title": "Dissonant Whispers"
        },
        {
          "id": "divination",
          "title": "Divination"
        },
        {
          "id": "divine-favor",
          "title": "Divine Favor"
        },
        {
          "id": "divine-smite",
          "title": "Divine Smite"
        },
        {
          "id": "divine-word",
          "title": "Divine Word"
        },
        {
          "id": "dominate-beast",
          "title": "Dominate Beast"
        },
        {
          "id": "dominate-monster",
          "title": "Dominate Monster"
        },
        {
          "id": "dominate-person",
          "title": "Dominate Person"
        },
        {
          "id": "dragon-s-breath",
          "title": "Dragon's Breath"
        },
        {
          "id": "drawmij-s-instant-summons",
          "title": "Drawmij's Instant Summons"
        },
        {
          "id": "dream",
          "title": "Dream"
        },
        {
          "id": "druidcraft",
          "title": "Druidcraft"
        }
      ]
    },
    {
      "id": "e",
      "title": "E",
      "html": "<h3 class=\"rh-book-h\" id=\"e\">E</h3>\n<h4 class=\"rh-book-h\" id=\"earthquake\">Earthquake</h4>\n<h4 class=\"rh-book-h\" id=\"eldritch-blast\">Eldritch Blast</h4>\n<h4 class=\"rh-book-h\" id=\"elemental-weapon\">Elemental Weapon</h4>\n<h4 class=\"rh-book-h\" id=\"elementalism\">Elementalism</h4>\n<h4 class=\"rh-book-h\" id=\"enhance-ability\">Enhance Ability</h4>\n<h4 class=\"rh-book-h\" id=\"enlarge-reduce\">Enlarge/Reduce</h4>\n<h4 class=\"rh-book-h\" id=\"ensnaring-strike\">Ensnaring Strike</h4>\n<h4 class=\"rh-book-h\" id=\"entangle\">Entangle</h4>\n<h4 class=\"rh-book-h\" id=\"enthrall\">Enthrall</h4>\n<h4 class=\"rh-book-h\" id=\"etherealness\">Etherealness</h4>\n<h4 class=\"rh-book-h\" id=\"evard-s-black-tentacles\">Evard's Black Tentacles</h4>\n<h4 class=\"rh-book-h\" id=\"expeditious-retreat\">Expeditious Retreat</h4>\n<h4 class=\"rh-book-h\" id=\"eyebite\">Eyebite</h4>\n",
      "subsections": [
        {
          "id": "earthquake",
          "title": "Earthquake"
        },
        {
          "id": "eldritch-blast",
          "title": "Eldritch Blast"
        },
        {
          "id": "elemental-weapon",
          "title": "Elemental Weapon"
        },
        {
          "id": "elementalism",
          "title": "Elementalism"
        },
        {
          "id": "enhance-ability",
          "title": "Enhance Ability"
        },
        {
          "id": "enlarge-reduce",
          "title": "Enlarge/Reduce"
        },
        {
          "id": "ensnaring-strike",
          "title": "Ensnaring Strike"
        },
        {
          "id": "entangle",
          "title": "Entangle"
        },
        {
          "id": "enthrall",
          "title": "Enthrall"
        },
        {
          "id": "etherealness",
          "title": "Etherealness"
        },
        {
          "id": "evard-s-black-tentacles",
          "title": "Evard's Black Tentacles"
        },
        {
          "id": "expeditious-retreat",
          "title": "Expeditious Retreat"
        },
        {
          "id": "eyebite",
          "title": "Eyebite"
        }
      ]
    },
    {
      "id": "f",
      "title": "F",
      "html": "<h3 class=\"rh-book-h\" id=\"f\">F</h3>\n<h4 class=\"rh-book-h\" id=\"fabricate\">Fabricate</h4>\n<h4 class=\"rh-book-h\" id=\"faerie-fire\">Faerie Fire</h4>\n<h4 class=\"rh-book-h\" id=\"false-life\">False Life</h4>\n<h4 class=\"rh-book-h\" id=\"fear\">Fear</h4>\n<h4 class=\"rh-book-h\" id=\"feather-fall\">Feather Fall</h4>\n<h4 class=\"rh-book-h\" id=\"feign-death\">Feign Death</h4>\n<h4 class=\"rh-book-h\" id=\"find-familiar\">Find Familiar</h4>\n<h4 class=\"rh-book-h\" id=\"find-steed\">Find Steed</h4>\n<h4 class=\"rh-book-h\" id=\"find-the-path\">Find the Path</h4>\n<h4 class=\"rh-book-h\" id=\"find-traps\">Find Traps</h4>\n<h4 class=\"rh-book-h\" id=\"finger-of-death\">Finger of Death</h4>\n<h4 class=\"rh-book-h\" id=\"fire-bolt\">Fire Bolt</h4>\n<h4 class=\"rh-book-h\" id=\"fire-shield\">Fire Shield</h4>\n<h4 class=\"rh-book-h\" id=\"fire-storm\">Fire Storm</h4>\n<h4 class=\"rh-book-h\" id=\"fireball\">Fireball</h4>\n<h4 class=\"rh-book-h\" id=\"flame-blade\">Flame Blade</h4>\n<h4 class=\"rh-book-h\" id=\"flame-strike\">Flame Strike</h4>\n<h4 class=\"rh-book-h\" id=\"flaming-sphere\">Flaming Sphere</h4>\n<h4 class=\"rh-book-h\" id=\"flesh-to-stone\">Flesh to Stone</h4>\n<h4 class=\"rh-book-h\" id=\"fly\">Fly</h4>\n<h4 class=\"rh-book-h\" id=\"fog-cloud\">Fog Cloud</h4>\n<h4 class=\"rh-book-h\" id=\"forbiddance\">Forbiddance</h4>\n<h4 class=\"rh-book-h\" id=\"forcecage\">Forcecage</h4>\n<h4 class=\"rh-book-h\" id=\"foresight\">Foresight</h4>\n<h4 class=\"rh-book-h\" id=\"fount-of-moonlight\">Fount of Moonlight</h4>\n<h4 class=\"rh-book-h\" id=\"freedom-of-movement\">Freedom of Movement</h4>\n<h4 class=\"rh-book-h\" id=\"friends\">Friends</h4>\n",
      "subsections": [
        {
          "id": "fabricate",
          "title": "Fabricate"
        },
        {
          "id": "faerie-fire",
          "title": "Faerie Fire"
        },
        {
          "id": "false-life",
          "title": "False Life"
        },
        {
          "id": "fear",
          "title": "Fear"
        },
        {
          "id": "feather-fall",
          "title": "Feather Fall"
        },
        {
          "id": "feign-death",
          "title": "Feign Death"
        },
        {
          "id": "find-familiar",
          "title": "Find Familiar"
        },
        {
          "id": "find-steed",
          "title": "Find Steed"
        },
        {
          "id": "find-the-path",
          "title": "Find the Path"
        },
        {
          "id": "find-traps",
          "title": "Find Traps"
        },
        {
          "id": "finger-of-death",
          "title": "Finger of Death"
        },
        {
          "id": "fire-bolt",
          "title": "Fire Bolt"
        },
        {
          "id": "fire-shield",
          "title": "Fire Shield"
        },
        {
          "id": "fire-storm",
          "title": "Fire Storm"
        },
        {
          "id": "fireball",
          "title": "Fireball"
        },
        {
          "id": "flame-blade",
          "title": "Flame Blade"
        },
        {
          "id": "flame-strike",
          "title": "Flame Strike"
        },
        {
          "id": "flaming-sphere",
          "title": "Flaming Sphere"
        },
        {
          "id": "flesh-to-stone",
          "title": "Flesh to Stone"
        },
        {
          "id": "fly",
          "title": "Fly"
        },
        {
          "id": "fog-cloud",
          "title": "Fog Cloud"
        },
        {
          "id": "forbiddance",
          "title": "Forbiddance"
        },
        {
          "id": "forcecage",
          "title": "Forcecage"
        },
        {
          "id": "foresight",
          "title": "Foresight"
        },
        {
          "id": "fount-of-moonlight",
          "title": "Fount of Moonlight"
        },
        {
          "id": "freedom-of-movement",
          "title": "Freedom of Movement"
        },
        {
          "id": "friends",
          "title": "Friends"
        }
      ]
    },
    {
      "id": "g",
      "title": "G",
      "html": "<h3 class=\"rh-book-h\" id=\"g\">G</h3>\n<h4 class=\"rh-book-h\" id=\"gaseous-form\">Gaseous Form</h4>\n<h4 class=\"rh-book-h\" id=\"gate\">Gate</h4>\n<h4 class=\"rh-book-h\" id=\"geas\">Geas</h4>\n<h4 class=\"rh-book-h\" id=\"gentle-repose\">Gentle Repose</h4>\n<h4 class=\"rh-book-h\" id=\"giant-insect\">Giant Insect</h4>\n<h4 class=\"rh-book-h\" id=\"glibness\">Glibness</h4>\n<h4 class=\"rh-book-h\" id=\"globe-of-invulnerability\">Globe of Invulnerability</h4>\n<h4 class=\"rh-book-h\" id=\"glyph-of-warding\">Glyph of Warding</h4>\n<h4 class=\"rh-book-h\" id=\"goodberry\">Goodberry</h4>\n<h4 class=\"rh-book-h\" id=\"grasping-vine\">Grasping Vine</h4>\n<h4 class=\"rh-book-h\" id=\"grease\">Grease</h4>\n<h4 class=\"rh-book-h\" id=\"greater-invisibility\">Greater Invisibility</h4>\n<h4 class=\"rh-book-h\" id=\"greater-restoration\">Greater Restoration</h4>\n<h4 class=\"rh-book-h\" id=\"guardian-of-faith\">Guardian of Faith</h4>\n<h4 class=\"rh-book-h\" id=\"guards-and-wards\">Guards and Wards</h4>\n<h4 class=\"rh-book-h\" id=\"guidance\">Guidance</h4>\n<h4 class=\"rh-book-h\" id=\"guiding-bolt\">Guiding Bolt</h4>\n<h4 class=\"rh-book-h\" id=\"gust-of-wind\">Gust of Wind</h4>\n",
      "subsections": [
        {
          "id": "gaseous-form",
          "title": "Gaseous Form"
        },
        {
          "id": "gate",
          "title": "Gate"
        },
        {
          "id": "geas",
          "title": "Geas"
        },
        {
          "id": "gentle-repose",
          "title": "Gentle Repose"
        },
        {
          "id": "giant-insect",
          "title": "Giant Insect"
        },
        {
          "id": "glibness",
          "title": "Glibness"
        },
        {
          "id": "globe-of-invulnerability",
          "title": "Globe of Invulnerability"
        },
        {
          "id": "glyph-of-warding",
          "title": "Glyph of Warding"
        },
        {
          "id": "goodberry",
          "title": "Goodberry"
        },
        {
          "id": "grasping-vine",
          "title": "Grasping Vine"
        },
        {
          "id": "grease",
          "title": "Grease"
        },
        {
          "id": "greater-invisibility",
          "title": "Greater Invisibility"
        },
        {
          "id": "greater-restoration",
          "title": "Greater Restoration"
        },
        {
          "id": "guardian-of-faith",
          "title": "Guardian of Faith"
        },
        {
          "id": "guards-and-wards",
          "title": "Guards and Wards"
        },
        {
          "id": "guidance",
          "title": "Guidance"
        },
        {
          "id": "guiding-bolt",
          "title": "Guiding Bolt"
        },
        {
          "id": "gust-of-wind",
          "title": "Gust of Wind"
        }
      ]
    },
    {
      "id": "h",
      "title": "H",
      "html": "<h3 class=\"rh-book-h\" id=\"h\">H</h3>\n<h4 class=\"rh-book-h\" id=\"hail-of-thorns\">Hail of Thorns</h4>\n<h4 class=\"rh-book-h\" id=\"hallow\">Hallow</h4>\n<h4 class=\"rh-book-h\" id=\"hallucinatory-terrain\">Hallucinatory Terrain</h4>\n<h4 class=\"rh-book-h\" id=\"harm\">Harm</h4>\n<h4 class=\"rh-book-h\" id=\"haste\">Haste</h4>\n<h4 class=\"rh-book-h\" id=\"heal\">Heal</h4>\n<h4 class=\"rh-book-h\" id=\"healing-word\">Healing Word</h4>\n<h4 class=\"rh-book-h\" id=\"heat-metal\">Heat Metal</h4>\n<h4 class=\"rh-book-h\" id=\"hellish-rebuke\">Hellish Rebuke</h4>\n<h4 class=\"rh-book-h\" id=\"heroes-feast\">Heroes' Feast</h4>\n<h4 class=\"rh-book-h\" id=\"heroism\">Heroism</h4>\n<h4 class=\"rh-book-h\" id=\"hex\">Hex</h4>\n<h4 class=\"rh-book-h\" id=\"hold-monster\">Hold Monster</h4>\n<h4 class=\"rh-book-h\" id=\"hold-person\">Hold Person</h4>\n<h4 class=\"rh-book-h\" id=\"holy-aura\">Holy Aura</h4>\n<h4 class=\"rh-book-h\" id=\"hunger-of-hadar\">Hunger of Hadar</h4>\n<h4 class=\"rh-book-h\" id=\"hunter-s-mark\">Hunter's Mark</h4>\n<h4 class=\"rh-book-h\" id=\"hypnotic-pattern\">Hypnotic Pattern</h4>\n",
      "subsections": [
        {
          "id": "hail-of-thorns",
          "title": "Hail of Thorns"
        },
        {
          "id": "hallow",
          "title": "Hallow"
        },
        {
          "id": "hallucinatory-terrain",
          "title": "Hallucinatory Terrain"
        },
        {
          "id": "harm",
          "title": "Harm"
        },
        {
          "id": "haste",
          "title": "Haste"
        },
        {
          "id": "heal",
          "title": "Heal"
        },
        {
          "id": "healing-word",
          "title": "Healing Word"
        },
        {
          "id": "heat-metal",
          "title": "Heat Metal"
        },
        {
          "id": "hellish-rebuke",
          "title": "Hellish Rebuke"
        },
        {
          "id": "heroes-feast",
          "title": "Heroes' Feast"
        },
        {
          "id": "heroism",
          "title": "Heroism"
        },
        {
          "id": "hex",
          "title": "Hex"
        },
        {
          "id": "hold-monster",
          "title": "Hold Monster"
        },
        {
          "id": "hold-person",
          "title": "Hold Person"
        },
        {
          "id": "holy-aura",
          "title": "Holy Aura"
        },
        {
          "id": "hunger-of-hadar",
          "title": "Hunger of Hadar"
        },
        {
          "id": "hunter-s-mark",
          "title": "Hunter's Mark"
        },
        {
          "id": "hypnotic-pattern",
          "title": "Hypnotic Pattern"
        }
      ]
    },
    {
      "id": "i",
      "title": "I",
      "html": "<h3 class=\"rh-book-h\" id=\"i\">I</h3>\n<h4 class=\"rh-book-h\" id=\"ice-knife\">Ice Knife</h4>\n<h4 class=\"rh-book-h\" id=\"ice-storm\">Ice Storm</h4>\n<h4 class=\"rh-book-h\" id=\"identify\">Identify</h4>\n<h4 class=\"rh-book-h\" id=\"illusory-script\">Illusory Script</h4>\n<h4 class=\"rh-book-h\" id=\"imprisonment\">Imprisonment</h4>\n<h4 class=\"rh-book-h\" id=\"incendiary-cloud\">Incendiary Cloud</h4>\n<h4 class=\"rh-book-h\" id=\"inflict-wounds\">Inflict Wounds</h4>\n<h4 class=\"rh-book-h\" id=\"insect-plague\">Insect Plague</h4>\n<h4 class=\"rh-book-h\" id=\"invisibility\">Invisibility</h4>\n",
      "subsections": [
        {
          "id": "ice-knife",
          "title": "Ice Knife"
        },
        {
          "id": "ice-storm",
          "title": "Ice Storm"
        },
        {
          "id": "identify",
          "title": "Identify"
        },
        {
          "id": "illusory-script",
          "title": "Illusory Script"
        },
        {
          "id": "imprisonment",
          "title": "Imprisonment"
        },
        {
          "id": "incendiary-cloud",
          "title": "Incendiary Cloud"
        },
        {
          "id": "inflict-wounds",
          "title": "Inflict Wounds"
        },
        {
          "id": "insect-plague",
          "title": "Insect Plague"
        },
        {
          "id": "invisibility",
          "title": "Invisibility"
        }
      ]
    },
    {
      "id": "j",
      "title": "J",
      "html": "<h3 class=\"rh-book-h\" id=\"j\">J</h3>\n<h4 class=\"rh-book-h\" id=\"jallarzi-s-storm-of-radiance\">Jallarzi's Storm of Radiance</h4>\n<h4 class=\"rh-book-h\" id=\"jump\">Jump</h4>\n",
      "subsections": [
        {
          "id": "jallarzi-s-storm-of-radiance",
          "title": "Jallarzi's Storm of Radiance"
        },
        {
          "id": "jump",
          "title": "Jump"
        }
      ]
    },
    {
      "id": "k",
      "title": "K",
      "html": "<h3 class=\"rh-book-h\" id=\"k\">K</h3>\n<h4 class=\"rh-book-h\" id=\"knock\">Knock</h4>\n",
      "subsections": [
        {
          "id": "knock",
          "title": "Knock"
        }
      ]
    },
    {
      "id": "l",
      "title": "L",
      "html": "<h3 class=\"rh-book-h\" id=\"l\">L</h3>\n<h4 class=\"rh-book-h\" id=\"legend-lore\">Legend Lore</h4>\n<h4 class=\"rh-book-h\" id=\"leomund-s-secret-chest\">Leomund's Secret Chest</h4>\n<h4 class=\"rh-book-h\" id=\"leomund-s-tiny-hut\">Leomund's Tiny Hut</h4>\n<h4 class=\"rh-book-h\" id=\"lesser-restoration\">Lesser Restoration</h4>\n<h4 class=\"rh-book-h\" id=\"levitate\">Levitate</h4>\n<h4 class=\"rh-book-h\" id=\"light\">Light</h4>\n<h4 class=\"rh-book-h\" id=\"lightning-arrow\">Lightning Arrow</h4>\n<h4 class=\"rh-book-h\" id=\"lightning-bolt\">Lightning Bolt</h4>\n<h4 class=\"rh-book-h\" id=\"locate-animals-or-plants\">Locate Animals or Plants</h4>\n<h4 class=\"rh-book-h\" id=\"locate-creature\">Locate Creature</h4>\n<h4 class=\"rh-book-h\" id=\"locate-object\">Locate Object</h4>\n<h4 class=\"rh-book-h\" id=\"longstrider\">Longstrider</h4>\n",
      "subsections": [
        {
          "id": "legend-lore",
          "title": "Legend Lore"
        },
        {
          "id": "leomund-s-secret-chest",
          "title": "Leomund's Secret Chest"
        },
        {
          "id": "leomund-s-tiny-hut",
          "title": "Leomund's Tiny Hut"
        },
        {
          "id": "lesser-restoration",
          "title": "Lesser Restoration"
        },
        {
          "id": "levitate",
          "title": "Levitate"
        },
        {
          "id": "light",
          "title": "Light"
        },
        {
          "id": "lightning-arrow",
          "title": "Lightning Arrow"
        },
        {
          "id": "lightning-bolt",
          "title": "Lightning Bolt"
        },
        {
          "id": "locate-animals-or-plants",
          "title": "Locate Animals or Plants"
        },
        {
          "id": "locate-creature",
          "title": "Locate Creature"
        },
        {
          "id": "locate-object",
          "title": "Locate Object"
        },
        {
          "id": "longstrider",
          "title": "Longstrider"
        }
      ]
    },
    {
      "id": "m",
      "title": "M",
      "html": "<h3 class=\"rh-book-h\" id=\"m\">M</h3>\n<h4 class=\"rh-book-h\" id=\"mage-armor\">Mage Armor</h4>\n<h4 class=\"rh-book-h\" id=\"mage-hand\">Mage Hand</h4>\n<h4 class=\"rh-book-h\" id=\"magic-circle\">Magic Circle</h4>\n<h4 class=\"rh-book-h\" id=\"magic-jar\">Magic Jar</h4>\n<h4 class=\"rh-book-h\" id=\"magic-missile\">Magic Missile</h4>\n<h4 class=\"rh-book-h\" id=\"magic-mouth\">Magic Mouth</h4>\n<h4 class=\"rh-book-h\" id=\"magic-weapon\">Magic Weapon</h4>\n<h4 class=\"rh-book-h\" id=\"major-image\">Major Image</h4>\n<h4 class=\"rh-book-h\" id=\"mass-cure-wounds\">Mass Cure Wounds</h4>\n<h4 class=\"rh-book-h\" id=\"mass-heal\">Mass Heal</h4>\n<h4 class=\"rh-book-h\" id=\"mass-healing-word\">Mass Healing Word</h4>\n<h4 class=\"rh-book-h\" id=\"mass-suggestion\">Mass Suggestion</h4>\n<h4 class=\"rh-book-h\" id=\"maze\">Maze</h4>\n<h4 class=\"rh-book-h\" id=\"meld-into-stone\">Meld into Stone</h4>\n<h4 class=\"rh-book-h\" id=\"melf-s-acid-arrow\">Melf's Acid Arrow</h4>\n<h4 class=\"rh-book-h\" id=\"mending\">Mending</h4>\n<h4 class=\"rh-book-h\" id=\"message\">Message</h4>\n<h4 class=\"rh-book-h\" id=\"meteor-swarm\">Meteor Swarm</h4>\n<h4 class=\"rh-book-h\" id=\"mind-blank\">Mind Blank</h4>\n<h4 class=\"rh-book-h\" id=\"mind-sliver\">Mind Sliver</h4>\n<h4 class=\"rh-book-h\" id=\"mind-spike\">Mind Spike</h4>\n<h4 class=\"rh-book-h\" id=\"minor-illusion\">Minor Illusion</h4>\n<h4 class=\"rh-book-h\" id=\"mirage-arcane\">Mirage Arcane</h4>\n<h4 class=\"rh-book-h\" id=\"mirror-image\">Mirror Image</h4>\n<h4 class=\"rh-book-h\" id=\"mislead\">Mislead</h4>\n<h4 class=\"rh-book-h\" id=\"misty-step\">Misty Step</h4>\n<h4 class=\"rh-book-h\" id=\"modify-memory\">Modify Memory</h4>\n<h4 class=\"rh-book-h\" id=\"moonbeam\">Moonbeam</h4>\n<h4 class=\"rh-book-h\" id=\"mordenkainen-s-faithful-hound\">Mordenkainen's Faithful Hound</h4>\n<h4 class=\"rh-book-h\" id=\"mordenkainen-s-magnificent-mansion\">Mordenkainen's Magnificent Mansion</h4>\n<h4 class=\"rh-book-h\" id=\"mordenkainen-s-private-sanctum\">Mordenkainen's Private Sanctum</h4>\n<h4 class=\"rh-book-h\" id=\"mordenkainen-s-sword\">Mordenkainen's Sword</h4>\n<h4 class=\"rh-book-h\" id=\"move-earth\">Move Earth</h4>\n",
      "subsections": [
        {
          "id": "mage-armor",
          "title": "Mage Armor"
        },
        {
          "id": "mage-hand",
          "title": "Mage Hand"
        },
        {
          "id": "magic-circle",
          "title": "Magic Circle"
        },
        {
          "id": "magic-jar",
          "title": "Magic Jar"
        },
        {
          "id": "magic-missile",
          "title": "Magic Missile"
        },
        {
          "id": "magic-mouth",
          "title": "Magic Mouth"
        },
        {
          "id": "magic-weapon",
          "title": "Magic Weapon"
        },
        {
          "id": "major-image",
          "title": "Major Image"
        },
        {
          "id": "mass-cure-wounds",
          "title": "Mass Cure Wounds"
        },
        {
          "id": "mass-heal",
          "title": "Mass Heal"
        },
        {
          "id": "mass-healing-word",
          "title": "Mass Healing Word"
        },
        {
          "id": "mass-suggestion",
          "title": "Mass Suggestion"
        },
        {
          "id": "maze",
          "title": "Maze"
        },
        {
          "id": "meld-into-stone",
          "title": "Meld into Stone"
        },
        {
          "id": "melf-s-acid-arrow",
          "title": "Melf's Acid Arrow"
        },
        {
          "id": "mending",
          "title": "Mending"
        },
        {
          "id": "message",
          "title": "Message"
        },
        {
          "id": "meteor-swarm",
          "title": "Meteor Swarm"
        },
        {
          "id": "mind-blank",
          "title": "Mind Blank"
        },
        {
          "id": "mind-sliver",
          "title": "Mind Sliver"
        },
        {
          "id": "mind-spike",
          "title": "Mind Spike"
        },
        {
          "id": "minor-illusion",
          "title": "Minor Illusion"
        },
        {
          "id": "mirage-arcane",
          "title": "Mirage Arcane"
        },
        {
          "id": "mirror-image",
          "title": "Mirror Image"
        },
        {
          "id": "mislead",
          "title": "Mislead"
        },
        {
          "id": "misty-step",
          "title": "Misty Step"
        },
        {
          "id": "modify-memory",
          "title": "Modify Memory"
        },
        {
          "id": "moonbeam",
          "title": "Moonbeam"
        },
        {
          "id": "mordenkainen-s-faithful-hound",
          "title": "Mordenkainen's Faithful Hound"
        },
        {
          "id": "mordenkainen-s-magnificent-mansion",
          "title": "Mordenkainen's Magnificent Mansion"
        },
        {
          "id": "mordenkainen-s-private-sanctum",
          "title": "Mordenkainen's Private Sanctum"
        },
        {
          "id": "mordenkainen-s-sword",
          "title": "Mordenkainen's Sword"
        },
        {
          "id": "move-earth",
          "title": "Move Earth"
        }
      ]
    },
    {
      "id": "n",
      "title": "N",
      "html": "<h3 class=\"rh-book-h\" id=\"n\">N</h3>\n<h4 class=\"rh-book-h\" id=\"nondetection\">Nondetection</h4>\n<h4 class=\"rh-book-h\" id=\"nystul-s-magic-aura\">Nystul's Magic Aura</h4>\n",
      "subsections": [
        {
          "id": "nondetection",
          "title": "Nondetection"
        },
        {
          "id": "nystul-s-magic-aura",
          "title": "Nystul's Magic Aura"
        }
      ]
    },
    {
      "id": "o",
      "title": "O",
      "html": "<h3 class=\"rh-book-h\" id=\"o\">O</h3>\n<h4 class=\"rh-book-h\" id=\"otiluke-s-freezing-sphere\">Otiluke's Freezing Sphere</h4>\n<h4 class=\"rh-book-h\" id=\"otiluke-s-resilient-sphere\">Otiluke's Resilient Sphere</h4>\n<h4 class=\"rh-book-h\" id=\"otto-s-irresistible-dance\">Otto's Irresistible Dance</h4>\n",
      "subsections": [
        {
          "id": "otiluke-s-freezing-sphere",
          "title": "Otiluke's Freezing Sphere"
        },
        {
          "id": "otiluke-s-resilient-sphere",
          "title": "Otiluke's Resilient Sphere"
        },
        {
          "id": "otto-s-irresistible-dance",
          "title": "Otto's Irresistible Dance"
        }
      ]
    },
    {
      "id": "p",
      "title": "P",
      "html": "<h3 class=\"rh-book-h\" id=\"p\">P</h3>\n<h4 class=\"rh-book-h\" id=\"pass-without-trace\">Pass without Trace</h4>\n<h4 class=\"rh-book-h\" id=\"passwall\">Passwall</h4>\n<h4 class=\"rh-book-h\" id=\"phantasmal-force\">Phantasmal Force</h4>\n<h4 class=\"rh-book-h\" id=\"phantasmal-killer\">Phantasmal Killer</h4>\n<h4 class=\"rh-book-h\" id=\"phantom-steed\">Phantom Steed</h4>\n<h4 class=\"rh-book-h\" id=\"planar-ally\">Planar Ally</h4>\n<h4 class=\"rh-book-h\" id=\"planar-binding\">Planar Binding</h4>\n<h4 class=\"rh-book-h\" id=\"plane-shift\">Plane Shift</h4>\n<h4 class=\"rh-book-h\" id=\"plant-growth\">Plant Growth</h4>\n<h4 class=\"rh-book-h\" id=\"poison-spray\">Poison Spray</h4>\n<h4 class=\"rh-book-h\" id=\"polymorph\">Polymorph</h4>\n<h4 class=\"rh-book-h\" id=\"power-word-fortify\">Power Word Fortify</h4>\n<h4 class=\"rh-book-h\" id=\"power-word-heal\">Power Word Heal</h4>\n<h4 class=\"rh-book-h\" id=\"power-word-kill\">Power Word Kill</h4>\n<h4 class=\"rh-book-h\" id=\"power-word-stun\">Power Word Stun</h4>\n<h4 class=\"rh-book-h\" id=\"prayer-of-healing\">Prayer of Healing</h4>\n<h4 class=\"rh-book-h\" id=\"prestidigitation\">Prestidigitation</h4>\n<h4 class=\"rh-book-h\" id=\"prismatic-spray\">Prismatic Spray</h4>\n<h4 class=\"rh-book-h\" id=\"prismatic-wall\">Prismatic Wall</h4>\n<h4 class=\"rh-book-h\" id=\"produce-flame\">Produce Flame</h4>\n<h4 class=\"rh-book-h\" id=\"programmed-illusion\">Programmed Illusion</h4>\n<h4 class=\"rh-book-h\" id=\"project-image\">Project Image</h4>\n<h4 class=\"rh-book-h\" id=\"protection-from-energy\">Protection from Energy</h4>\n<h4 class=\"rh-book-h\" id=\"protection-from-evil-and-good\">Protection from Evil and Good</h4>\n<h4 class=\"rh-book-h\" id=\"protection-from-poison\">Protection from Poison</h4>\n<h4 class=\"rh-book-h\" id=\"purify-food-and-drink\">Purify Food and Drink</h4>\n",
      "subsections": [
        {
          "id": "pass-without-trace",
          "title": "Pass without Trace"
        },
        {
          "id": "passwall",
          "title": "Passwall"
        },
        {
          "id": "phantasmal-force",
          "title": "Phantasmal Force"
        },
        {
          "id": "phantasmal-killer",
          "title": "Phantasmal Killer"
        },
        {
          "id": "phantom-steed",
          "title": "Phantom Steed"
        },
        {
          "id": "planar-ally",
          "title": "Planar Ally"
        },
        {
          "id": "planar-binding",
          "title": "Planar Binding"
        },
        {
          "id": "plane-shift",
          "title": "Plane Shift"
        },
        {
          "id": "plant-growth",
          "title": "Plant Growth"
        },
        {
          "id": "poison-spray",
          "title": "Poison Spray"
        },
        {
          "id": "polymorph",
          "title": "Polymorph"
        },
        {
          "id": "power-word-fortify",
          "title": "Power Word Fortify"
        },
        {
          "id": "power-word-heal",
          "title": "Power Word Heal"
        },
        {
          "id": "power-word-kill",
          "title": "Power Word Kill"
        },
        {
          "id": "power-word-stun",
          "title": "Power Word Stun"
        },
        {
          "id": "prayer-of-healing",
          "title": "Prayer of Healing"
        },
        {
          "id": "prestidigitation",
          "title": "Prestidigitation"
        },
        {
          "id": "prismatic-spray",
          "title": "Prismatic Spray"
        },
        {
          "id": "prismatic-wall",
          "title": "Prismatic Wall"
        },
        {
          "id": "produce-flame",
          "title": "Produce Flame"
        },
        {
          "id": "programmed-illusion",
          "title": "Programmed Illusion"
        },
        {
          "id": "project-image",
          "title": "Project Image"
        },
        {
          "id": "protection-from-energy",
          "title": "Protection from Energy"
        },
        {
          "id": "protection-from-evil-and-good",
          "title": "Protection from Evil and Good"
        },
        {
          "id": "protection-from-poison",
          "title": "Protection from Poison"
        },
        {
          "id": "purify-food-and-drink",
          "title": "Purify Food and Drink"
        }
      ]
    },
    {
      "id": "r",
      "title": "R",
      "html": "<h3 class=\"rh-book-h\" id=\"r\">R</h3>\n<h4 class=\"rh-book-h\" id=\"raise-dead\">Raise Dead</h4>\n<h4 class=\"rh-book-h\" id=\"rary-s-telepathic-bond\">Rary's Telepathic Bond</h4>\n<h4 class=\"rh-book-h\" id=\"ray-of-enfeeblement\">Ray of Enfeeblement</h4>\n<h4 class=\"rh-book-h\" id=\"ray-of-frost\">Ray of Frost</h4>\n<h4 class=\"rh-book-h\" id=\"ray-of-sickness\">Ray of Sickness</h4>\n<h4 class=\"rh-book-h\" id=\"regenerate\">Regenerate</h4>\n<h4 class=\"rh-book-h\" id=\"reincarnate\">Reincarnate</h4>\n<h4 class=\"rh-book-h\" id=\"remove-curse\">Remove Curse</h4>\n<h4 class=\"rh-book-h\" id=\"resistance\">Resistance</h4>\n<h4 class=\"rh-book-h\" id=\"resurrection\">Resurrection</h4>\n<h4 class=\"rh-book-h\" id=\"reverse-gravity\">Reverse Gravity</h4>\n<h4 class=\"rh-book-h\" id=\"revivify\">Revivify</h4>\n<h4 class=\"rh-book-h\" id=\"rope-trick\">Rope Trick</h4>\n",
      "subsections": [
        {
          "id": "raise-dead",
          "title": "Raise Dead"
        },
        {
          "id": "rary-s-telepathic-bond",
          "title": "Rary's Telepathic Bond"
        },
        {
          "id": "ray-of-enfeeblement",
          "title": "Ray of Enfeeblement"
        },
        {
          "id": "ray-of-frost",
          "title": "Ray of Frost"
        },
        {
          "id": "ray-of-sickness",
          "title": "Ray of Sickness"
        },
        {
          "id": "regenerate",
          "title": "Regenerate"
        },
        {
          "id": "reincarnate",
          "title": "Reincarnate"
        },
        {
          "id": "remove-curse",
          "title": "Remove Curse"
        },
        {
          "id": "resistance",
          "title": "Resistance"
        },
        {
          "id": "resurrection",
          "title": "Resurrection"
        },
        {
          "id": "reverse-gravity",
          "title": "Reverse Gravity"
        },
        {
          "id": "revivify",
          "title": "Revivify"
        },
        {
          "id": "rope-trick",
          "title": "Rope Trick"
        }
      ]
    },
    {
      "id": "s",
      "title": "S",
      "html": "<h3 class=\"rh-book-h\" id=\"s\">S</h3>\n<h4 class=\"rh-book-h\" id=\"sacred-flame\">Sacred Flame</h4>\n<h4 class=\"rh-book-h\" id=\"sanctuary\">Sanctuary</h4>\n<h4 class=\"rh-book-h\" id=\"scorching-ray\">Scorching Ray</h4>\n<h4 class=\"rh-book-h\" id=\"scrying\">Scrying</h4>\n<h4 class=\"rh-book-h\" id=\"searing-smite\">Searing Smite</h4>\n<h4 class=\"rh-book-h\" id=\"see-invisibility\">See Invisibility</h4>\n<h4 class=\"rh-book-h\" id=\"seeming\">Seeming</h4>\n<h4 class=\"rh-book-h\" id=\"sending\">Sending</h4>\n<h4 class=\"rh-book-h\" id=\"sequester\">Sequester</h4>\n<h4 class=\"rh-book-h\" id=\"shapechange\">Shapechange</h4>\n<h4 class=\"rh-book-h\" id=\"shatter\">Shatter</h4>\n<h4 class=\"rh-book-h\" id=\"shield\">Shield</h4>\n<h4 class=\"rh-book-h\" id=\"shield-of-faith\">Shield of Faith</h4>\n<h4 class=\"rh-book-h\" id=\"shillelagh\">Shillelagh</h4>\n<h4 class=\"rh-book-h\" id=\"shining-smite\">Shining Smite</h4>\n<h4 class=\"rh-book-h\" id=\"shocking-grasp\">Shocking Grasp</h4>\n<h4 class=\"rh-book-h\" id=\"silence\">Silence</h4>\n<h4 class=\"rh-book-h\" id=\"silent-image\">Silent Image</h4>\n<h4 class=\"rh-book-h\" id=\"simulacrum\">Simulacrum</h4>\n<h4 class=\"rh-book-h\" id=\"sleep\">Sleep</h4>\n<h4 class=\"rh-book-h\" id=\"sleet-storm\">Sleet Storm</h4>\n<h4 class=\"rh-book-h\" id=\"slow\">Slow</h4>\n<h4 class=\"rh-book-h\" id=\"sorcerous-burst\">Sorcerous Burst</h4>\n<h4 class=\"rh-book-h\" id=\"spare-the-dying\">Spare the Dying</h4>\n<h4 class=\"rh-book-h\" id=\"speak-with-animals\">Speak with Animals</h4>\n<h4 class=\"rh-book-h\" id=\"speak-with-dead\">Speak with Dead</h4>\n<h4 class=\"rh-book-h\" id=\"speak-with-plants\">Speak with Plants</h4>\n<h4 class=\"rh-book-h\" id=\"spider-climb\">Spider Climb</h4>\n<h4 class=\"rh-book-h\" id=\"spike-growth\">Spike Growth</h4>\n<h4 class=\"rh-book-h\" id=\"spirit-guardians\">Spirit Guardians</h4>\n<h4 class=\"rh-book-h\" id=\"spiritual-weapon\">Spiritual Weapon</h4>\n<h4 class=\"rh-book-h\" id=\"staggering-smite\">Staggering Smite</h4>\n<h4 class=\"rh-book-h\" id=\"starry-wisp\">Starry Wisp</h4>\n<h4 class=\"rh-book-h\" id=\"steel-wind-strike\">Steel Wind Strike</h4>\n<h4 class=\"rh-book-h\" id=\"stinking-cloud\">Stinking Cloud</h4>\n<h4 class=\"rh-book-h\" id=\"stone-shape\">Stone Shape</h4>\n<h4 class=\"rh-book-h\" id=\"stoneskin\">Stoneskin</h4>\n<h4 class=\"rh-book-h\" id=\"storm-of-vengeance\">Storm of Vengeance</h4>\n<h4 class=\"rh-book-h\" id=\"suggestion\">Suggestion</h4>\n<h4 class=\"rh-book-h\" id=\"summon-aberration\">Summon Aberration</h4>\n<h4 class=\"rh-book-h\" id=\"summon-beast\">Summon Beast</h4>\n<h4 class=\"rh-book-h\" id=\"summon-celestial\">Summon Celestial</h4>\n<h4 class=\"rh-book-h\" id=\"summon-construct\">Summon Construct</h4>\n<h4 class=\"rh-book-h\" id=\"summon-dragon\">Summon Dragon</h4>\n<h4 class=\"rh-book-h\" id=\"summon-elemental\">Summon Elemental</h4>\n<h4 class=\"rh-book-h\" id=\"summon-fey\">Summon Fey</h4>\n<h4 class=\"rh-book-h\" id=\"summon-fiend\">Summon Fiend</h4>\n<h4 class=\"rh-book-h\" id=\"summon-undead\">Summon Undead</h4>\n<h4 class=\"rh-book-h\" id=\"sunbeam\">Sunbeam</h4>\n<h4 class=\"rh-book-h\" id=\"sunburst\">Sunburst</h4>\n<h4 class=\"rh-book-h\" id=\"swift-quiver\">Swift Quiver</h4>\n<h4 class=\"rh-book-h\" id=\"symbol\">Symbol</h4>\n<h4 class=\"rh-book-h\" id=\"synaptic-static\">Synaptic Static</h4>\n",
      "subsections": [
        {
          "id": "sacred-flame",
          "title": "Sacred Flame"
        },
        {
          "id": "sanctuary",
          "title": "Sanctuary"
        },
        {
          "id": "scorching-ray",
          "title": "Scorching Ray"
        },
        {
          "id": "scrying",
          "title": "Scrying"
        },
        {
          "id": "searing-smite",
          "title": "Searing Smite"
        },
        {
          "id": "see-invisibility",
          "title": "See Invisibility"
        },
        {
          "id": "seeming",
          "title": "Seeming"
        },
        {
          "id": "sending",
          "title": "Sending"
        },
        {
          "id": "sequester",
          "title": "Sequester"
        },
        {
          "id": "shapechange",
          "title": "Shapechange"
        },
        {
          "id": "shatter",
          "title": "Shatter"
        },
        {
          "id": "shield",
          "title": "Shield"
        },
        {
          "id": "shield-of-faith",
          "title": "Shield of Faith"
        },
        {
          "id": "shillelagh",
          "title": "Shillelagh"
        },
        {
          "id": "shining-smite",
          "title": "Shining Smite"
        },
        {
          "id": "shocking-grasp",
          "title": "Shocking Grasp"
        },
        {
          "id": "silence",
          "title": "Silence"
        },
        {
          "id": "silent-image",
          "title": "Silent Image"
        },
        {
          "id": "simulacrum",
          "title": "Simulacrum"
        },
        {
          "id": "sleep",
          "title": "Sleep"
        },
        {
          "id": "sleet-storm",
          "title": "Sleet Storm"
        },
        {
          "id": "slow",
          "title": "Slow"
        },
        {
          "id": "sorcerous-burst",
          "title": "Sorcerous Burst"
        },
        {
          "id": "spare-the-dying",
          "title": "Spare the Dying"
        },
        {
          "id": "speak-with-animals",
          "title": "Speak with Animals"
        },
        {
          "id": "speak-with-dead",
          "title": "Speak with Dead"
        },
        {
          "id": "speak-with-plants",
          "title": "Speak with Plants"
        },
        {
          "id": "spider-climb",
          "title": "Spider Climb"
        },
        {
          "id": "spike-growth",
          "title": "Spike Growth"
        },
        {
          "id": "spirit-guardians",
          "title": "Spirit Guardians"
        },
        {
          "id": "spiritual-weapon",
          "title": "Spiritual Weapon"
        },
        {
          "id": "staggering-smite",
          "title": "Staggering Smite"
        },
        {
          "id": "starry-wisp",
          "title": "Starry Wisp"
        },
        {
          "id": "steel-wind-strike",
          "title": "Steel Wind Strike"
        },
        {
          "id": "stinking-cloud",
          "title": "Stinking Cloud"
        },
        {
          "id": "stone-shape",
          "title": "Stone Shape"
        },
        {
          "id": "stoneskin",
          "title": "Stoneskin"
        },
        {
          "id": "storm-of-vengeance",
          "title": "Storm of Vengeance"
        },
        {
          "id": "suggestion",
          "title": "Suggestion"
        },
        {
          "id": "summon-aberration",
          "title": "Summon Aberration"
        },
        {
          "id": "summon-beast",
          "title": "Summon Beast"
        },
        {
          "id": "summon-celestial",
          "title": "Summon Celestial"
        },
        {
          "id": "summon-construct",
          "title": "Summon Construct"
        },
        {
          "id": "summon-dragon",
          "title": "Summon Dragon"
        },
        {
          "id": "summon-elemental",
          "title": "Summon Elemental"
        },
        {
          "id": "summon-fey",
          "title": "Summon Fey"
        },
        {
          "id": "summon-fiend",
          "title": "Summon Fiend"
        },
        {
          "id": "summon-undead",
          "title": "Summon Undead"
        },
        {
          "id": "sunbeam",
          "title": "Sunbeam"
        },
        {
          "id": "sunburst",
          "title": "Sunburst"
        },
        {
          "id": "swift-quiver",
          "title": "Swift Quiver"
        },
        {
          "id": "symbol",
          "title": "Symbol"
        },
        {
          "id": "synaptic-static",
          "title": "Synaptic Static"
        }
      ]
    },
    {
      "id": "t",
      "title": "T",
      "html": "<h3 class=\"rh-book-h\" id=\"t\">T</h3>\n<h4 class=\"rh-book-h\" id=\"tasha-s-bubbling-cauldron\">Tasha's Bubbling Cauldron</h4>\n<h4 class=\"rh-book-h\" id=\"tasha-s-hideous-laughter\">Tasha's Hideous Laughter</h4>\n<h4 class=\"rh-book-h\" id=\"telekinesis\">Telekinesis</h4>\n<h4 class=\"rh-book-h\" id=\"telepathy\">Telepathy</h4>\n<h4 class=\"rh-book-h\" id=\"teleport\">Teleport</h4>\n<h4 class=\"rh-book-h\" id=\"teleportation-circle\">Teleportation Circle</h4>\n<h4 class=\"rh-book-h\" id=\"tenser-s-floating-disk\">Tenser's Floating Disk</h4>\n<h4 class=\"rh-book-h\" id=\"thaumaturgy\">Thaumaturgy</h4>\n<h4 class=\"rh-book-h\" id=\"thorn-whip\">Thorn Whip</h4>\n<h4 class=\"rh-book-h\" id=\"thunderclap\">Thunderclap</h4>\n<h4 class=\"rh-book-h\" id=\"thunderous-smite\">Thunderous Smite</h4>\n<h4 class=\"rh-book-h\" id=\"thunderwave\">Thunderwave</h4>\n<h4 class=\"rh-book-h\" id=\"time-stop\">Time Stop</h4>\n<h4 class=\"rh-book-h\" id=\"toll-the-dead\">Toll the Dead</h4>\n<h4 class=\"rh-book-h\" id=\"tongues\">Tongues</h4>\n<h4 class=\"rh-book-h\" id=\"transport-via-plants\">Transport via Plants</h4>\n<h4 class=\"rh-book-h\" id=\"tree-stride\">Tree Stride</h4>\n<h4 class=\"rh-book-h\" id=\"true-polymorph\">True Polymorph</h4>\n<h4 class=\"rh-book-h\" id=\"true-resurrection\">True Resurrection</h4>\n<h4 class=\"rh-book-h\" id=\"true-seeing\">True Seeing</h4>\n<h4 class=\"rh-book-h\" id=\"true-strike\">True Strike</h4>\n<h4 class=\"rh-book-h\" id=\"tsunami\">Tsunami</h4>\n",
      "subsections": [
        {
          "id": "tasha-s-bubbling-cauldron",
          "title": "Tasha's Bubbling Cauldron"
        },
        {
          "id": "tasha-s-hideous-laughter",
          "title": "Tasha's Hideous Laughter"
        },
        {
          "id": "telekinesis",
          "title": "Telekinesis"
        },
        {
          "id": "telepathy",
          "title": "Telepathy"
        },
        {
          "id": "teleport",
          "title": "Teleport"
        },
        {
          "id": "teleportation-circle",
          "title": "Teleportation Circle"
        },
        {
          "id": "tenser-s-floating-disk",
          "title": "Tenser's Floating Disk"
        },
        {
          "id": "thaumaturgy",
          "title": "Thaumaturgy"
        },
        {
          "id": "thorn-whip",
          "title": "Thorn Whip"
        },
        {
          "id": "thunderclap",
          "title": "Thunderclap"
        },
        {
          "id": "thunderous-smite",
          "title": "Thunderous Smite"
        },
        {
          "id": "thunderwave",
          "title": "Thunderwave"
        },
        {
          "id": "time-stop",
          "title": "Time Stop"
        },
        {
          "id": "toll-the-dead",
          "title": "Toll the Dead"
        },
        {
          "id": "tongues",
          "title": "Tongues"
        },
        {
          "id": "transport-via-plants",
          "title": "Transport via Plants"
        },
        {
          "id": "tree-stride",
          "title": "Tree Stride"
        },
        {
          "id": "true-polymorph",
          "title": "True Polymorph"
        },
        {
          "id": "true-resurrection",
          "title": "True Resurrection"
        },
        {
          "id": "true-seeing",
          "title": "True Seeing"
        },
        {
          "id": "true-strike",
          "title": "True Strike"
        },
        {
          "id": "tsunami",
          "title": "Tsunami"
        }
      ]
    },
    {
      "id": "u",
      "title": "U",
      "html": "<h3 class=\"rh-book-h\" id=\"u\">U</h3>\n<h4 class=\"rh-book-h\" id=\"unseen-servant\">Unseen Servant</h4>\n",
      "subsections": [
        {
          "id": "unseen-servant",
          "title": "Unseen Servant"
        }
      ]
    },
    {
      "id": "v",
      "title": "V",
      "html": "<h3 class=\"rh-book-h\" id=\"v\">V</h3>\n<h4 class=\"rh-book-h\" id=\"vampiric-touch\">Vampiric Touch</h4>\n<h4 class=\"rh-book-h\" id=\"vicious-mockery\">Vicious Mockery</h4>\n<h4 class=\"rh-book-h\" id=\"vitriolic-sphere\">Vitriolic Sphere</h4>\n",
      "subsections": [
        {
          "id": "vampiric-touch",
          "title": "Vampiric Touch"
        },
        {
          "id": "vicious-mockery",
          "title": "Vicious Mockery"
        },
        {
          "id": "vitriolic-sphere",
          "title": "Vitriolic Sphere"
        }
      ]
    },
    {
      "id": "w",
      "title": "W",
      "html": "<h3 class=\"rh-book-h\" id=\"w\">W</h3>\n<h4 class=\"rh-book-h\" id=\"wall-of-fire\">Wall of Fire</h4>\n<h4 class=\"rh-book-h\" id=\"wall-of-force\">Wall of Force</h4>\n<h4 class=\"rh-book-h\" id=\"wall-of-ice\">Wall of Ice</h4>\n<h4 class=\"rh-book-h\" id=\"wall-of-stone\">Wall of Stone</h4>\n<h4 class=\"rh-book-h\" id=\"wall-of-thorns\">Wall of Thorns</h4>\n<h4 class=\"rh-book-h\" id=\"warding-bond\">Warding Bond</h4>\n<h4 class=\"rh-book-h\" id=\"water-breathing\">Water Breathing</h4>\n<h4 class=\"rh-book-h\" id=\"water-walk\">Water Walk</h4>\n<h4 class=\"rh-book-h\" id=\"web\">Web</h4>\n<h4 class=\"rh-book-h\" id=\"weird\">Weird</h4>\n<h4 class=\"rh-book-h\" id=\"wind-walk\">Wind Walk</h4>\n<h4 class=\"rh-book-h\" id=\"wind-wall\">Wind Wall</h4>\n<h4 class=\"rh-book-h\" id=\"wish\">Wish</h4>\n<h4 class=\"rh-book-h\" id=\"witch-bolt\">Witch Bolt</h4>\n<h4 class=\"rh-book-h\" id=\"word-of-radiance\">Word of Radiance</h4>\n<h4 class=\"rh-book-h\" id=\"word-of-recall\">Word of Recall</h4>\n<h4 class=\"rh-book-h\" id=\"wrathful-smite\">Wrathful Smite</h4>\n",
      "subsections": [
        {
          "id": "wall-of-fire",
          "title": "Wall of Fire"
        },
        {
          "id": "wall-of-force",
          "title": "Wall of Force"
        },
        {
          "id": "wall-of-ice",
          "title": "Wall of Ice"
        },
        {
          "id": "wall-of-stone",
          "title": "Wall of Stone"
        },
        {
          "id": "wall-of-thorns",
          "title": "Wall of Thorns"
        },
        {
          "id": "warding-bond",
          "title": "Warding Bond"
        },
        {
          "id": "water-breathing",
          "title": "Water Breathing"
        },
        {
          "id": "water-walk",
          "title": "Water Walk"
        },
        {
          "id": "web",
          "title": "Web"
        },
        {
          "id": "weird",
          "title": "Weird"
        },
        {
          "id": "wind-walk",
          "title": "Wind Walk"
        },
        {
          "id": "wind-wall",
          "title": "Wind Wall"
        },
        {
          "id": "wish",
          "title": "Wish"
        },
        {
          "id": "witch-bolt",
          "title": "Witch Bolt"
        },
        {
          "id": "word-of-radiance",
          "title": "Word of Radiance"
        },
        {
          "id": "word-of-recall",
          "title": "Word of Recall"
        },
        {
          "id": "wrathful-smite",
          "title": "Wrathful Smite"
        }
      ]
    },
    {
      "id": "y",
      "title": "Y",
      "html": "<h3 class=\"rh-book-h\" id=\"y\">Y</h3>\n<h4 class=\"rh-book-h\" id=\"yolande-s-regal-presence\">Yolande's Regal Presence</h4>\n",
      "subsections": [
        {
          "id": "yolande-s-regal-presence",
          "title": "Yolande's Regal Presence"
        }
      ]
    },
    {
      "id": "z",
      "title": "Z",
      "html": "<h3 class=\"rh-book-h\" id=\"z\">Z</h3>\n<h4 class=\"rh-book-h\" id=\"zone-of-truth\">Zone of Truth</h4>\n",
      "subsections": [
        {
          "id": "zone-of-truth",
          "title": "Zone of Truth"
        }
      ]
    }
  ],
  "html": "<p class=\"rh-book-p\">This chapter gives rules for casting spells. It also includes descriptions of common spells in the worlds of Dungeons & Dragons. Those spells are used by many class features, magic items, and monsters.</p>\n<h3 class=\"rh-book-h\" id=\"gaining-spells\">Gaining Spells</h3>\n<p class=\"rh-book-p\">Before you can cast a spell, you must have the spell prepared in your mind or have access to the spell from a magic item, such as a <span class=\"rh-ref-link\" data-ref=\"item\">item</span>. Your features specify which spells you have access to, if any; whether you always have certain spells prepared; and whether you can change the list of spells you have prepared.</p>\n<h4 class=\"rh-book-h\" id=\"preparing-spells\">Preparing Spells</h4>\n<p class=\"rh-book-p\">If you have a list of level 1+ spells you prepare, your spellcasting feature specifies when you can change the list and the number of spells you can change, as summarized in the Spell Preparation by Class table.</p>\n<div class=\"rh-book-table-wrap\">\n<table class=\"rh-book-table\">\n  <caption>Spell Preparation by Class</caption>\n  <thead><tr><th>Class</th><th>Change When You...</th><th>Number of Spells</th></tr></thead>\n  <tbody>\n    <tr><td>Bard</td><td>Gain a level</td><td>One</td></tr>\n    <tr><td>Cleric</td><td>Finish a Long Rest</td><td>Any</td></tr>\n    <tr><td>Druid</td><td>Finish a Long Rest</td><td>Any</td></tr>\n    <tr><td>Paladin</td><td>Finish a Long Rest</td><td>One</td></tr>\n    <tr><td>Ranger</td><td>Finish a Long Rest</td><td>One</td></tr>\n    <tr><td>Sorcerer</td><td>Gain a level</td><td>One</td></tr>\n    <tr><td>Warlock</td><td>Gain a level</td><td>One</td></tr>\n    <tr><td>Wizard</td><td>Finish a Long Rest</td><td>Any</td></tr>\n  </tbody>\n</table>\n</div>\n<p class=\"rh-book-p\">Most spellcasting monsters don't change their lists of prepared spells, but the DM is free to alter them.</p>\n<h4 class=\"rh-book-h\" id=\"always-prepared-spells\">Always-Prepared Spells</h4>\n<p class=\"rh-book-p\">Certain features might give you a spell that you always have prepared. If you also have a list of prepared spells that you can change, a spell that you always have prepared doesn't count against the number of spells on that list.</p>\n<aside class=\"rh-book-inset\">\n  <h4 class=\"rh-inset-title\">Casting in Armor</h4>\n<p class=\"rh-book-p\">You must have training with any armor you are wearing to cast spells while wearing it. You are otherwise too hampered by the armor for spellcasting.</p>\n</aside>\n<h3 class=\"rh-book-h\" id=\"casting-spells\">Casting Spells</h3>\n<p class=\"rh-book-p\">Each spell description has a series of entries that provide the details needed to cast the spell. The following sections explain each of those entries, which follow a spell's name.</p>\n<h4 class=\"rh-book-h\" id=\"spell-level\">Spell Level</h4>\n<p class=\"rh-book-p\">Every spell has a level from 0 to 9, which is indicated in a spell's description. A spell's level is an indicator of how powerful it is. Cantrips—simple spells that can be cast almost by rote—are level 0. The rules for each spellcasting class say when its members gain access to spells of certain levels.</p>\n<h5 class=\"rh-book-h\" id=\"spell-slots\">Spell Slots</h5>\n<p class=\"rh-book-p\">Spellcasting is taxing, so a spellcaster can cast only a limited number of level 1+ spells before resting. Spell slots are the main way a spellcaster's magical potential is represented. Each spellcasting class gives its members a limited number of spell slots of certain spell levels. For example, a level 3 Wizard has four level 1 spell slots and two level 2 slots.</p>\n<p class=\"rh-book-p\">When you cast a spell, you expend a slot of that spell's level or higher, effectively \"filling\" a slot with the spell. Imagine a spell slot is a groove of a certain size—small for a level 1 slot and larger for a higher-level spell. A level 1 spell fits into a slot of any size, but a level 2 spell fits only into a slot that's at least level 2. So when a level 3 Wizard casts <span class=\"rh-ref-link\" data-ref=\"spell\">spell</span>, a level 1 spell, that Wizard spends one of four level 1 slots and has three remaining.</p>\n<p class=\"rh-book-p\">Finishing a Long Rest restores any expended spell slots.</p>\n<h5 class=\"rh-book-h\" id=\"casting-without-slots\">Casting without Slots</h5>\n<p class=\"rh-book-p\">There are several ways to cast a spell without expending a spell slot:</p>\n<ul class=\"rh-book-list\">\n  <li><b>Cantrips.</b> A cantrip is cast without a spell slot.</li>\n  <li><b>Rituals.</b> Certain spells have the Ritual tag in the Casting Time entry. Such a spell can be cast following the normal rules for spellcasting, or it can be cast as a Ritual. The Ritual version of a spell takes 10 minutes longer to cast than normal, but it doesn't expend a spell slot. To cast a spell as a Ritual, a spellcaster must have it prepared.</li>\n  <li><b>Special Abilities.</b> Some characters and monsters have special abilities that allow them to cast specific spells without a spell slot. This casting is usually limited in another way, such as being able to cast the spell a limited number of times per day.</li>\n  <li><b>Magic Items.</b> <span class=\"rh-ref-link\" data-ref=\"item\">item</span> and some other magic items contain spells that can be cast without a spell slot. The description of such an item specifies how many times a spell can be cast from it.</li>\n</ul>\n<h5 class=\"rh-book-h\" id=\"using-a-higher-level-spell-slot\">Using a Higher-Level Spell Slot</h5>\n<p class=\"rh-book-p\">When a spellcaster casts a spell using a slot that is of a higher level than the spell, the spell takes on the higher level for that casting. For instance, if a Wizard casts <span class=\"rh-ref-link\" data-ref=\"spell\">spell</span> using a level 2 slot, that <span class=\"rh-ref-link\" data-ref=\"spell\">spell</span> is level 2. Effectively, the spell expands to fill the slot it is put into.</p>\n<p class=\"rh-book-p\">Some spells, such as <span class=\"rh-ref-link\" data-ref=\"spell\">spell</span> and <span class=\"rh-ref-link\" data-ref=\"spell\">spell</span>, have more powerful effects when cast at a higher level, as detailed in a spell's description.</p>\n<h4 class=\"rh-book-h\" id=\"school-of-magic\">School of Magic</h4>\n<p class=\"rh-book-p\">Each spell belongs to a school of magic. The schools are listed in the Schools of Magic table. These categories help describe spells but have no rules of their own, although some other rules refer to them.</p>\n<div class=\"rh-book-table-wrap\">\n<table class=\"rh-book-table\">\n  <caption>Schools of Magic</caption>\n  <thead><tr><th>School</th><th>Typical Effects</th></tr></thead>\n  <tbody>\n    <tr><td>Abjuration</td><td>Prevents or reverses harmful effects</td></tr>\n    <tr><td>Conjuration</td><td>Transports creatures or objects</td></tr>\n    <tr><td>Divination</td><td>Reveals information</td></tr>\n    <tr><td>Enchantment</td><td>Influences minds</td></tr>\n    <tr><td>Evocation</td><td>Channels energy to create effects that are often destructive</td></tr>\n    <tr><td>Illusion</td><td>Deceives the mind or senses</td></tr>\n    <tr><td>Necromancy</td><td>Manipulates life and death</td></tr>\n    <tr><td>Transmutation</td><td>Transforms creatures or objects</td></tr>\n  </tbody>\n</table>\n</div>\n<h4 class=\"rh-book-h\" id=\"class-spell-lists\">Class Spell Lists</h4>\n<p class=\"rh-book-p\">If a spell is on a class's spell list, the class's name appears in parentheses after the spell's school of magic. Some features add a spell to a character's spell list even if the character isn't a member of a class in the parentheses.</p>\n<h4 class=\"rh-book-h\" id=\"casting-time\">Casting Time</h4>\n<p class=\"rh-book-p\">Most spells require the <span class=\"rh-ref-link\" data-ref=\"action\">action</span> action to cast, but some spells require a Bonus Action, a Reaction, or 1 minute or more. A spell's Casting Time entry specifies which of those is required.</p>\n<h5 class=\"rh-book-h\" id=\"one-spell-with-a-spell-slot-per-turn\">One Spell with a Spell Slot per Turn</h5>\n<p class=\"rh-book-p\">On a turn, you can expend only one spell slot to cast a spell. This rule means you can't, for example, cast a spell with a spell slot using the <span class=\"rh-ref-link\" data-ref=\"action\">action</span> action and another one using a Bonus Action on the same turn.</p>\n<h5 class=\"rh-book-h\" id=\"reaction-and-bonus-action-triggers\">Reaction and Bonus Action Triggers</h5>\n<p class=\"rh-book-p\">A spell that has a casting time of a Reaction is cast in response to a trigger that is defined in the spell's Casting Time entry. Some spells that have a casting time of a Bonus Action are also cast in response to a trigger defined in the spell.</p>\n<h5 class=\"rh-book-h\" id=\"longer-casting-times\">Longer Casting Times</h5>\n<p class=\"rh-book-p\">Certain spells—including a spell cast as a Ritual—require more time to cast: minutes or even hours. While you cast a spell with a casting time of 1 minute or more, you must take the <span class=\"rh-ref-link\" data-ref=\"action\">action</span> action on each of your turns, and you must maintain Concentration while you do so. If your Concentration is broken, the spell fails, but you don't expend a spell slot. To cast the spell again, you must start over.</p>\n<h4 class=\"rh-book-h\" id=\"range\">Range</h4>\n<p class=\"rh-book-p\">A spell's range indicates how far from the spellcaster the spell's effect can originate, and the spell's description specifies which part of the effect is limited by the range.</p>\n<p class=\"rh-book-p\">A range usually takes one of the following forms:</p>\n<ul class=\"rh-book-list\">\n  <li><b>Distance.</b> The range is expressed in feet.</li>\n  <li><b>Touch.</b> The spell's effect originates on something the spellcaster must touch, as defined in the spell.</li>\n  <li><b>Self.</b> The spell is cast on the spellcaster or emanates from them, as specified in the spell.</li>\n</ul>\n<p class=\"rh-book-p\">If a spell has movable effects, they aren't restricted by its range unless the spell's description says otherwise.</p>\n<h4 class=\"rh-book-h\" id=\"components\">Components</h4>\n<p class=\"rh-book-p\">A spell's components are physical requirements the spellcaster must meet to cast the spell. Each spell's description indicates whether it requires Verbal (V), Somatic (S), or Material (M) components. If the spellcaster can't provide one or more of a spell's components, the spellcaster can't cast the spell.</p>\n<h5 class=\"rh-book-h\" id=\"verbal-v\">Verbal (V)</h5>\n<p class=\"rh-book-p\">A Verbal component is the chanting of esoteric words that sound like nonsense to the uninitiated. The words must be uttered in a normal speaking voice. The words themselves aren't the source of the spell's power; rather, the particular combination of sounds, with specific pitch and resonance, sets the threads of magic in motion. Thus, a creature who is gagged or in an area of magical silence can't cast a spell with a Verbal component.</p>\n<aside class=\"rh-book-inset\">\n  <h4 class=\"rh-inset-title\">Creating Verbal Components</h4>\n<p class=\"rh-book-p\">If you'd like to say a spell's Verbal component, you may make up the words. However you make them, the goal is to create something that's easy to say and that doesn't mean anything in the real world. Consider this method: take the name of the spell, keep only one instance of each of its letters, and rearrange the remaining letters into words. For example, remove the second <i>l</i> from <span class=\"rh-ref-link\" data-ref=\"spell\">spell</span> and rearrange the remaining letters to create <i>Ber Fila</i> or <i>Fel Bira</i>.</p>\n</aside>\n<h5 class=\"rh-book-h\" id=\"somatic-s\">Somatic (S)</h5>\n<p class=\"rh-book-p\">A Somatic component is a forceful gesticulation or an intricate set of gestures. A spellcaster must use at least one of their hands to perform these movements.</p>\n<h5 class=\"rh-book-h\" id=\"material-m\">Material (M)</h5>\n<p class=\"rh-book-p\">A Material component is a particular material used in a spell's casting, as specified in parentheses in the Components entry. These materials aren't consumed by the spell unless the spell's description states otherwise. The spellcaster must have a hand free to access them, but it can be the same hand used to perform Somatic components, if any.</p>\n<p class=\"rh-book-p\">If a spell doesn't consume its materials and doesn't specify a cost for them, a spellcaster can use a <span class=\"rh-ref-link\" data-ref=\"item\">item</span> (see chapter 6) instead of providing the materials specified in the spell, or the spellcaster can substitute a Spellcasting Focus if the caster has a feature that allows that substitution. To use a Component Pouch, you must have a hand free to reach into it, and to use a Spellcasting Focus, you must hold it unless its description says otherwise (see chapter 6 for descriptions).</p>\n<h4 class=\"rh-book-h\" id=\"duration\">Duration</h4>\n<p class=\"rh-book-p\">A spell's duration is the length of time the spell persists after it is cast. A duration typically takes one of the following forms:</p>\n<ul class=\"rh-book-list\">\n  <li><b>Concentration.</b> A duration that requires Concentration follows the Concentration rules.</li>\n  <li><b>Instantaneous.</b> An instantaneous duration means the spell's magic appears only for a moment and then disappears.</li>\n  <li><b>Time Span.</b> A duration that provides a time span specifies how long the spell lasts in rounds, minutes, hours, or the like. For example, a Duration entry might say \"1 minute,\" meaning the spell ends after 1 minute has passed. While a time-span spell that you cast is ongoing, you can dismiss it (no action required) if you don't have the <span class=\"rh-ref-link\" data-ref=\"condition\">condition</span> condition.</li>\n</ul>\n<h4 class=\"rh-book-h\" id=\"effects\">Effects</h4>\n<p class=\"rh-book-p\">The effects of a spell are detailed after its duration entry. Those details present exactly what the spell does, which ignores mundane physical laws; any outcomes beyond those effects are under the DM's purview. Whatever the effects, they typically deal with targets, saving throws, attack rolls, or all three, each of which is detailed below.</p>\n<h5 class=\"rh-book-h\" id=\"targets\">Targets</h5>\n<p class=\"rh-book-p\">A typical spell requires the caster to pick one or more targets to be affected by the spell's magic. A spell's description says whether the spell targets creatures, objects, or something else.</p>\n<h5 class=\"rh-book-h\" id=\"a-clear-path-to-the-target\">A Clear Path to the Target</h5>\n<p class=\"rh-book-p\">To target something with a spell, a caster must have a clear path to it, so it can't be behind Cover.</p>\n<h5 class=\"rh-book-h\" id=\"targeting-yourself\">Targeting Yourself</h5>\n<p class=\"rh-book-p\">If a spell targets a creature of your choice, you can choose yourself unless the creature must be Hostile [Attitude] or specifically a creature other than you.</p>\n<h5 class=\"rh-book-h\" id=\"areas-of-effect\">Areas of Effect</h5>\n<p class=\"rh-book-p\">Some spells, such as <span class=\"rh-ref-link\" data-ref=\"spell\">spell</span>, cover an area called an area of effect, which is defined in the rules glossary. The area determines what the spell targets. The description of a spell specifies whether it has an area of effect, which is typically one of these shapes: Cone [Area of Effect], Cube [Area of Effect], Cylinder [Area of Effect], Emanation [Area of Effect], Line [Area of Effect], or Sphere [Area of Effect].</p>\n<h5 class=\"rh-book-h\" id=\"awareness-of-being-targeted\">Awareness of Being Targeted</h5>\n<p class=\"rh-book-p\">Unless a spell has a perceptible effect, a creature doesn't know it was targeted by the spell. An effect like lightning is obvious, but a more subtle effect, such as an attempt to read thoughts, goes unnoticed unless a spell's description says otherwise.</p>\n<h5 class=\"rh-book-h\" id=\"invalid-targets\">Invalid Targets</h5>\n<p class=\"rh-book-p\">If you cast a spell on someone or something that can't be affected by it, nothing happens to that target, but if you used a spell slot to cast the spell, the slot is still expended.</p>\n<p class=\"rh-book-p\">If the spell normally has no effect on a target that succeeds on a saving throw, the invalid target appears to have succeeded on its saving throw, even though it didn't attempt one (giving no hint that the creature is an invalid target). Otherwise, you perceive that the spell did nothing to the target.</p>\n<h5 class=\"rh-book-h\" id=\"saving-throws\">Saving Throws</h5>\n<p class=\"rh-book-p\">Many spells specify that a target makes a saving throw to avoid some or all of a spell's effects. The spell specifies the ability that the target uses for the save and what happens on a success or failure. Here's how to calculate the DC for your spells:</p>\n<h5 class=\"rh-book-h\" id=\"spell\">Spell</h5>\n<h5 class=\"rh-book-h\" id=\"attack-rolls\">Attack Rolls</h5>\n<p class=\"rh-book-p\">Some spells require the caster to make an attack roll to determine whether the spell hits a target. Here's how to calculate the attack modifier for your spells:</p>\n<h5 class=\"rh-book-h\" id=\"spell\">Spell</h5>\n<h5 class=\"rh-book-h\" id=\"combining-spell-effects\">Combining Spell Effects</h5>\n<p class=\"rh-book-p\">The effects of different spells add together while their durations overlap. In contrast, the effects of the same spell cast multiple times don't combine. Instead, the most potent effect—such as the highest bonus—from those castings applies while their durations overlap. The most recent effect applies if the castings are equally potent and their durations overlap. For example, if two Clerics cast <span class=\"rh-ref-link\" data-ref=\"spell\">spell</span> on the same target, that target gains the spell's benefit only once; the target doesn't receive two bonus dice. But if the durations of the spells overlap, the effect continues until the duration of the second <span class=\"rh-ref-link\" data-ref=\"spell\">spell</span> ends.</p>\n<aside class=\"rh-book-inset\">\n  <h4 class=\"rh-inset-title\">Identifying an Ongoing Spell</h4>\n<p class=\"rh-book-p\">You can try to identify a non-instantaneous spell by its observable effects if its duration is ongoing. To identify it, you must take the <span class=\"rh-ref-link\" data-ref=\"action\">action</span> action and succeed on a 15 Intelligence (<span class=\"rh-ref-link\" data-ref=\"skill\">skill</span>) check.</p>\n</aside>\n<h3 class=\"rh-book-h\" id=\"spell-descriptions\">Spell Descriptions</h3>\n<p class=\"rh-book-p\">The spells are presented in alphabetical order.</p>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<ul class=\"rh-book-list\">\n  <li><span class=\"rh-ref-link\" data-ref=\"spell\">spell</span></li>\n</ul>\n<h3 class=\"rh-book-h\" id=\"a\">A</h3>\n<h4 class=\"rh-book-h\" id=\"acid-splash\">Acid Splash</h4>\n<h4 class=\"rh-book-h\" id=\"aid\">Aid</h4>\n<h4 class=\"rh-book-h\" id=\"alarm\">Alarm</h4>\n<h4 class=\"rh-book-h\" id=\"alter-self\">Alter Self</h4>\n<h4 class=\"rh-book-h\" id=\"animal-friendship\">Animal Friendship</h4>\n<h4 class=\"rh-book-h\" id=\"animal-messenger\">Animal Messenger</h4>\n<h4 class=\"rh-book-h\" id=\"animal-shapes\">Animal Shapes</h4>\n<h4 class=\"rh-book-h\" id=\"animate-dead\">Animate Dead</h4>\n<h4 class=\"rh-book-h\" id=\"animate-objects\">Animate Objects</h4>\n<h4 class=\"rh-book-h\" id=\"antilife-shell\">Antilife Shell</h4>\n<h4 class=\"rh-book-h\" id=\"antimagic-field\">Antimagic Field</h4>\n<h4 class=\"rh-book-h\" id=\"antipathy-sympathy\">Antipathy/Sympathy</h4>\n<h4 class=\"rh-book-h\" id=\"arcane-eye\">Arcane Eye</h4>\n<h4 class=\"rh-book-h\" id=\"arcane-gate\">Arcane Gate</h4>\n<h4 class=\"rh-book-h\" id=\"arcane-lock\">Arcane Lock</h4>\n<h4 class=\"rh-book-h\" id=\"arcane-vigor\">Arcane Vigor</h4>\n<h4 class=\"rh-book-h\" id=\"armor-of-agathys\">Armor of Agathys</h4>\n<h4 class=\"rh-book-h\" id=\"arms-of-hadar\">Arms of Hadar</h4>\n<h4 class=\"rh-book-h\" id=\"astral-projection\">Astral Projection</h4>\n<h4 class=\"rh-book-h\" id=\"augury\">Augury</h4>\n<h4 class=\"rh-book-h\" id=\"aura-of-life\">Aura of Life</h4>\n<h4 class=\"rh-book-h\" id=\"aura-of-purity\">Aura of Purity</h4>\n<h4 class=\"rh-book-h\" id=\"aura-of-vitality\">Aura of Vitality</h4>\n<h4 class=\"rh-book-h\" id=\"awaken\">Awaken</h4>\n<h3 class=\"rh-book-h\" id=\"b\">B</h3>\n<h4 class=\"rh-book-h\" id=\"bane\">Bane</h4>\n<h4 class=\"rh-book-h\" id=\"banishing-smite\">Banishing Smite</h4>\n<h4 class=\"rh-book-h\" id=\"banishment\">Banishment</h4>\n<h4 class=\"rh-book-h\" id=\"barkskin\">Barkskin</h4>\n<h4 class=\"rh-book-h\" id=\"beacon-of-hope\">Beacon of Hope</h4>\n<h4 class=\"rh-book-h\" id=\"beast-sense\">Beast Sense</h4>\n<h4 class=\"rh-book-h\" id=\"befuddlement\">Befuddlement</h4>\n<h4 class=\"rh-book-h\" id=\"bestow-curse\">Bestow Curse</h4>\n<h4 class=\"rh-book-h\" id=\"bigby-s-hand\">Bigby's Hand</h4>\n<h4 class=\"rh-book-h\" id=\"blade-barrier\">Blade Barrier</h4>\n<h4 class=\"rh-book-h\" id=\"blade-ward\">Blade Ward</h4>\n<h4 class=\"rh-book-h\" id=\"bless\">Bless</h4>\n<h4 class=\"rh-book-h\" id=\"blight\">Blight</h4>\n<h4 class=\"rh-book-h\" id=\"blinding-smite\">Blinding Smite</h4>\n<h4 class=\"rh-book-h\" id=\"blindness-deafness\">Blindness/Deafness</h4>\n<h4 class=\"rh-book-h\" id=\"blink\">Blink</h4>\n<h4 class=\"rh-book-h\" id=\"blur\">Blur</h4>\n<h4 class=\"rh-book-h\" id=\"burning-hands\">Burning Hands</h4>\n<h3 class=\"rh-book-h\" id=\"c\">C</h3>\n<h4 class=\"rh-book-h\" id=\"call-lightning\">Call Lightning</h4>\n<h4 class=\"rh-book-h\" id=\"calm-emotions\">Calm Emotions</h4>\n<h4 class=\"rh-book-h\" id=\"chain-lightning\">Chain Lightning</h4>\n<h4 class=\"rh-book-h\" id=\"charm-monster\">Charm Monster</h4>\n<h4 class=\"rh-book-h\" id=\"charm-person\">Charm Person</h4>\n<h4 class=\"rh-book-h\" id=\"chill-touch\">Chill Touch</h4>\n<h4 class=\"rh-book-h\" id=\"chromatic-orb\">Chromatic Orb</h4>\n<h4 class=\"rh-book-h\" id=\"circle-of-death\">Circle of Death</h4>\n<h4 class=\"rh-book-h\" id=\"circle-of-power\">Circle of Power</h4>\n<h4 class=\"rh-book-h\" id=\"clairvoyance\">Clairvoyance</h4>\n<h4 class=\"rh-book-h\" id=\"clone\">Clone</h4>\n<h4 class=\"rh-book-h\" id=\"cloud-of-daggers\">Cloud of Daggers</h4>\n<h4 class=\"rh-book-h\" id=\"cloudkill\">Cloudkill</h4>\n<h4 class=\"rh-book-h\" id=\"color-spray\">Color Spray</h4>\n<h4 class=\"rh-book-h\" id=\"command\">Command</h4>\n<h4 class=\"rh-book-h\" id=\"commune\">Commune</h4>\n<h4 class=\"rh-book-h\" id=\"commune-with-nature\">Commune with Nature</h4>\n<h4 class=\"rh-book-h\" id=\"compelled-duel\">Compelled Duel</h4>\n<h4 class=\"rh-book-h\" id=\"comprehend-languages\">Comprehend Languages</h4>\n<h4 class=\"rh-book-h\" id=\"compulsion\">Compulsion</h4>\n<h4 class=\"rh-book-h\" id=\"cone-of-cold\">Cone of Cold</h4>\n<h4 class=\"rh-book-h\" id=\"confusion\">Confusion</h4>\n<h4 class=\"rh-book-h\" id=\"conjure-animals\">Conjure Animals</h4>\n<h4 class=\"rh-book-h\" id=\"conjure-barrage\">Conjure Barrage</h4>\n<h4 class=\"rh-book-h\" id=\"conjure-celestial\">Conjure Celestial</h4>\n<h4 class=\"rh-book-h\" id=\"conjure-elemental\">Conjure Elemental</h4>\n<h4 class=\"rh-book-h\" id=\"conjure-fey\">Conjure Fey</h4>\n<h4 class=\"rh-book-h\" id=\"conjure-minor-elementals\">Conjure Minor Elementals</h4>\n<h4 class=\"rh-book-h\" id=\"conjure-volley\">Conjure Volley</h4>\n<h4 class=\"rh-book-h\" id=\"conjure-woodland-beings\">Conjure Woodland Beings</h4>\n<h4 class=\"rh-book-h\" id=\"contact-other-plane\">Contact Other Plane</h4>\n<h4 class=\"rh-book-h\" id=\"contagion\">Contagion</h4>\n<h4 class=\"rh-book-h\" id=\"contingency\">Contingency</h4>\n<h4 class=\"rh-book-h\" id=\"continual-flame\">Continual Flame</h4>\n<h4 class=\"rh-book-h\" id=\"control-water\">Control Water</h4>\n<h4 class=\"rh-book-h\" id=\"control-weather\">Control Weather</h4>\n<h4 class=\"rh-book-h\" id=\"cordon-of-arrows\">Cordon of Arrows</h4>\n<h4 class=\"rh-book-h\" id=\"counterspell\">Counterspell</h4>\n<h4 class=\"rh-book-h\" id=\"create-food-and-water\">Create Food and Water</h4>\n<h4 class=\"rh-book-h\" id=\"create-or-destroy-water\">Create or Destroy Water</h4>\n<h4 class=\"rh-book-h\" id=\"create-undead\">Create Undead</h4>\n<h4 class=\"rh-book-h\" id=\"creation\">Creation</h4>\n<h4 class=\"rh-book-h\" id=\"crown-of-madness\">Crown of Madness</h4>\n<h4 class=\"rh-book-h\" id=\"crusader-s-mantle\">Crusader's Mantle</h4>\n<h4 class=\"rh-book-h\" id=\"cure-wounds\">Cure Wounds</h4>\n<h3 class=\"rh-book-h\" id=\"d\">D</h3>\n<h4 class=\"rh-book-h\" id=\"dancing-lights\">Dancing Lights</h4>\n<h4 class=\"rh-book-h\" id=\"darkness\">Darkness</h4>\n<h4 class=\"rh-book-h\" id=\"darkvision\">Darkvision</h4>\n<h4 class=\"rh-book-h\" id=\"daylight\">Daylight</h4>\n<h4 class=\"rh-book-h\" id=\"death-ward\">Death Ward</h4>\n<h4 class=\"rh-book-h\" id=\"delayed-blast-fireball\">Delayed Blast Fireball</h4>\n<h4 class=\"rh-book-h\" id=\"demiplane\">Demiplane</h4>\n<h4 class=\"rh-book-h\" id=\"destructive-wave\">Destructive Wave</h4>\n<h4 class=\"rh-book-h\" id=\"detect-evil-and-good\">Detect Evil and Good</h4>\n<h4 class=\"rh-book-h\" id=\"detect-magic\">Detect Magic</h4>\n<h4 class=\"rh-book-h\" id=\"detect-poison-and-disease\">Detect Poison and Disease</h4>\n<h4 class=\"rh-book-h\" id=\"detect-thoughts\">Detect Thoughts</h4>\n<h4 class=\"rh-book-h\" id=\"dimension-door\">Dimension Door</h4>\n<h4 class=\"rh-book-h\" id=\"disguise-self\">Disguise Self</h4>\n<h4 class=\"rh-book-h\" id=\"disintegrate\">Disintegrate</h4>\n<h4 class=\"rh-book-h\" id=\"dispel-evil-and-good\">Dispel Evil and Good</h4>\n<h4 class=\"rh-book-h\" id=\"dispel-magic\">Dispel Magic</h4>\n<h4 class=\"rh-book-h\" id=\"dissonant-whispers\">Dissonant Whispers</h4>\n<h4 class=\"rh-book-h\" id=\"divination\">Divination</h4>\n<h4 class=\"rh-book-h\" id=\"divine-favor\">Divine Favor</h4>\n<h4 class=\"rh-book-h\" id=\"divine-smite\">Divine Smite</h4>\n<h4 class=\"rh-book-h\" id=\"divine-word\">Divine Word</h4>\n<h4 class=\"rh-book-h\" id=\"dominate-beast\">Dominate Beast</h4>\n<h4 class=\"rh-book-h\" id=\"dominate-monster\">Dominate Monster</h4>\n<h4 class=\"rh-book-h\" id=\"dominate-person\">Dominate Person</h4>\n<h4 class=\"rh-book-h\" id=\"dragon-s-breath\">Dragon's Breath</h4>\n<h4 class=\"rh-book-h\" id=\"drawmij-s-instant-summons\">Drawmij's Instant Summons</h4>\n<h4 class=\"rh-book-h\" id=\"dream\">Dream</h4>\n<h4 class=\"rh-book-h\" id=\"druidcraft\">Druidcraft</h4>\n<h3 class=\"rh-book-h\" id=\"e\">E</h3>\n<h4 class=\"rh-book-h\" id=\"earthquake\">Earthquake</h4>\n<h4 class=\"rh-book-h\" id=\"eldritch-blast\">Eldritch Blast</h4>\n<h4 class=\"rh-book-h\" id=\"elemental-weapon\">Elemental Weapon</h4>\n<h4 class=\"rh-book-h\" id=\"elementalism\">Elementalism</h4>\n<h4 class=\"rh-book-h\" id=\"enhance-ability\">Enhance Ability</h4>\n<h4 class=\"rh-book-h\" id=\"enlarge-reduce\">Enlarge/Reduce</h4>\n<h4 class=\"rh-book-h\" id=\"ensnaring-strike\">Ensnaring Strike</h4>\n<h4 class=\"rh-book-h\" id=\"entangle\">Entangle</h4>\n<h4 class=\"rh-book-h\" id=\"enthrall\">Enthrall</h4>\n<h4 class=\"rh-book-h\" id=\"etherealness\">Etherealness</h4>\n<h4 class=\"rh-book-h\" id=\"evard-s-black-tentacles\">Evard's Black Tentacles</h4>\n<h4 class=\"rh-book-h\" id=\"expeditious-retreat\">Expeditious Retreat</h4>\n<h4 class=\"rh-book-h\" id=\"eyebite\">Eyebite</h4>\n<h3 class=\"rh-book-h\" id=\"f\">F</h3>\n<h4 class=\"rh-book-h\" id=\"fabricate\">Fabricate</h4>\n<h4 class=\"rh-book-h\" id=\"faerie-fire\">Faerie Fire</h4>\n<h4 class=\"rh-book-h\" id=\"false-life\">False Life</h4>\n<h4 class=\"rh-book-h\" id=\"fear\">Fear</h4>\n<h4 class=\"rh-book-h\" id=\"feather-fall\">Feather Fall</h4>\n<h4 class=\"rh-book-h\" id=\"feign-death\">Feign Death</h4>\n<h4 class=\"rh-book-h\" id=\"find-familiar\">Find Familiar</h4>\n<h4 class=\"rh-book-h\" id=\"find-steed\">Find Steed</h4>\n<h4 class=\"rh-book-h\" id=\"find-the-path\">Find the Path</h4>\n<h4 class=\"rh-book-h\" id=\"find-traps\">Find Traps</h4>\n<h4 class=\"rh-book-h\" id=\"finger-of-death\">Finger of Death</h4>\n<h4 class=\"rh-book-h\" id=\"fire-bolt\">Fire Bolt</h4>\n<h4 class=\"rh-book-h\" id=\"fire-shield\">Fire Shield</h4>\n<h4 class=\"rh-book-h\" id=\"fire-storm\">Fire Storm</h4>\n<h4 class=\"rh-book-h\" id=\"fireball\">Fireball</h4>\n<h4 class=\"rh-book-h\" id=\"flame-blade\">Flame Blade</h4>\n<h4 class=\"rh-book-h\" id=\"flame-strike\">Flame Strike</h4>\n<h4 class=\"rh-book-h\" id=\"flaming-sphere\">Flaming Sphere</h4>\n<h4 class=\"rh-book-h\" id=\"flesh-to-stone\">Flesh to Stone</h4>\n<h4 class=\"rh-book-h\" id=\"fly\">Fly</h4>\n<h4 class=\"rh-book-h\" id=\"fog-cloud\">Fog Cloud</h4>\n<h4 class=\"rh-book-h\" id=\"forbiddance\">Forbiddance</h4>\n<h4 class=\"rh-book-h\" id=\"forcecage\">Forcecage</h4>\n<h4 class=\"rh-book-h\" id=\"foresight\">Foresight</h4>\n<h4 class=\"rh-book-h\" id=\"fount-of-moonlight\">Fount of Moonlight</h4>\n<h4 class=\"rh-book-h\" id=\"freedom-of-movement\">Freedom of Movement</h4>\n<h4 class=\"rh-book-h\" id=\"friends\">Friends</h4>\n<h3 class=\"rh-book-h\" id=\"g\">G</h3>\n<h4 class=\"rh-book-h\" id=\"gaseous-form\">Gaseous Form</h4>\n<h4 class=\"rh-book-h\" id=\"gate\">Gate</h4>\n<h4 class=\"rh-book-h\" id=\"geas\">Geas</h4>\n<h4 class=\"rh-book-h\" id=\"gentle-repose\">Gentle Repose</h4>\n<h4 class=\"rh-book-h\" id=\"giant-insect\">Giant Insect</h4>\n<h4 class=\"rh-book-h\" id=\"glibness\">Glibness</h4>\n<h4 class=\"rh-book-h\" id=\"globe-of-invulnerability\">Globe of Invulnerability</h4>\n<h4 class=\"rh-book-h\" id=\"glyph-of-warding\">Glyph of Warding</h4>\n<h4 class=\"rh-book-h\" id=\"goodberry\">Goodberry</h4>\n<h4 class=\"rh-book-h\" id=\"grasping-vine\">Grasping Vine</h4>\n<h4 class=\"rh-book-h\" id=\"grease\">Grease</h4>\n<h4 class=\"rh-book-h\" id=\"greater-invisibility\">Greater Invisibility</h4>\n<h4 class=\"rh-book-h\" id=\"greater-restoration\">Greater Restoration</h4>\n<h4 class=\"rh-book-h\" id=\"guardian-of-faith\">Guardian of Faith</h4>\n<h4 class=\"rh-book-h\" id=\"guards-and-wards\">Guards and Wards</h4>\n<h4 class=\"rh-book-h\" id=\"guidance\">Guidance</h4>\n<h4 class=\"rh-book-h\" id=\"guiding-bolt\">Guiding Bolt</h4>\n<h4 class=\"rh-book-h\" id=\"gust-of-wind\">Gust of Wind</h4>\n<h3 class=\"rh-book-h\" id=\"h\">H</h3>\n<h4 class=\"rh-book-h\" id=\"hail-of-thorns\">Hail of Thorns</h4>\n<h4 class=\"rh-book-h\" id=\"hallow\">Hallow</h4>\n<h4 class=\"rh-book-h\" id=\"hallucinatory-terrain\">Hallucinatory Terrain</h4>\n<h4 class=\"rh-book-h\" id=\"harm\">Harm</h4>\n<h4 class=\"rh-book-h\" id=\"haste\">Haste</h4>\n<h4 class=\"rh-book-h\" id=\"heal\">Heal</h4>\n<h4 class=\"rh-book-h\" id=\"healing-word\">Healing Word</h4>\n<h4 class=\"rh-book-h\" id=\"heat-metal\">Heat Metal</h4>\n<h4 class=\"rh-book-h\" id=\"hellish-rebuke\">Hellish Rebuke</h4>\n<h4 class=\"rh-book-h\" id=\"heroes-feast\">Heroes' Feast</h4>\n<h4 class=\"rh-book-h\" id=\"heroism\">Heroism</h4>\n<h4 class=\"rh-book-h\" id=\"hex\">Hex</h4>\n<h4 class=\"rh-book-h\" id=\"hold-monster\">Hold Monster</h4>\n<h4 class=\"rh-book-h\" id=\"hold-person\">Hold Person</h4>\n<h4 class=\"rh-book-h\" id=\"holy-aura\">Holy Aura</h4>\n<h4 class=\"rh-book-h\" id=\"hunger-of-hadar\">Hunger of Hadar</h4>\n<h4 class=\"rh-book-h\" id=\"hunter-s-mark\">Hunter's Mark</h4>\n<h4 class=\"rh-book-h\" id=\"hypnotic-pattern\">Hypnotic Pattern</h4>\n<h3 class=\"rh-book-h\" id=\"i\">I</h3>\n<h4 class=\"rh-book-h\" id=\"ice-knife\">Ice Knife</h4>\n<h4 class=\"rh-book-h\" id=\"ice-storm\">Ice Storm</h4>\n<h4 class=\"rh-book-h\" id=\"identify\">Identify</h4>\n<h4 class=\"rh-book-h\" id=\"illusory-script\">Illusory Script</h4>\n<h4 class=\"rh-book-h\" id=\"imprisonment\">Imprisonment</h4>\n<h4 class=\"rh-book-h\" id=\"incendiary-cloud\">Incendiary Cloud</h4>\n<h4 class=\"rh-book-h\" id=\"inflict-wounds\">Inflict Wounds</h4>\n<h4 class=\"rh-book-h\" id=\"insect-plague\">Insect Plague</h4>\n<h4 class=\"rh-book-h\" id=\"invisibility\">Invisibility</h4>\n<h3 class=\"rh-book-h\" id=\"j\">J</h3>\n<h4 class=\"rh-book-h\" id=\"jallarzi-s-storm-of-radiance\">Jallarzi's Storm of Radiance</h4>\n<h4 class=\"rh-book-h\" id=\"jump\">Jump</h4>\n<h3 class=\"rh-book-h\" id=\"k\">K</h3>\n<h4 class=\"rh-book-h\" id=\"knock\">Knock</h4>\n<h3 class=\"rh-book-h\" id=\"l\">L</h3>\n<h4 class=\"rh-book-h\" id=\"legend-lore\">Legend Lore</h4>\n<h4 class=\"rh-book-h\" id=\"leomund-s-secret-chest\">Leomund's Secret Chest</h4>\n<h4 class=\"rh-book-h\" id=\"leomund-s-tiny-hut\">Leomund's Tiny Hut</h4>\n<h4 class=\"rh-book-h\" id=\"lesser-restoration\">Lesser Restoration</h4>\n<h4 class=\"rh-book-h\" id=\"levitate\">Levitate</h4>\n<h4 class=\"rh-book-h\" id=\"light\">Light</h4>\n<h4 class=\"rh-book-h\" id=\"lightning-arrow\">Lightning Arrow</h4>\n<h4 class=\"rh-book-h\" id=\"lightning-bolt\">Lightning Bolt</h4>\n<h4 class=\"rh-book-h\" id=\"locate-animals-or-plants\">Locate Animals or Plants</h4>\n<h4 class=\"rh-book-h\" id=\"locate-creature\">Locate Creature</h4>\n<h4 class=\"rh-book-h\" id=\"locate-object\">Locate Object</h4>\n<h4 class=\"rh-book-h\" id=\"longstrider\">Longstrider</h4>\n<h3 class=\"rh-book-h\" id=\"m\">M</h3>\n<h4 class=\"rh-book-h\" id=\"mage-armor\">Mage Armor</h4>\n<h4 class=\"rh-book-h\" id=\"mage-hand\">Mage Hand</h4>\n<h4 class=\"rh-book-h\" id=\"magic-circle\">Magic Circle</h4>\n<h4 class=\"rh-book-h\" id=\"magic-jar\">Magic Jar</h4>\n<h4 class=\"rh-book-h\" id=\"magic-missile\">Magic Missile</h4>\n<h4 class=\"rh-book-h\" id=\"magic-mouth\">Magic Mouth</h4>\n<h4 class=\"rh-book-h\" id=\"magic-weapon\">Magic Weapon</h4>\n<h4 class=\"rh-book-h\" id=\"major-image\">Major Image</h4>\n<h4 class=\"rh-book-h\" id=\"mass-cure-wounds\">Mass Cure Wounds</h4>\n<h4 class=\"rh-book-h\" id=\"mass-heal\">Mass Heal</h4>\n<h4 class=\"rh-book-h\" id=\"mass-healing-word\">Mass Healing Word</h4>\n<h4 class=\"rh-book-h\" id=\"mass-suggestion\">Mass Suggestion</h4>\n<h4 class=\"rh-book-h\" id=\"maze\">Maze</h4>\n<h4 class=\"rh-book-h\" id=\"meld-into-stone\">Meld into Stone</h4>\n<h4 class=\"rh-book-h\" id=\"melf-s-acid-arrow\">Melf's Acid Arrow</h4>\n<h4 class=\"rh-book-h\" id=\"mending\">Mending</h4>\n<h4 class=\"rh-book-h\" id=\"message\">Message</h4>\n<h4 class=\"rh-book-h\" id=\"meteor-swarm\">Meteor Swarm</h4>\n<h4 class=\"rh-book-h\" id=\"mind-blank\">Mind Blank</h4>\n<h4 class=\"rh-book-h\" id=\"mind-sliver\">Mind Sliver</h4>\n<h4 class=\"rh-book-h\" id=\"mind-spike\">Mind Spike</h4>\n<h4 class=\"rh-book-h\" id=\"minor-illusion\">Minor Illusion</h4>\n<h4 class=\"rh-book-h\" id=\"mirage-arcane\">Mirage Arcane</h4>\n<h4 class=\"rh-book-h\" id=\"mirror-image\">Mirror Image</h4>\n<h4 class=\"rh-book-h\" id=\"mislead\">Mislead</h4>\n<h4 class=\"rh-book-h\" id=\"misty-step\">Misty Step</h4>\n<h4 class=\"rh-book-h\" id=\"modify-memory\">Modify Memory</h4>\n<h4 class=\"rh-book-h\" id=\"moonbeam\">Moonbeam</h4>\n<h4 class=\"rh-book-h\" id=\"mordenkainen-s-faithful-hound\">Mordenkainen's Faithful Hound</h4>\n<h4 class=\"rh-book-h\" id=\"mordenkainen-s-magnificent-mansion\">Mordenkainen's Magnificent Mansion</h4>\n<h4 class=\"rh-book-h\" id=\"mordenkainen-s-private-sanctum\">Mordenkainen's Private Sanctum</h4>\n<h4 class=\"rh-book-h\" id=\"mordenkainen-s-sword\">Mordenkainen's Sword</h4>\n<h4 class=\"rh-book-h\" id=\"move-earth\">Move Earth</h4>\n<h3 class=\"rh-book-h\" id=\"n\">N</h3>\n<h4 class=\"rh-book-h\" id=\"nondetection\">Nondetection</h4>\n<h4 class=\"rh-book-h\" id=\"nystul-s-magic-aura\">Nystul's Magic Aura</h4>\n<h3 class=\"rh-book-h\" id=\"o\">O</h3>\n<h4 class=\"rh-book-h\" id=\"otiluke-s-freezing-sphere\">Otiluke's Freezing Sphere</h4>\n<h4 class=\"rh-book-h\" id=\"otiluke-s-resilient-sphere\">Otiluke's Resilient Sphere</h4>\n<h4 class=\"rh-book-h\" id=\"otto-s-irresistible-dance\">Otto's Irresistible Dance</h4>\n<h3 class=\"rh-book-h\" id=\"p\">P</h3>\n<h4 class=\"rh-book-h\" id=\"pass-without-trace\">Pass without Trace</h4>\n<h4 class=\"rh-book-h\" id=\"passwall\">Passwall</h4>\n<h4 class=\"rh-book-h\" id=\"phantasmal-force\">Phantasmal Force</h4>\n<h4 class=\"rh-book-h\" id=\"phantasmal-killer\">Phantasmal Killer</h4>\n<h4 class=\"rh-book-h\" id=\"phantom-steed\">Phantom Steed</h4>\n<h4 class=\"rh-book-h\" id=\"planar-ally\">Planar Ally</h4>\n<h4 class=\"rh-book-h\" id=\"planar-binding\">Planar Binding</h4>\n<h4 class=\"rh-book-h\" id=\"plane-shift\">Plane Shift</h4>\n<h4 class=\"rh-book-h\" id=\"plant-growth\">Plant Growth</h4>\n<h4 class=\"rh-book-h\" id=\"poison-spray\">Poison Spray</h4>\n<h4 class=\"rh-book-h\" id=\"polymorph\">Polymorph</h4>\n<h4 class=\"rh-book-h\" id=\"power-word-fortify\">Power Word Fortify</h4>\n<h4 class=\"rh-book-h\" id=\"power-word-heal\">Power Word Heal</h4>\n<h4 class=\"rh-book-h\" id=\"power-word-kill\">Power Word Kill</h4>\n<h4 class=\"rh-book-h\" id=\"power-word-stun\">Power Word Stun</h4>\n<h4 class=\"rh-book-h\" id=\"prayer-of-healing\">Prayer of Healing</h4>\n<h4 class=\"rh-book-h\" id=\"prestidigitation\">Prestidigitation</h4>\n<h4 class=\"rh-book-h\" id=\"prismatic-spray\">Prismatic Spray</h4>\n<h4 class=\"rh-book-h\" id=\"prismatic-wall\">Prismatic Wall</h4>\n<h4 class=\"rh-book-h\" id=\"produce-flame\">Produce Flame</h4>\n<h4 class=\"rh-book-h\" id=\"programmed-illusion\">Programmed Illusion</h4>\n<h4 class=\"rh-book-h\" id=\"project-image\">Project Image</h4>\n<h4 class=\"rh-book-h\" id=\"protection-from-energy\">Protection from Energy</h4>\n<h4 class=\"rh-book-h\" id=\"protection-from-evil-and-good\">Protection from Evil and Good</h4>\n<h4 class=\"rh-book-h\" id=\"protection-from-poison\">Protection from Poison</h4>\n<h4 class=\"rh-book-h\" id=\"purify-food-and-drink\">Purify Food and Drink</h4>\n<h3 class=\"rh-book-h\" id=\"r\">R</h3>\n<h4 class=\"rh-book-h\" id=\"raise-dead\">Raise Dead</h4>\n<h4 class=\"rh-book-h\" id=\"rary-s-telepathic-bond\">Rary's Telepathic Bond</h4>\n<h4 class=\"rh-book-h\" id=\"ray-of-enfeeblement\">Ray of Enfeeblement</h4>\n<h4 class=\"rh-book-h\" id=\"ray-of-frost\">Ray of Frost</h4>\n<h4 class=\"rh-book-h\" id=\"ray-of-sickness\">Ray of Sickness</h4>\n<h4 class=\"rh-book-h\" id=\"regenerate\">Regenerate</h4>\n<h4 class=\"rh-book-h\" id=\"reincarnate\">Reincarnate</h4>\n<h4 class=\"rh-book-h\" id=\"remove-curse\">Remove Curse</h4>\n<h4 class=\"rh-book-h\" id=\"resistance\">Resistance</h4>\n<h4 class=\"rh-book-h\" id=\"resurrection\">Resurrection</h4>\n<h4 class=\"rh-book-h\" id=\"reverse-gravity\">Reverse Gravity</h4>\n<h4 class=\"rh-book-h\" id=\"revivify\">Revivify</h4>\n<h4 class=\"rh-book-h\" id=\"rope-trick\">Rope Trick</h4>\n<h3 class=\"rh-book-h\" id=\"s\">S</h3>\n<h4 class=\"rh-book-h\" id=\"sacred-flame\">Sacred Flame</h4>\n<h4 class=\"rh-book-h\" id=\"sanctuary\">Sanctuary</h4>\n<h4 class=\"rh-book-h\" id=\"scorching-ray\">Scorching Ray</h4>\n<h4 class=\"rh-book-h\" id=\"scrying\">Scrying</h4>\n<h4 class=\"rh-book-h\" id=\"searing-smite\">Searing Smite</h4>\n<h4 class=\"rh-book-h\" id=\"see-invisibility\">See Invisibility</h4>\n<h4 class=\"rh-book-h\" id=\"seeming\">Seeming</h4>\n<h4 class=\"rh-book-h\" id=\"sending\">Sending</h4>\n<h4 class=\"rh-book-h\" id=\"sequester\">Sequester</h4>\n<h4 class=\"rh-book-h\" id=\"shapechange\">Shapechange</h4>\n<h4 class=\"rh-book-h\" id=\"shatter\">Shatter</h4>\n<h4 class=\"rh-book-h\" id=\"shield\">Shield</h4>\n<h4 class=\"rh-book-h\" id=\"shield-of-faith\">Shield of Faith</h4>\n<h4 class=\"rh-book-h\" id=\"shillelagh\">Shillelagh</h4>\n<h4 class=\"rh-book-h\" id=\"shining-smite\">Shining Smite</h4>\n<h4 class=\"rh-book-h\" id=\"shocking-grasp\">Shocking Grasp</h4>\n<h4 class=\"rh-book-h\" id=\"silence\">Silence</h4>\n<h4 class=\"rh-book-h\" id=\"silent-image\">Silent Image</h4>\n<h4 class=\"rh-book-h\" id=\"simulacrum\">Simulacrum</h4>\n<h4 class=\"rh-book-h\" id=\"sleep\">Sleep</h4>\n<h4 class=\"rh-book-h\" id=\"sleet-storm\">Sleet Storm</h4>\n<h4 class=\"rh-book-h\" id=\"slow\">Slow</h4>\n<h4 class=\"rh-book-h\" id=\"sorcerous-burst\">Sorcerous Burst</h4>\n<h4 class=\"rh-book-h\" id=\"spare-the-dying\">Spare the Dying</h4>\n<h4 class=\"rh-book-h\" id=\"speak-with-animals\">Speak with Animals</h4>\n<h4 class=\"rh-book-h\" id=\"speak-with-dead\">Speak with Dead</h4>\n<h4 class=\"rh-book-h\" id=\"speak-with-plants\">Speak with Plants</h4>\n<h4 class=\"rh-book-h\" id=\"spider-climb\">Spider Climb</h4>\n<h4 class=\"rh-book-h\" id=\"spike-growth\">Spike Growth</h4>\n<h4 class=\"rh-book-h\" id=\"spirit-guardians\">Spirit Guardians</h4>\n<h4 class=\"rh-book-h\" id=\"spiritual-weapon\">Spiritual Weapon</h4>\n<h4 class=\"rh-book-h\" id=\"staggering-smite\">Staggering Smite</h4>\n<h4 class=\"rh-book-h\" id=\"starry-wisp\">Starry Wisp</h4>\n<h4 class=\"rh-book-h\" id=\"steel-wind-strike\">Steel Wind Strike</h4>\n<h4 class=\"rh-book-h\" id=\"stinking-cloud\">Stinking Cloud</h4>\n<h4 class=\"rh-book-h\" id=\"stone-shape\">Stone Shape</h4>\n<h4 class=\"rh-book-h\" id=\"stoneskin\">Stoneskin</h4>\n<h4 class=\"rh-book-h\" id=\"storm-of-vengeance\">Storm of Vengeance</h4>\n<h4 class=\"rh-book-h\" id=\"suggestion\">Suggestion</h4>\n<h4 class=\"rh-book-h\" id=\"summon-aberration\">Summon Aberration</h4>\n<h4 class=\"rh-book-h\" id=\"summon-beast\">Summon Beast</h4>\n<h4 class=\"rh-book-h\" id=\"summon-celestial\">Summon Celestial</h4>\n<h4 class=\"rh-book-h\" id=\"summon-construct\">Summon Construct</h4>\n<h4 class=\"rh-book-h\" id=\"summon-dragon\">Summon Dragon</h4>\n<h4 class=\"rh-book-h\" id=\"summon-elemental\">Summon Elemental</h4>\n<h4 class=\"rh-book-h\" id=\"summon-fey\">Summon Fey</h4>\n<h4 class=\"rh-book-h\" id=\"summon-fiend\">Summon Fiend</h4>\n<h4 class=\"rh-book-h\" id=\"summon-undead\">Summon Undead</h4>\n<h4 class=\"rh-book-h\" id=\"sunbeam\">Sunbeam</h4>\n<h4 class=\"rh-book-h\" id=\"sunburst\">Sunburst</h4>\n<h4 class=\"rh-book-h\" id=\"swift-quiver\">Swift Quiver</h4>\n<h4 class=\"rh-book-h\" id=\"symbol\">Symbol</h4>\n<h4 class=\"rh-book-h\" id=\"synaptic-static\">Synaptic Static</h4>\n<h3 class=\"rh-book-h\" id=\"t\">T</h3>\n<h4 class=\"rh-book-h\" id=\"tasha-s-bubbling-cauldron\">Tasha's Bubbling Cauldron</h4>\n<h4 class=\"rh-book-h\" id=\"tasha-s-hideous-laughter\">Tasha's Hideous Laughter</h4>\n<h4 class=\"rh-book-h\" id=\"telekinesis\">Telekinesis</h4>\n<h4 class=\"rh-book-h\" id=\"telepathy\">Telepathy</h4>\n<h4 class=\"rh-book-h\" id=\"teleport\">Teleport</h4>\n<h4 class=\"rh-book-h\" id=\"teleportation-circle\">Teleportation Circle</h4>\n<h4 class=\"rh-book-h\" id=\"tenser-s-floating-disk\">Tenser's Floating Disk</h4>\n<h4 class=\"rh-book-h\" id=\"thaumaturgy\">Thaumaturgy</h4>\n<h4 class=\"rh-book-h\" id=\"thorn-whip\">Thorn Whip</h4>\n<h4 class=\"rh-book-h\" id=\"thunderclap\">Thunderclap</h4>\n<h4 class=\"rh-book-h\" id=\"thunderous-smite\">Thunderous Smite</h4>\n<h4 class=\"rh-book-h\" id=\"thunderwave\">Thunderwave</h4>\n<h4 class=\"rh-book-h\" id=\"time-stop\">Time Stop</h4>\n<h4 class=\"rh-book-h\" id=\"toll-the-dead\">Toll the Dead</h4>\n<h4 class=\"rh-book-h\" id=\"tongues\">Tongues</h4>\n<h4 class=\"rh-book-h\" id=\"transport-via-plants\">Transport via Plants</h4>\n<h4 class=\"rh-book-h\" id=\"tree-stride\">Tree Stride</h4>\n<h4 class=\"rh-book-h\" id=\"true-polymorph\">True Polymorph</h4>\n<h4 class=\"rh-book-h\" id=\"true-resurrection\">True Resurrection</h4>\n<h4 class=\"rh-book-h\" id=\"true-seeing\">True Seeing</h4>\n<h4 class=\"rh-book-h\" id=\"true-strike\">True Strike</h4>\n<h4 class=\"rh-book-h\" id=\"tsunami\">Tsunami</h4>\n<h3 class=\"rh-book-h\" id=\"u\">U</h3>\n<h4 class=\"rh-book-h\" id=\"unseen-servant\">Unseen Servant</h4>\n<h3 class=\"rh-book-h\" id=\"v\">V</h3>\n<h4 class=\"rh-book-h\" id=\"vampiric-touch\">Vampiric Touch</h4>\n<h4 class=\"rh-book-h\" id=\"vicious-mockery\">Vicious Mockery</h4>\n<h4 class=\"rh-book-h\" id=\"vitriolic-sphere\">Vitriolic Sphere</h4>\n<h3 class=\"rh-book-h\" id=\"w\">W</h3>\n<h4 class=\"rh-book-h\" id=\"wall-of-fire\">Wall of Fire</h4>\n<h4 class=\"rh-book-h\" id=\"wall-of-force\">Wall of Force</h4>\n<h4 class=\"rh-book-h\" id=\"wall-of-ice\">Wall of Ice</h4>\n<h4 class=\"rh-book-h\" id=\"wall-of-stone\">Wall of Stone</h4>\n<h4 class=\"rh-book-h\" id=\"wall-of-thorns\">Wall of Thorns</h4>\n<h4 class=\"rh-book-h\" id=\"warding-bond\">Warding Bond</h4>\n<h4 class=\"rh-book-h\" id=\"water-breathing\">Water Breathing</h4>\n<h4 class=\"rh-book-h\" id=\"water-walk\">Water Walk</h4>\n<h4 class=\"rh-book-h\" id=\"web\">Web</h4>\n<h4 class=\"rh-book-h\" id=\"weird\">Weird</h4>\n<h4 class=\"rh-book-h\" id=\"wind-walk\">Wind Walk</h4>\n<h4 class=\"rh-book-h\" id=\"wind-wall\">Wind Wall</h4>\n<h4 class=\"rh-book-h\" id=\"wish\">Wish</h4>\n<h4 class=\"rh-book-h\" id=\"witch-bolt\">Witch Bolt</h4>\n<h4 class=\"rh-book-h\" id=\"word-of-radiance\">Word of Radiance</h4>\n<h4 class=\"rh-book-h\" id=\"word-of-recall\">Word of Recall</h4>\n<h4 class=\"rh-book-h\" id=\"wrathful-smite\">Wrathful Smite</h4>\n<h3 class=\"rh-book-h\" id=\"y\">Y</h3>\n<h4 class=\"rh-book-h\" id=\"yolande-s-regal-presence\">Yolande's Regal Presence</h4>\n<h3 class=\"rh-book-h\" id=\"z\">Z</h3>\n<h4 class=\"rh-book-h\" id=\"zone-of-truth\">Zone of Truth</h4>\n"
};
