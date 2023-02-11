import React from 'react';

const QusContainer = ({ currentQusData, setCurrentQus }) => {
  return (
    <div className="px-4">
      <div className="flex items-center justify-between px-4 py-2 bg-blue-500 rounded-md">
        <h4 className="text-md font-semibold text-white">
          Qus: {currentQusData?.qusNo}
        </h4>
        <div className="space-x-2">
          <label for="language" className="font-semibold text-white">
            View In:
          </label>
          <select
            name="language"
            id="language"
            className="border border-gray-500 rounded-md p-1 text-gray-700 font-semibold"
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div>
          <h3 className="text-xl my-3 font-semibold text-purple-600 pb-1 border-b border-gray-200">
            Question Instruction
          </h3>
          <p className="text-gray-700 font-semibold text-justify">
            {currentQusData?.questionIns}
          </p>
        </div>
        <div>
          <h3 className="text-xl my-3 font-semibold text-purple-600 pb-1 border-b border-gray-200">
            Question
          </h3>
          <img src={currentQusData?.question} className="w-full h-2/3" alt="" />
          {/* options */}

          <div>
            <fieldset className="font-semibold text-gray-700 space-y-2">
              <legend>Select the correct Answer</legend>

              {currentQusData?.options?.map((option, i) => (
                <div>
                  <input type="radio" name="action" id="track" value="track" />
                  <label for="track"> {option}</label>
                </div>
              ))}
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QusContainer;
