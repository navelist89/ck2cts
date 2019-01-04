var RETINUES = {
	"Shock":{
		"name": "Shock",
		"composition": {
			"HI": 200,
			"AR": 50
		},
		"cap": 700,
		"cost": 98,
		"reinforcecost": 2.1,
		"upkeep": 0.175,
		"effect": [
			[
				"AR",
				"ATK",
				20
			],
			[
				"HI",
				"ATK",
				10
			],
			[
				"HI",
				"DEF",
				10
			]
		]
	},
	"Defence":{
		"name": "Defence",
		"composition": {
			"PI": 250,
			"AR": 50
		},
		"cap": 725,
		"cost": 101,
		"reinforcecost": 2.175,
		"upkeep": 0.18125,
		"effect": [
			[
				"AR",
				"DEF",
				20
			],
			[
				"PI",
				"ATK",
				20
			],
			[
				"PI",
				"DEF",
				40
			]
		]
	},
	"Cavalry":{
		"name": "Cavalry",
		"composition": {
			"LC": 200,
			"HC": 50
		},
		"cap": 900,
		"cost": 126,
		"reinforcecost": 2.7,
		"upkeep": 0.225,
		"effect": [
			[
				"LC",
				"ATK",
				20
			],
			[
				"LC",
				"DEF",
				20
			]
		]
	},
	"Skirmish":{
		"name": "Skirmish",
		"composition": {
			"HI": 50,
			"AR": 200
		},
		"cap": 550,
		"cost": 77,
		"reinforcecost": 1.65,
		"upkeep": 0.1375,
		"effect": [
			[
				"AR",
				"ATK",
				20
			],
			[
				"AR",
				"DEF",
				10
			],
			[
				"HI",
				"DEF",
				10
			]
		]
	},
	"Light Skirmish":{
		"name": "Light Skirmish",
		"composition": {
			"LI": 400,
			"AR": 150
		},
		"cap": 580,
		"cost": 81,
		"reinforcecost": 1.74,
		"upkeep": 0.145,
		"effect": [
			[
				"AR",
				"ATK",
				20
			],
			[
				"AR",
				"DEF",
				10
			],
			[
				"LI",
				"DEF",
				20
			],
			[
				"LI",
				"MRL",
				20
			]
		]
	}
};

export default RETINUES;