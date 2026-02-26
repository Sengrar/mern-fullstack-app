import {Link} from 'react-router-dom'
const Home = ()=>{
    return(
        <>
        <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-10 py-20 text-center">

        {/* Badge */}
        <p className="text-base text-blue-600 font-medium mb-4">
          Developer Knowledge & Collaboration Platform
        </p>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight">
          Learn. Build. Collaborate.  
        </h2>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">

          Welcome to č-Lɪbɾāɾʏ
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          Tutorials, blogs, and a lightweight team workspace designed for developers.
          Create teams, manage projects, and learn modern technologies in one place.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">

          <Link
            to="/tutorials"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
          >
            Explore Tutorials
          </Link>

          <Link
            to="/login"
            className="px-6 py-3 rounded-lg border border-slate-300 hover:bg-slate-100 transition font-medium"
          >
            Make Your Team
          </Link>

        </div>

      </div>
    </section>
        </>
    )
}
export default Home