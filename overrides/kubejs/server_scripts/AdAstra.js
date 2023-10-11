/*
  Crafting recipes for Ad Astra Mod
*/

var removeOutput = [
  "ad_astra:iron_plate",
  "ad_astra:steel_plate",
  "ad_astra:desh_plate",
  "ad_astra:ostrum_plate",
  "ad_astra:calorite_plate",
];

ServerEvents.recipes((event) => {
  for (var i of removeOutput) {
    event.remove({ input: "ad_astra:hammer", output: i });
  }
  event.remove({ output: "ad_astra:hammer" });
  // event.remove({ input: removeOutput[0] });
});
