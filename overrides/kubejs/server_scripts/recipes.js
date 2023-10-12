// priority: 1

/*
  Random Crafting recipes
*/

var removeOutput = [
  "map_atlases:atlas",
  "inmis:blazing_backpack",
  "inmis:withered_backpack",
  "inmis:endless_backpack",
  "handcrafted:hammer",
];

ServerEvents.recipes((event) => {
  for (var i of removeOutput) {
    event.remove({ output: i });
  }

  event.remove({
    input: "farmersdelight:tree_bark",
    output: "minecraft:paper",
  });

  event.blasting("minecraft:quartz", "minecraft:amethyst_shard");
  event.shapeless(Item.of("map_atlases:atlas", 1), [
    "minecraft:book",
    "minecraft:paper",
  ]);
  event.shapeless(Item.of("minecraft:paper", 3), ["3x minecraft:bamboo"]);
  event.shapeless(Item.of("minecraft:paper", 3), [
    "3x farmersdelight:tree_bark",
  ]);
  event.shapeless(Item.of("minecraft:book", 1), [
    "3x minecraft:paper", "farmersdelight:tree_bark",
  ]);
  event.shaped(Item.of("minecraft:string", 4), ["AA "], {
    A: "minecraft:bamboo",
  });
  event.shapeless(Item.of("minecraft:string", 4), [
    "2x farmersdelight:tree_bark",
  ]);
  event.shaped(Item.of("inmis:baby_backpack", 1), [" A ", "ABA", " A "], {
    A: "minecraft:string",
    B: "minecraft:chest",
  });
  event.shaped(Item.of("inmis:frayed_backpack", 1), ["AAA", "ABA", "AAA"], {
    A: "minecraft:string",
    B: "minecraft:chest",
  });
  event.shaped(Item.of("handcrafted:hammer", 1), [" A ", " BA", "B  "], {
    A: "#c:iron_ingots",
    B: "#c:wood_sticks",
  });
  event.shapeless(Item.of("farmersdelight:tree_bark", 9), [
    "minecraft:mangrove_roots",
  ]);
});
