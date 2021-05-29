class Session {
    constructor(imageURL, expressionText, currentDate, currentTime) {
        this.snapshot = {
            id : {
                imageURL,expressionText
            }
        }
        this.createdAt = {
            monthYear : currentDate,
            hourSeconds : currentTime
        };
        this.updatedAt = null;
    }

    Snapshot() {
        console.log(this.snapshot.id)
    }
}

export default Session;