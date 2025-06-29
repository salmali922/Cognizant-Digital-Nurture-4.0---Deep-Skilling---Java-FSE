ALTER TABLE Customers ADD IsVIP CHAR(1) DEFAULT 'N';
BEGIN
    FOR r IN (
        SELECT CustomerID, Balance
        FROM Customers
    ) LOOP
        IF r.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'Y'
            WHERE CustomerID = r.CustomerID;

            DBMS_OUTPUT.PUT_LINE('Customer ID ' || r.CustomerID || ' promoted to VIP.');
        ELSE

            DBMS_OUTPUT.PUT_LINE('Customer ID ' || r.CustomerID || ' is not a VIP.');
        END IF;
    END LOOP;
END;
/
