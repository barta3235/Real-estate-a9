import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const {signInUser}=useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const {email,password}=data;
         
        signInUser(email,password)
        .then((result)=>{
            console.log(result.user);
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-red-800">Log In!</h1>
                    <p className="py-6 text-[18px] font-medium">Now you shall have access to all the marvels of luxury architecture with just a click.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body p-3 md:p-[32px]">
                        

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" 
                            {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-700 font-medium">*This field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" 
                            {...register("password", { required: true })}
                            /> 
                            {errors.password && <span className="text-red-700 font-medium">*This field is required</span>}
                        </div>

                        <div>
                            <Link className="font-semibold" to='/login'>Yet, not registered? <span className="text-red-700">Sign Up here!</span></Link>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-red-700 text-white hover:bg-red-900">Login</button>
                        </div>
                    </form>
                </div>
    
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;