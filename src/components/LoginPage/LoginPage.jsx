import s from "./LoginPage.module.css";
import { useForm } from "react-hook-form";

let renderCount = 0;

let LoginPage = (props) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    renderCount++;

    return (
        <div className={s.wrapper}>
            <h1> Login page </h1>
            <h6> Render count: {renderCount} </h6>
            <div className={s.forms}>
                <div className={s.auth}>
                    <h3> Sign in </h3>
                    <form
                        onSubmit={handleSubmit((data) => {
                            console.log(data);
                        })}
                    >
                        <div className={s.login}>
                            <input
                                {...register("login", { required: 'This field is required' })}
                                placeholder="E-mail"
                                autoComplete="off"
                                spellCheck={false}
                            />
                        </div>
                        {errors.login && errors.login.message}
                        <div className={s.pwd}>
                            <input
                                type="password"
                                {...register("password",
                                    {
                                        required: 'This field is required',
                                        validate: value => value.length > 4
                                    }
                                )}
                                placeholder="Password"
                            />
                        </div>
                        {errors.password && <p> This field is required </p>}
                        <div className={s.remember}>
                            <input type="checkbox" />
                            <span className={s.text}>Remember me</span>
                        </div>
                        <div className={s.btn}>
                            <button> Sign In </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
