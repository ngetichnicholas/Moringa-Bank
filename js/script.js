 
//Business Logic
var afterDepositBalance;
function Account(name ,balance,transaction) {
  this.userName = name;
  this.userBalance = balance;
  this.transactionValue = transaction;

 
}

Account.prototype.afterDepositBalance = function() {
  this.userBalance += this.transactionValue;
  userBalance =this.userBalance;
  return this.userBalance;
} 
Account.prototype.afterWithdrawBalance = function() {
  this.userBalance-=this.transactionValue;
  userBalance= this.userBalance;
  return this.userBalance
}
$(document).ready(function() {
  $("#rejisterButton").click(function(event) {
    event.preventDefault();
    $("#depositButton").show();
    $("#withdrawButton").show();
    $(".rejister").hide();
    $("#userAccount").show();
    let userName = $("input#name").val();
    let userBalance = $("input#initialDeposit").val();
    if (userName.length === 0 || userBalance.length === 0 ) {
      throw new Error;
    }
    userBalance = parseInt(userBalance);
    var newAccount = new Account(userBalance, userName);

    $("#user").text("Account Name: " + userName);
    $("#balance").text("Account Balance: " +  userBalance);
    $(this).toggle();
  $("#depositButton").click(function(event) {
    event.preventDefault();
    $(".deposit").toggle();
    let transactionValue = $("input#deposit").val();
    if (transactionValue.length === 0 ) {
      throw new Error;
    }
    transactionValue = parseInt(transactionValue);
    let newAccount = new Account(userName, userBalance, transactionValue)
    $("#user").text("Account Name: " + userName);
    $("#balance").text("Account Balance: " +  newAccount.afterDepositBalance());  
  });
  $("#withdrawButton").click(function(event) {
    event.preventDefault();
    $(".withdraw").toggle();
    let transactionValue = $("input#withdraw").val();
    if (transactionValue.length === 0 ) {
      throw new Error;
    }
    transactionValue = parseInt(transactionValue);
    let newAccount = new Account(userName, userBalance, transactionValue)

    $("#user").text("Account Name: " + userName);
    $("#balance").text("Account Balance: " +  newAccount.afterWithdrawBalance());
  });
  });
});