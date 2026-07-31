"use client";

import { useMemo, useState } from "react";
import { Mail, MailOpen, Trash2, Phone, Building2 } from "lucide-react";

export type AdminMessage = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  serviceType: string;
  budget: string | null;
  message: string;
  createdAt: string;
  read: boolean;
};

export default function MessagesList({
  initialMessages,
}: {
  initialMessages: AdminMessage[];
}) {
  const [messages, setMessages] = useState(initialMessages);
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const [pendingIds, setPendingIds] = useState<Set<string>>(new Set());

  const visibleMessages = useMemo(
    () => (filter === "unread" ? messages.filter((m) => !m.read) : messages),
    [messages, filter]
  );

  const unreadCount = useMemo(() => messages.filter((m) => !m.read).length, [messages]);

  const setPending = (id: string, pending: boolean) => {
    setPendingIds((prev) => {
      const next = new Set(prev);
      if (pending) next.add(id);
      else next.delete(id);
      return next;
    });
  };

  const toggleRead = async (id: string, read: boolean) => {
    setPending(id, true);
    try {
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read }),
      });
      if (response.ok) {
        setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, read } : m)));
      }
    } finally {
      setPending(id, false);
    }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm("Delete this message? This cannot be undone.")) return;
    setPending(id, true);
    try {
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setMessages((prev) => prev.filter((m) => m.id !== id));
      }
    } finally {
      setPending(id, false);
    }
  };

  if (messages.length === 0) {
    return (
      <div className="bg-white border border-[#EDEDED] rounded-2xl p-12 text-center">
        <Mail className="w-12 h-12 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500">No messages yet.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            filter === "all"
              ? "bg-[#FF6B2C] text-white"
              : "bg-white border border-[#EDEDED] text-[#1A1A1A] hover:border-[#FF6B2C]/40"
          }`}
        >
          All ({messages.length})
        </button>
        <button
          onClick={() => setFilter("unread")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            filter === "unread"
              ? "bg-[#FF6B2C] text-white"
              : "bg-white border border-[#EDEDED] text-[#1A1A1A] hover:border-[#FF6B2C]/40"
          }`}
        >
          Unread ({unreadCount})
        </button>
      </div>

      <div className="space-y-4">
        {visibleMessages.map((msg) => {
          const isPending = pendingIds.has(msg.id);
          return (
            <div
              key={msg.id}
              className={`bg-white border rounded-2xl p-6 transition-all ${
                msg.read ? "border-[#EDEDED]" : "border-[#FF6B2C]/40 shadow-sm"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-[#1A1A1A]">{msg.name}</h3>
                    {!msg.read && (
                      <span className="bg-[#FF6B2C] text-white text-xs font-medium px-2 py-0.5 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  <a
                    href={`mailto:${msg.email}`}
                    className="text-sm text-[#FF6B2C] hover:underline"
                  >
                    {msg.email}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleRead(msg.id, !msg.read)}
                    disabled={isPending}
                    title={msg.read ? "Mark as unread" : "Mark as read"}
                    className="p-2 rounded-lg text-gray-500 hover:bg-[#EDEDED] hover:text-[#1A1A1A] transition-colors disabled:opacity-50"
                  >
                    {msg.read ? (
                      <MailOpen className="w-4 h-4" />
                    ) : (
                      <Mail className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={() => deleteMessage(msg.id)}
                    disabled={isPending}
                    title="Delete message"
                    className="p-2 rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors disabled:opacity-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                <span className="bg-[#EDEDED] text-[#1A1A1A] px-2 py-1 rounded text-xs font-medium">
                  {msg.serviceType}
                </span>
                {msg.budget && (
                  <span className="bg-[#EDEDED] text-[#1A1A1A] px-2 py-1 rounded text-xs font-medium">
                    {msg.budget}
                  </span>
                )}
                {msg.phone && (
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" />
                    {msg.phone}
                  </span>
                )}
                {msg.company && (
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5" />
                    {msg.company}
                  </span>
                )}
              </div>

              <p className="text-gray-600 mt-4 whitespace-pre-wrap">{msg.message}</p>

              <p className="text-xs text-gray-400 mt-4">
                {new Date(msg.createdAt).toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
