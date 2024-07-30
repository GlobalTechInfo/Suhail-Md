const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Lunmera:Lunmera@atlascluster.ahk537j.mongodb.net/"
  "
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://Lunmera:Lunmera@atlascluster.ahk537j.mongodb.net/"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923051391007";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_17_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDgyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDU4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDExNixcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDcsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDgyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNixcbiAgICAgICAgMTA3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2NixcbiAgICAgICAgNjYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDg5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODEsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDgxLFxuICAgICAgICA5NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDkxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyLFxuICAgICAgICA3NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzksXG4gICAgICAgIDY1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4LFxuICAgICAgICA1OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgODcsXG4gICAgICAgIDYyLFxuICAgICAgICAzNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI2LFxuICAgICAgICA2NixcbiAgICAgICAgODEsXG4gICAgICAgIDc0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQzLFxuICAgICAgICAxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiclJUUUNjQ3pVV3Q1MzdjcWttRTRJL1A0RVFzR0FLZ2xlRk1QbzN5Z1E0Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNTEzOTEwMDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjc0OTI4NEEzNzFFMUY0NDZFOUU4REM5RkEzODg3MTIyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTA4MTgzNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBRHJzaEJ4SFFhS0dCdkh2ZUVnTnFnXCIsXG4gIFwicGhvbmVJZFwiOiBcImI2YmRiYTVmLTNmNDUtNDJkNC1hNjc3LTMwNWU3Yjk4ZmUwZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzYsXG4gICAgICAyMTAsXG4gICAgICAyMTksXG4gICAgICAxMjEsXG4gICAgICAxOTEsXG4gICAgICAxMzgsXG4gICAgICA2MixcbiAgICAgIDkyLFxuICAgICAgOCxcbiAgICAgIDE2MyxcbiAgICAgIDQsXG4gICAgICAxMjYsXG4gICAgICA2OCxcbiAgICAgIDM5LFxuICAgICAgMTgxLFxuICAgICAgMTUzLFxuICAgICAgMTA1LFxuICAgICAgMjMsXG4gICAgICA3OSxcbiAgICAgIDIzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NCxcbiAgICAgIDE2NyxcbiAgICAgIDIxMyxcbiAgICAgIDI1MCxcbiAgICAgIDQ0LFxuICAgICAgMjA0LFxuICAgICAgNTAsXG4gICAgICAxMzYsXG4gICAgICAxOTEsXG4gICAgICA3NSxcbiAgICAgIDE5OCxcbiAgICAgIDksXG4gICAgICA2NSxcbiAgICAgIDEyNyxcbiAgICAgIDE5NSxcbiAgICAgIDI2LFxuICAgICAgMTY2LFxuICAgICAgNzMsXG4gICAgICA0NyxcbiAgICAgIDkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRNTDNHQkNFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNTEzOTEwMDc6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyOTI3OTE4Njk0NTQ2OjY3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09maXZwY0hFT08vMXJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL0Framl0UnNzbGpiWE9LWWNHNWtROGJ4VXZHcnRrRTJpN0ErcmkvbWFYcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsTXJOUHZmZjQwNnRvMG9Md1ZwYTYwRDlyTGVGRHI3VHlnUXFoU1hMaFkyVzh1UkUrRVM5UWhPMjlMQUkyRU9XQ2lTZDJpVW5QQXMva0FCR0pyamZEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLN3QrakYzL3FvaXhRUUJ0VjBzdGlXeHFtVE9uUHN0WjRQR21yN0x4bzhWWHgxR0xEakJncXlKY3piZjZKdTBZUTUzeS9IMnhNMTBlMzdoaUZJdkREUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNTEzOTEwMDc6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDgxODMxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ0dSXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDR1IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1QXU0eVQwWDlLMnpjeTIwZzh1UTJIRktaMjFqSStMYjZCWmxIdHU2WGVrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MjgzMTExNDEsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SUHAIL-V5",
  ownername:process.env.OWNER_NAME|| "STRANGER",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "2495uwuio90ox0240xm1964awx8hgvxxtdsj7lqx9436vw699xnlqzxnon2yr7fu",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
