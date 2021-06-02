class Snapshot{

    constructor(imageURL, expressionText){
        this.id = '';
        this.imageURL = imageURL;
        this.expessionText = expressionText;
        this.timeStamp = new Date();
    }
}

export default Snapshot;