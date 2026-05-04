

const Header = (props)=>{
    const loggOutUser = ()=>{
        localStorage.setItem('loggedInUser', '')
        // window.location.reload()
        props.changeUser('')
    }

    return(
        <div className="w-full flex items-center justify-between bg-blue-50 border border-blue-200 shadow-md rounded-2xl px-6 py-4">
            
            {/* LEFT SIDE - GREETING */}
            <div className="flex flex-col">
                <h1 className="text-blue-500 text-sm sm:text-base font-medium">
                    Hello
                </h1>
                <span className="text-blue-900 text-2xl sm:text-3xl font-bold tracking-wide">
                    firstName
                </span>
            </div>

            {/* RIGHT SIDE - BUTTON */}
            <button 
                onClick={loggOutUser} 
                className="bg-blue-500 hover:bg-blue-600 active:scale-95 transition-all duration-200 text-white px-5 py-2 rounded-xl text-sm sm:text-base font-semibold shadow-md"
            >
                Log out
            </button>

        </div>
    )
}

export default Header;