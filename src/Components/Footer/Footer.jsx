import { Email, Facebook, LinkdIn, Twitter } from "../../assets";

const Footer = () => {
  const footerServive = [
    {
      servie: "CS — Ticket System",
      serviceName: [
        "CS — Ticket System is a customer support management platform designed to help businesses efficiently manage customer requests, track support tickets, monitor agent performance, and resolve issues faster. Our goal is to make customer support simple, organized, and transparent for both customers and support teams.",
      ],
    },
    {
      servie: "Company",
      serviceName: ["About Us", "Our Mission", "Contact Saled"],
    },
    {
      servie: "Services",
      serviceName: ["Products & Services", "Customer Stories"],
    },
    {
      servie: "Information",
      serviceName: ["Privacy Policy", "Terms & Conditions", "Join Us"],
    },
    {
      servie: "Social Links",
      serviceName: [
        "@CS — Ticket System",
        "@CS — Ticket System",
        "@CS — Ticket System",
        
      ],
      icon: [<Twitter />, <LinkdIn />, <Facebook />, <Email />],
    },
  ];
  return (
    <div className="max-w-7xl mx-auto p-2 md:pt-20 md:pb-6 text-white">
      <div className="grid md:grid-cols-5 gap-4 border-b pb-20">
        {footerServive.map((item) => (
          <div>
            <p className="font-bold  text-lg md:text-2xl">{item.servie}</p>
            <div className="mt-4">
              {item.serviceName.map((service, index) => (
                <div key={index} className="mt-4 md:flex items-center gap-2">
                  {item.icon?.[index]}
                  <p className="text-xs md:text-base text-[#A1A1AA]">{service}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="md:text-center text-2xl py-7">© 2026 CS — Ticket System. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
