const MainComponent = () => {
  return (
      <main className="relative z-30 p-5 text-2xl text-white">


          <p className="flex flex-col items-center justify-center z-30 mt-3 text-2xl" >
              Welcome to my website
          </p>

          <div className="flex flex-col items-center justify-center min-h-screen py-2">
              <a
                  href="https://nextjs.org/docs"
                  className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
              >
                  <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
                  <p className="mt-4 text-xl">
                      Find in-depth information about Next.js features and API.
                  </p>
              </a>

              <a
                  href="https://nextjs.org/learn"
                  className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
              >
                  <h3 className="text-2xl font-bold">Learn &rarr;</h3>
                  <p className="mt-4 text-xl">
                      Learn about Next.js in an interactive course with quizzes!
                  </p>
              </a>

              <a
                  href="https://github.com/vercel/next.js/tree/master/examples"
                  className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
              >
                  <h3 className="text-2xl font-bold">Examples &rarr;</h3>
                  <p className="mt-4 text-xl">
                      Discover and deploy boilerplate example Next.js projects.
                  </p>
              </a>

              <a
                  href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
              >
                  <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
                  <p className="mt-4 text-xl">
                      Instantly deploy your Next.js site to a public URL with Vercel.
                  </p>
              </a>
          </div>

      </main>
  )
}
export default MainComponent