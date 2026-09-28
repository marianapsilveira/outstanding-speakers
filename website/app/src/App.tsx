import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { SpeakersPage } from '@/pages/SpeakersPage'
import { SpeakerProfilePage } from '@/pages/SpeakerProfilePage'
import { BookSpeakerPage } from '@/pages/BookSpeakerPage'
import { BookingConfirmationPage } from '@/pages/BookingConfirmationPage'
import { ResourcesPage } from '@/pages/ResourcesPage'
import { ScrollManager } from '@/components/navigation/ScrollManager'

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div
      className="
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        bg-charcoal
        px-6
        text-center
      "
    >
      <h1 className="mb-4 text-3xl font-bold text-white">
        {title}
      </h1>

      <p className="text-white/60">
        Coming soon in a future build phase.
      </p>

      <a
        href="/"
        className="mt-8 text-lime hover:underline"
      >
        Back to Home
      </a>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/speakers"
          element={<SpeakersPage />}
        />

        <Route
          path="/speakers/:id"
          element={<SpeakerProfilePage />}
        />

        <Route
          path="/resources"
          element={<ResourcesPage />}
        />

        <Route
          path="/become-a-speaker"
          element={<PlaceholderPage title="Become a Speaker" />}
        />

        <Route
          path="/book"
          element={<BookSpeakerPage />}
        />

        <Route
          path="/book/confirmation"
          element={<BookingConfirmationPage />}
        />

        <Route
          path="/privacy"
          element={<PlaceholderPage title="Privacy Policy" />}
        />

        <Route
          path="/cookies"
          element={<PlaceholderPage title="Cookies Policy" />}
        />

        <Route
          path="/terms"
          element={<PlaceholderPage title="Terms and Conditions" />}
        />

        <Route
          path="/faq"
          element={<PlaceholderPage title="FAQ" />}
        />

        <Route
          path="/environment"
          element={<PlaceholderPage title="Environmental Impact" />}
        />
      </Routes>
    </BrowserRouter>
  )
}