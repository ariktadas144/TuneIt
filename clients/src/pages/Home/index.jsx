import React from 'react';
import Header from '../../components/common/Header';

const Home = () => {
  return (
    <div className="flex flex-col gap-[49px] sm:gap-[73px] md:gap-[98px] justify-start items-center w-full bg-global-1">
      {/* Header Section */}
      <Header />
      
      {/* Main Content */}
      <div className="flex flex-col justify-start items-center w-full max-w-[1320px] mx-auto px-[30px] sm:px-[45px] md:px-[60px] lg:px-[8px]">
        {/* Hero Section */}
        <div className="flex flex-col justify-start items-center w-full">
          {/* Main Content with Integrated Graphics */}
          <div className="flex flex-col justify-start items-start w-full">
            {/* Title Row with Cassette */}
            <div className="flex flex-row justify-start items-center w-full gap-8 mb-8">
              <h2 className="text-[85px] font-poppins font-semibold leading-[102px] text-left bg-[linear-gradient(48deg,#c7b6fa_0%,#8ca5f0_100%)] bg-clip-text text-transparent flex-1">
                Let your mood play the next track : )
              </h2>
              <div className="flex-shrink-0">
                <img 
                  src="/images/img_frame_indigo_300.svg" 
                  className="w-[220px] sm:w-[280px] md:w-[340px] h-[160px] sm:h-[200px] md:h-[245px]" 
                  alt="Cassette Player" 
                />
              </div>
            </div>
            
            {/* Description Row with Waveform */}
            <div className="flex flex-row justify-start items-end w-full gap-8">
              <p className="text-[28px] font-lato font-normal leading-[34px] text-left text-global-2 flex-1">
                Create personalized playlists based on your mood and the weather around you. Whether it is a rainy day or a sunny vibe, match your feelings with the perfect sound
              </p>
              <div className="flex-shrink-0">
                <img 
                  src="/images/img_frame_purple_200.png" 
                  className="w-[240px] sm:w-[300px] md:w-[360px] h-[70px] sm:h-[90px] md:h-[110px]" 
                  alt="Audio Waveform" 
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Get Started Button */}
        <button className="text-[18px] sm:text-[27px] md:text-[36px] font-poppins font-medium leading-[27px] sm:leading-[40px] md:leading-[54px] text-left text-global-1 bg-[linear-gradient(90deg,#9f84f1_0%,#6083ee_50%,#9f84f1_100%)] rounded-[24px] px-[17px] sm:px-[25px] md:px-[34px] py-[3px] sm:py-[4px] md:py-[6px] mt-[36px] sm:mt-[54px] md:mt-[72px] hover:opacity-90 transition-opacity">
          GET STARTED
        </button>
        
        {/* Features Section */}
        <div className="flex flex-col justify-start items-center w-full max-w-[1320px] mt-[58px] sm:mt-[87px] md:mt-[116px]">
          <div className="flex flex-col gap-[40px] sm:gap-[60px] md:gap-[80px] justify-start items-center w-full">
            <h3 className="text-[32px] sm:text-[48px] md:text-[64px] font-poppins font-semibold leading-[48px] sm:leading-[72px] md:leading-[96px] text-center text-global-2 w-auto">
              Features
            </h3>
            
            {/* Features Layout - Redesigned for Figma-like precision */}
            <div className="relative w-full max-w-[900px] h-[400px] sm:h-[500px] md:h-[600px] mx-auto">
              {/* Top Row Features */}
              <div className="absolute top-0 left-0 right-0 flex justify-between items-start">
                {/* Feature 1 - Location with Music Extension */}
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-global-3 rounded-[44px] sm:rounded-[60px] md:rounded-[76px] p-[16px] sm:p-[20px] md:p-[24px] shadow-lg">
                    <img 
                      src="/images/img_group_9.svg" 
                      className="w-[50px] sm:w-[65px] md:w-[80px] h-[46px] sm:h-[60px] md:h-[74px]" 
                      alt="Location Feature" 
                    />
                  </div>
                  <img 
                    src="/images/img_frame_1.svg" 
                    className="w-[100px] sm:w-[130px] md:w-[160px] h-[75px] sm:h-[98px] md:h-[120px] transform -translate-x-2" 
                    alt="Music Extension" 
                  />
                </div>
                
                {/* Feature 2 - Spotify with Music Extension */}
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-global-2 rounded-[44px] sm:rounded-[60px] md:rounded-[76px] p-[12px] sm:p-[16px] md:p-[20px] shadow-lg">
                    <img 
                      src="/images/img_frame_green_400.svg" 
                      className="w-[60px] sm:w-[80px] md:w-[95px] h-[60px] sm:h-[80px] md:h-[95px]" 
                      alt="Spotify Integration" 
                    />
                  </div>
                  <img 
                    src="/images/img_frame_1.svg" 
                    className="w-[100px] sm:w-[130px] md:w-[160px] h-[75px] sm:h-[98px] md:h-[120px] transform scale-x-[-1] translate-x-2" 
                    alt="Music Extension" 
                  />
                </div>
              </div>
              
              {/* Center Decorative Elements */}
              <div className="absolute top-[140px] sm:top-[180px] md:top-[220px] left-1/2 transform -translate-x-1/2 flex gap-[120px] sm:gap-[160px] md:gap-[200px]">
                <img 
                  src="/images/img_frame_gray_50.svg" 
                  className="w-[60px] sm:w-[80px] md:w-[95px] h-[60px] sm:h-[80px] md:h-[95px] opacity-40" 
                  alt="Decorative" 
                />
                <img 
                  src="/images/img_frame_gray_50.svg" 
                  className="w-[60px] sm:w-[80px] md:w-[95px] h-[60px] sm:h-[80px] md:h-[95px] opacity-40" 
                  alt="Decorative" 
                />
              </div>
              
              {/* Middle Row Features */}
              <div className="absolute top-[200px] sm:top-[260px] md:top-[320px] left-0 right-0 flex justify-center gap-[120px] sm:gap-[160px] md:gap-[200px]">
                {/* Feature 3 - Weather */}
                <div className="flex flex-col items-center">
                  <div className="bg-[linear-gradient(90deg,#c7b7fa_0%,#8ca5f0_100%)] rounded-[44px] sm:rounded-[60px] md:rounded-[76px] p-[12px] sm:p-[16px] md:p-[20px] shadow-lg">
                    <img 
                      src="/images/img_frame_blue_400.svg" 
                      className="w-[55px] sm:w-[73px] md:w-[87px] h-[55px] sm:h-[73px] md:h-[87px]" 
                      alt="Weather Feature" 
                    />
                  </div>
                </div>
                
                {/* Feature 4 - Social */}
                <div className="flex flex-col items-center">
                  <div className="bg-[linear-gradient(90deg,#8ca5f0_0%,#da99bf_100%)] rounded-[44px] sm:rounded-[60px] md:rounded-[76px] p-[12px] sm:p-[16px] md:p-[20px] shadow-lg">
                    <img 
                      src="/images/img_frame_indigo_50.png" 
                      className="w-[65px] sm:w-[85px] md:w-[100px] h-[55px] sm:h-[73px] md:h-[87px]" 
                      alt="Social Feature" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Bottom Row Features */}
              <div className="absolute bottom-0 right-0">
                {/* Feature 5 - Community */}
                <div className="flex flex-col items-center">
                  <div className="bg-global-5 rounded-[44px] sm:rounded-[60px] md:rounded-[76px] p-[18px] sm:p-[22px] md:p-[26px] shadow-lg">
                    <img 
                      src="/images/img_frame_deep_orange_200.svg" 
                      className="w-[70px] sm:w-[90px] md:w-[110px] h-[38px] sm:h-[50px] md:h-[62px]" 
                      alt="Community Feature" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Bottom Left Decorative Element */}
              <div className="absolute bottom-[40px] sm:bottom-[60px] md:bottom-[80px] left-[60px] sm:left-[80px] md:left-[100px]">
                <div className="w-[90px] sm:w-[130px] md:w-[170px] h-[50px] sm:h-[70px] md:h-[90px] bg-global-4 rounded-[12px] shadow-md opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* About Us Section */}
        <h4 className="text-[32px] sm:text-[48px] md:text-[64px] font-poppins font-semibold leading-[48px] sm:leading-[72px] md:leading-[96px] text-left text-global-2 w-auto self-start mt-[44px] sm:mt-[66px] md:mt-[88px]">
          About us
        </h4>
        
        <p className="text-[16px] sm:text-[24px] md:text-[32px] font-poppins font-normal leading-[24px] sm:leading-[36px] md:leading-[48px] text-left text-global-2 w-[96%] max-w-[1320px] mt-[9px] sm:mt-[13px] md:mt-[18px]">
          Let Your Mood, Weather, and Location Pick the Music<br />
          At TuneIt, we believe music is not just something you listen to — it is something you feel. Yet in a world of infinite playlists and recommendations, finding the perfect vibe can feel like a chore.<br />
          That is where TuneIt comes in.<br />
          We use AI to take the guesswork out of picking your next song. Whether you are euphoric on a sunny Berlin morning or feeling introspective during a rainy night in Mumbai, TuneIt blends your emotion, environment, and culture to generate a playlist that just fits.
        </p>
        
        {/* Team Section */}
        <h5 className="text-[32px] sm:text-[48px] md:text-[64px] font-inria font-bold leading-[38px] sm:text-[57px] md:leading-[77px] text-left text-global-2 w-auto self-start mt-[76px] sm:mt-[114px] md:mt-[152px]">
          Team
        </h5>
        
        {/* Team Members */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-[94%] mt-[38px] sm:mt-[57px] md:mt-[76px] gap-4 sm:gap-0">
          <div className="w-[139px] sm:w-[208px] md:w-[278px] h-[139px] sm:h-[208px] md:h-[278px] bg-global-4 rounded-[69px] sm:rounded-[104px] md:rounded-[139px]"></div>
          <div className="w-[139px] sm:w-[208px] md:w-[278px] h-[139px] sm:h-[208px] md:h-[278px] bg-global-4 rounded-[69px] sm:rounded-[104px] md:rounded-[139px]"></div>
          <div className="w-[139px] sm:w-[208px] md:w-[278px] h-[139px] sm:h-[208px] md:h-[278px] bg-global-4 rounded-[69px] sm:rounded-[104px] md:rounded-[139px]"></div>
          <div className="w-[139px] sm:w-[208px] md:w-[278px] h-[139px] sm:h-[208px] md:h-[278px] bg-global-4 rounded-[69px] sm:rounded-[104px] md:rounded-[139px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;