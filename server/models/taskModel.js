import mongoose from 'mongoose'

const Schema = mongoose.Schema

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
}, { timestamps: true })

const Task = mongoose.model('taskModel',taskSchema)

export default Task;