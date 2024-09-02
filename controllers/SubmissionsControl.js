const Input = require('../Models/Input');

async function handleGetRequest(req, res) {
    try
    {
        const submissions = await Input.find(); 
        const submissionsArray = Array.isArray(submissions) ? submissions : [submissions];
        res.json(submissionsArray); 
    } catch (err) {
        console.error('Error fetching submissions:', err);
        res.status(500).json({ message: 'Failed to retrieve submissions' });
    }
}

module.exports = {
    handleGetRequest,
}