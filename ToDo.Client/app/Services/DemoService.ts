import AppHTTPClient from "./AppHTTPClient";
import { ToDoItem } from "../Model/ToDoItem";


class DemoService {

    private readonly BASE_URL: string = "/Home";

    geMyData(): Promise<ToDoItem[]> {
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

    addData(citem: ToDoItem): Promise<ToDoItem[]> {
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
    removeData(itemid: number): Promise<ToDoItem[]> {
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

    editData(citem: ToDoItem, itemid: number): Promise<ToDoItem[]> {
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