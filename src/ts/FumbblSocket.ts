import * as lzs from "lz-string";
import ServerCommandProcessor from "./handlers/ServerCommandProcessor";

export default class FumbblSocket {
    static WS_URL="ws://78-66-217-160-no2200.tbcn.telia.com:22223/command"

    constructor(replayId: string, commandProcessor: ServerCommandProcessor){
        let websocket:WebSocket = new WebSocket(FumbblSocket.WS_URL);
        websocket.onopen = function(evt: any){
            console.log("Sending replay request")
            this.send(lzs.compressToUTF16("{\"netCommandId\":\"clientReplay\",\"gameId\":"+replayId+",\"replayToCommandNr\":0}"))
            console.log("Replay request sent")
        }
        websocket.onmessage = function(evt: MessageEvent){
            console.log("Message received  " + new Date().valueOf());
            let data = JSON.parse(lzs.decompressFromUTF16(evt.data));
            if (data) {
                if (data.commandArray) {
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
                commandProcessor.handle(data);
            }
        }
    
    }
}
