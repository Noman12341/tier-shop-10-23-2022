import axios from 'axios'

export const fetchProducts = async () => await axios.get("http://localhost:4000/products/1");