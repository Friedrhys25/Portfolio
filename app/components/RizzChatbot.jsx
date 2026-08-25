"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Minus, Send, ShieldCheck } from "lucide-react";
import rizzLogo from "../assets/images/rizzlogoSvg.svg";

const starterPrompts = [
  "What projects has Rhys built?",
  "Summarize Rhys' experience.",
  "How can I contact Rhys?",
];

const initialMessages = [
  {
    id: "intro",
    role: "assistant",
    content: "Hi, I’m Rizz. Ask me about Rhys’ projects, skills, experience, or contact details.",
  },
];

const isMaintenanceMode = true;

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1" aria-hidden="true">
      {[0, 1, 2].map((index) => (
        <span
          key={index}
          className="h-1.5 w-1.5 rounded-full bg-current opacity-60 animate-rizz-dot"
          style={{ animationDelay: `${index * 120}ms` }}
        />
      ))}
    </span>
  );
}

function MessageBubble({ message, isTyping }) {
  const isAssistant = message.role === "assistant";

  return (
    <div className={`flex ${isAssistant ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[84%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
          isAssistant
            ? "rounded-bl-md border border-border bg-surface text-primary"
            : "rounded-br-md bg-primary text-background"
        }`}
      >
        {message.content}
        {isTyping && <span className="ml-1 inline-block h-4 w-1 animate-pulse rounded-full bg-accent align-[-2px]" />}
      </div>
    </div>
  );
}

export default function RizzChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [typingId, setTypingId] = useState(null);
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const canSend = input.trim().length > 0 && !isThinking && !typingId;

  const visibleMessages = useMemo(() => messages.slice(-10), [messages]);

  useEffect(() => {
    if (!isOpen) return;
    const timeout = setTimeout(() => inputRef.current?.focus(), 180);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isThinking]);

  function appendAssistantWithTyping(text) {
    const id = `assistant-${Date.now()}`;
    setTypingId(id);
    setMessages((current) => [...current, { id, role: "assistant", content: "" }]);

    let index = 0;
    const cleanText = text.trim();
    const interval = window.setInterval(() => {
      index += Math.max(1, Math.ceil(cleanText.length / 90));
      setMessages((current) =>
        current.map((message) =>
          message.id === id ? { ...message, content: cleanText.slice(0, index) } : message,
        ),
      );

      if (index >= cleanText.length) {
        window.clearInterval(interval);
        setTypingId(null);
      }
    }, 18);
  }

  async function sendMessage(nextMessage = input) {
    const trimmed = nextMessage.trim();
    if (!trimmed || isMaintenanceMode || isThinking || typingId) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsThinking(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          messages: messages.map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = await response.json();
      appendAssistantWithTyping(data.reply || data.error || "Rizz could not answer right now.");
    } catch (error) {
      appendAssistantWithTyping("Rizz is having connection trouble. Please try again in a moment.");
    } finally {
      setIsThinking(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage();
  }

  return (
    <div className="fixed bottom-5 right-5 z-[150] flex flex-col items-end sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            key="rizz-chat"
            initial={{ opacity: 0, transform: "translateY(18px) scale(0.96)" }}
            animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
            exit={{ opacity: 0, transform: "translateY(14px) scale(0.97)" }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="mb-4 flex h-[min(620px,calc(100vh-112px))] w-[calc(100vw-40px)] max-w-[390px] origin-bottom-right flex-col overflow-hidden rounded-[28px] border border-border/80 bg-background/95 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            aria-label="Rizz chatbot"
          >
            <header className="border-b border-border/70 bg-surface/80 px-4 py-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-background shadow-sm">
                    <Image src={rizzLogo} alt="Rizz logo" className="h-6 w-auto dark:invert dark:brightness-200" />
                    <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-surface bg-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h2 className="truncate text-sm font-semibold text-primary">Rizz</h2>
                      <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted">
                        <ShieldCheck size={11} />
                        guarded
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-muted">
                      {isMaintenanceMode ? "Temporarily unavailable" : isThinking ? "Thinking through Rhys.md" : typingId ? "Typing a response" : "Portfolio assistant"}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 text-muted transition-colors duration-150 hover:bg-surfaceHover hover:text-primary active:scale-95"
                  aria-label="Minimize Rizz"
                >
                  <Minus size={17} />
                </button>
              </div>
            </header>

            <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {visibleMessages.map((message) => (
                <MessageBubble key={message.id} message={message} isTyping={typingId === message.id} />
              ))}

              {isMaintenanceMode && (
                <div className="rounded-2xl bg-surface/70 p-4 text-sm leading-relaxed text-muted shadow-[0_12px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_14px_34px_rgba(0,0,0,0.22)]">
                  Chatbot Rizz is under maintenance. Rizz will be back once maintenance is complete. For now, please use the contact links below to reach Rhys directly.
                </div>
              )}

              {isThinking && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md border border-border bg-surface px-4 py-3 text-sm text-muted shadow-sm">
                    Rizz is thinking <TypingDots />
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-border/70 bg-surface/70 p-3">
              {!isMaintenanceMode && <div className="mb-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
                {starterPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => sendMessage(prompt)}
                    disabled={isThinking || Boolean(typingId)}
                    className="shrink-0 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted transition-colors duration-150 hover:bg-surfaceHover hover:text-primary active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {prompt}
                  </button>
                ))}
              </div>}

              <form onSubmit={handleSubmit} className="flex items-end gap-2">
                <label className="sr-only" htmlFor="rizz-message">
                  Message Rizz
                </label>
                <textarea
                  ref={inputRef}
                  id="rizz-message"
                  value={input}
                  disabled={isMaintenanceMode}
                  onChange={(event) => setInput(event.target.value.slice(0, 700))}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      sendMessage();
                    }
                  }}
                  placeholder={isMaintenanceMode ? "Chatbot unavailable during maintenance" : "Ask about Rhys..."}
                  rows={1}
                  className="max-h-28 min-h-11 flex-1 resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-muted focus:border-accent"
                />
                <button
                  type="submit"
                  disabled={!canSend}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-background transition-transform duration-150 hover:opacity-90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Send message"
                >
                  <Send size={17} />
                </button>
              </form>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        whileTap={{ scale: 0.96 }}
        className="group relative flex h-16 w-16 items-center justify-center rounded-3xl bg-primary text-background shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition-transform duration-150 hover:-translate-y-0.5"
        aria-label={isOpen ? "Close Rizz chatbot" : "Open Rizz chatbot"}
      >
        <span className="absolute -inset-1 rounded-[28px] bg-accent/20 opacity-0 blur-md transition-opacity duration-200 group-hover:opacity-100" />
        <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-background">
          {isOpen ? (
            <MessageCircle size={22} className="text-primary" />
          ) : (
            <Image src={rizzLogo} alt="" className="h-7 w-auto dark:invert dark:brightness-200" />
          )}
        </span>
      </motion.button>
    </div>
  );
}
