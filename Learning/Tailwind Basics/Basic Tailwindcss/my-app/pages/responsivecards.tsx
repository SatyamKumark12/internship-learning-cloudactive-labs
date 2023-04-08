import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Products : React.FC = () => {
  return (
   <>
   <div className='mb-5'>
   <div className='grid lg:grid-cols-4 md:grid-cols-4 sm-grid-cols-1 gap-4 '>

    
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 mx-5">
  <Link href="#">
     <Image className="rounded-t-lg" src={"/1.jpg"} alt='bg-image' width={400} height={400}/> 
 </Link>
    <div className="p-5">
        <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Books</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nihil dignissimos, asperiores culpa temporibus rem deleniti error est neque hic voluptatibus consectetur.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 mx-5">
  <Link href="#">
     <Image className="rounded-t-lg" src={"/2.jpg"} alt='bg-image' width={400} height={400}/> 
 </Link>
    <div className="p-5">
        <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Books</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nihil dignissimos, asperiores culpa temporibus rem deleniti error est neque hic voluptatibus consectetur.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 mx-5">
  <Link href="#">
     <Image className="rounded-t-lg" src={"/3.jpg"} alt='bg-image' width={400} height={400}/> 
 </Link>
    <div className="p-5">
        <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Books</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nihil dignissimos, asperiores culpa temporibus rem deleniti error est neque hic voluptatibus consectetur.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 mx-5">
  <Link href="#">
     <Image className="rounded-t-lg" src={"/1.jpg"} alt='bg-image' width={400} height={400}/> 
 </Link>
    <div className="p-5">
        <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Books</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nihil dignissimos, asperiores culpa temporibus rem deleniti error est neque hic voluptatibus consectetur.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 mx-5">
  <Link href="#">
     <Image className="rounded-t-lg" src={"/5.jpg"} alt='bg-image' width={400} height={400}/> 
 </Link>
    <div className="p-5">
        <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Books</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nihil dignissimos, asperiores culpa temporibus rem deleniti error est neque hic voluptatibus consectetur.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 mx-5">
  <Link href="#">
     <Image className="rounded-t-lg" src={"/6.jpg"} alt='bg-image' width={400} height={400}/> 
 </Link>
    <div className="p-5">
        <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Books</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nihil dignissimos, asperiores culpa temporibus rem deleniti error est neque hic voluptatibus consectetur.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>


<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 mx-5">
  <Link href="#">
     <Image className="rounded-t-lg" src={"/6.jpg"} alt='bg-image' width={400} height={400}/> 
 </Link>
    <div className="p-5">
        <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Books</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nihil dignissimos, asperiores culpa temporibus rem deleniti error est neque hic voluptatibus consectetur.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>


<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 mx-5">
  <Link href="#">
     <Image className="rounded-t-lg" src={"/8.jpg"} alt='bg-image' width={400} height={400}/> 
 </Link>
    <div className="p-5">
        <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Books</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nihil dignissimos, asperiores culpa temporibus rem deleniti error est neque hic voluptatibus consectetur.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>




 
</div>
   </div>
   </>
  )
}

export default Products;