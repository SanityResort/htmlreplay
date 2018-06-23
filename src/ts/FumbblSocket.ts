import * as lzs from "lz-string";

export default class FumbblSocket {
    static WS_URL="ws://78-66-217-160-no2200.tbcn.telia.com:22223/command"
    websocket:WebSocket

    constructor(replayId: string, onData: (data: any) => void){
        this.websocket  = new WebSocket(FumbblSocket.WS_URL);
        this.websocket.onopen = function(evt: any){
            console.log("Sending replay request")
            this.send(lzs.compressToUTF16("{\"netCommandId\":\"clientReplay\",\"gameId\":"+replayId+",\"replayToCommandNr\":0}"))
            console.log("Replay request sent")
        }
        this.websocket.onmessage = function(evt: MessageEvent){
            let data = JSON.parse(lzs.decompressFromUTF16(evt.data));
            if (data) {
                onData(data)
            }
        }
    
    }

    close() {
        this.websocket.close();
    }
}
