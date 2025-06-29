BEGIN
    FOR r IN (
        SELECT l.LoanID,
               l.CustomerID,
               l.EndDate,
               c.Name AS CustomerName
        FROM Loans l
        JOIN Customers c ON l.CustomerID = c.CustomerID
        WHERE l.EndDate  <= SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Dear ' || r.CustomerName ||
                             ', your loan (Loan ID: ' || r.LoanID ||
                             ') is due on ' || TO_CHAR(r.EndDate, 'DD-MON-YYYY') || 
                             '. Please ensure timely payment.');
    END LOOP;
END;
/
