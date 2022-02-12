import s from "./LoginPage.module.css";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { loginTC } from "../../redux/authReducer";
import { useHistory } from "react-router-dom";

let renderCount = 0;

let LoginPage = ({ isAuthorized, login, error, captchaURL }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    
    renderCount++;
    if (isAuthorized) { history.push('/profile') }

    // console.log(watch())

    return (
        <div className={s.wrapper}>
            <h1> Login page </h1>
            <h6> Render count: {renderCount} </h6>
            <div className={s.forms}>
                <div className={s.auth}>
                    <h3> Sign in </h3>
                    <form
                        onSubmit={handleSubmit((data) => {
                            // console.log('Form is submitted: ', data, '\nAuthorized: ', props.isAuthorized);
                            // debugger
                            login(data.email, data.password, data.rememberMe, data.captcha);
                        })}
                    >
                        <div className={s.login}>
                            <input
                                {...register("email", { required: 'This field is required' })}
                                placeholder="E-mail"
                                autoComplete="off"
                                spellCheck={false}
                            />
                            {errors.email && <p> This field is required </p>}
                        </div>
                        <div className={s.pwd}>
                            <input
                                type="password"
                                {...register("password",
                                    {
                                        required: 'This field is required'
                                        // validate: value => value.length > 4
                                    }
                                )}
                                placeholder="Password"
                            />
                            {errors.password && <p> This field is required </p>}
                            {error && <p>{error}</p>}
                        </div>
                        <div className={s.remember}>
                            <input type="checkbox" 
                                {...register("rememberMe")} />
                            <span className={s.text}>Remember me</span>
                        </div>

                        {captchaURL &&
                            <div>
                                <img  src={captchaURL} alt="captcha"/>
                                <input
                                    {...register("captcha", { required: true } )}
                                />
                            </div>
                        }

                        <div className={s.btn}>
                            <button> Sign In </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        isAuthorized: state.auth.isAuthorized,
        error: state.auth.error,
        captchaURL: state.auth.captchaURL
    }
}

export default connect(mapStateToProps,  {
    login: loginTC
})(LoginPage);
