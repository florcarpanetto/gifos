
export const request = (resource, query, limit=12) => fetch(`https://api.giphy.com/v1/gifs${resource}?api_key=tYHA2kAODDna28hku9Nq03CRDQ6Ss839&q=${query}&limit=${limit}&offset=0&rating=g&lang=en`);

export const trending = () => fetch(`https://api.giphy.com/v1/gifs/trending?api_key=tYHA2kAODDna28hku9Nq03CRDQ6Ss839&limit=15&rating=g
`) 