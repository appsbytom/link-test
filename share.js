document.querySelector('#both').addEventListener('click', async () => {
    try {
      await navigator.share({
        text: 'Text',
        url: location.href,
      });
    } catch (err) {
      document.querySelector(
        'pre'
      ).textContent = `${err.name}: ${err.message}\n`;
    }
  });

  document.querySelector('#text').addEventListener('click', async () => {
    try {
      await navigator.share({
        text: 'Text',
      });
    } catch (err) {
      document.querySelector(
        'pre'
      ).textContent = `${err.name}: ${err.message}\n`;
    }
  });

  document.querySelector('#url').addEventListener('click', async () => {
    try {
      await navigator.share({
        url: location.href,
      });
    } catch (err) {
      document.querySelector(
        'pre'
      ).textContent = `${err.name}: ${err.message}\n`;
    }
  });