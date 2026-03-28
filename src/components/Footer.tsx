export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary border-t border-cyan-400/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="container-max px-4 md:px-8 py-12 md:py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 relative z-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold gradient-text">Research Quest</h3>
            <p className="text-cyan-100/70 text-sm">
              Unleash your research, build the future. Connect with real-world challenges.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-cyan-100">Quick Links</h4>
            <ul className="space-y-2 text-cyan-100/70 text-sm">
              {['About', 'Themes', 'Timeline', 'Prizes'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-cyan-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="font-semibold text-cyan-100">Resources</h4>
            <ul className="space-y-2 text-cyan-100/70 text-sm">
              {['Documentation', 'FAQ', 'Support', 'Community'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="font-semibold text-cyan-100">Legal</h4>
            <ul className="space-y-2 text-cyan-100/70 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Code of Conduct'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-400/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-cyan-100/70 text-sm relative z-10">
          <p>&copy; {currentYear} Research Quest. All rights reserved.</p>
          <div className="flex gap-6">
            {['Twitter', 'LinkedIn', 'Discord', 'GitHub'].map((social) => (
              <a
                key={social}
                href="#"
                className="hover:text-cyan-300 transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
