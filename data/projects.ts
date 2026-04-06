export type Project = {
  id: number;
  slug: string;
  name: string;
  shortDescription: string; // Para el card en home
  description: string; // Descripción larga para la página de detalle
  stack: string[];
  icon: string;
  type: "demo" | "images";
  demoUrl?: string;
  images: string[]; // paths a imágenes en /public — vacío por ahora
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "ecommerce-app",
    name: "EHLinsumo",
    shortDescription:
      "Tienda online completa con carrito, pagos y panel de admin para emprendedores.",
    description:
      "Plataforma de ecommerce desarrollada con Next.js y Strapi como CMS headless. Incluye catálogo de productos con filtros, carrito persistente, integración de pagos, ",
    stack: ["Next.js", "Strapi", "PostgreSQL", "Tailwind CSS", "Render"],
    icon: "🦜",
    type: "demo",
    demoUrl: "https://ehlinsumo-frontend.vercel.app/",
    images: [
      "/images/ecommerce/homeFilter.png",
      "/images/ecommerce/productDetails.png",
      "/images/ecommerce/cart(2).png",
    ],
  },
  {
    id: 2,
    slug: "software-empresarial",
    name: "Inventario Micro",
    shortDescription:
      "Sistema interno con login, roles y base de datos para gestión empresarial.",
    description:
      "Sistema de gestión interna desarrollado a medida para una empresa. Cuenta con autenticación segura, sistema de roles y permisos, módulos de gestión de datos, ",
    stack: ["Vanilla", "Supabase", "PostgreSQL", "Tailwind CSS"],
    icon: "🔧",
    type: "images",
    images: [
      "/images/software/login.png",
      "/images/software/editar.png",
      "/images/software/filtrado.png",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
