/**
 * Type definitions for components
 */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'secondary' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export interface CardProps {
  variant?: 'base' | 'elevated' | 'flat';
  children: React.ReactNode;
  className?: string;
}

export interface BadgeProps {
  variant?: 'success' | 'danger' | 'warning' | 'info' | 'neutral';
  children: React.ReactNode;
  className?: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export interface NavbarProps {
  scrolled?: boolean;
  onMobileMenuToggle?: () => void;
}

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  items: string[];
  imageUrl?: string;
  reverse?: boolean;
}

export interface StatCardProps {
  icon: string;
  num: string;
  label: string;
}

export interface StepCardProps {
  icon: string;
  title: string;
  desc: string;
  number?: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface CommentData {
  author: string;
  text: string;
  timestamp?: Date;
}

export type NavLink = {
  label: string;
  href: string;
};
