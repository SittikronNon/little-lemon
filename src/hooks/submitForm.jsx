import { useState } from "react";
import { useNavigate } from "react-router-dom";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmitForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const submitForm = async (data) => {
        const random = Math.random();
        setIsLoading(true);
        try {
            await wait(2000);
            if (random < 0.5) {
                alert("Something went wrong, please try again!")
                throw new Error("Something went wrong");
            } else {
                alert("Your table has been reserved! ")
                navigate("/reservations/confirmed-booking", {state: data})
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
    return { submitForm, isLoading };
}

export default useSubmitForm;