import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { ProductAccordion } from "@/components/product/ProductAccordion";
import { SizeSelector } from "@/components/product/SizeSelector";
import { TestimonialCard } from "@/components/product/TestimonialCard";
import { RecipeRail } from "@/components/recipes/RecipeRail";
import type { Product, Recipe } from "@/lib/types";

interface ProductDetailViewProps {
  product: Product;
  relatedProducts: Product[];
  relatedRecipes: Recipe[];
  /** The category pill-switcher's product-picker row, rendered directly below
   * the hero image — only passed in category-switcher mode. */
  switcher?: React.ReactNode;
}

/** The full product detail body (everything below the hero photo) — shared by the
 * plain /our-food/[product-slug] page and the category pill-switcher, which swaps
 * which product's bundle is passed in without a page navigation. */
export function ProductDetailView({ product, relatedProducts, relatedRecipes, switcher }: ProductDetailViewProps) {
  return (
    <>
      <h1 className="mt-6 text-center font-heading text-3xl font-extrabold text-brand-900 sm:text-4xl">
        {product.name}
      </h1>
      {product.tagline && (
        <p className="mt-1 text-center font-accent italic text-lg text-brand-600 sm:text-xl">
          {product.tagline}
        </p>
      )}

      <div className="relative mx-auto mt-6 aspect-square w-full max-w-sm">
        {product.heroImage ? (
          <Image
            src={product.heroImage}
            alt={product.name}
            fill
            sizes="24rem"
            className="object-contain"
            priority
          />
        ) : (
          <PlaceholderImage
            tone={product.tone}
            emoji={product.emoji}
            className="h-full w-full rounded-3xl"
            emojiClassName="text-7xl"
          />
        )}
      </div>

      {switcher}

      {product.longDescription && (
        <div className="mt-8 rounded-2xl bg-brand-500 p-6 text-cream sm:p-8">
          <p className="text-sm leading-relaxed sm:text-base">{product.longDescription}</p>
        </div>
      )}

      {!product.longDescription && <p className="mt-6 text-center text-inkgray">{product.description}</p>}

      {product.sizes && (
        <div className="mt-8">
          <p className="font-heading text-sm font-bold text-brand-900">Sizes</p>
          <div className="mt-2">
            <SizeSelector sizes={product.sizes} />
          </div>
        </div>
      )}

      {product.keyClaims && (
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {product.keyClaims.map((claim) => (
            <span
              key={claim}
              className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-800"
            >
              {claim}
            </span>
          ))}
        </div>
      )}

      {(product.ingredientsNote ||
        product.howToMake ||
        product.storageInstructions ||
        product.nutritionFacts ||
        product.faqs) && (
        <div className="mt-10">
          <ProductAccordion
            items={[
              ...(product.ingredientsNote
                ? [
                    {
                      title: "Ingredients",
                      content: (
                        <>
                          <p className="text-sm text-inkgray">{product.ingredientsNote}</p>
                          {product.allergenDeclaration && (
                            <p className="mt-4 text-xs text-inkgray">
                              <span className="font-semibold">Allergen declaration: </span>
                              {product.allergenDeclaration}
                            </p>
                          )}
                        </>
                      ),
                    },
                  ]
                : []),
              ...(product.howToMake
                ? [
                    {
                      title: "How to Use",
                      content: (
                        <ol className="flex flex-col gap-4">
                          {product.howToMake.map((step) => (
                            <li key={step.title} className="flex items-start gap-4">
                              {step.image && (
                                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-sand">
                                  <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    sizes="4rem"
                                    className="object-contain"
                                  />
                                </div>
                              )}
                              <div>
                                <p className="text-sm font-semibold text-brand-900">{step.title}</p>
                                <p className="mt-0.5 text-sm text-inkgray">{step.description}</p>
                              </div>
                            </li>
                          ))}
                        </ol>
                      ),
                    },
                  ]
                : []),
              ...(product.storageInstructions
                ? [
                    {
                      title: "Storage Instructions",
                      content: <p className="text-sm text-inkgray">{product.storageInstructions}</p>,
                    },
                  ]
                : []),
              ...(product.nutritionFacts
                ? [
                    {
                      title: "Nutritional Information",
                      content: (
                        <div>
                          <div className="overflow-hidden rounded-xl border border-brand-100">
                            <table className="w-full text-sm">
                              <tbody>
                                {product.nutritionFacts.map((fact, index) => (
                                  <tr
                                    key={fact.label}
                                    className={index % 2 === 0 ? "bg-brand-50" : "bg-white"}
                                  >
                                    <td className="px-3 py-2 text-brand-900">{fact.label}</td>
                                    <td className="px-3 py-2 text-right font-mono text-brand-800">
                                      {fact.value}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          {product.nutritionNote && (
                            <p className="mt-3 text-xs text-inkgray">{product.nutritionNote}</p>
                          )}
                        </div>
                      ),
                    },
                  ]
                : []),
              ...(product.faqs
                ? [
                    {
                      title: "Frequently asked questions",
                      content: (
                        <div className="flex flex-col gap-4">
                          {product.faqs.map((faq) => (
                            <div key={faq.question}>
                              <p className="text-sm font-semibold text-brand-900">{faq.question}</p>
                              <p className="mt-1 text-sm text-inkgray">{faq.answer}</p>
                            </div>
                          ))}
                        </div>
                      ),
                    },
                  ]
                : []),
            ]}
          />
        </div>
      )}

      {product.testimonials && (
        <div className="mt-12">
          <h2 className="font-heading text-2xl font-extrabold text-brand-900">Testimonials</h2>
          <div className="no-scrollbar mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {product.testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-12">
        <RecipeRail title="Related Recipes" recipes={relatedRecipes} viewAllHref="/recipes" />
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="font-heading text-2xl font-extrabold text-brand-900">Related Products</h2>
          <div className="mt-5 grid grid-cols-2 gap-4">
            {relatedProducts.map((related) => (
              <Link
                key={related.id}
                href={`/our-food/${related.slug}`}
                className="rounded-2xl border border-brand-100 p-4 text-center transition-colors hover:bg-brand-50"
              >
                <div className="relative mx-auto aspect-square w-full max-w-[140px]">
                  {related.image ? (
                    <Image
                      src={related.image}
                      alt={related.name}
                      fill
                      sizes="140px"
                      className="object-contain"
                    />
                  ) : (
                    <PlaceholderImage
                      tone={related.tone}
                      emoji={related.emoji}
                      className="h-full w-full rounded-xl"
                      emojiClassName="text-4xl"
                    />
                  )}
                </div>
                <p className="mt-2 font-heading text-sm font-bold text-brand-900">{related.name}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 flex justify-center">
        <Button href="/our-food" variant="outline">
          Explore all Products
        </Button>
      </div>
    </>
  );
}
