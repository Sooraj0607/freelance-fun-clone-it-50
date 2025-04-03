
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import type { ProjectType } from '@/data/mockData';

const formSchema = z.object({
  bidAmount: z.string().min(1, {
    message: "Please enter your bid amount",
  }),
  deliveryTime: z.string().min(1, {
    message: "Please enter your delivery time",
  }),
  coverLetter: z.string().min(30, {
    message: "Cover letter must be at least 30 characters",
  }),
  agreeToScreeningTest: z.boolean().optional(),
});

interface BidFormProps {
  project: ProjectType;
  onSubmitSuccess?: () => void;
}

const BidForm: React.FC<BidFormProps> = ({ project, onSubmitSuccess }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bidAmount: "",
      deliveryTime: "",
      coverLetter: "",
      agreeToScreeningTest: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('Bid submitted:', values);
    toast.success('Your bid has been submitted successfully!');
    
    if (onSubmitSuccess) {
      onSubmitSuccess();
    }
    
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-secondary/40 rounded-md p-4 mb-4">
          <h4 className="font-medium mb-1">Project: {project.title}</h4>
          <p className="text-sm text-muted-foreground">Budget: {project.budget}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="bidAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Bid Amount ($)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="e.g., 1500" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="deliveryTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Delivery Time</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select delivery time" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Less than 1 week">Less than 1 week</SelectItem>
                    <SelectItem value="1-2 weeks">1-2 weeks</SelectItem>
                    <SelectItem value="2-4 weeks">2-4 weeks</SelectItem>
                    <SelectItem value="1-2 months">1-2 months</SelectItem>
                    <SelectItem value="2+ months">2+ months</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="coverLetter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cover Letter / Proposal</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Introduce yourself and explain why you're the best fit for this project..."
                  className="min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Explain your approach, relevant experience, and how you'll deliver value
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {project.screeningTest && (
          <FormField
            control={form.control}
            name="agreeToScreeningTest"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    I agree to take the screening test: {project.screeningTest}
                  </FormLabel>
                  <FormDescription>
                    This project requires you to complete a screening test as part of the application process
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
        )}
        
        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline" onClick={onSubmitSuccess}>
            Cancel
          </Button>
          <Button type="submit">Submit Bid</Button>
        </div>
      </form>
    </Form>
  );
};

export default BidForm;
