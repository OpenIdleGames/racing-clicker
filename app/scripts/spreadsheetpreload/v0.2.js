// This is an automatically generated file! Do not edit!
// Edit the source at: https://docs.google.com/spreadsheets/d/1JhTtmHFy3E1VQ7v4Ov4IIut3X5bb7FpyivQUOzYYYL4/pubhtml
// Generated by Gruntfile.js:preloadSpreadsheet
// key: v0.2
'use strict';

try {
  angular.module('swarmSpreadsheetPreload');
  //console.log('secondv0.2');
}
catch (e) {
  // module not yet initialized by some other module, we're the first
  angular.module('swarmSpreadsheetPreload', []);
  //console.log('firstv0.2');
}
angular.module('swarmSpreadsheetPreload').value('spreadsheetPreload-v0.2', {
  "achievements": {
    "column_names": [
      "name",
      "label",
      "description",
      "longdesc",
      "requires.event",
      "requires.unittype",
      "requires.upgradetype",
      "requires.val",
      "points",
      "visible.unittype",
      "visible.upgradetype",
      "visible.val"
    ],
    "elements": [
      {
        "description": "buy your first car",
        "label": "driver",
        "longdesc": "",
        "name": "cars1",
        "points": 10,
        "requires.event": "",
        "requires.unittype": "car",
        "requires.upgradetype": "",
        "requires.val": 1,
        "visible.unittype": "car",
        "visible.upgradetype": "",
        "visible.val": 0
      },
      {
        "description": "race for a first time",
        "label": "a good start",
        "longdesc": "",
        "name": "race1",
        "points": 10,
        "requires.event": "",
        "requires.unittype": "races",
        "requires.upgradetype": "",
        "requires.val": 1,
        "visible.unittype": "car",
        "visible.upgradetype": "",
        "visible.val": 0
      },
      {
        "description": "buy your first upgrade",
        "label": "improvements is the key",
        "longdesc": "",
        "name": "upgrade1",
        "points": 10,
        "requires.event": "",
        "requires.unittype": "upgrade",
        "requires.upgradetype": "",
        "requires.val": 1,
        "visible.unittype": "car",
        "visible.upgradetype": "",
        "visible.val": 0
      },
      {
        "description": "hire your first driver",
        "label": "get help",
        "longdesc": "",
        "name": "driver1",
        "points": 10,
        "requires.event": "",
        "requires.unittype": "driver",
        "requires.upgradetype": "",
        "requires.val": 1,
        "visible.unittype": "driver",
        "visible.upgradetype": "",
        "visible.val": 0
      }
    ],
    "name": "achievements"
  },
  "unittypes": {
    "column_names": [
      "name",
      "label",
      "plural",
      "verb",
      "verbone",
      "verbing",
      "tab",
      "init",
      "description",
      "lol",
      "disabled",
      "unbuyable",
      "cost.unittype",
      "cost.val",
      "prod.unittype",
      "prod.val",
      "showparent",
      "warnfirst.unittype",
      "warnfirst.val",
      "warnfirst.text",
      "requires.unittype",
      "requires.upgradetype",
      "requires.val",
      "requires.op",
      "effect.type",
      "effect.unittype",
      "effect.val",
      "effect.stat",
      "effect.val2",
      "effect.unittype2",
      "effect.val3"
    ],
    "elements": [
      {
        "cost.unittype": "",
        "cost.val": "",
        "description": "-",
        "disabled": "TRUE",
        "effect.stat": "",
        "effect.type": "",
        "effect.unittype": "",
        "effect.unittype2": "",
        "effect.val": "",
        "effect.val2": "",
        "effect.val3": "",
        "init": "",
        "label": "buck",
        "lol": "Just some fake money to use the built-in calculations",
        "name": "fake_money",
        "plural": "bucks",
        "prod.unittype": "",
        "prod.val": "",
        "requires.op": "",
        "requires.unittype": "fake_money",
        "requires.upgradetype": "",
        "requires.val": 0,
        "showparent": "",
        "tab": "",
        "unbuyable": "",
        "verb": "",
        "verbing": "",
        "verbone": "",
        "warnfirst.text": "",
        "warnfirst.unittype": "",
        "warnfirst.val": ""
      },
      {
        "cost.unittype": "",
        "cost.val": "",
        "description": "The driving force",
        "disabled": "TRUE",
        "effect.stat": "",
        "effect.type": "",
        "effect.unittype": "",
        "effect.unittype2": "",
        "effect.val": "",
        "effect.val2": "",
        "effect.val3": "",
        "init": "",
        "label": "driving",
        "lol": "Stop digging around in the source code, you dirty cheater.",
        "name": "driving",
        "plural": "drivings",
        "prod.unittype": "fake_money",
        "prod.val": 1,
        "requires.op": "",
        "requires.unittype": "driving",
        "requires.upgradetype": "",
        "requires.val": 0,
        "showparent": "",
        "tab": "",
        "unbuyable": "TRUE",
        "verb": "",
        "verbing": "",
        "verbone": "",
        "warnfirst.text": "",
        "warnfirst.unittype": "",
        "warnfirst.val": ""
      },
      {
        "cost.unittype": "",
        "cost.val": "",
        "description": "Money buys almost anything. Earn cash in races, upgrade your car, buy new cars and hire drivers to race on your behalf.",
        "disabled": "",
        "effect.stat": "",
        "effect.type": "",
        "effect.unittype": "",
        "effect.unittype2": "",
        "effect.val": "",
        "effect.val2": "",
        "effect.val3": "",
        "init": 200,
        "label": "buck",
        "lol": "",
        "name": "money",
        "plural": "bucks",
        "prod.unittype": "",
        "prod.val": "",
        "requires.op": "",
        "requires.unittype": "money",
        "requires.upgradetype": "",
        "requires.val": 0,
        "showparent": "",
        "tab": "money",
        "unbuyable": "TRUE",
        "verb": "earn",
        "verbing": "earning",
        "verbone": "earns",
        "warnfirst.text": "",
        "warnfirst.unittype": "",
        "warnfirst.val": ""
      },
      {
        "cost.unittype": "",
        "cost.val": "",
        "description": "You need cars to race",
        "disabled": "",
        "effect.stat": "",
        "effect.type": "",
        "effect.unittype": "",
        "effect.unittype2": "",
        "effect.val": "",
        "effect.val2": "",
        "effect.val3": "",
        "init": "",
        "label": "car",
        "lol": "",
        "name": "car",
        "plural": "cars",
        "prod.unittype": "",
        "prod.val": "",
        "requires.op": "",
        "requires.unittype": "car",
        "requires.upgradetype": "",
        "requires.val": 0,
        "showparent": "",
        "tab": "car",
        "unbuyable": "TRUE",
        "verb": "",
        "verbing": "",
        "verbone": "",
        "warnfirst.text": "",
        "warnfirst.unittype": "",
        "warnfirst.val": ""
      },
      {
        "cost.unittype": "",
        "cost.val": "",
        "description": "Drivers race on your behalf and earn money even when you sleep",
        "disabled": "",
        "effect.stat": "",
        "effect.type": "",
        "effect.unittype": "",
        "effect.unittype2": "",
        "effect.val": "",
        "effect.val2": "",
        "effect.val3": "",
        "init": "",
        "label": "driver",
        "lol": "",
        "name": "driver",
        "plural": "drivers",
        "prod.unittype": "",
        "prod.val": "",
        "requires.op": "",
        "requires.unittype": "races",
        "requires.upgradetype": "",
        "requires.val": 20,
        "showparent": "",
        "tab": "driver",
        "unbuyable": "TRUE",
        "verb": "",
        "verbing": "",
        "verbone": "",
        "warnfirst.text": "",
        "warnfirst.unittype": "",
        "warnfirst.val": ""
      },
      {
        "cost.unittype": "",
        "cost.val": "",
        "description": "Win the race boy!",
        "disabled": "",
        "effect.stat": "",
        "effect.type": "addUnit",
        "effect.unittype": "money",
        "effect.unittype2": "",
        "effect.val": 1,
        "effect.val2": "",
        "effect.val3": "",
        "init": "",
        "label": "race",
        "lol": "",
        "name": "race",
        "plural": "race",
        "prod.unittype": "",
        "prod.val": "",
        "requires.op": "",
        "requires.unittype": "driving",
        "requires.upgradetype": "",
        "requires.val": 1,
        "showparent": "",
        "tab": "",
        "unbuyable": "",
        "verb": "race",
        "verbing": "racing",
        "verbone": "races",
        "warnfirst.text": "",
        "warnfirst.unittype": "",
        "warnfirst.val": ""
      },
      {
        "cost.unittype": "",
        "cost.val": "",
        "description": "",
        "disabled": "TRUE",
        "effect.stat": "",
        "effect.type": "",
        "effect.unittype": "",
        "effect.unittype2": "",
        "effect.val": "",
        "effect.val2": "",
        "effect.val3": "",
        "init": "",
        "label": "races",
        "lol": "Just count the races",
        "name": "races",
        "plural": "races",
        "prod.unittype": "",
        "prod.val": "",
        "requires.op": "",
        "requires.unittype": "race",
        "requires.upgradetype": "",
        "requires.val": 0,
        "showparent": "",
        "tab": "",
        "unbuyable": "TRUE",
        "verb": "",
        "verbing": "",
        "verbone": "",
        "warnfirst.text": "",
        "warnfirst.unittype": "",
        "warnfirst.val": ""
      },
      {
        "cost.unittype": "",
        "cost.val": "",
        "description": "",
        "disabled": "TRUE",
        "effect.stat": "",
        "effect.type": "",
        "effect.unittype": "",
        "effect.unittype2": "",
        "effect.val": "",
        "effect.val2": "",
        "effect.val3": "",
        "init": "",
        "label": "upgrade",
        "lol": "Just count the upgrades",
        "name": "upgrade",
        "plural": "upgrades",
        "prod.unittype": "",
        "prod.val": "",
        "requires.op": "",
        "requires.unittype": "car",
        "requires.upgradetype": "",
        "requires.val": 0,
        "showparent": "",
        "tab": "",
        "unbuyable": "TRUE",
        "verb": "",
        "verbing": "",
        "verbone": "",
        "warnfirst.text": "",
        "warnfirst.unittype": "",
        "warnfirst.val": ""
      },
      {
        "cost.unittype": "money",
        "cost.val": 200,
        "description": "Daddy's old junkmobile",
        "disabled": "",
        "effect.stat": "",
        "effect.type": "",
        "effect.unittype": "",
        "effect.unittype2": "",
        "effect.val": "",
        "effect.val2": "",
        "effect.val3": "",
        "init": "",
        "label": "junkmobile",
        "lol": "",
        "name": "car1",
        "plural": "junkmobile",
        "prod.unittype": "",
        "prod.val": "",
        "requires.op": "",
        "requires.unittype": "driving",
        "requires.upgradetype": "",
        "requires.val": 0,
        "showparent": "",
        "tab": "car",
        "unbuyable": "TRUE",
        "verb": "",
        "verbing": "",
        "verbone": "",
        "warnfirst.text": "",
        "warnfirst.unittype": "",
        "warnfirst.val": ""
      },
      {
        "cost.unittype": "",
        "cost.val": "",
        "description": "No past and no future. This guy is probably better let alone, but desperate times require desperate measure. Hire him to race for you and hope he doesn't run away with your car.",
        "disabled": "",
        "effect.stat": "",
        "effect.type": "",
        "effect.unittype": "",
        "effect.unittype2": "",
        "effect.val": "",
        "effect.val2": "",
        "effect.val3": "",
        "init": "",
        "label": "John Doe",
        "lol": "",
        "name": "driver1",
        "plural": "John Doe",
        "prod.unittype": "money",
        "prod.val": 1,
        "requires.op": "",
        "requires.unittype": "car1",
        "requires.upgradetype": "",
        "requires.val": 1,
        "showparent": "",
        "tab": "driver",
        "unbuyable": "TRUE",
        "verb": "earn",
        "verbing": "earning",
        "verbone": "earns",
        "warnfirst.text": "",
        "warnfirst.unittype": "",
        "warnfirst.val": ""
      }
    ],
    "name": "unittypes"
  },
  "upgrades": {
    "column_names": [
      "name",
      "label",
      "description",
      "lol",
      "maxlevel",
      "class",
      "unittype",
      "requires.unittype",
      "requires.val",
      "cost.unittype",
      "cost.val",
      "cost.factor",
      "effect.type",
      "effect.unittype",
      "effect.upgradetype",
      "effect.val",
      "effect.stat",
      "effect.val2",
      "effect.unittype2"
    ],
    "elements": [
      {
        "class": "upgrade",
        "cost.factor": 1,
        "cost.unittype": "money",
        "cost.val": 200,
        "description": "Inherit dadys junkmobile. Racing with this earns 20 money.",
        "effect.stat": "",
        "effect.type": "addUnit",
        "effect.unittype": "car1",
        "effect.unittype2": "",
        "effect.upgradetype": "",
        "effect.val": 1,
        "effect.val2": "",
        "label": "inherit",
        "lol": "",
        "maxlevel": 1,
        "name": "buycar1",
        "requires.unittype": "car1",
        "requires.val": 0,
        "unittype": "car1"
      },
      {
        "class": "",
        "cost.factor": "",
        "cost.unittype": "",
        "cost.val": "",
        "description": "",
        "effect.stat": "",
        "effect.type": "addUnit",
        "effect.unittype": "driving",
        "effect.unittype2": "",
        "effect.upgradetype": "",
        "effect.val": 20,
        "effect.val2": "",
        "label": "",
        "lol": "",
        "maxlevel": "",
        "name": "buycar1",
        "requires.unittype": "",
        "requires.val": "",
        "unittype": ""
      },
      {
        "class": "",
        "cost.factor": "",
        "cost.unittype": "",
        "cost.val": "",
        "description": "",
        "effect.stat": "",
        "effect.type": "addUnit",
        "effect.unittype": "car",
        "effect.unittype2": "",
        "effect.upgradetype": "",
        "effect.val": 1,
        "effect.val2": "",
        "label": "",
        "lol": "",
        "maxlevel": "",
        "name": "buycar1",
        "requires.unittype": "",
        "requires.val": "",
        "unittype": ""
      },
      {
        "class": "upgrade",
        "cost.factor": 2,
        "cost.unittype": "money",
        "cost.val": 200,
        "description": "Better tires for faster turns.",
        "effect.stat": "",
        "effect.type": "addUnit",
        "effect.unittype": "driving",
        "effect.unittype2": "",
        "effect.upgradetype": "",
        "effect.val": 5,
        "effect.val2": "",
        "label": "tires",
        "lol": "",
        "maxlevel": "",
        "name": "car1_upg1",
        "requires.unittype": "car1",
        "requires.val": 1,
        "unittype": "car1"
      },
      {
        "class": "",
        "cost.factor": "",
        "cost.unittype": "",
        "cost.val": "",
        "description": "",
        "effect.stat": "",
        "effect.type": "addUnit",
        "effect.unittype": "upgrade",
        "effect.unittype2": "",
        "effect.upgradetype": "",
        "effect.val": 1,
        "effect.val2": "",
        "label": "",
        "lol": "",
        "maxlevel": "",
        "name": "car1_upg1",
        "requires.unittype": "races",
        "requires.val": 5,
        "unittype": ""
      },
      {
        "class": "upgrade",
        "cost.factor": 1,
        "cost.unittype": "money",
        "cost.val": 1000,
        "description": "Hire John Doe",
        "effect.stat": "",
        "effect.type": "addUnit",
        "effect.unittype": "driver1",
        "effect.unittype2": "",
        "effect.upgradetype": "",
        "effect.val": 1,
        "effect.val2": "",
        "label": "hire",
        "lol": "",
        "maxlevel": 1,
        "name": "buydriver1",
        "requires.unittype": "driver1",
        "requires.val": 0,
        "unittype": "driver1"
      },
      {
        "class": "",
        "cost.factor": "",
        "cost.unittype": "",
        "cost.val": "",
        "description": "",
        "effect.stat": "",
        "effect.type": "addUnit",
        "effect.unittype": "driver",
        "effect.unittype2": "",
        "effect.upgradetype": "",
        "effect.val": 1,
        "effect.val2": "",
        "label": "",
        "lol": "",
        "maxlevel": "",
        "name": "buydriver1",
        "requires.unittype": "",
        "requires.val": "",
        "unittype": ""
      }
    ],
    "name": "upgrades"
  }
});