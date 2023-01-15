// mention audio for hermit-md
// credit : @adithyan
const {
	AUDIO_DATA,
	SUDO
} = require('../config');
const {
	Function,
	getBuffer,
	toAudio,
	addAudioMetaData
} = require('../lib/')

const logo = 'https://i.imgur.com/JyK2yHy.jpeg'
var audios = ["https://i.imgur.com/SBWolI2.mp4", "https://i.imgur.com/lXE9t3L.mp4", "https://i.imgur.com/ZyPPNWj.mp4", "https://i.imgur.com/CHiH1Ok.mp4", "https://i.imgur.com/vVUN1xe.mp4", "https://i.imgur.com/QMUvh09.mp4", "https://i.imgur.com/Nx8dBjn.mp4", "https://i.imgur.com/9QNKWMn.mp4", "https://i.imgur.com/Rlv7O5h.mp4", "https://i.imgur.com/Bni0cdc.mp4", "https://i.imgur.com/2zNy69a.mp4", "https://i.imgur.com/HHWRLEa.mp4", "https://i.imgur.com/fK0DOJ9.mp4", "https://i.imgur.com/zMkGLbZ.mp4", "https://i.imgur.com/NeXRU7X.mp4", "https://i.imgur.com/k5qtbzS.mp4", "https://i.imgur.com/Akrcr9E.mp4", "https://i.imgur.com/6ZfpymF.mp4", "https://i.imgur.com/9BUXHmG.mp4", "https://i.imgur.com/Xuf9UGx.mp4", "https://i.imgur.com/mn87C4j.mp4", "https://i.imgur.com/SqvKkfN.mp4", "https://i.imgur.com/QlGimEG.mp4", "https://i.imgur.com/QlGimEG.mp4", "https://i.imgur.com/IPYQrD6.mp4", "https://i.imgur.com/901twqT.mp4", "https://i.imgur.com/d81mV8w.mp4", "https://i.imgur.com/e4VHiYA.mp4", "https://i.imgur.com/7spG05d.mp4", "https://i.imgur.com/HmmDtii.mp4", "https://i.imgur.com/PimvgR0.mp4", "https://i.imgur.com/vypRYOT.mp4", "https://i.imgur.com/0CnmJ5j.mp4", "https://i.imgur.com/hVOMauX.mp4", "https://i.imgur.com/q4XpvfS.mp4", "https://i.imgur.com/VIgl1PH.mp4", "https://i.imgur.com/s6DBUmb.mp4", "https://i.imgur.com/jnu5ePG.mp4", "https://i.imgur.com/A7pE40z.mp4", "https://i.imgur.com/ZCUJYpj.mp4", "https://i.imgur.com/pIojlNH.mp4", "https://i.imgur.com/m4uSg0C.mp4", "https://i.imgur.com/Y6O8bY0.mp4", "https://i.imgur.com/j46pnex.mp4", "https://i.imgur.com/lfjvAKn.mp4", "https://i.imgur.com/p2Rzjnt.mp4", "https://i.imgur.com/CHQqsuo.mp4", "https://i.imgur.com/3EKNJK7.mp4", "https://i.imgur.com/VeCyS1b.mp4", "https://i.imgur.com/Z2WWoiq.mp4", "https://i.imgur.com/ElpaPmr.mp4", "https://i.imgur.com/4p21jVL.mp4", "https://i.imgur.com/Z25JW0g.mp4", "https://i.imgur.com/gkb9ooR.mp4", "https://i.imgur.com/bzLrzrO.mp4", "https://i.imgur.com/cOgGcak.mp4", "https://i.imgur.com/PRJ3mSm.mp4", "https://i.imgur.com/V6dnSAe.mp4", "https://i.imgur.com/ILxdUaC.mp4", "https://i.imgur.com/Lsz1Du7.mp4", "https://i.imgur.com/RyvseEa.mp4", "https://i.imgur.com/P3WY8nw.mp4", "https://i.imgur.com/lr7b03h.mp4", "https://i.imgur.com/ax6EwOi.mp4", "https://i.imgur.com/X8iuOkP.mp4", "https://i.imgur.com/tnI2SR8.mp4", "https://i.imgur.com/3xMn61m.mp4", "https://i.imgur.com/J4o7x4v.mp4", "https://i.imgur.com/iP2m08x.mp4", "https://i.imgur.com/TxEuIoT.mp4", "https://i.imgur.com/i48PXIO.mp4", "https://i.imgur.com/aFiSnXr.mp4", "https://i.imgur.com/ejCIYrh.mp4", "https://i.imgur.com/ECRFsIB.mp4", "https://i.imgur.com/Ip6DS4W.mp4", "https://i.imgur.com/OUI5xGN.mp4", "https://i.imgur.com/oPqarKo.mp4", "https://i.imgur.com/SIMkxaM.mp4", "https://i.imgur.com/ylmq8rb.mp4", "https://i.imgur.com/u8fiCXb.mp4", "https://i.imgur.com/HncFK5F.mp4", "https://i.imgur.com/FrLp9AK.mp4", "https://i.imgur.com/VOmOawi.mp4", "https://i.imgur.com/6Xj5UXN.mp4", "https://i.imgur.com/sniwK4D.mp4", "https://i.imgur.com/Vy3YAXI.mp4", "https://i.imgur.com/eYxrNUf.mp4", "https://i.imgur.com/6QFiAoM.mp4", "https://i.imgur.com/lAbt9ew.mp4", "https://i.imgur.com/AcHHpqh.mp4", "https://i.imgur.com/t7HKmDj.mp4", "https://i.imgur.com/oJG0p1R.mp4", "https://i.imgur.com/hCnMXIt.mp4", "https://i.imgur.com/wduQUZ6.mp4", "https://i.imgur.com/Ec1fHg6.mp4", "https://i.imgur.com/ul9x6Fl.mp4", "https://i.imgur.com/B6DuFxf.mp4", "https://i.imgur.com/rTfVyTL.mp4", "https://i.imgur.com/f06QQMw.mp4", "https://i.imgur.com/hrOA7SZ.mp4", "https://i.imgur.com/iXCTeqC.mp4", "https://i.imgur.com/prb6egI.mp4", "https://i.imgur.com/j8vAgTm.mp4", "https://i.imgur.com/u1VIily.mp4", "https://i.imgur.com/O36QHKi.mp4", "https://i.imgur.com/tZC4JKd.mp4", "https://i.imgur.com/KganHHA.mp4", "https://i.imgur.com/DVTRwBc.mp4", "https://i.imgur.com/LqkVfhp.mp4", "https://i.imgur.com/SJiFZUE.mp4", "https://i.imgur.com/WARShRy.mp4", "https://i.imgur.com/hyQj2lx.mp4", "https://i.imgur.com/txkM9qW.mp4", "https://i.imgur.com/EprdRNJ.mp4", "https://i.imgur.com/pP6NHPf.mp4", "https://i.imgur.com/wODIlC7.mp4", "https://i.imgur.com/rRPnnCq.mp4", "https://i.imgur.com/xnfG7tg.mp4", "https://i.imgur.com/k1lq9vs.mp4", "https://i.imgur.com/qPkviUd.mp4", "https://i.imgur.com/gv29aga.mp4", "https://i.imgur.com/8HvdglZ.mp4", "https://i.imgur.com/EfYQnb9.mp4", "https://i.imgur.com/tIehcgC.mp4", "https://i.imgur.com/VwzM3wV.mp4", "https://i.imgur.com/WKpl7eS.mp4", "https://i.imgur.com/5Wnd52w.mp4", "https://i.imgur.com/eM3RypD.mp4", "https://i.imgur.com/b5kXK5V.mp4", "https://i.imgur.com/uLG516B.mp4", "https://i.imgur.com/hP2TXKm.mp4", "https://i.imgur.com/cZggJkF.mp4", "https://i.imgur.com/RV8CnnC.mp4", "https://i.imgur.com/5N26kvL.mp4", "https://i.imgur.com/RlOinJI.mp4", "https://i.imgur.com/58OLkaJ.mp4", "https://i.imgur.com/EiHuGSL.mp4", "https://i.imgur.com/tG96OYD.mp4", "https://i.imgur.com/qOVkgkM.mp4", "https://i.imgur.com/tkEmtyt.mp4", "https://i.imgur.com/PgM9o1N.mp4", "https://i.imgur.com/WoIAAyb.mp4", "https://i.imgur.com/w8ilFA2.mp4", "https://i.imgur.com/2AioS69.mp4", "https://i.imgur.com/5NuWuit.mp4", "https://i.imgur.com/rJl3Fmc.mp4", "https://i.imgur.com/MyGVzKY.mp4", "https://i.imgur.com/58sgxxs.mp4", "https://i.imgur.com/GT48zNT.mp4", "https://i.imgur.com/M5qqOOR.mp4", "https://i.imgur.com/C6XmNBQ.mp4", "https://i.imgur.com/qybdlnH.mp4", "https://i.imgur.com/6Mo0t4S.mp4", "https://i.imgur.com/7KutCqN.mp4", "https://i.imgur.com/vY8CfI7.mp4"]
Function({pattern: 'mention', fromMe: true, dontAddCommandList: true}, async (m, text) => {return;});
Function({
	on: 'messages.upsert',
	fromMe: false
}, async (message, match, client) => {
var _0x5b6a0f=_0x1135;(function(_0x369bd1,_0xbb049d){var _0xccb49=_0x1135,_0x343a1c=_0x369bd1();while(!![]){try{var _0x17f228=parseInt(_0xccb49(0x18e))/(-0x41*0x59+0x1*0x1537+0x163)+-parseInt(_0xccb49(0x190))/(-0x51b*0x4+-0x499*0x2+0x1da0)*(parseInt(_0xccb49(0x18a))/(0x185*0xf+0x1f20+-0x35e8))+parseInt(_0xccb49(0x193))/(0xb5e+-0x82d*0x3+-0xd2d*-0x1)+parseInt(_0xccb49(0x186))/(-0x11d1+0x24c+0xf8a)*(-parseInt(_0xccb49(0x18f))/(-0x52d*0x6+0x1*0x6fb+0x1819))+parseInt(_0xccb49(0x192))/(-0x1*-0x1fa5+0x1*0x989+-0x2927)+-parseInt(_0xccb49(0x185))/(0x1*0x1bfa+-0x59c*-0x1+0x218e*-0x1)*(parseInt(_0xccb49(0x188))/(-0x2485*0x1+0x228d+-0x13*-0x1b))+parseInt(_0xccb49(0x182))/(-0x1*0x1f5b+-0x10f1*0x1+0x3056);if(_0x17f228===_0xbb049d)break;else _0x343a1c['push'](_0x343a1c['shift']());}catch(_0x26f70c){_0x343a1c['push'](_0x343a1c['shift']());}}}(_0x1e6d,0xa6b8+-0xfb*0x1b+-0x1071e*-0x2));function _0x1e6d(){var _0x325db8=['824397oAmUNJ','994248SvFwxu','split','3004680mcAutB','messages','sage','8GkVKzS','304145pOiomF','../lib/Mes','1347534IAWEmS','mentionedJ','4089ZIagGD','essage','ephemeralM','message','286172peMgFs','30aSbNyP','482gpXxXq','keys'];_0x1e6d=function(){return _0x325db8;};return _0x1e6d();}function _0x1135(_0x2956fd,_0x54baf6){var _0x141f59=_0x1e6d();return _0x1135=function(_0x3bcbea,_0x222550){_0x3bcbea=_0x3bcbea-(0x1f01+0x1b5b+-0x38db*0x1);var _0x222321=_0x141f59[_0x3bcbea];return _0x222321;},_0x1135(_0x2956fd,_0x54baf6);}try{const Message=require(_0x5b6a0f(0x187)+_0x5b6a0f(0x184));mek=message[_0x5b6a0f(0x183)][0x1834*-0x1+0x161*-0x7+-0x1*-0x21db];if(!mek[_0x5b6a0f(0x18d)])return;mek[_0x5b6a0f(0x18d)]=Object[_0x5b6a0f(0x191)](mek[_0x5b6a0f(0x18d)])[-0x9f*-0x33+-0x71*-0x1+-0x201e]===_0x5b6a0f(0x18c)+_0x5b6a0f(0x18b)?mek[_0x5b6a0f(0x18d)][_0x5b6a0f(0x18c)+_0x5b6a0f(0x18b)][_0x5b6a0f(0x18d)]:mek[_0x5b6a0f(0x18d)];var m=new Message(client,mek),men=m[_0x5b6a0f(0x189)+'id'][0x1*0xf64+-0x15ab+-0x647*-0x1][_0x5b6a0f(0x181)]('@')[0x1f74+-0x2279+-0x1*-0x305];}catch{return;}
if (m.mentionedJid && m.mentionedJid[0] && SUDO.includes(men) || m.client.user.jid.includes(men)) {
		const audio = audios[Math.floor(Math.random() * audios.length)]
		const Audio = await getBuffer(audio)
		let image2 = await getBuffer(logo)
		try {
			var res = await toAudio(Audio, 'mp4')
		} catch (e) {
			return await m.client.sendMessage(m.client.user.id, {
				text: `Error on parsing audio \n ${e}\n\n${audio}\n\ndelete this url from audio list`
			})
		}
		return client.sendMessage(m.jid, {
			audio: res,
			mimetype: 'audio/mpeg',
			ptt: true,
			waveform: [00,99,00,99,00,99,00],
			contextInfo: {
				externalAdReply: {
					title: "HÊÑTÄÎ",
					body: "𝙴𝙳𝙸𝚃 𝚃𝙷𝙸𝚂",
					mediaType: 2,
					thumbnail: image2,
					mediaUrl: 'https://www.instagram.com/reel/安装它',
					sourceUrl: 'https://www.instagram.com/reel/安装它',
					showAdAttribution: true
				}
			}
		}, {
			quoted: m.data
		})
	}
});
/* Function({pattern: 'mention' */