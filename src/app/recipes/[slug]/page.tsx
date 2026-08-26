import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { RecipeRail } from "@/components/recipes/RecipeRail";
import { getRecipeBySlug, getRelatedRecipes } from "@/lib/services/recipes";

interface RecipePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: RecipePageProps): Promise<Metadata> {
  const { slug } = await params;
  const recipe = await getRecipeBySlug(slug);
  if (!recipe) return { title: "Recipe | iD Fresh" };
  return {
    title: `${recipe.title} | iD Fresh Recipes`,
    description: recipe.description ?? `${recipe.title} — ready in ${recipe.minutes} minutes.`,
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = await getRecipeBySlug(slug);

  if (!recipe) notFound();

  const relatedRecipes = await getRelatedRecipes(recipe);

  return (
    <div className="py-8 sm:py-12">
      <Container className="max-w-2xl">
        <Link
          href="/recipes"
          className="inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-brand-600 hover:text-brand-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Recipes
        </Link>

        <h1 className="mt-6 font-heading text-3xl font-extrabold text-brand-900 sm:text-4xl">
          {recipe.title}
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm text-inkgray">
          <span className="flex items-center gap-1.5">
            <Clock3 className="h-4 w-4" />
            {recipe.minutes}m
          </span>
          {recipe.servings && (
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              Serves {recipe.servings}
            </span>
          )}
          {recipe.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="relative mt-6 aspect-4/3 w-full overflow-hidden rounded-3xl">
          {recipe.image ? (
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              sizes="(min-width: 640px) 42rem, 100vw"
              className="object-cover"
              priority
            />
          ) : (
            <PlaceholderImage
              tone={recipe.tone}
              emoji={recipe.emoji}
              className="h-full w-full"
              emojiClassName="text-7xl"
            />
          )}
        </div>

        {recipe.description && <p className="mt-6 text-inkgray">{recipe.description}</p>}

        {recipe.ingredients && (
          <div className="mt-10">
            <h2 className="font-heading text-2xl font-extrabold text-brand-900">Ingredients</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient} className="flex items-start gap-2 text-sm text-brand-900">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        )}

        {recipe.steps && (
          <div className="mt-10">
            <h2 className="font-heading text-2xl font-extrabold text-brand-900">Method</h2>
            <ol className="mt-4 flex flex-col gap-5">
              {recipe.steps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-500 font-mono text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm text-brand-900">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {relatedRecipes.length > 0 && (
          <div className="mt-14">
            <RecipeRail title="You might also like" recipes={relatedRecipes} viewAllHref="/recipes" />
          </div>
        )}
      </Container>
    </div>
  );
}
