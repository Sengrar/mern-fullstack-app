import {Link} from 'react-router-dom'

const Nav =()=>{
   
    return(
        <>
        <nav className="flex justify-between bg-white border-b border-slate-200 items-center px-8 py-3 max-w-8xl mx-auto">
            <div>
                <Link className="text-lg font-semibold" to="/">&lt; / &gt; č-Lɪbɾāɾʏ</Link>
            </div>

            <ul className="flex gap-10 text-base">
                <li><Link className="text-slate-800 hover:text-blue-600 transition" to="/">Home</Link></li>
                <li><Link className="text-slate-800 hover:text-blue-600 transition" to="/about">About</Link></li>
                <li><Link className="text-slate-800 hover:text-blue-600 transition" to="/tutorials">Tutorials</Link></li>
                <li><Link className="text-slate-800 hover:text-blue-600 transition" to="/blog">Blog</Link></li>
                <li><Link className="text-slate-800 hover:text-blue-600 transition" to="/contact">Contact</Link></li>
            </ul>
            
            <div className="flex gap-5">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm font-medium"><Link to="/login">Login</Link></button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm font-medium">🌙</button>
            </div>
        </nav>
        </>
    )
}
export default Nav