// Default Stage
// The Sandwich
import StepOneActive from "@assets/registration/progress-bar-1/step-1/step-1-active.svg";
import StepTwoActive from "@assets/registration/progress-bar-1/step-2/step-2-active.svg";
import StepThreeActive from "@assets/registration/progress-bar-1/step-3/step-3-active.svg";
import StepFourInactive from "@assets/registration/progress-bar-1/step-4/step-4-inactive.svg";
import StepFiveInactive from "@assets/registration/progress-bar-1/step-5/step-5-inactive.svg";
// The Number Progress
import PageOneActive from "@assets/registration/progress-bar-2/step-1/step-1-active.svg";
import PageTwoActive from "@assets/registration/progress-bar-2/step-2/step-2-active.svg";
import PageThreeActive from "@assets/registration/progress-bar-2/step-3/step-3-active.svg";
import PageFourInactive from "@assets/registration/progress-bar-2/step-4/step-4-inactive.svg";
import PageFiveInactive from "@assets/registration/progress-bar-2/step-5/step-5-inactive.svg";

import Connector from "@assets/registration/progress-bar-2/progress-bar-connector/inactive.svg";
import ConnectorActive from "@assets/registration/progress-bar-2/progress-bar-connector/active.svg";

import Underline from "@assets/registration/progress-underline/underline.svg";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// React-icons
import { IoIosRadioButtonOff } from "react-icons/io";
import { IoFolderSharp, IoRadioButtonOn } from "react-icons/io5";
import List from "@components/forms/upload-list";
import FileUploadButton from "@components/forms/upload";

const options = [
  "Certified Organic",
  "Fair Labor Practices and Community Benefits (Certified)",
  "Animal Welfare Approved (AWA)",
  "Demeter Bio-dynamic Certifications",
  "Certified Humane",
  "Certified Grass-fed",
  "Other",
];

export default function ProducerPage3() {
  // always pull the windows to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const labelClass = "text-white text-2xl font-manrope font-bold";
  const inputClass = "w-full bg-white rounded-lg px-2 py-2 mt-2";

  // You can check if the user has typed information about COMPANY
  // You can check if the user has typed proper COMPANY
  const [company, setCompany] = useState("");
  const [companyError, setCompanyError] = useState("");

  const validateCompany = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 5) {
      setCompanyError("Please provide us a valid company type.");
      return false;
    }

    setCompanyError("");
    return true;
  };

  // Multiple Selection
  const inputTitle = "text-white text-xl font-manrope font-bold";
  const inputField = "w-full bg-white p-4 rounded-lg";

  const [checkedOptions, setCheckedOptions] = useState(
    Array(options.length).fill(false)
  );

  const handleOptionClick = (index: number) => {
    const newCheckedOptions = [...checkedOptions];
    newCheckedOptions[index] = !newCheckedOptions[index];
    setCheckedOptions(newCheckedOptions);
  };

  // File Uploader
  // File Upload
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (file: File) => {
    setUploadedFiles((prevFiles) => [...prevFiles, file]);
  };

  // You can check if the user has typed information about PRACTICE
  // You can check if the user has typed proper PRACTICE
  const [practice, setPractice] = useState("");
  const [practiceError, setPracticeError] = useState("");

  const validatePractice = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length < 5) {
      setPracticeError(
        "Please provide us more information regarding what other types of products you have made in the past."
      );
      return false;
    }

    setPracticeError("");
    return true;
  };

  // You can check if the user has typed information about VISIBLE MINORITY
  // You can check if the user has typed proper VISIBLE MINORITY
  const [minority, setMinority] = useState("");
  const [minorityError, setMinorityError] = useState("");

  const validateMinority = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length < 5) {
      setMinorityError(
        "Please let us know if you are a part of visible minority."
      );
      return false;
    }

    setMinorityError("");
    return true;
  };
  return (
    <div className="py-20 bg-[#345EC9]">
      <div className="border border-white w-[874px] py-8 mx-auto">
        <h1 className="text-white text-5xl font-manrope font-bold text-center">
          Your Values
        </h1>
        {/* the below is for the sandwich */}
        <div className="flex justify-between px-28 items-end py-4">
          <img src={StepOneActive} alt="Step One Active" />
          <img src={StepTwoActive} alt="Step Two Active" />
          <img src={StepThreeActive} alt="Step Three Active" />
          <img src={StepFourInactive} alt="Step Four Inactive" />
          <img src={StepFiveInactive} alt="Step Five Inactive" />
        </div>
        {/* the below is for the number progress bar */}
        <div className="flex justify-center pb-3">
          <img src={PageOneActive} alt="Page One Active" />
          <img src={ConnectorActive} alt="Connector" />
          <img src={PageTwoActive} alt="Page Two Active" />
          <img src={ConnectorActive} alt="Connector" />
          <img src={PageThreeActive} alt="Page Three Active" />
          <img src={Connector} alt="Connector" />
          <img src={PageFourInactive} alt="Page Four Inactive" />
          <img src={Connector} alt="Connector" />
          <img src={PageFiveInactive} alt="Page Five Inactive" />
        </div>
        <div className="flex justify-between px-32">
          <p className="text-white text-sm font-manrope font-normal">
            About You
          </p>
          <p className="text-white text-sm font-manrope font-normal pl-5">
            Your Business
          </p>
          <p className="text-white text-sm font-manrope font-normal pl-5">
            Your Values
          </p>
          <p className="text-[#ffffff80] text-sm font-manrope font-normal pl-2">
            How You Found Us
          </p>
          <p className="text-[#ffffff80] text-sm font-manrope font-normal -mr-2">
            Completed
          </p>
        </div>
        <img src={Underline} alt="Underline" width={98} className="mx-auto" />
      </div>
      <div className="border border-white mx-auto w-[874px] px-48 py-20">
        <h1 className={labelClass}>Company Type &#42;</h1>
        <input
          name="address"
          type="text"
          className={inputClass}
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
            validateCompany(e);
          }}
          placeholder="i.e. Farmstead, B Corp, LLC, Partnership, etc."
          required
        />
        {companyError && <p className="mb-8 text-amber-500">{companyError}</p>}
        <section>
          <div className="mt-8">
            <h3 className={inputTitle}>What types of products do you sell?</h3>
            <span className="text-base text-white font-manrope font-normal">
              (Select all that apply)
            </span>
          </div>
          <div className="mt-4">
            {options.map((option, index) => (
              <div key={index} onClick={() => handleOptionClick(index)}>
                {checkedOptions[index] ? (
                  <>
                    <div className="flex gap-2 items-center my-5">
                      <IoRadioButtonOn className="text-white rounded text-xl -ml-1" />
                      <span className="text-white text-base font-manrope font-normal">
                        {option}
                      </span>
                    </div>
                    {index === options.length - 1 && (
                      <input type="text" className={inputField} />
                    )}
                  </>
                ) : (
                  <div className="flex gap-2 items-center my-5">
                    <IoIosRadioButtonOff className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      {option}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        <section>
          <div>
            <h4 className="text-white text-xl font-manrope font-semibold pb-2">
              Please attach any certificate that's relevant &#42;
            </h4>
            <div className="border-dashed border-white border">
              <IoFolderSharp className="text-5xl text-[#B5B3B3] mx-auto mt-2" />
              <FileUploadButton onFileUpload={handleFileUpload} />
            </div>
            <List files={uploadedFiles} />
          </div>
        </section>
        <section>
          <h1 className={labelClass}>
            Are there any practices you have that are not certified but still
            contribute to an ethical, equitable, and/or environmentally
            sustainable food system? If so, please let us know! &#42;
          </h1>
          <textarea
            name="address"
            className={`${inputClass} h-full`}
            value={practice}
            onChange={(e) => {
              setPractice(e.target.value);
              validatePractice(e);
            }}
            placeholder="Please let us know of any other practice you hold."
            required
          />
          {practiceError && (
            <p className="mb-8 text-amber-500">{practiceError}</p>
          )}
        </section>
        <section>
          <h1 className={`${labelClass} mt-8`}>
            In the small, values-based food production economy, certain groups
            are underrepresented, in terms of race, ethnicity, gender identity,
            sexual orientation, physical ability, and/or immigration status. Are
            you a member of an underrepresented group? If so, please let us
            know! &#42;
          </h1>
          <textarea
            name="address"
            className={`${inputClass} h-full`}
            value={minority}
            onChange={(e) => {
              setMinority(e.target.value);
              validateMinority(e);
            }}
            placeholder="Please let us know if you are a visible minority."
            required
          />
          {minorityError && (
            <p className="mb-8 text-amber-500">{minorityError}</p>
          )}
        </section>
        <div className="mt-9">
          <Link to="/producer-page-2">
            <button className="text-white text-base font-manrope font-medium rounded-3xl border border-white px-9 py-3 mr-5">
              Previous
            </button>
          </Link>
          <Link to="/producer-page-4">
            <button className="text-[#345EC9] text-base font-manrope font-semibold bg-white px-11 py-3 rounded-3xl">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
