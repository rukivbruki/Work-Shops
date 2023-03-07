const reselect = require('reselect');
const state = require('../state');

const { createSelector } = reselect;
const {
  measurementFunction,
} = require('../../commonUtils/executionSpeedMeasurement');

const selectShopItems = (state) => state.shop.items;
const selectTaxPercent = (state) => state.shop.taxPercent;

const selectSubtotal = createSelector(selectShopItems, (items) =>
  items.reduce((subtotal, item) => subtotal + item.value, 0)
);

const selectTax = createSelector(
  selectSubtotal,
  selectTaxPercent,
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
);

const selectTotal = createSelector(
  selectSubtotal,
  selectTax,
  (subtotal, tax) => ({ total: subtotal + tax })
);

// measurementFunction(selectTotal)

module.exports = { selectTotal };
