import { redirect } from 'next/navigation'

function Home() {
  redirect('/admin')
}

export default Home