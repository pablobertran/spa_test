class Store {
    constructor(app, data = {}) {
        if (!Store.instance) {
            this.data = data;
            this.app = app;
            Store.instance = this;
        }
        return Store.instance;
    }

    updateData(key, value) {
        this.data[key] = value;
        const stringified = JSON.stringify(this.data);
        localStorage.setItem('users', stringified);
        this.app.update();
    }
}

export default Store;
