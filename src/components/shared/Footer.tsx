import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Video,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

const footerLinks = {
  links: [
    { name: "Homepage", href: "/" },
    { name: "About us", href: "/about-us" },
    { name: "Our masterpieces", href: "/masterpieces" },
    { name: "Contact Us", href: "/contact-us" },
  ],
  projects: [
    { name: "Tycoon Tower", href: "/projects/tycoon-tower" },
    { name: "Nile Boulevard", href: "/projects/nile-boulevard" },
    { name: "Nile Business City", href: "/projects/nile-business-city" },
    { name: "31 North Tower - The New Capital", href: "/projects/31-north" },
  ],
  contact: [
    { name: "16783", href: "tel:16783", icon: Phone },
    { name: "Schedule Meeting", href: "#", icon: Video },
    {
      name: "Contact via WhatsApp",
      href: "https://wa.me/...",
      icon: MessageCircle,
    },
  ],
  socials: [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Linkedin, href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Logo and Contact Info */}
          <div className="space-y-8">
            <Link href="/" className="block">
              <Image
                src="/assets/images/logos/main-logo.svg"
                alt="Nile Developments Logo"
                width={180}
                height={70}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>

            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <MapPin className="w-5 h-5 text-[#b89156] mt-1 shrink-0" />
                <p className="text-sm text-gray-400 leading-relaxed">
                  New Cairo 1, Cairo Governorate
                  <br />
                  4760121
                </p>
              </div>
              <div className="flex items-center gap-4 group">
                <Mail className="w-5 h-5 text-[#b89156] shrink-0" />
                <a
                  href="mailto:info@nile-developments.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  info@nile-developments.com
                </a>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-lg font-serif mb-8 tracking-wider">Links</h4>
            <ul className="space-y-4">
              {footerLinks.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects Column */}
          <div>
            <h4 className="text-lg font-serif mb-8 tracking-wider">
              Our Projects
            </h4>
            <ul className="space-y-4">
              {footerLinks.projects.map((project) => (
                <li key={project.name}>
                  <Link
                    href={project.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors font-light"
                  >
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Call Us Column */}
          <div>
            <h4 className="text-lg font-serif mb-8 tracking-wider">Call Us</h4>
            <ul className="space-y-6">
              {footerLinks.contact.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-[#b89156]/10 transition-colors">
                      <item.icon className="w-5 h-5 text-[#b89156]" />
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors font-light">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500 font-light text-center md:text-left">
            © 2026 Nile Developments - Privacy policy Carefully crafted by{" "}
            <span className="text-white">Right Mind ©</span>
          </p>

          <div className="flex items-center gap-6">
            {footerLinks.socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-white transition-all hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
