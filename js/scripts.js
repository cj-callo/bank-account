var newCustomer;

function Customer(name, initial) {
  this.customerName = name;
  this.initial = initial;
}
Customer.prototype.add = function (deposit) {
  this.initial = this.initial + deposit;
}
Customer.prototype.subtract = function (withdrawal) {
  this.initial = this.initial - withdrawal;
};

$(document).ready(function() {
  $("#new-customer").submit(function(event){
    event.preventDefault();

    var name = $("#name").val();
      //console.log (name);
    var initial = parseInt($("#initial").val());
    newCustomer = new Customer(name, initial);
    console.log(newCustomer);
  });
  $("#funds").submit(function(event){
    event.preventDefault();
    var deposit = parseInt($("#deposit").val());
    var withdrawal = parseInt($("#withdrawal").val());
    if(!!!!!isNaN(deposit)){
      newCustomer.add(deposit);
    }
    newCustomer.subtract(withdrawal);
    console.log(withdrawal);
  });

});
