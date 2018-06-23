import ServerCommandHandler from "./ServerCommandHandler";
import ServerCommand from '../../model/commands/ServerCommand';
import ServerModelSync from "../../model/commands/ServerModelSync";
import ModelChangeHandlerMap from '../modelChange/ModelChangeHandlerMap';
import ModelChangeHandler from '../modelChange/ModelChangeHandler';
import BoardState from '../../components/board/BoardState';
import deepEqual = require("deep-equal");

export default class ServerModelSyncHandler extends ServerCommandHandler {
    supportedCommand = "serverModelSync";

    handle(command: ServerCommand){
        let modelSync = <ServerModelSync>command;

        if (modelSync.modelChangeList && modelSync.modelChangeList.modelChangeArray) {
            let newState: BoardState = this.gameState.copyLatestState()
            modelSync.modelChangeList.modelChangeArray.forEach(modelChange => {
                let handler: ModelChangeHandler|undefined = ModelChangeHandlerMap.get(modelChange.modelChangeId);
                if (handler) {
                    handler.handle(modelChange);
                } else {
                    console.log("Unhandled modelChange: " + JSON.stringify(command));
                }
            })

            if (!deepEqual(newState, this.gameState.copyLatestState)) {
                this.gameState.addState(newState);
            } else {
                console.log("State was unchanged for modelSync " + modelSync.commandNr)
            }
        }
    }
}