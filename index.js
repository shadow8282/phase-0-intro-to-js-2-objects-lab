const employee = { name:"joe", streetAddress: "Mama's House" };

function updateEmployeeWithKeyAndValue( employee, key, value) 
{
    const objClone = { ...employee};
    objClone[key] = value;
    return objClone;
    
};

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value)
{
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key)
{   
    const objClone = { ...employee};
    delete objClone[key];
    return objClone;
};

function destructivelyDeleteFromEmployeeByKey (employee, key)
{
   delete employee[key];
    return employee;
};