const { Workout } = require('../models')


const resolvers = {

    Query: {
        workouts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Thought.find(params).sort({ createdAt: -1 });
        },

        workout: async (parent, { _id }) => {
            return Workout.findOne({ _id });
        },

    },

    Mutation: {

        addWorkout: async (parent, args, context) => {
            if (context.user) {
                const thought = await Workout.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { workout: workout._id } },
                    { new: true }
                );

                return workout;
            }

            throw new AuthenticationError('You need to be logged in!');

        }
    }
}

module.exports = resolvers