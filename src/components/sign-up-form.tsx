'use client'

import {FormLabel, Form, FormField, FormItem, FormControl, FormMessage} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useState} from "react";

export default function SignUpForm(){
    const [role,setRole] = useState("")
    const formSchema = z.object({
        role : z.string({required_error:"this field should not be empty"}),
        phone : z.string().min(10,{message:"Incorrect phone number"}),
        name : z.string({required_error:"this field is required"}),
        email : z.string().email({message:"InCorrect email address"}),
        password : z.string().min(6,{message:"The password is too short"})
    })
    type formValue = z.infer<typeof formSchema>
    const defaultValues: Partial<formValue> = {};
    const form = useForm<formValue>({
        resolver : zodResolver(formSchema),
        defaultValues
    })
    const onSubmit = () => {
        console.log(2)
    }
    return(
        <div className="w-full">
            <Form {...form}>
                <form className="flex flex-col items-center" autoComplete="off" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormLabel>
                        <div className="flex flex-col items-center justify-center gap-4">
                            <h2 className="text-4xl font-bold">Sign Up</h2>
                            <h3 className="text-base font-light text-neutral-600">Already a member? <a href="#" className="text-base font-semibold text-[#00A3FF]">Login</a></h3>
                        </div>
                    </FormLabel>
                    <div className="w-full my-4 space-y-3 flex flex-col gap-4">
                        <FormField control={form.control} render={({field})=>(
                            <FormItem>
                                <FormLabel>Role</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                      <Select onValueChange={(value)=>{setRole(value[0].toUpperCase()+value.slice(1))}}>
                                          <SelectTrigger>
                                              <SelectValue placeholder="Select a Role">{role}</SelectValue>
                                          </SelectTrigger>
                                          <SelectContent>
                                              <SelectGroup>
                                                  <SelectItem value="dentist">Dentist</SelectItem>
                                                  <SelectItem value="surgery">Surgery</SelectItem>
                                                  <SelectItem value="optometer">Optometer</SelectItem>
                                                  <SelectItem value="psychologist">Psychologist</SelectItem>
                                                  <SelectItem value="physiotherapist">Physiotherapist</SelectItem>
                                              </SelectGroup>
                                          </SelectContent>
                                      </Select>
                                    </div>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )} name="role"/>
                        <FormField control={form.control} render={({field})=>(
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input className="rounded-[10px] text-neutral-400" placeholder="Please Enter Your Email" type="text" {...field}/>
                                    </div>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )} name="email"/>
                        <FormField control={form.control} render={({field})=>(
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input className="rounded-[10px] text-neutral-400" placeholder="Please Enter Your Name" type="text" {...field}/>
                                    </div>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )} name="name"/>
                        <FormField control={form.control} render={({field})=>(
                            <FormItem>
                                <FormLabel>PhoneNumber</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input className="rounded-[10px] text-neutral-400" placeholder="Please Enter Your PhoneNumber" type="text" {...field}/>
                                    </div>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )} name="phone"/>
                        <FormField control={form.control} render={({field})=>(
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input className="rounded-[10px] text-neutral-400" autoComplete="off" placeholder="Please Enter Your Password" type="password" {...field}/>
                                    </div>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )} name="password"/>
                    </div>
                    <div className="my-6 w-56 justify-center flex flex-col items-center gap-3">
                        <Button type="submit" className="px-6 w-full py-3 text-white text-base font-semibold rounded-2xl bg-[#007AFF]">Submit</Button>
                        <Button className="px-6 py-3 w-full text-white text-base font-semibold rounded-2xl bg-[#EC221F]">Reset</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}