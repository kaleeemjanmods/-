const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["KALEEM","whois"], 
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*╭━━〔 KALEEM-MD 〕━━┈⊷*

*👋 HELLO ${pushname}*

*╰──────────────┈⊷*
*╭━━━〔 MY ABOUT 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs ᴀᴡᴀɪs-ᴍᴅ-ʙᴏᴛ*
*┃★│* *ᴄʀᴇᴀᴛᴇʀ : ᴀᴡᴀɪs*
*┃★│* *ʀᴇᴀʟ ɴᴀᴍᴇ : ᴍ ᴀᴡᴀɪs*
*┃★│* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ : ᴀᴡᴀɪs xᴅ*
*┃★│* *ᴀɢᴇ : 18 ʏᴇᴀʀ*
*┃★│* *ᴄɪᴛʏ : ᴘᴇʀsɴᴏʟ ʜᴀɪ*
*┃★│* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • SPECIAL THANKS FOR • ]*
*╭━━━〔 THANKS TO 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *▢ᴀʟᴛᴀᴍᴀsʜ(ʟᴏᴠᴇʟʏ ᴅᴇᴠɪʟ)*
*┃★│* *▢ᴀʜᴍᴇᴅ(xɪᴋʀᴀᴛᴏsx)*
*┃★│* *▢ᴜᴍᴀʀ(ᴅᴀʀᴋ ᴅᴇᴠɪʟ⁷¹⁹)*
*┃★│* *▢ᴜsᴍᴀɴ(sɪʟᴇɪɴᴛ ʟᴏᴠᴇʀ)*
*┃★│* *▢ᴊᴀᴡᴀᴅ(ᴅᴊ)*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*

*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙺𝙰𝙻𝙴𝙴𝙼𝚉𝙸𝙳𝙳𝙸 ᴍᴅ⁷⁸³
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:`https://i.imgur.com/XM8Vadf.jpeg`},caption:about,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363369260614615@newsletter',
      newsletterName: 'KALEEM-MD',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
