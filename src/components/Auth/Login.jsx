
import { useState } from "react"

const Login = ({handleLogin})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email, password)
        setEmail('');
        setPassword('');
    }

    return(
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 px-4">
            
            <div className="w-full max-w-lg min-h-[420px] bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-10 sm:p-12 border border-blue-300/20">
                
                <h2 className="text-3xl font-bold text-center text-white mb-8">
                    Welcome Back
                </h2>

                <form 
                    onSubmit={(e)=>{ submitHandler(e) }} 
                    className="flex flex-col gap-5"
                >
                    <input 
                        required 
                        type="email" 
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e)=>{ setEmail(e.target.value) }}
                        className="w-full px-5 py-3 text-white placeholder-gray-300 bg-white/20 border border-blue-200/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/30 transition"
                    />

                    <input 
                        required 
                        type="password" 
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e)=>{ setPassword(e.target.value) }}
                        className="w-full px-5 py-3 text-white placeholder-gray-300 bg-white/20 border border-blue-200/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/30 transition"
                    />

                    <button 
                        className="w-full py-3 mt-3 text-lg font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-lg"
                    >
                        Login
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Login;