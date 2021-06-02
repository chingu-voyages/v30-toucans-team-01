class Snapshot{

    constructor(imageURL, expressionText){
        this.id = '';
        this.imageURL = imageURL;
        this.expressionText = expressionText;
        this.timeStamp = new Date();
    }
}

export default Snapshot;