import { Blocks, Code2, Workflow, Ticket, MonitorSmartphone, type LucideIcon } from 'lucide-react';
export type Service = {id:string;number:string;title:string;description:string;icon:LucideIcon;tags:string[]};
export const services:Service[]=[
{id:'dashboard',number:'01',title:'Dokas Dashboard',description:'Paneles de control que convierten datos complejos en decisiones simples. Métricas, operaciones y reportes en un solo lugar.',icon:Blocks,tags:['Analytics','Admin panels','KPIs']},
{id:'software',number:'02',title:'Custom Software',description:'Diseñamos y desarrollamos sistemas digitales a la medida de tu negocio, desde portales internos hasta productos SaaS.',icon:Code2,tags:['Web apps','SaaS','Portals']},
{id:'integrations',number:'03',title:'APIs & Integrations',description:'Conectamos plataformas, automatizamos tareas repetitivas y hacemos que tus herramientas trabajen juntas.',icon:Workflow,tags:['APIs','Automation','Plugins']},
{id:'experiences',number:'04',title:'Digital Experiences',description:'Creamos experiencias digitales para eventos, reservas, entradas, registros y pagos.',icon:Ticket,tags:['Events','Checkout','Booking']},
{id:'web',number:'05',title:'Web & UX/UI',description:'Sitios web y experiencias de comercio electrónico que combinan identidad, rendimiento y usabilidad.',icon:MonitorSmartphone,tags:['Websites','E-commerce','UX/UI']},
];
