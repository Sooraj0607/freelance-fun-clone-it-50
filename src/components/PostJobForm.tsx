
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectGroup,
  SelectItem, 
  SelectTrigger, 
  SelectValue
} from '@/components/ui/select';
import { jobCategories } from '@/data/mockData';
import { toast } from 'sonner';

interface FormData {
  title: string;
  description: string;
  category: string;
  budget: string;
  skills: string;
}

const PostJobForm = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    category: '',
    budget: '',
    skills: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCategoryChange = (value: string) => {
    setFormData(prevState => ({
      ...prevState,
      category: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Semiconductor job posted successfully!');
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      category: '',
      budget: '',
      skills: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Job Title
        </label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g., ASIC Verification Engineer"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Job Description
        </label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe the project requirements, deliverables, and technical specifications..."
          rows={5}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="category" className="block text-sm font-medium mb-1">
            Category
          </label>
          <Select value={formData.category} onValueChange={handleCategoryChange} required>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {jobCategories.filter(cat => cat !== "All Categories").map((category, index) => (
                  <SelectItem key={index} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium mb-1">
            Budget
          </label>
          <Input
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="e.g., $10,000-$15,000"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="skills" className="block text-sm font-medium mb-1">
          Required Skills (comma separated)
        </label>
        <Input
          id="skills"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="e.g., Verilog, SystemVerilog, UVM"
          required
        />
      </div>

      <Button type="submit" className="w-full">Post Semiconductor Job</Button>
    </form>
  );
};

export default PostJobForm;
