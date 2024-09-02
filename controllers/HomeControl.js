const Input = require('../Models/Input');

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
    handlePostRequest,
};
