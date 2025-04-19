// App.jsx or Home.jsx
import Footer from '../components/Footer';
import TrendingContestsSection from '../components/TrendingContestsSection';
import InterviewQuestionsSection from '../components/InterviewQuestionsSection';

function Home() {
  return (
    <div className="bg-cyan-50 text-cyan-900 min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="py-16 px-6 text-center bg-cyan-100">
          <TrendingContestsSection></TrendingContestsSection>
        </section>

        <section className="py-16 px-6 bg-white text-center">
        <InterviewQuestionsSection></InterviewQuestionsSection>
        </section>

        <section className="py-20 px-6 text-center bg-cyan-200">
          <h2 className="text-4xl font-bold mb-4">Start Your Journey with CodeStage</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Dive into real-time collaborative interviews, learn from top questions, and ace your dream job!
          </p>
          <button className="bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-700 transition">
            Get Started
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
