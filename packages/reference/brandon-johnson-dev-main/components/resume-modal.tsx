"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { HiX } from "react-icons/hi";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { Button } from "./button";

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
  title: string;
  downloadUrl?: string;
  downloadLabel?: string;
}

export const DocumentModal = ({
  isOpen,
  onClose,
  content,
  title,
  downloadUrl,
  downloadLabel = "Download PDF",
}: DocumentModalProps) => {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal */}
        <div className="flex min-h-full items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                {title}
              </h2>
              <div className="flex items-center gap-3">
                {downloadUrl && (
                  <Button
                    variant="simple"
                    as="a"
                    href={downloadUrl}
                    download
                    className="text-sm"
                  >
                    {downloadLabel}
                  </Button>
                )}
                <button
                  onClick={onClose}
                  className="p-2 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  aria-label="Close modal"
                >
                  <HiX size={24} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="p-6 prose prose-neutral dark:prose-invert max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw, rehypeSanitize]}
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mt-8 mb-4 border-b border-neutral-200 dark:border-neutral-700 pb-2">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mt-6 mb-3">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc pl-6 space-y-2 mb-4 text-neutral-700 dark:text-neutral-300">
                        {children}
                      </ul>
                    ),
                    li: ({ children }) => (
                      <li className="leading-relaxed">{children}</li>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-neutral-800 dark:text-neutral-200">
                        {children}
                      </strong>
                    ),
                    em: ({ children }) => (
                      <em className="italic text-neutral-600 dark:text-neutral-400">
                        {children}
                      </em>
                    ),
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        className="text-blue-500 hover:text-blue-600 underline transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {children}
                      </a>
                    ),
                    hr: () => (
                      <hr className="border-neutral-200 dark:border-neutral-700 my-6" />
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-600 pl-4 italic text-neutral-600 dark:text-neutral-400 my-4">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
