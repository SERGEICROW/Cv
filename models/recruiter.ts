import mongoose from 'mongoose'

const RecruiterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Company name required :)"],
        maxlength: [20, "Name cannot be more than 40 characters"],
    },
    mail:{
        type: String,
        required: [true, "Recruiter mail required :)"],
        maxLength: [40, "Mail cannot exceed more than 40 characters"],
    },
    comment:{
        type: String ,
        required: [false],
        maxLength: [150, "Comment cannot exceed more than 150 characters"]
    },
})

export default mongoose.models.Recruiter || mongoose.model('Recruiter', RecruiterSchema)