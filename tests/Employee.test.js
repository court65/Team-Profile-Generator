const Employee = require("../lib/Employee");

test("Employee", () => {
  const Employee1 = new Employee("Court", "DL", "email@email");

  expect(Employee1.name).toEqual("Court");

});

test("for valid Id", () => {
  const employeeID = 1;
  const employee = new Employee("Court", employeeID);
  
  expect(employee.id).toBeTruthy();
});