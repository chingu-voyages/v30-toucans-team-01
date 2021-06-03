import Snapshot from './snapshot.js'
import {v4 as uuidv4} from 'uuid';

class Session {

    constructor() {
        this.snapshots = [];
        this.id = uuidv4(); // todo: import uuid library for ids
    }

    addSnapshot(imageURL, expressionText) {
        const snapshot = new Snapshot(imageURL, expressionText);
        this.snapshots.push(snapshot);
    }

}

export default Session;