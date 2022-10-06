function ArticleListByCategory({ category, articles }) {
  return (
    <>
      <h1>Showing new for category {category}</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id}. {article.title}
          </h2>
          <p>{article.description}</p>
          <hr />
        </div>
      ))}
    </>
  )
}

export default ArticleListByCategory

// export async function getServerSideProps(context) {
//   const { params } = context
//   const { category } = params
//   const res = await fetch(`http://localhost:4000/news?category=${category}`)
//   const data =await res.json()
//   return {
//     props: {
//       articles: data,
//       category,
//     },
//   }
// }
export async function getServerSideProps(context) {
  const { params, req, res, query } = context
  console.log(query)
  res.setHeader('Set-Cookie', ['name=Blazo'])
  // console.log('REQUEST: ', req)
  // console.log('RESPONSE: ', res)
  const { category } = params
  console.log(`Pre-rendering by Category -${category}`)
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  )
  const data = await response.json()

  //   console.log(`Pre-rendering News Articles for category ${category}`)
  //   res.setHeader('Set-Cookie', ['name=Vishwas'])
  //   console.log(req.headers.cookie)
  //   console.log(query)
  return {
    props: {
      articles: data,
      category,
    },
  }
}
