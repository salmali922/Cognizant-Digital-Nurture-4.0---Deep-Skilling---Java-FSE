Set serveroutput on;
DECLARE
	age Number;
BEGIN
  FOR r IN (
    SELECT c.CustomerID, c.DOB, l.LoanID, l.InterestRate
    FROM Customers c
    JOIN Loans l ON c.CustomerID = l.CustomerID
  ) LOOP
    age := FLOOR(MONTHS_BETWEEN(SYSDATE, r.DOB) / 12);
     IF age > 60 THEN
    UPDATE LOANS
    SET InterestRate = r.InterestRate - 1
    WHERE LoanID = r.LoanID;
 
    DBMS_OUTPUT.PUT_LINE('Updated Interest Rate for Loan ID ' || r.LoanID || 
                                 ' (Customer ID: ' || r.CustomerID || ') to ' ||  r.InterestRate || '% of age ' || age);
	END IF;
     IF age < 60 THEN
 
    DBMS_OUTPUT.PUT_LINE('Updated Interest Rate for Loan ID ' || r.LoanID || 
                                 ' (Customer ID: ' || r.CustomerID || ') to ' ||  r.InterestRate || '% of age ' || age || ' getting no discount');
	END IF;
   END LOOP;

END;
/