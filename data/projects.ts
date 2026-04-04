export type Project = {
  id: number;
  name: string;
  description: string;
  stack: string[];
  icon: string;
  type: "demo" | "images"; // demo = se puede entrar, images = solo capturas
  demoUrl?: string;
  images?: string[]; // paths a imágenes en /public
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Ecommerce App",
    description:
      "Tienda online completa con carrito, pagos y panel de admin para emprendedores.",
    stack: ["Next.js", "Strapi", "PostgreSQL"],
    icon: "🛒",
    type: "demo",
    demoUrl: "https://tu-ecommerce.vercel.app", // cambiá por tu URL real
  },
  {
    id: 2,
    name: "Software Empresarial",
    description:
      "Sistema interno con login, roles y base de datos para gestión empresarial.",
    stack: ["React", "Node.js", "PostgreSQL"],
    icon: "🏢",
    type: "images",
    images: [], // acá vas a agregar los paths cuando tengas las capturas
  },
];
