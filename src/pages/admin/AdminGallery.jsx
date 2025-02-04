'use client';
import { useState, useEffect } from "react";
import supabase from "../../../supabaseClient";
import AdminHeader from "./AdminHeader";
import { FaTrash, FaPlus, FaEdit, FaImage, FaVideo } from "react-icons/fa";
import '../../app/globals.css';

const ManageGallery = () => {
  const [mediaType, setMediaType] = useState('photo');
  const [gallery, setGallery] = useState([]);
  const [newMedia, setNewMedia] = useState({
    title: "",
    description: "",
    file: null,
    url: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch gallery data based on media type
  useEffect(() => {
    const fetchGallery = async () => {
      setLoading(true);
      try {
        const tableName = mediaType === 'photo' ? 'gallery_photos' : 'gallery_videos';
        const { data, error } = await supabase.from(tableName).select("*");

        if (error) throw error;
        setGallery(data || []);
      } catch (err) {
        setError("Error fetching media items");
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [mediaType]);

  // Reset form when media type changes
  useEffect(() => {
    setNewMedia({ title: "", description: "", file: null, url: "" });
    setEditingItem(null);
  }, [mediaType]);

  const handleAddOrUpdateMedia = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setError("Authentication required");
      return;
    }

    if (!newMedia.title || !newMedia.description) {
      setError("Title and description are required");
      return;
    }

    if (mediaType === 'photo' && !newMedia.file && !editingItem) {
      setError("Image file is required for photos");
      return;
    }

    if (mediaType === 'video' && !newMedia.url && !editingItem) {
      setError("Video URL is required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const tableName = mediaType === 'photo' ? 'gallery_photos' : 'gallery_videos';
      let mediaUrl = editingItem?.[mediaType === 'photo' ? 'image_url' : 'video_url'] || null;

      // Handle photo upload
      if (mediaType === 'photo' && newMedia.file) {
        const filePath = `photos/${Date.now()}_${newMedia.file.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("gallery")
          .upload(filePath, newMedia.file);

        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage
          .from("gallery")
          .getPublicUrl(uploadData.path);

        mediaUrl = urlData.publicUrl;
      }

      const mediaData = {
        title: newMedia.title,
        description: newMedia.description,
        [mediaType === 'photo' ? 'image_url' : 'video_url']: mediaType === 'photo' 
          ? mediaUrl 
          : newMedia.url || mediaUrl,
      };

      // Update or insert media
      if (editingItem) {
        const { error } = await supabase
          .from(tableName)
          .update(mediaData)
          .eq("id", editingItem.id);
        if (error) throw error;
        setMessage("Media item updated successfully");
      } else {
        const { error } = await supabase.from(tableName).insert([mediaData]);
        if (error) throw error;
        setMessage("Media item added successfully");
      }

      // Refresh data
      const { data: updatedGallery } = await supabase.from(tableName).select("*");
      setGallery(updatedGallery || []);

      // Reset form
      setNewMedia({ title: "", description: "", file: null, url: "" });
      setEditingItem(null);
      setIsModalOpen(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteMedia = async (id) => {
    setLoading(true);
    try {
      const tableName = mediaType === 'photo' ? 'gallery_photos' : 'gallery_videos';
      const { error } = await supabase.from(tableName).delete().eq("id", id);
      if (error) throw error;

      setMessage("Media item deleted successfully");
      const { data: updatedGallery } = await supabase.from(tableName).select("*");
      setGallery(updatedGallery || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const MediaModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-full max-w-2xl p-6 bg-white rounded-lg">
          <h2 className="mb-6 text-2xl font-semibold text-blue-950">
            {editingItem ? "Edit Media Item" : "Add New Media Item"}
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-blue-950">
                  Title
                </label>
                <input
                  type="text"
                  value={newMedia.title}
                  onChange={(e) => setNewMedia(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-orange-600 text-gray-900"
                  placeholder="Enter title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-950">
                  Description
                </label>
                <textarea
                  value={newMedia.description}
                  onChange={(e) => setNewMedia(prev => ({ ...prev, description: e.target.value }))}
                  rows = {3}
                  className="w-full px-4 py-2 mt-1 text-gray-900 border rounded-lg focus:ring-2 focus:ring-orange-600"
                  placeholder="Enter description"
                />
              </div>
            </div>

            <div className="space-y-4">
              {mediaType === 'photo' ? (
                <div>
                  <label className="block text-sm font-medium text-blue-950">
                    Image File
                  </label>
                  <div className="flex items-center justify-center w-full mt-1 border-2 border-dashed rounded-lg h-36 hover:border-orange-600">
                    <label className="cursor-pointer">
                      <div className="space-y-1 text-center">
                        <FaImage className="w-8 h-8 mx-auto text-gray-400" />
                        <p className="text-sm text-gray-600">
                          {newMedia.file 
                            ? newMedia.file.name 
                            : "Click to upload image"}
                        </p>
                        <input
                          type="file"
                          onChange={(e) => e.target.files?.[0] && 
                            setNewMedia(prev => ({ ...prev, file: e.target.files[0] }))}
                          accept="image/*"
                          className="hidden"
                        />
                      </div>
                    </label>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-blue-950">
                    Video URL
                  </label>
                  <input
                    type="url"
                    value={newMedia.url}
                    onChange={(e) => setNewMedia(prev => ({ ...prev, url: e.target.value }))}
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-orange-600"
                    placeholder="https://youtube.com/embed/..."
                  />
                </div>
              )}

              <button
                onClick={handleAddOrUpdateMedia}
                disabled={loading}
                className="flex items-center justify-center w-full px-6 py-3 text-white transition-colors bg-orange-600 rounded-lg hover:bg-orange-700"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin" />
                ) : (
                  <>
                    <FaEdit className="mr-2" />
                    {editingItem ? "Update Item" : "Add Item"}
                  </>
                )}
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute p-2 text-gray-500 top-4 right-4 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />

      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mt-20 mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-950 sm:text-4xl">
            Manage {mediaType === 'photo' ? "Photos" : "Videos"}
          </h1>
          
          {/* Media Type Toggle */}
          <div className="flex justify-center gap-4 my-8">
            <button
              onClick={() => setMediaType('photo')}
              className={`px-4 py-2 rounded-lg flex items-center ${
                mediaType === 'photo' 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-gray-400 text-black hover:bg-gray-300'
              }`}
            >
              <FaImage className="mr-2" />
              Photos
            </button>
            <button
              onClick={() => setMediaType('video')}
              className={`px-4 py-2 rounded-lg flex items-center ${
                mediaType === 'video' 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-gray-400 text-black hover:bg-gray-300'
              }`}
            >
              <FaVideo className="mr-2" />
              Videos
            </button>
          </div>

          <div className="mt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center px-6 py-2 text-white bg-orange-600 border rounded-lg hover:bg-orange-700"
            >
              <FaPlus className="mr-2" />
              Add {mediaType === 'photo' ? "Photo" : "Video"}
            </button>
          </div>
        </div>

        {message && <div className="p-4 mb -4 text-green-600 bg-green-100 rounded-lg">{message}</div>}
        {error && <div className="p-4 mb-4 text-red-600 bg-red-100 rounded-lg">{error}</div>}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            gallery.map((item) => (
              <div key={item.id} className="p-4 bg-white rounded-lg shadow-md">
                {mediaType === 'photo' ? (
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="object-cover w-full h-40 rounded-md"
                  />
                ) : (
                  <div className="relative h-40 overflow-hidden rounded-md aspect-video">
                    <iframe
                      src={item.video_url}
                      title={item.title}
                      className="absolute top-0 left-0 w-full h-full"
                      allowFullScreen
                    />
                  </div>
                )}
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-gray-800">{item.description}</p>
                </div>
                <div className="flex mt-4 space-x-2">
                  <button
                    onClick={() => {
                      setNewMedia({
                        title: item.title,
                        description: item.description,
                        url: mediaType === 'video' ? item.video_url : "",
                        file: null
                      });
                      setEditingItem(item);
                      setIsModalOpen(true);
                    }}
                    className="flex items-center justify-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                  >
                    <FaEdit className="mr-2" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteMedia(item.id)}
                    className="flex items-center justify-center px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
                  >
                    <FaTrash className="mr-2" />
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <MediaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ManageGallery;