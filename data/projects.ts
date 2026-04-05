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
    name: "Ecommerce App",
    shortDescription:
      "Tienda online completa con carrito, pagos y panel de admin para emprendedores.",
    description:
      "Plataforma de ecommerce desarrollada con Next.js y Strapi como CMS headless. Incluye catálogo de productos con filtros, carrito persistente, integración de pagos, panel de administración para gestionar stock y órdenes, y diseño responsive optimizado para conversión. El objetivo fue darle a emprendedores una solución lista para vender sin depender de plataformas genéricas.",
    stack: ["Next.js", "Strapi", "PostgreSQL", "Tailwind CSS"],
    icon: "🛒",
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
    name: "Software Empresarial",
    shortDescription:
      "Sistema interno con login, roles y base de datos para gestión empresarial.",
    description:
      "Sistema de gestión interna desarrollado a medida para una empresa. Cuenta con autenticación segura, sistema de roles y permisos, módulos de gestión de datos, reportes exportables y una interfaz limpia pensada para el uso diario del equipo. La solución reemplazó procesos manuales en planillas, reduciendo errores y tiempo operativo.",
    stack: ["React", "Node.js", "PostgreSQL", "Express"],
    icon: "🏢",
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
