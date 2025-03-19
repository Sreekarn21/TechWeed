"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Course {
  _id: string;
  name: string;
}

export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // Redirect if not logged in
      return;
    }

    fetch("/api/user/courses", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-lg">Loading...</p>;

  return (
    <div className="min-h-screen p-6 text-white bg-gray-900">
      <h1 className="text-3xl font-bold mb-4">Your Registered Courses</h1>
      {courses.length === 0 ? (
        <p>You haven't registered for any courses yet.</p>
      ) : (
        <ul className="list-disc ml-6">
          {courses.map((course) => (
            <li key={course._id} className="text-lg">{course.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
