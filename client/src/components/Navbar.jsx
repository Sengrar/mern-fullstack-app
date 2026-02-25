const Nav =()=>{
    return(
        <>
        <nav className="flex justify-between bg-white border-b border-slate-200 items-center px-8 py-3 max-w-8xl mx-auto">
            <div>
                <a className="text-lg font-semibold" href="/">&lt; / &gt; Himanxu</a>
            </div>

            <ul className="flex gap-10 text-base">
                <li><a className="text-slate-800 hover:text-blue-600 transition" href="/">Home</a></li>
                <li><a className="text-slate-800 hover:text-blue-600 transition" href="/about">About</a></li>
                <li><a className="text-slate-800 hover:text-blue-600 transition" href="/services">Services</a></li>
                <li><a className="text-slate-800 hover:text-blue-600 transition" href="/contact">Contact</a></li>
            </ul>
            
            <div className="flex gap-5">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm font-medium">Login</button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm font-medium">🌙</button>
            </div>
        </nav>
        </>
    )
}
export default Nav