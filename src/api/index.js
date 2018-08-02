import config from './config'

const { apiKey } = config
//const apiKey = config.apikey aca se le dice q obtenga la apiKey de config
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`
//esta constante es la url a la cual se le van a pedir los datos

export default function getArtists(country) {
	const url = URL.replace(':country', country)
	//en esta constante se le dice q reemplace en la url country x el parametro q recibe de country
  return fetch(url)
  	.then(res => res.json())//promesa 1
  	.then(json => json.topartists.artist)//al terminar la promesa 1, busca los artistas de topArtist
}
