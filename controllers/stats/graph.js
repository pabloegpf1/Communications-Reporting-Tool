class Graph {
    constructor({type, data, options, containerID}){
        this.type = type,
        this.data = data,
        this.options = options,
        this.containerID = containerID
    }

    toJson(){
        return {
            type: this.type,
            data: this.data,
            options: this.options,
            containerID: this.containerID
        }
    }
}

module.exports = Graph