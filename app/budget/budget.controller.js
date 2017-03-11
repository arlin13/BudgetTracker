angular
    .module('app')
    .controller('BudgetController', BudgetController);

function BudgetController() {
    var vm = this;
    // incomes variables
    vm.incomeArray = [];
    vm.incomeDescription;
    vm.incomeAmount;
    // expenses variables
    vm.expenseArray = [];
    vm.expenseDescription;
    vm.expenseAmount;
    // total variables
    vm.totalIncome = 0;
    vm.totalExpense = 0;
    vm.totalLeft = 0;

    //words to check
    vm.rentWordsArray = ["House", "Rent", "Mortgage"];

    ////// functions

    //// add
    vm.addIncome = function() {
        vm.incomeArray.push({
            description: vm.incomeDescription,
            amount: vm.incomeAmount
        });
        vm.incomeDescription = '';
        vm.incomeAmount = '';
        vm.calculateIncome();
        vm.calculateTotalLeft();
    }

    vm.addExpense = function() {
        vm.expenseArray.push({
            description: vm.expenseDescription,
            amount: vm.expenseAmount
        });
        vm.expenseDescription = '';
        vm.expenseAmount = '';
        vm.calculateExpense();
        vm.calculateTotalLeft();
        vm.checkExpenses();
    }

    ////deletes
    vm.deleteIncome = function(index) {
        vm.incomeArray.splice(index, 1);
        calculateIncome();
        calculateTotalLeft();
    }

    vm.deleteExpense = function(index) {
        vm.expenseArray.splice(index, 1);
        calculateExpense();
        calculateTotalLeft();
    }

    //// calculations
    vm.calculateIncome = function() {
        vm.totalIncome = vm.incomeArray.reduce(function(a, b) {
            return a + b.amount;
        }, 0);
    }

    vm.calculateExpense = function() {
        vm.totalExpense = vm.expenseArray.reduce(function(a, b) {
            return a + b.amount;
        }, 0);
    }

    vm.calculateTotalLeft = function() {
        vm.totalLeft = vm.totalIncome - vm.totalExpense;
    }

    vm.checkExpenses = function() {
        for (var i = 0; i < rentWordsArray.length; i++) {
            if (vm.expenseArray[expenseArray.length - 1].indexOf(rentWordsArray[i])) {
              console.log("Si hay: " rentWordsArray[i]);
              break;
            }
        }

    }
}
