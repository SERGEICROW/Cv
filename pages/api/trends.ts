const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_API_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_API_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_SECRET,
})

//TRENDING TOPICS
export default async function trending (req, res) {
    try {
        const id = req.query.woeid;
        const trends = await client.get('trends/place.json', {
            id,
        })
        res.send(trends)
    } catch (error) {
        console.log(error.message)
    }
}

//WOEID LOCATION (lat/long)
export function nearMe(req, res) {

    res.status(200).json({ name: 'John Doe' })
}