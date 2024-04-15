import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form"
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {

    const {user,reworkProfile}=useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    console.log(user)

    const onSubmit = (data) => {
        const {name,photoURL}=data;

        reworkProfile(name,photoURL)
        .then((result)=>{
            toast('Please Reload your webpage!')
            console.log(result.user)
        })
        .catch((error)=>{
            console.log(error.message)
        })

        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                 <title>South Stay | Update Profile</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-red-800">Update your information!</h1>
                    <p className="py-6 text-[18px] font-medium">We're here to assist you by keeping our information up to date, ensuring your convenience is our top priority. In return, we appreciate your help by providing the latest listings for both houses on sale and for rent.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body p-3 md:p-[32px]">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Name</span>
                            </label>
                            <input type="text" placeholder="Updated Name" className="input input-bordered"
                                {...register("name")}
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Updated Photo URL" className="input input-bordered"
                                {...register("photoURL", { required: true })}
                            />
                            {errors.password && <span className="text-red-700 font-medium">*This field is required</span>}
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn bg-red-700 text-white hover:bg-red-900">Update</button>
                        </div>
                    </form>
                    
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default UpdateProfile;