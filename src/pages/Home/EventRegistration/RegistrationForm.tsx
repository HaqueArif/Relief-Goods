import { rotateRight } from "@/Animation/useAnimation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const RegistrationForm = () => {
  return (
    <motion.div
      variants={rotateRight}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className=" e-Reg-Right-Content"
    >
      <div className="e-Reg-Right-Content-Measurement">
        <h3 className="e-Reg-Right-Content-Heading">
          See our event management tools in action
        </h3>
        <div className="e-Reg-Form-divider">
          <div className="e-Reg-input-divider">
            <div>
              <label htmlFor="firstName">
                First Name <span className="text-red-900">*</span>
              </label>
              <input className="e-Reg-Input" type="text" id="firstName" />
            </div>
            <div>
              <label htmlFor="lastName">
                Last Name <span className="text-red-900">*</span>
              </label>
              <input className="e-Reg-Input" type="text" id="lastName" />
            </div>
          </div>
          <div>
            <label htmlFor="email">
              Work email <span className="text-red-900">*</span>
            </label>
            <input className="e-Reg-Input" type="email" id="email" />
          </div>
          <div className="e-Reg-input-divider">
            <div>
              <label htmlFor="organization">
                Organization <span className="text-red-900">*</span>
              </label>
              <input className="e-Reg-Input" type="text" id="organization" />
            </div>
            <div>
              <label htmlFor="phone">
                Phone <span className="text-red-900">*</span>
              </label>
              <input className="e-Reg-Input" type="text" id="phone" />
            </div>
          </div>
          <div>
            <label htmlFor="country">
              Country <span className="text-red-900">*</span>
            </label>
            <input className="e-Reg-Input" type="select" />
          </div>
          <div className="e-Reg-form-bottom-Contents">
            <input className="mt-1" type="checkbox" />
            <div>
              <p>
                I agree to receive emails from Event 360, Inc. about relevant
                content, products and services. I understand I can manage my
                communication preferences or
                <a href="/">unsubscribe</a> at any time.
              </p>
              <p className="mt-5">
                Please refer to our <a href="">Privacy Policy</a> or
                <a href="/"> Contact Us</a> for more details.
              </p>
            </div>
          </div>
          <Button className="btn-primary">Request a demo</Button>
        </div>
      </div>
    </motion.div>
  );
};

export default RegistrationForm;
