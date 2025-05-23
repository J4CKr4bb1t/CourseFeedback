const API_BASE = "http://localhost:3000";

async function fetchWithAuth(path) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 
      "Content-Type": "application/json",
      "x-access-token": token
    },
  });
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

export function getAllClasses() {
  return fetchWithAuth("/class");
}

export function getClassById(id) {
  return fetchWithAuth(`/class/${id}`);
}

/*
 const courses = [
  {
    id: 1,
    name: "Intro to Biology",
    abbrev: "BIO 101",
    prof: "Adams, John",
  },
  {
    id: 2,
    name: "First Year Seminar",
    abbrev: "FYS 101",
    prof: "McClaren, Elizabeth",
  },
  {
    id: 3,
    name: "Visual design in Computation",
    abbrev: "GDD 140",
    prof: "Johnson, John",
  },
  {
    id: 4,
    name: "Underwater Basket Weaving",
    abbrev: "BS 201",
    prof: "Goodal, Jane",
  },
];
*/ 

const lessons = [
  {
    id: 1,
    name: "Understanding the basics",
    date: "Nov 10th 2024",
    status: "complete",
    feedback: {
      contentClarity: "Very clear",
      pace: "Just right",
      suggestions: "Great start!",
    },
  },

  {
    id: 2,
    name: "Introductions",
    date: "Nov 12th 2024",
    status: "complete",
    feedback: {
      contentClarity: "A little unclear",
      pace: "Too slow",
      suggestions: "Could use more examples.",
    },
  },

  {
    id: 3,
    name: "Identifying Pattners",
    date: "Nov 14th 2024",
    status: "complete",
    feedback: {
      contentClarity: "Very Clear",
      pace: "Just right",
      suggestions: "Add more visuals.",
    },
  },

  {
    id: 4,
    name: "Quiz 1 review session",
    date: "Nov 16th 2024",
    status: "available",
    feedback: null,
  },

  {
    id: 5,
    name: "Quiz 1",
    date: "Nov 18th 2024",
    status: "unavailable",
    feedback: null,
  },
];

/*
// export means you can call outside the file
export function getCourses() {
  return courses;
}
*/
export function getLessons() {
  return lessons;
}

/*
export function getCourse(id) {
  return courses.find((c) => c.id === id);
}
*/