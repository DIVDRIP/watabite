import React, { useState } from 'react'
import watabite_logo from '../assets/watabite-logo.svg'
const LoginModal = ({ closeLogin }) => {

    // modal visibility state
    const [isVisible, setIsVisible] = useState(false);

    // login and register form toggler state
    const [toggle, setToggle] = useState('Login');

    // login details updating using state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    // button onclick for login handler
    const handleLogin = () => {
        console.log("Login Function Executed", formData);
        window.location.replace('/');
    }

    // button onclick for register handler
    const handleRegister = () => {
        console.log("Register Function Executed", formData);
        window.location.replace('/');

    }

    React.useEffect(() => {
        setTimeout(() => setIsVisible(true), 10);
    }, []);

    return (
        <div onClick={closeLogin} className='modal-overlay inset-0 bg-black/80 z-50 backdrop-blur-sm fixed' >

            {/* Model box */}
            <div style={{ height: toggle === 'Register' ? '500px' : '450px' }} onClick={(e) => e.stopPropagation()} className={`login-modal shadow-[0_0_30px_rgba(34,197,94,0.25)] bg-black/70 absolute transition-all duration-500 w-100 h-112.5 left-[50%] -translate-x-1/2 rounded-xl p-8 ${isVisible ? 'top-[50%] -translate-y-1/2 opacity-100' : 'top-0 -translate-y-full opacity-0'} `}>

                {/* cross-icon */}
                <button onClick={closeLogin} className=' cursor-pointer absolute top-2 right-2 text-2xl'>
                    &times;
                </button>

                {/* logo */}
                <div className='logo flex justify-center mb-4'>
                    <img className='w-43' src={watabite_logo} alt="watabite-logo" />
                </div>

                {/* text */}
                <div className="text-center mb-6">
                    <h2 className="text-start text-2xl font-bold text-white">{toggle}</h2>
                </div>

                {/* login placeholder */}
                {toggle === 'Login' ?
                    <div className="flex gap-3 flex-col">
                        <label htmlFor="email">
                            Email Address
                            <input
                                name='email'
                                value={formData.email}
                                onChange={changeHandler}
                                id='email'
                                type="email"

                                className="w-full px-4 py-2 bg-black/70 border border-green-500/30 rounded-4xl text-white focus:outline-none focus:border-green-500"
                            />
                        </label>

                        <label htmlFor="password">
                            Password
                            <input
                                type="password"
                                name='password'
                                value={formData.password}
                                onChange={changeHandler}
                                className="w-full px-4 py-2 bg-black/70 border border-green-500/30 rounded-4xl text-white focus:outline-none focus:border-green-500"
                            />
                        </label>

                    </div>
                    :
                    <div className="flex gap-2 flex-col">
                        <label htmlFor="Full Name">
                            Full Name
                            <input
                                type="text"
                                name='name'
                                value={formData.name}
                                onChange={changeHandler}


                                className="w-full px-4 py-2 bg-black/70 border border-green-500/30 rounded-4xl text-white focus:outline-none focus:border-green-500"
                            />
                        </label>
                        <label htmlFor="email">
                            Email Address
                            <input
                                id='email'
                                type="email"
                                name='email'
                                value={formData.email}
                                onChange={changeHandler}

                                className="w-full px-4 py-2 bg-black/70 border border-green-500/30 rounded-4xl text-white focus:outline-none focus:border-green-500"
                            />
                        </label>


                        <label htmlFor="password">
                            Password
                            <input
                                type="password"
                                name='password'
                                value={formData.password}
                                onChange={changeHandler}

                                className="w-full px-4 py-2 bg-black/70 border border-green-500/30 rounded-4xl text-white focus:outline-none focus:border-green-500"
                            />
                        </label>

                    </div>
                }
                {/* button */}
                <button onClick={() => { toggle === 'Login' ? handleLogin() : handleRegister() }} className={` cursor-pointer mt-7 w-full py-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-4xl transition-colors`}>
                    {toggle}
                </button>

                {/* toggle account */}
                {toggle === 'Login'
                    ?
                    <div className="about-account flex items-center justify-center mt-2">
                        <p>Don't have an account? <span onClick={() => setToggle('Register')} className='text-green-500 cursor-pointer'>Sign Up</span></p>
                    </div>
                    :
                    <div className="about-account flex items-center justify-center mt-2">
                        <p>Already have an account? <span onClick={() => setToggle('Login')} className=' cursor-pointer text-green-500'>Login</span></p>
                    </div>
                }

            </div>
        </div>
    )
}

export default LoginModal


