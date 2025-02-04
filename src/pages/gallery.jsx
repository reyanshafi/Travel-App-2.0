'use client';
import React, { useEffect, useState } from 'react';
import supabase from "../../supabaseClient";
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader'; // Import the Loader component
import '../app/globals.css';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        setLoading(true);
        
        // Fetch photos
        const { data: photoData, error: photoError } = await supabase
          .from('gallery_photos')
          .select('*');

        if (photoError) throw photoError;

        // Fetch videos
        const { data: videoData, error: videoError } = await supabase
          .from('gallery_videos')
          .select('*');

        if (videoError) throw videoError;

        setPhotos(photoData);
        setVideos(videoData);
      } catch (err) {
        setError('Failed to load media. Please try again later.');
        console.error('Media fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <Loader /> {/* Replaced loading text with Loader component */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Head>
      <title>Gallery | Suwida Tour & Travels</title>
      </Head>
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 text-center mt-36 bg-gradient-to-br from-blue-300 to-blue-100">
        <h1 className="text-3xl font-bold text-blue-950 md:text-6xl">Gallery</h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-600">
          Explore breathtaking moments captured from our journeys.
        </p>
        <div className="w-32 h-2 mx-auto mt-4 bg-orange-500 rounded-full"></div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center text-blue-950">Photo Gallery</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {photos.map((photo) => (
              <div key={photo.id} className="relative overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={photo.image_url}
                  alt="Gallery"
                  className="object-cover w-full h-64 transition-transform duration-300 ease-in-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center text-blue-950">Video Gallery</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {videos.map((video) => (
              <div key={video.id} className="overflow-hidden rounded-lg shadow-lg aspect-video">
                <iframe
                  className="w-full h-full"
                  src={video.video_url}
                  title="Gallery Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;