"use client";
import { useState } from "react";

export default function LegalPage({ title, sections = [], tags = [] }) {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredSections =
    selectedTag === "All"
      ? sections
      : sections.filter((section) => section.tag === selectedTag);

  return (
    <div className="px-6 py-12 max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-800">
          {title}
        </h1>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-4">
            <button
              className={`px-3 py-1 rounded-full border text-sm ${
                selectedTag === "All"
                  ? "bg-black text-white"
                  : "border-zinc-300 text-zinc-600"
              }`}
              onClick={() => setSelectedTag("All")}
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                className={`px-3 py-1 rounded-full border text-sm ${
                  selectedTag === tag
                    ? "bg-black text-white"
                    : "border-zinc-300 text-zinc-600"
                }`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </header>

      <section className="space-y-10">
        {filteredSections.map((section, index) => (
          <div key={index} className="border-b pb-6">
            <h2 className="text-xl font-semibold text-zinc-700 mb-2">
              {section.heading}
            </h2>
            <div
              className="text-zinc-600 leading-relaxed prose prose-zinc max-w-none"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </div>
        ))}
      </section>
    </div>
  );
}
