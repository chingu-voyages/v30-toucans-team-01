import Snapshot from './snapshot.js'
import {v4 as uuidv4} from 'uuid'
import base64ToBlob from '../helpers/base64ToBlob.js'

class Session {
    constructor(id, snapshots) {
        this.snapshots = snapshots ? snapshots.map(({imageData, expressionText, id, timeStamp}) => new Snapshot(imageData, expressionText, id, timeStamp)) : []
        this.id = id || uuidv4()
    }
    async addSnapshot(base64ImageData, expressionText) {
        const imageBlob = await base64ToBlob(base64ImageData)
        const snapshot = new Snapshot(imageBlob, expressionText)
        this.snapshots.push(snapshot)
    }
}

export default Session