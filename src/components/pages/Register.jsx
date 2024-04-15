import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEyeSlash } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import 'animate.css';


const Register = () => {

    const [seePassword,setSeePassword]=useState(false)
    const { createUser,reworkProfile } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const {email,password,name,photoUrl}=data;
        
        if(password.length<6){
            toast('Password should be of at least 6 characters');
        }else if(!/^(?=.*[A-Z])(?=.*[a-z]).+$/.test(password)){
            toast('Password should have at least one Uppercase and one lowercase letter');
        }

        console.log(email,password);

        createUser(email,password)
        .then((result)=>{
            console.log(result.user)
              
            reworkProfile(name,photoUrl)
            .then((result)=>{
                toast('You have successfully registered!');
                console.log(result.user)
            })
            .catch((error)=>{
                console.log(error.message);
            })
            
        })
        .catch((error)=>{
            toast(`${error.message}`);
            console.log(error.message)
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                 <title>South Stay | Sign Up</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-red-800">Register yourself!</h1>
                    <p className="py-6 text-[18px] font-medium">Be a part of South Stay family. Your convenience is our concern</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body p-3 md:p-[32px]">
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" 
                            {...register("name", { required: true })}
                            />
                            {errors.name && <span className="text-red-700 font-medium">*This field is required</span>}
                        </div>

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
                                <span className="label-text font-medium">Photo Url</span>
                            </label>
                            <input type="text" placeholder="Photo Url" className="input input-bordered"
                            {...register("photoUrl", { required: true })}
                            />
                            {errors.photoUrl && <span className="text-red-700 font-medium">*This field is required</span>}
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
                            <Link className="font-semibold" to='/login'>Already have an account ? <span className="text-red-700">Login here!</span></Link>
                        </div>

                        <div className="form-control mt-6 animate__headShake">
                            <button className="btn bg-red-700 text-white hover:bg-red-900">Register</button>
                        </div>
                    </form>
                </div>
    
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;