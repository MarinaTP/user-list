const mainEndPoint = 'https://randomuser.me/api/?results=15';
export const getUsers = () => {
    return fetch(mainEndPoint)
    .then(res => res.json())    
    .then(users => {
        return users.results
    });
}