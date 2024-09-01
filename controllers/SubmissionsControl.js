const Input = require('../Models/Input');

async function handleGetRequest(req, res) {
    try
    {
        console.log("asdasd");
        const submissions = await Input.find(); 
        console.log( submissions );
        console.log("adsad");
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