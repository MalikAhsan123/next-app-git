// pages/index.js
import Image from "next/image";
import Head from 'next/head';

export default function Footer() {
  return (
    <>
     

      <main className="bg-[#0A0F1F] w-[70%] mx-auto  text-white flex items-center justify-center border border-white rounded-lg pb-12">
        <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo and Navigation */}
          <header className="absolute top-8 left-8">
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Artie Logo" width={40} height={30} />
              <h1 className="text-2xl font-semibold">Artie</h1>
            </div>
          </header>
          <nav className="absolute lg:top-[90px] sm:top-[10px] lg:right-8 sm:right-4 lg:space-y-4 sm:space-x-2 space text-right flex items-center justify-end lg:flex-col sm:flex-row ">
            <a href="#home" className="block text-sm hover:text-gray-300">Home</a>
            <a href="#features" className="block text-sm hover:text-gray-300">Features</a>
            <a href="#about" className="block text-sm hover:text-gray-300">About us</a>
          </nav>

          {/* Main Content */}
          <section className="mt-24">
            <h2 className="text-lg sm:text-xl lg:text-xl font-extrabold tracking-tight">
              Ready to Elevate Your Design Process to the Next Level?
            </h2>
            <p className="mt-4 max-w-2xl text-lg sm:text-xl lg:text-sm text-gray-400">
              Transform your creative workflow with Artie’s AI-powered tools—automating pricing, timelines, and project briefs with precision so you can focus on what you do best: designing.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#"
                className="inline-block px-10 py-4 text-lg font-medium text-white bg-gradient-to-b from-[#000000] to-[#004ec0] rounded-lg mb-5 shadow"
              >
                Start for free
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className=" text-sm text-gray-400">
            <p>
              📧 Connect with us:{" "}
              <a href="mailto:hello@freelancepriceai.com" className="underline">
                hello@freelancepriceai.com
              </a>
            </p>
            <p className="mt-4">&copy; 2024 - Made with 💙 by Mariam Abbadi</p>
          </footer>
        </div>
      </main>
    </>
  );
}
