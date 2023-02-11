import Head from 'next/head';
import { Inter } from '@next/font/google';

import QusContainer from '../components/QusContainer/QusContainer';
import Sidebar from '../components/Sidebar/Sidebar';
import qusData from '../utilities/qusData';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

function Home() {
  const [currentQus, setCurrentQus] = useState(1);
  const [currentQusData, setCurrentQusData] = useState('');

  useEffect(() => {
    const currentQusData = qusData.find((q) => q?.qusNo === currentQus);

    setCurrentQusData(currentQusData);
  }, [currentQus, qusData]);

  if (currentQus > qusData.length) {
    return (
      <div className="grid place-content-center h-screen text-white  font-semibold">
        <h2>You have viewed all Questions</h2>
        <button
          onClick={() => setCurrentQus(1)}
          className="px-6 py-2 bg-blue-500 rounded-lg capitalize"
        >
          GO to Question 1
        </button>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
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
            <div className="flex overflow-x-auto py-4 px-4 space-x-4">
              <button className="py-1 w-40  bg-blue-500 text-white font-semibold rounded-lg">
                All Sections
              </button>
              <button className="py-1 w-40  bg-blue-500 text-white font-semibold rounded-lg">
                Physics
              </button>
              <button className="py-1 w-40 bg-blue-500 text-white font-semibold rounded-lg">
                Chemistry
              </button>
              <button className="py-1 w-40 bg-blue-500 text-white font-semibold rounded-lg">
                Math
              </button>
            </div>
            {/* qus and instruction section */}
            <QusContainer currentQusData={currentQusData} />
          </div>
          {/* side bar  */}
          <Sidebar setCurrentQus={setCurrentQus} />
        </div>
        <div className="flex overflow-x-auto py-2 px-2 space-x-4">
          <button className="py-1 w-40  bg-blue-500 text-white font-semibold rounded-lg">
            Clear Response
          </button>
          <button className="py-1 w-40  bg-blue-500 text-white font-semibold rounded-lg">
            Review
          </button>
          <button className="py-1 w-40  bg-blue-500 text-white font-semibold rounded-lg">
            Dump
          </button>
          <button className="py-1 w-40  bg-blue-500 text-white font-semibold rounded-lg">
            Previous
          </button>
          <button
            onClick={() => setCurrentQus((prev) => prev + 1)}
            className="py-1 w-40  bg-blue-500 text-white font-semibold rounded-lg"
          >
            Next
          </button>
        </div>
      </main>
    </>
  );
}

export default Home;
