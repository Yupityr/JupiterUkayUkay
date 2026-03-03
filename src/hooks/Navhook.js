import { useNavigate } from "react-router-dom";

export const Navhook = () => {
    const navigate = useNavigate();

    const goToProducts = () => {
        navigate('/products');
    }
    const goToSignin = () => {
        navigate('/signin');
    }
    const goToSignup = () => {
        navigate('/signup');
    }

    return {
        goToProducts
        , goToSignin
        , goToSignup
    }
}