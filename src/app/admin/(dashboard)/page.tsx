import { prisma } from "@/lib/prisma";
import MessagesList from "@/components/admin/MessagesList";

export default async function AdminMessagesPage() {
  const messages = await prisma.contactInquiry.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1A1A1A]">Messages</h1>
        <p className="text-gray-500 mt-1">
          Inquiries submitted through the contact form.
        </p>
      </div>

      <MessagesList
        initialMessages={messages.map((m) => ({
          ...m,
          createdAt: m.createdAt.toISOString(),
        }))}
      />
    </div>
  );
}
