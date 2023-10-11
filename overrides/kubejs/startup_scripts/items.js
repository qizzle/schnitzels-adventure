// priority: 1

/*
  All items without any features (static items) are called here
  e.g. items that are used for recipes
*/

const items = [];
// path: /kubejs/assets/items/textures/item/NAME.png

StartupEvents.registry("item", (e) => {
  for (var item of items) {
    let texture = "items:item/" + item;
    e.create(item).texture(texture);
  }
});
