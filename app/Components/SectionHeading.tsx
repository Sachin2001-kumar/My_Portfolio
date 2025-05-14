import React from 'react'

type props={
    children:React.ReactNode;
}
 const SectionHeading = ({children}:props) => {
  return (
    <h2 className="text-3xl font-semibold capitalize mb-8 text-center underline">{children}</h2>
  )
}

export default SectionHeading;
