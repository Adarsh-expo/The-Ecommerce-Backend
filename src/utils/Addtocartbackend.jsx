import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { customToastOptions } from './Header';
import { useState } from "react";

export const useAddToCartBackend = () => {
    const [runner, setRunner] = useState(true);

    const addtocartbackend = async (ele) => {
        let ele2={};
        if(ele.quantity===0){
             ele2 = { ...ele, choosenquantity: 0 }
        }
        else{  ele2 = { ...ele, choosenquantity: 1 };}
       
        try {
            const { data: { success,message } } = await axios.post(
                'https://ecommerce-backend-teif.onrender.com/api/v1/Inserttocart',
                { id: ele2._id, choosenquantity: ele2.choosenquantity },
                { withCredentials: true }
            );
            console.log(message,success);


            success?  toast.success(message, customToastOptions):toast.warn("Login first")
          
            setRunner(prev => !prev);
        } catch (err) {
            console.log(err.message);
            toast.error("Failed to add to cart", customToastOptions);
        }
    };

    return { addtocartbackend, runner };
};
