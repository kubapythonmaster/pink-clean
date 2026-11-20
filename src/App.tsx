import { lazy, Suspense } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'

const BeforeAfter = lazy(() =>
  import('./components/BeforeAfter').then((m) => ({ default: m.BeforeAfter })),
)
const WhyUs = lazy(() =>
  import('./components/WhyUs').then((m) => ({ default: m.WhyUs })),
)
const Area = lazy(() =>
  import('./components/Area').then((m) => ({ default: m.Area })),
)
const Faq = lazy(() =>
  import('./components/Faq').then((m) => ({ default: m.Faq })),
)
const Contact = lazy(() =>
  import('./components/Contact').then((m) => ({ default: m.Contact })),
)
const Footer = lazy(() =>
  import('./components/Footer').then((m) => ({ default: m.Footer })),
)

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Suspense fallback={null}>
          <BeforeAfter />
          <WhyUs />
          <Area />
          <Faq />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
