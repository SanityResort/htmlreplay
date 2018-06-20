import ServerCommand from './ServerCommand';
import ServerModelSync from './model/ModelSync';
export default class ServerReplay extends ServerCommand {
    commandArray: ServerModelSync[]
    totalNrOfCommands: number
}