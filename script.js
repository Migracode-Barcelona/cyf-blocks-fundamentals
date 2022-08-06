/* paste the JavaScript code from the 'Generated Code' section of the CYF Blocks editor here */
var earnings, Balance;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


Balance = [0];
earnings = [0];


document.getElementById('add').addEventListener('click', (event) => {
  earnings = getNumberOrString(document.getElementById('input').value);
  Balance.unshift(getNumberOrString(document.getElementById('input').value));
  if (earnings >= 0) {
    let element_earning_list = document.getElementById('earning-list');
    let element_earning = document.getElementById('earning');
    let new_li = document.createElement('li');
    new_li.innerText = earnings;

    element_earning.appendChild(new_li);
  } else {
    let element_expence_list = document.getElementById('expence-list');
    let element_expences = document.getElementById('expences');
    let new_li2 = document.createElement('li');
    new_li2.innerText = earnings;

    element_expences.appendChild(new_li2);
  }

});
earnings;


document.getElementById('bal').addEventListener('click', (event) => {
  let element_balance = document.getElementById('balance');
  element_balance.innerText = Balance.reduce((a,b) => a+b, 0);

});
