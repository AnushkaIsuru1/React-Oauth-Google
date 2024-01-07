const express = require("express")
const axios = require("axios");
const cors = require('cors')
const app = express()
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
    secure: true,
}))

app.use(express.json())

app.post("/userinfo", async (req, res) => {
    const { access_token } = req.body

    const userInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        }
    )

    console.log(userInfo.data)
    res.status(200).json({ user:userInfo.data})
})

app.listen(5000, () => {
    console.log("Server listening")
})