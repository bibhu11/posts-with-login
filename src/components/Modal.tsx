import { useState, useEffect } from "react";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

export default function Modal({
  children,
  isOpen,
  onClose,
  className,
}: ModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(isOpen); // Keeps track of render state

  // Effect to handle modal open/close behavior
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true); // Ensures the modal mounts
      setTimeout(() => setIsVisible(true), 10); // Slight delay to allow mount before opacity transition
    } else {
      setIsVisible(false);
      setTimeout(() => setIsRendered(false), 700); // Wait for exit animation to complete before unmounting
    }
  }, [isOpen]);

  if (!isRendered) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`absolute inset-0  backdrop-blur-[2px] bg-black/30 `}
        onClick={onClose} // Close modal when clicking on backdrop
      />
      <div className={`relative z-10 ${className}`}>
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#131319] flex items-center justify-center">
          <button onClick={onClose}>
            <img src="/cross.svg" alt="Close" width={10} height={10} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
