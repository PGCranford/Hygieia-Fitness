const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const workoutSchema = new Schema(
    {
        workoutText: {
            type: String,
            required: 'You need to leave a thought!',
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
        username: {
            type: String,
            required: true,
        },
        comments: [commentSchema],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

workoutSchema.virtual('commentCount').get(function () {
    return this.comments.length;
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
