document.getElementById('myButton').addEventListener('click', function() {
    fetch('http://localhost:3000/log', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ event: 'Button clicked', timestamp: new Date().toISOString() })
    }).then(() => {
        console.log('Button click logged');
    }).catch(console.error);
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = formData.get('data');
    fetch('http://localhost:3000/log', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ event: 'Form submitted', data, timestamp: new Date().toISOString() })
    }).then(() => {
        console.log('Form submission logged');
    }).catch(console.error);
});