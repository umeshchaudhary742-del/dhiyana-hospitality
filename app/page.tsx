"use client";

import { useState } from "react";

const menu = [
  {
    day: "Monday",
    meals: [
      { name: "Breakfast", items: "Poha • Tea • Banana" },
      { name: "Lunch", items: "Dal Tadka • Rice • Roti • Salad" },
      { name: "Dinner", items: "Paneer Masala • Dal • Rice • Roti" },
    ],
  },
  {
    day: "Tuesday",
    meals: [
      { name: "Breakfast", items: "Idli • Sambar • Tea" },
      { name: "Lunch", items: "Rajma • Rice • Roti • Salad" },
      { name: "Dinner", items: "Mix Veg • Dal • Rice • Roti" },
    ],
  },
  {
    day: "Wednesday",
    meals: [
      { name: "Breakfast", items: "Paratha • Curd • Tea" },
      { name: "Lunch", items: "Chole • Rice • Roti • Salad" },
      { name: "Dinner", items: "Paneer Bhurji • Dal • Rice • Roti" },
    ],
  },
  {
    day: "Thursday",
    meals: [
      { name: "Breakfast", items: "Upma • Tea • Fruit" },
      { name: "Lunch", items: "Dal • Jeera Rice • Roti • Salad" },
      { name: "Dinner", items: "Veg Pulao • Raita • Dal • Roti" },
    ],
  },
  {
    day: "Friday",
    meals: [
      { name: "Breakfast", items: "Aloo Paratha • Curd • Tea" },
      { name: "Lunch", items: "Kadhi • Rice • Roti • Salad" },
      { name: "Dinner", items: "Paneer Curry • Dal • Rice • Roti" },
    ],
  },
  {
    day: "Saturday",
    meals: [
      { name: "Breakfast", items: "Dosa • Sambar • Chutney" },
      { name: "Lunch", items: "Chole • Rice • Roti • Salad" },
      { name: "Dinner", items: "Veg Biryani • Raita • Dal" },
    ],
  },
  {
    day: "Sunday",
    meals: [
      { name: "Breakfast", items: "Puri • Aloo Sabzi • Tea" },
      { name: "Lunch", items: "Special Thali • Rice • Roti • Sweet" },
      { name: "Dinner", items: "Special Dinner • Dal • Rice • Roti" },
    ],
  },
];

export default function Home() {
  const [active, setActive] = useState("home");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);

  function showMessage(text: string) {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  return (
    <main className="min-h-screen bg-[#f7f8f4] text-gray-900">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">

          {/* BRAND */}
          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-800 font-bold text-white">
              DH
            </div>

            <div>
              <h1 className="text-lg font-bold leading-tight">
                Dhiyana Hospitality
              </h1>

              <p className="text-sm font-bold text-green-800">
                NIPER-A
              </p>

              <p className="text-xs text-gray-500">
                Student Mess Portal
              </p>
            </div>

          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden gap-1 md:flex">

            {[
              ["home", "Home"],
              ["menu", "Menu"],
              ["vote", "Vote"],
              ["suggest", "Suggest"],
              ["feedback", "Feedback"],
            ].map(([id, label]) => (

              <button
                key={id}
                onClick={() => setActive(id)}
                className={`rounded-lg px-4 py-2 text-sm font-medium ${
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

        {/* MOBILE NAVIGATION */}
        <div className="flex gap-2 overflow-x-auto border-t px-4 py-2 md:hidden">

          {[
            ["home", "Home"],
            ["menu", "Menu"],
            ["vote", "Vote"],
            ["suggest", "Suggest"],
            ["feedback", "Feedback"],
          ].map(([id, label]) => (

            <button
              key={id}
              onClick={() => setActive(id)}
              className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm ${
                active === id
                  ? "bg-green-800 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {label}
            </button>

          ))}

        </div>
      </header>

      {/* SUCCESS MESSAGE */}
      {message && (
        <div className="fixed right-5 top-24 z-50 rounded-xl bg-green-800 px-5 py-3 text-sm font-medium text-white shadow-lg">
          {message}
        </div>
      )}

      {/* HOME PAGE */}
      {active === "home" && (

        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">

          <div>

            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
              🍽️ NIPER-A Student Mess Portal
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              Better food starts with your feedback.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Check the menu, vote for changes, suggest dishes
              and tell the Dhiyana Hospitality team what you think.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <button
                onClick={() => setActive("menu")}
                className="rounded-xl bg-green-800 px-6 py-3 font-semibold text-white hover:bg-green-900"
              >
                View Menu
              </button>

              <button
                onClick={() => setActive("feedback")}
                className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold hover:bg-gray-50"
              >
                Give Feedback
              </button>

            </div>
          </div>

          {/* TODAY'S MENU CARD */}
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">

            <p className="text-xs font-bold tracking-widest text-gray-500">
              TODAY'S LUNCH
            </p>

            <div className="mt-5 text-5xl">
              🍛
            </div>

            <h3 className="mt-4 text-2xl font-bold">
              Dal Tadka
            </h3>

            <p className="mt-3 text-gray-600">
              Rice • Roti • Salad • Dal Tadka
            </p>

            <button
              onClick={() => setActive("feedback")}
              className="mt-7 w-full rounded-xl bg-green-50 py-3 font-semibold text-green-800"
            >
              ⭐ Rate Today's Meal
            </button>

          </div>

        </section>
      )}

      {/* WEEKLY MENU */}
      {active === "menu" && (

        <section className="mx-auto max-w-5xl px-5 py-14">

          <h2 className="text-4xl font-bold">
            📅 Weekly Menu
          </h2>

          <p className="mt-2 text-gray-600">
            View the proposed weekly mess menu.
          </p>

          <div className="mt-8 space-y-5">

            {menu.map((day) => (

              <div
                key={day.day}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
              >

                <h3 className="text-xl font-bold text-green-800">
                  {day.day}
                </h3>

                <div className="mt-4 grid gap-3 md:grid-cols-3">

                  {day.meals.map((meal) => (

                    <div
                      key={meal.name}
                      className="rounded-xl bg-gray-50 p-4"
                    >

                      <p className="font-semibold">
                        {meal.name}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {meal.items}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </section>
      )}

      {/* VOTING */}
      {active === "vote" && (

        <section className="mx-auto max-w-3xl px-5 py-14">

          <h2 className="text-4xl font-bold">
            🗳️ Vote on the Menu
          </h2>

          <p className="mt-2 text-gray-600">
            Tell us which dishes you want to keep or change.
          </p>

          <div className="mt-8 space-y-4">

            {[
              "Paneer Masala",
              "Veg Biryani",
              "Masala Dosa",
              "Chole Bhature",
              "Rajma Rice",
              "Pav Bhaji",
            ].map((dish) => (

              <div
                key={dish}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 md:flex md:items-center md:justify-between"
              >

                <strong>
                  {dish}
                </strong>

                <div className="mt-4 flex flex-wrap gap-2 md:mt-0">

                  <button
                    onClick={() =>
                      showMessage("Your vote was recorded 👍")
                    }
                    className="rounded-lg bg-green-100 px-3 py-2 text-sm font-medium text-green-800"
                  >
                    👍 Keep
                  </button>

                  <button
                    onClick={() =>
                      showMessage("Change request recorded 🔄")
                    }
                    className="rounded-lg bg-yellow-100 px-3 py-2 text-sm font-medium text-yellow-800"
                  >
                    🔄 Change
                  </button>

                  <button
                    onClick={() =>
                      showMessage("Your feedback was recorded 👎")
                    }
                    className="rounded-lg bg-red-100 px-3 py-2 text-sm font-medium text-red-800"
                  >
                    👎 Replace
                  </button>

                </div>

              </div>

            ))}

          </div>

        </section>
      )}

      {/* DISH SUGGESTION */}
      {active === "suggest" && (

        <section className="mx-auto max-w-2xl px-5 py-14">

          <h2 className="text-4xl font-bold">
            💡 Suggest a Dish
          </h2>

          <p className="mt-2 text-gray-600">
            Tell us what you would like to see in the mess.
          </p>

          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">

            <label className="block font-semibold">
              Dish name
            </label>

            <input
              className="mt-2 w-full rounded-xl border p-3 outline-none focus:border-green-700"
              placeholder="Example: Veg Biryani"
            />

            <label className="mt-5 block font-semibold">
              Meal
            </label>

            <select className="mt-2 w-full rounded-xl border bg-white p-3">

              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Snacks</option>
              <option>Dinner</option>

            </select>

            <label className="mt-5 block font-semibold">
              Reason / suggestion
            </label>

            <textarea
              className="mt-2 min-h-28 w-full rounded-xl border p-3"
              placeholder="Optional"
            />

            <button
              onClick={() =>
                showMessage(
                  "Thank you! Your dish suggestion was submitted."
                )
              }
              className="mt-5 w-full rounded-xl bg-green-800 py-3 font-semibold text-white hover:bg-green-900"
            >
              Submit Suggestion
            </button>

          </div>

        </section>
      )}

      {/* FEEDBACK */}
      {active === "feedback" && (

        <section className="mx-auto max-w-2xl px-5 py-14">

          <h2 className="text-4xl font-bold">
            ⭐ Rate Today's Food
          </h2>

          <p className="mt-2 text-gray-600">
            Your feedback helps us improve the mess service.
          </p>

          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">

            <label className="block font-semibold">
              Meal
            </label>

            <select className="mt-2 w-full rounded-xl border bg-white p-3">

              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Snacks</option>
              <option>Dinner</option>

            </select>

            <label className="mt-6 block font-semibold">
              Overall rating
            </label>

            <div className="mt-3 flex gap-2 text-3xl">

              {[1, 2, 3, 4, 5].map((star) => (

                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={
                    star <= rating
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }
                >
                  ★
                </button>

              ))}

            </div>

            <p className="mt-2 text-sm text-gray-500">
              {rating > 0
                ? `${rating} out of 5`
                : "Select a rating"}
            </p>

            <label className="mt-6 block font-semibold">
              Comments
            </label>

            <textarea
              className="mt-2 min-h-32 w-full rounded-xl border p-3"
              placeholder="Taste, quality, quantity, variety..."
            />

            <button
              onClick={() =>
                showMessage(
                  "Thank you! Your food feedback was submitted."
                )
              }
              className="mt-5 w-full rounded-xl bg-green-800 py-3 font-semibold text-white hover:bg-green-900"
            >
              Submit Feedback
            </button>

          </div>

        </section>
      )}

      {/* FOOTER */}
      <footer className="border-t bg-white py-8 text-center text-sm text-gray-500">

        <p className="font-semibold text-gray-700">
          Dhiyana Hospitality
        </p>

        <p className="mt-1">
          NIPER-A
        </p>

        <p className="mt-2">
          Student Mess Portal
        </p>

        <p className="mt-3">
          © {new Date().getFullYear()} Dhiyana Hospitality
        </p>

      </footer>

    </main>
  );
}