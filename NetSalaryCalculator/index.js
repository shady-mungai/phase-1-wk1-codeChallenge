let basicSalary;
let taxPayable;
let NHIFdeductions;
let NSSFdeductions;
let NetSalary;
let grossSalary;
let insuranceRelief;
























let personalRelief = 2400;
function calculateNetSalary() {
  //first function that
  basicSalary = document.getElementById("basicSalary").value; //prompts user to input his monthly salary
  benefits = document.getElementById("benefits").value;

  grossSalary = +basicSalary + +benefits;

  function calculateTaxPayable() {
    //second function that when called calculates taxPayable
    if (grossSalary <= 24000) {
      taxPayable = 2400;
    } else if (grossSalary > 24000 && grossSalary <= 32333) {
      taxPayable = 24000 * 0.1 + (grossSalary - 24001) * 0.25;
      let tier2 = (grossSalary - 24001) * 0.25;
    } else if (grossSalary > 32333) {
      taxPayable = 2400 + (8332 * 0.25)+ (grossSalary - 32333) * 0.3;
    } else {
      return "Invalid Input";
    }

    return taxPayable;
  }
  calculateTaxPayable(); //call for function2 to calculate taxPayable

  function calculateNHIFdeductions() {
    //third function

    if (grossSalary <= 5999) {
      NHIFdeductions = 150;
    } else if (grossSalary >= 6000 && grossSalary <= 7999) {
      NHIFdeductions = 300;
    } else if (grossSalary >= 8000 && grossSalary <= 11999) {
      NHIFdeductions = 400;
    } else if (grossSalary >= 12000 && grossSalary <= 14999) {
      NHIFdeductions = 500;
    } else if (grossSalary >= 15000 && grossSalary <= 19999) {
      NHIFdeductions = 600;
    } else if (grossSalary >= 20000 && grossSalary <= 24999) {
      NHIFdeductions = 750;
    } else if (grossSalary >= 25000 && grossSalary <= 29999) {
      NHIFdeductions = 850;
    } else if (grossSalary >= 30000 && grossSalary <= 34999) {
      NHIFdeductions = 900;
    } else if (grossSalary >= 35000 && grossSalary <= 39999) {
      NHIFdeductions = 950;
    } else if (grossSalary >= 40000 && grossSalary <= 44999) {
      NHIFdeductions = 1000;
    } else if (grossSalary >= 45000 && grossSalary <= 49999) {
      NHIFdeductions = 1100;
    } else if (grossSalary >= 50000 && grossSalary <= 59999) {
      NHIFdeductions = 1200;
    } else if (grossSalary >= 60000 && grossSalary <= 69999) {
      NHIFdeductions = 1300;
    } else if (grossSalary >= 70000 && grossSalary <= 79999) {
      NHIFdeductions = 1400;
    } else if (grossSalary >= 80000 && grossSalary <= 89999) {
      NHIFdeductions = 1500;
    } else if (grossSalary >= 90000 && grossSalary <= 99999) {
      NHIFdeductions = 1600;
    } else if (grossSalary >= 100000) {
      NHIFdeductions = 1700;
    }

    return NHIFdeductions;
  }
  calculateNHIFdeductions(); // call for third function to calculate NHIFdeductions

insuranceRelief = NHIFdeductions * 0.15; // insurance relief is issued as 15% of NHIFdeductions


  function calculateNSSFdeductions() {
    //forth function
    if (grossSalary > 0) {  //Using old NSSF rates, a constant sh.400 is paid individuals
      NSSFdeductions = 400;
    }
  }

  calculateNSSFdeductions();


  NetSalary = grossSalary -(NHIFdeductions + NSSFdeductions + taxPayable) +personalRelief +insuranceRelief;//formula to calculate Net Salary

  document.getElementById("gross").innerHTML = "GROSS :" + "Ksh." + grossSalary;
  document.getElementById("NHIFdeductions").innerHTML ="NHIFdeductions :" + "Ksh." + NHIFdeductions
    "NHIF :" + "Ksh." + NHIFdeductions;
  document.getElementById("NSSFdeductions").innerHTML ="NSSFdeductions :" + "Ksh." + NSSFdeductions
    "NSSF :" + "Ksh." + NSSFdeductions;
  document.getElementById("taxPayable").innerHTML ="TAX PAYABLE :" + "Ksh." + taxPayable
    "TAX :" + "Ksh." + taxPayable;
  document.getElementById("netSalary").innerHTML ="NET SALARY :" + "Ksh." + NetSalary
}
