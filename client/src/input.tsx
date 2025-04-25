import  { FormEvent, useRef } from 'react'

const Input = ({getLink}: {getLink: string}) => {
  const Inputvalue = useRef<HTMLInputElement>(null)
  // ormEventHandler<T> | undefined
  
  const getLink=(e: FormEvent<HTMLFormElement>): void=>{
    e.preventDefault()
    console.log("hello world", Inputvalue.current?.value);
  }

  return (
    <>
    <form onSubmit={getLink}>
    <input type="text" ref={Inputvalue} placeholder='Please input the youtuve video to watch together.' />
    <br />
    
    <button type='submit'>Watch Together</button>
    </form>
    </>
  )
}

export default Input