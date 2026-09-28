const mongoose = require('mongoose');
const dns = require('dns');

// Force Node.js to use Google DNS (fixes ISP DNS resolution issues with MongoDB Atlas)
dns.setServers(['8.8.8.8', '8.8.4.4']);

function connectToDB() {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log('Server is connected to DB'))
        .catch((err) => {
            console.error('DB connection error:', err);
            process.exit(1);
        });
}

module.exports = connectToDB;
