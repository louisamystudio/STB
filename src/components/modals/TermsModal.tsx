import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="mb-2">
      <button
        onClick={onToggle}
        className="w-full bg-[#f5f5f5] text-[#333333] px-5 py-4 text-left text-lg font-bold cursor-pointer rounded-lg flex justify-between items-center"
      >
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      <AnimatePresence initial={false} mode="wait">
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="bg-[#fafafa] p-4 rounded-lg mt-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const TermsModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [verificationData, setVerificationData] = useState<{code: string; expiresAt: Date}>({ code: '', expiresAt: new Date() });
  
  const CODE_EXPIRY_MINUTES = 10;

  const generateVerificationCode = () => ({
    code: Math.floor(100000 + Math.random() * 900000).toString(),
    expiresAt: new Date(Date.now() + CODE_EXPIRY_MINUTES * 60 * 1000)
  });

  const handleSendVerification = async () => {
    setEmailError('');
    setSuccessMessage('');

    if (!email) {
      setEmailError("Please enter your email address");
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    const newVerificationData = generateVerificationCode();
    setVerificationData(newVerificationData);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          code: newVerificationData.code
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send verification code');
      }

      setVerificationSent(true);
      setSuccessMessage('Verification code sent successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      setVerificationSent(false);
      console.error('Verification error:', {
        error: error instanceof Error ? error.message : String(error),
        timestamp: new Date().toISOString(),
        email
      });
      setEmailError(error instanceof Error ? error.message : 'Error sending verification code. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAcceptTerms = async () => {
    setEmailError('');
    setSuccessMessage('');

    if (!email || !confirmationCode) {
      setEmailError("Please fill in all required fields");
      return;
    }

    if (!verificationData.code) {
      setEmailError("Please request a new verification code");
      return;
    }
    if (!confirmationCode.match(/^\d{6}$/)) {
      setEmailError("Please enter a valid 6-digit verification code");
      return;
    }

    setIsSubmitting(true);
    try {
      if (new Date() > verificationData.expiresAt) {
        setEmailError("Verification code has expired. Please request a new one.");
        return;
      }

      if (confirmationCode !== verificationData.code) {
        setEmailError("Invalid verification code. Please try again.");
        return;
      }

      const response = await fetch('/api/verify-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          code: verificationData.code
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Verification successful!');
        await sendFormattedProposal(email, confirmationCode);
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        setEmailError(data.error || "Invalid verification code. Please try again.");
      }
    } catch (error) {
      console.error('Verification error:', error);
      setEmailError("Error processing your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendFormattedProposal = async (email: string, code: string) => {
    console.log(`Sending proposal to ${email} with code ${code}`);
    return new Promise(resolve => setTimeout(resolve, 1000));
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#333333]">Terms of Agreement</h2>
            <button onClick={onClose} className="text-2xl text-[#333333]">&times;</button>
          </div>

          <div className="space-y-4">
            <AccordionItem
              id="scope"
              title="1. Scope of Services"
              isOpen={openAccordionId === "scope"}
              onToggle={() =>
                setOpenAccordionId(openAccordionId === "scope" ? null : "scope")
              }
            >
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li>On-site laser scanning of specified areas</li>
                <li>Point cloud data processing and registration</li>
                <li>BIM model creation at agreed-upon LOD</li>
                <li>Quality control and validation</li>
                <li>Delivery in specified file formats</li>
                <li>Two rounds of revisions included</li>
              </ul>
            </AccordionItem>

            <AccordionItem
              id="timeline"
              title="2. Project Timeline"
              isOpen={openAccordionId === "timeline"}
              onToggle={() =>
                setOpenAccordionId(
                  openAccordionId === "timeline" ? null : "timeline"
                )
              }
            >
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li>Project initiation within 5 business days of agreement</li>
                <li>Initial point cloud processing: 5-7 business days</li>
                <li>BIM modeling: 10-15 business days based on complexity</li>
                <li>Review and revision period: 5 business days after delivery</li>
                <li>Final delivery upon approval and payment</li>
              </ul>
            </AccordionItem>

            <AccordionItem
              id="payment"
              title="3. Payment Terms"
              isOpen={openAccordionId === "payment"}
              onToggle={() =>
                setOpenAccordionId(
                  openAccordionId === "payment" ? null : "payment"
                )
              }
            >
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li>The payment schedule is divided into two main milestones:</li>
                <li>First Payment (50%) - Due upon the completion of laser scanning services.</li>
                <li>Final Payment (50%) - Due upon the delivery of all final deliverables.</li>
                <li>This straightforward two-part payment structure evenly splits the total project cost between the completion of scanning and the final deliverables.</li>
              </ul>
            </AccordionItem>

            <AccordionItem
              id="responsibilities"
              title="4. Client Responsibilities"
              isOpen={openAccordionId === "responsibilities"}
              onToggle={() =>
                setOpenAccordionId(
                  openAccordionId === "responsibilities" ? null : "responsibilities"
                )
              }
            >
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li>Provide site access and necessary permits</li>
                <li>Ensure areas are accessible and properly lit</li>
                <li>Designate project representative</li>
                <li>Review deliverables within agreed timeframes</li>
                <li>Provide feedback in writing</li>
                <li>Maintain confidentiality of proprietary methods</li>
              </ul>
            </AccordionItem>

            <AccordionItem
              id="ip-rights"
              title="5. Intellectual Property"
              isOpen={openAccordionId === "ip-rights"}
              onToggle={() =>
                setOpenAccordionId(
                  openAccordionId === "ip-rights" ? null : "ip-rights"
                )
              }
            >
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li>Point cloud data ownership transfers to client upon final payment</li>
                <li>BIM models become client property upon final payment</li>
                <li>Louis Amy AE Studio retains rights to methods and processes</li>
                <li>Portfolio usage rights retained by Louis Amy AE Studio</li>
                <li>No unauthorized reproduction or distribution</li>
              </ul>
            </AccordionItem>
          </div>

          <div className="mt-6 p-4 border-t border-gray-200">
            <label className="flex items-center space-x-2 mb-4">
              <input 
                type="checkbox" 
                className="form-checkbox h-5 w-5 text-[#F04E3E]" 
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />
              <span className="text-black">I accept the terms and conditions</span>
            </label>

            {accepted && (
              <div className="space-y-4">
                <div className="relative">
                  <div className="bg-[#f5f5f5] p-4 rounded-lg mb-4">
                    <h3 className="text-[#333333] font-bold mb-2">Verification Process:</h3>
                    <ol className="list-decimal pl-4 text-black space-y-2">
                      <li>Enter your email address below</li>
                      <li>Check your inbox for the verification code</li>
                      <li>Enter the code to authenticate your agreement</li>
                    </ol>
                  </div>
                  <div className="space-y-2">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={verificationSent}
                      className={`w-full p-2 border rounded focus:ring-2 focus:ring-[#F04E3E] text-[#333333] bg-white ${emailError ? 'border-red-500' : ''}`}
                    />
                    {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                    {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
                    {!verificationSent && (
                      <button 
                        onClick={handleSendVerification}
                        disabled={isSubmitting}
                        className={`w-full mt-2 bg-[#F04E3E] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Verification Code'}
                      </button>
                    )}
                  </div>
                </div>

                {verificationSent && (
                  <>
                    <div className="bg-[#f5f5f5] p-4 rounded-lg">
                      <p className="text-black mb-4">Check your email for the verification code and enter it below:</p>
                      <div className="flex space-x-2">
                        <input 
                          type="text" 
                          placeholder="Enter verification code" 
                          value={confirmationCode} 
                          onChange={(e) => setConfirmationCode(e.target.value)}
                          className="flex-1 p-2 border rounded focus:ring-2 focus:ring-[#F04E3E] text-[#333333] bg-white"
                        />
                        <button 
                          onClick={handleAcceptTerms}
                          className="bg-[#F04E3E] text-white px-4 py-2 rounded hover:bg-opacity-90"
                        >
                          Verify Code
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-[#fff4f2] rounded-lg">
                      <p className="text-[#333333] font-bold mb-2">THIS IS A LEGAL BINDING CONTRACT</p>
                      <p className="text-black text-sm mb-4">By entering the verification code and submitting, you:</p>
                      <ul className="list-disc pl-4 text-black text-sm mb-4">
                        <li>Acknowledge that you have read, understood, and agreed to all terms and conditions above</li>
                        <li>Authorize Louis Amy to proceed with the Proposed Services as outlined</li>
                        <li>Enter into a legally binding agreement with Louis Amy AE Studio</li>
                      </ul>
                      <p className="text-black text-sm font-bold">A copy of this signed proposal will be sent to your email for your records.</p>
                    </div>
                    <button 
                      onClick={handleAcceptTerms}
                      disabled={isSubmitting}
                      className="w-full bg-[#F04E3E] text-white p-2 rounded hover:bg-opacity-90 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Processing...' : 'Confirm & Submit'}
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};