import React, { useState } from 'react';

const Desktop2 = () => {
  const [activeTab, setActiveTab] = useState(null);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Type the Vibe':
        return (
          <div className="bg-[#D9D9D90D] p-6 rounded-xl max-w-[300px] w-full">
            <h2 className="mb-2 text-lg font-medium">Type the vibe</h2>
            <textarea
              className="w-full h-24 p-3 rounded-md text-black resize-none"
              placeholder="Describe how you're feeling..."
            />
            <div className="grid grid-cols-2 gap-3 mt-4">
              {['melancholic', "I'm feeling great", 'supercharged', "I'm feeling meh"].map((vibe) => (
                <button
                  key={vibe}
                  className="bg-white text-black rounded-full px-4 py-1 text-sm"
                >
                  {vibe}
                </button>
              ))}
            </div>
          </div>
        );

      case 'Pick an emoticon':
        return (
          <div className="bg-[#D9D9D90D] p-6 rounded-xl max-w-[300px] w-full text-center">
            <h2 className="mb-2 text-lg font-medium">Pick an emoticon</h2>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {['😄', '😔', '😡', '😎', '🥳', '😭', '😐', '🤯'].map((emoji, i) => (
                <button
                  key={i}
                  className="text-xl hover:scale-110 transition-transform"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        );

      case 'Feel the forecast':
        return (
          <div className="bg-[#D9D9D90D] p-6 rounded-xl max-w-xs w-full text-center">
            <h2 className="mb-2 text-lg font-medium">Feel the forecast</h2>
            <input
              type="text"
              placeholder="Enter your location"
              className="w-full p-2 rounded-md text-black"
            />
            <div className="mt-4">
              <div className="w-full h-[100px] bg-white text-black flex items-center justify-center rounded-md">
                gif
              </div>
            </div>
          </div>
        );

      case 'Mirror your mood':
        return (
          <div className="bg-[#D9D9D90D] p-6 rounded-xl max-w-xs w-full text-center">
            <h2 className="mb-2 text-lg font-medium">Mirror your mood</h2>
            <div className="w-full h-[140px] bg-[#CDBBFC] flex items-center justify-center rounded-md cursor-pointer">
              <img
                src="/images/img_placeholder_image.svg"
                alt="Upload Mood"
                className="w-10 h-10 opacity-50"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0A1C] text-white font-poppins px-4 py-8">
      {/* Top Navigation */}
      <div className="flex justify-end gap-6 text-sm md:text-base font-medium pr-6 mb-8">
        <a href="#team" className="hover:underline">Team</a>
        <a href="#about" className="hover:underline">About us</a>
        <a href="#features" className="hover:underline">Features</a>
      </div>

      {/* Title and Tabs */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-semibold mb-4">
          Your vibe’s got four doors,<br />
          Open one and let the beats pour in.
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {['Type the Vibe', 'Pick an emoticon', 'Feel the forecast', 'Mirror your mood'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`border rounded-full px-6 py-2 text-sm transition-all ${
                activeTab === tab
                  ? 'bg-white text-black font-semibold'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Center Wave */}
      <div className="flex justify-center mb-12">
        <img src="/images/img_frame_purple_200.png" alt="Wave" className="max-w-full h-[60px]" />
      </div>

      {/* Selected Tab Content */}
      <div className="flex justify-center mb-12">
        {renderTabContent()}
      </div>

      {/* Generate Playlist Button - Only when tab is selected */}
      {activeTab && (
        <div className="flex justify-center mt-8">
          <button className="bg-[#CDBBFC] text-black px-6 py-3 rounded-xl text-lg font-semibold hover:opacity-80 transition-all">
            Generate playlist
          </button>
        </div>
      )}
    </div>
  );
};

export default Desktop2;
