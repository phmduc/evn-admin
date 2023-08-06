import actions from "./actions";
import { DataService } from "../../config/dataService/dataService";


const { usersGetBegin, usersGetErr, usersGetSucess, userGetBegin, userGetErr, userGetSucess, userUpdateBegin, userUpdateSucess, userUpdateErr } = actions

const getUsersData = ()=>{
    return async(dispatch) => {
        dispatch(usersGetBegin());
        try{
            const data = await DataService.get('/wp-json/wp/v2/users')
            dispatch(usersGetSucess(data.data))
        }catch(err){
            dispatch(usersGetErr(err))
        }
    }
}

const getUserData = (id)=>{
    return async(dispatch) => {
        dispatch(userGetBegin());
        try{
            const data = await DataService.get(`/wp-json/dbevn/v1/users/${id}/details`)
            dispatch(userGetSucess(data.data))
        }catch(err){
            dispatch(userGetErr(err))
        }
    }
}



const updateUserData = (id, values)=>{
    return async(dispatch) => {
        dispatch(userUpdateBegin());
            const promises = [];
            if(values.phone){
                 promises.push(DataService.put(`/wp-json/dbevn/v1/users/${id}/phone`,{},{phone: values.phone})) 
            } 
            if(values.refcode){
                 promises.push(DataService.put(`/wp-json/dbevn/v1/users/${id}/refcode`,{},{refcode: values.refcode})) 
            } 
            if(values.bank_name){
                 promises.push(DataService.put(`/wp-json/dbevn/v1/users/${id}/bank-name`,{},{bank_name: values.bank_name})) 
            } 
            if(values.bank_account){
                 promises.push(DataService.put(`/wp-json/dbevn/v1/users/${id}/bank-account`,{},{bank_account: values.bank_account})) 
            } 
            if(values.wallet){
                 promises.push(DataService.put(`/wp-json/dbevn/v1/users/${id}/wallet`,{},{wallet: values.wallet})) 
            } 
            if(values.wallet_deposited){
                 promises.push(DataService.put(`/wp-json/dbevn/v1/users/${id}/wallet-deposited`,{},{wallet_deposited: values.wallet_deposited})) 
            } 
            if(values.wallet_cashed){
                 promises.push(DataService.put(`/wp-json/dbevn/v1/users/${id}/wallet-cashed`,{},{wallet_cashed: values.wallet_cashed})) 
            } 
            if(values.wallet_buyed){
                promises.push(DataService.put(`/wp-json/dbevn/v1/users/${id}/wallet-buyed`,{},{wallet_buyed: values.wallet_buyed})) 
            } 
            if(values.wallet_win){
                promises.push(DataService.put(`/wp-json/dbevn/v1/users/${id}/wallet-win`,{},{wallet_win: values.wallet_win})) 
            } 
            if(values.wallet_can_cash){
                promises.push(DataService.put(`/wp-json/dbevn/v1/users/${id}/wallet-can-cash`,{},{wallet_can_cash: values.wallet_can_cash})) 
            } 
            if(values.rank){
                promises.push(DataService.put(`/wp-json/dbevn/v1/users/${id}/rank`,{},{rank: values.rank})) 
            } 
            if(values.verify){
                promises.push(DataService.put(`/wp-json/dbevn/v1/users/${id}/verify`,{},{verify: values.verify})) 
            } 
            try {
                const responses = await Promise.all(promises);
                const data = await Promise.all(responses.map(response => response.data));
                console.log(data)
              } catch (error) {
                console.log(error)
            }
    }
}


export {getUsersData, getUserData, updateUserData}