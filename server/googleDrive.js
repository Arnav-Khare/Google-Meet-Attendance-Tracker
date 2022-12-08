const {google} = require('googleapis')
const path = require('path')
const fs = require('fs')

const CLIENT_ID = '1064833221884-5abr2t8kc8d047ig4unto4srudhb1q11.apps.googleusercontent.com'

const CLIENT_SECRET ='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'

const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04hcizHkRPS9uCgYIARAAGAQSNwF-L9Ir5wQJY7nDQlptGgNJwK6SBG869xencdipZBbIKX_YdFF1-6-HNorwccV5l8uAmijZAbA'


const oauth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI);


oauth2Client.setCredentials({refresh_token:REFRESH_TOKEN})

const drive = google.drive({version:'v3',auth:oauth2Client})
const filePath = path.join(__dirname,'AttendanceList.csv')


async function uploadFile(params) {
    try{
        const response = await drive.files.create({
            requestBody:{
                name:'AttendancePercentage.xlsx',
                mimeType:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            },
            media:{
                mimeType:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                body:fs.createReadStream(filePath)
            }
        })
        generatePublic(response.data.id)
    } catch(err){
        console.log(err)
    }
}

async function generatePublic(id) {
    try{
        await drive.permissions.create({
            fileId:id,
            requestBody:{
                role:'reader',
                type:'anyone'
            }
        })
        const result = await drive.files.get({
            fileId:id,
            fields:'webViewLink,webContentLink'
        })
        console.log(result.data.webViewLink)
    }catch(err){
        console.log(err.message)
    }
}
uploadFile()