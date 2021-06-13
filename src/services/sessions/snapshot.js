import { v4 as uuidv4 } from 'uuid'

class Snapshot {
  constructor(imageBlob, expressionText, id, timeStamp) {
    this.id = id || uuidv4()
    this.imageData = imageBlob
    this.expressionText = expressionText
    this.timeStamp = timeStamp || new Date().toISOString()
  }
  get imageURL() {
    return URL.createObjectURL(this.imageData)
  }
  get createdAt() {
    const date = new Date(this.timeStamp)
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }
}

export default Snapshot
