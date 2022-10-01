const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');


const workoutSchema = new Schema(
    {
    
        workoutText: {
            type: String,
            required: 'You need to leave a workout!',
            minlength: 1,
            maxlength: 540
        },
        workoutReps: {
            type: String,
            required: 'You must enter reps',
            minlength: 1,
            maxlength: 540

        },
        workoutRounds: {
            type: String,
            required: 'You need to leave a workout!',
            minlength: 1,
            maxlength: 540
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        comments: [commentSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

workoutSchema.virtual('commentCount').get(function () {
    return this.comments.length;
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;