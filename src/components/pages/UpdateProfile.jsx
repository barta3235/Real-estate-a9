
import { useForm } from "react-hook-form"
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import { IoMdPerson } from "react-icons/io";
import { IoMdPhotos } from "react-icons/io";

const UpdateProfile = () => {

    const { user, reworkProfile } = useContext(AuthContext);
    const {displayName,photoURL}=user


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    console.log(user)

    const onSubmit = (data) => {
        const { name, photoURL } = data;

        reworkProfile(name, photoURL)
            .then((result) => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Please reload the webpage',
                    icon: 'success',
                    confirmButtonText: 'Continue',
                    confirmButtonColor: '#8b0000'
                })
                console.log(result.user)
            })
            .catch((error) => {
                console.log(error.message)
            })


    }
    return (
        <div className="hero min-h-screen bg-base-200 lg:pl-[20px]" style={{ backgroundImage: `url(https://i.ibb.co/KG3C1hn/wave1.png)` }}>
            <Helmet>
                <title>South Stay | Update Profile</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse p-0 m-0">
                <div className="md:flex md:flex-col md:items-center lg:block">
                    <div className="text-center lg:text-left animate__rotateInDownLeft animate__animated">
                        <h1 className="text-5xl font-bold text-red-800">Update your information!</h1>
                        <p className="py-6 text-[18px] font-medium">We're here to assist you by keeping our information up to date, ensuring your convenience is our top priority. In return, we appreciate your help by providing the latest listings for both houses on sale and for rent.</p>
                    </div>
                    <div className="border p-2 rounded-xl shadow-xl animate__rotateInDownLeft animate__animated md:w-[500px]">
                        <h1 className=" font-medium text-[16px] md:text-[20px] flex items-center gap-[5px] w-full"><IoMdPerson className="text-2xl"></IoMdPerson><span className="font-semibold">User name: </span><span className="font-medium text-black bg-white rounded-lg p-1"> {displayName}</span></h1>
                        <h1 className="mt-5 font-medium text-[16px] md:text-[20px] flex items-center gap-[5px]"><IoMdPhotos className="text-2xl"></IoMdPhotos><span className="font-medium">PhotoURL: </span><span className="font-medium overflow-x-scroll w-[150px] md:w-full text-black bg-white rounded-lg p-1"> {photoURL}</span></h1>
                    </div>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 animate__rotateInDownRight animate__animated">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body p-3 md:p-[32px]">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Name</span>
                            </label>
                            <input type="text" placeholder="Updated Name" className="input input-bordered"
                                {...register("name",{ required: true })}
                            />
                             {errors.name && <span className="text-red-700 font-medium">*This field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Updated Photo URL" className="input input-bordered"
                                {...register("photoURL", { required: true })}
                            />
                            {errors.photoURL && <span className="text-red-700 font-medium">*This field is required</span>}
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn bg-red-700 text-white hover:bg-red-900">Update</button>
                        </div>
                    </form>

                </div>

            </div>

        </div>
    );
};

export default UpdateProfile;