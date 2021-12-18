import dbConnect from "../../lib/dbConnect";
import Recruiter from "../../models/recruiter";

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const pets = await Recruiter.find({}) /* find all the data in our database */
                res.status(200).json({ success: true, data: pets })
            } catch (error) {
                res.status(400).json({ success: false })
                console.log("DataIndex Get error")
            }
            break
        case 'POST':
            try {
                const pet = await Recruiter.create(
                    req.body
                ) /* create a new model in the database */
                res.status(201).json({ success: true, data: pet })
                console.log("DataIndex Post Success")
            } catch (error) {
                res.status(400).json({ success: false })
                console.log("DataIndex Post error")
            }
            break
        default:
            res.status(400).json({ success: false })
            console.log("whole shit is wrong")
            break
    }
}
