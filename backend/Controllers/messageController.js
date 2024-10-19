const Message = require('../Model/Message');

// Create a new message
exports.createMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;  // Destructure name along with email and message
        console.log(name, email, message);
        
        // Create a new message document with the name field
        const newMessage = new Message({
            name,
            email,
            message
        });

        // Save to database
        await newMessage.save();

        res.status(201).json({ success: true, data: newMessage });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all messages
exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.find();

        res.status(200).json({ success: true, data: messages });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
