import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import registerImg from "../../../assets/others/authentication2.png";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../socialLogin/SocialLogin";

const Login = () => {
  const [error,setError]=useState('')
  const [success,setSuccess]=useState('')
  const [disabled, setDisabled] = useState(true);
  const {  signInUser } = useContext(AuthContext);

  const navigate=useNavigate()
  const location=useLocation()
  const from=location.state?.from?.pathname ||'/'

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError('')
      setSuccess('User SuccessFully Logged In')
        Swal.fire({
          title: `User Login SuccessFul`,
          showClass: {
            popup: `animate_animated animate_fadeInDown`,
          },
          hideClass: {
            popup: `animate_animated animate_fadeOutUp`,
          },
        });
        navigate(from, {replace: true})
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    }
    else {
      setDisabled(true)
    }
  };

  return (
    <>
    <Helmet>
    <title>Bistro Boss | LOGIN</title>
    </Helmet>
      <div className="hero min-h-screen bg-[url('/src/assets/others/authentication.png')]">
        <div className="hero-content lg:flex">
          <div className="text-center w-1/2 lg:text-left">
            <img src={registerImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-1/2 shadow-2xl ">
            <h2 className="text-center text-4xl pt-6 font-bold">Login Here</h2>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered rounded-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered rounded-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  placeholder="Type the Captcha"
                  className="input input-bordered rounded-none"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <span>{error}</span>
                  <span>{success}</span>
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={false}
                  className="btn btn bg bg-[#D1A054] border-none"
                  type="submit"
                  value="Login"
                />
              </div>
              <p className="text-[#D1A054] text-center">
                New here?{" "}
                <Link to="/register" className="font-bold">
                  Create a New Account
                </Link>
              </p>
              <SocialLogin setSuccess={setSuccess} setError={setError}></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
