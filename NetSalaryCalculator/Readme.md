# NET SALARY CALCULATOR

## Description
This program uses a range of salary values to calculate an individual's Net Salary.The program prompts a user to input his/her basic salary,which is stored in a variable `basicSalary` .The set range of salary values are from the (KRA,NHIF and NSSF) which determine an individual's total deductions.

## Project set-up
The program is mainly operated by use of functions.The first function `calculateNetSalary()`is the main function used to calculate net Salary.Within the function `calculateNetSalary()`there are other functions `calculateTaxPayable()` , `calculateNHIFdeductions()` , `calculateNSSFdeductions()` 

Within the function `calculateTaxPayable()` there are `else if` statements that hold the set range of basic salary and provide different `percentages` so as to determine (tax Payable) for a certain which is stored in a variable `NetSalary`.

        example: if(basic salary<24000){let taxPayable = (basicSalary*0.1)} 

Within the function `calculateNHIFdeductions()` there are `else if` statements that hold the set range of basic salary so as to determine (NHIF deducions) for a certain which is stored in a variable `NHIFdeductions`.

        example:if(basicSalary<=5999){let NHIFdeductions = 150}

Within the function `calculateNSSFdeductions()` there are `else if` statements that hold the set range of basic salary so as to determine (NSSF deducions) for a certain which is stored in a variable `NSSFdeductions`.

Using the formula below an individual gets his/her NetSalary;

                NetSalary = basicSalary - (taxPayable + NHIFdeductions + NSSIFdeductions)+ insuranceRelief