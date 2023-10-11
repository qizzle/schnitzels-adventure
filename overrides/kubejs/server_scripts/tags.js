// priority: 1

const tagToItem = [];

ServerEvents.tags("item", (event) => {
  for (var item of tagToItem) {
    event.add(item[1], item[0]);
  }
});
