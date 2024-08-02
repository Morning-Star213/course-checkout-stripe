"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const sendEmail = async () => {
    const templateParams = {
      name,
      email,
      subject,
      message,
    };

    setSubmitting(true);
    console.log(Date.now());
    emailjs
      .send("service_ruyxl4p", "template_18e4t3o", templateParams, {
        publicKey: "a_AbLTzDBSTpdnbZE",
      })
      .then(
        () => {
          toast.success("Successfully sent");
          setSubmitting(false);
        },
        (error) => {
          toast.error("Failed to send mail");
          setSubmitting(false);
        }
      );
  };

  return (
    <div className="my-6">
      <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-[1440px] bg-white rounded-md text-[#333]">
        <div>
          <h2 className="mb-6">Contact Us</h2>
          <p className="text-sm text-gray-400 mt-3">
            Have some big idea or brand to develop and need help? Then reach out
            we&apos;d love to hear about your project and provide help.
          </p>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Email</h2>
            <ul className="mt-3">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 479.058 479.058"
                  >
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                <a
                  target="blank"
                  href="mailto:contactus@gmail.com"
                  className="text-gray-400 text-sm ml-3"
                >
                  <small className="block">Mail</small>
                  <strong>contactus@gmail.com</strong>
                </a>
              </li>
              <li className="flex items-center mt-6">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28px"
                    height="28px"
                    viewBox="0 0 64 64"
                    id="phone"
                  >
                    <path
                      fill="#007bff"
                      d="M48.648 53.335a1.5 1.5 0 0 1-.814-2.761A12.083 12.083 0 0 0 51.362 47c.863-1.311 1.159-2.372.882-3.156-.563-1.594-3.594-2.745-6.171-3.57a6.477 6.477 0 0 0-6.586 1.593l-.976.977a1.5 1.5 0 0 1-.627.376c-.67.2-4.347.864-11.155-5.945a1.5 1.5 0 1 1 2.121-2.125c4.466 4.467 7.08 5.095 7.94 5.168l.576-.576a9.478 9.478 0 0 1 9.621-2.33c3.365 1.078 7.041 2.474 8.085 5.428.607 1.715.2 3.668-1.2 5.8a15.1 15.1 0 0 1-4.411 4.46 1.5 1.5 0 0 1-.813.235zm-7.207 2.012c-6.866 0-14.749-3.97-21.783-11.005a1.5 1.5 0 1 1 2.121-2.121c6.638 6.639 14.27 10.412 20.39 10.108a1.48 1.48 0 0 1 1.574 1.422 1.5 1.5 0 0 1-1.422 1.574c-.291.014-.585.022-.88.022z"
                    ></path>
                    <path
                      fill="#007bff"
                      d="M20.718 44.782a1.494 1.494 0 0 1-1.06-.44C12.09 36.775 8.008 27.989 8.739 20.84a14.232 14.232 0 0 1 6.617-10.71c2.137-1.4 4.09-1.807 5.8-1.2 2.954 1.044 4.351 4.72 5.428 8.085a9.471 9.471 0 0 1-2.33 9.621l-.591.592c.072.773.655 3.4 5.183 7.924a1.5 1.5 0 0 1-2.121 2.121c-6.808-6.807-6.146-10.486-5.945-11.154a1.484 1.484 0 0 1 .376-.627l.977-.977a6.482 6.482 0 0 0 1.593-6.585c-.825-2.578-1.976-5.609-3.569-6.172-.785-.277-1.847.019-3.157.881a11.18 11.18 0 0 0-5.28 8.509c-.641 6.26 3.118 14.139 10.055 21.075a1.5 1.5 0 0 1-1.061 2.561Z"
                    ></path>
                  </svg>
                </div>
                <a
                  target="blank"
                  href="tel:2348101234567"
                  className="text-gray-400 text-sm ml-3"
                >
                  <small className="block">Phone</small>
                  <strong>+1348101234</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Socials</h2>
            <ul className="flex mt-3 space-x-4">
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                      data-original="#000000"
                    />
                  </svg>
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 511 512"
                  >
                    <path
                      d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                      data-original="#000000"
                    />
                  </svg>
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form className="ml-auo space-y-4">
          <input
            type="text"
            value={name}
            placeholder="Name"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="Email"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            value={subject}
            type="text"
            placeholder="Subject"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            value={message}
            placeholder="Message"
            rows={6}
            className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="button"
            className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full disabled:bg-blue-300"
            disabled={isSubmitting}
            onClick={sendEmail}
          >
            {isSubmitting ? "Sending" : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
