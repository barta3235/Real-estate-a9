import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import 'animate.css';
import Swal from 'sweetalert2'

// wave 1 img link https://i.ibb.co/KG3C1hn/wave1.png

const Login = () => {
    const {signInUser,googleAuth,githubLogin}=useContext(AuthContext);
    const [seePassword,setSeePassword]=useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location)

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
            Swal.fire({
                title: 'Success!',
                text: 'You have Logged in',
                icon: 'success',
                confirmButtonText: 'Continue',
                confirmButtonColor: '#8b0000'
              })
            navigate(location.state ? location.state : '/')
          
        })
        .catch((error)=>{
            console.log(error.message);
            Swal.fire({
                title: 'Error!',
                text: `${error.message}`,
                icon: 'error',
                confirmButtonText: 'Continue',
                confirmButtonColor: '#8b0000'
              })
        })
    }

    const handleGoogleSignIn=(e)=>{
        e.preventDefault()
        googleAuth()
        .then((result)=>{
            console.log(result.user);
            Swal.fire({
                title: 'Success!',
                text: 'You have Logged in',
                icon: 'success',
                confirmButtonText: 'Continue',
                confirmButtonColor: '#8b0000'
              })
            navigate(location.state ? location.state : '/')
            
        })
        .catch((error)=>{
            console.log(error.message);
            Swal.fire({
                title: 'Error!',
                text: `${error.message}`,
                icon: 'error',
                confirmButtonText: 'Continue',
                confirmButtonColor: '#8b0000'
              })
        })
    }

    const handleGithub=(e)=>{
        e.preventDefault();
         githubLogin()
         .then((result)=>{
            console.log(result.user);
            Swal.fire({
                title: 'Success!',
                text: 'You have Logged in',
                icon: 'success',
                confirmButtonText: 'Continue',
                confirmButtonColor: '#8b0000'
              })
            navigate(location.state ? location.state : '/')
        })
        .catch((error)=>{
            console.log(error.message);
            Swal.fire({
                title: 'Success!',
                text: 'You have Logged in',
                icon: 'success',
                confirmButtonText: 'Continue',
                confirmButtonColor: '#8b0000'
              })
        })
    }


    return (
        <div className="hero min-h-screen bg-slate-500" style={{backgroundImage: `url(https://i.ibb.co/KG3C1hn/wave1.png)`}} >
            <Helmet>
                 <title>South Stay | Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse p-0">
                <div className="text-center lg:text-left animate__animated animate__fadeInRightBig">
                    <h1 className="text-5xl font-bold text-red-800">Log In!</h1>
                    <p className="py-6 text-[18px] font-medium">Now you shall have access to all the marvels of luxury architecture with just a click.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 animate__animated animate__fadeInLeftBig">
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

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <input 
                            type={seePassword? 'text':'password'}  
                            placeholder="password" 
                            className="input input-bordered" 
                            {...register("password", { required: true })}
                            ></input><span onClick={()=> setSeePassword(!seePassword)} className="absolute right-4 bottom-4">{seePassword ? <IoEye></IoEye> : <FaEyeSlash></FaEyeSlash> }</span> 
                            {errors.password && <span className="text-red-700 font-medium">*This field is required</span>}
                        </div>

                        <div>
                            <Link className="font-semibold" to='/register'>Yet, not registered? <span className="text-red-700">Sign Up here!</span></Link>
                        </div>

                        <div className="form-control mt-6">
                            <button className="animate__headShake btn bg-red-700 text-white hover:bg-red-900">Login</button>
                        </div>
                    </form>
                                       
                    <div className="flex items-center justify-end gap-3 flex-row mb-4 md:mb-0">
                        <h1 className="font-semibold text-[16px] ml-2">Continue with</h1>
                        <button onClick={handleGoogleSignIn} className="animate__headShake animate__animated flex items-center gap-[8px] btn md:my-3 md:ml-1"><h1 className="hidden md:flex">Google</h1> <FaGoogle className="text-[18px] text-red-800"></FaGoogle></button>
                        <button onClick={handleGithub} className="animate__headShake animate__animated flex items-center gap-[8px] btn md:my-3 md:mr-3"><h1 className="hidden md:flex">Github</h1> <FaGithub className="text-black text-[18px]"></FaGithub></button>
                    </div>


                </div>
    
            </div>
        </div>
    );
};

export default Login;