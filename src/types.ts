export type PageType = 
  | 'home'
  | 'about'
  | 'services'
  | 'portfolio'
  | 'pricing'
  | 'testimonials'
  | 'audit'
  | 'blog'
  | 'contact';

export type IndustryCategory = 
  | 'all'
  | 'healthcare' // Dental, Clinics, Hospitals
  | 'hospitality' // Restaurants, Hotels, Cafes
  | 'wellness' // Gyms, Salons, Spas
  | 'education' // Schools, Institutes, Academies
  | 'real-estate' // Realtors, Property Developers
  | 'ecommerce' // Direct-to-consumer, Stores
  | 'corporate'; // Legal, Financial, Tech & Startups

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  tagline: string;
  category: IndustryCategory;
  industryLabel: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  metrics: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
  challenge: string;
  solution: string;
  results: string[];
  deliverables: string[];
  techStack: string[];
  liveUrl?: string;
  featured: boolean;
  testimonial?: {
    quote: string;
    author: string;
    title: string;
    avatar: string;
  };
  mockupViews?: {
    desktop: string;
    mobile: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  category: IndustryCategory | 'growth' | 'technical';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  idealFor: string[];
  keyFeatures: string[];
  deliverables: string[];
  timeframe: string;
  startingPrice: number;
  conversionBoost: string;
  popular?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  billingPeriod: string;
  popular?: boolean;
  idealFor: string;
  features: string[];
  notIncluded?: string[];
  deliveryTime: string;
  revisions: string;
  support: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  avatar: string;
  rating: number;
  metric: string;
  reviewDate: string;
  verifiedSource: 'Google Reviews' | 'Clutch' | 'Trustpilot' | 'Direct Video Review';
  content: string;
  projectType: string;
  videoDuration?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  tags: string[];
}

export interface CustomScopeItem {
  id: string;
  name: string;
  category: 'Pages' | 'Features' | 'Marketing' | 'Integrations';
  price: number;
  description: string;
}

export interface AuditResult {
  url: string;
  industry: string;
  overallScore: number;
  scores: {
    cro: number;
    speed: number;
    seo: number;
    design: number;
    mobile: number;
  };
  insights: {
    type: 'positive' | 'warning' | 'critical';
    title: string;
    description: string;
  }[];
  recommendations: string[];
  estimatedRevenueUplift: string;
}
