import React from 'react';

const ExamLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <h2 className="text-center py-5 bg-blue-500 text-2xl font-bold text-white">
          Online Exam
        </h2>
        <div className="grid grid-cols-5">
          <div className="col-span-4">
            {/* section buttons end */}
            <div className="flex overflow-x-auto py-2 px-2 space-x-4">
              <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg">
                All Sections
              </button>
              <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg">
                Physics
              </button>
              <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg">
                Chemistry
              </button>
              <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg">
                Math
              </button>
            </div>
            {/* qus and instruction section */}
            {children}
          </div>
          {/* side bar  */}
          <Sidebar />
        </div>
      </main>
    </>
  );
};

export default ExamLayout;
