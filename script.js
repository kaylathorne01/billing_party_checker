const form = document.getElementById('consolidationForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const consolidationDate = new Date(document.getElementById('consolidationDate').value);
  const currentMonth = consolidationDate.getMonth() + 1; // JavaScript months are 0-indexed

  // **IMPORTANT:** Cutoff date entered needs to be one day before actual cutoff to populate correct effective date!!
  const cutoffDates = {
    1: 23, // January cutoff is the 24th
    2: 21, // February cutoff is the 22nd
    3: 23, // March cutoff is the 24th
    4: 22, // April cutoff is the 23rd
    5: 23,  // May cutoff is the 24th
    6: 22,  // June cutoff is the 23rd
    7: 23, // July cutoff is the 24th
    8: 23, // August cutoff is the 24th
    9: 22, // September cutoff is the 23rd
    10: 23, // October cutoff is the 24th
    11: 22,  // November cutoff is the 23rd
    12: 23  // December cutoff is the 24th
    // Add more months and cutoff dates as needed
  };

  let effectiveDate;
  if (consolidationDate.getDate() <= cutoffDates[currentMonth]) {
    effectiveDate = new Date(consolidationDate.getFullYear(), currentMonth - 1, 1); // 1st of current month
  } else {
    effectiveDate = new Date(consolidationDate.getFullYear(), currentMonth, 1); // 1st of next month
  }

  // Format the effective date (e.g., "10/1/24")
  const formattedEffectiveDate = `${effectiveDate.getMonth() + 1}/${effectiveDate.getDate()}/${effectiveDate.getFullYear().toString().slice(-2)}`;

  resultDiv.textContent = `The APN effective date will be ${formattedEffectiveDate}`;
});