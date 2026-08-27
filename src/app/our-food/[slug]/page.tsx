import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CategoryProductSwitcher, type ProductBundle } from "@/components/product/CategoryProductSwitcher";
import { ProductDetailView } from "@/components/product/ProductDetailView";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { OUR_FOOD_CATEGORIES } from "@/data/our-food-categories";
import {
  getProductBySlug,
  getProductsByCategory,
  getRelatedProducts,
} from "@/lib/services/products";
import { getTrendingRecipes } from "@/lib/services/recipes";
import type { Product } from "@/lib/types";

interface OurFoodSlugPageProps {
  params: Promise<{ slug: string }>;
}

async function resolveBundle(product: Product): Promise<ProductBundle> {
  const [relatedProducts, allRecipes] = await Promise.all([
    getRelatedProducts(product),
    getTrendingRecipes(),
  ]);
  return { product, relatedProducts, relatedRecipes: allRecipes.slice(0, 3) };
}

export async function generateMetadata({ params }: OurFoodSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = OUR_FOOD_CATEGORIES.find((c) => c.slug === slug);
  if (category) return { title: `${category.label} | iD Fresh` };

  const product = await getProductBySlug(slug);
  if (!product) return { title: "iD Fresh" };
  return { title: `${product.name} | iD Fresh`, description: product.description };
}

export default async function OurFoodSlugPage({ params }: OurFoodSlugPageProps) {
  const { slug } = await params;
  const category = OUR_FOOD_CATEGORIES.find((c) => c.slug === slug);

  // Category mode: default to the first product in the category, with a pill row
  // to swap between every product in it — client-side, no navigation.
  if (category) {
    const categoryProducts = await getProductsByCategory(category.slug);

    return (
      <div className="py-8 sm:py-12">
        <Container className="max-w-2xl">
          <Link
            href="/our-food"
            className="inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-brand-600 hover:text-brand-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>

          {categoryProducts.length === 0 ? (
            <ComingSoon
              emoji="🍽️"
              label={category.label}
              title={`${category.label} is coming soon`}
              description={`We're still adding products to the ${category.label} category — check back soon.`}
            />
          ) : (
            <CategoryProductSwitcherServer products={categoryProducts} />
          )}
        </Container>
      </div>
    );
  }

  // Product mode: a single product, by its own slug.
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const bundle = await resolveBundle(product);

  return (
    <div className="py-8 sm:py-12">
      <Container className="max-w-2xl">
        <Link
          href="/our-food"
          className="inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-brand-600 hover:text-brand-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <ProductDetailView
          product={bundle.product}
          relatedProducts={bundle.relatedProducts}
          relatedRecipes={bundle.relatedRecipes}
        />
      </Container>
    </div>
  );
}

/** Resolves every category product's bundle server-side, then hands the whole
 * array to the client switcher — so swapping pills never needs a refetch. */
async function CategoryProductSwitcherServer({ products }: { products: Product[] }) {
  const bundles = await Promise.all(products.map(resolveBundle));
  return <CategoryProductSwitcher bundles={bundles} />;
}
