import ServerCommand from './ServerCommand';
import ServerModelSync from './ServerModelSync';
export default class ServerReplay extends ServerCommand {
    commandArray: ServerModelSync[]
    totalNrOfCommands: number
}