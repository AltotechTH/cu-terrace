import axios from 'axios'
import {STOCK_URL} from '../constants'

export const GetStock = async () => {
  try {
  return await axios.get(
    STOCK_URL
  )
  }
  catch (error){
    console.log(error)
  }
}