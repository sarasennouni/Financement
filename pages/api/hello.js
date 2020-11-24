// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json({
    firstName: 'John',
    lastName: 'Doe',
    topic:'Creation account',
    description:'add an account'
  })
}
