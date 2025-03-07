// import React, { useRef } from "react";
// import "./Contacts.css";
// import emailjs from "emailjs-com";

// const Contacts = () => {

//     const form = useRef();

//     const sendEmail = (e) => {
//       e.preventDefault();
  
//       emailjs
//         .sendForm(
//           "service_zfyowoq",    // Replace with your EmailJS service ID
//           "template_03ffpb9",   // Replace with your EmailJS template ID
//           form.current,
//           "UZ6TZJenle7080aKe"        // Replace with your EmailJS user ID
//         )
//         .then(
//           (result) => {
//             console.log(result.text);
//             alert("Message sent successfully!");
//           },
//           (error) => {
//             console.log(error.text);
//             alert("An error occurred, please try again.");
//           }
//         );
//     };

//     return (
//         <section className="contact-section" id="contacts">
//             <div className="title-wrapper">
//                 <h2 className="heading">CONTACT</h2>
//                 <div className="galaxy-line"></div>
//                 <div className="particle particle-1"></div>
//                 <div className="particle particle-2"></div>
//                 <div className="particle particle-3"></div>
//                 <div className="particle particle-4"></div>
//             </div>

//             <div className="contact-container">
//                 {/* Left Column: Contact Info */}
//                 <div className="contact-info">
//                     {/* <h3 className="sub-heading">Drop Me a Message</h3>
//                     <p className="info-text">
//                         Comm psum is simply dummy text of the printing and typesetting industry. Learn psum has been the industry's.
//                     </p> */}

//                     {/* Contact Details */}
//                     <div className="contact-details">
//                         <div className="contact-item">
//                             <div className="icon">
//                                 <i className='bx bx-map'></i>
//                             </div>
//                             <div className="info">
//                                 <h3>Location:</h3>
//                                 <p>Hyderabad, Telangana, India</p>
//                             </div>
//                         </div>

//                         <div className="contact-item">
//                             <div className="icon">
//                                 <i className='bx bx-envelope'></i>
//                             </div>
//                             <div className="info">
//                                 <h3>Email:</h3>
//                                 <p>tarunbehera10@gmail.com</p>
//                             </div>
//                         </div>

//                         <div className="contact-item">
//                             <div className="icon">
//                                 <i className='bx bx-phone-call'></i>
//                             </div>
//                             <div className="info">
//                                 <h3>Call:</h3>
//                                 <p>+91-6281978047</p>
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//                 {/* Right Column: Contact Form */}
//                 <div className="contact-form">
//                     <form className="form" ref= {form} 
//                         onSubmit={sendEmail}>
//                         {/* Name and Email in a row */}
//                         <div className="form-row">
//                             <input type="text" placeholder="Name" required />
//                             <input type="email" placeholder="Email" required />
//                         </div>
//                         <textarea placeholder="Message" rows="5"></textarea>
//                         <button type="submit" className="btn">Send</button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contacts;






import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Toaster, toast } from "sonner";
import "./Contacts.css";


const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zfyowoq",    // Replace w  ur EmailJS service ID
          "template_03ffpb9", // Replace w  ur EmailJS template ID
          form.current,
          "UZ6TZJenle7080aKe" // Replace w  ur EmailJS public key
      )
      .then(
        (result) => {
          // Show success toast
          toast.success("Message sent successfully!");
        },
        (error) => {
          // Show error toast
          toast.error("An error occurred, please try again.");
        }
      );
    // Reset the form fields (Optional)
    e.target.reset();
  };

  return (
    <section className="contact-section" id="contacts">
      {/* Sonner's Toaster should be rendered once in your app, often at the top level.
          But for simplicity, we're including it here. */}
      <Toaster position="top-right" richColors />

      <div className="title-wrapper">
        <h2 className="heading">CONTACT</h2>
        <div className="galaxy-line"></div>
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>

      <div className="contact-container">
        {/* Left Column: Contact Info */}
        <div className="contact-info">
          <div className="contact-details">
            <div className="contact-item">
              <div className="icon">
                <i className="bx bx-map"></i>
              </div>
              <div className="info">
                <h3>Location:</h3>
                <p>Hyderabad, Telangana, India</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">
                <i className="bx bx-envelope"></i>
              </div>
              <div className="info">
                <h3>Email:</h3>
                <p>tarunbehera10@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">
                <i className="bx bx-phone-call"></i>
              </div>
              <div className="info">
                <h3>Call:</h3>
                <p>+91-6281978047</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form">
          <form className="form" ref={form} onSubmit={sendEmail}>
            <div className="form-row">
              <input type="text" name="from_name" placeholder="Name" required />
              <input type="email" name="reply_to" placeholder="Email" required />
            </div>
            <textarea name="message" placeholder="Message" rows="5" required />
            <button type="submit" className="btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;


