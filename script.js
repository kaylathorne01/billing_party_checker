const form = document.getElementById('consolidationForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const consolidationDate = new Date(document.getElementById('consolidationDate').value);
  const currentMonth = consolidationDate.getMonth() + 1; // JavaScript months are 0-indexed
  const day = consolidationDate.getDate(); // Get the day of the month

  // **IMPORTANT:** Cutoff date entered needs to be one day before actual cutoff to populate correct effective date!!
  const cutoffDates = {
    1: 18, 
    2: 19, 
    3: 19, 
    4: 19, 
    5: 19,  
    6: 19,  
    7: 19, 
    8: 19, 
    9: 19, 
    10: 19, 
    11: 19,  
    12: 19 
  };

  let effectiveDate;
  if (consolidationDate.getDate() <= cutoffDates[currentMonth]) {
    effectiveDate = new Date(consolidationDate.getFullYear(), currentMonth - 1, 1); // 1st of current month
  } else {
    effectiveDate = new Date(consolidationDate.getFullYear(), currentMonth, 1); // 1st of next month
  }

  // Add the new logic for 1st-20th vs 21st-last day of the month
  let message;
  if (day >= 1 && day <= 20) {
    message = `DoiT will invoice the customer for this month, and the customer does not need to pay AWS directly for any invoices issued after this date while onboarded with DoiT.`;
  } else {
    message = `AWS will invoice the customer for this month, and DoiT will take over the customer's AWS billing beginning with next month's billing period.`;
  }

  // Display the result
  resultDiv.textContent = message;
});
