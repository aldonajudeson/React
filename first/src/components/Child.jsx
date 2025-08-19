
function Child(x) {
  return (
    <>
        <h1>Child Component</h1>
        <h1>{x.data}</h1>
        <h1>{x.name?x.name:'no name'}</h1>
    </>
  )
}

export default Child