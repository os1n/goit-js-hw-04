// ===--- Task Description

// Исправь ошибки которые будут в консоли, чтобы скрипт заработал.


// ===--- Task Description END


// ====---- Task 02 Start
console.log("TASK 02");

const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);
    console.log('this:  ',this);
    console.log(this.items);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking action on ${itemName}.`, `this: `, this);
  action(itemName);
};

//inventory.invokeInventoryActionInventory = invokeInventoryAction.bind(inventory);
//const invokeInventoryActionInventory = invokeInventoryAction.bind(inventory);

invokeInventoryAction('Medkit', inventory.add.bind(inventory));
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']
