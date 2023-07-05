
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

  JAVASCRIPT = 1,
  TYPESCRIPT = 2,
  VUE = 3,
  REACT = 4,
  ANGULAR = 5,
  NODEJS = 6,
  COMPUTER_SCIENCE = 7,
  ALGORITHMS = 8,
  DATA_STRUCTURES = 9,
  DESIGN_PATTERNS = 10,
  SOFTWARE_DESIGN = 11,
  SOFTWARE_ARCHITECTURE = 12,
  SOFTWARE_ENGINEERING = 13,
  SOFTWARE_QUALITY = 14,
  SOFTWARE_TESTING = 15,
  SOFTWARE_MAINTENANCE = 16,
  SOFTWARE_REFACTORING = 17,
  SOFTWARE_METRICS = 18,
  SOFTWARE_RELIABILITY = 19,

  DATABASES = 20,
  SQL = 21,
  NOSQL = 22,

  JAVA = 23,
  SPRING = 24,
  SPRING_BOOT = 25,
  SPRING_CLOUD = 26,
  SPRING_DATA = 27,
  SPRING_INTEGRATION = 28,
  SPRING_SECURITY = 29,
  CSHARP = 30,
  DOTNET = 31,
  DOTNET_CORE = 32,
  QUASAR  = 33,
  REST,
  SOAP,
  MICROSERVICES,
}
