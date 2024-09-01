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

async function handlePostRequest(req, res) {
    const { text } = req.body;
    if (!text) {
        return res.status(400).send({ message: 'Text is required' });
    }

    try {
        const newSubmission = await Input.create( { Input: text } );
        res.status(201).json({ message: 'Submission saved successfully' });
    } catch (err) {
        console.error('Error saving submission:', err);
        res.status(500).json({ message: 'Failed to save submission' });
    }
}

module.exports = {
    handleGetRequest,
    handlePostRequest,
};
