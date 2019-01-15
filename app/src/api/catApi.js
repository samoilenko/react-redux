class CatApi {
    static getAllCats() {
        return fetch('http://localhost:5000/api/v1/cats').then(response => {
            return response.json();
        })
        .catch(error => {
            throw(error);
        });
    }
}

export default CatApi;
