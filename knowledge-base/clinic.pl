% Facts: patient(Name, Disease)
patient('John Doe', diabetes).
patient('Jane Smith', hypertension).
patient('Alice Johnson', asthma).
patient('Bob Lee', arthritis).
patient('Emily Davis', migraine).

% Facts: in_clinic(Name, Status)
in_clinic('John Doe', yes).
in_clinic('Jane Smith', no).
in_clinic('Alice Johnson', yes).
in_clinic('Bob Lee', no).
in_clinic('Emily Davis', yes).

% Facts: medication(Drug, AvailableAmount)
medication('Metformin', 100).
medication('Lisinopril', 50).
medication('Albuterol', 30).
medication('Ibuprofen', 75).
medication('Sumatriptan', 20).

% Facts: treats(Drug, Disease)
treats('Metformin', diabetes).
treats('Lisinopril', hypertension).
treats('Albuterol', asthma).
treats('Ibuprofen', arthritis).
treats('Sumatriptan', migraine).	

% Facts: prescription(Name, Drug, ExpiryDate)
prescription('John Doe', 'Metformin', 20231231).
prescription('Jane Smith', 'Lisinopril', 20230315).
prescription('Alice Johnson', 'Albuterol', 20231020).
prescription('Bob Lee', 'Ibuprofen', 20230510).
prescription('Emily Davis', 'Sumatriptan', 20230125).

% Facts: procedure(ProcedureName, Disease)
procedure('Insulin therapy', diabetes).
procedure('Blood pressure monitoring', hypertension).
procedure('Asthma nebulization', asthma).
procedure('Joint replacement surgery', arthritis).
procedure('Migraine therapy session', migraine).

% Facts: medication_price(Drug, Price), procedure_price(ProcedureName, Price)
medication_price('Metformin', 20).
medication_price('Lisinopril', 15).
medication_price('Albuterol', 25).
medication_price('Ibuprofen', 5).
medication_price('Sumatriptan', 30).

procedure_price('Insulin therapy', 200).
procedure_price('Blood pressure monitoring', 100).
procedure_price('Asthma nebulization', 150).
procedure_price('Joint replacement surgery', 5000).
procedure_price('Migraine therapy session', 300).


% Rule: has_disease(Name, Disease) - checks if a patient has a given disease
has_disease(Name, Disease) :- patient(Name, Disease).

% Rule: list_patients_with_disease(Disease, List) - lists all patients with a given disease
list_patients_with_disease(Disease, List) :-
    findall(Name, patient(Name, Disease), List).

% Rule: is_in_clinic(Name) - checks if a patient is currently in the clinic
is_in_clinic(Name) :- in_clinic(Name, yes).

% Rule: list_patients_in_clinic(List) - lists all patients currently in the clinic
list_patients_in_clinic(List) :-
    findall(Name, in_clinic(Name, yes), List).

is_medication_available(Drug) :-
    medication(Drug, AvailableAmount),
    AvailableAmount > 0.

suitable_medications(Name, List) :-
    findall(Drug, (patient(Name, Disease), treats(Drug, Disease), is_medication_available(Drug)), List).

is_prescription_valid(Name, Drug, CurrentDate) :-
    prescription(Name, Drug, ExpiryDate),
    CurrentDate =< ExpiryDate.

list_valid_prescriptions(Name, CurrentDate, List) :-
    findall(Drug, is_prescription_valid(Name, Drug, CurrentDate), List).

can_purchase(Name, Drug, CurrentDate) :-
    is_prescription_valid(Name, Drug, CurrentDate),
    is_medication_available(Drug).

suitable_procedures(Name, List) :-
    findall(Procedure, (patient(Name, Disease), procedure(Procedure, Disease)), List).

suitable_treatments(Name, Medications, Procedures) :-
    suitable_medications(Name, Medications),
    suitable_procedures(Name, Procedures).

affordable_treatments(Name, Budget, AffordableMedications, AffordableProcedures) :-
    findall(Drug, (suitable_medications(Name, MedList), member(Drug, MedList), medication_price(Drug, Price), Price =< Budget), AffordableMedications),
    findall(Procedure, (suitable_procedures(Name, ProcList), member(Procedure, ProcList), procedure_price(Procedure, Price), Price =< Budget), AffordableProcedures).
