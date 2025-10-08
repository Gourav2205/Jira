import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

import DottedSeparator from "@/components/dotted-separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Link from "next/link"

const formSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z.string().min(1, { message: "Please enter your password" }),
})

const SignInCard = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(formSchema),
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl ">
                    Welcome Back!
                </CardTitle>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7">
                <Form {...form}>
                    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            name="email"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="email"
                                            placeholder="Enter Email Address"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="password"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="password"
                                            placeholder="Enter Password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="w-full" disabled={false} size={"lg"}>
                            Login
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button
                    variant="secondary"
                    size={"lg"}
                    className="w-full"
                    disabled={false}
                >
                    <FcGoogle className="size-5 mr-2" />
                    Login with Google
                </Button>
                <Button
                    variant="secondary"
                    size={"lg"}
                    className="w-full"
                    disabled={false}
                >
                    <FaGithub className="size-5 mr-2" />
                    Login with Github
                </Button>
            </CardContent>
            <div className="px-7">
                <DottedSeparator/>
            </div>
            <CardContent className="p-7 flex items-center justify-center">
                <p>
                    Don&apos;t have an account?{" "}
                    <Link href="/sign-up">
                        <span className="text-blue-700">Sign Up</span>
                    </Link>
                </p>
            </CardContent>
        </Card>
    )
}

export default SignInCard