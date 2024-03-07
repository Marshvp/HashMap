class HashMap {
    
    constructor () {
        this.storage = [];
        this.storageLimit = 1000;
        this.numberOfElements = 0;
    }
   
    hash (key) {
        let hashCode = 0;
        let primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = hashCode * primeNumber + key.charCodeAt(i) % this.storageLimit;
        }
        return hashCode
    }



    set (key, value) {

        if (this.needsResize()) {
           this.resize();
        };
        
        const index = this.hash(key);

        if (index < 0 || index >= this.storageLimit) {
        throw new Error("Index out of bounds");
        }

        if (!this.storage[index]) {
            this.storage[index] = [];
        }

        for (let i = 0; i < this.storage[index].length; i++) {
            if (this.storage[index][i][0] === key) {
                this.storage[index][i][1] = value;
                return
            }
        }
        this.storage[index].push([key, value])
        this.numberOfElements++;
    }


    needsResize () {
        return (this.numberOfElements + 1) / this.storageLimit > 0.75;
    }

    resize() {
        const oldMap = this.storage;
        this.storageLimit = this.storageLimit * 2;
        this.storage = [];
        this.numberOfElements = 0;
        oldMap.forEach(bucket => {
            if(bucket) {
                bucket.forEach(([key, value]) => {
                    this.set(key, value);
                })
            }
        })
    
    }

    get(key) {
        const index = this.hash(key);

        if (index < 0 || index >= this.storageLimit) {
        throw new Error("Index out of bounds");
        }

        if (this.storage[index]) {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return this.storage[index][i][1];
                }
            }
        }
        return null;
    }

    has(key) {
        const index = this.hash(key);

        if (index < 0 || index >= this.storageLimit) {
        throw new Error("Index out of bounds");
        }
        
        if (this.storage[index]) {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return true
                }
                
            }return false
        }
            return false
    }

    remove(key) {
        const index = this.hash(key);

        if (index < 0 || index >= this.storageLimit) {
        throw new Error("Index out of bounds");
        }
        
        if (this.storage[index]) {

            const initialSize = this.storage[index].length
            const newArray = this.storage[index].filter(([k, v]) => k !== key);
            this.storage[index] = newArray;
            if (this.storage[index].length < initialSize) {
                this.numberOfElements--;
                return true
            }
        }
        return false;
    }


    length() {
        return this.numberOfElements;
    }

    clear() {
        this.storage = [];
        this.storageLimit = 1000;
        this.numberOfElements = 0;
    }


    keys() {
        let keys = [];
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i]) {
                for (let j = 0; j < this.storage[i].length; j++) {
                    keys.push(this.storage[i][j][0])
                }
            }
        }
        return keys
    }
    
    values() {
        let values = [];
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i]) {
                for (let j = 0; j < this.storage[i].length; j++) {
                    values.push(this.storage[i][j][1])
                }
            }
        }
        return values
    }

    entries() {
        let entries = [];
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i]) {
                for (let j = 0; j < this.storage[i].length; j++) {
                    entries.push(this.storage[i][j])
                }
            }
        }
        return entries
    }
    
}

export default HashMap