import { NewPingResult } from 'minecraft-protocol';

interface Tags { [id: string]: string; }

interface Players { Tags: string[]; Normal: string[] }

interface mcInfo extends NewPingResult { online: boolean; }

export { Players, Tags, mcInfo };