// Run the add to basket function when clicking the add to basket button
document.getElementById('addToBasket').addEventListener('click', addToBasket);

// Function to submit order to basket
function addToBasket() {
  // Reusable function to reset basket
  function resetBasket() {
    shirtQuantity = 0;
    shirtSubtotal = 0;
    tieQuantity = 0;
    tieSubtotal = 0;
    deliveryCost = 0;
    totalCost = 0;
    document.getElementById('greetingMessage').innerHTML = '';
    document.getElementById('shirtSubtotal').innerHTML = '';
    document.getElementById('tieSubtotal').innerHTML = '';
    document.getElementById('deliveryCost').innerHTML = '';
    document.getElementById('discount').innerHTML = '';
    document.getElementById('totalCost').innerHTML = '';
  }
  // Declare/initialize all variables
  var firstName = document.getElementById('firstName').value;
  var secondName = document.getElementById('secondName').value;
  var shirtQuantity = eval(document.getElementById('shirtQuantity').value);
  var shirtSubtotal = shirtQuantity * 20;
  var tieQuantity = eval(document.getElementById('tieQuantity').value);
  var tieSubtotal = tieQuantity * 12;
  var customerStatus = eval(document.getElementById('customerStatus').value);
  var deliveryCost;
  var totalCost;
  // Check to see if all fields have values before submitting information to basket
  if (firstName === '') {
    window.alert('Please enter your first name');
    resetBasket();
  } else if (secondName === '') {
    window.alert('Please enter your second name');
    resetBasket();
  } else if (shirtQuantity === undefined) {
    window.alert('Please enter a quantity of shirts');
    resetBasket();
  } else if (tieQuantity === undefined) {
    window.alert('Please enter a quantity of ties');
    resetBasket();
  } else {
    // Calcluate the delivery cost depending on which option was checked
    if (document.getElementById('deliveryOption1').checked) {
      deliveryCost = 2;
    } else if (document.getElementById('deliveryOption2').checked) {
      deliveryCost = 3;
    } else if (document.getElementById('deliveryOption3').checked) {
      deliveryCost = 5;
    }
    // Calculate the total cost
    totalCost = shirtSubtotal + tieSubtotal + deliveryCost;
    // If any discount applies, multiply the total cost by the relevant amount to get the discounted total
    if (customerStatus === 2) {
      totalCost *= .9;
    } else if (customerStatus === 3) {
      totalCost *= .8;
    }
    // Output a greeting with the customers name
    document.getElementById('greetingMessage').innerHTML = 'Hello ' + firstName + ' ' + secondName + '! You have selected:';
    // Output the quantity of shirts and the subtotal
    if (shirtQuantity === 1) {
      document.getElementById('shirtSubtotal').innerHTML = shirtQuantity + ' shirt @ £20.00. Subtotal: £' + Number(Math.round(shirtSubtotal + 'e2') + 'e-2').toFixed(2);
    } else if (shirtQuantity > 1) {
      document.getElementById('shirtSubtotal').innerHTML = shirtQuantity + ' shirts @ £20.00 each. Subtotal: £' + Number(Math.round(shirtSubtotal + 'e2') + 'e-2').toFixed(2);
    } else {
      document.getElementById('shirtSubtotal').innerHTML = '';
    }
    // Output the quantity of ties and the subtotal
    if (tieQuantity === 1) {
      document.getElementById('tieSubtotal').innerHTML = tieQuantity + ' tie @ £12.00. Subtotal: £' + Number(Math.round(tieSubtotal + 'e2') + 'e-2').toFixed(2);
    } else if (tieQuantity > 1) {
      document.getElementById('tieSubtotal').innerHTML = tieQuantity + ' ties @ £12.00 each. Subtotal: £' + Number(Math.round(tieSubtotal + 'e2') + 'e-2').toFixed(2);
    } else {
      document.getElementById('tieSubtotal').innerHTML = '';
    }
    // If there is atleast 1 product selected then output the rest of the information to the basket
    if (shirtQuantity > 0 || tieQuantity > 0) {
      // Output the delivery cost
      document.getElementById('deliveryCost').innerHTML = 'Delivery: £' + Number(Math.round(deliveryCost + 'e2') + 'e-2').toFixed(2);
      // If the customer qualifies for discount, output the discount to the basket
      if (customerStatus === 2 || customerStatus === 3) {
        document.getElementById('discount').innerHTML = 'You qualified for a discount of £' + Number(Math.round((shirtSubtotal + tieSubtotal + deliveryCost) - totalCost + 'e2') + 'e-2').toFixed(2);
      } else {
        document.getElementById('discount').innerHTML = '';
      }
      // Output the total cost to the basket
      document.getElementById('totalCost').innerHTML = 'Total: £' + Number(Math.round(totalCost + 'e2') + 'e-2').toFixed(2);
    } else {
      // If there is 0 products selected, reset the basket
      resetBasket();
    }
  }
}
