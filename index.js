const employee = {
    name: "David",
    streetAddress: "Nilufer"
};

console.log(employee.name , employee.streetAddress);

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }

console.log(updateEmployeeWithKeyAndValue(employee, "Ahmed", "Osmangazi"))
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "dawood", "University"))

  function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee};
    delete newObj[key];
    return newObj;
  }
  
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "dawood", "University"))

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  console.log(destructivelyDeleteFromEmployeeByKey(employee, "Ali", "Istanbul"))
