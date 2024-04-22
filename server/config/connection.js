require('dotenv').config();
const mongoose = require('mongoose');
console.log("connection");
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/SpaMalugeReservationSystem');

// console.log(process.env.VITE_REACT_APP_MONGODB_URI, "one");
// console.log(process.env.REACT_APP_MONGODB_URI, "two");
// console.log(process.env.MONGODB_URI, "three");


module.exports = mongoose.connection;
