const navigation = document.getElementById('navigation');

fetch('/includes/navbar.html')
  .then(response => response.text())
  .then(html => {
    navigation.innerHTML = html;
  })
  .catch(error => {
    console.error(`Error loading navigation component: ${error}`);
  });

const copyright = document.getElementById('copyright');

fetch('/includes/copy.html')
  .then(response => response.text())
  .then(html => {
    copyright.innerHTML = html;
  })
  .catch(error => {
    console.error(`Error loading navigation component: ${error}`);
  });

const popup = document.getElementById('popup');

fetch('/includes/popup.html')
  .then(response => response.text())
  .then(html => {
    popup.innerHTML = html;
  })
  .catch(error => {
    console.error(`Error loading navigation component: ${error}`);
  });
  

  