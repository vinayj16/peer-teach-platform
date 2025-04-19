
import { useState } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import SkillCard from "@/components/skill-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { getSkillsWithTeachers, categories } from "@/data/mockData";
import { Search } from "lucide-react";

const Discover = () => {
  const allSkills = getSkillsWithTeachers();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [virtualOnly, setVirtualOnly] = useState(false);
  const [inPersonOnly, setInPersonOnly] = useState(false);
  
  // Filter skills based on search, category, and session type
  const filteredSkills = allSkills.filter((skill) => {
    // Search filter
    const matchesSearch = 
      skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category filter
    const matchesCategory = 
      selectedCategory === "All Categories" || skill.category === selectedCategory;
    
    // Session type filter
    const matchesSessionType = 
      (!virtualOnly && !inPersonOnly) || 
      (virtualOnly && skill.isVirtual) || 
      (inPersonOnly && skill.isInPerson);
    
    return matchesSearch && matchesCategory && matchesSessionType;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl font-bold text-skillswap-dark mb-4">Discover Skills</h1>
            <p className="text-skillswap-neutral">
              Browse through skills offered by our community members. Find the perfect match for what you want to learn.
            </p>
          </div>
          
          {/* Search and filters */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="md:col-span-2">
                <Label htmlFor="search">Search Skills</Label>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-skillswap-neutral" />
                  <Input
                    id="search"
                    placeholder="Search by keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="category">Category</Label>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="virtual" 
                      checked={virtualOnly} 
                      onCheckedChange={(checked) => setVirtualOnly(checked as boolean)}
                    />
                    <Label htmlFor="virtual">Virtual Sessions</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="inperson" 
                      checked={inPersonOnly} 
                      onCheckedChange={(checked) => setInPersonOnly(checked as boolean)}
                    />
                    <Label htmlFor="inperson">In-Person Sessions</Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Results */}
          <div className="mb-4">
            <p className="text-skillswap-neutral">
              Showing {filteredSkills.length} {filteredSkills.length === 1 ? 'skill' : 'skills'}
            </p>
          </div>
          
          {filteredSkills.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSkills.map((skill) => (
                <SkillCard
                  key={skill.id}
                  id={skill.id}
                  title={skill.title}
                  category={skill.category}
                  description={skill.description}
                  teacher={skill.teacher}
                  isVirtual={skill.isVirtual}
                  isInPerson={skill.isInPerson}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-skillswap-dark mb-2">No skills found</h3>
              <p className="text-skillswap-neutral mb-6">
                Try adjusting your search or filters to find more results.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Categories");
                  setVirtualOnly(false);
                  setInPersonOnly(false);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Discover;
