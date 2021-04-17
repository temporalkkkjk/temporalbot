const a = '```'

exports.wait = () => {
	return`𝗦𝗮𝗯𝗮𝗿 𝘆𝗮𝗮 𝗹𝗮𝗴𝗶 𝗽𝗿𝗼𝘀𝗲𝘀`
}

exports.succes = () => {
	return`*「 Sukses 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GROUP BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 𝗕𝗘𝗟𝗨𝗠 𝗠𝗘𝗠𝗕𝗨𝗔𝗧 𝗞𝗧𝗣 」*\n─────────────────────────\n*Cara mendaftar : ${prefix}daftar nama|umur*\n*Contoh : ${prefix}daftar mlspacetoon|17*\n─────────────────────────`
}

exports.rediregis = () => {
	return`*「 𝗞𝗔𝗠𝗨 𝗦𝗨𝗗𝗔𝗛 𝗠𝗘𝗡𝗗𝗔𝗙𝗧𝗔𝗥 」*\n─────────────────────────\n*Kamu sudah terdaftar di dalam database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「Khusus Group」*`
}

exports.ownerb = () => {
	return`*「Khusus Owner Bot」*`
}

exports.ownerg = () => {
	return`*「Khusus Owner Group」*`
}

exports.admin = () => {
	return`*「Khusus Admin Group」*`
}

exports.badmin = () => {
	return`*「Bot Harus Jadi Admin」*`
}

exports.nsfwoff = () => {
	return`*NSFW ga aktif*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*Format salah/text kosong*`
}

exports.clears = () => {
	return`*Clear All Success*`
}

exports.pc = () => {
	return`*「 REGISTERASI 」*\n──────────────────────────\nUntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 KARTU TANDA PENDUDUK 」/「KTP」*\n─────────────────────\nKamu sudah terdaftar dengan data \n\nᐈ 𝗡𝗮𝗺𝗮: ${namaUser}\nᐈ 𝗡𝘂𝗺𝗯𝗲𝗿: wa.me/${sender.split("@")[0]}\nᐈ 𝗨𝗺𝘂𝗿: ${umurUser}\nᐈ 𝗪𝗮𝗸𝘁𝘂 𝗣𝗲𝗻𝗱𝗮𝗳𝘁𝗮𝗿𝗮𝗻: ${time}\nᐈ 𝗡𝘂𝗺𝗯𝗲𝗿 𝗦𝗡: ${serialUser}\nᐈ 𝗖𝗮𝘁𝗮𝘁𝗮𝗻: Diharapkan Jangan Sampai Hilang\nKarena ini Penting\n\nSilahkan untuk menampilkan fitur ketik ${prefix}help/menu`
}

exports.cmdnf = (prefix, command) => {
	return`Maaf command *${prefix}${command}* tidak di temukan\coba ketik *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ᐈ Level: ${getLevelingLevel(sender)}*\n*ᐈ Jenis command : ${command}*\n*ᐈ Syarat Level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ᐈ Level: ${getLevelingLevel(sender)}*\n*ᐈ Jenis command : ${command}*\n*ᐈ Syarat Level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ᐈ Level: ${getLevelingLevel(sender)}*\n*ᐈ Jenis command : ${command}*\n*ᐈ Syarat Level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ᐈ Level: ${getLevelingLevel(sender)}*\n*ᐈ Jenis command : ${command}*\n*ᐈ Syarat Level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ᐈ Level: ${getLevelingLevel(sender)}*\n*ᐈ Jenis command : ${command}*\n*ᐈ Syarat Level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*ᐈ Level: ${getLevelingLevel(sender)}*\n*ᐈ Jenis command : ${command}*\n*ᐈ Syarat Level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi) => { 
	return `${a}Simple WhatsApp Bot${a}
⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥


⍚  ${a}ABOUT USER${a}
╭─────────────────────
│⇨ 𝗡𝗮𝗺𝗮 :  ${pushname}
│⇨ 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 :  ${premi}
│⇨ 𝗡𝘂𝗺𝗯𝗲𝗿 :  wa.me/${sender.split("@")[0]}
│⇨ 𝗗𝘂𝗶𝘁 :  Rp ${uangku}
│⇨ 𝗫𝗣 :  ${getLevelingXp(sender)} / ${reqXp} 
│⇨ 𝗟𝗲𝘃𝗲𝗹 :  ${getLevelingLevel(sender)}
│⇨ 𝗥𝗼𝗹𝗲 :  ${role}
│⇨ 𝗗𝗮𝘁𝗮𝗯𝗮𝘀𝗲 𝗨𝘀𝗲𝗿 : ${_registered.length}
│⇨ 𝗕𝗼𝘁 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 :  ${a}3.0${a}
╰─────────────────────

${a}⍚ HELPER${a}

╭─────────────────────
│${a}⇨ ${prefix}info${a}
│${a}⇨ ${prefix}owner${a}
│${a}⇨ ${prefix}report${a}
│${a}⇨ ${prefix}donasi${a}
│${a}⇨ ${prefix}request${a}
╰─────────────────────

${a}⍚ OWNER MENU${a}

╭─────────────────────
│ ${a}ᐈ ${prefix}bc${a}
│ ${a}ᐈ ${prefix}addbadword${a}
│ ${a}ᐈ ${prefix}delbadword${a}
│ ${a}ᐈ ${prefix}bcgc${a}
│ ${a}ᐈ ${prefix}kickall${a}
│ ${a}ᐈ ${prefix}setreply${a}
│ ${a}ᐈ ${prefix}setprefix${a}
│ ${a}ᐈ ${prefix}clearall${a}
│ ${a}ᐈ ${prefix}block${a}
│ ${a}ᐈ ${prefix}unblock${a}
│ ${a}ᐈ ${prefix}leave${a}
│ ${a}ᐈ ${prefix}event [1/0]${a}
│ ${a}ᐈ ${prefix}clone${a}
│ ${a}ᐈ ${prefix}setppbot${a}
╰─────────────────────

${a}⍚ MAKER MENU${a}

╭─────────────────────
│ ${a}ᐈ ${prefix}sticker${a}
│ ${a}ᐈ ${prefix}stickerhide${a}
│ ${a}ᐈ ${prefix}quotemaker${a}
│ ${a}ᐈ ${prefix}glitchtext${a}
│ ${a}ᐈ ${prefix}qrcode${a}
│ ${a}ᐈ ${prefix}nulis${a}
│ ${a}ᐈ ${prefix}nulis2${a}
│ ${a}ᐈ ${prefix}attp${a}
│ ${a}ᐈ ${prefix}tahta${a}
│ ${a}ᐈ ${prefix}vinta${a}
│ ${a}ᐈ ${prefix}galaxybat${a}
│ ${a}ᐈ ${prefix}pornlogo${a}
│ ${a}ᐈ ${prefix}phcomment${a}
│ ${a}ᐈ ${prefix}gplaybutton${a}
│ ${a}ᐈ ${prefix}googletext${a}
│ ${a}ᐈ ${prefix}thunder${a}
╰─────────────────────
 
${a}⍚ FUN MENU${a}
 
╭─────────────────────
│ ${a}ᐈ ${prefix}alay${a}
│ ${a}ᐈ ${prefix}jadian${a}
│ ${a}ᐈ ${prefix}pantun${a}
│ ${a}ᐈ ${prefix}tercantik${a}
│ ${a}ᐈ ${prefix}terganteng${a}
│ ${a}ᐈ ${prefix}terbeban${a}
│ ${a}ᐈ ${prefix}lirik${a}
│ ${a}ᐈ ${prefix}artinama${a}
│ ${a}ᐈ ${prefix}chord${a}
│ ${a}ᐈ ${prefix}bisakah${a}
│ ${a}ᐈ ${prefix}kapankah${a}
│ ${a}ᐈ ${prefix}apakah${a}
│ ${a}ᐈ ${prefix}rate${a}
│ ${a}ᐈ ${prefix}slap${a}
│ ${a}ᐈ ${prefix}tampar${a}
│ ${a}ᐈ ${prefix}katadilan${a}
│ ${a}ᐈ ${prefix}ceritahorror${a}
│ ${a}ᐈ ${prefix}hurufterbalik${a}
│ ${a}ᐈ ${prefix}moddroid${a} *[Premium]*
│ ${a}ᐈ ${prefix}happymod${a} *[Premium]*
│ ${a}ᐈ ${prefix}playstore${a}
│ ${a}ᐈ ${prefix}katadilan${a}
│ ${a}ᐈ ${prefix}bacotandilan${a}
│ ${a}ᐈ ${prefix}katadoi${a}
│ ${a}ᐈ ${prefix}hemkel${a}
│ ${a}ᐈ ${prefix}cogan${a}
│ ${a}ᐈ ${prefix}cecan${a}
│ ${a}ᐈ ${prefix}quotes${a}
╰─────────────────────
 
${a}⍚ MUTUAL${a}
 
╭─────────────────────
│ ${a}ᐈ ${prefix}mutual${a}
│ ${a}ᐈ ${prefix}next${a}
╰─────────────────────
 
${a}⍚ MEDIA MENU${a}

╭─────────────────────
│ ${a}ᐈ ${prefix}brainly${a} *[Premium]*
│ ${a}ᐈ ${prefix}pinterest${a}
│ ${a}ᐈ ${prefix}resepmasakan${a}
│ ${a}ᐈ ${prefix}igstalk${a}
│ ${a}ᐈ ${prefix}igstory${a}
│ ${a}ᐈ ${prefix}bitly${a}
│ ${a}ᐈ ${prefix}tiktokstalk${a} *[Premium]*
│ ${a}ᐈ ${prefix}ssweb${a}
│ ${a}ᐈ ${prefix}kbbi${a}
│ ${a}ᐈ ${prefix}quran${a}
│ ${a}ᐈ ${prefix}quransurah${a}
│ ${a}ᐈ ${prefix}trendtweet${a}
│ ${a}ᐈ ${prefix}infocuaca${a}
│ ${a}ᐈ ${prefix}resepmasakan${a}
╰─────────────────────
 
${a}⍚ NSFW${a}

╭─────────────────────
│ ${a}ᐈ ${prefix}lomly${a}
│ ${a}ᐈ ${prefix}wibu${a}
│ ${a}ᐈ ${prefix}anjing${a}
│ ${a}ᐈ ${prefix}blowjob${a}
│ ${a}ᐈ ${prefix}nekonime${a}
│ ${a}ᐈ ${prefix}pokemon${a}
│ ${a}ᐈ ${prefix}husbu${a}
│ ${a}ᐈ ${prefix}nangis${a}
│ ${a}ᐈ ${prefix}cium${a}
│ ${a}ᐈ ${prefix}peluk${a}
│ ${a}ᐈ ${prefix}ranime${a}
╰─────────────────────
 
${a}⍚ LIMIT & DUIT${a}

╭─────────────────────
│ ${a}ᐈ ${prefix}limit${a}
│ ${a}ᐈ ${prefix}buylimit${a}
│ ${a}ᐈ ${prefix}transfer${a}
│ ${a}ᐈ ${prefix}dompet${a}
│ ${a}ᐈ ${prefix}giftlimit${a}
│ ${a}ᐈ ${prefix}leaderboard${a}
╰─────────────────────
 
${a}⍚ GROUP MENU${a}

╭─────────────────────
│ ${a}ᐈ ${prefix}infogroup${a}
│ ${a}ᐈ ${prefix}delete${a}
│ ${a}ᐈ ${prefix}hidetag${a}
│ ${a}ᐈ ${prefix}blocklist${a}
│ ${a}ᐈ ${prefix}grouplist${a}
│ ${a}ᐈ ${prefix}level${a}
│ ${a}ᐈ ${prefix}linkgc${a}
│ ${a}ᐈ ${prefix}tagall${a}
│ ${a}ᐈ ${prefix}otagall${a}
│ ${a}ᐈ ${prefix}setpp${a}
│ ${a}ᐈ ${prefix}add${a}
│ ${a}ᐈ ${prefix}kick${a}
│ ${a}ᐈ ${prefix}setname${a}
│ ${a}ᐈ ${prefix}setdesc${a}
│ ${a}ᐈ ${prefix}demote${a}
│ ${a}ᐈ ${prefix}promote${a}
│ ${a}ᐈ ${prefix}listadmin${a}
│ ${a}ᐈ ${prefix}group [buka/tutup]${a}
│ ${a}ᐈ ${prefix}leveling [enable/disable]${a}
│ ${a}ᐈ ${prefix}nsfw [1/0]${a}
│ ${a}ᐈ ${prefix}simih [1/0]${a}
│ ${a}ᐈ ${prefix}welcome [1/0]${a}
│ ${a}ᐈ ${prefix}antilink [1/0]${a}
│ ${a}ᐈ ${prefix}antivirtex [on/off]${a}
│ ${a}ᐈ ${prefix}nobadword [enable/disable]${a}
╰─────────────────────
 
${a}⍚ AUDIO${a}

╭─────────────────────
│ ${a}ᐈ ${prefix}addsticker${a}
│ ${a}ᐈ ${prefix}getsticker${a}
│ ${a}ᐈ ${prefix}stickerlist${a}
│ ${a}ᐈ ${prefix}addvideo${a}
│ ${a}ᐈ ${prefix}getvideo${a}
│ ${a}ᐈ ${prefix}videolist${a}
│ ${a}ᐈ ${prefix}getimage${a}
│ ${a}ᐈ ${prefix}addImage${a}
│ ${a}ᐈ ${prefix}imagelist${a}
│ ${a}ᐈ ${prefix}addaudio${a}
│ ${a}ᐈ ${prefix}getaudio${a}
│ ${a}ᐈ ${prefix}audiolist${a}
╰─────────────────────
 
 ${a}⍚ SONG${a}
 
╭─────────────────────
│ ${a}ᐈ ${prefix}spotifysearch${a}
│ ${a}ᐈ ${prefix}joox${a} *[Premium]*
╰─────────────────────

${a}⍚ NEW REQUEST${a}
 
╭─────────────────────
│ ${a}ᐈ ${prefix}listhargadmff${a}
│ ${a}ᐈ ${prefix}spotifysearch${a} 
╰─────────────────────
 
☬  ɾìցհէ  հąղժ  օƒ  էհҽ  ҍօէ 
╭───────────
│ᴍʜᴀɴᴋʙᴀʀʙᴀʀ <ᴏʀɪ
│ᴀғғɪsᴊᴜɴɪᴀɴᴛᴏ <ᴅᴇᴠ 
│ғᴀᴅʜɪʟɢʀᴀᴘʜʏ <ᴘᴀʀᴛɴᴇʀ 
│ᴍʟsᴘᴀᴄᴇᴛᴏᴏɴ <ᴀᴜᴛʜᴏʀ/ʀᴇᴘᴏsɪᴛᴏʀʏ 
╰───────────

${a}⍚ SOSMED${a}

╭───────────
│youtube : stardustlrlr
│telegram : padlikodil
│instagram : itspapoy
╰───────────
 ⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥⏥
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
⍚ *「 SELAMAT!!🚀 」*
╭─────────────────────
│ᐈ *Nama* : ${pushname}
│ᐈ *Number* : wa.me/${sender.split("@")[0]}
│ᐈ *XP* : ${getLevelingXp(sender)}
│ᐈ *Limit* : +3
│ᐈ *Role*: ${role}
│ᐈ *Level* : ${getLevel}  ~>  ${getLevelingLevel(sender)}
╰─────────────────────
`}
 
exports.limitend = (pushname) => {
	return`*Maaf ${pushname} limit kamu hari ini habis*\n*Silahkan apabila ingin membeli limit hubungi own / bisa juga lewat naik level*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Limit anda tersisa : ${limitCounts}

NOTE : Untuk mendapatkan limit. Kamu bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah Parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*⇨ 「 ATM 」*\n╭───────────\n│ *Nama* : ${pushname}\n│ *Number* : ${sender.split("@")[0]}\n│ *Duit* : ${uangkau}\n╰───────────`
}

exports.premadd = (pnom) => {
	return`
*「 PREMIUM ADD 」*
╭───────────
│ᐈ *Name* : ${pnom}
│ᐈ *Expired* : 30 DAYS*
│ *Thanks for ORDER PREMIUM*
╰───────────`
}

exports.dellprem = (hnom) => {
	return`
*「 PREMIUM DELETE 」*
╭───────────
│ᐈ *Name* : ${hnom}
│ᐈ *Expired* : umm:v*
│ ${a}Thanks For ORDER PREMIUM BACK SOON for BUY-ing AGAIN${a}
╰───────────`
}

exports.premon = (pushname) => {
	return`MAAF ${pushname} KAMU BUKAN USER PREMIUM xixixi`
}

