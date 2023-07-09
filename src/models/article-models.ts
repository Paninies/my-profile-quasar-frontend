
export interface Article {
  id: number;
  title: string;

  author: string;
  description: string;
  content?: string;
  topics: TopicEnum[];
  image?: string;
  created_at: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by?: Date;
  updated_by?: Date;
}

export enum TopicEnum {

  JAVASCRIPT = "JavaScript",
  TYPESCRIPT = "TypeScript",
  VUE = "Vue.js",
  REACT = "React.js",
  ANGULAR = "Angular",
  NODE = "Node.js",
  EXPRESS = "Express.js",
  MONGODB = "MongoDB",
  MYSQL = "MySQL",
  POSTGRESQL = "PostgreSQL",
  FIREBASE = "Firebase",
  AWS = "AWS",
  AZURE = "Azure",
  GCP = "GCP",
  DOCKER = "Docker",
  KUBERNETES = "Kubernetes",
  JENKINS = "Jenkins",
  GIT = "Git",
  GITHUB = "GitHub",
  GITLAB = "GitLab",
  BITBUCKET = "Bitbucket",
  CICD = "CI/CD",
  DEVOPS = "DevOps",
  AGILE = "Agile",
  SCRUM = "Scrum",
  KANBAN = "Kanban",
  LEAN = "Lean",
  XP = "XP",
  TDD = "TDD",
  BDD = "BDD",
  DDD = "DDD",
  OOP = "OOP",
  FP = "FP",

  HTML = "HTML",
  CSS = "CSS",
  SASS = "SASS",
  LESS = "LESS",
  BOOTSTRAP = "Bootstrap",
  JAVA = "Java",
  CSHARP = "C#",
  PYTHON = "Python",
  PHP = "PHP",
  RUBY = "Ruby",
  GO = "Go",
  RUST = "Rust",
  SWIFT = "Swift",
  KOTLIN = "Kotlin",
  SCALA = "Scala",
  HASKELL = "Haskell",
  C = "C",
  CPP = "C++",
  CLOJURE = "Clojure",
  ELIXIR = "Elixir",
  FSHARP = "F#",
  OCAML = "OCaml",
  LISP = "Lisp",
  BASH = "Bash",
  POWERSHELL = "PowerShell",

}
