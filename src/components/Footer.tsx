
const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-10 bg-companio-charcoal text-white/70">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">&copy; 2025 Companio. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
