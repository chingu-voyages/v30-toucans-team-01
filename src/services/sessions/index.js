import Snapshot from './snapshot.js'

class Session {

    constructor() {
        this.snapshots = [];
        this.id = ''; // todo: import uuid library for ids
    }

    addSnapshot(imageURL, expressionText) {
        const snapshot = new Snapshot(imageURL, expressionText);
        this.snapshots.push(snapshot);
    }

}

export default Session;