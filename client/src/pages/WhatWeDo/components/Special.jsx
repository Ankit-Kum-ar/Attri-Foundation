import React from "react";
import { Building, Waves, GraduationCap, Droplet, Dog, Users } from "lucide-react";

const Special = () => {
  const services = [
    {
      icon: <Building size={24} className="text-white" />,
      title: "Family support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      icon: <Waves size={24} className="text-white" />,
      title: "Health benefits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      icon: <GraduationCap size={24} className="text-white" />,
      title: "Education",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      icon: <Droplet size={24} className="text-white" />,
      title: "Basic amenities",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      icon: <Dog size={24} className="text-white" />,
      title: "Therapy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      icon: <Users size={24} className="text-white" />,
      title: "Public outreach",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];

  return (
    <section className="bg-[#FFEBB9] py-16 px-6 md:px-20 font-roboto">
      <div className="container mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-[#1D2130] mb-14">
          What we do for our kids with special needs
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Icon */}
              <div className="p-2 bg-black rounded-md">{service.icon}</div>

              {/* Content */}
              <div>
                <h4 className="text-lg font-bold text-[#1D2130] mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-[#525560]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Special;