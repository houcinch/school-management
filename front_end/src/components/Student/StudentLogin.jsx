import * as z from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "../ui/form.jsx";
import {Input} from "../ui/input.jsx";
import {Button} from "../ui/button.jsx";
import {axiosClient} from "../../api/axios.jsx";
import {useNavigate} from "react-router-dom";
import {STUDENT_DASHBOARD_ROUTE} from "../../router/index.jsx";
import {Loader, Loader2} from "lucide-react";

const formSchema = z.object({
  email: z.string().email().min(2).max(30),
  password: z.string().min(8).max(30)
})
export default function StudentLogin() {
  const navigate = useNavigate()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: 'houcin@ch.com',
      password: '12345678',
    }
  })
  const {setError, formState: {isSubmitting}} = form

  // 2. Define a submit handler.
  const onSubmit = async values => {
    await axiosClient.get('/sanctum/csrf-cookie', {
      baseURL: import.meta.env.VITE_BACKEND_URL
    })
    const data = axiosClient.post('/login', values).then(
      (value) => {
        if (value.status === 204) {
          window.localStorage.setItem('ACCESS_TOKEN', 'test')
          navigate(STUDENT_DASHBOARD_ROUTE)
        }
      }
    ).catch(({response}) => {
      setError('email', {
        message: response.data.errors.email.join()
      })
    })
  }

  return <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({field}) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({field}) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type={'password'} placeholder="Password" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button className={''} disabled={isSubmitting} type="submit">
          {isSubmitting && <Loader className={'mx-2 my-2 animate-spin'}/>} {' '} Login
        </Button>
      </form>
    </Form>
  </>
}
