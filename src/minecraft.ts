import { ping } from 'minecraft-protocol';
import { mcInfo } from './types'

async function getServerInfo(): Promise<mcInfo> {
    return new Promise((resolve, reject) => {
        ping({
            host: process.env.IP_SERVER || 'localhost',
            port: parseInt(process.env.PORT || '25565'),
        }, (err, res) => {
            if (err) {
                resolve({ online: false } as mcInfo);
            } else {
                resolve({ online: true, ...res } as mcInfo);
            }
        });
    });
}

export { getServerInfo }