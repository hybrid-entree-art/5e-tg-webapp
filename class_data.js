const CLASSES = [
  {
    "id": "barbarian",
    "name": "Barbaro",
    "originalName": "Barbarian",
    "source": "PHB 2024",
    "quote": "Un guerriero feroce alimentato da una furia primordiale che sbaraglia ogni ostacolo in battaglia.",
    "hitDie": 12,
    "image": "https://5e.tools/img/classes/XPHB/Barbarian.webp",
    "primaryAbility": [
      "Forza"
    ],
    "proficiencies": [
      "Forza",
      "Costituzione"
    ],
    "skills": "Scegli 2 abilità a tua scelta",
    "weapons": "Armi semplici, Armi da guerra",
    "tools": "Nessuna",
    "armor": "Armatura leggera, Armatura media, Scudi",
    "startingEquipment": "Choose A or B: (A) Greataxe, 4 Handaxe, Explorer's Pack, and 15 GP; or (B) 75 GP",
    "multiclassing": "Per ottenere una nuova classe o lasciarla, i punteggi dei tuoi attributi primari (Forza) devono essere almeno pari a 13.",
    "tableLabels": [
      "Rages",
      "Rage Damage",
      "Weapon Mastery"
    ],
    "tableLabelsIt": [
      "Ire",
      "Danni Ira",
      "Padronanza armi"
    ],
    "progression": [
      {
        "level": 1,
        "pb": "+2",
        "values": [
          "2",
          "+2",
          "2"
        ]
      },
      {
        "level": 2,
        "pb": "+2",
        "values": [
          "2",
          "+2",
          "2"
        ]
      },
      {
        "level": 3,
        "pb": "+2",
        "values": [
          "3",
          "+2",
          "2"
        ]
      },
      {
        "level": 4,
        "pb": "+2",
        "values": [
          "3",
          "+2",
          "3"
        ]
      },
      {
        "level": 5,
        "pb": "+3",
        "values": [
          "3",
          "+2",
          "3"
        ]
      },
      {
        "level": 6,
        "pb": "+3",
        "values": [
          "4",
          "+2",
          "3"
        ]
      },
      {
        "level": 7,
        "pb": "+3",
        "values": [
          "4",
          "+2",
          "3"
        ]
      },
      {
        "level": 8,
        "pb": "+3",
        "values": [
          "4",
          "+2",
          "3"
        ]
      },
      {
        "level": 9,
        "pb": "+4",
        "values": [
          "4",
          "+3",
          "3"
        ]
      },
      {
        "level": 10,
        "pb": "+4",
        "values": [
          "4",
          "+3",
          "4"
        ]
      },
      {
        "level": 11,
        "pb": "+4",
        "values": [
          "4",
          "+3",
          "4"
        ]
      },
      {
        "level": 12,
        "pb": "+4",
        "values": [
          "5",
          "+3",
          "4"
        ]
      },
      {
        "level": 13,
        "pb": "+5",
        "values": [
          "5",
          "+3",
          "4"
        ]
      },
      {
        "level": 14,
        "pb": "+5",
        "values": [
          "5",
          "+3",
          "4"
        ]
      },
      {
        "level": 15,
        "pb": "+5",
        "values": [
          "5",
          "+3",
          "4"
        ]
      },
      {
        "level": 16,
        "pb": "+5",
        "values": [
          "5",
          "+4",
          "4"
        ]
      },
      {
        "level": 17,
        "pb": "+6",
        "values": [
          "6",
          "+4",
          "4"
        ]
      },
      {
        "level": 18,
        "pb": "+6",
        "values": [
          "6",
          "+4",
          "4"
        ]
      },
      {
        "level": 19,
        "pb": "+6",
        "values": [
          "6",
          "+4",
          "4"
        ]
      },
      {
        "level": 20,
        "pb": "+6",
        "values": [
          "6",
          "+4",
          "4"
        ]
      }
    ],
    "subclasses": [
      {
        "id": "berserker",
        "name": "Cammino del Berserker",
        "originalName": "Path of the Berserker",
        "shortName": "Berserker",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Path of the Berserker",
            "nameIt": "Path of the Berserker",
            "level": 3,
            "text": "Channel Rage into Violent Fury\n\nBarbarians who walk the Path of the Berserker direct their Rage primarily toward violence. Their path is one of untrammeled fury, and they thrill in the chaos of battle as they allow their Rage to seize and empower them.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Frenzy|Barbarian|XPHB|Berserker|XPHB|3'}"
          },
          {
            "name": "Frenzy",
            "nameIt": "Frenzy",
            "level": 3,
            "text": "If you use Reckless Attack while your Rage is active, you deal extra damage to the first target you hit on your turn with a Strength-based attack. To determine the extra damage, roll a number of d6s equal to your Rage Damage bonus, and add them together. The damage has the same type as the weapon or Unarmed Strike used for the attack."
          },
          {
            "name": "Mindless Rage",
            "nameIt": "Mindless Rage",
            "level": 6,
            "text": "You have Immunity to the Charmed and Frightened conditions while your Rage is active. If you're Charmed or Frightened when you enter your Rage, the condition ends on you."
          },
          {
            "name": "Retaliation",
            "nameIt": "Retaliation",
            "level": 10,
            "text": "When you take damage from a creature that is within 5 feet of you, you can take a Reaction to make one melee attack against that creature, using a weapon or an Unarmed Strike."
          },
          {
            "name": "Intimidating Presence",
            "nameIt": "Intimidating Presence",
            "level": 14,
            "text": "As a Bonus Action, you can strike terror into others with your menacing presence and primal power. When you do so, each creature of your choice in a 30-foot Emanation [Area of Effect] originating from you must make a Wisdom saving throw (8 plus your Strength modifier and Proficiency). On a failed save, a creature has the Frightened condition for 1 minute. At the end of each of the Frightened creature's turns, the creature repeats the save, ending the effect on itself on a success.\n\nOnce you use this feature, you can't use it again until you finish a Long Rest unless you expend a use of your Rage (no action required) to restore your use of it."
          }
        ]
      },
      {
        "id": "wild-heart",
        "name": "Cammino del Cuore Selvaggio",
        "originalName": "Path of the Wild Heart",
        "shortName": "Wild Heart",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Path of the Wild Heart",
            "nameIt": "Path of the Wild Heart",
            "level": 3,
            "text": "Walk in Community with the Animal World\n\nBarbarians who follow the Path of the Wild Heart view themselves as kin to animals. These Barbarians learn magical means to communicate with animals, and their Rage heightens their connection to animals as it fills them with supernatural might.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Animal Speaker|Barbarian|XPHB|Wild Heart|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Rage of the Wilds|Barbarian|XPHB|Wild Heart|XPHB|3'}"
          },
          {
            "name": "Animal Speaker",
            "nameIt": "Animal Speaker",
            "level": 3,
            "text": "You can cast the Beast Sense and Speak with Animals spells but only as Rituals. Wisdom is your spellcasting ability for them."
          },
          {
            "name": "Rage of the Wilds",
            "nameIt": "Rage of the Wilds",
            "level": 3,
            "text": "Your Rage taps into the primal power of animals. Whenever you activate your Rage, you gain one of the following options of your choice.\n\n**Bear**: While your Rage is active, you have Resistance to every damage type except Force, Necrotic, Psychic, and Radiant.\n\n**Eagle**: When you activate your Rage, you can take the Disengage and Dash actions as part of that Bonus Action. While your Rage is active, you can take a Bonus Action to take both of those actions.\n\n**Wolf**: While your Rage is active, your allies have Advantage on attack rolls against any enemy of yours within 5 feet of you."
          },
          {
            "name": "Aspect of the Wilds",
            "nameIt": "Aspect of the Wilds",
            "level": 6,
            "text": "You gain one of the following options of your choice. Whenever you finish a Long Rest, you can change your choice.\n\n**Owl**: You have Darkvision with a range of 60 feet. If you already have Darkvision, its range increases by 60 feet.\n\n**Panther**: You have a Climb Speed equal to your Speed.\n\n**Salmon**: You have a Swim Speed equal to your Speed."
          },
          {
            "name": "Nature Speaker",
            "nameIt": "Nature Speaker",
            "level": 10,
            "text": "You can cast the Commune with Nature spell but only as a Ritual. Wisdom is your spellcasting ability for it."
          },
          {
            "name": "Power of the Wilds",
            "nameIt": "Power of the Wilds",
            "level": 14,
            "text": "Whenever you activate your Rage, you gain one of the following options of your choice.\n\n**Falcon**: While your Rage is active, you have a Fly Speed equal to your Speed if you aren't wearing any armor.\n\n**Lion**: While your Rage is active, any of your enemies within 5 feet of you have Disadvantage on attack rolls against targets other than you or another Barbarian who has this option active.\n\n**Ram**: While your Rage is active, you can cause a Large or smaller creature to have the Prone condition when you hit it with a melee attack."
          }
        ]
      },
      {
        "id": "world-tree",
        "name": "Cammino dell'Albero del Mondo",
        "originalName": "Path of the World Tree",
        "shortName": "World Tree",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Path of the World Tree",
            "nameIt": "Path of the World Tree",
            "level": 3,
            "text": "Trace the Roots and Branches of the Multiverse\n\nBarbarians who follow the Path of the World Tree connect with the cosmic tree Yggdrasil through their Rage. This tree grows among the Outer Planes, connecting them to each other and the Material Plane. These Barbarians draw on the tree's magic for vitality and as a means of dimensional travel.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Vitality of the Tree|Barbarian|XPHB|World Tree|XPHB|3'}"
          },
          {
            "name": "Vitality of the Tree",
            "nameIt": "Vitality of the Tree",
            "level": 3,
            "text": "Your Rage taps into the life force of the World Tree. You gain the following benefits.\n\n**Vitality Surge**: When you activate your Rage, you gain a number of Temporary Hit Points equal to your Barbarian level.\n\n**Life-Giving Force**: At the start of each of your turns while your Rage is active, you can choose another creature within 10 feet of yourself to gain Temporary Hit Points. To determine the number of Temporary Hit Points, roll a number of d6s equal to your Rage Damage bonus, and add them together. If any of these Temporary Hit Points remain when your Rage ends, they vanish."
          },
          {
            "name": "Branches of the Tree",
            "nameIt": "Branches of the Tree",
            "level": 6,
            "text": "Whenever a creature you can see starts its turn within 30 feet of you while your Rage is active, you can take a Reaction to summon spectral branches of the World Tree around it. The target must succeed on a Strength saving throw (8 plus your Strength modifier and Proficiency) or be teleported to an unoccupied space you can see within 5 feet of yourself or in the nearest unoccupied space you can see. After the target teleports, you can reduce its Speed to 0 until the end of the current turn."
          },
          {
            "name": "Battering Roots",
            "nameIt": "Battering Roots",
            "level": 10,
            "text": "During your turn, your reach is 10 feet greater with any Melee weapon that has the Heavy or Versatile property, as tendrils of the World Tree extend from you. When you hit with such a weapon on your turn, you can activate the {@itemMastery Push|XPHB or {@itemMastery Topple|XPHB mastery property in addition to a different mastery property you're using with that weapon."
          },
          {
            "name": "Travel Along the Tree",
            "nameIt": "Travel Along the Tree",
            "level": 14,
            "text": "When you activate your Rage and as a Bonus Action while your Rage is active, you can teleport up to 60 feet to an unoccupied space you can see.\n\nIn addition, once per Rage, you can increase the range of that teleport to 150 feet. When you do so, you can also bring up to six willing creatures who are within 10 feet of you. Each creature teleports to an unoccupied space of your choice within 10 feet of your destination space."
          }
        ]
      },
      {
        "id": "zealot",
        "name": "Cammino dello Zelota",
        "originalName": "Path of the Zealot",
        "shortName": "Zealot",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Path of the Zealot",
            "nameIt": "Path of the Zealot",
            "level": 3,
            "text": "Rage in Ecstatic Union with a God\n\nBarbarians who walk the Path of the Zealot receive boons from a god or pantheon. These Barbarians experience their Rage as an ecstatic episode of divine union that infuses them with power. They are often allies to the priests and other followers of their god or pantheon.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Divine Fury|Barbarian|XPHB|Zealot|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Warrior of the Gods|Barbarian|XPHB|Zealot|XPHB|3'}"
          },
          {
            "name": "Divine Fury",
            "nameIt": "Divine Fury",
            "level": 3,
            "text": "You can channel divine power into your strikes. On each of your turns while your Rage is active, the first creature you hit with a weapon or an Unarmed Strike takes extra damage equal to 1d6 plus half your Barbarian level (round down). The extra damage is Necrotic or Radiant; you choose the type each time you deal the damage."
          },
          {
            "name": "Warrior of the Gods",
            "nameIt": "Warrior of the Gods",
            "level": 3,
            "text": "A divine entity helps ensure you can continue the fight. You have a pool of four d12s that you can spend to heal yourself. As a Bonus Action, you can expend dice from the pool, roll them, and regain a number of Hit Points equal to the roll's total.\n\nYour pool regains all expended dice when you finish a Long Rest.\n\nThe pool's maximum number of dice increases by one when you reach Barbarian levels 6 (5 dice), 12 (6 dice), and 17 (7 dice)."
          },
          {
            "name": "Fanatical Focus",
            "nameIt": "Fanatical Focus",
            "level": 6,
            "text": "Once per active Rage, if you fail a saving throw, you can reroll it with a bonus equal to your Rage Damage bonus, and you must use the new roll."
          },
          {
            "name": "Zealous Presence",
            "nameIt": "Zealous Presence",
            "level": 10,
            "text": "As a Bonus Action, you unleash a battle cry infused with divine energy. Up to ten other creatures of your choice within 60 feet of you gain Advantage on attack rolls and saving throws until the start of your next turn.\n\nOnce you use this feature, you can't use it again until you finish a Long Rest unless you expend a use of your Rage (no action required) to restore your use of it."
          },
          {
            "name": "Rage of the Gods",
            "nameIt": "Rage of the Gods",
            "level": 14,
            "text": "When you activate your Rage, you can assume the form of a divine warrior. This form lasts for 1 minute or until you drop to 0 Hit Points. Once you use this feature, you can't do so again until you finish a Long Rest.\n\nWhile in this form, you gain the benefits below.\n\n**Flight**: You have a Fly Speed equal to your Speed and can hover.\n\n**Resistance**: You have Resistance to Necrotic, Psychic, and Radiant damage.\n\n**Revivification**: When a creature within 30 feet of you would drop to 0 Hit Points, you can take a Reaction to expend a use of your Rage to instead change the target's Hit Points to a number equal to your Barbarian level."
          }
        ]
      }
    ],
    "features": [
      {
        "name": "Rage",
        "nameIt": "Rage",
        "level": 1,
        "text": "You can imbue yourself with a primal power called Rage, a force that grants you extraordinary might and resilience. You can enter it as a Bonus Action if you aren't wearing Heavy armor.\n\nYou can enter your Rage the number of times shown for your Barbarian level in the Rages column of the Barbarian Features table. You regain one expended use when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest.\n\nWhile active, your Rage follows the rules below.\n\n**Damage Resistance**: You have Resistance to Bludgeoning, Piercing, and Slashing damage.\n\n**Rage Damage**: When you make an attack using Strength—with either a weapon or an Unarmed Strike—and deal damage to the target, you gain a bonus to the damage that increases as you gain levels as a Barbarian, as shown in the Rage Damage column of the Barbarian Features table.\n\n**Strength Advantage**: You have Advantage on Strength checks and Strength saving throws.\n\n**No Concentration or Spells**: You can't maintain Concentration|XPHB, and you can't cast spells.\n\n**Duration**: The Rage lasts until the end of your next turn, and it ends early if you don Heavy armor or have the Incapacitated condition. If your Rage is still active on your next turn, you can extend the Rage for another round by doing one of the following:\n\n• Make an attack roll against an enemy.\n• Force an enemy to make a saving throw.\n• Take a Bonus Action to extend your Rage.\n\nEach time the Rage is extended, it lasts until the end of your next turn. You can maintain a Rage for up to 10 minutes."
      },
      {
        "name": "Unarmored Defense",
        "nameIt": "Unarmored Defense",
        "level": 1,
        "text": "While you aren't wearing any armor, your base Armor Class equals 10 plus your Dexterity and Constitution modifiers. You can use a Shield and still gain this benefit."
      },
      {
        "name": "Weapon Mastery",
        "nameIt": "Weapon Mastery",
        "level": 1,
        "text": "Your training with weapons allows you to use the weapon mastery properties of two kinds of Simple or Martial Melee weapons of your choice, such as Greataxe and Handaxe. Whenever you finish a Long Rest, you can practice weapon drills and change one of those weapon choices.\n\nWhen you reach certain Barbarian levels, you gain the ability to use the weapon mastery properties of more kinds of weapons, as shown in the Weapon Mastery column of the Barbarian Features table."
      },
      {
        "name": "Danger Sense",
        "nameIt": "Danger Sense",
        "level": 2,
        "text": "You gain an uncanny sense of when things aren't as they should be, giving you an edge when you dodge perils. You have Advantage on Dexterity saving throws unless you have the Incapacitated condition."
      },
      {
        "name": "Reckless Attack",
        "nameIt": "Reckless Attack",
        "level": 2,
        "text": "You can throw aside all concern for defense to attack with increased ferocity. When you make your first attack roll on your turn, you can decide to attack recklessly. Doing so gives you Advantage on attack rolls using Strength until the start of your next turn, but attack rolls against you have Advantage during that time."
      },
      {
        "name": "Barbarian Subclass",
        "nameIt": "Barbarian Subclass",
        "level": 3,
        "text": "You gain a Barbarian subclass of your choice. A subclass is a specialization that grants you features at certain Barbarian levels. For the rest of your career, you gain each of your subclass's features that are of your Barbarian level or lower."
      },
      {
        "name": "Primal Knowledge",
        "nameIt": "Primal Knowledge",
        "level": 3,
        "text": "You gain proficiency in another skill of your choice from the skill list available to Barbarians at level 1.\n\nIn addition, while your Rage is active, you can channel primal power when you attempt certain tasks; whenever you make an ability check using one of the following skills, you can make it as a Strength check even if it normally uses a different ability: Acrobatics, Intimidation, Perception, Stealth, or Survival. When you use this ability, your Strength represents primal power coursing through you, honing your agility, bearing, and senses."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 4,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify. You gain this feature again at Barbarian levels 8, 12, and 16."
      },
      {
        "name": "Extra Attack",
        "nameIt": "Attacco extra",
        "level": 5,
        "text": "You can attack twice instead of once whenever you take the Attack action on your turn."
      },
      {
        "name": "Fast Movement",
        "nameIt": "Fast Movement",
        "level": 5,
        "text": "Your speed increases by 10 feet while you aren't wearing Heavy armor."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 6,
        "text": "You gain a feature from your Barbarian subclass."
      },
      {
        "name": "Feral Instinct",
        "nameIt": "Feral Instinct",
        "level": 7,
        "text": "Your instincts are so honed that you have Advantage on Initiative rolls."
      },
      {
        "name": "Instinctive Pounce",
        "nameIt": "Instinctive Pounce",
        "level": 7,
        "text": "As part of the Bonus Action you take to enter your Rage, you can move up to half your Speed."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 8,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Brutal Strike",
        "nameIt": "Brutal Strike",
        "level": 9,
        "text": "If you use Reckless Attack, you can forgo any Advantage on one Strength-based attack roll of your choice on your turn. The chosen attack roll mustn't have Disadvantage. If the chosen attack roll hits, the target takes an extra 1d10 damage of the same type dealt by the weapon or Unarmed Strike, and you can cause one Brutal Strike effect of your choice. You have the following effect options.\n\n**Forceful Blow**: The target is pushed 15 feet straight away from you. You can then move up to half your Speed straight toward the target without provoking Opportunity Attack.\n\n**Hamstring Blow**: The target's Speed is reduced by 15 feet until the start of your next turn. A target can be affected by only one Hamstring Blow at a time—the most recent one."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 10,
        "text": "You gain a feature from your Barbarian subclass."
      },
      {
        "name": "Relentless Rage",
        "nameIt": "Relentless Rage",
        "level": 11,
        "text": "Your Rage can keep you fighting despite grievous wounds. If you drop to 0 Hit Points while your Rage is active and don't die outright, you can make a 10 Constitution saving throw. If you succeed, your Hit Points instead change to a number equal to twice your Barbarian level.\n\nEach time you use this feature after the first, the DC increases by 5. When you finish a Short Rest or Long Rest, the DC resets to 10."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 12,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Improved Brutal Strike",
        "nameIt": "Improved Brutal Strike",
        "level": 13,
        "text": "You have honed new ways to attack furiously. The following effects are now among your Brutal Strike options.\n\n**Staggering Blow**: The target has Disadvantage on the next saving throw it makes, and it can't make Opportunity Attack until the start of your next turn.\n\n**Sundering Blow**: Before the start of your next turn, the next attack roll made by another creature against the target gains a +5 bonus to the roll. An attack roll can gain only one Sundering Blow bonus."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 14,
        "text": "You gain a feature from your Barbarian subclass."
      },
      {
        "name": "Persistent Rage",
        "nameIt": "Persistent Rage",
        "level": 15,
        "text": "When you roll Initiative, you can regain all expended uses of Rage. After you regain uses of Rage in this way, you can't do so again until you finish a Long Rest.\n\nIn addition, your Rage is so fierce that it now lasts for 10 minutes without you needing to do anything to extend it from round to round. Your Rage ends early if you have the Unconscious condition (not just the Incapacitated condition) or don Heavy armor."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 16,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Improved Brutal Strike",
        "nameIt": "Improved Brutal Strike",
        "level": 17,
        "text": "The extra damage of your Brutal Strike increases to 2d10. In addition, you can use two different Brutal Strike effects whenever you use your Brutal Strike feature."
      },
      {
        "name": "Indomitable Might",
        "nameIt": "Indomitable Might",
        "level": 18,
        "text": "If your total for a Strength check or Strength saving throw is less than your Strength score, you can use that score in place of the total."
      },
      {
        "name": "Epic Boon",
        "nameIt": "Aumento delle statistiche: Dono epico",
        "level": 19,
        "text": "You gain an Epic Boon feat or another {@5etools feat|feats.html of your choice for which you qualify. Boon of Irresistible Offense is recommended."
      },
      {
        "name": "Primal Champion",
        "nameIt": "Primal Champion",
        "level": 20,
        "text": "You embody primal power. Your Strength and Constitution scores increase by 4, to a maximum of 25."
      }
    ],
    "fluff": [
      "Barbarians are mighty warriors who are powered by primal forces of the multiverse that manifest as a Rage. More than a mere emotion—and not limited to anger—this Rage is an incarnation of a predator's ferocity, a storm's fury, and a sea's turmoil.",
      "Some Barbarians personify their Rage as a fierce spirit or revered forebear. Others see it as a connection to the pain and anguish of the world, as an impersonal tangle of wild magic, or as an expression of their own deepest self. For every Barbarian, their Rage is a power that fuels not just battle prowess, but also uncanny reflexes and heightened senses.",
      "Barbarians often serve as protectors and leaders in their communities. They charge headlong into danger so those under their protection don't have to. Their courage in the face of danger makes Barbarians perfectly suited for adventure."
    ],
    "callout": {
      "title": "La via della Furia Primordiale",
      "text": "Cosa risveglia la tua furia in combattimento? Uno spirito animale ancestrale che guida i tuoi passi? Il richiamo primordiale della tempesta? O una determinazione incrollabile forgiata nelle terre selvagge più ostili?"
    }
  },
  {
    "id": "bard",
    "name": "Bardo",
    "originalName": "Bard",
    "source": "PHB 2024",
    "quote": "Un mago, musicista e ballerino dal talento focoso.",
    "hitDie": 8,
    "image": "https://5e.tools/img/classes/XPHB/Bard.webp",
    "primaryAbility": [
      "Carisma"
    ],
    "proficiencies": [
      "Destrezza",
      "Carisma"
    ],
    "skills": "Scegli 3 abilità a tua scelta",
    "weapons": "Armi semplici",
    "tools": "Seleziona 3 strumenti musicali a scelta",
    "armor": "Armatura leggera",
    "startingEquipment": "Scegli A o B: (A) Armatura di cuoio, 2 pugnali, uno strumento musicale a tua scelta, un kit da artista e 19 GP; (B) 90 GP",
    "multiclassing": "Per ottenere una nuova classe o lasciarla, i punteggi dei tuoi attributi primari (Carisma) devono essere almeno pari a 13.",
    "tableLabels": [
      "Bardic Die",
      "Cantrips",
      "Prepared Spells",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    "tableLabelsIt": [
      "Ispirazione bardica",
      "Trucchi",
      "Incantesimi",
      "1°",
      "2°",
      "3°",
      "4°",
      "5°",
      "6°",
      "7°",
      "8°",
      "9°"
    ],
    "progression": [
      {
        "level": 1,
        "pb": "+2",
        "values": [
          "—",
          "2",
          "4"
        ]
      },
      {
        "level": 2,
        "pb": "+2",
        "values": [
          "—",
          "2",
          "5"
        ]
      },
      {
        "level": 3,
        "pb": "+2",
        "values": [
          "—",
          "2",
          "6"
        ]
      },
      {
        "level": 4,
        "pb": "+2",
        "values": [
          "—",
          "3",
          "7"
        ]
      },
      {
        "level": 5,
        "pb": "+3",
        "values": [
          "—",
          "3",
          "9"
        ]
      },
      {
        "level": 6,
        "pb": "+3",
        "values": [
          "—",
          "3",
          "10"
        ]
      },
      {
        "level": 7,
        "pb": "+3",
        "values": [
          "—",
          "3",
          "11"
        ]
      },
      {
        "level": 8,
        "pb": "+3",
        "values": [
          "—",
          "3",
          "12"
        ]
      },
      {
        "level": 9,
        "pb": "+4",
        "values": [
          "—",
          "3",
          "14"
        ]
      },
      {
        "level": 10,
        "pb": "+4",
        "values": [
          "—",
          "4",
          "15"
        ]
      },
      {
        "level": 11,
        "pb": "+4",
        "values": [
          "—",
          "4",
          "16"
        ]
      },
      {
        "level": 12,
        "pb": "+4",
        "values": [
          "—",
          "4",
          "16"
        ]
      },
      {
        "level": 13,
        "pb": "+5",
        "values": [
          "—",
          "4",
          "17"
        ]
      },
      {
        "level": 14,
        "pb": "+5",
        "values": [
          "—",
          "4",
          "17"
        ]
      },
      {
        "level": 15,
        "pb": "+5",
        "values": [
          "—",
          "4",
          "18"
        ]
      },
      {
        "level": 16,
        "pb": "+5",
        "values": [
          "—",
          "4",
          "18"
        ]
      },
      {
        "level": 17,
        "pb": "+6",
        "values": [
          "—",
          "4",
          "19"
        ]
      },
      {
        "level": 18,
        "pb": "+6",
        "values": [
          "—",
          "4",
          "20"
        ]
      },
      {
        "level": 19,
        "pb": "+6",
        "values": [
          "—",
          "4",
          "21"
        ]
      },
      {
        "level": 20,
        "pb": "+6",
        "values": [
          "—",
          "4",
          "22"
        ]
      }
    ],
    "subclasses": [
      {
        "id": "dance",
        "name": "Collegio della Danza",
        "originalName": "College of Dance",
        "shortName": "Dance",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "College of Dance",
            "nameIt": "College of Dance",
            "level": 3,
            "text": "Move in Harmony with the Cosmos\n\nBards of the College of Dance know that the Words of Creation can't be contained within speech or song; the words are uttered by the movements of celestial bodies and flow through the motions of the smallest creatures. These Bards practice a way of being in harmony with the whirling cosmos that emphasizes agility, speed, and grace.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Dazzling Footwork|Bard|XPHB|Dance|XPHB|3'}"
          },
          {
            "name": "Agile Strikes",
            "nameIt": "Colpi agili",
            "level": 3,
            "text": "When you expend a use of your Bardic Inspiration as part of an action, a Bonus Action, or a Reaction, you can make one Unarmed Strike as part of that action, Bonus Action, or Reaction."
          },
          {
            "name": "Bardic Damage",
            "nameIt": "Danno bardico",
            "level": 3,
            "text": "You can use Dexterity instead of Strength for the attack rolls of your Unarmed Strikes. When you deal damage with an Unarmed Strike, you can deal Bludgeoning damage equal to a roll of your Bardic Inspiration die plus your Dexterity modifier, instead of the strike's normal damage. This roll doesn't expend the die."
          },
          {
            "name": "Dance Virtuoso",
            "nameIt": "Virtuoso della danza",
            "level": 3,
            "text": "You have Advantage on any Charisma (Performance) check you make that involves you dancing."
          },
          {
            "name": "Dazzling Footwork",
            "nameIt": "Passo abbagliante",
            "level": 3,
            "text": "While you aren't wearing armor or wielding a Shield, you gain the following benefits.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Dance Virtuoso|Bard|XPHB|Dance|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Unarmored Defense|Bard|XPHB|Dance|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Agile Strikes|Bard|XPHB|Dance|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Bardic Damage|Bard|XPHB|Dance|XPHB|3'}"
          },
          {
            "name": "Unarmored Defense",
            "nameIt": "Unarmored Defense",
            "level": 3,
            "text": "Your base Armor Class equals 10 plus your Dexterity and Charisma modifiers."
          },
          {
            "name": "Inspiring Movement",
            "nameIt": "Movimento ispiratore",
            "level": 6,
            "text": "When an enemy you can see ends its turn within 5 feet of you, you can take a Reaction and expend one use of your Bardic Inspiration to move up to half your Speed. Then one ally of your choice within 30 feet of you can also move up to half their Speed using their Reaction.\n\nNone of this feature's movement provokes Opportunity Attack."
          },
          {
            "name": "Tandem Footwork",
            "nameIt": "Passo a due",
            "level": 6,
            "text": "When you roll Initiative, you can expend one use of your Bardic Inspiration if you don't have the Incapacitated condition. When you do so, roll your Bardic Inspiration die; you and each ally within 30 feet of you who can see or hear you gains a bonus to Initiative equal to the number rolled."
          },
          {
            "name": "Leading Evasion",
            "nameIt": "Leading Evasion",
            "level": 14,
            "text": "When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw and only half damage if you fail. If any creatures within 5 feet of you are making the same Dexterity saving throw, you can share this benefit with them for that save.\n\nYou can't use this feature if you have the Incapacitated condition."
          }
        ]
      },
      {
        "id": "glamour",
        "name": "Collegio del Fascino",
        "originalName": "College of Glamour",
        "shortName": "Glamour",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "College of Glamour",
            "nameIt": "College of Glamour",
            "level": 3,
            "text": "Weave Beguiling Fey Magic\n\nThe College of Glamour traces its origins to the beguiling magic of the Feywild. Bards who study this magic weave threads of beauty and terror into their songs and stories, and the mightiest among them can cloak themselves in otherworldly majesty. Their performances stir up wistful longing for forgotten innocence, evoke unconscious memories of long-held fears, and tug at the emotions of even the most hard-hearted listeners.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Beguiling Magic|Bard|XPHB|Glamour|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Mantle of Inspiration|Bard|XPHB|Glamour|XPHB|3'}"
          },
          {
            "name": "Beguiling Magic",
            "nameIt": "Magia incantevole",
            "level": 3,
            "text": "You always have the Charm Person and Mirror Image spells prepared.\n\nIn addition, immediately after you cast an Enchantment or Illusion spell using a spell slot, you can cause a creature you can see within 60 feet of yourself to make a Wisdom saving throw against your spell save DC. On a failed save, the target has the Charmed or Frightened condition (your choice) for 1 minute. The target repeats the save at the end of each of its turns, ending the effect on itself on a success.\n\nOnce you use this benefit, you can't use it again until you finish a Long Rest. You can also restore your use of it by expending one use of your Bardic Inspiration (no action required)."
          },
          {
            "name": "Mantle of Inspiration",
            "nameIt": "Mantello dell'Ispirazione",
            "level": 3,
            "text": "You can weave fey magic into a song or dance to fill others with vigor. As a Bonus Action, you can expend a use of Bardic Inspiration, rolling a Bardic Inspiration die. When you do so, choose a number of other creatures within 60 feet of yourself, up to a number equal to your Charisma modifier (minimum of one creature). Each of those creatures gains a number of Temporary Hit Points equal to two times the number rolled on the Bardic Inspiration die, and then each can use its Reaction to move up to its Speed without provoking Opportunity Attack."
          },
          {
            "name": "Mantle of Majesty",
            "nameIt": "Mantello di grandezza",
            "level": 6,
            "text": "You always have the Command spell prepared.\n\nAs a Bonus Action, you cast Command without expending a spell slot, and you take on an unearthly appearance for 1 minute or until your Concentration|XPHB ends. During this time, you can cast Command as a Bonus Action without expending a spell slot.\n\nAny creature Charmed by you automatically fails its saving throw against the Command you cast with this feature.\n\nOnce you use this feature, you can't use it again until you finish a Long Rest. You can also restore your use of it by expending a level 3+ spell slot (no action required)."
          },
          {
            "name": "Unbreakable Majesty",
            "nameIt": "Grandezza indistruttibile",
            "level": 14,
            "text": "As a Bonus Action, you can assume a magically majestic presence for 1 minute or until you have the Incapacitated condition. For the duration, whenever any creature hits you with an attack roll for the first time on a turn, the attacker must succeed on a Charisma saving throw against your spell save DC, or the attack misses instead, as the creature recoils from your majesty.\n\nOnce you assume this majestic presence, you can't do so again until you finish a Short Rest or Long Rest."
          }
        ]
      },
      {
        "id": "lore",
        "name": "Collegio del Sapere",
        "originalName": "College of Lore",
        "shortName": "Lore",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "College of Lore",
            "nameIt": "College of Lore",
            "level": 3,
            "text": "Plumb the Depths of Magical Knowledge\n\nBards of the College of Lore collect spells and secrets from diverse sources, such as scholarly tomes, mystical rites, and peasant tales. The college's members gather in libraries and universities to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self-important figures of authority.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Bonus Proficiencies|Bard|XPHB|Lore|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Cutting Words|Bard|XPHB|Lore|XPHB|3'}"
          },
          {
            "name": "Bonus Proficiencies",
            "nameIt": "Competenze bonus",
            "level": 3,
            "text": "You gain proficiency with three skills of your choice."
          },
          {
            "name": "Cutting Words",
            "nameIt": "Parole taglienti",
            "level": 3,
            "text": "You learn to use your wit to supernaturally distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of yourself makes a damage roll or succeeds on an ability check or attack roll, you can take a Reaction to expend one use of your Bardic Inspiration; roll your Bardic Inspiration die, and subtract the number rolled from the creature's roll, reducing the damage or potentially turning the success into a failure."
          },
          {
            "name": "Magical Discoveries",
            "nameIt": "Magical Discoveries",
            "level": 6,
            "text": "You learn two spells of your choice. These spells can come from the Cleric, Druid, or Wizard spell list or any combination thereof (see a class's section for its spell list). A spell you choose must be a cantrip or a spell for which you have spell slots, as shown in the Bard Features table.\n\nYou always have the chosen spells prepared, and whenever you gain a Bard level, you can replace one of the spells with another spell that meets these requirements."
          },
          {
            "name": "Peerless Skill",
            "nameIt": "Abilità ineguagliabile",
            "level": 14,
            "text": "When you make an ability check or attack roll and fail, you can expend one use of Bardic Inspiration; roll the Bardic Inspiration die, and add the number rolled to the d20, potentially turning a failure into a success. On a failure, the Bardic Inspiration isn't expended."
          }
        ]
      },
      {
        "id": "valor",
        "name": "Collegio del Valore",
        "originalName": "College of Valor",
        "shortName": "Valor",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "College of Valor",
            "nameIt": "College of Valor",
            "level": 3,
            "text": "Sing the Deeds of Ancient Heroes\n\nBards of the College of Valor are daring storytellers whose tales preserve the memory of the great heroes of the past. These Bards sing the deeds of the mighty in vaulted halls or to crowds gathered around great bonfires. They travel to witness great events firsthand and to ensure that the memory of these events doesn't pass away. With their songs, they inspire new generations to reach the same heights of accomplishment as the heroes of old.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Combat Inspiration|Bard|XPHB|Valor|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Martial Training|Bard|XPHB|Valor|XPHB|3'}"
          },
          {
            "name": "Combat Inspiration",
            "nameIt": "Ispirazione da combattimento",
            "level": 3,
            "text": "You can use your wit to turn the tide of battle. A creature that has a Bardic Inspiration die from you can use it for one of the following effects.\n\n**Defense**: When the creature is hit by an attack roll, that creature can use its Reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack, potentially causing the attack to miss.\n\n**Offense**: Immediately after the creature hits a target with an attack roll, the creature can roll the Bardic Inspiration die and add the number rolled to the attack's damage against the target."
          },
          {
            "name": "Martial Training",
            "nameIt": "Martial Training",
            "level": 3,
            "text": "You gain proficiency with Martial weapons and training with Medium armor and Shield.\n\nIn addition, you can use a Simple or Martial weapon as a Spellcasting Focus to cast spells from your Bard spell list."
          },
          {
            "name": "Extra Attack",
            "nameIt": "Attacco extra",
            "level": 6,
            "text": "You can attack twice instead of once whenever you take the Attack action on your turn.\n\nIn addition, you can cast one of your cantrips that has a casting time of an action in place of one of those attacks."
          },
          {
            "name": "Battle Magic",
            "nameIt": "Magia da battaglia",
            "level": 14,
            "text": "After you cast a spell that has a casting time of an action, you can make one attack with a weapon as a Bonus Action."
          }
        ]
      }
    ],
    "features": [
      {
        "name": "Bardic Inspiration",
        "nameIt": "Ispirazione bardica",
        "level": 1,
        "text": "You can supernaturally inspire others through words, music, or dance. This inspiration is represented by your Bardic Inspiration die, which is a d6.\n\n**Using Bardic Inspiration**: As a Bonus Action, you can inspire another creature within 60 feet of yourself who can see or hear you. That creature gains one of your Bardic Inspiration dice. A creature can have only one Bardic Inspiration die at a time.\n\nOnce within the next hour when the creature fails a D20 Test, the creature can roll the Bardic Inspiration die and add the number rolled to the d20, potentially turning the failure into a success. A Bardic Inspiration die is expended when it's rolled.\n\n**Number of Uses**: You can confer a Bardic Inspiration die a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.\n\n**At Higher Levels**: Your Bardic Inspiration die changes when you reach certain Bard levels, as shown in the Bardic Die column of the Bard Features table. The die becomes a d8 at level 5, a d10 at level 10, and a d12 at level 15."
      },
      {
        "name": "Spellcasting",
        "nameIt": "Incantesimi",
        "level": 1,
        "text": "You have learned to cast spells through your bardic arts. See chapter 7|XPHB|7 for the rules on spellcasting. The information below details how you use those rules with Bard spells, which appear in the Bard spell list later in the class's description.\n\n**Cantrips**: You know two cantrips of your choice from the Bard spell list. Dancing Lights and Vicious Mockery are recommended.\n\nWhenever you gain a Bard level, you can replace one of your cantrips with another cantrip of your choice from the Bard spell list.\n\nWhen you reach Bard levels 4 and 10, you learn another cantrip of your choice from the Bard spell list, as shown in the Cantrips column of the Bard Features table.\n\n**Spell Slots**: The Bard Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.\n\n**Prepared Spells of Level 1+**: You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Bard spell list. Charm Person, Color Spray, Dissonant Whispers, and Healing Word are recommended.\n\nThe number of spells on your list increases as you gain Bard levels, as shown in the Prepared Spells column of the Bard Features table. Whenever that number increases, choose additional spells from the Bard spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Bard, your list of prepared spells can include six spells of levels 1 and 2 in any combination.\n\nIf another Bard feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Bard spells for you.\n\n**Changing Your Prepared Spells**: Whenever you gain a Bard level, you can replace one spell on your list with another Bard spell for which you have spell slots.\n\n**Spellcasting Ability**: Charisma is your spellcasting ability for your Bard spells.\n\n**Spellcasting Focus**: You can use a Musical Instrument as a Spellcasting Focus for your Bard spells."
      },
      {
        "name": "Expertise",
        "nameIt": "Competenza",
        "level": 2,
        "text": "You gain Expertise in two of your skill proficiencies of your choice. Performance and Persuasion are recommended if you have proficiency in them.\n\nAt Bard level 9, you gain Expertise in two more of your skill proficiencies of your choice."
      },
      {
        "name": "Jack of All Trades",
        "nameIt": "Tuttofare",
        "level": 2,
        "text": "You can add half your Proficiency (round down) to any ability check you make that uses a skill proficiency you lack and that doesn't otherwise use your Proficiency.\n\nFor example, if you make a Strength (Athletics) check and lack Athletics proficiency, you can add half your Proficiency to the check.\n\nDoes your Bard beat a drum while chanting the deeds of ancient heroes? Strum a lute while crooning romantic tunes? Perform arias of stirring power? Recite dramatic monologues from classic tragedies? Use the rhythm of a folk dance to coordinate the movement of allies in battle? Compose naughty limericks?\n\nWhen you play a Bard, consider the style of artistic performance you favor, the moods you might invoke, and the themes that inspire your own creations. Are your poems inspired by moments of natural beauty, or are they brooding reflections on loss? Do you prefer lofty hymns or rowdy tavern songs? Are you drawn to laments for the fallen or celebrations of joy? Do you dance merry jigs or perform elaborate interpretive choreography? Do you focus on one style of performance or strive to master them all?"
      },
      {
        "name": "Bard Subclass",
        "nameIt": "Sottoclasse del Bardo",
        "level": 3,
        "text": "You gain a Bard subclass of your choice. A subclass is a specialization that grants you features at certain Bard levels. For the rest of your career, you gain each of your subclass's features that are of your Bard level or lower."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 4,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify. You gain this feature again at Bard levels 8, 12, and 16."
      },
      {
        "name": "Font of Inspiration",
        "nameIt": "Fonte di ispirazione",
        "level": 5,
        "text": "You now regain all your expended uses of Bardic Inspiration when you finish a Short Rest or Long Rest.\n\nIn addition, you can expend a spell slot (no action required) to regain one expended use of Bardic Inspiration."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 6,
        "text": "You gain a feature from your Bard Subclass."
      },
      {
        "name": "Countercharm",
        "nameIt": "Controincantesimi",
        "level": 7,
        "text": "You can use musical notes or words of power to disrupt mind-influencing effects. If you or a creature within 30 feet of you fails a saving throw against an effect that applies the Charmed or Frightened condition, you can take a Reaction to cause the save to be rerolled, and the new roll has Advantage."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 8,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Expertise",
        "nameIt": "Competenza",
        "level": 9,
        "text": "You gain Expertise in two of your Skill Proficiencies of your choice."
      },
      {
        "name": "Magical Secrets",
        "nameIt": "Segreti magici",
        "level": 10,
        "text": "You've learned secrets from various magical traditions. Whenever you reach a Bard level (including this level) and the Prepared Spells number in the Bard Features table increases, you can choose any of your new prepared spells from the Bard, Cleric, Druid, and Wizard spell lists, and the chosen spells count as Bard spells for you (see a class's section for its spell list). In addition, whenever you replace a spell prepared for this class, you can replace it with a spell from those lists."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 12,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 14,
        "text": "You gain a feature from your Bard Subclass."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 16,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Superior Inspiration",
        "nameIt": "Ispirazione suprema",
        "level": 18,
        "text": "When you roll Initiative, you regain expended uses of Bardic Inspiration until you have two if you have fewer than that."
      },
      {
        "name": "Epic Boon",
        "nameIt": "Aumento delle statistiche: Dono epico",
        "level": 19,
        "text": "You gain an Epic Boon feat or another {@5etools feat|feats.html of your choice for which you qualify. Boon of Spell Recall is recommended."
      },
      {
        "name": "Words of Creation",
        "nameIt": "Parole della Creazione",
        "level": 20,
        "text": "You have mastered two of the Words of Creation: the words of life and death. You therefore always have the Power Word Heal and Power Word Kill spells prepared. When you cast either spell, you can target a second creature with it if that creature is within 10 feet of the first target."
      }
    ],
    "fluff": [
      "Invoking magic through music, dance, and verse, Bards are expert at inspiring others, soothing hurts, disheartening foes, and creating illusions. Bards believe the multiverse was spoken into existence and that remnants of its Words of Creation still resound and glimmer on every plane of existence. Bardic magic attempts to harness those words, which transcend any language.",
      "Anything can inspire a new song or tale, so Bards are fascinated by almost everything. They become masters of many things, including performing music, working magic, and making jests.",
      "A Bard's life is spent traveling, gathering lore, telling stories, and living on the gratitude of audiences, much like any other entertainer. But Bards' depth of knowledge and mastery of magic sets them apart."
    ],
    "callout": {
      "title": "Il repertorio di Bard",
      "text": "Il tuo bardo canta le gesta di antichi eroi al ritmo di un tamburo? Suona il liuto intonando melodie romantiche? Esegue arie commoventi? Recita monologhi drammatici tratti da tragedie classiche? Usa il ritmo di una danza popolare per coordinare i movimenti degli alleati in battaglia? Compone canzoncine giocose?\n\nQuando interpreti un Bardo, considera il tuo stile di esecuzione preferito, l'atmosfera e il tono che imprimi alle tue magie."
    }
  },
  {
    "id": "cleric",
    "name": "Chierico",
    "originalName": "Cleric",
    "source": "PHB 2024",
    "quote": "Un tramite terreno del potere divino, maestro di benedizioni miracolose e punizioni sacre.",
    "hitDie": 8,
    "image": "https://5e.tools/img/classes/XPHB/Cleric.webp",
    "primaryAbility": [
      "Saggezza"
    ],
    "proficiencies": [
      "Saggezza",
      "Carisma"
    ],
    "skills": "Scegli 2 abilità a tua scelta",
    "weapons": "Armi semplici",
    "tools": "Nessuna",
    "armor": "Armatura leggera, Armatura media, Scudi",
    "startingEquipment": "Choose A or B: (A) Chain Shirt, Shield, Mace, Holy Symbol, Priest's Pack, 7 GP; or (B) 110 GP",
    "multiclassing": "Per ottenere una nuova classe o lasciarla, i punteggi dei tuoi attributi primari (Saggezza) devono essere almeno pari a 13.",
    "tableLabels": [
      "Channel Divinity",
      "Cantrips",
      "Prepared Spells",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    "tableLabelsIt": [
      "Incanalare divinità",
      "Trucchi",
      "Incantesimi",
      "1°",
      "2°",
      "3°",
      "4°",
      "5°",
      "6°",
      "7°",
      "8°",
      "9°"
    ],
    "progression": [
      {
        "level": 1,
        "pb": "+2",
        "values": [
          "0",
          "3",
          "4"
        ]
      },
      {
        "level": 2,
        "pb": "+2",
        "values": [
          "2",
          "3",
          "5"
        ]
      },
      {
        "level": 3,
        "pb": "+2",
        "values": [
          "2",
          "3",
          "6"
        ]
      },
      {
        "level": 4,
        "pb": "+2",
        "values": [
          "2",
          "4",
          "7"
        ]
      },
      {
        "level": 5,
        "pb": "+3",
        "values": [
          "2",
          "4",
          "9"
        ]
      },
      {
        "level": 6,
        "pb": "+3",
        "values": [
          "3",
          "4",
          "10"
        ]
      },
      {
        "level": 7,
        "pb": "+3",
        "values": [
          "3",
          "4",
          "11"
        ]
      },
      {
        "level": 8,
        "pb": "+3",
        "values": [
          "3",
          "4",
          "12"
        ]
      },
      {
        "level": 9,
        "pb": "+4",
        "values": [
          "3",
          "4",
          "14"
        ]
      },
      {
        "level": 10,
        "pb": "+4",
        "values": [
          "3",
          "5",
          "15"
        ]
      },
      {
        "level": 11,
        "pb": "+4",
        "values": [
          "3",
          "5",
          "16"
        ]
      },
      {
        "level": 12,
        "pb": "+4",
        "values": [
          "3",
          "5",
          "16"
        ]
      },
      {
        "level": 13,
        "pb": "+5",
        "values": [
          "3",
          "5",
          "17"
        ]
      },
      {
        "level": 14,
        "pb": "+5",
        "values": [
          "3",
          "5",
          "17"
        ]
      },
      {
        "level": 15,
        "pb": "+5",
        "values": [
          "3",
          "5",
          "18"
        ]
      },
      {
        "level": 16,
        "pb": "+5",
        "values": [
          "3",
          "5",
          "18"
        ]
      },
      {
        "level": 17,
        "pb": "+6",
        "values": [
          "3",
          "5",
          "19"
        ]
      },
      {
        "level": 18,
        "pb": "+6",
        "values": [
          "4",
          "5",
          "20"
        ]
      },
      {
        "level": 19,
        "pb": "+6",
        "values": [
          "4",
          "5",
          "21"
        ]
      },
      {
        "level": 20,
        "pb": "+6",
        "values": [
          "4",
          "5",
          "22"
        ]
      }
    ],
    "subclasses": [
      {
        "id": "life",
        "name": "Dominio della Vita",
        "originalName": "Life Domain",
        "shortName": "Life",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Life Domain",
            "nameIt": "Life Domain",
            "level": 3,
            "text": "Soothe the Hurts of the World\n\nThe Life Domain focuses on the positive energy that helps sustain all life in the multiverse. Clerics who tap into this domain are masters of healing, using that life force to cure many hurts.\n\nExistence itself relies on the positive energy associated with this domain, so a Cleric of almost any religious tradition might choose it. This domain is particularly associated with agricultural deities, gods of healing or endurance, and gods of home and community. Religious orders of healing also seek the magic of this domain.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Life Domain Spells|Cleric|XPHB|Life|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Disciple of Life|Cleric|XPHB|Life|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Preserve Life|Cleric|XPHB|Life|XPHB|3'}"
          },
          {
            "name": "Disciple of Life",
            "nameIt": "Disciple of Life",
            "level": 3,
            "text": "When a spell you cast with a spell slot restores Hit Points to a creature, that creature regains additional Hit Points on the turn you cast the spell. The additional Hit Points equal 2 plus the spell slot's level."
          },
          {
            "name": "Life Domain Spells",
            "nameIt": "Life Domain Spells",
            "level": 3,
            "text": "Your connection to this divine domain ensures you always have certain spells ready. When you reach a Cleric level specified in the Life Domain Spells table, you thereafter always have the listed spells prepared.\n\nCleric Level | Prepared Spells\n--- | ---\n3 | Aid, Bless, Cure Wounds, Lesser Restoration\n5 | Mass Healing Word, Revivify\n7 | Aura of Life, Death Ward\n9 | Greater Restoration, Mass Cure Wounds"
          },
          {
            "name": "Preserve Life",
            "nameIt": "Preserve Life",
            "level": 3,
            "text": "As a Magic action, you present your Holy Symbol and expend a use of your Channel Divinity to evoke healing energy that can restore a number of Hit Points equal to five times your Cleric level. Choose Bloodied|XPHB creatures within 30 feet of yourself (which can include you), and divide those Hit Points among them. This feature can restore a creature to no more than half its Hit Points maximum."
          },
          {
            "name": "Blessed Healer",
            "nameIt": "Blessed Healer",
            "level": 6,
            "text": "The healing spells you cast on others heal you as well. Immediately after you cast a spell with a spell slot that restores Hit Points to one or more creatures other than yourself, you regain Hit Points equal to 2 plus the spell slot's level."
          },
          {
            "name": "Supreme Healing",
            "nameIt": "Supreme Healing",
            "level": 17,
            "text": "When you would normally roll one or more dice to restore Hit Points to a creature with a spell or Channel Divinity, don't roll those dice for the healing; instead use the highest number possible for each die. For example, instead of restoring 2d6 Hit Points to a creature with a spell, you restore 12."
          }
        ]
      },
      {
        "id": "light",
        "name": "Dominio della Luce",
        "originalName": "Light Domain",
        "shortName": "Light",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Light Domain",
            "nameIt": "Light Domain",
            "level": 3,
            "text": "Bring Light to Banish Darkness\n\nThe Light Domain emphasizes the divine power to bring about blazing fire and revelation. Clerics who wield this power are enlightened souls infused with radiance and the power of their deities' discerning vision, charged with chasing away lies and burning away darkness.\n\nThe Light Domain is associated with gods of truth, vigilance, beauty, insight, and renewal. Some of these gods are identified with the sun or as charioteers who guide the sun across the sky. Others are sentinels who pierce deception. Some are deities of beauty and artistry who teach that art is a vehicle for the soul's improvement.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Light Domain Spells|Cleric|XPHB|Light|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Radiance of the Dawn|Cleric|XPHB|Light|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Warding Flare|Cleric|XPHB|Light|XPHB|3'}"
          },
          {
            "name": "Light Domain Spells",
            "nameIt": "Light Domain Spells",
            "level": 3,
            "text": "Your connection to this divine domain ensures you always have certain spells ready. When you reach a Cleric level specified in the Light Domain Spells table, you thereafter always have the listed spells prepared.\n\nCleric Level | Prepared Spells\n--- | ---\n3 | Burning Hands, Faerie Fire, Scorching Ray, See Invisibility\n5 | Daylight, Fireball\n7 | Arcane Eye, Wall of Fire\n9 | Flame Strike, Scrying"
          },
          {
            "name": "Radiance of the Dawn",
            "nameIt": "Radiance of the Dawn",
            "level": 3,
            "text": "As a Magic action, you present your Holy Symbol and expend a use of your Channel Divinity to emit a flash of light in a 30-foot Emanation [Area of Effect] originating from yourself. Any magical Darkness—such as that created by the Darkness spell—in that area is dispelled. Additionally, each creature of your choice in that area must make a Constitution saving throw, taking Radiant damage equal to 2d10 plus your Cleric level on a failed save or half as much damage on a successful one."
          },
          {
            "name": "Warding Flare",
            "nameIt": "Warding Flare",
            "level": 3,
            "text": "When a creature that you can see within 30 feet of yourself makes an attack roll, you can take a Reaction to impose Disadvantage on the attack roll, causing light to flare before it hits or misses.\n\nYou can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a Long Rest."
          },
          {
            "name": "Improved Warding Flare",
            "nameIt": "Improved Warding Flare",
            "level": 6,
            "text": "You regain all expended uses of your Warding Flare when you finish a Short Rest or Long Rest.\n\nIn addition, whenever you use Warding Flare, you can give the target of the triggering attack a number of Temporary Hit Points equal to 2d6 plus your Wisdom modifier."
          },
          {
            "name": "Corona of Light",
            "nameIt": "Corona of Light",
            "level": 17,
            "text": "As a Magic action, you cause yourself to emit an aura of sunlight that lasts for 1 minute or until you dismiss it (no action required). You emit Bright Light in a 60-foot radius and Dim Light for an additional 30 feet. Your enemies in the Bright Light have Disadvantage on saving throws against your Radiance of the Dawn and any spell that deals Fire or Radiant damage.\n\nYou can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a Long Rest."
          }
        ]
      },
      {
        "id": "trickery",
        "name": "Dominio dell'Inganno",
        "originalName": "Trickery Domain",
        "shortName": "Trickery",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Trickery Domain",
            "nameIt": "Trickery Domain",
            "level": 3,
            "text": "Make Mischief and Challenge Authority\n\nThe Trickery Domain offers magic of deception, illusion, and stealth. Clerics who wield this magic are a disruptive force in the world, puncturing pride, mocking tyrants, freeing captives, and flouting hollow traditions. They prefer subterfuge and pranks to direct confrontation.\n\nGods of trickery are mischief-makers and instigators who stand as a constant challenge to the accepted order among both gods and mortals. They embody the forces of change and social upheaval, and they're patrons of thieves, scoundrels, gamblers, rebels, and liberators. Religious orders that operate in secret, especially those that seek to undermine oppressive governments or hierarchies, also draw on the power of the Trickery Domain.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Trickery Domain Spells|Cleric|XPHB|Trickery|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Blessing of the Trickster|Cleric|XPHB|Trickery|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Invoke Duplicity|Cleric|XPHB|Trickery|XPHB|3'}"
          },
          {
            "name": "Blessing of the Trickster",
            "nameIt": "Blessing of the Trickster",
            "level": 3,
            "text": "As a Magic action, you can choose yourself or a willing creature within 30 feet of yourself to have Advantage on Dexterity (Stealth) checks. This blessing lasts until you finish a Long Rest or you use this feature again."
          },
          {
            "name": "Invoke Duplicity",
            "nameIt": "Invoke Duplicity",
            "level": 3,
            "text": "As a Bonus Action, you can expend one use of your Channel Divinity to create a perfect visual illusion of yourself in an unoccupied space you can see within 30 feet of yourself. The illusion is intangible and doesn't occupy its space. It lasts for 1 minute, but it ends early if you dismiss it (no action required) or have the Incapacitated condition. The illusion is animated and mimics your expressions and gestures. While it persists, you gain the following benefits.\n\n**Cast Spells**: You can cast spells as though you were in the illusion's space, but you must use your own senses.\n\n**Distract**: When both you and your illusion are within 5 feet of a creature that can see the illusion, you have Advantage on attack rolls against that creature, given how distracting the illusion is to the target.\n\n**Move**: As a Bonus Action, you can move the illusion up to 30 feet to an unoccupied space you can see that is within 120 feet of yourself."
          },
          {
            "name": "Trickery Domain Spells",
            "nameIt": "Trickery Domain Spells",
            "level": 3,
            "text": "Your connection to this divine domain ensures you always have certain spells ready. When you reach a Cleric level specified in the Trickery Domain Spells table, you thereafter always have the listed spells prepared.\n\nCleric Level | Prepared Spells\n--- | ---\n3 | Charm Person, Disguise Self, Invisibility, Pass without Trace\n5 | Hypnotic Pattern, Nondetection\n7 | Confusion, Dimension Door\n9 | Dominate Person, Modify Memory"
          },
          {
            "name": "Trickster's Transposition",
            "nameIt": "Trickster's Transposition",
            "level": 6,
            "text": "Whenever you take the Bonus Action to create or move the illusion of your Invoke Duplicity, you can teleport, swapping places with the illusion."
          },
          {
            "name": "Improved Duplicity",
            "nameIt": "Improved Duplicity",
            "level": 17,
            "text": "The illusion of your Invoke Duplicity has grown more powerful in the following ways.\n\n**Shared Distraction**: When you and your allies make attack rolls against a creature within 5 feet of the illusion, the attack rolls have Advantage.\n\n**Healing Illusion**: When the illusion ends, you or a creature of your choice within 5 feet of it regains a number of Hit Points equal to your Cleric level."
          }
        ]
      },
      {
        "id": "war",
        "name": "Dominio della Guerra",
        "originalName": "War Domain",
        "shortName": "War",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "War Domain",
            "nameIt": "War Domain",
            "level": 3,
            "text": "Inspire Valor and Smite Foes\n\nWar has many manifestations. It can make heroes of ordinary people. It can be desperate and horrific, with acts of cruelty and cowardice eclipsing instances of excellence and courage. Clerics who tap into the magic of the War Domain excel in battle, inspiring others to fight the good fight or offering acts of violence as prayers.\n\nGods of the War Domain watch over warriors and reward them for their great deeds. They include champions of honor and chivalry as well as gods of destruction and pillage. Other war gods take a more neutral stance, promoting war in all its manifestations and supporting warriors in any circumstance.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'War Domain Spells|Cleric|XPHB|War|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'War Priest|Cleric|XPHB|War|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Guided Strike|Cleric|XPHB|War|XPHB|3'}"
          },
          {
            "name": "Guided Strike",
            "nameIt": "Guided Strike",
            "level": 3,
            "text": "When you or a creature within 30 feet of you misses with an attack roll, you can expend one use of your Channel Divinity and give that roll a +10 bonus, potentially causing it to hit. When you use this feature to benefit another creature's attack roll, you must take a Reaction to do so."
          },
          {
            "name": "War Domain Spells",
            "nameIt": "War Domain Spells",
            "level": 3,
            "text": "Your connection to this divine domain ensures you always have certain spells ready. When you reach a Cleric level specified in the War Domain Spells table, you thereafter always have the listed spells prepared.\n\nCleric Level | Prepared Spells\n--- | ---\n3 | Guiding Bolt, Magic Weapon, Shield of Faith, Spiritual Weapon\n5 | Crusader's Mantle, Spirit Guardians\n7 | Fire Shield, Freedom of Movement\n9 | Hold Monster, Steel Wind Strike"
          },
          {
            "name": "War Priest",
            "nameIt": "War Priest",
            "level": 3,
            "text": "As a Bonus Action, you can make one attack with a weapon or an Unarmed Strike. You can use this Bonus Action a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a Short Rest or Long Rest."
          },
          {
            "name": "War God's Blessing",
            "nameIt": "War God's Blessing",
            "level": 6,
            "text": "You can expend a use of your Channel Divinity to cast Shield of Faith or Spiritual Weapon rather than expending a spell slot. When you cast either spell in this way, the spell doesn't require Concentration|XPHB. Instead the spell lasts for 1 minute, but it ends early if you cast that spell again, have the Incapacitated condition, or die."
          },
          {
            "name": "Avatar of Battle",
            "nameIt": "Avatar of Battle",
            "level": 17,
            "text": "You gain Resistance to Bludgeoning, Piercing, and Slashing damage."
          }
        ]
      }
    ],
    "features": [
      {
        "name": "Divine Order",
        "nameIt": "Divine Order",
        "level": 1,
        "text": "You have dedicated yourself to one of the following sacred roles of your choice.\n\n{'type': 'refClassFeature', 'classFeature': 'Protector|Cleric|XPHB|1|XPHB'}\n\n{'type': 'refClassFeature', 'classFeature': 'Thaumaturge|Cleric|XPHB|1|XPHB'}"
      },
      {
        "name": "Protector",
        "nameIt": "Protector",
        "level": 1,
        "text": "Trained for battle, you gain proficiency with Martial weapons and training with Heavy armor."
      },
      {
        "name": "Spellcasting",
        "nameIt": "Incantesimi",
        "level": 1,
        "text": "You have learned to cast spells through prayer and meditation. See chapter 7|XPHB|7 for the rules on spellcasting. The information below details how you use those rules with Cleric spells, which appear on the Cleric spell list later in the class's description.\n\n**Cantrips**: You know three cantrips of your choice from the Cleric spell list. Guidance, Sacred Flame, and Thaumaturgy are recommended.\n\nWhenever you gain a Cleric level, you can replace one of your cantrips with another cantrip of your choice from the Cleric spell list.\n\nWhen you reach Cleric levels 4 and 10, you learn another cantrip of your choice from the Cleric spell list, as shown in the Cantrips column of the Cleric Features table.\n\n**Spell Slots**: The Cleric Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.\n\n**Prepared Spells of Level 1+**: You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Cleric spell list. Bless, Cure Wounds, Guiding Bolt, and Shield of Faith are recommended.\n\nThe number of spells on your list increases as you gain Cleric levels, as shown in the Prepared Spells column of the Cleric Features table. Whenever that number increases, choose additional spells from the Cleric spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Cleric, your list of prepared spells can include six spells of levels 1 and 2 in any combination.\n\nIf another Cleric feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Cleric spells for you.\n\n**Changing Your Prepared Spells**: Whenever you finish a Long Rest, you can change your list of prepared spells, replacing any of the spells there with other Cleric spells for which you have spell slots.\n\n**Spellcasting Ability**: Wisdom is your spellcasting ability for your Cleric spells.\n\n**Spellcasting Focus**: You can use a Holy Symbol as a Spellcasting Focus for your Cleric spells."
      },
      {
        "name": "Thaumaturge",
        "nameIt": "Thaumaturge",
        "level": 1,
        "text": "You know one extra cantrip from the Cleric spell list. In addition, your mystical connection to the divine gives you a bonus to your Intelligence (Arcana or Religion) checks. The bonus equals your Wisdom modifier (minimum of +1)."
      },
      {
        "name": "Channel Divinity",
        "nameIt": "Channel Divinity",
        "level": 2,
        "text": "You can channel divine energy directly from the Outer Planes to fuel magical effects. You start with two such effects: Divine Spark and Turn Undead, each of which is described below. Each time you use this class's Channel Divinity, choose which Channel Divinity effect from this class to create. You gain additional effect options at higher Cleric levels.\n\nYou can use this class's Channel Divinity twice. You regain one of its expended uses when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest. You gain additional uses when you reach certain Cleric levels, as shown in the Channel Divinity column of the Cleric Features table.\n\nIf a Channel Divinity effect requires a saving throw, the DC equals the spell save DC from this class's Spellcasting feature.\n\n{'type': 'refClassFeature', 'classFeature': 'Divine Spark|Cleric|XPHB|2|XPHB'}\n\n{'type': 'refClassFeature', 'classFeature': 'Turn Undead|Cleric|XPHB|2|XPHB'}"
      },
      {
        "name": "Divine Spark",
        "nameIt": "Divine Spark",
        "level": 2,
        "text": "As a Magic action, you point your Holy Symbol at another creature you can see within 30 feet of yourself and focus divine energy at it. Roll 1d8 and add your Wisdom modifier. You either restore Hit Points to the creature equal to that total or force the creature to make a Constitution saving throw. On a failed save, the creature takes Necrotic or Radiant damage (your choice) equal to that total. On a successful save, the creature takes half as much damage (round down).\n\nYou roll an additional d8 when you reach Cleric levels 7 (2d8), 13 (3d8), and 18 (4d8)."
      },
      {
        "name": "Turn Undead",
        "nameIt": "Turn Undead",
        "level": 2,
        "text": "As a Magic action, you present your Holy Symbol and censure Undead creatures. Each Undead of your choice within 30 feet of you must make a Wisdom saving throw. If the creature fails its save, it has the Frightened and Incapacitated conditions for 1 minute. For that duration, it tries to move as far from you as it can on its turns. This effect ends early on the creature if it takes any damage, if you have the Incapacitated condition, or if you die."
      },
      {
        "name": "Cleric Subclass",
        "nameIt": "Cleric Subclass",
        "level": 3,
        "text": "You gain a Cleric subclass of your choice. A subclass is a specialization that grants you features at certain Cleric levels. For the rest of your career, you gain each of your subclass's features that are of your Cleric level or lower."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 4,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify. You gain this feature again at Cleric levels 8, 12, and 16."
      },
      {
        "name": "Sear Undead",
        "nameIt": "Sear Undead",
        "level": 5,
        "text": "Whenever you use Turn Undead, you can roll a number of d8s equal to your Wisdom modifier (minimum of 1d8) and add the rolls together. Each Undead that fails its saving throw against that use of Turn Undead takes Radiant damage equal to the roll's total. This damage doesn't end the turn effect."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 6,
        "text": "You gain a feature from your Cleric Subclass."
      },
      {
        "name": "Blessed Strikes",
        "nameIt": "Blessed Strikes",
        "level": 7,
        "text": "Divine power infuses you in battle. You gain one of the following options of your choice (if you get either option from a Cleric subclass in an older book, use only the option you choose for this feature).\n\n{'type': 'refClassFeature', 'classFeature': 'Divine Strike|Cleric|XPHB|7'}\n\n{'type': 'refClassFeature', 'classFeature': 'Potent Spellcasting|Cleric|XPHB|7'}"
      },
      {
        "name": "Divine Strike",
        "nameIt": "Divine Strike",
        "level": 7,
        "text": "Once on each of your turns when you hit a creature with an attack roll using a weapon, you can cause the target to take an extra 1d8 Necrotic or Radiant damage (your choice)."
      },
      {
        "name": "Potent Spellcasting",
        "nameIt": "Potent Spellcasting",
        "level": 7,
        "text": "Add your Wisdom modifier to the damage you deal with any Cleric cantrip."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 8,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Divine Intervention",
        "nameIt": "Divine Intervention",
        "level": 10,
        "text": "You can call on your deity or pantheon to intervene on your behalf. As a Magic action, choose any Cleric spell of level 5 or lower that doesn't require a Reaction to cast. As part of the same action, you cast that spell without expending a spell slot or needing Material components. You can't use this feature again until you finish a Long Rest."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 12,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Improved Blessed Strikes",
        "nameIt": "Improved Blessed Strikes",
        "level": 14,
        "text": "The option you chose for Blessed Strikes grows more powerful.\n\n**Divine Strike**: The extra damage of your Divine Strike increases to 2d8.\n\n**Potent Spellcasting**: When you cast a Cleric cantrip and deal damage to a creature with it, you can give vitality to yourself or another creature within 60 feet of yourself, granting a number of Temporary Hit Points equal to twice your Wisdom modifier."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 16,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 17,
        "text": "You gain a feature from your Cleric Subclass."
      },
      {
        "name": "Epic Boon",
        "nameIt": "Aumento delle statistiche: Dono epico",
        "level": 19,
        "text": "You gain an Epic Boon feat or another {@5etools feat|feats.html of your choice for which you qualify. Boon of Fate is recommended."
      },
      {
        "name": "Greater Divine Intervention",
        "nameIt": "Greater Divine Intervention",
        "level": 20,
        "text": "You can call on even more powerful divine intervention. When you use your Divine Intervention feature, you can choose Wish when you select a spell. If you do so, you can't use Divine Intervention again until you finish 2d4 Long Rests."
      }
    ],
    "fluff": [
      "Clerics draw power from the realms of the gods and harness it to work miracles. Blessed by a deity, a pantheon, or another immortal entity, a Cleric can reach out to the divine magic of the Outer Planes—where gods dwell—and channel it to bolster people and battle foes.",
      "Because their power is a divine gift, Clerics typically associate themselves with temples dedicated to the deity or other immortal force that unlocked their magic. Harnessing divine magic doesn't rely on specific training, yet Clerics might learn prayers and rites that help them draw on power from the Outer Planes.",
      "Not every member of a temple or shrine is a Cleric. Some priests are called to a simple life of temple service, carrying out their devotion through prayer and rituals, not through magic. Many mortals claim to speak for the gods, but few can marshal the power of those gods the way a Cleric can."
    ],
    "callout": {
      "title": "La vocazione del Clero Divino",
      "text": "Come si manifesta il favore della tua divinità? Attraverso aure di luce radiosa o sussurri nell'ombra? Quali simboli sacri porti sul tuo scudo e sulle tue vesti durante i riti e le battaglie?"
    }
  },
  {
    "id": "druid",
    "name": "Druido",
    "originalName": "Druid",
    "source": "PHB 2024",
    "quote": "Custode delle antiche forze della natura, capace di mutare forma e scatenare tempeste elementali.",
    "hitDie": 8,
    "image": "https://5e.tools/img/classes/XPHB/Druid.webp",
    "primaryAbility": [
      "Saggezza"
    ],
    "proficiencies": [
      "Intelligenza",
      "Saggezza"
    ],
    "skills": "Scegli 2 abilità a tua scelta",
    "weapons": "Armi semplici",
    "tools": "Borsa per erborismo",
    "armor": "Armatura leggera, Scudi",
    "startingEquipment": "Choose A or B: (A) Leather Armor, Shield, Sickle, Druidic Focus, Explorer's Pack, Herbalism kit, 9 GP; or (B) 50 GP",
    "multiclassing": "Per ottenere una nuova classe o lasciarla, i punteggi dei tuoi attributi primari (Saggezza) devono essere almeno pari a 13.",
    "tableLabels": [
      "Wild Shape",
      "Cantrips",
      "Prepared Spells",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    "tableLabelsIt": [
      "Forma selvatica",
      "Trucchi",
      "Incantesimi",
      "1°",
      "2°",
      "3°",
      "4°",
      "5°",
      "6°",
      "7°",
      "8°",
      "9°"
    ],
    "progression": [
      {
        "level": 1,
        "pb": "+2",
        "values": [
          "0",
          "2",
          "4"
        ]
      },
      {
        "level": 2,
        "pb": "+2",
        "values": [
          "2",
          "2",
          "5"
        ]
      },
      {
        "level": 3,
        "pb": "+2",
        "values": [
          "2",
          "2",
          "6"
        ]
      },
      {
        "level": 4,
        "pb": "+2",
        "values": [
          "2",
          "3",
          "7"
        ]
      },
      {
        "level": 5,
        "pb": "+3",
        "values": [
          "2",
          "3",
          "9"
        ]
      },
      {
        "level": 6,
        "pb": "+3",
        "values": [
          "3",
          "3",
          "10"
        ]
      },
      {
        "level": 7,
        "pb": "+3",
        "values": [
          "3",
          "3",
          "11"
        ]
      },
      {
        "level": 8,
        "pb": "+3",
        "values": [
          "3",
          "3",
          "12"
        ]
      },
      {
        "level": 9,
        "pb": "+4",
        "values": [
          "3",
          "3",
          "14"
        ]
      },
      {
        "level": 10,
        "pb": "+4",
        "values": [
          "3",
          "4",
          "15"
        ]
      },
      {
        "level": 11,
        "pb": "+4",
        "values": [
          "3",
          "4",
          "16"
        ]
      },
      {
        "level": 12,
        "pb": "+4",
        "values": [
          "3",
          "4",
          "16"
        ]
      },
      {
        "level": 13,
        "pb": "+5",
        "values": [
          "3",
          "4",
          "17"
        ]
      },
      {
        "level": 14,
        "pb": "+5",
        "values": [
          "3",
          "4",
          "17"
        ]
      },
      {
        "level": 15,
        "pb": "+5",
        "values": [
          "3",
          "4",
          "18"
        ]
      },
      {
        "level": 16,
        "pb": "+5",
        "values": [
          "3",
          "4",
          "18"
        ]
      },
      {
        "level": 17,
        "pb": "+6",
        "values": [
          "4",
          "4",
          "19"
        ]
      },
      {
        "level": 18,
        "pb": "+6",
        "values": [
          "4",
          "4",
          "20"
        ]
      },
      {
        "level": 19,
        "pb": "+6",
        "values": [
          "4",
          "4",
          "21"
        ]
      },
      {
        "level": 20,
        "pb": "+6",
        "values": [
          "4",
          "4",
          "22"
        ]
      }
    ],
    "subclasses": [
      {
        "id": "land",
        "name": "Circolo della Terra",
        "originalName": "Circle of the Land",
        "shortName": "Land",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Circle of the Land",
            "nameIt": "Circle of the Land",
            "level": 3,
            "text": "Celebrate Connection to the Natural World\n\nThe Circle of the Land comprises mystics and sages who safeguard ancient knowledge and rites. These Druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of their communities.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Circle of the Land Spells|Druid|XPHB|Land|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': \"Land's Aid|Druid|XPHB|Land|XPHB|3\"}"
          },
          {
            "name": "Circle of the Land Spells",
            "nameIt": "Circle of the Land Spells",
            "level": 3,
            "text": "Whenever you finish a Long Rest, choose one type of land: arid, polar, temperate, or tropical. Consult the table below that corresponds to the chosen type; you have the spells listed for your Druid level and lower prepared.\n\nDruid Level | Circle Spells\n--- | ---\n3 | Blur, Burning Hands, Fire Bolt\n5 | Fireball\n7 | Blight\n9 | Wall of Stone\n\nDruid Level | Circle Spells\n--- | ---\n3 | Fog Cloud, Hold Person, Ray of Frost\n5 | Sleet Storm\n7 | Ice Storm\n9 | Cone of Cold\n\nDruid Level | Circle Spells\n--- | ---\n3 | Misty Step, Shocking Grasp, Sleep\n5 | Lightning Bolt\n7 | Freedom of Movement\n9 | Tree Stride\n\nDruid Level | Circle Spells\n--- | ---\n3 | Acid Splash, Ray of Sickness, Web\n5 | Stinking Cloud\n7 | Polymorph\n9 | Insect Plague"
          },
          {
            "name": "Land's Aid",
            "nameIt": "Land's Aid",
            "level": 3,
            "text": "As a Magic action, you can expend a use of your Wild Shape and choose a point within 60 feet of yourself. Vitality-giving flowers and life-draining thorns appear for a moment in a 10-foot-radius Sphere [Area of Effect] centered on that point. Each creature of your choice in the Sphere [Area of Effect] must make a Constitution saving throw against your spell save DC, taking 2d6 Necrotic damage on a failed save or half as much damage on a successful one. One creature of your choice in that area regains 2d6 Hit Points.\n\nThe damage and healing increase by 1d6 when you reach Druid levels 10 (3d6) and 14 (4d6)."
          },
          {
            "name": "Natural Recovery",
            "nameIt": "Natural Recovery",
            "level": 6,
            "text": "You can cast one of the level 1+ spells that you have prepared from your Circle Spells feature without expending a spell slot, and you must finish a Long Rest before you do so again.\n\nIn addition, when you finish a Short Rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your Druid level (round up), and none of them can be level 6+. For example, if you're a level 6 Druid, you can recover up to three levels' worth of spell slots. You can recover a level 3 spell slot, a level 2 and a level 1 spell slot, or three level 1 spell slots. Once you recover spell slots with this feature, you can't do so again until you finish a Long Rest."
          },
          {
            "name": "Nature's Ward",
            "nameIt": "Nature's Ward",
            "level": 10,
            "text": "You are immune to the Poisoned condition, and you have Resistance to a damage type associated with your current land choice in the Circle Spells feature, as shown in the Nature's Ward table.\n\nLand Type | Resistance\n--- | ---\nArid | Fire\nPolar | Cold\nTemperate | Lightning\nTropical | Poison"
          },
          {
            "name": "Nature's Sanctuary",
            "nameIt": "Nature's Sanctuary",
            "level": 14,
            "text": "As a Magic action, you can expend a use of your Wild Shape and cause spectral trees and vines to appear in a 15-foot Cube [Area of Effect] on the ground within 120 feet of yourself. They last there for 1 minute or until you have the Incapacitated condition or die. You and your allies have Cover while in that area, and your allies gain the current Resistance of your Nature's Ward while there.\n\nAs a Bonus Action, you can move the Cube [Area of Effect] up to 60 feet to ground within 120 feet of yourself."
          }
        ]
      },
      {
        "id": "moon",
        "name": "Circolo della Luna",
        "originalName": "Circle of the Moon",
        "shortName": "Moon",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Circle Forms",
            "nameIt": "Circle Forms",
            "level": 3,
            "text": "You can channel lunar magic when you assume a Wild Shape form, granting you the benefits below.\n\n**Challenge Rating**: The maximum Challenge Rating for the form equals your Druid level divided by 3 (round down).\n\n**Armor Class**: Until you leave the form, your AC equals 13 plus your Wisdom modifier if that total is higher than the Beast's AC.\n\n**Temporary Hit Points**: You gain a number of Temporary Hit Points equal to three times your Druid level."
          },
          {
            "name": "Circle of the Moon",
            "nameIt": "Circle of the Moon",
            "level": 3,
            "text": "Adopt Animal Forms to Guard the Wilds\n\nDruids of the Circle of the Moon draw on lunar magic to transform themselves. Their order gathers under the moon to share news and perform rituals.\n\nChangeable as the moon, a Druid of this circle might prowl as a great cat one night, soar over the treetops as an eagle the next day, and then crash through undergrowth as a bear to drive off a trespassing monster. The wild is in the Druid's blood.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Circle of the Moon Spells|Druid|XPHB|Moon|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Circle Forms|Druid|XPHB|Moon|XPHB|3'}"
          },
          {
            "name": "Circle of the Moon Spells",
            "nameIt": "Circle of the Moon Spells",
            "level": 3,
            "text": "When you reach a Druid level specified in the Circle of the Moon Spells table, you thereafter always have the listed spells prepared.\n\nIn addition, you can cast the spells from this feature while you're in a Wild Shape form.\n\nDruid Level | Prepared Spells\n--- | ---\n3 | Cure Wounds, Moonbeam, Starry Wisp\n5 | Conjure Animals\n7 | Fount of Moonlight\n9 | Mass Cure Wounds"
          },
          {
            "name": "Improved Circle Forms",
            "nameIt": "Improved Circle Forms",
            "level": 6,
            "text": "While in a Wild Shape form, you gain the following benefits.\n\n**Lunar Radiance**: Each of your attacks in a Wild Shape form can deal its normal damage type or Radiant damage. You make this choice each time you hit with those attacks.\n\n**Increased Toughness**: You can add your Wisdom modifier to your Constitution saving throws."
          },
          {
            "name": "Moonlight Step",
            "nameIt": "Moonlight Step",
            "level": 10,
            "text": "You magically transport yourself, reappearing amid a burst of moonlight. As a Bonus Action, you teleport up to 30 feet to an unoccupied space you can see, and you have Advantage on the next attack roll you make before the end of this turn.\n\nYou can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a Long Rest. You can also regain uses by expending a level 2+ spell slot for each use you want to restore (no action required)."
          },
          {
            "name": "Lunar Form",
            "nameIt": "Lunar Form",
            "level": 14,
            "text": "The power of the moon suffuses you, granting you the following benefits.\n\n**Improved Lunar Radiance**: Once per turn, you can deal an extra 2d10 Radiant damage to a target you hit with a Wild Shape form's attack.\n\n**Shared Moonlight**: Whenever you use Moonlight Step, you can also teleport one willing creature. That creature must be within 10 feet of you, and you teleport it to an unoccupied space you can see within 10 feet of your destination space."
          }
        ]
      },
      {
        "id": "sea",
        "name": "Circolo del Mare",
        "originalName": "Circle of the Sea",
        "shortName": "Sea",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Circle of the Sea",
            "nameIt": "Circle of the Sea",
            "level": 3,
            "text": "Become One with Tides and Storms\n\nDruids of the Circle of the Sea draw on the tempestuous forces of oceans and storms. Some view themselves as embodiments of nature's wrath, seeking vengeance against those who despoil nature. Others seek mystical unity with nature by attuning themselves to the ebb and flow of the tides, following the rush of currents and waves and listening to the inscrutable whispers and roars of the winds.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Circle of the Sea Spells|Druid|XPHB|Sea|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Wrath of the Sea|Druid|XPHB|Sea|XPHB|3'}"
          },
          {
            "name": "Circle of the Sea Spells",
            "nameIt": "Circle of the Sea Spells",
            "level": 3,
            "text": "When you reach a Druid level specified in the Circle of the Sea Spells table, you thereafter always have the listed spells prepared.\n\nDruid Level | Prepared Spells\n--- | ---\n3 | Fog Cloud, Gust of Wind, Ray of Frost, Shatter, Thunderwave\n5 | Lightning Bolt, Water Breathing\n7 | Control Water, Ice Storm\n9 | Conjure Elemental, Hold Monster"
          },
          {
            "name": "Wrath of the Sea",
            "nameIt": "Wrath of the Sea",
            "level": 3,
            "text": "As a Bonus Action, you can expend a use of your Wild Shape to manifest a 5-foot Emanation [Area of Effect] that takes the form of ocean spray that surrounds you for 10 minutes. It ends early if you dismiss it (no action required), manifest it again, or have the Incapacitated condition.\n\nWhen you manifest the Emanation [Area of Effect] and as a Bonus Action on your subsequent turns, you can choose another creature you can see in the Emanation [Area of Effect]. The target must succeed on a Constitution saving throw against your spell save DC or take Cold damage and, if the creature is Large or smaller, be pushed up to 15 feet away from you. To determine this damage, roll a number of d6s equal to your Wisdom modifier (minimum of one die)."
          },
          {
            "name": "Aquatic Affinity",
            "nameIt": "Aquatic Affinity",
            "level": 6,
            "text": "The size of the Emanation [Area of Effect] created by your Wrath of the Sea increases to 10 feet.\n\nIn addition, you gain a Swim Speed equal to your Speed."
          },
          {
            "name": "Stormborn",
            "nameIt": "Stormborn",
            "level": 10,
            "text": "Your Wrath of the Sea confers two more benefits while active, as detailed below.\n\n**Flight**: You gain a Fly Speed equal to your Speed.\n\n**Resistance**: You have Resistance to Cold, Lightning, and Thunder damage."
          },
          {
            "name": "Oceanic Gift",
            "nameIt": "Oceanic Gift",
            "level": 14,
            "text": "Instead of manifesting the Emanation [Area of Effect] of Wrath of the Sea around yourself, you can manifest it around one willing creature within 60 feet of yourself. That creature gains all the benefits of the Emanation [Area of Effect] and uses your spell save DC and Wisdom modifier for it.\n\nIn addition, you can manifest the Emanation [Area of Effect] around both the other creature and yourself if you expend two uses of your Wild Shape instead of one when manifesting it."
          }
        ]
      },
      {
        "id": "stars",
        "name": "Circolo delle Stelle",
        "originalName": "Circle of the Stars",
        "shortName": "Stars",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Circle of the Stars",
            "nameIt": "Circle of the Stars",
            "level": 3,
            "text": "Harness Secrets Hidden in Constellations\n\nThe Circle of the Stars has tracked heavenly patterns since time immemorial, discovering secrets hidden amid the constellations. By understanding these secrets, the Druids of this circle seek to harness the powers of the cosmos.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Star Map|Druid|XPHB|Stars|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Starry Form|Druid|XPHB|Stars|XPHB|3'}"
          },
          {
            "name": "Star Map",
            "nameIt": "Star Map",
            "level": 3,
            "text": "You've created a star chart as part of your heavenly studies. It is a Tiny object, and you can use it as a Spellcasting Focus for your Druid spells. You determine its form by rolling on the Star Map table or by choosing one.\n\nWhile holding the map, you have the Guidance and Guiding Bolt spells prepared, and you can cast Guiding Bolt without expending a spell slot. You can cast it in that way a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.\n\nIf you lose the map, you can perform a 1-hour ceremony to magically create a replacement. This ceremony can be performed during a Short Rest or Long Rest, and it destroys the previous map.\n\n1d6 | Map Form\n--- | ---\n1 | A scroll bearing depictions of constellations\n2 | A stone tablet with fine holes drilled through it\n3 | An owlbear hide tooled with stellar symbols\n4 | A collection of maps bound in an ebony cover\n5 | A crystal engraved with starry patterns\n6 | A glass disk etched with constellations"
          },
          {
            "name": "Starry Form",
            "nameIt": "Starry Form",
            "level": 3,
            "text": "As a Bonus Action, you can expend a use of your Wild Shape feature to take on a starry form rather than shape-shifting.\n\nWhile in your starry form, you retain your game statistics, but your body becomes luminous, your joints glimmer like stars, and glowing lines connect them as on a star chart. This form sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet. The form lasts for 10 minutes. It ends early if you dismiss it (no action required), have the Incapacitated condition, or use this feature again.\n\nWhenever you assume your starry form, choose which of the following constellations glimmers on your body; your choice gives you certain benefits while in the form.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Archer|Druid|XPHB|Stars|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Chalice|Druid|XPHB|Stars|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Dragon|Druid|XPHB|Stars|XPHB|3'}"
          },
          {
            "name": "Archer",
            "nameIt": "Archer",
            "level": 3,
            "text": "A constellation of an archer appears on you. When you activate this form and as a Bonus Action on your subsequent turns while it lasts, you can make a ranged spell attack, hurling a luminous arrow that targets one creature within 60 feet of yourself. On a hit, the attack deals Radiant damage equal to 1d8 plus your Wisdom modifier."
          },
          {
            "name": "Chalice",
            "nameIt": "Chalice",
            "level": 3,
            "text": "A constellation of a life-giving goblet appears on you. Whenever you cast a spell using a spell slot that restores Hit Points to a creature, you or another creature within 30 feet of you can regain Hit Points equal to 1d8 plus your Wisdom modifier."
          },
          {
            "name": "Dragon",
            "nameIt": "Dragon",
            "level": 3,
            "text": "A constellation of a wise dragon appears on you. When you make an Intelligence or a Wisdom check or a Constitution saving throw to maintain Concentration|XPHB, you can treat a roll of 9 or lower on the d20 as a 10."
          },
          {
            "name": "Cosmic Omen",
            "nameIt": "Cosmic Omen",
            "level": 6,
            "text": "Whenever you finish a Long Rest, you can consult your Star Map for omens and roll a die. Until you finish your next Long Rest, you gain access to a special Reaction based on whether you rolled an even or an odd number on the die:\n\n• Whenever a creature you can see within 30 feet of you is about to make a D20 Test, you can take a Reaction to roll 1d6 and add the number rolled to the total.\n• Whenever a creature you can see within 30 feet of you is about to make a D20 Test, you can take a Reaction to roll 1d6 and subtract the number rolled from the total.\n\nYou can use this Reaction a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a Long Rest."
          },
          {
            "name": "Twinkling Constellations",
            "nameIt": "Twinkling Constellations",
            "level": 10,
            "text": "The constellations of your Starry Form improve. The 1d8 of the Archer and the Chalice becomes 2d8, and while the Dragon is active, you have a Fly Speed of 20 feet and can hover.\n\nMoreover, at the start of each of your turns while in your Starry Form, you can change which constellation glimmers on your body."
          },
          {
            "name": "Full of Stars",
            "nameIt": "Full of Stars",
            "level": 14,
            "text": "While in your Starry Form, you become partially incorporeal, giving you Resistance to Bludgeoning, Piercing, and Slashing damage."
          }
        ]
      }
    ],
    "features": [
      {
        "name": "Druidic",
        "nameIt": "Druidic",
        "level": 1,
        "text": "You know Druidic, the secret language of Druids. While learning this ancient tongue, you also unlocked the magic of communicating with animals; you always have the Speak with Animals spell prepared.\n\nYou can use Druidic to leave hidden messages. You and others who know Druidic automatically spot such a message. Others spot the message's presence with a successful 15 Intelligence (Investigation) check but can't decipher it without magic."
      },
      {
        "name": "Magician",
        "nameIt": "Magician",
        "level": 1,
        "text": "You know one extra cantrip from the Druid spell list. In addition, your mystical connection to nature gives you a bonus to your Intelligence (Arcana or Nature) checks. The bonus equals your Wisdom modifier (minimum bonus of +1)."
      },
      {
        "name": "Primal Order",
        "nameIt": "Primal Order",
        "level": 1,
        "text": "You have dedicated yourself to one of the following sacred roles of your choice.\n\n{'type': 'refClassFeature', 'classFeature': 'Magician|Druid|XPHB|1'}\n\n{'type': 'refClassFeature', 'classFeature': 'Warden|Druid|XPHB|1'}"
      },
      {
        "name": "Spellcasting",
        "nameIt": "Incantesimi",
        "level": 1,
        "text": "You have learned to cast spells through studying the mystical forces of nature. See chapter 7|XPHB|7 for the rules on spellcasting. The information below details how you use those rules with Druid spells, which appear on the Druid spell list later in the class's description.\n\n**Cantrips**: You know two cantrips of your choice from the Druid spell list. Druidcraft and Produce Flame are recommended.\n\nWhenever you gain a Druid level, you can replace one of your cantrips with another cantrip of your choice from the Druid spell list.\n\nWhen you reach Druid levels 4 and 10, you learn another cantrip of your choice from the Druid spell list, as shown in the Cantrips column of the Druid Features table.\n\n**Spell Slots**: The Druid Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.\n\n**Prepared Spells of Level 1+**: You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Druid spell list. Animal Friendship, Cure Wounds, Faerie Fire, and Thunderwave are recommended.\n\nThe number of spells on your list increases as you gain Druid levels, as shown in the Prepared Spells column of the Druid Features table. Whenever that number increases, choose additional spells from the Druid spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Druid, your list of prepared spells can include six spells of levels 1 and 2 in any combination.\n\nIf another Druid feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Druid spells for you.\n\n**Changing Your Prepared Spells**: Whenever you finish a Long Rest, you can change your list of prepared spells, replacing any of the spells with other Druid spells for which you have spell slots.\n\n**Spellcasting Ability**: Wisdom is your spellcasting ability for your Druid spells.\n\n**Spellcasting Focus**: You can use a Druidic Focus as a Spellcasting Focus for your Druid spells."
      },
      {
        "name": "Warden",
        "nameIt": "Warden",
        "level": 1,
        "text": "Trained for battle, you gain proficiency with Martial weapons and training with Medium armor."
      },
      {
        "name": "Wild Companion",
        "nameIt": "Wild Companion",
        "level": 2,
        "text": "You can summon a nature spirit that assumes an animal form to aid you. As a Magic action, you can expend a spell slot or a use of Wild Shape to cast the Find Familiar spell without Material components.\n\nWhen you cast the spell in this way, the familiar is Fey and disappears when you finish a Long Rest."
      },
      {
        "name": "Wild Shape",
        "nameIt": "Wild Shape",
        "level": 2,
        "text": "The power of nature allows you to assume the form of an animal. As a Bonus Action, you shape-shift into a Beast form that you have learned for this feature (see \"Known Forms\" below). You stay in that form for a number of hours equal to half your Druid level or until you use Wild Shape again, have the Incapacitated condition, or die. You can also leave the form early as a Bonus Action.\n\n**Number of Uses**: You can use Wild Shape twice. You regain one expended use when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest.\n\nYou gain additional uses when you reach certain Druid levels, as shown in the Wild Shape column of the Druid Features table.\n\n**Known Forms**: You know four Beast forms for this feature, chosen from among Beast stat blocks that have a maximum Challenge Rating of 1/4 and that lack a Fly Speed (see appendix B for stat block options). The Rat, Riding Horse, Spider, and Wolf are recommended. Whenever you finish a Long Rest, you can replace one of your known forms with another eligible form.\n\nWhen you reach certain Druid levels, your number of known forms and the maximum Challenge Rating for those forms increases, as shown in the Beast Shapes table. In addition, starting at level 8, you can adopt a form that has a Fly Speed.\n\nWhen choosing known forms, you may look in the Monster Manual|XMM or elsewhere for eligible Beasts if the Dungeon Master permits you to do so.\n\nDruid Level | Known Forms | Max CR | Fly Speed\n--- | --- | --- | ---\n2 | 4 | 1/4 | No\n4 | 6 | 1/2 | No\n8 | 8 | 1 | Yes\n\n**Rules While Shape-Shifted**: While in a form, you retain your personality, memories, and ability to speak, and the following rules apply:\n\n• When you assume a Wild Shape form, you gain a number of Temporary Hit Points equal to your Druid level.\n• Your game statistics are replaced by the Beast's stat block, but you retain your creature type; Hit Points; Hit Point Dice; Intelligence, Wisdom, and Charisma scores; class features; languages; and feats. You also retain your skill and saving throw proficiencies and use your Proficiency for them, in addition to gaining the proficiencies of the creature. If a skill or saving throw modifier in the Beast's stat block is higher than yours, use the one in the stat block.\n• You can't cast spells, but shape-shifting doesn't break your Concentration|XPHB or otherwise interfere with a spell you've already cast.\n• Your ability to handle objects is determined by the form's limbs rather than your own. In addition, you choose whether your equipment falls in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the DM decides whether it's practical for the new form to wear a piece of equipment based on the creature's size and shape. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with the form. Equipment that merges with the form has no effect while you're in that form."
      },
      {
        "name": "Druid Subclass",
        "nameIt": "Druid Subclass",
        "level": 3,
        "text": "You gain a Druid subclass of your choice. A subclass is a specialization that grants you features at certain Druid levels. For the rest of your career, you gain each of your subclass's features that are of your Druid level or lower."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 4,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify. You gain this feature again at Druid levels 8, 12, and 16."
      },
      {
        "name": "Wild Resurgence",
        "nameIt": "Wild Resurgence",
        "level": 5,
        "text": "Once on each of your turns, if you have no uses of Wild Shape left, you can give yourself one use by expending a spell slot (no action required).\n\nIn addition, you can expend one use of Wild Shape (no action required) to give yourself a level 1 spell slot, but you can't do so again until you finish a Long Rest."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 6,
        "text": "You gain a feature from your Druid Subclass."
      },
      {
        "name": "Elemental Fury",
        "nameIt": "Elemental Fury",
        "level": 7,
        "text": "The might of the elements flows through you. You gain one of the following options of your choice.\n\n{'type': 'refClassFeature', 'classFeature': 'Potent Spellcasting|Druid|XPHB|7'}\n\n{'type': 'refClassFeature', 'classFeature': 'Primal Strike|Druid|XPHB|7'}"
      },
      {
        "name": "Potent Spellcasting",
        "nameIt": "Potent Spellcasting",
        "level": 7,
        "text": "Add your Wisdom modifier to the damage you deal with any Druid cantrip."
      },
      {
        "name": "Primal Strike",
        "nameIt": "Primal Strike",
        "level": 7,
        "text": "Once on each of your turns when you hit a creature with an attack roll using a weapon or a Beast form's attack in Wild Shape, you can cause the target to take an extra 1d8 Cold, Fire, Lightning, or Thunder damage (choose when you hit)."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 8,
        "text": "You gain the Ability Score Improvement Feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 10,
        "text": "You gain a feature from your Druid Subclass."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 12,
        "text": "You gain the Ability Score Improvement Feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 14,
        "text": "You gain a feature from your Druid Subclass."
      },
      {
        "name": "Improved Elemental Fury",
        "nameIt": "Improved Elemental Fury",
        "level": 15,
        "text": "The option you chose for Elemental Fury grows more powerful, as detailed below.\n\n**Potent Spellcasting**: When you cast a Druid cantrip with a range of 10 feet or greater, the spell's range increases by 300 feet.\n\n**Primal Strike**: The extra damage of your Primal Strike increases to 2d8."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 16,
        "text": "You gain the Ability Score Improvement Feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Beast Spells",
        "nameIt": "Beast Spells",
        "level": 18,
        "text": "While using Wild Shape, you can cast spells in Beast form, except for any spell that has a Material component with a cost specified or that consumes its Material component."
      },
      {
        "name": "Epic Boon",
        "nameIt": "Aumento delle statistiche: Dono epico",
        "level": 19,
        "text": "You gain an Epic Boon feat or another {@5etools feat|feats.html of your choice for which you qualify. Boon of Dimensional Travel is recommended."
      },
      {
        "name": "Archdruid",
        "nameIt": "Archdruid",
        "level": 20,
        "text": "The vitality of nature constantly blooms within you, granting you the following benefits.\n\n**Evergreen Wild Shape**: Whenever you roll Initiative and have no uses of Wild Shape left, you regain one expended use of it.\n\n**Nature Magician**: You can convert uses of Wild Shape into a spell slot (no action required). Choose a number of your unexpended uses of Wild Shape and convert them into a single spell slot, with each use contributing 2 spell levels. For example, if you convert two uses of Wild Shape, you produce a level 4 spell slot. Once you use this benefit, you can't do so again until you finish a Long Rest.\n\n**Longevity**: The primal magic that you wield causes you to age more slowly. For every ten years that pass, your body ages only one year."
      }
    ],
    "fluff": [
      "Druids belong to ancient orders that call on the forces of nature. Harnessing the magic of animals, plants, and the four elements, Druids heal, transform into animals, and wield elemental destruction.",
      "Revering nature above all, individual Druids gain their magic from nature, a nature deity, or both, and they typically unite with other Druids to perform rites that mark the passage of the seasons and other natural cycles.",
      "Druids are concerned with the delicate ecological balance that sustains plant and animal life and with the need for people to live in harmony with nature. Druids often guard sacred sites or watch over regions of unspoiled nature, but when a significant danger arises, Druids take a more active role as adventurers who combat the threat."
    ],
    "callout": {
      "title": "Il legame con il Circolo Sacro",
      "text": "Quale bioma o forza primordiale riflette la tua magia? I boschi antichi, le onde furiose dell'oceano o le costellazioni eterne nel cielo notturno?"
    }
  },
  {
    "id": "fighter",
    "name": "Guerriero",
    "originalName": "Fighter",
    "source": "PHB 2024",
    "quote": "Maestro assoluto di tutte le armi, armature e tattiche di combattimento sul campo di battaglia.",
    "hitDie": 10,
    "image": "https://5e.tools/img/classes/XPHB/Fighter.webp",
    "primaryAbility": [
      "Forza",
      "Destrezza"
    ],
    "proficiencies": [
      "Forza",
      "Costituzione"
    ],
    "skills": "Scegli 2 abilità a tua scelta",
    "weapons": "Armi semplici, Armi da guerra",
    "tools": "Nessuna",
    "armor": "Armatura leggera, Armatura media, Armatura pesante, Scudi",
    "startingEquipment": "Choose A, B, or C: (A) Chain Mail, Greatsword, Flail, 8 Javelin, Dungeoneer's Pack, and 4 GP; (B) Studded Leather Armor, Scimitar, Shortsword, Longbow, Arrows (20), Quiver, Dungeoneer's Pack, and 11 GP; or (C) 155 GP",
    "multiclassing": "Per ottenere una nuova classe o lasciarla, i punteggi dei tuoi attributi primari (Forza, Destrezza) devono essere almeno pari a 13.",
    "tableLabels": [
      "Second Wind",
      "Weapon Mastery"
    ],
    "tableLabelsIt": [
      "Recuperare energie",
      "Padronanza armi"
    ],
    "progression": [
      {
        "level": 1,
        "pb": "+2",
        "values": [
          "2",
          "3"
        ]
      },
      {
        "level": 2,
        "pb": "+2",
        "values": [
          "2",
          "3"
        ]
      },
      {
        "level": 3,
        "pb": "+2",
        "values": [
          "2",
          "3"
        ]
      },
      {
        "level": 4,
        "pb": "+2",
        "values": [
          "3",
          "4"
        ]
      },
      {
        "level": 5,
        "pb": "+3",
        "values": [
          "3",
          "4"
        ]
      },
      {
        "level": 6,
        "pb": "+3",
        "values": [
          "3",
          "4"
        ]
      },
      {
        "level": 7,
        "pb": "+3",
        "values": [
          "3",
          "4"
        ]
      },
      {
        "level": 8,
        "pb": "+3",
        "values": [
          "3",
          "4"
        ]
      },
      {
        "level": 9,
        "pb": "+4",
        "values": [
          "3",
          "4"
        ]
      },
      {
        "level": 10,
        "pb": "+4",
        "values": [
          "4",
          "5"
        ]
      },
      {
        "level": 11,
        "pb": "+4",
        "values": [
          "4",
          "5"
        ]
      },
      {
        "level": 12,
        "pb": "+4",
        "values": [
          "4",
          "5"
        ]
      },
      {
        "level": 13,
        "pb": "+5",
        "values": [
          "4",
          "5"
        ]
      },
      {
        "level": 14,
        "pb": "+5",
        "values": [
          "4",
          "5"
        ]
      },
      {
        "level": 15,
        "pb": "+5",
        "values": [
          "4",
          "5"
        ]
      },
      {
        "level": 16,
        "pb": "+5",
        "values": [
          "4",
          "6"
        ]
      },
      {
        "level": 17,
        "pb": "+6",
        "values": [
          "4",
          "6"
        ]
      },
      {
        "level": 18,
        "pb": "+6",
        "values": [
          "4",
          "6"
        ]
      },
      {
        "level": 19,
        "pb": "+6",
        "values": [
          "4",
          "6"
        ]
      },
      {
        "level": 20,
        "pb": "+6",
        "values": [
          "4",
          "6"
        ]
      }
    ],
    "subclasses": [
      {
        "id": "battle-master",
        "name": "Maestro di Battaglia",
        "originalName": "Battle Master",
        "shortName": "Battle Master",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Battle Master",
            "nameIt": "Battle Master",
            "level": 3,
            "text": "Master Sophisticated Battle Maneuvers\n\nBattle Masters are students of the art of battle, learning martial techniques passed down through generations. The most accomplished Battle Masters are well-rounded figures who combine their carefully honed combat skills with academic study in the fields of history, theory, and the arts.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Combat Superiority|Fighter|XPHB|Battle Master|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Student of War|Fighter|XPHB|Battle Master|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Maneuver Options|Fighter|XPHB|Battle Master|XPHB|3'}"
          },
          {
            "name": "Combat Superiority",
            "nameIt": "Combat Superiority",
            "level": 3,
            "text": "Your experience on the battlefield has refined your fighting techniques. You learn maneuvers that are fueled by special dice called Superiority Dice.\n\n**Maneuvers**: You learn three maneuvers of your choice from the \"Maneuver Options\" section later in this subclass's description. Many maneuvers enhance an attack in some way. You can use only one maneuver per attack.\n\nYou learn two additional maneuvers of your choice when you reach Fighter levels 7, 10, and 15. Each time you learn new maneuvers, you can also replace one maneuver you know with a different one.\n\n**Superiority Dice**: You have four Superiority Dice, which are d8. A Superiority Die is expended when you use it. You regain all expended Superiority Dice when you finish a Short Rest or Long Rest.\n\nYou gain an additional Superiority Die when you reach Fighter levels 7 (five dice total) and 15 (six dice total).\n\n**Saving Throws**: If a maneuver requires a saving throw, the DC equals 8 plus your Strength or Dexterity modifier (your choice) and Proficiency."
          },
          {
            "name": "Maneuver Options",
            "nameIt": "Maneuver Options",
            "level": 3,
            "text": "The maneuvers are presented here in alphabetical order.\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Ambush|XPHB'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Bait and Switch|XPHB'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Battle Shout|WoW'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': \"Commander's Strike|XPHB\"}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Commanding Presence|XPHB'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Demoralizing Shout|WoW'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Disarming Attack|XPHB'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Distracting Strike|XPHB'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Evasive Footwork|XPHB'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Feinting Attack|XPHB'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Goading Attack|XPHB'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Heroic Leap|WoW'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Lunging Attack|XPHB'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Maneuvering Attack|XPHB'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Menacing Attack|XPHB'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Mortal Strike|WoW'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Parry|XPHB'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Precision Attack|XPHB'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Pushing Attack|XPHB'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Rally|XPHB'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Riposte|XPHB'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Sweeping Attack|XPHB'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Tactical Assessment|XPHB'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Trip Attack|XPHB'}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Warding Maneuver|WoW'}"
          },
          {
            "name": "Student of War",
            "nameIt": "Student of War",
            "level": 3,
            "text": "You gain proficiency with one type of Artisan's Tools of your choice, and you gain proficiency in one skill of your choice from the skills available to Fighters at level 1."
          },
          {
            "name": "Know Your Enemy",
            "nameIt": "Know Your Enemy",
            "level": 7,
            "text": "As a Bonus Action, you can discern certain strengths and weaknesses of a creature you can see within 30 feet of yourself; you know whether that creature has any Immunities, Resistances, or Vulnerabilities, and if the creature has any, you know what they are.\n\nOnce you use this feature, you can't do so again until you finish a Long Rest. You can also restore a use of the feature by expending one Superiority Die (no action required)."
          },
          {
            "name": "Improved Combat Superiority",
            "nameIt": "Improved Combat Superiority",
            "level": 10,
            "text": "Your Superiority Die becomes a d10."
          },
          {
            "name": "Relentless",
            "nameIt": "Relentless",
            "level": 15,
            "text": "Once per turn, when you use a maneuver, you can roll 1d8 and use the number rolled instead of expending a Superiority Die."
          },
          {
            "name": "Ultimate Combat Superiority",
            "nameIt": "Ultimate Combat Superiority",
            "level": 18,
            "text": "Your Superiority Die becomes a d12."
          }
        ]
      },
      {
        "id": "champion",
        "name": "Campione",
        "originalName": "Champion",
        "shortName": "Champion",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Champion",
            "nameIt": "Champion",
            "level": 3,
            "text": "Pursue Physical Excellence in Combat\n\nA Champion focuses on the development of martial prowess in a relentless pursuit of victory. Champions combine rigorous training with physical excellence to deal devastating blows, withstand peril, and garner glory. Whether in athletic contests or bloody battle, Champions strive for the crown of the victor.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Improved Critical|Fighter|XPHB|Champion|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Remarkable Athlete|Fighter|XPHB|Champion|XPHB|3'}"
          },
          {
            "name": "Improved Critical",
            "nameIt": "Improved Critical",
            "level": 3,
            "text": "Your attack rolls with weapons and Unarmed Strikes can score a Critical Hit on a roll of 19 or 20 on the d20."
          },
          {
            "name": "Remarkable Athlete",
            "nameIt": "Remarkable Athlete",
            "level": 3,
            "text": "Thanks to your athleticism, you have Advantage on Initiative rolls and Strength (Athletics) checks.\n\nIn addition, immediately after you score a Critical Hit, you can move up to half your Speed without provoking Opportunity Attack."
          },
          {
            "name": "Additional Fighting Style",
            "nameIt": "Additional Fighting Style",
            "level": 7,
            "text": "You gain another Fighting Style feat of your choice."
          },
          {
            "name": "Heroic Warrior",
            "nameIt": "Heroic Warrior",
            "level": 10,
            "text": "The thrill of battle drives you toward victory. During combat, you can give yourself Heroic Inspiration whenever you start your turn without it."
          },
          {
            "name": "Superior Critical",
            "nameIt": "Superior Critical",
            "level": 15,
            "text": "Your attack rolls with weapons and Unarmed Strikes can now score a Critical Hit on a roll of 18–20 on the d20."
          },
          {
            "name": "Survivor",
            "nameIt": "Survivor",
            "level": 18,
            "text": "You attain the pinnacle of resilience in battle, giving you these benefits.\n\n**Defy Death**: You have Advantage on Death Saving Throw. Moreover, when you roll 18–20 on a Death Saving Throw, you gain the benefit of rolling a 20 on it.\n\n**Heroic Rally**: At the start of each of your turns, you regain Hit Points equal to 5 plus your Constitution modifier if you are Bloodied|XPHB and have at least 1 Hit Points."
          }
        ]
      },
      {
        "id": "eldritch-knight",
        "name": "Cavaliere Mistico",
        "originalName": "Eldritch Knight",
        "shortName": "Eldritch Knight",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Eldritch Knight",
            "nameIt": "Eldritch Knight",
            "level": 3,
            "text": "Support Combat Skills with Arcane Magic\n\nEldritch Knights combine the martial mastery common to all Fighters with a careful study of magic. Their spells both complement and extend their combat skills, providing additional protection to shore up their armor and also allowing them to engage many foes at once with explosive magic.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Spellcasting|Fighter|XPHB|Eldritch Knight|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'War Bond|Fighter|XPHB|Eldritch Knight|XPHB|3'}"
          },
          {
            "name": "Spellcasting",
            "nameIt": "Incantesimi",
            "level": 3,
            "text": "You have learned to cast spells. See chapter 7|XPHB|7 for the rules on spellcasting. The information below details how you use those rules as an Eldritch Knight.\n\n**Cantrips**: You know two cantrips of your choice from the Wizard spell list (see that class's section for its list). Ray of Frost and Shocking Grasp are recommended. Whenever you gain a Fighter level, you can replace one of these cantrips with another cantrip of your choice from the Wizard spell list.\n\nWhen you reach Fighter level 10, you learn another Wizard cantrip of your choice.\n\n**Spell Slots**: The Eldritch Knight Spellcasting table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.\n\n**Prepared Spells of Level 1+**: You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose three level 1 spells from the Wizard spell list. Burning Hands, Jump, and Shield are recommended.\n\nThe number of spells on your list increases as you gain Fighter levels, as shown in the Prepared Spells column of the Eldritch Knight Spellcasting table. Whenever that number increases, choose additional spells from the Wizard spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 7 Fighter, your list of prepared spells can include five Wizard spells of levels 1 and 2 in any combination.\n\n**Changing your Prepared Spells**: Whenever you gain a Fighter level, you can replace one spell on your list with another Wizard spell for which you have spell slots.\n\n**Spellcasting Ability**: Intelligence is your spellcasting ability for your Wizard spells.\n\n**Spellcasting Focus**: You can use an Arcane Focus as a Spellcasting Focus for your Wizard spells."
          },
          {
            "name": "War Bond",
            "nameIt": "War Bond",
            "level": 3,
            "text": "You learn a ritual that creates a magical bond between yourself and one weapon. You perform the ritual over the course of 1 hour, which can be done during a Short Rest. The weapon must be within your reach throughout the ritual, at the conclusion of which you touch the weapon and forge the bond. The bond fails if another Fighter is bonded to the weapon or if the weapon is a magic item to which someone else is attuned.\n\nOnce you have bonded a weapon to yourself, you can't be disarmed of that weapon unless you have the Incapacitated condition. If it is on the same plane of existence, you can summon that weapon as a Bonus Action, causing it to teleport instantly to your hand.\n\nYou can have up to two bonded weapons, but you can summon only one at a time with a Bonus Action. If you attempt to bond with a third weapon, you must break the bond with one of the other two."
          },
          {
            "name": "War Magic",
            "nameIt": "War Magic",
            "level": 7,
            "text": "When you take the Attack action on your turn, you can replace one of the attacks with a casting of one of your Wizard cantrips that has a casting time of an action."
          },
          {
            "name": "Eldritch Strike",
            "nameIt": "Eldritch Strike",
            "level": 10,
            "text": "You learn how to make your weapon strikes undercut a creature's ability to withstand your spells. When you hit a creature with an attack using a weapon, that creature has Disadvantage on the next saving throw it makes against a spell you cast before the end of your next turn."
          },
          {
            "name": "Arcane Charge",
            "nameIt": "Arcane Charge",
            "level": 15,
            "text": "When you use your Action Surge, you can teleport up to 30 feet to an unoccupied space you can see. You can teleport before or after the additional action."
          },
          {
            "name": "Improved War Magic",
            "nameIt": "Improved War Magic",
            "level": 18,
            "text": "When you take the Attack action on your turn, you can replace two of the attacks with a casting of one of your level 1 or level 2 Wizard spells that has a casting time of an action."
          }
        ]
      },
      {
        "id": "psi-warrior",
        "name": "Guerriero Psionico",
        "originalName": "Psi Warrior",
        "shortName": "Psi Warrior",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Psi Warrior",
            "nameIt": "Psi Warrior",
            "level": 3,
            "text": "Augment Physical Might with Psionic Power\n\nPsi Warriors awaken the power of their minds to augment their physical might. They harness this psionic power to infuse their weapon strikes, lash out with telekinetic energy, and create barriers of mental force.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Psionic Power|Fighter|XPHB|Psi Warrior|XPHB|3'}"
          },
          {
            "name": "Psionic Power",
            "nameIt": "Psionic Power",
            "level": 3,
            "text": "You harbor a wellspring of psionic energy within yourself. It is represented by your Psionic Energy Dice, which fuel powers you have from this subclass. The Psi Warrior Energy Dice table shows the die size and number of these dice you have when you reach certain Fighter levels.\n\nFighter Level | Die Size | Number\n--- | --- | ---\n3 | D6 | 4\n5 | D8 | 6\n9 | D8 | 8\n11 | D10 | 8\n13 | D10 | 10\n17 | D12 | 12\n\nAny features in this subclass that use a Psionic Energy Die use only the dice from this subclass. Some of your powers expend the Psionic Energy Die, as specified in a power's description, and you can't use a power if it requires you to use a die when all your Psionic Energy Dice are expended.\n\nYou regain one of your expended Psionic Energy Dice when you finish a Short Rest, and you regain all of them when you finish a Long Rest.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Protective Field|Fighter|XPHB|Psi Warrior|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Psionic Strike|Fighter|XPHB|Psi Warrior|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Telekinetic Movement|Fighter|XPHB|Psi Warrior|XPHB|3'}"
          },
          {
            "name": "Protective Field",
            "nameIt": "Protective Field",
            "level": 3,
            "text": "When you or another creature you can see within 30 feet of you takes damage, you can take a Reaction to expend one Psionic Energy Die, roll the die, and reduce the damage taken by the number rolled plus your Intelligence modifier (minimum reduction of 1), as you create a momentary shield of telekinetic force."
          },
          {
            "name": "Psionic Strike",
            "nameIt": "Psionic Strike",
            "level": 3,
            "text": "You can propel your weapons with psionic force. Once on each of your turns, immediately after you hit a target within 30 feet of yourself with an attack and deal damage to it with a weapon, you can expend one Psionic Energy Die, rolling it and dealing Force damage to the target equal to the number rolled plus your Intelligence modifier."
          },
          {
            "name": "Telekinetic Movement",
            "nameIt": "Telekinetic Movement",
            "level": 3,
            "text": "You can move an object or a creature with your mind. As a Magic action, choose one target you can see within 30 feet of yourself; the target must be a loose object that is Large or smaller or one willing creature other than you. You transport the target up to 30 feet to an unoccupied space you can see. Alternatively, if the target is a Tiny object, you can transport it to or from your hand.\n\nOnce you take this action, you can't do so again until you finish a Short Rest or Long Rest unless you expend a Psionic Energy Die (no action required) to restore your use of it."
          },
          {
            "name": "Psi-Powered Leap",
            "nameIt": "Psi-Powered Leap",
            "level": 7,
            "text": "As a Bonus Action, you gain a Fly Speed equal to twice your Speed until the end of the current turn. Once you take this Bonus Action, you can't do so again until you finish a Short Rest or Long Rest unless you expend a Psionic Energy Die (no action required) to restore your use of it."
          },
          {
            "name": "Telekinetic Adept",
            "nameIt": "Telekinetic Adept",
            "level": 7,
            "text": "You have mastered new ways to use your telekinetic abilities, detailed below.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Psi-Powered Leap|Fighter|XPHB|Psi Warrior|XPHB|7'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Telekinetic Thrust|Fighter|XPHB|Psi Warrior|XPHB|7'}"
          },
          {
            "name": "Telekinetic Thrust",
            "nameIt": "Telekinetic Thrust",
            "level": 7,
            "text": "When you deal damage to a target with your Psionic Strike, you can force the target to make a Strength saving throw (8 plus your Intelligence modifier and Proficiency). On a failed save, you can give the target the Prone condition or transport it up to 10 feet horizontally."
          },
          {
            "name": "Guarded Mind",
            "nameIt": "Guarded Mind",
            "level": 10,
            "text": "You have Resistance to Psychic damage. Moreover, if you start your turn with the Charmed or Frightened condition, you can expend a Psionic Energy Die (no action required) and end every effect on yourself giving you those conditions."
          },
          {
            "name": "Bulwark of Force",
            "nameIt": "Bulwark of Force",
            "level": 15,
            "text": "You can shield yourself and others with telekinetic force. As a Bonus Action, you can choose creatures, including yourself, within 30 feet of yourself, up to a number of creatures equal to your Intelligence modifier (minimum of one creature). Each of the chosen creatures has Cover for 1 minute or until you have the Incapacitated condition.\n\nOnce you use this feature, you can't do so again until you finish a Long Rest unless you expend a Psionic Energy Die (no action required) to restore your use of it."
          },
          {
            "name": "Telekinetic Master",
            "nameIt": "Telekinetic Master",
            "level": 18,
            "text": "You always have the Telekinesis spell prepared. With this feature, you can cast it without a spell slot or components, and your spellcasting ability for it is Intelligence. On each of your turns while you maintain Concentration|XPHB on it, including the turn when you cast it, you can make one attack with a weapon as a Bonus Action.\n\nOnce you cast the spell with this feature, you can't do so in this way again until you finish a Long Rest unless you expend a Psionic Energy Die (no action required) to restore your use of it."
          }
        ]
      }
    ],
    "features": [
      {
        "name": "Fighting Style",
        "nameIt": "Fighting Style",
        "level": 1,
        "text": "You have honed your martial prowess and gain a Fighting Style feat of your choice. Defense is recommended.\n\nWhenever you gain a Fighter level, you can replace the feat you chose with a different Fighting Style feat."
      },
      {
        "name": "Second Wind",
        "nameIt": "Second Wind",
        "level": 1,
        "text": "You have a limited well of physical and mental stamina that you can draw on. As a Bonus Action, you can use it to regain Hit Points equal to 1d10 plus your Fighter level.\n\nYou can use this feature twice. You regain one expended use when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest.\n\nWhen you reach certain Fighter levels, you gain more uses of this feature, as shown in the Second Wind column of the Fighter Features table."
      },
      {
        "name": "Weapon Mastery",
        "nameIt": "Weapon Mastery",
        "level": 1,
        "text": "Your training with weapons allows you to use the weapon mastery properties of three kinds of Simple or Martial weapons of your choice. Whenever you finish a Long Rest, you can practice weapon drills and change one of those weapon choices.\n\nWhen you reach certain Fighter levels, you gain the ability to use the weapon mastery properties of more kinds of weapons, as shown in the Weapon Mastery column of the Fighter Features table."
      },
      {
        "name": "Action Surge",
        "nameIt": "Action Surge",
        "level": 2,
        "text": "You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action, except the Magic action.\n\nOnce you use this feature, you can't do so again until you finish a Short Rest or Long Rest. Starting at level 17, you can use it twice before a rest but only once on a turn."
      },
      {
        "name": "Tactical Mind",
        "nameIt": "Tactical Mind",
        "level": 2,
        "text": "You have a mind for tactics on and off the battlefield. When you fail an ability check, you can expend a use of your Second Wind to push yourself toward success. Rather than regaining Hit Points, you roll 1d10 and add the number rolled to the ability check, potentially turning it into a success. If the check still fails, this use of Second Wind isn't expended."
      },
      {
        "name": "Fighter Subclass",
        "nameIt": "Fighter Subclass",
        "level": 3,
        "text": "You gain a Fighter subclass of your choice. A subclass is a specialization that grants you features at certain Fighter levels. For the rest of your career, you gain each of your subclass's features that are of your Fighter level or lower."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 4,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify. You gain this feature again at Fighter levels 6, 8, 12, 14, and 16."
      },
      {
        "name": "Extra Attack",
        "nameIt": "Attacco extra",
        "level": 5,
        "text": "You can attack twice instead of once whenever you take the Attack action on your turn."
      },
      {
        "name": "Tactical Shift",
        "nameIt": "Tactical Shift",
        "level": 5,
        "text": "Whenever you activate your Second Wind with a Bonus Action, you can move up to half your Speed without provoking Opportunity Attack."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 6,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 7,
        "text": "You gain a feature from your Fighter Subclass."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 8,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Indomitable",
        "nameIt": "Indomitable",
        "level": 9,
        "text": "If you fail a saving throw, you can reroll it with a bonus equal to your Fighter level. You must use the new roll, and you can't use this feature again until you finish a Long Rest.\n\nYou can use this feature twice before a Long Rest starting at level 13 and three times before a Long Rest starting at level 17."
      },
      {
        "name": "Tactical Master",
        "nameIt": "Tactical Master",
        "level": 9,
        "text": "When you attack with a weapon whose mastery property you can use, you can replace that property with the {@itemMastery Push|XPHB, {@itemMastery Sap|XPHB, or {@itemMastery Slow|XPHB property for that attack."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 10,
        "text": "You gain a feature from your Fighter Subclass."
      },
      {
        "name": "Two Extra Attacks",
        "nameIt": "Two Extra Attacks",
        "level": 11,
        "text": "You can attack three times instead of once whenever you take the Attack action on your turn."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 12,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Indomitable",
        "nameIt": "Indomitable",
        "level": 13,
        "text": "If you fail a saving throw, you can reroll it with a bonus equal to your Fighter level. You must use the new roll, and you can't use this feature again until you finish a Long Rest.\n\nYou can use this feature twice before a Long Rest starting at level 13 and three times before a Long Rest starting at level 17."
      },
      {
        "name": "Studied Attacks",
        "nameIt": "Studied Attacks",
        "level": 13,
        "text": "You study your opponents and learn from each attack you make. If you make an attack roll against a creature and miss, you have Advantage on your next attack roll against that creature before the end of your next turn."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 14,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 15,
        "text": "You gain a feature from your Fighter Subclass."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 16,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Action Surge",
        "nameIt": "Action Surge",
        "level": 17,
        "text": "You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action, except the Magic action.\n\nOnce you use this feature, you can't do so again until you finish a Short Rest or Long Rest. Starting at level 17, you can use it twice before a rest but only once on a turn."
      },
      {
        "name": "Indomitable",
        "nameIt": "Indomitable",
        "level": 17,
        "text": "If you fail a saving throw, you can reroll it with a bonus equal to your Fighter level. You must use the new roll, and you can't use this feature again until you finish a Long Rest.\n\nYou can use this feature twice before a Long Rest starting at level 13 and three times before a Long Rest starting at level 17."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 18,
        "text": "You gain a feature from your Fighter Subclass."
      },
      {
        "name": "Epic Boon",
        "nameIt": "Aumento delle statistiche: Dono epico",
        "level": 19,
        "text": "You gain an Epic Boon feat or another {@5etools feat|feats.html of your choice for which you qualify. Boon of Combat Prowess is recommended."
      },
      {
        "name": "Three Extra Attacks",
        "nameIt": "Three Extra Attacks",
        "level": 20,
        "text": "You can attack four times instead of once whenever you take the Attack action on your turn."
      }
    ],
    "fluff": [
      "Fighters rule many battlefields. Questing knights, royal champions, elite soldiers, and hardened mercenaries—as Fighters, they all share an unparalleled prowess with weapons and armor. And they are well acquainted with death, both meting it out and defying it.",
      "Fighters master various weapon techniques, and a well-equipped Fighter always has the right tool at hand for any combat situation. Likewise, a Fighter is adept with every form of armor. Beyond that basic degree of familiarity, each Fighter specializes in certain styles of combat. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic. This combination of broad ability and extensive specialization makes Fighters superior combatants."
    ],
    "callout": {
      "title": "La scuola d'arme e di comando",
      "text": "Qual è la tua specialità tattica? Preferisci la linea di prima fila con armi pesanti, il duello agile con stocco e scudo, o il tiro di precisione a lunga gittata?"
    }
  },
  {
    "id": "monk",
    "name": "Monaco",
    "originalName": "Monk",
    "source": "PHB 2024",
    "quote": "Un maestro delle arti marziali che incanala la pura energia cosmica del corpo e dello spirito.",
    "hitDie": 8,
    "image": "https://5e.tools/img/classes/XPHB/Monk.webp",
    "primaryAbility": [
      "Destrezza",
      "Saggezza"
    ],
    "proficiencies": [
      "Forza",
      "Destrezza"
    ],
    "skills": "Scegli 2 abilità a tua scelta",
    "weapons": "Armi semplici, Martial weapons that have the Light property",
    "tools": "Seleziona uno strumento da artigiano o uno strumento musicale",
    "armor": "Nessuna",
    "startingEquipment": "Choose A or B: (A) Spear, 5 Dagger, Artisan's Tools or Musical Instrument chosen for the tool proficiency above, Explorer's Pack, and 11 GP; or (B) 50 GP",
    "multiclassing": "Per ottenere una nuova classe o lasciarla, i punteggi dei tuoi attributi primari (Destrezza, Saggezza) devono essere almeno pari a 13.",
    "tableLabels": [
      "Martial Arts",
      "Focus Points",
      "Unarmored Movement"
    ],
    "tableLabelsIt": [
      "Arti marziali",
      "Punti concentrazione",
      "Movimento senza armatura"
    ],
    "progression": [
      {
        "level": 1,
        "pb": "+2",
        "values": [
          "—",
          "0",
          "0"
        ]
      },
      {
        "level": 2,
        "pb": "+2",
        "values": [
          "—",
          "2",
          "10"
        ]
      },
      {
        "level": 3,
        "pb": "+2",
        "values": [
          "—",
          "3",
          "10"
        ]
      },
      {
        "level": 4,
        "pb": "+2",
        "values": [
          "—",
          "4",
          "10"
        ]
      },
      {
        "level": 5,
        "pb": "+3",
        "values": [
          "—",
          "5",
          "10"
        ]
      },
      {
        "level": 6,
        "pb": "+3",
        "values": [
          "—",
          "6",
          "15"
        ]
      },
      {
        "level": 7,
        "pb": "+3",
        "values": [
          "—",
          "7",
          "15"
        ]
      },
      {
        "level": 8,
        "pb": "+3",
        "values": [
          "—",
          "8",
          "15"
        ]
      },
      {
        "level": 9,
        "pb": "+4",
        "values": [
          "—",
          "9",
          "15"
        ]
      },
      {
        "level": 10,
        "pb": "+4",
        "values": [
          "—",
          "10",
          "20"
        ]
      },
      {
        "level": 11,
        "pb": "+4",
        "values": [
          "—",
          "11",
          "20"
        ]
      },
      {
        "level": 12,
        "pb": "+4",
        "values": [
          "—",
          "12",
          "20"
        ]
      },
      {
        "level": 13,
        "pb": "+5",
        "values": [
          "—",
          "13",
          "20"
        ]
      },
      {
        "level": 14,
        "pb": "+5",
        "values": [
          "—",
          "14",
          "25"
        ]
      },
      {
        "level": 15,
        "pb": "+5",
        "values": [
          "—",
          "15",
          "25"
        ]
      },
      {
        "level": 16,
        "pb": "+5",
        "values": [
          "—",
          "16",
          "25"
        ]
      },
      {
        "level": 17,
        "pb": "+6",
        "values": [
          "—",
          "17",
          "25"
        ]
      },
      {
        "level": 18,
        "pb": "+6",
        "values": [
          "—",
          "18",
          "30"
        ]
      },
      {
        "level": 19,
        "pb": "+6",
        "values": [
          "—",
          "19",
          "30"
        ]
      },
      {
        "level": 20,
        "pb": "+6",
        "values": [
          "—",
          "20",
          "30"
        ]
      }
    ],
    "subclasses": [
      {
        "id": "mercy",
        "name": "Guerriero della Misericordia",
        "originalName": "Warrior of Mercy",
        "shortName": "Mercy",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Warrior of Mercy",
            "nameIt": "Warrior of Mercy",
            "level": 3,
            "text": "Manipulate Forces of Life and Death\n\nWarriors of Mercy manipulate the life force of others. These Monks are wandering physicians, but they bring a swift end to their enemies. They often wear masks, presenting themselves as faceless bringers of life and death.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Hand of Harm|Monk|XPHB|Mercy|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Hand of Healing|Monk|XPHB|Mercy|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Implements of Mercy|Monk|XPHB|Mercy|XPHB|3'}"
          },
          {
            "name": "Hand of Harm",
            "nameIt": "Hand of Harm",
            "level": 3,
            "text": "Once per turn when you hit a creature with an Unarmed Strike and deal damage, you can expend 1 Focus Point to deal extra Necrotic damage equal to one roll of your Martial Arts die plus your Wisdom modifier."
          },
          {
            "name": "Hand of Healing",
            "nameIt": "Hand of Healing",
            "level": 3,
            "text": "As a Magic action, you can expend 1 Focus Point to touch a creature and restore a number of Hit Points equal to a roll of your Martial Arts die plus your Wisdom modifier. When you use your Flurry of Blows, you can replace one of the Unarmed Strikes with a use of this feature without expending a Focus Point for the healing."
          },
          {
            "name": "Implements of Mercy",
            "nameIt": "Implements of Mercy",
            "level": 3,
            "text": "You gain proficiency in the Insight and Medicine skills and proficiency with the Herbalism Kit."
          },
          {
            "name": "Physician's Touch",
            "nameIt": "Physician's Touch",
            "level": 6,
            "text": "Your Hand of Harm and Hand of Healing improve, as detailed below.\n\n**Hand of Harm**: When you use Hand of Harm on a creature, you can also give that creature the Poisoned condition until the end of your next turn.\n\n**Hand of Healing**: When you use Hand of Healing, you can also end one of the following conditions on the creature you heal: Blinded, Deafened, Paralyzed, Poisoned, or Stunned."
          },
          {
            "name": "Flurry of Healing and Harm",
            "nameIt": "Flurry of Healing and Harm",
            "level": 11,
            "text": "When you use Flurry of Blows, you can replace each of the Unarmed Strikes with a use of Hand of Healing without expending Focus Points for the healing.\n\nIn addition, when you make an Unarmed Strike with Flurry of Blows and deal damage, you can use Hand of Harm with that strike without expending a Focus Point for Hand of Harm. You can still use Hand of Harm only once per turn.\n\nYou can use these benefits a total number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a Long Rest."
          },
          {
            "name": "Hand of Ultimate Mercy",
            "nameIt": "Hand of Ultimate Mercy",
            "level": 17,
            "text": "Your mastery of life energy opens the door to the ultimate mercy. As a Magic action, you can touch the corpse of a creature that died within the past 24 hours and expend 5 Focus Points. The creature then returns to life with a number of Hit Points equal to 4d10 plus your Wisdom modifier. If the creature died with any of the following conditions, the creature revives with the conditions removed: Blinded, Deafened, Paralyzed, Poisoned, and Stunned.\n\nOnce you use this feature, you can't use it again until you finish a Long Rest."
          }
        ]
      },
      {
        "id": "shadow",
        "name": "Guerriero dell'Ombra",
        "originalName": "Warrior of Shadow",
        "shortName": "Shadow",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Shadow Arts",
            "nameIt": "Shadow Arts",
            "level": 3,
            "text": "You have learned to draw on the power of the Shadowfell, gaining the following benefits.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Darkness|Monk|XPHB|Shadow|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Darkvision|Monk|XPHB|Shadow|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Shadowy Figments|Monk|XPHB|Shadow|XPHB|3'}"
          },
          {
            "name": "Warrior of Shadow",
            "nameIt": "Warrior of Shadow",
            "level": 3,
            "text": "Harness Shadow Power for Stealth and Subterfuge\n\nWarriors of Shadow practice stealth and subterfuge, harnessing the power of the Shadowfell. They are at home in darkness, able to draw gloom around themselves to hide, leap from shadow to shadow, and take on a wraithlike form.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Shadow Arts|Monk|XPHB|Shadow|XPHB|3'}"
          },
          {
            "name": "Darkness",
            "nameIt": "Darkness",
            "level": 3,
            "text": "You can expend 1 Focus Point to cast the Darkness spell without spell components. You can see within the spell's area when you cast it with this feature. While the spell persists, you can move its area of Darkness to a space within 60 feet of yourself at the start of each of your turns."
          },
          {
            "name": "Darkvision",
            "nameIt": "Darkvision",
            "level": 3,
            "text": "You gain Darkvision with a range of 60 feet. If you already have Darkvision, its range increases by 60 feet."
          },
          {
            "name": "Shadowy Figments",
            "nameIt": "Shadowy Figments",
            "level": 3,
            "text": "You know the Minor Illusion spell. Wisdom is your spellcasting ability for it."
          },
          {
            "name": "Shadow Step",
            "nameIt": "Shadow Step",
            "level": 6,
            "text": "While entirely within Dim Light or Darkness, you can use a Bonus Action to teleport up to 60 feet to an unoccupied space you can see that is also in Dim Light or Darkness. You then have Advantage on the next melee attack you make before the end of the current turn."
          },
          {
            "name": "Improved Shadow Step",
            "nameIt": "Improved Shadow Step",
            "level": 11,
            "text": "You can draw on your Shadowfell connection to empower your teleportation. When you use your Shadow Step, you can expend 1 Focus Point to remove the requirement that you must start and end in Dim Light or Darkness for that use of the feature. As part of this Bonus Action, you can make an Unarmed Strike immediately after you teleport."
          },
          {
            "name": "Cloak of Shadows",
            "nameIt": "Cloak of Shadows",
            "level": 17,
            "text": "As a Magic action while entirely within Dim Light or Darkness, you can expend 3 Focus Points to shroud yourself with shadows for 1 minute, until you have the Incapacitated condition, or until you end your turn in Bright Light. While shrouded by these shadows, you gain the following benefits.\n\n**Invisibility**: You have the Invisible condition.\n\n**Partially Incorporeal**: You can move through occupied spaces as if they were Difficult Terrain. If you end your turn in such a space, you are shunted to the last unoccupied space you were in.\n\n**Shadow Flurry**: You can use your Flurry of Blows without expending any Focus Points."
          }
        ]
      },
      {
        "id": "elements",
        "name": "Guerriero degli Elementi",
        "originalName": "Warrior of the Elements",
        "shortName": "Elements",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Elemental Attunement",
            "nameIt": "Elemental Attunement",
            "level": 3,
            "text": "At the start of your turn, you can expend 1 Focus Point to imbue yourself with elemental energy. The energy lasts for 10 minutes or until you have the Incapacitated condition. You gain the following benefits while this feature is active.\n\n**Reach**: When you make an Unarmed Strike, your reach is 10 feet greater than normal, as elemental energy extends from you.\n\n**Elemental Strikes**: Whenever you hit with your Unarmed Strike, you can cause it to deal your choice of Acid, Cold, Fire, Lightning, or Thunder damage rather than its normal damage type. When you deal one of these types with it, you can also force the target to make a Strength saving throw. On a failed save, you can move the target up to 10 feet toward or away from you, as elemental energy swirls around it."
          },
          {
            "name": "Manipulate Elements",
            "nameIt": "Manipulate Elements",
            "level": 3,
            "text": "You know the Elementalism spell. Wisdom is your spellcasting ability for it."
          },
          {
            "name": "Warrior of the Elements",
            "nameIt": "Warrior of the Elements",
            "level": 3,
            "text": "Wield Strikes and Bursts of Elemental Power\n\nWarriors of the Elements tap into the power of the Elemental Planes. Harnessing their supernatural focus, these Monks momentarily tame the energy of the Elemental Chaos to empower themselves in and out of battle.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Elemental Attunement|Monk|XPHB|Elements|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Manipulate Elements|Monk|XPHB|Elements|XPHB|3'}"
          },
          {
            "name": "Elemental Burst",
            "nameIt": "Elemental Burst",
            "level": 6,
            "text": "As a Magic action, you can expend 2 Focus Points to cause elemental energy to burst in a 20-foot-radius Sphere [Area of Effect] centered on a point within 120 feet of yourself. Choose a damage type: Acid, Cold, Fire, Lightning, or Thunder.\n\nEach creature in the Sphere [Area of Effect] must make a Dexterity saving throw. On a failed save, a creature takes damage of the chosen type equal to three rolls of your Martial Arts die. On a successful save, a creature takes half as much damage."
          },
          {
            "name": "Stride of the Elements",
            "nameIt": "Stride of the Elements",
            "level": 11,
            "text": "While your Elemental Attunement is active, you also have a Fly Speed and a Swim Speed equal to your Speed."
          },
          {
            "name": "Elemental Epitome",
            "nameIt": "Elemental Epitome",
            "level": 17,
            "text": "While your Elemental Attunement is active, you also gain the following benefits.\n\n**Damage Resistance**: You gain Resistance to one of the following damage types of your choice: Acid, Cold, Fire, Lightning, or Thunder. At the start of each of your turns, you can change this choice.\n\n**Destructive Stride**: When you use your Step of the Wind, your Speed increases by 20 feet until the end of the turn. For that duration, any creature of your choice takes damage equal to one roll of your Martial Arts die when you enter a space within 5 feet of it. The damage type is your choice of Acid, Cold, Fire, Lightning, or Thunder. A creature can take this damage only once per turn.\n\n**Empowered Strikes**: Once on each of your turns, you can deal extra damage to a target equal to one roll of your Martial Arts die when you hit it with an Unarmed Strike. The extra damage is the same type dealt by that strike."
          }
        ]
      },
      {
        "id": "open-hand",
        "name": "Guerriero della Mano Aperta",
        "originalName": "Warrior of the Open Hand",
        "shortName": "Open Hand",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Open Hand Technique",
            "nameIt": "Open Hand Technique",
            "level": 3,
            "text": "Whenever you hit a creature with an attack granted by your Flurry of Blows, you can impose one of the following effects on that target.\n\n**Addle**: The target can't make Opportunity Attack until the start of its next turn.\n\n**Push**: The target must succeed on a Strength saving throw or be pushed up to 15 feet away from you.\n\n**Topple**: The target must succeed on a Dexterity saving throw or have the Prone condition."
          },
          {
            "name": "Warrior of the Open Hand",
            "nameIt": "Warrior of the Open Hand",
            "level": 3,
            "text": "Master Unarmed Combat Techniques\n\nWarriors of the Open Hand are masters of unarmed combat. They learn techniques to push and trip their opponents and manipulate their own energy to protect themselves from harm.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Open Hand Technique|Monk|XPHB|Open Hand|XPHB|3'}"
          },
          {
            "name": "Wholeness of Body",
            "nameIt": "Wholeness of Body",
            "level": 6,
            "text": "You gain the ability to heal yourself. As a Bonus Action, you can roll your Martial Arts die. You regain a number of Hit Points equal to the number rolled plus your Wisdom modifier (minimum of 1 Hit Points regained).\n\nYou can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a Long Rest."
          },
          {
            "name": "Fleet Step",
            "nameIt": "Fleet Step",
            "level": 11,
            "text": "When you take a Bonus Action other than Step of the Wind, you can also use Step of the Wind immediately after that Bonus Action."
          },
          {
            "name": "Quivering Palm",
            "nameIt": "Quivering Palm",
            "level": 17,
            "text": "You gain the ability to set up lethal vibrations in someone's body. When you hit a creature with an Unarmed Strike, you can expend 4 Focus Points to start these imperceptible vibrations, which last for a number of days equal to your Monk level. The vibrations are harmless unless you take an action to end them. Alternatively, when you take the Attack action on your turn, you can forgo one of the attacks to end the vibrations. To end them, you and the target must be on the same plane of existence. When you end them, the target must make a Constitution saving throw, taking 10d12 Force damage on a failed save or half as much damage on a successful one.\n\nYou can have only one creature under the effect of this feature at a time. You can end the vibrations harmlessly (no action required)."
          }
        ]
      }
    ],
    "features": [
      {
        "name": "Bonus Unarmed Strike",
        "nameIt": "Bonus Unarmed Strike",
        "level": 1,
        "text": "You can make an Unarmed Strike as a Bonus Action."
      },
      {
        "name": "Dexterous Attacks",
        "nameIt": "Dexterous Attacks",
        "level": 1,
        "text": "You can use your Dexterity modifier instead of your Strength modifier for the attack and damage rolls of your Unarmed Strikes and Monk weapons. In addition, when you use the Grapple or Shove option of your Unarmed Strike, you can use your Dexterity modifier instead of your Strength modifier to determine the save DC."
      },
      {
        "name": "Martial Arts",
        "nameIt": "Martial Arts",
        "level": 1,
        "text": "Your practice of martial arts gives you mastery of combat styles that use your Unarmed Strike and Monk weapons, which are the following:\n\n• Simple Melee Weapons\n• Martial Melee Weapons that have the Light property\n\nYou gain the following benefits while you are unarmed or wielding only Monk weapons and you aren't wearing armor or wielding a Shield.\n\n{'type': 'refClassFeature', 'classFeature': 'Bonus Unarmed Strike|Monk|XPHB|1'}\n\n{'type': 'refClassFeature', 'classFeature': 'Martial Arts Die|Monk|XPHB|1'}\n\n{'type': 'refClassFeature', 'classFeature': 'Dexterous Attacks|Monk|XPHB|1'}"
      },
      {
        "name": "Martial Arts Die",
        "nameIt": "Martial Arts Die",
        "level": 1,
        "text": "You can roll 1d6 in place of the normal damage of your Unarmed Strike or Monk weapons. This die changes as you gain Monk levels, as shown in the Martial Arts column of the Monk Features table."
      },
      {
        "name": "Unarmored Defense",
        "nameIt": "Unarmored Defense",
        "level": 1,
        "text": "While you aren't wearing armor or wielding a Shield, your base Armor Class equals 10 plus your Dexterity and Wisdom modifiers."
      },
      {
        "name": "Flurry of Blows",
        "nameIt": "Flurry of Blows",
        "level": 2,
        "text": "You can expend 1 Focus Point to make two Unarmed Strikes as a Bonus Action."
      },
      {
        "name": "Monk's Focus",
        "nameIt": "Monk's Focus",
        "level": 2,
        "text": "Your focus and martial training allow you to harness a well of extraordinary energy within yourself. This energy is represented by Focus Points. Your Monk level determines the number of points you have, as shown in the Focus Points column of the Monk Features table.\n\nYou can expend these points to enhance or fuel certain Monk features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind, each of which is detailed below.\n\nWhen you expend a Focus Point, it is unavailable until you finish a Short Rest or Long Rest, at the end of which you regain all your expended points.\n\nSome features that use Focus Points require your target to make a saving throw. The save DC equals 8 plus your Wisdom modifier and Proficiency.\n\n{'type': 'refClassFeature', 'classFeature': 'Flurry of Blows|Monk|XPHB|2'}\n\n{'type': 'refClassFeature', 'classFeature': 'Patient Defense|Monk|XPHB|2'}\n\n{'type': 'refClassFeature', 'classFeature': 'Step of the Wind|Monk|XPHB|2'}"
      },
      {
        "name": "Patient Defense",
        "nameIt": "Patient Defense",
        "level": 2,
        "text": "You can take the Disengage action as a Bonus Action. Alternatively, you can expend 1 Focus Point to take both the Disengage and the Dodge actions as a Bonus Action."
      },
      {
        "name": "Step of the Wind",
        "nameIt": "Step of the Wind",
        "level": 2,
        "text": "You can take the Dash action as a Bonus Action. Alternatively, you can expend 1 Focus Point to take both the Disengage and Dash actions as a Bonus Action, and your jump distance is doubled for the turn."
      },
      {
        "name": "Unarmored Movement",
        "nameIt": "Unarmored Movement",
        "level": 2,
        "text": "Your speed increases by 10 feet while you aren't wearing armor or wielding a Shield. This bonus increases when you reach certain Monk levels, as shown on the Monk Features table."
      },
      {
        "name": "Uncanny Metabolism",
        "nameIt": "Uncanny Metabolism",
        "level": 2,
        "text": "When you roll Initiative, you can regain all expended Focus Points. When you do so, roll your Martial Arts die, and regain a number of Hit Points equal to your Monk level plus the number rolled.\n\nOnce you use this feature, you can't use it again until you finish a Long Rest."
      },
      {
        "name": "Deflect Attacks",
        "nameIt": "Deflect Attacks",
        "level": 3,
        "text": "When an attack roll hits you and its damage includes Bludgeoning, Piercing, or Slashing damage, you can take a Reaction to reduce the attack's total damage against you. The reduction equals 1d10 plus your Dexterity modifier and Monk level.\n\nIf you reduce the damage to 0, you can expend 1 Focus Point to redirect some of the attack's force. If you do so, choose a creature you can see within 5 feet of yourself if the attack was a melee attack or a creature you can see within 60 feet of yourself that isn't behind Cover if the attack was a ranged attack. That creature must succeed on a Dexterity saving throw or take damage equal to two rolls of your Martial Arts die plus your Dexterity modifier. The damage is the same type dealt by the attack."
      },
      {
        "name": "Monk Subclass",
        "nameIt": "Monk Subclass",
        "level": 3,
        "text": "You gain a Monk subclass of your choice. A subclass is a specialization that grants you features at certain Monk levels. For the rest of your career, you gain each of your subclass's features that are of your Monk level or lower."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 4,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify. You gain this feature again at Monk levels 8, 12, and 16."
      },
      {
        "name": "Slow Fall",
        "nameIt": "Slow Fall",
        "level": 4,
        "text": "You can take a Reaction when you fall to reduce any damage you take from the fall by an amount equal to five times your Monk level."
      },
      {
        "name": "Extra Attack",
        "nameIt": "Attacco extra",
        "level": 5,
        "text": "You can attack twice instead of once whenever you take the Attack action on your turn."
      },
      {
        "name": "Stunning Strike",
        "nameIt": "Stunning Strike",
        "level": 5,
        "text": "Once per turn when you hit a creature with a Monk weapon or an Unarmed Strike, you can expend 1 Focus Point to attempt a stunning strike. The target must make a Constitution saving throw. On a failed save, the target has the Stunned condition until the start of your next turn. On a successful save, the target's Speed is halved until the start of your next turn, and the next attack roll made against the target before then has Advantage."
      },
      {
        "name": "Empowered Strikes",
        "nameIt": "Empowered Strikes",
        "level": 6,
        "text": "Whenever you deal damage with your Unarmed Strike, it can deal your choice of Force damage or its normal damage type."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 6,
        "text": "You gain a feature from your Monk subclass."
      },
      {
        "name": "Evasion",
        "nameIt": "Evasion",
        "level": 7,
        "text": "When you're subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw and only half damage if you fail.\n\nYou don't benefit from this feature if you have the Incapacitated condition."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 8,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Acrobatic Movement",
        "nameIt": "Acrobatic Movement",
        "level": 9,
        "text": "While you aren't wearing armor or wielding a Shield, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the movement."
      },
      {
        "name": "Heightened Focus",
        "nameIt": "Heightened Focus",
        "level": 10,
        "text": "Your Flurry of Blows, Patient Defense, and Step of the Wind gain the following benefits.\n\n**Flurry of Blows**: You can expend 1 Focus Point to use Flurry of Blows and make three Unarmed Strikes with it instead of two.\n\n**Patient Defense**: When you expend a Focus Point to use Patient Defense, you gain a number of Temporary Hit Points equal to two rolls of your Martial Arts die.\n\n**Step of the Wind**: When you expend a Focus Point to use Step of the Wind, you can choose a willing creature within 5 feet of yourself that is Large or smaller. You move the creature with you until the end of your turn. The creature's movement doesn't provoke Opportunity Attack."
      },
      {
        "name": "Self-Restoration",
        "nameIt": "Self-Restoration",
        "level": 10,
        "text": "Through sheer force of will, you can remove one of the following conditions from yourself at the end of each of your turns: Charmed, Frightened, or Poisoned.\n\nIn addition, forgoing food and drink doesn't give you levels of Exhaustion."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 11,
        "text": "You gain a feature from your Monk subclass."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 12,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Deflect Energy",
        "nameIt": "Deflect Energy",
        "level": 13,
        "text": "You can now use your Deflect Attacks feature against attacks that deal any damage type, not just Bludgeoning, Piercing, or Slashing."
      },
      {
        "name": "Disciplined Survivor",
        "nameIt": "Disciplined Survivor",
        "level": 14,
        "text": "Your physical and mental discipline grant you proficiency in all saving throws.\n\nAdditionally, whenever you make a saving throw and fail, you can expend 1 Focus Point to reroll it, and you must use the new roll."
      },
      {
        "name": "Perfect Focus",
        "nameIt": "Perfect Focus",
        "level": 15,
        "text": "When you roll Initiative and don't use Uncanny Metabolism, you regain expended Focus Points until you have 4 if you have 3 or fewer."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 16,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 17,
        "text": "You gain a feature from your Monk subclass."
      },
      {
        "name": "Superior Defense",
        "nameIt": "Superior Defense",
        "level": 18,
        "text": "At the start of your turn, you can expend 3 Focus Points to bolster yourself against harm for 1 minute or until you have the Incapacitated condition. During that time, you have Resistance to all damage except Force damage."
      },
      {
        "name": "Epic Boon",
        "nameIt": "Aumento delle statistiche: Dono epico",
        "level": 19,
        "text": "You gain an Epic Boon feat or another {@5etools feat|feats.html of your choice for which you qualify. Boon of Irresistible Offense is recommended."
      },
      {
        "name": "Body and Mind",
        "nameIt": "Body and Mind",
        "level": 20,
        "text": "You have developed your body and mind to new heights. Your Dexterity and Wisdom scores increase by 4, to a maximum of 25."
      }
    ],
    "fluff": [
      "Monks use rigorous combat training and mental discipline to align themselves with the multiverse and focus their internal reservoirs of power. Different Monks conceptualize this power in various ways: as breath, energy, life force, essence, or self, for example. Whether channeled as a striking display of martial prowess or as a subtler manifestation of defense and speed, this power infuses all that a Monk does.",
      "Monks focus their internal power to create extraordinary, even supernatural, effects. They channel uncanny speed and strength into their attacks, with or without the use of weapons. In a Monk's hands, even the most basic weapons can become sophisticated implements of combat mastery.",
      "Many Monks find that a structured life of ascetic withdrawal helps them cultivate the physical and mental focus they need to harness their power. Other Monks believe that immersing themselves in the vibrant confusion of life helps to fuel their determination and discipline.",
      "Monks generally view adventures as tests of their physical and mental development. They are driven by a desire to accomplish a greater mission than merely slaying monsters and plundering treasure; they strive to turn themselves into living weapons."
    ],
    "callout": {
      "title": "La disciplina dello Spirito e del Corpo",
      "text": "In quale monastero o ordine hai appreso il controllo del Focus cosmico? I tuoi movimenti sono fluidi come l'acqua o fulminei come il vento?"
    }
  },
  {
    "id": "paladin",
    "name": "Paladino",
    "originalName": "Paladin",
    "source": "PHB 2024",
    "quote": "Un nobile cavaliere legato a un sacro giuramento che brandisce il favore divino e castiga il male.",
    "hitDie": 10,
    "image": "https://5e.tools/img/classes/XPHB/Paladin.webp",
    "primaryAbility": [
      "Forza",
      "Carisma"
    ],
    "proficiencies": [
      "Saggezza",
      "Carisma"
    ],
    "skills": "Scegli 2 abilità a tua scelta",
    "weapons": "Armi semplici, Armi da guerra",
    "tools": "Nessuna",
    "armor": "Armatura leggera, Armatura media, Armatura pesante, Scudi",
    "startingEquipment": "Choose A or B: (A) Chain Mail, Shield, Longsword, 6 Javelin, Holy Symbol, Priest's Pack, and 9 GP; or (B) 150 GP",
    "multiclassing": "Per ottenere una nuova classe o lasciarla, i punteggi dei tuoi attributi primari (Forza, Carisma) devono essere almeno pari a 13.",
    "tableLabels": [
      "Channel Divinity",
      "Prepared Spells",
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "tableLabelsIt": [
      "Incanalare divinità",
      "Incantesimi",
      "1°",
      "2°",
      "3°",
      "4°",
      "5°"
    ],
    "progression": [
      {
        "level": 1,
        "pb": "+2",
        "values": [
          "0",
          "2"
        ]
      },
      {
        "level": 2,
        "pb": "+2",
        "values": [
          "0",
          "3"
        ]
      },
      {
        "level": 3,
        "pb": "+2",
        "values": [
          "2",
          "4"
        ]
      },
      {
        "level": 4,
        "pb": "+2",
        "values": [
          "2",
          "5"
        ]
      },
      {
        "level": 5,
        "pb": "+3",
        "values": [
          "2",
          "6"
        ]
      },
      {
        "level": 6,
        "pb": "+3",
        "values": [
          "2",
          "6"
        ]
      },
      {
        "level": 7,
        "pb": "+3",
        "values": [
          "2",
          "7"
        ]
      },
      {
        "level": 8,
        "pb": "+3",
        "values": [
          "2",
          "7"
        ]
      },
      {
        "level": 9,
        "pb": "+4",
        "values": [
          "2",
          "9"
        ]
      },
      {
        "level": 10,
        "pb": "+4",
        "values": [
          "2",
          "9"
        ]
      },
      {
        "level": 11,
        "pb": "+4",
        "values": [
          "3",
          "10"
        ]
      },
      {
        "level": 12,
        "pb": "+4",
        "values": [
          "3",
          "10"
        ]
      },
      {
        "level": 13,
        "pb": "+5",
        "values": [
          "3",
          "11"
        ]
      },
      {
        "level": 14,
        "pb": "+5",
        "values": [
          "3",
          "11"
        ]
      },
      {
        "level": 15,
        "pb": "+5",
        "values": [
          "3",
          "12"
        ]
      },
      {
        "level": 16,
        "pb": "+5",
        "values": [
          "3",
          "12"
        ]
      },
      {
        "level": 17,
        "pb": "+6",
        "values": [
          "3",
          "14"
        ]
      },
      {
        "level": 18,
        "pb": "+6",
        "values": [
          "3",
          "14"
        ]
      },
      {
        "level": 19,
        "pb": "+6",
        "values": [
          "3",
          "15"
        ]
      },
      {
        "level": 20,
        "pb": "+6",
        "values": [
          "3",
          "15"
        ]
      }
    ],
    "subclasses": [
      {
        "id": "devotion",
        "name": "Giuramento di Devozione",
        "originalName": "Oath of Devotion",
        "shortName": "Devotion",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Oath of Devotion",
            "nameIt": "Oath of Devotion",
            "level": 3,
            "text": "Uphold the Ideals of Justice and Order\n\nThe Oath of Devotion binds Paladins to the ideals of justice and order. These Paladins meet the archetype of the knight in shining armor. They hold themselves to the highest standards of conduct, and some—for better or worse—hold the rest of the world to the same standards.\n\nMany who swear this oath are devoted to gods of law and good and use their gods' tenets as the measure of personal devotion. Others hold angels as their ideals and incorporate images of angelic wings into their helmets or coats of arms.\n\nThese paladins share the following tenets:\n\n• Let your word be your promise.\n• Protect the weak and never fear to act.\n• Let your honorable deeds be an example.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Oath of Devotion Spells|Paladin|XPHB|Devotion|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Sacred Weapon|Paladin|XPHB|Devotion|XPHB|3'}"
          },
          {
            "name": "Oath of Devotion Spells",
            "nameIt": "Oath of Devotion Spells",
            "level": 3,
            "text": "The magic of your oath ensures you always have certain spells ready; when you reach a Paladin level specified in the Oath of Devotion Spells table, you thereafter always have the listed spells prepared.\n\nPaladin Level | Spells\n--- | ---\n3 | Protection from Evil and Good, Shield of Faith\n5 | Aid, Zone of Truth\n9 | Beacon of Hope, Dispel Magic\n13 | Freedom of Movement, Guardian of Faith\n17 | Commune, Flame Strike"
          },
          {
            "name": "Sacred Weapon",
            "nameIt": "Sacred Weapon",
            "level": 3,
            "text": "When you take the Attack action, you can expend one use of your Channel Divinity to imbue one Melee weapon that you are holding with positive energy. For 10 minutes or until you use this feature again, you add your Charisma modifier to attack rolls you make with that weapon (minimum bonus of +1), and each time you hit with it, you cause it to deal its normal damage type or Radiant damage.\n\nThe weapon also emits Bright Light in a 20-foot radius and Dim Light 20 feet beyond that.\n\nYou can end this effect early (no action required). This effect also ends if you aren't carrying the weapon."
          },
          {
            "name": "Aura of Devotion",
            "nameIt": "Aura of Devotion",
            "level": 7,
            "text": "You and your allies have Immunity to the Charmed condition while in your Aura of Protection. If a Charmed ally enters the aura, that condition has no effect on that ally while there."
          },
          {
            "name": "Smite of Protection",
            "nameIt": "Smite of Protection",
            "level": 15,
            "text": "Your magical smite now radiates protective energy. Whenever you cast Divine Smite, you and your allies have Cover while in your Aura of Protection. The aura has this benefit until the start of your next turn."
          },
          {
            "name": "Holy Nimbus",
            "nameIt": "Holy Nimbus",
            "level": 20,
            "text": "As a Bonus Action, you can imbue your Aura of Protection with holy power, granting the benefits below for 10 minutes or until you end them (no action required). Once you use this feature, you can't use it again until you finish a Long Rest. You can also restore your use of it by expending a level 5 spell slot (no action required).\n\n**Holy Ward**: You have Advantage on any saving throw you are forced to make by a Fiend or an Undead.\n\n**Radiant Damage**: Whenever an enemy starts its turn in the aura, that creature takes Radiant damage equal to your Charisma modifier plus your Proficiency.\n\n**Sunlight**: The aura is filled with Bright Light that is sunlight."
          }
        ]
      },
      {
        "id": "glory",
        "name": "Giuramento di Gloria",
        "originalName": "Oath of Glory",
        "shortName": "Glory",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Inspiring Smite",
            "nameIt": "Inspiring Smite",
            "level": 3,
            "text": "Immediately after you cast Divine Smite, you can expend one use of your Channel Divinity and distribute Temporary Hit Points to creatures of your choice within 30 feet of yourself, which can include you. The total number of Temporary Hit Points equals 2d8 plus your Paladin level, divided among the chosen creatures however you like."
          },
          {
            "name": "Oath of Glory",
            "nameIt": "Oath of Glory",
            "level": 3,
            "text": "Strive for the Heights of Heroism\n\nPaladins who take the Oath of Glory believe they and their companions are destined to achieve glory through deeds of heroism. They train diligently and encourage their companions, so they're all ready when destiny calls.\n\nThese paladins share the following tenets:\n\n• Endeavor to be known by your deeds.\n• Face hardships with courage.\n• Inspire others to strive for glory.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Oath of Glory Spells|Paladin|XPHB|Glory|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Inspiring Smite|Paladin|XPHB|Glory|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Peerless Athlete|Paladin|XPHB|Glory|XPHB|3'}"
          },
          {
            "name": "Oath of Glory Spells",
            "nameIt": "Oath of Glory Spells",
            "level": 3,
            "text": "The magic of your oath ensures you always have certain spells ready; when you reach a Paladin level specified in the Oath of Glory Spells table, you thereafter always have the listed spells prepared.\n\nPaladin Level | Spells\n--- | ---\n3 | Guiding Bolt, Heroism\n5 | Enhance Ability, Magic Weapon\n9 | Haste, Protection from Energy\n13 | Compulsion, Freedom of Movement\n17 | Legend Lore, Yolande's Regal Presence"
          },
          {
            "name": "Peerless Athlete",
            "nameIt": "Peerless Athlete",
            "level": 3,
            "text": "As a Bonus Action, you can expend one use of your Channel Divinity to augment your athleticism. For 1 hour, you have Advantage on Strength (Athletics) and Dexterity (Acrobatics) checks, and the distance of your Long and High Jumps increases by 10 feet (this extra distance costs movement as normal)."
          },
          {
            "name": "Aura of Alacrity",
            "nameIt": "Aura of Alacrity",
            "level": 7,
            "text": "Your Speed increases by 10 feet.\n\nIn addition, whenever an ally enters your Aura of Protection for the first time on a turn or starts their turn there, the ally's Speed increases by 10 feet until the end of their next turn."
          },
          {
            "name": "Glorious Defense",
            "nameIt": "Glorious Defense",
            "level": 15,
            "text": "You can turn defense into a sudden strike. When you or another creature you can see within 10 feet of you is hit by an attack roll, you can take a Reaction to grant a bonus to the target's AC against that attack, potentially causing it to miss. The bonus equals your Charisma modifier (minimum of +1). If the attack misses, you can make one attack with a weapon against the attacker as part of this Reaction if the attacker is within your weapon's range.\n\nYou can use this feature a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a Long Rest."
          },
          {
            "name": "Living Legend",
            "nameIt": "Living Legend",
            "level": 20,
            "text": "You can empower yourself with the legends—whether true or exaggerated—of your great deeds. As a Bonus Action, you gain the benefits below for 10 minutes. Once you use this feature, you can't use it again until you finish a Long Rest. You can also restore your use of it by expending a level 5 spell slot (no action required).\n\n**Charismatic**: You are blessed with an otherworldly presence and have Advantage on all Charisma checks.\n\n**Saving Throw Reroll**: If you fail a saving throw, you can take a Reaction to reroll it. You must use this new roll.\n\n**Unerring Strike**: Once on each of your turns when you make an attack roll with a weapon and miss, you can cause that attack to hit instead."
          }
        ]
      },
      {
        "id": "ancients",
        "name": "Giuramento degli Antichi",
        "originalName": "Oath of the Ancients",
        "shortName": "Ancients",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Nature's Wrath",
            "nameIt": "Nature's Wrath",
            "level": 3,
            "text": "As a Magic action, you can expend one use of your Channel Divinity to conjure spectral vines around nearby creatures. Each creature of your choice that you can see within 15 feet of yourself must succeed on a Strength saving throw or have the Restrained condition for 1 minute. A Restrained creature repeats the save at the end of each of its turns, ending the effect on itself on a success."
          },
          {
            "name": "Oath of the Ancients",
            "nameIt": "Oath of the Ancients",
            "level": 3,
            "text": "Preserve Life and Light in the World\n\nThe Oath of the Ancients is as old as the first elves. Paladins who swear this oath cherish the light; they love the beautiful and life-giving things of the world more than any principles of honor, courage, and justice. They often adorn their armor and clothing with images of growing things—leaves, antlers, or flowers—to reflect their commitment to preserving life and light.\n\nThese paladins share the following tenets:\n\n• Kindle the light of hope.\n• Shelter life.\n• Delight in art and laughter.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Oath of the Ancients Spells|Paladin|XPHB|Ancients|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': \"Nature's Wrath|Paladin|XPHB|Ancients|XPHB|3\"}"
          },
          {
            "name": "Oath of the Ancients Spells",
            "nameIt": "Oath of the Ancients Spells",
            "level": 3,
            "text": "The magic of your oath ensures you always have certain spells ready; when you reach a Paladin level specified in the Oath of the Ancients Spells table, you thereafter always have the listed spells prepared.\n\nPaladin Level | Spells\n--- | ---\n3 | Ensnaring Strike, Speak with Animals\n5 | Misty Step, Moonbeam\n9 | Plant Growth, Protection from Energy\n13 | Ice Storm, Stoneskin\n17 | Commune with Nature, Tree Stride"
          },
          {
            "name": "Aura of Warding",
            "nameIt": "Aura of Warding",
            "level": 7,
            "text": "Ancient magic lies so heavily upon you that it forms an eldritch ward, blunting energy from beyond the Material Plane; you and your allies have Resistance to Necrotic, Psychic, and Radiant damage while in your Aura of Protection."
          },
          {
            "name": "Undying Sentinel",
            "nameIt": "Undying Sentinel",
            "level": 15,
            "text": "When you are reduced to 0 Hit Points and not killed outright, you can drop to 1 Hit Points instead, and you regain a number of Hit Points equal to three times your Paladin level. Once you use this feature, you can't do so again until you finish a Long Rest.\n\nAdditionally, you can't be aged magically, and you cease visibly aging."
          },
          {
            "name": "Elder Champion",
            "nameIt": "Elder Champion",
            "level": 20,
            "text": "As a Bonus Action, you can imbue your Aura of Protection with primal power, granting the benefits below for 1 minute or until you end them (no action required). Once you use this feature, you can't use it again until you finish a Long Rest. You can also restore your use of it by expending a level 5 spell slot (no action required).\n\n**Diminish Defiance**: Enemies in the aura have Disadvantage on saving throws against your spells and Channel Divinity options.\n\n**Regeneration**: At the start of each of your turns, you regain 10 Hit Points.\n\n**Swift Spells**: Whenever you cast a spell that has a casting time of an action, you can cast it using a Bonus Action instead."
          }
        ]
      },
      {
        "id": "vengeance",
        "name": "Giuramento di Vendetta",
        "originalName": "Oath of Vengeance",
        "shortName": "Vengeance",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Oath of Vengeance",
            "nameIt": "Oath of Vengeance",
            "level": 3,
            "text": "Punish Evildoers at Any Cost\n\nThe Oath of Vengeance is a solemn commitment to punish those who have committed grievously evil acts. When evil armies slaughter helpless villagers, when a tyrant defies the will of the gods, when a thieves' guild grows too violent, when a dragon rampages through the countryside—at times like these, paladins arise and swear an Oath of Vengeance to set right what has gone wrong.\n\nThese paladins share the following tenets:\n\n• Show the wicked no mercy.\n• Fight injustice and its causes.\n• Aid those harmed by injustice.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Oath of Vengeance Spells|Paladin|XPHB|Vengeance|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Vow of Enmity|Paladin|XPHB|Vengeance|XPHB|3'}"
          },
          {
            "name": "Oath of Vengeance Spells",
            "nameIt": "Oath of Vengeance Spells",
            "level": 3,
            "text": "The magic of your oath ensures you always have certain spells ready; when you reach a Paladin level specified in the Oath of Vengeance Spells table, you thereafter always have the listed spells prepared.\n\nPaladin Level | Spells\n--- | ---\n3 | Bane, Hunter's Mark\n5 | Hold Person, Misty Step\n9 | Haste, Protection from Energy\n13 | Banishment, Dimension Door\n17 | Hold Monster, Scrying"
          },
          {
            "name": "Vow of Enmity",
            "nameIt": "Vow of Enmity",
            "level": 3,
            "text": "When you take the Attack action, you can expend one use of your Channel Divinity to utter a vow of enmity against a creature you can see within 30 feet of yourself. You have Advantage on attack rolls against the creature for 1 minute or until you use this feature again.\n\nIf the creature drops to 0 Hit Points before the vow ends, you can transfer the vow to a different creature within 30 feet of yourself (no action required)."
          },
          {
            "name": "Relentless Avenger",
            "nameIt": "Relentless Avenger",
            "level": 7,
            "text": "Your supernatural focus helps you close off a foe's retreat. When you hit a creature with an Opportunity Attack, you can reduce the creature's Speed to 0 until the end of the current turn. You can then move up to half your Speed as part of the same Reaction. This movement doesn't provoke Opportunity Attack."
          },
          {
            "name": "Soul of Vengeance",
            "nameIt": "Soul of Vengeance",
            "level": 15,
            "text": "Immediately after a creature under the effect of your Vow of Enmity hits or misses with an attack roll, you can take a Reaction to make a melee attack against that creature if it's within range."
          },
          {
            "name": "Avenging Angel",
            "nameIt": "Avenging Angel",
            "level": 20,
            "text": "As a Bonus Action, you gain the benefits below for 10 minutes or until you end them (no action required). Once you use this feature, you can't use it again until you finish a Long Rest. You can also restore your use of it by expending a level 5 spell slot (no action required).\n\n**Flight**: You sprout spectral wings on your back, have a Fly Speed of 60 feet, and can hover.\n\n**Frightful Aura**: Whenever an enemy starts its turn in your Aura of Protection, that creature must succeed on a Wisdom saving throw or have the Frightened condition for 1 minute or until it takes any damage. Attack rolls against the Frightened creature have Advantage."
          }
        ]
      }
    ],
    "features": [
      {
        "name": "Lay on Hands",
        "nameIt": "Lay on Hands",
        "level": 1,
        "text": "Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you finish a Long Rest. With that pool, you can restore a total number of Hit Points equal to five times your Paladin level.\n\nAs a Bonus Action, you can touch a creature (which could be yourself) and draw power from the pool of healing to restore a number of Hit Points to that creature, up to the maximum amount remaining in the pool.\n\nYou can also expend 5 Hit Points from the pool of healing power to remove the Poisoned condition from the creature; those points don't also restore Hit Points to the creature."
      },
      {
        "name": "Spellcasting",
        "nameIt": "Incantesimi",
        "level": 1,
        "text": "You have learned to cast spells through prayer and meditation. See chapter 7|XPHB|7 for the rules on spellcasting. The information below details how you use those rules with Paladin spells, which appear in the Paladin spell list later in the class's description.\n\n**Spell Slots**: The Paladin Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.\n\n**Prepared Spells of Level 1+**: You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 Paladin spells. Heroism and Searing Smite are recommended.\n\nThe number of spells on your list increases as you gain Paladin levels, as shown in the Prepared Spells column of the Paladin Features table. Whenever that number increases, choose additional Paladin spells until the number of spells on your list matches the number in the Paladin Features table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 5 Paladin, your list of prepared spells can include six Paladin spells of level 1 or 2 in any combination.\n\nIf another Paladin feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Paladin spells for you.\n\n**Changing Your Prepared Spells**: Whenever you finish a Long Rest, you can replace one spell on your list with another Paladin spell for which you have spell slots.\n\n**Spellcasting Ability**: Charisma is your spellcasting ability for your Paladin spells.\n\n**Spellcasting Focus**: You can use a Holy Symbol as a Spellcasting Focus for your Paladin spells."
      },
      {
        "name": "Weapon Mastery",
        "nameIt": "Weapon Mastery",
        "level": 1,
        "text": "Your training with weapons allows you to use the weapon mastery properties of two kinds of weapons of your choice with which you have proficiency, such as Longsword and Javelin.\n\nWhenever you finish a Long Rest, you can change the kinds of weapons you chose. For example, you could switch to using the weapon mastery properties of Halberd and Flail."
      },
      {
        "name": "Fighting Style",
        "nameIt": "Fighting Style",
        "level": 2,
        "text": "You gain a Fighting Style feat of your choice. Instead of choosing one of those feats, you can choose the option below.\n\n{'type': 'refFeat', 'feat': 'Blessed Warrior|XPHB'}"
      },
      {
        "name": "Paladin's Smite",
        "nameIt": "Paladin's Smite",
        "level": 2,
        "text": "You always have the Divine Smite spell prepared. In addition, you can cast it without expending a spell slot, but you must finish a Long Rest before you can cast it in this way again."
      },
      {
        "name": "Channel Divinity",
        "nameIt": "Channel Divinity",
        "level": 3,
        "text": "You can channel divine energy directly from the Outer Planes, using it to fuel magical effects. You start with one such effect: Divine Sense, which is described below. Other Paladin features give additional Channel Divinity effect options. Each time you use this class's Channel Divinity, you choose which effect from this class to create.\n\nYou can use this class's Channel Divinity twice. You regain one of its expended uses when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest. You gain an additional use when you reach Paladin level 11.\n\nIf a Channel Divinity effect requires a saving throw, the DC equals the spell save DC from this class's Spellcasting feature.\n\n{'type': 'refClassFeature', 'classFeature': 'Divine Sense|Paladin|XPHB|3|XPHB'}"
      },
      {
        "name": "Divine Sense",
        "nameIt": "Divine Sense",
        "level": 3,
        "text": "As a Bonus Action, you can open your awareness to detect Celestials, Fiends, and Undead. For the next 10 minutes or until you have the Incapacitated condition, you know the location of any creature of those types within 60 feet of yourself, and you know its creature type. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the Hallow spell."
      },
      {
        "name": "Paladin Subclass",
        "nameIt": "Paladin Subclass",
        "level": 3,
        "text": "You gain a Paladin subclass of your choice. A subclass is a specialization that grants you features at certain Paladin levels. For the rest of your career, you gain each of your subclass's features that are of your Paladin level or lower.\n\nA Paladin tries to hold to the highest standards of conduct, but even the most dedicated are fallible. Sometimes a Paladin transgresses their oath.\n\nA Paladin who has broken a vow typically seeks absolution, spending an all-night vigil as a sign of penitence or undertaking a fast. After a rite of forgiveness, the Paladin starts fresh.\n\nIf your Paladin unrepentantly violates their oath, talk to your DM. Your Paladin should probably take a more appropriate subclass or even abandon the class and adopt another one."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 4,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify. You gain this feature again at Paladin levels 8, 12, and 16."
      },
      {
        "name": "Extra Attack",
        "nameIt": "Attacco extra",
        "level": 5,
        "text": "You can attack twice instead of once whenever you take the Attack action on your turn."
      },
      {
        "name": "Faithful Steed",
        "nameIt": "Faithful Steed",
        "level": 5,
        "text": "You can call on the aid of an otherworldly steed. You always have the Find Steed spell prepared.\n\nYou can also cast the spell once without expending a spell slot, and you regain the ability to do so when you finish a Long Rest."
      },
      {
        "name": "Aura of Protection",
        "nameIt": "Aura of Protection",
        "level": 6,
        "text": "You radiate a protective, unseeable aura in a 10-foot Emanation [Area of Effect] that originates from you. The aura is inactive while you have the Incapacitated condition.\n\nYou and your allies in the aura gain a bonus to saving throws equal to your Charisma modifier (minimum bonus of +1).\n\nIf another Paladin is present, a creature can benefit from only one Aura of Protection at a time; the creature chooses which aura while in them."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 7,
        "text": "You gain a feature from your Paladin Subclass."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 8,
        "text": "You gain the Ability Score Improvement Feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Abjure Foes",
        "nameIt": "Abjure Foes",
        "level": 9,
        "text": "As a Magic action, you can expend one use of this class's Channel Divinity to overwhelm foes with awe. As you present your Holy Symbol or weapon, you can target a number of creatures equal to your Charisma modifier (minimum of one creature) that you can see within 60 feet of yourself. Each target must succeed on a Wisdom saving throw or have the Frightened condition for 1 minute or until it takes any damage. While Frightened in this way, a target can do only one of the following on its turns: move, take an action, or take a Bonus Action."
      },
      {
        "name": "Aura of Courage",
        "nameIt": "Aura of Courage",
        "level": 10,
        "text": "You and your allies have Immunity to the Frightened condition while in your Aura of Protection. If a Frightened ally enters the aura, that condition has no effect on that ally while there."
      },
      {
        "name": "Radiant Strikes",
        "nameIt": "Radiant Strikes",
        "level": 11,
        "text": "Your strikes now carry supernatural power. When you hit a target with an attack roll using a Melee weapon or an Unarmed Strike, the target takes an extra 1d8 Radiant damage."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 12,
        "text": "You gain the Ability Score Improvement Feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Restoring Touch",
        "nameIt": "Restoring Touch",
        "level": 14,
        "text": "When you use Lay On Hands on a creature, you can also remove one or more of the following conditions from the creature: Blinded, Charmed, Deafened, Frightened, Paralyzed, or Stunned. You must expend 5 Hit Points from the healing pool of Lay On Hands for each of these conditions you remove; those points don't also restore Hit Points to the creature."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 15,
        "text": "You gain a feature from your Paladin Subclass."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 16,
        "text": "You gain the Ability Score Improvement Feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Aura Expansion",
        "nameIt": "Aura Expansion",
        "level": 18,
        "text": "Your Aura of Protection is now a 30-foot Emanation [Area of Effect]."
      },
      {
        "name": "Epic Boon",
        "nameIt": "Aumento delle statistiche: Dono epico",
        "level": 19,
        "text": "You gain an Epic Boon feat or another {@5etools feat|feats.html of your choice for which you qualify. Boon of Truesight is recommended."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 20,
        "text": "You gain a feature from your Paladin Subclass."
      }
    ],
    "fluff": [
      "Paladins are united by their oaths to stand against the forces of annihilation and corruption. Whether sworn before a god's altar, in a sacred glade before nature spirits, or in a moment of desperation and grief with the dead as the only witnesses, a Paladin's oath is a powerful bond. It is a source of power that turns a devout warrior into a blessed champion.",
      "Paladins train to learn the skills of combat, mastering a variety of weapons and armor. Even so, their martial skills are secondary to the magical power they wield: power to heal the injured, smite their foes, and protect the helpless and those who fight at their side.",
      "Almost by definition, the life of a Paladin is an adventuring life, for every Paladin lives on the front lines of the cosmic struggle against annihilation. Fighters are rare enough among the ranks of a world's armies, but even fewer people can claim the calling of a Paladin. When they do receive the call, these blessed folk turn from their former occupations and take up arms and magic."
    ],
    "callout": {
      "title": "Il Giuramento Sacro",
      "text": "Quali principi guidano la tua lama? La difesa dei deboli e della giustizia, la gloria delle gesta titaniche, la salvaguardia della luce della natura o l'inesorabile castigo del male?"
    }
  },
  {
    "id": "ranger",
    "name": "Ranger",
    "originalName": "Ranger",
    "source": "PHB 2024",
    "quote": "Un cacciatore ed esploratore implacabile che difende i confini selvaggi tra civiltà e ignoto.",
    "hitDie": 10,
    "image": "https://5e.tools/img/classes/XPHB/Ranger.webp",
    "primaryAbility": [
      "Destrezza",
      "Saggezza"
    ],
    "proficiencies": [
      "Forza",
      "Destrezza"
    ],
    "skills": "Scegli 3 abilità a tua scelta",
    "weapons": "Armi semplici, Armi da guerra",
    "tools": "Nessuna",
    "armor": "Armatura leggera, Armatura media, Scudi",
    "startingEquipment": "Choose A or B: (A) Studded Leather Armor, Scimitar, Shortsword, Longbow, Arrows (20), Quiver, Druidic Focus (sprig of mistletoe), Explorer's Pack, and 7 GP; or (B) 150 GP",
    "multiclassing": "Per ottenere una nuova classe o lasciarla, i punteggi dei tuoi attributi primari (Destrezza, Saggezza) devono essere almeno pari a 13.",
    "tableLabels": [
      "Favored Enemy",
      "Prepared Spells",
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "tableLabelsIt": [
      "Nemico prescelto",
      "Incantesimi",
      "1°",
      "2°",
      "3°",
      "4°",
      "5°"
    ],
    "progression": [
      {
        "level": 1,
        "pb": "+2",
        "values": [
          "2",
          "2"
        ]
      },
      {
        "level": 2,
        "pb": "+2",
        "values": [
          "2",
          "3"
        ]
      },
      {
        "level": 3,
        "pb": "+2",
        "values": [
          "2",
          "4"
        ]
      },
      {
        "level": 4,
        "pb": "+2",
        "values": [
          "2",
          "5"
        ]
      },
      {
        "level": 5,
        "pb": "+3",
        "values": [
          "3",
          "6"
        ]
      },
      {
        "level": 6,
        "pb": "+3",
        "values": [
          "3",
          "6"
        ]
      },
      {
        "level": 7,
        "pb": "+3",
        "values": [
          "3",
          "7"
        ]
      },
      {
        "level": 8,
        "pb": "+3",
        "values": [
          "3",
          "7"
        ]
      },
      {
        "level": 9,
        "pb": "+4",
        "values": [
          "4",
          "9"
        ]
      },
      {
        "level": 10,
        "pb": "+4",
        "values": [
          "4",
          "9"
        ]
      },
      {
        "level": 11,
        "pb": "+4",
        "values": [
          "4",
          "10"
        ]
      },
      {
        "level": 12,
        "pb": "+4",
        "values": [
          "4",
          "10"
        ]
      },
      {
        "level": 13,
        "pb": "+5",
        "values": [
          "5",
          "11"
        ]
      },
      {
        "level": 14,
        "pb": "+5",
        "values": [
          "5",
          "11"
        ]
      },
      {
        "level": 15,
        "pb": "+5",
        "values": [
          "5",
          "12"
        ]
      },
      {
        "level": 16,
        "pb": "+5",
        "values": [
          "5",
          "12"
        ]
      },
      {
        "level": 17,
        "pb": "+6",
        "values": [
          "6",
          "14"
        ]
      },
      {
        "level": 18,
        "pb": "+6",
        "values": [
          "6",
          "14"
        ]
      },
      {
        "level": 19,
        "pb": "+6",
        "values": [
          "6",
          "15"
        ]
      },
      {
        "level": 20,
        "pb": "+6",
        "values": [
          "6",
          "15"
        ]
      }
    ],
    "subclasses": [
      {
        "id": "beast-master",
        "name": "Signore delle Bestie",
        "originalName": "Beast Master",
        "shortName": "Beast Master",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Beast Master",
            "nameIt": "Beast Master",
            "level": 3,
            "text": "Bond with a Primal Beast\n\nA Beast Master forms a mystical bond with a special animal, drawing on primal magic and a deep connection to the natural world.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Primal Companion|Ranger|XPHB|Beast Master|XPHB|3'}"
          },
          {
            "name": "Primal Companion",
            "nameIt": "Primal Companion",
            "level": 3,
            "text": "You magically summon a primal beast, which draws strength from your bond with nature. Choose its stat block: Beast of the Land, Beast of the Sea, or Beast of the Sky. You also determine the kind of animal it is, choosing a kind appropriate for the stat block. Whatever beast you choose, it bears primal markings indicating its supernatural origin.\n\nThe beast is Friendly to you and your allies and obeys your commands. It vanishes if you die.\n\n**The Beast in Combat**: In combat, the beast acts during your turn. It can move and use its Reaction on its own, but the only action it takes is the Dodge action unless you take a Bonus Action to command it to take an action in its stat block or some other action. You can also sacrifice one of your attacks when you take the Attack action to command the beast to take the Beast's Strike action. If you have the Incapacitated condition, the beast acts on its own and isn't limited to the Dodge action.\n\n**Restoring or Replacing the Beast**: If the beast has died within the last hour, you can take a Magic action to touch it and expend a spell slot. The beast returns to life after 1 minute with all its Hit Points restored.\n\nWhenever you finish a Long Rest, you can summon a different primal beast, which appears in an unoccupied space within 5 feet of you. You choose its stat block and appearance. If you already have a beast from this feature, the old one vanishes when the new one appears."
          },
          {
            "name": "Exceptional Training",
            "nameIt": "Exceptional Training",
            "level": 7,
            "text": "When you take a Bonus Action to command your Primal Companion beast to take an action, you can also command it to take the Dash, Disengage, Dodge, or Help action using its Bonus Action.\n\nIn addition, whenever it hits with an attack roll and deals damage, it can deal your choice of Force damage or its normal damage type."
          },
          {
            "name": "Bestial Fury",
            "nameIt": "Bestial Fury",
            "level": 11,
            "text": "When you command your Primal Companion beast to take the Beast's Strike action, the beast can use it twice.\n\nIn addition, the first time each turn it hits a creature under the effect of your Hunter's Mark spell, the beast deals extra Force damage equal to the bonus damage of that spell."
          },
          {
            "name": "Share Spells",
            "nameIt": "Share Spells",
            "level": 15,
            "text": "When you cast a spell targeting yourself, you can also affect your Primal Companion beast with the spell if the beast is within 30 feet of you."
          }
        ]
      },
      {
        "id": "fey-wanderer",
        "name": "Viandante Fatato",
        "originalName": "Fey Wanderer",
        "shortName": "Fey Wanderer",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Fey Wanderer",
            "nameIt": "Fey Wanderer",
            "level": 3,
            "text": "Wield Fey Mirth and Fury\n\nA fey mystique surrounds you, thanks to the boon of an archfey or a location in the Feywild that transformed you. However you gained fey magic, you are now a Fey Wanderer. Your joyful laughter brightens the hearts of the downtrodden, and your martial prowess strikes terror in your foes, for great is the mirth of the fey and dreadful is their fury.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Dreadful Strikes|Ranger|XPHB|Fey Wanderer|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Fey Wanderer Spells|Ranger|XPHB|Fey Wanderer|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Otherworldly Glamour|Ranger|XPHB|Fey Wanderer|XPHB|3'}"
          },
          {
            "name": "Dreadful Strikes",
            "nameIt": "Dreadful Strikes",
            "level": 3,
            "text": "You can augment your weapon strikes with mind-scarring magic drawn from the murky hollows of the Feywild. When you hit a creature with a weapon, you can deal an extra 1d4 Psychic damage to the target, which can take this extra damage only once per turn. The extra damage increases to 1d6 when you reach Ranger level 11."
          },
          {
            "name": "Fey Wanderer Spells",
            "nameIt": "Fey Wanderer Spells",
            "level": 3,
            "text": "When you reach a Ranger level specified in the Fey Wanderer Spells table, you thereafter always have the listed spells prepared.\n\nRanger Level | Spells\n--- | ---\n3 | Charm Person\n5 | Misty Step\n9 | Summon Fey\n13 | Dimension Door\n17 | Mislead\n\nYou also possess a fey blessing. Choose it from the Feywild Gifts table or determine it randomly.\n\n1d6 | Gift\n--- | ---\n1 | Illusory butterflies flutter around you while you take a Short Rest or Long Rest.\n2 | Flowers bloom from your hair each dawn.\n3 | You faintly smell of cinnamon, lavender, nutmeg, or another comforting herb or spice.\n4 | Your shadow dances while no one is looking directly at it.\n5 | Horns or antlers sprout from your head.\n6 | Your skin and hair change color each dawn."
          },
          {
            "name": "Otherworldly Glamour",
            "nameIt": "Otherworldly Glamour",
            "level": 3,
            "text": "Whenever you make a Charisma check, you gain a bonus to the check equal to your Wisdom modifier (minimum of +1).\n\nYou also gain proficiency in one of these skills of your choice: Deception, Performance, or Persuasion."
          },
          {
            "name": "Beguiling Twist",
            "nameIt": "Beguiling Twist",
            "level": 7,
            "text": "The magic of the Feywild guards your mind. You have Advantage on saving throws to avoid or end the Charmed or Frightened condition.\n\nIn addition, whenever you or a creature you can see within 120 feet of you succeeds on a saving throw to avoid or end the Charmed or Frightened condition, you can take a Reaction to force a different creature you can see within 120 feet of yourself to make a Wisdom save against your spell save DC. On a failed save, the target is Charmed or Frightened (your choice) for 1 minute. The target repeats the save at the end of each of its turns, ending the effect on itself on a success."
          },
          {
            "name": "Fey Reinforcements",
            "nameIt": "Fey Reinforcements",
            "level": 11,
            "text": "You can cast Summon Fey without a Material component. You can also cast it once without a spell slot, and you regain the ability to cast it in this way when you finish a Long Rest.\n\nWhenever you start casting the spell, you can modify it so that it doesn't require Concentration|XPHB. If you do so, the spell's duration becomes 1 minute for that casting."
          },
          {
            "name": "Misty Wanderer",
            "nameIt": "Misty Wanderer",
            "level": 15,
            "text": "You can cast Misty Step without expending a spell slot. You can do so a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.\n\nIn addition, whenever you cast Misty Step, you can bring along one willing creature you can see within 5 feet of yourself. That creature teleports to an unoccupied space of your choice within 5 feet of your destination space."
          }
        ]
      },
      {
        "id": "gloom-stalker",
        "name": "Cacciatore delle Tenebre",
        "originalName": "Gloom Stalker",
        "shortName": "Gloom Stalker",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Dread Ambusher",
            "nameIt": "Dread Ambusher",
            "level": 3,
            "text": "You have mastered the art of creating fearsome ambushes, granting you the following benefits.\n\n**Ambusher's Leap**: At the start of your first turn of each combat, your Speed increases by 10 feet until the end of that turn.\n\n**Dreadful Strike**: When you attack a creature and hit it with a weapon, you can deal an extra 2d6 Psychic damage. You can use this benefit only once per turn, you can use it a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.\n\n**Initiative Bonus**: When you roll Initiative, you can add your Wisdom modifier to the roll."
          },
          {
            "name": "Gloom Stalker",
            "nameIt": "Gloom Stalker",
            "level": 3,
            "text": "Draw on Shadow Magic to Fight Your Foes\n\nGloom Stalkers are at home in the darkest places, wielding magic drawn from the Shadowfell to combat enemies that lurk in darkness.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Dread Ambusher|Ranger|XPHB|Gloom Stalker|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Gloom Stalker Spells|Ranger|XPHB|Gloom Stalker|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Umbral Sight|Ranger|XPHB|Gloom Stalker|XPHB|3'}"
          },
          {
            "name": "Gloom Stalker Spells",
            "nameIt": "Gloom Stalker Spells",
            "level": 3,
            "text": "When you reach a Ranger level specified in the Gloom Stalker Spells table, you thereafter always have the listed spells prepared.\n\nRanger Level | Spells\n--- | ---\n3 | Disguise Self\n5 | Rope Trick\n9 | Fear\n13 | Greater Invisibility\n17 | Seeming"
          },
          {
            "name": "Umbral Sight",
            "nameIt": "Umbral Sight",
            "level": 3,
            "text": "You gain Darkvision with a range of 60 feet. If you already have Darkvision when you gain this feature, its range increases by 60 feet.\n\nYou are also adept at evading creatures that rely on Darkvision. While entirely in Darkness, you have the Invisible condition to any creature that relies on Darkvision to see you in that Darkness."
          },
          {
            "name": "Iron Mind",
            "nameIt": "Iron Mind",
            "level": 7,
            "text": "You have honed your ability to resist mind-altering powers. You gain proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence or Charisma saving throws (your choice)."
          },
          {
            "name": "Stalker's Flurry",
            "nameIt": "Stalker's Flurry",
            "level": 11,
            "text": "The Psychic damage of your Dreadful Strike becomes 2d8. In addition, when you use the Dreadful Strike effect of your Dread Ambusher feature, you can cause one of the following additional effects.\n\n**Sudden Strike**: You can make another attack with the same weapon against a different creature that is within 5 feet of the original target and that is within the weapon's range.\n\n**Mass Fear**: The target and each creature within 10 feet of it must make a Wisdom saving throw against your spell save DC. On a failed save, a creature has the Frightened condition until the start of your next turn."
          },
          {
            "name": "Shadowy Dodge",
            "nameIt": "Shadowy Dodge",
            "level": 15,
            "text": "When a creature makes an attack roll against you, you can take a Reaction to impose Disadvantage on that roll. Whether the attack hits or misses, you can then teleport up to 30 feet to an unoccupied space you can see."
          }
        ]
      },
      {
        "id": "hunter",
        "name": "Cacciatore",
        "originalName": "Hunter",
        "shortName": "Hunter",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Hunter",
            "nameIt": "Hunter",
            "level": 3,
            "text": "Protect Nature and People from Destruction\n\nYou stalk prey in the wilds and elsewhere, using your abilities as a Hunter to protect nature and people everywhere from forces that would destroy them.\n\n{'type': 'refSubclassFeature', 'subclassFeature': \"Hunter's Prey|Ranger|XPHB|Hunter|XPHB|3\"}\n\n{'type': 'refSubclassFeature', 'subclassFeature': \"Hunter's Lore|Ranger|XPHB|Hunter|XPHB|3\"}"
          },
          {
            "name": "Hunter's Lore",
            "nameIt": "Hunter's Lore",
            "level": 3,
            "text": "You can call on the forces of nature to reveal certain strengths and weaknesses of your prey. While a creature is marked by your Hunter's Mark, you know whether that creature has any Immunities, Resistances, or Vulnerabilities, and if the creature has any, you know what they are."
          },
          {
            "name": "Hunter's Prey",
            "nameIt": "Hunter's Prey",
            "level": 3,
            "text": "You gain one of the following feature options of your choice. Whenever you finish a Short Rest or Long Rest, you can replace the chosen option with the other one.\n\n**Colossus Slayer**: Your tenacity can wear down even the most resilient foes. When you hit a creature with a weapon, the weapon deals an extra 1d8 damage to the target if it's missing any of its Hit Points. You can deal this extra damage only once per turn.\n\n**Horde Breaker**: Once on each of your turns when you make an attack with a weapon, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target, that is within the weapon's range, and that you haven't attacked this turn."
          },
          {
            "name": "Defensive Tactics",
            "nameIt": "Defensive Tactics",
            "level": 7,
            "text": "You gain one of the following feature options of your choice. Whenever you finish a Short Rest or Long Rest, you can replace the chosen option with the other one.\n\n**Escape the Horde**: Opportunity Attack have Disadvantage against you.\n\n**Multiattack Defense**: When a creature hits you with an attack roll, that creature has Disadvantage on all other attack rolls against you this turn."
          },
          {
            "name": "Superior Hunter's Prey",
            "nameIt": "Superior Hunter's Prey",
            "level": 11,
            "text": "Once per turn when you deal damage to a creature marked by your Hunter's Mark, you can also deal that spell's extra damage to a different creature that you can see within 30 feet of the first creature."
          },
          {
            "name": "Superior Hunter's Defense",
            "nameIt": "Superior Hunter's Defense",
            "level": 15,
            "text": "When you take damage, you can take a Reaction to give yourself Resistance to that damage and any other damage of the same type until the end of the current turn."
          }
        ]
      }
    ],
    "features": [
      {
        "name": "Favored Enemy",
        "nameIt": "Favored Enemy",
        "level": 1,
        "text": "You always have the Hunter's Mark spell prepared. You can cast it twice without expending a spell slot, and you regain all expended uses of this ability when you finish a Long Rest.\n\nThe number of times you can cast the spell without a spell slot increases when you reach certain Ranger levels, as shown in the Favored Enemy column of the Ranger Features table."
      },
      {
        "name": "Spellcasting",
        "nameIt": "Incantesimi",
        "level": 1,
        "text": "You have learned to channel the magical essence of nature to cast spells. See chapter 7|XPHB|7 for the rules on spellcasting. The information below details how you use those rules with Ranger spells, which appear in the Ranger spell list later in the class's description.\n\n**Spell Slots**: The Ranger Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.\n\n**Prepared Spells of Level 1+**: You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 Ranger spells. Cure Wounds and Ensnaring Strike are recommended.\n\nThe number of spells on your list increases as you gain Ranger levels, as shown in the Prepared Spells column of the Ranger Features table. Whenever that number increases, choose additional Ranger spells until the number of spells on your list matches the number in the Ranger Features table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 5 Ranger, your list of prepared spells can include six Ranger spells of level 1 or 2 in any combination.\n\nIf another Ranger feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Ranger spells for you.\n\n**Changing Your Prepared Spells**: Whenever you finish a Long Rest, you can replace one spell on your list with another Ranger spell for which you have spell slots.\n\n**Spellcasting Ability**: Wisdom is your spellcasting ability for your Ranger spells.\n\n**Spellcasting Focus**: You can use a Druidic Focus as a Spellcasting Focus for your Ranger spells."
      },
      {
        "name": "Weapon Mastery",
        "nameIt": "Weapon Mastery",
        "level": 1,
        "text": "Your training with weapons allows you to use the weapon mastery properties of two kinds of weapons of your choice with which you have proficiency, such as Longbow and Shortsword.\n\nWhenever you finish a Long Rest, you can change the kinds of weapons you chose. For example, you could switch to using the weapon mastery properties of Scimitar and Longsword."
      },
      {
        "name": "Deft Explorer",
        "nameIt": "Deft Explorer",
        "level": 2,
        "text": "Thanks to your travels, you gain the following benefits.\n\n**Expertise**: Choose one of your skill proficiencies with which you lack Expertise. You gain Expertise in that skill.\n\n**Languages**: You know two languages of your choice from the language tables in chapter 2|XPHB|2|Choose Languages."
      },
      {
        "name": "Fighting Style",
        "nameIt": "Fighting Style",
        "level": 2,
        "text": "You gain a Fighting Style feat of your choice. Instead of choosing one of those feats, you can choose the option below.\n\n{'type': 'refFeat', 'feat': 'Druidic Warrior|XPHB'}"
      },
      {
        "name": "Ranger Subclass",
        "nameIt": "Ranger Subclass",
        "level": 3,
        "text": "You gain a Ranger subclass of your choice. A subclass is a specialization that grants you features at certain Ranger levels. For the rest of your career, you gain each of your subclass's features that are of your Ranger level or lower."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 4,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify. You gain this feature again at Ranger levels 8, 12, and 16."
      },
      {
        "name": "Extra Attack",
        "nameIt": "Attacco extra",
        "level": 5,
        "text": "You can attack twice instead of once whenever you take the Attack action on your turn."
      },
      {
        "name": "Roving",
        "nameIt": "Roving",
        "level": 6,
        "text": "Your Speed increases by 10 feet while you aren't wearing Heavy armor. You also have a Climb Speed and a Swim Speed equal to your Speed."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 7,
        "text": "You gain a feature from your Ranger Subclass."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 8,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Expertise",
        "nameIt": "Competenza",
        "level": 9,
        "text": "Choose two of your skill proficiencies with which you lack Expertise. You gain Expertise in those skills."
      },
      {
        "name": "Tireless",
        "nameIt": "Tireless",
        "level": 10,
        "text": "Primal forces now help fuel you on your journeys, granting you the following benefits.\n\n**Temporary Hit Points**: As a Magic action, you can give yourself a number of Temporary Hit Points equal to 1d8 plus your Wisdom modifier (minimum of 1). You can use this action a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.\n\n**Decrease Exhaustion**: Whenever you finish a Short Rest, your Exhaustion level, if any, decreases by 1."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 11,
        "text": "You gain a feature from your Ranger Subclass."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 12,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Relentless Hunter",
        "nameIt": "Relentless Hunter",
        "level": 13,
        "text": "Taking damage can't break your Concentration|XPHB on Hunter's Mark."
      },
      {
        "name": "Nature's Veil",
        "nameIt": "Nature's Veil",
        "level": 14,
        "text": "You invoke spirits of nature to magically hide yourself. As a Bonus Action, you can give yourself the Invisible condition until the end of your next turn.\n\nYou can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a Long Rest."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 15,
        "text": "You gain a feature from your Ranger Subclass."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 16,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Precise Hunter",
        "nameIt": "Precise Hunter",
        "level": 17,
        "text": "You have Advantage on attack rolls against the creature currently marked by your Hunter's Mark."
      },
      {
        "name": "Feral Senses",
        "nameIt": "Feral Senses",
        "level": 18,
        "text": "Your connection to the forces of nature grants you Blindsight with a range of 30 feet."
      },
      {
        "name": "Epic Boon",
        "nameIt": "Aumento delle statistiche: Dono epico",
        "level": 19,
        "text": "You gain an Epic Boon feat or another {@5etools feat|feats.html of your choice for which you qualify. Boon of Dimensional Travel is recommended."
      },
      {
        "name": "Foe Slayer",
        "nameIt": "Foe Slayer",
        "level": 20,
        "text": "The damage die of your Hunter's Mark is a d10 rather than a d6."
      }
    ],
    "fluff": [
      "Far from bustling cities, amid the trees of trackless forests and across wide plains, Rangers keep their unending watch in the wilderness. Rangers learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble.",
      "Thanks to their connection with nature, Rangers can also cast spells that harness primal powers of the wilderness. A Ranger's talents and magic are honed with deadly focus to protect the world from the ravages of monsters and tyrants."
    ],
    "callout": {
      "title": "L'esplorazione delle Terre Selvagge",
      "text": "Quali tracce segui ai confini della civiltà? Hai un compagno animale primordiale al tuo fianco, o preferisci muoverti invisibile nel fitto sottobosco?"
    }
  },
  {
    "id": "rogue",
    "name": "Ladro",
    "originalName": "Rogue",
    "source": "PHB 2024",
    "quote": "Uno specialista furtivo, scaltro e letale nel colpire i punti deboli e risolvere enigmi complessi.",
    "hitDie": 8,
    "image": "https://5e.tools/img/classes/XPHB/Rogue.webp",
    "primaryAbility": [
      "Destrezza"
    ],
    "proficiencies": [
      "Destrezza",
      "Intelligenza"
    ],
    "skills": "Scegli 4 abilità a tua scelta",
    "weapons": "Armi semplici, Martial weapons that have the Finesse or Light property",
    "tools": "Arnesi da scasso",
    "armor": "Armatura leggera",
    "startingEquipment": "Choose A or B: (A) Leather Armor, 2 Dagger, Shortsword, Shortbow, Arrows (20), Quiver, Thieves' Tools, Burglar's Pack, and 8 GP; or (B) 100 GP",
    "multiclassing": "Per ottenere una nuova classe o lasciarla, i punteggi dei tuoi attributi primari (Destrezza) devono essere almeno pari a 13.",
    "tableLabels": [
      "Sneak Attack"
    ],
    "tableLabelsIt": [
      "Attacco furtivo"
    ],
    "progression": [
      {
        "level": 1,
        "pb": "+2",
        "values": [
          "—"
        ]
      },
      {
        "level": 2,
        "pb": "+2",
        "values": [
          "—"
        ]
      },
      {
        "level": 3,
        "pb": "+2",
        "values": [
          "—"
        ]
      },
      {
        "level": 4,
        "pb": "+2",
        "values": [
          "—"
        ]
      },
      {
        "level": 5,
        "pb": "+3",
        "values": [
          "—"
        ]
      },
      {
        "level": 6,
        "pb": "+3",
        "values": [
          "—"
        ]
      },
      {
        "level": 7,
        "pb": "+3",
        "values": [
          "—"
        ]
      },
      {
        "level": 8,
        "pb": "+3",
        "values": [
          "—"
        ]
      },
      {
        "level": 9,
        "pb": "+4",
        "values": [
          "—"
        ]
      },
      {
        "level": 10,
        "pb": "+4",
        "values": [
          "—"
        ]
      },
      {
        "level": 11,
        "pb": "+4",
        "values": [
          "—"
        ]
      },
      {
        "level": 12,
        "pb": "+4",
        "values": [
          "—"
        ]
      },
      {
        "level": 13,
        "pb": "+5",
        "values": [
          "—"
        ]
      },
      {
        "level": 14,
        "pb": "+5",
        "values": [
          "—"
        ]
      },
      {
        "level": 15,
        "pb": "+5",
        "values": [
          "—"
        ]
      },
      {
        "level": 16,
        "pb": "+5",
        "values": [
          "—"
        ]
      },
      {
        "level": 17,
        "pb": "+6",
        "values": [
          "—"
        ]
      },
      {
        "level": 18,
        "pb": "+6",
        "values": [
          "—"
        ]
      },
      {
        "level": 19,
        "pb": "+6",
        "values": [
          "—"
        ]
      },
      {
        "level": 20,
        "pb": "+6",
        "values": [
          "—"
        ]
      }
    ],
    "subclasses": [
      {
        "id": "arcane-trickster",
        "name": "Mistificatore Arcano",
        "originalName": "Arcane Trickster",
        "shortName": "Arcane Trickster",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Arcane Trickster",
            "nameIt": "Arcane Trickster",
            "level": 3,
            "text": "Enhance Stealth with Arcane Spells\n\nSome Rogues enhance their fine-honed skills of stealth and agility with spells, learning magical tricks to aid them in their trade. Some Arcane Tricksters use their talents as pickpockets and burglars, while others are pranksters.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Spellcasting|Rogue|XPHB|Arcane Trickster|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Mage Hand Legerdemain|Rogue|XPHB|Arcane Trickster|XPHB|3'}"
          },
          {
            "name": "Mage Hand Legerdemain",
            "nameIt": "Mage Hand Legerdemain",
            "level": 3,
            "text": "When you cast Mage Hand, you can cast it as a Bonus Action, and you can make the spectral hand Invisible. You can control the hand as a Bonus Action, and through it, you can make Dexterity (Sleight of Hand) checks."
          },
          {
            "name": "Spellcasting",
            "nameIt": "Incantesimi",
            "level": 3,
            "text": "You have learned to cast spells. See chapter 7|XPHB|7 for the rules on spellcasting. The information below details how you use those rules as an Arcane Trickster.\n\n**Cantrips**: You know three cantrips: Mage Hand and two other cantrips of your choice from the Wizard spell list (see that class's section for its list). Mind Sliver and Minor Illusion are recommended.\n\nWhenever you gain a Rogue level, you can replace one of your cantrips, except Mage Hand, with another Wizard cantrip of your choice.\n\nWhen you reach Rogue level 10, you learn another Wizard cantrip of your choice.\n\n**Spell Slots**: The Arcane Trickster Spellcasting table shows how many spell slots you have to cast your level 1+ spells. You regain all expended spell slots when you finish a Long Rest.\n\n**Prepared Spells of 1st+ Level**: You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose three level 1 Wizard spells. Charm Person, Disguise Self, and Fog Cloud are recommended.\n\nThe number of spells on your list increases as you gain Rogue levels, as shown in the Prepared Spells column of the Arcane Trickster Spellcasting table. Whenever that number increases, choose additional Wizard spells until the number of spells on your list matches the number in the Arcane Trickster Spellcasting table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 7 Rogue, your list of prepared spells can include five Wizard spells of level 1 or 2 in any combination.\n\n**Changing Your Prepared Spells**: Whenever you gain a Rogue level, you can replace one spell on your list with another Wizard spell for which you have spell slots.\n\n**Spellcasting Ability**: Intelligence is your spellcasting ability for your Wizard spells.\n\n**Spellcasting Focus**: You can use an Arcane Focus as a Spellcasting Focus for your Wizard spells."
          },
          {
            "name": "Magical Ambush",
            "nameIt": "Magical Ambush",
            "level": 9,
            "text": "If you have the Invisible condition when you cast a spell on a creature, it has Disadvantage on any saving throw it makes against the spell on the same turn."
          },
          {
            "name": "Versatile Trickster",
            "nameIt": "Versatile Trickster",
            "level": 13,
            "text": "You gain the ability to distract targets with your Mage Hand. When you use the Trip option of your Cunning Strike on a creature, you can also use that option on another creature within 5 feet of the spectral hand."
          },
          {
            "name": "Spell Thief",
            "nameIt": "Spell Thief",
            "level": 17,
            "text": "You gain the ability to magically steal the knowledge of how to cast a spell from another spellcaster.\n\nImmediately after a creature casts a spell that targets you or includes you in its area of effect, you can take a Reaction to force the creature to make an Intelligence saving throw. The DC equals your spell save DC. On a failed save, you negate the spell's effect against you, and you steal the knowledge of the spell if it is at least level 1 and of a level you can cast (it doesn't need to be a Wizard spell). For the next 8 hours, you have the spell prepared. The creature can't cast it until the 8 hours have passed.\n\nOnce you steal a spell with this feature, you can't use this feature again until you finish a Long Rest."
          }
        ]
      },
      {
        "id": "assassin",
        "name": "Assassino",
        "originalName": "Assassin",
        "shortName": "Assassin",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Assassin",
            "nameIt": "Assassin",
            "level": 3,
            "text": "Practice the Grim Art of Death\n\nAn Assassin's training focuses on using stealth, poison, and disguise to eliminate foes with deadly efficiency. While some Rogues who follow this path are hired killers, spies, or bounty hunters, the capabilities of this subclass are equally useful for adventurers facing a variety of monstrous enemies.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Assassinate|Rogue|XPHB|Assassin|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': \"Assassin's Tools|Rogue|XPHB|Assassin|XPHB|3\"}"
          },
          {
            "name": "Assassin's Tools",
            "nameIt": "Assassin's Tools",
            "level": 3,
            "text": "You gain a Disguise Kit and a Poisoner's Kit, and you have proficiency with them."
          },
          {
            "name": "Assassinate",
            "nameIt": "Assassinate",
            "level": 3,
            "text": "You're adept at ambushing a target, granting you the following benefits.\n\n**Initiative**: You have Advantage on Initiative rolls.\n\n**Surprising Strikes**: During the first round of each combat, you have Advantage on attack rolls against any creature that hasn't taken a turn. If your Sneak Attack hits any target during that round, the target takes extra damage of the weapon's type equal to your Rogue level."
          },
          {
            "name": "Infiltration Expertise",
            "nameIt": "Infiltration Expertise",
            "level": 9,
            "text": "You are expert at the following techniques that aid your infiltrations.\n\n**Masterful Mimicry**: You can unerringly mimic another person's speech, handwriting, or both if you have spent at least 1 hour studying them.\n\n**Roving Aim**: Your Speed isn't reduced to 0 by using Steady Aim."
          },
          {
            "name": "Envenom Weapons",
            "nameIt": "Envenom Weapons",
            "level": 13,
            "text": "When you use the Poison option of your Cunning Strike, the target also takes 2d6 Poison damage whenever it fails the saving throw. This damage ignores Resistance to Poison damage."
          },
          {
            "name": "Death Strike",
            "nameIt": "Death Strike",
            "level": 17,
            "text": "When you hit with your Sneak Attack on the first round of a combat, the target must succeed on a Constitution saving throw (8 plus your Dexterity modifier and Proficiency), or the attack's damage is doubled against the target."
          }
        ]
      },
      {
        "id": "soulknife",
        "name": "Lama dell'Anima",
        "originalName": "Soulknife",
        "shortName": "Soulknife",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Soulknife",
            "nameIt": "Soulknife",
            "level": 3,
            "text": "Strike Foes with Psionic Blades\n\nA Soulknife strikes with the mind, cutting through barriers both physical and psychic. These Rogues discover psionic power within themselves and channel it to do their roguish work. As a Soulknife, your psionic abilities might have haunted you since childhood, revealing their full potential only as you experienced the stress of adventure. Or you might have sought out an order of psychic adepts and spent years learning how to manifest your power.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Psionic Power|Rogue|XPHB|Soulknife|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Psychic Blades|Rogue|XPHB|Soulknife|XPHB|3'}"
          },
          {
            "name": "Psionic Power",
            "nameIt": "Psionic Power",
            "level": 3,
            "text": "You harbor a wellspring of psionic energy within yourself. It is represented by your Psionic Energy Dice, which fuel certain powers you have from this subclass. The Soulknife Energy Dice table shows the number of these dice you have when you reach certain Rogue levels, and the table shows the die size.\n\nRogue Level | Die Size | Number\n--- | --- | ---\n3 | D6 | 4\n5 | D8 | 6\n9 | D8 | 8\n11 | D10 | 8\n13 | D10 | 10\n17 | D12 | 12\n\nAny features in this subclass that use a Psionic Energy Die use only the dice from this subclass. Some of your powers expend a Psionic Energy Die, as specified in a power's description, and you can't use a power if it requires you to use a die when your Psionic Energy Dice are all expended.\n\nYou regain one of your expended Psionic Energy Dice when you finish a Short Rest, and you regain all of them when you finish a Long Rest.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Psi-Bolstered Knack|Rogue|XPHB|Soulknife|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Psychic Whispers|Rogue|XPHB|Soulknife|XPHB|3'}\n\nThe first time you use this power after each Long Rest, you don't expend the Psionic Energy Die. All other times you use the power, you expend the die."
          },
          {
            "name": "Psychic Blades",
            "nameIt": "Psychic Blades",
            "level": 3,
            "text": "You can manifest shimmering blades of psychic energy. Whenever you take the Attack action or make an Opportunity Attack, you can manifest a Psychic Blade in your free hand and make the attack with that blade. The magic blade has the following traits:\n\n{'type': 'statblock', 'tag': 'item', 'name': 'Psychic Blade', 'source': 'XPHB'}\n\nThe blade vanishes immediately after it hits or misses its target, and it leaves no mark if it deals damage.\n\nAfter you attack with the blade on your turn, you can make a melee or ranged attack with a second psychic blade as a Bonus Action on the same turn if your other hand is free to create it. The damage die of this bonus attack is 1d4 instead of 1d6."
          },
          {
            "name": "Psi-Bolstered Knack",
            "nameIt": "Psi-Bolstered Knack",
            "level": 3,
            "text": "If you fail an ability check using a skill or tool with which you have proficiency, you can roll one Psionic Energy Die and add the number rolled to the check, potentially turning failure into success. The die is expended only if the roll then succeeds."
          },
          {
            "name": "Psychic Whispers",
            "nameIt": "Psychic Whispers",
            "level": 3,
            "text": "You can establish telepathic communication between yourself and others. As a Magic action, choose one or more creatures you can see, up to a number of creatures equal to your Proficiency, and then roll one Psionic Energy Die. For a number of hours equal to the number rolled, the chosen creatures can speak telepathically with you, and you can speak telepathically with them. To send or receive a message (no action required), you and the other creature must be within 1 mile of each other. A creature can end the telepathic connection at any time (no action required)."
          },
          {
            "name": "Homing Strikes",
            "nameIt": "Homing Strikes",
            "level": 9,
            "text": "If you make an attack roll with your Psychic Blade and miss the target, you can roll one Psionic Energy Die and add the number rolled to the attack roll. If this causes the attack to hit, the die is expended."
          },
          {
            "name": "Psychic Teleportation",
            "nameIt": "Psychic Teleportation",
            "level": 9,
            "text": "As a Bonus Action, you manifest a Psychic Blade, expend one Psionic Energy Die and roll it, and throw the blade at an unoccupied space you can see up to a number of feet away equal to 10 times the number rolled. You then teleport to that space, and the blade vanishes."
          },
          {
            "name": "Soul Blades",
            "nameIt": "Soul Blades",
            "level": 9,
            "text": "You can now use the following powers with your Psychic Blades.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Homing Strikes|Rogue|XPHB|Soulknife|XPHB|9'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Psychic Teleportation|Rogue|XPHB|Soulknife|XPHB|9'}"
          },
          {
            "name": "Psychic Veil",
            "nameIt": "Psychic Veil",
            "level": 13,
            "text": "You can weave a veil of psychic static to mask yourself. As a Magic action, you gain the Invisible condition for 1 hour or until you dismiss this effect (no action required). This invisibility ends early immediately after you deal damage to a creature or you force a creature to make a saving throw.\n\nOnce you use this feature, you can't do so again until you finish a Long Rest unless you expend a Psionic Energy Die (no action required) to restore your use of it."
          },
          {
            "name": "Rend Mind",
            "nameIt": "Rend Mind",
            "level": 17,
            "text": "You can sweep your Psychic Blades through a creature's mind. When you use your Psychic Blades to deal Sneak Attack damage to a creature, you can force that target to make a Wisdom saving throw (8 plus your Dexterity modifier and Proficiency). If the save fails, the target has the Stunned condition for 1 minute. The Stunned target repeats the save at the end of each of its turns, ending the effect on itself on a success.\n\nOnce you use this feature, you can't do so again until you finish a Long Rest unless you expend three Psionic Energy Dice (no action required) to restore your use of it."
          }
        ]
      },
      {
        "id": "thief",
        "name": "Ladro",
        "originalName": "Thief",
        "shortName": "Thief",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Fast Hands",
            "nameIt": "Fast Hands",
            "level": 3,
            "text": "As a Bonus Action, you can do one of the following.\n\n**Sleight of Hand**: Make a Dexterity (Sleight of Hand) check to pick a lock or disarm a trap with Thieves' Tools or to pick a pocket.\n\n**Use an Object**: Take the Utilize action, or take the Magic action to use a magic item that requires that action."
          },
          {
            "name": "Second-Story Work",
            "nameIt": "Second-Story Work",
            "level": 3,
            "text": "You've trained to get into especially hard-to-reach places, granting you these benefits.\n\n**Climber**: You gain a Climb Speed equal to your Speed.\n\n**Jumper**: You can determine your jump distance using your Dexterity rather than your Strength."
          },
          {
            "name": "Thief",
            "nameIt": "Thief",
            "level": 3,
            "text": "Hunt for Treasure as a Classic Adventurer\n\nA mix of burglar, treasure hunter, and explorer, you are the epitome of an adventurer. In addition to improving your agility and stealth, you gain abilities useful for delving into ruins and getting maximum benefit from the magic items you find there.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Fast Hands|Rogue|XPHB|Thief|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Second-Story Work|Rogue|XPHB|Thief|XPHB|3'}"
          },
          {
            "name": "Supreme Sneak",
            "nameIt": "Supreme Sneak",
            "level": 9,
            "text": "You gain the following Cunning Strike option.\n\n**Stealth Attack (Cost: 1d6)**: If you have the Hide action's Invisible condition, this attack doesn't end that condition on you if you end the turn behind Cover or Cover."
          },
          {
            "name": "Use Magic Device",
            "nameIt": "Use Magic Device",
            "level": 13,
            "text": "You've learned how to maximize use of magic items, granting you the following benefits.\n\n**Attunement**: You can attune to up to four magic items at once.\n\n**Charges**: Whenever you use a magic item property that expends charges, roll 1d6. On a roll of 6, you use the property without expending the charges.\n\n**Scrolls**: You can use any Spell Scroll, using Intelligence as your spellcasting ability for the spell. If the spell is a cantrip or a level 1 spell, you can cast it reliably. If the scroll contains a higher-level spell, you must first succeed on an Intelligence (Arcana) check (10 plus the spell's level). On a successful check, you cast the spell from the scroll. On a failed check, the scroll disintegrates."
          },
          {
            "name": "Thief's Reflexes",
            "nameIt": "Thief's Reflexes",
            "level": 17,
            "text": "You are adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal Initiative and your second turn at your Initiative minus 10."
          }
        ]
      }
    ],
    "features": [
      {
        "name": "Expertise",
        "nameIt": "Competenza",
        "level": 1,
        "text": "You gain Expertise in two of your skill proficiencies of your choice. Sleight of Hand and Stealth are recommended if you have proficiency in them.\n\nAt Rogue level 6, you gain Expertise in two more of your skill proficiencies of your choice."
      },
      {
        "name": "Sneak Attack",
        "nameIt": "Sneak Attack",
        "level": 1,
        "text": "You know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack roll if you have Advantage on the roll and the attack uses a Finesse or a Ranged weapon. The extra damage's type is the same as the weapon's type.\n\nYou don't need Advantage on the attack roll if at least one of your allies is within 5 feet of the target, the ally doesn't have the Incapacitated condition, and you don't have Disadvantage on the attack roll.\n\nThe extra damage increases as you gain Rogue levels, as shown in the Sneak Attack column of the Rogue Features table."
      },
      {
        "name": "Thieves' Cant",
        "nameIt": "Thieves' Cant",
        "level": 1,
        "text": "You picked up various languages in the communities where you plied your roguish talents. You know Thieves' Cant and one other language of your choice, which you choose from the language tables in chapter 2|XPHB|2|Choose Languages."
      },
      {
        "name": "Weapon Mastery",
        "nameIt": "Weapon Mastery",
        "level": 1,
        "text": "Your training with weapons allows you to use the weapon mastery properties of two kinds of weapons of your choice with which you have proficiency, such as Dagger and Shortbow.\n\nWhenever you finish a Long Rest, you can change the kinds of weapons you chose. For example, you could switch to using the weapon mastery properties of Scimitar and Shortsword."
      },
      {
        "name": "Cunning Action",
        "nameIt": "Cunning Action",
        "level": 2,
        "text": "Your quick thinking and agility allow you to move and act quickly. On your turn, you can take one of the following actions as a Bonus Action: Dash, Disengage, or Hide."
      },
      {
        "name": "Rogue Subclass",
        "nameIt": "Rogue Subclass",
        "level": 3,
        "text": "You gain a Rogue subclass of your choice. A subclass is a specialization that grants you features at certain Rogue levels. For the rest of your career, you gain each of your subclass's features that are of your Rogue level or lower."
      },
      {
        "name": "Steady Aim",
        "nameIt": "Steady Aim",
        "level": 3,
        "text": "As a Bonus Action, you give yourself Advantage on your next attack roll on the current turn. You can use this feature only if you haven't moved during this turn, and after you use it, your Speed is 0 until the end of the current turn."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 4,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify. You gain this feature again at Rogue levels 8, 10, 12, and 16."
      },
      {
        "name": "Cunning Strike",
        "nameIt": "Cunning Strike",
        "level": 5,
        "text": "You've developed cunning ways to use your Sneak Attack. When you deal Sneak Attack damage, you can add one of the following Cunning Strike effects. Each effect has a die cost, which is the number of Sneak Attack damage dice you must forgo to add the effect. You remove the die before rolling, and the effect occurs immediately after the attack's damage is dealt. For example, if you add the Poison effect, remove 1d6 from the Sneak Attack's damage before rolling.\n\nIf a Cunning Strike effect requires a saving throw, the DC equals 8 plus your Dexterity modifier and Proficiency.\n\n{'type': 'refClassFeature', 'classFeature': 'Poison (Cost: 1d6)|Rogue|XPHB|5|XPHB'}\n\n{'type': 'refClassFeature', 'classFeature': 'Trip (Cost: 1d6)|Rogue|XPHB|5|XPHB'}\n\n{'type': 'refClassFeature', 'classFeature': 'Withdraw (Cost: 1d6)|Rogue|XPHB|5|XPHB'}"
      },
      {
        "name": "Poison (Cost: 1d6)",
        "nameIt": "Poison (Cost: 1d6)",
        "level": 5,
        "text": "You add a toxin to your strike, forcing the target to make a Constitution saving throw. On a failed save, the target has the Poisoned condition for 1 minute. At the end of each of its turns, the Poisoned target repeats the save, ending the effect on itself on a success.\n\nTo use this effect, you must have a Poisoner's Kit on your person."
      },
      {
        "name": "Trip (Cost: 1d6)",
        "nameIt": "Trip (Cost: 1d6)",
        "level": 5,
        "text": "If the target is Large or smaller, it must succeed on a Dexterity saving throw or have the Prone condition."
      },
      {
        "name": "Uncanny Dodge",
        "nameIt": "Uncanny Dodge",
        "level": 5,
        "text": "When an attacker that you can see hits you with an attack roll, you can take a Reaction to halve the attack's damage against you (round down)."
      },
      {
        "name": "Withdraw (Cost: 1d6)",
        "nameIt": "Withdraw (Cost: 1d6)",
        "level": 5,
        "text": "Immediately after the attack, you move up to half your Speed without provoking Opportunity Attack."
      },
      {
        "name": "Expertise",
        "nameIt": "Competenza",
        "level": 6,
        "text": "You gain Expertise in two of your Skill Proficiencies of your choice."
      },
      {
        "name": "Evasion",
        "nameIt": "Evasion",
        "level": 7,
        "text": "You can nimbly dodge out of the way of certain dangers. When you're subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw and only half damage if you fail. You can't use this feature if you have the Incapacitated condition."
      },
      {
        "name": "Reliable Talent",
        "nameIt": "Reliable Talent",
        "level": 7,
        "text": "Whenever you make an ability check that uses one of your skill or tool proficiencies, you can treat a d20 roll of 9 or lower as a 10."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 8,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 9,
        "text": "You gain a feature from your Rogue Subclass."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 10,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Improved Cunning Strike",
        "nameIt": "Improved Cunning Strike",
        "level": 11,
        "text": "You can use up to two Cunning Strike effects when you deal Sneak Attack damage, paying the die cost for each effect."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 12,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 13,
        "text": "You gain a feature from your Rogue Subclass."
      },
      {
        "name": "Daze (Cost: 2d6)",
        "nameIt": "Daze (Cost: 2d6)",
        "level": 14,
        "text": "The target must succeed on a Constitution saving throw, or on its next turn, it can do only one of the following: move or take an action or a Bonus Action."
      },
      {
        "name": "Devious Strikes",
        "nameIt": "Devious Strikes",
        "level": 14,
        "text": "You've practiced new ways to use your Sneak Attack deviously. The following effects are now among your Cunning Strike options.\n\n{'type': 'refClassFeature', 'classFeature': 'Daze (Cost: 2d6)|Rogue|XPHB|14|XPHB'}\n\n{'type': 'refClassFeature', 'classFeature': 'Knock Out (Cost: 6d6)|Rogue|XPHB|14|XPHB'}\n\n{'type': 'refClassFeature', 'classFeature': 'Obscure (Cost: 3d6)|Rogue|XPHB|14|XPHB'}"
      },
      {
        "name": "Knock Out (Cost: 6d6)",
        "nameIt": "Knock Out (Cost: 6d6)",
        "level": 14,
        "text": "The target must succeed on a Constitution saving throw, or it has the Unconscious condition for 1 minute or until it takes any damage. The Unconscious target repeats the save at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "name": "Obscure (Cost: 3d6)",
        "nameIt": "Obscure (Cost: 3d6)",
        "level": 14,
        "text": "The target must succeed on a Dexterity saving throw, or it has the Blinded condition until the end of its next turn."
      },
      {
        "name": "Slippery Mind",
        "nameIt": "Slippery Mind",
        "level": 15,
        "text": "Your cunning mind is exceptionally difficult to control. You gain proficiency in Wisdom and Charisma saving throws."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 16,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 17,
        "text": "You gain a feature from your Rogue Subclass."
      },
      {
        "name": "Elusive",
        "nameIt": "Elusive",
        "level": 18,
        "text": "You're so evasive that attackers rarely gain the upper hand against you. No attack roll can have Advantage against you unless you have the Incapacitated condition."
      },
      {
        "name": "Epic Boon",
        "nameIt": "Aumento delle statistiche: Dono epico",
        "level": 19,
        "text": "You gain an Epic Boon feat or another {@5etools feat|feats.html of your choice for which you qualify. Boon of the Night Spirit is recommended."
      },
      {
        "name": "Stroke of Luck",
        "nameIt": "Stroke of Luck",
        "level": 20,
        "text": "You have a marvelous knack for succeeding when you need to. If you fail a D20 Test, you can turn the roll into a 20.\n\nOnce you use this feature, you can't use it again until you finish a Short Rest or Long Rest."
      }
    ],
    "fluff": [
      "Rogues rely on cunning, stealth, and their foes' vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem. A few even learn magical tricks to supplement their other abilities. Many Rogues focus on stealth and deception, while others refine skills that help them in a dungeon environment, such as climbing, finding and disarming traps, and opening locks.",
      "In combat, Rogues prioritize subtle strikes over brute strength. They would rather make one precise strike than wear an opponent down with a barrage of blows.",
      "Some Rogues began their careers as criminals, while others used their cunning to fight crime. Whatever a Rogue's relation to the law, no common criminal or officer of the law can match the subtle brilliance of the greatest Rogues."
    ],
    "callout": {
      "title": "L'arte della Furtività e dell'Infiltrazione",
      "text": "Qual è il tuo marchio di fabbrica? Il colpo rapido da dietro gli angoli, l'inganno verbale tra i nobili o la capacità di scassinare ogni serratura magica?"
    }
  },
  {
    "id": "sorcerer",
    "name": "Stregone",
    "originalName": "Sorcerer",
    "source": "PHB 2024",
    "quote": "Un incantatore il cui sangue pulsa di potere magico innato pronto a esplodere a comando.",
    "hitDie": 6,
    "image": "https://5e.tools/img/classes/XPHB/Sorcerer.webp",
    "primaryAbility": [
      "Carisma"
    ],
    "proficiencies": [
      "Costituzione",
      "Carisma"
    ],
    "skills": "Scegli 2 abilità a tua scelta",
    "weapons": "Armi semplici",
    "tools": "Nessuna",
    "armor": "Nessuna",
    "startingEquipment": "Choose A or B: (A) Spear, 2 Dagger, Arcane Focus (crystal), Dungeoneer's Pack, and 28 GP; or (B) 50 GP",
    "multiclassing": "Per ottenere una nuova classe o lasciarla, i punteggi dei tuoi attributi primari (Carisma) devono essere almeno pari a 13.",
    "tableLabels": [
      "Sorcery Points",
      "Cantrips",
      "Prepared Spells",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    "tableLabelsIt": [
      "Punti stregoneria",
      "Trucchi",
      "Incantesimi",
      "1°",
      "2°",
      "3°",
      "4°",
      "5°",
      "6°",
      "7°",
      "8°",
      "9°"
    ],
    "progression": [
      {
        "level": 1,
        "pb": "+2",
        "values": [
          "0",
          "4",
          "2"
        ]
      },
      {
        "level": 2,
        "pb": "+2",
        "values": [
          "2",
          "4",
          "4"
        ]
      },
      {
        "level": 3,
        "pb": "+2",
        "values": [
          "3",
          "4",
          "6"
        ]
      },
      {
        "level": 4,
        "pb": "+2",
        "values": [
          "4",
          "5",
          "7"
        ]
      },
      {
        "level": 5,
        "pb": "+3",
        "values": [
          "5",
          "5",
          "9"
        ]
      },
      {
        "level": 6,
        "pb": "+3",
        "values": [
          "6",
          "5",
          "10"
        ]
      },
      {
        "level": 7,
        "pb": "+3",
        "values": [
          "7",
          "5",
          "11"
        ]
      },
      {
        "level": 8,
        "pb": "+3",
        "values": [
          "8",
          "5",
          "12"
        ]
      },
      {
        "level": 9,
        "pb": "+4",
        "values": [
          "9",
          "5",
          "14"
        ]
      },
      {
        "level": 10,
        "pb": "+4",
        "values": [
          "10",
          "6",
          "15"
        ]
      },
      {
        "level": 11,
        "pb": "+4",
        "values": [
          "11",
          "6",
          "16"
        ]
      },
      {
        "level": 12,
        "pb": "+4",
        "values": [
          "12",
          "6",
          "16"
        ]
      },
      {
        "level": 13,
        "pb": "+5",
        "values": [
          "13",
          "6",
          "17"
        ]
      },
      {
        "level": 14,
        "pb": "+5",
        "values": [
          "14",
          "6",
          "17"
        ]
      },
      {
        "level": 15,
        "pb": "+5",
        "values": [
          "15",
          "6",
          "18"
        ]
      },
      {
        "level": 16,
        "pb": "+5",
        "values": [
          "16",
          "6",
          "18"
        ]
      },
      {
        "level": 17,
        "pb": "+6",
        "values": [
          "17",
          "6",
          "19"
        ]
      },
      {
        "level": 18,
        "pb": "+6",
        "values": [
          "18",
          "6",
          "20"
        ]
      },
      {
        "level": 19,
        "pb": "+6",
        "values": [
          "19",
          "6",
          "21"
        ]
      },
      {
        "level": 20,
        "pb": "+6",
        "values": [
          "20",
          "6",
          "22"
        ]
      }
    ],
    "subclasses": [
      {
        "id": "aberrant",
        "name": "Stregoneria Aberrante",
        "originalName": "Aberrant Sorcery",
        "shortName": "Aberrant",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Aberrant Sorcery",
            "nameIt": "Aberrant Sorcery",
            "level": 3,
            "text": "Wield Unnatural Psionic Power\n\nAn alien influence has wrapped its tendrils around your mind, giving you psionic power. You can now touch other minds with that power and alter the world around you. Will this power shine from you as a hopeful beacon to others? Or will you be a terror to those who feel the stab of your mind?\n\nPerhaps a psychic wind from the Astral Plane carried psionic energy to you, or you were exposed to the Far Realm's warping influence. Alternatively, you were implanted with a mind flayer tadpole, but your transformation into a mind flayer never occurred; now the tadpole's psionic power is yours. However you acquired this power, your mind is aflame with it.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Psionic Spells|Sorcerer|XPHB|Aberrant|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Telepathic Speech|Sorcerer|XPHB|Aberrant|XPHB|3'}"
          },
          {
            "name": "Psionic Spells",
            "nameIt": "Psionic Spells",
            "level": 3,
            "text": "When you reach a Sorcerer level specified in the Psionic Spells table, you thereafter always have the listed spells prepared.\n\nSorcerer Level | Spells\n--- | ---\n3 | Arms of Hadar, Calm Emotions, Detect Thoughts, Dissonant Whispers, Mind Sliver\n5 | Hunger of Hadar, Sending\n7 | Evard's Black Tentacles, Summon Aberration\n9 | Rary's Telepathic Bond, Telekinesis"
          },
          {
            "name": "Telepathic Speech",
            "nameIt": "Telepathic Speech",
            "level": 3,
            "text": "You can form a telepathic connection between your mind and the mind of another. As a Bonus Action, choose one creature you can see within 30 feet of yourself. You and the chosen creature can communicate telepathically with each other while the two of you are within a number of miles of each other equal to your Charisma modifier (minimum of 1 mile). To understand each other, you each must mentally use a language the other knows.\n\nThe telepathic connection lasts for a number of minutes equal to your Sorcerer level. It ends early if you use this ability to form a connection with a different creature."
          },
          {
            "name": "Psionic Sorcery",
            "nameIt": "Psionic Sorcery",
            "level": 6,
            "text": "When you cast any level 1+ spell from your Psionic Spells feature, you can cast it by expending a spell slot as normal or by spending a number of Sorcery Points equal to the spell's level. If you cast the spell using Sorcery Points, it requires no Verbal or Somatic components, and it requires no Material components unless they are consumed by the spell or have a cost specified in it."
          },
          {
            "name": "Psychic Defenses",
            "nameIt": "Psychic Defenses",
            "level": 6,
            "text": "You have Resistance to Psychic damage, and you have Advantage on saving throws to avoid or end the Charmed or Frightened condition."
          },
          {
            "name": "Revelation in Flesh",
            "nameIt": "Revelation in Flesh",
            "level": 14,
            "text": "You can unleash the aberrant truth hidden within yourself. As a Bonus Action, you can spend 1 Sorcery Point or more to magically alter your body for 10 minutes. For each Sorcery Point you spend, you gain one of the following benefits of your choice, the effects of which last until the alteration ends.\n\n**Aquatic Adaptation**: You gain a Swim Speed equal to twice your Speed, and you can breathe underwater. Gills grow from your neck or flare behind your ears, and your fingers become webbed or you grow wriggling cilia.\n\n**Glistening Flight**: You gain a Fly Speed equal to your Speed, and you can hover. As you fly, your skin glistens with mucus or otherworldly light.\n\n**See the Invisible**: You can see any Invisible creature within 60 feet of yourself that isn't behind Cover. Your eyes also turn black or become writhing sensory tendrils.\n\n**Wormlike Movement**: Your body, along with any equipment you are wearing or carrying, becomes slimy and pliable. You can move through any space as narrow as 1 inch, and you can spend 5 feet of movement to escape from nonmagical restraints or the Grappled condition."
          },
          {
            "name": "Warping Implosion",
            "nameIt": "Warping Implosion",
            "level": 18,
            "text": "You can unleash a space-warping anomaly. As a Magic action, you teleport to an unoccupied space you can see within 120 feet of yourself. Immediately after you disappear, each creature within 30 feet of the space you left must make a Strength saving throw against your spell save DC. On a failed save, a creature takes 3d10 Force damage and is pulled straight toward the space you left, ending in an unoccupied space as close to your former space as possible. On a successful save, the creature takes half as much damage only.\n\nOnce you use this feature, you can't do so again until you finish a Long Rest unless you spend 5 Sorcery Points (no action required) to restore your use of it."
          }
        ]
      },
      {
        "id": "clockwork",
        "name": "Stregoneria Meccanica",
        "originalName": "Clockwork Sorcery",
        "shortName": "Clockwork",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Clockwork Sorcery",
            "nameIt": "Clockwork Sorcery",
            "level": 3,
            "text": "Channel Cosmic Forces of Order\n\nThe cosmic force of order has suffused you with magic. That power arises from Mechanus or a realm like it—a plane of existence shaped entirely by clockwork efficiency. You or someone from your lineage might have become entangled in the machinations of modrons, the orderly beings who inhabit Mechanus. Perhaps your ancestor even took part in the Great Modron March. Whatever its origin within you, the power of order can seem strange to others, but for you, it's part of a vast and glorious system.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Clockwork Spells|Sorcerer|XPHB|Clockwork|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Restore Balance|Sorcerer|XPHB|Clockwork|XPHB|3'}"
          },
          {
            "name": "Clockwork Spells",
            "nameIt": "Clockwork Spells",
            "level": 3,
            "text": "When you reach a Sorcerer level specified in the Clockwork Spells table, you thereafter always have the listed spells prepared.\n\nSorcerer Level | Spells\n--- | ---\n3 | Aid, Alarm, Lesser Restoration, Protection from Evil and Good\n5 | Dispel Magic, Protection From Energy\n7 | Freedom of Movement, Summon Construct\n9 | Greater Restoration, Wall of Force\n\nIn addition, consult the Manifestations of Order table and choose or randomly determine a way your connection to order manifests while you are casting any of your Sorcerer spells.\n\n1d6 | Manifestation\n--- | ---\n1 | Spectral cogwheels hover behind you.\n2 | The hands of a clock spin in your eyes.\n3 | Your skin glows with a brassy sheen.\n4 | Floating equations and geometric objects overlay your body.\n5 | Your Spellcasting Focus temporarily takes the form of a Tiny clockwork mechanism.\n6 | The ticking of gears or ringing of a clock can be heard by you and those affected by your magic."
          },
          {
            "name": "Restore Balance",
            "nameIt": "Restore Balance",
            "level": 3,
            "text": "Your connection to the plane of absolute order allows you to equalize chaotic moments. When a creature you can see within 60 feet of yourself is about to roll a d20 with Advantage or Disadvantage, you can take a Reaction to prevent the roll from being affected by Advantage and Disadvantage.\n\nYou can use this feature a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a Long Rest."
          },
          {
            "name": "Bastion of Law",
            "nameIt": "Bastion of Law",
            "level": 6,
            "text": "You can tap into the grand equation of existence to imbue a creature with a shimmering shield of order. As a Magic action, you can expend 1 to 5 Sorcery Points to create a magical ward around yourself or another creature you can see within 30 feet of yourself. The ward is represented by a number of d8s equal to the number of Sorcery Points spent to create it. When the warded creature takes damage, it can expend a number of those dice, roll them, and reduce the damage taken by the total rolled on those dice.\n\nThe ward lasts until you finish a Long Rest or until you use this feature again."
          },
          {
            "name": "Trance of Order",
            "nameIt": "Trance of Order",
            "level": 14,
            "text": "You gain the ability to align your consciousness with the endless calculations of Mechanus. As a Bonus Action, you can enter this state for 1 minute. For the duration, attack rolls against you can't benefit from Advantage, and whenever you make a D20 Test, you can treat a roll of 9 or lower on the d20 as a 10.\n\nOnce you use this feature, you can't use it again until you finish a Long Rest unless you spend 5 Sorcery Points (no action required) to restore your use of it."
          },
          {
            "name": "Clockwork Cavalcade",
            "nameIt": "Clockwork Cavalcade",
            "level": 18,
            "text": "You momentarily summon spirits of order to expunge disorder around you. As a Magic action, you summon the spirits in a 30-foot Cube [Area of Effect] originating from you. The spirits look like modrons or other Constructs of your choice. The spirits are intangible and invulnerable, and they create the effects below within the Cube [Area of Effect] before vanishing. Once you use this action, you can't use it again until you finish a Long Rest unless you spend 7 Sorcery Points (no action required) to restore your use of it.\n\n**Heal**: The spirits restore up to 100 Hit Points, divided as you choose among any number of creatures of your choice in the Cube [Area of Effect].\n\n**Repair**: Any damaged objects entirely in the Cube [Area of Effect] are repaired instantly.\n\n**Dispel**: Every spell of level 6 and lower ends on creatures and objects of your choice in the Cube [Area of Effect]."
          }
        ]
      },
      {
        "id": "draconic",
        "name": "Stregoneria Draconica",
        "originalName": "Draconic Sorcery",
        "shortName": "Draconic",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Draconic Sorcery",
            "nameIt": "Draconic Sorcery",
            "level": 3,
            "text": "Breathe the Magic of Dragons\n\nYour innate magic comes from the gift of a dragon. Perhaps an ancient dragon facing death bequeathed some of its magical power to you or your ancestor. You might have absorbed magic from a site infused with dragons' power. Or perhaps you handled a treasure taken from a dragon's hoard that was steeped in draconic power. Or you might have a dragon for an ancestor.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Draconic Resilience|Sorcerer|XPHB|Draconic|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Draconic Spells|Sorcerer|XPHB|Draconic|XPHB|3'}"
          },
          {
            "name": "Draconic Spells",
            "nameIt": "Draconic Spells",
            "level": 3,
            "text": "When you reach a Sorcerer level specified in the Draconic Spells table, you thereafter always have the listed spells prepared.\n\nSorcerer Level | Spells\n--- | ---\n3 | Alter Self, Chromatic Orb, Command, Dragon's Breath\n5 | Fear, Fly\n7 | Arcane Eye, Charm Monster\n9 | Legend Lore, Summon Dragon"
          },
          {
            "name": "Draconic Resilience",
            "nameIt": "Draconic Resilience",
            "level": 3,
            "text": "The magic in your body manifests physical traits of your draconic gift. Your Hit Points maximum increases by 3, and it increases by 1 whenever you gain another Sorcerer level.\n\nParts of you are also covered by dragon-like scales. While you aren't wearing armor, your base Armor Class equals 10 plus your Dexterity and Charisma modifiers."
          },
          {
            "name": "Elemental Affinity",
            "nameIt": "Elemental Affinity",
            "level": 6,
            "text": "Your draconic magic has an affinity with a damage type associated with dragons. Choose one of those types: Acid, Cold, Fire, Lightning, or Poison.\n\nYou have Resistance to that damage type, and when you cast a spell that deals damage of that type, you can add your Charisma modifier to one damage roll of that spell."
          },
          {
            "name": "Dragon Wings",
            "nameIt": "Dragon Wings",
            "level": 14,
            "text": "As a Bonus Action, you can cause draconic wings to appear on your back. The wings last for 1 hour or until you dismiss them (no action required). For the duration, you have a Fly Speed of 60 feet.\n\nOnce you use this feature, you can't use it again until you finish a Long Rest unless you spend 3 Sorcery Points (no action required) to restore your use of it."
          },
          {
            "name": "Dragon Companion",
            "nameIt": "Dragon Companion",
            "level": 18,
            "text": "You can cast Summon Dragon without a Material component. You can also cast it once without a spell slot, and you regain the ability to cast it in this way when you finish a Long Rest.\n\nWhenever you start casting the spell, you can modify it so that it doesn't require Concentration|XPHB. If you do so, the spell's duration becomes 1 minute for that casting."
          }
        ]
      },
      {
        "id": "wild-magic",
        "name": "Stregoneria della Magia Selvaggia",
        "originalName": "Wild Magic Sorcery",
        "shortName": "Wild Magic",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Wild Magic Sorcery",
            "nameIt": "Wild Magic Sorcery",
            "level": 3,
            "text": "Unleash Chaotic Magic\n\nYour innate magic stems from the forces of chaos that underlie the order of creation. You or an ancestor might have endured exposure to raw magic, perhaps through a planar portal leading to Limbo or the Elemental Planes. Perhaps you were blessed by a fey being or marked by a demon. Or your magic could be a fluke with no apparent cause. Whatever its source, this magic churns within you, waiting for any outlet.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Wild Magic Surge|Sorcerer|XPHB|Wild Magic|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Tides of Chaos|Sorcerer|XPHB|Wild Magic|XPHB|3'}"
          },
          {
            "name": "Tides of Chaos",
            "nameIt": "Tides of Chaos",
            "level": 3,
            "text": "You can manipulate chaos itself to give yourself Advantage on one D20 Test before you roll the d20. Once you do so, you must cast a Sorcerer spell with a spell slot or finish a Long Rest before you can use this feature again.\n\nIf you do cast a Sorcerer spell with a spell slot before you finish a Long Rest, you automatically roll on the Wild Magic Surge table."
          },
          {
            "name": "Wild Magic Surge",
            "nameIt": "Wild Magic Surge",
            "level": 3,
            "text": "Your spellcasting can unleash surges of untamed magic. Once per turn, you can roll 1d20 immediately after you cast a Sorcerer spell with a spell slot. If you roll a 20, roll on the Wild Magic Surge table to create a magical effect.\n\nIf the magical effect is a spell, it is too wild to be affected by your Metamagic.\n\n1d100 | Effect\n--- | ---\n01–04 | Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls.\n05–08 | A creature that is Friendly toward you appears in a random unoccupied space within 60 feet of you. The creature is under the DM's control and disappears 1 minute later. Roll 1d4 to determine the creature: on a 1, a Modron Duodrone appears; on a 2, a Flumph appears; on a 3, a Modron Monodrone appears; on a 4, a Unicorn appears. See the Monster Manual for the creature's stat block.\n09–12 | For the next minute, you regain 5 Hit Points at the start of each of your turns.\n13–16 | Creatures have Disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw.\n17–20 | You are subjected to an effect that lasts for 1 minute unless its description says otherwise. Roll 1d8 to determine the effect: on a 1, you're surrounded by faint, ethereal music only you and creatures within 5 feet of you can hear; on a 2, your size increases by one size category; on a 3, you grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode from your face and vanish; on a 4, you must shout when you speak; on a 5, illusory butterflies flutter in the air within 10 feet of you; on a 6, an eye appears on your forehead, granting you Advantage on Wisdom (Perception) checks; on a 7, pink bubbles float out of your mouth whenever you speak; on an 8, your skin turns a vibrant shade of blue for 24 hours or until the effect is ended by a Remove Curse spell.\n21–24 | For the next minute, all your spells with a casting time of an action have a casting time of a Bonus Action.\n25–28 | You are transported to the Astral Plane until the end of your next turn. You then return to the space you previously occupied or the nearest unoccupied space if that space is occupied.\n29–32 | The next time you cast a spell that deals damage within the next minute, don't roll the spell's damage dice for the damage. Instead use the highest number possible for each damage die.\n33–36 | You have Resistance to all damage for the next minute.\n37–40 | You turn into a potted plant until the start of your next turn. While you're a plant, you have the Incapacitated condition and have Vulnerability to all damage. If you drop to 0 Hit Points, your pot breaks, and your form reverts.\n41–44 | For the next minute, you can teleport up to 20 feet as a Bonus Action on each of your turns.\n45–48 | You and up to three creatures you choose within 30 feet of you have the Invisible condition for 1 minute. This invisibility ends on a creature immediately after it makes an attack roll, deals damage, or casts a spell.\n49–52 | A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to Magic Missile.\n53–56 | You can take one extra action on this turn.\n57–60 | You cast a random spell. If the spell normally requires Concentration|XPHB, it doesn't require Concentration|XPHB in this case; the spell lasts for its full duration. Roll 1d10 to determine the spell: on a 1, Confusion; on a 2, Fireball; on a 3, Fog Cloud; on a 4, Fly (cast on a random creature within 60 feet of you), on a 5, Grease; on a 6, Levitate (cast on yourself); on a 7, Magic Missile (cast as a level 5 spell); on an 8, Mirror Image; on a 9, Polymorph (cast on yourself), and if you fail the saving throw, you turn into a Goat (see appendix B); on a 10, See Invisibility.\n61–64 | For the next minute, any flammable, nonmagical object you touch that isn't being worn or carried by another creature bursts into flame, takes 1d4 Fire damage, and is burning.\n65–68 | If you die within the next hour, you immediately revive as if by the Reincarnate spell.\n69–72 | You have the Frightened condition until the end of your next turn. The DM determines the source of your fear.\n73–76 | You teleport up to 60 feet to an unoccupied space you can see.\n77–80 | A random creature within 60 feet of you has the Poisoned condition for 1d4 hours.\n81–84 | You radiate Bright Light in a 30-foot radius for the next minute. Any creature that ends its turn within 5 feet of you has the Blinded condition until the end of its next turn.\n85–88 | Up to three creatures of your choice that you can see within 30 feet of you take 1d10 Necrotic damage. You regain Hit Points equal to the sum of the Necrotic damage dealt.\n89–92 | Up to three creatures of your choice that you can see within 30 feet of you take 4d10 Lightning damage.\n93–96 | You and all creatures within 30 feet of you have Vulnerability to Piercing damage for the next minute.\n97–00 | Roll 1d6. On a 1, you regain 2d10 Hit Points; on a 2, one ally of your choice within 300 feet of you regains 2d10 Hit Points; on a 3, you regain your lowest-level expended spell slot; on a 4, one ally of your choice within 300 feet of you regains their lowest-level expended spell slot; on a 5, you regain all your expended Sorcery Points; on a 6, all the effects of row 17–20 affect you simultaneously."
          },
          {
            "name": "Bend Luck",
            "nameIt": "Bend Luck",
            "level": 6,
            "text": "You have the ability to twist fate using your wild magic. Immediately after another creature you can see rolls the d20 for a D20 Test, you can take a Reaction and spend 1 Sorcery Point to roll 1d4 and apply the number rolled as a bonus or penalty (your choice) to the d20 roll."
          },
          {
            "name": "Controlled Chaos",
            "nameIt": "Controlled Chaos",
            "level": 14,
            "text": "You gain a modicum of control over the surges of your wild magic. Whenever you roll on the Wild Magic Surge table, you can roll twice and use either number."
          },
          {
            "name": "Tamed Surge",
            "nameIt": "Tamed Surge",
            "level": 18,
            "text": "Immediately after you cast a Sorcerer spell with a spell slot, you can create an effect of your choice from the Wild Magic Surge table instead of rolling on that table. You can choose any effect in the table except for the final row, and if the chosen effect involves a roll, you must make it.\n\nOnce you use this feature, you can't do so again until you finish a Long Rest."
          }
        ]
      }
    ],
    "features": [
      {
        "name": "Innate Sorcery",
        "nameIt": "Innate Sorcery",
        "level": 1,
        "text": "An event in your past left an indelible mark on you, infusing you with simmering magic. As a Bonus Action, you can unleash that magic for 1 minute, during which you gain the following benefits:\n\n• The spell save DC of your Sorcerer spells increases by 1.\n• You have Advantage on the attack rolls of Sorcerer spells you cast.\n\nYou can use this feature twice, and you regain all expended uses of it when you finish a Long Rest."
      },
      {
        "name": "Spellcasting",
        "nameIt": "Incantesimi",
        "level": 1,
        "text": "Drawing from your innate magic, you can cast spells. See chapter 7|XPHB|7 for the rules on spellcasting. The information below details how you use those rules with Sorcerer spells, which appear in the Sorcerer spell list later in the class's description.\n\n**Cantrips**: You know four Sorcerer cantrips of your choice. Light, Prestidigitation, Shocking Grasp, and Sorcerous Burst are recommended. Whenever you gain a Sorcerer level, you can replace one of your cantrips from this feature with another Sorcerer cantrip of your choice.\n\nWhen you reach Sorcerer levels 4 and 10, you learn another Sorcerer cantrip of your choice, as shown in the Cantrips column of the Sorcerer Features table.\n\n**Spell Slots**: The Sorcerer Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.\n\n**Prepared Spells of Level 1+**: You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 Sorcerer spells. Burning Hands and Detect Magic are recommended.\n\nThe number of spells on your list increases as you gain Sorcerer levels, as shown in the Prepared Spells column of the Sorcerer Features table. Whenever that number increases, choose additional Sorcerer spells until the number of spells on your list matches the number in the Sorcerer Features table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Sorcerer, your list of prepared spells can include six Sorcerer spells of level 1 or 2 in any combination.\n\nIf another Sorcerer feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Sorcerer spells for you.\n\n**Changing Your Prepared Spells**: Whenever you gain a Sorcerer level, you can replace one spell on your list with another Sorcerer spell for which you have spell slots.\n\n**Spellcasting Ability**: Charisma is your spellcasting ability for your Sorcerer spells.\n\n**Spellcasting Focus**: You can use an Arcane Focus as a Spellcasting Focus for your Sorcerer spells."
      },
      {
        "name": "Font of Magic",
        "nameIt": "Font of Magic",
        "level": 2,
        "text": "You can tap into the wellspring of magic within yourself. This wellspring is represented by Sorcery Points, which allow you to create a variety of magical effects.\n\nYou have 2 Sorcery Points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer Features table. You can't have more Sorcery Points than the number shown in the table for your level. You regain all expended Sorcery Points when you finish a Long Rest.\n\nYou can use your Sorcery Points to fuel the options below, along with other features, such as Metamagic, that use those points.\n\n**Converting Spell Slots to Sorcery Points**: You can expend a spell slot to gain a number of Sorcery Points equal to the slot's level (no action required).\n\n**Creating Spell Slots**: As a Bonus Action, you can transform unexpended Sorcery Points into one spell slot. The Creating Spell Slots table shows the cost of creating a spell slot of a given level, and it lists the minimum Sorcerer level you must be to create a slot. You can create a spell slot no higher than level 5.\n\nAny spell slot you create with this feature vanishes when you finish a Long Rest.\n\nSpell Slot Level | Sorcery Point Cost | Min. Sorcerer Level\n--- | --- | ---\n1 | 2 | 2\n2 | 3 | 3\n3 | 5 | 5\n4 | 6 | 7\n5 | 7 | 9"
      },
      {
        "name": "Metamagic",
        "nameIt": "Metamagic",
        "level": 2,
        "text": "Because your magic flows from within, you can alter your spells to suit your needs; you gain two Metamagic options of your choice from \"Metamagic Options\" later in this class's description. You use the chosen options to temporarily modify spells you cast. To use an option, you must spend the number of Sorcery Points that it costs.\n\nYou can use only one Metamagic option on a spell when you cast it unless otherwise noted in one of those options.\n\nWhenever you gain a Sorcerer level, you can replace one of your Metamagic options with one you don't know. You gain two more options at Sorcerer level 10 and two more at Sorcerer level 17."
      },
      {
        "name": "Metamagic Options",
        "nameIt": "Metamagic Options",
        "level": 2,
        "text": "The following options are available to your Metamagic feature. The options are presented in alphabetical order.\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Careful Spell|XPHB', 'preserve': {'consumes': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Distant Spell|XPHB', 'preserve': {'consumes': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Empowered Spell|XPHB', 'preserve': {'consumes': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Extended Spell|XPHB', 'preserve': {'consumes': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Heightened Spell|XPHB', 'preserve': {'consumes': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Quickened Spell|XPHB', 'preserve': {'consumes': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Seeking Spell|XPHB', 'preserve': {'consumes': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Subtle Spell|XPHB', 'preserve': {'consumes': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Transmuted Spell|XPHB', 'preserve': {'consumes': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Twinned Spell|XPHB', 'preserve': {'consumes': True}}"
      },
      {
        "name": "Sorcerer Subclass",
        "nameIt": "Sorcerer Subclass",
        "level": 3,
        "text": "You gain a Sorcerer subclass of your choice. A subclass is a specialization that grants you features at certain Sorcerer levels. For the rest of your career, you gain each of your subclass's features that are of your Sorcerer level or lower."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 4,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify. You gain this feature again at Sorcerer levels 8, 12, and 16."
      },
      {
        "name": "Sorcerous Restoration",
        "nameIt": "Sorcerous Restoration",
        "level": 5,
        "text": "When you finish a Short Rest, you can regain expended Sorcery Points, but no more than a number equal to half your Sorcerer level (round down). Once you use this feature, you can't do so again until you finish a Long Rest."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 6,
        "text": "You gain a feature from your Sorcerer subclass."
      },
      {
        "name": "Sorcery Incarnate",
        "nameIt": "Sorcery Incarnate",
        "level": 7,
        "text": "If you have no uses of Innate Sorcery left, you can use it if you spend 2 Sorcery Points when you take the Bonus Action to activate it.\n\nIn addition, while your Innate Sorcery feature is active, you can use up to two of your Metamagic options on each spell you cast."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 8,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Metamagic",
        "nameIt": "Metamagic",
        "level": 10,
        "text": "Because your magic flows from within you, you can alter your spells to suit your needs; you gain two Metamagic options of your choice from the \"Metamagic Options\" section later in this class's description.\n\nYou can use only one Metamagic option on a spell when you cast it, unless otherwise noted in one of those options.\n\nWhenever you gain a Sorcerer level, you can replace one of your Metamagic options with one you don't know."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 12,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 14,
        "text": "You gain a feature from your Sorcerer subclass."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 16,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Metamagic",
        "nameIt": "Metamagic",
        "level": 17,
        "text": "Because your magic flows from within you, you can alter your spells to suit your needs; you gain two Metamagic options of your choice from the \"Metamagic Options\" section later in this class's description.\n\nYou can use only one Metamagic option on a spell when you cast it, unless otherwise noted in one of those options.\n\nWhenever you gain a Sorcerer level, you can replace one of your Metamagic options with one you don't know."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 18,
        "text": "You gain a feature from your Sorcerer subclass."
      },
      {
        "name": "Epic Boon",
        "nameIt": "Aumento delle statistiche: Dono epico",
        "level": 19,
        "text": "You gain an Epic Boon feat or another {@5etools feat|feats.html of your choice for which you qualify. Boon of Dimensional Travel is recommended."
      },
      {
        "name": "Arcane Apotheosis",
        "nameIt": "Arcane Apotheosis",
        "level": 20,
        "text": "While your Innate Sorcery feature is active, you can use one Metamagic option on each of your turns without spending Sorcery Points on it."
      }
    ],
    "fluff": [
      "Sorcerers wield innate magic that is stamped into their being. Some Sorcerers can't name the origin of their power, while others trace it to strange events in their personal or family history. The blessing of a dragon or a dryad at a baby's birth or the strike of lightning from a clear sky might spark a Sorcerer's gift. So too might the gift of a deity, exposure to the strange magic of another plane of existence, or a glimpse into the inner workings of reality. Whatever the origin, the result is an indelible mark on the Sorcerer, a churning magic that can be passed down through generations.",
      "Sorcerers don't learn magic; the raw, roiling power of magic is part of them. The essential art of a Sorcerer is learning to harness and channel that innate magic, allowing the Sorcerer to discover new and staggering ways to unleash their power. As Sorcerers master their innate magic, they grow more attuned to its origin, developing distinct powers that reflect its source.",
      "Sorcerers are rare. Some family lines produce exactly one Sorcerer in every generation, but most of the time, the talents of sorcery appear as a fluke. People who have this magical power soon discover that it doesn't like to stay quiet. A Sorcerer's magic wants to be wielded."
    ],
    "callout": {
      "title": "L'origine della Scintilla Magica",
      "text": "Da dove scaturisce il tuo potere innato? Dalle scaglie di un antenato drago, dall'imprevedibile caos del multiverso, dall'ordine cosmico di Mechanus o dai misteri dell'Oltretempo?"
    }
  },
  {
    "id": "warlock",
    "name": "Warlock",
    "originalName": "Warlock",
    "source": "PHB 2024",
    "quote": "Un cercatore di segreti proibiti legato da un patto mistico a un patrono ultraterreno.",
    "hitDie": 8,
    "image": "https://5e.tools/img/classes/XPHB/Warlock.webp",
    "primaryAbility": [
      "Carisma"
    ],
    "proficiencies": [
      "Saggezza",
      "Carisma"
    ],
    "skills": "Scegli 2 abilità a tua scelta",
    "weapons": "Armi semplici",
    "tools": "Nessuna",
    "armor": "Armatura leggera",
    "startingEquipment": "Choose A or B: (A) Leather Armor, Sickle, 2 Dagger, Arcane Focus (orb), Book (occult lore), Scholar's Pack, and 15 GP; or (B) 100 GP",
    "multiclassing": "Per ottenere una nuova classe o lasciarla, i punteggi dei tuoi attributi primari (Carisma) devono essere almeno pari a 13.",
    "tableLabels": [
      "Invocations",
      "Cantrips",
      "Prepared Spells",
      "Spell Slots",
      "Slot Level"
    ],
    "tableLabelsIt": [
      "Suppliche occulte",
      "Trucchi",
      "Incantesimi",
      "Slot incantesimi",
      "Livello slot"
    ],
    "progression": [
      {
        "level": 1,
        "pb": "+2",
        "values": [
          "1",
          "2",
          "2",
          "1",
          "1"
        ]
      },
      {
        "level": 2,
        "pb": "+2",
        "values": [
          "3",
          "2",
          "3",
          "2",
          "1"
        ]
      },
      {
        "level": 3,
        "pb": "+2",
        "values": [
          "3",
          "2",
          "4",
          "2",
          "2"
        ]
      },
      {
        "level": 4,
        "pb": "+2",
        "values": [
          "3",
          "3",
          "5",
          "2",
          "2"
        ]
      },
      {
        "level": 5,
        "pb": "+3",
        "values": [
          "5",
          "3",
          "6",
          "2",
          "3"
        ]
      },
      {
        "level": 6,
        "pb": "+3",
        "values": [
          "5",
          "3",
          "7",
          "2",
          "3"
        ]
      },
      {
        "level": 7,
        "pb": "+3",
        "values": [
          "6",
          "3",
          "8",
          "2",
          "4"
        ]
      },
      {
        "level": 8,
        "pb": "+3",
        "values": [
          "6",
          "3",
          "9",
          "2",
          "4"
        ]
      },
      {
        "level": 9,
        "pb": "+4",
        "values": [
          "7",
          "3",
          "10",
          "2",
          "5"
        ]
      },
      {
        "level": 10,
        "pb": "+4",
        "values": [
          "7",
          "4",
          "10",
          "2",
          "5"
        ]
      },
      {
        "level": 11,
        "pb": "+4",
        "values": [
          "7",
          "4",
          "11",
          "3",
          "5"
        ]
      },
      {
        "level": 12,
        "pb": "+4",
        "values": [
          "8",
          "4",
          "11",
          "3",
          "5"
        ]
      },
      {
        "level": 13,
        "pb": "+5",
        "values": [
          "8",
          "4",
          "12",
          "3",
          "5"
        ]
      },
      {
        "level": 14,
        "pb": "+5",
        "values": [
          "8",
          "4",
          "12",
          "3",
          "5"
        ]
      },
      {
        "level": 15,
        "pb": "+5",
        "values": [
          "9",
          "4",
          "13",
          "3",
          "5"
        ]
      },
      {
        "level": 16,
        "pb": "+5",
        "values": [
          "9",
          "4",
          "13",
          "3",
          "5"
        ]
      },
      {
        "level": 17,
        "pb": "+6",
        "values": [
          "9",
          "4",
          "14",
          "4",
          "5"
        ]
      },
      {
        "level": 18,
        "pb": "+6",
        "values": [
          "10",
          "4",
          "14",
          "4",
          "5"
        ]
      },
      {
        "level": 19,
        "pb": "+6",
        "values": [
          "10",
          "4",
          "15",
          "4",
          "5"
        ]
      },
      {
        "level": 20,
        "pb": "+6",
        "values": [
          "10",
          "4",
          "15",
          "4",
          "5"
        ]
      }
    ],
    "subclasses": [
      {
        "id": "archfey",
        "name": "Patrono Arcifata",
        "originalName": "Archfey Patron",
        "shortName": "Archfey",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Archfey Patron",
            "nameIt": "Archfey Patron",
            "level": 3,
            "text": "Bargain with Whimsical Fey\n\nYour pact draws on the power of the Feywild. When you choose this subclass, you might make a deal with an archfey, such as the Prince of Frost; the Queen of Air and Darkness, ruler of the Gloaming Court; Titania of the Summer Court; or an ancient hag. Or you might call on a spectrum of Fey, weaving a web of favors and debts. Whoever they are, your patron is often inscrutable and whimsical.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Archfey Spells|Warlock|XPHB|Archfey|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Steps of the Fey|Warlock|XPHB|Archfey|XPHB|3'}"
          },
          {
            "name": "Archfey Spells",
            "nameIt": "Archfey Spells",
            "level": 3,
            "text": "The magic of your patron ensures you always have certain spells ready; when you reach a Warlock level specified in the Archfey Spells table, you thereafter always have the listed spells prepared.\n\nWarlock Level | Spells\n--- | ---\n3 | Calm Emotions, Faerie Fire, Misty Step, Phantasmal Force, Sleep\n5 | Blink, Plant Growth\n7 | Dominate Beast, Greater Invisibility\n9 | Dominate Person, Seeming"
          },
          {
            "name": "Steps of the Fey",
            "nameIt": "Steps of the Fey",
            "level": 3,
            "text": "Your patron grants you the ability to move between the boundaries of the planes. You can cast Misty Step without expending a spell slot a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.\n\nIn addition, whenever you cast that spell, you can choose one of the following additional effects.\n\n**Refreshing Step**: Immediately after you teleport, you or one creature you can see within 10 feet of yourself gains 1d10 Temporary Hit Points.\n\n**Taunting Step**: Creatures within 5 feet of the space you left must succeed on a Wisdom saving throw against your spell save DC or have Disadvantage on attack rolls against creatures other than you until the start of your next turn."
          },
          {
            "name": "Misty Escape",
            "nameIt": "Misty Escape",
            "level": 6,
            "text": "You can cast Misty Step as a Reaction in response to taking damage.\n\nIn addition, the following effects are now among your Steps of the Fey options.\n\n**Disappearing Step**: You have the Invisible condition until the start of your next turn or until immediately after you make an attack roll, deal damage, or cast a spell.\n\n**Dreadful Step**: Creatures within 5 feet of the space you left or the space you appear in (your choice) must succeed on a Wisdom saving throw against your spell save DC or take 2d10 Psychic damage."
          },
          {
            "name": "Beguiling Defenses",
            "nameIt": "Beguiling Defenses",
            "level": 10,
            "text": "Your patron teaches you how to guard your mind and body. You are immune to the Charmed condition.\n\nIn addition, immediately after a creature you can see hits you with an attack roll, you can take a Reaction to reduce the damage you take by half (round down), and you can force the attacker to make a Wisdom saving throw against your spell save DC. On a failed save, the attacker takes Psychic damage equal to the damage you take. Once you use this Reaction, you can't use it again until you finish a Long Rest unless you expend a Pact Magic spell slot (no action required) to restore your use of it."
          },
          {
            "name": "Bewitching Magic",
            "nameIt": "Bewitching Magic",
            "level": 14,
            "text": "Your patron grants you the ability to weave your magic with teleportation. Immediately after you cast an Enchantment or Illusion spell using an action and a spell slot, you can cast Misty Step as part of the same action and without expending a spell slot."
          }
        ]
      },
      {
        "id": "celestial",
        "name": "Patrono Celestiale",
        "originalName": "Celestial Patron",
        "shortName": "Celestial",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Celestial Patron",
            "nameIt": "Celestial Patron",
            "level": 3,
            "text": "Call on the Power of the Heavens\n\nYour pact draws on the Upper Planes, the realms of everlasting bliss. You might enter an agreement with an empyrean, a couatl, a sphinx, a unicorn, or another heavenly entity. Or you might call on numerous such beings as you pursue goals aligned with theirs. Your pact allows you to experience a hint of the holy light that illuminates the multiverse.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Celestial Spells|Warlock|XPHB|Celestial|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Healing Light|Warlock|XPHB|Celestial|XPHB|3'}"
          },
          {
            "name": "Celestial Spells",
            "nameIt": "Celestial Spells",
            "level": 3,
            "text": "The magic of your patron ensures you always have certain spells ready; when you reach a Warlock level specified in the Celestial Spells table, you thereafter always have the listed spells prepared.\n\nWarlock Level | Spells\n--- | ---\n3 | Aid, Cure Wounds, Guiding Bolt, Lesser Restoration, Light, Sacred Flame\n5 | Daylight, Revivify\n7 | Guardian of Faith, Wall of Fire\n9 | Greater Restoration, Summon Celestial"
          },
          {
            "name": "Healing Light",
            "nameIt": "Healing Light",
            "level": 3,
            "text": "You gain the ability to channel celestial energy to heal wounds. You have a pool of d6s to fuel this healing. The number of dice in the pool equals 1 plus your Warlock level.\n\nAs a Bonus Action, you can heal yourself or one creature you can see within 60 feet of yourself, expending dice from the pool. The maximum number of dice you can expend at once equals your Charisma modifier (minimum of one die). Roll the dice you expend, and restore a number of Hit Points equal to the roll's total. Your pool regains all expended dice when you finish a Long Rest."
          },
          {
            "name": "Radiant Soul",
            "nameIt": "Radiant Soul",
            "level": 6,
            "text": "Your link to your patron allows you to serve as a conduit for radiant energy. You have Resistance to Radiant damage. Once per turn, when a spell you cast deals Radiant or Fire damage, you can add your Charisma modifier to that spell's damage against one of the spell's targets."
          },
          {
            "name": "Celestial Resilience",
            "nameIt": "Celestial Resilience",
            "level": 10,
            "text": "You gain Temporary Hit Points whenever you use your Magical Cunning feature or finish a Short Rest or Long Rest. These Temporary Hit Points equal your Warlock level plus your Charisma modifier. Additionally, choose up to five creatures you can see when you gain the points. Those creatures each gain Temporary Hit Points equal to half your Warlock level plus your Charisma modifier."
          },
          {
            "name": "Searing Vengeance",
            "nameIt": "Searing Vengeance",
            "level": 14,
            "text": "When you or an ally within 60 feet of you is about to make a Death Saving Throw, you can unleash radiant energy to save the creature. The creature regains Hit Points equal to half its Hit Points maximum and can end the Prone condition on itself. Each creature of your choice that is within 30 feet of the creature takes Radiant damage equal to 2d8 plus your Charisma modifier, and each has the Blinded condition until the end of the current turn.\n\nOnce you use this feature, you can't use it again until you finish a Long Rest."
          }
        ]
      },
      {
        "id": "fiend",
        "name": "Patrono Immondo",
        "originalName": "Fiend Patron",
        "shortName": "Fiend",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Fiend Patron",
            "nameIt": "Fiend Patron",
            "level": 3,
            "text": "Make a Deal with the Lower Planes\n\nYour pact draws on the Lower Planes, the realms of perdition. You might forge a bargain with a demon lord such as Demogorgon or Orcus; an archdevil such as Asmodeus; or a pit fiend, balor, yugoloth, or night hag that is especially mighty. That patron's aims are evil—the corruption or destruction of all things, ultimately including you—and your path is defined by the extent to which you strive against those aims.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Fiend Spells|Warlock|XPHB|Fiend|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': \"Dark One's Blessing|Warlock|XPHB|Fiend|XPHB|3\"}"
          },
          {
            "name": "Dark One's Blessing",
            "nameIt": "Dark One's Blessing",
            "level": 3,
            "text": "When you reduce an enemy to 0 Hit Points, you gain Temporary Hit Points equal to your Charisma modifier plus your Warlock level (minimum of 1 Temporary Hit Points). You also gain this benefit if someone else reduces an enemy within 10 feet of you to 0 Hit Points."
          },
          {
            "name": "Fiend Spells",
            "nameIt": "Fiend Spells",
            "level": 3,
            "text": "The magic of your patron ensures you always have certain spells ready; when you reach a Warlock level specified in the Fiend Spells table, you thereafter always have the listed spells prepared.\n\nWarlock Level | Spells\n--- | ---\n3 | Burning Hands, Command, Scorching Ray, Suggestion\n5 | Fireball, Stinking Cloud\n7 | Fire Shield, Wall of Fire\n9 | Geas, Insect Plague"
          },
          {
            "name": "Dark One's Own Luck",
            "nameIt": "Dark One's Own Luck",
            "level": 6,
            "text": "You can call on your fiendish patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add 1d10 to your roll. You can do so after seeing the roll but before any of the roll's effects occur.\n\nYou can use this feature a number of times equal to your Charisma modifier (minimum of once), but you can use it no more than once per roll. You regain all expended uses when you finish a Long Rest."
          },
          {
            "name": "Fiendish Resilience",
            "nameIt": "Fiendish Resilience",
            "level": 10,
            "text": "Choose one damage type, other than Force, whenever you finish a Short Rest or Long Rest. You have Resistance to that damage type until you choose a different one with this feature."
          },
          {
            "name": "Hurl Through Hell",
            "nameIt": "Hurl Through Hell",
            "level": 14,
            "text": "Once per turn when you hit a creature with an attack roll, you can try to instantly transport the target through the Lower Planes. The target must succeed on a Charisma saving throw against your spell save DC, or the target disappears and hurtles through a nightmare landscape. The target takes 8d10 Psychic damage if it isn't a Fiend, and it has the Incapacitated condition until the end of your next turn, when it returns to the space it previously occupied or the nearest unoccupied space.\n\nOnce you use this feature, you can't use it again until you finish a Long Rest unless you expend a Pact Magic spell slot (no action required) to restore your use of it."
          }
        ]
      },
      {
        "id": "great-old-one",
        "name": "Patrono Grande Antico",
        "originalName": "Great Old One Patron",
        "shortName": "Great Old One",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Great Old One Patron",
            "nameIt": "Great Old One Patron",
            "level": 3,
            "text": "Unearth Forbidden Lore of Ineffable Beings\n\nWhen you choose this subclass, you might bind yourself to an unspeakable being from the Far Realm or an elder god—a being such as Tharizdun, the Chained God; Zargon, the Returner; Hadar, the Dark Hunger; or Great Cthulhu. Or you might invoke several entities without yoking yourself to one. The motives of these beings are incomprehensible, and the Great Old One might be indifferent to your existence. But the secrets you've learned nevertheless allow you to draw strange magic from it.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Great Old One Spells|Warlock|XPHB|Great Old One|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Awakened Mind|Warlock|XPHB|Great Old One|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Psychic Spells|Warlock|XPHB|Great Old One|XPHB|3'}"
          },
          {
            "name": "Awakened Mind",
            "nameIt": "Awakened Mind",
            "level": 3,
            "text": "You can form a telepathic connection between your mind and the mind of another. As a Bonus Action, choose one creature you can see within 30 feet of yourself. You and the chosen creature can communicate telepathically with each other while the two of you are within a number of miles of each other equal to your Charisma modifier (minimum of 1 mile). To understand each other, you each must mentally use a language the other knows.\n\nThe telepathic connection lasts for a number of minutes equal to your Warlock level. It ends early if you use this feature to connect with a different creature."
          },
          {
            "name": "Great Old One Spells",
            "nameIt": "Great Old One Spells",
            "level": 3,
            "text": "The magic of your patron ensures you always have certain spells ready; when you reach a Warlock level specified in the Great Old One Spells table, you thereafter always have the listed spells prepared.\n\nWarlock Level | Spells\n--- | ---\n3 | Detect Thoughts, Dissonant Whispers, Phantasmal Force, Tasha's Hideous Laughter\n5 | Clairvoyance, Hunger of Hadar\n7 | Confusion, Summon Aberration\n9 | Modify Memory, Telekinesis"
          },
          {
            "name": "Psychic Spells",
            "nameIt": "Psychic Spells",
            "level": 3,
            "text": "When you cast a Warlock spell that deals damage, you can change its damage type to Psychic. In addition, when you cast a Warlock spell that is an Enchantment or Illusion, you can do so without Verbal or Somatic components."
          },
          {
            "name": "Clairvoyant Combatant",
            "nameIt": "Clairvoyant Combatant",
            "level": 6,
            "text": "When you form a telepathic bond with a creature using your Awakened Mind, you can force that creature to make a Wisdom saving throw against your spell save DC. On a failed save, the creature has Disadvantage on attack rolls against you, and you have Advantage on attack rolls against that creature for the duration of the bond.\n\nOnce you use this feature, you can't use it again until you finish a Short Rest or Long Rest unless you expend a Pact Magic spell slot (no action required) to restore your use of it."
          },
          {
            "name": "Eldritch Hex",
            "nameIt": "Eldritch Hex",
            "level": 10,
            "text": "Your alien patron grants you a powerful curse. You always have the Hex spell prepared. When you cast Hex and choose an ability, the target also has Disadvantage on saving throws of the chosen ability for the duration of the spell."
          },
          {
            "name": "Thought Shield",
            "nameIt": "Thought Shield",
            "level": 10,
            "text": "Your thoughts can't be read by telepathy or other means unless you allow it. You also have Resistance to Psychic damage, and whenever a creature deals Psychic damage to you, that creature takes the same amount of damage that you take."
          },
          {
            "name": "Create Thrall",
            "nameIt": "Create Thrall",
            "level": 14,
            "text": "When you cast Summon Aberration, you can modify it so that it doesn't require Concentration|XPHB. If you do so, the spell's duration becomes 1 minute for that casting, and when summoned, the Aberration has a number of Temporary Hit Points equal to your Warlock level plus your Charisma modifier.\n\nIn addition, the first time each turn the Aberration hits a creature under the effect of your Hex, the Aberration deals extra Psychic damage to the target equal to the bonus damage of that spell."
          }
        ]
      }
    ],
    "features": [
      {
        "name": "Eldritch Invocation Options",
        "nameIt": "Eldritch Invocation Options",
        "level": 1,
        "text": "Eldritch Invocation options appear in alphabetical order.\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Agonizing Blast|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Armor of Shadows|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Ascendant Step|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Call of the Void|WoW', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Curse of Corruption|WoW', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': \"Devil's Sight|XPHB\", 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Devouring Blade|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Eldritch Mind|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Eldritch Smite|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Eldritch Spear|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Expendable Minions|WoW', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Fiendish Vigor|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Gaze of Two Minds|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Gift of the Depths|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Gift of the Protectors|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Health Funnel|WoW', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Investment of the Chain Master|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Legion Summoning|WoW', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Lessons of the First Ones|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Lifedrinker|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Mask of Many Faces|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Master Demonologist|WoW', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Master of Myriad Forms|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Misty Visions|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'One with Shadows|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Otherworldly Leap|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Pact of the Blade|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Pact of the Chain|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Pact of the Legion|WoW', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Pact of the Tome|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Repelling Blast|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Thirsting Blade|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Visions of Distant Realms|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Whispers of the Grave|XPHB', 'preserve': {'prerequisite': True}}\n\n{'type': 'refOptionalfeature', 'optionalfeature': 'Witch Sight|XPHB', 'preserve': {'prerequisite': True}}"
      },
      {
        "name": "Eldritch Invocations",
        "nameIt": "Eldritch Invocations",
        "level": 1,
        "text": "You have unearthed Eldritch Invocations, pieces of forbidden knowledge that imbue you with an abiding magical ability or other lessons. You gain one invocation of your choice, such as Pact of the Tome. Invocations are described in the \"Eldritch Invocation Options\" section later in this class's description.\n\n**Prerequisites**: If an invocation has a prerequisite, you must meet it to learn that invocation. For example, if an invocation requires you to be a level 5+ Warlock, you can select the invocation once you reach Warlock level 5.\n\n**Replacing and Gaining Invocations**: Whenever you gain a Warlock level, you can replace one of your invocations with another one for which you qualify. You can't replace an invocation if it's a prerequisite for another invocation that you have.\n\nWhen you gain certain Warlock levels, you gain more invocations of your choice, as shown in the Invocations column of the Warlock Features table.\n\nYou can't pick the same invocation more than once unless its description says otherwise."
      },
      {
        "name": "Pact Magic",
        "nameIt": "Pact Magic",
        "level": 1,
        "text": "Through occult ceremony, you have formed a pact with a mysterious entity to gain magical powers. The entity is a voice in the shadows—its identity unclear—but its boon to you is concrete: the ability to cast spells. See chapter 7|XPHB|7 for the rules on spellcasting. The information below details how you use those rules with Warlock spells, which appear in the Warlock spell list later in the class's description.\n\n**Cantrips**: You know two Warlock cantrips of your choice. Eldritch Blast and Prestidigitation are recommended. Whenever you gain a Warlock level, you can replace one of your cantrips from this feature with another Warlock cantrip of your choice.\n\nWhen you reach Warlock levels 4 and 10, you learn another Warlock cantrip of your choice, as shown in the Cantrips column of the Warlock Features table.\n\n**Spell Slots**: The Warlock Features table shows how many spell slots you have to cast your Warlock spells of levels 1–5. The table also shows the level of those slots, all of which are the same level. You regain all expended Pact Magic spell slots when you finish a Short Rest or Long Rest.\n\nFor example, when you're a level 5 Warlock, you have two level 3 spell slots. To cast the level 1 spell Witch Bolt, you must spend one of those slots, and you cast it as a level 3 spell.\n\n**Prepared Spells of Level 1+**: You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 Warlock spells. Charm Person and Hex are recommended.\n\nThe number of spells on your list increases as you gain Warlock levels, as shown in the Prepared Spells column of the Warlock Features table. Whenever that number increases, choose additional Warlock spells until the number of spells on your list matches the number in the table. The chosen spells must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach level 6, for example, you learn a new Warlock spell, which can be of levels 1–3.\n\nIf another Warlock feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Warlock spells for you.\n\n**Changing Your Prepared Spells**: Whenever you gain a Warlock level, you can replace one spell on your list with another Warlock spell of an eligible level.\n\n**Spellcasting Ability**: Charisma is the spellcasting ability for your Warlock spells.\n\n**Spellcasting Focus**: You can use an Arcane Focus as a Spellcasting Focus for your Warlock spells."
      },
      {
        "name": "Magical Cunning",
        "nameIt": "Magical Cunning",
        "level": 2,
        "text": "You can perform an esoteric rite for 1 minute. At the end of it, you regain expended Pact Magic spell slots but no more than a number equal to half your maximum (round up). Once you use this feature, you can't do so again until you finish a Long Rest."
      },
      {
        "name": "Warlock Subclass",
        "nameIt": "Warlock Subclass",
        "level": 3,
        "text": "You gain a Warlock subclass of your choice. A subclass is a specialization that grants you features at certain Warlock levels. For the rest of your career, you gain each of your subclass's features that are of your Warlock level or lower."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 4,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify. You gain this feature again at Warlock levels 8, 12, and 16."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 6,
        "text": "You gain a feature from your Warlock subclass."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 8,
        "text": "You gain the Ability Score Improvement Feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Contact Patron",
        "nameIt": "Contact Patron",
        "level": 9,
        "text": "In the past, you usually contacted your patron through intermediaries. Now you can communicate directly; you always have the Contact Other Plane spell prepared. With this feature, you can cast the spell without expending a spell slot to contact your patron, and you automatically succeed on the spell's saving throw.\n\nOnce you cast the spell with this feature, you can't do so in this way again until you finish a Long Rest."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 10,
        "text": "You gain a feature from your Warlock subclass."
      },
      {
        "name": "Mystic Arcanum",
        "nameIt": "Mystic Arcanum",
        "level": 11,
        "text": "Your patron grants you a magical secret called an arcanum. Choose one level 6 Warlock spell as this arcanum.\n\nYou can cast your arcanum spell once without expending a spell slot, and you must finish a Long Rest before you can cast it in this way again.\n\nAs shown in the Warlock Features table, you gain another Warlock spell of your choice that can be cast in this way when you reach Warlock levels 13 (level 7 spell), 15 (level 8 spell), and 17 (level 9 spell). You regain all uses of your Mystic Arcanum when you finish a Long Rest.\n\nWhenever you gain a Warlock level, you can replace one of your arcanum spells with another Warlock spell of the same level."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 12,
        "text": "You gain the Ability Score Improvement Feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Mystic Arcanum",
        "nameIt": "Mystic Arcanum",
        "level": 13,
        "text": "You gain a level 7 Warlock Spell of your choice."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 14,
        "text": "You gain a feature from your Warlock subclass."
      },
      {
        "name": "Mystic Arcanum",
        "nameIt": "Mystic Arcanum",
        "level": 15,
        "text": "You gain a level 8 Warlock Spell of your choice."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 16,
        "text": "You gain the Ability Score Improvement Feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Mystic Arcanum",
        "nameIt": "Mystic Arcanum",
        "level": 17,
        "text": "You gain a level 9 Warlock Spell of your choice."
      },
      {
        "name": "Epic Boon",
        "nameIt": "Aumento delle statistiche: Dono epico",
        "level": 19,
        "text": "You gain an Epic Boon feat or another {@5etools feat|feats.html of your choice for which you qualify. Boon of Fate is recommended."
      },
      {
        "name": "Eldritch Master",
        "nameIt": "Eldritch Master",
        "level": 20,
        "text": "When you use your Magical Cunning feature, you regain all your expended Pact Magic spell slots."
      }
    ],
    "fluff": [
      "Warlocks quest for knowledge that lies hidden in the fabric of the multiverse. They often begin their search for magical power by delving into tomes of forbidden lore, dabbling in invocations meant to attract the power of extraplanar beings, or seeking places of power where the influence of these beings can be felt. In no time, each Warlock is drawn into a binding pact with a powerful patron. Drawing on the ancient knowledge of beings such as angels, archfey, demons, devils, hags, and alien entities of the Far Realm, Warlocks piece together arcane secrets to bolster their own power.",
      "Warlocks view their patrons as resources, as means to the end of achieving magical power. Some Warlocks respect, revere, or even love their patrons; some serve their patrons grudgingly; and some seek to undermine their patrons even as they wield the power their patrons have given them.",
      "Once a pact is made, a Warlock's thirst for knowledge and power can't be slaked with mere study. Most Warlocks spend their days pursuing greater power and deeper knowledge, which typically means some kind of adventure."
    ],
    "callout": {
      "title": "Il Patto Ultraterreno",
      "text": "Chi è il tuo patrono e quale prezzo hai accettato di pagare per i tuoi segreti arcani? Una regina fatata della Selva Fatata, un signore dei Nove Inferi o un'entità inconoscibile delle stelle?"
    }
  },
  {
    "id": "wizard",
    "name": "Mago",
    "originalName": "Wizard",
    "source": "PHB 2024",
    "quote": "Uno studioso instancabile delle leggi arcane che piega la realtà attraverso la perfetta conoscenza.",
    "hitDie": 6,
    "image": "https://5e.tools/img/classes/XPHB/Wizard.webp",
    "primaryAbility": [
      "Intelligenza"
    ],
    "proficiencies": [
      "Intelligenza",
      "Saggezza"
    ],
    "skills": "Scegli 2 abilità a tua scelta",
    "weapons": "Armi semplici",
    "tools": "Nessuna",
    "armor": "Nessuna",
    "startingEquipment": "Choose A or B: (A) 2 Dagger, Arcane Focus (Quarterstaff), Robe, Spellbook, Scholar's Pack, and 5 GP; or (B) 55 GP",
    "multiclassing": "Per ottenere una nuova classe o lasciarla, i punteggi dei tuoi attributi primari (Intelligenza) devono essere almeno pari a 13.",
    "tableLabels": [
      "Cantrips",
      "Prepared Spells",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    "tableLabelsIt": [
      "Trucchi",
      "Incantesimi",
      "1°",
      "2°",
      "3°",
      "4°",
      "5°",
      "6°",
      "7°",
      "8°",
      "9°"
    ],
    "progression": [
      {
        "level": 1,
        "pb": "+2",
        "values": [
          "3",
          "4"
        ]
      },
      {
        "level": 2,
        "pb": "+2",
        "values": [
          "3",
          "5"
        ]
      },
      {
        "level": 3,
        "pb": "+2",
        "values": [
          "3",
          "6"
        ]
      },
      {
        "level": 4,
        "pb": "+2",
        "values": [
          "4",
          "7"
        ]
      },
      {
        "level": 5,
        "pb": "+3",
        "values": [
          "4",
          "9"
        ]
      },
      {
        "level": 6,
        "pb": "+3",
        "values": [
          "4",
          "10"
        ]
      },
      {
        "level": 7,
        "pb": "+3",
        "values": [
          "4",
          "11"
        ]
      },
      {
        "level": 8,
        "pb": "+3",
        "values": [
          "4",
          "12"
        ]
      },
      {
        "level": 9,
        "pb": "+4",
        "values": [
          "4",
          "14"
        ]
      },
      {
        "level": 10,
        "pb": "+4",
        "values": [
          "5",
          "15"
        ]
      },
      {
        "level": 11,
        "pb": "+4",
        "values": [
          "5",
          "16"
        ]
      },
      {
        "level": 12,
        "pb": "+4",
        "values": [
          "5",
          "16"
        ]
      },
      {
        "level": 13,
        "pb": "+5",
        "values": [
          "5",
          "17"
        ]
      },
      {
        "level": 14,
        "pb": "+5",
        "values": [
          "5",
          "18"
        ]
      },
      {
        "level": 15,
        "pb": "+5",
        "values": [
          "5",
          "19"
        ]
      },
      {
        "level": 16,
        "pb": "+5",
        "values": [
          "5",
          "21"
        ]
      },
      {
        "level": 17,
        "pb": "+6",
        "values": [
          "5",
          "22"
        ]
      },
      {
        "level": 18,
        "pb": "+6",
        "values": [
          "5",
          "23"
        ]
      },
      {
        "level": 19,
        "pb": "+6",
        "values": [
          "5",
          "24"
        ]
      },
      {
        "level": 20,
        "pb": "+6",
        "values": [
          "5",
          "25"
        ]
      }
    ],
    "subclasses": [
      {
        "id": "abjurer",
        "name": "Abiuratore",
        "originalName": "Abjurer",
        "shortName": "Abjurer",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Abjurer",
            "nameIt": "Abjurer",
            "level": 3,
            "text": "Shield Companions and Banish Foes\n\nYour study of magic is focused on spells that block, banish, or protect—ending harmful effects, banishing evil influences, and protecting the weak. Abjurers are sought when baleful spirits require exorcism, when locations must be guarded against magical spying, and when portals to other planes of existence must be closed. Adventuring parties value Abjurers for the protection they provide against a variety of hostile magic and other attacks.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Abjuration Savant|Wizard|XPHB|Abjurer|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Arcane Ward|Wizard|XPHB|Abjurer|XPHB|3'}"
          },
          {
            "name": "Abjuration Savant",
            "nameIt": "Abjuration Savant",
            "level": 3,
            "text": "Choose two Wizard spells from the Abjuration school, each of which must be no higher than level 2, and add them to your spellbook for free.\n\nIn addition, whenever you gain access to a new level of spell slots in this class, you can add one Wizard spell from the Abjuration school to your spellbook for free. The chosen spell must be of a level for which you have spell slots."
          },
          {
            "name": "Arcane Ward",
            "nameIt": "Arcane Ward",
            "level": 3,
            "text": "You can weave magic around yourself for protection. When you cast an Abjuration spell with a spell slot, you can simultaneously use a strand of the spell's magic to create a magical ward on yourself that lasts until you finish a Long Rest. The ward has a Hit Points maximum equal to twice your Wizard level plus your Intelligence modifier. Whenever you take damage, the ward takes the damage instead, and if you have any Resistances or Vulnerabilities, apply them before reducing the ward's Hit Points. If the damage reduces the ward to 0 Hit Points, you take any remaining damage. While the ward has 0 Hit Points, it can't absorb damage, but its magic remains.\n\nWhenever you cast an Abjuration spell with a spell slot, the ward regains a number of Hit Points equal to twice the level of the spell slot. Alternatively, as a Bonus Action, you can expend a spell slot, and the ward regains a number of Hit Points equal to twice the level of the spell slot expended.\n\nOnce you create the ward, you can't create it again until you finish a Long Rest."
          },
          {
            "name": "Projected Ward",
            "nameIt": "Projected Ward",
            "level": 6,
            "text": "When a creature that you can see within 30 feet of yourself takes damage, you can take a Reaction to cause your Arcane Ward to absorb that damage. If this damage reduces the ward to 0 Hit Points, the warded creature takes any remaining damage. If that creature has any Resistances or Vulnerabilities, apply them before reducing the ward's Hit Points."
          },
          {
            "name": "Spell Breaker",
            "nameIt": "Spell Breaker",
            "level": 10,
            "text": "You always have the Counterspell and Dispel Magic spells prepared. In addition, you can cast Dispel Magic as a Bonus Action, and you can add your Proficiency to its ability check.\n\nWhen you cast either spell with a spell slot, that slot isn't expended if the spell fails to stop a spell."
          },
          {
            "name": "Spell Resistance",
            "nameIt": "Spell Resistance",
            "level": 14,
            "text": "You have Advantage on saving throws against spells, and you have Resistance to the damage of spells."
          }
        ]
      },
      {
        "id": "diviner",
        "name": "Divinatore",
        "originalName": "Diviner",
        "shortName": "Diviner",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Diviner",
            "nameIt": "Diviner",
            "level": 3,
            "text": "Learn the Secrets of the Multiverse\n\nThe counsel of a Diviner is sought by those who want a clearer understanding of the past, present, and future. As a Diviner, you strive to part the veils of space, time, and consciousness. You work to master spells of discernment, remote viewing, supernatural knowledge, and foresight.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Divination Savant|Wizard|XPHB|Diviner|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Portent|Wizard|XPHB|Diviner|XPHB|3'}"
          },
          {
            "name": "Divination Savant",
            "nameIt": "Divination Savant",
            "level": 3,
            "text": "Choose two Wizard spells from the Divination school, each of which must be no higher than level 2, and add them to your spellbook for free.\n\nIn addition, whenever you gain access to a new level of spell slots in this class, you can add one Wizard spell from the Divination school to your spellbook for free. The chosen spell must be of a level for which you have spell slots."
          },
          {
            "name": "Portent",
            "nameIt": "Portent",
            "level": 3,
            "text": "Glimpses of the future begin to press on your awareness. Whenever you finish a Long Rest, roll two d20s and record the numbers rolled. You can replace any D20 Test made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn.\n\nEach foretelling roll can be used only once. When you finish a Long Rest, you lose any unused foretelling rolls."
          },
          {
            "name": "Expert Divination",
            "nameIt": "Expert Divination",
            "level": 6,
            "text": "Casting Divination spells comes so easily to you that it expends only a fraction of your spellcasting efforts. When you cast a Divination spell using a level 2+ spell slot, you regain one expended spell slot. The slot you regain must be of a level lower than the slot you expended and can't be higher than level 5."
          },
          {
            "name": "The Third Eye",
            "nameIt": "The Third Eye",
            "level": 10,
            "text": "You can increase your powers of perception. As a Bonus Action, choose one of the following benefits, which lasts until you start a Short Rest or Long Rest. You can't use this feature again until you finish a Short Rest or Long Rest.\n\n**Darkvision**: You gain Darkvision with a range of 120 feet.\n\n**Greater Comprehension**: You can read any language.\n\n**See Invisibility**: You can cast See Invisibility without expending a spell slot."
          },
          {
            "name": "Greater Portent",
            "nameIt": "Greater Portent",
            "level": 14,
            "text": "The visions in your dreams intensify and paint a more accurate picture in your mind of what is to come. Roll three d20s for your Portent feature rather than two."
          }
        ]
      },
      {
        "id": "evoker",
        "name": "Invocatore",
        "originalName": "Evoker",
        "shortName": "Evoker",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Evoker",
            "nameIt": "Evoker",
            "level": 3,
            "text": "Create Explosive Elemental Effects\n\nYour studies focus on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some Evokers find employment in military forces, serving as artillery to blast armies from afar. Others use their power to protect others, while some seek their own gain.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Evocation Savant|Wizard|XPHB|Evoker|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Potent Cantrip|Wizard|XPHB|Evoker|XPHB|3'}"
          },
          {
            "name": "Evocation Savant",
            "nameIt": "Evocation Savant",
            "level": 3,
            "text": "Choose two Wizard spells from the Evocation school, each of which must be no higher than level 2, and add them to your spellbook for free.\n\nIn addition, whenever you gain access to a new level of spell slots in this class, you can add one Wizard spell from the Evocation school to your spellbook for free. The chosen spell must be of a level for which you have spell slots."
          },
          {
            "name": "Potent Cantrip",
            "nameIt": "Potent Cantrip",
            "level": 3,
            "text": "Your damaging cantrips affect even creatures that avoid the brunt of the effect. When you cast a cantrip at a creature and you miss with the attack roll or the target succeeds on a saving throw against the cantrip, the target takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip."
          },
          {
            "name": "Sculpt Spells",
            "nameIt": "Sculpt Spells",
            "level": 6,
            "text": "You can create pockets of relative safety within the effects of your evocations. When you cast an Evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 plus the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save."
          },
          {
            "name": "Empowered Evocation",
            "nameIt": "Empowered Evocation",
            "level": 10,
            "text": "Whenever you cast a Wizard spell from the Evocation school, you can add your Intelligence modifier to one damage roll of that spell."
          },
          {
            "name": "Overchannel",
            "nameIt": "Overchannel",
            "level": 14,
            "text": "You can increase the power of your spells. When you cast a Wizard spell with a spell slot of levels 1–5 that deals damage, you can deal maximum damage with that spell on the turn you cast it.\n\nThe first time you do so, you suffer no adverse effect. If you use this feature again before you finish a Long Rest, you take 2d12 Necrotic damage for each level of the spell slot immediately after you cast it. This damage ignores Resistance and Immunity.\n\nEach time you use this feature again before finishing a Long Rest, the Necrotic damage per spell level increases by 1d12."
          }
        ]
      },
      {
        "id": "illusionist",
        "name": "Illusionista",
        "originalName": "Illusionist",
        "shortName": "Illusionist",
        "source": "PHB 2024",
        "desc": "",
        "features": [
          {
            "name": "Illusionist",
            "nameIt": "Illusionist",
            "level": 3,
            "text": "Weave Subtle Spells of Deception\n\nYou specialize in magic that dazzles the senses and tricks the mind, and the illusions you craft make the impossible seem real.\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Illusion Savant|Wizard|XPHB|Illusionist|XPHB|3'}\n\n{'type': 'refSubclassFeature', 'subclassFeature': 'Improved Illusions|Wizard|XPHB|Illusionist|XPHB|3'}"
          },
          {
            "name": "Illusion Savant",
            "nameIt": "Illusion Savant",
            "level": 3,
            "text": "Choose two Wizard spells from the Illusion school, each of which must be no higher than level 2, and add them to your spellbook for free.\n\nIn addition, whenever you gain access to a new level of spell slots in this class, you can add one Wizard spell from the Illusion school to your spellbook for free. The chosen spell must be of a level for which you have spell slots."
          },
          {
            "name": "Improved Illusions",
            "nameIt": "Improved Illusions",
            "level": 3,
            "text": "You can cast Illusion spells without providing Verbal components, and if an Illusion spell you cast has a range of 10+ feet, the range increases by 60 feet.\n\nYou also know the Minor Illusion cantrip. If you already know it, you learn a different Wizard cantrip of your choice. The cantrip doesn't count against your number of cantrips known. You can create both a sound and an image with a single casting of Minor Illusion, and you can cast it as a Bonus Action."
          },
          {
            "name": "Phantasmal Creatures",
            "nameIt": "Phantasmal Creatures",
            "level": 6,
            "text": "You always have the Summon Beast and Summon Fey spells prepared. Whenever you cast either spell, you can change its school to Illusion, which causes the summoned creature to appear spectral. You can cast the Illusion version of each spell without expending a spell slot, but casting it without a slot halves the creature's Hit Points. Once you cast either spell without a spell slot, you must finish a Long Rest before you can cast the spell in that way again."
          },
          {
            "name": "Illusory Self",
            "nameIt": "Illusory Self",
            "level": 10,
            "text": "When a creature hits you with an attack roll, you can take a Reaction to interpose an illusory duplicate of yourself between the attacker and yourself. The attack automatically misses you, then the illusion dissipates.\n\nOnce you use this feature, you can't use it again until you finish a Short Rest or Long Rest. You can also restore your use of it by expending a level 2+ spell slot (no action required)."
          },
          {
            "name": "Illusory Reality",
            "nameIt": "Illusory Reality",
            "level": 14,
            "text": "You have learned to weave shadow magic into your illusions to give them a semi-reality. When you cast an Illusion spell with a spell slot, you can choose one inanimate, nonmagical object that is part of the illusion and make that object real. You can do this on your turn as a Bonus Action while the spell is ongoing. The object remains real for 1 minute, during which it can't deal damage or give any conditions. For example, you can create an illusion of a bridge over a chasm and then make it real and cross it."
          }
        ]
      }
    ],
    "features": [
      {
        "name": "Arcane Recovery",
        "nameIt": "Arcane Recovery",
        "level": 1,
        "text": "You can regain some of your magical energy by studying your spellbook. When you finish a Short Rest, you can choose expended spell slots to recover. The spell slots can have a combined level equal to no more than half your Wizard level (round up), and none of the slots can be level 6 or higher. For example, if you're a level 4 Wizard, you can recover up to two levels' worth of spell slots, regaining either one level 2 spell slot or two level 1 spell slots.\n\nOnce you use this feature, you can't do so again until you finish a Long Rest."
      },
      {
        "name": "Ritual Adept",
        "nameIt": "Ritual Adept",
        "level": 1,
        "text": "You can cast any spell as a Ritual if that spell has the Ritual tag and the spell is in your spellbook. You needn't have the spell prepared, but you must read from the book to cast a spell in this way."
      },
      {
        "name": "Spellcasting",
        "nameIt": "Incantesimi",
        "level": 1,
        "text": "As a student of arcane magic, you have learned to cast spells. See chapter 7|XPHB|7 for the rules on spellcasting. The information below details how you use those rules with Wizard spells, which appear in the Wizard spell list later in the class's description.\n\n**Cantrips**: You know three Wizard cantrips of your choice. Light, Mage Hand, and Ray of Frost are recommended. Whenever you finish a Long Rest, you can replace one of your cantrips from this feature with another Wizard cantrip of your choice.\n\nWhen you reach Wizard levels 4 and 10, you learn another Wizard cantrip of your choice, as shown in the Cantrips column of the Wizard Features table.\n\n**Spellbook**: Your wizardly apprenticeship culminated in the creation of a unique book: your spellbook. It is a Tiny object that weighs 3 pounds, contains 100 pages, and can be read only by you or someone casting Identify. You determine the book's appearance and materials, such as a gilt-edged tome or a collection of vellum bound with twine.\n\nThe book contains the level 1+ spells you know. It starts with six level 1 Wizard spells of your choice. Detect Magic, Feather Fall, Mage Armor, Magic Missile, Sleep, and Thunderwave are recommended.\n\nWhenever you gain a Wizard level after 1, add two Wizard spells of your choice to your spellbook. Each of these spells must be of a level for which you have spell slots, as shown in the Wizard Features table. The spells are the culmination of arcane research you do regularly.\n\n**Spell Slots**: The Wizard Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.\n\n**Prepared Spells of Level 1+**: You prepare the list of level 1+ spells that are available for you to cast with this feature. To do so, choose four spells from your spellbook. The chosen spells must be of a level for which you have spell slots.\n\nThe number of spells on your list increases as you gain Wizard levels, as shown in the Prepared Spells column of the Wizard Features table. Whenever that number increases, choose additional Wizard spells until the number of spells on your list matches the number in the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Wizard, your list of prepared spells can include six spells of levels 1 and 2 in any combination, chosen from your spellbook.\n\nIf another Wizard feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Wizard spells for you.\n\n**Changing Your Prepared Spells**: Whenever you finish a Long Rest, you can change your list of prepared spells, replacing any of the spells there with spells from your spellbook.\n\n**Spellcasting Ability**: Intelligence is your spellcasting ability for your Wizard spells.\n\n**Spellcasting Focus**: You can use an Arcane Focus or your spellbook as a Spellcasting Focus for your Wizard spells.\n\nThe spells you add to your spellbook as you gain levels reflect your ongoing magical research, but you might find other spells during your adventures that you can add to the book. You could discover a Wizard spell on a Spell Scroll, for example, and then copy it into your spellbook.\n\n**Copying a Spell into the Book**: When you find a level 1+ Wizard spell, you can copy it into your spellbook if it's of a level you can prepare and if you have time to copy it. For each level of the spell, the transcription takes 2 hours and costs 50 GP. Afterward you can prepare the spell like the other spells in your spellbook.\n\n**Copying the Book**: You can copy a spell from your spellbook into another book. This is like copying a new spell into your spellbook but faster, since you already know how to cast the spell. You need spend only 1 hour and 10 GP for each level of the copied spell.\n\nIf you lose your spellbook, you can use the same procedure to transcribe the Wizard spells that you have prepared into a new spellbook. Filling out the remainder of the new book requires you to find new spells to do so. For this reason, many wizards keep a backup spellbook."
      },
      {
        "name": "Scholar",
        "nameIt": "Scholar",
        "level": 2,
        "text": "While studying magic, you also specialized in another field of study. Choose one of the following skills in which you have proficiency: Arcana, History, Investigation, Medicine, Nature, or Religion. You have Expertise in the chosen skill."
      },
      {
        "name": "Wizard Subclass",
        "nameIt": "Wizard Subclass",
        "level": 3,
        "text": "You gain a Wizard subclass of your choice. A subclass is a specialization that grants you features at certain Wizard levels. For the rest of your career, you gain each of your subclass's features that are of your Wizard level or lower."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 4,
        "text": "You gain the Ability Score Improvement feat or another {@5etools feat|feats.html of your choice for which you qualify. You gain this feature again at Wizard levels 8, 12, and 16."
      },
      {
        "name": "Memorize Spell",
        "nameIt": "Memorize Spell",
        "level": 5,
        "text": "Whenever you finish a Short Rest, you can study your spellbook and replace one of the level 1+ Wizard spells you have prepared for your Spellcasting feature with another level 1+ spell from the book."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 6,
        "text": "You gain a feature from your Wizard Subclass."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 8,
        "text": "You gain the Ability Score Improvement Feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 10,
        "text": "You gain a feature from your Wizard Subclass."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 12,
        "text": "You gain the Ability Score Improvement Feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Subclass Feature",
        "nameIt": "Subclass Feature",
        "level": 14,
        "text": "You gain a feature from your Wizard Subclass."
      },
      {
        "name": "Ability Score Improvement",
        "nameIt": "Caratteristiche migliorate",
        "level": 16,
        "text": "You gain the Ability Score Improvement Feat or another {@5etools feat|feats.html of your choice for which you qualify."
      },
      {
        "name": "Spell Mastery",
        "nameIt": "Spell Mastery",
        "level": 18,
        "text": "You have achieved such mastery over certain spells that you can cast them at will. Choose a level 1 and a level 2 spell in your spellbook that have a casting time of an action. You always have those spells prepared, and you can cast them at their lowest level without expending a spell slot. To cast either spell at a higher level, you must expend a spell slot.\n\nWhenever you finish a Long Rest, you can study your spellbook and replace one of those spells with an eligible spell of the same level from the book."
      },
      {
        "name": "Epic Boon",
        "nameIt": "Aumento delle statistiche: Dono epico",
        "level": 19,
        "text": "You gain an Epic Boon feat or another {@5etools feat|feats.html of your choice for which you qualify. Boon of Spell Recall is recommended."
      },
      {
        "name": "Signature Spells",
        "nameIt": "Signature Spells",
        "level": 20,
        "text": "Choose two level 3 spells in your spellbook as your signature spells. You always have these spells prepared, and you can cast each of them once at level 3 without expending a spell slot. When you do so, you can't cast them in this way again until you finish a Short Rest or Long Rest. To cast either spell at a higher level, you must expend a spell slot."
      }
    ],
    "fluff": [
      "Wizards are defined by their exhaustive study of magic's inner workings. They cast spells of explosive fire, arcing lightning, subtle deception, and spectacular transformations. Their magic conjures monsters from other planes of existence, glimpses the future, or forms protective barriers. Their mightiest spells change one substance into another, call meteors from the sky, or open portals to other worlds.",
      "Most Wizards share a scholarly approach to magic. They examine the theoretical underpinnings of magic, particularly the categorization of spells into schools of magic. Renowned Wizards such as Bigby, Tasha, Mordenkainen, and Yolande have built on their studies to invent iconic spells now used across the multiverse.",
      "The closest a Wizard is likely to come to an ordinary life is working as a sage or lecturer. Other Wizards sell their services as advisers, serve in military forces, or pursue lives of crime or domination.",
      "But the lure of knowledge calls even the most unadventurous Wizards from the safety of their libraries and laboratories and into crumbling ruins and lost cities. Most Wizards believe that their counterparts in ancient civilizations knew secrets of magic that have been lost to the ages, and discovering those secrets could unlock the path to a power greater than any magic available in the present age."
    ],
    "callout": {
      "title": "Il Grimorio e lo Studio Arcano",
      "text": "Quali annotazioni e simboli riempiono le pagine del tuo grimorio? Sei attratto dall'invocazione distruttiva, dalle barriere dell'abiurazione o dalle profezie della divinazione?"
    }
  }
];
