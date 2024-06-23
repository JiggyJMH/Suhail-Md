const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349022492498";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_37_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA4MixcbiAgICAgICAgMTExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2LFxuICAgICAgICA2NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODksXG4gICAgICAgIDc1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICA1OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNixcbiAgICAgICAgMjEwLFxuICAgICAgICA3OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgODEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzksXG4gICAgICAgIDk1LFxuICAgICAgICAzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDExMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgODUsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MSxcbiAgICAgICAgODMsXG4gICAgICAgIDgwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk4LFxuICAgICAgICA5NyxcbiAgICAgICAgNDksXG4gICAgICAgIDc2LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxXV0NOM25hZkZlajZMV0o3WC9WYkVVUUFTaTVkaWUydWNCN1RJcnBvSEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImd5cHZNMmZPUVptcmgyZzExNXBvQ3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2VmYzJkZjAtZGZiNS00Nzk4LTg4YjAtZTFiMzEyMGMyMDU2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NSxcbiAgICAgIDExOCxcbiAgICAgIDI0MCxcbiAgICAgIDEzNyxcbiAgICAgIDQxLFxuICAgICAgMjUyLFxuICAgICAgMTM3LFxuICAgICAgMTQzLFxuICAgICAgMTkyLFxuICAgICAgODIsXG4gICAgICAyMDAsXG4gICAgICAxMDIsXG4gICAgICA0OCxcbiAgICAgIDk3LFxuICAgICAgMjEwLFxuICAgICAgMjA2LFxuICAgICAgMjE0LFxuICAgICAgMSxcbiAgICAgIDEwMCxcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk0LFxuICAgICAgMjM3LFxuICAgICAgMTg0LFxuICAgICAgMTYzLFxuICAgICAgMTcyLFxuICAgICAgMjU1LFxuICAgICAgNTksXG4gICAgICA2NSxcbiAgICAgIDIsXG4gICAgICAyNDcsXG4gICAgICA5MixcbiAgICAgIDIzNSxcbiAgICAgIDIxNyxcbiAgICAgIDE0LFxuICAgICAgMTA3LFxuICAgICAgMTgsXG4gICAgICAxNzAsXG4gICAgICAxMTUsXG4gICAgICAxNzYsXG4gICAgICAyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRWDNROFBHNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyMjQ5MjQ5ODoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkpJR0dZIE1FTUUgSE9VU0UhXCIsXG4gICAgXCJsaWRcIjogXCIxNDgyMTUwOTM1ODgwMjM6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVM5Ly9vQkVPT3Q0TE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0bm1jQkdId3JRVHVCNTFWR3k2VFVwZ1ExUmxTcTd6cEdISSt6LzFHd1FNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhGSmtRb012bHFZMCtkYUlxdTRLL3lCSEFha1B3aWQ3ZmdBWjdocnNWN1V6dkZrV2ZCME1iSmE1VUdCdjJ5cHpkbXpIVjRiTW5kK2Z2Sml6QWsxK0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJzOFJJUHp3QlpRRE1peTA2U0x2bEQrRzY1UlhKK2t5NUZQcEFDN1pZcVZlNzEzbG5qMEo3SVcwN1F3d3JyYzg2cTlZSHFBaW1zNG5FN3RVMHNVL2d3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjI0OTI0OTg6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTE0NjIxNFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
