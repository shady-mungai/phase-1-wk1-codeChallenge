# NET SALARY CALCULATOR

## Description
This program uses a range of salary values to calculate an individual's Net Salary.The program prompts a user to input his/her basic salary,which is stored in a variable `basicSalary` .The set range of salary values are from the (KRA,NHIF and NSSF) which determine an individual's total deductions.

## Project set-up

The program is linked to a HTML file.
To use the program,run the program live to a web page


### Functionability of the program
The program is mainly operated by use of functions.The first function `calculateNetSalary()`is the main function used to calculate net Salary.Within the function `calculateNetSalary()`there are other functions `calculateTaxPayable()` , `calculateNHIFdeductions()` , `calculateNSSFdeductions()` 

Within the function `calculateTaxPayable()` there are `else if` statements that hold the set range of basic salary and provide different `percentages` so as to determine (tax Payable) for a certain which is stored in a variable `NetSalary`.

        example: if(basic salary<24000){let taxPayable = (basicSalary*0.1)} 

Within the function `calculateNHIFdeductions()` there are `else if` statements that hold the set range of basic salary so as to determine (NHIF deducions) for a certain which is stored in a variable `NHIFdeductions`.

        example:if(basicSalary<=5999){let NHIFdeductions = 150}

Within the function `calculateNSSFdeductions()` there are `else if` statements that hold the set range of basic salary so as to determine (NSSF deducions) for a certain which is stored in a variable `NSSFdeductions`.

Using the formula below an individual gets his/her NetSalary;

                NetSalary = basicSalary - (taxPayable + NHIFdeductions + NSSIFdeductions)+ insuranceRelief




# SPEED DETECTOR

## DESCRIPTION

This program checks whether drivers are driving above the set speed limit.The program award drivers demerit points for every 5km/h above the speed limit.It also suspends licenses for drivers with or more than 12 demerit points.

## Project set-up

The program is linked to a HTML file
To use the program you should run it live to a web page

### Functionality of the program
Program uses a users input of speed of car.If the driver is driving within the speed limit it outputs `OK`.
If driver is above speed limit it uses a formula:
            
            (speedOfCar - speedLimit) / 5)

This gets the drivers points and if he/she is issuedwith more than 12 pionts his/her licence us suspended.





# Student Grade Generator

## Description

This program prompts a student to input his/her marks between 0 and 100.Using a set limit of marks per grade the student receives his /her grade.The range used is:
A>79, B-60 to 79,C-59 to 49,D-40 to 49, E-less 40

## Project Set-up

The project is linked to a htlm file.To use this program your should run it live,as a web page.

### Functionality of program

The program propmts a user to enter his/her marks and using fixed range used for grading a user`s grade appears on the web page.

## Author

Shadrack Mungai
