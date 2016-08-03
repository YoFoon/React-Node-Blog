import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/blog');

module.exports = mongoose;