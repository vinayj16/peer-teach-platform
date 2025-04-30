
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "@/components/ui/navbar";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import LoginAnimation from "@/components/LoginAnimation";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Store the actual user's email in localStorage (using the part before '@' as 'username')
      const email = values.email;
      const username = email.split("@")[0];
      window.localStorage.setItem(
        "skillswap_user",
        JSON.stringify({
          name: username,
          email: email,
        })
      );
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-indigo-100 relative overflow-hidden">
      <LoginAnimation />
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 space-y-6 border border-purple-100 relative z-10">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold text-indigo-900">Welcome back</h1>
            <p className="text-indigo-700">Enter your credentials to access your account</p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-indigo-800">Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input 
                          placeholder="Enter your email" 
                          {...field}
                          className="border-indigo-200 focus:border-skillswap-primary focus:ring-skillswap-primary/20" 
                        />
                        <Mail className="absolute right-3 top-3 h-4 w-4 text-indigo-400" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-pink-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-indigo-800">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          {...field}
                          className="border-indigo-200 focus:border-skillswap-primary focus:ring-skillswap-primary/20"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-indigo-400 hover:text-indigo-600"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-pink-500" />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-skillswap-primary to-indigo-600 hover:from-indigo-600 hover:to-skillswap-primary transition-all duration-300"
              >
                Sign In
              </Button>
            </form>
          </Form>
          <div className="space-y-2 text-center text-sm">
            <p className="text-indigo-700">
              Don't have an account?{" "}
              <Link to="/signup" className="text-skillswap-primary hover:text-indigo-800 font-semibold hover:underline">
                Sign up
              </Link>
            </p>
            <Link
              to="/forgot-password"
              className="text-skillswap-primary hover:text-indigo-800 font-semibold hover:underline block"
            >
              Forgot your password?
            </Link>
          </div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-300/30 z-0 animate-pulse"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-indigo-300/30 z-0 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
