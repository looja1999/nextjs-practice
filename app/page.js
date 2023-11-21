import Content from '@/components/Content/Content'
import Hero from '@/components/Hero/Hero'
import ItemSlider from '@/components/ItemSlider/ItemSlider'
import Layout from '@/components/Layout'
import TopNav from '@/components/TopNav/TopNav'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='mb-4'>
      <TopNav />
      <Layout />
      <Content />
      <Hero />
      <div className='flex flex-col gap-8'>
        <ItemSlider />
        <ItemSlider />
        <ItemSlider />
      </div>

    </main>
  )
}
