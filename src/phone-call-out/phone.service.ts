import axios from "axios";

export function getHello(): string {
    return 'Hello from the new package!';
}

export async function initialize(): Promise<any> {
    let res = await axios.get('http://localhost:8732/Phoneremote/initialize?name=Noom&userid=1&userlv=1&campaignid=100099&supid=1&extension=2621&pmid=0');
    return res;
}

export async function shutdown(): Promise<any> {
    let res = await axios.get('http://localhost:8732/Phoneremote/shutdown');
    return res;
}