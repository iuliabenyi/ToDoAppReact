import AppHTTPClient from "./AppHTTPClient";
class DemoService {
    constructor() {
        this.BASE_URL = "/Home";
    }
    geMyData() {
        //https://localhost:44396/Home/getmystuff
        return new Promise((resolve, reject) => {
            AppHTTPClient
                .get(`${this.BASE_URL}/GetItems`)
                .then((response) => {
                return resolve(response.data);
            })
                .catch(error => {
                //TODO handle error
            });
        });
    }
    addData(citem) {
        return new Promise((resolve, reject) => {
            AppHTTPClient
                .post(`${this.BASE_URL}/Add`, citem)
                .then((response) => {
                return resolve(response.data);
            })
                .catch(error => {
                //TODO handle error
            });
        });
    }
    removeData(itemid) {
        //https://localhost:44396/Home/getmystuff
        return new Promise((resolve, reject) => {
            AppHTTPClient
                .delete(`${this.BASE_URL}/Delete/${itemid}`)
                .then((response) => {
                return resolve(response.data);
            })
                .catch(error => {
                console.log(error);
                //TODO handle error
            });
        });
    }
    editData(citem, itemid) {
        //https://localhost:44396/Home/getmystuff
        return new Promise((resolve, reject) => {
            AppHTTPClient
                .put(`${this.BASE_URL}/Edit/${itemid}`, citem)
                .then((response) => {
                return resolve(response.data);
            })
                .catch(error => {
                console.log(error);
                //TODO handle error
            });
        });
    }
}
export default new DemoService();
