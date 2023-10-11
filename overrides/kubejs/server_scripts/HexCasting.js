/*
  Crafting recipes for HexCasting Mod
*/

// Changes: Made recipes easier

ServerEvents.recipes((event) => {
  // Removing
  event.remove({ output: "hexcasting:artifact" });
  event.remove({ output: "hexcasting:trinket" });
  event.remove({ output: "hexcasting:cypher" });

  // Adding
  event.shapeless(Item.of("hexcasting:focus", 1), [
    "hexcasting:charged_amethyst",
    "#c:copper_ingots",
  ]);
  event.shapeless(Item.of("hexcasting:charged_amethyst", 1), [
    "2x minecraft:amethyst_shard",
  ]);
  event.shapeless(Item.of("hexcasting:amethyst_dust", 2), [
    "minecraft:amethyst_shard",
  ]);
  event.shapeless(Item.of("minecraft:amethyst_shard", 1), [
    "2x hexcasting:amethyst_dust",
  ]);
  event.shaped(Item.of("hexcasting:artifact", 1), [" A ", "ABA", " A "], {
    A: "#c:gold_ingots",
    B: "hexcasting:trinket",
  });
  event.shaped(Item.of("hexcasting:trinket", 1), [" A ", "ABA", " A "], {
    A: "#c:iron_ingots",
    B: "hexcasting:cypher",
  });
  event.shaped(Item.of("hexcasting:cypher", 1), [" A ", "ABA", " A "], {
    A: "#c:copper_ingots",
    B: "hexcasting:charged_amethyst",
  });
});
