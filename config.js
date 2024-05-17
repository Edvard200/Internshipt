
const jsonConfig = {

    API_URL: "http://localhost:5001",
    WEBSITE_URL: "http://localhost:3000",
    IMG_URL: "http://localhost:5001",

    maillerConfig: {
        // host: 'smtp.gmail.com',
        // port: 465,
        // secure: true,
        // tls: { rejectUnauthorized: true },
        service: 'Gmail',
        auth: {
            user: 'noreplyexamplemail@gmail.com',
            pass: 'noraplymailpassword'
        }
    },

    languageData: [
        {
            languageId: 'english',
            locale: 'en',
            name: 'English',
            icon: 'us'
        }

    ],

    defaultLanguage: {
        languageId: 'english',
        locale: 'en',
        name: 'English',
        icon: 'us'
    }
}

if (process.env.NODE_ENV == 'development') {
    jsonConfig.API_URL = "http://localhost:5001"
    jsonConfig.WEBSITE_URL = "http://localhost:3001"
    jsonConfig.IMG_URL = "http://localhost:5001"
}


module.exports = jsonConfig