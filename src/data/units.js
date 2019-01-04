const UNITS = {
	"LI": {
      
		"morale": 2,
        "additionals":0,
      "amount":0,
        
		"maintenance": 0.7,
		"attack": {
			"Skirmish": 1,
			"Melee": 1,
			"Pursue": 2
		},
		"defense": {
			"Skirmish": 2,
			"Melee": 1,
			"Pursue": 2.5
		}
	},
	"HI": {
		"morale": 4,
      "additionals":0,
      "amount":0,
		"maintenance": 3,
		"attack": {
			"Skirmish": 0.25,
			"Melee": 6,
			"Pursue": 1
		},
		"defense": {
			"Skirmish": 3,
			"Melee": 4,
			"Pursue": 4
		}
	},
	"PI": {
		"morale": 6,
      "additionals":0,
      "amount":0,
		"maintenance": 2.5,
		"attack": {
			"Skirmish": 0.1,
			"Melee": 4.5,
			"Pursue": 0.2
		},
		"defense": {
			"Skirmish": 4,
			"Melee": 4.5,
			"Pursue": 2
		}
	},
	"LC": {
		"morale": 4,
      "additionals":0,
      "amount":0,
		"maintenance": 3,
		"attack": {
			"Skirmish": 2,
			"Melee": 3,
			"Pursue": 6
		},
		"defense": {
			"Skirmish": 4.5,
			"Melee": 3,
			"Pursue": 4.5
		}
	},
	"HC": {
		"morale": 10,
      "additionals":0,
      "amount":0,
		"maintenance": 6,
		"attack": {
			"Skirmish": 0.5,
			"Melee": 10,
			"Pursue": 4
		},
		"defense": {
			"Skirmish": 4,
			"Melee": 5,
			"Pursue": 7.5
		}
	},
	"AR": {
		"morale": 1,
      "additionals":0,
      "amount":0,
		"maintenance": 2,
		"attack": {
			"Skirmish": 2,
			"Melee": 1,
			"Pursue": 2
		},
		"defense": {
			"Skirmish": 1.5,
			"Melee": 1.5,
			"Pursue": 2.25
		}
	},
	"HA": {
		"morale": 3,
      "additionals":0,
      "amount":0,
		"maintenance": 4,
		"attack": {
			"Skirmish": 4,
			"Melee": 3,
			"Pursue": 7
		},
		"defense": {
			"Skirmish": 4,
			"Melee": 4,
			"Pursue": 4.5
		}
	},
	"WE": {
		"morale": 15,
      "additionals":0,
      "amount":0,
		"maintenance": 20,
		"attack": {
			"Skirmish": 0.25,
			"Melee": 25,
			"Pursue": 0.25
		},
		"defense": {
			"Skirmish": 5,
			"Melee": 15,
			"Pursue": 2
		}
	},
	"CC": {
		"morale": 5,
      "additionals":0,
      "amount":0,
		"maintenance": 3,
		"attack": {
			"Skirmish": 4,
			"Melee": 7,
			"Pursue": 2
		},
		"defense": {
			"Skirmish": 4.5,
			"Melee": 3,
			"Pursue": 2.5
		}
	}
};

export default UNITS;