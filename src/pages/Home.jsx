import React from "react";
import HeroSection from "../components/home/HeroSection";
import CoursesPreview from "../components/home/CoursesPreview";
import GuidesPreview from "../components/home/GuidesPreview";
import CareerPreview from "../components/home/CareerPreview";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GuidesPreview />
      <CoursesPreview />
      <CareerPreview />
      <CTASection />
    </>
  );
}
