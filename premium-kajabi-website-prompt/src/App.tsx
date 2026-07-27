import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkWithMePage from "./pages/WorkWithMePage";
import ResourcesPage from "./pages/ResourcesPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path="/work-with-me"
          element={
            <Layout>
              <WorkWithMePage />
            </Layout>
          }
        />
        <Route
          path="/resources"
          element={
            <Layout>
              <ResourcesPage />
            </Layout>
          }
        />
        <Route
          path="/testimonials"
          element={
            <Layout>
              <TestimonialsPage />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
        <Route
          path="/privacy"
          element={
            <Layout>
              <PrivacyPage />
            </Layout>
          }
        />
        <Route
          path="/terms"
          element={
            <Layout>
              <TermsPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
