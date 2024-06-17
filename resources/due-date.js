// const params = new URLSearchParams(window.location.search);

// const firstDayLastPeriod = document.getElementById("first-date-last-period") //params.get('first-date-last-period');
// const cycleNumberDays = document.getElementById("cycle-num-days") //params.get('cycle-num-days');

function calculateDueDate() {
  // Get the inputs
  let dateString = document.getElementById('first-date-last-period').value;
  let cycleLength = parseInt(document.getElementById('cycle-length').value);

  // Convert the date string to a Date object
  let lastPeriodDate = new Date(dateString);

  // Check if the inputs are valid
  if (isNaN(lastPeriodDate) || isNaN(cycleLength) || cycleLength <= 0) {
      alert('Please enter valid inputs.');
      return;
  }

  // Calculate the due date
  // Normally, the due date is 280 days from the first date of the last period
  // (40 weeks = 280 days), but we need to adjust based on cycle length.
  let cycleAdjustment = cycleLength - 28; // Default cycle length is 28 days
  let dueDate = new Date(lastPeriodDate);
  dueDate.setDate(dueDate.getDate() + 280 + cycleAdjustment);

  // Format the due date to a readable format (YYYY-MM-DD)
  let formattedDueDate = dueDate.toISOString().split('T')[0];

  // Display the due date
  document.getElementById('result-due-date').textContent = 'Estimated Due Date: ' + formattedDueDate;
}