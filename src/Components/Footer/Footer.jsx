import { Email, Facebook, LinkdIn, Twitter } from "../../assets";

const Footer = () => {
    const footerServive=[
        {
            servie:"CS — Ticket System",
            serviceName:["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."],
            icon:[" "]
        },
        {
            servie:"Company",
            serviceName:["About Us","Our Mission","Contact Saled"],
            icon:[" "]
        },
        {
            servie:"Services",
            serviceName:["Products & Services","Customer Stories"],
            icon:[" "]
        },
        {
            servie:"Information",
            serviceName:["Privacy Policy","Terms & Conditions","Join Us"],
            icon:[" "]
        },
        {
            servie:"Social Links",
            serviceName:["@CS — Ticket System","@CS — Ticket System","@CS — Ticket System","nomanjahan866615@gmail.com"],
            icon:[<Twitter/>,<LinkdIn/>,<Facebook/>,<Email/>,]
        }


    ]
  return (
    <div className="max-w-7xl mx-auto px-20 pt-20 pb-6 text-white">
      <div className="flex  justify-between">
        {
          footerServive.map((item)=><div>
           
            <p>{item.servie}</p>
            <div className="flex">
                <div className="border">{item.icon}</div>
                <div>
                    
                {
                    item.serviceName.map((service)=><div>
                        <p className="flex">{service}</p>
                         
                    </div>)
                }
                </div>
            </div>
          </div>)  
        }
      </div>
      <div>p6</div>
    </div>
  );
};

export default Footer;
