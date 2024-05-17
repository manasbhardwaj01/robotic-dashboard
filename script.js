document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5000/api/data/real-time')
      .then(response => response.json())
      .then(data => {
        document.getElementById('battery').textContent = `${data.battery}%`;
        document.getElementById('status').textContent = data.status;
  
        const logsElement = document.getElementById('logs');
        logsElement.innerHTML = '';
        data.logs.forEach(log => {
          const li = document.createElement('li');
          li.textContent = log;
          logsElement.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  