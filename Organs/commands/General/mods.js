
require ('../../../settings')
module.exports={
    name:"mods",
    alias:["mod,owner,creator"],
    usage:`${prefa}mods`,
    desc:"shows mods list",
    category:"General",
    react:"ā",

    start:async(client,m,{})=>{
        const mod= owner
        let mo=`
*š Pikachu Mods š*\n`
for(let i=0;i<mod.length;i++){
    const um= await client.username(mod[i]+'@s.whatsapp.net')
    mo+=`\nāØ${i+1}\n*š¤ Name:* ${um}\n*š± Contact:* http://wa.me/+${mod[i].split("@")[0]}\n`
}
await  client.sendMessage(m.from,{image:{url:'https://i.ibb.co/4djfcv6/IMG-20230127-135516.jpg'},caption:mo},{quoted:m})  
    }
}
