"use client";

import { useState } from "react";

interface Profile {
  name: string;
  email: string;
  bio: string;
  theme: 'light' | 'dark';
  notifications: boolean;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile>({
    name: '',
    email: '',
    bio: '',
    theme: 'light',
    notifications: true
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Profile>(profile);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(formData);
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleEdit = () => {
    setFormData(profile);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">User Profile</h1>
      
      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          Profile updated successfully!
        </div>
      )}
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {!isEditing ? (
          /* Display Mode */
          <div>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-semibold">Profile Information</h2>
              <button
                onClick={handleEdit}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Edit Profile
              </button>
            </div>
            
            {/* Profile Display */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <div className="text-lg text-gray-900">
                  {profile.name || 'Not provided'}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="text-lg text-gray-900">
                  {profile.email || 'Not provided'}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <div className="text-gray-900">
                  {profile.bio || 'No bio provided'}
                </div>
              </div>
              
              <div className="flex gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Theme Preference
                  </label>
                  <div className="text-gray-900 capitalize">
                    {profile.theme}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Notifications
                  </label>
                  <div className="text-gray-900">
                    {profile.notifications ? 'Enabled' : 'Disabled'}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Conditional rendering based on profile completeness */}
            {(!profile.name || !profile.email) && (
              <div className="mt-6 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
                <p className="font-medium">Profile Incomplete</p>
                <p className="text-sm">Please fill out your name and email to complete your profile.</p>
              </div>
            )}
            
            {profile.name && profile.email && (
              <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                <p className="font-medium">Profile Complete!</p>
                <p className="text-sm">Thank you for completing your profile, {profile.name}!</p>
              </div>
            )}
          </div>
        ) : (
          /* Edit Mode */
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Edit Profile</h2>
              <div className="space-x-2">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about yourself..."
                />
              </div>
              
              <div className="flex gap-6">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Theme Preference
                  </label>
                  <select
                    name="theme"
                    value={formData.theme}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                </div>
                
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Settings
                  </label>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="notifications"
                      checked={formData.notifications}
                      onChange={handleInputChange}
                      className="mr-2 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Enable notifications</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}