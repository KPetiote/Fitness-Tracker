// WORKOUT MODEL
// ---------------------------------------------------------------------------

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter the exercise type"
            },
            name: {
            type: String,
                trim: true,
                required: "Please enter the exercise name"
            },
            duration: {
                type: Number,
                required: "Please enter the exercise duration in minutes"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
    );

    workoutSchema.virtual("totalDuration").get(function() {
        return this.exercises.reduce((total, exercise) => {
            return total + exercise.duration;
        }, 0);
    });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;