import { http } from "../plugin"

export const getPokemonById = async(id:number):Promise<string> => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const resp = await http.get(url)
        return resp.name
    } catch (error) {
        throw `Pokemon with id ${id} does not exist`
    }
}

