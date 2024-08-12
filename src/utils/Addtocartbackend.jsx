import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { customToastOptions } from './Header';
import { useState } from "react";

export const useAddToCartBackend = () => {
    const [runner, setRunner] = useState(true);

    const addtocartbackend = async (ele) => {
        const ele2 = { ...ele, choosenquantity: 1 };
        try {
            const { data: { message } } = await axios.post(
                'http://localhost:3000/api/v1/Inserttocart',
                { id: ele2._id, choosenquantity: ele2.choosenquantity },
                { withCredentials: true }
            );
            console.log(message);

            toast.success(message, customToastOptions);
            setRunner(prev => !prev);
        } catch (err) {
            console.log(err.message);
            toast.error("Failed to add to cart", customToastOptions);
        }
    };

    return { addtocartbackend, runner };
};
