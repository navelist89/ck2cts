
var TACTICS = [
	{
		"name": "General Skirmish",
		"duration": 3,
		"type": "Skirmish",
		"phase": "Skirmish",
        "eligibility": true,
		"weight": 3
	},
	{
		"name": "Harass",
		"duration": 18,
		"type": "Harass",
		"phase": "Skirmish",
		"eligibility": "LCA >= ALL*0.05 && HA < ALL*0.5 && (LCA < ALL*0.45 || (LCA < 0.75*ALL && general.martial >= 12))",
		"weight": 2,
		"modifiers": [
			[
				"2 ",
				" general.martial>=8 && (LC>0.3*SKM || CC>=0.3*SKM)"
			],
			[
				"2 ",
				" general.martial>= 12 && (LC >= 0.4*SKM || CC >= 0.4*SKM)"
			],
			[
				"2 ",
				" general.martial>= 16 && (LC >= 0.5*SKM || CC >= 0.5*SKM)"
			]
		],
		"effect": [
			[
				"LC",
				"ATK",
				300
			],
			[
				"CC",
				"ATK",
				300
			],
			[
				"HA",
				"ATK",
				-150
			],
			[
				"AR",
				"ATK",
				-150
			],
			[
				"LC",
				"DEF",
				-40
			],
			[
				"CC",
				"DEF",
				-40
			]
		],
		"affinity": "+100% vs Swarm"
	},
	{
		"name": "Disorganized Harass",
		"duration": 18,
		"type": "Harass",
		"phase": "Skirmish",
		"eligibility": "HA < 0.5*ALL && ((LC >= 0.4*ALL && general.martial<12)  || LC >= 0.75*ALL)",
		"weight": 2,
		"modifiers": [
			[
				"1.5 ",
				" LC>=0.5*SKM || CC>=0.5*SKM"
			],
			[
				"1.5 ",
				" LC>=0.7*SKM || CC>=0.7*SKM"
			],
			[
				"1.5 ",
				" LC>=0.9*SKM || CC>=0.9*SKM"
			]
		],
		"effect": [
			[
				"LC",
				"ATK",
				100
			],
			[
				"CC",
				"ATK",
				100
			],
			[
				"HA",
				"ATK",
				-150
			],
			[
				"AR",
				"ATK",
				-150
			],
			[
				"LC",
				"DEF",
				-60
			],
			[
				"CC",
				"DEF",
				-60
			]
		],
		"affinity": "+100% vs Swarm"
	},
	{
		"name": "Volley Harass",
		"duration": 18,
		"type": "Harass",
		"phase": "Skirmish",
		"eligibility": "LC >= 0.01*ALL && AR>= 0.01*ALL && AR < 0.3*ALL &&LI >= 0.1*ALL",
		"weight": 4,
		"modifiers": [
			[
				"1.5 ",
				" general.martial>=8 && LI>=0.4*ALL&& AR>=0.2*SKM"
			],
			[
				"1.5 ",
				" general.martial>=12 && LI>=0.4*ALL && AR>=0.2*SKM"
			],
			[
				"1.5 ",
				" general.martial>=16 && LI>=0.4*ALL && AR>=0.2*SKM"
			]
		],
		"effect": [
			[
				"LC",
				"ATK",
				100
			],
			[
				"CC",
				"ATK",
				100
			],
			[
				"AR",
				"ATK",
				60
			],
			[
				"LI",
				"ATK",
				80
			],
			[
				"HA",
				"ATK",
				-180
			]
		],
		"affinity": "+100% vs Swarm"
	},
	{
		"name": "Volley",
		"duration": 18,
		"type": "Volley",
		"phase": "Skirmish",
		"eligibility": "AR >= 0.01*ALL && AR < 0.4*ALL",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial >= 8 && AR >= 0.1*SKM"
			],
			[
				"1.5 ",
				" general.martial >= 12 && AR>=0.2*SKM"
			],
			[
				"1.5 ",
				" general.martial>= 16 && AR >=0.3*SKM"
			]
		],
		"effect": [
			[
				"AR",
				"ATK",
				200
			],
			[
				"LC",
				"ATK",
				-150
			],
			[
				"CC",
				"ATK",
				-150
			],
			[
				"HA",
				"ATK",
				-150
			]
		],
		"affinity": "+100% vs Harass"
	},
	{
		"name": "Swarm Volley",
		"duration": 18,
		"type": "Volley",
		"phase": "Skirmish",
		"eligibility": "AR >= 0.01*ALL && HA >= 0.01 && (!forest && !woods && !mountain && !jungle && !marsh)",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial >= 8 && AR>=0.7*SKM && HA >= 0.3*SKM"
			],
			[
				"1.5 ",
				" general.martial >= 12 && AR>=0.6*SKM && HA >= 0.3*SKM"
			],
			[
				"1.5 ",
				" general.martial >= 16 && AR>=0.5*SKM && HA >= 0.3*SKM"
			]
		],
		"effect": [
			[
				"AR",
				"ATK",
				12
			],
			[
				"HA",
				"ATK",
				60
			],
			[
				"LC",
				"ATK",
				-180
			],
			[
				"CC",
				"ATK",
				-180
			]
		],
		"affinity": "+100% vs Harass"
	},
	{
		"name": "Swarm",
		"duration": 18,
		"type": "Swarm",
		"phase": "Skirmish",
		"eligibility": "HA >= 0.01*ALL && (!forest && !woods && !mountain && !jungle && !marsh) && (HA < 0.35*ALL || (HA<0.65*ALL && general.martial>=12))",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial >= 8 && HA >= 0.2*SKM"
			],
			[
				"1.5 ",
				" general.martial >= 12 && HA >= 0.3*SKM"
			],
			[
				"1.5 ",
				" general.martial >= 16 && HA >= 0.4*SKM"
			]
		],
		"effect": [
			[
				"HA",
				"ATK",
				100
			],
			[
				"LC",
				"ATK",
				-150
			],
			[
				"CC",
				"ATK",
				-150
			],
			[
				"AR",
				"ATK",
				-150
			]
		],
		"affinity": "+100% vs Volley"
	},
	{
		"name": "Disorganised Swarm",
		"duration": 18,
		"type": "Swarm",
		"phase": "Skirmish",
		"eligibility": "(!forest && !woods && !mountain && !jungle && !marsh) && ((HA>= 0.3*ALL && general.martial<12)||HA>=0.5*ALL)",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" HA >= 0.5*SKM"
			],
			[
				"1.5 ",
				" HA >= 0.7*SKM"
			],
			[
				"1.5 ",
				" HA >= 0.9*SKM"
			]
		],
		"effect": [
			[
				"HA",
				"ATK",
				50
			],
			[
				"HA",
				"DEF",
				-100
			],
			[
				"LC",
				"ATK",
				-150
			],
			[
				"CC",
				"ATK",
				-150
			],
			[
				"AR",
				"ATK",
				-150
			]
		]
	},
	{
		"name": "Harass Swarm",
		"duration": 18,
		"type": "Swarm",
		"phase": "Skirmish",
		"eligibility": "HA>=0.01*ALL && (!forest && !woods && !mountain && !jungle && !marsh) && (HA<0.35*ALL || (HA<0.65*ALL && general.martial>=12))",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial>=8 && HA>=0.2*SKM && (LC >= 0.3*SKM || CC >= 0.3*SKM)"
			],
			[
				"1.5 ",
				" general.martial>=12 && HA>=0.3*SKM && (LC >= 0.3*SKM || CC >= 0.3*SKM)"
			],
			[
				"1.5 ",
				" general.martial>=16 && HA>=0.4*SKM && (LC >= 0.3*SKM || CC >= 0.3*SKM)"
			]
		],
		"effect": [
			[
				"HA",
				"ATK",
				120
			],
			[
				"LC",
				"ATK",
				60
			],
			[
				"CC",
				"ATK",
				60
			],
			[
				"AR",
				"ATK",
				-180
			]
		],
		"affinity": "+100% vs Volley"
	},
	{
		"name": "Shieldwall",
		"duration": 12,
		"type": "Defensive",
		"phase": "Skirmish",
		"eligibility": "AR>=0.01*ALL && (HI>=0.2*ALL || LI>=0.2*ALL || PI>=0.2*ALL)",
		"weight": 3,
		"modifiers": [
			[
				"3 ",
				" general.martial>=12 && PI >= 0.3*MEL"
			],
			[
				"3 ",
				" general.martial>=12 && HI >= 0.3*MEL"
			],
			[
				"3 ",
				" general.martial>=16 && PI >= 0.3*MEL\r"
			],
			[
				"3 ",
				" general.martial>=16 && HI >= 0.3*MEL"
			]
		],
		"effect": [
			[
				"HI",
				"DEF",
				300
			],
			[
				"PI",
				"DEF",
				240
			],
			[
				"LI",
				"DEF",
				120
			],
			[
				"AR",
				"ATK",
				60
			],
			[
				"LC",
				"DEF",
				-50
			],
			[
				"CC",
				"DEF",
				-50
			],
			[
				"HC",
				"DEF",
				-50
			],
			[
				"HA",
				"DEF",
				-50
			]
		]
	},
	{
		"name": "Fient",
		"duration": 12,
		"type": "Defensive",
		"phase": "Skirmish",
		"eligibility": "LI >= 0.2*ALL && AR>=0.2*ALL",
		"weight": 3,
		"modifiers": [
			[
				"3 ",
				" general.martial >= 12 && LI >= 0.3*ALL"
			],
			[
				"3 ",
				" general.martial >= 12 && LI >= 0.4*ALL"
			]
		],
		"effect": [
			[
				"LI",
				"ATK",
				100
			],
			[
				"AR",
				"ATK",
				150
			],
			[
				"LI",
				"DEF",
				50
			],
			[
				"HI",
				"ATK",
				-50
			],
			[
				"HI",
				"DEF",
				-50
			],
			[
				"HC",
				"ATK",
				-50
			],
			[
				"HC",
				"DEF",
				-50
			]
		]
	},
	{
		"name": "Grey Wall",
		"duration": 12,
		"type": "Defensive",
		"phase": "Skirmish",
		"eligibility": "WE >= 0.025*ALL",
		"weight": 5,
		"modifiers": [
			[
				"3 ",
				" general.martial >= 12 && AR >= 0.3*SKM"
			],
			[
				"3 ",
				" general.martial >= 12 && WE >= 0.05*ALL"
			],
			[
				"3 ",
				" general.martial >= 12 && WE >= 0.075 * ALL"
			]
		],
		"effect": [
			[
				"HI",
				"DEF",
				300
			],
			[
				"PI",
				"DEF",
				240
			],
			[
				"LI",
				"DEF",
				120
			],
			[
				"WE",
				"DEF",
				150
			],
			[
				"AR",
				"ATK",
				120
			],
			[
				"AR",
				"DEF",
				60
			],
			[
				"LC",
				"DEF",
				-50
			],
			[
				"HC",
				"DEF",
				-50
			],
			[
				"HA",
				"DEF",
				-50
			]
		]
	},
	{
		"name": "Prepare",
		"duration": 1,
		"type": "Defensive",
		"phase": "Skirmish",
		"weight": 1,
		"modifiers": [
			[
				"0.1 ",
				" general.martial>=8"
			],
			[
				"0.1 ",
				" general.martial>=12"
			],
			[
				"0.1 ",
				" general.martial >= 16"
			]
		]
	},
	{
		"name": "Charge on Undefended",
		"duration": 2,
		"type": "Charge",
		"phase": "Skirmish",
		"eligibility": "days==3",
		"weight": 1
	},
	{
		"name": "Charge of Opportunity",
		"duration": 6,
		"type": "Charge",
		"phase": "Skirmish",
		"eligibility": "days==10",
		"weight": 3,
		"effect": [
			[
				"HC",
				"ATK",
				300
			],
			[
				"HA",
				"ATK",
				300
			],
			[
				"HI",
				"ATK",
				120
			]
		]
	},
	{
		"name": "Charge",
		"duration": 6,
		"type": "Charge",
		"phase": "Skirmish",
		"eligibility": "days==10",
		"weight": 10,
		"modifiers": [
			[
				"3 ",
				" general.martial >= 12 && HA >= 0.3*SKM"
			],
			[
				"3 ",
				" general.martial >= 12 && HI >= 0.1*MEL"
			],
			[
				"3 ",
				" general.martial >= 12 && HC >= 0.1*MEL"
			]
		],
		"effect": [
			[
				"HC",
				"ATK",
				300
			],
			[
				"HA",
				"ATK",
				300
			],
			[
				"HI",
				"ATK",
				120
			]
		]
	},
	{
		"name": "Crushing Charge",
		"duration": 10,
		"type": "Charge",
		"phase": "Skirmish",
		"eligibility": "days==10 && (WE>=0.01*ALL || HCA >= 0.2)",
		"weight": 2,
		"modifiers": [
			[
				"3 ",
				" general.martial >= 8 && WE >= 0.04*ALL"
			],
			[
				"3 ",
				" general.martial >= 12 && WE >= 0.03 *ALL"
			],
			[
				"3 ",
				" general.martial >= 18 && WE >= 0.02*ALL"
			],
			[
				"8 ",
				" general.martial >= 18 && HC >= 0.4*ALL"
			]
		],
		"effect": [
			[
				"HC",
				"ATK",
				175
			],
			[
				"WE",
				"ATK",
				250
			]
		]
	},
    {
    "name":"Melee",
    "duration":1,
    "type":"Melee",
    "phase":"Melee",
    "eligibility":true,
    "weight":0
  },
	{
		"name": "Wait",
		"duration": 1,
		"type": "Stand Fast",
		"phase": "Melee",
		"weight": 1
	},
	{
		"name": "Advance",
		"duration": 18,
		"type": "Advance",
		"phase": "Melee",
		"eligibility": "HI>=0.01*ALL",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial >= 8 && HI >= 0.7*MEL"
			],
			[
				"1.5 ",
				" general.martial >= 12 && HI >= 0.6 * MEL"
			],
			[
				"1.5 ",
				" general.martial >= 16 && HI >= 0.5 * MEL"
			]
		],
		"effect": [
			[
				"HI",
				"ATK",
				300
			],
			[
				"HC",
				"ATK",
				-150
			],
			[
				"PI",
				"ATK",
				-150
			]
		],
		"affinity": "+300% vs Stand Fast"
	},
	{
		"name": "Awesome Advance",
		"duration": 18,
		"type": "Advance",
		"phase": "Melee",
		"eligibility": "HI>=0.01*ALL && HCA>=0.01*ALL",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial >= 9 && HI >= 0.7*MEL && HC >= 0.3 *MEL"
			],
			[
				"1.5 ",
				" general.martial >= 13 && HI >= 0.6*MEL && HC >= 0.3*MEL "
			],
			[
				"1.5 ",
				" general.martial >= 17 && HI >= 0.5*MEL && HC >= 0.3*MEL"
			]
		],
		"effect": [
			[
				"HI",
				"ATK",
				240
			],
			[
				"HC",
				"ATK",
				60
			],
			[
				"PI",
				"ATK",
				-180
			]
		],
		"affinity": "+300% vs Stand Fast"
	},
	{
		"name": "Stand Fast",
		"duration": 18,
		"type": "Stand Fast",
		"phase": "Melee",
		"eligibility": "PI>=0.01*ALL && forest",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial >= 8 && PI >= 0.7*MEL"
			],
			[
				"1.5 ",
				" general.martial >= 12 && PI >= 0.6*MEL"
			],
			[
				"1.5 ",
				" general.martial >= 16 && PI >= 0.5*MEL"
			]
		],
		"effect": [
			[
				"PI",
				"ATK",
				300
			],
			[
				"HC",
				"ATK",
				-150
			],
			[
				"HI",
				"ATK",
				-150
			]
		],
		"affinity": "+300% vs Charge"
	},
	{
		"name": "Slow Advance",
		"duration": 18,
		"type": "Stand Fast",
		"phase": "Melee",
		"eligibility": "PI>=0.01*ALL && HI >= 0.01*ALL",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial >= 8 && PI >= 0.7*MEL && HI >= 0.3*MEL"
			],
			[
				"1.5 ",
				" general.martial >= 12 && PI >= 0.6*MEL && HI >= 0.3*MEL"
			],
			[
				"1.5 ",
				" general.martial >= 16 && PI >= 0.5*MEL && HI >= 0.3*MEL"
			]
		],
		"effect": [
			[
				"PI",
				"ATK",
				240
			],
			[
				"HI",
				"ATK",
				60
			],
			[
				"HC",
				"ATK",
				-180
			]
		],
		"affinity": "+300% vs Charge"
	},
	{
		"name": "Powerful Charge",
		"duration": 18,
		"type": "Charge",
		"phase": "Melee",
		"eligibility": "HCA>=0.01*ALL",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial >= 8 && HC >= 0.7*MEL"
			],
			[
				"1.5 ",
				" general.martial >= 12 && HC >= 0.6*MEL"
			],
			[
				"1.5 ",
				" general.martial >= 16 && HC >= 0.5*MEL"
			]
		],
		"effect": [
			[
				"HC",
				"ATK",
				300
			],
			[
				"HI",
				"ATK",
				-150
			],
			[
				"PI",
				"ATK",
				-150
			]
		],
		"affinity": "+300% vs Advance"
	},
	{
		"name": "Overwhelming Charge",
		"duration": 18,
		"type": "Charge",
		"phase": "Melee",
		"eligibility": "HCA>=0.01*ALL && PI>=0.01*ALL",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial >= 9 && HC >= 0.7*MEL && PI >= 0.3*MEL"
			],
			[
				"1.5 ",
				" general.martial >= 13 && HC >= 0.6*MEL && PI >= 0.3*MEL"
			],
			[
				"1.5 ",
				" general.martial >= 17 && HC >= 0.5*MEL && PI >= 0.3*MEL"
			]
		],
		"effect": [
			[
				"HC",
				"ATK",
				240
			],
			[
				"PI",
				"ATK",
				60
			],
			[
				"HI",
				"ATK",
				-180
			]
		],
		"affinity": "+300% vs Advance"
	},
	{
		"name": "Barrage",
		"duration": 6,
		"type": "Defensive",
		"phase": "Melee",
		"eligibility": "AR>=0.2*ALL",
		"weight": 3,
		"modifiers": [
			[
				"3 ",
				" general.martial >= 12 && AR >= 0.3*SKM"
			],
			[
				"3 ",
				" general.martial >= 12 && HA >= 0.3*SKM"
			]
		],
		"effect": [
			[
				"AR",
				"ATK",
				240
			],
			[
				"HA",
				"ATK",
				240
			]
		]
	},
	{
		"name": "Raid",
		"duration": 6,
		"type": "Defensive",
		"phase": "Melee",
		"eligibility": "LCA>=0.2*ALL && HA < 0.5*ALL",
		"weight": 3,
		"modifiers": [
			[
				"3 ",
				" general.martial >= 12 && (LC >= 0.3*ALL || CC >= 0.3*ALL)"
			],
			[
				"3 ",
				" general.martial >= 12 && LI >= 0.3*ALL"
			]
		],
		"effect": [
			[
				"LC",
				"ATK",
				240
			],
			[
				"CC",
				"ATK",
				240
			],
			[
				"LI",
				"ATK",
				240
			]
		]
	},
	{
		"name": "Force Back",
		"duration": 24,
		"type": "Stand Fast",
		"phase": "Melee",
		"eligibility": "WE >= 0.005*ALL || PI >= 0.25*ALL || HI >= 0.25*ALL",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial >= 8 && (PI >= 0.7*MEL || HI >= 0.3*MEL || WE>=0.04*ALL)"
			],
			[
				"1.5 ",
				" general.martial >= 12 && (PI >= 0.6*MEL || HI >= 0.3*MEL || WE>=0.02*ALL)"
			],
			[
				"1.5 ",
				" general.martial >= 16 && (PI >= 0.5*MEL || HI >= 0.3*MEL || WE>=0.01*ALL)"
			]
		],
		"effect": [
			[
				"PI",
				"ATK",
				240
			],
			[
				"HI",
				"ATK",
				160
			],
			[
				"WE",
				"ATK",
				120
			],
			[
				"HC",
				"ATK",
				-180
			],
			[
				"AR",
				"ATK",
				-100
			],
			[
				"LC",
				"DEF",
				-20
			],
			[
				"HA",
				"DEF",
				-100
			]
		],
		"affinity": "+300% vs Charge"
	},
	{
		"name": "Elephant Trample",
		"duration": 12,
		"type": "Advance",
		"phase": "Melee",
		"eligibility": "WE >= 0.01*ALL",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial >= 8 && (PI >= 0.7*MEL || HI >= 0.3*MEL || WE >= 0.04*ALL || HC >= 0.25*ALL)"
			],
			[
				"1.5 ",
				" general.martial >= 12 && (PI >= 0.6*MEL || HI >= 0.3*MEL || WE >= 0.02*ALL || HC >= 0.25*ALL)"
			],
			[
				"1.5 ",
				" general.martial >= 16 && (PI >= 0.5*MEL || HI >= 0.3*MEL || WE >= 0.01*ALL || HC >= 0.25*ALL)"
			]
		],
		"effect": [
			[
				"WE",
				"ATK",
				250
			],
			[
				"WE",
				"DEF",
				-40
			],
			[
				"HC",
				"ATK",
				200
			],
			[
				"HI",
				"ATK",
				200
			],
			[
				"PI",
				"ATK",
				200
			],
			[
				"LC",
				"ATK",
				50
			],
			[
				"LC",
				"DEF",
				-20
			],
			[
				"AR",
				"ATK",
				-100
			],
			[
				"HA",
				"ATK",
				-100
			]
		]
	},
	{
		"name": "Pursue",
		"duration": 15,
		"type": "Charge",
		"phase": "Pursue",
		"weight": 10
	},
	{
		"name": "Reckless Charge\n(Worth or Aggressive Leader)",
		"duration": 6,
		"type": "Charge",
		"phase": "Skirmish",
		"eligibility": "days==10 && (general.wroth || general.aggressive)",
		"weight": 10,
		"modifiers": [
			[
				"3 ",
				" general.martial < 7 && HA >= 0.3&SKM"
			],
			[
				"3 ",
				" general.martial < 7 && HC >= 0.1&MEL"
			],
			[
				"3 ",
				" general.martial < 7 && HI >= 0.1&MEL"
			]
		],
		"effect": [
			[
				"HC",
				"ATK",
				120
			],
			[
				"HA",
				"ATK",
				120
			],
			[
				"HI",
				"ATK",
				60
			],
			[
				"HI",
				"DEF",
				-30
			],
			[
				"HC",
				"DEF",
				-50
			],
			[
				"HA",
				"DEF",
				-50
			]
		]
	},
	{
		"name": "Timid Advance\n(Craven or Organizer)",
		"duration": 18,
		"type": "Advance",
		"phase": "Melee",
		"eligibility": "HI >= 0.01*ALL && (general.craven || general.organizer)",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial < 7 && HI >= 0.5*MEL"
			]
		],
		"effect": [
			[
				"PI",
				"ATK",
				120
			],
			[
				"HC",
				"ATK",
				-210
			],
			[
				"HI",
				"ATK",
				-210
			]
		],
		"affinity": "+120% vs Stand Fast"
	},
	{
		"name": "Confused Orders\n(Lisp or Stutter)",
		"duration": 18,
		"type": "Volley",
		"phase": "Skirmish",
		"eligibility": "AR>=0.01*ALL && (general.lisp || general.stutter)",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial < 7 && AR >= 0.5*SKM"
			]
		],
		"effect": [
			[
				"AR",
				"ATK",
				-120
			],
			[
				"HA",
				"ATK",
				-120
			]
		],
		"affinity": "-120% vs Charge"
	},
	{
		"name": "Hesitant Commander\n(Slothful or Shy)",
		"duration": 18,
		"type": "Stand Fast",
		"phase": "Melee",
		"eligibility": "general.slothful || general.shy",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial < 7"
			]
		],
		"effect": [
			[
				"HC",
				"ATK",
				-150
			],
			[
				"HI",
				"ATK",
				-150
			]
		]
	},
	{
		"name": "Charging Own Skirmishers\n(Cruel)",
		"duration": 6,
		"type": "Charge",
		"phase": "Skirmish",
		"eligibility": "days==10 && general.cruel",
		"weight": 10,
		"modifiers": [
			[
				"3 ",
				" general.martial < 10 && HC >= 0.1*MEL"
			],
			[
				"3 ",
				" general.martial < 10 && (LC >= 0.1*SKM || CC >= 0.1*SKM)"
			]
		],
		"effect": [
			[
				"HC",
				"ATK",
				300
			],
			[
				"LC",
				"ATK",
				180
			],
			[
				"CC",
				"ATK",
				180
			],
			[
				"HA",
				"DEF",
				-30
			],
			[
				"AR",
				"DEF",
				-50
			],
			[
				"HA",
				"ATK",
				-120
			],
			[
				"AR",
				"ATK",
				-420
			]
		]
	},
	{
		"name": "Inspired Defense\n(Inspiring Leader or Defender)",
		"duration": 12,
		"type": "Defensive",
		"phase": "Skirmish",
		"eligibility": "general.inspiring || general.defensive",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial >= 14"
			],
			[
				"3 ",
				" general.martial >= 14 && general.defensive"
			]
		],
		"effect": [
			[
				"HC",
				"DEF",
				150
			],
			[
				"HI",
				"DEF",
				150
			],
			[
				"LI",
				"DEF",
				150
			],
			[
				"LC",
				"DEF",
				150
			],
			[
				"CC",
				"DEF",
				150
			],
			[
				"AR",
				"DEF",
				150
			],
			[
				"HA",
				"DEF",
				150
			],
			[
				"PI",
				"DEF",
				150
			],
			[
				"WE",
				"DEF",
				150
			]
		],
		"affinity": "+120% vs Charge\n\n+60% vs Advance"
	},
	{
		"name": "Heroic Countercharge\n(Aggressive Leader, Brave, or Cavalry Leader",
		"duration": 18,
		"type": "Charge",
		"phase": "Melee",
		"eligibility": "HCA>=0.01*ALL && LCA >= 0.01*ALL && (general.aggressive || general.brave || general.cavalry)",
		"weight": 3,
		"modifiers": [
			[
				"3 ",
				" general.martial >= 14 && HC >= 0.1*MEL"
			]
		],
		"effect": [
			[
				"HC",
				"ATK",
				360
			],
			[
				"LC",
				"ATK",
				360
			],
			[
				"CC",
				"ATK",
				360
			],
			[
				"HI",
				"ATK",
				60
			],
			[
				"PI",
				"ATK",
				60
			]
		],
		"affinity": "+300% vs Charge"
	},
	{
		"name": "Clever Ambush\n(Trickster or Quick)",
		"duration": 18,
		"type": "Stand Fast",
		"phase": "Melee",
		"eligibility": "LCA >= 0.1*ALL && LI >= 0.1*ALL && (general.trickster || general.quick || general.genius || general.shrewd) &&(forest|| hills||mountain)",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial >= 14 && (LC >= 0.2*ALL || CC>= 0.2*ALL) && LI >= 0.2*ALL"
			],
			[
				"3 ",
				" general.martial>=14 && general.trickster && (LC >= 0.2*ALL || CC >= 0.2*ALL) && LI>=0.2*ALL"
			]
		],
		"effect": [
			[
				"LC",
				"ATK",
				240
			],
			[
				"CC",
				"ATK",
				240
			],
			[
				"LI",
				"ATK",
				120
			],
			[
				"HA",
				"ATK",
				120
			],
			[
				"HA",
				"ATK",
				120
			]
		],
		"affinity": "+300% vs Advance"
	},
	{
		"name": "Religious Fervour\n(Possessed, or Inspiring Leader and Zealous)",
		"duration": 18,
		"type": "Advance",
		"phase": "Melee",
		"eligibility": "general.possessed || (general.zealous && general.inspiring)",
		"weight": 3,
		"modifiers": [
			[
				"3 ",
				" general.martial >= 14 && general.possessed"
			]
		],
		"effect": [
			[
				"HC",
				"ATK",
				150
			],
			[
				"HI",
				"ATK",
				150
			],
			[
				"LI",
				"ATK",
				150
			],
			[
				"LC",
				"ATK",
				150
			],
			[
				"CC",
				"ATK",
				150
			],
			[
				"AR",
				"ATK",
				150
			],
			[
				"HA",
				"ATK",
				150
			],
			[
				"PI",
				"ATK",
				150
			],
			[
				"WE",
				"ATK",
				150
			]
		]
	},
	{
		"name": "Retreat and Ambush\n(Altaic)",
		"duration": 6,
		"type": "Defensive",
		"phase": "Melee",
		"eligibility": "general.cgroup=='altaic' && HA>=0.2*ALL (!forest && !woods && !mountain && !jungle && !marsh)",
		"weight": 2,
		"modifiers": [
			[
				"2 ",
				" general.martial >= 10 && HA >= 0.3*SKM"
			],
			[
				"2 ",
				" general.martial >=4 && HA >= 0.4*SKM"
			]
		],
		"effect": [
			[
				"HA",
				"ATK",
				200
			],
			[
				"LC",
				"ATK",
				120
			],
			[
				"AR",
				"ATK",
				100
			]
		]
	},
	{
		"name": "Berserker Charge\n(Scandinavian)",
		"duration": 18,
		"type": "Charge",
		"phase": "Melee",
		"eligibility": "general.cgroup=='northgermanic' && HI>=0.01*ALL",
		"weight": 3,
		"modifiers": [
			[
				"3 ",
				" general.martial >= 10 && HI >= 0.3*MEL"
			]
		],
		"effect": [
			[
				"HI",
				"ATK",
				360
			],
			[
				"LI",
				"ATK",
				120
			],
			[
				"HI",
				"DEF",
				-50
			],
			[
				"LI",
				"DEF",
				-30
			]
		],
		"affinity": "+100% vs Stand Fast"
	},
	{
		"name": "Schiltron Formation\n(Scottish)",
		"duration": 18,
		"type": "Stand Fast",
		"phase": "Melee",
		"eligibility": "general.culture=='scottish' && PI>=0.01*ALL",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial >= 8 && PI >= 0.6*MEL && HI >= 0.3*MEL"
			],
			[
				"1.5 ",
				" general.martial >= 12 && PI >= 0.5*MEL && HI >= 0.3*MEL"
			],
			[
				"1.5 ",
				" general.martial >= 16 && PI >= 0.4*MEL && HI >= 0.2*MEL"
			]
		],
		"effect": [
			[
				"PI",
				"DEF",
				360
			],
			[
				"PI",
				"ATK",
				240
			],
			[
				"HI",
				"DEF",
				240
			],
			[
				"LI",
				"DEF",
				120
			],
			[
				"AR",
				"ATK",
				60
			],
			[
				"LC",
				"DEF",
				-40
			],
			[
				"HC",
				"DEF",
				-40
			],
			[
				"HA",
				"DEF",
				-40
			]
		],
		"affinity": "+300% vs Charge"
	},
	{
		"name": "Pike Column Advance\n(Italian)",
		"duration": 18,
		"type": "Advance",
		"phase": "Melee",
		"eligibility": "general.culture=='italian' && PI>=0.01*ALL",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial >= 8 && PI >= 0.6*MEL"
			],
			[
				"1.5 ",
				" general.martial >=12 && PI >= 0.5*MEL"
			],
			[
				"1.5 ",
				" general.martial >= 16 && PI >= 0.4*MEL"
			]
		],
		"effect": [
			[
				"PI",
				"ATK",
				300
			],
			[
				"HI",
				"ATK",
				120
			],
			[
				"HC",
				"ATK",
				60
			]
		],
		"affinity": "+300% vs Stand Fast"
	},
	{
		"name": "Massive Longbow Volley\n(English or Welsh)",
		"duration": 18,
		"type": "Volley",
		"phase": "Skirmish",
		"eligibility": "(general.culture=='english' || general.culture=='welsh') && AR>=0.01*ALL",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial >= 8 && AR >= 0.6*SKM"
			],
			[
				"1.5 ",
				" general.martial >= 12 && AR >= 0.5*SKM"
			],
			[
				"1.5 ",
				" general.martial >= 16 && AR >= 0.4*SKM"
			]
		],
		"effect": [
			[
				"AR",
				"ATK",
				350
			]
		],
		"affinity": "100% vs Harass, +100% vs Charge"
	},
	{
		"name": "Couched Lance Charge\n(Frankish, Occitan, Breton,\nNorman, or German)",
		"duration": 18,
		"type": "Charge",
		"phase": "Melee",
		"eligibility": "(general.culture=='french'||general.culture=='occitan'|| general.culture=='norman'||general.culture=='german'|| general.culture=='breton')&&HCA>=0.01*ALL",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial >= 8 && HC >= 0.6*MEL"
			],
			[
				"1.5 ",
				" general.martial >= 12 && HC >= 0.5*MEL"
			],
			[
				"1.5 ",
				" general.martial >= 16 && HC >= 0.4*MEL"
			]
		],
		"effect": [
			[
				"HC",
				"ATK",
				420
			],
			[
				"PI",
				"ATK",
				60
			],
			[
				"HI",
				"ATK",
				-60
			]
		],
		"affinity": "+300% vs Advance"
	},
	{
		"name": "Mountain Ambush",
		"duration": 18,
		"type": "Stand Fast",
		"phase": "Melee",
		"eligibility": "general.cgroup=='tibetan' && general.martial>=9 && LI>=0.1*ALL&& (hills || mountain)",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" LI >= 0.2*ALL"
			],
			[
				"2 ",
				" general.martial >= 14"
			],
			[
				"3 ",
				" general.trickster"
			]
		],
		"effect": [
			[
				"LC",
				"ATK",
				240
			],
			[
				"LI",
				"ATK",
				150
			],
			[
				"HI",
				"ATK",
				125
			],
			[
				"HA",
				"ATK",
				150
			],
			[
				"AR",
				"ATK",
				120
			]
		],
		"affinity": "+300% vs Advance"
	},
	{
		"name": "Desert Ambush\n(Arabic)",
		"duration": 18,
		"type": "Stand Fast",
		"phase": "Melee",
		"eligibility": "general.cgroup=='arabic' && desert && LCA>=0.1*ALL && LI >= 0.1*ALL",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial >= 10 && (LC >= 0.2*ALL || CC >= 0.2*ALL) && LI >= 0.2*ALL"
			],
			[
				"3 ",
				" general.martial >= 10 && general.trickster && (LC >= 0.2*ALL || CC >= 0.2*ALL) & LI >= 0.2*ALL"
			]
		],
		"effect": [
			[
				"LC",
				"ATK",
				180
			],
			[
				"CC",
				"ATK",
				240
			],
			[
				"LI",
				"ATK",
				240
			],
			[
				"HA",
				"ATK",
				120
			],
			[
				"AR",
				"ATK",
				120
			]
		],
		"affinity": "+300% vs Advance"
	},
	{
		"name": "Embolon Charge Formation\n(Byzantine)",
		"duration": 18,
		"type": "Charge",
		"phase": "Melee",
		"eligibility": "general.cgroup=='byzantine' && HCA>=0.01",
		"weight": 3,
		"modifiers": [
			[
				"1.5 ",
				" general.martial >= 8 && HC >= 0.6*MEL"
			],
			[
				"1.5 ",
				" general.martial >= 12 && HC >= 0.5*MEL"
			],
			[
				"1.5 ",
				" general.martial >= 16 && HC >= 0.4*MEL"
			]
		],
		"effect": [
			[
				"HC",
				"ATK",
				240
			],
			[
				"LC",
				"ATK",
				180
			],
			[
				"PI",
				"ATK",
				60
			],
			[
				"HI",
				"ATK",
				-120
			]
		],
		"affinity": "+300% vs Advance"
	}
];

export default TACTICS;