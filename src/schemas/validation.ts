import { z } from 'zod';

// Egyptian mobile: optional +20/0 prefix, then 1[0125] + 8 digits.
const egyptianPhone = z
  .string()
  .trim()
  .min(1, 'Egyptian mobile number is required')
  .regex(/^(\+20|0)?1[0125]\d{8}$/, 'Please enter a valid Egyptian phone number');

export const loginSchema = z.object({
  phone: z.string().min(1, 'Phone number is required'),
  password: z.string().min(1, 'Password is required')
});
export type LoginInput = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z.string().trim().min(1, 'Full name is required'),
    phone: z.string().min(1, 'Phone number is required'),
    email: z.string().email().optional().or(z.literal('')),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    consent: z.boolean()
  })
  .refine((data) => data.consent, { message: 'You must accept the PDPL data processing consent', path: ['consent'] });
export type RegisterInput = z.infer<typeof registerSchema>;

export const reservationSchema = z.object({
  name: z.string().trim().min(5, 'Please enter your full name as printed on national ID'),
  phone: egyptianPhone,
  nationalId: z
    .string()
    .trim()
    .optional()
    .refine((v) => !v || /^\d{14}$/.test(v), { message: 'Egyptian National ID must be exactly 14 digits' }),
  email: z.string().email().optional().or(z.literal(''))
});
export type ReservationInput = z.infer<typeof reservationSchema>;

export function zodErrorsToFieldMap<T extends string>(error: z.ZodError): Partial<Record<T, string>> {
  const out: Partial<Record<T, string>> = {};
  for (const issue of error.issues) {
    const key = issue.path[0] as T;
    if (key && !out[key]) out[key] = issue.message;
  }
  return out;
}
