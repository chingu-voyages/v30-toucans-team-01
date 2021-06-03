import {v4 as uuidv4} from 'uuid';

class Snapshot{

    constructor(imageURL, expressionText){
        this.id = uuidv4();
        this.imageURL = imageURL;
        this.expressionText = expressionText;
        this.timeStamp = new Date();
    }
}

export default Snapshot;