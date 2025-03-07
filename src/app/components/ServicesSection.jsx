"use client";

const ServicesSection = async () => {
  const res = await fetch("/services.json");
  const data = await res.json();
  return <div className="grid grid-cols-12"></div>;
};

export default ServicesSection;
