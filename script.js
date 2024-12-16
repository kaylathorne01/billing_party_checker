const form = document.getElementById('consolidationForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Use input date and ensure UTC processing
  const inputDate = document.getElementById('consolidationDate').value;
  const consolidationDate = new Date(inputDate + 'T00:00:00Z'); // Force UTC time
  
  const day = consolidationDate.getUTCDate(); // Use UTC to avoid time zone issues
  console.log(`The day (UTC): ${day}`); // Debugging line to confirm correct day
  
  // Cutoff day logic
  const cutoffDay = 20; // Cutoff is the 20th

  // Logic for determining the message
  let message;
  if (day <= cutoffDay) {
    message = `DoiT will invoice the customer for this month, and the customer does not need to pay AWS directly for any invoices issued after this date while onboarded with DoiT.`;
  } else {
    message = `AWS will invoice the customer for this month, and DoiT will take over the customer's AWS billing beginning with next month's billing period.`;
  }

  // Display the result
  resultDiv.textContent = message;
});
