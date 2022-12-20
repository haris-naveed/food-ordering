import axios from "axios"


export const signin=(formData)=>async(dispatch)=>{

    try {
        const {data}=await axios.post("http://localhost:8000/user/signin",formData)

        console.log(data);
        dispatch({type:"AUTH",payload:data})
    } catch (error) {
        console.log(error);
    }
}

export const signup=(formData)=>async(dispatch)=>{

    try {
        const {data}=await axios.post("http://localhost:8000/user/signup",formData)

        console.log(data);

        dispatch({type:"AUTH",payload:data})
    } catch (error) {
        console.log(error);
    }
}