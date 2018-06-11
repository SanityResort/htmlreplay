import * as lzs from "lz-string";

const WS_URL="ws://78-66-217-160-no2200.tbcn.telia.com:22223/command"

export class FumbblSocket {

    constructor(replayId: string){
        let websocket:WebSocket = new WebSocket(WS_URL);
        websocket.onopen = function(evt: any){
            console.log("Sending replay request")
            this.send(lzs.compressToUTF16("{\"netCommandId\":\"clientReplay\",\"gameId\":"+replayId+",\"replayToCommandNr\":0}"))
            console.log("Replay request sent")
        }
        websocket.onmessage = function(evt: MessageEvent){
            console.log("Message received  " + new Date().valueOf());
            let data = JSON.parse(lzs.decompressFromUTF16(evt.data));
            if (data && data.commandArray) {
                let commands: any[] = data.commandArray
                commands.forEach(command => {                
                    if (command && command.modelChangeList && command.modelChangeList.modelChangeArray) {
                        let changes: any[] = command.modelChangeList.modelChangeArray;
                        if (changes.find(function(element){
                            return element.modelChangeId === "gameSetFinished";
                        })) {
                            console.log("Game finished - closing socket");
                            this.close();
                        }
                    }

                });    
            }
        }
    
    }
}
