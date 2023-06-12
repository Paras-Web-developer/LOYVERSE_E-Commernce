import React from 'react'

const Page404error = () => {
  
  const styles = {
    width:"100%",
    height: "100vh",
    background:" rgb(0, 0, 0, 0.7)",
    fontSize: "5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
    }


  return (<>

    <div style={styles}>
      <div>
        <h1>404!</h1>
        <p>Page not found</p>
      </div>
    </div>
  </>)

}

export default Page404error