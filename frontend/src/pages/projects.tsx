import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllProjects, type Project } from "@/lib/api";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Projects", icon: "🏗️" },
    { id: "mne", name: "M&E Engineering", icon: "⚡" },
    { id: "civil", name: "Civil & Building", icon: "🏢" },
    { id: "event", name: "Event Management", icon: "🎪" },
    { id: "support", name: "Engineering Support", icon: "🛠️" },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getAllProjects();
        setProjects(data);
        setError(null);
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        if (
          errorMessage.includes("timeout") ||
          errorMessage.includes("starting up")
        ) {
          setError(
            "Server is waking up (takes ~30 seconds on first request). Please wait..."
          );
          // Retry after 5 seconds
          setTimeout(() => {
            fetchProjects();
          }, 5000);
        } else {
          setError("Failed to load projects. Please try again later.");
          console.error("Error fetching projects:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const stats = [
    { number: projects.length.toString(), label: "Completed Projects" },
    { number: "20+", label: "Years Experience" },
    { number: "100+", label: "Happy Clients" },
    { number: "4", label: "Core Divisions" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-pulse">⏳</div>
          <p className="text-xl text-gray-600">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <p className="text-xl text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-orange-50">
              Showcasing our portfolio of successful projects across multiple
              engineering disciplines
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === category.id
                    ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {categories.find((cat) => cat.id === activeTab)?.name ||
                  "All Projects"}
              </h2>
              <p className="text-gray-600">
                {filteredProjects.length} projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Main Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {project.year}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {project.images.length} Photos
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-orange-600 font-semibold mb-3 text-sm">
                      {project.client}
                    </p>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">📁</div>
                <p className="text-xl text-gray-600">
                  No projects found in this category
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-orange-600 to-orange-500 text-white p-6 flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-orange-100">
                  {selectedProject.client} • {selectedProject.year}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-white hover:text-orange-200 text-3xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-gray-700 text-lg mb-6">
                {selectedProject.description}
              </p>

              {/* Image Gallery */}
              <div className="grid md:grid-cols-2 gap-4">
                {selectedProject.images.map((image: string, index: number) => (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden shadow-lg"
                  >
                    <Image
                      src={image}
                      alt={`${selectedProject.title} - Image ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Next Project With Us
          </h2>
          <p className="text-xl mb-8 text-orange-50 max-w-2xl mx-auto">
            Join our growing list of satisfied clients. Contact us today to
            discuss your engineering needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
