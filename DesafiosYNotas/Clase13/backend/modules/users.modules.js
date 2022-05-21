import mongoose from "mongoose"

const Schema = mongoose.Schema({
        userName: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    {
        timestamp: true
    }
)
export const UserModel = mongoose.model('Users', Schema);