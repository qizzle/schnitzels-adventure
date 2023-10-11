/*
  Crafting recipes for Create Mod
*/

var adPlates = [
  ["ad_astra:steel_plate", "ad_astra:steel_ingot"],
  ["ad_astra:desh_plate", "ad_astra:desh_ingot"],
  ["ad_astra:ostrum_plate", "ad_astra:ostrum_ingot"],
  ["ad_astra:calorite_plate", "ad_astra:calorite_ingot"],
];

ServerEvents.recipes((event) => {
  for (var i of adPlates) {
    event.recipes.create.pressing(i[0], i[1]);
  }

  event.recipes.create.compacting(
    [
      Item.of("minecraft:coal").withChance(0.6),
      Item.of("minecraft:diamond").withChance(0.1),
    ],
    "minecraft:coal_block"
  );
  event.recipes.create.mixing(
    "ad_astra:cheese_block",
    Fluid.of("milk:still_milk")
  );
});
