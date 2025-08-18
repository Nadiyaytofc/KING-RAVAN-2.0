//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝙺𝙸𝙽𝙶 𝚁𝙰𝚅𝙰𝙽 𝙼𝙳.                                                      //
//                                                                                                      //
//                                         Ｖ：4.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░                                           
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝙺𝙸𝙽𝙶 𝚁𝙰𝚅𝙰𝙽 2.0
//  * @version      : 4.0
//  * @author       : 𝙽𝙰𝙳𝙸𝙻 𝙷𝙰𝙽𝚂𝙰𝙹𝙰
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝙺𝙸𝙽𝙶 𝚁𝙰𝚅𝙰𝙽 𝙼𝙳, A Multi-functional WhatsApp bot created by Nadil Hansaja.
//*
//*
//
//
//WhatsApp: ++94740952053
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Nadiyaytofc/
//   * Credit To Nadil Hansaja
//   * © 2025 © 𝙺𝙸𝙽𝙶 𝚁𝙰𝚅𝙰𝙽 𝙼𝙳.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "KING-RAVAN-2.0~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEhCTjRTWGx4dy81S2ZURnladHV4dDVRVkpJaUQ5bWlDSE4xMEE1Z1NFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmJSUGgweXgrY2J5dmd4dUZnQ3RsVHdjaWNSWmZuTDJHT1dudlNKekhWYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSFEySi9qN2JFWXpkYzJBT1hXZkgwbjlwVEFEOHdjVlRkcm5YMjN5YWxjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPR0tYaERTZ1VISUplc3Nic0tiRGttcEVmVmN5a0RYaU1IQkNZc2JTcVZzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndGYVN0R2t1bklPQnRxREtqUG5WU1N0Zzd6dkxUMFdqRW5TMytMS0RRR2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InovZUd6aHlsMjBaSUFBcEhqMG16ZmlQVmQ1WXZtUUFBbC9BTUlKdnlWQ2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0JYNHA3TzZvcmw2VXJsdk9CSSsxOEc0MjU1SEVGTUxNbnFnOFpPSGVtRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWViODNIZHlhN3pyK09ZQm5ibm1NVHZzN1BMQi93OCtHQnNheHFia20zQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlI4T0RXRzRwZFlxNTl0bW9ZY0FZaHN2MFNocHp3TkpNK1l0SVMzZTNqeVJKL0NVcjdqMkVpemNrTDliOVFyQlg0Rk9uQUxTOUlWdHRaeU4vZi82YWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE2LCJhZHZTZWNyZXRLZXkiOiJ5aHA5M24xNFZldHlXRGh4RU1qWjk3MEc1RWVrYWxYVko4STU2NzVBR1c4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpTlNQZWlUWVJ4R0xGakhUNTRaejVRIiwicGhvbmVJZCI6IjY0MWYyNmNjLTliMzYtNGI1OC1hMDU2LTg1ZjIxOGQ4NGYyZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuM1lrbHZ1QnFicHhNWHhJOGtBWHczNTFUL0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXhWU0JaNTdXdHhuODFOQmlPbzcrbk5wUWYwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilo1NVlOUDg2IiwibWUiOnsiaWQiOiI5NDc0MDk1MjA1Mzo1MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEzNjE1NTM3OTAzMjMxNDo1MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tPa21DTVEzOW1LeFFZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVlaEpOVnYrVEdtcWxpN2RVVXErTWc0RnAyM0hWa3pxeDFrcHpjOURUSGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImlGRmJiR1cyamtUL0t0Q3hZRHNXWXYzZXBreVdCeFgrR2dJQ1ZXQWorZnhWdFJiWXpXTEtIMTkvRHdKMzFCemZwU1JyOFNkR1BETnU4ZTVRQkl5VUFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJUL0JxV25lL0JGM2dDZVpoVkUxVWNoTjZXbXhaUDZZNlBaVGhWTHZ0V2hiaDZpeUhOWXRicEoyRmhIdFpWQ1Q4b0VMaTN4UU1vKzBGc09IUkJzenloQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzQwOTUyMDUzOjUyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVYb1NUVmIva3hwcXBZdTNWRkt2aklPQmFkdHgxWk02c2RaS2MzUFEweDUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTQ5MTU2NCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIn0=",
PORT: process.env.PORT || "8000"
};
