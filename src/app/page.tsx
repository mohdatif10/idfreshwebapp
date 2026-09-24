import { ComplaintFeedbackFab } from "@/components/home/ComplaintFeedbackFab";
import { CreatorCollective } from "@/components/home/CreatorCollective";
import { HomeExperience } from "@/components/home/HomeExperience";
import { Newsroom } from "@/components/home/Newsroom";
import { OurStory } from "@/components/home/OurStory";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { PromiseBanner } from "@/components/home/PromiseBanner";
import { getNewsPosts } from "@/lib/services/news";
import { getTrendingRecipes } from "@/lib/services/recipes";

export default async function Home() {
  const [recipes, news] = await Promise.all([getTrendingRecipes(), getNewsPosts()]);

  return (
    <>
      <HomeExperience recipes={recipes} />
      <CreatorCollective />
      <PromiseBanner />
      <OurStory />
      <ProductShowcase />
      <Newsroom posts={news} />
      <ComplaintFeedbackFab />
    </>
  );
}
