import  { FormEvent, useRef } from 'react'
interface inputSubmit{
    onLinkSubmit:(link: string)=>void
}

const Input = ({onLinkSubmit}: inputSubmit) => {
  const Inputvalue = useRef<HTMLInputElement>(null)
  // ormEventHandler<T> | undefined
  
  const getLink=(e: FormEvent<HTMLFormElement>): void=>{
    e.preventDefault()
    const videoInput=Inputvalue.current?.value || '';
    // console.log("hello world", Inputvalue.current?.value);
    onLinkSubmit(videoInput)
  }

  return (
    <>
    <hr/>
    <form onSubmit={getLink}>
    <input type="text" className='h-10 w-70 rounded-2xl bg-blue-600' ref={Inputvalue} placeholder='Please input the youtuve video to watch together.' />
    <br />
    
    <button type='submit'>Watch Together</button>
    </form>
    </>
  )
}

export default Input