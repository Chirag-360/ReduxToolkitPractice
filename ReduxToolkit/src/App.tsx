// import Counter from "./components/Counter"
import React from "react"
import { AddPostForm } from "./components/AddPostForm"
import PostList from "./components/PostList"
import { QueryClient , QueryClientProvider} from "@tanstack/react-query"
function App() {

  const client = new QueryClient()
  return (
    <>
    <QueryClientProvider client={client}>

 {/* <Counter/>       */}
 <AddPostForm/>
 <PostList/>
    </QueryClientProvider>
    </>
  )
}

export default App
