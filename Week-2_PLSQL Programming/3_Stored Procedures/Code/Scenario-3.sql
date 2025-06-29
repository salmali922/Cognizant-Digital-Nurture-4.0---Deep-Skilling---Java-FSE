CREATE SEQUENCE TRANSACTIONS_SEQ START WITH 1 INCREMENT BY 1;


CREATE OR REPLACE PROCEDURE TransferFunds (
    pid IN Accounts.AccountID%TYPE,
    p_id IN Accounts.AccountID%TYPE,
    pa    IN NUMBER
) IS
    balance Accounts.Balance%TYPE;
BEGIN
    SELECT Balance INTO balance
    FROM Accounts
    WHERE AccountID = p_id
    FOR UPDATE;

    IF balance < pa THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in source account.');
    END IF;

    UPDATE Accounts
    SET Balance = Balance - pa,
        LastModified = SYSDATE
    WHERE AccountID = pid;

    UPDATE Accounts
    SET Balance = Balance + pa,
        LastModified = SYSDATE
    WHERE AccountID = p_id;

    INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
    VALUES (TRANSACTIONS_SEQ.NEXTVAL, pid, SYSDATE, pa, 'DEBIT');

    INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
    VALUES (TRANSACTIONS_SEQ.NEXTVAL, p_id, SYSDATE, pa, 'CREDIT');

    DBMS_OUTPUT.PUT_LINE('Transferred ' || pa || ' from Account ' || pid || ' to Account ' || p_id);

    COMMIT;
END;
/

BEGIN
    TransferFunds(1, 2, 351.52);
END;
/

