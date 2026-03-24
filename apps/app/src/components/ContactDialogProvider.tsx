"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import ContactDialog from "./ContactDialog";

type ContactDialogContextType = {
  openContactDialog: () => void;
  closeContactDialog: () => void;
  isOpen: boolean;
};

const ContactDialogContext = createContext<ContactDialogContextType | undefined>(
  undefined
);

export function useContactDialog() {
  const context = useContext(ContactDialogContext);
  if (!context) {
    throw new Error(
      "useContactDialog must be used within a ContactDialogProvider"
    );
  }
  return context;
}

type ContactDialogProviderProps = {
  children: React.ReactNode;
};

export function ContactDialogProvider({ children }: ContactDialogProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const openContactDialog = useCallback(() => {
    setIsOpen(true);
    setHasOpened(true);
  }, []);

  const closeContactDialog = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ContactDialogContext.Provider
      value={{ openContactDialog, closeContactDialog, isOpen }}
    >
      {children}
      {hasOpened && (
        <ContactDialog isOpen={isOpen} onClose={closeContactDialog} />
      )}
    </ContactDialogContext.Provider>
  );
}

export default ContactDialogProvider;
