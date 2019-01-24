class CatApi {
    static getAllCats() {
        return new Promise((res, rej) => {
            res([
                {
                    id: 1,
                    name: "Moe",
                    weight: "heavy",
                    breed: 'breed1',
                    temperament: "protective",
                    hobby_ids: [1, 2]
                },
                {
                    id: 2,
                    name: "Mini",
                    weight: "heavy",
                    temperament: "sweet",
                    hobby_ids: [1],
                    breed: null,
                },

            ]);
            // res([
            //     {id: 1, name: 'cat1', bread: 'bread1', weight: 'weight1', temperament: 'temperament1', hobby_ids: [1, 2, 3]},
            //     {id: 2, name: 'cat2', bread: 'bread2', weight: 'weight2', temperament: 'temperament2', hobby_ids: [1, 2, 3]},
            //     {id: 3, name: 'cat3', bread: 'bread3', weight: 'weight3', temperament: 'temperament3', hobby_ids: [1, 2, 3]},
            // ]);
        });
        // return fetch('http://localhost:5000/api/v1/cats').then(response => {
        //     return response.json();
        // })
        // .catch(error => {
        //     throw(error);
        // });
    }

    static updateCat(cat) {
        const request = new Request(`http://localhost:5000/api/v1/cats/${cat.id}`, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({cat: cat}),
        });
    }
}

export default CatApi;
