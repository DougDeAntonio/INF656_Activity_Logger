const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors()); // This enables CORS for all resources

const port = 3000;
let events = [];

app.post('/log', (req, res) => {
    events.push(req.body);
    console.log('Event Received:', req.body);
    res.send({status: 'Event logged'});
});

setInterval(() => {
    if (events.length) {
        console.log(`${events.length} events logged:`, events);
        events = []; // Clear events after logging
    }
}, 120000); // Log summary every 2 minutes

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});