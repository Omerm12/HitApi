const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

// Define route to fetch data from the API
app.get('/countries', async (req, res) => {
    try {
        const apiRes = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
        if (!apiRes.ok) { // Check if the response is successful
            throw new Error('Failed to fetch data');
        }
        const data = await apiRes.json(); // Parse response JSON
        res.json(data); // Send JSON response
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
