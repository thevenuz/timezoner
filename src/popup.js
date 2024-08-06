document.addEventListener('DOMContentLoaded', () => {
  var timeFormatButton = document.getElementById('switch');

  browser.storage.sync.get('is24hr', result => {
    if (result.is24hr != null) {
      timeFormatButton.checked = result.is24hr;
    }
  });

  timeFormatButton.addEventListener('click', () => {
    browser.storage.sync.set({ is24hr: timeFormatButton.checked }, () => {
      console.log('24 hr enabled');
    });
  });
});
