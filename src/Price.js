import React from 'react'

const Price = ({price}) =>  {
    return (
      <>
        <div className='btn btn-danger mt-2'>
            {price}
        </div>
      </>
    )
}

export default Price