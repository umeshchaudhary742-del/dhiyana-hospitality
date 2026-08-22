"use client";

import { useMemo, useState } from "react";

type Meal = {
  breakfast: string;
  lunch: string;
  snacks: string;
  dinner: string;
};

const weeklyMenu: Record<string, Meal> = {
  Monday: {
    breakfast: "Idli Sambhar / Medu Vada",
    lunch: "Chole Masala, Puri, Rice, Dal, Salad",
    snacks: "Methi Gota",
    dinner: "Raviya Masala, Roti, Rice, Dal, Salad",
  },
  Tuesday: {
    breakfast: "Usal-Poha / Sev Poha",
    lunch: "Paneer Mushroom Masala, Roti, Rice, Dal, Salad",
    snacks: "Gol Gappa",
    dinner: "Gawarfali, Roti, Rice, Dal, Salad",
  },
  Wednesday: {
    breakfast: "Aloo Puri",
    lunch: "Bhindi Masala, Roti, Rice, Dal, Salad",
    snacks: "Samosa",
    dinner: "Chole Masala, Roti, Rice, Dal, Salad",
  },
  Thursday: {
    breakfast: "Aloo Paratha",
    lunch: "Soya Chunks, Roti, Rice, Dal, Salad",
    snacks: "Sweet Corn / Pasta",
    dinner: "Mix Veg, Roti, Rice, Dal, Salad",
  },
  Friday: {
    breakfast: "Thepla-Achaar",
    lunch: "Malai Kofta, Roti, Rice, Dal, Salad",
    snacks: "Grilled Sandwich / Maggi",
    dinner: "Kadi, Roti, Rice, Salad",
  },
  Saturday: {
    breakfast: "Dosa / Upma",
    lunch: "Kadhai Paneer, Roti, Rice, Dal, Salad",
    snacks: "Mix Bhajiya",
    dinner: "Fulawar, Roti, Rice, Dal, Salad",
  },
  Sunday: {
    breakfast: "Batata Poha / Sandwich / Dhokla",
    lunch: "Rajma Masala, Roti, Rice, Dal, Salad",
    snacks: "Toast",
    dinner: "Pav-Bhaji, Roti, Rice, Salad",
  },
};

const days = Object.keys(weeklyMenu);

const committeePhD = [
  "Umesh Chaudhary",
  "Rohit Saini",
  "LN Dhakd",
  "Sai Eswar",
  "Jourawar Singh",
];

const committeeMS = [
  "Jantin Katiyar",
  "Tanmay Patil",
  "Ayush Chandra",
  "Harsh Patel",
  "Bhagyashree Rane",
  "Sakshi Pawar",
  "Yash Patel",
  "Aniket Roy",
  "Vanshika Meshram",
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [rating, setRating] = useState(0);
  const [feedbackMeal, setFeedbackMeal] = useState("Lunch");
  const [feedbackComments, setFeedbackComments] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [message, setMessage] = useState("");

  const todayName = useMemo(() => {
    const day = new Date().toLocaleDateString("en-US", {
      weekday: "long",
    });

    return weeklyMenu[day] ? day : "Monday";
  }, []);

  const todayMeal = weeklyMenu[todayName];

  function scrollToSection(id: string) {
    setActiveSection(id);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  function showMessage(text: string) {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  function submitRating() {
    if (rating === 0) {
      showMessage("Please select a rating first.");
      return;
    }

    showMessage(
      `Thank you! Your ${rating}/5 ${feedbackMeal.toLowerCase()} rating was submitted.`
    );

    setRating(0);
    setFeedbackComments("");
  }

  function submitSuggestion() {
    if (!suggestion.trim()) {
      showMessage("Please enter your suggestion.");
      return;
    }

    showMessage("Thank you! Your suggestion has been submitted.");
    setSuggestion("");
  }

  return (
    <main className="min-h-screen bg-[#f7f8f4] text-gray-900">

      {/* =========================================================
          HEADER
      ========================================================= */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          {/* Logo / Brand */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 text-left"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-800 font-bold text-white shadow-sm">
              DH
            </div>

            <div>
              <h1 className="text-lg font-bold leading-tight">
                NIPER-A MESS
              </h1>

              <p className="text-sm font-semibold text-green-800">
                Student Mess Portal
              </p>

              <p className="text-xs text-gray-500">
                NIPER-A
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {[
              ["home", "Home"],
              ["menu", "Menu"],
              ["committee", "Committee"],
              ["suggest", "Suggest"],
              ["feedback", "Feedback"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                  activeSection === id
                    ? "bg-green-100 text-green-900"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="border-t border-gray-100 px-4 py-2 md:hidden">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {[
              ["home", "Home"],
              ["menu", "Menu"],
              ["committee", "Committee"],
              ["suggest", "Suggest"],
              ["feedback", "Feedback"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium ${
                  activeSection === id
                    ? "bg-green-100 text-green-900"
                    : "text-gray-600"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* =========================================================
          TEMPORARY MESSAGE
      ========================================================= */}
      {message && (
        <div className="fixed left-1/2 top-24 z-[100] -translate-x-1/2 rounded-xl bg-green-800 px-6 py-3 text-sm font-semibold text-white shadow-xl">
          {message}
        </div>
      )}

      {/* =========================================================
          HOME
      ========================================================= */}
      <section
        id="home"
        className="scroll-mt-32 border-b border-gray-200"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-900">
              🍽️ NIPER-A Student Mess
            </div>

            <h2 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-gray-950 md:text-6xl">
              Better food starts
              <br />
              with your feedback.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Check the weekly menu, rate your meals, suggest new dishes,
              and help the NIPER-A MESS committee improve the dining
              experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => scrollToSection("menu")}
                className="rounded-xl bg-green-800 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-900"
              >
                View Menu
              </button>

              <button
                onClick={() => scrollToSection("feedback")}
                className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-50"
              >
                Give Feedback
              </button>
            </div>
          </div>

          {/* Today's Meal */}
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Today&apos;s Menu
            </p>

            <div className="mt-5 flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-3xl">
                🍛
              </div>

              <div>
                <p className="text-sm font-semibold text-green-800">
                  {todayName}
                </p>

                <h3 className="mt-1 text-2xl font-bold">
                  {todayMeal.lunch}
                </h3>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-[#f7f8f4] p-4">
                <p className="text-xs font-semibold uppercase text-gray-500">
                  Breakfast
                </p>
                <p className="mt-2 text-sm font-medium">
                  {todayMeal.breakfast}
                </p>
              </div>

              <div className="rounded-xl bg-[#f7f8f4] p-4">
                <p className="text-xs font-semibold uppercase text-gray-500">
                  Snacks
                </p>
                <p className="mt-2 text-sm font-medium">
                  {todayMeal.snacks}
                </p>
              </div>
            </div>

            <button
              onClick={() => scrollToSection("feedback")}
              className="mt-6 w-full rounded-xl bg-green-50 py-3 font-semibold text-green-900 transition hover:bg-green-100"
            >
              ⭐ Rate Today&apos;s Meal
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          MENU
      ========================================================= */}
      <section
        id="menu"
        className="scroll-mt-32 border-b border-gray-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-20">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-800">
              Weekly Schedule
            </p>

            <h2 className="mt-2 text-4xl font-bold text-gray-950">
              NIPER-A MESS Menu
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Check breakfast, lunch, snacks and dinner for every day
              of the week.
            </p>
          </div>

          {/* Day Buttons */}
          <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`whitespace-nowrap rounded-xl px-5 py-3 text-sm font-semibold transition ${
                  selectedDay === day
                    ? "bg-green-800 text-white shadow-sm"
                    : "border border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Selected Day Cards */}
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-gray-200 bg-[#f7f8f4] p-6">
              <div className="text-2xl">🌅</div>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                Breakfast
              </p>
              <h3 className="mt-2 font-bold text-gray-950">
                {weeklyMenu[selectedDay].breakfast}
              </h3>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#f7f8f4] p-6">
              <div className="text-2xl">🍛</div>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                Lunch
              </p>
              <h3 className="mt-2 font-bold text-gray-950">
                {weeklyMenu[selectedDay].lunch}
              </h3>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#f7f8f4] p-6">
              <div className="text-2xl">🥪</div>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                Snacks
              </p>
              <h3 className="mt-2 font-bold text-gray-950">
                {weeklyMenu[selectedDay].snacks}
              </h3>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#f7f8f4] p-6">
              <div className="text-2xl">🌙</div>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                Dinner
              </p>
              <h3 className="mt-2 font-bold text-gray-950">
                {weeklyMenu[selectedDay].dinner}
              </h3>
            </div>
          </div>

          {/* Complete Weekly Table */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[950px] border-collapse bg-white">
                <thead>
                  <tr className="bg-green-800 text-left text-sm text-white">
                    <th className="px-5 py-4 font-semibold">Day</th>
                    <th className="px-5 py-4 font-semibold">Breakfast</th>
                    <th className="px-5 py-4 font-semibold">Lunch</th>
                    <th className="px-5 py-4 font-semibold">Snacks</th>
                    <th className="px-5 py-4 font-semibold">Dinner</th>
                  </tr>
                </thead>

                <tbody>
                  {days.map((day, index) => (
                    <tr
                      key={day}
                      className={`border-t border-gray-200 ${
                        index % 2 === 0
                          ? "bg-white"
                          : "bg-[#f7f8f4]"
                      }`}
                    >
                      <td className="px-5 py-5 font-bold text-green-900">
                        {day}
                      </td>

                      <td className="px-5 py-5 text-sm text-gray-700">
                        {weeklyMenu[day].breakfast}
                      </td>

                      <td className="px-5 py-5 text-sm text-gray-700">
                        {weeklyMenu[day].lunch}
                      </td>

                      <td className="px-5 py-5 text-sm text-gray-700">
                        {weeklyMenu[day].snacks}
                      </td>

                      <td className="px-5 py-5 text-sm text-gray-700">
                        {weeklyMenu[day].dinner}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          COMMITTEE
      ========================================================= */}
      <section
        id="committee"
        className="scroll-mt-32 border-b border-gray-200"
      >
        <div className="mx-auto max-w-7xl px-5 py-20">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-800">
              Student Representatives
            </p>

            <h2 className="mt-2 text-4xl font-bold text-gray-950">
              Mess Committee Members
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Student representatives working to improve the
              NIPER-A MESS experience.
            </p>
          </div>

          {/* PhD */}
          <div className="mt-12">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-xl">
                🎓
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  PhD Representatives
                </h3>

                <p className="text-sm text-gray-500">
                  Mess Committee
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {committeePhD.map((name) => (
                <div
                  key={name}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-800 text-lg font-bold text-white">
                    {name.charAt(0)}
                  </div>

                  <h4 className="mt-4 font-semibold text-gray-900">
                    {name}
                  </h4>

                  <p className="mt-1 text-sm text-green-800">
                    PhD
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* MS 2nd Year */}
          <div className="mt-14">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-xl">
                🎓
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  MS 2nd Year Representatives
                </h3>

                <p className="text-sm text-gray-500">
                  Mess Committee
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {committeeMS.map((name) => (
                <div
                  key={name}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-800 text-lg font-bold text-white">
                    {name.charAt(0)}
                  </div>

                  <h4 className="mt-4 font-semibold text-gray-900">
                    {name}
                  </h4>

                  <p className="mt-1 text-sm text-green-800">
                    MS 2nd Year
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          SUGGESTION
      ========================================================= */}
      <section
        id="suggest"
        className="scroll-mt-32 border-b border-gray-200 bg-white"
      >
        <div className="mx-auto max-w-4xl px-5 py-20">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-800">
              Have an idea?
            </p>

            <h2 className="mt-2 text-4xl font-bold text-gray-950">
              Suggest a Dish
            </h2>

            <p className="mt-3 text-gray-600">
              Tell the mess committee what you would like to see
              on the menu.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-gray-200 bg-[#f7f8f4] p-7">

            <label className="text-sm font-semibold text-gray-800">
              Your suggestion
            </label>

            <textarea
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              placeholder="Example: Please add Pav Bhaji on Saturday..."
              rows={5}
              className="mt-3 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
            />

            <button
              onClick={submitSuggestion}
              className="mt-4 rounded-xl bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900"
            >
              Submit Suggestion
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEEDBACK
      ========================================================= */}
      <section
        id="feedback"
        className="scroll-mt-32 border-b border-gray-200"
      >
        <div className="mx-auto max-w-4xl px-5 py-20">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-800">
              Your Voice Matters
            </p>

            <h2 className="mt-2 text-4xl font-bold text-gray-950">
              Rate Your Meal
            </h2>

            <p className="mt-3 text-gray-600">
              Your feedback helps the mess committee improve
              food quality and variety.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">

            {/* Meal selector */}
            <label className="text-sm font-semibold text-gray-800">
              Meal
            </label>

            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {["Breakfast", "Lunch", "Snacks", "Dinner"].map(
                (meal) => (
                  <button
                    key={meal}
                    onClick={() => setFeedbackMeal(meal)}
                    className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                      feedbackMeal === meal
                        ? "border-green-800 bg-green-800 text-white"
                        : "border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {meal}
                  </button>
                )
              )}
            </div>

            {/* Rating */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-gray-800">
                Rating
              </p>

              <div className="mt-4 flex gap-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    onClick={() => setRating(value)}
                    aria-label={`Rate ${value} out of 5`}
                    className={`text-4xl transition ${
                      value <= rating
                        ? "scale-110"
                        : "opacity-30 hover:opacity-70"
                    }`}
                  >
                    ⭐
                  </button>
                ))}
              </div>
            </div>

            {/* Comments */}
            <div className="mt-8">
              <label className="text-sm font-semibold text-gray-800">
                Comments
              </label>

              <textarea
                value={feedbackComments}
                onChange={(e) =>
                  setFeedbackComments(e.target.value)
                }
                placeholder="Tell us what you think..."
                rows={5}
                className="mt-3 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <button
              onClick={submitRating}
              className="mt-5 w-full rounded-xl bg-green-800 py-3 font-semibold text-white transition hover:bg-green-900"
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="bg-white py-10 text-center">

        <div className="mx-auto max-w-7xl px-5">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-green-800 font-bold text-white">
            DH
          </div>

          <p className="mt-4 font-bold text-gray-900">
            NIPER-A MESS
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Student Mess Portal
          </p>

          <p className="mt-5 text-xs text-gray-400">
            © {new Date().getFullYear()} NIPER-A MESS
          </p>

        </div>
      </footer>

    </main>
  );
}