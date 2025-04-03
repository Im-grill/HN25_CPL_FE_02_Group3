import React, { useContext } from "react";
import AlertContext, { AlertStatus } from "../../context/AlertContext";

const Alert = () => {
  const alert = useContext(AlertContext);
  if (alert?.alert !== AlertStatus.NONE && alert?.alert == AlertStatus.SUCCESS) {
    return <div role="alert" className="absolute top-20 right-0 rounded-xl border border-gray-100 bg-white p-4">
      <div className="flex items-start gap-4">
        <span className="text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>

        <div className="flex-1">
          <strong className="block font-medium text-gray-900">{alert?.alert}</strong>

          <p className="mt-1 text-sm text-gray-700">{alert?.alertText}</p>
        </div>

        <button className="text-gray-500 transition hover:text-gray-600">
          <span className="sr-only">Dismiss popup</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  } else if (alert?.alertText !== AlertStatus.NONE && alert?.alert == AlertStatus.ERROR) {
    return <div role="alert" className="rounded-sm border-s-4 border-red-500 bg-red-50 p-4">
      <strong className="block font-medium text-red-800">{alert.alert}</strong>

      <p className="mt-2 text-sm text-red-700">
        {alert.alertText}
      </p>
    </div>;
  } else {
    return null
  }
}

export default Alert
