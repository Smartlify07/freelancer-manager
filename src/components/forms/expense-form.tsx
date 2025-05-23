'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { v4 } from 'uuid';

import { Button, buttonVariants } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { cn, expenseCategories } from '@/lib/utils';
import { CalendarIcon, Loader2 } from 'lucide-react';
import { Calendar } from '../ui/calendar';
import { format } from 'date-fns';
import { addExpense } from '@/lib/actions';
import { useEffect, useMemo, useState } from 'react';
import { useFinance } from '@/hooks/useFinance';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/use-auth';
const FormSchema = z.object({
  payee: z.string().optional(),
  date: z.date(),
  notes: z.string().optional(),
  amount: z.coerce.number().min(1, "Expense amount can't be less than one"),
  category: z.string().min(1, 'Category cannot be empty'),
});

export function ExpenseForm({
  setShowForm,
}: {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      payee: '',
      notes: '',
      date: new Date(),
      amount: 0,
      category: '',
    },
  });
  const { dispatch } = useFinance();
  const { user } = useAuth();
  const [saving, setSaving] = useState(false);
  const randomCategory = useMemo(() => {
    return expenseCategories[
      Math.floor(Math.random() * expenseCategories.length - 1) ??
        'Client Projects'
    ]?.label;
  }, [expenseCategories]);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setSaving(true);

    try {
      const { date, ...rest } = data;

      const newData = {
        ...rest,
        id: v4(),
        date: new Date(date).toISOString(),
      };

      await addExpense(newData, dispatch, user?.id);

      toast.success('Expense added successfully', {
        description: `You have added a new expense of ₦${newData.amount.toLocaleString()} for ${format(
          new Date(newData.date),
          'PPP'
        )}`,
        duration: 3000,
      });

      setShowForm(false);
    } catch (error) {
      console.error('Error adding expense:', error);
      toast.error('Error adding expense, please try again later.');
    } finally {
      setSaving(false);
    }
  }

  useEffect(() => {
    if (form.formState.isSubmitSuccessful)
      form.reset({
        date: new Date(),
        notes: '',
        amount: 0,
        category: '',
        payee: '',
      });
  }, [form.formState]);

  return (
    <div className="w-full flex flex-col gap-4">
      <DialogHeader>
        <DialogTitle>Add Expense</DialogTitle>
        <DialogDescription>
          Add a new expense to your account.
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <Input type="number" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="payee"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Payee</FormLabel>
                <Input type="text" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger className="w-full">
                    <FormControl>
                      <div
                        className={cn(
                          'selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex items-center h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                          'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </div>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value ? new Date(field.value) : undefined}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date('1900-01-01')
                      }
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={randomCategory ?? 'Software'} />
                  </SelectTrigger>
                  <SelectContent>
                    {expenseCategories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes</FormLabel>
                <Textarea {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-4">
            <DialogClose
              className={cn('flex-1', buttonVariants({ variant: 'outline' }))}
            >
              Cancel
            </DialogClose>
            <Button disabled={saving} type="submit" className="flex-1">
              {saving ? <Loader2 /> : null}
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
