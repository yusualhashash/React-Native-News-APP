import { create } from 'apisauce'


// define the api
const api = create({
  baseURL: 'https://newsapi.org/v2',

})


const apiKey='?country=us&apiKey=736d7f3632dc4760b11419b3a20ed1f0'
const gettopheadline=api.get('/top-headlines'+apiKey)

const getByCategory=(Category)=>api.get('/everything?q='+Category+"&apiKey=736d7f3632dc4760b11419b3a20ed1f0")


export default {
    gettopheadline,
    getByCategory
}

