//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @X-TECH
//Instagram: xtechcorporation1
//Telegram: t.me/xtechcorpotation1
//GitHub: @X-TECH
//WhatsApp: +2250500107362
//want more free bot scripts? subscribe to my youtube channel: https://whatsapp.com/channel/0029VadaaRZK5cDOTh6sMD41

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: X-TECH" //ur yt chanel name
global.socialm = "GitHub: X-TECH" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'Cheems Bot MD V11' //ur bot name
global.ownernumber = '2250141253296' //ur owner number
global.ownername = 'X-TECH' //ur owner name
global.websitex = "https://youtu.be/X-TECH"
global.wagc = "https://whatsapp.com/channel/0029VadaaRZK5cDOTh6sMD41"
global.themeemoji = '🪀'
global.wm = "X-TECH Bot Inc."
global.botscript = 'https://github.com/Joker15-tech/CheemsBot-MD11/' //script link
global.packname = "X-TECH"
global.author = "X-TECH\n\n+2250500107362"
global.creator = "2250500107362@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["22505001073652"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
