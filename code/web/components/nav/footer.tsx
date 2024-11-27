import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import Link from 'next/link';

const icons = [
  { Component: Facebook, href: '#'  },
  { Component: Instagram, href: '#'   },
  { Component: Youtube, href: '#'  },
  { Component: Twitter, href: 'https://x.com/openhousexyz?t=bh93-qQxuZekVitRh71HjA&s=09' },
];
const Footer = () => {
  return (
    <div className="bg-[#317ba0] px-16 py-12">
      <div className="flex justify-between mb-8">
        <div className="w-1/3 space-y-8">
          <div className="space-y-2">
            <h2 className="text-white text-sm font-semibold font-['Montserrat']">
              OpenHouse
            </h2>
            <p className="text-white text-sm font-normal font-['Montserrat'] leading-relaxed">
              Discover a community-powered rental platform that connects renters
              to transparent, verified property listings while empowering users
              to earn rewards by sharing real insights. Find your next home with
              ease, trust, and no hidden fees.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-sm font-semibold font-['Montserrat']">
              Contact Enquiries
            </h2>
            <div className="space-y-1">
              <p className="text-white text-xs font-normal font-['Montserrat']">
                Email: info@openhouse.ng
              </p>
              <p className="text-white text-xs font-normal font-['Montserrat']">
                Phone: +234 8012 345 6789
              </p>
              <p className="text-white text-xs font-normal font-['Montserrat']">
                Address: 789 Market St, Suite 10, Lagos Island, Nigeria
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/4">
          <h2 className="text-white text-sm font-semibold font-['Montserrat'] mb-2">
            Company
          </h2>
          <div className="space-y-2">
            {[
              { name: 'Home', href: '/' },
              { name: 'About Us', href: '/under_construction' },
              { name: 'Browse Listing', href: '/listing/all' },
              { name: 'Become a Scout', href: '/under_construction' },
              { name: 'FAQ', href: '/faq' },
              { name: 'Terms of Use', href: '/terms' },
              { name: 'Privacy Policy', href: '/privacy' },
            ].map(({ name, href }) => (
              <Link key={name} href={href}>
                <p className="text-white text-xs font-normal font-['Montserrat'] mb-2">
                  {name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-1/4">
          <h2 className="text-white text-sm font-semibold font-['Montserrat'] mb-2">
            Discover
          </h2>
          <div className="space-y-2">
            {[
              'Properties for Rent',
              'Properties for Sale',
              'Short Let Destination',
            ].map((item) => (
              <p
                key={item}
                className="text-white text-xs font-normal font-['Montserrat']"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-white/20 mb-8" />

      <div className="flex justify-start items-start flex-col">
        <div className="flex gap-4">
          <div className="flex space-x-2">
            {icons.map(({ Component, href }, index) => (
              <Link href={href} key={index}>
                <div key={index} className="border border-white rounded-md p-1">
                  <Component className="w-3 h-3 text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <p className="text-white text-xs font-normal font-['Montserrat'] my-3 gap-4">
          © OpenHouse 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
