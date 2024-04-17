import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "./provider/AuthProvider";
import { useForm } from "react-hook-form";


const UpdateProfile = () => {
    const { loading, updateUserProfile } = useContext(AuthContext);


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) =>{
        console.log(data)
        const {image,name} = data;
        updateUserProfile(name, image)
        .then( ()=>{
            alert('Updated successfully!')
            
        })
        .catch()
        
      } 


    if (loading) {
        return <div className='flex justify-center items-center'>
            <span className="loading loading-bars loading-md "></span>
        </div>
    }

  

    

    return (
        <div>
            <Helmet>
                <title>Regal House | UpdateProfile</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">Update Your Profile</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input {...register("username", { required: true })} type="text" placeholder="Enter the name" className="input input-bordered"  />
                                {errors.username && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input {...register("photo", { required: true })} type="text"  placeholder="Photo URL" className="input input-bordered" />
                                {errors.photo && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email"  placeholder="Email" className="input input-bordered" />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateProfile;