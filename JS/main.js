function displaySentenceInTimezone(timezone) {
  const now = new Date();
  const timeInZoneString = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    hour12: false,
    timeZone: timezone
  }).format(now);

  const hourInZone = parseInt(timeInZoneString, 10);
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
displaySentenceInTimezone()

function Dropdown1(element) {
  const hiddenText = element.nextElementSibling;
  const arrow = element.querySelector('.arrow');

  hiddenText.classList.toggle('show');
  arrow.classList.toggle('expanded');
}
