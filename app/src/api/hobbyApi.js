class HobbyApi {
    static getAllHobbies() {
        return new Promise((res, rej) => {
            res([]);
        });
        // return fetch('http://localhost:5000/api/v1/hobbies').then(response => {
        //     return response.json()
        // }).catch(error => {
        //     return error
        // });
    }
}

export default HobbyApi;
