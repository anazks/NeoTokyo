import Axios from '../Axios/Axios'

const addBrand =  async ()=>{
    try {
        
    } catch (error) {
        
    }
}
export const getBrand = async ()=>{
    try {
        let brands = await Axios.get('/inventory/brands')
        console.log(brands,"brand")
        return brands
    } catch (error) {
        console.log(error)
        return error
    }   
}
const addCategory = async ()=>{
    try {
        
    } catch (error) {
        
    }
}
const getCategory =  async()=>{
    try {
        
    } catch (error) {
        
    }
}
const addTax = async()=>{
    try {
        
    } catch (error) {
        
    }
}

const AddoverViewCategory = async ()=>{
    try {
        
    } catch (error) {
        
    }
} 

const ViewOverViewCate = async ()=>{
    try {
        
    } catch (error) {
        
    }
}

const AddOverViewItem = async ()=>{
    try {
        
    } catch (error) {
        
    }
}

const viewAllOverView =  async()=>{
    try {
        
    } catch (error) {
        
    }
}