'use client'
import { Button, TextField } from '@radix-ui/themes'
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false, // <-- very important
})
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic';


const NewIssuePage = () => {
  // const [value, setValue] = useState('');
  return (
    <div className='max-w-xl space-y-3 w-full'>
      <TextField.Root placeholder="Title…" />
      {/* <SimpleEditor  /> */}
      <SimpleMDE />
      <Button>Submit new issue</Button>
    </div>
  )
}

export default NewIssuePage