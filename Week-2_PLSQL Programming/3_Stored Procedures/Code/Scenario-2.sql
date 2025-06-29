CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    pd IN Employees.Department%TYPE,
    pb IN NUMBER
) IS
BEGIN
    
    UPDATE Employees
    SET Salary = Salary + (Salary * pb / 100)
    WHERE Department = pd;

    DBMS_OUTPUT.PUT_LINE('Bonus of ' || pb || '% applied to employees in ' || pd || ' department.');

END;
/
BEGIN
    UpdateEmployeeBonus('HR', 15);
END;
/
