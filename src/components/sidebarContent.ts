import {
  Map,
  Plane,
  Users,
  BookOpen,
  Camera,
  CalendarCheck,
  Heart,
  Globe,
  ChartLine
} from "lucide-react";

const sideBarData = {
  user: {
    name: "Matheus",
    avatar: "/avatars/user.jpg",
    email: "example@gmail.com",

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
          url: "/trips/plantrip",
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
          url: "/community/diary",
        },
      ],
    },
    {
      title: "Guia",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Destinos",
          url: "/explore/destination",
        },
        {
          title: "Dicas de Viagem",
          url: "/guide/tripTips",
        },
        {
          title: "Tutoriais",
          url: "#",
        },
        {
          title: "Novidades",
          url: "/guide/news",
        },
      ],
    },
    {
      title: "Admin",
      url: "#",
      icon: ChartLine,
      items: [
        {
          title: "test",
          url: "#",
        },
        {
          title: "test2",
          url: "#",
        },
        {
          title: "test3",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Diário de Viagem",
      url: "#",
    },
    {
      name: "Planejamento de Roteiro",
      url: "#",
    },
    {
      name: "Sonhos de Viagem",
      url: "#",

    },
  ],
}

export { sideBarData }
