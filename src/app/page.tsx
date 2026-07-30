import { CareersBanner } from "@/components/home/CareersBanner";
import { CreatorCollective } from "@/components/home/CreatorCollective";
import { HomeExperience } from "@/components/home/HomeExperience";
import { Newsroom } from "@/components/home/Newsroom";
import { OurStory } from "@/components/home/OurStory";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { PromiseBanner } from "@/components/home/PromiseBanner";
import { getOpenRoles } from "@/lib/services/careers";
import { getNewsPosts } from "@/lib/services/news";
import { getFeaturedProducts } from "@/lib/services/products";
import { getTrendingRecipes } from "@/lib/services/recipes";

export default async function Home() {
  const [recipes, products, news, roles] = await Promise.all([
    getTrendingRecipes(),
    getFeaturedProducts(),
    getNewsPosts(),
    getOpenRoles(),
  ]);

  return (
    <>
      <HomeExperience recipes={recipes} />
      <CreatorCollective />
      <PromiseBanner />
      <OurStory />
      <ProductShowcase products={products} />
      <Newsroom posts={news} />
      <CareersBanner roles={roles} />
    </>
  );
}
