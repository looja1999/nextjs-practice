import Content from '@/components/Content/Content'
import Hero from '@/components/Hero/Hero'
import Layout from '@/components/Layout'
import TopNav from '@/components/TopNav/TopNav'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <TopNav />
      <Layout />
      <Content />
      <Hero />
    </main>
  )
}
