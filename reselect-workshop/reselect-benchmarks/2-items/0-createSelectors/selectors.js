const {
  measurementFunction,
} = require('../../commonUtils/executionSpeedMeasurement');
const state = require('../state');

const selectShopItems = () => state.shop.items;
const selectTaxPercent = () => state.shop.taxPercent;

const selectSubtotal = () => {
  const items = selectShopItems(state);

  return items.reduce((subtotal, item) => subtotal + item.value, 0);
};

const selectTax = () => {
  const subtotal = selectSubtotal(state);
  const taxPercent = selectTaxPercent(state);

  return subtotal * (taxPercent / 100);
};

const selectTotal = () => {
  const subtotal = selectSubtotal(state);
  const tax = selectTax(state);

  return { total: subtotal + tax };
};

measurementFunction(selectTotal);

// module.exports = { selectTotal };
