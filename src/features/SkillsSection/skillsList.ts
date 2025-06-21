import { EarthIcon, PersonStandingIcon } from 'lucide-vue-next'
import {
  ArgoIcon,
  DockerIcon,
  DotNetIcon,
  FastifyIcon,
  GitHubActionsIcon,
  GitLabIcon,
  GrafanaIcon,
  KubernetesIcon,
  MongoDbIcon,
  NodeDotjsIcon,
  PostgreSqlIcon,
  PythonIcon,
  RedisIcon,
  VueDotjsIcon,
} from 'vue3-simple-icons'

export const SKILLS_LIST = [
  {
    id: 'frontend',
    title: 'Frontend',
    description:
      'Je conçois des interfaces utilisateur modernes et performantes, avec une attention particulière à l’ergonomie, l’accessibilité et l’expérience utilisateur. J’aime transformer des idées en interactions concrètes, fluides et engageantes.',
    skills: [
      {
        name: 'Vue.js',
        icon: VueDotjsIcon,
      },
      {
        name: 'Accessibility',
        icon: PersonStandingIcon,
      },
      {
        name: 'Internationalization',
        icon: EarthIcon,
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description:
      'Je développe des architectures backend robustes et évolutives, en privilégiant la performance, la maintenabilité et la simplicité. Je suis à l’aise aussi bien dans des environnements Node.js que dans des stacks plus traditionnelles comme .NET.',
    skills: [
      {
        name: 'Node.js',
        icon: NodeDotjsIcon,
      },
      {
        name: 'Fastify',
        icon: FastifyIcon,
      },
      {
        name: '.NET',
        icon: DotNetIcon,
      },
      {
        name: 'Python',
        icon: PythonIcon,
      },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps',
    description:
      'Je maîtrise les outils et pratiques DevOps pour garantir des livraisons fiables et rapides. De l’intégration continue au déploiement automatisé, j’automatise chaque étape pour fluidifier les workflows et sécuriser les mises en production.',
    skills: [
      {
        name: 'Docker',
        icon: DockerIcon,
      },
      {
        name: 'Kubernetes',
        icon: KubernetesIcon,
      },
      {
        name: 'ArgoCD',
        icon: ArgoIcon,
      },
      {
        name: 'Github Actions',
        icon: GitHubActionsIcon,
      },
      {
        name: 'GitLab CI',
        icon: GitLabIcon,
      },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    description:
      'Je conçois des modèles de données clairs et efficaces, adaptés aux besoins métiers. Je suis à l’aise avec les bases SQL comme PostgreSQL, mais aussi NoSQL comme MongoDB ou les systèmes de cache comme Redis.',
    skills: [
      {
        name: 'PostgreSQL',
        icon: PostgreSqlIcon,
      },
      {
        name: 'MongoDB',
        icon: MongoDbIcon,
      },
      {
        name: 'Redis',
        icon: RedisIcon,
      },
    ],
  },
  {
    id: 'monitoring',
    title: 'Monitoring',
    description:
      'Pour moi, un bon système passe aussi par la visibilité. J’intègre des solutions de monitoring pour suivre les performances applicatives, détecter les anomalies et agir en continu pour l’amélioration.',
    skills: [
      {
        name: 'Grafana',
        icon: GrafanaIcon,
      },
    ],
  },
] as const
