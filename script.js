function daysUntilSeptember23() {
  const today = new Date();
  const targetDate = new Date(today.getFullYear(), 8, 23);

  if (today > targetDate) {
    targetDate.setFullYear(targetDate.getFullYear() + 1);
  }

  const timeDiff = targetDate.getTime() - today.getTime();
  const days = Math.ceil(timeDiff / (1000 * 3600 * 24));

  if (days === 0) {
    return "TODAY IS MY BIRTHDAY!!!! THANKS FOR VISITING MY BIO TODAY!!!!";
  } else {
    return days;
  }
}

document.getElementById('countdown').textContent = daysUntilSeptember23();
