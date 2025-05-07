import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a number as currency with Indian numbering system
 * (e.g., 1,00,000 instead of 100,000)
 */
export function formatCurrency(amount: number): string {
  // Handle edge cases
  if (!amount || isNaN(amount)) return '0';
  
  // Convert to fixed 2 decimal places
  const fixed = Math.round(amount).toString();
  
  // For values less than 1000, no special formatting needed
  if (fixed.length <= 3) return fixed;
  
  // Extract the last 3 digits
  const lastThree = fixed.substring(fixed.length - 3);
  
  // Get remaining digits and format with commas for Indian numbering system
  const otherNumbers = fixed.substring(0, fixed.length - 3);
  const formatted = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  
  return formatted + "," + lastThree;
}