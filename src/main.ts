import { config } from 'dotenv';
import { EmbedBuilder, WebhookClient } from 'discord.js';

import { getServerInfo } from './minecraft';
import { Players, Tags } from './types';

config()

const Webhook = new WebhookClient({ url: process.env.WEBHOOK! })

let VersionRegex: RegExp = /(\d+\.\d+(\.\d+)?)/
let PlayerTags: Tags = { // Example: [UUID]: 'TAG'
    'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx': 'TAG',
}

async function update(): Promise<void> {
    const { online, version, players } = await getServerInfo();

    let Version = version?.name?.match(VersionRegex)?.[0] ?? 'Unknown';
    let Plrs: Players = { Tags: [], Normal: [] };

    players?.sample?.map((data) => { let tag = PlayerTags[data.id]; if (tag) { Plrs.Tags.push(`${'[' + tag + ']'} ${data.name}`); } else { Plrs.Normal.push(data.name); } })

    let Players = Plrs.Tags.concat(Plrs.Normal)

    const Embed = new EmbedBuilder()
    Embed.setTitle('Minecraft Server')
    Embed.setDescription(`**IP: \`${process.env.IP_SERVER!}\`\nVersion: \`${Version}\`**`)
    Embed.setColor(4700209)
    Embed.addFields(
        { name: '\\📊 Status:', value: `\`\`\`\n${online ? '✅ Online' : '❌ Offline'}\n\`\`\`` },
        { name: `\\👥 Players [${players?.online ?? '?'}/${players?.max ?? '?'}]`, value: `\`\`\`css\n${Players.length ? Players.join('\n').trim() : 'No players'}\n\`\`\`` }
    )
    Embed.setFooter({ text: '@ Updating every 45 seconds.' })
    Embed.setTimestamp(new Date());

    console.log('[MCSTATUS] Editing webhook message')

    Webhook.editMessage(process.env.MESSAGE_ID!, { content: null, embeds: [Embed] }).catch(err => console.log(`[MCSTATUS]: Webhook error: ${err}`))
}

console.log('[MCSTATUS] Loaded!')

setInterval(update, 45 * 1000);