import { Hero } from "@/components/sections/hero";
import {
  SolutionsSection,
  FinanceSection,
} from "@/components/sections/solutions";
import {
  AccountingSection,
  OnlineSection,
  StaffSection,
} from "@/components/sections/sub-solutions";
import { IndustriesSection } from "@/components/sections/industries";
import {
  BusinessSection,
  AppsSection,
} from "@/components/sections/social-proof";
import { NewsSection, SupportSection } from "@/components/sections/news-support";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SolutionsSection />
      <AccountingSection />
      <OnlineSection />
      <FinanceSection />
      <StaffSection />
      <IndustriesSection />
      <BusinessSection />
      <AppsSection />
      <NewsSection />
      <SupportSection />
    </>
  );
}