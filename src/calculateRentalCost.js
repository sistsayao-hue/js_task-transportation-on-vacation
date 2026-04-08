/**
 * @param {number} days
 *$40 7
 $20 3
 * @return {number}
 */
function calculateRentalCost(days) {
const desc;
  
if(days<3){
 desc = days * 40;
}

  
if(days=>3 && days<=6){
 desc = 3 * 40 - 20;
}

if(days==6){

}

if(days>=7){

  desc = 7 * 40 - 50;

}


return desc ;



  
  // write code here
}

module.exports = calculateRentalCost;
