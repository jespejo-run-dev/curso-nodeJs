import axios from "axios";

// Añadir la interfaz al inicio del archivo
interface JsonData {
    [data: string]: any;  // Permite cualquier propiedad de tipo string con cualquier valor
}

export const httpClientPlugin = {
    get: async(url:string) => {
        const {data} = await axios.get(url)
        return data
    },
    // Actualizar el tipado en post
    post: async(url: string, data: JsonData) => {
        const resp = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })  
        return await resp.json()
    },
    // Actualizar el tipado en put
    put: async(url: string, data: JsonData) => {
        const resp = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        return await resp.json()
    },
    delete: async(url:string) => {
        const resp = await fetch(url, {
            method: 'DELETE'
        })
        return await resp.json() 
    }
}

