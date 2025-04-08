
const httpClientPlugin = {

    get: async(url) => {
        const resp = await fetch(url)
        return await resp.json()   
    },
    post: async(url, data) => {
        const resp = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })  
        return await resp.json()
    },
    put: async(url, data) => {
        const resp = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        return await resp.json()
    },
    delete: async(url) => {
        const resp = await fetch(url, {
            method: 'DELETE'
        })
        return await resp.json() 
    }
}

module.exports = {
    http: httpClientPlugin
}