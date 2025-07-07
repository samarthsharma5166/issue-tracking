'use client'
import { Button, Callout, TextField } from '@radix-ui/themes'
import {useForm,Controller} from 'react-hook-form'
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false, // <-- very important
})
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic';
import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchema';
import {z} from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';

type IssueForm = z.infer<typeof createIssueSchema>

const NewIssuePage = () => {
  const router = useRouter();
  const [error , setError] = useState();
  // const [value, setValue] = useState('');
  const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema)
  });
  return (
    <div className='max-w-xl space-y-3 '>
      {error && <Callout.Root>
        <Callout.Text>
          {error}
        </Callout.Text>
      </Callout.Root>}
      <form className='space-y-3 w-full' onSubmit={handleSubmit(async(data)=>{
        try {
          await axios.post("/api/issues", data);
          router.push("/issue")
        } catch (error:AxiosError | any) {
          if(error instanceof AxiosError){
            setError(error.response?.data.title._errors[0])
          }
        }
      })}>
        <TextField.Root placeholder="Title…" {...register("title")} />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        {/* <SimpleEditor  /> */}
        <Controller
          name='description'
          control={control}
          render={({field})=><SimpleMDE placeholder='description' {...field}/>}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button type='submit'>Submit new issue</Button>
      </form>
    </div>
  )
}

export default NewIssuePage