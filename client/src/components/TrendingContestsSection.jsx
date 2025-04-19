import { CalendarDays, Clock, Globe2 } from "lucide-react"; // if using lucide icons

const ContestCard = ({ platform, title, date, time, badgeColor }) => (
  <div className="bg-white rounded-2xl shadow-xl p-6 transition hover:scale-105 duration-300">
    <div className="flex items-center justify-between mb-4">
      <span className={`text-xs px-3 py-1 rounded-full font-semibold ${badgeColor}`}>
        {platform}
      </span>
      <Globe2 className="h-5 w-5 text-cyan-500" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <div className="mt-4 space-y-2 text-sm text-gray-600">
      <p className="flex items-center gap-2">
        <CalendarDays className="w-4 h-4 text-cyan-600" /> {date}
      </p>
      <p className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-cyan-600" /> {time}
      </p>
    </div>
  </div>
);

const TrendingContestsSection = () => (
  <section className="py-20 px-6 text-center bg-cyan-100">
    <h2 className="text-4xl font-bold text-cyan-900 mb-4">🔥 Trending Coding Contests</h2>
    <p className="text-lg text-cyan-800 mb-12">
      Stay updated with the latest and most popular competitive programming contests across platforms.
    </p>

    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      <ContestCard
        platform="Codeforces"
        title="Codeforces Round #927 (Div. 3)"
        date="April 12, 2025"
        time="7:30 PM IST"
        badgeColor="bg-red-100 text-red-700"
      />
      <ContestCard
        platform="LeetCode"
        title="LeetCode Weekly Contest 391"
        date="April 13, 2025"
        time="8:00 PM IST"
        badgeColor="bg-yellow-100 text-yellow-700"
      />
      <ContestCard
        platform="AtCoder"
        title="AtCoder Beginner Contest 351"
        date="April 14, 2025"
        time="5:30 PM IST"
        badgeColor="bg-blue-100 text-blue-700"
      />
    </div>
  </section>
);

export default TrendingContestsSection;
