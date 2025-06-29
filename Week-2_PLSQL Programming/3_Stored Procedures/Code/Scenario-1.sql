CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    FOR r IN (
        SELECT AccountID, Balance
        FROM Accounts
        WHERE AccountType = 'Savings'
    ) LOOP
        UPDATE Accounts
        SET Balance = Balance + (Balance * 0.01),
            LastModified = SYSDATE
        WHERE AccountID = r.AccountID;

        DBMS_OUTPUT.PUT_LINE('Interest applied to Account ID: ' || r.AccountID || ' with new amount ' || r.Balance);
    END LOOP;
END;
/
BEGIN
    ProcessMonthlyInterest;
END;
/
