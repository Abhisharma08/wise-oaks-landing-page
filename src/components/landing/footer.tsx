export default function Footer() {
  return (
    <footer className="bg-wiseBlue text-white border-t border-border pt-6 pb-[100px] md:pb-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-center md:text-left text-sm md:text-base">
          © {new Date().getFullYear()} DPS Bharuch. All Rights Reserved.
        </p>

        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <a href="#" className="hover:text-wiseYellow transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-wiseYellow transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-wiseYellow transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

