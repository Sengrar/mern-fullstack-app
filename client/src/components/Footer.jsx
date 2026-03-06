const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20">
      <div className=" mx-auto px-10 py-12 grid grid-cols-2 grid-cols-5 gap-10">

        {/* Brand */}
        <div className="col-span-2">
          <h3 className="text-lg font-semibold">&lt;/&gt; č-Lɪbɾāɾʏ</h3>
          <p className="mt-3 text-sm text-slate-600 max-w-sm">
            A modern workspace platform dedicated to development.
            Learn, build, and grow with structured roadmaps and projects.
          </p>
        </div>

        {/* Main */}
        <div className="flex flex-col gap-2">
          <h4 className="font-medium mb-2">Main</h4>
          <span><a className="text-sm text-slate-600 hover:text-blue-600" href="/">Home</a></span>
          <span><a className="text-sm text-slate-600 hover:text-blue-600" href="/contact">Contact</a></span>
          <span><a className="text-sm text-slate-600 hover:text-blue-600" href="/work">Work With Us</a></span>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-2">
          <h4 className="font-medium mb-2">Services</h4>
          <span><a className="text-sm text-slate-600 hover:text-blue-600" href="/services">Service 1</a></span>
          <span><a className="text-sm text-slate-600 hover:text-blue-600" href="/services">Service 2</a></span>
          <span><a className="text-sm text-slate-600 hover:text-blue-600" href="/services">Service 3</a></span>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-2">
          <h4 className="font-medium mb-2">Legal</h4>
          <span><a className="text-sm text-slate-600 hover:text-blue-600" href="/terms">Terms</a></span>
          <span><a className="text-sm text-slate-600 hover:text-blue-600" href="/privacy">Privacy</a></span>
          <span><a className="text-sm text-slate-600 hover:text-blue-600" href="/refund">Refund Policy</a></span>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-2">
          <h4 className="font-medium">Social</h4>
          <span><a className="text-sm text-slate-600 hover:text-blue-600" href="#">GitHub</a></span>
          <span><a className="text-sm text-slate-600 hover:text-blue-600" href="#">Twitter</a></span>
          <span><a className="text-sm text-slate-600 hover:text-blue-600" href="#">Facebook</a></span>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-500">
        © 2026 č-Lɪbɾāɾʏ. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;