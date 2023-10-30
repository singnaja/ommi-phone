import axios from "axios";

const ApiClient = axios.create({
    timeout: 60000,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "DELETE, POST, GET, PUT, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    },
  });

export async function initialize(name : string,userid : string,userlv : string,campaignid : string,supid : string,extension : string,pmid : string): Promise<any> {
    let res = await ApiClient.get(`http://localhost:8732/Phoneremote/initialize?name=${name}&userid=${userid}&userlv=${userlv}&campaignid=${campaignid}&supid=${supid}&extension=${extension}&pmid=${pmid}`);
    return res;
}

export async function shutdown(): Promise<any> {
    let res = await ApiClient.get('http://localhost:8732/Phoneremote/shutdown');
    return res;
}

export async function connect(number : string,callid : string,callerid : string,): Promise<any> {
    let res = await ApiClient.get(`http://localhost:8732/Phoneremote/connect?number=${number}&callid=${callid}&callerid=${callerid}`);
    return res;
}

export async function muteMicrophone(value : string): Promise<any> {
    let res = await ApiClient.get(`http://localhost:8732/Phoneremote/muteMicrophone?value=${value}`);
    return res;
}

export async function transfer(referto : string): Promise<any> {
    let res = await ApiClient.get(`http://localhost:8732/Phoneremote/transfer?referto=${referto}`);
    return res;
}

export async function disconnect(): Promise<any> {
    let res = await ApiClient.get(`http://localhost:8732/Phoneremote/disconnect`);
    return res;
}

export async function answer(): Promise<any> {
    let res = await ApiClient.get(`http://localhost:8732/Phoneremote/answer`);
    return res;
}

export async function hold(): Promise<any> {
    let res = await ApiClient.get(`http://localhost:8732/Phoneremote/hold`);
    return res;
}

export async function nnhold(): Promise<any> {
    let res = await ApiClient.get(`http://localhost:8732/Phoneremote/unhold`);
    return res;
}

export async function cdrData(): Promise<any> {
    let res = await ApiClient.get(`http://localhost:8732/Phoneremote/cdrdata`);
    return res;
}