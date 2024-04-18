import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "./provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../firebaseProvider/firebase.config";
import Swal from 'sweetalert2'
const auth = getAuth(app)

const UpdateProfile = () => {
    const { loading } = useContext(AuthContext);

    if (loading) {
        return <div className='flex justify-center items-center'>
            <span className="loading loading-bars loading-md "></span>
        </div>
    }

    
                //Update profile:
             const handleProfile = (e) => {
                    e.preventDefault()
                    const name = e.target.name.value;
                    const photo = e.target.photo.value;
                    updateProfile(auth.currentUser,{
                        displayName:name,
                        photoURL:photo
                        
                    });
                    Swal.fire({
                        title: "Updated Successfully!",
                        text: "You clicked the button!",
                        icon: "success"
                      });
                }
    


    return (
        <div>
            <Helmet>
                <title>Regal House | UpdateProfile</title>
            </Helmet>

            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col ">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Update Profile</h1>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleProfile} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Username" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                                    <label className="label">
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateProfile;