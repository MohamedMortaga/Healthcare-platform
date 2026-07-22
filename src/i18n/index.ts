import en from './en.json';
import ar from './ar.json';
import { Locale } from '@/types';

export type Dictionary = typeof en;

export const DICTIONARIES: Record<Locale, Dictionary> = { en, ar };

export function interpolate(str: string, vars: Record<string, string | number>): string {
  return str.replace(/\{(\w+)\}/g, (m, k) => (vars[k] != null ? String(vars[k]) : m));
}
