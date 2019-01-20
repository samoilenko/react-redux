class HobbyApi {
    static getAllHobbies() {
        return new Promise((res, rej) => {
            res([
                {
                    id: 1,
                    'name': 'title1',
                },
                {
                    id: 2,
                    'name': 'title2',
                },
                {
                    id: 3,
                    'name': 'title3',
                },
            ]);
        });
        // return fetch('http://localhost:5000/api/v1/hobbies').then(response => {
        //     return response.json()
        // }).catch(error => {
        //     return error
        // });
    }
}

export default HobbyApi;
