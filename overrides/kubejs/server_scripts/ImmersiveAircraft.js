/*
  Crafting recipes for Immersive Aircraft Mod
*/

ServerEvents.recipes((event) => {
  event.remove({ output: "immersive_aircraft:sail" });
  event.remove({ output: "immersive_aircraft:propeller" });

  event.shaped(Item.of("immersive_aircraft:sail", 2), [" AA", " AA", " AA"], {
    A: "minecraft:string",
  });
  event.replaceInput(
    { input: "immersive_aircraft:propeller" },
    "immersive_aircraft:propeller",
    "create:propeller"
  );
});
