import { 
  Map, 
  Plane, 
  Users, 
  BookOpen, 
  Settings2, 
  Camera, 
  CalendarCheck, 
  Heart, 
  Globe 
} from "lucide-react";

const sideBarData = {
  user: {
    name: "Matheus",
    email: "matheus@example.com",
    avatar: "/avatars/user.jpg",
  },
  teams: [
    {
      name: "Exploradores",
      logo: Globe,
      plan: "Premium",
    },
    {
      name: "Viajantes Solo",
      logo: Users,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Explorar",
      url: "#",
      icon: Map,
      isActive: true,
      items: [
        {
          title: "Destinos",
          url: "#",
        },
        {
          title: "Roteiros",
          url: "#",
        },
        {
          title: "Favoritos",
          url: "#",
        },
      ],
    },
    {
      title: "Viagens",
      url: "#",
      icon: Plane,
      items: [
        {
          title: "Próximas",
          url: "#",
        },
        {
          title: "Concluídas",
          url: "#",
        },
        {
          title: "Planejamento",
          url: "#",
        },
      ],
    },
    {
      title: "Comunidade",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Amigos",
          url: "#",
        },
        {
          title: "Grupos",
          url: "#",
        },
        {
          title: "Diários",
          url: "#",
        },
      ],
    },
    {
      title: "Guia",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Dicas de Viagem",
          url: "#",
        },
        {
          title: "Tutoriais",
          url: "#",
        },
        {
          title: "Novidades",
          url: "#",
        },
      ],
    },
    {
      title: "Configurações",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Conta",
          url: "#",
        },
        {
          title: "Notificações",
          url: "#",
        },
        {
          title: "Assinatura",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Diário de Viagem",
      url: "#",
      icon: Camera,
    },
    {
      name: "Planejamento de Roteiro",
      url: "#",
      icon: CalendarCheck,
    },
    {
      name: "Sonhos de Viagem",
      url: "#",
      icon: Heart,
    },
  ],
}

export { sideBarData }
