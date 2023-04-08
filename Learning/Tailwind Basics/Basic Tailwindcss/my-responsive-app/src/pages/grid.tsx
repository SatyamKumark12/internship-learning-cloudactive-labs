import React from 'react';

const Grid = () => {
  return (
    <>
     <h1 className='text-4xl'>Grid</h1>

<div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xs:gap-5 gap-5'>
  <div className='bg-red-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae itaque porro deleniti a sequi. Molestias alias sunt repudiandae architecto eveniet reiciendis ab quos vitae doloribus distinctio facilis, excepturi, deserunt voluptatibus, accusamus sit at nesciunt.</div>

  <div className='bg-green-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, illum quae neque aliquam veritatis pariatur aperiam expedita recusandae molestiae eveniet delectus provident sequi nostrum dolorem accusamus vel voluptatibus odit nulla, voluptate omnis. Laborum, ratione.</div>

  <div className='bg-yellow-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis inventore quae unde, exercitationem recusandae! Quod dolores quam facere non modi exercitationem repudiandae veritatis omnis nostrum aut. Corporis a quis amet aperiam voluptatem porro.</div>

  <div className='bg-blue-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, odit rem qui commodi incidunt earum tempora exercitationem possimus animi fuga. Voluptas, consequuntur distinctio quibusdam velit natus accusantium maxime, commodi eligendi voluptatum quidem asperiores aspernatur?</div>
</div>

<div className='grid grid-cols-2 gap-5'>
    <div className='col-start-2 bg-red-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsum vero magni nobis quasi dolor nam. Eius quo similique dolore odit iste accusantium eveniet, distinctio quidem quasi. Debitis nihil soluta provident nisi quam adipisci.</div>

    <div className='bg-green-300 col-span-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In aut quae animi nemo, doloribus accusantium vel placeat tempore asperiores excepturi aperiam iusto veniam quis voluptates incidunt! Quod perferendis facilis, laudantium eveniet ipsa beatae laborum.</div>

    <div className='bg-yellow-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsum vero magni nobis quasi dolor nam. Eius quo similique dolore odit iste accusantium eveniet, distinctio quidem quasi. Debitis nihil soluta provident nisi quam adipisci.</div>

    <div className='bg-blue-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In aut quae animi nemo, doloribus accusantium vel placeat tempore asperiores excepturi aperiam iusto veniam quis voluptates incidunt! Quod perferendis facilis, laudantium eveniet ipsa beatae laborum.</div>
</div>


<div className='grid grid-cols-2 gap-5'>
    <div className=' bg-red-300 mt-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsum vero magni nobis quasi dolor nam. Eius quo similique dolore odit iste accusantium eveniet, distinctio quidem quasi. Debitis nihil soluta provident nisi quam adipisci.</div>

    <div className='bg-green-300 col-span-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In aut quae animi nemo, doloribus accusantium vel placeat tempore asperiores excepturi aperiam iusto veniam quis voluptates incidunt! Quod perferendis facilis, laudantium eveniet ipsa beatae laborum.</div>

    <div className='bg-yellow-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsum vero magni nobis quasi dolor nam. Eius quo similique dolore odit iste accusantium eveniet, distinctio quidem quasi. Debitis nihil soluta provident nisi quam adipisci.</div>

    <div className='bg-blue-300 row-span-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In aut quae animi nemo, doloribus accusantium vel placeat tempore asperiores excepturi aperiam iusto veniam quis voluptates incidunt! Quod perferendis facilis, laudantium eveniet ipsa beatae laborum.</div>
</div>


    </>
  )
}

export default Grid;