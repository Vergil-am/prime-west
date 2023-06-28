"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/useToast";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().regex(phoneRegex, "Invalid Number!"),
  message: z.string(),
});
interface params {
  PropertyTitle: string;
  PropertyId: string;
}
export default function PropertyForm({ PropertyTitle, PropertyId }: params) {
  const { isLoaded, userId } = useAuth();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if (isLoaded) {
      const res = axios.post("/api/applications/send", {
        UserId: userId,
        PropertyId: PropertyId,
        PropertyTitle: PropertyTitle,
        FullName: values.name,
        Email: values.email,
        Phone: values.phone,
        Message: values.message,
      });
    }

    toast({
      title: `${PropertyTitle}`,
      description: "Your application has been sent and it is now being processed",
    });
  }
  return (
    <>
      <SignedIn>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Hold now</Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Hold form</DialogTitle>
              <DialogDescription>
                Fill this form to hold this property. Click submit when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full name</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>Enter your full legal name.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn@email.com" {...field} />
                        </FormControl>
                        <FormDescription>Enter your Email adress.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 123 456 789" {...field} />
                        </FormControl>
                        <FormDescription>Enter your phone number</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Type your message here" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <DialogFooter>
                    <Button type="submit">Submit</Button>
                  </DialogFooter>
                </form>
              </Form>
            </div>
          </DialogContent>
        </Dialog>
      </SignedIn>
      <SignedOut>
        <Button variant="default">
          <SignInButton>Hold</SignInButton>
        </Button>
      </SignedOut>
    </>
  );
}
