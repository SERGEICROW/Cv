const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_API_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_API_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_SECRET,
})

//WOEID LOCATION (lat/long)
export default async function nearMe(req, res) {
    try {
        const {lat, long} = req.query
        const response = await client.get('/trends/closest.json', {
            lat,
            long,
        })
        res.send(response)
    } catch (error) {
        console.log(error.message)
    }
}