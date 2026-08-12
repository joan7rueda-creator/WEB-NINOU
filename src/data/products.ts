import type { Lang, UIKey } from '@/i18n/utils';
import { withBase } from '@/i18n/utils';

export type ProductCategoryId = 'bags' | 'complements' | 'clothing' | 'footwear';

export interface ProductCategory {
  id: ProductCategoryId;
  nameKey: UIKey;
  descKey: UIKey;
  gradient: string;
}

/** Categorías de producto. Añadir aquí una futura categoría nueva basta para
 * que aparezca en la sección Productes y tenga su propia subpágina. */
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { id: 'bags', nameKey: 'products.cat.bags', descKey: 'products.cat.bags.desc', gradient: 'from-brand-600 via-brand-700 to-ink-900' },
  { id: 'complements', nameKey: 'products.cat.complements', descKey: 'products.cat.complements.desc', gradient: 'from-ink-700 via-ink-800 to-ink-900' },
  { id: 'clothing', nameKey: 'products.cat.clothing', descKey: 'products.cat.clothing.desc', gradient: 'from-ink-600 via-ink-800 to-brand-900' },
  { id: 'footwear', nameKey: 'products.cat.footwear', descKey: 'products.cat.footwear.desc', gradient: 'from-brand-700 via-ink-800 to-ink-900' },
];

/** Segmento de ruta de la sección de productos, traducido por idioma. */
export const PRODUCTS_PATH: Record<Lang, string> = {
  ca: 'productes',
  es: 'productos',
};

/** Slug de cada categoría, traducido por idioma. */
export const CATEGORY_SLUGS: Record<Lang, Record<ProductCategoryId, string>> = {
  ca: { bags: 'bosses', complements: 'complements', clothing: 'roba', footwear: 'calcat' },
  es: { bags: 'bolsos', complements: 'complementos', clothing: 'ropa', footwear: 'calzado' },
};

export function getCategoryBySlug(lang: Lang, slug: string): ProductCategory | undefined {
  return PRODUCT_CATEGORIES.find((cat) => CATEGORY_SLUGS[lang][cat.id] === slug);
}

/** URL absoluta (con base e idioma) a la subpágina de una categoría. */
export function getCategoryPath(lang: Lang, id: ProductCategoryId): string {
  return withBase(`${lang}/${PRODUCTS_PATH[lang]}/${CATEGORY_SLUGS[lang][id]}/`);
}

/** URL absoluta a la sección Productes de la página principal. */
export function getProductsIndexPath(lang: Lang): string {
  return withBase(`${lang}/#products`);
}
