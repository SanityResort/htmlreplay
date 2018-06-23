import ServerCommand from './ServerCommand';
import ModelChange from './ModelChange';
import Report from '../report/Report';

export default class ServerModelSync extends ServerCommand {
    commandNr: number
    sound: string
    gameTime: number
    turnTime: number
    
    modelChangeList: {
        modelChangeArray: ModelChange[]
    }
    reportList: {
        reports: Report[]
    }
}