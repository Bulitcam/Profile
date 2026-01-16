function displaySentenceInTimezone(timezone) {
  // 1. Get the current date object
  const now = new Date();

  // 2. Use Intl.DateTimeFormat to get the current hour in the specific timezone
  // The 'hour' option will return a string, so we need to convert it to a number.
  const timeInZoneString = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    hour12: false, // Use 24-hour format for easier comparison
    timeZone: timezone
  }).format(now);

  const hourInZone = parseInt(timeInZoneString, 10);

  // 3. Use conditional logic to display the appropriate sentence
  let sentence;
  if (hourInZone >= 5 && hourInZone < 12) {
    sentence = 'Good morning!';
  } else if (hourInZone >= 12 && hourInZone < 18) {
    sentence = 'Good afternoon!';
  } else {
    sentence = 'Good evening!';
  }

  document.getElementById("The_date_time").textContent = sentence;
  return sentence;
}
