import Link from "next/link";
import { cn } from "@/lib/utils";
import { Phone, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const navLinks = [
  { title: "HOMEPAGE", href: "/" },
  { title: "31 NORTH TOWER", href: "/31-north-tower" },
  {
    title: "OUR MASTERPIECES",
    href: "/our-masterpieces",
    subItems: [
      {
        title: "31 NORTH TOWER - THE NEW CAPITAL",
        href: "/our-masterpieces/31-north-tower",
      },
      { title: "TYCOON TOWER", href: "/our-masterpieces/tycoon-tower" },
      { title: "TYCOON CENTER", href: "/our-masterpieces/tycoon-center" },
      { title: "NILE BOULEVARD", href: "/our-masterpieces/nile-boulevard" },
      {
        title: "NILE BUSINESS CITY",
        href: "/our-masterpieces/nile-business-city",
      },
    ],
  },
  {
    title: "ABOUT US",
    href: "/about-us",
    subItems: [
      { title: "WHO WE ARE", href: "/about-us/who-we-are" },
      { title: "BOARD OF DIRECTORS", href: "/about-us/board-of-directors" },
      { title: "OUR PARTNERS", href: "/about-us/our-partners" },
      { title: "CAREER", href: "/about-us/career" },
    ],
  },
  {
    title: "SPONSORSHIPS",
    href: "/sponsorships",
    subItems: [{ title: "NILE LEAGUE", href: "/sponsorships/nile-league" }],
  },
  {
    title: "MEDIA CENTER",
    href: "/media-center",
    subItems: [
      { title: "NEWS", href: "/media-center/news" },
      { title: "EVENTS", href: "/media-center/events" },
      { title: "BLOG", href: "/media-center/blog" },
      { title: "MEDIA CENTER", href: "/media-center" },
    ],
  },
  { title: "CONTACT US", href: "/contact-us" },
];

export default function Navbar({ className }: { className?: string }) {
  return (
    <>
      {/* Desktop Navigation */}
      <div className={cn("hidden lg:block", className)}>
        <NavigationMenu viewport={false}>
          <NavigationMenuList className="gap-1">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.title}>
                {link.subItems && link.subItems.length > 0 ? (
                  <div className="group/menu-item">
                    <NavigationMenuTrigger
                      className={cn(
                        "h-8 px-2 xl:px-3 text-[10px] xl:text-[12px] font-bold transition-all hover:bg-primary! hover:text-white! data-[state=open]:bg-primary! data-[state=open]:text-white! rounded-full bg-transparent text-foreground border-none shadow-none focus:bg-primary! focus:text-white! [&>svg]:ml-1 [&>svg]:size-3 uppercase tracking-tight",
                      )}
                    >
                      {link.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-0! bg-transparent! border-none! shadow-none!">
                      <ul className="flex flex-col w-[240px] xl:w-[280px] gap-0 p-0 bg-[#1a1a1a] rounded-xl border border-white/10 shadow-2xl">
                        {link.subItems.map((subItem) => (
                          <li
                            key={subItem.title}
                            className="border-b border-white/5 last:border-none"
                          >
                            <Link
                              href={subItem.href}
                              className="block select-none p-2 xl:p-3 leading-tight no-underline outline-none transition-colors hover:bg-white/10 hover:text-white text-white/90 text-[10px] xl:text-[11px] font-bold uppercase tracking-wider"
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </div>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "h-8 px-2 xl:px-3 text-[10px] xl:text-[12px] font-bold transition-all hover:bg-primary hover:text-white rounded-full bg-transparent text-foreground border-none shadow-none focus:bg-primary focus:text-white uppercase tracking-tight",
                      )}
                    >
                      {link.title}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Call Action & Mobile Menu */}
      <div className="flex items-center gap-4">
        <a
          href="tel:16783"
          className="hidden lg:flex items-center gap-2 h-8 px-2 xl:px-3 text-[10px] xl:text-[12px] font-bold transition-all hover:bg-primary hover:text-white rounded-full bg-transparent text-foreground focus:bg-primary focus:text-white uppercase tracking-tight"
        >
          <Phone className="h-3 w-3 xl:h-4 xl:w-4" />
          <span>16783</span>
        </a>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] p-8 transition-transform duration-300 ease-in-out overflow-y-auto"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav className="flex flex-col gap-2 mt-10">
              <Accordion
                type="single"
                collapsible
                className="w-full border-none"
              >
                {navLinks.map((link) => (
                  <div key={link.title}>
                    {link.subItems ? (
                      <AccordionItem value={link.title} className="border-none">
                        <AccordionTrigger className="text-base font-semibold text-foreground hover:text-primary transition-colors uppercase tracking-wide hover:no-underline py-3">
                          {link.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-2 pl-4 pt-2">
                            {link.subItems.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <Link
                        href={link.href}
                        className="block text-base font-semibold text-foreground hover:text-primary transition-colors uppercase tracking-wide py-3"
                      >
                        {link.title}
                      </Link>
                    )}
                  </div>
                ))}
              </Accordion>
              <div className="pt-6 mt-auto border-t">
                <Button asChild variant="default" size="lg" className="w-full">
                  <a href="tel:16783" className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <span>16783</span>
                  </a>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
