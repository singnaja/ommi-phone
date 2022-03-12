import axios from "axios";


export async function initialize(name : string,userid : string,userlv : string,campaignid : string,supid : string,extension : string,pmid : string): Promise<any> {
    let res = await axios.get(`http://localhost:8732/Phoneremote/initialize?name=${name}&userid=${userid}&userlv=${userlv}&campaignid=${campaignid}&supid=${supid}&extension=${extension}&pmid=${pmid}`);
    return res;
}

export async function shutdown(): Promise<any> {
    let res = await axios.get('http://localhost:8732/Phoneremote/shutdown');
    return res;
}

export async function connect(number : string,callid : string,callerid : string,): Promise<any> {
    let res = await axios.get(`http://localhost:8732/Phoneremote/connect?number=${number}&callid=${callid}&callerid=${callerid}`);
    return res;
}

export async function muteMicrophone(): Promise<any> {
    let res = await axios.get('http://localhost:8732/Phoneremote/muteMicrophone?value=true');
    return res;
}

export async function transfer(referto : string): Promise<any> {
    let res = await axios.get(`http://localhost:8732/Phoneremote/transfer?referto=${referto}`);
    return res;
}

export async function disconnect(): Promise<any> {
    let res = await axios.get(`http://localhost:8732/Phoneremote/disconnect`);
    return res;
}

export async function answer(): Promise<any> {
    let res = await axios.get(`http://localhost:8732/Phoneremote/answer`);
    return res;
}

export async function hold(): Promise<any> {
    let res = await axios.get(`http://localhost:8732/Phoneremote/hold`);
    return res;
}

export async function nnhold(): Promise<any> {
    let res = await axios.get(`http://localhost:8732/Phoneremote/nnhold`);
    return res;
}