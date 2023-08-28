// Write your solution in this file!
var customerName = "bob";
function upperCaseCustomerName(){
   customerName = customerName.toUpperCase()
   console.log(customerName)
}
var bestCustomer;

function setBestCustomer() {
  bestCustomer = "not bob";
}
console.log(bestCustomer)




function overwriteBestCustomer(){
bestCustomer = "maybe bob"
console.log(bestCustomer)
}


const leastFavoriteCustomer = "some value";
function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = "another"
  console.log(leastFavoriteCustomer)
}
changeLeastFavoriteCustomer()


