import { AdminHeader } from "@/components/AdminHeader"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-black flex flex-col">
            <AdminHeader />
            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}
