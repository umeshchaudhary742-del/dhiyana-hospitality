"use client";

import { useEffect, useState } from "react";

const weeklyMenu = [
  {
    day: "Monday",
    breakfast: "Idli Sambhar / Medu Vada",
    lunch: "Chole Masala, Puri, Rice, Dal, Salad",
    snacks: "Methi Gota",
    dinner: "Raviya Masala, Roti, Rice, Dal, Salad",
  },
  {
    day: "Tuesday",
    breakfast: "Usal-Poha / Sev Poha",
    lunch: "Paneer Mushroom Masala, Roti, Rice, Dal, Salad",
    snacks: "Gol Gappa",
    dinner: "Gawarfali, Roti, Rice, Dal, Salad",
  },
  {
    day: "Wednesday",
    breakfast: "Aloo Puri",
    lunch: "Bhindi Masala, Roti, Rice, Dal, Salad",
    snacks: "Samosa",
    dinner: "Chole Masala, Roti, Rice, Dal, Salad",
  },
  {
    day: "Thursday",
    breakfast: "Aloo Paratha",
    lunch: "Soya Chunks, Roti, Rice, Dal, Salad",
    snacks: "Sweet Corn / Pasta",
    dinner: "Mix Veg, Roti, Rice, Dal, Salad",
  },
  {
    day: "Friday",
    breakfast: "Thepla-Achaar",
    lunch: "Malai Kofta, Roti, Rice, Dal, Salad",
    snacks: "Grilled Sandwich / Maggi",
    dinner: "Kadi, Roti, Rice, Dal, Salad",
  },
  {
    day: "Saturday",
    breakfast: "Dosa / Upma",
    lunch: "Kadhai Paneer, Roti, Rice, Dal, Salad",
    snacks: "Mix Bhajiya",
    dinner: "Fulawar, Roti, Rice, Dal, Salad",
  },
  {
    day: "Sunday",
    breakfast: "Batata Poha / Sandwich / Dhokla",
    lunch: "Rajma Masala, Roti, Rice, Dal, Salad",
    snacks: "Toast",
    dinner: "Pav-Bhaji, Roti, Rice, Salad",
  },
];

const phdMembers = [
  "Umesh Chaudhary",
  "Rohit Saini",
  "LN Dhakd",
  "Sai Eswar",
  "Jourawar Singh",
];

const msMembers = [
  "Jatin Katiyar",
  "Tanmay Patil",
  "Ayush Chandra",
  "Harsh Patel",
  "Bhagyashree Rane",
  "Sakshi Pawar",
  "Yash Patel",
  "Aniket Roy",
  "Vanshika Meshram",
  "Shivraj Yadav",
];

const weekdayTimings = [
  ["Morning", "8:00–10:00 AM"],
  ["Afternoon", "12:30–2:30 PM"],
  ["Evening", "4:30–6:00 PM"],
  ["Dinner", "7:30–9:30 PM"],
];

const weekendTimings = [
  ["Morning", "9:00–11:00 AM"],
  ["Afternoon", "1:00–3:00 PM"],
  ["Evening", "4:30–6:00 PM"],
  ["Dinner", "8:00–9:30 PM"],
];

type MealName = "Breakfast" | "Lunch" | "Snacks" | "Dinner";

const mealTimes = {
  weekday: [
    { name: "Breakfast" as MealName, start: 8 * 60, end: 10 * 60 },
    { name: "Lunch" as MealName, start: 12 * 60 + 30, end: 14 * 60 + 30 },
    { name: "Snacks" as MealName, start: 16 * 60 + 30, end: 18 * 60 },
    { name: "Dinner" as MealName, start: 19 * 60 + 30, end: 21 * 60 + 30 },
  ],
  weekend: [
    { name: "Breakfast" as MealName, start: 9 * 60, end: 11 * 60 },
    { name: "Lunch" as MealName, start: 13 * 60, end: 15 * 60 },
    { name: "Snacks" as MealName, start: 16 * 60 + 30, end: 18 * 60 },
    { name: "Dinner" as MealName, start: 20 * 60, end: 21 * 60 + 30 },
  ],
};

function getMenuForMeal(dayIndex: number, meal: MealName) {
  const day = weeklyMenu[dayIndex];

  if (meal === "Breakfast") return day.breakfast;
  if (meal === "Lunch") return day.lunch;
  if (meal === "Snacks") return day.snacks;
  return day.dinner;
}

export default function Home() {
  const [active, setActive] = useState("home");

  const [currentMeal, setCurrentMeal] = useState<{
    name: string;
    food: string;
    status: string;
  } | null>(null);

  useEffect(() => {
    const updateMeal = () => {
      const now = new Date();

      const dayIndex = now.getDay() === 0 ? 6 : now.getDay() - 1;

      const isWeekend =
        now.getDay() === 0 || now.getDay() === 6;

      const schedule = isWeekend
        ? mealTimes.weekend
        : mealTimes.weekday;

      const minutes =
        now.getHours() * 60 + now.getMinutes();

      const activeMeal = schedule.find(
        (meal) =>
          minutes >= meal.start &&
          minutes <= meal.end
      );

      if (activeMeal) {
        setCurrentMeal({
          name: activeMeal.name,
          food: getMenuForMeal(dayIndex, activeMeal.name),
          status: "Serving Now",
        });
        return;
      }

      const upcoming = schedule.find(
        (meal) => minutes < meal.start
      );

      if (upcoming) {
        setCurrentMeal({
          name: upcoming.name,
          food: getMenuForMeal(dayIndex, upcoming.name),
          status: "Upcoming Meal",
        });
        return;
      }

      // After dinner: show tomorrow's breakfast
      const tomorrowIndex = (dayIndex + 1) % 7;

      setCurrentMeal({
        name: "Breakfast",
        food: getMenuForMeal(tomorrowIndex, "Breakfast"),
        status: "Tomorrow's Breakfast",
      });
    };

    updateMeal();

    const timer = setInterval(updateMeal, 60000);

    return () => clearInterval(timer);
  }, []);

  const goTo = (section: string) => {
    setActive(section);

    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen bg-[#f7f8f4] text-gray-900">

      {/* ================= HEADER ================= */}

      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          <button
            onClick={() => goTo("home")}
            className="flex items-center gap-3 text-left"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-800 font-bold text-white">
              NM
            </div>

            <div>
              <h1 className="text-lg font-bold">
                NIPER-A MESS
              </h1>

              <p className="text-xs font-semibold text-green-800">
                Student Mess Portal
              </p>
            </div>
          </button>

          <nav className="hidden gap-1 md:flex">
            {[
              ["home", "Home"],
              ["menu", "Menu"],
              ["timings", "Timings"],
              ["committee", "Committee"],
              ["rules", "Rules"],
              ["feedback", "Feedback"],
              ["about", "About"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => goTo(id)}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  active === id
                    ? "bg-green-100 text-green-800"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* MOBILE NAV */}

        <div className="overflow-x-auto border-t border-gray-100 md:hidden">
          <div className="flex min-w-max gap-2 px-4 py-2">
            {[
              ["home", "Home"],
              ["menu", "Menu"],
              ["timings", "Timings"],
              ["committee", "Committee"],
              ["rules", "Rules"],
              ["feedback", "Feedback"],
              ["about", "About"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => goTo(id)}
                className={`rounded-lg px-4 py-2 text-sm ${
                  active === id
                    ? "bg-green-100 text-green-800"
                    : "text-gray-600"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* ================= HOME ================= */}

      <section id="home" className="scroll-mt-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-2 lg:items-center lg:py-20">

          <div>
            <div className="mb-5 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
              🍽️ NIPER-A Student Mess
            </div>

            <h2 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              Better food starts with your feedback.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Check today's meal, view the weekly menu, follow mess
              timings and rules, and share your suggestions with the
              NIPER-A MESS Committee.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => goTo("menu")}
                className="rounded-xl bg-green-800 px-6 py-3 font-semibold text-white hover:bg-green-900"
              >
                View Menu
              </button>

              <button
                onClick={() => goTo("feedback")}
                className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold hover:bg-gray-50"
              >
                Give Feedback
              </button>
            </div>
          </div>

          {/* CURRENT / UPCOMING MEAL */}

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Today's Meal
            </p>

            {currentMeal ? (
              <div className="mt-5 rounded-2xl bg-green-50 p-6">

                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                    🍛
                  </div>

                  <span className="rounded-full bg-green-800 px-4 py-2 text-xs font-bold text-white">
                    {currentMeal.status}
                  </span>
                </div>

                <p className="mt-6 text-sm font-semibold text-green-800">
                  {currentMeal.name}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {currentMeal.food}
                </h3>

                <button
                  onClick={() => goTo("feedback")}
                  className="mt-6 w-full rounded-xl bg-green-800 py-3 font-semibold text-white hover:bg-green-900"
                >
                  ⭐ Rate / Give Feedback
                </button>
              </div>
            ) : (
              <div className="mt-5 rounded-2xl bg-gray-50 p-6">
                Loading today's meal...
              </div>
            )}

            <button
              onClick={() => goTo("timings")}
              className="mt-4 w-full rounded-xl border border-gray-200 bg-white py-3 font-semibold text-gray-700 hover:bg-gray-50"
            >
              🕐 View Mess Timings
            </button>
          </div>

        </div>
      </section>

      {/* ================= MENU ================= */}

      <section
        id="menu"
        className="scroll-mt-32 border-t border-gray-200 bg-white py-16"
      >
        <div className="mx-auto max-w-7xl px-5">

          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-800">
              Weekly Schedule
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              NIPER-A MESS Menu
            </h2>
          </div>

          <div className="hidden overflow-hidden rounded-2xl border border-gray-200 md:block">
            <div className="overflow-x-auto">

              <table className="w-full min-w-[1000px] border-collapse text-left">

                <thead>
                  <tr className="bg-green-800 text-white">
                    <th className="px-5 py-4">Day</th>
                    <th className="px-5 py-4">Breakfast</th>
                    <th className="px-5 py-4">Lunch</th>
                    <th className="px-5 py-4">Snacks</th>
                    <th className="px-5 py-4">Dinner</th>
                  </tr>
                </thead>

                <tbody>
                  {weeklyMenu.map((item, index) => (
                    <tr
                      key={item.day}
                      className={
                        index % 2 === 0
                          ? "bg-white"
                          : "bg-gray-50"
                      }
                    >
                      <td className="px-5 py-5 font-bold text-green-800">
                        {item.day}
                      </td>

                      <td className="px-5 py-5">
                        {item.breakfast}
                      </td>

                      <td className="px-5 py-5">
                        {item.lunch}
                      </td>

                      <td className="px-5 py-5">
                        {item.snacks}
                      </td>

                      <td className="px-5 py-5">
                        {item.dinner}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>

          {/* MOBILE MENU */}

          <div className="space-y-5 md:hidden">
            {weeklyMenu.map((item) => (
              <div
                key={item.day}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-xl font-bold text-green-800">
                  {item.day}
                </h3>

                <div className="mt-4 space-y-4">

                  <div>
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Breakfast
                    </p>
                    <p className="mt-1">{item.breakfast}</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Lunch
                    </p>
                    <p className="mt-1">{item.lunch}</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Snacks
                    </p>
                    <p className="mt-1">{item.snacks}</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Dinner
                    </p>
                    <p className="mt-1">{item.dinner}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= MESS TIMINGS ================= */}

      <section
        id="timings"
        className="scroll-mt-32 border-t border-gray-200 bg-[#f7f8f4] py-16"
      >
        <div className="mx-auto max-w-6xl px-5">

          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-800">
              1. Mess Timings
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              Meal Timings
            </h2>

            <p className="mt-3 text-gray-600">
              Please follow the prescribed mess timings.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            {/* WEEKDAYS */}

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <h3 className="text-2xl font-bold text-green-800">
                Weekdays
              </h3>

              <div className="mt-6 space-y-4">
                {weekdayTimings.map(([meal, time]) => (
                  <div
                    key={meal}
                    className="flex items-center justify-between rounded-xl bg-gray-50 px-5 py-4"
                  >
                    <span className="font-semibold">
                      {meal}
                    </span>

                    <span className="font-medium text-green-800">
                      {time}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* WEEKENDS */}

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <h3 className="text-2xl font-bold text-green-800">
                Weekends
              </h3>

              <div className="mt-6 space-y-4">
                {weekendTimings.map(([meal, time]) => (
                  <div
                    key={meal}
                    className="flex items-center justify-between rounded-xl bg-gray-50 px-5 py-4"
                  >
                    <span className="font-semibold">
                      {meal}
                    </span>

                    <span className="font-medium text-green-800">
                      {time}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= COMMITTEE ================= */}

      <section
        id="committee"
        className="scroll-mt-32 border-t border-gray-200 bg-white py-16"
      >
        <div className="mx-auto max-w-7xl px-5">

          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-800">
              Student Representatives
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              Mess Committee Members
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {/* PHD */}

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-800 font-bold text-white">
                  PhD
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    PhD Representatives
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {phdMembers.map((member, index) => (
                  <div
                    key={member}
                    className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-800">
                      {index + 1}
                    </span>

                    <span className="font-medium">
                      {member}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* MS */}

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-800 font-bold text-white">
                  MS
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    MS 2nd Year Representatives
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {msMembers.map((member, index) => (
                  <div
                    key={member}
                    className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-800">
                      {index + 1}
                    </span>

                    <span className="font-medium">
                      {member}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= RULES + FEES ================= */}

      <section
        id="rules"
        className="scroll-mt-32 border-t border-gray-200 bg-[#f7f8f4] py-16"
      >
        <div className="mx-auto max-w-6xl px-5">

          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-800">
              Mess Guidelines
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              Mess Discipline & Fees
            </h2>
          </div>

          {/* DISCIPLINE */}

          <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

            <h3 className="text-2xl font-bold text-green-800">
              2. Mess Discipline – Seniors & Juniors
            </h3>

            <ul className="mt-6 space-y-3">

              {[
                "All students must strictly follow the prescribed mess timings.",
                "Maintain a proper queue while taking food; no pushing or cutting the line.",
                "Maintain discipline and keep noise levels under control.",
                "Do not shout, abuse, tease, or disrespect other students.",
                "Seniors must lead by example and guide juniors politely.",
                "Juniors must respect seniors and follow the mess rules.",
                "The same discipline rules apply equally to seniors and juniors.",
                "No harassment, intimidation, arguments, or fights inside the mess.",
                "Take only the required amount of food and avoid food wastage.",
                "Do not occupy seats unnecessarily during busy meal times.",
                "Any serious or repeated indiscipline should be reported to the mess in-charge/warden.",
                "Everyone is expected to maintain a clean, respectful, and disciplined environment in the mess.",
              ].map((rule, index) => (
                <li
                  key={index}
                  className="flex gap-3 rounded-xl bg-gray-50 p-4"
                >
                  <span className="font-bold text-green-800">
                    {index + 1}.
                  </span>

                  <span className="text-gray-700">
                    {rule}
                  </span>
                </li>
              ))}

            </ul>
          </div>

          {/* FEES */}

          <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-8">

            <p className="text-sm font-semibold uppercase tracking-widest text-green-800">
              3. Mess Fees
            </p>

            <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

              <div>
                <h3 className="text-3xl font-bold text-gray-950">
                  ₹4,400
                </h3>

                <p className="mt-1 font-medium text-gray-600">
                  Monthly Mess Fee per Student
                </p>
              </div>

              <div className="max-w-xl text-gray-700">
                Students are requested to pay the mess fee as early as
                possible after receiving their stipend.
                Timely payment helps ensure the smooth and uninterrupted
                functioning of the mess.
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= FEEDBACK ================= */}

      <section
        id="feedback"
        className="scroll-mt-32 border-t border-gray-200 bg-white py-16"
      >
        <div className="mx-auto max-w-5xl px-5">

          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-800">
              NIPER-A MESS
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              Feedback
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Share your suggestions with the NIPER-A MESS Committee.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSePYCWdwUELpbc6rE3nJ2ziPTW697xOeNU9FHZcLn7YfRl20A/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="NIPER-A MESS Feedback Form"
              className="w-full"
            >
              Loading feedback form…
            </iframe>

          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="scroll-mt-32 border-t border-gray-200 bg-[#f7f8f4] py-16"
      >
        <div className="mx-auto max-w-6xl px-5">

          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-800">
              About
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              NIPER-A MESS
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                MESS SERVICE PROVIDER
              </p>

              <h3 className="mt-3 text-2xl font-bold text-green-800">
                Dhiyana Hospitality
              </h3>

            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                PROPRIETORS
              </p>

              <div className="mt-4 space-y-3">

                <div className="rounded-xl bg-gray-50 px-5 py-4 font-semibold">
                  Karan Singh Chauhan
                </div>

                <div className="rounded-xl bg-gray-50 px-5 py-4 font-semibold">
                  Kuldeep Singh
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-gray-200 bg-white py-10">

        <div className="mx-auto max-w-7xl px-5 text-center">

          <div className="flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-800 font-bold text-white">
              NM
            </div>
          </div>

          <h3 className="mt-4 text-lg font-bold">
            NIPER-A MESS
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Student Mess Portal
          </p>

          <div className="mt-6 text-sm text-gray-500">

            <p className="font-semibold text-gray-700">
              MESS SERVICE PROVIDER
            </p>

            <p>Dhiyana Hospitality</p>

            <p className="mt-4 font-semibold text-gray-700">
              PROPRIETORS
            </p>

            <p>
              Karan Singh Chauhan &amp; Kuldeep Singh
            </p>

          </div>

          <p className="mt-8 text-xs text-gray-400">
            © {new Date().getFullYear()} NIPER-A MESS. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}