import {v4 as uuidv4} from 'uuid'

class Snapshot{
    constructor(imageBlob, expressionText, id, timeStamp){
        this.id = id || uuidv4()
        this.imageData = imageBlob
        this.expressionText = expressionText
    }
    get imageURL() {
        return URL.createObjectURL(this.imageData)
    }
    }
}

export default Snapshot