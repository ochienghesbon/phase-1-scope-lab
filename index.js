var customerName = "bob"
const leastCustomer = "mary"

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}
function setBestCustomer() {
    bestCustomer = 'not bob'
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
    return bestCustomer
}
function changeLeastFavoriteCustomer(){
    leastCustomer = "ted"
    return leastCustomer
}
