import React, { useState, useEffect } from "react";
import { Link } from "react-router";

export default function CommunityNotesPage() {
  const [notes, setNotes] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    author: ""
  });

  // Mock data for demonstration (replace with actual API calls)
  const mockNotes = [
    {
      id: 1,
      title: "Best Practices for Organic Farming",
      content: "Sharing my experience with organic farming techniques that have worked well for me over the past 5 years. Key points include proper composting, crop rotation, and natural pest control methods.",
      author: "Rajesh Kumar",
      location: "Nashik, Maharashtra",
      createdAt: "2024-01-20T10:30:00Z",
      updatedAt: "2024-01-20T10:30:00Z"
    },
    {
      id: 2,
      title: "Water Conservation Tips for Small Farmers",
      content: "Here are some practical water conservation methods I've implemented on my 2-acre farm: drip irrigation, rainwater harvesting, and mulching. These techniques have reduced my water usage by 40%.",
      author: "Priya Sharma",
      location: "Karnal, Haryana",
      createdAt: "2024-01-19T14:15:00Z",
      updatedAt: "2024-01-19T14:15:00Z"
    },
    {
      id: 3,
      title: "Market Price Trends - January 2024",
      content: "Observed significant price fluctuations in onions and tomatoes this month. Onion prices have increased by 25% due to reduced supply. Farmers in Maharashtra should consider increasing onion cultivation for next season.",
      author: "Suresh Patil",
      location: "Pune, Maharashtra",
      createdAt: "2024-01-18T09:45:00Z",
      updatedAt: "2024-01-18T09:45:00Z"
    },
    {
      id: 4,
      title: "Success with Green Chili Cultivation",
      content: "This season's green chili harvest exceeded expectations! Using hybrid seeds and proper spacing techniques resulted in 30% higher yield. Happy to share detailed methodology with fellow farmers.",
      author: "Lakshmi Devi",
      location: "Guntur, Andhra Pradesh",
      createdAt: "2024-01-17T16:20:00Z",
      updatedAt: "2024-01-17T16:20:00Z"
    }
  ];

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      setNotes(mockNotes);
      setLoading(false);
    }, 1000);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + " at " + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  };

  const handleCreateNote = () => {
    if (newNote.title.trim() && newNote.content.trim() && newNote.author.trim()) {
      const note = {
        id: Date.now(),
        ...newNote,
        location: "Your Location", // You can add location input
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setNotes([note, ...notes]);
      setNewNote({ title: "", content: "", author: "" });
      setShowCreateForm(false);
    }
  };

  const handleEditNote = (note) => {
    setEditingNote({ ...note });
  };

  const handleUpdateNote = () => {
    if (editingNote.title.trim() && editingNote.content.trim()) {
      const updatedNotes = notes.map(note => 
        note.id === editingNote.id 
          ? { ...editingNote, updatedAt: new Date().toISOString() }
          : note
      );
      setNotes(updatedNotes);
      setEditingNote(null);
    }
  };

  const handleDeleteNote = (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      setNotes(notes.filter(note => note.id !== id));
    }
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Navigation */}
      <nav className="flex justify-between items-center px-4 sm:px-6 py-4 bg-white border-b shadow-sm">
        <Link to="/">
          <button className="flex items-center gap-2 text-green-700 hover:opacity-80">
            <span className="text-2xl">🌱</span>
            <span className="text-2xl font-extrabold">AgriMitra</span>
          </button>
        </Link>

        <div className="flex gap-2 sm:gap-3">
          <button 
            onClick={() => setShowCreateForm(true)}
            className="px-2 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-lg sm:rounded-xl bg-green-600 text-white shadow hover:-translate-y-0.5 hover:shadow-md hover:bg-green-700 active:translate-y-0 transition"
          >
            Write Note
          </button>
         
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800">Community Notes</h2>
        <p className="text-gray-600 mt-1">
          Share knowledge, experiences, and connect with fellow farmers
        </p>

        {/* Search Bar */}
        <div className="mt-5">
          <input
            type="text"
            placeholder="Search notes by title, content, or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2.5 rounded-xl focus:ring-2 focus:ring-green-400 outline-none bg-white shadow-sm"
          />
        </div>
      </section>

      {/* Create Note Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-green-800 mb-4">Share Your Knowledge</h3>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={newNote.author}
                onChange={(e) => setNewNote({...newNote, author: e.target.value})}
                className="w-full border border-gray-300 px-4 py-2.5 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
              />
              
              <input
                type="text"
                placeholder="Note Title"
                value={newNote.title}
                onChange={(e) => setNewNote({...newNote, title: e.target.value})}
                className="w-full border border-gray-300 px-4 py-2.5 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
              />
              
              <textarea
                placeholder="Share your farming experience, tips, or ask questions..."
                value={newNote.content}
                onChange={(e) => setNewNote({...newNote, content: e.target.value})}
                rows="6"
                className="w-full border border-gray-300 px-4 py-2.5 rounded-xl focus:ring-2 focus:ring-green-400 outline-none resize-none"
              />
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowCreateForm(false)}
                className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateNote}
                className="flex-1 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition shadow"
              >
                Post Note
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Note Modal */}
      {editingNote && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-green-800 mb-4">Edit Note</h3>
            
            <div className="space-y-4">
              <input
                type="text"
                value={editingNote.title}
                onChange={(e) => setEditingNote({...editingNote, title: e.target.value})}
                className="w-full border border-gray-300 px-4 py-2.5 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
              />
              
              <textarea
                value={editingNote.content}
                onChange={(e) => setEditingNote({...editingNote, content: e.target.value})}
                rows="6"
                className="w-full border border-gray-300 px-4 py-2.5 rounded-xl focus:ring-2 focus:ring-green-400 outline-none resize-none"
              />
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setEditingNote(null)}
                className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateNote}
                className="flex-1 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition shadow"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notes List */}
      <section className="px-4 sm:px-6 pb-12">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
            <p className="text-gray-600 mt-2">Loading community notes...</p>
          </div>
        ) : filteredNotes.length > 0 ? (
          <div className="space-y-6">
            {filteredNotes.map((note) => (
              <article
                key={note.id}
                className="bg-white rounded-2xl border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="text-xl font-semibold text-green-800 hover:text-green-700 transition">
                      {note.title}
                    </h3>
                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={() => handleEditNote(note)}
                        className="text-xs px-2 py-1 bg-blue-100 text-blue-600 border border-blue-300 rounded-md hover:bg-blue-200 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteNote(note.id)}
                        className="text-xs px-2 py-1 bg-red-100 text-red-600 border border-red-300 rounded-md hover:bg-red-200 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">{note.content}</p>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-green-700">{note.author}</span>
                      {note.location && (
                        <>
                          <span>•</span>
                          <span>{note.location}</span>
                        </>
                      )}
                    </div>
                    <div className="text-xs text-gray-500">
                      {note.updatedAt !== note.createdAt ? (
                        <span>Updated {formatDate(note.updatedAt)}</span>
                      ) : (
                        <span>Posted {formatDate(note.createdAt)}</span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No notes found</h3>
            <p className="text-gray-500 mb-6">
              {searchTerm ? "Try adjusting your search terms" : "Be the first to share your farming knowledge!"}
            </p>
            {!searchTerm && (
              <button
                onClick={() => setShowCreateForm(true)}
                className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition shadow"
              >
                Write First Note
              </button>
            )}
          </div>
        )}
      </section>
    </div>
  );
}