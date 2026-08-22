"use client";

import { useState } from "react";

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
  const [active, setActive] = useState("home");

  const goTo = (section: string) => {
    setActive(section);

    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f8f4] text-gray-900">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          {/* LOGO / BRAND */}
          <button
            onClick={() => goTo("home")}
            className="flex items-center gap-3 text-left"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-800 font-bold text-white">
              NM
            </div>

            <div>
              <h1 className="text-lg font-bold leading-tight">
                NIPER-A MESS
              </h1>

              <p className="text-xs font-semibold text-green-800">
                Student Mess Portal
              </p>
            </div>
          </button>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-2 md:flex">
            {[
              ["home", "Home"],
              ["menu", "Menu"],
              ["committee", "Committee"],
              ["feedback", "Feedback"],
              ["about", "About"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => goTo(id)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  active === id
                    ? "bg-green-100 text-green-800"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* MOBILE NAVIGATION */}
        <div className="overflow-x-auto border-t border-gray-100 md:hidden">
          <div className="flex min-w-max gap-2 px-4 py-2">
            {[
              ["home", "Home"],
              ["menu", "Menu"],
              ["committee", "Committee"],
              ["feedback", "Feedback"],
              ["about", "About"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => goTo(id)}
                className={`rounded-lg px-4 py-2 text-sm font-medium ${
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
      <section
        id="home"
        className="scroll-mt-32"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center lg:py-24">

          {/* LEFT */}
          <div>
            <div className="mb-6 inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
              🍽️ NIPER-A Student Mess
            </div>

            <h2 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-gray-950 md:text-6xl">
              Better food starts with your feedback.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Check the weekly menu, share your suggestions and help the
              NIPER-A MESS Committee improve food quality and dining services.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => goTo("menu")}
                className="rounded-xl bg-green-800 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-900"
              >
                View Menu
              </button>

              <button
                onClick={() => goTo("feedback")}
                className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-50"
              >
                Give Feedback
              </button>
            </div>
          </div>

          {/* TODAY'S MEAL CARD */}
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">

            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Weekly Menu
            </p>

            <div className="mt-6 rounded-2xl bg-green-50 p-6">
              <div className="text-4xl">🍛</div>

              <h3 className="mt-4 text-2xl font-bold">
                NIPER-A MESS
              </h3>

              <p className="mt-2 text-gray-600">
                Fresh meals • Student feedback • Better dining
              </p>

              <button
                onClick={() => goTo("feedback")}
                className="mt-6 w-full rounded-xl bg-green-800 py-3 font-semibold text-white hover:bg-green-900"
              >
                ⭐ Rate / Give Feedback
              </button>
            </div>
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

            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Weekly breakfast, lunch, snacks and dinner menu.
            </p>
          </div>

          {/* DESKTOP TABLE */}
          <div className="hidden overflow-hidden rounded-2xl border border-gray-200 shadow-sm md:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] border-collapse text-left">

                <thead>
                  <tr className="bg-green-800 text-white">
                    <th className="px-5 py-4 font-semibold">
                      Day
                    </th>

                    <th className="px-5 py-4 font-semibold">
                      Breakfast
                    </th>

                    <th className="px-5 py-4 font-semibold">
                      Lunch
                    </th>

                    <th className="px-5 py-4 font-semibold">
                      Snacks
                    </th>

                    <th className="px-5 py-4 font-semibold">
                      Dinner
                    </th>
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

                      <td className="px-5 py-5 text-gray-700">
                        {item.breakfast}
                      </td>

                      <td className="px-5 py-5 text-gray-700">
                        {item.lunch}
                      </td>

                      <td className="px-5 py-5 text-gray-700">
                        {item.snacks}
                      </td>

                      <td className="px-5 py-5 text-gray-700">
                        {item.dinner}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>

          {/* MOBILE MENU CARDS */}
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
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Breakfast
                    </p>
                    <p className="mt-1 text-gray-700">
                      {item.breakfast}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Lunch
                    </p>
                    <p className="mt-1 text-gray-700">
                      {item.lunch}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Snacks
                    </p>
                    <p className="mt-1 text-gray-700">
                      {item.snacks}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Dinner
                    </p>
                    <p className="mt-1 text-gray-700">
                      {item.dinner}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= COMMITTEE ================= */}
      <section
        id="committee"
        className="scroll-mt-32 border-t border-gray-200 bg-[#f7f8f4] py-16"
      >
        <div className="mx-auto max-w-7xl px-5">

          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-800">
              Student Representatives
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              Mess Committee Members
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              The student committee works with the mess service provider
              to improve food and dining services.
            </p>
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

                  <p className="text-sm text-gray-500">
                    Mess Committee
                  </p>
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

                  <p className="text-sm text-gray-500">
                    Mess Committee
                  </p>
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
              Your feedback helps us improve the quality of food and
              dining services.
            </p>
          </div>

          {/* GOOGLE FORM */}
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

      {/* ================= ABOUT / SERVICE PROVIDER ================= */}
      <section
        id="about"
        className="scroll-mt-32 border-t border-gray-200 bg-[#f7f8f4] py-16"
      >
        <div className="mx-auto max-w-7xl px-5">

          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-800">
              About
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              NIPER-A MESS
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {/* SERVICE PROVIDER */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                MESS SERVICE PROVIDER
              </p>

              <h3 className="mt-3 text-2xl font-bold text-green-800">
                Dhiyana Hospitality
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Dhiyana Hospitality is the service provider responsible
                for NIPER-A MESS food and dining services.
              </p>
            </div>

            {/* PROPRIETORS */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                PROPRIETORS
              </p>

              <div className="mt-4 space-y-3">

                <div className="rounded-xl bg-gray-50 px-5 py-4">
                  <p className="font-semibold text-gray-900">
                    Karan Singh Chauhan
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 px-5 py-4">
                  <p className="font-semibold text-gray-900">
                    Kuldeep Singh
                  </p>
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

          <div className="mx-auto mt-6 max-w-xl text-sm text-gray-500">
            <p className="font-semibold text-gray-700">
              MESS SERVICE PROVIDER
            </p>

            <p className="mt-1">
              Dhiyana Hospitality
            </p>

            <p className="mt-4 font-semibold text-gray-700">
              PROPRIETORS
            </p>

            <p className="mt-1">
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